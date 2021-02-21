import React from 'react';
import { HashRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import './App.css';
import HomePage from '../../pages/Home';
import PlayPage from '../../pages/Play';
import RetryPage from '../../pages/Retry';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route path="/play/:playerName/:difficulty">
          <PlayPage />
        </Route>
        <Route path="/retry/:playerName/:difficulty">
          <RetryPage />
        </Route>
        <Route path="*">
          <Redirect to="/" />
        </Route>
      </Switch>
    </Router>
  )
}

export default App;
