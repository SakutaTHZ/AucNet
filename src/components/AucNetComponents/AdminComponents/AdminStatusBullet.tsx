import React from "react";
import { IoMdCheckmark } from "react-icons/io";
import { LuStar } from "react-icons/lu";
import { PiStarHalf } from "react-icons/pi";
import { TbTag, TbFlag } from "react-icons/tb";

interface AdminStatusBulletProps {
  customClass?: string;
  status: string;
  onClick?: () => void;
}

const AdminStatusBullet: React.FC<AdminStatusBulletProps> = ({
  status,
  customClass,
  onClick,
}) => {
  return (
    <>
      {status == "New" ? (
        <button
          className={`flex gap-1 items-center justify-center bg-[#FEEBA6] hover:bg-[#ffe483] px-2 py-1 font-semibold ${customClass}`}
          onClick={onClick}
        >
          <TbTag size={18} className="flex-shrink-0"/>
          New
        </button>
      ) : status == "Approved" ? (
        <button
          className={`flex gap-1 items-center justify-center bg-orange-200 hover:bg-orange-300 px-2 py-1 font-semibold ${customClass}`}
          onClick={onClick}
        >
          <LuStar  size={18} className="flex-shrink-0"/>
          Approved
        </button>
      ) : status == "Qualified" ? (
        <button
          className={`flex gap-1 items-center justify-center bg-amber-300 hover:bg-amber-400 px-2 py-1 font-semibold ${customClass}`}
          onClick={onClick}
        >
          <PiStarHalf size={18} className="flex-shrink-0" />
          Qualified
        </button>
      ) : status == "Processed" ? (
        <button
          className={`flex gap-1 items-center justify-center bg-green-200 hover:bg-green-300 px-2 py-1 font-semibold ${customClass}`}
          onClick={onClick}
        >
          <IoMdCheckmark size={18} className="flex-shrink-0" />
          Processed
        </button>
      ) : (
        <button
          className={`flex gap-1 items-center justify-center bg-blue-200 hover:bg-blue-300 px-2 py-1 font-semibold ${customClass}`}
          onClick={onClick}
        >
          <TbFlag size={18} className="flex-shrink-0" />
          Finished
        </button>
      )}
    </>
  );
};

export default AdminStatusBullet;
