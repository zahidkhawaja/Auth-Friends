import React from 'react';
import './App.css';
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import Home from "./components/Home";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
    <div className="App">
      <header className="App-header">
       <nav className = "navigation">
         <Link to = "/">Home</Link>
         <Link to = "/login">Login</Link>
         <Link to = "/dashboard">Dashboard</Link>
       </nav>
      </header>
      <Switch>

        <Route exact path = "/">
          <Home/>
        </Route>

        <Route exact path = "/login">
          <Login/>
        </Route>

        <Route exact path = "/dashboard">
          <Dashboard/>
        </Route>

      </Switch>
    </div>
    </Router>
  );
}

export default App;
