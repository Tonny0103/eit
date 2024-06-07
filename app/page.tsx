import { LogInForm } from "@/components/LogInForm";
import React from "react";

const page = () => {
  return (
    <main className="flex flex-col min-h-screen justify-center items-center gap-4">
      <div>
        <h1 className="text-2xl font-bold">Bem vindo de volta!</h1>
        <p>Faça seu login para continuar</p>
      </div>
      <LogInForm />
    </main>
  );
};

export default page;
