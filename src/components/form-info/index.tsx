import React from "react";
import { InputText, AreaText } from "ui/text-field";
import { MainButton } from "ui/buttons";
import styles from "./index.css";

export function InfoForm() {
	return (
		<form className={styles.form}>
			<InputText label='Nombre' name='name' type='text'></InputText>
			<InputText label='Teléfono' name='phone' type='text'></InputText>
			<AreaText label='¿Dónde lo viste?' name='location'></AreaText>
			<MainButton type='button'>Enviar</MainButton>
		</form>
	);
}
