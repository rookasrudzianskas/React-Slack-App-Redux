import React from 'react';
import './App.css';
import {BrowserRouter as Router, Link, Switch, Route} from "react-router-dom";

function App() {
  return (
    <div className="app">
      <Router>
          <>
          <Switch>
              <Route path="/">
                  <h1>Home 🌶️</h1>
              </Route>
          </Switch>
          </>
      </Router>
    </div>
  );
}

export default App;
