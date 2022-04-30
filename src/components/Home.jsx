import React, { useContext } from "react";
import { LoginContext } from "../Helper/Context";
import { useParams } from "react-router-dom";

export const Home = () => {
  const { loggedin, setLoggedin } = useContext(LoginContext);
  let { username } = useParams();
  return (
    <div className="container">
      <h1>Home page for {username}</h1>
      <button onClick={() => setLoggedin(true)}>click here to login</button>
      {loggedin ? <h1>you are logged in</h1> : <h1>you are not logged in</h1>}
    </div>
  );
};
