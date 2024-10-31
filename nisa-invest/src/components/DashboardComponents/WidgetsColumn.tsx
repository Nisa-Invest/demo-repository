import { CgCheckO } from "react-icons/cg";
import { CgHeart } from "react-icons/cg";
import { DropArea } from "./DropArea";
import React from "react";
interface WidgetsColumnProps {
  title: string;
  children: React.ReactNode;
  className?: string;
  onDrop: (columnTitle: string, position: number) => void;
}

export function WidgetsColumn({
  title,
  children,
  className,
  onDrop,
}: WidgetsColumnProps) {
  return (
    <div className={`flex flex-col ${className}`}>
      <h3 className="text-lg font-semibold mb-4 flex mt-4 self-center items-start">
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

      <section className="p4 bg-white rounded-lg shadow flex flex-col min-h-80">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-max">
          {React.Children.map(children, (child, index) => (
            // make sure to wrap the drop area and the child in a fragment
          <>
              <DropArea
                position={index}
                columnTitle={title}
                onDrop={onDrop}
              />
              {child}
           </>
          ))}
          <DropArea
            position={React.Children.count(children)}
            columnTitle={title}
            onDrop={onDrop}
          />
        </div>
      </section>
    </div>
  );
}