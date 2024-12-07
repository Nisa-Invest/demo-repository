import { CgCheckO } from "react-icons/cg";
import { CgHeart } from "react-icons/cg";
import React from "react";


interface WidgetsColumnProps {
  title: string;
  children: React.ReactNode;
  ondrop: (widgetId: number) => void;
  id: string;
}

export function WidgetsColumn({ title, children, ondrop}: WidgetsColumnProps) {
  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    const widgetId = parseInt(event.dataTransfer.getData("text/plain"));
    if (widgetId != null) {
      ondrop(widgetId);
    } 
  };
  return (
    <div onDrop={handleDrop}>
      <h3>
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
      <section>
        {children}
      </section>
    </div>
  );
}
