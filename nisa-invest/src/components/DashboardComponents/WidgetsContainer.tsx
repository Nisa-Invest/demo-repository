import { useReducer } from "react";
import { Widget1 } from "./Widget1";
import { Tasks } from "../../utils/data";

type Widget = {
  id: number;
  column: number;
  position: number;
  isDragged: boolean
};
 
type WidgetAction = 
  | { type: 'SET_DRAGGED'; payload: number }
  | { type: 'DROP_WIDGET'; payload: { widgetId: number; targetColumn: number } }
  | { type: 'CLEAR_DRAGGED' };


type WidgetState = {
widget: Widget[] 
draggedWidgetId: number;
}


 function reducer(state: WidgetState, action: WidgetAction) {
   switch (action.type) {
     case "SET_DRAGGED":
       return { ...state, draggedWidgetId: action.payload };
     case "DROP_WIDGET":
       return { ...state, inDropZone: action.inDropZone };
      case "CLEAR_DRAGGED":
        return
   
     default:
       return state;
   }


export function WidgetsContainer() {
  const initialState: WidgetState = {
  widgets: Tasks.map((task, index)=> {
    id: task.id,
    column: 0,
    position: index,
    isDragged: false
  }),
  draggedWidgetId:null
  };
 
  

  const handleDragStart = (e: React.DragEvent<HTMLDivElement>, widgetId: number) => {
    e.preventDefault();
    e.stopPropagation();
    setDraggedWidgetId(widgetId);
    e.dataTransfer.setData("text/plain", widgetId.toString());
  };

  const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>, columnId:number) => {
    e.preventDefault();
    e.stopPropagation();
  };

  return (
    <div className="container">
      <div
        className="drag-column"
        onDrop={(e) => handleDrop(e)}
        onDragOver={(e) => handleDragOver(e)}
        onDragEnter={(e) =>handleDragStart(e)}
        onDragLeave={(e) => handleDragLeave(e)}
      >
      {Tasks.map((task) => (
        <Widget1 
          title={task.title} 
          description={task.description} 
          status={task.status} 
          id={task.id} 
        />
      ))}
      </div>

      <div
        className="drag-column"
        onDrop={(e) => handleDrop(e)}
        onDragOver={(e) => handleDragOver(e)}
        onDragEnter={(e) =>handleDragStart(e)}
        onDragLeave={(e) => handleDragLeave(e)}
      ></div>
    </div>
  );
}
 };