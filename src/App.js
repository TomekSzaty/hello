
import './App.css';
import Employee from './components/Employee';
import { useState } from 'react';

function App() {
  const [role, setRole] = useState("Dev")
  const showEmployees = true; //or false
  return (
    <div className="App">
      {showEmployees ? (
        <>
          < input type="text" 
            onChange={(e) => {
            console.log(e.target.value);
            setRole(e.target.value);
          }}
          />  

          <Employee name="Tom" role="Intern" />
          <Employee name="John" role={role}/>
          <Employee name="Abby"/>
        </>
        ) : (
          <p>You can't see the list of employees</p>
            )}
    </div>
  );
}

export default App;
