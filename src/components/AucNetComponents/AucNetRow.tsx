import React, { useState } from "react";
import {
  MdFavoriteBorder,
  MdOutlineDirectionsCar,
  MdOutlineDateRange,
} from "react-icons/md";
import { TbEngine, TbRoad } from "react-icons/tb";

interface AucNetRowProps {
  customClass?: string;
  style?: React.CSSProperties;
}

const AucNetRow: React.FC<AucNetRowProps> = ({ customClass, style }) => {
  const [isFavorite, setIsFavorite] = useState(false); // State to manage favorite status

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite); // Toggle favorite status
  };

  return (
    <>
      {/* Mobile Version (shown on small screens) */}
      <div
        className={`md:hidden card animate-slideLeft transition-all flex flex-col w-full hover:bg-slate-100 cursor-pointer border border-slate-100 h-fit p-0 rounded-xl overflow-hidden shadow-md hover:shadow-lg ${customClass}`}
        style={style}
      >
        <div className="flex h-full">
          {/* Image Box */}
          <div className="imageBox relative w-3/4 flex items-center">
            <button
              onClick={toggleFavorite}
              className={`bg-gray-900 bg-opacity-20 p-1.5 rounded-full absolute top-2 left-2 backdrop-blur-sm transition-all ${
                isFavorite ? "bg-red-500" : "text-white"
              }`}
            >
              <MdFavoriteBorder
                size={24}
                className={isFavorite ? "text-red-500" : "text-white"}
              />
            </button>
            <img
              src="https://cdn.jdpower.com/Average%20Weight%20Of%20A%20Car.jpg"
              className="w-full h-full object-cover rounded-e-lg"
              alt="image"
            />
          </div>

          {/* Content Box */}
          <div className="flex flex-col w-full h-full">
            {/* Top Section */}
            <div className="flex flex-col w-full h-full justify-start items-end p-3 border-b border-gray-200">
              <div className="flex flex-col gap-1 justify-start items-end">
                <p className="text-lg font-medium">Audi A1 Sportback</p>
                <p className="text-base text-gray-600">1.4 TFSI</p>
              </div>
              <div className="mt-3 flex items-center text-2xl font-bold">
                ¥555,000
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-wrap p-3 gap-2 box-border">
          <div className="flex items-center gap-1 text-gray-500 py-1">
            <MdOutlineDirectionsCar size={20} /> Hatchback
          </div>
          <div className="flex items-center gap-1 text-gray-500 py-1">
            <TbEngine size={20} /> 2,340 cc
          </div>
          <div className="flex items-center gap-1 text-gray-500 py-1">
            <TbRoad size={20} /> 233 km
          </div>
          <div className="flex items-center gap-1 text-gray-500 py-1">
            <MdOutlineDateRange size={20} /> 2021
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
          <img
            src="https://cdn.jdpower.com/Average%20Weight%20Of%20A%20Car.jpg"
            className="w-full h-full object-cover"
            alt="image"
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
        <div className="flex flex-col w-full md:w-10/12 px-5">
          {/* Top Section */}
          <div className="flex flex-row w-full justify-start items-center p-3 border-b border-gray-200">
            <div className="flex flex-col gap-1 justify-start items-start">
              <p className="text-lg font-medium">Audi A1 Sportback</p>
              <p className="text-base text-gray-600">1.4 TFSI</p>
            </div>
            <div className="mt-3 md:mt-0 md:ml-auto flex items-center text-2xl font-bold">
              ¥555,000
            </div>
          </div>

          {/* Bottom Section */}
          <div className="flex flex-wrap p-3 gap-4 box-border">
            <div className="flex items-center gap-1 text-gray-500 py-1">
              <MdOutlineDirectionsCar size={20} /> Hatchback
            </div>
            <div className="flex items-center gap-1 text-gray-500 py-1">
              <TbEngine size={20} /> 2,340 cc
            </div>
            <div className="flex items-center gap-1 text-gray-500 py-1">
              <TbRoad size={20} /> 233 km
            </div>
            <div className="flex items-center gap-1 text-gray-500 py-1">
              <MdOutlineDateRange size={20} /> 2021
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AucNetRow;
