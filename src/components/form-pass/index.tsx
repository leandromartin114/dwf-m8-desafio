import React, { useState } from "react";
import { InputText } from "ui/text-field";
import { MainButton } from "ui/buttons";
import styles from "./index.css";

export function PassForm() {
	const [pass, setPass] = useState("pass");
	function handleSubmit(e) {
		e.preventDefault();
		const value = e.target.password.value;
		setPass(value);
	}
	return (
		<form onSubmit={handleSubmit} className={styles.form}>
			<InputText label='PASSWORD' name='password' type='password'></InputText>
			<MainButton type='button'>Ingresar</MainButton>
		</form>
	);
}
