import { NisaLogo } from "../assets/Nisa_Logo";
import { Button } from "../components/Button/Button";
import TestimonialCard from "../components/TestimonialCard/TestimonialCard";
import { areasWeHelp } from "../utils/AreasWeHelp";
import { services } from "../utils/services";
import { testimonials } from "../utils/testimonials";





export function LandingPage() {
  return (
    <div className="scroll-smooth">
      {/* Header section */}
      <header className="min-h-screen bg-primary-purple flex items-center px-4 py-12">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <NisaLogo className="mb-8 md:mb-0" />
          <div className="max-w-3xl text-center md:text-left">
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl text-lightest-grey mb-6">
              Financial Wellbeing Designed with Muslim Women in Mind
            </h1>
            <p className="text-accent-light-grey text-lg md:text-xl mb-8">
              Nisa Invest provides the peace of mind and dignity that comes with
              managing your personal finances. We are a platform that helps
              Muslim women navigate workplace pensions and employee benefits in
              line with personal values.
            </p>
          </div>
        </div>
      </header>

      {/* Section 1 - serving diverse needs */}
      <section className="py-20 px-4 text-slate-grey">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl  font-bold mb-8 text-slate-grey">
            Serving diverse needs across all stages of life
          </h2>
          <p className="text-lg mb-8">
            Navigating finances can be overwhelming, and knowing where to start
            is often the toughest challenge. It can all feel like a black box,
            especially when dealing with key areas like:
          </p>
          <ul className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8 text-primary-purple">
            {areasWeHelp.map((item, index) => {
              const Icon = item.icon;
              return (
                <li
                  key={index}
                  className="bg-accent-light-grey bg-opacity-20 rounded-lg p-4 flex items-center justify-center"
                >
                  <Icon className="w-5 h-5 mr-2" size={20} />
                  <span>{item.text}</span>
                </li>
              );
            })}
          </ul>
          <p className="text-lg">
            Employers who provide guidance while being mindful of diverse needs
            can make a real difference to the employee experience.
          </p>
        </div>
      </section>

      {/* Section 2 - How Nisa Invest Works */}
      <section className="py-20 px-4 bg-accent-light-purple">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-playfair text-3xl md:text-4xl text-[#512294] mb-6 text-center">
            How Nisa Invest works
          </h2>
          <p className="text-lg text-center mb-12">
            Increase engagement with your benefits program through our inclusive
            platform, supporting Muslim female team members and their financial
            wellbeing.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {services.map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-semibold text-xl text-[#512294] mb-2">
                  {item.title}
                </h3>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3 - Attract and Retain Talent */}
      <section className="py-20 px-4 text-slate-grey text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-playfair text-3xl md:text-4xl mb-6">
            Attract and Retain Talent
          </h2>
          <p className="text-lg mb-8">
            Stand out to new and existing talent by supporting them in
            navigating the benefits you offer, especially those whose needs are
            often overlooked by traditional financial planners.
          </p>
          <Button className="place-self-center" label="BOOK A DEMO" />
        </div>
      </section>

      {/* Section 4 - Testimonials */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-playfair text-3xl md:text-4xl text-[#512294] mb-12 text-center">
            What our community is saying
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((item, index) => (
              <TestimonialCard
                key={index}
                quote={item.quote}
                person={item.person}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Section 5 - Call to Action */}
      <section className="py-20 px-4  text-slate-grey text-center flex flex-col justify-center ">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-playfair text-3xl md:text-4xl mb-6">
            We're here to help your team thrive
          </h2>
          <p className="text-lg mb-8">
            Get started today and make financial wellbeing accessible to all.
          </p>
          <Button
            className="place-content-center"
            variant="secondary"
            label="BOOK A DEMO"
          />
        </div>
      </section>
    </div>
  );
}
