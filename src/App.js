import React from 'react';
import './App.css';
import {BrowserRouter as Router, Link, Switch, Route} from "react-router-dom";
import Header from "./components/Header";
import styled from "styled-components";
import Sidebar from "./components/Sidebar";
import Chat from "./components/Chat";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./firebase";
import firebase from "firebase";
import Login from "./components/Login";

function App() {
    const [user, loading] = useAuthState(auth);
  return (
    <div className="app">
      <Router>
          {!user ? (
              // <h1>Hello</h1>
              <Login />
          ) : (
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
          )}
      </Router>
    </div>
  );
}

export default App;

const AppBody = styled.div`
  display: flex;
  height: 100vh;
`;
