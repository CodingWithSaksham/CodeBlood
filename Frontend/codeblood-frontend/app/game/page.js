function Game() {
  return (
    <div className="h-screen w-screen bg-black">
      <iframe
        src="/index.html"
        title="Unity Game"
        className="w-full h-full border-0"
        allowFullScreen
      />
    </div>
  );
}

export default Game;
