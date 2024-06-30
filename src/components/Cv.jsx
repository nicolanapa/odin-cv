import React from "react";
import { ShowingPerson, ShowingEducation, ShowingPractic } from "./Showing.jsx";

// Use state for input values variables

function Cv() {
	return (
		<div>
			<section className="person">
				<ShowingPerson />
			</section>
			<section className="education">
				<ShowingEducation />
			</section>
			<section className="practic">
				<ShowingPractic />
			</section>
		</div>
	);
}

export { Cv };
