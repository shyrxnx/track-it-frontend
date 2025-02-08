import { Routes, Route } from "react-router-dom";
import LandingPage from "../pages/LandingPage";
import HabitsDashboard from "../pages/HabitsDashboard";

const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/dashboard" element={<HabitsDashboard />} />
        </Routes>
    );
};

export default Router;
