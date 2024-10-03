import { Gamepad2 } from "lucide-react";
import { MapPin } from "lucide-react";
import { Copyright } from "lucide-react";
import { Instagram } from "lucide-react";
import { User } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#03A696] flex flex-col justify-center pt-8 pb-12 text-white lg:px-48 mt-16">
      <div className="flex gap-4 items-center justify-center border-b-4-[#012E40]">
        <Gamepad2 className="text-[#F28705]" size={36} />
        <span className="text-white text-2xl lg:text-3xl font-bold">
          Sketch Games
        </span>
      </div>

      <div className="bg-[#012E40] w-[1000px] h-[5px] my-4 hidden lg:flex lg:self-center" />

      <div className="flex flex-col gap-4 px-8 pt-8 pb-12 text-sm lg:flex lg:justify-between lg:flex-row">
        <div>
          <address className="flex items-center gap-2 mb-4">
            <MapPin className="text-[#F28705]" size={24} />
            <a href="">Avenida Crazyness, 2469 - Salvador BA</a>
          </address>

          <div className="flex items-center gap-2">
            <Copyright className="text-[#F28705]" size={24} />
            <span>2023 - Sketch Games. Todos os direitos reservados</span>
          </div>
        </div>

        <div>
          <div className="flex items-center gap-2 mb-4">
            <Instagram className="text-[#F28705]" size={24} />
            <a href="">Instagram</a>
          </div>

          <div className="flex items-center gap-2 mb-16 lg:mb-0">
            <User className="text-[#F28705]" size={24} />
            <span>Desenvolvido por Leonardo Franca</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
