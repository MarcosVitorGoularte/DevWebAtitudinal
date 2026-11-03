import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { turmas } from "@/data/turmas";
import StatCard from "@/components/informacoesTurma/StatusCard";
import BarraCriterios from "@/components/informacoesTurma/barraCriterios";
import { Suspense } from "react";

const iconesCriterio = ["/users.svg", "/calendar.svg", "/user-round.svg", "/file-clock.svg"];

export default async function TurmaPage({ params }: { params: Promise<{ id: string }> }) {
  return (
    <Suspense fallback={<p className="p-6">Carregando</p>}>
      <TurmaConteudo params={params} />
    </Suspense>
  );
}

async function TurmaConteudo({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const turma = turmas.find((t) => t.id === Number(id));

  if (!turma) notFound();

  return (
    <main className="min-h-dvh bg-slate-100 pb-8">
      <header className="flex items-center justify-between gap-2 bg-white px-5 py-2 shadow-md">
        <div className="min-w-0">
          <Link
            href="/professor/turmas"
            className="mb-3 inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm"
          >
            Voltar
          </Link>
          <h1 className="truncate text-xl font-bold test-slate-900">{turma.nome}</h1>
        </div>
        <Image
          src="/user-round.svg"
          alt="Foto do professor"
          width={40}
          height={40}
          className="aspect-square shrink-0 rounded-full bg-blue-200 p-1"
        />
      </header>

      <section className="space-y-4 p-5">
        <Link
          href={"/professor/registro"}
          className="mx-auto block w-fit rounded-full bg-blue-600 px-8 py-3 fon-bold text-white shadow-lg"
        >
          {" "}
          + Regsitrar Atitude{" "}
        </Link>
        <div className="grid grid-cols-2 gap-4">
          <Link href="" className="contents">
            <StatCard icone="/user-round.svg" titulo="Alunos Matriculados">
              <p className="text-4xl font-bold">{turma.alunos}</p>
            </StatCard>
          </Link>
          <StatCard icone="/file.svg" titulo="Registro de Alunos no Periodo">
            <p className="text-4xl font-bold">{turma.registros}</p>
          </StatCard>

          <StatCard icone="/chart-pie.svg" titulo="Média de Engajamento">
            <div
              className="grid size-24 place-items-center rounded-full"
              style={{
                background: "conic-gradient(#3b82f6 " + turma.engajamento + "%, #cbd5e1 0)",
              }}
            >
              <div className="grid size-18 place-items-center rounded-full bg-white text-xl font-bold">
                {turma.engajamento}%
              </div>
            </div>
          </StatCard>

          <StatCard icone="/file-clock.svg" titulo="Ultimo Registro">
            <p className="text-3xl font-bold">{turma.ultimoRegistro}</p>
          </StatCard>
        </div>
        <div className="rounded-2xl border border-blue-900 bg-white p-5 shadou-md">
          <h2 className="mb-4 text-center tex-xl font-bold">Critérios de Avaliação Atitudinal</h2>
          <div className="space-y-4">
            {turma.criterios.map((c, i) => (
              <BarraCriterios
                key={c.nome}
                icone={iconesCriterio[i]}
                nome={c.nome}
                valor={c.valor}
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
