import { cn } from "@/lib/cn";
import { CSSProperties, HTMLAttributes, ReactNode } from "react";

type VariantKeyT =
  | "primary"
  | "outline-purple"
  | "outline-pink"
  | "outline-cyan";

type VariantConfigT = {
  className: string;
  style?: CSSProperties;
};

const variants: Record<VariantKeyT, VariantConfigT> = {
  primary: {
    // filled primary
    className:
      "shadow-[inset_0px_-2px_0px_0px_rgba(0,0,0,0.22),inset_0px_1px_0px_0px_rgba(255,255,255,0.39)] outline-none",
    style: {
      background:
        "linear-gradient(0deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.2) 100%), #7852FF",
      backgroundBlendMode: "overlay, normal",
    },
  },
  "outline-purple": {
    className:
      "border border-primary bg-primary/4 text-primary outline-none " +
      "[box-shadow:0_0_16.4px_0_rgba(127,17,224,0.2),0_0_18.9px_0_rgba(127,17,224,0.2)_inset] " +
      "animate-purple-glow",
  },
  "outline-pink": {
    className:
      "border border-pink bg-pink/4 text-pink outline-none " +
      "[box-shadow:0_0_16.4px_0_rgba(255,82,232,0.2),0_0_18.9px_0_rgba(255,82,232,0.2)_inset] " +
      "animate-pink-glow",
  },
  "outline-cyan": {
    className:
      "border border-cyan bg-cyan/4 text-cyan outline-none " +
      "[box-shadow:0_0_16.4px_0_rgba(16,249,254,0.2),0_0_18.9px_0_rgba(16,249,254,0.2)_inset] " +
      "animate-cyan-glow",
  },
};

type ButtonProps = HTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  className?: string;
  variant?: VariantKeyT;
};

export default function Button({
  children,
  className,
  variant = "primary",
  style,
  ...restProps
}: ButtonProps) {
  const cfg = variants[variant];
  return (
    <button
      className={cn(cfg.className, className)}
      style={{ ...cfg.style, ...style }}
      {...restProps}
    >
      {children}
    </button>
  );
}
