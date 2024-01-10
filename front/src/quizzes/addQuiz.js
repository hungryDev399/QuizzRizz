import React from 'react';
import { useNavigate } from 'react-router-dom';
import { atom, useAtom } from "jotai";
import { signedAtom } from "../index.js";

export const quizAtom = atom({subject_id: 0, instructor_id: 0, questionsNumber:0, questions: [], difficultyLevel: ""});

export default function AddQuiz() {
	const [signed, setSignedState] = useAtom(signedAtom);
	const [quiz, setQuiz] = useAtom(quizAtom);
	const navigate = useNavigate();
	const handleSubmit = (event) => {
		event.preventDefault();
		navigate('/quizzes/addQuestions');
	}
	quiz.instructor_id = signed.userId;

	return (
		<div className="justify-between">
			<div className="flex max-md:flex-col max-md:items-stretch max-md:gap-0">
				<div className="flex flex-col items-stretch w-6/12 max-md:w-full max-md:ml-0">
					<div className="justify-center items-center self-stretch flex flex-col px-16 py-12 max-md:max-w-full max-md:px-5">
						<div className="flex w-[480px] max-w-full flex-col mt-24 mb-16 items-start max-md:my-10">
							<div className="self-stretch text-zinc-900 text-5xl leading-[72px] max-md:max-w-full max-md:text-4xl max-md:leading-[67px]">
								Create a Quiz
							</div>
                            <form onSubmit={handleSubmit} className="flex flex-col items-stretch mt-8 max-md:max-w-full">
                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                                    Subject ID
                                </label>
                                <input
                                    type="number"
									onChange={(input) => {quiz.subject_id = input.target.value}}
                                    className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-[350px] py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-balck" placeholder="Subject 1"
                                />
								<label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 mt-4">
                                    Number of Questions
                                </label>
                                <input
                                    type="number"
									onChange={(input) => {quiz.questionsNumber = input.target.value}}
                                    className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-[350px] py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-balck" placeholder="e.g. 10"
                                />
                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 mt-4">
									Quiz Difficulty
                                </label>
                                <input
                                    type="text"
									onChange={(input) => quiz.difficultyLevel = input.target.value}
                                    className="bg-gray-200 appearance-none mb-2 border-2 border-gray-200 rounded w-[350px] py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-balck" placeholder="easy/medium/hard"
                                />
                                <input type="submit" value="Next" className="cursor-pointer text-zinc-50 text-center text-sm font-medium leading-5 whitespace-nowrap justify-center items-stretch rounded bg-black mt-4 px-8 py-4 max-md:px-5"/>
                            </form>
						</div>
					</div>
				</div>{" "}
				<div className="flex flex-col items-stretch h-full w-6/12 max-md:w-full max-md:ml-0">
					<img
						loading="lazy"
						alt="Zewail City Image"
						srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/dbba3f08048f5174219b199133e3285ff3379663b5114269f8f918fea56a591b?apiKey=40ccfb43f9d74200a653aadda4967b2e&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/dbba3f08048f5174219b199133e3285ff3379663b5114269f8f918fea56a591b?apiKey=40ccfb43f9d74200a653aadda4967b2e&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/dbba3f08048f5174219b199133e3285ff3379663b5114269f8f918fea56a591b?apiKey=40ccfb43f9d74200a653aadda4967b2e&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/dbba3f08048f5174219b199133e3285ff3379663b5114269f8f918fea56a591b?apiKey=40ccfb43f9d74200a653aadda4967b2e&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/dbba3f08048f5174219b199133e3285ff3379663b5114269f8f918fea56a591b?apiKey=40ccfb43f9d74200a653aadda4967b2e&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/dbba3f08048f5174219b199133e3285ff3379663b5114269f8f918fea56a591b?apiKey=40ccfb43f9d74200a653aadda4967b2e&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/dbba3f08048f5174219b199133e3285ff3379663b5114269f8f918fea56a591b?apiKey=40ccfb43f9d74200a653aadda4967b2e&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/dbba3f08048f5174219b199133e3285ff3379663b5114269f8f918fea56a591b?apiKey=40ccfb43f9d74200a653aadda4967b2e&"
						className="aspect-square object-contain object-center w-full overflow-hidden max-md:max-w-full"
					/>
				</div>
			</div>
		</div>
	);
}
