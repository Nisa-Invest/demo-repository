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
      onDragEnter={() => setShowDrop(true)}
    //When a dragged item leaves the drop zone
      onDragLeave={() => setShowDrop(false)}
    //When item is dropped
      onDrop={(e) => {
        e.preventDefault();
        onDrop(columnTitle, position);  // Pass the column title instead of hardcoded status
        setShowDrop(false);
      }}

      //This is crucial, without this, the browser's default behaviour will prevent dropping
      //the default behaviour is to not allow dropping
      onDragOver={(e) => e.preventDefault()}
      
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
