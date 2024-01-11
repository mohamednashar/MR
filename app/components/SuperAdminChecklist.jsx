"use client"
import React, { useState } from "react";
import UserDetails from "./UserDetails";

const checkListItems = [
  {
    img: "https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    name: "usama",
    email: "usamarabie21@gmail.com",
    checkList: [
      "Build prototypes without code1",
      "Build prototypes without code2",
      "Build prototypes without code3",
      "Build prototypes without code4",
    ],
  },
  {
    img: "https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    name: "usama",
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
  const [checkedItems, setCheckedItems] = useState([]);

  const handleCheckboxChange = (event) => {
    const item = event.target.value;
    if (event.target.checked) {
      setCheckedItems((prevCheckedItems) => [...prevCheckedItems, item]);
    } else {
      setCheckedItems((prevCheckedItems) =>
        prevCheckedItems.filter((checkedItem) => checkedItem!== item)
      );
    }
  };

  return (
    <div className="w-[80%] flex flex-col bg-white mx-auto p-5 rounded-[15px] h-[80vh] shadow-lg">
      {checkListItems.map((item) => (
        <div key={item.email} className="border-b-2 last:border-none">
          <UserDetails
            img={item.img}
            name={item.name}
            email={item.email}
          />
          <div className="flex flex-col gap-3 p-5 ">
            {item.checkList.map((label, index) => (
              <label key={index} className="border-b-2 last:border-none">
                <input
                className="mr-3 "
                  type="checkbox"
                  value={item.checkList[index]}
                  checked={checkedItems.includes(item.checkList[index])}
                  onChange={handleCheckboxChange}
                />
                {label}
              </label>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default SuperAdminChecklist;
