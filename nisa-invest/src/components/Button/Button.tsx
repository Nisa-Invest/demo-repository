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
        flex items-center gap-1 md:gap-2
        px-2 md:px-4 py-1 md:py-2 mx-1
        rounded-lg font-medium text-xs md:text-base min-w-min 
        transition-colors duration-200 shadow-md
        ${
          variant === "primary"
            ? "bg-lightest-grey text-primary-purple hover:bg-accent-light-yellow"
            : "bg-accent-light-yellow text-primary-purple hover:bg-green-200"
        }
        ${className}
      `}
      {...props}
    >
      {icon && <span className="w-4 h-4 md:w-5 md:h-5">{icon}</span>}
      <span className="text-center break-words">{label}</span>
    </button>
  );
};
