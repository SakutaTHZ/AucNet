import { Link, useLocation } from "react-router-dom";
import { useState, useRef } from "react";
import CommentBox from "../../components/AucNetComponents/CommentBox";
import {
  MdOutlineDirectionsCar,
  MdOutlineDateRange,
  MdOutlineShare,
  MdOutlineRemoveRedEye,
  MdOutlineStar,
  MdOutlineStarBorder,
  MdOutlineStarHalf,
  MdAirlineSeatReclineNormal,
  MdOutlineStarOutline,
} from "react-icons/md";
import { TbEngine, TbRoad, TbHeart, TbHeartFilled } from "react-icons/tb";
import AucNetCard from "../../components/AucNetComponents/AucNetCard";

import CarStatusBox from "../../components/AucNetComponents/CarStatusBox";
import StatusBullet from "../../components/AucNetComponents/StatusBullet";
import { IoCheckmarkCircle, IoCheckmarkCircleOutline } from "react-icons/io5";
import Popup from "../../components/AucNetComponents/Popup";
import { GoDotFill } from "react-icons/go";
import {
  PiCalendarDots,
  PiCarProfile,
  PiGasCan,
  PiRoadHorizon,
} from "react-icons/pi";
import enginepower from "../../assets/images/EnginePower-navy.svg";
import vin from "../../assets/vin.svg";
import { GiCarWheel, GiGearStickPattern } from "react-icons/gi";
import { GrLocation } from "react-icons/gr";
import PopUpMessage from "../../components/AucNetComponents/PopUpMessage";
import Gallery from "../../components/AucNetComponents/Gallery";

