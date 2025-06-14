function Lander() {
  return (
    <div className="min-h-screen flex flex-col text-white pt-14">
      <div className="bg-black text-white font-sans text-center py-12 pb-24 pt-40">
        <header className="mb-8">
          <h1 className="text-8xl font-bold bg-gradient-to-r from-red-600 to-white text-transparent bg-clip-text">
            CODEBLOOD
          </h1>
          <p className="text-xl mt-4 py-5">
            filler sjdncowcnapkco;asmoceapkvmcasdcmpaskmvdcpoaveskmcapvmcp
          </p>
          <p className="text-md text-gray-400 ">
            filler
            sjdncowcnapkco;asmoceapkvmcasdcmpaskmvdcpoaveskmcapvmcpjsdncosmockc
            enrvcosmocme cekncsmdcoiamv eofvnvcpsmapn noirvcpsm
          </p>
        </header>
        <div>
          <button className="px-16 mx-2 bg-red-600 text-white rounded hover:bg-red-700 py-2 text-center text-lg">
            Start Battle
          </button>
        </div>
      </div>
      <div className="bg-black text-white font-sans py-12 pt-36 pb-36">
        <h2 className="text-4xl font-bold text-center mb-6">Battle Features</h2>
        <p className="text-lg text-gray-400 text-center mb-12">
          Experience the ultimate coding competition with features designed for
          warriors
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-6">
          <div className="bg-gray-800 p-6 rounded-lg text-center hover:bg-gray-700">
            <div className="text-red-500 text-4xl mb-4">⚡</div>
            <h3 className="text-xl font-bold mb-2">Boss Fights</h3>
            <p className="text-gray-400">
              Choose your challenge: battle against AI bosses which adapt to you
            </p>
          </div>

          <div className="bg-gray-800 p-6 rounded-lg text-center hover:bg-gray-700">
            <div className="text-red-500 text-4xl mb-4">⚔️</div>
            <h3 className="text-xl font-bold mb-2">Choose Your Warriors</h3>
            <p className="text-gray-400">
              Each warrior has unique abilities and strengths. Choose wisely!
            </p>
          </div>

          <div className="bg-gray-800 p-6 rounded-lg text-center hover:bg-gray-700">
            <div className="text-red-500 text-4xl mb-4">👑</div>
            <h3 className="text-xl font-bold mb-2">Global Leaderboard</h3>
            <p className="text-gray-400">
              Compete for the top spot and win in the least possible time.
            </p>
          </div>
        </div>
      </div>
      <div className="bg-red-950 text-white font-sans py-12 pt-36 pb-36">
        <h2 className="text-4xl font-bold text-center mb-6">Join the Battle</h2>
        <p className="text-lg text-gray-400 text-center mb-12">
          Ready to Fight? Join the battle now!
        </p>
        <div className="flex justify-center ">
          <button className="px-16 bg-red-600 text-white rounded hover:bg-red-700 py-2 text-center text-lg">
            Start Playing
          </button>
        </div>
      </div>
    </div>
  );
}

export default Lander;
