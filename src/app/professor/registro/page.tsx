import Link from "next/link";

export default function RegistroPage() {
  return (
    <main className="min-h-screen bg-sky-100 p-4 text-blue-950">
      <section className="mx-auto w-full max-w-3xl rounded-xl bg-sky-50 p-8 shadow-md shadow-blue-900/10">
        <h1 className="text-2xl font-bold text-blue-950">Registro do estudante</h1>
        <p className="mt-2 text-sm text-blue-700">
          Selecione a turma e o estudante para preencher a avaliação.
        </p>

        <div className="mt-6 space-y-4">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-blue-900">
                Turma
              </label>
              <select className="mt-1 w-full rounded-md border border-sky-300 bg-white p-2 text-sm text-blue-950 focus:border-blue-700 focus:outline-none">
                <option>Selecione a turma...</option>
                <option>3º Ano - Tulipa</option>
                <option>2º Ano - Betônia</option>
                <option>1º Ano - Abóbora</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-blue-900">
                Estudante
              </label>
              <select className="mt-1 w-full rounded-md border border-sky-300 bg-white p-2 text-sm text-blue-950 focus:border-blue-700 focus:outline-none">
                <option>Selecione o estudante...</option>
                <option>Estudante 1</option>
                <option>Ana C.</option>
                <option>Rafael</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-blue-900">
              Data da Avaliação
            </label>
            <input
              type="date"
              className="mt-1 w-full rounded-md border border-sky-300 bg-white p-2 text-sm text-blue-950 focus:border-blue-700 focus:outline-none"
            />
          </div>

          <div className="rounded-lg border border-sky-200 bg-white p-4 space-y-3">
            <h2 className="text-sm font-bold text-blue-950">Dimensões Atitudinais</h2>

            <div className="space-y-1">
              <div className="flex justify-between text-xs font-medium text-blue-900">
                <span>Responsabilidade / Atividades</span>
                <span>80%</span>
              </div>
              <div className="h-2 w-full rounded-full bg-sky-100 overflow-hidden">
                <div className="h-full bg-blue-600 rounded-full" style={{ width: "80%" }}></div>
              </div>
            </div>

            <div className="space-y-1">
              <div className="flex justify-between text-xs font-medium text-blue-900">
                <span>Participação</span>
                <span>70%</span>
              </div>
              <div className="h-2 w-full rounded-full bg-sky-100 overflow-hidden">
                <div className="h-full bg-blue-600 rounded-full" style={{ width: "70%" }}></div>
              </div>
            </div>

            <div className="space-y-1">
              <div className="flex justify-between text-xs font-medium text-blue-900">
                <span>Presença e Pontualidade</span>
                <span>90%</span>
              </div>
              <div className="h-2 w-full rounded-full bg-sky-100 overflow-hidden">
                <div className="h-full bg-blue-600 rounded-full" style={{ width: "90%" }}></div>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between rounded-lg bg-sky-100 p-3 text-sm font-bold text-blue-950">
            <span>Média Geral do Período:</span>
            <span className="text-blue-700">8.0 (Bom)</span>
          </div>

          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-blue-900">
              Texto opcional de avaliação (Observações)
            </label>
            <textarea
              rows={3}
              placeholder="Insira comentários qualitativos sobre o comportamento ou desempenho..."
              className="mt-1 w-full rounded-md border border-sky-300 bg-white p-2 text-sm text-blue-950 focus:border-blue-700 focus:outline-none"
            ></textarea>
          </div>
        </div>
        <Link href="/professor/turmas/">
          <button className="mt-6 rounded-md bg-blue-700 px-4 py-2 font-medium text-white hover:bg-blue-800">
            Salvar registro
          </button>
        </Link>
      </section>
    </main>
  );
}
