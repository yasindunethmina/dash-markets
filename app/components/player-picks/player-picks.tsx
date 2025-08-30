import { cn } from "@/lib/cn";
import Image from "next/image";

type TokenPickT = {
  id: string;
  name: string;
  symbol: string;
  avatarUrl?: string;
};

type PlayerPicksT = {
  playerId: string;
  playerName: string;
  frame: string;
  avatarUrl?: string;
  accentColor: "primary" | "pink";
  picks: TokenPickT[];
};

type ColorConfigT = {
  background: string;
  shadow: string;
  barColor: string;
  barGlow: string;
};

const COLOR_CONFIG: Record<"primary" | "pink", ColorConfigT> = {
  primary: {
    background: "bg-primary/7",
    shadow:
      "shadow-[inset_0px_2px_0px_rgba(120,82,255,0.07),inset_0px_-2px_0px_rgba(0,0,0,0.22)]",
    barColor: "bg-primary",
    barGlow: "drop-shadow-[0_0_25.75px_rgba(120,82,232,1)]",
  },
  pink: {
    background: "bg-[#FF52E8]/7",
    shadow:
      "shadow-[inset_0px_2px_0px_rgba(255,82,232,0.07),inset_0px_-2px_0px_rgba(0,0,0,0.22)]",
    barColor: "bg-[#FF52E8]",
    barGlow: "drop-shadow-[0_0_25.75px_rgba(255,82,232,1)]",
  },
};

const TOTAL_SLOTS = 5;

const PlayerPickCard = ({ playerPicks }: { playerPicks: PlayerPicksT }) => {
  const { frame, avatarUrl, playerName, picks, accentColor } = playerPicks;
  const { background, shadow, barColor, barGlow } = COLOR_CONFIG[accentColor];
  const pickCount = picks.length;

  return (
    <div className="col-span-1 rounded-[18px] border border-background/10 p-1.5 shadow-[0_4px_4px_0_rgba(0,0,0,0.25)]">
      <div className={cn("relative rounded-[12px] w-full", background, shadow)}>
        {/* Top accent bar with glow */}
        <div
          className={cn(
            "w-[96px] h-1.5 rounded-b-full mx-auto",
            barColor,
            barGlow
          )}
        />

        <div className="divide-y divide-background/10">
          {/* Player header */}
          <div className="flex gap-x-2 items-center px-3 py-2.5">
            <div className="relative w-[22px] h-[22px] flex items-center justify-center">
              <Image
                src={frame}
                width={22}
                height={22}
                alt="polygon-frame"
                className="w-full flex shrink-0"
              />
              {avatarUrl && (
                <Image
                  src={avatarUrl}
                  width={22}
                  height={22}
                  alt={`profile-${playerName}`}
                  className="absolute inset-0 w-full p-1 object-cover"
                />
              )}
            </div>
            <p className="text-xs font-semibold leading-[1.5] uppercase">
              {playerName}&apos;s Pick{pickCount !== 1 ? "s" : ""}
            </p>
          </div>

          {/* Token picks list */}
          {Array.from({ length: TOTAL_SLOTS }).map((_, idx) => {
            const pick = picks[idx];

            return (
              <div
                key={idx}
                className="flex gap-x-1.5 items-center justify-between px-3 py-2.5"
              >
                <div className="flex justify-between gap-x-1.5 items-center">
                  <div className="w-5 h-5 flex items-center justify-center">
                    {pick?.avatarUrl ? (
                      <Image
                        src={pick.avatarUrl}
                        width={20}
                        height={20}
                        alt={pick.name}
                        className="w-full h-full rounded-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full rounded-full bg-background/10 animate-pulse" />
                    )}
                  </div>
                  <p className="text-xs font-semibold">
                    {pick?.name ?? "Bitcoin"}
                  </p>
                </div>
                <p className="text-xs font-semibold text-paragraph">
                  {pick?.symbol ?? "BTC"}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default function PlayerPicks() {
  const playerPicksList: PlayerPicksT[] = [
    {
      playerId: "1",
      playerName: "David",
      frame: "/icons/hexagon-frame-pink-small.svg",
      avatarUrl: "/icons/profile.svg",
      accentColor: "pink",
      picks: [
        { id: "1", name: "Bitcoin", symbol: "BTC" },
        { id: "2", name: "Ethereum", symbol: "ETH" },
        { id: "3", name: "Cardano", symbol: "ADA" },
        { id: "4", name: "Solana", symbol: "SOL" },
        { id: "5", name: "Polygon", symbol: "MATIC" },
      ],
    },
    {
      playerId: "2",
      playerName: "Player 2",
      frame: "/icons/hexagon-frame-purple-small.svg",
      accentColor: "primary",
      picks: [
        { id: "1", name: "Bitcoin", symbol: "BTC" },
        { id: "2", name: "Bitcoin", symbol: "BTC" },
        { id: "3", name: "Bitcoin", symbol: "BTC" },
        { id: "4", name: "Bitcoin", symbol: "BTC" },
        { id: "5", name: "Bitcoin", symbol: "BTC" },
      ],
    },
  ];

  const emptySlotsCount = TOTAL_SLOTS - playerPicksList.length;

  return (
    <div className="w-full px-6">
      <div className="grid grid-cols-5 gap-3">
        {playerPicksList.map((player) => (
          <PlayerPickCard key={player.playerId} playerPicks={player} />
        ))}

        {/* Empty Slots */}
        {Array.from({ length: emptySlotsCount }).map((_, idx) => (
          <div
            key={idx}
            className="flex items-center justify-center col-span-1 rounded-[16px] bg-background/3 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.05),inset_0_1px_0_0_rgba(255,255,255,0.02)] backdrop-blur-[3px]"
          >
            <span className="text-xs font-medium text-paragraph uppercase animate-pulse">
              WAITING FOR PLAYER
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
