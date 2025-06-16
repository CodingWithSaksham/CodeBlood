"use client";
import axios from "axios";
import React, { useState } from "react";

function Play() {
  const [name, setName] = useState("");
  const [playerId, setPlayerId] = useState("");

  function handleClick(e) {
    e.preventDefault();

    if (name.trim() === "") {
      alert("Please enter a valid name.");
      return;
    }

    // First: Create player
    axios
      .post("http://localhost:8000/api/player", { player_name: name })
      .then((response) => {
        const playerId = response.data.player_id;

        setPlayerId(playerId);
        localStorage.setItem("playerId", playerId);
        localStorage.setItem("playerName", name);

        console.log("Player created:", response.data);
        return axios.post("http://localhost:8000/api/lobbies/", {
          host: playerId,
        });
      })
      .then((response) => {
        console.log("Lobby created:", response.data);

        window.location.href = "/game";
      })
      .catch((error) => {
        console.error("Error:", error);
        alert("Failed to create player or lobby. Please try again.");
      });
  }
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
          <form className="flex flex-col items-center space-y-4">
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name"
              className="px-4 py-2 rounded bg-gray-800 text-white w-64"
            />

            <button
              onClick={handleClick}
              className="px-16 bg-red-600 text-white rounded hover:bg-red-700 py-2 text-center text-lg"
            >
              Start Playing
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Play;
