import React from "react";

const PersonForm = props => {
  return (
    <>
      <form onSubmit={props.onSubmit}>
        <div>
          name: <input value={props.name} onChange={props.nameChange} />
          <br></br>
          phone: <input value={props.phone} onChange={props.phoneChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
        <br></br>
      </form>
    </>
  );
};

export default PersonForm;
