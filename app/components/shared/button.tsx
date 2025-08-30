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
    className:
      "shadow-[inset_0px_-2px_0px_0px_rgba(0,0,0,0.22),inset_0px_1px_0px_0px_rgba(255,255,255,0.39)] " +
      "transition-all duration-300 ease-out " +
      "hover:shadow-[inset_0px_-3px_0px_0px_rgba(0,0,0,0.3),inset_0px_2px_0px_0px_rgba(255,255,255,0.5),0_8px_25px_rgba(120,82,255,0.4)]",
    style: {
      background:
        "linear-gradient(0deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.2) 100%), #7852FF",
      backgroundBlendMode: "overlay, normal",
    },
  },
  "outline-purple": {
    className:
      "border border-primary text-primary " +
      "[box-shadow:0_0_16.4px_0_rgba(127,17,224,0.2),0_0_18.9px_0_rgba(127,17,224,0.2)_inset,inset_0_0_24px_rgba(127,17,224,0.15)] " +
      "animate-purple-glow " +
      "transition-all duration-300 ease-out " +
      "hover:[box-shadow:0_0_25px_0_rgba(127,17,224,0.4),0_0_30px_0_rgba(127,17,224,0.3)_inset,inset_0_0_35px_rgba(127,17,224,0.25)]",
    style: {
      background:
        "linear-gradient(135deg, rgba(127,17,224,0.08) 0%, rgba(127,17,224,0.02) 50%, rgba(127,17,224,0.08) 100%), rgba(127,17,224,0.04)",
    },
  },
  "outline-pink": {
    className:
      "border border-pink text-pink " +
      "[box-shadow:0_0_16.4px_0_rgba(255,82,232,0.2),0_0_18.9px_0_rgba(255,82,232,0.2)_inset,inset_0_0_24px_rgba(255,82,232,0.15)] " +
      "animate-pink-glow " +
      "transition-all duration-300 ease-out " +
      "hover:[box-shadow:0_0_25px_0_rgba(255,82,232,0.4),0_0_30px_0_rgba(255,82,232,0.3)_inset,inset_0_0_35px_rgba(255,82,232,0.25)]",
    style: {
      background:
        "linear-gradient(135deg, rgba(255,82,232,0.08) 0%, rgba(255,82,232,0.02) 50%, rgba(255,82,232,0.08) 100%), rgba(255,82,232,0.04)",
    },
  },
  "outline-cyan": {
    className:
      "border border-cyan text-cyan " +
      "[box-shadow:0_0_16.4px_0_rgba(16,249,254,0.2),0_0_18.9px_0_rgba(16,249,254,0.2)_inset,inset_0_0_24px_rgba(16,249,254,0.15)] " +
      "animate-cyan-glow " +
      "transition-all duration-300 ease-out " +
      "hover:[box-shadow:0_0_25px_0_rgba(16,249,254,0.4),0_0_30px_0_rgba(16,249,254,0.3)_inset,inset_0_0_35px_rgba(16,249,254,0.25)]",
    style: {
      background:
        "linear-gradient(135deg, rgba(16,249,254,0.08) 0%, rgba(16,249,254,0.02) 50%, rgba(16,249,254,0.08) 100%), rgba(16,249,254,0.04)",
    },
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
