import { useReducer } from "react";
import { Widget1 } from "./Widget1";
import { Tasks } from "../../utils/data";

type Widget = {
  id: number;
  column: number;
  position: number;
  isDragged: boolean;
};

type WidgetAction =
  | { type: "SET_DRAGGED"; payload: number }
  | { type: "DROP_WIDGET"; payload: { widgetId: number; targetColumn: number } }
  | { type: "CLEAR_DRAGGED" };

type WidgetState = {
  widgets: Widget[];
  draggedWidgetId: number | null;
};

function reducer(state: WidgetState, action: WidgetAction) {
  switch (action.type) {
    case "SET_DRAGGED":
      return { ...state, draggedWidgetId: action.payload };
    case "DROP_WIDGET":
      return {
        ...state,
        widgets: state.widgets.map((w) =>
          w.id === action.payload.widgetId
            ? { ...w, column: action.payload.targetColumn }
            : w
        ),
        draggedWidgetId: null, // Reset the dragged widget
      };

    case "CLEAR_DRAGGED":
      return {
        ...state, // Spread the existing state to keep all properties intact
        draggedWidgetId: null, // Reset the dragged widget
      };

    default:
      return state;
  }

  
}
export function WidgetsContainer() {
  //setting the initial state of the
  const initialState: WidgetState = {
    widgets: Tasks.map((task, index) => {
      return {
        id: task.id,
        column: 0,
        position: index,
        isDragged: false,
      };
    }),
    draggedWidgetId: null,
  };

  //useReducer to manage widget state
  const [state, dispatch] = useReducer(reducer, initialState);

  //handlers
  const handleDragStart = (
    e: React.DragEvent<HTMLDivElement>,
    widgetId: number
  ) => {
 
    e.stopPropagation();
    dispatch({ type: "SET_DRAGGED", payload: widgetId });
    e.dataTransfer.setData("text/plain", widgetId.toString());
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>, columnId: number) => {
    e.preventDefault();
    e.stopPropagation();
    const widgetId = parseInt(e.dataTransfer.getData("text/plain"));
    dispatch({
      type: "DROP_WIDGET",
      payload: { widgetId, targetColumn: columnId },
    });
  };

  return (
    <div className="container grid grid-cols-2 gap-8 mt-8 min-h-[200px]">
      <div
        className="drag-column bg-lightest-grey rounded-md"
        onDrop={(e) => handleDrop(e, 0)} //drop into column 0
        onDragOver={(e) => e.preventDefault()}
      >
        <h2 className="text-xl font-bold font-heading text-slate-grey m-5 ">
          {" "}
          Tasks to Do, InshAllah!
        </h2>
        {state.widgets
          .filter((widget) => widget.column === 0)
          .map((widget) => (
            <Widget1
              key={widget.id}
              title={`Task ${widget.id}`}
              description={`Position: ${widget.position}`}
              status="Let's Improve"
              id={widget.id}
              onDragStart={(e) => handleDragStart(e, widget.id)}
              onDragEnd={(e) => handleDrop(e, 0)}
            />
          ))}
      </div>

      <div
        className="drag-column bg-lightest-grey rounded-md"
        onDrop={(e) => handleDrop(e, 1)} //drop into column 1
        onDragOver={(e) => e.preventDefault()}
      >
        <h2 className="text-xl font-bold font-heading text-slate-grey m-5">
          {" "}
          I have completed!{" "}
        </h2>
        {state.widgets
          .filter((widget) => widget.column === 1)
          .map((widget) => (
            <Widget1
              key={widget.id}
              title={`Task ${widget.id}`}
              description={`Position: ${widget.position}`}
              status="Doing Well!"
              id={widget.id}
              onDragStart={(e) => handleDragStart(e, widget.id)}
              onDragEnd={(e) => handleDrop(e, 0)}
            />
          ))}
      </div>
    </div>
  );
}