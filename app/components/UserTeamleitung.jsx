"use client";
import Image from "next/image";
import React, { useState } from "react";
import { usePathname } from "next/navigation";

import { Collapse } from "@material-tailwind/react";

function UserTeamleitung({ imguser, nameuser, emailuser }) {
  const [open, setOpen] = React.useState(false);
  const toggleOpen = () => setOpen((cur) => !cur);

  const pathname = usePathname();

  return (
    <div className="  w-full mx-auto border-b-2 last:border-b-0 ">
      <button className="flex w-full items-center justify-between py-2 cursor-default">
        <div className="flex flex-row w-full  border-solid py-2  border-gray-500  ">
          <Image
            width={200}
            height={200}
            class="rounded-[15px] w-[40px] h-[70px] object-cover  mr-4 "
            src={imguser}
            alt=""
          />
          <div className="flex justify-between grow items-center">
          <div className="flex flex-col items-start pt-2 ">
            <p className="text-[#2D3748] font-bold">{nameuser}</p>
            <p className="text-[#718096]">{emailuser}</p>
          </div>
          <div>
          </div>
          </div>

          
        </div>

    
      </button>

 
    </div>
  );
}

export default UserTeamleitung;
