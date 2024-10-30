import { Badge } from "@adobe/react-spectrum";

interface WidgetProps {
  title: string;
  description: string;
  status: "Doing Well!" | "Let's Improve" | "Let's Clarify";
  icon?: React.ReactNode;
  id: number;
}

export function Widget({ title, description, status, icon, id }: WidgetProps) {
  const getStatusColour = (status: string) => {
    switch (status) {
      case "Doing Well!":
        return "positive";
      case "Let's Improve":
        return "yellow";
      case "Let's Clarify":
        return "seafoam";
      default:
        return "seafoam";
    }
  };
  return (
    <article
      key={id}
      className="bg-accent-light-yellow flex flex-col rounded-md"
    >
      <div className="flex items-center justify-between">
        {/* {icon && <div className="text-muted-foreground">{icon}</div>} */}
      </div>
      <Badge variant="positive">{status}</Badge>
      <h1>{title}</h1>
      <h3>{description}</h3>
    </article>
  );
}
