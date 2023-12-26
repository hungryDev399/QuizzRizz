import React, {useState, useEffect} from "react";
import { useParams, useNavigate } from 'react-router-dom';

export default function Quiz() {
    let { quizID } = useParams();
    const [questions, setQuestions] = useState([{"id":1,"question_text":"First Question","choices":'["1","2","3","4"]'}]);
	const [answers, setAnswers] = useState({});
	const navigate = useNavigate();

	const handleChoiceSelection = (questionId, selectedChoice) => {
		setAnswers(prevChoices => ({
			...prevChoices,
			[questionId]: selectedChoice
		}));
	};

	const handleSubmit = () => {
		const quiz_id = quizID;
		const student_id = 202201863; 
		fetch(`http://127.0.0.1:8000/api/quizzes/${quiz_id}/${student_id}`, {
			method: 'POST',
			headers: {
			'Content-Type': 'application/json'
			},
			body: JSON.stringify({answers})
		})
		.then(response => response.json())
		.then(data => { navigate('/quizzes/results', { state:  { data } }) })
		.catch(error => { console.error('Error:', error) });
	};

    useEffect(() => {
      fetch(`http://127.0.0.1:8000/api/quizzes/${quizID}/questions`)
        .then(response => response.json())
        .then(data => setQuestions(data));
    }, []);

	return (
        <>
        <div className="flex w-full my-12 px-16 justify-between">
			<h1 className="text-black text-center text-4xl font-semibold leading-10 max-md:max-w-full">Software Engineering: Quiz-{quizID}</h1>
            <h2 className="text-black text-center text-2xl  leading-10 max-md:max-w-full">{questions.length} Questions</h2>
        </div>
        {questions.map(question => (
            <article key={question.id} className="bg-white flex flex-col justify-center px-16 pb-3 rounded">
			<section className="bg-zinc-300 flex w-full rounded-t-md flex-col justify-center mb-2 p-6">
				<h1 className="text-2xl my-2 font-semibold">Question {question.id}</h1>
				<h2 className="text-2xl my-2 font-semibold">{question.question_text}</h2>
			</section>
			{ 
			JSON.parse(question.choices).map((choice,index) => (
				<section className="bg-zinc-300 flex w-full flex-col justify-center p-4 mb-[8px]" key={choice}>
					<div className="inline-flex items-center justify-between">
						<span className="text-lg">{String.fromCharCode(65 + index)}) {choice}</span>
						<label className="relative flex items-center p-3 rounded-full cursor-pointer" htmlFor="react">
							<input
								id={choice}
								name={"Q"+question.id}
								type="radio"
								className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-full border bg-white border-white text-gray-900 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-gray-900 checked:before:bg-gray-900 hover:before:opacity-10"
								onChange={() => handleChoiceSelection(question.id, choice)}
							/>
							<span className="absolute text-gray-900 transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
								<svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 16 16" fill="currentColor">
									<circle data-name="ellipse" cx="8" cy="8" r="8"></circle>
								</svg>
							</span>
						</label>
					</div>
				</section>
			))
			}
		</article>
        ))}
		<div className="ml-auto mb-4 px-16 text-right">
			<button onClick={handleSubmit} className="text-white text-center text-xs font-medium leading-4 whitespace-nowrap justify-center items-stretch rounded bg-black grow px-6 py-3 max-md:px-5">submit</button>
		</div>
        </>
	);
}
