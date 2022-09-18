import React from "react";
import { useNavigate } from "react-router-dom";
import { InputText } from "ui/text-field";
import { MainButton } from "ui/buttons";
import styles from "./index.css";
import { useEmailState } from "hooks";
import { checkExistingUser } from "lib/user";

export function EmailForm() {
	const [email, setEmail] = useEmailState();
	const navigate = useNavigate();
	function handleSubmit(e) {
		e.preventDefault();
		const value = e.target.email.value;
		setEmail(value);
		const response = checkExistingUser(email);
		response.then((res) => {
			res == "Yes" ? navigate("/pass") : navigate("/signup");
		});
	}
	return (
		<form onSubmit={handleSubmit} className={styles.form}>
			<InputText label='EMAIL' name='email' type='email'></InputText>
			<MainButton type='submit'>Siguiente</MainButton>
		</form>
	);
}
