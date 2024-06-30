import React, { Fragment } from "react";
import { PersonSubmit, EducationSubmit, PracticSubmit } from "./Submit.jsx";

function SingleForm(props) {
	let completeList = [];
	for (let i = 0; i < props.list.id.length; i++) {
		completeList.push(
			<Fragment key={props.list.id[i]}>
				<label htmlFor={props.list.id[i]}>{props.list.label[i]}</label>
				<input type={props.list.type[i]} id={props.list.id[i]} />
			</Fragment>
		);
	}

	return (
		<section className="form">
			<h2>{props.list.header}</h2>

			<form
				onSubmit={() => {
					props.variableToCall({ ...props }, event);
				}}
			>
				{completeList}

				<button>
					<img className="submitIcon" src="./submit.svg" alt="Submit" />
				</button>
			</form>
		</section>
	);
}

function Personal(props) {
	const person = {
		id: ["name", "email", "phone"],
		label: ["Name (ex: John Smith) ", "Email (ex: example@dot.com) ", "Phone Number (ex: +39 123 345 5678) "],
		type: ["text", "email", "tel"],
		header: "Personal",
	};

	const variableToCall = PersonSubmit;

	return (
		<>
			<SingleForm list={person} variableToCall={variableToCall} {...props} />
		</>
	);
}

function Educational(props) {
	const education = {
		id: ["school", "study", "dateStudy"],
		label: ["School Name (ex: Whinchester) ", "Study (ex: IT) ", "Date of Study "],
		type: ["text", "text", "date"],
		header: "Education",
	};

	const variableToCall = EducationSubmit;

	return (
		<>
			<SingleForm list={education} variableToCall={variableToCall} {...props} />
		</>
	);
}

function Practical(props) {
	const practic = {
		id: ["company", "position", "responsibilities", "dateWorkStart", "dateWorkEnd"],
		label: ["Company Name (ex: Google) ", "Position (ex: Developer) ", "Responsibilities (ex: X and Y) ", "Start", "End"],
		type: ["text", "text", "text", "date", "date"],
		header: "Practic || Work",
	};

	const variableToCall = PracticSubmit;

	return (
		<>
			<SingleForm list={practic} variableToCall={variableToCall} {...props} />
		</>
	);
}

function Form(props) {
	return (
		<div className="full-form">
			<Personal {...props} />
			<Educational {...props} />
			<Practical {...props} />
		</div>
	);
}

export { Form };
