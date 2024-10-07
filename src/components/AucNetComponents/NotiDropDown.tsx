import { useState } from "react";
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";
import { MdOutlineNotifications } from "react-icons/md";
import { Link, useLocation } from "react-router-dom";

interface NotiDropDownProps {
  notifications?: any;
}

const overHundoCheck = (num: number) => {
  if (num >= 100) {
    return "99+";
  }
  return num;
};

const NotiDropDown: React.FC<NotiDropDownProps> = ({ notifications }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const location = useLocation();

  const cards = location.state?.cards || [];

  const recentUnreadNotifications = notifications
    .filter((notifications: any) => !notifications.isRead) // Filter out read notifications
    .slice(0, 3); // Get only the 3 most recent unread ones

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative flex justify-center">
      {/* Profile and Chevron */}

      <button className="relative" onClick={toggleDropdown}>
        <MdOutlineNotifications size={24} />
        {notifications.length != 0 && (
          <span className="absolute bottom-5 bg-red-600 text-white rounded-full px-1 text-xs">
            {overHundoCheck(notifications.length)}
          </span>
        )}
      </button>

      {/* Dropdown Menu ${notifications.status==0 ? '': ''}*/}
      {isOpen && (
        <div className="animate-appear p-6 py-2 absolute top-6 mt-2 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
          <div className="w-full flex items-center justify-between gap-3 box-border">
            <p className="text-xl font-bold">Notifications</p>
            <Link
              to="/home"
              state={{ cards }}
              className="text-yellow-800 text-nowrap"
            >
              See all
            </Link>
          </div>
          <div className="flex flex-col py-3">
            {recentUnreadNotifications.length > 0 ? (
              recentUnreadNotifications.map((recentUnreadNotification:any) => (
                <div key={recentUnreadNotification.id} className="flex gap-4 mb-4">
                  <div className="relative w-28">
                    <img
                      src={recentUnreadNotification.image}
                      alt="Car"
                      className="h-auto rounded-md"
                    />
                    <div className="bg-amber-200 w-fit p-1 rounded-full absolute -bottom-2 -right-2">
                      <IoChatbubbleEllipsesOutline size={15} />
                    </div>
                  </div>
                  <div className="w-96">
                    <p className="font-semibold">{recentUnreadNotification.message}</p>
                    <p className="text-sm text-gray-400">
                      {recentUnreadNotification.time}
                    </p>
                  </div>
                </div>
              ))
            ) : (
              <p>No unread notifications</p>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default NotiDropDown;
