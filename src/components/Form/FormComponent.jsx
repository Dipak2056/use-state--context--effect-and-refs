import React, { useState } from "react";
const inititalState = {
  firstname: "",
  lastname: "",
  email: "",
  comment: "",
  isFriendly: true,
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
    console.log(formData);
  };
  return (
    <div>
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
    </div>
  );
};
