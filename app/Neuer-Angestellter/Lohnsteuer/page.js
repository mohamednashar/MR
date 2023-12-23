import React from "react";

function Lohnsteuer() {
  return (
    <div className="bg-white w-[80%] mx-auto p-5 rounded-[10px]">

      


      <div className="flex items-center pb-5 border-b-2 mb-7">
        <label for="countries" class="mb-2 text-sm mr-5  w-[250px] text-center">
        Beschäftigungsart
        </label>
        <select
          id="countries"
          class="bg-white border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        >
            <option selected>Choose </option>
          <option value="US">1</option>
          <option value="CA">2</option>
          <option value="FR">3</option>
        </select>      </div>

        <div className="flex items-center pb-5 border-b-2 mb-7">
        <label for="countries" class="mb-2 text-sm mr-5  w-[250px] text-center">
        St-Identifikationsnummer
        </label>
        <input type="text" id="small-input" class="w-full block  p-2 text-gray-900 border border-gray-300 rounded-lg bg-white sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"></input>
      </div>


      
    </div>

  );
}

export default Lohnsteuer;
