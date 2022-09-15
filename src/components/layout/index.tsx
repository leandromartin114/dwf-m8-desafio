import React from "react";
import { Outlet } from "react-router-dom";
import { CustomHeader } from "components/header";

export function Layout() {
	return (
		<div>
			<CustomHeader></CustomHeader>
			<Outlet></Outlet>
		</div>
	);
}
