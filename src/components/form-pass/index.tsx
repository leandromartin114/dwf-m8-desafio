import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { InputText } from "ui/text-field";
import { MainButton } from "ui/buttons";
import styles from "./index.css";
import { useEmailValue, useTokenState, useUserState } from "hooks";
import { signinAndGetToken, getUserData } from "lib/user";
import Swal from "sweetalert2";

export function PassForm() {
	const navigate = useNavigate();
	const email = useEmailValue();
	const [pass, setPass] = useState(null);
	const [token, setToken] = useTokenState();
	const [user, setUser] = useUserState();

	function handleSubmit(e) {
		e.preventDefault();
		const value = e.target.password.value;
		setPass(value);
	}

	useEffect(() => {
		if (pass) {
			const result = signinAndGetToken(email, pass);
			result.then((t) => {
				if (t.includes("invalid password")) {
					Swal.fire({
						title: "Contraseña incorrecta",
						text: "Por favor vuelve a ingresar la contraseña",
						icon: "warning",
						confirmButtonColor: "rgb(128, 38, 212)",
					});
				} else {
					setToken(t);
					const response = getUserData(t);
					response.then((u) => {
						setUser({
							email: u.email,
							fullName: u.fullName,
							password: "",
						});
					});
					navigate("/home");
				}
			});
		}
	}, [pass]);

	return (
		<form onSubmit={handleSubmit} className={styles.form}>
			<InputText label='PASSWORD' name='password' type='password'></InputText>
			<MainButton type='submit'>Ingresar</MainButton>
		</form>
	);
}
