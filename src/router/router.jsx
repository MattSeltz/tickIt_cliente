import { Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";

import { Home } from "../pages/Home";
import { SignIn } from "../pages/SignIn";
import { SignUp } from "../pages/SignUp";
import { NotFound } from "./NotFound";
import { RecoveryPassword } from "../pages/RecoveryPassword";

export const Router = () => {
	const token = useSelector((state) => state.token.value);

	return (
		<Routes>
			<Route path="*" element={<NotFound />} />
			<Route path={token && "/"} element={<Home />} />
			{!token && (
				<>
					<Route path="/" element={<SignIn />} />
					<Route path="/signUp" element={<SignUp />} />
					<Route path="/recoveryPassword" element={<RecoveryPassword />} />
				</>
			)}
		</Routes>
	);
};
