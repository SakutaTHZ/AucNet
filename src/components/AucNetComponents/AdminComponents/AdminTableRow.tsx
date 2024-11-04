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
  onClick?: () => void;
}

const AdminTableRow: React.FC<AdminTableRowProps> = ({ onClick }) => {
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


  const [currentStatus, setCurrentStatus] = useState("New");

  const handleStatusChange = (newstatus:any) => {
    console.log(newstatus)
    setCurrentStatus(newstatus);
  };

  return (
    <>
      <tr className="bg-white">
        <td rowSpan={2} className="border align-top text-center px-1">
          <input type="checkbox" name="check" id="" />
        </td>
        <td
          rowSpan={2}
          className="border align-top text-center font-semibold px-1"
        >
          <p>1</p>
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
              className="w-full h-full object-cover block"
              src="https://cosmo-images.azureedge.net/stock/original/our_78146_b49d9285-cc91-4b89-92a6-1e4d2a9e310b.jpg?preset=bigimage"
              alt=""
            />
            <button className="imageCount flex items-center gap-1 absolute bottom-1 right-1 bg-black bg-opacity-20 px-1 rounded-md text-sm text-white cursor-pointer">
              <MdImage size={12} />
              12
            </button>
          </div>
        </td>

        <td className="border text-center py-2">
          <div className=" flex flex-col gap-1">
            <p className="date">13-May-2024</p>
            <div className="relative h-8 flex justify-center group">
              <AdminStatusBullet status={currentStatus} customClass="rounded-md w-28"/>
              <div className="statuses absolute left-3 hidden group-hover:flex z-20 rounded-md overflow-hidden">
                {status.slice(1).map((item, index) => (
                  <AdminStatusBullet key={index} status={item} customClass="" onClick={() => handleStatusChange(item)}/>
                ))}
              </div>
            </div>
          </div>
        </td>
        <td className="border text-center py-2">
          <div className="flex flex-col gap-1">
            <p className="Model">Audi A3 2014</p>
            <p className="Chassis">TRUZZZ8J571014727</p>
          </div>
        </td>
        <td className="border w-36 text-center py-2">
          <div className="flex flex-col gap-1">
            <p className="customer font-bold">Mr Sakuta</p>
            <p className="region">Japan</p>
          </div>
        </td>
        <td className="border text-center font-semibold py-2">
          <div className="flex flex-col gap-1">
            <p className="price font-bold">¥151,000</p>
          </div>
        </td>
        <td className="border text-center font-semibold py-2">
          <DropDown
            options={conditions}
            customClass="md:w-fit h-fit text-sm"
            optionClass="w-fit h-fit text-sm"
            optionBoxClass="left-0 w-fit h-fit"
            buttonClass="py-1"
          />
        </td>
        <td className="border text-center font-semibold py-2">
          <div className="flex flex-col items-center gap-0.5">
            <DropDown
              options={statusSelectBefore}
              customClass="md:w-36 h-fit text-sm"
              optionClass="w-fit h-fit text-sm"
              optionBoxClass="left-0 w-fit h-fit z-20"
              buttonClass="py-0.5"
            />
            <FaChevronDown size={10} className="text-gray-400" />
            <DropDown
              options={statusSelectAfter}
              customClass="md:w-36 h-fit text-sm"
              optionClass="w-fit h-fit text-sm"
              optionBoxClass="left-0 w-fit h-fit z-20"
              buttonClass="py-0.5"
            />
          </div>
        </td>
        <td className="border text-center font-semibold py-2">
          <div className="flex justify-center gap-1">
            <input
              type="text"
              className="border w-12 px-1 rounded-md"
              placeholder="¥00"
            />
            <p className="price font-bold">,000</p>
          </div>
        </td>
      </tr>

      <tr className="bg-white">
        <td colSpan={3} className="border text-center">
          <div className="flex w-full h-full">
            <div className="flex w-1/2 flex-col">
              <textarea
                className="border-b h-14 resize-none p-1"
                placeholder="Customer Comment"
              />
              <textarea
                className="h-14 resize-none p-1"
                placeholder="Admin Comment to Customer"
              />
            </div>
            <div className="flex w-1/2">
              <textarea
                className="border-l h-full w-full resize-none p-1"
                placeholder="Admin Comment"
              />
            </div>
          </div>
        </td>
        <td colSpan={2} className="border text-center">
          <div className="flex w-full flex-col">
            <textarea
              className="border-b h-14 resize-none p-1"
              placeholder="Car Comment of The Day"
            />
            <textarea
              className="h-14 resize-none p-1 bg-gray-100 outline outline-1 outline-gray-100"
              placeholder="Car Comment of The Past"
            />
          </div>
        </td>
        <td colSpan={2} className="border text-center">
          <div className="flex w-full flex-col">
            <textarea
              className="border-b h-14 resize-none p-1"
              placeholder="Shitami Comment of The Day"
            />
            <textarea
              className="h-14 resize-none p-1 bg-gray-100 outline outline-1 outline-gray-100"
              placeholder="Shitami Comment of The Past"
            />
          </div>
        </td>
      </tr>
    </>
  );
};

export default AdminTableRow;
