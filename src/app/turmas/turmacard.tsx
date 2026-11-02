import Link from "next/link";
import Image from "next/image";

type Turma = { id: number; nome: string };

export default function TurmaCard({ turma }: { turma: Turma }) {
  return (
    <li>
      <Link
        href={"/turmas/${turma.id}"}
        className="flex items-center justify-between rounded-2xl border border-blue-900 bg-white/60 p-5 shadow-md"
      >
        <div>
          <h2 className="text-2xl font-bold text-slate-900">{turma.nome}</h2>
          <div className="mt-3 flex gap-4 text-sm text-slate-700">
            <span className="flex items-center gap-1">
              <Image src="/users.svg" alt="" width={18} height={18} />
              estudantes
            </span>
          </div>
        </div>
        <span className="rounded-full bg-blue-200 p-1">
          <Image src="/chevron-right.svg" alt="" width={32} height={32} />
        </span>
      </Link>
    </li>
  );
}
