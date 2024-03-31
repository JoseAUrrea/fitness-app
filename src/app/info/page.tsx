"use client"
import TopBar from "../components/TopBar";
import EditInfo from "../components/attributes/EditInfo";

const Info = () => {
    return (
            <div className="mb-10 mt-6">
                <div className="ml-6">
                    <h1 className="text-[25px] mt-2 pb-4">Information</h1>
                    <p className="pb-4">To get personalized recomendations, provide some context about yourself!</p>
                </div>
                    <hr></hr>
                <div className="flex-col flex justify-center items-center">
                    <div className="items-center">
                        <EditInfo />

                    </div>
                </div>
            </div>
    )
}

export default Info;