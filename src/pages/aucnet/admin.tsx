import React, { useState } from "react";
import SearchBox from "../../components/AucNetComponents/SearchBox";
import SuperStatusBullet from "../../components/AucNetComponents/AdminComponents/SuperStatusBullet";
import DropDown from "../../components/AucNetComponents/DropDown";
import { MdImage } from "react-icons/md";
import { FaChevronDown } from "react-icons/fa";

const adminPage: React.FC = () => {
  const [activeBullet, setActiveBullet] = useState<string>("New");

  const handleBulletClick = (bulletTitle: string) => {
    setActiveBullet(bulletTitle);
  };

  const status: string[] = [
    "All",
    "New",
    "Approved",
    "Qualified",
    "Processed",
    "Finished",
  ];
  const region: string[] = [
    "All",
    "Japan",
    "Myanmar",
    "Sweeden",
    "Australia",
    "Cyprus",
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

  return (
    <div className="w-full h-fit min-h-screen px-8 md:px-16 lg:px-32 pt-24 bg-slate-50">
      <div className="flex flex-col gap-2 pb-4 border-b border-b-gray-200">
        <div className="flex gap-2">
          {[
            {
              title: "New",
              color: "bg-yellow-200",
              count: 100,
            },
            {
              title: "Approved",
              color: "bg-amber-200",
              count: 100,
            },
            {
              title: "Qualified",
              color: "bg-orange-300",
              count: 100,
            },
            {
              title: "Processed",
              color: "bg-green-300",
              count: 100,
            },
            {
              title: "Finished",
              color: "bg-blue-200",
              count: 100,
            },
            { title: "All", color: "bg-gray-300", count: 100 },
          ].map((bullet) => (
            <SuperStatusBullet
              key={bullet.title}
              title={bullet.title}
              activeColor={bullet.color}
              isActive={activeBullet === bullet.title}
              count={bullet.count}
              onClick={() => handleBulletClick(bullet.title)}
            />
          ))}
          <SearchBox
            customClass="border border-gray-200 h-10 bg-white w-96"
            placeholder="Free Text Filter"
          />
        </div>

        <div className="flex gap-2 py-2">
          <div className="w-full flex flex-col gap-1">
            <p className="font-semibold">Status</p>
            <DropDown
              options={status}
              customClass="w-full z-50"
              optionClass="w-full"
              optionBoxClass="left-0"
              buttonClass="py-2"
            />
          </div>
          <div className="w-full flex flex-col gap-1">
            <p className="font-semibold">Region</p>
            <DropDown
              options={region}
              customClass="w-full z-50"
              optionClass="w-full"
              optionBoxClass="left-0"
              buttonClass="py-2"
            />
          </div>
          <div className="w-full flex flex-col gap-1">
            <p className="font-semibold">Customer</p>
            <DropDown
              options={status}
              customClass="w-full z-50"
              optionClass="w-full"
              optionBoxClass="left-0"
              buttonClass="py-2"
            />
          </div>
          <div className="w-full flex flex-col gap-1">
            <p className="font-semibold">Auction</p>
            <DropDown
              options={status}
              customClass="w-full z-50"
              optionClass="w-full"
              optionBoxClass="left-0"
              buttonClass="py-2"
            />
          </div>
          <div className="w-full flex flex-col gap-1">
            <p className="font-semibold">Model</p>
            <DropDown
              options={status}
              customClass="w-full z-50"
              optionClass="w-full"
              optionBoxClass="left-0"
              buttonClass="py-2"
            />
          </div>
          <div className="w-full flex flex-col gap-1">
            <p className="font-semibold">Auction Grade</p>
            <DropDown
              options={status}
              customClass="w-full z-50"
              optionClass="w-full"
              optionBoxClass="left-0"
              buttonClass="py-2"
            />
          </div>
          <div className="w-full flex flex-col gap-1">
            <p className="font-semibold">Sort By</p>
            <DropDown
              options={status}
              customClass="w-full z-50"
              optionClass="w-full"
              optionBoxClass="left-0"
              buttonClass="py-2"
            />
          </div>
        </div>
      </div>

      <table className="w-full border mt-6">
        <thead>
          <tr className="bg-gray-100">
            <td className="border text-center">
              <input type="checkbox" name="check" id="" />
            </td>
            <td className="border text-center font-semibold py-2">#</td>
            <td className="w-52 border text-center font-semibold py-2">
              Images
            </td>
            <td className="border text-center font-semibold py-2">
              Order Date
            </td>
            <td className="border text-center font-semibold py-2">
              Model/Chassis
            </td>
            <td className="border text-center font-semibold py-2">Customer</td>
            <td className="border text-center font-semibold py-2">
              Stock Price
            </td>
            <td className="border text-center font-semibold py-2">
              Leave Reason
            </td>
            <td className="border text-center font-semibold py-2">State</td>
            <td className="border text-center font-semibold py-2">Price</td>
          </tr>
        </thead>
        <tbody>
          {/* Group 1 */}
          <tr className="bg-white">
            <td rowSpan={3} className="border align-top text-center px-1">
              <input type="checkbox" name="check" id="" />
            </td>
            <td
              rowSpan={3}
              className="border align-top text-center font-semibold px-1"
            >
              <p>1</p>
            </td>
            <td rowSpan={3} className="relative w-32 align-top border p-0 text-center">
              <div className="imageContainer w-full h-full relative">
                <img
                  className="w-full h-full object-cover"
                  src="https://cosmo-images.azureedge.net/stock/original/our_78146_b49d9285-cc91-4b89-92a6-1e4d2a9e310b.jpg?preset=bigimage"
                  alt=""
                />
                <span className="imageCount flex items-center gap-1 absolute bottom-1 right-1 bg-black bg-opacity-20 px-1 rounded-md text-sm text-white">
                  <MdImage size={12} />
                  12
                </span>
              </div>
            </td>
            <td className="border text-center py-2">
              <div className=" flex flex-col gap-1">
                <p className="date">13-May-2024</p>
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
                  customClass="md:w-36 h-fit z-20 text-sm"
                  optionClass="w-fit h-fit text-sm"
                  optionBoxClass="left-0 w-fit h-fit"
                  buttonClass="py-0.5"
                />
                <FaChevronDown size={10} className="text-gray-400" />
                <DropDown
                  options={statusSelectAfter}
                  customClass="md:w-36 h-fit z-10 text-sm"
                  optionClass="w-fit h-fit text-sm"
                  optionBoxClass="left-0 w-fit h-fit"
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
            <td rowSpan={2} colSpan={3} className="border text-center">
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
            <td rowSpan={2} colSpan={2} className="border text-center">
              <div className="flex w-full flex-col">
                <textarea
                  className="border-b h-14 resize-none p-1"
                  placeholder="Car Comment of The Day"
                />
                <textarea
                  className="h-14 resize-none p-1"
                  placeholder="Car Comment of The Past"
                />
              </div>
            </td>
            <td rowSpan={2} colSpan={2} className="border text-center">
              <div className="flex w-full flex-col">
                <textarea
                  className="border-b h-14 resize-none p-1"
                  placeholder="Shitami Comment of The Day"
                />
                <textarea
                  className="h-14 resize-none p-1"
                  placeholder="Shitami Comment of The Past"
                />
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default adminPage;
