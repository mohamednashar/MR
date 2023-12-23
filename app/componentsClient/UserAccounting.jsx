import Image from "next/image";

function UserAccounting({ img, name, date }) {
  return (
    <div className=" border-b-2 last:border-b-0">

      <div className="flex py-2 border-gray-500 items-center pb-5">

        <div className="rounded-full bg-[#ECECEC] text-[#3AB3B3] px-4 py-2 mr-2">
          {img}
        </div>
        
        <div className="flex flex-col items-start pt-2">
          <p className="text-[#265E73] text-lg">{name}</p>
          <p className="text-[#00000033] text-sm">{date}</p>
        </div>
        
      </div>
    </div>
  );
}

export default UserAccounting;
