import {useEffect, useState} from 'react';
import { useLocation } from 'react-router-dom';
import NtPlaceHolder from "../components/nt-placeholder";

export default function Results() {
    const location = useLocation();
    const result = location.state.data;
    const numberOfQuestions = location.state.numberOfQuestions;
    const [messege, setMessege] = useState("");
    useEffect(()=>
    {
        if(result > (numberOfQuestions/2)){
            fetch(`http://csai203back.dtd7gjgpdaczfyc8.eastus2.azurecontainer.io:8000/api/messages/motivational`)
            .then(response => response.json())
            .then(data => setMessege(data["message"]));
        }
        else {
            fetch(`http://csai203back.dtd7gjgpdaczfyc8.eastus2.azurecontainer.io:8000/api/messages/rizz`)
            .then(response => response.json())
            .then(data => setMessege(data["message"]));
        }
    },[])
    
	return (
        <>
            <NtPlaceHolder content={"Your result is " + result["grade"] + " out of " + numberOfQuestions} subContent={messege}/>
        </>
	);
}
