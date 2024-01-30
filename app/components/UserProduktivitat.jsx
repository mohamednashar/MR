"use client";
import Image from "next/image";
import React, { useState } from "react";

import {
  Collapse,
  Card,
  CardBody,
  Select,
  Option,
} from "@material-tailwind/react";
import WiederkehrendeLeistungen from "../Auftragsubersicht/Wiederkehrende-Leistungen/page";
function UserProduktivitat({ img, name, email }) {
  const [open, setOpen] = React.useState(false);
  const toggleOpen = () => setOpen((cur) => !cur);
  const [select, setSelected] = useState("");
  const [selectClicked, setSelectClicked] = useState(false);

  const handleSelect = (e) => {
    setSelected(e);
    setSelectClicked(false)

  };

  return (
    <div className="w-full mx-auto bg-white border-b-2 last:border-b-0">
      <div className="flex w-full items-center justify-between bg-white py-2 cursor-default">
        <div className="flex flex-row w-full  border-solid py-2  border-gray-500 ic">
        <Image
           width={200}
           height={200}
           class="rounded-[15px] w-[40px] h-[70px] object-cover mr-4"
            src={img}
            alt=""
          />
          <div className="flex flex-col items-start pt-2">
            <p className="text-[#2D3748] font-bold">{name}</p>
            <p className="text-[#718096]">{email}</p>
          </div>
        </div>

        <button onClick={toggleOpen}>
          <svg
            width="15"
            height="11"
            viewBox="0 0 15 11"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <svg
              width="15"
              height="11"
              viewBox="0 0 15 11"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.5 10.7656C7.32063 10.7656 7.14664 10.7276 6.97803 10.6517C6.80942 10.5757 6.66951 10.4745 6.5583 10.3479L0.369955 3.36211C0.123318 3.08369 0 2.72934 0 2.29905C0 1.86876 0.123318 1.51441 0.369955 1.23599C0.616591 0.957569 0.930493 0.818359 1.31166 0.818359C1.69283 0.818359 2.00673 0.957569 2.25336 1.23599L7.5 7.15875L12.7466 1.23599C12.9933 0.957569 13.3072 0.818359 13.6883 0.818359C14.0695 0.818359 14.3834 0.957569 14.63 1.23599C14.8767 1.51441 15 1.86876 15 2.29905C15 2.72934 14.8767 3.08369 14.63 3.36211L8.4417 10.3479C8.30717 10.4998 8.16143 10.6076 8.00448 10.6714C7.84753 10.7352 7.67937 10.7666 7.5 10.7656Z"
                fill="#3AB3B3"
              />
            </svg>
          </svg>
        </button>
      </div>

      <Collapse open={open}>
        <Card>
          <CardBody className="mb-14">
          <div className={` transition-all duration-500 w-[450px] rounded-full ${selectClicked ? 'pb-20' : ''}`}>
                <Select  onClick={() => setSelectClicked(true)} onChange={(e) => handleSelect(e)}>
                <Option
                  value="Fehlende Unterlagen"
                  className="flex items-center gap-2 text-black hover:text-[white] hover:bg-[#3AB3B3] mb-2"
                >
                  <div className="flex gap-2 ">
                    <span className="text-[#3AB3B3] mx-3 rounded-full bg-[#ECECEC]">A R</span>
                    <span className="">Fehlende Unterlagen</span>
                  </div>
                </Option>


                <Option
                  value=" Unterlagen Fehlende"
                  className="flex items-center gap-2 text-black hover:text-[white] hover:bg-[#3AB3B3]  mb-2"
                >
                  <div className="flex gap-2">
                    <span className="text-[#3AB3B3] mx-3 rounded-full bg-[#ECECEC]">U R</span>
                    <span className=""> Unterlagen Fehlende</span>
                  </div>
                </Option>
              </Select>
            </div>

            {
              select !== "" && <WiederkehrendeLeistungen/>
            }
          </CardBody>
        </Card>
      </Collapse>
    </div>
  );
}

export default UserProduktivitat;
