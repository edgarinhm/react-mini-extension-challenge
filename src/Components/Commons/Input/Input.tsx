import { ChangeEvent, forwardRef } from "react";
import "./input.css";

export interface InputProps {
  name: string;
  value?: string | number;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  label?: string;
  placeholder?: string;
  className?: string;
  required?: boolean;
  error?: string;
  type?: string;
  onFocus?: (e: ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  autocomplete?: string;
  isVisibleRequiredIcon?: boolean;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      name,
      value,
      onChange,
      label,
      placeholder,
      required = false,
      error,
      type = "text",
      onFocus,
      disabled = false,
      autocomplete = "off",
      isVisibleRequiredIcon = false,
    },
    ref
  ) => {
    return (
      <div className="container">
        {label && (
          <div className="label">
            <label htmlFor={name}>
              {label} {isVisibleRequiredIcon && <span>*</span>}
            </label>
          </div>
        )}
        <div>
          <input
            name={name}
            value={value}
            onChange={onChange}
            onFocus={onFocus}
            placeholder={placeholder}
            className="input"
            type={type}
            required={required}
            disabled={disabled}
            ref={ref}
            autoComplete={autocomplete}
          />
          {error && <div className="error">{error}</div>}
        </div>
      </div>
    );
  }
);

export default Input;
