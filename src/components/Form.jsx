import React from "react";

function SingleForm({ element }) {
	return (
		<section className="form">
			<div>
				<label htmlFor={element.id[0]}>{element.label[0]}</label>
				<input type={element.type[0]} id={element.id[0]} />

				<label htmlFor={element.id[1]}>{element.label[1]}</label>
				<input type={element.type} id={element.id[1]} />

				<label htmlFor={element.id[2]}>{element.label[2]}</label>
				<input type={element.type[2]} id={element.id[2]} />
			</div>
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
			<SingleForm element={person} />
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
			<SingleForm element={education} />
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
			<SingleForm element={practic} />
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
