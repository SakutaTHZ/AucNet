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

const status: string[] = [
  "All",
  "New",
  "Approved",
  "Qualified",
  "Processed",
  "Finished",
];
const getRandomDate = (start: Date, end: Date) => {
  const date = new Date(
    start.getTime() + Math.random() * (end.getTime() - start.getTime())
  );

  const day = String(date.getDate()).padStart(2, "0");
  const month = date.toLocaleString("default", { month: "short" });
  const year = date.getFullYear();

  return `${day}-${month}-${year}`;
};
const region = [
  { name: "Japan", count: 53 },
  { name: "Myanmar", count: 74 },
  { name: "Sweeden", count: 23 },
  { name: "Australia", count: 14 },
  { name: "Cyprus", count: 53 },
];
const customer = [
  { name: "John Doe", count: 3 },
  { name: "Sakuta", count: 54 },
  { name: "John Wick", count: 13 },
  { name: "Son Jin Wu", count: 34 },
  { name: "Talia", count: 23 },
];
const auction = [
  { name: "JU TOKYO", count: 53 },
  { name: "NISSAN TENDER", count: 4 },
  { name: "KCAA ABINO", count: 43 },
  { name: "USS NIIGATA", count: 24 },
  { name: "AEP", count: 13 },
];
const model = [
  { name: "TT Coupe", count: 53 },
  { name: "Hijet Truck", count: 74 },
  { name: "Ranger", count: 23 },
  { name: "CR-V", count: 14 },
  { name: "Fit", count: 53 },
];
const auctionGrade = [
  { name: "⭐ 1", count: 23 },
  { name: "⭐ 2", count: 54 },
  { name: "⭐ 3", count: 11 },
  { name: "⭐ 4", count: 43 },
  { name: "⭐ 5", count: 4 },
];
const sortModes = ["None", "Ascending", "Desending"];

// Mock data fetching function with a delay
const fetchCarData = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const data = Array.from({ length: 50 }).map((_, i) => ({
        orderDate: getRandomDate(
          new Date("2024-01-01"),
          new Date("2024-12-31")
        ),
        chassis:
          "ABCDS" + Math.floor(Math.random() * (100000 - 10000 + 1) + 10000),
        make: "Toyota",
        model: model[Math.floor(Math.random() * model.length)].name,
        region: region[Math.floor(Math.random() * region.length)].name,
        auction: auction[Math.floor(Math.random() * auction.length)].name,
        auctionGrade:
          auctionGrade[Math.floor(Math.random() * auctionGrade.length)].name,
        id: i,
        status: status[Math.floor(Math.random() * status.length)],
        customer: customer[Math.floor(Math.random() * customer.length)].name,
        stockPrice: Math.floor(Math.random() * (100000 - 10000 + 1) + 10000),
        leaveReason: conditions[Math.floor(Math.random() * conditions.length)],
        stateBefore:
          statusSelectBefore[
            Math.floor(Math.random() * statusSelectBefore.length)
          ],
        stateAfter:
          statusSelectAfter[
            Math.floor(Math.random() * statusSelectAfter.length)
          ],
        imageUrl: "../src/assets/images/stock/00165048_01.jpg",
        images: Math.floor(Math.random() * (25 - 12 + 1) + 12),
      }));
      resolve(data);
    }, 5000);
  });
};

// Suspense-ready resource that throws pending and error states
const resource = (() => {
  let status = "pending";
  let result: any;

  const suspender = fetchCarData().then(
    (res) => {
      status = "success";
      result = res;
    },
    (err) => {
      status = "error";
      result = err;
    }
  );

  return {
    read() {
      if (status === "pending") throw suspender;
      if (status === "error") throw result;
      return result;
    },
  };
})();

import React, { Suspense, useState } from "react";
import SearchBox from "../../components/AucNetComponents/SearchBox";
import SuperStatusBullet from "../../components/AucNetComponents/AdminComponents/SuperStatusBullet";
import DropDown from "../../components/AucNetComponents/DropDown";
import DropDownSearch from "../../components/AucNetComponents/DropDownSearch";
import Gallery from "../../components/AucNetComponents/Gallery";
import AdminTableRow from "../../components/AucNetComponents/AdminComponents/AdminTableRow";
import ErrorBoundary from "../../components/AucNetComponents/AdminComponents/ErrorBoundary";

