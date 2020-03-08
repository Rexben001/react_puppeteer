import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Homepage from './login';
import Home from './home';

function App() {
  return (
    <div className='App'>
      <Router>
        <Switch>
          <Route exact path='/'>
            <Homepage />
          </Route>
          <Route path='/home'>
            <Home />
          </Route>
        </Switch>
      </Router>
      ,
    </div>
  );
}

export default App;
