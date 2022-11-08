function Employee(props) {
//remember the keyword "return" when create component
    return (
    <>    
    <h2>
        Here is an employee {props.name}!       
    </h2>

    <p>
        {props.role ? props.role : "No role."}
    </p>
    
    </>
    )
}

export default Employee;