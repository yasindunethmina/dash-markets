import { GameInfoPanel } from "./components/game-info-panel";
import { GameLobbySection } from "./components/game-lobby-section";
import { PlayerPicksSection } from "./components/player-pick-section";
import { RoomChatPanel } from "./components/room-chat-panel";
import { TopNav } from "./components/shared/top-nav";

export default function Home() {
  return (
    <main className="w-full relative">
      <TopNav />

      <div className="flex divide-x divide-background/10 w-full">
        <div className="flex-1 px-8 pt-[18px] space-y-[18px]">
          <GameInfoPanel />
          <GameLobbySection />
          <PlayerPicksSection />
        </div>

        <RoomChatPanel />
      </div>
    </main>
  );
}
