import Reccomendations from "./components/ai/Reccomendations";
import AddWorkout from "./components/workouts/AddWorkout";
import AddNutrition from "./components/nutrition/AddNutrition";



export default async function Home() {


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
