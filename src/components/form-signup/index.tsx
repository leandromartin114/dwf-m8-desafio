import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { InputText } from "ui/text-field";
import { MainButton, GreyButton } from "ui/buttons";
import styles from "./index.css";
import { useEmailState } from "hooks";
import { createUser } from "lib/user";
import Swal from "sweetalert2";

export function SignupForm() {
	const navigate = useNavigate();
	const [email, setEmail] = useEmailState();
	const [fullName, setFullName] = useState();
	const [pass, setPass] = useState();

	function handleSubmit(e) {
		e.preventDefault();
		if (
			e.target.fullName.value !== "" &&
			e.target.password.value !== "" &&
			e.target.password2.value !== ""
		) {
			if (e.target.password.value == e.target.password2.value) {
				setFullName(e.target.fullName.value);
				setPass(e.target.password.value);
			} else {
				Swal.fire({
					title: "Las contraseñas no coinciden",
					text: "Por favor corrobora que estés ingresando la misma",
					icon: "warning",
					confirmButtonColor: "rgb(128, 38, 212)",
				});
			}
		} else {
			Swal.fire({
				title: "Los campos no pueden estar vacios",
				text: "Por favor completa todos los campos",
				icon: "warning",
				confirmButtonColor: "rgb(128, 38, 212)",
			});
		}
	}

	function handleClick() {
		setEmail("");
		navigate("/home");
	}

	useEffect(() => {
		if (email && fullName && pass) {
			const response = createUser(email, fullName, pass);
			response.then(() => {
				Swal.fire({
					title: "Usuario creado con éxito",
					text: "Por favor inicia sesión con tu contraseña",
					icon: "success",
					confirmButtonColor: "rgb(128, 38, 212)",
				});
				navigate("/pass");
			});
		}
	}, [fullName, pass]);

	return (
		<form onSubmit={handleSubmit} className={styles.form}>
			<InputText label='Nombre' name='fullName' type='text'></InputText>
			<InputText label='Contraseña' name='password' type='password'></InputText>
			<InputText
				label='Repetir contraseña'
				name='password2'
				type='password'
			></InputText>
			<MainButton type='submit'>Guardar</MainButton>
			<GreyButton onClick={handleClick} type='button'>
				Cancelar
			</GreyButton>
		</form>
	);
}
