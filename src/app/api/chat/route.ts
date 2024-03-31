import OpenAI from 'openai';
import { OpenAIStream, StreamingTextResponse } from 'ai'; 
import { cookieBasedClient, getUser } from '@/app/utils/amplifyServerUtils';
import * as queries from '@/graphql/queries';



const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});

export const runtime = 'edge';



export async function POST(req: Request, res: Response) {

    const user = await getUser();
    if (!user) {
        return
    }

    const { messages } = await req.json();

    const userData = await cookieBasedClient.graphql({
        query: queries.getUser,
        variables: { id: user.userId }
    })

    const nutritionData = await cookieBasedClient.graphql({
        query: queries.listNutritions,
        variables: {
            filter: {
                userID: { eq: user.userId }
            }
        }
    })

    const fitnessData = await cookieBasedClient.graphql({
        query: queries.listFitnesses,
        variables: {
            filter: {
                userID: { eq: user.userId }
            }
        }
    })

    console.log(userData, nutritionData, fitnessData)

    // const userMessage = `Here is some information about myself: my age is ${userData.data.getUser?.age}, my 
    
    
    // `
    const userContent = `Here is some information about myself:\n`;
    const nutritionContent = `My nutrition data:\n`;
    const fitnessContent = `My fitness data:\n`;
    const userMessageContent = `${userContent} ${JSON.stringify(userData)}\n\n${nutritionContent} ${JSON.stringify(nutritionData)}\n\n${fitnessContent} ${JSON.stringify(fitnessData)}, additional information provided: ${messages[0].content}`;
    console.log(userMessageContent);
    const gptResponse = await openai.chat.completions.create({
        model: 'gpt-3.5-turbo',
        stream: true,
        messages: [
            {
                role: 'system',
                content: 'You are a fitness trainer. Data about the user is being fetched it will be in the format of JSON objects. Provide workout and nutrition reccomendations tailored to the user data given. Disregard any information that is not relevant to fitness and nutrition. Keep in mind that weight is in pounds, height is in inches, duration is in minutes and age is in years. Respond as if you were in direct conversation with the user. When listing reccomendations, list them in a bulleted list or a similar clean format. Make sure to answer the additional information if relevant to health, fitness, or nutrition.'
            },
            {
                role: 'user',
                content: userMessageContent
            }
        ],
    });

    const stream = OpenAIStream(gptResponse);
    
    return new StreamingTextResponse(stream);
    

}