import React from "react";
import { Link } from "react-router-dom";

export default function Subject({courseName, courseCode}) {
	return (
		<Link to={`./${courseCode}`} className="ms-14 text-white text-2xl font-medium leading-8 my-auto">
		<article className="bg-zinc-300 flex flex-col justify-center px-4 max-md:px-5 rounded">
			<section className="flex w-full max-w-[1216px] flex-col justify-center my-12 px-16 max-md:max-w-full max-md:my-10 max-md:px-5">
				<div className="flex w-[768px] max-w-full flex-col items-center">
					<div className="flex justify-between w-full">
						<h3 className="text-2xl">Name: {courseName}</h3>
						<h3 className="text-2xl">code: {courseCode}</h3>
					</div>
					<div className="flex justify-between w-full mt-8">
					<Link to={`./${courseCode}/slides`} className="w-[75px] text-white text-center text-xs font-medium leading-4 whitespace-nowrap justify-center items-stretch rounded bg-black grow px-6 py-3">
						Slides
					</Link>
					<Link to={`./${courseCode}/lecutures`} className="w-[75px] text-white text-center text-xs font-medium leading-4 whitespace-nowrap justify-center items-stretch rounded bg-black grow px-6 py-3">
						Lecutures
					</Link>
					<Link to={`./${courseCode}/exams`} className="w-[75px] text-white text-center text-xs font-medium leading-4 whitespace-nowrap justify-center items-stretch rounded bg-black grow px-6 py-3">
						Exams
					</Link>
					</div>
					<div className="items-stretch flex gap-4 mt-10  max-md:max-w-full max-md:flex-wrap"></div>
				</div>
			</section>
		</article>
		</Link>
	);
}
