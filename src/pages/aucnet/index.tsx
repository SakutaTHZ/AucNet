import React, { useState } from "react";
import { MdBorderAll, MdTune } from "react-icons/md";
import { FaListUl, FaSearch } from "react-icons/fa";
import CustomDropdown from "../../components/AucNetComponents/DropDown";
import AucNetCard from "../../components/AucNetComponents/AucNetCard";
import RangeSlider from "../../components/AucNetComponents/RangeSlider";
import FilterOptionDropDown from "../../components/AucNetComponents/FilterOptionDropDown";
import FilterClearDropDown from "../../components/AucNetComponents/FilterClearDropDown";
import AucNetRow from "../../components/AucNetComponents/AucNetRow";
import Pagination from "../../components/AucNetComponents/Pagination";
import { useLocation, useNavigate } from "react-router-dom";
import { FaCarTunnel } from "react-icons/fa6";

interface Model {
  name: string;
  count: number;
}

interface MakeBrand {
  name: string;
  count: number;
  models: Model[];
}

const App: React.FC = () => {
  // Toggle view
  const [isTableView, setIsTableView] = useState(false);
  const [isFilterOn, setIsFilterOn] = useState(false);

  const [selectedMakes, setSelectedMakes] = useState<string[]>([]);
  const [filteredModels, setFilteredModels] = useState<Model[]>([]);

  const makeBrandData: MakeBrand[] = [
    {
      name: "Toyota",
      count: 997,
      models: [
        { name: "Corolla", count: 52 },
        { name: "Camry", count: 59 },
        { name: "Prius", count: 726 },
        { name: "Hilux", count: 55 },
        { name: "Land Cruiser", count: 105 },
      ],
    },
    {
      name: "Nissan",
      count: 440,
      models: [
        { name: "Altima", count: 40 },
        { name: "Leaf", count: 58 },
        { name: "X-Trail", count: 179 },
        { name: "Skyline", count: 52 },
        { name: "March", count: 111 },
      ],
    },
    {
      name: "Honda",
      count: 398,
      models: [
        { name: "Civic", count: 120 },
        { name: "Accord", count: 75 },
        { name: "CR-V", count: 98 },
        { name: "Fit", count: 45 },
        { name: "Odyssey", count: 60 },
      ],
    },
    {
      name: "Mazda",
      count: 250,
      models: [
        { name: "Mazda3", count: 40 },
        { name: "CX-5", count: 80 },
        { name: "MX-5", count: 25 },
        { name: "Mazda6", count: 45 },
        { name: "CX-30", count: 60 },
      ],
    },
    {
      name: "Ford",
      count: 210,
      models: [
        { name: "Fiesta", count: 35 },
        { name: "Focus", count: 60 },
        { name: "Mustang", count: 25 },
        { name: "Escape", count: 40 },
        { name: "Explorer", count: 50 },
      ],
    },
  ];

  const handleMakeSelection = (selectedOptions: string[]) => {
    setSelectedMakes(selectedOptions);

    const models = makeBrandData
      .filter((make) => selectedOptions.includes(make.name))
      .flatMap((make) => make.models);

    console.log("Filtered Models: ", models);
    setFilteredModels(models);
  };

  const toggleFilter = () => {
    setIsFilterOn(!isFilterOn);
  };

  const location = useLocation();

  const cards = location.state?.cards || [];

  const options = [
    "Most relevant",
    "Date latest to oldest",
    "Date oldest to latest",
    "Price low to high",
    "Price high to low",
    "Mileage low to high",
    "Mileage high to low",
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

  const handleClearAll = () => {
    window.location.reload();
  };

  const [currentPage, setCurrentPage] = useState(location.state?.page);
  const totalPages = cards.length / 20;
  const navigate = useNavigate();

  const handlePageChange = (page: number) => {
    setCurrentPage(page);

    return navigate(`/home`, { state: { cards, page: page } });
  };

  return (
    <>
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
              className="leftBox mr-6 overflow-hidden animate-slideUp transition-all inset-0 md:sticky top-24 w-full md:w-64 flex flex-col rounded-md shadow-lg h-fit z-40"
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
                listData={makeBrandData.map((make) => ({
                  name: make.name,
                  count: make.count,
                }))}
                customClass={"bg-slate-50 makeBrand border-b border-b-gray-200"}
                placeholder={"Search Make/Brand"}
                onSelectionChange={handleMakeSelection}
              />
              {filteredModels.length > 0 && (
                <FilterOptionDropDown
                  boxName="Model"
                  listData={filteredModels.map((model) => ({
                    name: model.name || "Unknown",
                    count: model.count || 0,
                  }))}
                  customClass={
                    "animate-slideRight bg-slate-50 model border-b border-b-gray-200"
                  }
                  placeholder={"Search Model"}
                />
              )}
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
                  Showing{" "}
                  <b>
                    {20 * currentPage - 20}-{20 * currentPage}
                  </b>{" "}
                  of <b>{cards.length}</b> listings
                </p>
              </div>
              <div className="w-full md:w-auto flex flex-col md:flex-row gap-2 items-center">
                <div className="relative w-full md:w-auto border rounded-md">
                  <input
                    type="text"
                    placeholder="Search by Make or Model"
                    className="pl-10 pr-4 py-2 rounded-md w-full md:w-72 bg-white outline-none"
                  />
                  <FaSearch className="absolute left-3 top-3.5 text-gray-600" />
                </div>
                <div className="flex gap-2 items-center w-full">
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
            </div>

            {totalPages == 0 ? (
              <div className="w-full h-96 flex flex-col md:flex-row gap-2 md:gap-5 text-xl md:text-2xl items-center justify-start md:justify-center py-5">
                <FaCarTunnel size={30} className="text-gray-400"/>
                <p className="text-center text-gray-400 font-semibold">
                  Looks like all the cars have zoomed off. Check back soon for
                  new arrivals!
                </p>
              </div>
            ) : isTableView ? (
              <div className="rightBox flex flex-col gap-3 w-full h-full">
                {cards
                  .slice(20 * currentPage - 20, 20 * currentPage)
                  .map((cardData: any, index: number) => (
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
                      showStatus={cardData.isBasket ? true : false}
                    />
                  ))}
              </div>
            ) : (
              <div className="rightBox grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 w-full h-full">
                {cards
                  .slice(20 * currentPage - 20, 20 * currentPage)
                  .map((cardData: any, index: number) => (
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
                      showStatus={cardData.isBasket ? true : false}
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
    </>
  );
};

export default App;
