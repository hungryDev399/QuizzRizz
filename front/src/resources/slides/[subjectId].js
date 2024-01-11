import React, {useState, useEffect} from "react";
import NtPlaceHolder from "../../components/nt-placeholder";
import Material from "../../components/Material";
import { useParams } from 'react-router-dom';

export default function Slides() {
	let { subjectId } = useParams();
	const [slides, setSlides] = useState([{name:"slide", material_id:"0", link:"/"}]);
	useEffect(() => {
		fetch(`http://csai203back.dtd7gjgpdaczfyc8.eastus2.azurecontainer.io:8000/api/subjects/${subjectId}/slides`)
		  .then(response => response.json())
		  .then(data => setSlides(data));
	  }, []);

	return (
		<>
	<NtPlaceHolder content={"Course "+subjectId + " Slides"}/>
	{
	slides.map(slide => (
		<div key={slide.material_id} className="w-full sm:w-1/2 lg:w-1/3 px-2 my-4">
			<Material name={slide.name} material_id={slide.material_id} link={slide.link}/>
		</div>
	))
	}
	</>
	);
}
