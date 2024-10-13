import { useState } from "react";
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";
import { MdOutlineDirectionsCar, MdOutlineNotifications } from "react-icons/md";
import { Link, useLocation, useNavigate } from "react-router-dom";

interface NotiDropDownProps {
  notifications?: any;
  onClick?: () => void;
}

const overHundoCheck = (num: number) => {
  if (num >= 100) {
    return "99+";
  }
  return num;
};

const NotiDropDown: React.FC<NotiDropDownProps> = ({ notifications,
  onClick }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const recentUnreadNotifications = notifications.slice(0, 3); // Get only the 3 most recent unread ones

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const navigate = useNavigate();
  const handleCardClick = (location: any, card: any) => {
    toggleDropdown()
    return navigate(`/${location}`, { state: { card,cards } });
  };
  
  const location = useLocation();
  
  const cards = location.state?.cards || [];

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
        <div className="animate-appear w-[100dvw] md:w-auto p-6 py-2 fixed md:absolute top-56 md:top-8 right-0 mt-2 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
          <div className="w-full flex items-center justify-between gap-3 box-border">
            <p className="text-xl font-bold">Notifications</p>
            <Link
              to="/notifications"
              state={{ notifications, cards }}
              className="text-yellow-800 text-nowrap"
              onClick={toggleDropdown}
            >
              See all
            </Link>
          </div>
          <div className="flex flex-col py-3">
            {recentUnreadNotifications.length > 0 ? (
              recentUnreadNotifications.map((recentUnreadNotification: any) => (
                <div
                  key={recentUnreadNotification.id}
                  className={`relative flex gap-8 px-2 py-2 rounded-md w-full border-b border-b-gray-200 hover:bg-slate-100 ${
                    recentUnreadNotification.isRead &&
                    "after:absolute after:-left-4 after:top-1/2 after:w-3 after:h-3 after:bg-yellow-400 after:rounded-full"
                  }`}
                  onClick={() =>
                    onClick ? onClick() : handleCardClick("details",recentUnreadNotification.toCar)
                  }
                >
                  <div className="relative w-28">
                    <img
                      src={recentUnreadNotification.image}
                      alt="Car"
                      className="h-auto rounded-md"
                    />
                    <div className="bg-amber-200 w-fit p-1 rounded-full absolute -bottom-2 -right-2">
                      {recentUnreadNotification.replyType ? (
                        <IoChatbubbleEllipsesOutline  />
                      ) : (
                        <MdOutlineDirectionsCar  />
                      )}
                    </div>
                  </div>
                  <div className="w-full md:w-96">
                    <p
                      className={`${
                        recentUnreadNotification.isRead
                          ? "font-bold"
                          : "text-gray-600"
                      }`}
                    >
                      {recentUnreadNotification.message}
                    </p>
                    <p className="text-sm text-gray-400">
                      {recentUnreadNotification.time}
                    </p>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-gray-500">No notifications yet, but we’ll beep when something exciting happens!</p>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default NotiDropDown;
