import React from 'react'
import { useLocation } from 'react-router-dom'

const MenuItems = ({sidebarToggle, buttons, title}) => {
    const location = useLocation();
  return (
    <div
      className={`${sidebarToggle ? "p-[18px]" : "p-6"} ${title == "" ? 'pt-4' : '' } flex flex-col gap-3.5`}
    >
      {!sidebarToggle && title !== "" && (
        <h3 className="text-[#9298B4] text-xs font-bold mb-0.5 transition-all ease-in-out duration-1000">{ sidebarToggle ? '' : title}</h3>
      )}
      {buttons.map((button, index) => (
        <a
          key={index}
          // className={!sidebarToggle ? "" : "flex items-center justify-center"}
          href={button.path}
        >
          <button
            style={{ color: button.color }}
            className={`text-start text-sm font-semibold bg-transparent transition-all ease-in-out duration-1000 ${
              location.pathname === button.path
                ? "text-white"
                : "text-[#9298B4]"
            } hover:text-[#664FFF] rounded flex items-center gap-3`}
          >
            <img src={button.icon} alt="" className="w-7 h-7" />
            {sidebarToggle ? "" : button.label}
          </button>
        </a>
      ))}
    </div>
  )
}

export default MenuItems
