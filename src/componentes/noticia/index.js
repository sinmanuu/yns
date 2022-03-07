import React from "react";
import "./styles.css";

import avatar from "../../img/avatar4.png";
import galeria1 from "../../img/gallery1.png";
import galeria2 from "../../img/gallery2.png";
import doctor from "../../img/doctor.png";

import "../../css/style.css"; //iconos

import FormExperiencia from "../formularios/form-experiencia";

export default function Noticia() {
	return (
		<div id="noticia">
			<div id="autor">
				<div className="imagen">
					<img loading="lazy" alt="vebris" src={avatar} />
					<h4>vebris</h4>
					<p>Barcelona (Ciudad) · 8 sep 2019</p>
				</div>
			</div>
			<div id="content">
				<h1>Estoy muy orgullosa de mi nuevo abdomen</h1>
				<span>
					<span className="ic like icon-et-like"></span>Vale la pena
				</span>
				<span>
					<span className="ic money icon-et-price"></span>Precio aproximado:
					8500€
				</span>
				<div id="galeria">
					<img alt="abdomen" src={galeria2} />
					<img alt="abdomen" src={galeria1} />
					<img alt="abdomen" src={galeria2} />
					<img alt="abdomen" src={galeria1} />
					<img alt="abdomen" src={galeria2} />
					<img alt="abdomen" src={galeria1} />
				</div>
				<h2>Sobre el doctor</h2>
				<div id="doctor">
					<div className="imagen">
						<img loading="lazy" alt="vebris" src={doctor} />
						<h4>Dorsia Clínica Estética</h4>
						<p>81 sedes en Madrid, Lleida, Tarragona…</p>
					</div>
				</div>
				<span id="contacta" className="btn">
					Contactar al doctor
				</span>
				<div id="valoracion">
					<p>
						Valoración:
						<span className="star icon-et-star-full"></span>
						<span className="star icon-et-star-full"></span>
						<span className="star icon-et-star-full"></span>
						<span className="star icon-et-star-full"></span>
						<span className="star icon-et-star-empty"></span>
					</p>
					<p>
						Es un excelente cirujano que se merece con creces la buena fama
						tiene, pero para estas cosas no hay que escatimar! El post
						operatorio ha sido un poco difícil. Aún no me adapto a caminar sin
						sentir molestia y opresión, pero supongo que es cuestión de tiempo.
					</p>
				</div>
				<hr />
				<div id="experiencia">
					<FormExperiencia />
				</div>
			</div>
		</div>
	);
}
