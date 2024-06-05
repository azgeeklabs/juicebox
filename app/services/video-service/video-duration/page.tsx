import React from 'react'
import styles from "./videoDuration.module.css"
import Link from 'next/link'

const page = () => {
  return (
    <div>
      <div className={`${styles.videoDuration} w-full pt-20`}>
        <div className=" text-center mx-auto mb-[3vw]">
          <h2 className=" mb-[1.5vw]">
          How long would you like the video to be?</h2>
          <h4>
          Slide to your required video duration. If you're not sure, that's okay! We can help <hr className=" border-0" /> determine the ideal length for your project.
          </h4>
        </div>
        <div className=' rounded-[142px] bg-[#484848] w-[80%] h-[1.4vw] mx-auto relative mb-[1.5vw]'>
            <div className={`${styles.durationIndicator} absolute left-0 top-1/2 -translate-y-1/2 w-[10%] h-[140%] bg-black border-4 rounded-[35px] border-[#F8F24B] flex justify-center items-center cursor-pointer`}>0 mins 00 Secs</div>
        </div>
        <Link href={""} className=" underline block w-fit mx-auto px-[0.52vw] py-[0.3vw] hover:bg-[#484848] rounded-[32px] transition-all duration-200">I’m not sure</Link>

      </div>
    </div>
  )
}

export default page