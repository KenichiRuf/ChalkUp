import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import Register from "./components/Register";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import FindRoutes from "./components/FindRoutes";

function App() {
  return (
    <Router>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/register" component={Register} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/dashboard" component={Dashboard} />
      <Route exact path="/find-routes" component={FindRoutes} />
    </Router>
  );
}

export default App;
