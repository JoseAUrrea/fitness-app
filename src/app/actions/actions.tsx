"use server"
import * as mutations from "@/graphql/mutations"
import * as queries from "@/graphql/queries"
import { redirect } from "next/navigation"



import { cookieBasedClient, getUser } from "../utils/amplifyServerUtils"


//adding nutrition
export async function createNutrition(formData: FormData){
    console.log("createNutrition")
    const user = await getUser();
    if (!user){
        console.log("No user")
        return redirect("/login")
    }
    const caloriesValue = formData.get('calories');
    const calories = caloriesValue ? parseInt(caloriesValue.toString()) : 0;
    const currentDate = new Date();
    
    // Format the date as YYYY-MM-DD
    const formattedDate = currentDate.toISOString().split('T')[0];
    console.log("Formatted Date:", formattedDate); // Log the formatted date value
    const { data } = await cookieBasedClient.graphql({
        query: mutations.createNutrition,
        variables: {
            input: {
                calories,
                macronutrients: formData.get('macronutrients')?.toString() ?? '',
                micronutrients: formData.get('micronutrients')?.toString() ?? '',
                description: formData.get('description')?.toString() ?? '',
                userID: user?.userId ?? '', 
                date: formattedDate
            }
        }
    });
    console.log("create nutrition", data);
    redirect("/history")
}


//adding workouts
export async function createWorkout(formData: FormData){
    console.log("createWorkout")
    const user = await getUser();
    if (!user){
        console.log("No user")
        return redirect("/login")
    }
    
    const currentDate = new Date();
    
    // Format the date as YYYY-MM-DD
    const formattedDate = currentDate.toISOString().split('T')[0];
    console.log("Formatted Date:", formattedDate); // Log the formatted date value

    const { data } = await cookieBasedClient.graphql({
        query: mutations.createFitness,
        variables: {
            input: {
                exerciseType: formData.get('exerciseType')?.toString() ?? '',
                caloriesBurned: parseInt(formData.get('caloriesBurned')?.toString() ?? '0'),
                duration: parseInt(formData.get('duration')?.toString() ?? '0'),
                description: formData.get('description')?.toString() ?? '',
                userID: user?.userId ?? '', 
                date: formattedDate
            }
        }
    });
    console.log("create workout", data);
    redirect("/history")
}

//edit user attributes
enum Gender {
    MALE = 'MALE',
    FEMALE = 'FEMALE',
}
export async function editInfo (formData: FormData){
    console.log("editInfo")
    const user = await getUser();
    if (!user){
        console.log("No user")
        return redirect("/login")
    }

    const gender: Gender | null = formData.get('gender') === 'MALE' ? Gender.MALE : formData.get('gender') === 'FEMALE' ? Gender.FEMALE : null;

    const { data } = await cookieBasedClient.graphql({
        query: mutations.updateUser,
        variables: {
            input: {
                id: user.userId,
                age: parseInt(formData.get('age')?.toString() ?? '0'),
                weight: parseInt(formData.get('weight')?.toString() ?? '0'),
                height: parseInt(formData.get('height')?.toString() ?? '0'),
                goals: formData.get('goals')?.toString() ?? '',
                gender: gender,
            }
        }
    });
    console.log("edit info", data);
    redirect("/info")
}

//get current user attributes
export async function getInfo(){
    const user = await getUser();
    if (!user){
        console.log("No user")
        return redirect("/login")
    }
    const { data } = await cookieBasedClient.graphql({
        query: queries.getUser,
        variables: {
            id: user.userId
        }
    });
    console.log("get info", data);
    return data.getUser
}


export async function getData() {
    try {
        const user = await getUser();
        if (!user) {
            console.log("No user");
            return redirect("/login");
        }

        // Query for user info
        const { data: userData } = await cookieBasedClient.graphql({
            query: queries.getUser,
            variables: { id: user.userId }
        });

        // Query for nutrition data
        const { data: nutritionData } = await cookieBasedClient.graphql({
            query: queries.listNutritions,
            variables: {
                filter: {
                    userID: { eq: user.userId }
                }
            }
        });

        // Query for fitness data
        const { data: fitnessData } = await cookieBasedClient.graphql({
            query: queries.listFitnesses,
            variables: {
                filter: {
                    userID: { eq: user.userId }
                }
            }
        });

        // Format and return the combined data
        return {
            user: userData?.getUser,
            nutrition: nutritionData?.listNutritions?.items,
            fitness: fitnessData?.listFitnesses?.items
        };
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}

//delete fitness
export async function deleteFitness(fitnessId: string) {
    try {
        const { data } = await cookieBasedClient.graphql({
            query: mutations.deleteFitness,
            variables: {
                input: {
                    id: fitnessId
                }
            }
        });

        console.log("Fitness deleted:", data);
        // Optionally, you can add logic to handle success or error cases here
    } catch (error) {
        console.error("Error deleting fitness:", error);
    }
}
