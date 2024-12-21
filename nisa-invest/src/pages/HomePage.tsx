import { SimpleCard } from "../components/Card/SimpleCard";
export function HomePage() {
  return (
    <div>
      <div className="grid grid-cols-6 gap-4">
        <div className="col-start-2 col-span-2 pt-20">
          {" "}
          <SimpleCard title={"Book a meeting with your financial advisor!"} />
        </div>
        <div className=" col-start-4 h-48"> </div>
        <div className="col-start-4 col-span-2 ...">
          <SimpleCard title={"See your dashboard"} />
        </div>
        <div className=" col-start-2 h-48"> </div>
        <div className="col-start-2 col-span-4 ...">
          {" "}
          <SimpleCard title={"FAQs"} />
        </div>
        <div className="col-start-4 col-span-2 ...">
          <SimpleCard title={"My Notes"} />
        </div>
      </div>
    </div>
  );
};
