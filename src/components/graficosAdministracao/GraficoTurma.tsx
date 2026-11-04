import { GraficoRadar } from "./GraficoRadar";

type Status = "bom" | "atencao" | "critico";

const atitudes = ["Responsabilidade", "Colaboração", "Autonomia", "Participação", "Respeito"];

const dados = [
  { turma: "Turma 1", notas: [3.9, 3.2, 3.0, 3.1, 3.6] },
  { turma: "Turma 2", notas: [3.1, 2.1, 3.0, 3.2, 3.3] },
  { turma: "Turma 3", notas: [3.2, 3.0, 2.2, 3.1, 3.3] },
  { turma: "Turma 4", notas: [1.8, 3.1, 2.0, 3.0, 3.2] },
];

function getStatus(nota: number): Status {
  if (nota >= 3) return "bom";
  if (nota >= 2) return "atencao";
  return "critico";
}

const estilos: Record<Status, { estilizacao: string; legenda: string }> = {
  bom: {
    estilizacao: "bg-sky-600 text-white border-sky-600",
    legenda: "Adequado (3 ou mais)",
  },
  atencao: {
    estilizacao: "bg-sky-100 text-sky-900 border-sky-300",
    legenda: "Atenção (2 a 2,9)",
  },
  critico: {
    estilizacao: "bg-amber-100 text-amber-800 border-amber-400",
    legenda: "Crítico (abaixo de 2)",
  },
};

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

export function GraficoTurma() {
  return (
    <section className="bg-white p-5 rounded-b-2xl rounded-tr-2xl">
      <section className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-5">
        <div className="flex justify-center items-center text-center text-xl bg-slate-800 rounded-xl border-sky-300 border-2 p-5 text-white">
          <span>
            Alertas Ativos no Período Escolar
            <br />
            <span className="text-3xl">45</span>
          </span>
        </div>
        <div className="flex justify-center items-center text-center text-xl bg-slate-800 rounded-xl border-sky-300 border-2 p-5 text-white">
          <span>
            Registros no Período <br />
            <span className="text-3xl">10</span>
          </span>
        </div>
        <div className="flex justify-center items-center text-center text-xl bg-slate-800 rounded-xl border-sky-300 border-2 p-5 text-yellow-300">
          <span>
            Alunos em Atenção
            <br />
            <span className="text-3xl">22</span>
          </span>
        </div>
        <div className="flex justify-center items-center text-center text-xl bg-slate-800 rounded-xl border-sky-300 border-2 p-5 text-red-600">
          <span>
            Alunos em Estado Crítico
            <br />
            <span className="text-3xl">4</span>
          </span>
        </div>
      </section>
      <section className="my-10">
        <div className="rounded-xl border border-sky-200 bg-sky-50 p-4 shadow-sky-300 shadow-md">
          <h2 className="mb-1 text-lg font-semibold text-sky-900">Atitudinal por período</h2>
          <p className="mb-4 text-sm text-slate-600">
            Média de todos os estudantes em cada atitude
          </p>

          <div className="overflow-x-auto">
            <table className="w-full min-w-150 border-separate border-spacing-2">
              <thead>
                <tr>
                  <th />
                  {atitudes.map((i) => (
                    <th key={i} className="text-sm font-semibold text-sky-900">
                      {i}
                    </th>
                  ))}
                </tr>
              </thead>

              <tbody>
                {dados.map((linha) => (
                  <tr key={linha.turma}>
                    <th scope="row" className=" pr-2 text-left text-sm font-medium text-slate-700">
                      {linha.turma}
                    </th>

                    {linha.notas.map((nota, i) => {
                      const estilo = estilos[getStatus(nota)];
                      return (
                        <td key={atitudes[i]}>
                          <div
                            title={`${atitudes[i]}: ${nota}`}
                            className={`rounded-lg border-2 py-2 text-center text-sm font-medium ${estilo.estilizacao}`}
                          >
                            {nota.toFixed(1)}
                          </div>
                        </td>
                      );
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-4 flex flex-wrap gap-4 text-sm text-slate-600 ">
            {Object.values(estilos).map((quadradinhos) => (
              <span key={quadradinhos.legenda} className="flex items-center gap-2">
                <span
                  className={`rounded border-2 px-2 text-xs size-5 ${quadradinhos.estilizacao}`}
                ></span>
                {quadradinhos.legenda}
              </span>
            ))}
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
    </section>
  );
}
