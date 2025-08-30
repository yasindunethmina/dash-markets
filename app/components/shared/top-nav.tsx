import Image from "next/image";

export default function TopNav() {
  return (
    <div className="flex gap-x-11 items-center">
      {/* Left Divider and Icon */}
      <div className="flex gap-x-5 w-[33%] shrink-0">
        <div className="w-full flex items-end">
          <div className="bg-background/10 h-[1px] flex-1" />
          <div className="bg-background/10 rotate-[210deg] w-[1px] h-5 left-[5px] top-[1px] relative" />
        </div>
        <Image
          src="/icons/subtract.svg"
          width={15}
          height={20}
          alt="subtract"
        />
      </div>

      {/* Center Buttons */}
      <div className="flex shrink-0 items-center gap-x-[34px]">
        <button className="font-bold text-sm leading-[1.4] whitespace-nowrap">
          WAITING ROOM
        </button>
        <button className="relative group font-bold text-sm leading-[1.4] text-tertiary whitespace-nowrap">
          BETS
          <span className="absolute bottom-full left-1/2 mb-1 -translate-x-1/2 bg-background/12 text-white text-xs font-medium rounded-md px-2 py-1 opacity-0 pointer-events-none transition-opacity duration-200 group-hover:opacity-100">
            Coming Soon
          </span>
        </button>
      </div>

      {/* Right Divider and Icon */}
      <div className="flex gap-x-5 flex-1">
        <Image
          src="/icons/subtract.svg"
          className="scale-x-[-100%]"
          width={15}
          height={20}
          alt="subtract"
        />
        <div className="w-full flex items-end">
          <div className="bg-background/10 -rotate-[210deg] w-[1px] h-5 -left-[5px] top-[1px] relative" />
          <div className="bg-background/10 h-[1px] flex-1" />
        </div>
      </div>
    </div>
  );
}
