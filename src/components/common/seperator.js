import React from 'react'

const Seperator = ({color='yankeesBlue', hidden='block'}) => {
  return (
    <hr className={`border-${color} w-full h-px opacity-30 ${hidden}`} />
  )
}

export default Seperator
