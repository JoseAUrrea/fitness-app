"use client";
import { FaRegTrashAlt } from "react-icons/fa";
import React from "react"

const Nutrition = ({ nutrition, onDelete, isSignedIn }: {nutrition: any, onDelete: (id: string) => void, isSignedIn: boolean}) => {

    return(
        <div className="border bg-gray-100 w-full p-5 rounded flex-col">
            <div className="flex-col items-center space-y-2">
                <div>{nutrition.date}</div>
                <div>Calories: {nutrition.calories}</div>
                <div>Macronutrients: {nutrition.macronutrients}</div>
                <div>Micronutrients: {nutrition.micronutrients}</div>
                <div>Description: {nutrition.description}</div>
            </div>
            {isSignedIn ? (
                <button
                    className="text-red-500 cursor-pointer rounded bg-gray-200 p-2 mt-2"
                    onClick={() => onDelete(nutrition.id)}
                    disabled={!isSignedIn}
                >
                    <FaRegTrashAlt />
                </button>
            ) : null }
        </div>
    )
}

export default Nutrition;