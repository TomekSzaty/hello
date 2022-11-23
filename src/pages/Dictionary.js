import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";

export default function Dictionary() {
    const[word, setWord] = useState('');
    const navigate = useNavigate();

    return (
        <>
            <input
                type="text"
                onChange={(e)=>{
                    setWord(e.target.value);
                }}
            />
            <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-4'
                onClick={()=>{
                    navigate("/definition/" + word, {replace: true});
                }}>
                Search
            </button>
             
           
        </>
    );
}