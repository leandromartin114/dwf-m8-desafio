import React from "react";
import styles from "./index.css";
import { Title, Text } from "ui/text";
import { MainButton } from "ui/buttons";

export function HomePage() {
	return (
		<div className={styles.container}>
			<Title>Mascotas perdidas cerca tuyo</Title>
			<div className={styles.text_container}>
				<Text>
					Para ver las mascotas reportadas cerca tuyo necesitamos permiso para
					conocer tu ubicación
				</Text>
				<MainButton>Mi ubicación</MainButton>
			</div>
			<div className={styles.cards_container}></div>
		</div>
	);
}
