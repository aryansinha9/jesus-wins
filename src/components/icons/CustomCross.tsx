// src/components/icons/CustomCross.tsx
import React from 'react';

/**
 * A custom cross icon component based on the user-provided shape.
 * It inherits color and size from Tailwind CSS classes.
 */
export default function CustomCross({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 44"
      fill="currentColor"
      className={className}
    >
      <path d="M12 0 H20 V14 H32 V22 H20 V44 H12 V22 H0 V14 H12 Z" />
    </svg>
  );
}