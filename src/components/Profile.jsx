import React, { useContext } from "react";
import { LoginContext } from "../Helper/Context";

const Profile = () => {
  const { loggedin, setLoggedin } = useContext(LoginContext);
  return (
    <div className="container">
      <h1>profile</h1>
      <button onClick={() => setLoggedin(!loggedin)}>click to toggle</button>
      {loggedin ? <h1>you are logged in</h1> : <h1>you are not logged in</h1>}
    </div>
  );
};

export default Profile;
