import React from "react";

function page() {
  return (
    <div className="bg-white w-[80%] mx-auto p-5 rounded-[10px]">

      <div className="flex items-center pb-5 border-b-2 mb-7">
        <label for="Steuemummer" class="mb-2 text-sm mr-5  w-[150px] text-center">
        Steuemummer
        </label>
        <input type="text" id="small-input" class="w-full block  p-2 text-gray-900 border border-gray-300 rounded-lg bg-white sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"></input>
      </div>



    

      <div className="flex justify-between items-center w-full gap-5">
      <div className="flex items-center pb-5 border-b-2 mb-7">
        <label for="Zustellungsvollmacht" class="mb-2 text-sm mr-5  w-[150px] text-center">
        Zustellungsvollmacht
        </label>
        <input type="checkbox" id="Zustellungsvollmacht" class="w-full block  p-2 text-gray-900 border border-gray-300 rounded-lg bg-white sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"></input>
      </div>
      
        <div className="flex flex-1 items-center pb-5 border-b-2 mb-7">
          <label for=" gültig ab" class="mb-2 text-sm mr-5  w-[150px] text-center">
          gültig ab
          </label>
          <input type="text" id="small-input" class="w-full block  p-2 text-gray-900 border border-gray-300 rounded-lg bg-white sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"></input>
        </div>


        <div className="flex flex-1 items-center pb-5 border-b-2 mb-7">
          <label for="bis" class="mb-2 text-sm mr-5  w-[150px] text-center">
          bis
          </label>
          <input type="text" id="small-input" class="w-full block  p-2 text-gray-900 border border-gray-300 rounded-lg bg-white sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"></input>
        </div>
    </div>










      <div className="flex items-center pb-5 border-b-2 mb-7">
        <label for="BLZ / Name" class="mb-2 text-sm mr-5  w-[150px] text-center">
        Bemerkung (zur Steuemummer)
        </label>
        <input type="text" id="small-input" class="w-full block  p-2 text-gray-900 border border-gray-300 rounded-lg bg-white sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"></input>
      </div>









      <div className="flex items-center pb-5 border-b-2 mb-7">
        <label for="BLZ / Name" class="mb-2 text-sm mr-5  w-[150px] text-center">
        Amtiche Nummer/Name
        </label>
        <input type="text" id="small-input" class="w-full block  p-2 text-gray-900 border border-gray-300 rounded-lg bg-white sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"></input>
      </div>

    </div>

  );
}

export default page;
