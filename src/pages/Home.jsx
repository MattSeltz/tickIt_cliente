import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <main className="h-screen flex flex-col items-center justify-center gap-10 font-bold">
      <img
        src="https://cdn-icons-png.flaticon.com/128/5290/5290058.png"
        alt="TICK IT"
      />
      <h1 className="tracking-widest text-3xl md:text-6xl">TICK IT</h1>

      <section className="flex gap-10 md:text-3xl">
        <Link
          to={"/signIn"}
          className="shadow-sm shadow-black p-3 rounded-md transition-shadow hover:shadow-inner hover:shadow-black"
        >
          INICIAR SESIÓN
        </Link>
        <Link
          to={"/signUp"}
          className="shadow-sm shadow-black p-3 rounded-md transition-shadow hover:shadow-inner hover:shadow-black"
        >
          REGISTRARSE
        </Link>
      </section>
    </main>
  );
};
