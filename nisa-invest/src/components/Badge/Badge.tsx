import React from "react";

type VariantType = "default" | "secondary" | "destructive" | "outline";

interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: VariantType;
}

const getVariantClasses = (variant: VariantType = "default"): string => {
  const variants = {
    default: "bg-blue-500 text-white hover:bg-blue-600",
    secondary: "bg-gray-200 text-gray-800 hover:bg-gray-300",
    destructive: "bg-red-500 text-white hover:bg-red-600",
    outline: "border border-gray-300 text-gray-800 hover:bg-gray-100",
  };

  return variants[variant];
};

const Badge = React.forwardRef<HTMLDivElement, BadgeProps>(
  ({ className = "", variant = "default", children, ...props }, ref) => {
    const baseClasses =
      "inline-flex items-center rounded-md px-2.5 py-0.5 text-xs font-semibold transition-colors";
    const variantClasses = getVariantClasses(variant);
    const combinedClasses = `${baseClasses} ${variantClasses} ${className}`;

    return (
      <div ref={ref} className={combinedClasses} {...props}>
        {children}
      </div>
    );
  }
);

Badge.displayName = "Badge";

export default Badge;
