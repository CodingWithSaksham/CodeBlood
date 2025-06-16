// app/play/[playerId]/page.js
"use client";

import React from "react";

function Game({ params }) {
  const { playerId } = params;

  return (
    <div className="h-screen w-screen bg-black">
      <iframe
        src="/index.html"
        title={`Unity Game for Player ${playerId}`}
        className="w-full h-full border-0"
        allowFullScreen
      />
    </div>
  );
}

export default Game;
