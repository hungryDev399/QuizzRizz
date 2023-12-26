import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';

export default function SignIn() {
	const [uid,setUid]= useState("");
	const [password,setPassword] = useState("");
	const [userType, setUserType] = useState("student");
	const [loginStatus, setLoginStatus] = useState();
	const navigate = useNavigate();

	const handleSubmit = (event) => {
		event.preventDefault();
		if (uid != "" && password != ""){
		if (userType == "student"){

			fetch(`http://127.0.0.1:8000/api/login/student`, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({
					student_id: uid,
					password:  password
				})
			})
			.then(response => {
				if (response.status === 200) {
					console.log("done");
					navigate('/')
				}
				else {
					setLoginStatus(0);
				}
			})
			.catch(error => { console.error('Error:', error) });
		}
		else {

			fetch(`http://127.0.0.1:8000/api/login/instructor`, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({
					instructor_id: uid,
					password:  password
				})
			})
			.then(response => {
				if (response.status === 200) {
					console.log("done");
					navigate('/')
				}
				else{
					setLoginStatus(0);
				}

			})
			.catch(error => { console.error('Error:', error) });
		}
	}
	};

	return (
		<div className="justify-between">
			<div className="flex max-md:flex-col max-md:items-stretch max-md:gap-0">
				<div className="flex flex-col items-stretch w-6/12 max-md:w-full max-md:ml-0">
					<div className="justify-center items-center self-stretch flex flex-col px-16 py-12 max-md:max-w-full max-md:px-5">
						<div className="flex w-[480px] max-w-full flex-col mt-24 mb-16 items-start max-md:my-10">
							<div className="self-stretch text-zinc-900 text-5xl leading-[72px] max-md:max-w-full max-md:text-4xl max-md:leading-[67px]">
								Sign In
							</div>
                            <form onSubmit={handleSubmit} className="flex flex-col items-stretch mt-8 max-md:max-w-full">
                                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                                    University Id
                                </label>
                                <input
                                    type="number"
									onChange={(input) => {setUid(input.target.value)}}
                                    className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-[350px] py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-balck" placeholder="202200000"
                                />
                                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 mt-4">
                                    Password
                                </label>
                                <input
                                    type="password"
									onChange={(input) => setPassword(input.target.value)}
                                    className="bg-gray-200 appearance-none mb-2 border-2 border-gray-200 rounded w-[350px] py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-balck" placeholder="******************"
                                />
								
								<div className="flex justify-between">
								<div className="inline-flex flex-row-reverse items-center justify-between">
										<span className="block uppercase tracking-wide text-gray-700 text-xs font-bold">student</span>
										<label className="relative flex items-center p-3 rounded-full cursor-pointer" htmlFor="react">
											<input
												name="userType"
												type="radio"
												onChange={() => setUserType("student")}
												className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-full border bg-gray-200 border-gray-200 text-gray-900 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-gray-900 checked:before:bg-gray-900 hover:before:opacity-10"
												checked
											/>
											<span className="absolute text-gray-900 transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
												<svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 16 16" fill="currentColor">
													<circle data-name="ellipse" cx="8" cy="8" r="8"></circle>
												</svg>
											</span>
										</label>
									</div>
									<div className="inline-flex flex-row-reverse items-center justify-between">
										<span className="block uppercase tracking-wide text-gray-700 text-xs font-bold">instructor</span>
										<label className="relative flex items-center p-3 rounded-full cursor-pointer" htmlFor="react">
											<input
												name="userType"
												type="radio"
												onChange={() => setUserType("instructor")}
												className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-full border bg-gray-200 border-gray-200 text-gray-900 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-gray-900 checked:before:bg-gray-900 hover:before:opacity-10"
											/>
											<span className="absolute text-gray-900 transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
												<svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 16 16" fill="currentColor">
													<circle data-name="ellipse" cx="8" cy="8" r="8"></circle>
												</svg>
											</span>
										</label>
									</div>
									
								</div>

                                <input type="submit" className="cursor-pointer text-zinc-50 text-center text-sm font-medium leading-5 whitespace-nowrap justify-center items-stretch rounded bg-black mt-4 px-8 py-4 max-md:px-5"/>
								{loginStatus == 0 ? <p className="text-red-500">The password or university ID entered is incorrect.</p>:null}
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
