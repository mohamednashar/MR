"use client";
import { Inter } from "next/font/google";
import Link from "next/link";
import { usePathname } from "next/navigation";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  const path = usePathname();
  let activeLink=path.slice(1)
  console.log(activeLink)
  
  return (
          <div className="">
            <div className="flex gap-x-5 items-center justify-between text-center w-[80%] mx-auto  bg-[#F8F9FA]">
              <Link className={`${activeLink === "Nachricht-schreiben/Finanzbuchhaltung" ? " bg-white text-[#3AB3B3] " : "text-[#265E73]" }  w-full p-3 font-bold`} href="Finanzbuchhaltung">FINANZBUCHHALTUNG</Link>
              <Link className={`${activeLink === "Nachricht-schreiben/Jahresabschluss" ? " bg-white text-[#3AB3B3]" : "text-[#265E73]"} w-full p-3 font-bold`} href="Jahresabschluss">JAHRESABSCHLUSS</Link>
              <Link className={`${activeLink === "Nachricht-schreiben/Steuererklarung" ? " bg-white text-[#3AB3B3] " : "text-[#265E73]"} w-full p-3 font-bold`} href="Steuererklarung">STEUERERKLARUNG</Link>
              <Link className={`${activeLink === "Nachricht-schreiben/Allgemeines" ? " bg-white text-[#3AB3B3] " : "text-[#265E73]"} w-full p-3 font-bold`} href="Allgemeines">ALLGEMEINES</Link>
              
            </div>

            {children}

          
          </div>
  );
}
