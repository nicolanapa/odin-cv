import React from "react";

function inputTaker(idList) {
	let allValues = {};

	for (let i = 0; i < idList.length; i++) {
		allValues[String(idList[i])] = document.querySelector("#" + idList[i]).value;
	}

	return allValues;
}

function PersonSubmit(e) {
	const idList = ["name", "email", "phone"];

	e.preventDefault();
	console.log("Person");
	let allValues = inputTaker(idList);
}

function EducationSubmit(e) {
	const idList = ["school", "study", "dateStudy"];

	e.preventDefault();
	console.log("Education");
	let allValues = inputTaker(idList);
}

function PracticSubmit(e) {
	const idList = ["company", "position", "responsibilities", "dateWorkStart", "dateWorkEnd"];

	e.preventDefault();
	console.log("Practic");
	let allValues = inputTaker(idList);
}

export { PersonSubmit, EducationSubmit, PracticSubmit };
