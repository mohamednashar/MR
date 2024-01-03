"use client";
import React, { useState } from "react";
import PhoneButton from "../components/PhoneButton";
import UserPostien from "../components/UserPostien";
import UserPostienKalkulator from "../components/UserPostienKalkulator";

const Page = () => {
  const [text, setText] = useState([
    "von 8 bis 16 Uhr Durchführung der Finanzbuchhaltung für den Kunden Mostafa Dahi",
    "Er erstellte die monatlichen Gutachten für das Unternehmen des Kunden, Enas Ahmed",
  ]);
  return (
    <div>
      <PhoneButton />
      <div className="bg-white p-5 rounded-[15px] w-[85%] mx-auto">
        <UserPostienKalkulator
          img={
            "https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
          name={"Alexa Liras"}
          email={"alexa@simmmple.com"}
          time={"11.03.21 12:50 am"}
          text={text}
        />
        <UserPostienKalkulator
          img={
            "https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
          name={"Alexa Liras"}
          email={"alexa@simmmple.com"}
          time={"11.03.21 12:50 am"}
          text={text}
        />
        <UserPostienKalkulator
          img={
            "https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
          name={"Alexa Liras"}
          email={"alexa@simmmple.com"}
          time={"11.03.21 12:50 am"}
          text={text}
        />
        <UserPostienKalkulator
          img={
            "https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
          name={"Alexa Liras"}
          email={"alexa@simmmple.com"}
          time={"11.03.21 12:50 am"}
          text={text}
        />
        <UserPostienKalkulator
          img={
            "https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
          name={"Alexa Liras"}
          email={"alexa@simmmple.com"}
          time={"11.03.21 12:50 am"}
          text={text}
        />
        <UserPostienKalkulator
          img={
            "https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
          name={"Alexa Liras"}
          email={"alexa@simmmple.com"}
          time={"11.03.21 12:50 am"}
          text={text}
        />
      </div>
    </div>
  );
};

export default Page;
