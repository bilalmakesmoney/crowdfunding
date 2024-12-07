import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import CampaignsPage from "./pages/CampaignsPage";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import CampaignDetailsPage from "./pages/CampaignDetailsPage";

const Home = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/campaigns" element={<CampaignsPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/campaigns/:id" element={<CampaignDetailsPage />} />
      </Routes>
    </BrowserRouter>
  );
};
export default Home;
