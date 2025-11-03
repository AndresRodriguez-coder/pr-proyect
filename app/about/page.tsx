/*export default function TestErrorPage() {
  throw new Error("💥 Error forzado: algo salió mal");
}*/


export default function AboutPage() {
    //await new Promise((resolve) => setTimeout(resolve, 3000));
  return (
    <div>
      <h1 className="text-3xl font-bold">Acerca de</h1>
      <p className="mt-4">Esta es la página de acerca de.</p>
    </div>
  );
}
