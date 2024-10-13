import React, { useState } from "react";
import {
  MdFavoriteBorder,
  MdOutlineDirectionsCar,
  MdOutlineDateRange,
} from "react-icons/md";
import { TbEngine, TbRoad } from "react-icons/tb";
import { useLocation, useNavigate } from "react-router-dom";
import StatusBullet from "./StatusBullet";
import PopUpMessage from "./PopUpMessage";

interface AucNetRowProps {
  customClass?: string;
  style?: React.CSSProperties;
  carData?: any;
  showStatus?: boolean;
  onClick?: () => void;
}

const AucNetRow: React.FC<AucNetRowProps> = ({
  customClass,
  style,
  carData,
  showStatus = false,
  onClick,
}) => {
  const [isFavorite, setIsFavorite] = useState(carData.isFavourite); // State to manage favorite status

  const navigate = useNavigate();
  const location = useLocation();
  
  const cards = location.state?.cards || [];
  const [showPopUp, setShowPopUp] = useState<boolean>(false);

  const handleCardClick = (cardData: any) => {
    navigate("/details", { state: { card: cardData ,cards: cards} });
  };

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
    setShowPopUp(true);
  };

  return (
    <>
      {showPopUp && <PopUpMessage />}
      {/* Mobile Version (shown on small screens) */}
      <div
        className={`md:hidden card animate-slideLeft transition-all flex flex-col w-full hover:bg-slate-100 cursor-pointer border border-slate-100 h-fit p-0 rounded-xl overflow-hidden shadow-md hover:shadow-lg ${customClass}`}
        style={style}
      >
        <div className="flex h-full  border-b border-gray-200">
            <button
              onClick={toggleFavorite}
              className={`bg-gray-900 bg-opacity-20 p-1.5 rounded-full absolute top-2 right-2 backdrop-blur-sm transition-all ${
                isFavorite ? "bg-red-500" : "text-white"
              }`}
            >
              <MdFavoriteBorder
                size={24}
                className={isFavorite ? "text-red-500" : "text-white"}
              />
            </button>
          {/* Image Box */}
          <div className="imageBox relative w-3/4 overflow-hidden flex items-center">
            <StatusBullet
              customClass={`absolute top-1 left-1 text-xs rounded-xl font-semibold ${
                showStatus ? "block" : "hidden"
              }`}
              status={carData.status}
            />
            <img
              src={carData.link}
              className="w-full h-full object-cover rounded-e-lg"
              alt="image"
              onClick={() => (onClick ? onClick() : handleCardClick(carData))}
            />
          </div>

          {/* Content Box */}
          <div
            className="flex flex-col w-full h-full"
            onClick={() => (onClick ? onClick() : handleCardClick(carData))}
          >
            {/* Top Section */}
            <div className="flex flex-col w-full h-full justify-start items-start p-3 px-5">
              <div className="flex flex-col gap-1 justify-start items-start">
                <p className="text-lg text-left font-medium">{carData.name}</p>
                <p className="text-base text-gray-600">{carData.engineType}</p>
              </div>
              <div className="mt-3 flex items-center text-2xl font-bold">
                ¥{carData.price}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div
          className="flex flex-wrap p-3 gap-2 box-border"
          onClick={() => (onClick ? onClick() : handleCardClick(carData))}
        >
          <div className="flex items-center gap-1 text-gray-500 py-1">
            <MdOutlineDirectionsCar size={20} /> {carData.type}
          </div>
          <div className="flex items-center gap-1 text-gray-500 py-1">
            <TbEngine size={20} /> {carData.enginePower.toLocaleString()} cc
          </div>
          <div className="flex items-center gap-1 text-gray-500 py-1">
            <TbRoad size={20} /> {carData.mileage.toLocaleString()} km
          </div>
          <div className="flex items-center gap-1 text-gray-500 py-1">
            <MdOutlineDateRange size={20} /> {carData.year}
          </div>
        </div>
      </div>

      {/* Desktop Version (shown on larger screens) */}
      <div
        className={`hidden md:flex card animate-slideLeft transition-all flex-row w-full hover:bg-slate-100 cursor-pointer border border-slate-100 h-fit p-0 rounded-xl overflow-hidden shadow-md hover:shadow-lg ${customClass}`}
        style={style}
      >
        {/* Image Box */}
        <div className="imageBox relative w-full md:w-2/12 flex items-center">
          <StatusBullet
            customClass={`absolute top-1 left-1 text-xs rounded-xl font-semibold ${
              showStatus ? "block" : "hidden"
            }`}
            status={carData.status}
          />

          <img
            src={carData.link}
            className="w-full h-full object-cover"
            alt="image"
            onClick={() => (onClick ? onClick() : handleCardClick(carData))}
          />
          <button
            onClick={toggleFavorite}
            className={`bg-gray-900 bg-opacity-20 p-1.5 rounded-full absolute top-2 right-2 backdrop-blur-sm transition-all ${
              isFavorite ? "bg-red-500" : "text-white"
            }`}
          >
            <MdFavoriteBorder
              size={24}
              className={isFavorite ? "text-red-500" : "text-white"}
            />
          </button>
        </div>

        {/* Content Box */}
        <div
          className="flex flex-col w-full md:w-10/12 px-5"
          onClick={() => (onClick ? onClick() : handleCardClick(carData))}
        >
          {/* Top Section */}
          <div className="flex flex-row w-full h-1/2 justify-start items-center p-3 border-b border-gray-200">
            <div className="flex flex-col gap-1 justify-start items-start">
              <p className="text-2xl font-medium">{carData.name}</p>
              <p className="text-base text-gray-600">{carData.engineType}</p>
            </div>
            <div className="mt-3 md:mt-0 md:ml-auto flex items-center text-2xl font-bold">
              ¥{carData.price}
            </div>
          </div>

          {/* Bottom Section */}
          <div
            className="h-1/2 flex flex-wrap p-3 gap-4 box-border"
            onClick={() => (onClick ? onClick() : handleCardClick(carData))}
          >
            <div className="flex items-center gap-1 text-gray-500 py-1">
              <MdOutlineDirectionsCar size={20} /> {carData.type}
            </div>
            <div className="flex items-center gap-1 text-gray-500 py-1">
              <TbEngine size={20} /> {carData.enginePower.toLocaleString()} cc
            </div>
            <div className="flex items-center gap-1 text-gray-500 py-1">
              <TbRoad size={20} /> {carData.mileage.toLocaleString()} km
            </div>
            <div className="flex items-center gap-1 text-gray-500 py-1">
              <MdOutlineDateRange size={20} /> {carData.year}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AucNetRow;
