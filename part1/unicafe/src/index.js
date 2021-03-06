import React, { useState } from "react";
import ReactDOM from "react-dom";

const Button = props => (
  <button onClick={props.handleClick}>{props.text}</button>
);

const Statistic = props => {
  if (props.text === 'positive') {
    return (
      <tr>
        <td>{props.text}:</td>
        <td>{props.value}%</td>
      </tr>
    )
  } else {
    return (
      <tr>
        <td>{props.text}:</td>
        <td>{props.value}</td>
      </tr>
    )
  }
};

const Statistics = props => {
  if (props.total <= 0) {
    return (
      <>
        <h2>Statistics</h2>
        No statistics given
      </>
    )
  } else {
    return (
      <>
        <h2>Statistics</h2>
        <table>
          <tbody>
            <Statistic text="good" value={props.good} />
            <Statistic text='neutral' value={props.neutral} />
            <Statistic text='bad' value={props.bad} />
            <Statistic text='total' value={props.total} />
            <Statistic text='average' value={(props.good - props.bad) / props.total} />
            <Statistic text='positive' value={(props.good / props.total) * 100} />
          </tbody>
        </table>
      </>
    )
  }
};

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const addToGood = newValue => {
    setGood(newValue);
  };
  const addToNeutral = newValue => {
    setNeutral(newValue);
  };
  const addToBad = newValue => {
    setBad(newValue);
  };

  return (
    <div>
      <h2>Give feedback:</h2>
      <Button handleClick={() => addToGood(good + 1)} text="good" />
      <Button handleClick={() => addToNeutral(neutral + 1)} text="neutral" />
      <Button handleClick={() => addToBad(bad + 1)} text="bad" />
      <Statistics
        good={good}
        neutral={neutral}
        bad={bad}
        total={good + neutral + bad}
      />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
