import React, { useState, useEffect } from "react";

import { InputText } from "ui/text-field";
import { MainButton } from "ui/buttons";
import styles from "./index.css";
import Swal from "sweetalert2";

export function SignupForm() {
	// const [load, setLoad] = useState(false);
	function handleLoad() {
		// setLoad(!load)
		Swal.fire({
			title: "Email no encontrado",
			text: "Por favor regístrate en nuestra web para poder reportar una mascota",
			icon: "warning",
			confirmButtonColor: "rgb(128, 38, 212)",
		});
	}
	useEffect(() => {
		window.addEventListener("load", handleLoad);
	});
	return (
		<form className={styles.form}>
			<InputText label='Nombre' name='name' type='text'></InputText>
			<InputText label='Contraseña' name='password' type='password'></InputText>
			<InputText
				label='Repetir contraseña'
				name='password2'
				type='password'
			></InputText>
			<MainButton type='button'>Guardar</MainButton>
		</form>
	);
}
