import { Link } from "react-router-dom";

export const NotFound = () => {
	return (
		<main className="h-screen flex flex-col gap-10 items-center justify-center font-bold">
			<h1 className="tracking-widest text-3xl text-center">
				Error 404 Página no encontrada
			</h1>

			<Link
				to="/"
				className="bg-blue-500 rounded-md p-3 transition-transform hover:scale-105"
			>
				VOLVER
			</Link>
		</main>
	);
};
