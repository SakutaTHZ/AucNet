// Mock data fetching function with a delay
const fetchCarData = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const data = Array.from({ length: 5 }).map((_, i) => ({
        orderDate: new Date("2024-07-11T00:00:00Z"),
        chassis: "ABCDS",
        make: "Toyota",
        model: "Model " + i,
        id: i,
        customer: "Customer " + i,
        stockPrice: Math.floor(Math.random() * (100000 - 10000 + 1) + 10000),
        leaveReason: "Condition",
        stateBefore: "No Sales Code",
        stateAfter: "Not Auction",
        imageUrl: "https://i.pinimg.com/originals/46/2f/42/462f42b27b701a708e60bb73866659f1.jpg",
      }));
      resolve(data);
    }, 2000); // simulate 2-second delay
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
import Gallery from "../../components/AucNetComponents/Gallery";
import AdminTableRow from "../../components/AucNetComponents/AdminComponents/AdminTableRow";
import ErrorBoundary from "../../components/AucNetComponents/AdminComponents/ErrorBoundary";

const CarList = () => {
  const cars = resource.read(); // This will throw until data is ready
  return (
    <tbody>
      {cars.map((car:any) => (
        <AdminTableRow key={car.id} {...car} />
      ))}
    </tbody>
  );
};

const adminPage: React.FC = () => {
  const [activeBullet, setActiveBullet] = useState<string>("New");

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

  const queue:any = [];
  const generateCars = () => {
    for (let i = 0; i < 5; i++) {
      queue.push({
        orderDate: new Date("2024-07-11T00:00:00Z"),
        chassis: "ABCDS",
        make: "Toyota",
        model: "Model "+i,
        id: i,
        customer: "Customer "+i,
        stockPrice:Math.floor(Math.random() * (100000 - 10000 + 1) + 10000),
        leaveReason:conditions[Math.floor(Math.random() * conditions.length)],
        stateBefore:statusSelectBefore[Math.floor(Math.random() * statusSelectBefore.length)],
        stateAfter:statusSelectAfter[Math.floor(Math.random() * statusSelectAfter.length)],
        imageUrl:
          "https://i.pinimg.com/originals/46/2f/42/462f42b27b701a708e60bb73866659f1.jpg",
      });
    }
  
    console.log(queue);
  };

  generateCars();

  return (
    <div className="w-full h-fit min-h-screen px-8 md:px-16 lg:px-32 pt-24 bg-slate-50">
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

      <ErrorBoundary>
        <Suspense fallback={<div>Loading data...</div>}>
          <table className="w-full border mt-6">
            <thead>
              <tr className="bg-gray-100">
                <td className="border text-center"><input type="checkbox" /></td>
                <td className="border text-center font-semibold py-2">#</td>
                <td className="w-52 border text-center font-semibold py-2">Images</td>
                <td className="border text-center font-semibold py-2">Order Date</td>
                <td className="border text-center font-semibold py-2">Model/Chassis</td>
                <td className="border text-center font-semibold py-2">Customer</td>
                <td className="border text-center font-semibold py-2">Stock Price</td>
                <td className="border text-center font-semibold py-2">Leave Reason</td>
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
