import GameInfoPanel from "./components/game-info-panel/game-info-panel";
import GameLobby from "./components/game-lobby/game-lobby";
import PlayerPicks from "./components/player-picks/player-picks";
import RoomChat from "./components/room-chat/room-chat";
import TopNav from "./components/shared/top-nav";

export default function Home() {
  return (
    <main className="flex flex-col h-[calc(100vh-72px)] w-full">
      {/* Top navigation stays fixed */}
      <TopNav />

      {/* Main content row fills remaining height */}
      <div className="flex flex-1 divide-x divide-background/10 w-full min-h-0">
        {/* Left side panels, scrollable if overflow */}
        <div className="flex-1 px-8 pt-[18px] pb-[18px] space-y-[18px] overflow-y-auto">
          <GameInfoPanel />
          <GameLobby />
          <PlayerPicks />
        </div>

        {/* Right side chat always matches height */}
        <div className="w-[325px] h-full">
          <RoomChat />
        </div>
      </div>
    </main>
  );
}
