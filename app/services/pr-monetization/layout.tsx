import StepProgress from '@/app/_components/stepProgress/StepProgress'
import React from 'react'

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col justify-between h-full">
      <StepProgress
        title={"Video Editing"}
        currentStep={0}
        steps={0}
      />

      <div className="grow">{children}</div>

      
    </div>
  )
}

export default layout