import React from "react";
import { InputText } from "ui/text-field";
import { MainButton } from "ui/buttons";
import styles from "./index.css";

export function PassForm() {
	return (
		<form className={styles.form}>
			<InputText label='PASSWORD' name='password' type='password'></InputText>
			<MainButton type='button'>Ingresar</MainButton>
		</form>
	);
}
