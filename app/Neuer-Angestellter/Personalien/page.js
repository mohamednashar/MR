import React from "react";

function Personalien() {
  return (
    <div className="bg-white w-[80%] mx-auto p-5 rounded-[10px]">
      <div className="flex items-center pb-5 border-b-2 mb-7">
        <label for="countries" class="mb-2 text-sm mr-5  w-[150px] text-center">
          Personalnummer
        </label>
        <input
          type="text"
          id="small-input"
          class="w-full block  p-2 text-gray-900 border border-gray-300 rounded-lg bg-white sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        ></input>
      </div>

      <div className="flex items-center pb-5 border-b-2 mb-7">
        <label for="countries" class="mb-2 text-sm mr-5  w-[150px] text-center">
          Anrede/Titel
        </label>
        <div className="flex justify-between items-center w-full gap-20">
          <input
            type="text"
            id="small-input"
            class="w-full   p-2 text-gray-900 border border-gray-300 rounded-lg bg-white sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          ></input>
          <input
            type="text"
            id="small-input"
            class="w-full   p-2 text-gray-900 border border-gray-300 rounded-lg bg-white sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          ></input>
        </div>
      </div>

      <div className="flex items-center pb-5 border-b-2 mb-7">
        <label for="countries" class="mb-2 text-sm mr-5  w-[150px] text-center">
          Vorname
        </label>
        <input
          type="text"
          id="small-input"
          class="w-full block  p-2 text-gray-900 border border-gray-300 rounded-lg bg-white sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        ></input>
      </div>

      <div className="flex items-center pb-5 border-b-2 mb-7">
        <label for="countries" class="mb-2 text-sm mr-5  w-[150px] text-center">
          Nachname
        </label>
        <div className="flex justify-between items-center w-full gap-20">
          <select
            id="countries"
            class="bg-white border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          >
            <option selected>Choose </option>
            <option value="US">1</option>
            <option value="CA">2</option>
            <option value="FR">3</option>
          </select>

          <select
            id="countries"
            class="bg-white border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          >
            <option selected>Choose </option>
            <option value="US">1</option>
            <option value="CA">2</option>
            <option value="FR">3</option>
          </select>

          <input
            type="text"
            id="small-input"
            class="w-full block  p-2 text-gray-900 border border-gray-300 rounded-lg bg-white sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          ></input>
        </div>
      </div>

      <div className="flex items-center pb-5 border-b-2 mb-7">
        <label for="countries" class="mb-2 text-sm mr-5  w-[150px] text-center">
          StraBe/Hausnr
        </label>
        <div className="flex justify-between items-center w-full gap-5">
          <input
            type="text"
            id="small-input"
            class=" flex-1  p-2 text-gray-900 border border-gray-300 rounded-lg bg-white sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          ></input>
          <input
            type="text"
            id="small-input"
            class=" flex-2  p-2 text-gray-900 border border-gray-300 rounded-lg bg-white sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          ></input>
        </div>
      </div>

      <div className="flex items-center pb-5 border-b-2 mb-7">
        <label for="countries" class="mb-2 text-sm mr-5  w-[150px] text-center">
          PLZ/Ort
        </label>
        <div className="flex justify-between items-center w-full gap-5">
          <input
            type="text"
            id="small-input"
            class=" flex-2  p-2 text-gray-900 border border-gray-300 rounded-lg bg-white sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          ></input>
          <input
            type="text"
            id="small-input"
            class=" flex-1  p-2 text-gray-900 border border-gray-300 rounded-lg bg-white sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          ></input>
        </div>
      </div>

      <div className="flex items-center pb-5 border-b-2 mb-7">
        <label for="countries" class="mb-2 text-sm mr-5 w-[150px] text-center">
          Land des Wohnorts
        </label>
        <input
          type="text"
          id="small-input"
          class="w-full block  p-2 text-gray-900 border border-gray-300 rounded-lg bg-white sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        ></input>
      </div>

      <div className="flex items-center pb-5 border-b-2 mb-7">
        <label for="countries" class="mb-2 text-sm mr-5 w-[150px] text-center">
          Telefon
        </label>
        <input
          type="text"
          id="small-input"
          class="w-full block  p-2 text-gray-900 border border-gray-300 rounded-lg bg-white sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        ></input>
      </div>

      <div className="flex items-center pb-5 border-b-2 mb-7">
        <label for="countries" class="mb-2 text-sm mr-5 w-[150px] text-center">
          E.Mail
        </label>
        <input
          type="email"
          id="small-input"
          class="w-full block  p-2 text-gray-900 border border-gray-300 rounded-lg bg-white sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        ></input>
      </div>

      <div className="flex items-center pb-5 border-b-2 mb-7">
        <label for="countries" class="mb-2 text-sm mr-5  w-[150px] text-center">
          Geschlecht/Geburtsdatum
        </label>
        <div className="flex justify-between items-center w-full gap-20">
          <select
            id="countries"
            class="bg-white border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          >
            <option selected>Choose </option>
            <option value="US">1</option>
            <option value="CA">2</option>
            <option value="FR">3</option>
          </select>

          <input
            type="text"
            id="small-input"
            class="w-full block  p-2 text-gray-900 border border-gray-300 rounded-lg bg-white sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          ></input>
        </div>
      </div>

      <div className="flex justify-around items-center gap-20">
        <div className="flex items-center  pb-5 border-b-2 mb-7">
          <label
            for="countries"
            class="mb-2 text-sm mr-5 w-[150px] text-center"
          >
            Staatsangehorigkeit
          </label>
          <select
            id="countries"
            class="bg-white border min-w-[300px] border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          >
            <option selected>Choose </option>
            <option value="US">1</option>
            <option value="CA">2</option>
            <option value="FR">3</option>
          </select>
        </div>

        <div className="flex items-center pb-5 border-b-2 mb-7">
          <label
            for="countries"
            class="mb-2 text-sm mr-5 w-[150px] text-center"
          >
            Benutzername
          </label>
          <input
            type="text"
            id="small-input"
            class="w-full block  p-2 text-gray-900 border border-gray-300 rounded-lg bg-white sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          ></input>
        </div>
      </div>

      <div className="flex justify-around items-center gap-20">
        <div className="flex items-center  pb-5 border-b-2 mb-7">
          <label
            for="countries"
            class="mb-2 text-sm mr-5 w-[150px] text-center"
          >
            Familienstand
          </label>
          <select
            id="countries"
            class="bg-white border min-w-[300px] border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          >
            <option selected>Choose </option>
            <option value="US">1</option>
            <option value="CA">2</option>
            <option value="FR">3</option>
          </select>
        </div>

        <div className="flex items-center pb-5 border-b-2 mb-7">
          <label
            for="countries"
            class="mb-2 text-sm mr-5 w-[150px] text-center"
          >
            Passwort
          </label>
          <input
            type="password"
            id="small-input"
            class="w-full block  p-2 text-gray-900 border border-gray-300 rounded-lg bg-white sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          ></input>
        </div>
      </div>
    </div>
  );
}

export default Personalien;
