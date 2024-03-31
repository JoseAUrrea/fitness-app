import { createWorkout } from "@/app/actions/actions";


const AddWorkout = () => {
    return (
        <div className="w-[400px] my-6 bg-slate-400 p-8 rounded-md">
            <h1 className="text-[20px] pb-2">Did you workout today?</h1>
            <h2 className="text-[15px] pb-4"> Add your workout here</h2>
            <hr></hr>
            <form action={createWorkout} className="flex flex-col space-y-1 pt-4">
                <label htmlFor="exerciseType">Exercise</label>
                <input type="text" className="text-black p-1" id="exerciseType" name="exerciseType" placeholder="cardio, weight, etc"/>
                <label htmlFor="duration">Duration (mins) </label>
                <input type="text" className="text-black p-1" id="duration" name="duration" />
                <label htmlFor="caloriesBurned">Calories Burned</label>
                <input type="text" className="text-black p-1" id="caloriesBurned" name="caloriesBurned" />
                <label htmlFor="description">Description</label>
                <textarea name="description" id="description" className="text-black p-1" placeholder="describe your workout"/>

                <button className="bg-blue-500 text-white rounded-md p-2 mt-4 hover:bg-blue-700">Add Workout</button>
            </form>
        </div>
    )
}

export default AddWorkout;
