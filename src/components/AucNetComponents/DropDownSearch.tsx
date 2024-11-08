import React, { ChangeEvent, useState } from "react";
import { FaChevronDown } from "react-icons/fa";

interface ListDataItem {
  name: string;
  count: number;
}

interface DropDownSearchProps {
  options: ListDataItem[];
  customClass?: string;
  buttonClass?: string;
  optionBoxClass?: string;
  onSelectionChange?: (selectedItems: string[]) => void; // Callback for selected items
}

const DropDownSearch: React.FC<DropDownSearchProps> = ({
  options,
  customClass,
  buttonClass,
  optionBoxClass = "right-0",
  onSelectionChange,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [checkedItems, setCheckedItems] = useState<string[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [isAllChecked, setIsAllChecked] = useState(true);

  const filteredData = options.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Handle search term update
  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  // Handle individual item check/uncheck
  const handleCheckboxChange = (item: ListDataItem) => {
    setCheckedItems((prev) => {
      const newCheckedItems = prev.includes(item.name)
        ? prev.filter((checked) => checked !== item.name)
        : [...prev, item.name];

      updateAllCheckedState(newCheckedItems);
      notifySelectionChange(newCheckedItems);

      return newCheckedItems;
    });
  };

  // Handle "All" checkbox toggle
  const handleAllCheckboxChange = () => {
    const newCheckedItems = isAllChecked ? [] : options.map((item) => item.name);
    setCheckedItems(newCheckedItems);
    updateAllCheckedState(newCheckedItems);
    notifySelectionChange(newCheckedItems);
  };

  // Update "All" checkbox state based on current selection
  const updateAllCheckedState = (newCheckedItems: string[]) => {
    setIsAllChecked(newCheckedItems.length === options.length);
  };

  // Notify parent component of selection change
  const notifySelectionChange = (selectedItems: string[]) => {
    if (onSelectionChange) {
      onSelectionChange(selectedItems);
    }
  };

  // Toggle dropdown open/close
  const toggleDropdown = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <div className={`relative inline-block w-full text-left ${customClass}`}>
      <button
        onClick={toggleDropdown}
        className={`inline-flex justify-between gap-2 text-nowrap items-center w-full transition-all border border-gray-300 hover:border-gray-400 px-3 rounded-md shadow-sm focus:outline-none ${buttonClass}`}
      >
        <p className="overflow-hidden max-w-40 text-ellipsis">
          {checkedItems.length === 0 ? "All" : checkedItems.join(", ")}
        </p>
        <FaChevronDown size={12} className="text-gray-400 flex-shrink-0" />
      </button>

      {isOpen && (
        <div
          className={`origin-top-right absolute mt-2 w-full rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 ${optionBoxClass}`}
        >
          <div className="py-1 px-2 flex flex-col">
            <input
              type="text"
              placeholder="Search"
              value={searchTerm}
              onChange={handleSearchChange}
              className="pl-2 pr-4 py-2 rounded-md w-full bg-gray-100 outline-none"
            />

            {/* "All" Checkbox */}
            <div className="py-1 px-1 flex justify-between cursor-pointer transition-all hover:bg-gray-100">
              <label className="flex items-center justify-between w-full gap-2 cursor-pointer">
                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={isAllChecked}
                    onChange={handleAllCheckboxChange}
                    className="form-checkbox h-3 w-3 cursor-pointer"
                  />
                  <span>All</span>
                </div>
                <span className="text-transparent">{options.reduce((acc, item) => acc + item.count, 0)}</span>
              </label>
            </div>

            {/* Filtered options */}
            <div className="flex flex-col gap-2 py-2">
              {filteredData.length > 0 ? (
                filteredData.map((item, index) => (
                  <div
                    key={index}
                    className="py-1 px-1 flex justify-between cursor-pointer transition-all hover:bg-gray-100"
                  >
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={checkedItems.includes(item.name)}
                        onChange={() => handleCheckboxChange(item)}
                        className="form-checkbox h-3 w-3 cursor-pointer"
                      />
                      <span>{item.name}</span>
                    </label>
                    <span className="text-transparent">{item.count}</span>
                  </div>
                ))
              ) : (
                <p className="text-sm text-red-500">No results found</p>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DropDownSearch;
