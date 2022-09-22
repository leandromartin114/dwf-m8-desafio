import React from "react";
import { InputText } from "ui/text-field";
import { MainButton } from "ui/buttons";
import { Text } from "ui/text";
import styles from "./index.css";
import { useTokenValeu, useUserState } from "hooks";
import { updateUserData } from "lib/user";
import Swal from "sweetalert2";

export function MyDataForm() {
	const token = useTokenValeu();
	const [user, setUser] = useUserState();

	function handleSubmit(e) {
		e.preventDefault();
		const target = e.target;
		if (target.password.value !== "") {
			if (target.password.value == target.password2.value) {
				const newUserData = {
					email: target.email.value,
					fullName: target.fullName.value,
					password: target.password.value,
				};
				setUser(newUserData);
				const response = updateUserData(newUserData, token);
				response.then(() => {
					Swal.fire({
						title: "Datos modificados",
						text: "Tus datos fueron guardados correctamente",
						icon: "success",
						confirmButtonColor: "rgb(128, 38, 212)",
					});
				});
			} else {
				Swal.fire({
					title: "Las contraseñas no coinciden",
					text: "Por favor corrobora que estés ingresando la misma",
					icon: "warning",
					confirmButtonColor: "rgb(128, 38, 212)",
				});
			}
		} else {
			const newUserData = {
				email: target.email.value,
				fullName: target.fullName.value,
			};
			setUser(newUserData);
			const response = updateUserData(newUserData, token);
			response.then(() => {
				Swal.fire({
					title: "Datos modificados",
					text: "Tus datos fueron guardados correctamente",
					icon: "success",
					confirmButtonColor: "rgb(128, 38, 212)",
				});
			});
		}
	}

	return (
		<form onSubmit={handleSubmit} className={styles.form}>
			<InputText
				defaultValue={user.email}
				label='Email'
				name='email'
				type='email'
			></InputText>
			<InputText
				defaultValue={user.fullName}
				label='Nombre'
				name='fullName'
				type='text'
			></InputText>
			<Text>Tu contraseña no se mostrará. Puedes cambiarla si lo deseas.</Text>
			<InputText label='Contraseña' name='password' type='password'></InputText>
			<InputText
				label='Repetir contraseña'
				name='password2'
				type='password'
			></InputText>
			<MainButton type='submit'>Guardar</MainButton>
		</form>
	);
}
