import React from "react";
import {
  IoCarOutline,
  IoCheckmarkCircleSharp,
  IoCloseCircle,
  IoShieldCheckmark,
  IoTime,
} from "react-icons/io5";
import { TbCalendarCheck } from "react-icons/tb";
import StatusBullet from "./StatusBullet";
import { PiSealCheckFill } from "react-icons/pi";

interface CarStatusBoxProps {
  customClass?: string;
  status?: string;
  cardData?: any;
}

const CarStatusBox: React.FC<CarStatusBoxProps> = ({
  customClass = "",
  cardData,
  status = "default",
}) => {
  return (
    <>
      {status === "checkavailability" ? (
        <div className={`w-full md:w-1/3 flex flex-col gap-3 ${customClass}`}>
          <div className="itemCard flex flex-col gap-4 rounded-md shadow-md p-6">
            <StatusBullet
              status="checkavailability"
              customClass="font-semibold"
            />
            <p className="text-xl font-medium">
              {cardData.name} {cardData.engineType}
            </p>
            <p className="text-3xl font-bold">
              ¥{cardData.price.toLocaleString()}
            </p>

            <div className="flex flex-col gap-1">
              <p className="flex gap-1 items-center">
                <IoShieldCheckmark size={20} className="text-gray-500" /> Secure
                payment
              </p>
              <p className="flex gap-1 items-center">
                <PiSealCheckFill size={20} className="text-gray-500" />{" "}
                Certified seller
              </p>
            </div>

            <div className="flex flex-col gap-2">
              <button className="bg-gray-100 text-gray-400 py-2 font-bold rounded-md">
                Checking availability
              </button>
              <p className="text-gray-500 text-center">
                Admin team will check the availability of the selected car.
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-4 border-2 border-dashed border-gray-200 text-gray-500 rounded-md p-6">
            <p>Declarations of Precautions</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
              fugiat iusto fuga itaque, adipisci, modi in facere, veniam quas
              voluptatibus error distinctio nemo esse hic natus quia sint est!
              Repudiandae.
            </p>
          </div>
        </div>
      ) : status === "unavailable" ? (
        <div className={`w-full md:w-1/3 flex flex-col gap-3 ${customClass}`}>
          <div className="itemCard flex flex-col gap-4 rounded-md shadow-md p-6">
            <StatusBullet status="unavailable" customClass="font-semibold" />
            <p className="text-xl font-medium">
              {cardData.name} {cardData.engineType}
            </p>
            <p className="text-3xl font-bold">
              ¥{cardData.price.toLocaleString()}
            </p>

            <div className="carDetailsBox flex flex-col items-center justify-between">
              <div className="dataRow flex flex-col w-full px-4 py-1">
                <div className="data flex w-full items-center justify-between pb-1">
                  <div className="status flex gap-2 items-center font-semibold">
                    <div className="relative">
                      <IoCloseCircle
                        size={10}
                        className="absolute -right-0.5 -top-0.5"
                      />
                      <IoCarOutline size={20} />
                    </div>
                    <p>Car Unavailable</p>
                  </div>
                  <p className="date">15 Sep 17:24</p>
                </div>
                <p className="description w-full text-sm text-gray-700">
                  Unfortunately, the car is currently unavailable. Please browse
                  our catalog for other options.
                </p>
              </div>

              <div className="dataRow flex flex-col w-full px-4 py-1">
                <div className="data flex w-full items-center justify-between pb-1">
                  <div className="status flex gap-2 items-center font-semibold">
                    <div className="relative">
                      <IoTime
                        size={10}
                        className="absolute -right-0.5 -top-0.5"
                      />
                      <IoCarOutline size={20} />
                    </div>
                    <p>Checking Availability</p>
                  </div>
                  <p className="date">15 Sep 17:24</p>
                </div>
                <p className="description w-full text-sm text-gray-700">
                  Admin team is checking the availability of the selected car.
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4 border-2 border-dashed border-gray-200 text-gray-500 rounded-md p-6">
            <p>Declarations of Precautions</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
              fugiat iusto fuga itaque, adipisci, modi in facere, veniam quas
              voluptatibus error distinctio nemo esse hic natus quia sint est!
              Repudiandae.
            </p>
          </div>
        </div>
      ) : status === "orderconfirmed" ? (
        <div className={`w-full md:w-1/3 flex flex-col gap-3 ${customClass}`}>
          <div className="itemCard flex flex-col gap-4 rounded-md shadow-md p-6">
            <StatusBullet status="orderconfirmed" customClass="font-semibold" />
            <p className="text-xl font-medium">
              {cardData.name} {cardData.engineType}
            </p>
            <p className="text-3xl font-bold">
              ¥{cardData.price.toLocaleString()}
            </p>

            <div className="carDetailsBox flex flex-col items-center justify-between">
              <div className="dataRow flex flex-col w-full px-4 py-1">
                <div className="data flex w-full items-center justify-between pb-1">
                  <div className="status flex gap-2 items-center font-semibold">
                    <div className="relative">
                      <TbCalendarCheck size={20} />
                    </div>
                    <p>Order Confirmed</p>
                  </div>
                  <p className="date">15 Sep 17:24</p>
                </div>
                <p className="description w-full text-sm text-gray-700">
                  Your order has been confirmed. We will proceed with the next
                  steps shortly.
                </p>
              </div>

              <div className="dataRow flex flex-col w-full px-4 py-1">
                <div className="data flex w-full items-center justify-between pb-1">
                  <div className="status flex gap-2 items-center font-semibold">
                    <div className="relative">
                      <IoTime
                        size={10}
                        className="absolute -right-0.5 -top-0.5"
                      />
                      <IoCarOutline size={20} />
                    </div>
                    <p>Checking Availability</p>
                  </div>
                  <p className="date">15 Sep 17:24</p>
                </div>
                <p className="description w-full text-sm text-gray-700">
                  Admin team is checking the availability of the selected car.
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4 border-2 border-dashed border-gray-200 text-gray-500 rounded-md p-6">
            <p>Declarations of Precautions</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
              fugiat iusto fuga itaque, adipisci, modi in facere, veniam quas
              voluptatibus error distinctio nemo esse hic natus quia sint est!
              Repudiandae.
            </p>
          </div>
        </div>
      ) : status === "canceled" ? (
        <div className={`w-full md:w-1/3 flex flex-col gap-3 ${customClass}`}>
          <div className="itemCard flex flex-col gap-4 rounded-md shadow-md p-6">
            <StatusBullet status="canceled" customClass="font-semibold" />
            <p className="text-xl font-medium">
              {cardData.name} {cardData.engineType}
            </p>
            <p className="text-3xl font-bold">
              ¥{cardData.price.toLocaleString()}
            </p>

            <div className="carDetailsBox flex flex-col items-center justify-between">
              <div className="dataRow flex flex-col w-full px-4 py-1">
                <div className="data flex w-full items-center justify-between pb-1">
                  <div className="status flex gap-2 items-center font-semibold">
                    <div className="relative">
                      <TbCalendarCheck size={20} />
                    </div>
                    <p>Order Cancelled</p>
                  </div>
                  <p className="date">15 Sep 17:24</p>
                </div>
                <p className="description w-full text-sm text-gray-700">
                Your order for the car has been cancelled. Please contact our support team for further assistance.
                </p>
              </div>

              <div className="dataRow flex flex-col w-full px-4 py-1">
                <div className="data flex w-full items-center justify-between pb-1">
                  <div className="status flex gap-2 items-center font-semibold">
                    <div className="relative">
                      <IoTime
                        size={10}
                        className="absolute -right-0.5 -top-0.5"
                      />
                      <IoCarOutline size={20} />
                    </div>
                    <p>Checking Availability</p>
                  </div>
                  <p className="date">15 Sep 17:24</p>
                </div>
                <p className="description w-full text-sm text-gray-700">
                  Admin team is checking the availability of the selected car.
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4 border-2 border-dashed border-gray-200 text-gray-500 rounded-md p-6">
            <p>Declarations of Precautions</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
              fugiat iusto fuga itaque, adipisci, modi in facere, veniam quas
              voluptatibus error distinctio nemo esse hic natus quia sint est!
              Repudiandae.
            </p>
          </div>
        </div>
      ) : status === "purchased" ? (
        <div className={`w-full md:w-1/3 flex flex-col gap-3 ${customClass}`}>
          <div className="itemCard flex flex-col gap-4 rounded-md shadow-md p-6">
          <StatusBullet status="purchased" customClass="font-semibold" />
            <p className="text-xl font-medium">
              {cardData.name} {cardData.engineType}
            </p>
            <p className="text-3xl font-bold">
              ¥{cardData.price.toLocaleString()}
            </p>

            <div className="flex flex-col gap-1">
              <p className="flex gap-1 items-center">
                <IoShieldCheckmark size={20} className="text-gray-500" /> Secure
                payment
              </p>
              <p className="flex gap-1 items-center">
                <PiSealCheckFill size={20} className="text-gray-500" />{" "}
                Certified seller
              </p>
            </div>

            <div className="carDetailsBox flex flex-col items-center justify-between">
              <div className="dataRow flex flex-col w-full px-4 py-1">
                <div className="data flex w-full items-center justify-between pb-1">
                  <div className="status flex gap-2 items-center font-semibold">
                    <div className="relative">
                      <IoCheckmarkCircleSharp
                        size={10}
                        className="absolute -right-0.5 -top-0.5"
                      />
                      <IoCarOutline size={20} />
                    </div>
                    <p>Car Purchased</p>
                  </div>
                  <p className="date">15 Sep 17:24</p>
                </div>
                <p className="description w-full text-sm text-gray-700">
                  The car is purchased. We will contact you soon with further
                  details.
                </p>
              </div>
              <div className="dataRow flex flex-col w-full px-4 py-1">
                <div className="data flex w-full items-center justify-between pb-1">
                  <div className="status flex gap-2 items-center font-semibold">
                    <div className="relative">
                      <TbCalendarCheck size={20} />
                    </div>
                    <p>Order Confirmed</p>
                  </div>
                  <p className="date">15 Sep 17:24</p>
                </div>
                <p className="description w-full text-sm text-gray-700">
                  Your order has been confirmed. We will proceed with the next
                  steps shortly.
                </p>
              </div>

              <div className="dataRow flex flex-col w-full px-4 py-1">
                <div className="data flex w-full items-center justify-between pb-1">
                  <div className="status flex gap-2 items-center font-semibold">
                    <div className="relative">
                      <IoTime
                        size={10}
                        className="absolute -right-0.5 -top-0.5"
                      />
                      <IoCarOutline size={20} />
                    </div>
                    <p>Checking Availability</p>
                  </div>
                  <p className="date">15 Sep 17:24</p>
                </div>
                <p className="description w-full text-sm text-gray-700">
                  Admin team is checking the availability of the selected car.
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4 border-2 border-dashed border-gray-200 text-gray-500 rounded-md p-6">
            <p>Declarations of Precautions</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
              fugiat iusto fuga itaque, adipisci, modi in facere, veniam quas
              voluptatibus error distinctio nemo esse hic natus quia sint est!
              Repudiandae.
            </p>
          </div>
        </div>
      ) : (
        <div className={`w-full md:w-1/3 flex flex-col gap-3 ${customClass}`}>
          <div className="itemCard flex flex-col gap-4 rounded-md shadow-md p-6">
            <p className="text-xl font-medium">
              {cardData.name} {cardData.engineType}
            </p>
            <p className="text-3xl font-bold">
              ¥{cardData.price.toLocaleString()}
            </p>

            <div className="flex flex-col gap-1">
              <p className="flex gap-1 items-center">
                <IoShieldCheckmark size={20} className="text-gray-500" /> Secure
                payment
              </p>
              <p className="flex gap-1 items-center">
                <PiSealCheckFill size={20} className="text-gray-500" />{" "}
                Certified seller
              </p>
            </div>

            <div className="flex flex-col gap-2">
              <button className="bg-amber-400 py-2 font-bold rounded-md">
                Check availability
              </button>
              <p className="text-gray-500 text-center">
                Admin team will check the availability of the selected car.
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-4 border-2 border-dashed border-gray-200 text-gray-500 rounded-md p-6">
            <p>Declarations of Precautions</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
              fugiat iusto fuga itaque, adipisci, modi in facere, veniam quas
              voluptatibus error distinctio nemo esse hic natus quia sint est!
              Repudiandae.
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default CarStatusBox;
