import { Route, Routes } from "react-router-dom";
import { LandingPage } from "../pages/LandingPage";
import {  DashboardPage } from "../pages/DashboardPage";

export function RouterRoutes() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/dashboard" element={<DashboardPage />} />
    </Routes>
  );
}
