import React, { useState } from "react";
import ReactDOM from "react-dom";

const anecdotes = [
  "If it hurts, do it more often",
  "Adding manpower to a late software project makes it later!",
  "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
  "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
  "Premature optimization is the root of all evil.",
  "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it."
];

const points = new Array(6+1).join('0').split('').map(parseFloat);

const copy = [...points];

const Button = props => (
  <button onClick={props.handleClick}>{props.text}</button>
);

const App = props => {
  const [selectedAnecdote, setSelectedAnecdote] = useState(0);
  const [selectedTotal, setSelectedTotal] = useState(0);
  const [voteCount, setVoteCount] = useState(0);

  const nextAnecdote = newAnecdote => {
    setSelectedAnecdote(newAnecdote);
    setSelectedTotal(newAnecdote);
  };

  const addVote = newValue => {
    setVoteCount(newValue);
    copy[selectedTotal] += 1;
    console.log(copy);
  };

  return (
    <>
      <div>{props.anecdotes[selectedAnecdote]}</div>
      <div>has {props.copy[selectedTotal]} votes</div>
      <Button
        handleClick={() => {
          nextAnecdote(Math.floor(Math.random() * anecdotes.length));
        }}
        text="Next anecdote"
      />
      <Button handleClick={() => addVote(voteCount + 1)} text="Vote" />
    </>
  );
};

ReactDOM.render(
  <App anecdotes={anecdotes} points={points} copy={copy} />,
  document.getElementById("root")
);
