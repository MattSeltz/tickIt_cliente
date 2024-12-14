import { LinkComponent } from "../components/home/LinkComponent";

export const Home = () => {
  return (
    <main className="h-screen flex flex-col items-center justify-center gap-10 font-bold">
      <img
        src="https://cdn-icons-png.flaticon.com/128/5290/5290058.png"
        alt="TICK IT"
      />
      <h1 className="tracking-widest text-3xl md:text-6xl">TICK IT</h1>

      <section className="flex gap-10 md:text-3xl">
        <LinkComponent to={"/signIn"}>INICIAR SESIÓN</LinkComponent>
        <LinkComponent to={"/signUp"}>REGISTRARSE</LinkComponent>
      </section>
    </main>
  );
};
