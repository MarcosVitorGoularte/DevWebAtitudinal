import Image from "next/image";

type Props = { icone: string; titulo: string; children: React.ReactNode };

export default function StatusCard({ icone, titulo, children }: Props) {
  return (
    <div className="flex flex-col items-center gap-2 rounded-2xl border border-blue-900 bg-white p-4 text-center shadow-md">
      <span className="rounded-full bg-blue-100 p-2">
        <Image src={icone} alt="" width={24} height={24} />
      </span>
      <p className="text-sm text-slate-700">{titulo}</p>
      {children}
    </div>
  );
}
