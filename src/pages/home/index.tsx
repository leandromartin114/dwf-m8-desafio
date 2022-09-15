import React from "react";
import { ReportForm } from "components/form-report";
import styles from "./index.css";

export function HomePage() {
	return (
		<div className={styles.container}>
			<ReportForm></ReportForm>
		</div>
	);
}
