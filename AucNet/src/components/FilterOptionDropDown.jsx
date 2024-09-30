import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import { MdClose } from "react-icons/md";
import { LuUndoDot } from "react-icons/lu";

function FilterOptionDropDown({ boxName="Data", listData, customClass, placeholder="Search here" }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [checkedItems, setCheckedItems] = useState([]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [showAllChecked, setShowAllChecked] = useState(false);

  // Function to handle input change
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  // Handle checkbox change
  const handleCheckboxChange = (item) => {
    if (checkedItems.includes(item.name)) {
      setCheckedItems(checkedItems.filter((checked) => checked !== item.name));
    } else {
      setCheckedItems([...checkedItems, item.name]);
    }
  };

  // Remove item from checked list
  const handleRemoveCheckedItem = (item) => {
    setCheckedItems(checkedItems.filter((checked) => checked !== item));
  };

  // Filter the listData based on the search term
  const filteredData = listData.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Function to toggle showing all checked items
  const toggleShowAllChecked = () => {
    setShowAllChecked(!showAllChecked);
  };

  return (
    <div className={`flex flex-col gap-1 px-4 py-2.5 ${customClass}`}>
      <div className={`flex items-center justify-between w-full`} 
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
        <b>{boxName}</b>
        {isDropdownOpen ? (
          <FaChevronDown
            size={14}
            className="text-gray-400 cursor-pointer rotate-180 transition-all duration-500"
          />
        ):(
          <FaChevronDown
            size={14}
            className="text-gray-400 cursor-pointer transition-all duration-500"
          />
        )}
      </div>

      {isDropdownOpen && (
        <div className="content flex flex-wrap gap-2">
          <input
            type="text"
            placeholder={placeholder}
            value={searchTerm}
            onChange={handleSearchChange}
            className="pl-2 pr-4 py-2 rounded-md w-full bg-gray-100 outline-none"
          />
          <div className="brand-list w-full">
            {filteredData.length > 0 ? (
              filteredData.map((item, index) => (
                <div
                  key={index}
                  className="flex justify-between cursor-pointer transition-all hover:bg-gray-100"
                >
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={checkedItems.includes(item.name)}
                      onChange={() => handleCheckboxChange(item)}
                      className="form-checkbox h-3 w-3 hue-rotate-[185deg] opacity-80 cursor-pointer"
                    />
                    <span>{item.name}</span>
                  </label>
                  <span className="text-gray-500">{item.count}</span>
                </div>
              ))
            ) : (
              <p className="text-sm text-red-500">No results found</p>
            )}
          </div>
        </div>
      )}

      {/* Checked items box with "3 more..." and "Collapse" logic */}
      {!isDropdownOpen && checkedItems.length > 0 && (
        <div className="checked-box flex flex-wrap gap-1 mt-2">
          {checkedItems.slice(0, 3).map((item, index) => (
            <div
              key={index}
              onClick={() => handleRemoveCheckedItem(item)}
              className="flex gap-1 items-center bg-gray-100 w-fit px-2 rounded-full shadow-sm hover:bg-gray-200 cursor-pointer transition"
            >
              {item}
              <MdClose size={14} className="text-gray-600 hover:text-gray-800" />
            </div>
          ))}

          {/* Show '3 more' if there are more than 3 items */}
          {checkedItems.length > 3 && !showAllChecked && (
            <button
              onClick={toggleShowAllChecked}
              className="text-blue-500 bg-blue-100 px-2 rounded-full text-sm cursor-pointer"
            >
              {checkedItems.length - 3} more...
            </button>
          )}

          {/* Show remaining items and collapse button */}
          {showAllChecked && (
            <>
              {checkedItems.slice(3).map((item, index) => (
                <div
                  key={index}
                  onClick={() => handleRemoveCheckedItem(item)}
                  className="flex gap-1 items-center bg-gray-100 w-fit px-2 rounded-full shadow-sm hover:bg-gray-200 cursor-pointer transition"
                >
                  {item}
                  <MdClose
                    size={14}
                    className="text-gray-600 hover:text-gray-800"
                  />
                </div>
              ))}
              <button
                onClick={toggleShowAllChecked}
                className="text-blue-500 text-sm cursor-pointer mt-1 bg-blue-100 px-2 rounded-full"
              >
                <LuUndoDot />
              </button>
            </>
          )}
        </div>
      )}
    </div>
  );
}

export default FilterOptionDropDown;
