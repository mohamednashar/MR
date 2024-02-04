"use client";
import React from "react";
import UserPostien from "./UserPostien";
import LeaderTeamleitung from "./LeaderTeamleitung";

const CardTeamleitung = () => {
  return (
    <>
      <div className="bg-white p-5 rounded-[15px] w-[85%] mx-auto shadow-sm ">
        <div className="border-b-2 py-2">
          <p className="text-[#156585] text-xl pb-4">Teamleitung</p>
        </div>

        <LeaderTeamleitung
          img={
            "https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
          name={"Alexa Liras"}
          email={"alexa@simmmple.com"}
          teamname={"Teamleiter für Team 1"}
        />
        <LeaderTeamleitung
          img={
            "https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
          name={"Alexa Liras"}
          email={"alexa@simmmple.com"}
          teamname={"Teamleiter für Team 2"}
        />
        <LeaderTeamleitung
          img={
            "https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
          name={"Alexa Liras"}
          email={"alexa@simmmple.com"}
          teamname={"Teamleiter für Team 3"}
        />
        <LeaderTeamleitung
          img={
            "https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
          name={"Alexa Liras"}
          email={"alexa@simmmple.com"}
          teamname={"Teamleiter für Team 4"}
        />
        <LeaderTeamleitung
          img={
            "https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
          name={"Alexa Liras"}
          email={"alexa@simmmple.com"}
          teamname={"Teamleiter für Team 5"}
        />
        <LeaderTeamleitung
          img={
            "https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
          name={"Alexa Liras"}
          email={"alexa@simmmple.com"}
          teamname={"Teamleiter für Team 6"}
        />
      </div>
    </>
  );
};

export default CardTeamleitung;
