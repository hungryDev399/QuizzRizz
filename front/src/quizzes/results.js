import React from 'react';
import { useLocation } from 'react-router-dom';
import NtPlaceHolder from "../components/nt-placeholder";

export default function Results() {
    const location = useLocation();
    const result = location.state.data;
    
	return (
        <>
        <NtPlaceHolder content={"Your result is " + result["grade"]}/>
        </>
	);
}
