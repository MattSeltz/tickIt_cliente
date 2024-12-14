import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { Input } from "../components/sign/Input";
import { Submit } from "../components/sign/Submit";

import { postData } from "../services/services";

export const SignUp = () => {
  const navigate = useNavigate();

  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const reset = () => {
    setNombre("");
    setEmail("");
    setPassword("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (nombre && email && password) {
      try {
        const res = await postData("auth/register", {
          nombre,
          email,
          password,
        });

        if (res) {
          alert(res.message);
          navigate("/signIn");

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

      <h3 className="tracking-wide text-xl md:text-3xl">REGISTRARSE</h3>

      <form
        onSubmit={handleSubmit}
        autoComplete="off"
        className="flex flex-col gap-5 md:text-xl"
      >
        <Input type={"text"} value={nombre} setValue={setNombre}>
          USUARIO
        </Input>
        <Input type={"email"} value={email} setValue={setEmail}>
          EMAIL
        </Input>
        <Input type={"password"} value={password} setValue={setPassword}>
          CONTRASEÑA
        </Input>
        <Submit>REGISTRARSE</Submit>
      </form>
    </main>
  );
};
