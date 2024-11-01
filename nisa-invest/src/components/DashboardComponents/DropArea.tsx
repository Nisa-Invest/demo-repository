import { useState } from "react";

interface DropAreaProps {
  position: number;
  columnTitle: string;
  onDrop: (columnTitle: string, position: number) => void;
}

export function DropArea({ position, columnTitle, onDrop }: DropAreaProps) {
  const [showDrop, setShowDrop] = useState(false);

  return (
    <section
      //When a dragged item enters the drop zone
      onDragEnter={(e) => {
        e.preventDefault();
        console.log("Drag Enter");
        setShowDrop(true);
      }}
      //When a dragged item leaves the drop zone
      onDragLeave={(e) =>{
        e.preventDefault();
          console.log("Drag Leave");
        setShowDrop(false)}}


      onDragOver={(e) =>{
        e.preventDefault();
        console.log("Drag Over");
      }}

      //When item is dropped
      onDrop={(e) => {
        e.preventDefault();
        console.log('Drop Happened!', {columnTitle, position})
        onDrop(columnTitle, position); // Pass the column title instead of hardcoded status
        setShowDrop(false);
      }}
      //This is crucial, without this, the browser's default behaviour will prevent dropping
      //the default behaviour is to not allow dropping

      className={`
        ${
          showDrop
            ? "h-24 bg-primary-purple/20 border-2 border-dashed border-primary-purple transition-all duration-200"
            : "h-2 transition-all duration-200"
        }
      `}
    >
      {showDrop && (
        <div className="flex items-center justify-center h-full text-primary-purple">
          Drop Here
        </div>
      )}
    </section>
  );
}
