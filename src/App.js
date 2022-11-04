
import './App.css';
import Employee from './components/Employee';

function App() {
  const showEmployees = true; //or false
  return (
    <div className="App">
      {showEmployees ? (
        <>
          <Employee name="Tom" role="Intern" />
          <Employee name="John"/>
          <Employee name="Abby"/>
        </>
        ) : (
          <p>You can't see the list of employees</p>
            )}
    </div>
  );
}

export default App;
