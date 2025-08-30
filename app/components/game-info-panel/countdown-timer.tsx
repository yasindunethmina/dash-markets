"use client";

import usePrevious from "@/hooks/use-ref";
import { useEffect, useState } from "react";

type CountdownTimerProps = {
  startSeconds: number;
  repeat?: boolean;
};

type TimeUnitProps = {
  value: number;
  prevValue: number;
  pad: boolean;
};

const TimeUnit = ({ value, prevValue, pad }: TimeUnitProps) => {
  const [animating, setAnimating] = useState(false);
  const [showPrev, setShowPrev] = useState(prevValue);

  useEffect(() => {
    if (value !== prevValue) {
      setAnimating(true);
      const t = window.setTimeout(() => {
        setAnimating(false);
        setShowPrev(value);
      }, 300);
      return () => clearTimeout(t);
    }
  }, [value, prevValue]);

  const curr = pad ? String(value).padStart(2, "0") : String(value);
  const prev = pad ? String(showPrev).padStart(2, "0") : String(showPrev);

  return (
    <div className="relative overflow-hidden h-[28px] w-[2ch]">
      {!animating ? (
        <span className="absolute inset-0 flex items-center justify-center text-[22px] leading-[1.27] font-bold">
          {curr}
        </span>
      ) : (
        <>
          <span className="absolute inset-0 flex items-center justify-center animate-drop-out text-[22px] leading-[1.27] font-bold">
            {prev}
          </span>
          <span className="absolute inset-0 flex items-center justify-center animate-drop-in  text-[22px] leading-[1.27] font-bold">
            {curr}
          </span>
        </>
      )}
    </div>
  );
};

export default function CountdownTimer({
  startSeconds,
  repeat = false,
}: CountdownTimerProps) {
  const [timeLeft, setTimeLeft] = useState<number>(startSeconds);
  const prevTime = usePrevious<number>(timeLeft);

  useEffect(() => {
    if (timeLeft === 0 && repeat) {
      setTimeLeft(startSeconds);
      return;
    }
    if (timeLeft === 0) return;

    const iv = setInterval(() => setTimeLeft((t) => Math.max(t - 1, 0)), 1000);
    return () => clearInterval(iv);
  }, [timeLeft, repeat, startSeconds]);

  const mins = Math.floor(timeLeft / 60);
  const secs = timeLeft % 60;
  const prevM = prevTime != null ? Math.floor(prevTime / 60) : mins;
  const prevS = prevTime != null ? prevTime % 60 : secs;

  return (
    <div className="flex items-center space-x-2 text-[22px] leading-[1.27] font-bold">
      <div className="flex items-center">
        <TimeUnit value={mins} prevValue={prevM} pad={false} />
        <span>m</span>
      </div>
      <div className="flex items-center">
        <TimeUnit value={secs} prevValue={prevS} pad={true} />
        <span>s</span>
      </div>
    </div>
  );
}
