import React from "react";
import "./styles.css";

export default function Experiencias({
	titulo,
	img,
	autor,
	comentarios,
	link,
}) {
	return (
		<div className="experiencia">
			<div className="imagen">
				<img loading="lazy" alt={titulo} src={img} />
				<h4>{titulo}</h4>
				<p>{autor}</p>
			</div>
			<div className="comentarios">
				<p>{comentarios} comentarios</p>
				<a href={link} target="_blank" rel="noreferrer">
					leer más {">"}
				</a>
			</div>
		</div>
	);
}
