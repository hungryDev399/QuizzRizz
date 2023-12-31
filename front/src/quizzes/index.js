import React, { useEffect, useState } from 'react';
import NtPlaceHolder from "../components/nt-placeholder";
import DropDown from "../components/DropDown";
import Quiz from "../components/Quiz";

export default function Quizzes() {
    const [quizzes, setQuizzes] = useState([{"id":"1","level_of_difficulty":"easy", "questions":[1,2,3,4,5,6,7,8,9]},{"id":"2","level_of_difficulty":"medium", "questions":[1,2,3,4,5,6,7,8,9]},{"id":"3","level_of_difficulty":"hard", "questions":[1,2,3,4,5,6,7,8,9]}]);

    useEffect(() => {
      fetch('http://127.0.0.1:8000/api/quizzes')
        .then(response => response.json())
        .then(data => setQuizzes(data));
    }, []);
  
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
            {
            quizzes.map(quiz => (
                <div key={quiz.id} className="w-full sm:w-1/2 lg:w-1/3 px-2 mb-4">
                    <Quiz quizID={quiz.id} levelOfDifficulty={quiz.level_of_difficulty} questionsNumber={quiz.questions.length}/>
                </div>
            ))
            }
        </div>
        </>
        
	);
}
