function ScoreComp({ num, name, score }) {
  return (
    <tr>
      <td className="py-2 px-4 border-b">{num}</td>
      <td className="py-2 px-4 border-b">{name}</td>
      <td className="py-2 px-4 border-b">{score}</td>
    </tr>
  );
}

export default ScoreComp;
