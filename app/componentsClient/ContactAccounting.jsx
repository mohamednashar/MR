import Image from "next/image";
import React from "react";

const ContactAccounting = () => {
  return (
    <div className="bg-white mt-5 p-5 shadow-lg">
      <div className="flex items-center gap-4 border-b-2 pb-2">
        <div>
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.5 24C10.5 24 9 24 9 22C9 20 10.5 14 16.5 14C22.5 14 24 20 24 22C24 24 22.5 24 22.5 24H10.5ZM16.5 12C17.6935 12 18.8381 11.3679 19.682 10.2426C20.5259 9.11742 21 7.5913 21 6C21 4.4087 20.5259 2.88258 19.682 1.75736C18.8381 0.632141 17.6935 0 16.5 0C15.3065 0 14.1619 0.632141 13.318 1.75736C12.4741 2.88258 12 4.4087 12 6C12 7.5913 12.4741 9.11742 13.318 10.2426C14.1619 11.3679 15.3065 12 16.5 12ZM7.824 24C7.60163 23.3756 7.49074 22.6911 7.5 22C7.5 19.29 8.52 16.5 10.404 14.56C9.46364 14.1737 8.48392 13.9847 7.5 14C1.5 14 0 20 0 22C0 24 1.5 24 1.5 24H7.824ZM6.75 12C7.74456 12 8.69839 11.4732 9.40165 10.5355C10.1049 9.59785 10.5 8.32608 10.5 7C10.5 5.67392 10.1049 4.40215 9.40165 3.46447C8.69839 2.52678 7.74456 2 6.75 2C5.75544 2 4.80161 2.52678 4.09835 3.46447C3.39509 4.40215 3 5.67392 3 7C3 8.32608 3.39509 9.59785 4.09835 10.5355C4.80161 11.4732 5.75544 12 6.75 12Z"
              fill="#3AB3B3"
            />
          </svg>
        </div>
        <div>
          <p className="text-[#265E73]">MEINE ANSPRECHPARTNER</p>
        </div>
      </div>

      <div className=" border-b-2 last:border-b-0">
        <div className="flex py-2 border-gray-500 items-center pb-5 gap-2">
          <div className="rounded-full">
            <img
              className="rounded-full object-cover w-12 h-12"
              src="https://img.freepik.com/free-photo/close-up-portrait-young-man-isolated-black-studio-background-photoshot-real-emotions-male-model-crying-throught-laughting-smiling-facial-expression-human-emotions-concept_155003-25587.jpg?size=626&ext=jpg&ga=GA1.1.325557094.1702475920&semt=ais"
              alt=""
            />
          </div>

          <div className="flex flex-col items-start pt-2">
            <p className="text-lg">Alexa Liras</p>
            <p className="text-[#718096] text-sm">alexa@simmmple.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactAccounting;
