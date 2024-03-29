"use client"
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import React from 'react'



function UserDetails({img , name , email}) {
  const pathname=usePathname()
  return (
<div className={`items-center ${pathname !== "/Checklisten" ? 'border-b-2' : ''} last:border-none pb-3 flex flex-row w-full py-2`}>      <Image
            width={200}
            height={200}
            class="rounded-[15px] w-[28px] h-[40px] object-cover mr-4 "
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