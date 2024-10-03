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

const App: React.FC = () => {
  const location = useLocation(); // Get the current location

  return (
    <>
      <div
        className={`w-screen min-h-screen flex flex-col justify-center items-center ${
          location.pathname === "/home" || location.pathname === "/details"
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
