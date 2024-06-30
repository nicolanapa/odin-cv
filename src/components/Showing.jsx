import React from "react";
//state
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
			<h2 className="centered">{props.educationValues.school}</h2>
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
				<h2>{props.practicValues.company}</h2>
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