const adminPage: React.FC = () => {
  const [activeBullet, setActiveBullet] = useState<string>("All");

  const handleBulletClick = (bulletTitle: string) => {
    setActiveBullet(bulletTitle);
  };

  const [showGallery, setShowGallery] = useState(false);

  function toggleGallery() {
    console.log("Toggle Gallery");
    setShowGallery(() => !showGallery);
  }

  {
    showGallery && (
      <Gallery
        customClass="animate-appear animate-slideUp"
        closeBox={toggleGallery}
      />
    );
  }

  const [selectAll, setSelectAll] = useState(false);

  const [selectedRows, setSelectedRows] = useState<number[]>([]);

  const handleCheckboxChange = (id: number, checked: boolean) => {
    setSelectedRows((prevSelected) => {
      const newSelectedRows = checked
        ? [...prevSelected, id]
        : prevSelected.filter((rowId) => rowId !== id);

      // Update the "Select All" checkbox based on whether all rows are selected
      setSelectAll(newSelectedRows.length === 50);
      return newSelectedRows;
    });
  };

  const handleSelectAllChange = (checked: boolean) => {
    setSelectAll(checked);
    setSelectedRows(checked ? Array.from({ length: 50 }, (_, i) => i) : []);
  };

  const [selectedRegion, setSelectedRegion] = useState<string[]>([]);
  const [selectedCustomer, setSelectedCustomer] = useState<string[]>([]);
  const [selectedAuction, setSelectedAuction] = useState<string[]>([]);
  const [selectedModel, setSelectedModel] = useState<string[]>([]);
  const [selectedGrade, setSelectedGrade] = useState<string[]>([]);
  const [sortMode, setSortMode] = useState<string>("None");

  const handleRegionChange = (selectedItems: string[]) =>
    setSelectedRegion(selectedItems);
  const handleCustomerChange = (selectedItems: string[]) =>
    setSelectedCustomer(selectedItems);
  const handleAuctionChange = (selectedItems: string[]) =>
    setSelectedAuction(selectedItems);
  const handleModelChange = (selectedItems: string[]) =>
    setSelectedModel(selectedItems);
  const handleGradeChange = (selectedItems: string[]) =>
    setSelectedGrade(selectedItems);
  const handleSortModeChange = (mode: string) => setSortMode(mode);

  const CarList = () => {
    const cars = resource.read();
  
    // Apply filtering first
    const filteredCars = cars.filter((car: any) => {
      return (
        (selectedRegion.length === 0 || selectedRegion.includes(car.region)) &&
        (selectedCustomer.length === 0 ||
          selectedCustomer.includes(car.customer)) &&
        (selectedAuction.length === 0 ||
          selectedAuction.includes(car.auction)) &&
        (selectedModel.length === 0 || selectedModel.includes(car.model)) &&
        (selectedGrade.length === 0 || selectedGrade.includes(car.auctionGrade)) &&
        (activeBullet === "All" || car.status === activeBullet)
      );
    });
  
    // Apply sorting after filtering
    const sortedCars = filteredCars.sort((a: any, b: any) => {
      if (sortMode === "Ascending") return a.stockPrice - b.stockPrice; // Note: I changed `price` to `stockPrice` here.
      if (sortMode === "Descending") return b.stockPrice - a.stockPrice;
      return 0;
    });
  
    return (
      <tbody>
        {sortedCars.map((car: any) => (
          <AdminTableRow
            key={car.id}
            car={car}
            onClick={toggleGallery}
            customClass="animate-appear"
            isSelected={selectedRows.includes(car.id)}
            onCheckboxChange={(checked: any) =>
              handleCheckboxChange(car.id, checked)
            }
          />
        ))}
      </tbody>
    );
  };

  return (
    <div className="w-full h-fit min-h-screen px-8 md:px-16 lg:px-32 py-24 bg-slate-50">
      {showGallery && (
        <Gallery
          customClass="animate-appear animate-slideUp"
          closeBox={toggleGallery}
        />
      )}

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
          {/* <div className="w-full flex flex-col gap-1">
            <p className="font-semibold">Status</p>
            <DropDown
              options={status}
              customClass="w-full z-20"
              optionClass="w-full"
              optionBoxClass="left-0"
              buttonClass="py-2 h-10"
            />
          </div> */}
          <div className="w-full flex flex-col gap-1">
            <p className="font-semibold">Region</p>
            <DropDownSearch
              options={region}
              customClass="w-full z-[100]"
              optionBoxClass="left-0"
              buttonClass="py-2 h-10"
              onSelectionChange={handleRegionChange}
            />
          </div>
          <div className="w-full flex flex-col gap-1">
            <p className="font-semibold">Customer</p>
            <DropDownSearch
              options={customer}
              customClass="w-full z-[100]"
              optionBoxClass="left-0"
              buttonClass="py-2 h-10"
              onSelectionChange={handleCustomerChange}
            />
          </div>
          <div className="w-full flex flex-col gap-1">
            <p className="font-semibold">Auction</p>
            <DropDownSearch
              options={auction}
              customClass="w-full z-[100]"
              optionBoxClass="left-0"
              buttonClass="py-2 h-10"
              onSelectionChange={handleAuctionChange}
            />
          </div>
          <div className="w-full flex flex-col gap-1">
            <p className="font-semibold">Model</p>
            <DropDownSearch
              options={model}
              customClass="w-full z-[100]"
              optionBoxClass="left-0"
              buttonClass="py-2 h-10"
              onSelectionChange={handleModelChange}
            />
          </div>
          <div className="w-full flex flex-col gap-1">
            <p className="font-semibold">Auction Grade</p>
            <DropDownSearch
              options={auctionGrade}
              customClass="w-full z-[100]"
              optionBoxClass="left-0"
              buttonClass="py-2 h-10"
              onSelectionChange={handleGradeChange}
            />
          </div>
          <div className="w-full flex flex-col gap-1">
            <p className="font-semibold">Sort By</p>
            <DropDown
              options={sortModes}
              customClass="w-full z-20"
              optionClass="w-full"
              optionBoxClass="left-0"
              buttonClass="py-2 h-10"
              onSelectionChange={handleSortModeChange}
            />
          </div>
        </div>
      </div>

      <ErrorBoundary>
        <Suspense fallback={<div>Loading data...</div>}>
          <table className="w-full border mt-6">
            <thead>
              <tr className="bg-gray-100">
                <td className="border text-center">
                  <input
                    type="checkbox"
                    className="mainCheck"
                    checked={selectAll}
                    onChange={(e) => handleSelectAllChange(e.target.checked)}
                  />
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
                <td className="border text-center font-semibold py-2">
                  Customer
                </td>
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
            <CarList />
          </table>
        </Suspense>
      </ErrorBoundary>
    </div>
  );
};

export default adminPage;
