import React from "react";

const courses = [
  {
    name: "Half Stack application development",
    id: 1,
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10,
        id: 1
      },
      {
        name: "Using props to pass data",
        exercises: 7,
        id: 2
      },
      {
        name: "State of a component",
        exercises: 14,
        id: 3
      },
      {
        name: "Redux",
        exercises: 11,
        id: 4
      }
    ]
  },
  {
    name: "Node.js",
    id: 2,
    parts: [
      {
        name: "Routing",
        exercises: 3,
        id: 1
      },
      {
        name: "Middlewares",
        exercises: 7,
        id: 2
      }
    ]
  }
];

const Part = props => {
  return (
    <p>
      {props.name} {props.exercises}
    </p>
  );
};

const Total = props => {
  return (
    <p>
      <strong>Total of {props.total} parts.</strong>
    </p>
  );
};

const Course = props => {
  const parts = () =>
    props.parts.map(parts => (
      <Part key={parts.id} name={parts.name} exercises={parts.exercises} />
    ));
  const total = props.parts.reduce((sum, parts) => {
    return sum + parts.exercises;
  }, 0);

  return (
    <>
      <h2>{props.name}</h2>
      {parts()}
      <Total total={total} />
    </>
  );
};

const Courses = () => {
  const course = () =>
    courses.map(course => (
      <Course key={course.id} name={course.name} parts={course.parts} />
    ));

  return (
    <>
      <h1>Web development curriculum</h1>
      {course()}
    </>
  );
};

export default Courses;
