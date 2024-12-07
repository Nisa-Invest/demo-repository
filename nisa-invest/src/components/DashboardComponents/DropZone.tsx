import styles from "./dashboard.module.css";

interface DropZoneProps {
  onDrop: (widgetId: number) => void;
  children: React.ReactNode;
  className?: string;
}

export function DropZone({ onDrop, children, className }: DropZoneProps) {
  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = "move";
  };
  const handleDrop = (widgetId: number, e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    widgetId = parseInt(e.dataTransfer.getData("text/plain"));
    onDrop(widgetId);
  };
  return (
    <div
      className={`${styles.dropZone} ${className || ""}`}
      onDragOver={handleDragOver}
      onDrop={handleDrop()}
    >
      {children}
    </div>
  );
}
