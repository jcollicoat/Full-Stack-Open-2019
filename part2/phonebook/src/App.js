import React, { useState } from "react";
import Person from "./components/Person";

const App = props => {
  const [persons, setPersons] = useState(props.persons);
  const [newName, setNewName] = useState("");
  const [newPhone, setNewPhone] = useState("");
  const [filterValue, setFilterValue] = useState("");

  const handleNameChange = event => {
    console.log(event.target.value);
    setNewName(event.target.value);
  };

  const handlePhoneChange = event => {
    console.log(event.target.value);
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

  const handleFilterChange = event => {
    setFilterValue(event.target.value);
  };

  const personsToShow = persons.filter(person =>
    person.name.includes(filterValue.toLowerCase())
  );

  const rows = () =>
    personsToShow.map(person => <Person key={person.id} person={person} />);

  return (
    <div>
      <h1>Phonebook</h1>
      <h2>Filter</h2>
      <input value={filterValue} onChange={handleFilterChange} />
      <h2>Add a new person</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input value={newName} onChange={handleNameChange} />
          <br></br>
          phone: <input value={newPhone} onChange={handlePhoneChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>{rows()}</ul>
    </div>
  );
};

export default App;
