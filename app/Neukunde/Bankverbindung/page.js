import React from "react";

function page() {
  return (
    <div className="bg-white w-[80%] mx-auto h-[65vh] p-5 rounded-[10px]">

      <div className="flex items-center pb-5 border-b-2 mb-7">
        <label for="IBAN" class="mb-2 text-sm mr-5  w-[150px] text-center">
        IBAN
        </label>
        <input type="text" id="small-input" class="w-full block  p-2 text-gray-900 border border-gray-300 rounded-lg bg-white sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"></input>
      </div>

      <div className="flex items-center pb-5 border-b-2 mb-7">
        <label for="Kundennummer" class="mb-2 text-sm mr-5  w-[150px] text-center">
        Kundennummer
        </label>
        <input type="text" id="small-input" class="w-full block  p-2 text-gray-900 border border-gray-300 rounded-lg bg-white sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"></input>
      </div>

      <div className="flex items-center pb-5 border-b-2 mb-7">
        <label for="BLZ / Name" class="mb-2 text-sm mr-5  w-[150px] text-center">
        BLZ / Name
        </label>
        <input type="text" id="small-input" class="w-full block  p-2 text-gray-900 border border-gray-300 rounded-lg bg-white sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"></input>
      </div>

    </div>

  );
}

export default page;
