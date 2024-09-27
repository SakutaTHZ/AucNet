import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";

function SearchBox({customClass,iconSize,placeholder = "Search"}) {

  return (
    <div className="relative flex items-center justify-center">
      <input
        type="text"
        placeholder={placeholder}
        className={`pl-8 pr-4 py-1 rounded-md w-72 bg-gray-50 outline-non ${customClass}`}
      />
      <FaSearch size={iconSize} className={`absolute left-3 text-gray-600`} />
    </div>
  );
}

export default SearchBox;
