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
        "shadow-[inset_0px_-2px_0px_0px_rgba(0,0,0,0.22),inset_0px_1px_0px_0px_rgba(255,255,255,0.39)]",
        className
      )}
      style={{
        background:
          "linear-gradient(0deg, rgba(255, 255, 255, 0.00) 0%, rgba(255, 255, 255, 0.20) 100%), #7852FF",
        backgroundBlendMode: "overlay, normal",
      }}
      {...props}
    >
      {children}
    </button>
  );
}
