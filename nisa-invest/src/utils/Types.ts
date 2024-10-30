export interface Task {
    id:number;
    category: "Workplace_Pension"|"Student_Loan" | "Family_Benefits"| "Charity"
    title: string;
    description:string;
}