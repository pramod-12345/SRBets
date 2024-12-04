import React, { useEffect, useRef, useState } from "react";
import MenuItems from "./menuItems";
import { menuData } from "../../data";
import { CommonButton } from "components";
import { useNavigate } from "react-router-dom";

const SidebarContent = ({ sidebarToggle }) => {
  const navigate = useNavigate();
  return (
    <div className="animate-bottomToTop">
      <div className="p-[18px] pb-0 pt-[1.812rem] flex flex-col gap-4 transition-all ease-in-out duration-500">
        {menuData.mainButtons.buttons.map((button, index) => (
          <CommonButton
            key={index}
            label={sidebarToggle ? null : button?.label}
            icon={button.icon}
            type={button?.type}
            onClick={() => navigate(button?.path)}
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
    </div>
  );
};

const Sidebar = ({ sidebarToggle }) => {
  const [isCollapsed, setIsCollapsed] = useState(sidebarToggle);
  const [isCalculating, setIsCalculating] = useState(false);
  const sidebarRef = useRef(null);

  useEffect(() => {
    let animationTimeout;

    const handleSidebarChange = () => {
      if (sidebarRef.current) {
        setIsCalculating(true);

        clearTimeout(animationTimeout);
        animationTimeout = setTimeout(() => {
          const width = sidebarRef.current.offsetWidth;
          setIsCollapsed(width <= 120);
          setIsCalculating(false);
        }, 500);
      }
    };

    const observer = new MutationObserver(handleSidebarChange);
    if (sidebarRef.current) {
      observer.observe(sidebarRef.current, {
        attributes: true,
        attributeFilter: ["style", "class"],
      });
    }

    // Cleanup
    return () => {
      clearTimeout(animationTimeout);
      if (observer) observer.disconnect();
    };
  }, []);

  return (
    <aside
      ref={sidebarRef}
      style={{
        maxHeight: "calc(100vh - 72px)",
        minHeight: "calc(100vh - 72px)",
      }}
      className={`hidden sidebar-main no-scrollbar bg-blackRussian text-white h-full md:flex flex-col overflow-auto ${
        sidebarToggle ? "min-w-[72px] w-[72px]" : "min-w-[260px] w-[260px]"
      } transition-all ease-in-out duration-300`}
    >
      {isCalculating ? null : isCollapsed ? (
        <SidebarContent sidebarToggle={true} />
      ) : (
        <SidebarContent />
      )}
    </aside>
  );
};

export default Sidebar;
