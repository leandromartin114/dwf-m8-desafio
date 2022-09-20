import React, { Suspense } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./router";
import { RecoilRoot } from "recoil";

const container = document.querySelector(".app");
const root = createRoot(container!);

root.render(
	<Suspense fallback={null}>
		<RecoilRoot>
			<BrowserRouter>
				<AppRoutes></AppRoutes>
			</BrowserRouter>
		</RecoilRoot>
	</Suspense>
);
