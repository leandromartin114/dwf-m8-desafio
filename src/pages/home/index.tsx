import React, { useState, useEffect } from "react";
import styles from "./index.css";
import { Title, Text } from "ui/text";
import { MainButton } from "ui/buttons";
import { getPetsNearBy } from "lib/pet";
import { PetCard } from "components/pet-card";
import Swal from "sweetalert2";
import { useCoordsState } from "hooks";

export function HomePage() {
	const [coords, setCoords] = useCoordsState();
	const [pets, setPets] = useState([]);

	function handleLocation() {
		navigator.geolocation.getCurrentPosition((position) => {
			setCoords({
				lat: position.coords.latitude,
				lng: position.coords.longitude,
			});
		});
	}
	function getPets() {
		const result = getPetsNearBy(coords.lat, coords.lng);
		result.then((r) => {
			setPets(r);
			if (r.length == 0) {
				Swal.fire({
					title: "¡No se encontraron mascotas!",
					text: "Por el momento no hay mascotas reportadas en tu zona",
					icon: "warning",
					confirmButtonColor: "rgb(128, 38, 212)",
				});
			}
		});
	}
	useEffect(() => {
		if (coords.lat !== 0 && coords.lng !== 0) {
			getPets();
		}
	}, [coords]);

	return (
		<div className={styles.container}>
			<Title>Mascotas perdidas cerca tuyo</Title>
			<div className={styles.text_container}>
				<Text>
					Para ver las mascotas reportadas cerca tuyo necesitamos permiso para
					conocer tu ubicación
				</Text>
				<MainButton onClick={handleLocation}>Mi ubicación</MainButton>
			</div>
			{pets.length == 0 ? null : (
				<div className={styles.cards_container}>
					{pets.map((p) => (
						<PetCard
							key={p.objectID}
							name={p.name}
							description={p.description}
							imgURL={p.imgURL}
							location={p.location}
							objectID={p.objectID}
							state={p.state}
							email={p.email}
						/>
					))}
				</div>
			)}
		</div>
	);
}
