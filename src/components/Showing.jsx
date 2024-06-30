import React from "react";

function ShowingPerson(allValues) {
	return (
		<>
			<div>
				<h2>{allValues.name}</h2>
				<p>{allValues.email}</p>
			</div>
			<div>{allValues.phone}</div>
		</>
	);
}

function ShowingEducation(allValues) {}

function ShowingPractic(allValues) {}

export { ShowingPerson, ShowingEducation, ShowingPractic };
