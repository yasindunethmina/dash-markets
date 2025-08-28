import Image from "next/image";
import { GameInfoPanel } from "./components/game-info-panel";
import { RoomChatPanel } from "./components/room-chat-panel";
import { TopNav } from "./components/shared/top-nav";

export default function Home() {
  return (
    <main className="w-full -top-2 relative">
      <TopNav />

      <div className="flex divide-x divide-background/10 w-full">
        <div className="flex-1 px-10 pt-5 space-y-5">
          <GameInfoPanel />

          <div className="relative flex items-center justify-center w-full h-fit">
            <div>hello world</div>

            <Image
              src="/images/container.svg"
              className="absolute inset-0 w-full h-fit object-cover"
              alt="container"
              width={1000}
              height={1000}
            />
          </div>
        </div>

        <RoomChatPanel />
      </div>
    </main>
  );
}
