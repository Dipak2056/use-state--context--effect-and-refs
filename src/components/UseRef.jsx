import React from "react";

const UseRef = () => {
  return (
    <div className="container">
      <div className="title">
        <h1>useRef</h1>
      </div>
      <div className="description">
        <p></p>
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

export default UseRef;
