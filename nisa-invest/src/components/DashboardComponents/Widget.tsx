import Badge from '../Badge/Badge'

interface WidgetProps {
  title: string;
  description: string;
  status: "Doing Well!" | "Let's Improve" | "Let's Clarify";
  icon?: React.ReactNode;
  id: number;
  setActiveWidget: (id: number | null) => void;
}

export function Widget({
  title,
  description,
  status,
  id,
  setActiveWidget,
}: WidgetProps) {
  const getStatusColour = (status: string) => {
    switch (status) {
      case "Doing Well!":
        return "bg-green-100 text-green-800 hover:bg-green-200";
      case "Let's Improve":
        return "bg-orange-100 text-orange-800 hover:bg-orange-200";
      case "Let's Clarify":
        return "bg-blue-100 text-blue-800 hover:bg-blue-200";
      default:
        return "bg-gray-100 text-gray-800 hover:bg-gray-200";
    }
  };

  return (
    <article
      key={id}
      className="bg-accent-light-yellow flex flex-col rounded-md p-4 shadow-sm w-64 overflow-hidden active:bg-accent-light-purple/20 active:cursor-grab"
      draggable="true"
      onDragStart={() => setActiveWidget(id)}
      onDragEnd={() => setActiveWidget(null)}
    >
      <div className="flex items-center justify-between">
        {/* {icon && <div className="text-muted-foreground">{icon}</div>} */}
      </div>
      <Badge className={`${getStatusColour(status)} self-end text-wrap w-auto`}>
        {status}
      </Badge>
      <h1>{title}</h1>
      <h3 className="">{description}</h3>
    </article>
  );
}
