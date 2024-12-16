// import { LinkComponent } from "../components/home/LinkComponent";

import { useDispatch } from "react-redux";

import { setTokenGlobal } from "../contexts/token/tokenSlice";
import { useNavigate } from "react-router-dom";

export const Home = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const handleClick = () => {
		sessionStorage.removeItem("token");
		dispatch(setTokenGlobal(null));
		navigate("/");
	};

	return (
		<main className="h-screen flex flex-col items-center justify-center gap-10 font-bold relative">
			<button
				onClick={handleClick}
				className="absolute top-10 left-10 shadow-sm shadow-black p-3 rounded-md transition-shadow hover:shadow-inner hover:shadow-black"
			>
				LOGOUT
			</button>

			<img
				src="https://cdn-icons-png.flaticon.com/128/5290/5290058.png"
				alt="TICK IT"
			/>
			<h1 className="tracking-widest text-3xl md:text-6xl">TICK IT</h1>

			{/* <section className="flex gap-10 md:text-3xl">
        <LinkComponent to={"/signIn"}>INICIAR SESIÓN</LinkComponent>
        <LinkComponent to={"/signUp"}>REGISTRARSE</LinkComponent>
      </section> */}
		</main>
	);
};
