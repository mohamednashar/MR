"use client";
import React, { useState } from "react";
import CardAccounting from "./CardAccounting";
import CardAccounting2 from "./CardAccounting2";
import ContactAccounting from "./ContactAccounting";
import Stars from "./Stars";
import News from "./News";

const Accounting = ({ active }) => {
  const [activeButton, setActiveButton] = useState("first");
  return (
    <div className="flex gap-3 w-[95%] mx-auto flex-wrap md:flex-nowrap">

      <div className="w-2/3 flex flex-col">
        <div className="bg-white p-5 shadow-lg">
          <h1 className="text-[#265E73] mb-2">Mein Buchhaltungsbüro</h1>

          <div className="border-2  mx-auto  flex text-center ">
            <div
              className={`cursor-pointer w-1/2 border-2 transition duration-300 ease-in-out ${
                activeButton === "first"
                  ? "border-[#3AB3B3] text-[#3AB3B3]"
                  : "border-none text-[#265E73]"
              } flex justify-center items-center gap-3 rounded-lg p-2`}
              onClick={() => setActiveButton("first")}
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 20 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3.656 18.4004C3.51242 18.5282 3.3362 18.6114 3.14803 18.6402C2.95987 18.6691 2.76756 18.6424 2.59369 18.5633C2.41982 18.4842 2.2716 18.356 2.16644 18.1937C2.06128 18.0314 2.00354 17.8418 2 17.6471V15.3516C1.46957 15.3516 0.960859 15.1359 0.585786 14.752C0.210714 14.3682 0 13.8476 0 13.3047V6.14062C0 5.59776 0.210714 5.07713 0.585786 4.69327C0.960859 4.3094 1.46957 4.09375 2 4.09375H13C13.5304 4.09375 14.0391 4.3094 14.4142 4.69327C14.7893 5.07713 15 5.59776 15 6.14062V13.3047C15 13.8476 14.7893 14.3682 14.4142 14.752C14.0391 15.1359 13.5304 15.3516 13 15.3516H8.003L3.656 18.4004ZM16 10.2518C15.9968 10.3776 15.9968 10.5036 16 10.6294V10.2507C16.005 10.1412 16.006 8.76984 16.004 6.13755C16.0032 5.32379 15.6868 4.54363 15.1243 3.9685C14.5617 3.39337 13.7991 3.07031 13.004 3.07031H5V2.04687C5 1.50401 5.21071 0.983379 5.58579 0.599516C5.96086 0.215652 6.46957 0 7 0L18 0C18.5304 0 19.0391 0.215652 19.4142 0.599516C19.7893 0.983379 20 1.50401 20 2.04687V9.21094C20 9.7538 19.7893 10.2744 19.4142 10.6583C19.0391 11.0422 18.5304 11.2578 18 11.2578V13.5534C17.9965 13.7481 17.9387 13.9377 17.8336 14.1C17.7284 14.2623 17.5802 14.3905 17.4063 14.4696C17.2324 14.5486 17.0401 14.5753 16.852 14.5465C16.6638 14.5176 16.4876 14.4344 16.344 14.3066L16 14.0651V10.2518Z"
                  fill={activeButton==="first" ? '#3AB3B3' : '#265E73'}
                />
              </svg>

              <button>Nachrichten</button>
            </div>

            <div
              className={`cursor-pointer w-1/2 border-2 transition duration-300 ease-in-out ${
                activeButton === "second"
                  ? "border-[#3AB3B3] text-[#3AB3B3]"
                  : "border-none text-[#265E73]"
              } flex justify-center items-center gap-3 rounded-lg p-2`}
              onClick={() => setActiveButton("second")}
            >
              <svg
                className="text-[red]"
                width="18"
                height="18"
                viewBox="0 0 20 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0 17.3984C0 19.1383 1.3 20.4688 3 20.4688H17C18.7 20.4688 20 19.1383 20 17.3984V9.21094H0V17.3984ZM17 2.04688H15V1.02344C15 0.409375 14.6 0 14 0C13.4 0 13 0.409375 13 1.02344V2.04688H7V1.02344C7 0.409375 6.6 0 6 0C5.4 0 5 0.409375 5 1.02344V2.04688H3C1.3 2.04688 0 3.37734 0 5.11719V7.16406H20V5.11719C20 3.37734 18.7 2.04688 17 2.04688Z"
                  fill={activeButton==="first" ? '#265E73 ' : '#3AB3B3'}
                />
              </svg>

              <button>Termine</button>
            </div>
          </div>
          {
           
           activeButton==="first"?<CardAccounting/>:<CardAccounting2/>
           
      
           }


       



        

       
        </div>
        

        <div className="flex-grow">
          <ContactAccounting />
        </div>
      </div>

      <div className="w-1/3 flex flex-col">
        <div className="mb-5">
          <Stars />
        </div>

        <div className="flex-grow">
          <News />
        </div>
      </div>
    </div>
  );
};

export default Accounting;
