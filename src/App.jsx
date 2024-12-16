import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { Router } from "./router/router";
import { setTokenGlobal } from "./contexts/token/tokenSlice";

export const App = () => {
	const disptach = useDispatch();

	useEffect(() => {
		const token = sessionStorage.getItem("token");

		if (!token) return;

		disptach(setTokenGlobal(token));
	}, []);

	return <Router />;
};
