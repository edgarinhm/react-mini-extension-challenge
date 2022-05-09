import { forwardRef } from "react";
import "./button.css";

export interface ButtonProps {
  label?: string;
  type?: "button" | "submit" | "reset";
  onClick?: () => any;
  disabled?: boolean;
  isLoading?: boolean;
  className?: string;
  icon?: any;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { label, onClick, disabled = false, type = "button", icon, className },
    ref
  ) => {
    return (
      <button
        data-testid={type}
        disabled={disabled}
        onClick={onClick}
        type={type}
        className={`${className} button`}
        ref={ref}
      >
        {icon && <img src={icon} alt="icon" />}
        {label}
      </button>
    );
  }
);

export default Button;
