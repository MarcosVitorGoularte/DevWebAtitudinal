export default function AutoavaliacaoPage() {
  return (
    <main className="min-h-screen bg-sky-100 p-4 text-blue-950">
      <section className="mx-auto w-full max-w-3xl rounded-xl bg-sky-50 p-8 shadow-md shadow-blue-900/10">
        <h1 className="text-2xl font-bold text-blue-950">Autoavaliação</h1>
        <p className="mt-2 text-sm text-blue-700">
          Reflita sobre seu desenvolvimento neste período.
        </p>

        <form className="mt-6 space-y-4">
          <div>
            <label
              htmlFor="materia"
              className="block text-xs font-semibold uppercase tracking-wider text-blue-900"
            >
              Matéria
            </label>
            <select
              id="materia"
              name="materia"
              required
              defaultValue=""
              className="mt-1 w-full rounded-md border border-sky-300 bg-white p-2 text-sm text-blue-950 focus:border-blue-700 focus:outline-none"
            >
              <option value="" disabled>
                Selecione a matéria...
              </option>
              <option>Português</option>
              <option>Matemática</option>
              <option>Ciências</option>
            </select>
          </div>

          <div>
            <label
              htmlFor="data"
              className="block text-xs font-semibold uppercase tracking-wider text-blue-900"
            >
              Data da avaliação
            </label>
            <input
              id="data"
              name="data"
              type="date"
              required
              className="mt-1 w-full rounded-md border border-sky-300 bg-white p-2 text-sm text-blue-950 focus:border-blue-700 focus:outline-none"
            />
          </div>

          <div className="rounded-lg border border-sky-200 bg-white p-4">
            <h2 className="text-sm font-bold text-blue-950">Avalie cada critério de 0% a 100%</h2>
            <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {[
                ["presenca", "Presença"],
                ["participacao", "Participação"],
                ["atividades", "Atividades"],
                ["comportamento", "Comportamento"],
              ].map(([name, label]) => (
                <div key={name}>
                  <label htmlFor={name} className="block text-sm font-medium text-blue-900">
                    {label}
                  </label>
                  <div className="relative mt-1">
                    <input
                      id={name}
                      name={name}
                      type="number"
                      min="0"
                      max="100"
                      defaultValue="0"
                      required
                      className="w-full rounded-md border border-sky-300 bg-white p-2 pr-9 text-sm text-blue-950 focus:border-blue-700 focus:outline-none"
                    />
                    <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-sm text-blue-700">
                      %
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex items-center justify-between rounded-lg bg-sky-100 p-3 text-sm font-bold text-blue-950">
            <span>Média geral</span>
            <span className="text-blue-700">Será calculada após a avaliação</span>
          </div>

          <div>
            <label
              htmlFor="observacoes"
              className="block text-xs font-semibold uppercase tracking-wider text-blue-900"
            >
              Comentário (opcional)
            </label>
            <textarea
              id="observacoes"
              name="observacoes"
              rows={3}
              placeholder="Escreva uma reflexão sobre seu período..."
              className="mt-1 w-full rounded-md border border-sky-300 bg-white p-2 text-sm text-blue-950 focus:border-blue-700 focus:outline-none"
            />
          </div>

          <button
            type="button"
            className="rounded-md bg-blue-700 px-4 py-2 font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-300"
          >
            Salvar autoavaliação
          </button>
        </form>
      </section>
    </main>
  );
}
