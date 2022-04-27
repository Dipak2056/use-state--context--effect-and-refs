import React, { useState, useEffect } from "react";

const UseEffect = () => {
  const [name, setName] = useState("mary");
  const [surname, setSurname] = useState("poppins");
  const handleOnChange = (e) => {
    setName(e.target.value);
  };
  const handleSurnameChange = (e) => {
    setSurname(e.target.value);
  };
  useEffect(() => {
    document.title = name + " " + surname;
  });
  return (
    <div className="container">
      <div className="title">
        <h1>use-Effect</h1>
      </div>
      <div className="description">
        <p>
          this hook is used to manage the side-effect of the components to the
          other components, it is the short and brief method to describe the
          class based componet did mount component did update and the component
          did update of the class based side-effect management approach
        </p>
        <p>to achieve the functionality i did these</p>
        <ul>
          <li>created the state using useState hook</li>
          <li>imported useEffect from react</li>
          <li>
            wrote the function for the useEffect, stating what to do when the
            following state changes
          </li>
          <li>
            by default useEffect render in the first instant and whenever the
            state changes
          </li>
        </ul>
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
  );
};

export default UseEffect;
