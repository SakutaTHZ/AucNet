import React, { useState } from "react";
import { FaListUl } from "react-icons/fa";
import { MdBorderAll } from "react-icons/md";
import AucNetRow from "../../components/AucNetComponents/AucNetRow";
import AucNetCard from "../../components/AucNetComponents/AucNetCard";
import Pagination from "../../components/AucNetComponents/Pagination";
import { IoCarOutline, IoCloseCircle, IoTime } from "react-icons/io5";
import { TbCalendarCancel, TbCalendarCheck } from "react-icons/tb";
import { FaShoppingCart } from "react-icons/fa";

const MyBasket: React.FC = () => {
  const [isTableView, setIsTableView] = useState(false);
  const [selectedStatus, setSelectedStatus] = useState<string | null>(null);

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
    const carStatus = [
      "checkavailability",
      "unavailable",
      "orderconfirmed",
      "canceled",
      "purchased",
    ];

    return {
      name: carNames[Math.floor(Math.random() * carNames.length)],
      type: carTypes[Math.floor(Math.random() * carTypes.length)],
      link: imageLink[Math.floor(Math.random() * imageLink.length)],
      engineType: engines[Math.floor(Math.random() * engines.length)],
      status: carStatus[Math.floor(Math.random() * carStatus.length)],
      price: Math.floor(Math.random() * (999999 - 100000 + 1)) + 100000,
      enginePower: Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000,
      mileage: Math.floor(Math.random() * (999999 - 1000 + 1)) + 1000,
      year: Math.floor(Math.random() * (2025 - 1980 + 1)) + 1980,
    };
  };

  const cards = Array.from({ length: 20 }, generateCardData);
  // Count the number of each status
  const statusCounts = {
    checkavailability: cards.filter(
      (card) => card.status === "checkavailability"
    ).length,
    unavailable: cards.filter((card) => card.status === "unavailable").length,
    orderconfirmed: cards.filter((card) => card.status === "orderconfirmed")
      .length,
    canceled: cards.filter((card) => card.status === "canceled").length,
    purchased: cards.filter((card) => card.status === "purchased").length,
  };
  // Filter cards based on selected status
  const filteredCards = selectedStatus
    ? cards.filter((card) => card.status === selectedStatus)
    : cards;

  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 1;

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div className="flex flex-col gap-6 w-full h-fit min-h-screen px-8 md:px-16 lg:px-32 pt-28 bg-slate-50">
      <div className="flex flex-col gap-8">
        <div className="w-full flex items-center justify-between">
          <h1 className="text-3xl text-neutral-900 font-bold">My Basket</h1>
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

      <div className="filters flex gap-2">
        <p className="text-gray-500">Filter by status : </p>

        <button
          onClick={() =>
            setSelectedStatus(
              selectedStatus === "checkavailability"
                ? null
                : "checkavailability"
            )
          }
          className={`bulletCard text-sm flex gap-1 items-centershadow-sm w-fit px-3 py-1 rounded-full ${
            selectedStatus === "checkavailability"
              ? "bg-blue-200 text-blue-900"
              : " bg-gray-200 text-gray-900 "
          }`}
        >
          <p>
            Checking Availability
            <span className="ml-1 px-2 bg-slate-50 rounded-full font-semibold">
              {statusCounts.checkavailability}
            </span>{" "}
          </p>
        </button>

        <button
          onClick={() =>
            setSelectedStatus(
              selectedStatus === "unavailable" ? null : "unavailable"
            )
          }
          className={`bulletCard text-sm flex gap-1 items-center  shadow-sm w-fit px-3 py-1 rounded-full ${
            selectedStatus === "unavailable"
              ? "bg-red-200 text-red-900"
              : "bg-gray-200 text-gray-900"
          }`}
        >
          <p>Unavailable
            <span className="ml-1 px-2 bg-slate-50 rounded-full font-semibold">
              {statusCounts.unavailable}
            </span>{" "}</p>
        </button>

        <button
          onClick={() =>
            setSelectedStatus(
              selectedStatus === "orderconfirmed" ? null : "orderconfirmed"
            )
          }
          className={`bulletCard text-sm flex gap-1 items-center  shadow-sm w-fit px-3 py-1 rounded-full ${
            selectedStatus === "orderconfirmed"
              ? "bg-purple-200 text-purple-900"
              : "bg-gray-200 text-gray-900"
          }`}
        >
          <p>Order Confirmed
            <span className="ml-1 px-2 bg-slate-50 rounded-full font-semibold">
              {statusCounts.orderconfirmed}
            </span>{" "}</p>
        </button>

        <button
          onClick={() =>
            setSelectedStatus(selectedStatus === "canceled" ? null : "canceled")
          }
          className={`bulletCard text-sm flex gap-1 items-center shadow-sm w-fit px-3 py-1 rounded-full ${
            selectedStatus === "canceled"
              ? "bg-orange-200 text-orange-900"
              : "bg-gray-200 text-gray-900"
          }`}
        >
          <p>Canceled
            <span className="ml-1 px-2 bg-slate-50 rounded-full font-semibold">
              {statusCounts.canceled}
            </span>{" "}</p>
        </button>

        <button
          onClick={() =>
            setSelectedStatus(
              selectedStatus === "purchased" ? null : "purchased"
            )
          }
          className={`bulletCard text-sm flex gap-1 items-center shadow-sm w-fit px-3 py-1 rounded-full ${
            selectedStatus === "purchased"
              ? "bg-green-200 text-green-900"
              : "bg-gray-200 text-gray-900"
          }`}
        >
          <p>Purchased
            <span className="ml-1 px-2 bg-slate-50 rounded-full font-semibold">
              {statusCounts.purchased}
            </span>{" "}</p>
        </button>
      </div>

      {isTableView ? (
        <div className="rightBox flex flex-col gap-3 w-full h-full">
          {filteredCards.map((cardData, index) => (
            <AucNetRow key={index} carData={cardData} showStatus={true} />
          ))}
        </div>
      ) : (
        <div className="rightBox grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 w-full h-full">
          {filteredCards.map((cardData, index) => (
            <AucNetCard key={index} carData={cardData} showStatus={true} />
          ))}
        </div>
      )}

      <Pagination
        totalPages={totalPages}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default MyBasket;
