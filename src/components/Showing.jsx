import React from "react";

// Change h3 / p to input and maybe add little labels

function ShowingPerson(props) {
	return (
		<>
			<h2>Personal Information</h2>
			<div className="at-the-angles">
				<h3>{props.personValues.name}</h3>
				<p>{props.personValues.email}</p>
			</div>
			<div className="centered">{props.personValues.phone}</div>
		</>
	);
}

function ShowingEducation(props) {
	return (
		<>
			<h2>Education</h2>
			<h3 className="centered">{props.educationValues.school}</h3>
			<div className="at-the-angles">
				<h3>{props.educationValues.study}</h3>
				<p>{props.educationValues.dateStudy}</p>
			</div>
		</>
	);
}

function ShowingPractic(props) {
	return (
		<>
			<h2>Jobs</h2>
			<div className="at-the-angles">
				<h3>{props.practicValues.company}</h3>
				<div className="centered">
					<p>{props.practicValues.dateWorkStart}</p>
					<p>{props.practicValues.dateWorkEnd}</p>
				</div>
			</div>
			<div className="at-the-angles">
				<h3>{props.practicValues.position}</h3>
				<p>{props.practicValues.responsibilities}</p>
			</div>
		</>
	);
}

export { ShowingPerson, ShowingEducation, ShowingPractic };
