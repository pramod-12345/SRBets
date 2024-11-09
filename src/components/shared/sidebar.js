import React from "react";
import MenuItems from "./menuItems";
import { menuData } from "../../contant";
import CommonButton from "../common/button";

const Sidebar = ({ sidebarToggle }) => {
  return (
    <aside
      className={`hidden sidebar-main no-scrollbar bg-gray-900 text-white h-full ${
        sidebarToggle ? "w-[72px]" : "w-[260px]"
      } md:flex flex-col fixed overflow-auto transition-all ease-in-out duration-500`}
    >
      <div
        className={`${
          sidebarToggle ? "p-[18px]" : "p-6"
        } pb-0 pt-[1.812rem] flex flex-col gap-4`}
      >
        {menuData.mainButtons.buttons.map((button, index) => (
          <CommonButton
            key={index}
            bgColor={button.color}
            imageStyle={"w-4 h-4"}
            label={sidebarToggle ? null : button.label}
            icon={button.icon}
            style={`${
              sidebarToggle ? "py-2.5 px-0" : "p-2.5"
            } rounded-lg max-w-44 w-full h-9 gap-3 text-sm`}
          />
        ))}
      </div>
      <MenuItems
        sidebarToggle={sidebarToggle}
        buttons={menuData.accountButtons.buttons}
        title={menuData.accountButtons.title}
      />
      <hr className="bg-lightgrey w-full h-[.2px] opacity-10" />
      <MenuItems
        sidebarToggle={sidebarToggle}
        buttons={menuData.sportsButtons.buttons}
        title={menuData.sportsButtons.title}
      />
      <hr className="bg-lightgrey w-full h-[.2px] opacity-10" />
      <MenuItems
        sidebarToggle={sidebarToggle}
        buttons={menuData.allCasinos.buttons}
        title={menuData.allCasinos.title}
      />
    </aside>
  );
};

export default Sidebar;
