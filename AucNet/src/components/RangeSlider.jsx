import React, { useState } from "react";

const RangeSlider = ({boxName,min,max}) => {
    const halfPoint= Math.round((min+max)/2);
  const [minValue, setMinValue] = useState(min);
  const [maxValue, setMaxValue] = useState(max);

  const handleMinChange = (e) => {
    const value = Math.min(Number(e.target.value), maxValue - 1);
    setMinValue(value);
  };

  const handleMaxChange = (e) => {
    const value = Math.max(Number(e.target.value), minValue + 1);
    setMaxValue(value);
  };

  const handleMinSlider = (e) => {
    setMinValue(Number(e.target.value));
  };

  const handleMaxSlider = (e) => {
    setMaxValue(Number(e.target.value));
  };

  return (
    <div className="px-4 py-2 bg-gray-50 rounded-lg shadow-md max-w-md mx-auto">
      {/* Slider Label */}
      <div className="flex flex-col gap-2 mb-4">
        <label className="font-bold">{boxName}</label>
        <div className="flex items-center gap-2">
          <input
            type="number"
            value={minValue}
            onChange={handleMinChange}
            className="w-24 p-1 border border-gray-300 rounded-md text-center"
          />
          <span>to</span>
          <input
            type="number"
            value={maxValue}
            onChange={handleMaxChange}
            className="w-24 p-1 border border-gray-300 rounded-md text-center"
          />
        </div>

        <div className="relative mt-4 hue-rotate-[190deg] opacity-80 flex items-center gap-2">
          {/* Min Slider */}
          <input
            type="range"
            min={min}
            max={halfPoint}
            step="1"
            value={minValue}
            onChange={handleMinSlider}
            className="slider-thumb h-2 bg-blue-200 rounded-lg w-full translate-x-2 appearance-none focus:outline-none"
          />
          {/* Max Slider */}
          <input
            type="range"
            min={halfPoint}
            max={max}
            step="1"
            value={maxValue}
            onChange={handleMaxSlider}
            className="slider-thumb h-2 bg-blue-200 rounded-lg w-full -translate-x-2 appearance-none focus:outline-none"
          />
        </div>
      </div>
    </div>
  );
};

export default RangeSlider;
