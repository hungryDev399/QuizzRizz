import React from "react";
import { Link } from "react-router-dom";

export default function Subject({courseName, courseCode}) {
	return (
		<Link to={`./${courseCode}`} className="ms-14 text-white text-2xl font-medium leading-8 my-auto">
		<article className="bg-zinc-300 flex flex-col justify-center px-16 py-11 max-md:px-5 rounded">
			<section className="flex w-full max-w-[1216px] flex-col justify-center my-12 px-16 max-md:max-w-full max-md:my-10 max-md:px-5">
				<div className="flex w-[768px] max-w-full flex-col items-center">
					<div className="self-stretch text-white text-center text-5xl font-semibold leading-10 max-md:max-w-full">
						<h3>Name: {courseName}</h3>
						<h3>code: {courseCode}</h3>
					</div>
					<div className="items-stretch flex gap-4 mt-10  max-md:max-w-full max-md:flex-wrap"></div>
				</div>
			</section>
		</article>
		</Link>
	);
}
