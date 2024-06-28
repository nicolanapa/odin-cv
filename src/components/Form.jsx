import React, { Fragment } from "react";
import { PersonSubmit, EducationSubmit, PracticSubmit } from "./Submit.jsx";

function SingleForm({ list, variableToCall }) {
	let completeList = [];
	for (let i = 0; i < list.id.length; i++) {
		completeList.push(
			<Fragment key={list.id[i]}>
				<label htmlFor={list.id[i]}>{list.label[i]}</label>
				<input type={list.type[i]} id={list.id[i]} />
			</Fragment>
		);
	}

	return (
		<section className="form">
			<h2>{list.header}</h2>

			{/* use preventDefault()*/}
			<form onSubmit={variableToCall}>
				{completeList}

				<button>
					<img className="submitIcon" src="./submit.svg" alt="Submit" />
				</button>
			</form>
		</section>
	);
}

function Personal() {
	const person = {
		id: ["name", "email", "phone"],
		label: ["Name (ex: John Smith) ", "Email (ex: example@dot.com) ", "Phone Number (ex: +39 123 345 5678) "],
		type: ["text", "email", "tel"],
		header: "Personal",
	};

	const variableToCall = PersonSubmit;

	return (
		<>
			<SingleForm list={person} variableToCall={variableToCall} />
		</>
	);
}

function Educational() {
	const education = {
		id: ["school", "study", "dateStudy"],
		label: ["School Name (ex: Whinchester) ", "Study (ex: IT) ", "Date of Study "],
		type: ["text", "text", "date"],
		header: "Education",
	};

	const variableToCall = EducationSubmit;

	return (
		<>
			<SingleForm list={education} variableToCall={variableToCall} />
		</>
	);
}

function Practical() {
	const practic = {
		id: ["company", "position", "responsibilities", "dateWorkStart", "dateWorkEnd"],
		label: ["Company Name (ex: Google) ", "Position (ex: Developer) ", "Responsibilities (ex: X and Y) ", "Start", "End"],
		type: ["text", "text", "text", "date", "date"],
		header: "Practic || Work",
	};

	const variableToCall = PracticSubmit;

	return (
		<>
			<SingleForm list={practic} variableToCall={variableToCall} />
		</>
	);
}

function Form() {
	return (
		<div className="full-form">
			<Personal />
			<Educational />
			<Practical />
		</div>
	);
}

export { Form };
