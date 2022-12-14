import EditEmployee from "./EditEmpolyee";

function Employee(props) {
//remember the keyword "return" when create component
    return (
        <div className="min-w-[350px] max-w-[350px] m-2 py-8 px-4 max-w-sm  bg-white rounded-xl shadow-lg space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-16">
            <img className="object-cover h-[120px] w-[100px] mx-auto h-24 rounded-md sm:mx-0 sm:shrink-0" 
                    src={props.img} alt="Face"/>
                <div className="text-center space-y-2 sm:text-left">
                    <div className="space-y-0.5">
                        <p className="text-lg text-black font-semibold">
                            {props.name}
                        </p>
                        <p className="text-slate-500 font-medium">
                            {props.role}
                        </p>
                    </div>
                    {props.editEmployee}         
                </div>
        </div>
    )
}
export default Employee;