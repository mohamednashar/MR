"use client";
import Image from "next/image";
import React, { useState } from "react";
import { usePathname } from "next/navigation";

import {
  Collapse,
  Button,
  Card,
  Typography,
  CardBody,
  Dialog,
  DialogBody,
  DialogFooter,
  DialogHeader,
} from "@material-tailwind/react";
import HoverMenu from "./HoverMenu";
import Modal1 from "./Modal1";
import Modal2 from "./Modal2";
import Modal3 from "./Modal3";
function User({ img, name, email }) {
  const [isModal1Open, setIsModal1Open] = useState(false);
  const [isModal2Open, setIsModal2Open] = useState(false);
  const [isModal3Open, setIsModal3Open] = useState(false);

  const openModal1 = () => {
    setIsModal1Open(true);
    setIsModal2Open(false);
    setIsModal3Open(false);
  };

  const openModal2 = () => {
    setIsModal1Open(false);
    setIsModal2Open(true);
    setIsModal3Open(false);
  };

  const openModal3 = () => {
    setIsModal3Open(true);
    setIsModal1Open(false);
    setIsModal2Open(false);
  };

  const closeModal = () => {
    setIsModal1Open(false);
    setIsModal2Open(false);
    setIsModal3Open(false);
  };

  const [open, setOpen] = React.useState(false);
  const toggleOpen = () => setOpen((cur) => !cur);

  const pathname = usePathname();

  return (
    <div className="  w-full mx-auto bg-white border-b-2 last:border-b-0">
      <div className="flex w-full items-center justify-between bg-white py-2 cursor-default">
        <div className="flex flex-row w-full  border-solid py-2  border-gray-500">
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

        <div className="">
          {pathname === "/Telefon" ? (
            <svg
              width="27"
              height="24"
              viewBox="0 0 27 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M26.9843 18.1295C26.7436 19.7556 25.8452 21.2481 24.4569 22.3285C23.0686 23.4088 21.2854 24.0029 19.4403 24C8.72116 24 1.22159e-05 16.2479 1.22159e-05 6.71982C-0.00329531 5.07976 0.665151 3.4947 1.8805 2.26069C3.09586 1.02669 4.775 0.228127 6.60433 0.0141573C7.06691 -0.0360501 7.53537 0.0480719 7.93975 0.253966C8.34413 0.45986 8.66276 0.776482 8.84806 1.15657L11.6993 6.81462V6.82902C11.8412 7.11997 11.8998 7.43762 11.8699 7.7536C11.8399 8.06959 11.7224 8.37406 11.5279 8.63984C11.5036 8.67224 11.4779 8.70224 11.4509 8.73224L8.64016 11.6939C9.65133 13.5203 11.8006 15.4139 13.8823 16.3151L17.1683 13.8299C17.2005 13.8058 17.2343 13.7833 17.2695 13.7627C17.5683 13.5856 17.912 13.4775 18.2696 13.4481C18.6271 13.4188 18.9873 13.4692 19.3175 13.5947L19.335 13.6019L25.695 16.1351C26.1234 16.2992 26.4804 16.5822 26.7128 16.9417C26.9452 17.3012 27.0405 17.7179 26.9843 18.1295Z"
                fill="#265E73"
              />
            </svg>
          ) : pathname === "/Videokonferenz" ? (
            <svg
              width="30"
              height="30"
              viewBox="0 0 30 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20 20.3125C20 21.3899 19.572 22.4233 18.8101 23.1851C18.0483 23.947 17.0149 24.375 15.9375 24.375H15.8588C16.4165 22.6527 16.3831 20.7934 15.7638 19.0922C15.1445 17.391 13.9747 15.9454 12.4402 14.9848C10.9056 14.0242 9.09421 13.6036 7.2934 13.7898C5.49259 13.9759 3.80554 14.7582 2.5 16.0125V9.6875C2.5 8.61006 2.92801 7.57675 3.68988 6.81488C4.45175 6.05301 5.48506 5.625 6.5625 5.625H15.9375C17.0149 5.625 18.0483 6.05301 18.8101 6.81488C19.572 7.57675 20 8.61006 20 9.6875V20.3125ZM27.2025 7.36625C27.3947 7.59238 27.5001 7.8795 27.5 8.17625V21.8237C27.5001 22.0625 27.4318 22.2962 27.3033 22.4973C27.1747 22.6985 26.9913 22.8586 26.7746 22.9588C26.5579 23.059 26.3171 23.095 26.0806 23.0627C25.8441 23.0303 25.6218 22.9309 25.44 22.7763L21.25 19.2125V10.785L25.44 7.22375C25.5651 7.11734 25.7099 7.03661 25.8661 6.98618C26.0224 6.93575 26.1871 6.9166 26.3508 6.92983C26.5145 6.94307 26.6739 6.98842 26.8201 7.0633C26.9662 7.13818 27.0962 7.24113 27.2025 7.36625ZM15 21.875C15 20.9722 14.8222 20.0782 14.4767 19.2441C14.1312 18.4099 13.6248 17.652 12.9864 17.0136C12.348 16.3752 11.5901 15.8688 10.7559 15.5233C9.92184 15.1778 9.02784 15 8.125 15C7.22216 15 6.32817 15.1778 5.49405 15.5233C4.65994 15.8688 3.90204 16.3752 3.26364 17.0136C2.62524 17.652 2.11883 18.4099 1.77333 19.2441C1.42783 20.0782 1.25 20.9722 1.25 21.875C1.25 23.6984 1.97433 25.447 3.26364 26.7364C4.55295 28.0257 6.30164 28.75 8.125 28.75C9.94836 28.75 11.697 28.0257 12.9864 26.7364C14.2757 25.447 15 23.6984 15 21.875ZM8.75 22.5L8.75125 25.6287C8.75125 25.7945 8.6854 25.9535 8.56819 26.0707C8.45098 26.1879 8.29201 26.2537 8.12625 26.2537C7.96049 26.2537 7.80152 26.1879 7.68431 26.0707C7.5671 25.9535 7.50125 25.7945 7.50125 25.6287V22.5H4.37C4.20424 22.5 4.04527 22.4342 3.92806 22.3169C3.81085 22.1997 3.745 22.0408 3.745 21.875C3.745 21.7092 3.81085 21.5503 3.92806 21.4331C4.04527 21.3158 4.20424 21.25 4.37 21.25H7.5V18.125C7.5 17.9592 7.56585 17.8003 7.68306 17.6831C7.80027 17.5658 7.95924 17.5 8.125 17.5C8.29076 17.5 8.44973 17.5658 8.56694 17.6831C8.68415 17.8003 8.75 17.9592 8.75 18.125V21.25H11.8713C12.037 21.25 12.196 21.3158 12.3132 21.4331C12.4304 21.5503 12.4963 21.7092 12.4963 21.875C12.4963 22.0408 12.4304 22.1997 12.3132 22.3169C12.196 22.4342 12.037 22.5 11.8713 22.5H8.75Z"
                fill="#265E73"
              />
            </svg>
          ) : (

            <div className="flex items-center gap-5">
                <button   onClick={openModal3} className="py-4 px-8 text-white bg-[#3AB3B3] rounded-full">Zuordnung</button>
              
              <svg
                onClick={openModal1}
                class="cursor-pointer text-[#3AB3B3] transition-all duration-200 hover:rotate-90"
                width="25"
                height="30"
                viewBox="0 0 31 38"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="1.5"
                  y="1.5"
                  width="28"
                  height="35"
                  fill="white"
                  stroke="currentColor"
                  stroke-width="3"
                />
                <line
                  x1="5.94727"
                  y1="10"
                  x2="25.0522"
                  y2="10"
                  stroke="currentColor"
                  stroke-width="2"
                />
                <line
                  x1="6"
                  y1="19"
                  x2="25.105"
                  y2="19"
                  stroke="currentColor"
                  stroke-width="2"
                />
                <line
                  x1="6"
                  y1="27"
                  x2="25.105"
                  y2="27"
                  stroke="currentColor"
                  stroke-width="2"
                />
              </svg>

              <svg
                onClick={openModal2}
                class="cursor-pointer text-[#3AB3B3] transition-all duration-200 hover:rotate-180"
                width="25"
                height="20"
                viewBox="0 0 33 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="1.5"
                  y="3.5"
                  width="27"
                  height="17"
                  fill="white"
                  stroke="#3AB3B3"
                  stroke-width="3"
                />
                <path
                  d="M14.0046 14.9037C13.9514 15.4534 14.354 15.9421 14.9037 15.9953L23.8618 16.8623C24.4115 16.9155 24.9003 16.513 24.9535 15.9632C25.0067 15.4135 24.6042 14.9248 24.0545 14.8716L16.0917 14.101L16.8623 6.13817C16.9155 5.58846 16.513 5.0997 15.9632 5.0465C15.4135 4.9933 14.9248 5.39581 14.8716 5.94552L14.0046 14.9037ZM31.3643 0.22807L14.3643 14.2281L15.6357 15.7719L32.6357 1.77193L31.3643 0.22807Z"
                  fill="#3AB3B3"
                />
              </svg>

              {isModal1Open && <Modal1 isOpen={true} onClose={closeModal} />}
              {isModal2Open && <Modal2 isOpen={true} onClose={closeModal} />}
              {isModal3Open && <Modal3 isOpen={true} onClose={closeModal} />}

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
                  fill="#3AB3B3"
                />
              </svg>

              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3.25 23.25C2.5625 23.25 1.97375 23.005 1.48375 22.515C0.993752 22.025 0.749169 21.4367 0.750002 20.75V5.12501C0.750002 4.81251 0.802085 4.53126 0.906252 4.28126C1.01042 4.03126 1.14584 3.79168 1.3125 3.56251L3.0625 1.43751C3.22917 1.20834 3.4375 1.03626 3.6875 0.921259C3.9375 0.806259 4.20834 0.749176 4.5 0.750009H19.5C19.7917 0.750009 20.0625 0.807092 20.3125 0.921259C20.5625 1.03543 20.7708 1.20751 20.9375 1.43751L22.6875 3.56251C22.8542 3.79168 22.9896 4.03126 23.0938 4.28126C23.1979 4.53126 23.25 4.81251 23.25 5.12501V20.75C23.25 21.4375 23.005 22.0263 22.515 22.5163C22.025 23.0063 21.4367 23.2508 20.75 23.25H3.25ZM3.75 4.50001H20.25L19.1875 3.25001H4.8125L3.75 4.50001ZM12 19.5L17 14.5L15.25 12.75L13.25 14.75V9.50001H10.75V14.75L8.75 12.75L7 14.5L12 19.5Z"
                  fill="#265E73"
                />
              </svg>

            
            </div>
          )}
        </div>
      </div>

      <Collapse open={pathname === "/" ? open : false}>
        <Card className="my-4 mx-auto  bg-[#3AB3B3] p-5">
          <CardBody className="flex bg-white h-6 items-center justify-center rounded-full">
            <HoverMenu
              title={"Kommunikation"}
              menuItems={[
                "→ Nachrichtenschreiben",
                "→ Anrufen",
                "→ Videokonferenz",
                "→ Fax senden",
                "→ Fax (FA)",
                "→ Nachrichten an FA",
                "→ Termin zum Beratungsgespräch",
              ]}
            />

            <HoverMenu
              title={"Dokumente"}
              menuItems={[
                "→ Dokumentenschreiben",
                "→ Rechnungen",
                "→ Beleg hochladen",
                "→ Dokumenten des Mandanten bereitstellen",
                "→ Dokumente bearbeiten",
                "→ Auswertungen",
              ]}
            />

            <HoverMenu
              title={"Verlauf (Kunden Historie)"}
              menuItems={["→ Nachrichten Verlauf", "→ Unterlagen Verlauf"]}
            />

            <HoverMenu
              title={"Kundendaten"}
              menuItems={["→ Kundendaten ändern", "→ Kundendaten einfügen"]}
            />
          </CardBody>
        </Card>
      </Collapse>
    </div>
  );
}

export default User;
