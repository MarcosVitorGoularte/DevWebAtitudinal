import Image from "next/image";

export function Header() {
  return (
    <header className="mb-10 flex w-full top-0 left-0 z-50 h-15 justify-between items-center px-5 border-b shadow-md shadow-sky-200 border-sky-200 bg-white text-sky-950">
      <span className="text-lg">Painel do Usuário</span>
      <Image
        src="/person.svg"
        alt="Ícone de uma pessoa. Área de acesso rápido as informações pessoais do usuário."
        width={30}
        height={30}
        className="brightness-10"
      />
    </header>
  );
}
