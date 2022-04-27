import React, { useState } from "react";

export const UseState = () => {
  const [name, setName] = useState("mary");
  const [surname, setSurname] = useState("poppins");
  const handleOnChange = (e) => {
    setName(e.target.value);
  };
  const handleSurnameChange = (e) => {
    setSurname(e.target.value);
  };
  return (
    <div>
      <div className="container">
        <div className="title">
          <h1>use-state</h1>
        </div>
        <div className="description">
          <p>
            this hook is used to manage the state of the application, use state
            is a hook, a hook is a function provided by react that let us hook
            with react features from your functional components.
          </p>
        </div>
        <div className="demo">
          <section>
            <input value={name} onChange={handleOnChange} />
            {name}
            <input value={surname} onChange={handleSurnameChange} />
            {surname}
          </section>
        </div>
      </div>
    </div>
  );
};
