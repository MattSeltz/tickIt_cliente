import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import { Input } from "../components/sign/Input";
import { Submit } from "../components/sign/Submit";

import { postData } from "../services/services";
import { setTokenGlobal } from "../contexts/token/tokenSlice";
import { LinkComponent } from "../components/sign/LinkComponent";

export const SignIn = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const reset = () => {
		setEmail("");
		setPassword("");
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		if (email && password) {
			try {
				const res = await postData("auth/login", { email, password });

				if (res) {
					alert(res.message);
					navigate("/");

					sessionStorage.setItem("token", res.token);
					dispatch(setTokenGlobal(res.token));

					reset();
				} else {
					alert("ERROR!");
				}
			} catch (error) {
				console.error(error);
			}
		} else {
			alert("REQUIRED DATA!");
		}
	};

	return (
		<main className="h-screen flex flex-col items-center justify-center gap-10 font-bold">
			<h1 className="tracking-widest text-3xl md:text-6xl">TICK IT</h1>

			<h3 className="tracking-wide text-xl md:text-3xl">INICIAR SESIÓN</h3>

			<form
				onSubmit={handleSubmit}
				autoComplete="off"
				className="flex flex-col gap-5 md:text-xl"
			>
				<Input type={"email"} value={email} setValue={setEmail}>
					EMAIL
				</Input>
				<Input type={"password"} value={password} setValue={setPassword}>
					CONTRASEÑA
				</Input>
				<Link to={"/recoveryPassword"} className="tracking-wide">
					¿OLVIDASTE TU CONTRASEÑA?
				</Link>
				<Submit>INICIAR SESIÓN</Submit>
				<LinkComponent to={"/signUp"}>¿AUN NO TE REGISTRASTE?</LinkComponent>
			</form>
		</main>
	);
};
