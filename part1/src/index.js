import React, { useState } from "react";
import ReactDOM from "react-dom";

const Button = props => (
  <button onClick={props.handleClick}>{props.text}</button>
);

const Statistics = props => {
  if (props.total <= 0) {
    return (
      <div>
        <h2>Statistics</h2>
        No statistics given
      </div>
    )
  } else {
    return (
      <div>
        <h2>Statistics</h2>
        good: {props.good}
        <br></br>
        neutral: {props.neutral}
        <br></br>
        bad: {props.bad}
        <br></br>
        total: {props.total}
        <br></br>
        average: {(props.good - props.bad) / (props.total)}
        <br></br>
        positive: {(props.good / (props.total)) * 100}%
      </div>
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
