import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const MenuItems = ({sidebarToggle, buttons, title}) => {
    const location = useLocation();
  return (
    <div
      className={`${sidebarToggle ? "p-[18px]" : "p-6"} ${title === "" ? 'pt-4' : '' } flex flex-col gap-3.5`}
    >
      {!sidebarToggle && title !== "" && (
        <h3 className="text-vintageRibbon text-xs font-bold mb-0.5 transition-all ease-in-out duration-1000">{ sidebarToggle ? '' : title}</h3>
      )}
      {buttons.map((button, index) => (
        <Link
          key={index}
          to={button.path}
        >
          <button
            style={{ color: button.color }}
            className={`text-start text-sm font-semibold bg-transparent transition-all ease-in-out duration-1000 ${
              location.pathname === button.path
                ? "text-white"
                : "text-vintageRibbon"
            } hover:text-[#664FFF] rounded flex items-center gap-3`}
          >
            <img src={button.icon} alt="" className="w-7 h-7" />
            {sidebarToggle ? "" : button.label}
          </button>
        </Link>
      ))}
    </div>
  )
}

export default MenuItems
