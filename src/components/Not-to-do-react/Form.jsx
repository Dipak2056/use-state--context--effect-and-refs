import React, { useState } from "react";
const initialState = { task: "", hr: "" };
const weeklyHours = 168;

const Form = ({ addNewTask, total }) => {
  const [newTask, setNewTask] = useState(initialState);

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setNewTask((prevTask) => {
      return { ...prevTask, [name]: name === "hr" ? +value : value };
    });
  };
  const handleOnSubmit = (e) => {
    e.preventDefault();
    if (newTask.hr < 1) {
      return alert("please enter the positive value");
    }
    if (total + newTask.hr > weeklyHours) {
      return alert("you have exceeded the limit");
    }
    setNewTask(newTask);
    setNewTask(initialState);
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
          type="number"
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
