export const SignUp = () => {
  return (
    <main className="h-screen flex flex-col items-center justify-center gap-10 font-bold">
      <h1 className="tracking-widest text-3xl md:text-6xl">TICK IT</h1>

      <h3 className="tracking-wide text-xl md:text-3xl">REGISTRARSE</h3>

      <form autoComplete="off" className="flex flex-col gap-5 md:text-xl">
        <div className="flex flex-col justify-between gap-5 sm:flex-row sm:gap-10 sm:items-center">
          <label htmlFor="user">USUARIO</label>
          <input
            type="text"
            name="user"
            id="user"
            placeholder="USUARIO"
            className="rounded-md p-3 text-black"
          />
        </div>
        <div className="flex flex-col justify-between gap-5 sm:flex-row sm:gap-10 sm:items-center">
          <label htmlFor="email">EMAIL</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="EMAIL"
            className="rounded-md p-3 text-black"
          />
        </div>
        <div className="flex flex-col justify-between gap-5 sm:flex-row sm:gap-10 sm:items-center">
          <label htmlFor="password">CONTRASEÑA</label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="CONTRASEÑA"
            className="rounded-md p-3 text-black"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 rounded-md p-3 transition-transform hover:scale-105"
        >
          REGISTRARSE
        </button>
      </form>
    </main>
  );
};
