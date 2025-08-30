"use client";

import { cn } from "@/lib/cn";
import Image from "next/image";
import { useState } from "react";
import { LuSmile } from "react-icons/lu";

export default function RoomChat() {
  const [chevronAnim, setChevronAnim] = useState<"in" | "out" | null>(null);
  const [doubleChevronAnim, setDoubleChevronAnim] = useState<
    "in" | "out" | null
  >(null);

  // single‐chevron (bottom input)
  function handleChevronEnter() {
    setChevronAnim("in");
  }
  function handleChevronLeave() {
    setChevronAnim("out");
    setTimeout(() => setChevronAnim(null), 600);
  }

  // double‐chevron (header)
  function handleDoubleEnter() {
    setDoubleChevronAnim("in");
  }
  function handleDoubleLeave() {
    setDoubleChevronAnim("out");
    setTimeout(() => setDoubleChevronAnim(null), 600);
  }

  return (
    <div className="h-full flex flex-col">
      {/* HEADER */}
      <div className="flex-shrink-0 mt-5 mx-6 flex items-center gap-x-2.5 h-11 mb-5">
        <div className="flex-1 justify-between py-2.5 px-3.5 bg-background/7 rounded-xl flex items-center">
          <p className="font-semibold text-base">Room Chat</p>
          <div className="flex items-center gap-x-1.5">
            <span className="w-1.5 h-1.5 rounded-full animate-pulse bg-[#FF4EA7]" />
            <span className="text-sm font-semibold">5</span>
          </div>
        </div>
        <button
          onMouseEnter={handleDoubleEnter}
          onMouseLeave={handleDoubleLeave}
          className="flex justify-center items-center p-3 h-full aspect-square rounded-lg bg-background/7 hover:bg-background/10 transition-colors duration-300 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.18),inset_0_1px_0_0_rgba(255,255,255,0.02)] backdrop-blur-[3px] overflow-hidden"
        >
          <div className="chevron-container">
            <Image
              src="/icons/chevron-right-double.svg"
              width={20}
              height={20}
              alt="chevron-right-double"
              className={cn("chevron-icon", {
                "animate-slide-in": doubleChevronAnim === "in",
                "animate-slide-out-and-return": doubleChevronAnim === "out",
              })}
            />
          </div>
        </button>
      </div>

      {/* MESSAGES */}
      <div className="flex-1 min-h-0 relative overflow-hidden pt-5">
        <div className="absolute top-0 pointer-events-none z-50 left-0 w-full h-[300px] bg-[linear-gradient(to_bottom,transparent_0%,#0B0D1B_5%,transparent_100%)]" />
        {/* Scrollable messages container */}
        <div className="h-full overflow-y-auto pl-6 pr-4">
          <div className="space-y-3">
            {Array.from({ length: 25 }).map((_, index) => (
              <div
                key={index}
                className="flex justify-between items-center font-medium bg-[#161928] px-3 py-[18px] rounded-xl shadow-[inset_0_1px_0_0_rgba(255,255,255,0.05),inset_0_1px_0_0_rgba(255,255,255,0.02)] backdrop-blur-[3px]"
              >
                <div className="space-y-1">
                  <div className="flex items-center gap-x-1.5">
                    <div className="w-4 h-4 rounded-sm bg-background/10" />
                    <p className="text-paragraph text-xs">Username</p>
                  </div>
                  <p className="text-base font-medium">Message</p>
                </div>
                <p className="text-xs text-tertiary">08:22</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* INPUT */}
      <div className="relative top-1 flex-shrink-0 flex items-center gap-x-2.5 h-11 mx-6 my-5">
        <div className="relative flex items-center gap-x-5 flex-1 bg-background/7 hover:bg-background/10 focus-within:bg-background/10 transition-colors duration-300 rounded-xl py-2.5 pl-3.5 pr-12 cursor-text">
          <input
            className="w-full bg-transparent outline-none font-medium text-base text-white placeholder:text-tertiary caret-tertiary"
            placeholder="Type Message here..."
          />
          <button className="absolute right-3.5 top-1/2 -translate-y-1/2 text-tertiary hover:text-background transition-colors duration-300">
            <LuSmile className="w-5 h-5" />
          </button>
        </div>

        <button
          onMouseEnter={handleChevronEnter}
          onMouseLeave={handleChevronLeave}
          className="flex justify-center items-center p-3 aspect-square h-full rounded-lg bg-background/7 hover:bg-background/10 transition-colors duration-300 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.18),inset_0_1px_0_0_rgba(255,255,255,0.02)] backdrop-blur-[3px] overflow-hidden"
        >
          <div className="chevron-container">
            <Image
              src="/icons/chevron-right.svg"
              width={20}
              height={20}
              className={cn("chevron-icon", {
                "animate-slide-in": chevronAnim === "in",
                "animate-slide-out-and-return": chevronAnim === "out",
              })}
              alt="chevron-right"
            />
          </div>
        </button>
      </div>
    </div>
  );
}
