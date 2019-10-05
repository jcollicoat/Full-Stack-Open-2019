import React from "react";
import Person from "./Person";

const Phonebook = ({ persons, filterValue, deletePerson }) => {
  const filtered = persons.filter(person =>
    person.name.toLowerCase().includes(filterValue.toLowerCase())
  );

  const rows = () =>
    filtered.map(person => (
      <Person
        key={person.id}
        person={person}
        deletePerson={() => deletePerson(person.id, person.name)}
      />
    ));

  return <ul>{rows()}</ul>;
};

export default Phonebook;
