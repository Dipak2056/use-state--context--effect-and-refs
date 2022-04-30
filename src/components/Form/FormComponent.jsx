import React, { useState } from "react";
const inititalState = {
  firstname: "",
  lastname: "",
  email: "",
  comment: "",
  isFriendly: true,
  employment: "",
  favColor: "",
};
export const FormComponent = () => {
  const [formData, setformData] = useState(inititalState);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setformData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  };
  function handleSubmit(e) {
    e.preventDefault();
    console.log(formData);
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="first-name"
          name="firstname"
          onChange={handleChange}
          value={formData.firstname}
        />
        <input
          type="text"
          placeholder="first-name"
          name="lastname"
          onChange={handleChange}
          value={formData.lastname}
        />
        <input
          type="email"
          required
          placeholder="email@"
          name="email"
          onChange={handleChange}
          value={formData.email}
        />
        <textarea
          placeholder="textarea"
          value={formData.textarea}
          onChange={handleChange}
          name="comment"
        />
        <label htmlFor="isfriendly">Are you friendly</label>
        <input
          onChange={handleChange}
          type="checkbox"
          id="isfriendly"
          name="isFriendly"
          checked={formData.isFriendly}
        />
        <fieldset>
          <legend>Current employment status</legend>
          <input
            type="radio"
            id="unemployed"
            name="employment"
            value="unemployed"
            checked={formData.employment === "unemployed"}
            onChange={handleChange}
          />{" "}
          <label htmlFor="unemployed">unemployed</label> <br />
          <input
            type="radio"
            id="employed"
            name="employment"
            value="employed"
            checked={formData.employment === "employed"}
            onChange={handleChange}
          />{" "}
          <label htmlFor="employed">employed</label> <br />
          <input
            type="radio"
            id="business"
            name="employment"
            value="business"
            checked={formData.employment === "business"}
            onChange={handleChange}
          />{" "}
          <label htmlFor="business">business</label> <br />
        </fieldset>
        <label htmlFor="favColor">What is your favourite color</label>
        <br />
        <select
          id="favColor"
          value={formData.favColor}
          name="favColor"
          onChange={handleChange}
        >
          <option value="select">---select--</option>
          <option value="orange">Orange</option>
          <option value="yellow">Yellow</option>
          <option value="green">Green</option>
          <option value="violet">Violet</option>
        </select>
        <button>Submit</button>
      </form>
    </div>
  );
};
