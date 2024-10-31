import { DashboardCard } from "../components/DashboardComponents/DashboardCard";
import { WidgetsContainer } from "../components/DashboardComponents/WidgetsContainer";
import { useState } from "react";
import { Task } from "../utils/Types";

export function DashboardPage() {

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Gauge Section */}
      <div className="mb-8 p-6 bg-accent-light-purple/20 rounded-lg">
        <h2 className="text-2xl font-heading text-primary-purple text-center mb-4">
          Financial Health Score
        </h2>
        {/* Placeholder for gauge - we can add the actual gauge component here */}
        <div className="w-48 h-48 mx-auto bg-accent-light-purple rounded-full">
          {/* Gauge will go here */}
        </div>
      </div>

      {/* Four Sections Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Workplace Pension */}
        <DashboardCard
          title="Workplace Pension"
          description="Review and see if you're optimising your pension contributions"
        />

        {/* Student Loan Repayment */}
        <DashboardCard
          title="Student Loan Repayment"
          description="See what steps you can take to pay of your debt"
        />

        {/* Family Benefits */}
        <DashboardCard
          title="Family Benefits"
          description="See if you're entitled to child tax credit or other family benefits"
        />
        {/* Charitable Giving */}
        <DashboardCard
          title="Charitable Giving"
          description="Let's find an easy way to fulfil your sadaqah, charity, responsibities"
        />
      </div>
      <WidgetsContainer/>
    </div>
  );
}
