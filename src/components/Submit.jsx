import React from "react";

function inputTaker(idList) {}

function PersonSubmit(e) {
	const idList = ["name", "email", "phone"];

	e.preventDefault();
	console.log("Person");
}

function EducationSubmit(e) {
	const idList = ["school", "study", "dateStudy"];

	e.preventDefault();
	console.log("Education");
}

function PracticSubmit(e) {
	const idList = ["company", "position", "responsibilities", "dateWorkStart", "dateWorkEnd"];

	e.preventDefault();
	console.log("Practic");
}

export { PersonSubmit, EducationSubmit, PracticSubmit };
