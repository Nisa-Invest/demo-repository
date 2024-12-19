import React from "react";

type VariantType = "Doing Well!" | "Let's Improve"

interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: VariantType;
}

const getVariantClasses = (variant: VariantType): string => {
  const variants: Record<VariantType, string> = {
    "Doing Well!": "bg-green-700 text-white hover:bg-green-800",
    "Let's Improve": "bg-red-700 text-white hover:bg-red-800",
  };

  return variants[variant];
};

const Badge = React.forwardRef<HTMLDivElement, BadgeProps>(
  ({ className = "", variant = "doingWell", children, ...props }, ref) => {
    const baseClasses =
      "inline-flex items-center rounded-md px-2.5 py-0.5 text-xs font-semibold transition-colors";
    const variantClasses = getVariantClasses(variant as VariantType);
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
