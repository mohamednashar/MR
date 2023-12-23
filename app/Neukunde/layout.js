"use client";
import { Inter } from "next/font/google";
import Link from "next/link";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

const inter = Inter({ subsets: ["latin"] });

const links = [
  { href: "Allgemeine-Angaben", label: "Allgemeine-Angaben" },
  { href: "Personliche-Angaben", label: "Personliche-Angaben" },
  { href: "Bankverbindung", label: "Bankverbindung" },
  { href: "Finanzamt", label: "Finanzamt" },
  {
    href: "Berechtigungen-und-Vollmachten",
    label: "Berechtigungen und Vollmachten",
  },
];

export default function RootLayout({ children }) {
  const path = usePathname();
  let activeLink = path.slice(1);
  console.log(activeLink);

  return (
    <div className="">
      <div className="flex gap-5 items-center justify-between w-[80%] mx-auto mb-5">
        {links.map(({ href, label }) => (
          <Link
            key={href}
            href={href}
           
          >
             <div className="relative">
              {activeLink === `Neukunde/${href}` && (
                <motion.div
                  layoutId="underline"
                  className={`absolute bottom-0 left-0 w-full h-[2px] bg-[#3AB3B3] ${
                    activeLink === `Neukunde/${href}`
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
    </div>
  );
}
