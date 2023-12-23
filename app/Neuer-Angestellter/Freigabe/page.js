import React from "react";

function page() {
  return (
    <div className="bg-white w-[80%] mx-auto p-5 rounded-[10px]">
      

      <p className="text-[#265E73] font-bold mb-5">Freigabe zur Übernahme in die Entgeltabrechnung</p>

      <div className="flex items-center mb-4 border-2 rounded-lg p-3">
        <input id="default-checkbox" type="checkbox" defaultValue className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
        <label htmlFor="default-checkbox" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Die Vorerfassung ist vollständig, so dass die Übernahme in die Entgeltabrechnung erfolgen kann.</label>
      </div>

 

  

   
    </div>

  );
}

export default page;
