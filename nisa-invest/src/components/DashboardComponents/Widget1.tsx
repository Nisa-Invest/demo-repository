import Badge from "../Badge/Badge";
import styles from "./dashboard.module.css";
// Then in your JSX:
<article className={styles.widget}></article>;
interface WidgetProps {
  title: string;
  description: string;
  status: "Doing Well!" | "Let's Improve" | "Let's Clarify";
  icon?: React.ReactNode;
  id: number;
  // setActiveWidget: (id: number | null) => void;
}


export function Widget1({ title, description, status, id }: WidgetProps) {

  const getStatusColour = (status: string) => {
    switch (status) {
      case "Doing Well!":
        return "bg-green-100 text-green-800 hover:bg-green-200";
      case "Let's Improve":
        return "bg-orange-100 text-orange-800 hover:bg-orange-200";
      default:
        return "bg-gray-100 text-gray-800 hover:bg-gray-200";
    }
  };

  return (
    <article
      key={id}
      draggable="true"
      className={styles.widget}
    >
      <div className={styles.widgetHeader}></div>
      <Badge className={`${getStatusColour(status)} ${styles.badge}`}>
        {status}
      </Badge>
      <h1 className={styles.title}>{title}</h1>
      <h3 className={styles.description}>{description}</h3>
    </article>
  );
}
