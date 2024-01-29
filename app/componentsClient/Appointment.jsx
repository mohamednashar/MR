import React from "react";

const Appointment = () => {
  return (
    <div className="bg-white mx-auto w-[90%]  p-2 shadow-md rounded-lg">
      <h1 className="text-[#265E73] mb-8">Beratungstermin anfragen</h1>

      <div className="mb-6">
        <label
          htmlFor="default-input"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Empfänger
        </label>
        <input
          type="text"
          id="default-input"
          className=" border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-teal-500 focus:border-blue-500 block w-full p-2.5"
          placeholder="rounded-lgEmpfänger wählen"
        />
      </div>

      <div className="mb-6">
        <label
          htmlFor="default-input"
          className="block mb-2 text-sm font-medium text-gray-900"
        >
          Datum / Uhrzeit
        </label>
        <input
          type="text"
          id="default-input"
          className=" border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-teal-500 focus:border-blue-500 block w-full p-2.5"
          placeholder="Empfänger wählen"
        />
      </div>

      <div className="mb-6">
        <label
          htmlFor="default-input"
          className="block mb-2 text-sm font-medium text-gray-900"
        >
          Ersatztermin
        </label>
        <input
          type="text"
          id="default-input"
          className=" border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-teal-500 focus:border-blue-500 block w-full p-2.5"
          placeholder="Wählen Sie ein Datum"
        />
      </div>

      <div className="mb-5">
        <label
          for="message"
          class="block mb-2 text-sm font-medium text-gray-900"
        >
          Thema
        </label>
        <textarea
          id="message"
          rows="12"
          class="block p-2.5 w-full text-sm  text-gray-900 rounded-lg border border-gray-300 "
          placeholder="Teilen Sie uns mit zu welchen Themen Sie eine Beratung wünschen..."
        ></textarea>
      </div>

      <div className="flex justify-end">
        <button className=" bg-[#3AB3B3] text-white px-6 py-2 rounded-lg flex justify-end">
          Senden
        </button>
      </div>
    </div>
  );
};

export default Appointment;
