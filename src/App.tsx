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
import AucNetNav from "./components/AucNetComponents/AucNetNav";

const App: React.FC = () => {
  const location = useLocation(); // Get the current location

  return (
    <>
      <AucNetNav basketCount={20} favouriteCount={20} notiCount={125}/>

      <div
        className={`w-screen min-h-screen flex flex-col justify-center items-center ${
          location.pathname === "/home" || location.pathname === "/details"  || location.pathname === "/basket"
            ? "hidden"
            : "bg-gradient-to-br from-yellow-200 via-yellow-200 to-amber-300"
        }`}
      >
        <Link to="/home">
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
