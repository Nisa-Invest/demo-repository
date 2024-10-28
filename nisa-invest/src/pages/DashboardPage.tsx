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
        <div className="bg-accent-light-purple p-6 rounded-lg hover:bg-accent-light-purple/80 transition-colors cursor-pointer">
          <h3 className="text-xl font-heading text-primary-purple mb-2">
            Workplace Pension
          </h3>
          <p className="text-secondary-green">
            Review and optimize your pension contributions
          </p>
        </div>

        {/* Student Loan Repayment */}
        <div className="bg-accent-light-purple p-6 rounded-lg hover:bg-accent-light-purple/80 transition-colors cursor-pointer">
          <h3 className="text-xl font-heading text-primary-purple mb-2">
            Student Loan Repayment
          </h3>
          <p className="text-secondary-green">
            Track and manage your student loan payments
          </p>
        </div>

        {/* Family Benefits */}
        <div className="bg-accent-light-purple p-6 rounded-lg hover:bg-accent-light-purple/80 transition-colors cursor-pointer">
          <h3 className="text-xl font-heading text-primary-purple mb-2">
            Family Benefits
          </h3>
          <p className="text-secondary-green">
            Explore available family financial benefits
          </p>
        </div>

        {/* Charitable Giving */}
        <div className="bg-accent-light-purple p-6 rounded-lg hover:bg-accent-light-purple/80 transition-colors cursor-pointer">
          <h3 className="text-xl font-heading text-primary-purple mb-2">
            Charitable Giving
          </h3>
          <p className="text-secondary-green">
            Plan and track your charitable contributions
          </p>
        </div>
      </div>
    </div>
  );
}
