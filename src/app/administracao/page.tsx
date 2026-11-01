"use client";
import { useState } from "react";
import { Header } from "@/components/header";
import { GraficoPeriodo } from "@/components/graficosAdministracao/GraficoPeriodo";

type Tipo = "turma" | "periodo" | "geral";

const abas: { id: Tipo; nomeBotao: string }[] = [
  { id: "turma", nomeBotao: "Por turma" },
  { id: "periodo", nomeBotao: "Por período" },
  { id: "geral", nomeBotao: "Geral" },
];

export default function Administracao() {
  const [tipo, setTipo] = useState<Tipo>("turma");
  return (
    <>
      <Header />
      <main className="">
        <div className="p-4">
          <div className="flex gap-2 bg-white w-max p-3 rounded-t-xl max-[350px]:p-2">
            {abas.map((aba) => (
              <button
                key={aba.id}
                onClick={() => setTipo(aba.id)}
                className={`px-3 py-2 rounded cursor-pointer transition-all max-[350px]:px-2 ${
                  tipo === aba.id ? "bg-blue-600 text-white scale-105" : "bg-blue-400 text-white"
                }`}
              >
                {aba.nomeBotao}
              </button>
            ))}
          </div>

          {tipo === "periodo" && <GraficoPeriodo />}
        </div>
      </main>
    </>
  );
}
