interface WidgetProps {
  title: string;
  description: string;
  status: "Doing Well!" | "Let's Improve" | "Let's Clarify";
  icon?: React.ReactNode;
}

export function Widget({ title, description, status, icon }: WidgetProps) {
  return (
    <div className="bg-accent-light-yellow flex flex-col rounded-md">
      <div>
        {" "}
        <svg>{icon}</svg>
        <div>{status}</div>
      </div>
      <h1>{title}</h1>
      <h3>{description}</h3>
    </div>
  );
}
