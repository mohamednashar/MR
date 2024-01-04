"use client"
import React, { useState } from "react";

import Link from "next/link";
import UserProduktivitat from "./UserProduktivitat";

const CardProduktivitat = () => {
  const [selectedOption, setSelectedOption] = useState("Mitarbeiter");

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <>

    <div className="bg-white p-5 rounded-[15px] w-[85%] mx-auto" >
      
    

      <UserProduktivitat
        img={
          "https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
        }
        name={"usama"}
        email={"usamarabie21@gmail.com"}
      />
      <UserProduktivitat
        img={
          "https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
        }
        name={"usama"}
        email={"usamarabie21@gmail.com"}
      />
      <UserProduktivitat
        img={
          "https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
        }
        name={"usama"}
        email={"usamarabie21@gmail.com"}
      />

      <UserProduktivitat
        img={
          "https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
        }
        name={"usama"}
        email={"usamarabie21@gmail.com"}
      />
       <UserProduktivitat
        img={
          "https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
        }
        name={"usama"}
        email={"usamarabie21@gmail.com"}
      />
       <UserProduktivitat
        img={
          "https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
        }
        name={"usama"}
        email={"usamarabie21@gmail.com"}
      />
      
    </div>
    </>
  );
};

export default CardProduktivitat;