const DetailsPage = () => {
  const location = useLocation();
  const cardData = location.state?.card;

  const [activeSection, setActiveSection] = useState<string>("Car Stock");

  const carOverView = useRef<HTMLDivElement>(null);
  const carFeaturesRef = useRef<HTMLDivElement>(null);
  const sellingPointsRef = useRef<HTMLDivElement>(null);
  const commentsRef = useRef<HTMLDivElement>(null);

  const handleLinkClick = (section: string) => {
    setActiveSection(section);

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

  const [comments, setComments] = useState(cardData.comments || []);
  const [newComment, setNewComment] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewComment(e.target.value);
  };

  const handleAddComment = () => {
    if (newComment.trim() !== "") {
      const newCommentData = {
        name: "You",
        time: new Date().toLocaleString(),
        comment: newComment,
        reply: [],
      };

      setComments([...comments, newCommentData]);
      setNewComment("");
    }
  };

  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const openPopup = () => setIsPopupOpen(true);
  const closePopup = () => setIsPopupOpen(false);

  // const [isFeaturePopupOpen, setIsFeaturePopupOpen] = useState(false);

  // const openFeaturePopup = () => setIsFeaturePopupOpen(true);
  // const closeFeaturePopup = () => setIsFeaturePopupOpen(false);

  const [isAISPopupOpen, setIsAISPopupOpen] = useState(false);

  const openAISPopup = () => setIsAISPopupOpen(true);
  const closeAISPopup = () => setIsAISPopupOpen(false);

  const cards = location.state?.cards || [];
  const recommend = location.state?.recommend || [];
  console.log(cards);

  const [isFavorite, setIsFavorite] = useState<boolean>(cardData.isFavourite);
  const [showPopUp, setShowPopUp] = useState<boolean>(false);

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
    setShowPopUp(true);
  };

  const [showGallery,setShowGallery] = useState(false)

  function toggleGallery(){
    setShowGallery(()=>!showGallery)
  }

  return (
    <>
      {showPopUp && <PopUpMessage />}
      {showGallery && <Gallery/>}
      <div className="flex flex-col gap-6 w-full h-fit min-h-screen px-8 md:px-16 lg:px-32 pt-28 bg-slate-50">
        <div className="flex items-center gap-1 font-medium">
          <Link to="/home" state={{ cards, page: 1 }} className="text-gray-500">
            Cars for Sale /
          </Link>
          <p className="text-blue-950 font-semibold">
            {cardData.name} {cardData.engineType}
          </p>
        </div>

        <div>
          <div className="flex text-3xl gap-4 font-bold">
            {cardData.name} {cardData.engineType}
            <StatusBullet
              status={cardData.status}
              customClass="font-semibold hidden"
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
                <TbRoad size={20} /> {cardData.mileage.toLocaleString()} km
              </div>
              <div className="flex items-center gap-1 text-gray-500 py-1">
                <MdOutlineDateRange size={20} /> {cardData.year}
              </div>
            </div>
            <div className="flex item-center gap-2">
              <button
                onClick={toggleFavorite}
                className={`flex items-center gap-1 px-4 font-semibold hover:text-white hover:bg-red-400 py-1 rounded-md transition-all duration-500 bg-gray-100 shadow-sm`}
              >
                {isFavorite ? (
                  <TbHeartFilled
                    size={20}
                    className="text-red-500 hover:text-white"
                  />
                ) : (
                  <TbHeart size={20} />
                )}

                {isFavorite ? "Saved" : "Save"}
              </button>
              <button className="flex items-center gap-1 px-4 font-semibold hover:bg-gray-200 py-1 rounded-md  transition-all duration-500">
                <MdOutlineShare size={20} />
                Share
              </button>
            </div>
          </div>
        </div>

        <div className="relative w-full flex flex-col md:flex-row gap-3">
          <div className="animate-slideRight mainImage w-full md:w-5/12" onClick={toggleGallery}>
            <img
              src={cardData.link}
              alt="image"
              className="rounded-lg w-full"
            />
          </div>
          <div className="secondaryImages w-full md:w-7/12 grid grid-cols-4 md:grid-cols-3 items-stretch gap-4">
            <img
              src={cardData.link}
              alt="image"
              className="rounded-lg animate-slideRight opacity-0 w-full delay-100"
              style={{
                animationDelay: `.15s`,
                animationFillMode: "forwards",
              }}
            />
            <img
              src={cardData.link}
              alt="image"
              className="rounded-lg animate-slideRight opacity-0  w-full delay-150"
              style={{
                animationDelay: `.30s`,
                animationFillMode: "forwards",
              }}
            />
            <img
              src={cardData.link}
              alt="image"
              className="rounded-lg animate-slideRight opacity-0  w-full delay-200"
              style={{
                animationDelay: `.45s`,
                animationFillMode: "forwards",
              }}
            />
            <img
              src={cardData.link}
              alt="image"
              className="rounded-lg animate-slideRight opacity-0  w-full delay-250"
              style={{
                animationDelay: `.60s`,
                animationFillMode: "forwards",
              }}
            />
            <img
              src={cardData.link}
              alt="image"
              className="rounded-lg animate-slideRight opacity-0  w-full delay-250"
              style={{
                animationDelay: `.75s`,
                animationFillMode: "forwards",
              }}
            />
            <img
              src={cardData.link}
              alt="image"
              className="rounded-lg animate-slideRight opacity-0  w-full delay-250"
              style={{
                animationDelay: `.90s`,
                animationFillMode: "forwards",
              }}
            />
          </div>
          <button className="absolute flex gap-2 items-center bg-white bg-opacity-75 hover:bg-opacity-100 shadow-md px-2 py-1 rounded-md right-2 md:right-4 top-2 md:top-auto md:bottom-4 transition-all">
            <MdOutlineRemoveRedEye size={20} />
            <p className="hidden md:block">See All Photos</p>
            <p className="count font-semibold">34</p>
          </button>
        </div>

        <div>
          <div className="w-full h-10 titles flex gap-6 text-gray-600">
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
                <div
                  className="flex items-center gap-2 py-1 w-1/2"
                  title="Exterior"
                >
                  <PiCarProfile
                    size={20}
                    className="shrink-0 mt-0 transform scale-x-[-1]"
                  />
                  <p>
                    <span>Beige</span>
                  </p>
                </div>

                <div className="flex items-center gap-2 py-1 w-1/2" title="Vin">
                  <img src={vin} alt="Vin" />
                  <p>
                    <span>2GNWO32TE0928372</span>
                  </p>
                </div>
                <div
                  className="flex items-center gap-2 py-1 w-1/2"
                  title="Engine Power"
                >
                  <img src={enginepower} alt="Engine Power" />
                  <p>
                    <span>{cardData.enginePower.toLocaleString()}</span> cc
                  </p>
                </div>
                <div
                  className="flex items-center gap-2 py-1 w-1/2"
                  title="Registration Year"
                >
                  <PiCalendarDots size={20} className="shrink-0 mt-0" />
                  <p>
                    <span>2021</span>
                  </p>
                </div>

                <div
                  className="flex items-center gap-2 py-1 w-1/2"
                  title="Fuel Type"
                >
                  <PiGasCan size={20} className="shrink-0 mt-0" />
                  <p>
                    <span>Petrol</span>
                  </p>
                </div>

                <div
                  className="flex items-center gap-2 py-1 w-1/2"
                  title="Mileage"
                >
                  <PiRoadHorizon size={20} className="shrink-0 mt-0" />
                  <p>
                    <span>{cardData.mileage.toLocaleString()}</span> km
                  </p>
                </div>

                <div
                  className="flex items-center gap-2 py-1 w-1/2"
                  title="Transmission"
                >
                  <GiGearStickPattern size={20} className="shrink-0 mt-0" />
                  <p>Automatic</p>
                </div>

                <div
                  className="flex items-center gap-2 py-1 w-1/2"
                  title="Rating"
                >
                  <MdOutlineStarOutline size={20} className="shrink-0 mt-0" />
                  <p>
                    <span>5</span> Stars
                  </p>
                </div>

                <div
                  className="flex items-center gap-2 py-1 w-1/2"
                  title="Wheel Type"
                >
                  <GiCarWheel size={20} className="shrink-0 mt-0" />
                  <p>
                    <span className="capitalize">Front wheel drive</span>
                  </p>
                </div>

                <div
                  className="flex items-center gap-2 py-1 w-1/2"
                  title="Seat"
                >
                  <MdAirlineSeatReclineNormal
                    size={20}
                    className="shrink-0 mt-0"
                  />
                  <p>
                    <span>5</span> seats
                  </p>
                </div>

                <div
                  className="flex items-center gap-2 py-1 w-1/2"
                  title="Location"
                >
                  <GrLocation size={20} className="shrink-0 mt-0" />
                  <p>
                    <span>Osaka, Japan</span>
                  </p>
                </div>
              </div>
              <button
                onClick={openPopup}
                className="bg-gray-200 px-4 py-1 rounded-md font-semibold hidden"
              >
                View All Details
              </button>
              <Popup
                isOpen={isPopupOpen}
                onClose={closePopup}
                title="Vehicle Overview"
                customClass="m-2"
                content={
                  <div className="grid grid-cols-2 gap-x-4 md:gap-x-28 gap-y-5 py-4 px-0 md:px-2 border-t border-t-gray-200">
                    <div className="flex items-start gap-2">
                      <GoDotFill size={10} className="shrink-0 mt-2" />
                      <p>
                        Serial number : <span>3448395218</span>
                      </p>
                    </div>
                    <div className="flex items-start gap-2">
                      <GoDotFill size={10} className="shrink-0 mt-2" />
                      <p>
                        Seating capacity : <span>5</span>
                      </p>
                    </div>
                    <div className="flex items-start gap-2">
                      <GoDotFill size={10} className="shrink-0 mt-2" />
                      Right hand drive
                    </div>
                    <div className="flex items-start gap-2">
                      <GoDotFill size={10} className="shrink-0 mt-2" />
                      <p>
                        Number of doors : <span>4</span>
                      </p>
                    </div>
                    <div className="flex items-start gap-2">
                      <GoDotFill size={10} className="shrink-0 mt-2" />
                      <p>
                        Max loading : <span>500</span> kg
                      </p>
                    </div>
                    <div className="flex items-start gap-2">
                      <GoDotFill size={10} className="shrink-0 mt-2" />
                      <p>
                        Total gears : <span>8</span>
                      </p>
                    </div>
                    <div className="flex items-start gap-2">
                      <GoDotFill size={10} className="shrink-0 mt-2" />
                      <p>
                        Car dimension : <span>42L x 234W x 243H</span>
                      </p>
                    </div>
                  </div>
                }
              />

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

                <button
                  className="bg-gray-50 hover:bg-amber-100 px-4 py-1 rounded-md font-semibold transition-all"
                  onClick={openAISPopup}
                >
                  View All Details
                </button>

                <Popup
                  title="AIS Inspection"
                  isOpen={isAISPopupOpen}
                  onClose={closeAISPopup}
                  customClass="mx-2"
                  content={
                    <div className="flex flex-col md:gap-x-28 gap-y-3 py-4 px-0 border-t border-t-gray-200">
                      <div className="flex items-center gap-2">
                        <p className="w-48 font-semibold text-gray-600">
                          AIS Total Score
                        </p>
                        <div className="flex items-center gap-2">
                          <div className="stars flex items-center gap-2">
                            <MdOutlineStar
                              size={20}
                              className="shrink-0 text-yellow-500"
                            />
                            <MdOutlineStar
                              size={20}
                              className="shrink-0 text-yellow-500"
                            />
                            <MdOutlineStar
                              size={20}
                              className="shrink-0 text-yellow-500"
                            />
                            <MdOutlineStarHalf
                              size={20}
                              className="shrink-0 text-yellow-500"
                            />
                            <MdOutlineStarBorder
                              size={20}
                              className="shrink-0 text-yellow-500"
                            />
                          </div>
                          <span className="font-semibold">3.5</span>
                        </div>
                      </div>

                      <div className="flex items-center gap-2">
                        <p className="w-48 font-semibold text-gray-600">
                          AIS Interior Score
                        </p>
                        <div className="flex items-center gap-2">
                          <div className="stars flex items-center gap-2">
                            <MdOutlineStar
                              size={20}
                              className="shrink-0 text-yellow-500"
                            />
                            <MdOutlineStar
                              size={20}
                              className="shrink-0 text-yellow-500"
                            />
                            <MdOutlineStar
                              size={20}
                              className="shrink-0 text-yellow-500"
                            />
                            <MdOutlineStarHalf
                              size={20}
                              className="shrink-0 text-yellow-500"
                            />
                            <MdOutlineStarBorder
                              size={20}
                              className="shrink-0 text-yellow-500"
                            />
                          </div>
                          <span className="font-semibold">3.5</span>
                        </div>
                      </div>

                      <div className="flex items-center gap-2">
                        <p className="w-48 font-semibold text-gray-600">
                          AIS Exterior Score
                        </p>
                        <div className="flex items-center gap-2">
                          <div className="stars flex items-center gap-2">
                            <MdOutlineStar
                              size={20}
                              className="shrink-0 text-yellow-500"
                            />
                            <MdOutlineStar
                              size={20}
                              className="shrink-0 text-yellow-500"
                            />
                            <MdOutlineStar
                              size={20}
                              className="shrink-0 text-yellow-500"
                            />
                            <MdOutlineStarHalf
                              size={20}
                              className="shrink-0 text-yellow-500"
                            />
                            <MdOutlineStarBorder
                              size={20}
                              className="shrink-0 text-yellow-500"
                            />
                          </div>
                          <span className="font-semibold">3.5</span>
                        </div>
                      </div>

                      <div className="flex flex-col md:flex-row items-start gap-2">
                        <p className="w-48 font-semibold text-gray-600">
                          Inspector Comment
                        </p>
                        <p className="max-w-96">
                          Lorem, ipsum dolor sit amet consectetur adipisicing
                          elit. In atque excepturi laborum magni consequatur,
                          architecto earum reprehenderit quibusdam quod soluta
                          dolores numquam explicabo quos. Voluptatibus
                          perferendis vel reprehenderit iste nihil?
                        </p>
                      </div>

                      <div className="flex items-start gap-2">
                        <p className="w-48 font-semibold text-gray-600">
                          Inspected Date
                        </p>
                        <p className="max-w-96">24 June 2021</p>
                      </div>
                      <div className="flex items-start gap-2 mb-2">
                        <p className="w-48 font-semibold text-gray-600">
                          Inspected Expired Date
                        </p>
                        <p className="max-w-96">24 June 2025</p>
                      </div>

                      <div className="border-t border-t-gray-200 py-4">
                        <p className="text-2xl font-bold">Condition Details</p>
                        <div className="grid grid-cols-2 gap-x-4 md:gap-x-28 gap-y-5 pt-6">
                          <div className="flex items-center gap-2">
                            <IoCheckmarkCircle
                              size={20}
                              className="shrink-0 text-green-600"
                            />
                            <p>No Accident History</p>
                          </div>
                          <div className="flex items-center gap-2">
                            <IoCheckmarkCircle
                              size={20}
                              className="shrink-0 text-green-600"
                            />
                            <p>No Accident History</p>
                          </div>
                          <div className="flex items-center gap-2">
                            <IoCheckmarkCircle
                              size={20}
                              className="shrink-0 text-green-600"
                            />
                            <p>No Accident History</p>
                          </div>
                          <div className="flex items-center gap-2">
                            <IoCheckmarkCircle
                              size={20}
                              className="shrink-0 text-green-600"
                            />
                            <p>No Accident History</p>
                          </div>
                          <div className="flex items-center gap-2">
                            <IoCheckmarkCircle
                              size={20}
                              className="shrink-0 text-green-600"
                            />
                            <p>No Accident History</p>
                          </div>
                          <div className="flex items-center gap-2">
                            <IoCheckmarkCircle
                              size={20}
                              className="shrink-0 text-green-600"
                            />
                            <p>No Accident History</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  }
                />
              </div>
            </div>
            <div
              ref={carFeaturesRef}
              className="section border-b border-b-gray-200 py-4"
            >
              <h2 className="text-2xl font-bold">Car Features</h2>
              <div className="carFeatures flex flex-wrap gap-y-4 py-4">
                <div className="flex items-center gap-2 py-1 w-1/2">
                  <IoCheckmarkCircleOutline
                    size={20}
                    className="shrink-0 text-yellow-500"
                  />
                  <p>
                    <span>Air Condition </span>
                  </p>
                </div>
                <div className="flex items-center gap-2 py-1 w-1/2">
                  <IoCheckmarkCircleOutline
                    size={20}
                    className="shrink-0 text-yellow-500"
                  />
                  <p>
                    <span>Keyless Entry</span>
                  </p>
                </div>
                <div className="flex items-center gap-2 py-1 w-1/2">
                  <IoCheckmarkCircleOutline
                    size={20}
                    className="shrink-0 text-yellow-500"
                  />
                  <p>
                    <span>Air-Bag</span>
                  </p>
                </div>
                <div className="flex items-center gap-2 py-1 w-1/2">
                  <IoCheckmarkCircleOutline
                    size={20}
                    className="shrink-0 text-yellow-500"
                  />
                  <p>
                    <span>Smart Key</span>
                  </p>
                </div>
                <div className="flex items-center gap-2 py-1 w-1/2">
                  <IoCheckmarkCircleOutline
                    size={20}
                    className="shrink-0 text-yellow-500"
                  />
                  <p>
                    <span>ABS</span>
                  </p>
                </div>
                <div className="flex items-center gap-2 py-1 w-1/2">
                  <IoCheckmarkCircleOutline
                    size={20}
                    className="shrink-0 text-yellow-500"
                  />
                  <p>
                    <span>Back Camera</span>
                  </p>
                </div>
                <div className="flex items-center gap-2 py-1 w-1/2">
                  <IoCheckmarkCircleOutline
                    size={20}
                    className="shrink-0 text-yellow-500"
                  />
                  <p>
                    <span>Sunroof</span>
                  </p>
                </div>
                <div className="flex items-center gap-2 py-1 w-1/2">
                  <IoCheckmarkCircleOutline
                    size={20}
                    className="shrink-0 text-yellow-500"
                  />
                  <p>ETC</p>
                </div>
                <div className="flex items-center gap-2 py-1 w-1/2">
                  <IoCheckmarkCircleOutline
                    size={20}
                    className="shrink-0 text-yellow-500"
                  />
                  <p>
                    <span>Aluminium Wheel</span>
                  </p>
                </div>
                <div className="flex items-center gap-2 py-1 w-1/2">
                  <IoCheckmarkCircleOutline
                    size={20}
                    className="shrink-0 text-yellow-500"
                  />
                  <p>
                    <span>Leather Seat</span>
                  </p>
                </div>
              </div>

              {/* <button
                className="bg-gray-200 px-4 py-1 rounded-md font-semibold hidden"
                onClick={openFeaturePopup}
              >
                View All Features
              </button>
              <Popup
                isOpen={isFeaturePopupOpen}
                onClose={closeFeaturePopup}
                title="Car Features"
                customClass="m-2"
                content={
                  <div className="grid grid-cols-2 gap-x-12 md:gap-x-28 gap-y-5 py-4 px-0 md:px-2 border-t border-t-gray-200">
                    <div className="flex items-center gap-2">
                      <IoCheckmarkCircleOutline
                        size={20}
                        className="shrink-0 text-yellow-500"
                      />
                      <p>Air conditioning</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <IoCheckmarkCircleOutline
                        size={20}
                        className="shrink-0 text-yellow-500"
                      />
                      <p>Keyless entry</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <IoCheckmarkCircleOutline
                        size={20}
                        className="shrink-0 text-yellow-500"
                      />
                      Air-bag
                    </div>
                    <div className="flex items-center gap-2">
                      <IoCheckmarkCircleOutline
                        size={20}
                        className="shrink-0 text-yellow-500"
                      />
                      <p>Smart key</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <IoCheckmarkCircleOutline
                        size={20}
                        className="shrink-0 text-yellow-500"
                      />
                      <p>ABS</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <IoCheckmarkCircleOutline
                        size={20}
                        className="shrink-0 text-yellow-500"
                      />
                      <p>Back camera</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <IoCheckmarkCircleOutline
                        size={20}
                        className="shrink-0 text-yellow-500"
                      />
                      <p>Sunroof</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <IoCheckmarkCircleOutline
                        size={20}
                        className="shrink-0 text-yellow-500"
                      />
                      <p>ETC</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <IoCheckmarkCircleOutline
                        size={20}
                        className="shrink-0 text-yellow-500"
                      />
                      <p>Aluminium wheel</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <IoCheckmarkCircleOutline
                        size={20}
                        className="shrink-0 text-yellow-500"
                      />
                      <p>Leather seat</p>
                    </div>
                  </div>
                }
              /> */}
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
            <div>
              <div
                ref={commentsRef}
                className="section border-b border-b-gray-200 py-4"
              >
                <h2 className="text-2xl font-bold pb-4">
                  Comments (
                  <span className="commentCount">{comments.length}</span>)
                </h2>
                <div className="commentBox flex flex-col gap-4 border p-4 mb-4 pr-1 rounded-lg">
                  {comments.length === 0 ? (
                    <p className="text-gray-400">
                      Ask anything. Admin will reply to you soon.
                    </p>
                  ) : (
                    comments.map((comment: any, index: any) => (
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
                    src={cardData.link} // Placeholder for the profile image
                    className="w-12 md:w-12 aspect-square bg-center bg-fixed bg-cover rounded-full"
                    alt="profile"
                  />
                  <input
                    type="text"
                    className="h-12 bg-white border rounded-md px-2 w-full"
                    placeholder="Enter Comment"
                    value={newComment}
                    onChange={handleInputChange} // Track the input value
                  />
                  <button
                    onClick={handleAddComment} // Add the new comment on click
                    className={` text-nowrap px-4 py-1 rounded-md font-semibold transition-all ${
                      newComment.trim() === ""
                        ? "bg-gray-200 cursor-not-allowed"
                        : "bg-amber-200 border border-yellow-400 cursor-pointer"
                    }`}
                    disabled={newComment.trim() === ""} // Disable the button if input is empty
                  >
                    Submit
                  </button>
                </div>
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
          <h1 className="text-3xl pb-4 font-bold">Recommend for you</h1>
          <div className="flex flex-col md:flex-row gap-4">
            {recommend.map((cardData: any, index: number) => (
                <AucNetCard
                  key={index}
                  customClass={`opacity-0 delay-${
                    index === 0 ? 0 : index === 1 ? 100 : 200
                  }`}
                  style={{
                    animationDelay: `${index === 0 ? "0s" : `${index * 0.1}s`}`,
                    animationFillMode: "forwards",
                  }}
                  carData={cardData}
                  showStatus={cardData.isBasket ? true : false}
                />
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailsPage;
