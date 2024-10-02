import React from "react";
import { FaSearch } from "react-icons/fa";

interface SearchBoxProps {
  customClass?: string;
  iconSize?: number;
  placeholder?: string;
}

const SearchBox: React.FC<SearchBoxProps> = ({
  customClass = "",
  iconSize = 16,
  placeholder = "Search",
}) => {
  return (
    <div className="relative flex items-center justify-center">
      <input
        type="text"
        placeholder={placeholder}
        className={`pl-8 pr-4 py-1 rounded-md w-72 bg-gray-50 outline-none ${customClass}`}
      />
      <FaSearch size={iconSize} className="absolute left-3 text-gray-600" />
    </div>
  );
};

export default SearchBox;