import React from "react";
//import { createRoot } from "react-dom/client";

function inputTaker(idList) {
	let allValues = {};

	for (let i = 0; i < idList.length; i++) {
		allValues[String(idList[i])] = document.querySelector("#" + idList[i]).value;
	}

	return allValues;
}

/*function inputShowing(allValues, whereToReturn) {
	whereToReturn = document.querySelector("." + whereToReturn);

	for (const [key, value] of Object.entries(allValues)) {
		let tempCase = key.charAt(0).toUpperCase() + key.slice(1);
		console.log(tempCase + ": " + value);
	}

	createRoot(whereToReturn).render(<div>1</div>);
}*/

function PersonSubmit(props, event) {
	const idList = ["name", "email", "phone"];

	event.preventDefault();
	console.log("Person");
	let allValues = inputTaker(idList);
	console.log(allValues);

	props.setPersonValues(allValues);

	alert("You can change directly the CV by submitting again!");
}

function EducationSubmit(props, event) {
	const idList = ["school", "study", "dateStudy"];

	event.preventDefault();
	console.log("Education");
	let allValues = inputTaker(idList);
	console.log(allValues);

	props.setEducationValues(allValues);

	alert("You can change directly the CV by submitting again!");
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

	alert("You can change directly the CV by submitting again!");
}

export { PersonSubmit, EducationSubmit, PracticSubmit };
