import { IoChatbubbleEllipsesOutline } from "react-icons/io5";
import { MdOutlineDirectionsCar } from "react-icons/md";
import { useLocation, useNavigate } from "react-router-dom";
interface NotificationsProps {
  onClick?: () => void;
}
const Notifications: React.FC<NotificationsProps> = ({ onClick }) => {
  const location = useLocation();

  const notifications = location.state?.notifications || [];

  const navigate = useNavigate();
  const handleCardClick = (location: any, card: any) => {
    return navigate(`/${location}`, { state: { card } });
  };

  return (
    <div className="flex flex-col gap-6 w-full h-fit min-h-screen px-8 md:px-16 lg:px-32 pt-28 bg-slate-50">
      <div className="flex flex-col">
        <div className="w-full flex items-center justify-between  mb-8">
          <h1 className="text-3xl text-neutral-900 font-bold">Notifications</h1>
        </div>
        <div className="flex flex-col shadow-md mb-8">
          {notifications.length > 0 ? (
            notifications.map((notification: any) => (
              <div
                key={notification.id}
                className={`relative flex flex-col md:flex-row gap-0 md:gap-8 px-8 py-2 pb-4 md:pb-px rounded-md w-full border-b border-b-gray-200 hover:bg-slate-100 ${
                  notification.isRead &&
                  "after:absolute after:left-2.5 after:top-6 md:after:top-1/2 after:w-3 after:h-3 after:bg-yellow-400 after:rounded-full"
                }`}
                onClick={() =>
                  onClick
                    ? onClick()
                    : handleCardClick("details", notification.toCar)
                }
              >
                <div className="absolute bottom-2 md:bottom-auto right-2 md:right-auto md:relative w-14 md:w-48">
                  <img
                    src={notification.image}
                    alt="Car"
                    className="h-auto rounded-md"
                  />
                  <div className="bg-amber-200 w-fit p-1 rounded-full absolute -bottom-2 -right-2">
                    {notification.replyType ? (
                      <IoChatbubbleEllipsesOutline size={20} />
                    ) : (
                      <MdOutlineDirectionsCar size={20} />
                    )}
                  </div>
                </div>
                <div className="w-full">
                  <p
                    className={`text-lg md:pt-4 py-2 ${
                      notification.isRead ? "font-bold" : "text-gray-600"
                    }`}
                  >
                    {notification.message}
                  </p>
                  <p className="text-sm text-gray-400">{notification.time}</p>
                </div>
              </div>
            ))
          ) : (
            <p>No unread notifications</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Notifications;
