import React from "react";

const Header = props => {
  return <h1>{props.course}</h1>;
};

const Part = props => {
  return (
    <p>
      {props.name} {props.exercises}
    </p>
  );
};

const Course = ({ course }) => {
  const parts = () =>
    course.parts.map(parts => (
      <Part key={parts.id} name={parts.name} exercises={parts.exercises} />
    ));

  return (
    <>
      <Header course={course.name} />
      {parts()}
    </>
  );
};

export default Course;
