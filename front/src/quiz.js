import React from "react";
import Question from "./components/Question";

export default function quiz() {
	return (
        <>
        <div className="flex w-full my-12 px-16 justify-between">
            <h1 className="text-black text-center text-4xl font-semibold leading-10 max-md:max-w-full">Software Engineering: Quiz-1</h1>
            <h2 className="text-black text-center text-2xl  leading-10 max-md:max-w-full">15 Questions</h2>
        </div>
        <Question />
        <Question />
        </>
	);
}
