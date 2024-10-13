import { useLocation } from "react-router-dom";
import AucNetRow from "../../components/AucNetComponents/AucNetRow";
import AucNetCard from "../../components/AucNetComponents/AucNetCard";
import { FaListUl } from "react-icons/fa6";
import { MdBorderAll } from "react-icons/md";
import { useState } from "react";
import { IoHeartOutline } from "react-icons/io5";

const FavouritePage = () => {
  const [isTableView, setIsTableView] = useState(false);

  const location = useLocation();

  const cards = location.state?.cards || [];

  const favouriteCards = cards.filter((card: any) => card.isFavourite === true);

  console.log(favouriteCards);

  return (
    <div className="flex flex-col gap-6 w-full h-fit min-h-screen px-8 md:px-16 lg:px-32 pt-28 bg-slate-50">
      <div className="flex flex-col gap-8">
        <div className="w-full flex items-center justify-between">
          <h1 className="text-3xl text-neutral-900 font-bold">
            Favourite Listings
          </h1>
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

      {/* Cards Container */}
      {favouriteCards.length == 0 ? (
        <div className="w-full h-96 flex flex-col md:flex-row gap-3 text-xl md:text-2xl items-center justify-start md:justify-center py-5">
          <IoHeartOutline size={30} className="text-gray-400" />
          <p className="text-center text-gray-400 font-semibold">
            Your favourites list is empty—time to fill it with cars you love!
          </p>
        </div>
      ) : isTableView ? (
        <div className="rightBox flex flex-col gap-3 w-full h-full">
          {favouriteCards.map((cardData: any, index: number) => (
            <AucNetRow
              key={index}
              customClass={`opacity-0 delay-${
                index === 0 ? 0 : index === 1 ? 100 : 200
              }`}
              style={{
                animationDelay: `${index === 0 ? "0s" : `${index * 0.1}s`}`,
                animationFillMode: "forwards",
              }}
              carData={cardData}
            />
          ))}
        </div>
      ) : (
        <div className="rightBox grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 w-full h-full">
          {favouriteCards.map((cardData: any, index: number) => (
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
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default FavouritePage;
