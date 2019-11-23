import React from 'react';
import './App.css';
import UserForm from './Components/UserForm'
import Navigate from './Components/Navigate';
import Redirect from './Components/Redirect';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


function App() {
  return (
    <Router>
      <div>
        <Navigate className='sample'/>
        <Switch>
          <Route exact path="/">
            <h1 className='intro-text'> Welcome to InsureAdvisor</h1>
            <Redirect />
          </Route>
          <Route path="/user-form">
            <div className='user-form'>
              <UserForm className='uForm'></UserForm>       
            </div>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;