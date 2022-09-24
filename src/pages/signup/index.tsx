import React from "react";
import { SignupForm } from "components/form-signup";
import { Title } from "ui/text";

export function SignupPage() {
	return (
		<div>
			<Title>Registrate</Title>
			<SignupForm></SignupForm>
		</div>
	);
}
