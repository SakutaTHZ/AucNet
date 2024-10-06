import { useLocation } from "react-router-dom";
import { useState, useRef } from "react";
import AucNetNav from "../../components/AucNetComponents/AucNetNav";
import CommentBox from "../../components/AucNetComponents/CommentBox";
import {
  MdOutlineDirectionsCar,
  MdOutlineDateRange,
  MdOutlineShare,
  MdOutlineRemoveRedEye,
} from "react-icons/md";
import { TbEngine, TbRoad, TbHeart } from "react-icons/tb";
import AucNetCard from "../../components/AucNetComponents/AucNetCard";

import ScrollToTopButton from "../../components/ScrollToTop";
import CarStatusBox from "../../components/AucNetComponents/CarStatusBox";
import StatusBullet from "../../components/AucNetComponents/StatusBullet";
import {
  IoCalendarClearOutline,
  IoCheckmarkCircleOutline,
} from "react-icons/io5";

const DetailsPage = () => {
  const location = useLocation();
  const cardData = location.state?.card; // Access the passed card data

  const [activeSection, setActiveSection] = useState<string>("Car Stock");

  // Create refs for each section to scroll to
  const carOverView = useRef<HTMLDivElement>(null);
  const carFeaturesRef = useRef<HTMLDivElement>(null);
  const sellingPointsRef = useRef<HTMLDivElement>(null);
  const commentsRef = useRef<HTMLDivElement>(null);

  // Function to handle the click and scroll to the appropriate section
  const handleLinkClick = (section: string) => {
    setActiveSection(section);

    // Scroll to the section
    switch (section) {
      case "Car Stock":
        carOverView.current?.scrollIntoView({ behavior: "smooth" });
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
          <div className="flex text-3xl gap-4 font-bold">
            {cardData.name} {cardData.engineType}
            <StatusBullet
              status={cardData.status}
              customClass="font-semibold"
            />
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

        <div className="flex flex-col-reverse md:flex-row gap-8 pb-24 border-b border-b-gray-200">
          <div className="topicSection w-full md:w-2/3">
            {/* Sections to scroll to */}
            <div
              ref={carOverView}
              className="section border-b border-b-gray-200 pb-4"
            >
              <h2 className="text-2xl font-bold">Overview</h2>
              <div className="carData flex flex-wrap gap-y-4 py-4">
                <div className="flex items-center gap-2 py-1 w-1/2">
                  <IoCalendarClearOutline size={20} />
                  <p>
                    Exterior: <span>Beige Color</span>
                  </p>
                </div>
                <div className="flex items-center gap-2 py-1 w-1/2">
                  <IoCalendarClearOutline size={20} />
                  <p>
                    Interior: <span>Midnight Black</span>
                  </p>
                </div>
                <div className="flex items-center gap-2 py-1 w-1/2">
                  <IoCalendarClearOutline size={20} />
                  <p>
                    Registration year: <span>2021</span>
                  </p>
                </div>
                <div className="flex items-center gap-2 py-1 w-1/2">
                  <IoCalendarClearOutline size={20} />
                  <p>
                    Vin: <span>2GNWO32TE0928372</span>
                  </p>
                </div>
                <div className="flex items-center gap-2 py-1 w-1/2">
                  <IoCalendarClearOutline size={20} />
                  <p>
                    <span>233</span> km
                  </p>
                </div>
                <div className="flex items-center gap-2 py-1 w-1/2">
                  <IoCalendarClearOutline size={20} />
                  <p>
                    <span>Hatchback</span>
                  </p>
                </div>
                <div className="flex items-center gap-2 py-1 w-1/2">
                  <IoCalendarClearOutline size={20} />
                  <p>
                    Fuel type: <span>Petrol</span>
                  </p>
                </div>
                <div className="flex items-center gap-2 py-1 w-1/2">
                  <IoCalendarClearOutline size={20} />
                  <p>Automatic transmission</p>
                </div>
                <div className="flex items-center gap-2 py-1 w-1/2">
                  <IoCalendarClearOutline size={20} />
                  <p>
                    <span>2,340</span> cc
                  </p>
                </div>
                <div className="flex items-center gap-2 py-1 w-1/2">
                  <IoCalendarClearOutline size={20} />
                  <p>
                    <span>Front wheel drive</span>
                  </p>
                </div>
                <div className="flex items-center gap-2 py-1 w-1/2">
                  <IoCalendarClearOutline size={20} />
                  <p>
                    <span>Osaka, Japan</span>
                  </p>
                </div>
              </div>
              <button className="bg-gray-200 px-4 py-1 rounded-md font-semibold">
                View all details
              </button>

              <div className="w-full p-3 md:p-6 flex gap-2 items-center justify-between border border-gray-200 rounded-md mt-4">
                <div className="flex gap-4 items-center justify-center">
                  <div className="w-12 h-12 flex items-center justify-center shadow-md rounded-full text-lg font-semibold bg-amber-100 text-amber-900">
                    4.5
                  </div>
                  <div>
                    <p className="text-lg font-semibold">
                      AIS Inspection Total Score
                    </p>
                    <p className="text-sm text-gray-600">
                      0 Accident . Repainted . Correction needed
                    </p>
                  </div>
                </div>

                <button className="bg-gray-50 hover:bg-amber-100 px-4 py-1 rounded-md font-semibold transition-all">
                  View all details
                </button>
              </div>
            </div>

            <div
              ref={carFeaturesRef}
              className="section border-b border-b-gray-200 py-4"
            >
              <h2 className="text-2xl font-bold">Car Features</h2>
              <div className="carFeatures flex flex-wrap gap-y-4 py-4">
                <div className="flex items-center gap-2 py-1 w-1/2">
                  <IoCheckmarkCircleOutline size={20} />
                  <p>
                    <span>Air condition </span>
                  </p>
                </div>
                <div className="flex items-center gap-2 py-1 w-1/2">
                  <IoCheckmarkCircleOutline size={20} />
                  <p>
                    <span>Keyless Entry</span>
                  </p>
                </div>
                <div className="flex items-center gap-2 py-1 w-1/2">
                  <IoCheckmarkCircleOutline size={20} />
                  <p>
                    <span>Air-bag</span>
                  </p>
                </div>
                <div className="flex items-center gap-2 py-1 w-1/2">
                  <IoCheckmarkCircleOutline size={20} />
                  <p>
                    <span>Smart key</span>
                  </p>
                </div>
                <div className="flex items-center gap-2 py-1 w-1/2">
                  <IoCheckmarkCircleOutline size={20} />
                  <p>
                    <span>ABS</span>
                  </p>
                </div>
                <div className="flex items-center gap-2 py-1 w-1/2">
                  <IoCheckmarkCircleOutline size={20} />
                  <p>
                    <span>Back Camera</span>
                  </p>
                </div>
                <div className="flex items-center gap-2 py-1 w-1/2">
                  <IoCheckmarkCircleOutline size={20} />
                  <p>
                    <span>Sunroof</span>
                  </p>
                </div>
                <div className="flex items-center gap-2 py-1 w-1/2">
                  <IoCheckmarkCircleOutline size={20} />
                  <p>ETC</p>
                </div>
                <div className="flex items-center gap-2 py-1 w-1/2">
                  <IoCheckmarkCircleOutline size={20} />
                  <p>
                    <span>Aluminium wheel</span>
                  </p>
                </div>
                <div className="flex items-center gap-2 py-1 w-1/2">
                  <IoCheckmarkCircleOutline size={20} />
                  <p>
                    <span>Leather seat</span>
                  </p>
                </div>
              </div>

              <button className="bg-gray-200 px-4 py-1 rounded-md font-semibold">
                View all features
              </button>
            </div>
            <div
              ref={sellingPointsRef}
              className="section border-b border-b-gray-200 py-4"
            >
              <h2 className="text-2xl font-bold pb-4">Selling Points</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Similique accusantium maiores fugiat quidem ipsa ullam iusto
                perspiciatis odit nam. Culpa assumenda sint saepe accusantium
                eligendi tenetur doloribus fugit id magnam.
              </p>
            </div>
            <div
              ref={commentsRef}
              className="section border-b border-b-gray-200 py-4"
            >
              <h2 className="text-2xl font-bold pb-4">
                Comments (<span className="commentCount">2</span>)
              </h2>
              <div className="commentBox flex flex-col gap-4 border p-4 mb-4 pr-1 rounded-lg">
                {cardData.comments.length == 0 ? (
                  <p className="text-gray-400">
                    Ask anything. Admin will reply you soon
                  </p>
                ) : (
                  cardData.comments.map((comment: any, index: any) => (
                    <CommentBox
                      key={index}
                      customClass="border-b border-b-gray-200"
                      commentData={comment}
                    />
                  ))
                )}
              </div>
              <div className="flex gap-3">
                <img
                  src={cardData.link}
                  className="h-10 aspect-square bg-center bg-fixed bg-cover rounded-full"
                  alt="profile"
                />
                <input
                  type="text"
                  className="bg-white border rounded-md px-2 w-full"
                  placeholder="Enter Comment"
                />
                <button className="bg-amber-400 text-nowrap px-4 py-1 rounded-md font-semibold transition-all">
                  Submit
                </button>
              </div>
            </div>
          </div>

          <div className="w-full md:w-1/3">
            <CarStatusBox
              cardData={cardData}
              customClass="md:w-full md:sticky md:top-24"
              status={cardData.status}
            />
          </div>
        </div>

        <div className="recommendations pb-8">
          <h1 className="text-3xl pb-4 font-bold">Recommended for you</h1>
          <div className="flex gap-4">
            {(() => {
              const items = [];
              for (let i = 0; i < 3; i++) {
                items.push(<AucNetCard key={i} customClass={``} carData={cardData} />);
              }
              return items;
            })()}
          </div>
        </div>
      </div>
      <ScrollToTopButton />
    </>
  );
};

export default DetailsPage;
