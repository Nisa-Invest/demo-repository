import { useNavigate } from "react-router-dom";

export interface ButtonProps {
  label: string;
  variant?: "primary" | "secondary";
  backgroundColor?: string;
  icon?: React.ReactNode;
  size?: "small" | "medium" | "large";
  onClick?: () => void;
  href?: string;
}

export const Button = ({
  label,
  variant = "primary",
  icon,
  href,
  ...props
}: ButtonProps) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (href) {
      navigate(href);
    }
    return;
  };

  return (
    <button
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
  
      `}
      onClick={handleClick}
      {...props}
    >
      {icon && <span className="w-4 h-4 md:w-5 md:h-5">{icon}</span>}
      <span className="text-center break-words">{label}</span>
    </button>
  );
};
