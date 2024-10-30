import { CgCheckO } from "react-icons/cg";
import { CgHeart } from "react-icons/cg";
interface WidgetColumnProps {
  title: string;
  // tasks?: Task[];
  // onTaskMove?:(taskId: string) => void
  children: React.ReactNode;
}

export function WidgetColumn({ title, children }: WidgetColumnProps) {
  return (
    <section className="p4 bg-white rounded-lg shadow flex flex-col min-h-80">
      <h3 className="text-lg font-semibold mb-4 flex mt-4 self-center">
        {title}
        {title === "Completed Tasks" && (
          <svg className="ml-2 w-7 h-7 text-green-700">
            <CgCheckO />
          </svg>
        )}
        {title === "To Do" && (
          <svg className="ml-2 w-7 h-7 text-primary-purple">
            <CgHeart />
          </svg>
        )}
      </h3>
      <div className="space-y-4 flex-grow">{children}</div>
    </section>
  );
}
