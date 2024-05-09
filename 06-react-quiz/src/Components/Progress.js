function Progress({ index, numQuestions, points, maxPossiblePoints, answer }) {
  return (
    <div className="progress">
      <progress max={numQuestions} value={index + Number(answer !== null)} />
      <p>
        question <b>{index + 1}</b> / {numQuestions}
      </p>
      <p>
        <b>{points}</b> / {maxPossiblePoints}
      </p>
    </div>
  );
}

export default Progress;
