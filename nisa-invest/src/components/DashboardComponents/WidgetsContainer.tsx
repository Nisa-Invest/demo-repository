import { useState, useEffect } from "react";
import { WidgetsColumn } from "./WidgetsColumn";
import { Widget } from "./Widget/Widget";
import { Tasks } from "../../utils/data";

interface WidgetType {
  id: number;
  title: string;
  description: string;
  status: "Doing Well!" | "Let's Improve" | "Let's Clarify";
}
export function WidgetsContainer() {
  const [widgets, setWidgets] = useState<WidgetType[]>(() => {
    const savedWidgets = localStorage.getItem("widgets");
    return savedWidgets ? JSON.parse(savedWidgets) : Tasks;
  });

  //when a widget is dragging, activeWidget is the id number of that widget. When Drag finished value is null.
  const [activeWidget, setActiveWidget] = useState<number | null>(null);

  useEffect(() => {
    localStorage.setItem("widgets", JSON.stringify(widgets));
  }, [widgets]);

  function onDrop(columnTitle: string, position: number) {
    if (activeWidget === null) return;

    setWidgets((prevWidgets) => {
      // 1. find the widget you want to move
      let widgetToMove;
      for (const widget of prevWidgets) {
        if (widget.id === activeWidget) {
          widgetToMove = widget;
          break;
        }
      }

      if (!widgetToMove) return prevWidgets;

      // 2. Create a new array without the widget we're moving
      const updatedWidgets: WidgetType[] = [];

      for (const widget of prevWidgets) {
        if (widget.id !== activeWidget) {
          updatedWidgets.push(widget);
        }
      }

      //3. Insert the widget at it's new position with updated status
      updatedWidgets.splice(position, 0, {
        ...widgetToMove,
        status:
          columnTitle === "Completed Tasks" ? "Doing Well!" : "Let's Improve",
      });

      return updatedWidgets;
    });

    setActiveWidget(null);
  }

  return (
    <div className="mt-12">
      <section className="grid grid-cols-2 h-48 overflow-scroll">
        <WidgetsColumn
          className="mr-9"
          title="To Do Tasks"
          onDrop={onDrop} // Add this
        >
          {Tasks.map((widget: WidgetType) => (
            <Widget
              key={widget.id} // 5. Issue: Missing key prop
              id={widget.id}
              title={widget.title}
              description={widget.description}
              status="Let's Improve"
              setActiveWidget={setActiveWidget}
            />
          ))}
        </WidgetsColumn>

        <WidgetsColumn title="Completed Tasks" onDrop={onDrop}>
          {/* {Tasks.map((widget) => (
            <Widget
              key={widget.id}
              id={widget.id}
              title={widget.title}
              description={widget.description}
              status="Doing Well!"
              setActiveWidget={setActiveWidget}
            />
          ))} */}
          <Widget
            key={11}
            id={11}
            title={"test"}
            description={"widget.description"}
            status="Doing Well!"
            setActiveWidget={setActiveWidget}
          />
        </WidgetsColumn>
      </section>
    </div>
  );
}
