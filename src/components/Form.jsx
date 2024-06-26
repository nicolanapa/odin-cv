import React from "react";

function SingleForm({ list }) {
	let completeList = [];
	for (let i = 0; i < list.id.length; i++) {
		completeList.push(
			<>
				<label htmlFor={list.id[i]}>{list.label[i]}</label>
				<input type={list.type[i]} id={list.id[i]} />
			</>
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
