import React from 'react'

const MainContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="text-[1rem] container mx-auto py-6 sm:py-12">
      <div className="px-3 sm:px-0">{children}</div>
    </div>
  )
}

export default MainContainer
