import React from 'react';
import { useAtom } from "jotai";
import { signedAtom } from "../index.js";
import NtPlaceHolder from "../components/nt-placeholder";
import QuizzesAsStudent from "../components/student/Quizzes";
import QuizzesAsInstructor from "../components/instructor/Quizzes";

export default function Quizzes() {
    const [signed, setSignedState] = useAtom(signedAtom);
    
	return (
        signed ? (
        <>
            <NtPlaceHolder content="Quizzes"/>
            { signed.userType == "student" ? <QuizzesAsStudent/> : <QuizzesAsInstructor/> }
        </>
        ) : <NtPlaceHolder content="You need to sign in to access this"/>      
	);
}
