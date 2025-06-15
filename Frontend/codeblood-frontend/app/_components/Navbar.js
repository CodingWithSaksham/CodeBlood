import "lucide-react";
import { PlayIcon, SwordIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

function Navbar() {
  return (
    <nav className="bg-red-950 text-white flex items-center justify-between px-6 py-4">
      <Link href="/">
        <div className="flex items-center">
          <span className="text-red-500 text-2xl font-bold flex items-center">
            <SwordIcon className="mr-2" />
            CodeBlood
          </span>
        </div>
      </Link>

      <div className="flex items-center space-x-4">
        <Link href="/">
          <button className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 flex items-center">
            <PlayIcon className="mx-2" />
            Play Now
          </button>
        </Link>
        <Link href="/leaderboard">
          <button className="bg-red-700 text-white px-4 py-2 rounded hover:bg-red-700 ml-4 flex items-center">
            <span className="mx-2">Leaderboard</span>
          </button>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
