import React, { useContext } from "react";
import { LoginContext } from "../Helper/Context";

export const Home = () => {
  const { loggedin, setLoggedin } = useContext(LoginContext);
  return (
    <div className="container">
      <h1>Home</h1>
      <button onClick={() => setLoggedin(true)}>click here to login</button>
      {loggedin ? <h1>you are logged in</h1> : <h1>you are not logged in</h1>}
    </div>
  );
};
