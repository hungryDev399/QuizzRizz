import React, {useState, useEffect} from "react";
import NtPlaceHolder from "../../components/nt-placeholder";
import Material from "../../components/Material";
import { useParams } from 'react-router-dom';

export default function Exams() {
	let { subjectId } = useParams();
	const [exams, setExams] = useState([{name:"exam", material_id:"0", link:"/"}]);
	useEffect(() => {
		fetch(`http://127.0.0.1:8000/api/subjects/${subjectId}/past_exams`)
		  .then(response => response.json())
		  .then(data => setExams(data));
	  }, []);

	return (
		<>
	<NtPlaceHolder content={"Course "+subjectId + " exams"}/>
	{
	exams.map(exam => (
		<div key={exam.material_id} className="w-full sm:w-1/2 lg:w-1/3 px-2 my-4">
			<Material name={exam.name} material_id={exam.material_id} link={exam.link}/>
		</div>
	))
	}
	</>
	);
}
