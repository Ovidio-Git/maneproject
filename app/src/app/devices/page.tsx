// src/app/dashboard/page.tsx
"use client";

import { useSession } from "next-auth/react";

export default function Dashboard() {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return <p>Cargando...</p>;
  }

  if (!session) {
    // Redirigir al login si no está autenticado
    if (typeof window !== "undefined") {
      window.location.href = "/login";
    }
    return null;
  }

  return <h1>Device</h1>;
}
