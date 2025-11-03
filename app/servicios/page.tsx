"use client";
import Card from "@/components/Card";

export default function ServiciosPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold">Servicios</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
        <Card
          title="Servicio 1"
          description="Descripción del Servicio 1"
          icon="🔧"
        />
        <Card
          title="Servicio 2"
          description="Descripción del Servicio 2"
          icon="💼"
        />
        <Card
          title="Servicio 3"
          description="Descripción del Servicio 3"
          icon="🌐"
        />
      </div>
    </div>
  );
}
