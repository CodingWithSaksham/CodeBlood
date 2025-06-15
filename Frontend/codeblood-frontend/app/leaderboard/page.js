"use client";
import Scoreboard from "../_components/Scoreboard";

function Leaderboard() {
  return (
    <div>
      <div className="bg-black text-white font-sans py-12 pt-36 pb-36">
        <h2 className="text-4xl font-bold text-center mb-6">Leaderboard</h2>
        <p className="text-lg text-gray-400 text-center mb-12">
          Check out the top players and their scores.
        </p>
        <div className="flex justify-center">
          <Scoreboard />
        </div>
      </div>
      <div className="bg-red-950 text-white font-sans py-12 pt-36 pb-36">
        <h2 className="text-4xl font-bold text-center mb-6">
          Global Leaderboard
        </h2>
        <p className="text-lg text-gray-400 text-center mb-12">
          Compete for the top spot and win in the least possible time.
        </p>
        <div className="flex justify-center">
          <button className="px-16 bg-red-600 text-white rounded hover:bg-red-700 py-2 text-center text-lg">
            Start Playing
          </button>
        </div>
      </div>
    </div>
  );
}

export default Leaderboard;
