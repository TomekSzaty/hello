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

    
        {props.role ? (
        <p class="role">{props.role}</p> // different way to write the same thing
        ) : (
        <p class="norole">No role.</p>
        )}
    
    </>
    )
}

export default Employee;