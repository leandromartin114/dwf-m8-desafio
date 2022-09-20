import React, { useState, useEffect } from "react";
import { InputText } from "ui/text-field";
import { MainButton } from "ui/buttons";
import styles from "./index.css";

export function SignupForm() {
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
