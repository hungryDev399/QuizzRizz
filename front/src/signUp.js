import React, {useState} from "react";
import { useNavigate } from 'react-router-dom';

export default function SignUp() {
    const navigate = useNavigate();
    const [name,setName]= useState("");
	const [email,setEmail] = useState("");
	const [phone, setPhone] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");
	const [nationalId, setNationalId] = useState("");
	const [universityId, setUniversityId] = useState("");
	const [school, setSchool] = useState("");
    const [major, setMajor] = useState("");
    const [signUpStatus, setSignUpStatus] = useState();


    const handleSubmit = (event) => {
		event.preventDefault();
		if (password == confirmPassword){
            if (email[0] == "s" && email[1] =="-"){
                fetch(`http://csai203back.dtd7gjgpdaczfyc8.eastus2.azurecontainer.io:8000/api/register/student`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        email: email,
                        name: name,
                        phone_number: phone,
                        national_id: nationalId,
                        school: school,
                        major: school,
                        concentration: major,
                        student_id: universityId,
                        password: password
                    })
                })
                .then(response => {
                    if (response.status === 200) {
                        console.log("done");
                        navigate('../signIn');
                    }
                    else {
                        setSignUpStatus(0);
                    }
                })
                .catch(error => { console.error('Error:', error) });
		    }
            else {
                fetch(`http://csai203back.dtd7gjgpdaczfyc8.eastus2.azurecontainer.io:8000/api/register/instructor`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        email: email,
                        name: name,
                        phone_number: phone,
                        national_id: nationalId,
                        school: school,
                        major: school,
                        concentration: major,
                        instructor_id: universityId,
                        password: password
                    })
                })
                .then(response => {
                    if (response.status === 200) {
                        console.log("done");
                        navigate('/');
                    }
                    else {
                        setSignUpStatus(0);
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
								Sign Up
							</div>
                            <form  onSubmit={handleSubmit}className="flex flex-col items-stretch mt-8 max-md:max-w-full">
                                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"> Name </label>
                                <input onChange={(input) => {setName(input.target.value)}} type="text" id="name" className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-[350px] py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-balck" placeholder="Joe" required/>
                                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 mt-4"> Email </label>
                                <input onChange={(input) => {setEmail(input.target.value)}} type="email" id="email" className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-[350px] py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-balck" placeholder="s-firstname.lastname@zeawilcity.edu.eg" required/>
                                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 mt-4"> Phone number </label>
                                <input onChange={(input) => {setPhone(input.target.value)}} type="number" id="phone" className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-[350px] py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-balck" placeholder="01234567890" required/>
                                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 mt-4"> Password </label>
                                <input onChange={(input) => {setPassword(input.target.value)}} type="password" id="password" className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-[350px] py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-balck" placeholder="**********" required/>
                                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 mt-4"> Confirm Password </label>
                                <input onChange={(input) => {setConfirmPassword(input.target.value)}} type="password" id="confirm_password" className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-[350px] py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-balck" placeholder="**********" required/>
                                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 mt-4"> National id </label>
                                <input onChange={(input) => {setNationalId(input.target.value)}} type="number" id="national_id" className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-[350px] py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-balck" placeholder="12345678901234" required/>
                                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 mt-4"> University id </label>
                                <input onChange={(input) => {setUniversityId(input.target.value)}} type="number" id="university_id" className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-[350px] py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-balck" placeholder="12345678901234" required/>
                                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 mt-4">School</label>
                                <div className="inline-block relative w-[350px]">
                                    <select onChange={(input) => setSchool(input.target.value)} id="school" className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline" required>
                                        <option value="CSAI" id="CSAI" selected>CSAI</option>
                                        <option value="Science" id="Science">Science</option>
                                        <option value="Engineering" id="Engineering">Engineering</option>
                                        <option value="Business" id="Business">Business</option>
                                    </select>
                                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                        <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                                    </div>
                                </div>


                                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 mt-4">
                                    Major
                                </label>
                                <div className="inline-block relative w-[350px]">
                                    <select onChange={(input) => setMajor(input.target.value)} id="major" className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline" required>
                                        <option value="SWD" id="SWD" selected>SWD</option>
                                        <option value="DSAI" id="DSAI">DSAI</option>
                                        <option value="IT" id="IT">IT</option>
                                        <option value="Business" id="Business">Business</option>
                                        <option value="BMS" id="BMS">BMS</option>
                                        <option value="Physics"  id="Physics">Physics</option>
                                        <option value="Nanotechnology" id="Nanotechnology">Nanotechnology</option>
                                        <option value="NanoScience" id="NanoScience">NanoScience</option>
                                        <option value="Envirmontal" id="Envirmontal">Envirmontal</option>
                                        <option value="Renewable" id="Renewable">Renewable</option>
                                        <option value="CIE" id="CIE">CIE</option>
                                        <option value="Aerospace" id="Aerospace">Aerospace</option>
                                    </select>
                                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                        <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                                    </div>
                                </div>
                                
                                <input type="submit" id="submitbtn" className="cursor-pointer text-zinc-50 text-center text-sm font-medium leading-5 whitespace-nowrap justify-center items-stretch rounded bg-black mt-4 px-8 py-4 max-md:px-5"/>
								{signUpStatus == 0 ? <p className="text-red-500">The Information you have entered is incorrect.</p>:null}
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
