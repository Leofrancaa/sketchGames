import { Gamepad2 } from "lucide-react";
import Link from "next/link";

export function Navbar() {
  return (
    <nav className="flex justify-center items-center pt-16 pb-6 lg:px-44 lg:justify-between">
      <div className="flex items-center gap-4">
        <Gamepad2 className="text-[#F28705]" size={64} />
        <span className="text-white text-3xl font-bold">Sketch Games</span>
      </div>

      <div className="gap-8 items-center text-white text-2xl font-semibold hidden lg:flex">
        <Link
          className="hover:text-[#F28705] hover:duration-500 cursor-pointer"
          href={"/"}
        >
          Home
        </Link>
        <Link
          className="hover:text-[#F28705] hover:duration-500 cursor-pointer"
          href={"/#consoles"}
        >
          Consoles
        </Link>
        <Link
          className="hover:text-[#F28705] hover:duration-500 cursor-pointer"
          href={"/#novidades"}
        >
          Novidades
        </Link>
        <Link
          className="hover:text-[#F28705] hover:duration-500 cursor-pointer"
          href={"/#best-sellers"}
        >
          Games
        </Link>
      </div>
    </nav>
  );
}
