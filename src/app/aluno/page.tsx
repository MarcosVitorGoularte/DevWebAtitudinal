import { GraficoRadar } from "@/components/graficosAdministracao/GraficoRadar";
import Link from "next/link";

const estudantes = [
  {
    id: 1,
    nome: "Gustavo",
    situacao: "Regular",
    dados: [
      { atitude: "Respo.", valor: 3.4 },
      { atitude: "Colab.", valor: 3.2 },
      { atitude: "Auto.", valor: 5.0 },
      { atitude: "Part.", valor: 1.1 },
      { atitude: "Respe.", valor: 3.6 },
    ],
  },
  {
    id: 2,
    nome: "Marcos",
    situacao: "Regular",
    dados: [
      { atitude: "Respo.", valor: 2.8 },
      { atitude: "Colab.", valor: 3.5 },
      { atitude: "Auto.", valor: 0.2 },
      { atitude: "Part.", valor: 2.9 },
      { atitude: "Respe.", valor: 3.3 },
    ],
  },
  {
    id: 3,
    nome: "Natanael",
    situacao: "Regular",
    dados: [
      { atitude: "Respo.", valor: 3.1 },
      { atitude: "Colab.", valor: 2.4 },
      { atitude: "Auto.", valor: 3.3 },
      { atitude: "Part.", valor: 0.0 },
      { atitude: "Respe.", valor: 3.2 },
    ],
  },
  {
    id: 4,
    nome: "Pedro",
    situacao: "Regular",
    dados: [
      { atitude: "Respo.", valor: 2.1 },
      { atitude: "Colab.", valor: 1.4 },
      { atitude: "Auto.", valor: 3.0 },
      { atitude: "Part.", valor: 3.0 },
      { atitude: "Respe.", valor: 2.2 },
    ],
  },
];

const turmas = [
  {
    id: 1,
    nome: "Turma A",
    dados: [
      { atitude: "Responsabilidade", valor: 2.1 },
      { atitude: "Colaboração", valor: 1.4 },
      { atitude: "Autonomia", valor: 5.0 },
      { atitude: "Participação", valor: 3.0 },
      { atitude: "Respeito", valor: 2.2 },
    ],
  },
];

const NOTA_MAXIMA = 5;

function BarraNota({ valor }: { valor: number }) {
  const porcentagem = Math.min(Math.max(valor / NOTA_MAXIMA, 0), 1) * 100;

  return (
    <div className="flex-1 h-4 rounded-full bg-sky-100 overflow-hidden">
      <div
        className="h-full rounded-full bg-blue-700 transition-all"
        style={{ width: `${porcentagem}%` }}
      />
    </div>
  );
}

export default function LoginAluno() {
  return (
    <>
      <main className="p-4">
        <section className="mb-8">
          <div className="flex flex-col gap-4 rounded-xl border-2 border-sky-300 bg-slate-800 p-5 text-white sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="text-xl font-semibold">Autoavaliação do bimestre</h2>
            </div>
            <Link
              href="/aluno/autoavaliacao"
              className="shrink-0 items-center justify-center gap-2 rounded-lg bg-sky-500 px-5 py-3 font-semibold text-white transition-all hover:bg-sky-400"
            >
              Realizar autoavaliação
            </Link>
          </div>
        </section>
        <section className="text-sky-950 grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-2 mb-10 font-semibold">
          <div className="flex flex-col bg-sky-50 py-4 rounded-2xl border-2 border-sky-200">
            <span className="mb-5 px-4 pb-2 border-b-2 border-sky-400">
              Médias por dimensão da turma
            </span>
            <div className="px-4">
              {turmas.map((turma) => (
                <div key={turma.id}>
                  <ul className="flex flex-col gap-1 ">
                    {turma.dados.map((dado) => (
                      <li key={dado.atitude} className="flex items-center gap-2">
                        <span className="w-35 shrink-0">{dado.atitude}</span>
                        <BarraNota valor={dado.valor} />
                        <span className="w-8 shrink-0 text-right font-semibold">
                          {dado.valor.toFixed(1)}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-col bg-sky-50 py-4 rounded-2xl border-2 border-sky-200 h-max">
            <span className="mb-5 px-4 pb-2 border-b-2 border-sky-400">
              Perfil coletivo da turma
            </span>
            <div>
              <div className="flex justify-center">
                {turmas.map((turma) => (
                  <div key={turma.id} className="flex flex-col w-full p-4">
                    <span className="text-lg">{turma.nome}</span>
                    <GraficoRadar dados={turma.dados} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        <section>
          <span className="font-bold text-4xl text-sky-950">Estudantes</span>
          <div className="grid grid-cols-[repeat(auto-fit,250px)] gap-2 justify-evenly mt-5">
            {estudantes.map((estudante) => (
              <div
                key={estudante.id}
                className="flex flex-col bg-sky-50 text-sky-900 py-4 px-3 rounded-xl shadow-sky-300 shadow-md hover:scale-105 transition-all hover:ring-2 "
              >
                <div className="flex justify-between items-center gap-2 font-semibold">
                  <span className="text-lg">{estudante.nome}</span>
                  <span className="text-center">
                    Situação:
                    <br />
                    {estudante.situacao}
                  </span>
                </div>
                <GraficoRadar dados={estudante.dados} />
                <ul className="flex flex-col gap-1">
                  {estudante.dados.map((dado) => (
                    <li key={dado.atitude} className="flex items-center gap-2">
                      <span className="w-12 shrink-0">{dado.atitude}</span>
                      <BarraNota valor={dado.valor} />
                      <span className="w-8 shrink-0 text-right font-semibold">
                        {dado.valor.toFixed(1)}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
