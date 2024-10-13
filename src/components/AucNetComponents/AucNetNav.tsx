import React, { useState } from "react";
import {
  MdOutlineShoppingCart,
  MdFavoriteBorder,
} from "react-icons/md";
import {  FaBars, FaTimes } from "react-icons/fa";
import cosmoLogo from "../../assets/CosmoLogo.svg";
import JapanFlag from "../../assets/JapanFlag.svg";
import ProfileDropDown from "./ProfileDropDown";
import { Link, useLocation, useNavigate } from "react-router-dom";
import NotiDropDown from "./NotiDropDown";

interface AucNetNavProps {
  isAdmin?: boolean;
  basketCount?: number;
  favouriteCount?: number;
  notifications?: any;
  customClass?:string;
  onClick?: () => void;
}

const overHundoCheck = (num: number) => {
  if (num >= 100) {
    return "99+";
  }
  return num;
};

const AucNetNav: React.FC<AucNetNavProps> = ({
  isAdmin = "",
  basketCount = 0,
  favouriteCount = 0,
  notifications = 0,
  customClass,
  onClick,
}) => {
  // State to handle burger menu toggle
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  // Function to toggle the menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navigate = useNavigate();

  const location = useLocation();

  const cards = location.state?.cards || [];

  basketCount = cards.filter((card:any) => card.isBasket === true).length;
  favouriteCount = cards.filter((card:any) => card.isFavourite === true).length;
  const handleButtonClick = (location: any) => {
    return navigate(`/${location}`, { state: { cards } });
  };

  const activeNavClass = "text-yellow-600 bg-amber-100 md:bg-transparent md:border-b-4 md:border-b-yellow-600"

  return (
    <nav className={`flex bg-white justify-between gap-4 align-middle fixed w-screen top-0 left-0 shadow-sm px-8 md:px-16 lg:px-32 py-0 z-50 ${customClass}`}>
      <img
        src={cosmoLogo}
        alt="Logo"
        className="w-32 my-3"
        onClick={() => (onClick ? onClick() : handleButtonClick(""))}
      />

      {/* Burger Menu Icon for mobile */}
      <div className="md:hidden flex items-center">
        <button onClick={toggleMenu}>
          {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* Main Menu */}
      <div
        className={`burgerNavs px-8 pb-4 md:pb-0 md:px-0 flex-col md:flex-row gap-5 w-full justify-between md:flex md:pl-4 absolute md:static top-16 left-0 md:left-auto bg-white md:bg-transparent md:w-full transition-all duration-300 ease-in-out shadow-lg md:shadow-none z-40 ${
          isMenuOpen ? "flex" : "hidden"
        } md:flex`}
      >
        <div className="navLinks w-full py-2 flex flex-col gap-4 flex-start md:flex-row items-center md:justify-start">
          <Link
            to="/home"
            state={{ cards ,page:1}}
            className={`flex px-2 w-full md:w-auto md:h-full justify-center items-center font-bold rounded-md md:rounded-none ${!isAdmin && activeNavClass}`}
          >
            Car Stock
          </Link>

          {isAdmin && (
            <Link
              to="/admin"
              state={{ cards ,page:1}}
              className={`flex px-2 w-full md:w-auto md:h-full justify-center items-center font-bold rounded-md md:rounded-none ${isAdmin && activeNavClass}`}
            >
              Flow
            </Link>
          )}
        </div>

        <div className="flex flex-col md:flex-row items-center gap-4">
          <div className="flex mt-4 md:mt-0 gap-8 w-full md:w-auto justify-between">
            <div className="flex gap-4 px-4">
              <button
                className="relative hover:text-yellow-600"
                onClick={() =>
                  onClick ? onClick() : handleButtonClick("basket")
                }
              >
                <MdOutlineShoppingCart size={24} />
                {basketCount != 0 && (
                  <span className="absolute bottom-5 bg-red-600 text-white rounded-full px-1 text-xs">
                    {overHundoCheck(basketCount)}
                  </span>
                )}
              </button>
              <button
                className="relative hover:text-yellow-600"
                onClick={() =>
                  onClick ? onClick() : handleButtonClick("favourites")
                }
              >
                <MdFavoriteBorder size={24} />
                {favouriteCount != 0 && (
                  <span className="absolute bottom-5 bg-red-600 text-white rounded-full px-1 text-xs">
                    {overHundoCheck(favouriteCount)}
                  </span>
                )}
              </button>
              <NotiDropDown notifications={notifications}/>
            </div>
            <div className="flex justify-center">
              <img src={JapanFlag} alt="Flag" className="pr-1" />
              <span className="text-nowrap">11:42 am</span>
            </div>
            <ProfileDropDown />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default AucNetNav;
