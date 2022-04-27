import React, { useState } from "react";
const initialState = { task: "", hr: "" };
const weeklyHours = 168;

const Form = ({ addNewTask }) => {
  const [newTask, setNewTask] = useState(initialState);
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setNewTask((prevTask) => {
      return { ...prevTask, [name]: value };
    });
  };
  const handleOnSubmit = (e) => {
    e.preventDefault();
    setNewTask(newTask);
    addNewTask(newTask);
  };
  return (
    <div>
      <form onSubmit={handleOnSubmit}>
        <input
          id="task"
          required
          type="text"
          name="task"
          value={newTask.task}
          placeholder="task"
          onChange={handleOnChange}
        />{" "}
        <br />
        <input
          id="hr"
          required
          type="text"
          name="hr"
          value={newTask.hr}
          placeholder="hour"
          onChange={handleOnChange}
        />{" "}
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Form;
