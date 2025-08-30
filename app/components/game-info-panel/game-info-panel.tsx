import Image from "next/image";
import Button from "../shared/button";
import SvgContainerInfo from "./svg-container-info";

export default function GameInfoPanel() {
  return (
    <div className="mx-2">
      <div className="relative">
        <SvgContainerInfo />

        <div className="grid grid-cols-5 w-full divide-x divide-background/6 drop-shadow-xl shadow-black/25">
          {/* Back button */}
          <div className="col-span-1 flex items-center p-5">
            <button className="flex justify-center items-center gap-x-1.5 px-3.5 py-2.5 rounded-[10px] bg-background/7 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.18),inset_0_1px_0_0_rgba(255,255,255,0.02)] backdrop-blur-[3px]">
              <Image
                src="/icons/chevron-left-gray.svg"
                width={18}
                height={18}
                alt="chevron-left-gray"
              />
              <span className="text-sm font-semibold">Back</span>
            </button>
          </div>

          {/* Game ID */}
          <div className="col-span-1 px-5 py-4 space-y-0.5 flex flex-col justify-center">
            <p className="text-xs font-semibold leading-[1.5] text-paragraph">
              Game id:
            </p>
            <p className="text-lg font-semibold leading-[1.55]">#G1A2B3</p>
          </div>

          {/* Status and Timer */}
          <div className="flex flex-col items-center justify-center py-4 space-y-1">
            <p className="text-primary font-bold leading-[1.4] text-sm uppercase">
              WAITING
            </p>
            <p className="text-[22px] leading-[1.27] font-bold">1m 34s</p>
          </div>

          {/* Stake */}
          <div className="col-span-1 px-5 py-4 space-y-0.5 flex flex-col justify-center items-end">
            <p className="text-xs font-semibold leading-[1.5] text-paragraph">
              Stake:
            </p>
            <p className="text-lg font-semibold leading-[1.55]">100$</p>
          </div>

          {/* Referral Link Button */}
          <div className="col-span-1 p-5 flex justify-end items-center">
            <Button
              variant="outline-cyan"
              className="flex justify-center items-center px-3.5 py-2.5 gap-1 leading-[1.43] text-sm font-semibold rounded-[10px]"
            >
              Referral link
              <Image src="/icons/copy.svg" width={18} height={18} alt="copy" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
