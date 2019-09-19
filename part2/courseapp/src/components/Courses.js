import React from "react";

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

const Courses = ({ courses }) => {
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
