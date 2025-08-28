import { cn } from "@/lib/cn";
import { HTMLAttributes, ReactNode } from "react";

type ButtonProps = HTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  className?: string;
};

export default function Button({ children, className, ...props }: ButtonProps) {
  return (
    <button
      className={cn(
        "bg-primary from-white/0 to-white/20 shadow-[inset_0px_1px_0px_0px_rgba(255,255,255,0.39),inset_0px_-2px_0px_0px_rgba(0,0,0,0.22)]",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
