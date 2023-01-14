import React from "react";
import { useNavigate } from "react-router-dom";
import { InputText, AreaText } from "ui/text-field";
import { MainButton } from "ui/buttons";
import styles from "./index.css";
import { usePetInfoState } from "hooks";
import { reportInfoAboutAPet } from "lib/pet";
import Swal from "sweetalert2";

export function InfoForm() {
	const [petInfo, setPetInfo] = usePetInfoState();
	const navigate = useNavigate();
	function handleSubmit(e) {
		e.preventDefault();
		const target = e.target;
		const reportInfo = {
			fullName: target.name.value,
			phoneNumber: target.phone.value,
			placeDescription: target.location.value,
			petName: petInfo.name,
			email: petInfo.email,
		};
		if (
			target.name.value !== "" &&
			target.phone.value !== "" &&
			target.location.value
		) {
			const result = reportInfoAboutAPet(reportInfo, petInfo.id);
			result.then(() => {
				Swal.fire({
					title: "¡Gracias!",
					text: "Tu ayuda es importante para encontrar esta mascota",
					icon: "success",
					confirmButtonColor: "rgb(128, 38, 212)",
				});
				navigate("/home");
			});
		} else {
			Swal.fire({
				title: "Los campos no pueden estar vacios",
				text: "Por favor completa todos los campos",
				icon: "warning",
				confirmButtonColor: "rgb(128, 38, 212)",
			});
		}
	}
	return (
		<form onSubmit={handleSubmit} className={styles.form}>
			<InputText label='Tu Nombre' name='name' type='text'></InputText>
			<InputText label='Teléfono' name='phone' type='text'></InputText>
			<AreaText label='¿Dónde lo viste?' name='location'></AreaText>
			<MainButton type='submit'>Enviar</MainButton>
		</form>
	);
}
