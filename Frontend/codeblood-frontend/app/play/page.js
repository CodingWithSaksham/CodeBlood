"use client";
import axios from "axios";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

function Play() {
  const [name, setName] = useState("");
  const router = useRouter();

  const handleClick = async (e) => {
    e.preventDefault();

    if (name.trim() === "") {
      alert("Please enter a valid name.");
      return;
    }

    try {
      const playerRes = await axios.post("http://localhost:8000/api/player/", {
        player_name: name,
      });

      const playerId = playerRes.data.player_id;
      localStorage.setItem("playerId", playerId);
      localStorage.setItem("playerName", name);

      await axios.post("http://localhost:8000/api/lobbies/", {
        host: playerId,
      });

      router.push(`/play/${playerId}`);
    } catch (err) {
      console.error("Error:", err);
      alert("Something went wrong. Try again.");
    }
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col text-center pt-14">
      <div className="bg-black text-white font-sans py-12 pt-36 pb-36">
        <h2 className="text-4xl font-bold text-center mb-6">
          Welcome to CodeBlood
        </h2>
        <p className="text-lg text-gray-400 text-center mb-12">
          Enter your name to start playing and compete for the top spot!
        </p>
        <div className="flex justify-center">
          <div className="flex flex-col items-center space-y-4">
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name"
              className="px-4 py-2 rounded bg-gray-800 text-white w-64"
            />

            <button
              type="button"
              onClick={handleClick}
              className="px-16 bg-red-600 text-white rounded hover:bg-red-700 py-2 text-center text-lg"
            >
              Start Playing
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Play;
