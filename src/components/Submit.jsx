import React from "react";

function inputTaker(idList) {
	let allValues = {};

	for (let i = 0; i < idList.length; i++) {
		allValues[String(idList[i])] = document.querySelector("#" + idList[i]).value;
	}

	return allValues;
}

function PersonSubmit(props, event) {
	const idList = ["name", "email", "phone"];

	event.preventDefault();
	console.log("Person");
	let allValues = inputTaker(idList);
	console.log(allValues);

	props.setPersonValues(allValues);
}

function EducationSubmit(props, event) {
	const idList = ["school", "study", "dateStudy"];

	event.preventDefault();
	console.log("Education");
	let allValues = inputTaker(idList);
	console.log(allValues);

	props.setEducationValues(allValues);
}

function PracticSubmit(props, event) {
	const idList = ["company", "position", "responsibilities", "dateWorkStart", "dateWorkEnd"];

	event.preventDefault();
	console.log("Practic");
	let allValues = inputTaker(idList);

	if (Date.parse(allValues.dateWorkStart) > Date.parse(allValues.dateWorkEnd)) {
		alert("Ending Date is less than Start Date of Work. Please retry");
		return 0;
	}
	console.log(allValues);

	props.setPracticValues(allValues);
}

export { PersonSubmit, EducationSubmit, PracticSubmit };
