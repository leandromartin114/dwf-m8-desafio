import React from "react";
import styles from "./index.css";

export function MainButton(props) {
	function handleClick() {
		if (props.onClick) {
			props.onClick();
		}
	}
	return (
		<button
			onClick={handleClick}
			className={`${styles.main} ${styles.violet}`}
			type={props.type}
		>
			{props.children}
		</button>
	);
}

export function GreenButton(props) {
	function handleClick() {
		if (props.onClick) {
			props.onClick();
		}
	}
	return (
		<button
			onClick={handleClick}
			className={`${styles.main} ${styles.green}`}
			type={props.type}
		>
			{props.children}
		</button>
	);
}
export function GreyButton(props) {
	function handleClick() {
		if (props.onClick) {
			props.onClick();
		}
	}
	return (
		<button
			onClick={handleClick}
			className={`${styles.main} ${styles.grey}`}
			type={props.type}
		>
			{props.children}
		</button>
	);
}
export function RedButton(props) {
	function handleClick() {
		if (props.onClick) {
			props.onClick();
		}
	}
	return (
		<button
			onClick={handleClick}
			className={`${styles.main} ${styles.red}`}
			type={props.type}
		>
			{props.children}
		</button>
	);
}
