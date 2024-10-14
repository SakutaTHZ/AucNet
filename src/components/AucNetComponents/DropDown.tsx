import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

interface DropDownProps {
  options: string[];
  customClass?: string;
  optionClass?: string;
  optionBoxClass?:string;
  buttonClass?:string;
}

const DropDown: React.FC<DropDownProps> = ({ options, customClass,buttonClass, optionClass, optionBoxClass='right-0' }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(options[0]);

  const handleOptionClick = (option: string) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`relative inline-block w-full text-left ${customClass}`}>
      <button
        onClick={toggleDropdown}
        className={`inline-flex justify-between gap-2 text-nowrap items-center w-full bg-white border border-gray-300 hover:border-gray-400 px-3 rounded-md shadow-sm focus:outline-none ${buttonClass}`}
      >
        {selectedOption}
        <FaChevronDown size={12} className="text-gray-400 flex-shrink-0" />
      </button>

      {isOpen && (
        <div className={`origin-top-right absolute mt-2 w-full rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 ${optionBoxClass}`}>
          <div className="py-1">
            {options.map((option) => (
              <button
                key={option}
                onClick={() => handleOptionClick(option)}
                className={`block text-nowrap px-4 py-2 text-left w-full text-gray-700 hover:bg-gray-100 ${optionClass}`}
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default DropDown;
