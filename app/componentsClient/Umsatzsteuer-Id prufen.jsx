import React from "react";

function Umsatzsteuer() {
  return (
    <div className="w-[80%] mx-auto bg-white shadow-md p-7 pb-0">
      <h3 class="border-b-2 border-[#3AB3B3] text-lg w-[94%] mx-auto ">
        Die Prüfung der Umsatzsteuer-Id erfolgt über eine Schnittstelle des
        Bundeszentralamts für Steuern, an die die von Ihnen eingegebenen Daten
        übermittelt werden. Das Ergebnis dieser Abfrage wird Ihnen hier
        dargestellt. Das Bundeszentralamt für Steuern stellt ebenfalls ein
        <span className="text-[#3AB3B3]"> Formular zur Überprüfung </span>
        bereit. Bitte beachten Sie auch die{" "}
        <span className="text-[#3AB3B3]">Fragen & Antworten.</span>
      </h3>

      <div className="flex items-center pb-5 border-b-2 mb-7 mt-10">
        <label for="countries" class="mb-2 text-sm mr-5  w-[250px] text-center">
          Abzufragendes Land <span className=" text-red-500">*</span> 
        </label>
        <select
          id="countries"
          class="bg-white border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        >
            <option selected>Choose </option>
          <option value="US">1</option>
          <option value="CA">2</option>
          <option value="FR">3</option>
        </select>     
         </div>


         <div className="flex items-center pb-5 border-b-2 mb-7">
        <label for="countries" class="mb-2 text-sm mr-5  w-[250px] text-center">
        Eigene USt-IdNr  <span className=" text-red-500">*</span> 
                </label>
        <input type="text" id="small-input" class="w-full block  p-2 text-gray-900 border border-gray-300 rounded-lg bg-white sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"></input>
      </div>

      <div className="flex items-center pb-5 border-b-2 mb-7">
        <label for="countries" class="mb-2 text-sm mr-5  w-[250px] text-center">
        Abzufragende USt- IdNr  <span className=" text-red-500">*</span> 
                </label>
        <input type="text" id="small-input" class="w-full block  p-2 text-gray-900 border border-gray-300 rounded-lg bg-white sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"></input>
      </div>

      <div className="flex items-center pb-5 border-b-2 mb-7">
        <label for="countries" class="mb-2 text-sm mr-5  w-[250px] text-center">
        Firmenname 
                </label>
        <input type="text" id="small-input" class="w-full block  p-2 text-gray-900 border border-gray-300 rounded-lg bg-white sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"></input>
      </div>

      <div className="flex items-center pb-5 border-b-2 mb-7">
        <label for="countries" class="mb-2 text-sm mr-5  w-[250px] text-center">
        Rechtsform
                </label>
        <input type="text" id="small-input" class="w-full block  p-2 text-gray-900 border border-gray-300 rounded-lg bg-white sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"></input>
      </div>

      <div className="flex items-center pb-5 border-b-2 mb-7">
        <label for="countries" class="mb-2 text-sm mr-5  w-[250px] text-center">
        Ort
                </label>
        <input type="text" id="small-input" class="w-full block  p-2 text-gray-900 border border-gray-300 rounded-lg bg-white sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"></input>
      </div>

      <div className="flex items-center pb-5 border-b-2 mb-7">
        <label for="countries" class="mb-2 text-sm mr-5  w-[250px] text-center">
        PLZ
                </label>
        <input type="text" id="small-input" class="w-full block  p-2 text-gray-900 border border-gray-300 rounded-lg bg-white sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"></input>
      </div>

      <div className="flex items-center pb-5 border-b-2 mb-7">
        <label for="countries" class="mb-2 text-sm mr-5  w-[250px] text-center">
        Straße
                </label>
        <input type="text" id="small-input" class="w-full block  p-2 text-gray-900 border border-gray-300 rounded-lg bg-white sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"></input>
      </div>

      <div className="text-end mx-3 pb-10">
        <button className="bg-[#3AB3B3] rounded-3xl p-3 text-white min-w-[200px] transition-all duration-200 hover:bg-[#3da6a6]">Prüfen</button>
      </div>
    </div>
  );
}

export default Umsatzsteuer;
