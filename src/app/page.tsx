import Image from "next/image";
import BannerWZ from "@/assets/bannerWZ.svg";
import BannerHL from "@/assets/bannerHL.svg";
import PS5 from "@/assets/PS5.svg";
import XBOXX from "@/assets/XBOXX.svg";
import XBOXS from "@/assets/XBOXS.svg";
import Switch from "@/assets/Switch.svg";
import GOW from "@/assets/GOW.svg";
import MW2 from "@/assets/MW2.svg";
import BF2042 from "@/assets/BF2042.svg";
import RE4 from "@/assets/RE4.svg";
import TLOU from "@/assets/TLOU.svg";
import SMan from "@/assets/SMan.svg";
import { SectionTitle } from "@/Components/sectionTitle";
import { Consoles } from "@/Components/consoles";
import { Games } from "@/Components/games";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex justify-center flex-col items-center">
      <div className="lg:bg-[#03A696] lg:py-4 lg:px-16 mb-16 rounded-md">
        <Image src={BannerWZ} alt={"Imagem da capa do Warzone 2"} />
      </div>

      <section className="mb-16 w-full lg:px-[110px]" id="consoles">
        <SectionTitle>Consoles</SectionTitle>
        <div className="flex lg:gap-11 flex-col gap-10 lg:flex-row lg:justify-center">
          <Consoles
            Name={"Playstation 5 825Gb SSD"}
            Price={"3999,90"}
            img={PS5}
            color="secondary"
            className=""
          />
          <Consoles Name={"XBOX Series X 1Tb"} Price={"4090,90"} img={XBOXX} />
          <Consoles
            Name={"XBOX Series S 512Gb SSD"}
            Price={"1999,90"}
            img={XBOXS}
          />
          <Consoles
            Name={"Nintendo Switch 64Gb"}
            Price={"3599,90"}
            img={Switch}
          />
        </div>
      </section>

      <section className="relative z-0 mb-16" id="novidades">
        <SectionTitle>Novidades</SectionTitle>
        <Image src={BannerHL} alt={""} className="lg:rounded-md " />
        <Link
          className="bg-[#03A696] px-4 py-2 lg:px-16 lg:py-8 absolute bottom-4 right-4 lg:bottom-8 lg:right-8 z-10 rounded-md text-white text-sm lg:text-2xl font-bold hover:text-[#012E40] hover:duration-500"
          href={"/gamesPage"}
        >
          veja aqui as novidades
        </Link>
      </section>

      <section className="mb-16" id="best-sellers">
        <SectionTitle>Os mais vendidos</SectionTitle>
        <div className="text-white bg-[#025159] lg:rounded-md w-full lg:w-[1150px] flex flex-col gap-20 lg:px-[120px] py-16 px-16 lg:flex-wrap lg:flex-row">
          <Games Price={"249,90"} Src={GOW}></Games>
          <Games Price={"249,90"} Src={MW2}></Games>
          <Games Price={"249,90"} Src={BF2042}></Games>
          <Games Price={"249,90"} Src={RE4}></Games>
          <Games Price={"249,90"} Src={TLOU}></Games>
          <Games Price={"249,90"} Src={SMan}></Games>
        </div>
      </section>
    </main>
  );
}
