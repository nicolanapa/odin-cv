import React from "react";
import { ShowingPerson, ShowingEducation, ShowingPractic } from "./Showing.jsx";

// Use state for input values variables

function Cv(props) {
	return (
		<div>
			<section className="person">
				<ShowingPerson  {...props}/>
			</section>
			<section className="education">
				<ShowingEducation  {...props}/>
			</section>
			<section className="practic">
				<ShowingPractic  {...props}/>
			</section>
		</div>
	);
}

export { Cv };
