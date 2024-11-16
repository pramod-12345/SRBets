import React from "react";
import MenuItems from "./menuItems";
import { menuData } from "../../contant";
import CommonButton from "../common/button";

const Sidebar = ({ sidebarToggle }) => {
  return (
    <aside
      style={{ maxHeight: "calc(100vh - 72px)"}}
      className={`hidden sidebar-main no-scrollbar bg-gray-900 text-white h-full md:flex flex-col overflow-auto ${
        sidebarToggle ? "w-[72px]" : "w-[260px]"
      } transition-all ease-in-out duration-500`}
    >
      <div
        className={`${
          sidebarToggle ? "p-[18px]" : "p-6"
        } pb-0 pt-[1.812rem] flex flex-col gap-4 transition-all ease-in-out duration-500`}
      >
        {menuData.mainButtons.buttons.map((button, index) => (
          <CommonButton
            key={index}
            imageStyle={"w-4 h-4"}
            label={sidebarToggle ? null : button?.label}
            icon={button.icon}
            type={button?.type}
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
