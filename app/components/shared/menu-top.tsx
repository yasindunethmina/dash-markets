import { shortenAddress } from "@/helpers/shorten-address";
import Image from "next/image";
import Button from "./button";

export default function MenuTop() {
  return (
    <div className="pt-5 px-5 flex justify-between items-center">
      <h1 className="text-[21px] font-semibold">DASH MARKETS</h1>

      <div className="flex items-center gap-x-6">
        <div className="flex items-center gap-x-10 py-1 pl-3 pr-1 border border-background/10 rounded-[12px]">
          <div className="flex items-center gap-x-1.5">
            <Image
              src="/icons/tether.svg"
              width={16}
              height={16}
              alt="tether"
            />
            <p className="text-sm font-medium">1435 USDT</p>
          </div>

          <div className="flex items-center gap-x-3">
            <button className="rounded-full bg-background/10 p-1">
              <Image
                src="/icons/chevron-down.svg"
                width={16}
                height={16}
                alt="chevron-down"
              />
            </button>

            <Button className="flex items-center text-sm font-semibold gap-x-1.5 py-2.5 pl-3 pr-3.5 rounded-[10px]">
              <Image
                src="/icons/wallet.svg"
                width={16}
                height={16}
                alt="wallet"
              />
              <span>Deposit</span>
            </Button>
          </div>
        </div>

        {/* Bell */}
        <button className="relative">
          <Image src="/icons/bell.svg" width={20} height={20} alt="bell" />
          <div className="absolute -top-0.5 right-0 w-[11px] h-[11px] bg-[#FF9040] border-[2px] border-[#0F111D] rounded-full" />
        </button>

        {/* Profile */}
        <div className="bg-background/13 flex items-center gap-x-1.5 py-2 pl-1.5 pr-2 rounded-full">
          <Image
            src="/images/profile.png"
            className="rounded-full"
            width={24}
            height={24}
            alt="profile"
          />

          <p className="text-sm font-semibold">
            {shortenAddress("0x4224567890123456789012345678901234567e7d")}
          </p>

          <Image
            src="/icons/chevron-down.svg"
            width={18}
            height={18}
            alt="chevron-down"
          />
        </div>
      </div>
    </div>
  );
}
