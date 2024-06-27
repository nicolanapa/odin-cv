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
			<h2>{list.header}</h2>

			{/* use preventDefault()*/}
			<form>
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
		label: ["Name ", "Email ", "Phone Number "],
		type: ["text", "text", "tel"],
		header: "Personal",
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
		header: "Education",
	};

	return (
		<>
			<SingleForm list={education} />
		</>
	);
}

function Practical() {
	const practic = {
		id: ["company", "position", "responsibilities", "dateWorkStart", "dateWorkEnd"],
		label: ["Company Name ", "Position ", "Responsibilities ", "Start", "End"],
		type: ["text", "text", "text", "date", "date"],
		header: "Practic || Work",
	};

	return (
		<>
			<SingleForm list={practic} />
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
