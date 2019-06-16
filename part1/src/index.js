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
      <Part1 part={props.parts[0]} />
      <Part2 part={props.parts[1]} />
      <Part3 part={props.parts[2]} />
    </>
  )
}

// Total

const Total = (props) => {
  return (
    <>
      <h2>Total:</h2>
      <p>Total number of exercises: <b>{props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises}</b></p>
    </>
  )
}

// App

const App = () => {
  const course = 'Half Stack application development'
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]

  return (
    <>
      <Header course={course} />
      <Content parts={parts} />
      <Total parts={parts} />
    </>
  )
}

ReactDOM.render(<App />, document.getElementById('root'));
