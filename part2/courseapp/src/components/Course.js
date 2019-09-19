import React from "react";

const Header = ({ course }) => {
  return <h1>{course}</h1>;
};

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
      <strong>Total of {props.total} parts</strong>
    </p>
  );
};

const Course = ({ course }) => {
  const parts = () =>
    course.parts.map(parts => (
      <Part key={parts.id} name={parts.name} exercises={parts.exercises} />
    ));
  const total = course.parts.reduce((sum, parts) => {
    return sum + parts.exercises;
  }, 0);

  return (
    <>
      <Header course={course.name} />
      {parts()}
      <Total total={total} />
    </>
  );
};

export default Course;
