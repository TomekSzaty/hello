import './index.css';
import Employee from './components/Employee';
import AddEmployee from "./components/AddEmployee";
import EditEmployee from './components/EditEmpolyee';
import { useState } from 'react';
import {v4 as uuidv4} from "uuid";
import Header from './components/Header';
import Employees from './pages/Employees';

function App() {

  return (
  <Header>
    <Employees />
  </Header>
  );
}

export default App;
