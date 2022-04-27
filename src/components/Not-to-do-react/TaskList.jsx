import React from "react";

const TaskList = ({ taskList, handleOnMoveToBad }) => {
  return (
    <div>
      <h1>Task-list</h1>

      <table>
        <tbody>
          {taskList.map((item, i) => {
            return (
              <tr key={i}>
                <td>
                  <span></span>
                  {item.task}
                </td>
                <td>{item.hr}</td>
                <td>
                  <div className="btn" onClick={handleOnMoveToBad}>
                    Move
                  </div>
                  <div className="btn-dlt">Delete</div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default TaskList;
