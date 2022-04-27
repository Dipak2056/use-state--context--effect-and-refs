import React from "react";

const BadList = ({ badList }) => {
  return (
    <div>
      <h1>Bad-list</h1>

      <table>
        <tbody>
          {badList.map((item, i) => {
            return (
              <tr key={i}>
                <td>
                  <span></span>
                  {item.task}
                </td>
                <td>{item.hr}</td>
                <td>
                  <div className="btn">Move</div>
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

export default BadList;
