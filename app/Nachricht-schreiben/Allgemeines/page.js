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
    <div className="w-[80%] mx-auto">
      <div className=" bg-white p-10">
        <div className="flex items-center justify-between mb-3">
          <div className="flex">
            <button className="text-[#B3B3B3] flex items-center gap-3 bg-[#F8F9FA] p-2 mx-2">
              <svg
                width="20"
                height="19"
                viewBox="0 0 20 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3.656 17.979C3.51242 18.1038 3.3362 18.1851 3.14803 18.2133C2.95987 18.2415 2.76756 18.2155 2.59369 18.1382C2.41982 18.0609 2.2716 17.9356 2.16644 17.7771C2.06128 17.6185 2.00354 17.4332 2 17.243V15C1.46957 15 0.960859 14.7893 0.585786 14.4142C0.210714 14.0391 0 13.5304 0 13V6C0 5.46957 0.210714 4.96086 0.585786 4.58579C0.960859 4.21071 1.46957 4 2 4H13C13.5304 4 14.0391 4.21071 14.4142 4.58579C14.7893 4.96086 15 5.46957 15 6V13C15 13.5304 14.7893 14.0391 14.4142 14.4142C14.0391 14.7893 13.5304 15 13 15H8.003L3.656 17.979ZM16 10.017C15.9968 10.14 15.9968 10.263 16 10.386V10.016C16.005 9.909 16.006 8.569 16.004 5.997C16.0032 5.20187 15.6868 4.43958 15.1243 3.87762C14.5617 3.31566 13.7991 3 13.004 3H5V2C5 1.46957 5.21071 0.960859 5.58579 0.585786C5.96086 0.210714 6.46957 0 7 0L18 0C18.5304 0 19.0391 0.210714 19.4142 0.585786C19.7893 0.960859 20 1.46957 20 2V9C20 9.53043 19.7893 10.0391 19.4142 10.4142C19.0391 10.7893 18.5304 11 18 11V13.243C17.9965 13.4332 17.9387 13.6185 17.8336 13.7771C17.7284 13.9356 17.5802 14.0609 17.4063 14.1382C17.2324 14.2155 17.0401 14.2415 16.852 14.2133C16.6638 14.1851 16.4876 14.1038 16.344 13.979L16 13.743V10.017Z"
                  fill="#B3B3B3"
                />
              </svg>

              <span> ungelesen</span>
            </button>
            <button className="text-[#B3B3B3] flex items-center gap-3 bg-[#F8F9FA] p-2 mx-2">
            <svg width="26" height="20" viewBox="0 0 26 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M2 10L4.75 7.33333L10.25 12.6667L21.25 2L24 4.66667L10.25 18L2 10Z" fill="black" stroke="#B3B3B3" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
</svg>


              <span>erledigt</span>
            </button>
          </div>
          <div>
            <button className="text-[#B3B3B3] bg-[#F8F9FA] p-2 mx-2">
              Zur Checkliste
            </button>
          </div>
        </div>

        <button className="text-[#3AB3B3] border-2 border-[#3AB3B3] text-center p-2 w-[94%] mx-[3%] my-10">
          Neues Thema beginnen
        </button>
      </div>
      {/* Users */}

      <Accordion
        open={open === 1}
        animate={CUSTOM_ANIMATION}
        className="mt-10 bg-white px-5"
      >
        <AccordionHeader
          onClick={() => handleOpen(1)}
          className="flex justify-start gap-5 "
        >
          <div class="relative  inline-flex items-center justify-center w-14 h-14 overflow-hidden rounded-full bg-gray-300">
            <span class="font-medium text-[#3AB3B3] ">AR</span>
          </div>
          <div className="flex  flex-col">
            <span className="font-thin mb-1">Fehlende Unterlagen</span>

            <span className="text-sm text-[#00000033] font-thin">
              von Asia Roushdy am 11.03.21 12:50
            </span>
          </div>
        </AccordionHeader>

        <AccordionBody className="font-bold text-lg mx-3">
          Guten Tag, Bi Belege hochladen Am 1. Juni war der geplante
          Fertigstellungstermin für den letztmaligen Jahresabschluss.
        </AccordionBody>
      </Accordion>

      <Accordion
        open={open === 2}
        animate={CUSTOM_ANIMATION}
        className=" bg-white  px-5"
      >
        <AccordionHeader
          onClick={() => handleOpen(2)}
          className="flex justify-start gap-5 "
        >
          <div class="relative  inline-flex items-center justify-center w-14 h-14 overflow-hidden rounded-full bg-gray-300">
            <span class="font-medium text-[#3AB3B3] ">AR</span>
          </div>
          <div className="flex  flex-col">
            <span className="font-thin mb-1">Fehlende Unterlagen</span>

            <span className="text-sm text-[#00000033] font-thin">
              von Asia Roushdy am 11.03.21 12:50
            </span>
          </div>
        </AccordionHeader>

        <AccordionBody className="font-bold text-lg mx-3">
          Guten Tag, Bi Belege hochladen Am 1. Juni war der geplante
          Fertigstellungstermin für den letztmaligen Jahresabschluss.
        </AccordionBody>
      </Accordion>

      <div className="bg-white p-10">
        <UserDetails
          name={"Alexa Liras"}
          email={"alexa@simmmple.com"}
          img={
            "https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          }
        />
      </div>
    </div>
  );
}

export default Allgemeines;
