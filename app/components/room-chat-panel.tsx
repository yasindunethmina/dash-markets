import Image from "next/image";

export default function RoomChatPanel() {
  return (
    <div className="w-[325px] py-5 px-6 space-y-5">
      {/* Header */}
      <div className="flex items-center gap-x-2.5 h-11">
        <div className="flex-1 justify-between py-2.5 px-3.5 bg-background/7 border border-background/10 rounded-xl flex items-center">
          <p className="font-semibold text-base">Room Chat</p>

          <div className="flex items-center gap-x-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FF4EA7]" />
            <span className="text-sm font-semibold">5</span>
          </div>
        </div>

        <button className="flex justify-center items-center p-3 h-full aspect-square rounded-lg bg-[rgba(206,215,255,0.07)] shadow-[inset_0_1px_0_0_rgba(255,255,255,0.18),inset_0_1px_0_0_rgba(255,255,255,0.02)] backdrop-blur-[3px]">
          <Image
            src="/icons/chevron-right-double.svg"
            width={20}
            height={20}
            alt="chevron-right-double"
          />
        </button>
      </div>

      {/* Chat Messages */}
      <div className="relative pt-2">
        <div className="absolute top-0 pointer-events-none z-50 left-0 w-full h-[500px] rounded-xl p-4 bg-gradient-to-b from-[#0B0D1B] via-[#080A18]/5 to-transparent" />

        <div className="space-y-3">
          {Array.from({ length: 8 }).map((_, index) => (
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

      {/* Chat Input */}
      <div className="flex items-center gap-x-2.5 h-11">
        <div className="relative flex items-center gap-x-5 flex-1 bg-background/7 rounded-xl py-2.5 pl-3.5 pr-12">
          <input
            className="font-medium text-white placeholder:text-tertiary text-base outline-none w-full"
            placeholder="Type Message here..."
          />

          <button className="absolute right-3.5 top-1/2 -translate-y-1/2">
            <Image src="/icons/face.svg" width={20} height={20} alt="face" />
          </button>
        </div>

        <button className="flex justify-center items-center p-3 h-full aspect-square rounded-lg bg-[rgba(206,215,255,0.07)] shadow-[inset_0_1px_0_0_rgba(255,255,255,0.18),inset_0_1px_0_0_rgba(255,255,255,0.02)] backdrop-blur-[3px]">
          <Image
            src="/icons/chevron-right.svg"
            width={20}
            height={20}
            alt="chevron-right"
          />
        </button>
      </div>
    </div>
  );
}
