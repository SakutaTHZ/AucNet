import React, { useState } from "react";
import Popup from "./Popup";
import { LuHistory } from "react-icons/lu";
import { getRandomTime } from "./Datas/generateData";
import AdminStatusBullet from "./AdminComponents/AdminStatusBullet";

interface BidsProps {
  car?: any;
  customClass?: string;
}

const Bids: React.FC<BidsProps> = ({ customClass, car }) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const bidPrice = Math.floor(Math.random() * 1000000).toLocaleString();

  const openPopup = () => setIsPopupOpen(true);
  const closePopup = () => setIsPopupOpen(false);

  return (
    <>
      <div
        className={`relative flex justify-center w-fit cursor-pointer ${customClass}`}
        onClick={openPopup}
      >
        {car.comments.length === 0 ? (
          <LuHistory size={20} className="text-gray-500" />
        ) : (
          <LuHistory size={20} className="text-gray-700" />
        )}
      </div>

      <Popup
        isOpen={isPopupOpen}
        onClose={closePopup}
        title={`Bid History (${car.comments.length})`}
        customClass={`custom-scrollbar m-2 overflow-y-scroll h-3/4`}
        content={
          <>
            <table className="w-full border">
              <thead>
                <tr>
                  <td className="border text-center font-semibold p-2 text-nowrap">
                    #
                  </td>
                  <td className="border text-center font-semibold p-2 px-4 text-nowrap">
                    Username
                  </td>
                  <td className="border text-center font-semibold p-2 px-4 text-nowrap">
                    Car Status
                  </td>
                  <td className="border text-center font-semibold p-2 px-4 text-nowrap">
                    Updated Time
                  </td>
                  <td className="border text-center font-semibold p-2 px-4 text-nowrap">
                    Bid Price
                  </td>
                  <td className="w-64 border text-center font-semibold p-2 px-4 text-nowrap">
                    Customer Comment
                  </td>
                  <td className="w-64 border text-center font-semibold p-2 px-4 text-nowrap">
                    Admin Comment to <br />
                    Customer
                  </td>
                  <td className="w-64 border text-center font-semibold p-2 px-4 text-nowrap">
                    Admin Comment
                  </td>
                </tr>
              </thead>

              <tbody>
                {car.comments.map((comment: any, index: number) => (
                  <tr>
                    <td className="border text-center p-2 text-nowrap">
                      {index + 1}
                    </td>
                    <td className="border text-center p-2 px-4 text-nowrap">
                      {comment.name}
                    </td>
                    <td className="border text-center p-2 px-4 text-nowrap">
                      <AdminStatusBullet
                        status={car.status}
                        customClass="rounded-md w-28  pointer-events-none"
                      />
                    </td>
                    <td className="border text-center p-2 px-4 text-nowrap">
                      {getRandomTime()}
                    </td>
                    <td className="border text-center p-2 px-4 text-nowrap">
                      {bidPrice}
                    </td>
                    <td className="w-64 border text-center p-2 px-4">
                      {comment.comment}
                    </td>
                    <td className="w-64 border text-center p-2 px-4">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Aspernatur corrupti assumenda quo dolores? Ut repellat,
                      dolorem nobis dolores laborum sint alias beatae, nostrum
                      quod natus deleniti provident in. Impedit, ad.
                    </td>
                    <td className="w-64 border text-center p-2 px-4">
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Cumque ex neque soluta amet maiores deleniti consectetur
                      vero commodi iusto itaque natus aliquid veritatis,
                      distinctio non eaque esse possimus excepturi dolor!
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </>
        }
      />
    </>
  );
};

export default Bids;
