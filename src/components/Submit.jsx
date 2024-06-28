import React from "react";

function inputTaker(idList) {
	for (let i = 0; i < idList.length; i++) {
		console.log(i);
	}
}

function PersonSubmit(e) {
	const idList = ["name", "email", "phone"];

	e.preventDefault();
	console.log("Person");
	inputTaker(idList);
}

function EducationSubmit(e) {
	const idList = ["school", "study", "dateStudy"];

	e.preventDefault();
	console.log("Education");
	inputTaker(idList);
}

function PracticSubmit(e) {
	const idList = ["company", "position", "responsibilities", "dateWorkStart", "dateWorkEnd"];

	e.preventDefault();
	console.log("Practic");
	inputTaker(idList);
}

export { PersonSubmit, EducationSubmit, PracticSubmit };
