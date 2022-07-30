import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// frontend
import Home from "./components/frontend/FrontEnd/Home";
import Complaints from "./components/frontend/FrontEnd/Complaints";
import CompareBrands from "./components/frontend/FrontEnd/CompareBrands";
import Trend100 from "./components/frontend/FrontEnd/Trend100";
import CorporateMembership from "./components/frontend/FrontEnd/CorporateMembership";
import AdvertisingSolution from "./components/frontend/FrontEnd/AdvertisingSolution";
import AceAwards from "./components/frontend/FrontEnd/AceAwards";
import CompareBrandsDetails from "./components/frontend/FrontEnd/CompareBrandsDetails";
import ComplaintDetails from "./components/frontend/FrontEnd/ComplaintDetails";
import UserAllComplaints from "./components/frontend/FrontEnd/UserAllComplaints";
import Login from "./components/Login";

// admin dashboard
import AdminDashboardPage from "./components/adminDashboard/AdminDashboardPage";

// user dashboard
import UserDashboard from "./components/userDashboard/UserDashboard";

import "./components/frontend/FrontEnd/Style/GlobalCss.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          {/* frontend routes */}
          <Route path="/" element={<Home />} />
          <Route path="/complaints" element={<Complaints />} />
          <Route path="/compare-brands" element={<CompareBrands />} />
          <Route path="/trend-100" element={<Trend100 />} />
          <Route
            path="/corporate-membership"
            element={<CorporateMembership />}
          />
          <Route
            path="/advertising-solutions"
            element={<AdvertisingSolution />}
          />
          <Route path="/ace-awards" element={<AceAwards />} />
          <Route
            path="/compare-brands-details"
            element={<CompareBrandsDetails />}
          />
          <Route path="/complaint-details" element={<ComplaintDetails />} />
          <Route path="/user-all-complaints" element={<UserAllComplaints />} />

          {/* admin dashboard routes */}
          <Route path="/admin/dashboard" element={<AdminDashboardPage />} />

          {/* user dashboard routes */}
          <Route path="/my-profile" element={<UserDashboard />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
