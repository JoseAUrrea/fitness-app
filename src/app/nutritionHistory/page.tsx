import Nutrition from "@/app/components/nutrition/Nutrition";
import { cookieBasedClient, getUser, isAuthenticated } from "../utils/amplifyServerUtils";
import { deleteNutrition } from "../actions/actions";
import * as queries from "@/graphql/queries";

export default async function NutritionHistory() {
    const user = await getUser();
    const { data, errors } = await cookieBasedClient.graphql({
        query: queries.listNutritions,
        variables: { filter: { userID: { eq: user?.userId } } },
    });

    

    const signedIn = await isAuthenticated();

    if (data.listNutritions.items.length === 0 ) {
        return (
            <div className="mt-6 flex-col items-center ml-6">
                <h1 className="mt-6 text-[25px]">Nutrition History</h1>
                <hr />
                <p className="my-6 text-gray-600">No nutrition recorded yet</p>
                <p className="text-[15px] text-gray-600">Enter nutrition on the home page</p>
            </div>
        );
    }

    return (
        <main className="flex flex-col items-center mt-10">
            <h1 className="text-[25px] mb-4">Nutrition History</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {data.listNutritions.items.map((nutrition: any, idx) => (
                    <Nutrition nutrition={nutrition} key={idx} onDelete={deleteNutrition} isSignedIn={signedIn} />
                ))}
            </div>
        </main>
    );
}
