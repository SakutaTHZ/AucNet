import React, { useState } from "react";
import { FaListUl } from "react-icons/fa";
import { MdBorderAll, MdOutlineShoppingCart } from "react-icons/md";
import AucNetRow from "../../components/AucNetComponents/AucNetRow";
import AucNetCard from "../../components/AucNetComponents/AucNetCard";
import { useLocation, useNavigate } from "react-router-dom";
import Pagination from "../../components/AucNetComponents/Pagination";

const MyBasket: React.FC = () => {
  const [isTableView, setIsTableView] = useState(false);
  const [selectedStatus, setSelectedStatus] = useState<string | null>(null);

  const location = useLocation();

  const cards =
    location.state?.cards.filter((card: any) => card.isBasket === true) || [];

  const statusCounts = {
    checkavailability: cards.filter(
      (card: any) => card.status === "checkavailability"
    ).length,
    unavailable: cards.filter((card: any) => card.status === "unavailable")
      .length,
    orderconfirmed: cards.filter(
      (card: any) => card.status === "orderconfirmed"
    ).length,
    canceled: cards.filter((card: any) => card.status === "canceled").length,
    purchased: cards.filter((card: any) => card.status === "purchased").length,
  };

  const filteredCards = selectedStatus
    ? cards.filter((card: any) => card.status === selectedStatus)
    : cards;

  const [currentPage, setCurrentPage] = useState(location.state?.page);
  const totalPages = Math.ceil(filteredCards.length / 20);
  console.log(
    totalPages + " " + filteredCards.length + " " + filteredCards.length / 20
  );
  const navigate = useNavigate();

  const handlePageChange = (page: number) => {
    setCurrentPage(page);

    return navigate(`/basket`, { state: { cards, page: page } });
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

      <div className="filters flex flex-wrap gap-2">
        <p className="text-gray-500">Filter by Status : </p>

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
          <p>
            Unavailable
            <span className="ml-1 px-2 bg-slate-50 rounded-full font-semibold">
              {statusCounts.unavailable}
            </span>{" "}
          </p>
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
          <p>
            Order Confirmed
            <span className="ml-1 px-2 bg-slate-50 rounded-full font-semibold">
              {statusCounts.orderconfirmed}
            </span>{" "}
          </p>
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
          <p>
            Order Cancelled
            <span className="ml-1 px-2 bg-slate-50 rounded-full font-semibold">
              {statusCounts.canceled}
            </span>{" "}
          </p>
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
          <p>
            Purchased
            <span className="ml-1 px-2 bg-slate-50 rounded-full font-semibold">
              {statusCounts.purchased}
            </span>{" "}
          </p>
        </button>
      </div>

      {filteredCards.length == 0 ? (
        <div className="w-full h-96 flex flex-col md:flex-row gap-2 md:gap-5 text-xl md:text-2xl items-center justify-start md:justify-center py-5">
          <MdOutlineShoppingCart size={30} className="text-gray-400" />
          <p className="text-center text-gray-400 font-semibold">
            Nothing in your basket yet... let’s find some cars to fill it up!
          </p>
        </div>
      ) : isTableView ? (
        <div className="rightBox flex flex-col gap-3 w-full h-full">
          {filteredCards
            .slice(20 * currentPage - 20, 20 * currentPage)
            .map((cardData: any, index: number) => (
              <AucNetRow key={index} carData={cardData} showStatus={true} />
            ))}
        </div>
      ) : (
        <div className="rightBox grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 w-full h-full">
          {filteredCards
            .slice(20 * currentPage - 20, 20 * currentPage)
            .map((cardData: any, index: number) => (
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
