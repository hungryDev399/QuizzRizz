import React from "react";
import NtPlaceHolder from "./components/nt-placeholder";
import DropDown from "./components/DropDown";
import Quiz from "./components/Quiz";

export default function quizzes() {
	return (
        <>
        <NtPlaceHolder content="Quizzes"/>
        <header className="bg-black flex w-full h-12 items-stretch justify-between gap-5 max-md:max-w-full max-md:flex-wrap max-md:justify-center">
                <div className="text-center text-base leading-6 ms-14">
                    <DropDown width="w-[100%]" defaultOption="major" options={["CSAI", "Science", "Business"]}/>
                </div>
                <div className="text-center text-base leading-6">
                    <DropDown width="w-[100%]" defaultOption="concentration" options={["CSAI", "Science", "Business"]}/>
                </div>
                <div className="text-center text-base leading-6 me-14">
                    <DropDown width="w-[100%]" defaultOption="subject" options={["CSAI", "Science", "Business"]}/>
                </div>
        </header>
        <div className="flex flex-wrap w-full my-12 px-16">
            <div className="w-full sm:w-1/2 lg:w-1/3 px-2 mb-4">
                <Quiz/>
            </div>
            <div className="w-full sm:w-1/2 lg:w-1/3 px-2 mb-4">
                <Quiz/>
            </div>
            <div className="w-full sm:w-1/2 lg:w-1/3 px-2 mb-4">
                <Quiz/>
            </div>
            <div className="w-full sm:w-1/2 lg:w-1/3 px-2 mb-4">
                <Quiz/>
            </div>
            <div className="w-full sm:w-1/2 lg:w-1/3 px-2 mb-4">
                <Quiz/>
            </div>
        </div>
        </>
        
	);
}
