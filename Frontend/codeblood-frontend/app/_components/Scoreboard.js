"use client";
import { useEffect, useState } from "react";
import ScoreComp from "./ScoreComp";

function Scoreboard() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchScores = async () => {
      try {
        const response = await fetch("http://backend:8000/api/player");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const jsonData = await response.json();
        console.log(jsonData);
        setData(jsonData);
      } catch (error) {
        console.error("Error fetching scores:", error);
      }
    };

    fetchScores();
  }, []);

  return (
    <table className="min-w-full bg-gray-800 text-white">
      <thead>
        <tr>
          <th className="py-2 px-4 border-b">Rank</th>
          <th className="py-2 px-4 border-b">Player</th>
          <th className="py-2 px-4 border-b">Score</th>
        </tr>
      </thead>
      <tbody>
        {data.map((player, index) => (
          <ScoreComp
            key={player.id || index}
            num={index + 1}
            name={player.player_name}
            score={player.high_score}
          />
        ))}
      </tbody>
    </table>
  );
}

export default Scoreboard;
