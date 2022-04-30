import React from "react";
import { useNavigate, useParams } from "react-router-dom";

function Pagenotfound() {
  let navigate = useNavigate();
  let { username } = useParams();
  return (
    <div>
      <h1>This is the profile page for {username}</h1>
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
