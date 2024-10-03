import Image from "next/image";
import { ButtonHTMLAttributes } from "react";
import { tv } from "tailwind-variants";

const button = tv({
  base: "w-[252px] py-2 font-bold rounded-b-md hover:text-[#012E40] hover:duration-500 ",
  variants: {
    color: {
      primary: "bg-[#038C8C]",
      secondary: "bg-purple-500",
    },
  },

  defaultVariants: {
    color: "primary",
  },
});

interface ConsolesProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  Name: string;
  Price: string;
  img: string;
  className?: string;
  color?: "primary" | "secondary";
}

export function Consoles({
  Name,
  Price,
  img,
  color,
  className,
  ...props
}: ConsolesProps) {
  return (
    <div className="text-white flex flex-col justify-center items-center">
      <div className="bg-[#F28705] p-1 text-lg rounded-t-md">
        <Image src={img} alt={""} className="mb-2"></Image>
        <div className="w-40 flex flex-wrap">
          <h1 className=" text-white font-bold">{Name}</h1>
          <span>R$ {Price}</span>
        </div>
      </div>
      <button className={button({ color, className })} {...props}>
        COMPRAR
      </button>
    </div>
  );
}
