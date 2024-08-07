import React from "react";

// Make the values change as typing
// No need of Submit / Edit buttons

function ShowingPerson(props) {
	return (
		<>
			{props.personValues.name !== undefined && <h2>Personal Information</h2>}
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
			{props.educationValues.school !== undefined && <h2>Education</h2>}
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
			{props.practicValues.company !== undefined && <h2>Jobs</h2>}
			<div className="at-the-angles">
				<h3>{props.practicValues.company}</h3>
				<div className="centered">
					<p>{props.practicValues.dateWorkStart}</p>
					{props.practicValues.dateWorkStart !== undefined && props.practicValues.dateWorkEnd !== undefined && (
						<p>
							&nbsp; <img src="./arrowDates.svg" alt="Arrow indicating the dates" width="22.5px" height="auto" /> &nbsp;
						</p>
					)}
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
