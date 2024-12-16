import { Link } from "react-router-dom";

export const RecoveryPassword = () => {
	return (
		<main className="h-screen flex flex-col items-center justify-center gap-10 font-bold relative">
			<Link
				to={"/"}
				className="absolute top-10 left-10 shadow-sm shadow-black p-3 rounded-md transition-shadow hover:shadow-inner hover:shadow-black"
			>
				VOLVER
			</Link>

			<img
				src="https://cdn-icons-png.flaticon.com/128/5290/5290058.png"
				alt="TICK IT"
			/>
			<h1 className="tracking-widest text-3xl md:text-6xl">TICK IT</h1>

			<h3 className="tracking-wide text-xl md:text-3xl">
				REESTABLECER CONTRASEÑA
			</h3>
		</main>
	);
};
