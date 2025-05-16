import type { ButtonHTMLAttributes } from "react";
import { cn } from "../../lib/utils";

interface GradientButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  onClick?: () => void;
  type: "submit" | "reset" | "button";
}

const GradientButton = ({
  children,
  onClick,
  className,
  type,
  ...props
}: GradientButtonProps) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={cn(
        "bungee-regular cursor-pointer relative overflow-hidden rounded-xl py-3 px-5 text-sm text-white uppercase",
        "bg-gradient-to-r from-[#ff0044] to-[#8b31b4]",
        "shadow-[0_0_50px_rgba(255,0,85,1.5)]",
        "transition-all duration-300 hover:shadow-[0_0_50px_rgba(255,0,85,0.9)]",
        "focus:outline-none",
        "active:scale-[0.98]",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default GradientButton;
