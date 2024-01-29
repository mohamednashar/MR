"use client";
import { motion } from "framer-motion";
import { Inter } from "next/font/google";
import Link from "next/link";
import { usePathname } from "next/navigation";

const inter = Inter({ subsets: ["latin"] });

const links = [
  { href: "Personalien", label: "Personalien" },
  { href: "Beschaftigung", label: "Beschaftigung" },
  { href: "Lohnsteuer", label: "Lohnsteuer" },
  { href: "Sozialversicherung", label: "Sozialversicherung" },
  { href: "Entgelt", label: "Entgelt" },
  { href: "Weitere-Hinweise", label: "Weitere Hinweise" },
  { href: "Anlagen-Arbeitspapiere", label: "Anlagen: Arbeitspapiere" },
  { href: "Freigabe", label: "Freigabe" },
];

export default function RootLayout({ children }) {
  const path = usePathname();
  const activeLink = path.slice(1);
  console.log(activeLink);

  return (
    <div className="">
      <div className="flex gap-5 items-center justify-between w-[80%] mx-auto mb-5 ">
        {links.map(({ href, label }) => (
          <Link
            key={href}
            className={` ${
              activeLink === `Neuer-Angestellter/${href}` ? "" : ""
            }`}
            href={href}
          >
            <div className="relative mb-5">
              {activeLink === `Neuer-Angestellter/${href}` && (
                <motion.div
                  layoutId="underline"
                  className={`absolute top-7 left-0 w-full h-[8px] bg-[#3AB3B3] ${
                    activeLink === `Neuer-Angestellter/${href}`
                      ? ""
                      : "opacity-0"
                  }`}
                />
              )}
              {label}
            </div>
          </Link>
        ))}
      </div>

      {children}

      <div className="flex w-[90%] justify-end items-center gap-5  mt-5 mb-20">
        <button className="p-2 rounded-lg text-white text-sm bg-[#979797] transition-all duration-300 hover:bg-[#5b5b5b]">
          Personalnummer
        </button>
        <button className="p-2 rounded-lg text-white text-sm bg-[#3AB3B3] transition-all duration-300 hover:bg-[#368981]">
          Vollstandigkeitsprufung
        </button>
        <button className="p-2 rounded-lg text-white text-sm bg-[#3AB3B3] transition-all duration-300 hover:bg-[#368981]">
          Arbeitnehmer erstellen
        </button>
      </div>
    </div>
  );
}
