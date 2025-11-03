"use client";

import Button from "@/components/Button";
export default function ContactPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold">Contacto</h1>
      <p className="mt-4">Esta es la página de contacto.</p>
      <Button onClick={() => alert("¡Gracias por contactarnos!")}>Enviar Mensaje</Button>
    </div>
  );
}