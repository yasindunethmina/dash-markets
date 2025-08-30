import { useEffect, useRef, useState } from "react";

interface AnimatedNumberProps {
  value: number | string;
}

export default function AnimatedNumber({ value }: AnimatedNumberProps) {
  const [displayValue, setDisplayValue] = useState(value);
  const [animating, setAnimating] = useState(false);
  const prevValue = useRef(value);

  useEffect(() => {
    if (prevValue.current !== value) {
      setAnimating(true);
      const timeout = setTimeout(() => {
        setDisplayValue(value);
        setAnimating(false);
        prevValue.current = value;
      }, 250);
      return () => clearTimeout(timeout);
    }
  }, [value]);

  return (
    <span className="relative inline-block w-[1ch] h-[1.2em] overflow-hidden align-middle">
      <span
        className={`absolute left-0 w-full transition-all duration-250 ease-in-out ${
          animating
            ? "-translate-y-full opacity-0"
            : "translate-y-0 opacity-100"
        }`}
        style={{ top: 0 }}
        aria-hidden={animating}
      >
        {prevValue.current}
      </span>
      <span
        className={`absolute left-0 w-full transition-all duration-250 ease-in-out ${
          animating ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
        }`}
        style={{ top: 0 }}
        aria-hidden={!animating}
      >
        {displayValue}
      </span>
    </span>
  );
}
