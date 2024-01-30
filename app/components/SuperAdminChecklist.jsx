"use client";
import React, { useState } from "react";
import UserDetails from "./UserDetails";

const checkListItems = [
  {
    img: "https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Usama Rabie",
    email: "usamarabie21@gmail.com",
    checkList: [
      "Build prototypes without code1",
      "Build prototypes without code2",
      "Build prototypes without code3",
      "Build prototypes without code4",
    ],
  },
  {
    img: "https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Usama Rabie",
    email: "usamarabie21@gmail.com",
    checkList: [
      "Build prototypes without code1",
      "do something2",
      "do something3",
      "do something4",
    ],
  },
];

function SuperAdminChecklist() {
 

  return (
    <div className="w-[80%] flex flex-col bg-white mx-auto p-5 rounded-[15px] h-[80vh] shadow-lg">
      <div className=" text-lg border-b-2 pb-5 mb-5">      <h1>Standort</h1>
</div>
      {checkListItems.map((item,index) => (
        <div key={index} className="border-b-2 last:border-none">
          <UserDetails img={item.img} name={item.name} email={item.email} />
          <div className="flex items-center mb-4 shadow-md p-2">
              <input
                type="checkbox"
                className="w-4 h-4 "
              />
              <label
                htmlFor="default-checkbox"
                className="ms-2 text-sm font-bold mr-3 "
              >
                Build prototypes without code
              </label>
              <p className="text-[#0000008A]">
                Sunt qui esse pariatur duis deserunt mollit dolore cillum minim
                tempor enim.{" "}
              </p>
            </div>

            <div className="flex items-center mb-4 shadow-md p-2">
              <input
                type="checkbox"
                className="w-4 h-4 "
              />
              <label
                htmlFor="default-checkbox"
                className="ms-2 text-sm font-bold mr-3 "
              >
                Build prototypes without code
              </label>
              <p className="text-[#0000008A]">
                Sunt qui esse pariatur duis deserunt mollit dolore cillum minim
                tempor enim.{" "}
              </p>
            </div>

            <div className="flex items-center mb-4 shadow-md p-2">
              <input
                type="checkbox"
                className="w-4 h-4 "
              />
              <label
                htmlFor="default-checkbox"
                className="ms-2 text-sm font-bold mr-3 "
              >
                Build prototypes without code
              </label>
              <p className="text-[#0000008A]">
                Sunt qui esse pariatur duis deserunt mollit dolore cillum minim
                tempor enim.{" "}
              </p>
            </div>

            <div className="flex items-center mb-4 shadow-md p-2">
              <input
                type="checkbox"
                className="w-4 h-4 "
              />
              <label
                htmlFor="default-checkbox"
                className="ms-2 text-sm font-bold mr-3 "
              >
                Build prototypes without code
              </label>
              <p className="text-[#0000008A]">
                Sunt qui esse pariatur duis deserunt mollit dolore cillum minim
                tempor enim.{" "}
              </p>
            </div>
          
           
        </div>
      ))}
    </div>
  );
}

export default SuperAdminChecklist;
