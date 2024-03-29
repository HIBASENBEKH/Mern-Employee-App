import './App.css';
import React from 'react';
import {Routes, Route} from 'react-router-dom';
import Login from './components/Login';
import EmployeeList from './components/EmployeeList';

function App() {
  return (
    <>
    <Routes>
    
    <Route path='/' element={<Login/>}>  </Route>
    <Route path='/employee' element={<EmployeeList/>}>  </Route>   
      
    </Routes>
    </>
  );
}

export default App;

