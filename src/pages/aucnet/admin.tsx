import React, { Suspense, useState } from "react";
import SearchBox from "../../components/AucNetComponents/SearchBox";
import SuperStatusBullet from "../../components/AucNetComponents/AdminComponents/SuperStatusBullet";
import DropDown from "../../components/AucNetComponents/DropDown";
import DropDownSearch from "../../components/AucNetComponents/DropDownSearch";
import Gallery from "../../components/AucNetComponents/Gallery";
import AdminTableRow from "../../components/AucNetComponents/AdminComponents/AdminTableRow";
import ErrorBoundary from "../../components/AucNetComponents/AdminComponents/ErrorBoundary";
import { TbLoader2 } from "react-icons/tb";
import { useLocation } from "react-router-dom";
import {
  sortModes,
  auctionGrade,
  model,
  customer,
  region,
} from "../../components/AucNetComponents/Datas/generateData";

const AdminPage: React.FC = () => {
  const location = useLocation();
  const cards = location.state?.cards || [];

  const [activeBullet, setActiveBullet] = useState<string>("All");
  const [showGallery, setShowGallery] = useState(false);
  const [selectAll, setSelectAll] = useState(false);
  const [selectedRows, setSelectedRows] = useState<number[]>([]);
  const [selectedRegion, setSelectedRegion] = useState<string[]>([]);
  const [selectedCustomer, setSelectedCustomer] = useState<string[]>([]);
  const [selectedModel, setSelectedModel] = useState<string[]>([]);
  const [selectedGrade, setSelectedGrade] = useState<string[]>([]);
  const [sortMode, setSortMode] = useState<string>("None");

  const handleBulletClick = (bulletTitle: string) =>
    setActiveBullet(bulletTitle);
  const toggleGallery = () => setShowGallery(!showGallery);
  const handleCheckboxChange = (id: number, checked: boolean) => {
    setSelectedRows((prevSelected) => {
      const newSelectedRows = checked
        ? [...prevSelected, id]
        : prevSelected.filter((rowId) => rowId !== id);
      setSelectAll(newSelectedRows.length === cards.length);
      return newSelectedRows;
    });
  };
  const handleSelectAllChange = (checked: boolean) => {
    setSelectAll(checked);
    setSelectedRows(checked ? cards.map((_: any, index: any) => index) : []);
  };

  const handleRegionChange = (selectedItems: string[]) =>
    setSelectedRegion(selectedItems);
  const handleCustomerChange = (selectedItems: string[]) =>
    setSelectedCustomer(selectedItems);
  const handleModelChange = (selectedItems: string[]) =>
    setSelectedModel(selectedItems);
  const handleGradeChange = (selectedItems: string[]) =>
    setSelectedGrade(selectedItems);
  const handleSortModeChange = (mode: string) => setSortMode(mode);

  const CarList = () => {
    const filteredCars = cards.filter((car: any) => {
      return (
        (selectedRegion.length === 0 || selectedRegion.includes(car.region)) &&
        (selectedCustomer.length === 0 ||
          selectedCustomer.includes(car.customer)) &&
        (selectedModel.length === 0 || selectedModel.includes(car.model)) &&
        (selectedGrade.length === 0 ||
          selectedGrade.includes(car.auctionGrade)) &&
        (activeBullet === "All" || car.status === activeBullet)
      );
    });

    const sortedCars = filteredCars.sort((a: any, b: any) => {
      if (sortMode === "Ascending") return a.stockPrice - b.stockPrice;
      if (sortMode === "Descending") return b.stockPrice - a.stockPrice;
      return 0;
    });

    return (
      <tbody>
        {sortedCars.map((car: any, index: number) => (
          <AdminTableRow
            key={index}
            carNum={index}
            car={car}
            onClick={toggleGallery}
            customClass="animate-appear"
            isSelected={selectedRows.includes(index)}
            onCheckboxChange={(checked: any) =>
              handleCheckboxChange(index, checked)
            }
          />
        ))}
      </tbody>
    );
  };

  return (
    <div className="w-full h-fit min-h-screen overflow-hidden px-8 md:px-16 lg:px-32 py-24 bg-slate-50">
      {showGallery && (
        <Gallery
          customClass="animate-appear animate-slideUp"
          closeBox={toggleGallery}
        />
      )}

      <div className="flex flex-col gap-2 pb-0 border-b border-b-gray-200">
        <div className="statusSeclection flex flex-wrap md:flex-nowrap justify-between  md:justify-normal gap-2">
          {[
            {
              title: "New",
              color: "bg-[#FEEBA6]",
              count: cards.filter((car: any) => car.status === "New").length,
            },
            {
              title: "Approved",
              color: "bg-orange-200",
              count: cards.filter((car: any) => car.status === "Approved")
                .length,
            },
            {
              title: "Qualified",
              color: "bg-amber-300",
              count: cards.filter((car: any) => car.status === "Qualified")
                .length,
            },
            {
              title: "Processed",
              color: "bg-green-200",
              count: cards.filter((car: any) => car.status === "Processed")
                .length,
            },
            {
              title: "Finished",
              color: "bg-blue-200",
              count: cards.filter((car: any) => car.status === "Finished")
                .length,
            },
            { title: "All", color: "bg-gray-300", count: cards.length },
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

        <div className="flex flex-wrap md:flex-nowrap gap-2 py-2">
          <div className="w-full">
            <p className="font-semibold mb-2">Region</p>
            <DropDownSearch
              noDropDown={true}
              options={region}
              customClass="w-full bg-white"
              buttonClass="py-2 h-10"
              onSelectionChange={handleRegionChange}
            />
          </div>
          <div className="w-full">
            <p className="font-semibold mb-2">Customer</p>
            <DropDownSearch
              noDropDown={true}
              options={customer}
              customClass="w-full bg-white"
              buttonClass="py-2 h-10"
              onSelectionChange={handleCustomerChange}
            />
          </div>

          <div className="w-full">
            <p className="font-semibold mb-2">Model</p>
            <DropDownSearch
              noDropDown={true}
              options={model}
              customClass="w-full bg-white"
              buttonClass="py-2 h-10"
              onSelectionChange={handleModelChange}
            />
          </div>

          <div className="w-full">
            <p className="font-semibold mb-2">Auction Grade</p>
            <DropDownSearch
              noDropDown={true}
              options={auctionGrade}
              customClass="w-full bg-white"
              buttonClass="py-2 h-10"
              onSelectionChange={handleGradeChange}
            />
          </div>
          <div className="w-full">
            <p className="font-semibold mb-2">Sort By Price</p>
            <DropDown
              noDropDown={true}
              options={sortModes}
              customClass="w-full"
              buttonClass="py-2 h-10"
              onSelectionChange={handleSortModeChange}
            />
          </div>
        </div>
      </div>

      <ErrorBoundary>
        <Suspense
          fallback={
            <div className="flex items-center gap-2 py-2">
              <TbLoader2 className="animate-spin" />
              Fetching Cars...
            </div>
          }
        >
          <div className="overflow-y-scroll md:overflow-y-auto">
            <table className="w-full border mt-4">
              <thead>
                <tr className="bg-gray-100">
                  <td className="border text-center">
                    <input
                      type="checkbox"
                      className="mainCheck cursor-pointer"
                      checked={selectAll}
                      onChange={(e) => handleSelectAllChange(e.target.checked)}
                    />
                  </td>
                  <td className="border text-center font-semibold py-2">#</td>
                  <td className="min-w-52 border text-center font-semibold p-2">
                    Images
                  </td>
                  <td className="border text-center font-semibold p-2">
                    Order Date
                  </td>
                  <td className="border text-center font-semibold p-2">
                    Model
                  </td>
                  <td className="border text-center font-semibold p-2">
                    Customer
                  </td>
                  <td className="border text-center font-semibold p-2">
                    Stock Price
                  </td>
                  <td className="border text-center font-semibold p-2">
                    Leave Reason
                  </td>
                  <td className="border text-center font-semibold p-2">
                    State
                  </td>
                  <td className="border text-center font-semibold p-2">
                    Price
                  </td>
                </tr>
              </thead>
              <CarList />
            </table>
          </div>
        </Suspense>
      </ErrorBoundary>
    </div>
  );
};

export default AdminPage;
