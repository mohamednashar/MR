import React from "react";

function page() {
  return (
    <div className="bg-white w-[80%] mx-auto p-5 rounded-[10px]">
      <p className="mb-5 text-[#0E7067] font-bold">Entgelte</p>

      <div className="flex items-center pb-5 border-b-2 mb-7">
        <label for="countries" class="mb-2 text-sm mr-5 w-20 text-center">
          Entgeltart
        </label>
        <select
          id="countries"
          class="bg-white border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        >
          <option selected>Choose a country</option>
          <option value="US">United States</option>
          <option value="CA">Canada</option>
          <option value="FR">France</option>
          <option value="DE">Germany</option>
        </select>
      </div>

 

      <div className="flex items-center pb-5 border-b-2 mb-7">
        <label for="countries" class="mb-2 text-sm mr-5 w-[73px] text-center">
        Stundenlohn
        </label>
        <input type="text" id="small-input" class="w-full block  p-2 text-gray-900 border border-gray-300 rounded-lg bg-white sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"></input>
      </div>


      <p className="mb-5 text-[#0E7067] font-bold py-0 px-0">Kontoverbindung des Arbeitnehmers</p>

      <div className="flex items-center pb-5 border-b-2 mb-7">
      
      
        <label for="countries" class="mb-2 text-sm mr-5  w-20 text-center">
        IBAN
        </label>
        <input type="text" id="small-input" class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-white sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"></input>
      </div>

      <div className="flex items-center pb-36 mb-7">
        <label for="countries" class="mb-2 text-sm mr-5  w-20 text-center">
        BIC
        </label>
        <input type="text" id="small-input" class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-white sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"></input>
      </div>

   
    </div>

  );
}

export default page;
