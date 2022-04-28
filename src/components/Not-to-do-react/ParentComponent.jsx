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
  const handleOnDeleteTaskList = (i) => {
    const newArg = taskList.filter((item, index) => index !== i);
    setTaskList(newArg);
  };
  const handleOnDeleteBadList = (i) => {
    const newArg = badList.filter((item, index) => index !== i);
    setBadList(newArg);
  };
  const handleOnMoveToBad = (i) => {
    const selectedItem = taskList[i];
    setBadList([...badList, selectedItem]);
    const newArg = taskList.filter((item, index) => index !== i);
    setTaskList(newArg);
  };
  const handleOnMoveToGood = (i) => {
    const selectedItem = badList[i];
    setTaskList([...taskList, selectedItem]);
    const newArg = badList.filter((item, index) => index !== i);
    setBadList(newArg);
  };
  const totalGoodHours = taskList.reduce((acc, curr) => acc + curr.hr, 0);
  const totalBadHours = badList.reduce((acc, curr) => acc + curr.hr, 0);
  const total = totalBadHours + totalGoodHours;

  return (
    <div>
      ParentComponent
      <Form addNewTask={addNewTask} total={total} />
      <TaskList
        taskList={taskList}
        handleOnMoveToBad={handleOnMoveToBad}
        handleOnDeleteTaskList={handleOnDeleteTaskList}
        total={total}
      />
      <BadList
        badList={badList}
        handleOnMoveToGood={handleOnMoveToGood}
        handleOnDeleteBadList={handleOnDeleteBadList}
        totalBadHours={totalBadHours}
      />
      <p>{total}</p>
    </div>
  );
};

export default ParentComponent;
