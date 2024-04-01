// import TopBar from "../components/TopBar";
// import DisplayNutrition from "../components/nutrition/DisplayNutrition";
// import DisplayWorkouts from "../components/workouts/DisplayWorkouts";

// const History = () => {
//     return (
//         <div className="my-6">
//             <div className="ml-6">
//                 <h1 className="text-[25px] mt-2 pb-4">History</h1>
//                 <p className="pb-4">View your nutritional and fitness history.</p>
//             </div>
//             <hr></hr>
//             <div className="flex flex-col justify-center items-center">
//             <div className="flex-col justify-center">
//                 <div className="flex flex-col">
//                     <DisplayWorkouts />
//                 </div>
//                 <hr className="text-black my-6"/>
//                 <div className="flex flex-col">
//                     <DisplayNutrition />
//                 </div>
                
//             </div>
//         </div>
//         </div>
//     )
// }

// export default History;

import Workout from "../components/workouts/Workout";
import { cookieBasedClient, getUser, isAuthenticated } from "../utils/amplifyServerUtils";
import { deleteFitness } from "../actions/actions";
import * as queries from "@/graphql/queries";

export default async function WorkoutHistory() {
    const user = await getUser();
    const { data, errors } = await cookieBasedClient.graphql({
        query: queries.listFitnesses,
        variables: { filter: { userID: { eq: user?.userId } } },
    });

    

    const signedIn = await isAuthenticated();

    if (data.listFitnesses.items.length === 0 ) {
        return (
            <div className="mt-6 flex-col items-center ml-6">
                <h1 className="mt-6 text-[25px]">Workout & Fitness</h1>
                <hr />
                <p className="my-6 text-gray-600">No workouts recorded yet</p>
                <p className="text-[15px] text-gray-600">Enter workout and fitness on the home page</p>
            </div>
        );
    }

    return (
        <main className="flex flex-col items-center mt-10">
            <h1 className="text-[25px] mb-4">Workout & Fitness</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {data.listFitnesses.items.map((fitness: any, idx) => (
                    <Workout workout={fitness} key={idx} onDelete={deleteFitness} isSignedIn={signedIn} />
                ))}
            </div>
        </main>
    );
}
