import React from 'react';
import './App.css';
import UserForm from './Components/UserForm'
import Navigate from './Components/Navigate';



function App() {
  return (
    <>
      <Navigate className='sample'/>


<h1 className='intro-text'> Welcome to InsureAdvisure</h1>
<div className='user-form'>

  <UserForm className='uForm'></UserForm>
  
</div>
    </>
  );
}

export default App;