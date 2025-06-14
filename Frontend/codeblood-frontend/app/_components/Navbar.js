import "lucide-react";
import { PlayIcon, SwordIcon } from "lucide-react";
import React from "react";

function Navbar() {
  return (
    <nav className="bg-red-950 text-white flex items-center justify-between px-6 py-4">
      <div className="flex items-center">
        <span className="text-red-500 text-2xl font-bold flex items-center">
          <SwordIcon className="mr-2" />
          CodeBlood
        </span>
      </div>

      <div>
        <button className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 flex items-center">
          <PlayIcon className="mx-2" />
          Play Now
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
