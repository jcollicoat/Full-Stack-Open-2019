import React, { useState } from "react";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Phonebook from "./components/Phonebook";

const App = props => {
  const [persons, setPersons] = useState(props.persons);
  const [newName, setNewName] = useState("");
  const [newPhone, setNewPhone] = useState("");
  const [filterValue, setFilterValue] = useState("");

  const handleFilterChange = event => {
    setFilterValue(event.target.value);
  };

  const handleNameChange = event => {
    setNewName(event.target.value);
  };

  const handlePhoneChange = event => {
    setNewPhone(event.target.value);
  };

  const addPerson = event => {
    event.preventDefault();
    const personObject = {
      name: newName,
      phone: newPhone,
      id: persons.length + 1
    };

    if (newName === "") {
      alert(`Please enter a name.`);
    } else if (newPhone === "") {
      alert(`Please enter a phone number.`);
    } else if (persons.some(person => person.name === newName)) {
      alert(`${newName} is already added to the phonebook.`);
    } else if (persons.some(person => person.phone === newPhone)) {
      alert(`${newPhone} is already associated with someone in the phonebook.`);
    } else {
      setPersons(persons.concat(personObject));
      setNewName("");
      setNewPhone("");
    }
  };

  return (
    <div>
      <h1>Phonebook</h1>
      <h2>Filter</h2>
      <Filter value={filterValue} onChange={handleFilterChange} />
      <h2>Add a new person</h2>
      <PersonForm
        onSubmit={addPerson}
        name={newName}
        phone={newPhone}
        nameChange={handleNameChange}
        phoneChange={handlePhoneChange}
        database={persons}
      />
      <h2>Numbers</h2>
      <Phonebook persons={persons} filterValue={filterValue} />
    </div>
  );
};

export default App;
