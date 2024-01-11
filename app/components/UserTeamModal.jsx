"use client";
import Image from "next/image";

function UserTeamModal({ img, name, email, icon }) {
  return (
    <div className=" w-full mx-auto bg-white border-b-2 last:border-b-0 ">
      <div className="flex w-full items-center justify-between bg-white py-2  cursor-default ">
        <div className="flex flex-row w-full  border-solid  border-gray-500 ">
          <Image
            width={200}
            height={200}
            class="rounded-[15px] w-[30px] h-[50px] object-cover mr-4"
            src={img}
            alt=""
          />
          <div className="flex justify-between grow items-center">
            <div className="flex flex-col items-start pt-2 ">
              <p className="text-[#2D3748] font-bold">{name}</p>
              <p className="text-[#718096]">{email}</p>
            </div>
           
          </div>
        </div>

        <div className="ml-44 ">
          <div className="flex items-center gap-5">
           
              {icon === "plus" ? (
                <svg
                  className="hover:rotate-90 transition-all duration-200"
                  width="22"
                  height="22"
                  viewBox="0 0 24 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M22 13C15.1276 13 -5.48921 13 1.3832 13C5.53068 13 9.66516 13 13.8061 13"
                    stroke="#3AB3B3"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                  <path
                    d="M12 2C12 9.18479 12 30.7387 12 23.5539C12 19.2179 12 14.8955 12 10.5663"
                    stroke="#3AB3B3"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                </svg>
              ) : icon === "leader" ? (

                <div className="flex items-center gap-6 rounded-full bg-white ">
                  <div className="bg-[#F8F9FA] p-3 rounded-full">
                  <svg
                    width="25"
                    height="25"
                    viewBox="0 0 20 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2.50844 12.6047C2.50844 10.9405 2.50844 9.27627 2.50844 7.61206C2.50844 7.0092 2.34591 6.14679 2.53073 5.56151C2.76211 4.82883 3.32393 4.10106 3.69717 3.42923C3.99576 2.89176 4.5426 2.62212 5.12364 2.5154C7.54555 2.07056 8.99737 2.7813 11.1118 4.10532C12.5604 5.01237 13.7692 5.86992 14.7226 7.30002C15.056 7.80018 15.3928 8.27583 15.7256 8.80821C15.8416 8.99376 16.5379 7.71813 16.6023 7.58234C16.7969 7.17148 16.9414 6.73902 17.1149 6.31932C17.2362 6.02602 17.296 5.18873 17.4864 5.44263C17.6543 5.66651 17.4864 6.00233 17.4864 6.28217C17.4864 7.04754 17.4879 7.81297 17.4567 8.5779C17.4391 9.00828 17.6689 10.339 16.9366 10.1604C14.7965 9.63842 13.0645 8.18805 11.0673 7.38917"
                      stroke="#3AB3B3"
                      stroke-width="3"
                      stroke-linecap="round"
                    />
                  </svg>
                  </div>
                  <p className="text-[#68717B]">Teamleiter für Team 4</p>
                </div>
              ) : (
                <svg
                  width="24"
                  height="4"
                  viewBox="0 0 24 4"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M22 2C15.1276 2 -5.48921 2 1.3832 2C5.53068 2 9.66516 2 13.8061 2"
                    stroke="#3AB3B3"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                </svg>
              )}
  
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserTeamModal;
