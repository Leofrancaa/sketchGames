import Image from "next/image";

interface GamesProps {
  Price: string;
  Src: string;
}
export function Games({ Price, Src }: GamesProps) {
  return (
    <div>
      <div className="">
        <Image src={Src} alt={""} className=" p-2 bg-[#F28705]"></Image>
        <div className="w-[250px] flex flex-wrap bg-[#038C8C] px-2 py-2">
          <span>R$ {Price}</span>
          <span className="text-sm">Pagando com pix, desconto de R$ 29,90</span>
        </div>
        <button className="bg-[#012E40] text-[#F28705] w-[250px] py-2 font-bold rounded-b-md hover:text-white hover:duration-500">
          COMPRAR
        </button>
      </div>
    </div>
  );
}
