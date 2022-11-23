import { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import {v4 as uuidv4} from "uuid";
import NotFound from "../components/NotFound";

export default function Definition() {

    const [word, setWord] = useState();
    const [notFound, setNotFound] = useState(false);
    let {search} = useParams();
    const navigate = useNavigate();

    useEffect(()=>{
        fetch('https://api.dictionaryapi.dev/api/v2/entries/en/' + search)
        .then((response) => {
            if(response.status === 404) {
                setNotFound(true);
            }
            return response.json()
            })
         .then((data) => {
            setWord(data[0].meanings);
            });        
    }, []);
    
    if(notFound===true) {
        return (
        <>
            <NotFound />
            <Link to="/dictionary">Search another word</Link> 
        </>
        );
    }

    return (
        <>            
            {word ? (
                <>
                <h1>Here is the definition:</h1>
                 {word.map((meaning)=>{
                    return(
                        <h4 key={uuidv4()}>
                            {meaning.partOfSpeech + ": "}
                            {meaning.definitions[0].definition}
                            </h4> 
                            );
                })}
                <p><Link to="/dictionary">Search another word</Link></p>
                </>
                ): null}
        </>
    );
}