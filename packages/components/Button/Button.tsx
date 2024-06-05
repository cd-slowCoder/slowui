import "./button.css";
import { cva } from "class-variance-authority";

interface ButtonProps {
  /**
   * Is this the principal call to action on the page?
   */
  variant?: "primary" | "info" | "danger" | "success";

  /**
   * How large should the button be?
   */
  size?: "small" | "medium" | "large";
  /**
   * Button contents
   */
  children: React.ReactNode;
  /**
   * Optional click handler
   */
  onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const Button = ({
  variant = "primary",
  size = "medium",
  children,
  ...props
}: ButtonProps) => {
  const buttonClasses = cva(["border rounded"], {
    variants: {
      variant: {
        primary: "bg-blue-500 text-white hover:bg-blue-700",
        info: "bg-gray-500 text-white hover:bg-gray-700",
        danger: "bg-red-400 text-white hover:bg-red-700",
        success: "bg-green-600 text-white hover:bg-green-700",
      },
      size: {
        small: "py-1 px-2 text-sm",
        medium: "py-2 px-4 text-md",
        large: "py-3 px-6 text-lg",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "medium",
    },
  });
  return (
    <button
      type="button"
      className={buttonClasses({ variant, size })}
      {...props}
    >
      {children}
    </button>
  );
};
