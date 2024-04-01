import { cookieBasedClient, getUser } from "@/app/utils/amplifyServerUtils";

import * as queries from "@/graphql/queries";
import { deleteFitness } from "@/app/actions/actions";


const DisplayWorkouts = async () => {
    
    const user = await getUser();
    if (!user) {
        // redirect("/login");
        return
    }


    const { data, errors } = await cookieBasedClient.graphql({
        query: queries.listFitnesses,
        variables: { filter: { userID: { eq: user.userId } } },
        
    });

    if(data.listFitnesses.items.length === 0) {
        return (
            <div className="mt-6 flex-col items-center">
                <h1 className="mt-6">Workout & Fitness</h1>
                <hr />
                <p className="my-6 text-gray-600">No workouts recorded yet</p>
                <p className="text-[15px] text-gray-600">Enter workout and fitness on the home page</p>
            </div>
        )
    }

    return (
        <>
            <h1 className="mt-6">Workout & Fitness</h1>
            <hr />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {data.listFitnesses.items.map((fitness: any) => (
                <div key={fitness.id} className="rounded border border-slate-400 bg-slate-300 p-4">
                    <h2 className="font-semibold">{fitness.date}</h2>
                    <p>Exercise: {fitness.exerciseType}</p>
                    <p>Duration: {fitness.duration}</p>
                    <p>Calories Burned: {fitness.caloriesBurned}</p>
                    <p>Description: {fitness.description}</p>
                </div>
                ))}
            </div>
        </>

    )
}

export default DisplayWorkouts;