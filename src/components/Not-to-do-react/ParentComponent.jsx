import React, { useState } from "react";
import BadList from "./BadList";
import Form from "./Form";
import TaskList from "./TaskList";

const ParentComponent = () => {
  const [taskList, setTaskList] = useState([]);
  const [badList, setBadList] = useState([]);

  const addNewTask = (task) => {
    setTaskList([...taskList, task]);
    console.log(taskList);
  };
  const handleOnMoveToBad = (i) => {
    const selectedItem = taskList[i];
    console.log(i);
  };

  return (
    <div>
      ParentComponent
      <Form addNewTask={addNewTask} />
      <TaskList taskList={taskList} handleOnMoveToBad={handleOnMoveToBad} />
      <BadList badList={badList} />
    </div>
  );
};

export default ParentComponent;
