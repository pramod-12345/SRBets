import React from 'react'

const Container = ({children}) => {
  return (
    <div className="px-4 py-6 sm:p-8 container mx-auto max-w-[1120px]">
      {children}
    </div>
  )
}

export default Container
