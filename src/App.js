
import './App.css';
import Employee from './components/Employee';

function App() {
  console.log("We are about to list the empoyees");
  const showEmployees = true; //or false
  return (
    <div className="App">
      {console.log("From inside the return")}
      {showEmployees ? (
        <>
          <Employee />
          <Employee />
          <Employee />
        </>
        ) : (
          <p>You can't see the list of employees</p>
            )}
    </div>
  );
}

export default App;
