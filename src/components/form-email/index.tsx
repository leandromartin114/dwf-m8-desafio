import React from "react";
import { InputText } from "ui/text-field";
import { MainButton } from "ui/buttons";
import styles from "./index.css";

export function EmailForm() {
	return (
		<form className={styles.form}>
			<InputText label='EMAIL' name='email' type='email'></InputText>
			<MainButton type='button'>Siguiente</MainButton>
		</form>
	);
}
