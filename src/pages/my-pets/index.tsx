import React, { useState, useEffect } from "react";
import styles from "./index.css";
import { Title, SubTitle } from "ui/text";
import { getAllMyPets } from "lib/pet";
import { MyPetCard } from "components/pet-card";
import { useTokenValeu } from "hooks";

export function MyPetsPage() {
	const [myPets, setMyPets] = useState([]);
	const token = useTokenValeu();

	function getMyPets() {
		const result = getAllMyPets(token);
		result.then((r) => {
			setMyPets(r);
		});
	}

	useEffect(() => {
		if (token) {
			getMyPets();
		}
	}, [token]);

	return (
		<div className={styles.container}>
			<Title>Mis mascotas reportadas</Title>
			{myPets.length == 0 ? (
				<SubTitle>Aun no tienes mascotas reportadas</SubTitle>
			) : (
				<div className={styles.cards_container}>
					{myPets.map((p) => (
						<MyPetCard
							key={p.id}
							name={p.name}
							description={p.description}
							imgURL={p.imgURL}
							location={p.location}
							id={p.id}
							state={p.state}
						/>
					))}
				</div>
			)}
		</div>
	);
}
