import React from "react";
import { MyDataForm } from "components/form-mydata";
import { Title } from "ui/text";

export function MyDataPage() {
	return (
		<div>
			<Title>Mis datos</Title>
			<MyDataForm></MyDataForm>
		</div>
	);
}
