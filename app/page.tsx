import GameInfoPanel from "./components/game-info-panel/game-info-panel";
import GameLobby from "./components/game-lobby/game-lobby";
import PlayerPicks from "./components/player-picks/player-picks";
import RoomChat from "./components/room-chat/room-chat-panel";
import TopNav from "./components/shared/top-nav";

export default function Home() {
  return (
    <main className="w-full relative">
      <TopNav />

      <div className="flex divide-x divide-background/10 w-full">
        <div className="flex-1 px-8 pt-[18px] space-y-[18px]">
          <GameInfoPanel />
          <GameLobby />
          <PlayerPicks />
        </div>

        <RoomChat />
      </div>
    </main>
  );
}
