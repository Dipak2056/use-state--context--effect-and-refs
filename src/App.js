import logo from "./logo.svg";
import "./App.css";
import { UseState } from "./components/UseState";
import UseContext from "./components/UseContext";
import UseEffect from "./components/UseEffect";
import ParentComponent from "./components/Not-to-do-react/ParentComponent";

function App() {
  return (
    <div className="wrapper">
      {/* <h1>we are learning all possible hooks</h1>
      <UseState />
      <UseContext />
      <UseEffect /> */}
      <ParentComponent />
    </div>
  );
}

export default App;
