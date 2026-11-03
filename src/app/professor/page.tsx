"use client";

import { useState } from "react";

const estudantes = [
  { id: 1, nome: "Estudante 1", turma: "tulipa" },
  { id: 2, nome: "Estudante 2", turma: "betonia" },
  { id: 3, nome: "Estudante 3", turma: "abobora" },
];

const nomesTurmas = {
  tulipa: "Terceiro ano Tulipa",
  betonia: "Segundo ano Betônia",
  abobora: "Primeiro ano Abóbora",
};

export default function ListaAlunosPage() {
  const [turmaEscolhida, setTurmaEscolhida] = useState("");
  const [busca, setBusca] = useState("");
  const estudantesFiltrados = estudantes.filter(
    (estudante) =>
      (turmaEscolhida === "" || estudante.turma === turmaEscolhida) &&
      estudante.nome.toLowerCase().includes(busca.toLowerCase()),
  );
  return (
    <main className="min-h-screen bg-white p-4 text-black">
      <div className="mx-auto max-w-3xl">
        <h1 className="mb-4 text-2xl font-bold">Estudantes</h1>

        <div className="mb-4">
          <label htmlFor="busca" className="block">
            Buscar estudante
          </label>
          <input
            value={busca}
            onChange={(e) => setBusca(e.target.value)}
            className="mt-1 w-full rounded-lg border border-sky-950/30 bg-white px-3 py-2"
            id="busca"
            type="text"
            placeholder="Digite o nome..."
          />
        </div>

        <div className="mb-4">
          <label htmlFor="turma" className="block">
            Turma
          </label>
          <select
            value={turmaEscolhida}
            onChange={(e) => setTurmaEscolhida(e.target.value)}
            className="mt-1 w-full rounded-lg border border-sky-950/30 bg-white px-3 py-2"
            id="turma"
          >
            <option value="">Todas as turmas</option>
            <option value="tulipa">Terceiro ano Tulipa</option>
            <option value="betonia">Segundo ano Betônia</option>
            <option value="abobora">Primeiro ano Abóbora</option>
          </select>
        </div>

        <ul className="flex flex-col gap-3">
          {estudantesFiltrados.map((estudante) => (
            <li key={estudante.id} className="rounded-xl border border-sky-950/20 bg-white p-4">
              <p className="text-lg font-semibold">{estudante.nome}</p>
              <p className="text-sm text-sky-950/70">
                {nomesTurmas[estudante.turma as keyof typeof nomesTurmas]}
              </p>
              <button className="mt-3 w-full rounded-lg bg-sky-950 px-4 py-2 text-sm font-semibold text-sky-200">
                Ver registros
              </button>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
