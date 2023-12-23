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
              <Link className={`${activeLink === "Auftragsubersicht/Informationen" ? " bg-white text-[#3AB3B3] " : "text-[#265E73]" }  w-full p-3 font-bold`} href="Informationen">Informationen</Link>
              <Link className={`${activeLink === "Auftragsubersicht/Wiederkehrende-Leistungen" ? " bg-white text-[#3AB3B3]" : "text-[#265E73]"} w-full p-3 font-bold`} href="Wiederkehrende-Leistungen">Wiederkehrende-Leistungen</Link>
              <Link className={`${activeLink === "Auftragsubersicht/Einmalleistungen" ? " bg-white text-[#3AB3B3] " : "text-[#265E73]"} w-full p-3 font-bold`} href="Einmalleistungen">Einmalleistungen</Link>
              <Link className={`${activeLink === "Auftragsubersicht/Vorschusse" ? " bg-white text-[#3AB3B3] " : "text-[#265E73]"} w-full p-3 font-bold`} href="Vorschusse">Vorschüsse</Link>
              
            </div>

            {children}

          
          </div>
  );
}
