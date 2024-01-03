"use client";
import React from "react";
import User from "@/app/components/User";
import UserPostien from "./UserPostien";

const CardPostien = () => {
  return (
    <>
      <div className="bg-white p-5 rounded-[15px] w-[85%] mx-auto border-2 border-solid">
        <div className="flex justify-between border-b-2 pb-5">
          <div>
            <div className="relative">
              <div className="absolute inset-y-0 flex items-center pointer-events-none end-0">
                <svg
                  className="w-16 h-16"
                  viewBox="0 0 58 23"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M27.7924 18.6219C32.2173 18.6219 35.8045 15.0347 35.8045 10.6098C35.8045 6.18481 32.2173 2.59767 27.7924 2.59767C23.3674 2.59767 19.7803 6.18481 19.7803 10.6098C19.7803 15.0347 23.3674 18.6219 27.7924 18.6219Z"
                    stroke="#2D3748"
                    stroke-width="1.33535"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M34.852 19.236C35.3238 20.6603 36.401 20.8028 37.2289 19.5564C37.9856 18.4169 37.4871 17.4822 36.1161 17.4822C35.1013 17.4733 34.5315 18.2656 34.852 19.236Z"
                    stroke="#2D3748"
                    stroke-width="1.33535"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
              <input
                type="search"
                id="default-search"
                className="placeholder-[#265E73]  block w-full p-4 ps-5 text-sm  border border-gray-300 rounded-[15px] bg-gray-50"
                placeholder="suchen"
                required
              />
            </div>
          </div>
        </div>

        <UserPostien
          img={
            "https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
          name={"Alexa Liras"}
          email={"alexa@simmmple.com"}
          time={"11.03.21 12:50 am"}
          text={"Guten Tag, Bi Belege hochladen Am 1. Juni war der geplante Fertigstellungstermin für den letztmaligen Jahresabschluss."}
        />
        <UserPostien
          img={
            "https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
          name={"Alexa Liras"}
          email={"alexa@simmmple.com"}
          time={"11.03.21 12:50 am"}
          text={"Guten Tag, Bi Belege hochladen Am 1. Juni war der geplante Fertigstellungstermin für den letztmaligen Jahresabschluss."}

        />
        <UserPostien
          img={
            "https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
          name={"Alexa Liras"}
          email={"alexa@simmmple.com"}
          time={"11.03.21 12:50 am"}
          text={"Guten Tag, Bi Belege hochladen Am 1. Juni war der geplante Fertigstellungstermin für den letztmaligen Jahresabschluss."}

        />
        <UserPostien
          img={
            "https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
          name={"Alexa Liras"}
          email={"alexa@simmmple.com"}
          time={"11.03.21 12:50 am"}
          text={"Guten Tag, Bi Belege hochladen Am 1. Juni war der geplante Fertigstellungstermin für den letztmaligen Jahresabschluss."}

        />

      </div>
    </>
  );
};

export default CardPostien;
