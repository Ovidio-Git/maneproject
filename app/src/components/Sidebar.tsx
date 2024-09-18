// src/components/Sidebar.tsx
"use client";

import { useSession, signOut } from "next-auth/react";
import Link from "next/link";

export default function Sidebar() {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return <p>Cargando...</p>;
  }

  if (!session) {
    return (
      <p>
        No estás autenticado. Por favor, <Link href="/login">inicia sesión</Link>.
      </p>
    );
  }

  return (
    <aside className="w-64 bg-gray-200 p-4">
      <nav>
        <ul>
          <li>
            <Link href="/dashboard">Dashboard</Link>
          </li>
          <li>
            <Link href="/devices">Devices</Link>
          </li>
          <li>
            <Link href="/admin">Admin</Link>
          </li>
        </ul>
      </nav>
      <button onClick={() => signOut()}>Cerrar sesión</button>
    </aside>
  );
}
