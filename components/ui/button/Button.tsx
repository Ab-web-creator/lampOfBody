import clsx from "clsx";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "small" | "large";
  fullWidth?: boolean;
}

const Button: React.FC<ButtonProps> = ({ 
  variant = "primary", 
  size = "large", 
  fullWidth = false, 
  className, 
  children, 
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center rounded-md font-medium transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 whitespace-nowrap";

  const variantStyles = {
    primary: "bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500",
    secondary: "bg-gray-600 border-2 text-white hover:bg-blue-500 focus:ring-blue-500",
    outline: "border border-gray-600 text-gray-600 hover:bg-gray-100 focus:ring-gray-500",
    ghost: "text-gray-600 hover:bg-gray-100 focus:ring-gray-500"
  };

  const sizeStyles = {
    small: "px-3 py-1 text-sm",
    large: "px-5 py-2 text-base"
  };

  return (
    <button
      className={clsx(
        baseStyles,
        variantStyles[variant],
        sizeStyles[size],
        fullWidth && "w-full",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
