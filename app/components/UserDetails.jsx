import Image from 'next/image'
import React from 'react'

function UserDetails({img , name , email}) {
  return (
    <div className="flex flex-row w-full   py-2 ">
    <Image
      width={50}
      height={200}
      class="inline-block rounded-xl ring-2 ring-white mr-4 "
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