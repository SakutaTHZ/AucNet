import React from "react";
import { IoCarOutline, IoCloseCircle, IoTime } from "react-icons/io5";
import { TbCalendarCancel, TbCalendarCheck } from "react-icons/tb";

interface StatusBulletProps {
  customClass?: string;
  status?: string;
}

const StatusBullet: React.FC<StatusBulletProps> = ({
  customClass = "",
  status = "checkavailability",
}) => {
  return (
    <>
      {status === "checkavailability" ? (
        <div
        className={`bulletCard text-sm flex gap-1 items-center bg-blue-200 text-blue-900 shadow-sm w-fit px-3 py-1 rounded-md ${customClass}`}>
          <div className="relative">
            <IoTime size={10} className="absolute -right-0.5 -top-0.5" />
            <IoCarOutline size={20} />
          </div>
          <p>Checking Availability</p>
        </div>
      ) : status === "unavailable" ? (
        <div
        className={`bulletCard text-sm flex gap-1 items-center bg-red-200 text-red-900 shadow-sm w-fit px-3 py-1 rounded-md ${customClass}`}>
          <div className="relative">
            <IoCloseCircle  size={10} className="absolute -right-0.5 -top-0.5" />
            <IoCarOutline size={20} />
          </div>
          <p>Unavailable</p>
        </div>
      ) : status === "orderconfirmed" ? (
        <div
        className={`bulletCard text-sm flex gap-1 items-center bg-purple-200 text-purple-900 shadow-sm w-fit px-3 py-1 rounded-md ${customClass}`}>
          <div className="relative">
            <TbCalendarCheck size={20} />
          </div>
          <p>Order Confirmed</p>
        </div>
      ) : status === "canceled" ? (
        <div
        className={`bulletCard text-sm flex gap-1 items-center bg-orange-200 text-orange-900 shadow-sm w-fit px-3 py-1 rounded-md ${customClass}`}>
          <div className="relative">
            <TbCalendarCancel size={20} />
          </div>
          <p>Order Cancelled</p>
        </div>
      ) : status === "purchased" ? (
        <div
        className={`bulletCard text-sm flex gap-1 items-center bg-green-200 text-green-900 shadow-sm w-fit px-3 py-1 rounded-md ${customClass}`}>
          <div className="relative">
            <IoTime size={10} className="absolute -right-0.5 -top-0.5" />
            <IoCarOutline size={20} />
          </div>
          <p>Purchased</p>
        </div>
      ) : (
        <>
        </>
      )}
    </>
  );
};

export default StatusBullet;
