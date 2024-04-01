import { cookieBasedClient, getUser } from "@/app/utils/amplifyServerUtils";

import * as queries from "@/graphql/queries";
import { redirect } from "next/navigation";




const  DisplayNutrition = async () => {

    const user = await getUser();
    if (!user) {
        // redirect("/login");
        return
    }
    const { data, errors } = await cookieBasedClient.graphql({
        query: queries.listNutritions,
        variables: { filter: { userID: { eq: user.userId } } },
    });
    
    if(data.listNutritions.items.length === 0) {
        return (
            <div className="mt-6 flex-col items-center">
                <h1 className="mt-6">Nutrition</h1>
                <hr />
                <p className="my-6 text-gray-600">No nutritional information recorded yet</p>
                <p className="text-[15px] text-gray-600">Enter nutrition on the home page</p>
            </div>
        )
    }

    return (
        <>
            <h1>Nutrition</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {data.listNutritions.items.map((nutrition: any) => (
                <div key={nutrition.id} className="rounded border border-slate-400 bg-slate-300 p-4">
                    <h2 className="font-semibold">{nutrition.date}</h2>
                    <p>Calories: {nutrition.calories}</p>
                    <p>Macronutrients: {nutrition.macronutrients}</p>
                    <p>Micronutrients: {nutrition.micronutrients}</p>
                    <p>Description: {nutrition.description}</p>
                </div>
                ))}
            </div>
        </>

    );
}

export default DisplayNutrition;