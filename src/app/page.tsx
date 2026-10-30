import Image from "next/image";

export default function Login() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-sky-100 p-4">
      <section className="w-full max-w-md rounded-xl bg-sky-50 p-8 shadow-md shadow-blue-900/10">
        <h1 className="text-2xl font-bold text-blue-950">Que bom ter você aqui.</h1>

        <p className="mt-2 text-sm text-blue-700">
          Entre para acompanhar sua jornada de desenvolvimento.
        </p>

        <form className="mt-6 flex flex-col gap-4">
          <div className="flex flex-col gap-1">
            <label htmlFor="identificador" className="text-sm font-medium text-blue-950">
              E-mail
            </label>

            <div className="relative">
              <Image
                src="/person.svg"
                alt="Ícone de uma pessoa. Ao lado do campo de e-mail."
                width={20}
                height={20}
                className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 brightness-10"
              />

              <input
                type="text"
                id="identificador"
                name="identificador"
                placeholder="Digite seu e-mail"
                required
                className="w-full placeholder:text-gray-400 text-blue-950 rounded-md border border-blue-200 bg-white py-2 pl-10 pr-3 outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-200"
              />
            </div>
          </div>

          <div className="flex flex-col gap-1">
            <label htmlFor="senha" className="text-sm font-medium text-blue-950">
              Senha
            </label>

            <div className="relative">
              <Image
                src="/lock.svg"
                alt="Ícone de um cadeado. Ao lado do campo de senha."
                width={20}
                height={20}
                className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 brightness-10"
              />

              <input
                type="password"
                id="senha"
                name="senha"
                placeholder="Digite sua senha"
                required
                className="w-full placeholder:text-gray-400 text-blue-950 rounded-md border border-blue-200 bg-white py-2 pl-10 pr-3 outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-200"
              />
            </div>
          </div>

          <div className="flex justify-between flex-wrap gap-2">
            <div className="flex items-center gap-1.5">
              <label htmlFor="conectado" className="text-sm text-blue-950">
                Permanecer Conectado{" "}
              </label>
              <input
                type="checkbox"
                id="conectado"
                name="conectado"
                className="size-5 cursor-pointer"
              />
            </div>
            <a href="" className="text-sm text-blue-700 hover:text-blue-900 hover:underline">
              Esqueci minha senha
            </a>
          </div>

          <button
            type="submit"
            className="rounded-md bg-blue-700 px-4 py-2 font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-300 cursor-pointer"
          >
            Entrar
          </button>
        </form>
      </section>
    </main>
  );
}
