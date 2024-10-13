import React from "react";
import "./App.css";
import logo from "./assets/CosmoLogo.svg";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useLocation,
} from "react-router-dom";
import Home from "./pages/aucnet/index";
import Detail from "./pages/aucnet/detail";
import Basket from "./pages/aucnet/basket";
import Favourites from "./pages/aucnet/favourites";
import AucNetNav from "./components/AucNetComponents/AucNetNav";
import ScrollToTopButton from "./components/ScrollToTop";
import Notifications from "./pages/aucnet/notifications";
import Admin from "./pages/aucnet/admin";

const App: React.FC = () => {
  const location = useLocation(); // Get the current location

  const carNames = ["A3 Sportback", "TT Coupe", "Ranger", "Fit", "CR-V"];
  const carTypes = ["Sedan", "Hatchback", "SUV", "Convertible", "MiniVan"];
  const engines = ["1.4 TSLI", "V6", "flat-6", "Rx-7", "EV engine"];
  const imageLink = [
    "https://cosmo-images.azureedge.net/stock/original/our_78146_b49d9285-cc91-4b89-92a6-1e4d2a9e310b.jpg?preset=bigimage",
    "https://cosmo-images.azureedge.net/stock/original/our_52747_7521ddc6-a312-4852-a12e-2d4a928f1b05.jpg?preset=bigimage",
    "https://cosmo-images.azureedge.net/stock/original/our_79596_1e6432cd-8248-48b8-ab1f-0a785b8b764d.jpg?preset=bigimage",
    "https://cosmo-images.azureedge.net/stock/original/our_53383_754f972b-a419-4f53-8ea4-1691ce7fb661.jpg?preset=bigimage",
    "https://cosmo-images.azureedge.net/stock/original/our_51498_ec5f8b8d-7ca6-4eb7-a424-fd9ac0cf8403.jpg?preset=bigimage",
  ];
  const carStatus = [
    "checkavailability",
    "unavailable",
    "orderconfirmed",
    "canceled",
    "purchased",
  ];

  const generateCardData = () => {
    const cardData = {
      isFavourite: Math.floor(Math.random() * 10) == 7 ? true : false,
      isBasket: Math.floor(Math.random() * 10) == 3 ? true : false,
      name: carNames[Math.floor(Math.random() * carNames.length)],
      type: carTypes[Math.floor(Math.random() * carTypes.length)],
      link: imageLink[Math.floor(Math.random() * imageLink.length)],
      engineType: engines[Math.floor(Math.random() * engines.length)],
      status: carStatus[Math.floor(Math.random() * carStatus.length)],
      price: Math.floor(Math.random() * (999999 - 100000 + 1)) + 100000,
      enginePower: Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000,
      mileage: Math.floor(Math.random() * (999999 - 1000 + 1)) + 1000,
      year: Math.floor(Math.random() * (2025 - 1980 + 1)) + 1980,
      comments: [
        {
          name: "John Doe",
          comment: `Lorem ipsum odor amet, consectetuer adipiscing elit. Facilisi curabitur himenaeos id dis sem fusce elit non. Phasellus volutpat at ullamcorper interdum, interdum nulla nulla. Mi consequat primis tortor a vehicula taciti erat est? Quisque ipsum phasellus nostra posuere aliquet auctor ante. Mi pharetra eget donec phasellus lectus. Eu fusce metus interdum habitant vitae proin pretium egestas sociosqu. Natoque volutpat placerat; metus gravida ut ex adipiscing. Maecenas magnis orci velit facilisi amet, porta commodo.
Sociosqu nascetur fusce sociosqu in sociosqu; dapibus sodales amet. Eget hac molestie nulla conubia arcu nisi. Diam etiam magnis euismod placerat cubilia sapien dictumst. Elit efficitur ornare tempor nec tincidunt tristique tempor. Ornare massa viverra class ullamcorper purus nec. Odio dolor vestibulum pulvinar fermentum eu luctus. Orci primis rutrum viverra vehicula vivamus hac. Scelerisque dolor eros cubilia metus taciti ridiculus nisi. Etiam dui cras amet amet iaculis molestie laoreet.`,
          time: "12 minutes ago",
          reply: [
            { name: "Kelly Kim", comment: "Nice Car", time: "1 week ago" },
            { name: "Talia", comment: "Would recommend", time: "1 day ago" },
          ],
        },
        {
          name: "Kelly Kim",
          comment: "I would Buy this",
          time: "1 week ago",
          reply: [
            {
              name: "Talia",
              comment: "I think there are some ...",
              time: "1 day ago",
            },
          ],
        },
        {
          name: "Talia",
          comment: "Love the design",
          time: "1 day ago",
          reply: [],
        },
      ],
    };
    return cardData;
  };

  const cards = Array.from({ length: Math.floor(Math.random() * 300) }, generateCardData);

  const generateNotifications = () => {
    const refCar = generateCardData();

    const adminComment = [
      `Admin replied “This is the admin reply” to your comment in ${refCar.name} ${refCar.engineType} listing.`,
      `The ${refCar.name} ${refCar.engineType} is currently unavailable. Please browse our catalog for other options.`,
    ];

    const normalComment = [
      `John Doe replied “This is the admin reply” to your comment in ${refCar.name} ${refCar.engineType} listing.`,
    ];

    const type = Math.floor(Math.random() * 10);
    const notification = {
      isRead: Math.floor(Math.random() * 10) % 2 == 0 ? true : false,
      image: refCar.link,
      time: new Date().toLocaleString(),
      replyType: type % 2 == 0 ? true : false,
      message:
        type % 2 == 0
          ? adminComment[Math.floor(Math.random() * adminComment.length)]
          : normalComment[Math.floor(Math.random() * normalComment.length)],
      toCar: refCar,
    };
    return notification;
  };

  const notifications = Array.from({ length: Math.floor(Math.random() * 50)}, generateNotifications);

  return (
    <>
      <AucNetNav
        basketCount={20}
        favouriteCount={20}
        notifications={notifications}
        customClass={
          location.pathname === "/"
            ? "hidden"
            : ""
        }
        isAdmin={location.pathname === "/admin"}
      />

      <ScrollToTopButton 
        customClass={
          location.pathname === "/"
            ? "hidden"
            : ""
        }/>

      <div
        className={`w-screen min-h-screen flex flex-col justify-center items-center ${
          location.pathname === "/home" ||
          location.pathname === "/details" ||
          location.pathname === "/basket" ||
          location.pathname === "/favourites" ||
          location.pathname === "/notifications" ||
          location.pathname === "/admin"
            ? "hidden"
            : "bg-gradient-to-br from-yellow-200 via-yellow-200 to-amber-300"
        }`}
      >
        <Link to="/home" state={{ cards,page:1}}>
          <h1 className="text-5xl font-bold flex items-center gap-5 drop-shadow-lg text-white cursor-pointer">
            <img src={logo} className="h-16" alt="Logo" />
            AucNet
          </h1>
        </Link>
      </div>
      <Routes>
        {/* Route to the Home component when "/home" is visited */}
        <Route path="/home" element={<Home />} />
        <Route path="/details" element={<Detail />} />
        <Route path="/basket" element={<Basket />} />
        <Route path="/favourites" element={<Favourites />} />
        <Route path="/notifications" element={<Notifications />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </>
  );
};

const MainApp: React.FC = () => (
  <Router>
    <App />
  </Router>
);

export default MainApp;
