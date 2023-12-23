"use client";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@material-tailwind/react";
import Sidebar from "./components/Sidebar";
import Sidebar2 from "./componentsClient/Sidebar2";
import Search from "./components/Search";


const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <ThemeProvider>
        <body className={`${inter.className} bg-[#F8F9FA`}>
          <div className="flex">
            <Sidebar/>
            {/* <Sidebar />
             */}
            <div className="flex flex-col w-full mt-12">
               { <Search/>   }
            {children}
            </div>
   
          </div>
        </body>
      </ThemeProvider>
    </html>
  );
}
