import Image from "next/image";
import { FaChevronLeft } from "react-icons/fa";

export function GameInfoPanel() {
  return (
    <div className="relative w-full px-2">
      {/* Background SVG */}
      <div
        className="relative w-full shadow-xl shadow-black/25"
        style={{
          minWidth: "100%",
          aspectRatio: "1050 / 85",
        }}
      >
        <Image
          src="/images/game-info-overlay.svg"
          fill
          className="object-fill"
          alt="game-info-overlay"
        />

        {/* Content - absolute positioned to match image dimensions */}
        <div className="absolute inset-0 grid grid-cols-5 w-full divide-x divide-background/10 drop-shadow-xl shadow-black/25">
          {/* Back button */}
          <div className="col-span-1 flex items-center px-5 py-4">
            <button className="flex justify-center items-center gap-x-2.5 px-4 py-2.5 rounded-lg bg-[rgba(206,215,255,0.07)] shadow-[inset_0_1px_0_0_rgba(255,255,255,0.18),inset_0_1px_0_0_rgba(255,255,255,0.02)] backdrop-blur-[3px]">
              <FaChevronLeft className="text-[#757995] w-2" />
              <span className="text-sm font-semibold">Back</span>
            </button>
          </div>

          {/* Game ID */}
          <div className="col-span-1 px-5 py-4 space-y-0.5 flex flex-col justify-center">
            <p className="text-xs font-semibold leading-[1.5] text-tertiary">
              Game id:
            </p>
            <p className="text-lg font-semibold leading-[1.5]">#G1A2B3</p>
          </div>

          {/* Status and Timer */}
          <div className="flex flex-col items-center justify-center">
            <p className="text-primary font-bold leading-[1.4] text-sm uppercase">
              WAITING
            </p>
            <p className="text-[22px] font-bold">1m 34s</p>
          </div>

          {/* Stake */}
          <div className="col-span-1 px-5 py-4 space-y-0.5 flex flex-col justify-center items-end">
            <p className="text-xs font-semibold leading-[1.5] text-tertiary">
              Stake:
            </p>
            <p className="text-lg font-semibold leading-[1.5]">100$</p>
          </div>

          {/* Referral Link Button */}
          <div className="col-span-1 px-5 py-4 flex justify-end items-center">
            <button className="flex justify-center items-center px-3.5 py-2.5 gap-1 rounded-[10px] border border-cyan bg-cyan/[4%] font-semibold text-cyan animate-cyan-glow">
              Referral link
              <Image src="/icons/copy.svg" width={18} height={18} alt="copy" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
