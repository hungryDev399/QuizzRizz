import React from "react";

export default function Question() {
	return (
		<article className="bg-white flex flex-col justify-center px-16 pb-3 rounded">
			<section className="bg-zinc-300 flex w-full rounded-t-md flex-col justify-center mb-2 p-6">
			<h1 className="text-2xl my-2 font-semibold">Question 1</h1>
			<h2 className="text-2xl my-2 font-semibold">What is the prefable time for a sprint?</h2>
			</section>
			<form>
			<section className="bg-zinc-300 flex w-full flex-col justify-center p-4 mb-[8px]">
					<div class="inline-flex items-center justify-between">
						<span className="text-lg">A) What is the prefable time for a sprint?</span>
						<label class="relative flex items-center p-3 rounded-full cursor-pointer" htmlFor="react">
						<input id="A" name="Q1" type="radio"
							class="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-full border bg-white border-white text-gray-900 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-gray-900 checked:before:bg-gray-900 hover:before:opacity-10"
							/>
						<span
							class="absolute text-gray-900 transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
							<svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5" viewBox="0 0 16 16" fill="currentColor">
							<circle data-name="ellipse" cx="8" cy="8" r="8"></circle>
							</svg>
						</span>
						</label>
					</div>
				</section>
				<section className="bg-zinc-300 flex w-full flex-col justify-center p-4 mb-[8px]">
					<div class="inline-flex items-center justify-between">
						<span className="text-lg">B) What is the prefable time for a sprint?</span>
						<label class="relative flex items-center p-3 rounded-full cursor-pointer" htmlFor="react">
						<input id="B" name="Q1" type="radio"
							class="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-full border bg-white border-white text-gray-900 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-gray-900 checked:before:bg-gray-900 hover:before:opacity-10"
							/>
						<span
							class="absolute text-gray-900 transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
							<svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5" viewBox="0 0 16 16" fill="currentColor">
							<circle data-name="ellipse" cx="8" cy="8" r="8"></circle>
							</svg>
						</span>
						</label>
					</div>
				</section>
				<section className="bg-zinc-300 flex w-full flex-col justify-center p-4 mb-[8px]">
					<div class="inline-flex items-center justify-between">
						<span className="text-lg">C) What is the prefable time for a sprint?</span>
						<label class="relative flex items-center p-3 rounded-full cursor-pointer" htmlFor="react">
						<input id="C" name="Q1" type="radio"
							class="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-full border bg-white border-white text-gray-900 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-gray-900 checked:before:bg-gray-900 hover:before:opacity-10"
							/>
						<span
							class="absolute text-gray-900 transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
							<svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5" viewBox="0 0 16 16" fill="currentColor">
							<circle data-name="ellipse" cx="8" cy="8" r="8"></circle>
							</svg>
						</span>
						</label>
					</div>
				</section>
				<section className="bg-zinc-300 rounded-b-md flex w-full flex-col justify-center p-4 mb-[8px]">
					<div class="inline-flex items-center justify-between">
						<span className="text-lg">D) What is the prefable time for a sprint?</span>
						<label class="relative flex items-center p-3 rounded-full cursor-pointer" htmlFor="react">
						<input id="D" name="Q1" type="radio"
							class="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-full border bg-white border-white text-gray-900 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-gray-900 checked:before:bg-gray-900 hover:before:opacity-10"
							/>
						<span
							class="absolute text-gray-900 transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
							<svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5" viewBox="0 0 16 16" fill="currentColor">
							<circle data-name="ellipse" cx="8" cy="8" r="8"></circle>
							</svg>
						</span>
						</label>
					</div>
				</section>
			</form>
		</article>
	);
}
