"use client";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React, { useState, useMemo } from "react";

import Icon1 from "./icons/Icon1";
import Icon2 from "./icons/Icon2";
import Icon3 from "./icons/Icon3";
import Icon4 from "./icons/Icon4";
import Icon5 from "./icons/Icon5";
import Icon6 from "./icons/Icon6";
import Icon7 from "./icons/Icon7";
import Icon8 from "./icons/Icon8";
import Icon9 from "./icons/Icon9";
import Icon10 from "./icons/Icon10";
import Icon11 from "./icons/Icon11";
import Icon12 from "./icons/Icon12";
import Icon13 from "./icons/Icon13";
import CollapsIcon from "./icons/CollapsIcon";

import { LogoIcon } from "../componentsClient/icons";
const menuItems = [
  { id: 1, label: "Standort", icon: Icon1, link: "/" },
  { id: 2, label: "Nachrichten", icon: Icon2, link: "/Nachrichten" },
  {
    id: 3,
    label: "Nachricht schreiben",
    icon: Icon3,
    link: "/Nachricht-schreiben/Finanzbuchhaltung",
  },
  { id: 4, label: "Fax senden", icon: Icon4, link: "/Fax-senden" },
  { id: 5, label: "Checklisten", icon: Icon5, link: "/Checklisten" },
  { id: 6, label: "Telefon", icon: Icon6, link: "/Telefon" },
  { id: 7, label: "Videokonferenz", icon: Icon7, link: "/Videokonferenz" },
  { id: 8, label: "Kalender", icon: Icon8, link: "/Kalender" },
  { id: 9, label: "Aufträge", icon: Icon9, link: "/Aufrtage" },
  { id: 10, label: "Aufgaben", icon: Icon10, link: "/Aufgaben" },
  { id: 11, label: "Zeiterfassung", icon: Icon11, link: "/Zeiterfassung" },
  { id: 12, label: "Produktivität", icon: Icon12, link: "/Produktivitat" },
  { id: 13, label: "kalkulator Neukunde", icon: Icon13, link: "/kalkulator" },
];

const Sidebar = () => {
  const [toggleCollapse, setToggleCollapse] = useState(false);
  const [isCollapsible, setIsCollapsible] = useState(false);

  const router = useRouter();

  const activeMenu = useMemo(
    () =>
      menuItems.find((menu) => menu.link === router.pathname) || menuItems[0], // Use the first item as a default
    [router.pathname]
  );
  const wrapperClasses =
    "h-screen px-4 pt- pb-4 bg-light flex justify-between flex-col " +
    (toggleCollapse ? "w-20" : "w-80 ");

  const collapseIconClasses = !toggleCollapse
    ? "p-4 rounded absolute right-0 mt-12 "
    : "rotate-180 ";

  const getNavItemClasses = (menu) =>
    "flex items-center cursor-pointer hover:bg-light-lighter rounded w-full overflow-hidden whitespace-nowrap " +
    (activeMenu.id === menu.id ? "bg-light-lighter" : "");

  const onMouseOver = () => {
    setIsCollapsible(!isCollapsible);
  };

  const handleSidebarToggle = () => {
    setToggleCollapse(!toggleCollapse);
  };

  const path = usePathname();
  let activeLink = path.slice(0);
  

  return (
    <div
      className={wrapperClasses}
      onMouseEnter={onMouseOver}
      onMouseLeave={onMouseOver}
      style={{ transition: "width 300ms cubic-bezier(0.2, 0, 0, 1) 0s" }}
    >
      <div className="flex flex-col">
        <div className="flex items-center justify-between relative ">
          <div className="flex items-center pl-1 gap-4">
            <LogoIcon />
          </div>
          {isCollapsible && (
            <button
              className={collapseIconClasses}
              onClick={handleSidebarToggle}
            >
              <CollapsIcon />
            </button>
          )}
        </div>

        <div className="flex flex-col items-start mt-3">
          {menuItems.map(({ icon: Icon, ...menu }, index) => {
            const classes = getNavItemClasses(menu);
            return (
              <Link
              key={index}
              href={menu.link}
              className={`
                flex items-center w-full h-12 px-3 mt-2 rounded-[15px] text-[#265E73] 
                ${
                  activeLink === menu.link && !toggleCollapse
                    ? "bg-[#3AB3B3] text-white"
                    : ""
                }
                ${
                  !toggleCollapse
                    ? "transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-md"
                    : "border-none"
                }
                ${
                  menu.link==="/Nachricht-schreiben/Finanzbuchhaltung"&&activeLink.startsWith("/Nachricht-schreiben")
                  ? "bg-[#3AB3B3] text-white"
                  : ""
                }

                ${
                  menu.link==="/Aufrtage"&&activeLink.startsWith("/Aufrtage")
                  ? "bg-[#3AB3B3] text-white"
                  : ""
                }

                ${
                  menu.link==="/"&&activeLink.startsWith("/Neuer-Angestellter")
                  ? "bg-[#3AB3B3] text-white"
                  : ""
                }
                ${
                  menu.link==="/"&&activeLink.startsWith("/Neukunde")
                  ? "bg-[#3AB3B3] text-white"
                  : ""
                }
               
              `}
            >
              {/* Link content */}
         
                <div
                  id="x"
                  className={`bg-white p-2 rounded-[12px] mr-2  ${
                    index === 0
                      ? "first:bg-[#4FD1C5] p-2 rounded-[12px]"
                      : "bg-white p-2 rounded-[12px]  "
                  }

                  ${
                    toggleCollapse && activeLink === menu.link
                      ? "border-2 border-[#4FD1C5]"
                      : ""
                  }`}
                >
                  <Icon />
                </div>
                {!toggleCollapse && (
                  <span className={"text-sm font-medium text-text-light"}>
                    {menu.label}
                  </span>
                )}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
