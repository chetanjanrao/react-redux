import React from 'react';
import './App.css';
import CakeView from '../src/Features/cake/CakeView';
import IcecreamView from '../src/Features/icecream/IcecreamView';
import UserView from "../src/Features/user/UserView";

function App() {
  

  return (
    <>
       
      <h1>Vite + React + Redux Toolkit</h1>
      <CakeView />
      <IcecreamView />
      <UserView /> 
    </>
  )
}

export default App
