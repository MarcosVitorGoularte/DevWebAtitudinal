import TurmaCard from "./turmacard";
import Image from "next/image";
import { turmas } from "@/data/turmas";

export default function TurmasPage() {
  return (
    <main className="min-h-screen bg-linear-to-b from-slate-100 to-teal-100">
      <header
        className="mb-10 flex w-full top-0 left-0 z-50 h-15 justify-between items-center px-5 border-b 
      shadow-md shadow-sky-200 border-sky-200 bg-blue-600 text-sky-950"
      >
        <div className="flex min-w-0 itens-center  gap-4 ">
          <span className="rounded-full bg-blue-200 p-1">
            <Image src="/user-round.svg" alt="Foto do professor" width={40} height={40} />
          </span>
          <div className="min-w-0">
            <p className="truncate text-xl text-white font-bold">Natanael Magalhães</p>
            <p className="truncate text-sm text-white opacity-80">
              Pós-Doutor em Tecnologias Quânticas
            </p>
          </div>
        </div>
        <span className="rounded-full bg-blue-200 p-1">
          <Image
            src="/log-out.svg"
            alt="Foto do professor"
            width={30}
            height={30}
            className="aspect-square"
          />
        </span>
      </header>

      <section className="p-6">
        <h1 className="text-center text-3xl text-black">Minhas Turmas</h1>
        <div className="mx-auto mt-2 h-1 w-24 rounded bg-blue-400" />
        <ul className="mt-8 space-y-6">
          {turmas.map((t) => (
            <TurmaCard key={t.id} turma={t} />
          ))}
        </ul>
      </section>
    </main>
  );
}
