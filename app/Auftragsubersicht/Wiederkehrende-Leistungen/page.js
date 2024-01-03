import React from 'react'

function WiederkehrendeLeistungen() {
  return(
    <div className="">
     <h1 className="text-[#265E73] p-5 font-bold">LEISTUNGEN MONATLICH</h1>  
     <div className="flex items-center justify-between mx-10 bg-[#3AB3B3] w-full md:w-[50%] p-3 rounded-2xl">
      <span className="text-white">Gesamt</span>
      <span className="text-white">0,00€</span>
     </div>

     <h1  className="text-[#265E73] p-5 font-bold">LEISTUNGEN JÄHRLICH</h1>
     <div className="flex items-center justify-between mx-10 bg-white w-full md:w-[50%] p-3 rounded-2xl">
      <span className="text-[#265E73]">Jahresabschluss inkl. betrieblicher Steuererklärungen </span>
      <span className="text-[#265E73]">1.000,00 €</span>
     </div>

     <div className="flex gap-10 items-center mt-10">
      <span className="text-sm text-[#265E73]">U.05.35.01.01a</span>
      <span className="text-sm text-[#265E73]">Aufstellung eines Jahresabschlusses (Bilanz und Gewinn- und Verlustrechnung) inkl. betrieblicher Steuererklärungen</span>
     </div>

     <div className="flex items-center justify-between mx-10 bg-[#3AB3B3] w-full md:w-[50%] p-3 rounded-2xl mt-10">
      <span className="text-white">Gesamt</span>
      <span className="text-white">1.000,00 €</span>
     </div>

     
      </div>
  )
}

export default WiederkehrendeLeistungen