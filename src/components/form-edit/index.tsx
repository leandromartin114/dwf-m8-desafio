import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./index.css";
import { InputText } from "ui/text-field";
import { MainButton, GreenButton, RedButton } from "ui/buttons";
import { Text } from "ui/text";
import { MapBox } from "ui/map";
import { MyDropzone } from "ui/dropzone";
import { useTokenValeu, useEmailValue, usePetState } from "hooks";
import { updatePet, petDataParam } from "lib/pet";
import Swal from "sweetalert2";

export function EditForm() {
	const navigate = useNavigate();
	const [loc, setLoc] = useState(null);
	const [coords, setCoords] = useState([]);
	const [img, setImg] = useState(null);
	const [pet, setPet] = usePetState();
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
		const updatedPetData: petDataParam = {
			name: target.name.value ? target.name.value : pet.name,
			description: target.description.value
				? target.description.value
				: pet.description,
			imgURL: img ? img : pet.imgURL,
			lat: coords[1] ? coords[1] : pet.lat,
			lng: coords[0] ? coords[0] : pet.lng,
			location: loc ? loc : pet.location,
		};
		setPet(updatedPetData);
		const result = updatePet(updatedPetData, pet.id, token, email);
		result.then(() => {
			Swal.fire({
				title: "Datos guardados con éxito",
				text: "¡Esperamos que puedas encontrar a tu mascota pronto!",
				icon: "success",
				confirmButtonColor: "rgb(128, 38, 212)",
			});
			navigate("/pets");
		});
		// if (
		// 	updatedPetData.name !== "" &&
		// 	updatedPetData.description !== "" &&
		// 	updatedPetData.imgURL !== undefined &&
		// 	updatedPetData.lat !== undefined &&
		// 	updatedPetData.lng !== undefined &&
		// 	updatedPetData.location !== undefined
		// ) {
		// 	setPet(updatedPetData);
		// 	const result = updatePet(updatedPetData, pet.id, token, email);
		// 	result.then(() => {
		// 		Swal.fire({
		// 			title: "Datos guardados con éxito",
		// 			text: "¡Esperamos que puedas encontrar a tu mascota pronto!",
		// 			icon: "success",
		// 			confirmButtonColor: "rgb(128, 38, 212)",
		// 		});
		// 		navigate("/pets");
		// 	});
		// } else {
		// 	Swal.fire({
		// 		title: "Los campos no pueden estar vacios",
		// 		text: "Por favor completa todos los campos",
		// 		icon: "warning",
		// 		confirmButtonColor: "rgb(128, 38, 212)",
		// 	});
		// }
	}

	function unpublishPet() {
		const updatedPetData: petDataParam = {
			name: pet.name,
			description: pet.description,
			imgURL: pet.imgURL,
			lat: pet.lat,
			lng: pet.lng,
			location: pet.loc,
			state: "UNPUBLISH",
		};
		const result = updatePet(updatedPetData, pet.id, token, email);
		result.then(() => {
			Swal.fire({
				title: "Mascota despublicada",
				text: "Esperamos haberte ayudado",
				icon: "success",
				confirmButtonColor: "rgb(128, 38, 212)",
			});
			navigate("/pets");
		});
	}

	function foundPet() {
		const updatedPetData: petDataParam = {
			name: pet.name,
			description: pet.description,
			imgURL: pet.imgURL,
			lat: pet.lat,
			lng: pet.lng,
			location: pet.loc,
			state: "FOUND",
		};
		const result = updatePet(updatedPetData, pet.id, token, email);
		result.then(() => {
			Swal.fire({
				title: "¡Que alegría que encontraste a " + pet.name + "!",
				text: "Nos alegra haber ayudado a encontrarlo",
				icon: "success",
				confirmButtonColor: "rgb(128, 38, 212)",
			});
			navigate("/pets");
		});
	}

	return (
		<form onSubmit={handleSubmit} className={styles.form}>
			<InputText
				defaultValue={pet.name}
				label='Nombre'
				name='name'
				type='text'
			></InputText>
			<InputText
				defaultValue={pet.description}
				label='Breve descripción'
				name='description'
				type='text'
			></InputText>
			<MyDropzone defaultValue={pet.imgURL} onLoadImg={setImgData} />
			<MapBox defaultValue={pet.location} onChange={setMapData} />
			<Text>
				BUSCÁ UN PUNTO DE REFERENCIA PARA REPORTAR A TU MASCOTA. PUEDE SER UNA
				DIRECCIÓN, UN BARRIO O UNA CIUDAD
			</Text>
			<MainButton type='submit'>Guardar</MainButton>
			<GreenButton onClick={foundPet} type='button'>
				Reportar como encontrado
			</GreenButton>
			<RedButton onClick={unpublishPet} type='button'>
				Despublicar
			</RedButton>
		</form>
	);
}
