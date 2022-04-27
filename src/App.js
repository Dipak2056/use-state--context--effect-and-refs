import logo from "./logo.svg";
import "./App.css";
import { UseState } from "./components/UseState";
import UseContext from "./components/UseContext";

function App() {
  return (
    <div className="wrapper">
      <h1>we are learning all possible hooks</h1>
      <UseState />
      <UseContext />
    </div>
  );
}

export default App;
