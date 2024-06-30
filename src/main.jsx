import React, { useState, useContext } from "react";
import ReactDOM from "react-dom/client";
import "./styles/style.css";
import "./styles/form.css";
import { Form } from "./components/Form.jsx";
import { Cv } from "./components/Cv.jsx";

function ParentContainer() {
	const [personValues, setPersonValues] = useState({});
	const [educationValues, setEducationValues] = useState({});
	const [practicValues, setPracticValues] = useState({});

	return (
		<>
			<Form
				personValues={personValues}
				educationValues={educationValues}
				practicValues={practicValues}
				setPersonValues={setPersonValues}
				setEducationValues={setEducationValues}
				setPracticValues={setPracticValues}
			/>
			<Cv
				personValues={personValues}
				educationValues={educationValues}
				practicValues={practicValues}
				setPersonValues={setPersonValues}
				setEducationValues={setEducationValues}
				setPracticValues={setPracticValues}
			/>
		</>
	);
}

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<h1>CV Application</h1>
		<ParentContainer />
	</React.StrictMode>
);
