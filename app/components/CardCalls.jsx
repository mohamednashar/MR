"use client"
import React from "react";
import User from "@/app/components/User";




const CardCalls = () => {
 

  return (
    <>
    
    <div className="bg-white p-5 rounded-[15px] w-[85%] mx-auto border-2 border-solid">
      
      <div className="flex justify-between border-b-2 pb-5">
      <div >   
   
    <div className="relative">
      <div className="absolute inset-y-0 flex items-center pointer-events-none end-0">
      <svg className="w-16 h-16" viewBox="0 0 58 23" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M27.7924 18.6219C32.2173 18.6219 35.8045 15.0347 35.8045 10.6098C35.8045 6.18481 32.2173 2.59767 27.7924 2.59767C23.3674 2.59767 19.7803 6.18481 19.7803 10.6098C19.7803 15.0347 23.3674 18.6219 27.7924 18.6219Z" stroke="#2D3748" stroke-width="1.33535" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M34.852 19.236C35.3238 20.6603 36.401 20.8028 37.2289 19.5564C37.9856 18.4169 37.4871 17.4822 36.1161 17.4822C35.1013 17.4733 34.5315 18.2656 34.852 19.236Z" stroke="#2D3748" stroke-width="1.33535" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

      </div>
      <input type="search" id="default-search" className="placeholder-[#265E73]  block w-full p-4 ps-5 text-sm  border border-gray-300 rounded-[15px] bg-gray-50"  placeholder="suchen" required />
    </div>
  </div>


        <div className="space-x-8">
          
       
        <button className="bg-gray-100 text-[#265E73] rounded-xl px-6 py-3">
        Anrufsverlauf
          </button>
     
          
        

      
        </div>
      </div>

      <User
        img={
          "https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
        }
        name={"usama"}
        email={"usamarabie21@gmail.com"}
      />
      <User
        img={
          "https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
        }
        name={"usama"}
        email={"usamarabie21@gmail.com"}
      />
      <User
        img={
          "https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
        }
        name={"usama"}
        email={"usamarabie21@gmail.com"}
      />

      <User
        img={
          "https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
        }
        name={"usama"}
        email={"usamarabie21@gmail.com"}
      />
    </div>
    </>
  );
};

export default CardCalls;
