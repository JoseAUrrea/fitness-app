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
    // console.log("data", data.listNutritions.items);
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