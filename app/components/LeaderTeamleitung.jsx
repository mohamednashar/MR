"use client";
import Image from "next/image";
import React, { useState } from "react";

import { Collapse } from "@material-tailwind/react";
import UserTeamleitung from "./UserTeamleitung";
import ModalTeam from "./ModalTeam";

function LeaderTeamleitung({
  img,
  name,
  email,
  teamname,
  imguser,
  nameuser,
  emailuser,
}) {
  const [open, setOpen] = React.useState(false);
  const toggleOpen = () => setOpen((cur) => !cur);

  const [isModal1Open, setIsModal1Open] = useState(false);

  const openModal1 = () => {
    setIsModal1Open(true);
  };

  const closeModal = () => {
    setIsModal1Open(false);
  };

  return (
    <div className="  w-full mx-auto bg-white border-b-2 last:border-b-0">
      <div className="flex w-full items-center justify-between bg-white py-2 cursor-default">
        <div className="flex flex-row w-full  border-solid py-2  border-gray-500  ">
          <Image
            width={200}
            height={200}
            class="rounded-[15px] w-[35px] h-[60px] object-cover  mr-4 "
            src={img}
            alt=""
          />
          <div className="flex justify-between grow items-center">
            <div className="flex flex-col items-start pt-2 ">
              <p className="text-[#2D3748] font-bold">{name}</p>
              <p className="text-[#718096]">{email}</p>
            </div>
            <div>
              <p className="text-[#68717B]">{teamname}</p>
            </div>
          </div>
        </div>

        <div className="ml-44">
          <div className="flex items-center gap-5">
            <button
              className=" p-1 rounded-full bg-[#F8F9FA] "
              onClick={openModal1}
            >
              <svg
                className="hover:rotate-90 transition-all duration-200"
                width="22"
                height="22"
                viewBox="0 0 24 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M22 13C15.1276 13 -5.48921 13 1.3832 13C5.53068 13 9.66516 13 13.8061 13"
                  stroke="#3AB3B3"
                  stroke-width="3"
                  stroke-linecap="round"
                />
                <path
                  d="M12 2C12 9.18479 12 30.7387 12 23.5539C12 19.2179 12 14.8955 12 10.5663"
                  stroke="#3AB3B3"
                  stroke-width="3"
                  stroke-linecap="round"
                />
              </svg>
            </button>
            <div>

            <svg
              className={`cursor-pointer transition-all duration-200 ${open ? 'rotate-180' : ''}`}
              onClick={toggleOpen}
              width="15"
              height="10"
              viewBox="0 0 15 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.5 9.99998C7.32063 9.99998 7.14664 9.96181 6.97803 9.88547C6.80942 9.80914 6.66951 9.70736 6.5583 9.58013L0.369955 2.55725C0.123318 2.27735 0 1.92111 0 1.48855C0 1.05598 0.123318 0.699743 0.369955 0.419846C0.616591 0.139948 0.930493 0 1.31166 0C1.69283 0 2.00673 0.139948 2.25336 0.419846L7.5 6.37403L12.7466 0.419846C12.9933 0.139948 13.3072 0 13.6883 0C14.0695 0 14.3834 0.139948 14.63 0.419846C14.8767 0.699743 15 1.05598 15 1.48855C15 1.92111 14.8767 2.27735 14.63 2.55725L8.4417 9.58013C8.30717 9.7328 8.16143 9.8412 8.00448 9.90532C7.84753 9.96944 7.67937 10.001 7.5 9.99998Z"
                fill="#3AB3B3"
              />
            </svg>
            </div>
          </div>
        </div>
      </div>

      {isModal1Open && <ModalTeam isOpen={true} onClose={closeModal} />}

      <Collapse open={open}>
        <div className="bg-[#F8F9FA] rounded-[25px] p-3 mb-3">
          <UserTeamleitung
            imguser={
              "https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
            nameuser={"Alexa Liras"}
            emailuser={"alexa@simmmple.com"}
          />

          <UserTeamleitung
            imguser={
              "https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
            nameuser={"Alexa Liras"}
            emailuser={"alexa@simmmple.com"}
          />

          <UserTeamleitung
            imguser={
              "https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
            nameuser={"Alexa Liras"}
            emailuser={"alexa@simmmple.com"}
          />

          <UserTeamleitung
            imguser={
              "https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
            nameuser={"Alexa Liras"}
            emailuser={"alexa@simmmple.com"}
          />
        </div>
      </Collapse>
    </div>
  );
}

export default LeaderTeamleitung;
