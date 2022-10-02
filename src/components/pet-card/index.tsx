import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Title, SubTitle, Text, LinkText } from "ui/text";
import styles from "./index.css";
import { usePetInfoState, usePetState } from "hooks";
import pencil from "assets/pencil.png";

type petProps = {
	objectID: number;
	imgURL: string;
	state: string;
	name: string;
	description: string;
	location: string;
	email: string;
};

export function PetCard(props: petProps) {
	const navigate = useNavigate();
	const [color, setColor] = useState(null);
	const [petInfo, setPetInfo] = usePetInfoState();

	function handleClick() {
		const InfoForReport = {
			name: props.name,
			email: props.email,
			id: props.objectID,
		};
		setPetInfo(InfoForReport);
		navigate("/info");
	}

	useEffect(() => {
		if (props.state === "LOST") {
			setColor("red");
		} else if (props.state === "FINDED" || props.state === "FOUND") {
			setColor("green");
		}
	});

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

type myPetProps = {
	id: number;
	imgURL: string;
	state: string;
	name: string;
	description: string;
	location: string;
};

export function MyPetCard(props: myPetProps) {
	const navigate = useNavigate();
	const [color, setColor] = useState(null);
	const [pet, setPet] = usePetState();

	function handleClick() {
		const myPetData = {
			id: props.id,
			imgURL: props.imgURL,
			state: props.state,
			name: props.name,
			description: props.description,
			location: props.location,
		};
		setPet(myPetData);
		navigate("/edit");
	}

	useEffect(() => {
		if (props.state === "FINDED" || props.state === "FOUND") {
			setColor("green");
		} else if (props.state === "UNPUBLISH") {
			setColor("yellow");
		} else if (props.state === "LOST") {
			setColor("red");
		}
	});

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
					<img
						onClick={handleClick}
						src={pencil}
						className={styles.edit_pencil}
					/>
				</div>
			</div>
		</div>
	);
}
