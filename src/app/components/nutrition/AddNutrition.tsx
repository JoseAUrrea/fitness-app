import { createNutrition } from '@/app/actions/actions';



const AddNutrition = () => {


    return (
        <div>
            <div className="w-[400px] my-6 bg-slate-400 p-8 rounded-md">
            <h1 className="text-[20px] pb-2">Just had a meal?</h1>
            <h2 className="text-[15px] pb-4"> Add your nutrition here</h2>
            <hr></hr>
            <form action={createNutrition}className="flex flex-col space-y-1 pt-4">
                <label htmlFor="calories">Calories</label>
                <input type="text" className="text-black p-1" id="calories" name="calories" placeholder="round to the nearest whole number"/>
                <label htmlFor="macronutrients">Macronutrients</label>
                <input type="text" className="text-black p-1" id="macronutrients" name="macronutrients" placeholder="carbs, protien, etc" />
                <label htmlFor="micronutrients">Micronutrients</label>
                <input type="text" className="text-black p-1" id="micronutrients" name="micronutrients" placeholder="vitamins, etc"/>
                <label htmlFor="description">Description</label>
                <textarea name="description" id="description" className="text-black p-1" placeholder="describe your meal"/>
                <button className="bg-blue-500 text-white rounded-md p-2 mt-4 hover:bg-blue-700">Add Nutrition</button>
            </form>
        </div>
        </div>
    )
}

export default AddNutrition;