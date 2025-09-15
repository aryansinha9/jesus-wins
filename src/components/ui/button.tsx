// src/components/ui/button.tsx
import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size?: "default" | "sm" | "lg" | "icon"; // Add specific size types if needed
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, children, size, ...props }, ref) => {
    let buttonClasses = "inline-flex items-center justify-center font-medium rounded-md transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none";

    if (size === "lg") {
      buttonClasses += " px-12 py-6 text-lg"; // Adjusted to match original usage
    } else if (size === "sm") {
      buttonClasses += " px-3 py-2 text-sm";
    } else if (size === "icon") {
      buttonClasses += " h-10 w-10"; // Placeholder for icon buttons
    } else {
      buttonClasses += " px-4 py-2 text-base"; // Default size
    }

    return (
      <button
        className={`${buttonClasses} ${className}`}
        ref={ref}
        {...props}
      >
        {children}
      </button>
    );
  }
);
Button.displayName = "Button";

export { Button };