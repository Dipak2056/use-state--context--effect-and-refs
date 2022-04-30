import React, { useState } from "react";

const PracticeForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    join: true,
  });
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevFormData) => {
      return { ...prevFormData, [name]: type === "checkbox" ? checked : value };
    });
  };
  function handleSubmit(e) {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      return alert("password didnot matched");
    }
    if (formData.join === true) {
      console.log("Thanks for joining us");
    }
    console.log(formData);
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          required
          placeholder="email"
          name="email"
          onChange={handleChange}
          value={formData.email}
        />{" "}
        <br />
        <input
          type="password"
          required
          placeholder="password"
          name="password"
          onChange={handleChange}
          value={formData.password}
        />
        <input
          type="password"
          required
          placeholder="confirm password"
          name="confirmPassword"
          onChange={handleChange}
          value={formData.confirmPassword}
        />
        <input type="checkbox" name="join" id="join" onChange={handleChange} />
        <label htmlFor="join"> I Want to Join the newsLetter</label> <br />
        <button>Sign-up</button>
      </form>
    </div>
  );
};

export default PracticeForm;
