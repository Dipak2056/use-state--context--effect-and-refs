import React from "react";

const BadList = ({
  badList,
  handleOnMoveToGood,
  handleOnDeleteBadList,
  totalBadHours,
}) => {
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
                  <div className="btn" onClick={() => handleOnMoveToGood(i)}>
                    Move
                  </div>
                  <div
                    className="btn-dlt"
                    onClick={() => handleOnDeleteBadList(i)}
                  >
                    Delete
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <p>you could have saved {totalBadHours}</p>
    </div>
  );
};

export default BadList;
