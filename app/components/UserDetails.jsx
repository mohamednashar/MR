import Image from 'next/image'
import React from 'react'

function UserDetails({img , name , email}) {
  return (
    <div className="border-b-2 items-center last:border-none pb-3 flex flex-row w-full   py-2 ">
      <Image
            width={200}
            height={200}
            class="rounded-[15px] w-[40px] h-[70px] object-cover  mr-4 "
            src={img}
            alt=""
          />
    <div className="flex flex-col items-start pt-2">
      <p className="text-[#2D3748] font-bold">{name}</p>
      <p className="text-[#718096]">{email}</p>
    </div>
  </div>
  )
}

export default UserDetails