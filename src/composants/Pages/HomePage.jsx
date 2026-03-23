import { useState } from "react";
import QuizSetupForm from "../Setup/QuizSetupForm.jsx";
import Loader from "../Setup/Loader.jsx"

export default function Home({ onStartQuiz, error, isLoading }) {
    const [showModal, setShowModal] = useState(false);

    return (
        <div className="min-h-screen flex flex-col gap-4 p-4 bg-[#FFF9FE]">
            <div className="flex flex-col gap-4 justify-center items-center rounded-xl bg-[#6971FF] py-2">
                <img
                    src="/profile-pic.png"
                    alt="profile"
                    className="h-16 w-16 rounded-full object-cover"
                />
                <div className="flex flex-col items-center text-white">
                    <h2 className="font-bold">Hi, Kenzy</h2>
                    <p>ready to play !!!</p>
                </div>
            </div>

            <div className="flex flex-col gap-2">
                <h2 className="font-bold">Categories</h2>
                <div className="grid grid-cols-2 gap-4">
                    <div className="flex flex-col justify-center items-center rounded-xl gap-2 p-2 bg-[#DDDEFF] cursor-pointer">
                        <p className="font-bold">Sport</p>
                        <img src="/football-icon.png" alt="football" className="w-24 h-24" />
                    </div>

                    <div className="flex flex-col justify-center items-center rounded-xl gap-2 p-2 bg-[#DDDEFF] cursor-pointer">
                        <p className="font-bold">Science</p>
                        <img src="/science-icon.png" alt="science" className="w-24 h-24" />
                    </div>
                </div>
            </div>

            <div className="flex flex-col gap-2">
                <h2 className="font-bold">Recent</h2>

                <div className="flex justify-start items-center gap-4 p-2 h-24 bg-[#DDDEFF] rounded-xl">
                    <img src="/football-icon.png" alt="sport" className="h-full" />
                    <div>
                        <p className="font-bold">Sport</p>
                        <p>10 questions</p>
                    </div>
                </div>

                <div className="flex justify-start items-center gap-4 p-2 h-24 bg-[#DDDEFF] rounded-xl">
                    <img src="/history-icon.png" alt="geography" className="h-full" />
                    <div>
                        <p className="font-bold">Geography</p>
                        <p>10 questions</p>
                    </div>
                </div>

                <div className="flex justify-start items-center gap-4 p-2 h-24 bg-[#DDDEFF] rounded-xl">
                    <img src="/videogames-icon.png" alt="video games" className="h-full" />
                    <div>
                        <p className="font-bold">Video games</p>
                        <p>10 questions</p>
                    </div>
                </div>
            </div>

            <button
                onClick={() => setShowModal(true)}
                className="self-center w-48 h-12 bg-gradient-to-r from-[#6971FF] to-[#3F4499] rounded-2xl text-white font-bold cursor-pointer"
            >
                Start Quiz
            </button>

            {error && (
                <p className="text-red-500 text-center font-medium">{error}</p>
            )}

            {showModal && (
                <div className="fixed inset-0 bg-black/40 flex items-center justify-center px-4">
                    <div className="bg-white rounded-2xl p-6 w-full max-w-sm shadow-xl">
                        <div className="flex justify-between items-center mb-4">
                            <h2 className="text-lg font-bold">Quiz Settings</h2>
                            <button
                                onClick={() => setShowModal(false)}
                                className="text-gray-500 text-xl"
                                disabled={isLoading}
                            >
                                ×
                            </button>
                        </div>

                        {isLoading ? (
                            <Loader />
                        ) : (
                            <QuizSetupForm
                                onStart={async (values) => {
                                    const success = await onStartQuiz(values);
                                    if (success) {
                                        setShowModal(false);
                                    }
                                }}
                            />
                        )}

                        {error && <p className="mt-3 text-red-500 text-sm">{error}</p>}
                    </div>
                </div>
            )}
        </div>
    );
}