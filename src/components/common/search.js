import React from "react";
import navImages from "../../assets/svg/navbar";

const Search = ({ variant = "default", bgColor = "bg-themeBlack" }) => {
  const widthClass =
    variant === "full" ? "w-full" : "max-w-[32%]";

  return (
    <div
      className={`items-center gap-1 px-3 h-11 rounded-lg w-full ${widthClass} ${bgColor} hidden md:flex`}
    >
      <img src={navImages.searchIcon} alt="logo" className="w-4 h-4" />
      <input
        placeholder="Search game or sport"
        className="leading-normal bg-transparent text-sm text-white w-full px-2 outline-none"
      />
    </div>
  );
};

export default Search;
