import { useLocation } from "react-router-dom";
import { useState, useRef } from "react";
import AucNetNav from "../../components/AucNetComponents/AucNetNav";
import {
  MdOutlineDirectionsCar,
  MdOutlineDateRange,
  MdOutlineShare,
  MdOutlineRemoveRedEye,
} from "react-icons/md";
import { TbEngine, TbRoad, TbHeart } from "react-icons/tb";
import { IoCarOutline,IoTime,IoShieldCheckmark } from "react-icons/io5";
import { PiSealCheckFill } from "react-icons/pi";

import ScrollToTopButton from "../../components/ScrollToTop";

const DetailsPage = () => {
  const location = useLocation();
  const cardData = location.state?.card; // Access the passed card data

  const [activeSection, setActiveSection] = useState<string>("Car Stock");

  // Create refs for each section to scroll to
  const carStockRef = useRef<HTMLDivElement>(null);
  const carFeaturesRef = useRef<HTMLDivElement>(null);
  const sellingPointsRef = useRef<HTMLDivElement>(null);
  const commentsRef = useRef<HTMLDivElement>(null);

  // Function to handle the click and scroll to the appropriate section
  const handleLinkClick = (section: string) => {
    setActiveSection(section);

    // Scroll to the section
    switch (section) {
      case "Car Stock":
        carStockRef.current?.scrollIntoView({ behavior: "smooth" });
        break;
      case "Car Features":
        carFeaturesRef.current?.scrollIntoView({ behavior: "smooth" });
        break;
      case "Selling Points":
        sellingPointsRef.current?.scrollIntoView({ behavior: "smooth" });
        break;
      case "Comments":
        commentsRef.current?.scrollIntoView({ behavior: "smooth" });
        break;
      default:
        break;
    }
  };

  return (
    <>
      <AucNetNav />
      <div className="flex flex-col gap-6 w-full h-fit min-h-screen px-8 md:px-16 lg:px-32 pt-28 bg-slate-50">
        <div className="flex items-center gap-1 font-medium">
          <a href="/home" className="text-gray-500">
            Car Sale /
          </a>
          <p className="text-blue-950 font-semibold">
            {cardData.name} {cardData.engineType}
          </p>
        </div>

        <div>
          <div className="flex text-3xl font-bold">
            {cardData.name} {cardData.engineType}
          </div>
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between">
            <div className="flex flex-wrap py-3 gap-4 gap-y-1 justify-start">
              <div className="flex items-center gap-1 text-gray-500 py-1">
                <MdOutlineDirectionsCar size={20} /> {cardData.type}
              </div>
              <div className="flex items-center gap-1 text-gray-500 py-1">
                <TbEngine size={20} /> {cardData.enginePower} cc
              </div>
              <div className="flex items-center gap-1 text-gray-500 py-1">
                <TbRoad size={20} /> {cardData.mileage} km
              </div>
              <div className="flex items-center gap-1 text-gray-500 py-1">
                <MdOutlineDateRange size={20} /> {cardData.year}
              </div>
            </div>
            <div className="flex item-center gap-2">
              <button className="flex items-center gap-1 px-4 font-semibold hover:text-white bg-gray-200 hover:bg-red-400 py-1 rounded-md transition-all duration-500">
                <TbHeart size={20} />
                Save
              </button>
              <button className="flex items-center gap-1 px-4 font-semibold hover:bg-gray-200 py-1 rounded-md  transition-all duration-500">
                <MdOutlineShare size={20} />
                Share
              </button>
            </div>
          </div>
        </div>

        <div className="relative w-full flex flex-col md:flex-row gap-3">
          <div className="mainImage w-full md:w-1/2">
            <img src={cardData.link} alt="image" className="rounded-lg" />
          </div>
          <div className="secondaryImages w-full md:w-1/2 grid grid-cols-4 md:grid-cols-2 gap-3">
            <img src={cardData.link} alt="image" className="rounded-lg" />
            <img src={cardData.link} alt="image" className="rounded-lg" />
            <img src={cardData.link} alt="image" className="rounded-lg" />
            <img src={cardData.link} alt="image" className="rounded-lg" />
          </div>
          <button className="absolute flex gap-2 items-center bg-white bg-opacity-75 hover:bg-opacity-100 shadow-md px-2 py-1 rounded-md right-2 md:right-4 top-2 md:top-auto md:bottom-4 transition-all">
            <MdOutlineRemoveRedEye size={20} />
            <p className="hidden md:block">See All Photos</p>
            <p className="count font-semibold">34</p>
          </button>
        </div>

        <div>
          <div className="w-full h-10 titles flex gap-6 text-gray-600 border-b border-b-gray-200">
            <a
              onClick={() => handleLinkClick("Car Stock")}
              className={`flex text-ellipsis truncate w-1/4 md:w-auto justify-left items-center pb-2 cursor-pointer transition-all ${
                activeSection === "Car Stock"
                  ? "font-bold text-yellow-600 border-b-2 border-b-yellow-600"
                  : "font-semibold"
              }`}
            >
              Car Stock
            </a>
            <a
              onClick={() => handleLinkClick("Car Features")}
              className={`flex text-ellipsis truncate w-1/4 md:w-auto justify-left items-center pb-2 cursor-pointer transition-all ${
                activeSection === "Car Features"
                  ? "font-bold text-yellow-600 border-b-2 border-b-yellow-600"
                  : "font-semibold"
              }`}
            >
              Car Features
            </a>
            <a
              onClick={() => handleLinkClick("Selling Points")}
              className={`flex text-ellipsis truncate w-1/4 md:w-auto justify-left items-center pb-2 cursor-pointer transition-all ${
                activeSection === "Selling Points"
                  ? "font-bold text-yellow-600 border-b-2 border-b-yellow-600"
                  : "font-semibold"
              }`}
            >
              Selling Points
            </a>
            <a
              onClick={() => handleLinkClick("Comments")}
              className={`flex text-ellipsis truncate w-1/4 md:w-auto justify-left items-center pb-2 cursor-pointer transition-all ${
                activeSection === "Comments"
                  ? "font-bold text-yellow-600 border-b-2 border-b-yellow-600"
                  : "font-semibold"
              }`}
            >
              Comments
            </a>
          </div>
        </div>

        <div className="flex pb-24">
          <div className="topicSection w-2/3">
            {/* Sections to scroll to */}
            <div ref={carStockRef} className="section">
              <h2>Car Stock Section</h2>
              <p>Details about car stock go here...</p>
            </div>
            <div ref={carFeaturesRef} className="section">
              <h2>Car Features Section</h2>
              <p>Details about car features go here...</p>
            </div>
            <div ref={sellingPointsRef} className="section">
              <h2>Selling Points Section</h2>
              <p>Details about selling points go here...</p>
            </div>
            <div ref={commentsRef} className="section">
              <h2>Comments Section</h2>
              <p>Comments go here...</p>
            </div>
          </div>

          <div className="w-1/3 flex flex-col gap-3">
            <div className="itemCard flex flex-col gap-4 rounded-md shadow-md p-6">
              <div className="hidden bulletCard text-sm flex gap-1 items-center bg-blue-200 shadow-sm w-fit px-3 py-1 rounded-md">
                <div className="relative">
                    <IoTime size={10} className="absolute -right-0.5 -top-0.5"/>
                    <IoCarOutline size={20} />
                </div>
                Purchased
              </div>
              <p className="text-xl font-medium">{cardData.name} {cardData.engineType}</p>
              <p className="text-3xl font-bold">¥{cardData.price.toLocaleString()}</p>

              <div className="flex flex-col gap-1">
                <p className="flex gap-1 items-center"><IoShieldCheckmark size={20} className="text-gray-500"/> Secure payment</p>
                <p className="flex gap-1 items-center"><PiSealCheckFill size={20} className="text-gray-500"/> Certified seller</p>
              </div>

              <div className="flex flex-col gap-2">
                <button className="bg-amber-400 py-2 font-bold rounded-md">Check availability</button>
                <p className="text-gray-500 text-center">Admin team will check the availability of the selected car.</p>
              </div>
            </div>

            <div className="flex flex-col gap-4 border-2 border-dashed border-gray-200 text-gray-500 rounded-md p-6">
              <p>Declarations of Precautions</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi fugiat iusto fuga itaque, adipisci, modi in facere, veniam quas voluptatibus error distinctio nemo esse hic natus quia sint est! Repudiandae.</p>
            </div>
          </div>
        </div>
      </div>

      <ScrollToTopButton />
    </>
  );
};

export default DetailsPage;
