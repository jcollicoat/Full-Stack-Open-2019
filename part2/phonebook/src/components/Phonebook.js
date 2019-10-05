import React from "react";
import Person from "./Person";

const Phonebook = ({ persons, filterValue }) => {
  const filtered = persons.filter(person =>
    person.name.toLowerCase().includes(filterValue.toLowerCase())
  );

  const rows = () =>
    filtered.map(person => <Person key={person.id} person={person} />);

  return <ul>{rows()}</ul>;
};

export default Phonebook;
