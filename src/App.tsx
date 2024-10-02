import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/aucnet";

const App: React.FC = () => {
  return (
    
    <Router>
      <div>
        <h1>AucNet</h1>
        {/* Use Link for client-side navigation */}
        <Link to="/home">Go to AucNet</Link>

        {/* Define your routes here */}
        <Routes>
          {/* Route to the Home component when "/home" is visited */}
          <Route path="/home" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
