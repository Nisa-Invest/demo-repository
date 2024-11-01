import { Button } from "../components/Button/Button";
import TestimonalCard from "../components/TestimonialCard/TestimonialCard";
export function LandingPage() {
  const testimonials = [
    {
      quote:
        "We were signposted to what feels like a future plan for me already. I'm going away from this knowing exactly what I need to do to create the foundations of my financial journey. It was so great coming from a Muslim woman.",
      person: "Trainee solicitor",
    },
    {
      quote:
        "I learned so much and what I liked specifically was that it's coming from [someone] who's very similar to me. I loved how you went through everything that I'm going to need to know. I feel like I've got steps to go through now.",
      person: "Civil servant",
    },
    {
      quote:
        "I understood so many concepts that you broke down. There are so many rights I didn't know I had, in regards to speaking to your workplace about pensions that are compliant with your faith and not feeling that you have to compromise.",
      person: "Technology consultant",
    },
  ];
  return (
    <div>
      {/* Header section*/}
      <section className="page-header py-8 ">
        <h1 className="text-3xl text-primary-purple font-bold">
          Financial Wellbeing Designed with Muslim Women in Mind
        </h1>
        <p className="text-gray-600">
          Nisa Invest provides the peace and clarity we all need to thrive. It
          is a platform that helps Muslim women navigate workplace pensions and
          employee benefits in line with personal values.
        </p>
      </section>
      {/* Section 1 - serving diverse needs */}
      <section className="bg-accent-light-green">
        <h2 className="text-3xl text-primary-purple font-bold">
          Serving diverse needs across all stages of life
        </h2>
        <p>
          Navigating finances can be overwhelming, and knowing where to start is
          often the toughest challenge. It can all feel like a black box,
          especially when dealing with key areas like:
        </p>
        <div>
          <ul className="grid grid-cols-2 gap-4 gap-x-4 mb-6 ">
            <li>Workplace Pension</li>
            <li>Family Benefits</li>
            <li>Student Loans</li>
            <li>Payroll Giving</li>
          </ul>
        </div>
        <p>
          Employers who provide guidance while being mindful of diverse needs
          can make a real difference to the employee experience.
        </p>
      </section>
      {/* Section 2 - How Nisa Invest Works*/}
      <section className="py-16 px-4 bg-[#DBCCE1]">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-playfair text-3xl md:text-4xl text-[#512294] mb-6">
            How Nisa Invest works
          </h2>
          <span className="mb-6 justify-center">
            Increase engagement with your benefits program through our inclusive
            platform, supporting Muslim female team members and their financial
            wellbeing.
          </span>
          {/* <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: 'Interactive Dashboard', description: 'Digital tools to help optimise financial planning and benefits in line with personal values' },
              { title: 'Financial Coaching', description: '1-on-1 sessions with our all-female team of financial coaches, experts in Islamic finance' },
              { title: 'Community Events', description: 'Year-round sessions fostering belonging, answering questions, and supporting each other' }
            ].map((item, index) => (
              <Card key={index} className="bg-white">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-xl text-[#512294] mb-2">{item.title}</h3>
                  <p>{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div> */}
        </div>
      </section>
      {/* Section 3 -  Attract and Retain Talent */}
      <section className="py-16 px-4 text-primary-purple text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-playfair text-3xl md:text-4xl mb-6">
            Attract and Retain Talent
          </h2>
          <p className="mb-8">
            Stand out to new and existing talent by supporting them in
            navigating the benefits you offer, especially those whose needs are
            often overlooked by traditional financial planners.
          </p>
          <Button label="BOOK A DEMO" />
        </div>
      </section>

      {/* Section 4 - Testimonials*/}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-playfair text-3xl md:text-4xl text-[#512294] mb-6 text-center">
            What our community is saying
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((item) => (
              <TestimonalCard quote={item.quote} person={item.person} />
            ))}
          </div>
        </div>
      </section>

      {/* Section 5 */}
      <section className="py-16 px-4 bg-[#512294] text-white text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-playfair text-3xl md:text-4xl mb-6">
            We're here to help your team thrive
          </h2>
          <p className="mb-8">
            Get started today and make financial wellbeing accessible to all.
          </p>
          <Button variant="secondary" label="BOOK A DEMO" />
        </div>
      </section>
    </div>
  );
}
