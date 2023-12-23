"use client";
import React from "react";

function BELEGE() {
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      const fileData = reader.result;
      // Do something with the file data
    };
    reader.readAsDataURL(file);
  };

  return (
    <div className="bg-white mx-auto w-[80%]">
    <div className="py-5 font-semibold">
        <span className="text-[#3AB3B3] mx-3 p-4">Vollmachten Vom PC Auswählen</span>
    </div>

      <div className="flex flex-col justify-center items-center bg-[#F8F9FA] gap-5 w-[94%] mx-auto my-5 p-10">
        <div>
          <svg
            width="61"
            height="68"
            viewBox="0 0 61 68"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M60.4567 48.0976C60.471 47.7434 60.4271 47.3894 60.3267 47.0494L53.66 27.1469C53.4399 26.4861 53.0161 25.9112 52.4488 25.5039C51.8815 25.0966 51.1996 24.8776 50.5 24.878H37.1667V31.5122H48.0967L53.6533 48.0976H7.34667L12.9033 31.5122H23.8333V24.878H10.5C9.80044 24.8776 9.11854 25.0966 8.55124 25.5039C7.98393 25.9112 7.5601 26.4861 7.34 27.1469L0.673333 47.0494C0.572871 47.3894 0.528958 47.7434 0.543333 48.0976C0.5 48.0976 0.5 64.6829 0.5 64.6829C0.5 65.5627 0.851189 66.4064 1.47631 67.0285C2.10143 67.6505 2.94928 68 3.83333 68H57.1667C58.0507 68 58.8986 67.6505 59.5237 67.0285C60.1488 66.4064 60.5 65.5627 60.5 64.6829C60.5 64.6829 60.5 48.0976 60.4567 48.0976ZM43.8333 21.2425C44.6967 21.2425 45.56 20.9274 46.19 20.3038C46.8149 19.6818 47.166 18.8382 47.166 17.9586C47.166 17.0791 46.8149 16.2355 46.19 15.6135L30.5 0L14.81 15.6135C14.1851 16.2355 13.834 17.0791 13.834 17.9586C13.834 18.8382 14.1851 19.6818 14.81 20.3038C15.44 20.9307 16.3033 21.2425 17.1667 21.2425C18.03 21.2425 18.8933 20.9307 19.5233 20.3038L27.1667 12.6978V34.8293C27.1667 35.709 27.5179 36.5527 28.143 37.1748C28.7681 37.7969 29.6159 38.1463 30.5 38.1463C31.3841 38.1463 32.2319 37.7969 32.857 37.1748C33.4821 36.5527 33.8333 35.709 33.8333 34.8293V12.6978L41.4767 20.3038C42.1065 20.9147 42.9539 21.2523 43.8333 21.2425Z"
              fill="#B3B3B3"
            />
          </svg>
        </div>
        <h3 className="text-[#A6AEB9] mb-5">
        Vollmachten per Drag & Drop in diesem Bereich ablegen
        
        </h3>
        <div className="mb-5">
        <span className="block text-center mb-5 text-[#A6AEB9]">oder</span>
          <label
            htmlFor="file-input"
          className="bg-[#3AB3B3] p-3 text-white rounded-lg  cursor-pointer transition-all duration-200 hover:bg-[#3da6a6]"
          >
          Dateien auswählen...
          </label>
          <input
            id="file-input"
            type="file"
            onChange={handleFileChange}
            style={{ display: "none" }}
          />
        </div>
      </div>

    

      <div className="flex flex-col gap-5 pb-5  mb-7">
        <label for="countries" class="mb-2 text-lg mr-5  w-[150px] text-[#265E73] text-center">
        Kategorie
        </label>
        <select
          id="countries"
          class="bg-white border mx-5 border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[50%] p-2.5"
        >
            <option selected>Choose </option>
          <option value="US">1</option>
          <option value="CA">2</option>
          <option value="FR">3</option>
        </select>      
        </div>

        <div className="flex items-center justify-end p-10" >
        <button className="bg-[#3AB3B3] text-white p-3 rounded-lg mx-3 transition-all duration-200 hover:bg-[#3da6a6]">Vollmachten hochladen</button>
    
        </div>

    </div>
  );
}

export default BELEGE;
