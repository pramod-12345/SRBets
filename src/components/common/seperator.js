import React from 'react'

const Seperator = ({color='yankeesBlue'}) => {
  return (
    <hr className={`border-${color} w-full h-px opacity-30`} />
  )
}

export default Seperator
