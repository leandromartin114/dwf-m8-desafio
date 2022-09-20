import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Title, SubTitle, Text, LinkText } from "ui/text";
import styles from "./index.css";

type petProps = {
	objectID: number;
	imgURL: string;
	state: string;
	name: string;
	description: string;
	location: string;
};
export function PetCard(props: petProps) {
	const navigate = useNavigate();
	const [color, setColor] = useState(null);

	function handleClick() {
		navigate("/info");
	}
	useEffect(() => {
		if (props.state == "LOST") {
			setColor("red");
		}
		if (props.state == "FINDED") {
			setColor("green");
		}
	}, [color]);

	return (
		<div className={styles.card}>
			<div
				className={styles.card_img}
				style={{ backgroundImage: `url(${props.imgURL})` }}
			>
				<Title color={color}>{props.state}</Title>
			</div>
			<div className={styles.card_content}>
				<div className={styles.pet_content}>
					<Title>{props.name}</Title>
					<Text>{props.description}</Text>
				</div>
				<div className={styles.info_content}>
					<SubTitle>{props.location}</SubTitle>
					<LinkText onClick={handleClick}>REPORTAR INFORMACIÓN</LinkText>
				</div>
			</div>
		</div>
	);
}
