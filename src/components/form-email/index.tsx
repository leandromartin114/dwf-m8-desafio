import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { InputText } from "ui/text-field";
import { MainButton } from "ui/buttons";
import styles from "./index.css";
import { useEmailState } from "hooks";
import { checkExistingUser } from "lib/user";
import Swal from "sweetalert2";

export function EmailForm() {
	const [email, setEmail] = useEmailState();
	const navigate = useNavigate();

	function handleSubmit(e) {
		e.preventDefault();
		const value = e.target.email.value;
		setEmail(value);
		const response = checkExistingUser(value);
		response.then((res) => {
			res == "Yes" ? navigate("/pass") : handleNonExistentMail();
		});
	}

	function handleNonExistentMail() {
		// setEmail("");
		navigate("/signup");
		Swal.fire({
			title: "Email no encontrado",
			text: "Por favor regístrate en nuestra web para poder reportar una mascota",
			icon: "warning",
			confirmButtonColor: "rgb(128, 38, 212)",
		});
	}

	// useEffect(() => {
	// 	if (email) {
	// 		const response = checkExistingUser(email);
	// 		response.then((res) => {
	// 			res == "Yes" ? navigate("/pass") : handleNonExistentMail();
	// 		});
	// 	}
	// }, [email]);

	return (
		<form onSubmit={handleSubmit} className={styles.form}>
			<InputText label='EMAIL' name='email' type='email'></InputText>
			<MainButton type='submit'>Siguiente</MainButton>
		</form>
	);
}
