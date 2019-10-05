import React from "react";

const Person = ({ person, deletePerson }) => {
  return (
    <li>
      {person.name} | {person.phone} |{" "}
      <button onClick={deletePerson}>Delete</button>
    </li>
  );
};

export default Person;
