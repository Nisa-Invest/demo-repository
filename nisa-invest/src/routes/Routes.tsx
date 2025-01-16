import { Route, Routes } from "react-router-dom";
import { LandingPage } from "../pages/LandingPage.tsx";
import { DashboardPage } from "../pages/DashboardPage.tsx";
import { FinancialPlanningQuiz } from "../components/Quiz/Quiz.tsx";
import { HomePage } from "../pages/HomePage.tsx";

export function RouterRoutes() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/quiz" element={<FinancialPlanningQuiz />} />
      <Route path="/dashboard" element={<DashboardPage />} />
    </Routes>
  );
}
