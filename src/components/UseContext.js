import React, { useState } from "react";
import { Home } from "./Home";
import Profile from "./Profile";
import { LoginContext } from "../Helper/Context";

const UseContext = () => {
  const [loggedin, setLoggedin] = useState(false);
  return (
    <div>
      <div className="container">
        <div className="title">
          <h1>use-context</h1>
        </div>
        <div className="description">
          <p>
            It is used to read the context like theme and language. Context is
            somehow like the global variable. It is usefull to avoid passing
            everything through props, if you need all components to be able to
            read some value.
          </p>
          <p>to make this work i did these steps</p>
          <ul>
            <li>created 3 dummy components</li>
            <li>created Context.js file in helper folder</li>
            <li>
              i went and wrote create context code in the Context.js importing
              createContext component from js
            </li>
            <li>
              since this component is the parent component:- i am importing the
              created context from Contents.jsx
            </li>
            <li>
              now the components should be wrapped with the syntax with
              createdContext.provider
            </li>
            <li>
              inside this provider we are going to have the value, which is the
              state, this state will be created in the parent component
            </li>
            <li>
              now we have the state we pass that state as a value to the
              context.prvider{" "}
            </li>
            <li>
              after we created the value in the parent component we wanna go to
              the children component and import the LoginContext which we
              created in Context.js
            </li>
            <li>
              after that we go to the function and access the exported state
              from parent like, "const 'exported states name' =
              useContext(imported Contextname); useContext(importedStatename);
            </li>
          </ul>
          <LoginContext.Provider value={{ loggedin, setLoggedin }}>
            <Home />
            <Profile />
          </LoginContext.Provider>
        </div>
        <div className="demo"></div>
      </div>
    </div>
  );
};

export default UseContext;
