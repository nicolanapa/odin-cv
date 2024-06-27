import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/style.css";
import "./styles/form.css";
import { Form } from "./components/Form.jsx";
import { Cv } from "./components/Cv.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<h1>CV Application</h1>
		<Form />
		<Cv />
	</React.StrictMode>
);

