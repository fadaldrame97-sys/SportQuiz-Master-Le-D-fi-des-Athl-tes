import React from "react";

export function HomePage() {
    const categories = [
        { title: "Sport", icon: "⚽" },
        { title: "Science", icon: "🧪" },
    ];

    const recentQuizzes = [
        { title: "Sport", questions: 10, icon: "⚽" },
        { title: "Geography", questions: 10, icon: "🌍" },
    ];

    return (
        <>
        <div className="w-[245px] rounded-[22px] bg-green p-0 shadow-sm overflow-hidden">


            <div className="bg-[#6268f3] rounded-[18px] h-[134px] px-5 pt-4 text-white relative">
                <div className="flex items-center justify-between text-[11px] font-semibold">
                    <span>9:41</span>
                    <div className="flex items-center gap-1.5">
                        <div className="w-3 h-2 border border-black rounded-[2px]"></div>
                        <div className="w-4 h-[6px] bg-black rounded-sm"></div>
                    </div>
                </div>

                <div className="flex flex-col items-center mt-2">
                    <img
                        src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80"
                        alt="profile"
                        className="w-[58px] h-[58px] rounded-full object-cover border border-white/20"
                    />
                    <h1 className="mt-2 text-[12px] font-bold leading-none">hi, Kenzy</h1>
                    <p className="mt-1 text-[10px] text-white/90 leading-none">ready to play</p>
                </div>
            </div>


            <div className="px-3.5 pt-3 pb-4">

                <h2 className="text-[13px] font-bold text-black mb-3">Categories</h2>

                <div className="grid grid-cols-2 gap-7 mb-4">
                    <div className="bg-[#d9d8f7] rounded-[7px] w-[92px] h-[86px] px-3 pt-2">
                        <p className="text-[11px] font-bold text-black">Sport</p>
                        <div className="flex items-center justify-center mt-3">
                            <span className="text-[38px]">⚽</span>
                        </div>
                    </div>

                    <div className="bg-[#d9d8f7] rounded-[7px] w-[92px] h-[86px] px-3 pt-2">
                        <p className="text-[11px] font-bold text-black">Science</p>
                        <div className="flex items-center justify-center mt-3">
                            <span className="text-[38px]">⚗️</span>
                        </div>
                    </div>
                </div>


                <h2 className="text-[13px] font-bold text-black mb-3">Recent</h2>

                <div className="space-y-3">
                    <div className="bg-[#d9d8f7] rounded-[9px] h-[45px] flex items-center px-3">
                        <div
                            className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-[18px] mr-3">
                            ⚽
                        </div>
                        <div>
                            <p className="text-[11px] font-bold leading-none text-black">Sport</p>
                            <p className="text-[9px] text-black/60 mt-1">10 questions</p>
                        </div>
                    </div>

                    <div className="bg-[#d9d8f7] rounded-[9px] h-[45px] flex items-center px-3">
                        <div
                            className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-[18px] mr-3">
                            🌍
                        </div>
                        <div>
                            <p className="text-[11px] font-bold leading-none text-black">Geography</p>
                            <p className="text-[9px] text-black/60 mt-1">10 questions</p>
                        </div>
                    </div>

                    <div className="bg-[#d9d8f7] rounded-[9px] h-[45px] flex items-center px-3">
                        <div
                            className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-[18px] mr-3">
                            🎮
                        </div>
                        <div>
                            <p className="text-[11px] font-bold leading-none text-black">Video games</p>
                            <p className="text-[9px] text-black/60 mt-1">10 questions</p>
                        </div>
                    </div>
                </div>


                <div className="flex justify-center mt-4">
                    <button
                        className="w-[148px] h-[28px] rounded-full bg-[#5669d8] text-white text-[11px] font-bold shadow-[0_4px_8px_rgba(0,0,0,0.25)]">
                        Start Quiz
                    </button>
                </div>
            </div>
        </div>
        </>
    )
}