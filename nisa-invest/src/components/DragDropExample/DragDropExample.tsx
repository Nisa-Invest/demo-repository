import { useReducer, DragEvent } from "react";
import "./DnD.css";

//Define the type for each item
type Item = {
  id:number;
  column:string;
  value:string;
}

//Define action types for the reducer
const ACTIONS = {
  DRAG_START: "handleDragStart",
  DRAG_ENTER: "handleDragEnter",
  DRAG_OVER: "handleDragOver",
  DRAG_LEAVE: "handleDragLeave",
  DROP:"handleDrop"
} as const; // `as const` makes the ACTIONS object both a runtime value and type

// columns to drag between
const columns = ["column1", "column2"];



 //Inital items drag
  const initialItems:Item[] = [
    { id: 1, column: "column1", value: "value 1" },
    { id: 2, column: "column1", value: "value 2" },
    { id: 3, column: "column2", value: "value 3" },
  ];

//Define the state type
type State = {
  items: Item[];
  draggedItemID: number | null;
}


const initialState: State = {
  items: initialItems,
  draggedItemID: null,
}

//reducer function which handles state updates
const reducer = (state: State, action: { type: string; payload?: any }) => {
  switch (action.type) {
    case ACTIONS.DRAG_START:
      return { ...state, draggedItemId: action.payload.item.id }; // Store only the dragged item's id

    case ACTIONS.DROP:
      return { ...state, draggedItemId: null }; // Reset the dragged item after drop
    default:
      return state;
  }
};

export function DnD() {
const [items, dispatch] = useReducer(reducer, initialWidgets);

  return (

    <div className="container">
      <div className="groups">
        {columns.map((column) => (
          <div className="group">
            <h1 className="title">{column}</h1>
            <div>
              {items
                .filter((item) => item.column === column)
                .map((item) => (
                  <div
                    key={item.id}
                    id={item.id}
                    className="item"
                    // THIS MAKES THE ITEM DRAGGABLE!!!
                    draggable="true"
                  >
                    // item title
                    {item.value}
                  </div>
                ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
