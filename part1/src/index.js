import React from 'react';
import ReactDOM from 'react-dom';

const Header = (props) => {
  return (
    <>
      <h2>Course:</h2>
      <h1>{props.course}</h1>
    </>
  )
}

const Part1 = () => {
  const name = 'Fundamentals of React'
  const exercises = 10

  return (
    <>
      <p>
        Name: {name} | No. of exercises: {exercises}
      </p>
    </>
  )
}

const Part2 = () => {
  const name = 'Using props to pass data'
  const exercises = 7

  return (
    <>
      <p>
        Name: {name} | No. of exercises: {exercises}
      </p>
    </>
  )
}

const Part3 = () => {
  const name = 'State of a component'
  const exercises = 14

  return (
    <>
      <p>
        Name: {name} | No. of exercises: {exercises}
      </p>
    </>
  )
}

const Content = (props) => {
  return (
    <>
      <h2>Exercises:</h2>
      <Part1 />
      <Part2 />
      <Part3 />
    </>
  )
}

const Footer = (props) => {
  return (
    <>
      <h2>Total:</h2>
      <p>Total number of exercises: {props.exercises1 + props.exercises2 + props.exercises3}</p>
    </>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const exercises1 = 10
  const exercises2 = 7
  const exercises3 = 14

  return (
    <>
      <Header course={course} />
      <Content />
      <Footer exercises1={exercises1} exercises2={exercises2} exercises3={exercises3} />
    </>
  )
}

ReactDOM.render(<App />, document.getElementById('root'));
