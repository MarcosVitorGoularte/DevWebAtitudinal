type Status = "bom" | "atencao" | "critico";

const atitudes = ["Reponsabilidade", "Colaboração", "Autonomia", "Participação", "Respeito"];

const dados = [
  { periodo: "1º Bimestre", notas: [3.9, 3.2, 3.0, 3.1, 3.6] },
  { periodo: "2º Bimestre", notas: [3.1, 2.1, 3.0, 3.2, 3.3] },
  { periodo: "3º Bimestre", notas: [3.2, 3.0, 2.2, 3.1, 3.3] },
  { periodo: "4º Bimestre", notas: [1.8, 3.1, 2.0, 3.0, 3.2] },
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

export function GraficoPeriodo() {
  return (
    <section className="bg-white p-5 rounded-b-2xl rounded-tr-2xl">
      <section className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-5">
        <div className="flex justify-center items-center text-center bg-sky-600 rounded-xl border-sky-300 border-2 p-5 text-white">
          <span>Alertas Ativos no Período Escolar</span>
        </div>
        <div className="flex justify-center items-center text-center bg-sky-600 rounded-xl border-sky-300 border-2 p-5 text-white">
          <span>Registros no Período</span>
        </div>
        <div className="flex justify-center items-center text-center bg-sky-600 rounded-xl border-sky-300 border-2 p-5 text-white">
          <span>Alunos em Atenção</span>
        </div>
        <div className="flex justify-center items-center text-center bg-sky-600 rounded-xl border-sky-300 border-2 p-5 text-white">
          <span>Alunos em Estado Crítico</span>
        </div>
      </section>
      <section className="mt-10">
        <div className="rounded-xl border border-sky-200 bg-sky-50 p-4 shadow-sky-300 shadow-md">
          <h2 className="mb-1 text-lg font-semibold text-sky-900">Atitudinal por período</h2>
          <p className="mb-4 text-sm text-slate-600">Média do período em cada atitude</p>

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
                  <tr key={linha.periodo}>
                    <th scope="row" className=" pr-2 text-left text-sm font-medium text-slate-700">
                      {linha.periodo}
                    </th>

                    {linha.notas.map((nota, i) => {
                      const estilo = estilos[getStatus(nota)];
                      return (
                        <td key={atitudes[i]}>
                          <div
                            title={`${atitudes[i]}: ${nota}`}
                            className={`rounded-lg border-2 py-2 text-center text-sm font-medium ${estilo.estilizacao}`}
                          >
                            {nota}
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
    </section>
  );
}
