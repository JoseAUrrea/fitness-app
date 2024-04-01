import Reccomendations from "./components/ai/Reccomendations";
import AddWorkout from "./components/workouts/AddWorkout";
import AddNutrition from "./components/nutrition/AddNutrition";
import { isAuthenticated } from "./utils/amplifyServerUtils";



export default async function Home() {

    const isSignedIn = await isAuthenticated();
    if(!isSignedIn) {
        return(
            <div className="flex justify-center items-center h-screen ">
            <div className="text-center">
                <h1 className="pb-4 text-3xl">Welcome to your AI Personal Fitness Trainer</h1>
                <div className="flex justify-center">
                <div className="rounded  px-6 sm:w-[500px] w-[300px] text-center">
                    <p className="pb-4">You'll be able to track your own information such as nutrition, workouts, and personal attributes.</p>
                    <p className="pb-4">This information will be used to give you recommendations tailored specifically to you.</p>
                    <p className="pb-4">Log in to get started!</p>
                </div>
            </div>
            </div>
        </div>
        )
    }

  return (

        <>
            <div className="flex-col items-center">
                <div className="mx-6 my-4 pt-2">
                    <h1 className="text-[25px] pb-4">Home</h1>
                    <div className="flex-col flex justify-between">        
                        <Reccomendations />
                        <div className="flex flex-col lg:flex-row lg:space-x-12 lg:justify-center items-center">
                            <AddNutrition />
                            <AddWorkout />
                        </div>
                    </div>
                </div>
            </div>
        </>

  );
}
