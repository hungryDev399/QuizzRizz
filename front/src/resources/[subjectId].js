import React from "react";
import NtPlaceHolder from "../components/nt-placeholder";
import { useParams, useNavigate } from 'react-router-dom';

export default function Resource() {
	let { subjectID } = useParams();

	useEffect(() => {
		fetch(`http://127.0.0.1:8000/api/subjects/subjectID/slides`)
		  .then(response => response.json())
		  .then(data => setQuestions(data));
	  }, []);

	return (
	<NtPlaceHolder content={subjectID}/>
	);
}
