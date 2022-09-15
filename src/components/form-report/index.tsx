import React from "react";
import styles from "./index.css";
import { InputText } from "ui/text-field";
import { MainButton, GreenButton, GreyButton } from "ui/buttons";
import { Text } from "ui/text";
import { MapBox } from "ui/map";
import { MyDropzone } from "ui/dropzone";

export function ReportForm() {
	return (
		<form className={styles.form}>
			<InputText label='Nombre' name='name' type='text'></InputText>
			<InputText
				label='Breve descripción'
				name='description'
				type='text'
			></InputText>
			<MyDropzone />
			<MapBox></MapBox>
			<Text>
				BUSCÁ UN PUNTO DE REFERENCIA PARA REPORTAR A TU MASCOTA. PUEDE SER UNA
				DIRECCIÓN, UN BARRIO O UNA CIUDAD
			</Text>
			<MainButton type='submit'>Reportar mascota</MainButton>
			<GreyButton type='button'>Cancelar</GreyButton>
		</form>
	);
}
