import React from 'react';
import ReactDOM from 'react-dom';

// Header

const Header = (props) => {
  return (
    <>
      <h2>Course:</h2>
      <h1>{props.course}</h1>
    </>
  )
}

// Parts

const Part1 = (props) => {
  return (
    <>
      <p>
        Name: <b>{props.part.name}</b> | No. of exercises: <b>{props.part.exercises}</b>
      </p>
    </>
  )
}

const Part2 = (props) => {
  return (
    <>
      <p>
        Name: <b>{props.part.name}</b> | No. of exercises: <b>{props.part.exercises}</b>
      </p>
    </>
  )
}

const Part3 = (props) => {

  return (
    <>
      <p>
        Name: <b>{props.part.name}</b> | No. of exercises: <b>{props.part.exercises}</b>
      </p>
    </>
  )
}

const Content = (props) => {
  return (
    <>
      <h2>Exercises:</h2>
      <Part1 part={props.part1} />
      <Part2 part={props.part2} />
      <Part3 part={props.part3} />
    </>
  )
}

// Footer

const Footer = (props) => {
  return (
    <>
      <h2>Total:</h2>
      <p>Total number of exercises: <b>{props.exercises1 + props.exercises2 + props.exercises3}</b></p>
    </>
  )
}

// App

const App = () => {
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

  return (
    <>
      <Header course={course} />
      <Content part1={part1} part2={part2} part3={part3} />
      <Footer exercises1={part1.exercises} exercises2={part2.exercises} exercises3={part3.exercises} />
    </>
  )
}

ReactDOM.render(<App />, document.getElementById('root'));
