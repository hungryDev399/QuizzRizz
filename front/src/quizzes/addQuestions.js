import React, { useState } from 'react';
import { useAtom } from "jotai";
import { quizAtom } from "./addQuiz.js";
import { Link, useNavigate } from 'react-router-dom';

export default function AddQuestions() {
	const [quiz, setQuiz] = useAtom(quizAtom);
	const navigate = useNavigate();

	const [currentQuestionNumber, setCurrentQuestionNumber] = useState(1);
	const [formValues, setFormValues] = useState({title: '', type: "MCQ", choiceA: '', choiceB: '', choiceC: '', choiceD: '', correctAnswer: ''});
	
	const handleChange = (event) => {
		setFormValues({
		  ...formValues,
		  [event.target.name]: event.target.value
		});
	  };

	const handleSubmit = (event) => {
		event.preventDefault();
		fetch(`http://127.0.0.1:8000/api/question/create`, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({
					question_text: formValues.title,
					question_type:  formValues.type,
					correct_answer: formValues.correctAnswer,
					choices: JSON.stringify([formValues.choiceA, formValues.choiceB, formValues.choiceC, formValues.choiceD])
				})
			})
			.then(response => response.json())
			.then(data => {
				quiz.questions.push(data.question.id);
				setFormValues({title: '', type: "MCQ", choiceA: '', choiceB: '', choiceC: '', choiceD: '', correctAnswer: ''});
				setCurrentQuestionNumber(currentQuestionNumber + 1);
			})
			.catch(error => { console.error('Error:', error) });
	}

	const createQuiz = (event) => {
		event.preventDefault();
		fetch(`http://127.0.0.1:8000/api/quizzes/create`, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({
					subject_id: quiz.subject_id,
					instructor_id: quiz.instructor_id,
					questions: quiz.questions,
					level_of_difficulty: quiz.difficultyLevel
				})
			})
			.then(response => {
				if (response.status === 200) {
					console.log("Done");
					navigate('/quizzes');
				}
				else {
					console.log("Something went wrong");
				}
			})
			.catch(error => { console.error('Error:', error) });
	}

	const discareQuiz = (event) => {
		event.preventDefault();
		setQuiz({subject_id: 0, instructor_id: 0, questionsNumber:0, questions: [], difficultyLevel: ""});
		navigate('/quizzes');
	}

	return (
		
		<div className="justify-between">
			<div className="flex max-md:flex-col max-md:items-stretch max-md:gap-0">
				<div className="flex flex-col items-stretch w-6/12 max-md:w-full max-md:ml-0">
					<div className="justify-center items-center self-stretch flex flex-col px-16 py-12 max-md:max-w-full max-md:px-5">
						<div className="flex w-[480px] max-w-full flex-col mt-18 mb-16 items-start max-md:my-10">
                            {currentQuestionNumber <= quiz.questionsNumber ? (
								<form onSubmit={handleSubmit} className="flex flex-col items-stretch max-md:max-w-full">
								<div className='mb-8'>
									<div className="self-stretch text-zinc-900 text-5xl leading-[72px] max-md:max-w-full max-md:text-4xl max-md:leading-[67px] mb-4">
										Question {currentQuestionNumber}
									</div>
									<label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
										Title
									</label>
									<input
										type="text"
										name="title"
										value={formValues.title}
										onChange={handleChange}
										className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-[350px] py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-balck" placeholder="Question title"
									/>
									<label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 mt-4">
										Choice A)
									</label>
									<input
										type="text"
										name="choiceA"
										value={formValues.choiceA}
										onChange={handleChange}
										className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-[350px] py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-balck" placeholder="Choice A"
									/>
									<label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 mt-4">
										Choice B)
									</label>
									<input
										type="text"
										name="choiceB"
										value={formValues.choiceB}
										onChange={handleChange}
										className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-[350px] py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-balck" placeholder="Choice B"
									/>
									<label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 mt-4">
										Choice C)
									</label>
									<input
										type="text"
										name="choiceC"
										value={formValues.choiceC}
										onChange={handleChange}
										className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-[350px] py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-balck" placeholder="Choice C"
									/>
									<label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 mt-4">
										Choice D)
									</label>
									<input
										type="text"
										name="choiceD"
										value={formValues.choiceD}
										onChange={handleChange}
										className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-[350px] py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-balck" placeholder="Choice D"
									/>
									<label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 mt-4">
										Correct Answer
									</label>
									<input
										type="text"
										name="correctAnswer"
										value={formValues.correctAnswer}
										onChange={handleChange}
										className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-[350px] py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-balck" placeholder="Choice C"
									/>
								</div>
								{currentQuestionNumber == quiz.questionsNumber ? <input type="submit" value="Finish" className="cursor-pointer text-zinc-50 text-center text-sm font-medium leading-5 whitespace-nowrap justify-center items-stretch rounded bg-black mt-4 px-8 py-4 max-md:px-5"/>: <input type="submit" value="Next Question" className="cursor-pointer text-zinc-50 text-center text-sm font-medium leading-5 whitespace-nowrap justify-center items-stretch rounded bg-black mt-4 px-8 py-4 max-md:px-5"/>}
                            </form>
							):(
							<div className="flex flex-col items-stretch max-md:max-w-full h-[500px]">
								<div className='mb-8'>
									<div className="self-stretch text-zinc-900 text-5xl leading-[72px] max-md:max-w-full max-md:text-4xl max-md:leading-[67px] mb-4">
										You have created {quiz.questionsNumber} {quiz.questionsNumber == 1? "question": "questions"}, are you sure you want to create the quiz?
									</div>
									<div className='flex justify-between'>
										<button  onClick={discareQuiz} className="cursor-pointer text-zinc-50 text-center text-sm font-medium leading-5 whitespace-nowrap justify-center items-stretch rounded bg-black mt-4 px-8 py-4 max-md:px-5">
											Go to Quizzes Page
										</button>
										<button onClick={createQuiz} className="cursor-pointer text-zinc-50 text-center text-sm font-medium leading-5 whitespace-nowrap justify-center items-stretch rounded bg-black mt-4 px-8 py-4 max-md:px-5">
											Create The Quiz
										</button>
									</div>
								</div>
							</div>
							)}
							
						</div>
					</div>
				</div>
				<div className="flex flex-col items-stretch h-full w-6/12 max-md:w-full max-md:ml-0">
					<img
						loading="lazy"
						alt="Zewail City Image"
						srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/dbba3f08048f5174219b199133e3285ff3379663b5114269f8f918fea56a591b?apiKey=40ccfb43f9d74200a653aadda4967b2e&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/dbba3f08048f5174219b199133e3285ff3379663b5114269f8f918fea56a591b?apiKey=40ccfb43f9d74200a653aadda4967b2e&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/dbba3f08048f5174219b199133e3285ff3379663b5114269f8f918fea56a591b?apiKey=40ccfb43f9d74200a653aadda4967b2e&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/dbba3f08048f5174219b199133e3285ff3379663b5114269f8f918fea56a591b?apiKey=40ccfb43f9d74200a653aadda4967b2e&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/dbba3f08048f5174219b199133e3285ff3379663b5114269f8f918fea56a591b?apiKey=40ccfb43f9d74200a653aadda4967b2e&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/dbba3f08048f5174219b199133e3285ff3379663b5114269f8f918fea56a591b?apiKey=40ccfb43f9d74200a653aadda4967b2e&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/dbba3f08048f5174219b199133e3285ff3379663b5114269f8f918fea56a591b?apiKey=40ccfb43f9d74200a653aadda4967b2e&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/dbba3f08048f5174219b199133e3285ff3379663b5114269f8f918fea56a591b?apiKey=40ccfb43f9d74200a653aadda4967b2e&"
						className=" aspect-square object-contain object-center w-full overflow-hidden max-md:max-w-full"
					/>
				</div>
			</div>
		</div>
	);
}
