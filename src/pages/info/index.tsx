import React from "react";
import { Title } from "ui/text";
import { InfoForm } from "components/form-info";

export function InfoPage() {
	return (
		<div>
			<Title>Reporta información sobre esta mascota</Title>
			<InfoForm></InfoForm>
		</div>
	);
}
