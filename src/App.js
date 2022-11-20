import './index.css';
import Employee from './components/Employee';
import AddEmployee from "./components/AddEmployee";
import EditEmployee from './components/EditEmpolyee';
import { useState } from 'react';
import {v4 as uuidv4} from "uuid";
import Header from './components/Header';
import Employees from './pages/Employees';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Customers from './pages/Customers';

function App() {
  return (
  <BrowserRouter>
    <Header>    
      <Routes>
        <Route path='/employees' element={<Employees />} />
        
        <Route path='/customers' element={<Customers />} />
      </Routes>
    </Header>
  </BrowserRouter>
  
  );
}

export default App;
