import React, { useState } from "react";
import AdminStatusBullet from "./AdminStatusBullet";
import { FaChevronDown } from "react-icons/fa";
import { MdImage } from "react-icons/md";
import DropDown from "../DropDown";

interface AdminTableRowProps {
  customClass?: string;
  activeColor?: string;
  isActive?: boolean;
  title?: string;
  count?: number;
  car: any;
  isSelected: boolean;
  onClick?: () => void;
  onCheckboxChange?: any;
}

const AdminTableRow: React.FC<AdminTableRowProps> = ({
  car,
  onClick,
  onCheckboxChange,
  isSelected = false,
}) => {
  const status: string[] = [
    "All",
    "New",
    "Approved",
    "Qualified",
    "Processed",
    "Finished",
  ];

  const conditions: string[] = [
    "Condition",
    "Not Paid",
    "Cancelled",
    "Group",
    "No Bid",
    "Too Low Bid",
    "Hold",
    "Leave,Admin",
  ];
  const statusSelectBefore: string[] = [
    "No Sales Code",
    "Cancel",
    "Last",
    "SKTSU",
    "Sold",
    "Nego",
    "BGHT",
    "Hold",
  ];
  const statusSelectAfter: string[] = [
    "Not Auction",
    "Cancelled",
    "Last Bid",
    "Not Bought",
    "Bought",
    "Sold By Nego",
    "Hold",
    "Blocked",
  ];

  const [currentStatus, setCurrentStatus] = useState(car.status);

  const handleStatusChange = (newstatus: any) => {
    console.log(newstatus);
    setCurrentStatus(newstatus);
  };

  return (
    <>
      <tr className="bg-white">
        <td rowSpan={2} className="border align-top text-center px-1">
        <input
          type="checkbox"
          checked={isSelected}
          onChange={(e) => onCheckboxChange(e.target.checked)}
        />
        </td>
        <td
          rowSpan={2}
          className="border align-top text-center font-semibold px-1"
        >
          <p>{car.id + 1}</p>
        </td>
        <td
          rowSpan={2}
          className="relative w-32 align-top border p-0 text-center"
          style={{ height: "75px", verticalAlign: "top", lineHeight: 0 }}
        >
          <div
            className="imageContainer w-full h-full relative cursor-pointer overflow-hidden"
            onClick={onClick}
          >
            <img
              className={`w-full h-full object-cover block`}
              src={`../src/assets/images/stock/00165048_01.jpg`}
              style={{ filter: `hue-rotate(${car.id * 30}deg)` }}
              alt=""
            />
            <button className="imageCount flex items-center gap-1 absolute bottom-1 right-1 bg-black bg-opacity-20 px-1 rounded-md text-sm text-white cursor-pointer">
              <MdImage size={12} />
              {car.images}
            </button>
          </div>
        </td>

        <td className="border text-center py-2">
          <div className=" flex flex-col gap-1">
            <p className="date">{`${car.orderDate}`}</p>
            <div className="relative h-8 flex justify-center group">
              <AdminStatusBullet
                status={currentStatus}
                customClass="rounded-md w-28"
              />
              <div className="statuses absolute left-0 group-hover:left-3 opacity-0 group-hover:opacity-100 flex w-0 group-hover:w-auto z-20 rounded-md overflow-hidden transition-all delay-100">
                {status.slice(1).map((item, index) => (
                  <AdminStatusBullet
                    key={index}
                    status={item}
                    customClass=""
                    onClick={() => handleStatusChange(item)}
                  />
                ))}
              </div>
            </div>
          </div>
        </td>
        <td className="border text-center py-2">
          <div className="flex flex-col gap-1">
            <p className="Model">{`${car.make} ${car.model}`}</p>
            <p className="Chassis">{`${car.chassis}`}</p>
          </div>
        </td>
        <td className="border w-36 text-center py-2">
          <div className="flex flex-col gap-1">
            <p className="customer font-bold">{`${car.customer}`}</p>
            <p className="region">{`${car.region}`}</p>
          </div>
        </td>
        <td className="w-48 border text-center font-semibold py-2">
          <div className="flex flex-col gap-1">
            <p className="price font-bold">
              ¥{`${car.stockPrice.toLocaleString()}`}
            </p>
          </div>
        </td>
        <td className="w-48 border text-center font-semibold py-2">
          <DropDown
            options={conditions}
            customClass="md:w-fit h-fit text-sm bg-gray-100"
            optionClass="w-full h-fit text-sm"
            optionBoxClass="left-0 w-fit-cus h-fit z-50"
            buttonClass="py-1"
            selected={car.leaveReason}
          />
        </td>
        <td className="w-48 border text-center font-semibold py-2">
          <div className="flex flex-col items-center gap-0.5">
            <DropDown
              options={statusSelectBefore}
              customClass="md:w-36 h-fit text-sm bg-gray-100"
              optionClass="w-fit h-fit text-sm"
              optionBoxClass="left-0 w-fit h-fit z-20"
              buttonClass="py-0.5"
              selected={car.stateBefore}
            />
            <FaChevronDown size={10} className="text-gray-400" />
            <DropDown
              options={statusSelectAfter}
              customClass="md:w-36 h-fit text-sm bg-gray-100"
              optionClass="w-fit h-fit text-sm bg-gray-100"
              optionBoxClass="left-0 w-fit h-fit z-20"
              buttonClass="py-0.5"
              selected={car.stateAfter}
            />
          </div>
        </td>
        <td className="w-48 border text-center font-semibold py-2">
          <div className="flex justify-center gap-1">
            <input
              type="text"
              className="border w-12 px-1 rounded-md bg-gray-100"
              placeholder="¥00"
            />
            <p className="price font-bold">,000</p>
          </div>
        </td>
      </tr>

      <tr className="bg-white border-b-2 border-b-slate-300">
        <td colSpan={3} className="border text-center">
          <div className="flex w-full h-full">
            <div className="flex w-1/2 flex-col">
              <textarea
                className="border-b h-14 resize-none p-1 outline-none focus-within:border focus-within:border-slate-500"
                placeholder="Customer Comment"
              />
              <textarea
                className="h-14 resize-none p-1 outline-none focus-within:border focus-within:border-slate-500"
                placeholder="Admin Comment to Customer"
              />
            </div>
            <div className="flex w-1/2">
              <textarea
                className="border-l h-full w-full resize-none p-1 outline-none focus-within:border focus-within:border-slate-500"
                placeholder="Admin Comment"
              />
            </div>
          </div>
        </td>
        <td colSpan={2} className="border text-center">
          <div className="flex w-full flex-col">
            <textarea
              className="border-b h-14 resize-none p-1 outline-none focus-within:border focus-within:border-slate-500"
              placeholder="Car Comment of The Day"
            />
            <textarea
              className="h-14 resize-none p-1 bg-gray-100  outline-none focus-within:border focus-within:border-slate-500"
              placeholder="Car Comment of The Past"
            />
          </div>
        </td>
        <td colSpan={2} className="border text-center">
          <div className="flex w-full flex-col">
            <textarea
              className="border-b h-14 resize-none p-1 outline-none focus-within:border focus-within:border-slate-500"
              placeholder="Shitami Comment of The Day"
            />
            <textarea
              className="h-14 resize-none p-1 bg-gray-100 outline outline-1 outline-gray-100 outline-none focus-within:border focus-within:border-slate-500"
              placeholder="Shitami Comment of The Past"
            />
          </div>
        </td>
      </tr>
    </>
  );
};

export default AdminTableRow;
