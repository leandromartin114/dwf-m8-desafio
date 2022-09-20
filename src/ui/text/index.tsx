import React from "react";
import styles from "./index.css";

export function Title(props) {
	return (
		<h1 style={{ color: props.color }} className={styles.title}>
			{props.children}
		</h1>
	);
}
export function SubTitle(props) {
	return (
		<h3 style={{ color: props.color }} className={styles.sub_title}>
			{props.children}
		</h3>
	);
}
export function Text(props) {
	return (
		<p style={{ color: props.color }} className={styles.text}>
			{props.children}
		</p>
	);
}
export function LinkText(props) {
	return (
		<h4
			style={{ color: props.color }}
			onClick={props.onClick}
			className={styles.link_text}
		>
			{props.children}
		</h4>
	);
}
export function SpecialText(props) {
	return <p className={styles.special_text}>{props.children}</p>;
}
