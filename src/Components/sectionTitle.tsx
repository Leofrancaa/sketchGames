import { ReactNode } from "react";

interface SectionTitleProps {
  children: ReactNode;
}
export function SectionTitle({ children }: SectionTitleProps) {
  return (
    <h2 className="max-[380px]:border-b-4 flex justify-center lg:justify-start lg:border-l-8 border-[#03A696] lg:pl-2 text-white font-bold text-2xl mb-8">
      {children}
    </h2>
  );
}
