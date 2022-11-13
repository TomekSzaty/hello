
import './index.css';
import Employee from './components/Employee';
import { useState } from 'react';
import {v4 as uuidv4} from "uuid";

function App() {
  const [role, setRole] = useState("JavaJDev");
  const [employees, setEmployees] = useState([
    {
      id: 1,
      name: "Rooki",
      role: "Intern",
      img: "https://images.pexels.com/photos/2741701/pexels-photo-2741701.jpeg"
    },
    {
      id: 2,
      name: "Noemi",
      role: "JuniorDev",
      img: "https://images.pexels.com/photos/3220360/pexels-photo-3220360.jpeg"
    },
    {
      id: 3,
      name: "Mike",
      role: "Manager",
      img: "https://images.pexels.com/photos/4612113/pexels-photo-4612113.jpeg"
    },
    {
      id: 4,
      name: "Donna",
      role: "SeniorDev",
      img: "https://images.pexels.com/photos/4355346/pexels-photo-4355346.jpeg"
    },
    {
      id: 5,
      name: "Anna",
      role: "Intern",
      img: "https://images.pexels.com/photos/1933873/pexels-photo-1933873.jpeg"
    },
    {
      id: 6,
      name: "Joana",
      role: "CEO",
      img: "https://images.pexels.com/photos/2709388/pexels-photo-2709388.jpeg"
    }
  ]);

  function updateEmployee(id, newName, newRole){
    console.log("update from inside App.js")
    const updatedEmloyees = employees.map((employee) => {
      if(id == employee.id) {
        return {...employee, name: newName, role: newRole}
      }

      return employee;

    });
    setEmployees(updatedEmloyees);
  }
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
          <div className='flex flex-wrap justify-center'>          
            {employees.map((employee) => {
              console.log(employee);
              console.log(uuidv4());
              return (
                <Employee 
                  key={employee.id}
                  id={employee.id}
                  name={employee.name} 
                  role={employee.role} 
                  img={employee.img} 
                  updateEmployee={updateEmployee} 
                />  
              );
            })}
          </div>
        </>
        ) : (
          <p>You can't see the list of employees</p>
            )}
    </div>
  );
}

export default App;
