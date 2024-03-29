import React, { useEffect, useState } from 'react';
import { useAtom } from "jotai";
import { signedAtom } from "../index.js";
import NtPlaceHolder from "../components/nt-placeholder";
import DropDown from "../components/DropDown";
import Subject from "../components/subject";

export default function Resources() {
    const [signed, setSignedState] = useAtom(signedAtom);
    const [subjects, setSubjects] = useState([{"course_name":"","course_code":""}]);

    useEffect(() => {
      fetch('http://csai203back.dtd7gjgpdaczfyc8.eastus2.azurecontainer.io:8000/api/subjects')
        .then(response => response.json())
        .then(data => setSubjects(data));
    }, []);
  
	return (
        signed ? (
        <>
        <NtPlaceHolder content="Resources"/>
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
            {
            subjects.map(subject => (
                <div key={subject.course_code} className="w-full sm:w-1/2 lg:w-1/3 px-2 mb-4">
                    <Subject courseName={subject.name} courseCode={subject.course_code}/>
                </div>
            ))
            }
        </div>
        </>) : <NtPlaceHolder content="You need to sign in to access this"/>
        
	);
}
