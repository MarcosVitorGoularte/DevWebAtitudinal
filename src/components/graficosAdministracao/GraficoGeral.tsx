"use client";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
} from "recharts";

type Status = "bom" | "atencao" | "critico";

const atitudes = ["Responsabilidade", "Colaboração", "Autonomia", "Participação", "Respeito"];

// DADOS FALSOS (depois vêm de uma API)
const indicadores = [
  { titulo: "Alertas Ativos na Escola", valor: 12, cor: "text-white" },
  { titulo: "Registros no Período", valor: 48, cor: "text-white" },
  { titulo: "Alunos em Atenção", valor: 15, cor: "text-yellow-300" },
  { titulo: "Alunos em Estado Crítico", valor: 5, cor: "text-red-600" },
];

const desempenho = [
  { turma: "6º A", notas: [3.6, 3.2, 3.3, 3.1, 3.4] },
  { turma: "6º B", notas: [3.1, 2.1, 3.2, 3.2, 3.5] },
  { turma: "7º A", notas: [3.8, 3.2, 3.2, 3.2, 3.4] },
  { turma: "7º B", notas: [1.8, 3.1, 3.2, 2.1, 3.5] },
  { turma: "8º A", notas: [3.6, 3.2, 3.3, 1.5, 3.6] },
];

const evolucao = [
  { mes: "Fev", participacao: 2.6, colaboracao: 2.4, responsabilidade: 2.1 },
  { mes: "Mar", participacao: 3.1, colaboracao: 2.8, responsabilidade: 2.5 },
  { mes: "Abr", participacao: 2.5, colaboracao: 3.0, responsabilidade: 2.9 },
  { mes: "Mai", participacao: 2.9, colaboracao: 3.3, responsabilidade: 3.4 },
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

export function GraficoGeral() {
  return (
    <section className="bg-white p-5 rounded-b-2xl rounded-tr-2xl">
      {/* Indicadores */}
      <section className="grid grid-cols-[repeat(auto-fit,minmax(160px,1fr))] gap-5">
        {indicadores.map((item) => (
          <div
            key={item.titulo}
            className={`flex justify-center items-center text-center text-xl bg-slate-800 rounded-xl border-sky-300 border-2 p-5 ${item.cor}`}
          >
            <span>
              {item.titulo}
              <br />
              <span className="text-3xl">{item.valor}</span>
            </span>
          </div>
        ))}
      </section>

      {/* Tabela por turma e dimensão */}
      <section className="my-10">
        <div className="rounded-xl border border-sky-200 bg-sky-50 p-4 shadow-sky-300 shadow-md">
          <h2 className="mb-1 text-lg font-semibold text-sky-900">
            Desempenho por turma e dimensão
          </h2>
          <p className="mb-4 text-sm text-slate-600">Média de cada turma em cada atitude</p>

          <div className="overflow-x-auto">
            <table className="w-full min-w-150 border-separate border-spacing-2">
              <thead>
                <tr>
                  <th />
                  {atitudes.map((a) => (
                    <th key={a} className="text-sm font-semibold text-sky-900">
                      {a}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {desempenho.map((linha) => (
                  <tr key={linha.turma}>
                    <th scope="row" className="pr-2 text-left text-sm font-medium text-slate-700">
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

          <div className="mt-4 flex flex-wrap gap-4 text-sm text-slate-600">
            {Object.values(estilos).map((item) => (
              <span key={item.legenda} className="flex items-center gap-2">
                <span className={`rounded border-2 px-2 text-xs size-5 ${item.estilizacao}`}></span>
                {item.legenda}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Gráfico de linhas */}
      <section>
        <div className="rounded-xl border border-sky-200 bg-sky-50 p-4 shadow-sky-300 shadow-md">
          <h2 className="mb-1 text-lg font-semibold text-sky-900">Visão geral atitudinal</h2>
          <p className="mb-4 text-sm text-slate-600">Evolução mensal das médias da escola</p>

          <div className="h-64 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={evolucao}>
                <CartesianGrid strokeDasharray="3 3" stroke="#bae6fd" />
                <XAxis dataKey="mes" />
                <YAxis domain={[0, 4]} />
                <Legend iconType="circle" />
                <Line
                  type="monotone"
                  dataKey="participacao"
                  name="Participação"
                  stroke="#38bdf8"
                  strokeWidth={2}
                />
                <Line
                  type="monotone"
                  dataKey="colaboracao"
                  name="Colaboração"
                  stroke="#0284c7"
                  strokeWidth={2}
                />
                <Line
                  type="monotone"
                  dataKey="responsabilidade"
                  name="Responsabilidade"
                  stroke="#1e293b"
                  strokeWidth={2}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </section>
    </section>
  );
}
