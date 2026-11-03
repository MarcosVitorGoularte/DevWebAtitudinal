import Image from "next/image";
import Link from "next/link";

export function Header() {
  return (
    <header className="flex flex-col items-start gap-3 border-b bg-sky-800 px-4 py-3 text-white sm:px-6 
      md:flex-row md:items-center md:justify-between">
      <div className="flex w-full min-w-0 items-center gap-3 md:w-auto">
        <Image
          src="/logo.png"
          alt="Logo Aurora Sapientia"
          width={40}
          height={40}
          className="shrink-0"
        />
        <span className="min-w-0 text-base font-serif font-bold leading-tight sm:text-lg md:text-xl">
          Aurora Sapientia Elementary School
        </span>
      </div>

      <nav className="flex w-full flex-wrap items-center gap-x-4 gap-y-1 text-sm sm:text-base md:w-auto md:gap-4">
        <Link
          className="rounded-sm py-1 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2
          focus-visible:outline-white"
          href="/"
        >
          Início
        </Link>
        <Link
          className="rounded-sm py-1 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          href="/sobre"
        >
          Sobre
        </Link>
        <Link
          className="rounded-sm py-1 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          href="/cursos"
        >
          Cursos
        </Link>
        <Link
          className="rounded-sm py-1 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          href="/contato"
        >
          Contato
        </Link>
      </nav>
    </header>
  );
}
