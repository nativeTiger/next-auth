import { FC, forwardRef } from "react";
import { ButtonTypes } from "@/components/ui/button/button-types";
import { cn } from "@/utils/tailwind-merge";

export const Button: FC<ButtonTypes> = forwardRef<
  HTMLButtonElement,
  ButtonTypes
>(({ onClick, type, className, id, disabled, children }, ref) => {
  return (
    <button
      disabled={disabled}
      id={id}
      type={type}
      onClick={onClick}
      ref={ref}
      className={cn(
        "w-full flex space-x-4 gap-x-4 items-center px-3 py-2 rounded-md hover:bg-blue-500 hover:text-white duration-300",
        className
      )}
    >
      {children}
    </button>
  );
});
