import React from 'react';
import './App.css';
import UserForm from './Components/UserForm'
import Navigate from './Components/Navigate';
import Redirect from './Components/Redirect';
import BrokerForm from './Components/BrokerForm';
import ContactForm from './Components/ContactForm';
import AboutForm from './Components/AboutForm';
import PostSubmit from './Components/PostSubmit'
import Matches from './Components/Matches';

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
          
            <div className = 'tt'>
            <div class="deconstructed">
  Trusted
  <div>Trusted</div>
  <div>Trusted</div>
  <div>Trusted</div>
  <div>Trusted</div>
</div>
</div>

<div className = 'ttt'>
            <div class="deconstructed">
  Quotes
  <div>Quotes</div>
  <div>Quotes</div>
  <div>Quotes</div>
  <div>Quotes</div>
</div>
</div>


          </Route>
          <Route path="/user-form">
            <div className='user-form'>
              <UserForm className='uForm'></UserForm>       
            </div>
          </Route>
          <Route path="/broker-form">
            <div className='user-form'>
              <BrokerForm className='uForm'></BrokerForm>       
            </div>
          </Route>
          <Route path="/contact">
            <div className='user-form'>
              <ContactForm className='uForm'></ContactForm>       
            </div>
          </Route>
          <Route path="/about">
            <div className='user-form'>
              <AboutForm className='uForm'></AboutForm>       
            </div>
          </Route>
          <Route path="/post-submit">
            <PostSubmit />
          </Route>
          <Route path="/matches">
            <Matches />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;