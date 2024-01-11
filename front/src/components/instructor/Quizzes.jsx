import {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import Quiz from "../Quiz";
import { useAtom } from "jotai";
import { signedAtom } from "../../index.js";

export default function Quizzes() {
    const [signed, setSignedState] = useAtom(signedAtom);
    const [quizzes, setQuizzes] = useState([{"id":"1","level_of_difficulty":"easy"},{"id":"2","level_of_difficulty":"medium"},{"id":"3","level_of_difficulty":"hard"}]);

    useEffect(() => {
      fetch('http://csai203back.dtd7gjgpdaczfyc8.eastus2.azurecontainer.io:8000/api/quizzes/instructor/'+ signed.userId)
        .then(response => response.json())
        .then(data => setQuizzes(data));
    }, []);

	return (
        <>
            <div className="flex flex-wrap w-full my-12 px-16">
                <div className="w-full sm:w-1/2 lg:w-1/3 px-2 mb-4">
                <Link to={`./addQuiz`} className="ms-14 text-white text-2xl font-medium leading-8 my-auto">
                    <article className="bg-zinc-300 flex flex-col justify-center px-16 py-11 max-md:px-5 rounded">
                        <section className="flex w-full max-w-[1216px] flex-col justify-center my-12 px-16 max-md:max-w-full max-md:my-10 max-md:px-5">
                            <div className="flex w-[768px] max-w-full flex-col items-center">
                                <div className="self-stretch text-white text-center text-5xl font-semibold leading-10 max-md:max-w-full">
                                    <h3 className="text-3xl">Create A New Quiz</h3>
                                </div>
                                <div className="items-stretch flex gap-4 mt-10  max-md:max-w-full max-md:flex-wrap"></div>
                            </div>
                        </section>
                    </article>
                </Link>
                </div>
                {
                quizzes.map(quiz => (
                    <div key={quiz.id} className="w-full sm:w-1/2 lg:w-1/3 px-2 mb-4">
                        <Quiz quizID={quiz.id} levelOfDifficulty={quiz.level_of_difficulty}/>
                    </div>
                ))
                }
            </div>
        </>
	);
}
