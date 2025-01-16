import { Route, Routes } from "react-router-dom";
import { LandingPage } from "../pages/LandingPage.tsx";
import { DashboardPage } from "../pages/DashboardPage.tsx";
import { FinancialPlanningQuiz } from "../components/Quiz/Quiz.tsx";
import { HomePage } from "../pages/HomePage.tsx";
import { UnderConstruction } from "@/assets/Under_Construction.tsx";
import BookingPage from "@/pages/BookingPage.tsx";

export function RouterRoutes() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/quiz" element={<FinancialPlanningQuiz />} />
      <Route path="/dashboard" element={<DashboardPage />} />
      <Route path="/construction" element={<UnderConstruction />} />
      <Route path="/booking" element={<BookingPage />} />
    </Routes>
  );
}
