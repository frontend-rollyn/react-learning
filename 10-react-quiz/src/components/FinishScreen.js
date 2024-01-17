function FinishScreen({ points, maxPossiblePoints, dispatch }) {
  const percentile = (points / maxPossiblePoints) * 100;

  let emoji;
  if (percentile === 100) emoji = "🎖";
  if (percentile < 100) emoji = "⭐";
  if (percentile === 0) emoji = "🤔";

  return (
    <>
      <p className="result">
        <span>{emoji}</span> You scored <strong>{points}</strong> out of
        possible {maxPossiblePoints} ({Math.ceil(percentile)}%)
      </p>
      <p className="highscore">(Highscore {points} points)</p>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "restart" })}
      >
        Restart Quiz
      </button>
    </>
  );
}

export default FinishScreen;
