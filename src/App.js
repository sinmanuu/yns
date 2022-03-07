import React, { useState, useEffect } from "react";
import "./App.css";

import Noticia from "./componentes/noticia";
import Experiencias from "./componentes/experiencias";
import getExperiencias from "./servicios/getExperiencias";

function App() {
	const [experiencias, setExperiencias] = useState([]);

	useEffect(function () {
		getExperiencias().then((experiencias) => setExperiencias(experiencias));
	}, []);

	return (
		<div className="App">
			<Noticia />
			{/* {EXPERIENCIAS} */}
			<div id="mas-experiencias">
				<h2>Más experiencias</h2>
				{experiencias.map((exp) => {
					if (exp.comments > 20) {
						return (
							<Experiencias
								titulo={exp.text}
								img={exp.owner.picture}
								autor={`${exp.owner.firstName} ${exp.owner.lastName}`}
								comentarios={exp.comments}
								link={exp.link}
								key={exp.id}
							/>
						);
					}
				})}
			</div>
		</div>
	);
}

export default App;
