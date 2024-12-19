import { Route, Routes } from "react-router-dom";
import { LandingPage } from "../pages/LandingPage.tsx";
import { DashboardPage } from "../pages/DashboardPage";
import { FinancialPlanningQuiz } from "../components/Quiz/Quiz.tsx";

export function RouterRoutes() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/quiz" element={<FinancialPlanningQuiz />} />
      <Route path="/dashboard" element={<DashboardPage />} />
    </Routes>
  );
}
