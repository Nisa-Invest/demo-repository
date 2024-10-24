export interface ButtonProps {
  label: string;
  onClick?: () => void;
  variant?: "primary" | "secondary";
  backgroundColor?: string;
  icon?: React.ReactNode;
  size?: "small" | "medium" | "large";
  className?: string;
}

export const Button = ({
  label,
  onClick,
  variant = "primary",
  icon,
  className = "",
  ...props
}: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`
        flex items-center gap-2 px-4 py-2
        rounded-lg font-medium
        transition-colors duration-200
        ${
          variant === "primary"
            ? "bg-accent-light-purple text-primary-purple hover:bg-gray-200"
        
            : "bg-accent-light-green text-secondary-green hover:bg-green-200"}
        ${className}
      `}
      {...props}
    >
      {icon && <span className="w-5 h-5">{icon}</span>}
      {label}
    </button>
  );
};
