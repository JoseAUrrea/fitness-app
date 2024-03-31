import TopBar from "../components/TopBar";
import DisplayNutrition from "../components/nutrition/DisplayNutrition";
import DisplayWorkouts from "../components/workouts/DisplayWorkouts";

const History = () => {
    return (
        <div className="my-6">
            <div className="ml-6">
                <h1 className="text-[25px] mt-2 pb-4">History</h1>
                <p className="pb-4">View your nutritional and fitness history.</p>
            </div>
            <hr></hr>
            <div className="flex flex-col justify-center items-center">
            <div className="flex-col justify-center">
                <div className="flex flex-col">
                    <DisplayWorkouts />
                </div>
                <hr className="text-black my-6"/>
                <div className="flex flex-col">
                    <DisplayNutrition />
                </div>
                
            </div>
        </div>
        </div>
    )
}

export default History;