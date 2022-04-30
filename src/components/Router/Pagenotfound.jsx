import React from "react";
import { useNavigate } from "react-router-dom";

function Pagenotfound() {
  let navigate = useNavigate();
  return (
    <div>
      404: Pagenotfound
      <button
        onClick={() => {
          navigate("/");
        }}
      >
        Go to home
      </button>
    </div>
  );
}

export default Pagenotfound;
