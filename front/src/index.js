import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";

import App from "./App";
import SignIn from "./signIn";
import SignUp from "./signUp";
import NavBar from "./components/NavBar";
import Footer from "./components/footer";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<BrowserRouter>
			<NavBar />
			<Routes>
				<Route
					path="/"
					element={<App />}
				/>
				<Route
					path="/signIn"
					element={<SignIn />}
				/>
				<Route
					path="/signUp"
					element={<SignUp />}
				/>
			</Routes>
			<Footer />
		</BrowserRouter>
	</React.StrictMode>
);
