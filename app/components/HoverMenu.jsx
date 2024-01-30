import React from "react";
import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Button,
  Card,
  Typography,
} from "@material-tailwind/react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
 

export default function HoverMenu({title,menuItems}) {
  const [openMenu, setOpenMenu] = React.useState(false);
 
  return (
    <Menu className="border border-solid border-[#3AB3B3]" open={openMenu} handler={setOpenMenu} allowHover>
      <MenuHandler>
        <Button
          variant="text"
          className="flex items-center gap-3 text-2xl font-normal capitalize text-[#265E73]"
        >
          {title}
       
        </Button>
      </MenuHandler>
      <MenuList className="hidden  gap-3 overflow-visible lg:grid bg-[#3AB3B3]">
        
        <ul className="col-span-4 flex w-full flex-col gap-1">
          {menuItems.map((item) => (
            <a href="#" key={title} className=" text-white hover:text-black">
              <MenuItem>
                <Typography variant="h6"  className="mb-1">
                  {item}
                </Typography>
              
              </MenuItem>
            </a>
          ))}
        </ul>
      </MenuList>
    </Menu>
  );
}