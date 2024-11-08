import React, { useEffect } from "react";
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
import {
  generateCardData,
  generateNotifications,
} from "./components/AucNetComponents/Datas/generateData";
import { useAtom } from "jotai";
import { carAtom } from "./components/AucNetComponents/Datas/atoms";
import { QueryClient, QueryClientProvider } from "react-query"; // Import react-query
import ErrorBoundary from "./components/AucNetComponents/AdminComponents/ErrorBoundary";

// Create a QueryClient instance
const queryClient = new QueryClient();

const App: React.FC = () => {
  const location = useLocation(); // Get the current location

  const [carData, setCarData] = useAtom(carAtom);

  useEffect(() => {
    // Generate cars once on component mount
    const totalCards = Math.floor(Math.random() * 300);
    const cards = Array.from({ length: totalCards }, generateCardData);

    setCarData(cards); // Update car data in atom
  }, [setCarData]);

  // Generate notifications
  const notifications = Array.from(
    { length: Math.floor(Math.random() * 50) },
    generateNotifications
  );

  return (
    <>
      <AucNetNav
        basketCount={20}
        favouriteCount={20}
        notifications={notifications}
        customClass={location.pathname === "/" ? "hidden" : ""}
        isAdmin={location.pathname === "/admin"}
      />
      <ScrollToTopButton
        customClass={location.pathname === "/" ? "hidden" : ""}
      />
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
        <img src={logo} className="h-16" alt="Logo" />
        <div className="flex flex-col gap-2 mt-12">
          <Link to="/home" state={{ cards: carData, page: 1 }} className="border bg-blue-950 rounded-lg py-2 flex justify-center">
            <h1 className="text-3xl font-bold flex items-center gap-5 drop-shadow-lg text-white cursor-pointer">
              AucNet
            </h1>
          </Link>
          <Link to="/admin" state={{ cards: carData, page: 1 }} className="border bg-blue-950 rounded-lg px-4 py-2 flex justify-center">
            <h1 className="text-3xl font-bold flex items-center gap-5 drop-shadow-lg text-white cursor-pointer">
              Stock Flows
            </h1>
          </Link>
        </div>
      </div>
      <Routes>
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
  <QueryClientProvider client={queryClient}>
    <ErrorBoundary>
      <Router>
        <App />
      </Router>
    </ErrorBoundary>
  </QueryClientProvider>
);

export default MainApp;
