import React, { useState } from "react";
import { useForm } from "react-hook-form";
import "./styles.css";

export default function FormExperiencia() {
	const [activeSi, setActiveSi] = useState(false);
	const [activeNo, setActiveNo] = useState(false);
	const {
		register,
		formState: { errors },
		handleSubmit,
	} = useForm();

	const enviarDatos = (data) => console.log(JSON.stringify(data));

	const toggleActive = (event) => {
		setActiveNo(false);
		setActiveSi(false);
		event.target.id === "si"
			? activeSi
				? setActiveSi(false)
				: setActiveSi(true)
			: activeNo
			? setActiveNo(false)
			: setActiveNo(true);
	};

	return (
		<form onSubmit={handleSubmit(enviarDatos)}>
			<h2>Cuéntanos tu experiencia</h2>
			<label>¿Qué tratamiento te has realizado?</label>
			<select {...register("tratamiento", { required: true })}>
				<option value="">Selecciona el tratamiento</option>
				<option value="tratamiento1">Tratamiento 1</option>
				<option value="tratamiento2">Tratamiento 2</option>
			</select>
			<p>
				{errors.tratamiento && (
					<span className="error">Recomendación requerida</span>
				)}
			</p>
			<p>¿Recomendarías el tratamiento?</p>
			<p
				className={activeSi ? "active recomendacion" : "recomendacion"}
				onClick={toggleActive}
				id="si"
			>
				Sí
			</p>
			<p
				className={activeNo ? "active recomendacion" : "recomendacion"}
				onClick={toggleActive}
				id="no"
			>
				No
			</p>
			{activeSi ? (
				<>
					<label>Título de tu experiencia</label>
					<input
						type="text"
						id="titulo"
						placeholder="Título resumen de tu experiencia"
						{...register("titulo", { required: true, maxLength: 90 })}
					/>
					<p>
						{errors.titulo && errors.titulo.type === "required" && (
							<span className="error">Título requerido</span>
						)}
						{errors.titulo && errors.titulo.type === "maxLength" && (
							<span className="error">90 caracteres máximo</span>
						)}
					</p>
					<label>¿Qué tratamiento te has realizado?</label>
					<textarea
						rows="10"
						id="tratamiento_realizado"
						{...register("tratamiento_realizado", {
							required: true,
							minLength: 300,
							maxLength: 18000,
						})}
					/>
					<p>
						{errors.tratamiento_realizado &&
							errors.tratamiento_realizado.type === "required" && (
								<span className="error">Explicación requerido</span>
							)}
						{errors.tratamiento_realizado &&
							errors.tratamiento_realizado.type === "minLength" && (
								<span className="error">300 caracteres minimo</span>
							)}
						{errors.tratamiento_realizado &&
							errors.tratamiento_realizado.type === "maxLength" && (
								<span className="error">18000 caracteres máximo</span>
							)}
					</p>
				</>
			) : (
				""
			)}
			<button type="submit" className="btn btn-submit">
				¡COMPARTIR EXPERIENCIA!
			</button>
		</form>
	);
}
