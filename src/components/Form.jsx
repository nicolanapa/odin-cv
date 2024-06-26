import React, { Fragment } from "react";

function SingleForm({ list }) {
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
			<div>{completeList}</div>
			<div>
				<button>
					<img className="submitIcon" src="./submit.svg" alt="Submit" />
				</button>
			</div>
		</section>
	);
}

function Personal() {
	const person = {
		id: ["name", "email", "phone"],
		label: ["Name ", "Email ", "Phone Number "],
		type: ["text", "text", "tel"],
	};

	return (
		<>
			<h2>Personal</h2>
			<SingleForm list={person} />
		</>
	);
}

function Educational() {
	const education = {
		id: ["school", "study", "dateStudy"],
		label: ["School Name ", "Study ", "Date of Study "],
		type: ["text", "text", "date"],
	};

	return (
		<>
			<h2>Education</h2>
			<SingleForm list={education} />
		</>
	);
}

function Practical() {
	const practic = {
		id: ["company", "position", "responsibilities", "dateWork"],
		label: ["Company Name ", "Position ", "Responsibilities ", "Date From-Until "],
		type: ["text", "text", "date", "date"],
	};

	return (
		<>
			<h2>Practic || Work</h2>
			<SingleForm list={practic} />
		</>
	);
}

function Form() {
	return (
		<div>
			<Personal />
			<Educational />
			<Practical />
		</div>
	);
}

export { Form };
