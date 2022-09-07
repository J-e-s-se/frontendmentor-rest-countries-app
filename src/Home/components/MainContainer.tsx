import React from 'react'

const MainContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="text-[1rem] container mx-auto py-6 sm:py-12 px-[26px]">
      {children}
    </div>
  )
}

export default MainContainer
