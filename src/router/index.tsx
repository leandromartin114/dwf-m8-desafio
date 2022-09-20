import React from "react";
import { Route, Routes } from "react-router-dom";
import { HomePage } from "pages/home";
import { SigninPage } from "pages/signin";
import { SignupPage } from "pages/signup";
import { PassPage } from "pages/pass";
import { MyDataPage } from "pages/my-data";
import { EditPage } from "pages/edit";
import { ReportPage } from "pages/report";
import { MyPetsPage } from "pages/my-pets";
import { InfoPage } from "pages/info";
import { Layout } from "components/layout";
import { useEmailState, useTokenState } from "hooks";
import { Beforeunload } from "react-beforeunload";

export function AppRoutes() {
	const [token, setToken] = useTokenState();
	const [email, setEmail] = useEmailState();
	function handleBeforeunload() {
		setToken("");
		setEmail("");
		localStorage.removeItem("local_data");
	}
	return (
		<Beforeunload onBeforeunload={handleBeforeunload}>
			<Routes>
				<Route path='/' element={<Layout />}>
					<Route index element={<HomePage />} />
					<Route path='home' element={<HomePage />} />
					<Route path='signin' element={<SigninPage />} />
					<Route path='pass' element={<PassPage />} />
					<Route path='pass/:email' element={<PassPage />} />
					<Route path='signup' element={<SignupPage />} />
					<Route path='mydata' element={<MyDataPage />} />
					<Route path='report' element={<ReportPage />} />
					<Route path='edit' element={<EditPage />} />
					<Route path='pets' element={<MyPetsPage />} />
					<Route path='info' element={<InfoPage />} />
				</Route>
			</Routes>
		</Beforeunload>
	);
}
