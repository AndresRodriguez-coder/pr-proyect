"use client";
import Button from "@/components/Button";
import Card from "@/components/Card";

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Hero Section */}
      <section className="text-center py-20">
        <h1 className="text-5xl font-bold text-gray-900 mb-6">
          Bienvenido a Mi Proyecto
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Un proyecto moderno construido con Next.js, TypeScript y Tailwind CSS
        </p>
        <div className="flex justify-center gap-4">
          <Button onClick={() => alert("¡Bienvenido!")}>Comenzar</Button>
          <Button onClick={() => alert("No sea sapo socio")}>Saber más</Button>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 grid grid-cols-1 md:grid-cols-3 gap-8">
        <h2 className="text-3xl font-bold text-center col-span-3">Características</h2>
        <Card
          title="Rápido"
          description="Construido con Next.js para un rendimiento óptimo"
          icon="⚡"
        />
        <Card
          title="Responsivo"
          description="Diseño adaptable para todos los dispositivos"
          icon="📱"
        />
        <Card
          title="Seguro"
          description="Protección de datos y privacidad garantizadas"
          icon="🔒"
        />
      </section>

    </div>
  );
}