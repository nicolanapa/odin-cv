import React from "react";

function SingleForm(props) {
	return (
		<section>
			<label htmlFor={props.id[0]}>{props.label[0]}</label>
			<input type={props.type[0]} id={props.id[0]} />

			<label htmlFor={props.id[1]}>{props.label[1]}</label>
			<input type={props.type} id={props.id[1]} />

			<label htmlFor={props.id[2]}>{props.label[2]}</label>
			<input type={props.type[2]} id={props.id[2]} />
		</section>
	);
}

function Personal() {
	const person = {
		id: ["name", "email", "phone"],
		label: ["Name ", "Email ", "Phone Number "],
		type: ["text", "text", "tel"],
	};
}

function Educational() {}

function Practical() {}

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
