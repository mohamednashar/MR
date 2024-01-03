"use client"
import React, { useState } from "react";

import User from "@/app/components/User";
import Link from "next/link";

const Card = () => {
  const [selectedOption, setSelectedOption] = useState("Mitarbeiter");

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <>

    <div className="bg-white p-5 rounded-[15px] w-[85%] mx-auto shadow-md">
      
      <div className="flex justify-between border-b-2 pb-5">
        <select className="bg-white border-2 border-gray-200 rounded-full p-3  py-1 selectt"
         value={selectedOption}
         onChange={handleOptionChange}
         >
          <option selected>Mitarbeiter</option>
          <option value="US">Kunden</option>
        </select>


        <div className="space-x-8">

          {selectedOption==="Mitarbeiter"?    <Link href={"Neuer-Angestellter/Personalien"}>
        <button className="bg-[#4FD1C5] text-white rounded-full px-6 py-3 transition-all duration-300 hover:bg-[#43aca2]">
            Neuer Angestellter
          </button>
        </Link>:  <Link href={"Neukunde/Allgemeine-Angaben"}>
        <button className="bg-[#4FD1C5] text-white rounded-full px-6 py-3 transition-all duration-300 hover:bg-[#43aca2]">
        Neukunde
          </button>
        </Link>
        }
          
    

      
          
        
      
          <button  className="bg-white border-2 border-gray-300 rounded-full px-6 py-3 transition-all duration-300 hover:bg-gray-200 hover:border-gray-700">
            Übertragen an
          </button>
        </div>
      </div>

      <User
        img={
          "https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        }
        name={"usama"}
        email={"usamarabie21@gmail.com"}
      />
      <User
        img={
          "https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        }
        name={"usama"}
        email={"usamarabie21@gmail.com"}
      />
      <User
        img={
          "https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        }
        name={"usama"}
        email={"usamarabie21@gmail.com"}
      />

      <User
        img={
          "https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        }
        name={"usama"}
        email={"usamarabie21@gmail.com"}
      />
      <User
        img={
          "https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        }
        name={"usama"}
        email={"usamarabie21@gmail.com"}
      />
      <User
        img={
          "https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        }
        name={"usama"}
        email={"usamarabie21@gmail.com"}
      />
      
    </div>
    </>
  );
};

export default Card;
