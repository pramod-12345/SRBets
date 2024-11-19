import React from "react";
import navImages from "../../assets/svg/navbar";

const Search = () => {
  return (
    <div className="items-center gap-1 px-3 bg-themeBlack h-11 rounded-lg max-w-[32%] w-full hidden md:flex">
      <img src={navImages.searchIcon} alt="logo" className="w-4 h-4" />
      <input
        placeholder="Search game or sport"
        className="leading-normal bg-themeBlack text-sm text-white w-full px-2 outline-none"
      />
    </div>
  );
};

export default Search;
