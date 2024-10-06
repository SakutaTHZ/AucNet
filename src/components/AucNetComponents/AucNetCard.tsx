import React, { useState, CSSProperties } from 'react';
import { MdFavoriteBorder, MdOutlineDirectionsCar, MdOutlineDateRange } from 'react-icons/md';
import { TbEngine, TbRoad } from 'react-icons/tb';
import StatusBullet from './StatusBullet';
import { useNavigate } from 'react-router-dom';

interface AucNetCardProps {
  customClass?: string;
  style?: CSSProperties;
  carData?:any;
  showStatus?:boolean;
  onClick?: () => void;
}

const AucNetCard: React.FC<AucNetCardProps> = ({ customClass, style,carData,showStatus=false, onClick }) => {
  const navigate = useNavigate();

  const handleCardClick = (cardData: any) => {
    console.log('clicked')
    navigate("/details", { state: { card: cardData } });
  };
  
  const [isFavorite, setIsFavorite] = useState<boolean>(false); // State to manage favorite status

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite); // Toggle favorite status
  };

  return (
    <div
      className={`card animate-slideUp transition-all flex flex-col w-full hover:bg-slate-100 cursor-pointer border border-slate-100 h-fit p-0 rounded-xl overflow-hidden shadow-md hover:shadow-lg ${customClass}`}
      style={style}
    >
      <div className="imageBox relative w-full flex items-start justify-center overflow-hidden h-48" >
        <img src={carData.link} className='w-full' alt="image" 
      onClick={() => (onClick ? onClick() : handleCardClick(carData))}/>
        <StatusBullet customClass={`absolute top-1 left-1 text-xs rounded-xl font-semibold ${showStatus?'block':'hidden'}`} status={carData.status}/>
        <button
          onClick={toggleFavorite}
          className={`bg-gray-900 bg-opacity-20 p-1.5 rounded-full absolute top-2 right-2 backdrop-blur-sm transition-all ${
            isFavorite ? 'bg-red-500' : 'text-white'
          }`}
        >
          {isFavorite ? (
            <MdFavoriteBorder size={24} className="text-red-500" />
          ) : (
            <MdFavoriteBorder size={24} className="text-white" />
          )}
        </button>
      </div>
      <div className="flex w-full justify-start items-start p-3 border-b border-gray-200" 
      onClick={() => (onClick ? onClick() : handleCardClick(carData))}>
        <div className="flex flex-col w-full gap-1 justify-start items-start">
          <p className="text-lg font-medium">{carData.name}</p>
          <p className="text-base text-gray-600">{carData.engineType}</p>
        </div>
        <div className="flex items-center text-2xl font-bold">¥{(carData.price).toLocaleString()}</div>
      </div>
      <div className="flex flex-wrap p-3 gap-.5 box-border">
        <div className="flex items-center gap-1 w-1/2 text-gray-500 py-1">
          <MdOutlineDirectionsCar size={20} /> {carData.type}
        </div>
        <div className="flex items-center gap-1 w-1/2 text-gray-500 py-1">
          <TbEngine size={20} /> {carData.enginePower} cc
        </div>
        <div className="flex items-center gap-1 w-1/2 text-gray-500 py-1">
          <TbRoad size={20} /> {carData.mileage} km
        </div>
        <div className="flex items-center gap-1 w-1/2 text-gray-500 py-1">
          <MdOutlineDateRange size={20} /> {carData.year}
        </div>
      </div>
    </div>
  );
};

export default AucNetCard;
