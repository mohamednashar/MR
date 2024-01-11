"use client";
import Image from "next/image";
import React, { useState } from "react";
import { usePathname } from "next/navigation";

import { Collapse } from "@material-tailwind/react";

function UserPostienKalkulator({ img, name, email, time, text }) {
  const [open, setOpen] = React.useState(false);
  const toggleOpen = () => setOpen((cur) => !cur);

  const pathname = usePathname();

  return (
    <div className="  w-full mx-auto bg-white border-b-2 last:border-b-0">
      <button className="flex w-full items-center justify-between bg-white py-2 cursor-default">
        <div className="flex flex-row w-full  border-solid py-2  border-gray-500">
          <Image
            width={200}
            height={200}
            class="rounded-[15px] w-[40px] h-[70px] object-cover  mr-4 "
            src={img}
            alt=""
          />
          <div className="flex flex-col items-start pt-2">
            <p className="text-[#2D3748] font-bold">{name}</p>
            <p className="text-[#718096]">{email}</p>
          </div>
        </div>

        <div className="">
          <div className="flex items-center gap-5">
            <svg
              className="cursor-pointer transition-all duration-200 hover:rotate-180"
              onClick={toggleOpen}
              width="15"
              height="10"
              viewBox="0 0 15 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.5 9.99998C7.32063 9.99998 7.14664 9.96181 6.97803 9.88547C6.80942 9.80914 6.66951 9.70736 6.5583 9.58013L0.369955 2.55725C0.123318 2.27735 0 1.92111 0 1.48855C0 1.05598 0.123318 0.699743 0.369955 0.419846C0.616591 0.139948 0.930493 0 1.31166 0C1.69283 0 2.00673 0.139948 2.25336 0.419846L7.5 6.37403L12.7466 0.419846C12.9933 0.139948 13.3072 0 13.6883 0C14.0695 0 14.3834 0.139948 14.63 0.419846C14.8767 0.699743 15 1.05598 15 1.48855C15 1.92111 14.8767 2.27735 14.63 2.55725L8.4417 9.58013C8.30717 9.7328 8.16143 9.8412 8.00448 9.90532C7.84753 9.96944 7.67937 10.001 7.5 9.99998Z"
                fill="#00000075"
              />
            </svg>
          </div>
        </div>
      </button>

      <Collapse open={open}>
        <div className="mb-10">
          <p className="text-[#265E73] text-xl mx-28">{time}</p>
          {text.map((item) => {
            return (
              <div key={item} className="flex items-center gap-8 mx-10">
                <svg
                  width="23"
                  height="13"
                  viewBox="0 0 23 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20.0642 6.47266L1.99993 6.55977"
                    stroke="#4FD1C5"
                    stroke-width="4"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M14.0213 2.02904L20.0643 6.47096L14.0644 10.971"
                    stroke="#4FD1C5"
                    stroke-width="4"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>

                <p className="text-[#265E73] text-xl p-3">{item}</p>
              </div>
            );
          })}
        </div>
      </Collapse>
    </div>
  );
}

export default UserPostienKalkulator;
