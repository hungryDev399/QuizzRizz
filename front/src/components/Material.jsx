import React from "react";
import { Link } from "react-router-dom";

export default function Material({ name, material_id, link}) {
	return (
		<Link to={link}>
		<article className="bg-white flex flex-col justify-center px-16 pb-3 rounded">
			<section className="bg-zinc-300 flex w-full rounded-md flex-col justify-center mb-2 p-6">
				<h1 className="text-2xl my-2 font-semibold">{name}</h1>
				<h2 className="text-2xl my-2 font-semibold">{material_id}</h2>
			</section>
		</article>
		</Link>
	);
}