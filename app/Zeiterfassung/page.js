"use client";
import React, { useState } from "react";
import { Select, Option } from "@material-tailwind/react";

const users = [
  {
    name: "Usama Rabie",
    email: "usamarabie21@gmail.com",
    img: "https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    name: "Mohamed Alaa",
    email: "aboAlaa@gmail.com",
    img: "https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
];
function Zeiterfassung() {
  const [selectedUser, setSelectedUser] = useState([]);
  const [minOneUser, setMinOneUser] = useState(false);
  const [newClient,setNewClient]=useState(true)
  const handleSelect = (value) => {
    const selected = users.find((user) => user.email === value);
    setSelectedUser([...selectedUser, selected]);
    setMinOneUser(true);
    setNewClient(false);
  };
  const handleAddNewClient=()=>{
    setNewClient(!newClient)
  }

  return (
    <div className="w-full md:w-[80%] mx-auto p-5 bg-white rounded-[15px]">

      <div className="flex gap-5 items-center justify-around my-10">
        <div>
          <label className="text-lg text-[#265E73] mr-3" htmlFor="Schild">Schild</label>
          <input type="text" name="Schild" id="Schild" className="border border-[#265E739C] w-16" />
        </div>
        <div>
          <label className="text-lg text-[#265E73] mr-3" htmlFor="Monat">Monat</label>
          <input type="text" name="Monat" id="Monat" className="border border-[#265E739C] w-16" />
        </div>
        <div>
          <label className="text-lg text-[#265E73] mr-3" htmlFor="Beginn">Beginn</label>
          <input type="text" name="Beginn" id="Beginn" className="border border-[#265E739C] w-16" />
        </div>
      </div>

      <div className="flex gap-5 items-center justify-around my-10">
        <div>
          <label className="text-lg text-[#265E73] mr-3" htmlFor="Pause">Pause</label>
          <input type="text" name="Pause" id="Pause" className="border border-[#265E739C] w-16" />
        </div>
        <div>
          <label className="text-lg text-[#265E73] mr-3" htmlFor="Ende">Ende</label>
          <input type="text" name="Ende" id="Ende" className="border border-[#265E739C] w-16" />
        </div>
      </div>

      <div className="flex flex-col gap-3 mx-10">
        <label className="text-xl text-[#265E73] mr-3" htmlFor="Bemerkungen">Bemerkungen</label>
        <textarea
          name="Ende"
          id="Ende"
          className="border border-[#265E739C] w-[420px] h-[171px] rounded-[10px]"
        />
      </div>


      {
          selectedUser && (
        <div>
            <div className="flex flex-col gap-5 items-center my-10  w-[400px]">
              {
                selectedUser.map((item)=>{
                  return(
                    <div className="flex border-2 w-full" key={item.email}>
                    <img
                    src={item.img}
                    alt={item.name}
                    className="h-10 w-10 rounded-full object-cover"
                  />
              
                  <div>
                      <p>{item.name}</p>
                      <p className="text-gray-400"> {item.email}</p>
                  </div>
                  </div>
                
                  )
                })
              }
              </div> 
        </div>
        )
            }
      
      
      
    

      
      
  
      {newClient && (
        <div className="w-72 my-20">
          <Select
            size="lg"
            label="Klient"
            onChange={(e) => handleSelect(e)}
          >
            {users.map(({ name , email, img }) => (
              <Option
                key={email}
                value={email}
                className="flex items-center gap-2"
              >
                <img
                  src={img}
                  alt={name}
                  className="h-8 w-8 rounded-full object-cover"
                />
              <div className="flex flex-col">
                  <span className="text-black">{name}</span>
                  
                  <span className="text-gray-500">{email}</span>
              </div>
              </Option>
            ))}
          </Select>
        </div>
      )}









{ minOneUser && <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span>Hinzufügen</span>
              <button onClick={handleAddNewClient}>
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 22 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20.1667 0H1.83333C1.3471 0 0.880787 0.193154 0.536971 0.536971C0.193154 0.880787 0 1.3471 0 1.83333V20.1667C0 20.6529 0.193154 21.1192 0.536971 21.463C0.880787 21.8068 1.3471 22 1.83333 22H20.1667C20.6529 22 21.1192 21.8068 21.463 21.463C21.8068 21.1192 22 20.6529 22 20.1667V1.83333C22 1.3471 21.8068 0.880787 21.463 0.536971C21.1192 0.193154 20.6529 0 20.1667 0ZM17.4167 11.9167H11.9167V17.4167C11.9167 17.6598 11.8201 17.8929 11.6482 18.0648C11.4763 18.2368 11.2431 18.3333 11 18.3333C10.7569 18.3333 10.5237 18.2368 10.3518 18.0648C10.1799 17.8929 10.0833 17.6598 10.0833 17.4167V11.9167H4.58333C4.34022 11.9167 4.10706 11.8201 3.93515 11.6482C3.76324 11.4763 3.66667 11.2431 3.66667 11C3.66667 10.7569 3.76324 10.5237 3.93515 10.3518C4.10706 10.1799 4.34022 10.0833 4.58333 10.0833H10.0833V4.58333C10.0833 4.34022 10.1799 4.10706 10.3518 3.93515C10.5237 3.76324 10.7569 3.66667 11 3.66667C11.2431 3.66667 11.4763 3.76324 11.6482 3.93515C11.8201 4.10706 11.9167 4.34022 11.9167 4.58333V10.0833H17.4167C17.6598 10.0833 17.8929 10.1799 18.0648 10.3518C18.2368 10.5237 18.3333 10.7569 18.3333 11C18.3333 11.2431 18.2368 11.4763 18.0648 11.6482C17.8929 11.8201 17.6598 11.9167 17.4167 11.9167Z"
                    fill="#4FD1C5"
                  />
                </svg>
              </button>
            </div>

            <button type="submit" className="bg-[#65D7CC] p-3 rounded-3xl text-white">einreichen</button>
          </div>
          }
    </div>
  );
}

export default Zeiterfassung;
