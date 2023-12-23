import InformationenClient from "@/app/componentsClient/InformationenClient";
import React from "react";

function Informationen() {
  return (
    <div className="w-full md:w-[80%] h-full mx-auto bg-[#F8F9FA] flex flex-col md:flex-row items-center  gap-5">
      <div className="w-full h-full bg-white p-5">
        <h3 className="text-end p-5 text-[#265E73] font-bold text-lg">Datum: 14.10.2020</h3>
         <InformationenClient text1={"Komfort Typ"} text2={"komfort"}/>
         <InformationenClient text1={"Jahresumsatz"} text2={"29.164 €"}/>
         <InformationenClient text1={"Jahresaufwand"} text2={"29.164 €"}/>
         <InformationenClient text1={"Bilanzsumme"} text2={"29.164 €"}/>
         <InformationenClient text1={"Jahresumsatz oder höherer Aufwand"} text2={"29.164 €"}/>
         <InformationenClient text1={"Mittel Bilanzsumme / Jahresleistung"} text2={"29.164 €"}/>
         <InformationenClient text1={"Jahresabschluss"} text2={"ja"}/>
         <InformationenClient text1={"Jahr JAB"} text2={"2021"}/>
         <InformationenClient text1={"Gew. Fertigstellung (JAB)"} text2={"01.06.2022"}/>
        
      </div>

      <div className="w-full h-full p-5 bg-white font-bold flex flex-col">
      <div className="flex items-center pb-5 border-b-2 mb-7">
        <label for="countries" class="mb-2 text-sm mr-5  w-[350px]  text-[#3AB3B3]">
      {"  >> "}  Leistungen monatlich (x 12)
        </label>
        <input type="text" id="small-input" class="w-full block  p-2 text-gray-900 border border-gray-300 rounded-lg bg-white sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"></input>
      </div>

      <div className="flex items-center pb-5 border-b-2 mb-7">
        <label for="countries" class="mb-2 text-sm mr-5  w-[350px]  text-[#3AB3B3]">
      {"  >> "}     Leistungen jährlich
        </label>
        <input type="text" id="small-input" class="w-full block  p-2 text-gray-900 border border-gray-300 rounded-lg bg-white sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"></input>
      </div>

      <div className="flex items-center pb-5 border-b-2 mb-7">
        <label for="countries" class="mb-2 text-sm mr-5  w-[350px] text-[#3AB3B3]">
      {"  >> "}    Leistungen einmalig
        </label>
        <input type="text" id="small-input" class="w-full block  p-2 text-gray-900 border border-gray-300 rounded-lg bg-white sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"></input>
      </div>


      <div className="flex items-center pb-5 mb-7">
        <label for="countries" class="mb-2 text-sm mr-5  w-[350px]  text-[#3AB3B3]">
      {"  >> "}    Gesamt
        </label>
        <input type="text" id="small-input" class="w-full block  p-2 text-gray-900 border border-gray-300 rounded-lg bg-white sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"></input>
      </div>


      </div>

    



    </div>
  );
}

export default Informationen;
