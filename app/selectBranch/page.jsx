"use client";
import { Select, Option } from "@material-tailwind/react";
import Link from "next/link";
import { useEffect, useState } from "react";

const SelectBranch = () => {
  const [branch, setBranch] = useState("");
  useEffect(() => {
    console.log(branch);
  }, [branch]);

  const handleBranchSelection = (selectedBranch) => {
    setBranch(selectedBranch);
  };

  return (
  <div>
      <div className=" bg-white p-4 md:w-[80%] mx-auto">
        <div className="w-80 ">
          <Select
            label="Zweig auswählen"
            animate={{
              mount: { y: 0 },
              unmount: { y: 25 },
            }}
          >
            <Link
              onClick={() => handleBranchSelection("London")}
              selected={branch === "London"}
              className="p-1"
              href="/main"
            >
              <Option
                className="border-2 w-full"
                onClick={() => handleBranchSelection("London")}
              >
                London
              </Option>
            </Link>
    
            <Link
              onClick={() => handleBranchSelection("Minia")}
              selected={branch === "Minia"}
              className="p-1"
              href="/main"
            >
              <Option
                className="border-2 w-full"
                onClick={() => handleBranchSelection("Minia")}
              >
                Minia
              </Option>
            </Link>
    
            <Link
              onClick={() => handleBranchSelection("Samalut")}
              selected={branch === "Samalut"}
              className="p-1"
              href="/main"
            >
              <Option
                className="border-2 w-full"
                onClick={() => handleBranchSelection("Samalut")}
              >
                Samalut
              </Option>
            </Link>
    
            <Link
              onClick={() => handleBranchSelection("Damaries")}
              selected={branch === "Damaries"}
              className="p-1"
              href="/main"
            >
              <Option
                className="border-2 w-full"
                onClick={() => handleBranchSelection("Damaries")}
              >
                Damaries
              </Option>
            </Link>
          </Select>
        </div>
    
      </div>
        <h1 className="mx-auto  text-[#156585] text-7xl font-semibold my-52 text-center">Willkommen</h1>
  </div>
  );
};
export default SelectBranch;
