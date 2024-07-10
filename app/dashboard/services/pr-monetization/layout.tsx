import StepProgress from '@/app/_components/stepProgress/StepProgress'
import React from 'react'

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col justify-between h-full">
      <StepProgress
        title={"PR Monetization"}
        // currentStep={step}
        steps={5}
      />

      <div className="grow">{children}</div>

      
    </div>
  )
}

export default layout