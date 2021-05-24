import React from 'react';
import './App.css';
import {BrowserRouter as Router, Link, Switch, Route} from "react-router-dom";
import Header from "./components/Header";
import styled from "styled-components";
import Sidebar from "./components/Sidebar";
import Chat from "./components/Chat";

function App() {
  return (
    <div className="app">
      <Router>
          <>
              <Header />
                  <Switch>
                      <AppBody>
                          <Sidebar />
                      <Route exact path="/">
                      {/*     chat */}
                          <Chat />
                      </Route>
                      </AppBody>
                  </Switch>
             </>
      </Router>
    </div>
  );
}

export default App;

const AppBody = styled.div`
  display: flex;
  height: 100vh;
`;
