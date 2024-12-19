export interface Task {
  id: number;
  category: "Workplace_Pension" | "Student_Loan" | "Family_Benefits" | "Charity";
  title: string;
  description: string;
  status: "Doing Well!" | "Let's Improve" | "Let's Clarify";
}

export type WidgetT = {
  id: number;
  title: string;
  description: string;
  status: "Doing Well!" | "Let's Improve" | "Let's Clarify";
  icon?: React.ReactNode;
  column: number
  position: number
  onDragStart?: (event: React.DragEvent<HTMLDivElement>) => void;
  onDragEnd?: (event: React.DragEvent<HTMLDivElement>) => void;
};