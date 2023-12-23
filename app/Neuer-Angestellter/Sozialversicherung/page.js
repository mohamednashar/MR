import React from "react";

function page() {
  return (
    <div className="bg-white w-[80%] mx-auto p-5 rounded-[10px]">

      <div className="flex items-center pb-5 border-b-2 mb-7">
        <label for="countries" class="mb-2 text-sm mr-5 w-64 text-center">
        Kranken-/Pflegeversicherung
        </label>
        <select
          id="countries"
          class="bg-white border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        >
          <option selected></option>
          <option value="US">United States</option>
          <option value="CA">Canada</option>
          <option value="FR">France</option>
          <option value="DE">Germany</option>
        </select>
      </div>

      <div className="flex items-center pb-5 border-b-2 mb-7">
        <label for="countries" class="mb-2 text-sm mr-5 w-64 ">
        Krankenkasse
        </label>
        <select
          id="countries"
          class="bg-white border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        >
          <option selected></option>
          <option value="US">United States</option>
          <option value="CA">Canada</option>
          <option value="FR">France</option>
          <option value="DE">Germany</option>
        </select>
      </div>

      <div className="flex items-center pb-5 border-b-2 mb-7">
        <label for="countries" class="mb-2 text-sm mr-5 w-64 ">
        Elterneigenschaft in der PV
        </label>
        <select
          id="countries"
          class="bg-white border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        >
          <option selected></option>
          <option value="US">United States</option>
          <option value="CA">Canada</option>
          <option value="FR">France</option>
          <option value="DE">Germany</option>
        </select>
      </div>

      <div className="flex items-center pb-5 border-b-2 mb-7">
        <label for="countries" class="mb-2 text-sm mr-5 w-64 ">
        Rentenversicherung
        </label>
        <select
          id="countries"
          class="bg-white border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        >
          <option selected></option>
          <option value="US">United States</option>
          <option value="CA">Canada</option>
          <option value="FR">France</option>
          <option value="DE">Germany</option>
        </select>
      </div>

      <div className="flex items-center pb-5 border-b-2 mb-7">
        <label for="countries" class="mb-2 text-sm mr-5 w-64">
        Arbeitslosenversicherung
        </label>
        <select
          id="countries"
          class="bg-white border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        >
          <option selected></option>
          <option value="US">United States</option>
          <option value="CA">Canada</option>
          <option value="FR">France</option>
          <option value="DE">Germany</option>
        </select>
      </div>

 

      <div className="flex items-center mb-7">
        <label for="countries" class="mb-2 text-sm mr-5 w-64">
        Sozialversicherungsnummer
        </label>
        <input type="text" id="small-input" class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-white sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"></input>
      </div>

   
    </div>

  );
}

export default page;
