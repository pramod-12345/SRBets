import React from 'react'

const Seperator = ({color='yankeesBlue'}) => {
  return (
    <hr className={`bg-${color} w-full h-px opacity-30`} />
  )
}

export default Seperator
