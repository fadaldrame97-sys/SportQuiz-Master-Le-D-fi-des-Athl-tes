export default function ResultPage({ score, total, onRestart, onBackHome }) {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center gap-8 p-4 bg-[#FFF9FE] bg-[url('/celebration.png')] bg-no-repeat bg-top bg-contain">
      <img
        src="/profile-pic.png"
        alt="profile"
        className="h-52 w-52 rounded-full object-cover"
      />

      <div className="flex flex-col items-center">
        <h3>your score</h3>
        <p className="font-bold text-xl text-[#6971FF]">
          {score}/{total}
        </p>
      </div>

      <div className="flex flex-col gap-2 items-center">
        <h3 className="font-bold text-xl text-[#6971FF]">Congratulations</h3>
        <p className="text-center">Great job, Kenzy! you have done well</p>
      </div>

      <button
        onClick={onRestart}
        className="self-center w-full h-12 bg-gradient-to-r from-[#518CFE] to-[#305498] rounded-2xl text-white font-bold cursor-pointer"
      >
        Restart
      </button>

      <button
        onClick={onBackHome}
        className="self-center w-full h-12 bg-gradient-to-r from-[#6971FF] to-[#3F4499] rounded-2xl text-white font-bold cursor-pointer"
      >
        Back to Home
      </button>
    </div>
  );
}