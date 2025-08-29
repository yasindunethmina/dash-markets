import Image from "next/image";

type TokenPickT = {
  id: string;
  name: string;
  symbol: string;
  iconUrl?: string;
};

type PlayerPicksT = {
  playerId: string;
  playerName: string;
  polygonIcon: string;
  profileIcon?: string;
  accentColor: "primary" | "pink";
  picks: TokenPickT[];
};

type PlayerPickCardProps = {
  playerPicks: PlayerPicksT;
};

type EmptySlotProps = {
  index: number;
};

const PlayerPickCard = ({ playerPicks }: PlayerPickCardProps) => {
  const getColorClasses = (color: "primary" | "pink") => {
    if (color === "pink") {
      return {
        background: "bg-[#FF52E8]/[7%]",
        shadow:
          "shadow-[inset_0px_2px_0px_rgba(255,82,232,0.07),inset_0px_-2px_0px_rgba(0,0,0,0.22)]",
        barColor: "bg-[#FF52E8]",
        barGlow: "drop-shadow-[0_0_25.75px_rgba(255,82,232,1)]",
      };
    }
    return {
      background: "bg-primary/[7%]",
      shadow:
        "shadow-[inset_0px_2px_0px_rgba(120,82,255,0.07),inset_0px_-2px_0px_rgba(0,0,0,0.22)]",
      barColor: "bg-primary",
      barGlow: "drop-shadow-[0_0_25.75px_rgba(120,82,232,1)]",
    };
  };

  const colorClasses = getColorClasses(playerPicks.accentColor);

  return (
    <div className="col-span-1 rounded-[18px] border border-background/10 p-1.5">
      <div
        className={`relative rounded-[12px] w-full ${colorClasses.background} ${colorClasses.shadow} overflow-hidden`}
      >
        {/* Top accent bar with glow */}
        <div
          className={`w-[96px] h-1.5 ${colorClasses.barColor} rounded-b-full mx-auto mix-blend-plus-lighter filter ${colorClasses.barGlow}`}
        />

        <div className="divide-y-2 divide-background/[6%]">
          {/* Player header */}
          <div className="flex gap-x-2 items-center px-3 py-2.5">
            <div className="relative w-[22px] h-[22px] flex items-center justify-center">
              <Image
                src={playerPicks.polygonIcon}
                className="w-full h-full object-contain"
                width={22}
                height={22}
                alt={`polygon-${playerPicks.playerId}`}
              />
              {playerPicks.profileIcon && (
                <Image
                  src={playerPicks.profileIcon}
                  width={22}
                  height={22}
                  alt="polygon-profile"
                  className="absolute inset-0 w-full h-full p-1 object-contain"
                />
              )}
            </div>

            <p className="text-xs font-semibold leading-[1.5] uppercase">
              {playerPicks.playerName}&apos;s Pick
              {playerPicks.picks.length !== 1 ? "s" : ""}
            </p>
          </div>

          {/* Token picks list */}
          {Array.from({ length: 5 }).map((_, index) => {
            const pick = playerPicks.picks[index];
            return (
              <div
                key={index}
                className="flex gap-x-1.5 items-center justify-between px-3 py-2.5"
              >
                <div className="flex justify-between gap-x-1.5 items-center">
                  <div className="w-5 h-5 flex items-center justify-center">
                    {pick?.iconUrl ? (
                      <Image
                        src={pick.iconUrl}
                        width={20}
                        height={20}
                        alt={pick.name}
                        className="w-full h-full rounded-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full rounded-full bg-background/10" />
                    )}
                  </div>
                  <p className="text-xs font-semibold">
                    {pick?.name || "Bitcoin"}
                  </p>
                </div>
                <p className="text-xs font-semibold text-[#9C9EB3]">
                  {pick?.symbol || "BTC"}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

const EmptySlot = ({ index }: EmptySlotProps) => (
  <div
    key={index}
    className="flex items-center justify-center col-span-1 rounded-[18px] bg-background/[3%] shadow-[inset_0_1px_0_0_rgba(255,255,255,0.05),inset_0_1px_0_0_rgba(255,255,255,0.02)] backdrop-blur-[3px]"
  >
    <span className="text-xs font-medium text-[#9C9EB3]">
      WAITING FOR PLAYER
    </span>
  </div>
);

export const PlayerPicksSection = () => {
  const playerPicks: PlayerPicksT[] = [
    {
      playerId: "1",
      playerName: "David",
      polygonIcon: "/icons/polygon-small-1.svg",
      profileIcon: "/icons/polygon-profile-1.svg",
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
      polygonIcon: "/icons/polygon-small-2.svg",
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

  const totalSlots = 5;
  const emptySlots = totalSlots - playerPicks.length;

  return (
    <div className="w-full px-2">
      <div className="grid grid-cols-5 gap-3 h-[254px]">
        {playerPicks.map((player) => (
          <PlayerPickCard key={player.playerId} playerPicks={player} />
        ))}

        {Array.from({ length: emptySlots }).map((_, index) => (
          <EmptySlot key={`empty-${index}`} index={index} />
        ))}
      </div>
    </div>
  );
};
