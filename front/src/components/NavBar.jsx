import React from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
	return (
		<header className="bg-black flex w-full max-w items-stretch justify-between gap-5 max-md:max-w-full max-md:flex-wrap max-md:justify-center">
			<Link to="/" className="ms-14 text-white text-2xl font-medium leading-8 my-auto">
				QuizzRizz
			</Link>
			<nav className="self-center flex items-stretch justify-between gap-5 my-auto max-md:justify-center">
				<Link to="/" className="text-white text-center text-base leading-6 self-start">
					Home
				</Link>
				<Link to="/quizzes" className="text-white text-base leading-6">
					Quizzes
				</Link>
				<Link to="/resources" className="text-white text-base leading-6 self-start">
					Resources
				</Link>
			</nav>
			<form className="justify-between items-stretch flex gap-5 py-1.5 me-14">
				<Link to="/signUp" className="text-black text-center text-xs font-medium leading-4 whitespace-nowrap justify-center items-stretch rounded bg-white grow px-6 py-3 max-md:px-5">
					Sign up
				</Link>
				<Link to="/signIn" className="text-white text-xs font-medium leading-4 self-center my-auto">
					Sign in
				</Link>
			</form>
		</header>
	);
}
