import React from "react";

function PersonSubmit(e) {
	const idList = {
		id: ["name", "email", "phone"],
	};

	e.preventDefault();
	console.log("Person");
}

function EducationSubmit(e) {
	const idList = {
		id: ["school", "study", "dateStudy"],
	};

	e.preventDefault();
	console.log("Education");
}

function PracticSubmit(e) {
	const idList = {
		id: ["company", "position", "responsibilities", "dateWorkStart", "dateWorkEnd"],
	};

	e.preventDefault();
	console.log("Practic");
}

export { PersonSubmit, EducationSubmit, PracticSubmit };
