import React from 'react'
import CustomCheckBox from '../../customCheckBox/CustomCheckBox'

export default function Task() {
  return (
    <div className='flex justify-between items-center'>
        <div className='flex items-center gap-[1vw] w-[70%]'>
            <CustomCheckBox />
              <p className=''>Sign Up Flow for application on boarding</p>
        </div>

        <div className='flex items-center gap-[0.5vw] w-[15%]'>
            <span className='bg-[#F2A196] h-[18px] w-[18px] rounded-full'></span>
            <span>Designer 1</span>
        </div>

        <div className='w-[15%] flex justify-end'>
        <span className='bg-[#717171] px-[20px] py-[5px] rounded-full text-[12px] font-medium'>
        In progress
        </span>
        </div>
    </div>
  )
}
