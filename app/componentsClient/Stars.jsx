"use client"
import React from 'react'
import { Rating } from "@material-tailwind/react";

const Stars = () => {
  return (
    <div className='text-center p-5 bg-white shadow-md'>
        <div className='border-b-2 pb-6'>
            <p className='text-[#0E2E3A] text-sm'>Wie zufrieden sind Sie derzeit mit MR FINCONSULTING?</p>
        </div>
        <Rating className='w-[70%] justify-between mt-3 stars' value={0}/>
    </div>
  )
}

export default Stars