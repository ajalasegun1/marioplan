import React from "react";

import { BrowserRouter, Route, Switch } from "react-router-dom";

import "./index.css";

import Navbar from "./components/layouts/Navbar";
import Dashboard from "./components/dashboard/Dashboard";
import ProjectDetails from "./components/projects/ProjectDetails";
import Signin from "./components/auth/Signin";
import Signup from "./components/auth/Signup";
import CreateProject from "./components/projects/CreateProject";
import EditProject from "./components/projects/EditProject";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route path="/project/:id" component={ProjectDetails} />
          <Route path="/signin" component={Signin} />
          <Route path="/signup" component={Signup} />
          <Route path="/create" component={CreateProject} />
          <Route path="/edit/:edit_id" component={EditProject} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
