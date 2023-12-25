import React from "react";
import GettingStarted from "./components/gettingStarted";
import OurStory from "./components/ourStory";
import FeatureSelection from "./components/feature-selection";
import NtPlaceHolder from "./components/nt-placeholder";
import ContactForm from "./components/contactForm";

export default function App() {
	return (
		<>
			<GettingStarted />
			<OurStory />
			<FeatureSelection />
			<NtPlaceHolder />
			<ContactForm />
		</>
	);
}
