import React from "react";

function PersonSubmit(e) {
	e.preventDefault();
	console.log("Person");
}

function EducationSubmit(e) {
	e.preventDefault();
	console.log("Education");
}

function PracticSubmit(e) {
	e.preventDefault();
	console.log("Practic");
}

export { PersonSubmit, EducationSubmit, PracticSubmit };
