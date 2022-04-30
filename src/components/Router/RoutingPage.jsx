import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { FormComponent } from "../Form/FormComponent";
import { Home } from "../Home";
import PracticeForm from "../FormPractice/PracticeForm";
import Pagenotfound from "./Pagenotfound";

const RoutingPage = () => {
  return (
    <Router>
      <nav>
        <Link to="/">Form Component</Link> <br />
        <Link to="/practice">Form practice</Link> <br />
        <Link to="/home">Home Component</Link>
      </nav>
      <Routes>
        <Route path="/" element={<FormComponent />} />
        <Route path="/practice/" element={<PracticeForm />} />
        <Route path="/home/:username" element={<Home />} />
        <Route path="*" element={<Pagenotfound />} />
      </Routes>
    </Router>
  );
};

export default RoutingPage;
