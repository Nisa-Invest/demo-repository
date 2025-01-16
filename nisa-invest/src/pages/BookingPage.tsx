import { Calendly } from "@/components/Calendly/Calendly";

export default function BookingPage() {
  return (
    <>
      <div className="flex items-center justify-center min-h-screen p-4">
        <div className="w-full max-w-4xl h-full">
          <Calendly />
        </div>
      </div>
    </>
  );
}


