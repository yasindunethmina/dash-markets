import Image from "next/image";
import { FaAngleDoubleRight, FaChevronRight } from "react-icons/fa";

export function RoomChatPanel() {
  return (
    <div className="w-[325px] py-5 px-6">
      {/* Header */}
      <div className="flex items-center gap-x-2.5">
        <div className="flex-1 justify-between py-2.5 px-3.5 bg-background/[7%] border border-background/10 rounded-xl flex items-center gap-x-2.5">
          <div className="font-semibold text-base">Room Chat</div>
          <div className="flex items-center gap-x-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FF4EA7]" />
            <span className="text-xs font-medium">5</span>
          </div>
        </div>
        <button className="flex justify-center items-center p-3 rounded-lg bg-[rgba(206,215,255,0.07)] shadow-[inset_0_1px_0_0_rgba(255,255,255,0.18),inset_0_1px_0_0_rgba(255,255,255,0.02)] backdrop-blur-[3px]">
          <FaAngleDoubleRight className="w-5 h-5 text-[#9C9EB3]" />
        </button>
      </div>

      {/* Chat Messages */}
      <div className="relative pt-7 space-y-5">
        <div className="absolute top-0 pointer-events-none z-50 left-0 w-full h-[500px] rounded-xl p-4 bg-gradient-to-b from-[#0B0D1B] via-[#080A18]/[5%] to-transparent" />
        <div className="space-y-3">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
            <div
              key={item}
              className="flex justify-between items-center text-xs font-medium bg-[#161928] px-3 py-[18px] rounded-xl shadow-[inset_0_1px_0_0_rgba(255,255,255,0.05),inset_0_1px_0_0_rgba(255,255,255,0.02)] backdrop-blur-[3px]"
            >
              <div className="space-y-1">
                <div className="flex items-center gap-x-1.5">
                  <div className="w-4 h-4 rounded-sm bg-background/10"></div>
                  <p className="text-[#9C9EB3]">Username</p>
                </div>
                <p className="text-base font-medium">Message</p>
              </div>
              <p className="text-tertiary">08:22</p>
            </div>
          ))}
        </div>

        {/* Chat Input */}
        <div className="flex items-center gap-x-2.5">
          <div className="flex items-center gap-x-5 py-3 px-3.5 flex-1 bg-background/[7%] rounded-xl">
            <p className="font-medium text-tertiary text-base">
              Type Message here...
            </p>
            <button>
              <Image src="/icons/face.svg" width={20} height={20} alt="face" />
            </button>
          </div>
          <button className="flex justify-center items-center p-3 rounded-lg bg-[rgba(206,215,255,0.07)] shadow-[inset_0_1px_0_0_rgba(255,255,255,0.18),inset_0_1px_0_0_rgba(255,255,255,0.02)] backdrop-blur-[3px]">
            <FaChevronRight className="w-5 h-5 text-[#9C9EB3]" />
          </button>
        </div>
      </div>
    </div>
  );
}
