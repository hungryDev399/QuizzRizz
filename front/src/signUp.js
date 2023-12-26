import React from "react";
import DropDown from "./components/DropDown";
export default function signUp() {
    // const [choices, setChoices] = useState({});
    // const handleChoiceSelection = (questionId, selectedChoice) => {
	// 	setChoices(prevChoices => ({
	// 		...prevChoices,
	// 		[questionId]: selectedChoice
	// 	}));
	// };

    // const handleSubmit = () => {
	// 	const quiz_id = quizID;
	// 	const student_id = 202201863; 
	// 	fetch(`http://127.0.0.1:8000/api/quizzes/${quiz_id}/${student_id}`, {
	// 		method: 'POST',
	// 		headers: {
	// 		'Content-Type': 'application/json'
	// 		},
	// 		body: JSON.stringify({answers})
	// 	})
	// 	.then(response => response.json())
	// 	.then(data => { navigate('/quizzes/results', { state:  { data } }) })
	// 	.catch(error => { console.error('Error:', error) });
	// };

	return (
		<div className="justify-between">
			<div className="flex max-md:flex-col max-md:items-stretch max-md:gap-0">
				<div className="flex flex-col items-stretch w-6/12 max-md:w-full max-md:ml-0">
					<div className="justify-center items-center self-stretch flex flex-col px-16 py-12 max-md:max-w-full max-md:px-5">
						<div className="flex w-[480px] max-w-full flex-col mt-24 mb-16 items-start max-md:my-10">
							<div className="self-stretch text-zinc-900 text-5xl leading-[72px] max-md:max-w-full max-md:text-4xl max-md:leading-[67px]">
								Sign Up
							</div>
                            <form className="flex flex-col items-stretch mt-8 max-md:max-w-full">
                                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-[350px] py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-balck" placeholder="Joe"
                                />
                                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 mt-4">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-[350px] py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-balck" placeholder="s-firstname.lastname@zeawilcity.edu.eg"
                                />
                                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 mt-4">
                                    Phone number
                                </label>
                                <input
                                    type="number"
                                    id="phone"
                                    className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-[350px] py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-balck" placeholder="s-firstname.lastname@zeawilcity.edu.eg"
                                />
                                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 mt-4">
                                    Password
                                </label>
                                <input
                                    type="password"
                                    id="password"
                                    className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-[350px] py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-balck" placeholder="******************"
                                />
                                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 mt-4">
                                    Confirm Password
                                </label>
                                <input
                                    type="password"
                                    id="confirm_password"
                                    className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-[350px] py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-balck" placeholder="******************"
                                />
                                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 mt-4">
                                    National id
                                </label>
                                <input
                                    type="number"
                                    id="national_id"
                                    className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-[350px] py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-balck" placeholder="12345678901234"
                                />
                                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 mt-4">
                                    University id
                                </label>
                                <input
                                    type="number"
                                    id="university_id"
                                    className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-[350px] py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-balck" placeholder="12345678901234"
                                />
                                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 mt-4">
                                    School
                                </label>
                                <DropDown width= "w-[350px]" defaultOption="choose your school" options={["CSAI", "Science", "Business"]}/>
                                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 mt-4">
                                    Major
                                </label>
                                <DropDown width= "w-[350px]" defaultOption="choose your major" options={["CSAI", "Science", "Business"]}/>
                                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 mt-4">
                                    Concentrations
                                </label>
                                <DropDown width= "w-[350px]" defaultOption="choose your concentrations" options={["CSAI", "Science", "Business"]}/>
                                <input type="submit" className="text-zinc-50 text-center text-sm font-medium leading-5 whitespace-nowrap justify-center items-stretch rounded bg-black mt-8 px-8 py-4 max-md:px-5"/>
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
