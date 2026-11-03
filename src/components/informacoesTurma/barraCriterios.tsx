import Image from "next/image";

type Props = { icone: string; nome: string; valor: number };

export default function BarraCriterios({ icone, nome, valor }: Props) {
  return (
    <div>
      <p className="flex items-center gap-2 text-slate-800">
        <Image src={icone} alt="" width={18} height={18} />
        {nome}
      </p>
      <div className="mt-1 h-2 w-full rounded-full bg-slate-200">
        <div className="h-2 rounded-full bg-blue-500" style={{ width: valor + "%" }} />
      </div>
    </div>
  );
}
