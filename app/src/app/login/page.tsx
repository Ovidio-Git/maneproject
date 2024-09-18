// src/app/login/page.tsx
"use client";

import { signIn } from "next-auth/react";
import { FormEvent } from "react";

export default function Login() {
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const target = e.target as typeof e.target & {
      username: { value: string };
      password: { value: string };
    };
    await signIn("credentials", {
      redirect: true,
      username: target.username.value,
      password: target.password.value,
      callbackUrl: "/",
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="username" type="text" placeholder="Usuario" required />
      <input name="password" type="password" placeholder="Contraseña" required />
      <button type="submit">Iniciar sesión</button>
    </form>
  );
}
