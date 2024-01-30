"use client";
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
      <div className="bg-white p-5 rounded-[15px] w-[85%] mx-auto">
        <UserProduktivitat
          img={
            "https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
          name={"Freduardo Hill"}
          email={"usamarabie21@gmail.com"}
        />
        <UserProduktivitat
          img={
            "https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
          name={"Freduardo Hill"}
          email={"usamarabie21@gmail.com"}
        />
        <UserProduktivitat
          img={
            "https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
          name={"Freduardo Hill"}
          email={"usamarabie21@gmail.com"}
        />

        <UserProduktivitat
          img={
            "https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
          name={"Freduardo Hill"}
          email={"usamarabie21@gmail.com"}
        />
        <UserProduktivitat
          img={
            "https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
          name={"Freduardo Hill"}
          email={"usamarabie21@gmail.com"}
        />
        <UserProduktivitat
          img={
            "https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
          name={"Freduardo Hill"}
          email={"usamarabie21@gmail.com"}
        />
      </div>
    </>
  );
};

export default CardProduktivitat;
