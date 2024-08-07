import React from "react";
import { ShowingPerson, ShowingEducation, ShowingPractic } from "./Showing.jsx";
import "../styles/cv.css";

// Use state for input values variables

function Cv(props) {
	return (
		<div className="cv-container">
			<div className="cv">
				<section className="person">
					<ShowingPerson {...props} />
				</section>
				<section className="education">
					<ShowingEducation {...props} />
				</section>
				<section className="practic">
					<ShowingPractic {...props} />
				</section>
			</div>
		</div>
	);
}

export { Cv };
