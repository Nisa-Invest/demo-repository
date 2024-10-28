interface TestimonialProps {
  quote: string;
  person: string;
}

export default function TestimonialCard({ quote, person }: TestimonialProps) {
  return (
    <div className="bg-[#DBCCE1] rounded-lg shadow-md p-6">
      <p className="mb-4 italic text-accent-grey">"{quote}"</p>
      <p className="text-right font-semibold text-[#512294]">– {person}</p>
    </div>
  );
}
