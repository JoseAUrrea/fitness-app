"use client";
import React from "react"
import { FaRegTrashAlt } from "react-icons/fa";

const Workout = ({ workout, onDelete, isSignedIn }: {workout: any, onDelete: (id: string) => void, isSignedIn: boolean}) => {

    return(
        <div className="border bg-gray-100 w-full p-5 rounded flex-col">
            <div className="flex-col items-center space-y-2">
                <div>{workout.date}</div>
                <div>Exercise: {workout.exerciseType}</div>
                <div>Duration: {workout.duration} mins</div>
                <div>Calories Burned: {workout.caloriesBurned}</div>
                <div>Description: {workout.description}</div>
            </div>
            {isSignedIn ? (
                <button
                    className="text-red-500 cursor-pointer rounded bg-gray-200 p-2 mt-2"
                    onClick={() => onDelete(workout.id)}
                    disabled={!isSignedIn}
                >
                    <FaRegTrashAlt />
                </button>
            ) : null }
        </div>
    )
}

export default Workout;