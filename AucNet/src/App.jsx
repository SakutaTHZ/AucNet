import { useState } from "react";
import "./App.css";
import { MdBorderAll, MdTune, MdClose } from "react-icons/md";
import { FaListUl, FaChevronDown } from "react-icons/fa";
import CustomDropdown from "./components/DropDown";
import AucNetNav from "./components/AucNetNav";
import AucNetCard from "./components/AucNetCard";
import RangeSlider from "./components/RangeSlider";
import FilterOptionDropDown from "./components/FilterOptionDropDown";

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
  const makeBrandData = [
    { name: "Acura", count: 14 },
    { name: "Alfa Romeo", count: 53 },
    { name: "Aston Martin", count: 74 },
    { name: "Audi", count: 23 },
    { name: "Bentley", count: 34 },
    { name: "BMW", count: 43 },
  ];
  const modelData = [
    { name: "Skyline", count: 14 },
    { name: "Marcede", count: 53 },
    { name: "Nissan", count: 74 },
    { name: "Toyota", count: 23 },
    { name: "Mitsubis", count: 34 },
    { name: "VolksWagon", count: 43 },
    { name: "Honda", count: 54 },
    { name: "Audi", count: 66 },
    { name: "Lexus", count: 12 },
    { name: "Mazda", count: 31 },
    { name: "Others", count: 812 },
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
          </div>
        </div>

        <div className="mt-6 lg:flex">
          {/* Left Sticky Box */}
          <div className="leftBox sticky top-24 w-64 flex flex-col z-50 rounded-md shadow-lg h-fit">
            <div className="w-64 flex gap-1 justify-between items-center py-2.5 px-4 border-b border-b-gray-200">
              <p className="text-lg font-bold">Filter Options</p>
              <button className="clearAll text-yellow-600 font-semibold">
                Clear all
              </button>
            </div>
            <FilterOptionDropDown
              boxName="Make/Brand"
              listData={makeBrandData}
              customClass={"makeBrand border-b border-b-gray-200"}
              placeholder={"Search Make/Brand"}
            />
            <FilterOptionDropDown
              boxName="Model"
              listData={modelData}
              customClass={"model border-b border-b-gray-200"}
              placeholder={"Search Model"}
            />
            <RangeSlider min={1900} max={2025} boxName={'Registration Year'}
              customClass={"makeBrand border-b border-b-gray-200"}/>
            <RangeSlider min={0} max={10000} boxName={'Mileage km'}
              customClass={"makeBrand border-b border-b-gray-200"}/>
            <RangeSlider min={0} max={99999} boxName={'Price ¥'}
              customClass={"makeBrand border-b border-b-gray-200"}/>
          </div>

          {/* Right Scrollable Content */}
          <div className="flex-1 flex flex-col gap-6 mt-6 lg:mt-0 lg:ml-6">
            <div className="flex gap-2 w-full items-center justify-between">
              <div className="flex items-center gap-2">
                <button className="flex items-center gap-2 border p-2 px-3 rounded-3xl">
                  <MdTune size={18} />
                  Filters
                </button>
                <p>
                  Showing <b>1-20</b> of <b>2,420</b> listings
                </p>
              </div>
              <div className="flex gap-2 items-center">
                <CustomDropdown
                  options={options}
                  customClass="my-custom-class"
                  optionClass="my-option-class"
                />
                <div className="flex items-center space-x-2">
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

            {/* Cards Container */}
            <div className="rightBox grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full h-full">
              {cards.map((_, index) => (
                <AucNetCard key={index} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
