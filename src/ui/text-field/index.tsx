import React from "react";
import { SubTitle } from "ui/text";
import styles from "./index.css";

type inputProps = {
	label: string;
	name: string;
	type;
	value?: string;
	onChange?: (any) => any;
	onKeyDown?: (any) => any;
};
type areaProps = {
	label: string;
	name: string;
};
export function InputText(props: inputProps) {
	return (
		<label className={styles.label}>
			<SubTitle>{props.label}</SubTitle>
			<input
				onKeyDown={props.onKeyDown}
				onChange={props.onChange}
				value={props.value}
				type={props.type}
				name={props.name}
				className={styles.input}
			/>
		</label>
	);
}
export function AreaText(props: areaProps) {
	return (
		<label className={styles.label}>
			<SubTitle>{props.label}</SubTitle>
			<textarea
				name={props.name}
				className={`${styles.input} ${styles.area}`}
			/>
		</label>
	);
}
