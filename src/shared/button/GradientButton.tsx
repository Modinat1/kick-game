// interface ButtonProps {
//   text: string;
//   type: "submit" | "reset" | "button";
//   className?: string;
// }

// const Button = ({ text, type, className }: ButtonProps) => {
//   return (
//     <button
//       type={type}
//       className={`${className} w-full bg-blue-500 text-black text-center capitalize p-3 cursor-pointer`}
//     >
//       {text}
//     </button>
//   );
// };

// export default Button;

// <button
//       className="w-full text-white font-bold text-sm py-4 rounded-xl
// bg-gradient-to-r from-[#FF1975] to-[#845EC2]
// shadow-[0_0_25px_5px_rgba(255,0,92,0.6)]
// hover:opacity-90 transition duration-300"
//     >
//       CONTINUE
//     </button>

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
        "bg-gradient-to-r from-[#ff0055] to-[#9900ff]",
        "shadow-[0_0_15px_rgba(255,0,85,0.5)]",
        "transition-all duration-300 hover:shadow-[0_0_25px_rgba(255,0,85,0.7)]",
        "focus:outline-none focus:ring-2 focus:ring-[#ff0055] focus:ring-offset-2 focus:ring-offset-[#0a0e1a]",
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
