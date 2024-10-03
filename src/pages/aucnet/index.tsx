import React, { useState } from "react";
import { MdBorderAll, MdTune } from "react-icons/md";
import { FaListUl } from "react-icons/fa";
import CustomDropdown from "../../components/AucNetComponents/DropDown";
import AucNetNav from "../../components/AucNetComponents/AucNetNav";
import AucNetCard from "../../components/AucNetComponents/AucNetCard";
import RangeSlider from "../../components/AucNetComponents/RangeSlider";
import FilterOptionDropDown from "../../components/AucNetComponents/FilterOptionDropDown";
import FilterClearDropDown from "../../components/AucNetComponents/FilterClearDropDown";
import AucNetRow from "../../components/AucNetComponents/AucNetRow";
import ScrollToTopButton from "../../components/ScrollToTop";
import Pagination from "../../components/AucNetComponents/Pagination";

import { useNavigate } from "react-router-dom";

const App: React.FC = () => {
  const navigate = useNavigate();

  const handleCardClick = (cardData: any) => {
    console.log(cardData + "Card clicked");
    navigate("/details", { state: { card: cardData } });
  };

  // Toggle view
  const [isTableView, setIsTableView] = useState(false);
  const [isFilterOn, setIsFilterOn] = useState(false);

  const toggleFilter = () => {
    setIsFilterOn(!isFilterOn);
  };

  const generateCardData = () => {
    const carNames = ["A3 Sportback", "TT Coupe", "Ranger", "Fit", "CR-V"];
    const carTypes = ["Sedan", "Hatchback", "SUV", "Convertible", "MiniVan"];
    const engines = ["1.4 TSLI", "V6", "flat-6", "Rx-7", "EV engine"];
    const imageLink = [
      "https://cdn.jdpower.com/Average%20Weight%20Of%20A%20Car.jpg",
      "https://cdn.jdpower.com/ArticleImages/JDP_2025%20Volkswagen%20Taos%20SEL%20Green%20Front%20Quarter%20View.jpg",
      "https://cdn.jdpower.com/ArticleImages/JDP_2025%20Chrysler%20Voyager%20LX%20Red%20Front%20Quarter%20VIew.jpg",
      "https://cdn.jdpower.com/ArticleImages/JDP_2025%20Toyota%20Highlander%20Limited%2025th%20Edition%20Hybrid%20Front%20Quarter%20View.jpg",
      "https://cdn.jdpower.com/ArticleImages/JDP_2025%20Volvo%20XC90%20Front%20Quarter%20View%20Action.jpg",
    ];

    const cardData = {
      name: carNames[Math.floor(Math.random() * carNames.length)],
      type: carTypes[Math.floor(Math.random() * carTypes.length)],
      link: imageLink[Math.floor(Math.random() * imageLink.length)],
      engineType: engines[Math.floor(Math.random() * engines.length)],
      price: Math.floor(Math.random() * (999999 - 100000 + 1)) + 100000,
      enginePower: Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000,
      mileage: Math.floor(Math.random() * (999999 - 1000 + 1)) + 1000,
      year: Math.floor(Math.random() * (2025 - 1980 + 1)) + 1980,
    };
    return cardData;
  };
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

  const fuelType = [
    { name: "Petrol", count: 14 },
    { name: "Disel", count: 53 },
    { name: "Electric", count: 74 },
    { name: "Hybrid(Petrol/Electric)", count: 23 },
  ];

  const bodyType = [
    { name: "Sedan", count: 14 },
    { name: "HatchBack", count: 53 },
    { name: "SUV(Sport Utility Vehicle)", count: 23 },
    { name: "Coupe", count: 17 },
    { name: "Convertible", count: 43 },
    { name: "Wagon", count: 5 },
  ];

  const transmission = [
    { name: "Automatic", count: 53 },
    { name: "Manual", count: 74 },
  ];

  const exteriorColor = [
    { name: "Black", count: 14 },
    { name: "Blue", count: 53 },
    { name: "Brown", count: 74 },
    { name: "Beige", count: 23 },
    { name: "Gray", count: 34 },
    { name: "Green", count: 43 },
    { name: "Others", count: 54 },
  ];

  const seats = [
    { name: "2 seats", count: 14 },
    { name: "3 seats", count: 53 },
    { name: "4 seats", count: 74 },
    { name: "5 seats", count: 23 },
  ];

  const cards = Array.from({ length: 20 }, generateCardData);

  const handleClearAll = () => {
    window.location.reload();
  };

  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 20;

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <>
      <AucNetNav />

      <div className="w-full h-fit min-h-screen px-8 md:px-16 lg:px-32 pt-28 bg-slate-50">
        <div className="flex flex-col gap-8">
          <div className="w-full flex items-center justify-between">
            <h1 className="text-3xl text-neutral-900 font-bold">
              Cars For Sale
            </h1>
          </div>
        </div>

        <div className="mt-6 lg:flex z-10 transition-all">
          {/* Left Sticky Box */}
          {isFilterOn && (
            <div
              className="leftBox mr-6 animate-slideUp transition-all inset-0 md:sticky top-24 w-full md:w-64 flex flex-col rounded-md shadow-lg h-fit z-40"
              style={{ animationFillMode: "forwards" }}
            >
              <div className="bg-slate-50 w-full flex gap-1 justify-between items-center py-2.5 px-4 border-b border-b-gray-200">
                <p className="text-lg font-bold">Filter Options</p>
                <button
                  className="clearAll text-yellow-600 font-semibold"
                  onClick={handleClearAll}
                >
                  Clear all
                </button>
              </div>
              <FilterOptionDropDown
                boxName="Make/Brand"
                listData={makeBrandData}
                customClass={"bg-slate-50 makeBrand border-b border-b-gray-200"}
                placeholder={"Search Make/Brand"}
              />
              <FilterOptionDropDown
                boxName="Model"
                listData={modelData}
                customClass={"bg-slate-50 model border-b border-b-gray-200"}
                placeholder={"Search Model"}
              />
              <RangeSlider
                min={1900}
                max={2025}
                boxName={"Registration Year"}
                customClass={"bg-slate-50 makeBrand border-b border-b-gray-200"}
              />
              <RangeSlider
                min={0}
                max={10000}
                boxName={"Mileage km"}
                customClass={"bg-slate-50 mileage border-b border-b-gray-200"}
              />
              <RangeSlider
                min={0}
                max={99999}
                boxName={"Price ¥"}
                customClass={"bg-slate-50 price border-b border-b-gray-200"}
              />

              <FilterClearDropDown
                customClass={"bg-slate-50 fuelType border-b border-b-gray-200"}
                boxName="Fuel Type"
                listData={fuelType}
              />
              <FilterClearDropDown
                customClass={"bg-slate-50 bodyType border-b border-b-gray-200"}
                boxName="Body Type"
                listData={bodyType}
              />
              <FilterClearDropDown
                customClass={
                  "bg-slate-50 transmission border-b border-b-gray-200"
                }
                boxName="Transmission"
                listData={transmission}
              />
              <FilterClearDropDown
                customClass={
                  "bg-slate-50 exteriorColor border-b border-b-gray-200"
                }
                boxName="Exterior Color"
                listData={exteriorColor}
              />
              <FilterClearDropDown
                customClass={"bg-slate-50 seats border-b border-b-gray-200"}
                boxName="Seats"
                listData={seats}
              />
            </div>
          )}

          {/* Right Scrollable Content */}
          <div className="flex-1 flex flex-col gap-6 mt-6 lg:mt-0 transition-all">
            <div className="flex flex-wrap gap-2 w-full items-center justify-between transition-all">
              <div className="flex items-center gap-2 transition-all">
                <button
                  className="flex items-center gap-2 border p-2 px-3 rounded-3xl"
                  onClick={toggleFilter}
                >
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
            {isTableView ? (
              <div className="rightBox flex flex-col gap-3 w-full h-full">
                {cards.map((cardData, index) => (
                  <AucNetRow
                    key={index}
                    customClass={`opacity-0 delay-${
                      index === 0 ? 0 : index === 1 ? 100 : 200
                    }`}
                    style={{
                      animationDelay: `${
                        index === 0 ? "0s" : `${index * 0.1}s`
                      }`,
                      animationFillMode: "forwards",
                    }}
                    carData={cardData}
                    onClick={() => handleCardClick(cardData)} // Pass card data on click
                  />
                ))}
              </div>
            ) : (
              <div className="rightBox grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 w-full h-full">
                {cards.map((cardData, index) => (
                  <AucNetCard
                    key={index}
                    customClass={`opacity-0 delay-${
                      index === 0 ? 0 : index === 1 ? 100 : 200
                    }`}
                    style={{
                      animationDelay: `${
                        index === 0 ? "0s" : `${index * 0.1}s`
                      }`,
                      animationFillMode: "forwards",
                    }}
                    carData={cardData}
                    onClick={() => handleCardClick(cardData)} // Pass card data on click
                  />
                ))}
              </div>
            )}
            <Pagination
              totalPages={totalPages}
              currentPage={currentPage}
              onPageChange={handlePageChange}
            />
          </div>
        </div>
      </div>

      <ScrollToTopButton />
    </>
  );
};

export default App;
