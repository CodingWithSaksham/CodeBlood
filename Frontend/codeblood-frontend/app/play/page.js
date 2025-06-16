"use client";
import axios from "axios";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

export default function Play() {
  const [name, setName] = useState("");
  const router = useRouter();

  const handleClick = async (e) => {
    e.preventDefault();
    if (!name.trim()) {
      alert("Please enter a valid name.");
      return;
    }

    try {
      // 1) create player
      const playerRes = await axios.post(
        "http://localhost:8000/api/player/",
        { player_name: name }
      );
      const playerId = playerRes.data.player_id;

      // store locally
      localStorage.setItem("playerId", playerId);
      localStorage.setItem("playerName", name);

      // 2) create lobby
      await axios.post(
        "http://localhost:8000/api/lobbies/",
        { host: playerId }
      );

      // 3) navigate into game
      router.push(`/play/${playerId}`);
    } catch (err) {
      if (err.response) {
        console.error("Payload sent:", err.config.data);
        console.error("Response data:", err.response.data);
      } else {
        console.error(err);
      }
      alert("Failed to create player or lobby. See console for details.");
    }
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center pt-14">
      <h2 className="text-4xl font-bold mb-6">Welcome to CodeBlood</h2>
      <p className="text-lg text-gray-400 mb-12 text-center px-4">
        Enter your name to start playing and compete for the top spot!
      </p>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter your name"
        className="px-4 py-2 rounded bg-gray-800 text-white w-64 mb-4"
      />
      <button
        onClick={handleClick}
        className="px-16 bg-red-600 hover:bg-red-700 rounded py-2 text-lg"
      >
        Start Playing
      </button>
    </div>
  );
}
