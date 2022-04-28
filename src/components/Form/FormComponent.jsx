import React, { useState } from "react";
const inititalState = { firstname: "", lastname: "" };
export const FormComponent = () => {
  const [formData, setformData] = useState(inititalState);

  const handleChange = (e) => {
    setformData((prevFormData) => {
      return {
        ...prevFormData,
        [e.target.name]: e.target.value,
      };
    });
    console.log(formData);
  };
  return (
    <div>
      <input
        type="text"
        placeholder="first-name"
        name="firstname"
        onChange={handleChange}
      />
      <input
        type="text"
        placeholder="first-name"
        name="lastname"
        onChange={handleChange}
      />
    </div>
  );
};