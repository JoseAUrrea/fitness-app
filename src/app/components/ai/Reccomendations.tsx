"use client";

import { useChat } from "ai/react";




const Reccomendations = () => {
    const {messages, input, handleInputChange, handleSubmit } = useChat();

    return (
        <>
            <h2 className="text-[20px] pb-1">AI Recomendations</h2>
                <p className="">Personalized recomendations for nutrition and fitness based on your previous workouts, nutrition, and personal attributes</p>
                <span className="text-center pt-6">Enter additional information and press enter to generate new recomendations</span>
            <div className="flex flex-col justify-center items-center w-full max-w-md py-10 mx-auto stretch">
                {messages.map(m => (
                    <div key={m.id} className="whitespace-pre-wrap">
                        {m.role === 'user' ? 'You: ' : 'AI: '}
                        {m.content}
                    </div>
                ))}

                <form onSubmit={handleSubmit} className="flex flex-col justify-center items-center">
                    <input
                    className="sm:w-[500px] w-[300px] max-w-md p-2 mb-8 border border-gray-300 rounded shadow-xl"
                    value={input}
                    placeholder="Add additional information..."
                    onChange={handleInputChange}
                    />
                    <button type="submit" className="text-center bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded">Generate</button>
                </form>
            </div>
        </>
    );
}

export default Reccomendations;