"use client";
import React, { useState } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import UserDetails from "@/app/components/UserDetails";
function Icon({ id, open }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className={`${
        id === open ? "rotate-180" : ""
      } h-5 w-5 transition-transform`}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
      />
    </svg>
  );
}

const CUSTOM_ANIMATION = {
  mount: { scale: 1 },
  unmount: { scale: 0.9 },
};

function Allgemeines() {
  const [open, setOpen] = useState(0);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);
  return (
    <div className="w-[80%] mx-auto bg-[#F8F9FA]">
      <div className=" bg-white p-10 mb-5">
        <div className="text-end">
          <button className="text-[#3AB3B3] font-bold  bg-[#F8F9FA] px-4  py-2">
            Zur den Nachrichten
          </button>
        </div>
      </div>

      <div className="bg-white text-center p-8 flex flex-col justify-center items-center">
        <svg
          width="374"
          height="247"
          viewBox="0 0 374 247"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M4.16462 80.7898C-0.152203 71.9015 2.669 61.1928 10.8048 55.5851L35.2357 38.7457C45.3197 31.7952 59.2259 35.4588 64.5764 46.4755L105.514 130.766C110.864 141.783 124.771 145.446 134.855 138.496L327.501 5.71143C337.585 -1.2391 351.491 2.42448 356.842 13.4412L369.805 40.132C374.122 49.0203 371.3 59.729 363.165 65.3367L107.748 241.386C97.6643 248.336 83.7581 244.673 78.4076 233.656L4.16462 80.7898Z"
            fill="#D8D8D8"
            stroke="white"
            stroke-width="4"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>

        <h1 className="text-center text-[#D8D8D8] text-3xl py-10">
          Es Liegen aktuell keine Aufgaben vor.
        </h1>
      </div>
    </div>
  );
}

export default Allgemeines;
