"use client"
import NextPrevNav from '@/app/_components/NextPrevNav/NextPrevNav'
import React from 'react'
import styles from "./durationOfVideo.module.css"
import CustomTypeRange from '@/app/_components/customTypeRange/CustomTypeRange'

const page = () => {
  return (
    // Custom component for navigation between pages, passing props for the next and back links
<NextPrevNav nextLink="/services/content-scripts/estimated-cost" backLink="/services/content-scripts/choose-niche" >
    {/* Main container for the content, styled using Tailwind CSS and custom styles */}
    <div className={`${styles.durationVideo} w-full h-full flex justify-center items-center`}>
        <div className='w-full'>
            {/* Container for the heading and description */}
            <div className="mb-[--sy-64px]">
                {/* Heading for the section, centered text */}
                <h2 className="mb-[--sy-10px] text-[--32px] font-semibold text-center">
                    Do you have a specific niche for your video?
                </h2>
                {/* Description paragraph, centered text */}
                <p className="text-[--18px] text-center">
                    Specifying your niche enables us to tailor our approach for <br />
                    maximum impact and engagement.
                </p>
            </div>
            {/* Container for the custom input component, centered with margin */}
            <div className='w-[70%] mx-auto mb-[--sy-18px]'>
                {/* Custom range input component, passing props for word and max value */}
                <CustomTypeRange word='min' max={60}/>
            </div>
            {/* Display of the current word count, styled with background, text color, and padding */}
            <span className='block w-fit mx-auto bg-[#484848] text-white rounded-[--10px] px-[--20px] py-[--sy-10px]'>
                Word Count: 200
            </span>
        </div>
    </div>
</NextPrevNav>

  )
}

export default page