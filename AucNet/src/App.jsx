import { useState } from "react";
import "./App.css";
import {
  MdOutlineDirectionsCar,
  MdOutlineDateRange,
  MdBorderAll,
  MdTune,
  MdFavoriteBorder,
} from "react-icons/md";
import { FaSearch, FaListUl } from "react-icons/fa";
import { TbEngine, TbRoad } from "react-icons/tb";
import CustomDropdown from "./components/DropDown";
import AucNetNav from "./components/AucNetNav";
import AucNetCard from "./components/AucNetCard";

function App() {
  // Toggle view
  const [isTableView, setIsTableView] = useState(true);

  const toggleView = () => {
    setIsTableView(!isTableView);
  };
  // Toggle view

  // select box

  const options = [
    "Most relevant",
    "Date latest to oldest",
    "Date oldest to latest",
    "Price low to high",
    "Price high to low",
    "Mileage low to high",
    "Mileage high to low",
  ];
  // select box

  const cards = Array.from({ length: 20 });

  return (
    <>
      <AucNetNav />

      <div className="w-full h-fit px-32 pt-28 bg-slate-50">
        <div className="flex flex-col gap-8">
          <div className="w-full flex items-center justify-between">
            <h1 className="text-3xl text-neutral-900 font-bold">
              Cars For Sale
            </h1>
            <div className="flex gap-2 items-center">
              <p>
                Showing <b>1-20</b> of <b>2,420</b> listings
              </p>
              <div className="flex items-center space-x-2 border-l border-l-gray-300 pl-3">
                <button
                  onClick={() => setIsTableView(false)}
                  className={`flex items-center p-2 rounded-md transition ${
                    !isTableView
                      ? "bg-amber-200 border border-yellow-400"
                      : "hover:bg-amber-100"
                  }`}
                >
                  <MdBorderAll size={18} />
                </button>
                <button
                  onClick={() => setIsTableView(true)}
                  className={`flex items-center p-2 rounded-md transition ${
                    isTableView
                      ? "bg-amber-200 border border-yellow-400"
                      : "hover:bg-amber-100"
                  }`}
                >
                  <FaListUl size={16} />
                </button>
              </div>
            </div>
          </div>
          <div className="w-full flex items-center justify-between gap-4">
            <button className="flex gap-1 items-center border border-gray-300 py-2.5 px-6 rounded-3xl shadow-sm">
              <MdTune size={18} />
              Filters
            </button>
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Search by Make or Model"
                className="pl-10 pr-4 py-2 rounded-md w-full outline-none border border-gray-300"
              />
              <FaSearch className="absolute left-3 top-3.5 text-gray-600" />
            </div>
            <CustomDropdown
              options={options}
              customClass="my-custom-class"
              optionClass="my-option-class"
            />
          </div>
        </div>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full h-full mt-8">
          {cards.map((_, index) => (
            <AucNetCard key={index} />
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
