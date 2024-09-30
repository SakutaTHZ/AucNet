import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import { MdClose } from "react-icons/md";

function FilterClearDropDown({ customClass, boxName = "Data", listData }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [checkedItems, setCheckedItems] = useState([]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [showAllChecked, setShowAllChecked] = useState(false);
  const [selectAll, setSelectAll] = useState(false); // State for select all

  // Handle search term change
  const handleSearchChange = (e) => setSearchTerm(e.target.value);

  // Handle checkbox change
  const handleCheckboxChange = (item) => {
    setCheckedItems((prev) =>
      prev.includes(item.name)
        ? prev.filter((checked) => checked !== item.name)
        : [...prev, item.name]
    );
  };

  // Remove checked item
  const handleRemoveCheckedItem = (item) => {
    setCheckedItems((prev) => prev.filter((checked) => checked !== item));
  };

  // Select all/none toggle
  const handleSelectAllChange = () => {
    setCheckedItems(selectAll ? [] : listData.map((item) => item.name));
    setSelectAll(!selectAll);
  };

  // Filter listData based on search term
  const filteredData = listData.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Toggle show more/less for checked items
  const toggleShowAllChecked = () => setShowAllChecked(!showAllChecked);

  return (
    <div className={`flex flex-col gap-1 px-4 py-2.5 ${customClass}`}>
      <div
        className="flex items-center justify-between w-full"
        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
      >
        <b>{boxName}</b>
        <FaChevronDown
          size={14}
          className={`text-gray-400 cursor-pointer transition-all duration-500 ${
            isDropdownOpen ? "rotate-180" : ""
          }`}
        />
      </div>

      {isDropdownOpen && (
        <div className="flex flex-wrap gap-2">
          <div className="w-full pt-2 flex justify-between">
            <p className="text-gray-600 font-semibold text-sm">All {boxName}</p>
            <label class="inline-flex items-center cursor-pointer">
              <input type="checkbox" value="" class="sr-only peer" 
              onChange={handleSelectAllChange}/>
              <div class="relative w-9 h-5 bg-gray-200 peer-focus:outline-none  rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-yellow-500"></div>
            </label>
          </div>
          <div className="brand-list w-full">
            {filteredData.length ? (
              filteredData.map((item, index) => (
                <div
                  key={index}
                  className="flex justify-between cursor-pointer hover:bg-gray-100"
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

      {!isDropdownOpen && checkedItems.length > 0 && (
        <div className="checked-box flex flex-wrap gap-1 mt-2">
          {checkedItems.slice(0, 3).map((item, index) => (
            <div
              key={index}
              onClick={() => handleRemoveCheckedItem(item)}
              className="flex gap-1 items-center bg-gray-100 px-2 rounded-full shadow-sm cursor-pointer"
            >
              {item}
              <MdClose size={14} className="text-gray-600" />
            </div>
          ))}
          {checkedItems.length > 3 && !showAllChecked && (
            <button
              onClick={toggleShowAllChecked}
              className="text-blue-500 bg-blue-100 px-2 rounded-full text-sm"
            >
              {checkedItems.length - 3} more...
            </button>
          )}
          {showAllChecked && (
            <>
              {checkedItems.slice(3).map((item, index) => (
                <div
                  key={index}
                  onClick={() => handleRemoveCheckedItem(item)}
                  className="flex gap-1 items-center bg-gray-100 px-2 rounded-full shadow-sm cursor-pointer"
                >
                  {item}
                  <MdClose size={14} className="text-gray-600" />
                </div>
              ))}
              <button
                onClick={toggleShowAllChecked}
                className="text-blue-500 text-sm bg-blue-100 px-2 rounded-full"
              >
                Collapse
              </button>
            </>
          )}
        </div>
      )}
    </div>
  );
}

export default FilterClearDropDown;
