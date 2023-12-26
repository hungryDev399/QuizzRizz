import React, {useState, useEffect} from "react";
import NtPlaceHolder from "../../components/nt-placeholder";
import Material from "../../components/Material";
import { useParams } from 'react-router-dom';

export default function Videos() {
	let { subjectId } = useParams();
	const [videos, setVideos] = useState([{name:"video", material_id:"0", link:"/"}]);
	useEffect(() => {
		fetch(`http://127.0.0.1:8000/api/subjects/${subjectId}/recorded_videos`)
		  .then(response => response.json())
		  .then(data => setVideos(data));
	  }, []);

	return (
		<>
	<NtPlaceHolder content={"Course "+ subjectId + " videos"}/>
	{
	videos.map(video => (
		<div key={video.material_id} className="w-full sm:w-1/2 lg:w-1/3 px-2 my-4">
			<Material name={video.name} material_id={video.material_id} link={video.link}/>
		</div>
	))
	}
	</>
	);
}
