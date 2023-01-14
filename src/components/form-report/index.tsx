import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./index.css";
import { InputText } from "ui/text-field";
import { MainButton, GreyButton } from "ui/buttons";
import { Text } from "ui/text";
import { MapBox } from "ui/map";
import { MyDropzone } from "ui/dropzone";
import { useTokenValeu, useEmailValue } from "hooks";
import { reportNewLostPet } from "lib/pet";
import Swal from "sweetalert2";

export function ReportForm() {
	const navigate = useNavigate();
	const [loc, setLoc] = useState(null);
	const [coords, setCoords] = useState([]);
	const [img, setImg] = useState(null);
	const [pet, setPet] = useState(null);
	const email = useEmailValue();
	const token = useTokenValeu();

	function setMapData(location, coordinates: []) {
		setLoc(location);
		setCoords(coordinates);
	}

	function setImgData(img64) {
		setImg(img64);
	}

	function handleSubmit(e) {
		e.preventDefault();
		const target = e.target;
		const newPet = {
			name: target.name.value,
			description: target.description.value,
			imgURL: img,
			lat: coords[1],
			lng: coords[0],
			location: loc,
			state: "LOST",
		};
		if (
			newPet.name !== "" &&
			newPet.description !== "" &&
			newPet.imgURL !== undefined &&
			newPet.lat !== undefined &&
			newPet.lng !== undefined &&
			newPet.location !== undefined
		) {
			setPet(newPet);
		} else {
			Swal.fire({
				title: "Los campos no pueden estar vacios",
				text: "Por favor completa todos los campos",
				icon: "warning",
				confirmButtonColor: "rgb(128, 38, 212)",
			});
		}
	}

	function handleCancel() {
		navigate("/home");
	}

	useEffect(() => {
		if (pet !== null) {
			const response = reportNewLostPet(pet, token, email);
			response.then((r) => {
				console.log(r);
				Swal.fire({
					title: "Mascota reportada",
					text: "¡Esperamos que puedas encontrarla pronto!",
					icon: "success",
					confirmButtonColor: "rgb(128, 38, 212)",
				});
				navigate("/pets");
			});
		}
	}, [pet]);

	return (
		<form onSubmit={handleSubmit} className={styles.form}>
			<InputText label='Nombre' name='name' type='text'></InputText>
			<InputText
				label='Breve descripción'
				name='description'
				type='text'
			></InputText>
			<MyDropzone onLoadImg={setImgData} />
			<MapBox onChange={setMapData} />
			<Text>
				BUSCÁ UN PUNTO DE REFERENCIA PARA REPORTAR A TU MASCOTA. PUEDE SER UNA
				DIRECCIÓN, UN BARRIO O UNA CIUDAD
			</Text>
			<MainButton type='submit'>Reportar mascota</MainButton>
			<GreyButton onClick={handleCancel} type='button'>
				Cancelar
			</GreyButton>
		</form>
	);
}
