function Play() {
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
              placeholder="Enter your name"
              className="px-4 py-2 rounded bg-gray-800 text-white w-64"
            />
            <button
              type="submit"
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
