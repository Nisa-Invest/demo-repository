import React from "react";


export function HomePage() {
  return (
    <div className="bg-gradient-to-b from-gray-50 to-white flex flex-col justify-center">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 content-center">
        <section className="py-20 md:py-48 items-center">
          <div className="griditems-center">
            <div>
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
                <span className="block">Welcome to</span>
                <span className="block text-primary-purple">Nisa Invest</span>
              </h1>
              <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                Empowering your financial journey with expert guidance and
                innovative solutions.
              </p>
              <div className="mt-8 grid grid-cols-2 gap-4">
                <button className="px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary-purple hover:bg-accent-light-purple md:py-4 md:text-lg md:px-10">
                  Get Started
                </button>
                <button className="px-6 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10">
                  Learn More
                </button>
              </div>
            </div>
            <div className="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-1 lg:flex lg:items-center">
              {/* <img
                src={heroImagePlaceholder || "/placeholder.svg"}
                alt="Financial Planning Illustration"
                className="w-full rounded-lg shadow-xl ring-1 ring-black ring-opacity-5 lg:right-0 lg:h-full lg:w-auto lg:max-w-none"
              /> */}
            </div>
          </div>
        </section>
        <section className="py-12 md:py-20 items-center">

        </section>
        <section className="py-48">
          <h2 className="text-3xl font-bold text-center mb-8">
            Frequently Asked Questions
          </h2>
          <div className="w-full max-w-2xl mx-auto">
            {faqData.map((item, index) => (
              <FAQItem
                key={index}
                question={item.question}
                answer={item.answer}
              />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

const FAQItem: React.FC<{ question: string; answer: string }> = ({
  question,
  answer,
}) => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className="border-b border-gray-200 py-4">
      <button
        className="flex justify-between items-center w-full text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-lg font-medium text-gray-900">{question}</span>
        <span className="ml-6 flex-shrink-0">
          {isOpen ? (
            <svg
              className="h-6 w-6 text-gray-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 15l7-7 7 7"
              />
            </svg>
          ) : (
            <svg
              className="h-6 w-6 text-gray-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          )}
        </span>
      </button>
      {isOpen && (
        <div className="mt-2 pr-12">
          <p className="text-base text-gray-500">{answer}</p>
        </div>
      )}
    </div>
  );
};

const faqData = [
  {
    question:
      "Is Nisa Invest Regulated by the Financial Conduct Authority (FCA)?",
    answer:
      "The purpose of the Nisa Invest 1:1 sessions is to learn about your goals, clarify your questions and help you make informed decisions inshAllah. This financial guidance is not a regulated activity in the UK by the FCA. Nisa Invest does not currently provide financial advice as regulated by the FCA and cannot recommend specific regulated financial products or providers such as investments, insurance, pensions and mortgages.",
  },
  {
    question: "Is it accessible?",
    answer:
      "You can book a 1:1 call by clicking the Book a Demo button at the top of the navigation bar, alternatively, you can reach me by email on fih@nisainvest.io or equally give me a call or text on +44 (0) 79 855 01985.",
  },
  {
    question: "Do you organise events?",
    answer:
      "Yes, as part of the support Nisa Invest offers to workplaces, we organise workshops on topics you care about most. These have been delivered with Employee Resource Groups such as Muslim Employee Networks. If this sounds interesting, feel free to book a demo. InshAllah, we can learn more about how we can help you.",
  },
  {
    question: "What's included in the platform?",
    answer:
      "By signing up you will get access to the Nisa Invest dashboard that allows you to reflect across four elements of your finances: Emergency Savings, Managing Expenses, Investing for the Future and Giving Back. You can also book your first complimentary 1:1 session with a Nisa Invest expert. This session is designed to help you make better decisions. A tree is planted in our names with each session to promote our collective sadaqah jariyah.",
  },
  {
    question: "Are the conversations confidential?",
    answer:
      "Yes, the privacy and security of your data is Nisa Invest's top priority, and we would never share any personal information about you with any third party.",
  },
];
