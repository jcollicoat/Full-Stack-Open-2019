import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

const App = (props) => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const addToGood = (newValue) => {
    setGood(newValue)
  }
  const addToNeutral = (newValue) => {
    setNeutral(newValue)
  }
  const addToBad = (newValue) => {
    setBad(newValue)
  }

  return (
    <div>
      <h2>Give feedback:</h2>
      <Button handleClick={() => addToGood(good + 1)} text="good" />
      <Button handleClick={() => addToNeutral(neutral + 1)} text="neutral" />
      <Button handleClick={() => addToBad(bad + 1)} text="bad" />
      <h2>Statistics:</h2>
      <div>good: {good}</div>
      <div>neutral: {neutral}</div>
      <div>bad: {bad}</div>
    </div>
  )
}

ReactDOM.render(<App />,
  document.getElementById('root')
)