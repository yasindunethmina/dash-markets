import Image from "next/image";
import Button from "./shared/button";

type PlayerDataT = {
  id: string;
  name: string;
  status: string;
  isActive: boolean;
  hasSponsorship?: boolean;
  polygonIcon: string;
  profileIcon: string;
  buttonColor?: "primary" | "pink";
};

type PlayerSlotProps = {
  player?: PlayerDataT;
  isWaiting?: boolean;
  showSword?: boolean;
};

const PlayerSlot = ({
  player,
  isWaiting = false,
  showSword = true,
}: PlayerSlotProps) => {
  if (isWaiting) {
    return (
      <div className="relative col-span-1 flex flex-col items-center justify-center h-[88.5%]">
        <div className="w-full h-full flex flex-col justify-center items-center">
          {/* Hidden sponsor badge for consistent spacing */}
          <div className="rounded-sm text-xs opacity-0 font-semibold bg-primary/10 text-primary leading-[1.5] px-2 py-1 mb-[38px]">
            SPONSOR
          </div>

          {/* Loading spinner */}
          <div className="relative w-20 h-20 flex items-center justify-center">
            <Image
              src="/icons/polygon-loader.svg"
              width={100}
              height={100}
              alt="polygon-loader"
              className="w-full h-full animate-spin-slow"
            />
          </div>

          {/* Player info */}
          <div className="mt-[18px] space-y-1 flex flex-col items-center">
            <p className="font-bold text-base">Player</p>
            <p className="text-xs font-medium text-[#9C9EB3]">
              WAITING FOR PLAYER
            </p>
          </div>

          {/* Join button */}
          <Button className="mt-[18px] flex items-center text-sm font-semibold leading-[20px] gap-x-1.5 py-2.5 px-3 rounded-[10px]">
            Join 100$
          </Button>

          {/* Sword icon */}
          {showSword && (
            <div className="absolute -right-5 border-background/[6%] border-2 z-50 bg-[#1A1933] p-2 rounded-full">
              <Image
                src="/icons/sword.svg"
                className="w-5 h-5"
                width={20}
                height={20}
                alt="sword"
              />
            </div>
          )}
        </div>
      </div>
    );
  }

  if (!player) return null;

  const getButtonStyles = (color: "primary" | "pink" = "primary") => {
    if (color === "pink") {
      return "border border-[#FF52E8] bg-[#FF52E8]/[4%] font-semibold text-[#FF52E8] [box-shadow:0_0_16.4px_0_rgba(255,82,232,0.20),0_0_18.9px_0_rgba(255,82,232,0.20)_inset]";
    }
    return "border border-primary bg-primary/[4%] font-semibold text-primary [box-shadow:0_0_16.4px_0_rgba(127,17,224,0.2),0_0_18.9px_0_rgba(127,17,224,0.2)_inset] animate-purple-glow";
  };

  return (
    <div className="relative col-span-1 flex flex-col items-center justify-center h-[88.5%]">
      <div className="w-full h-full flex flex-col justify-center items-center">
        {/* Sponsor badge */}
        <div
          className={`rounded-sm text-xs font-semibold bg-primary/10 text-primary leading-[1.5] px-2 py-1 mb-[38px] ${
            player.hasSponsorship ? "" : "opacity-0"
          }`}
        >
          SPONSOR
        </div>

        {/* Player avatar */}
        <div className="relative w-20 h-20 flex items-center justify-center">
          <Image
            src={player.polygonIcon}
            width={100}
            height={100}
            alt={`polygon-${player.id}`}
            className="w-full h-full"
          />
          <Image
            src={player.profileIcon}
            width={80}
            height={80}
            alt={`polygon-profile-${player.id}`}
            className="absolute inset-0 w-full h-full p-2 object-contain"
          />
        </div>

        {/* Player info */}
        <div className="mt-[18px] space-y-1 flex flex-col items-center">
          <p className="font-bold text-base">{player.name}</p>
          <p className="text-xs font-medium text-[#9C9EB3]">{player.status}</p>
        </div>

        {/* Action button */}
        <button
          className={`mt-[18px] flex justify-center items-center px-3.5 py-2 text-sm rounded-[10px] ${getButtonStyles(
            player.buttonColor
          )}`}
        >
          Place a bet
        </button>

        {/* Sword icon */}
        {showSword && (
          <div className="absolute -right-5 border-background/[6%] border-2 z-50 bg-[#1A1933] p-2 rounded-full">
            <Image
              src="/icons/sword.svg"
              className="w-5 h-5"
              width={20}
              height={20}
              alt="sword"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export const GameLobbySection = () => {
  // Mock player data - replace with actual data from props or state
  const players: (PlayerDataT | null)[] = [
    {
      id: "1",
      name: "DAVID",
      status: "PICKING TOKENS...",
      isActive: true,
      hasSponsorship: true,
      polygonIcon: "/icons/polygon-1.svg",
      profileIcon: "/icons/polygon-profile-1.svg",
      buttonColor: "pink",
    },
    {
      id: "2",
      name: "Player 2",
      status: "PICKING TOKENS...",
      isActive: true,
      hasSponsorship: false,
      polygonIcon: "/icons/polygon-2.svg",
      profileIcon: "/icons/polygon-profile-2.svg",
      buttonColor: "primary",
    },
    null, // Empty slot - will show waiting state
    null, // Empty slot - will show waiting state
    null, // Empty slot - will show waiting state (no sword for last slot)
  ];

  return (
    <div className="relative w-full">
      {/* Background overlay */}
      <Image
        src="/images/lobby-overlay-new.svg"
        className="w-full object-cover"
        alt="lobby-overlay"
        width={1000}
        height={1000}
      />

      {/* Radial glow effect */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-4/5 h-4/5 rounded-full bg-[#8968FF] opacity-[0.08] mix-blend-plus-lighter filter blur-[75px]" />
      </div>

      {/* Player grid */}
      <div className="absolute inset-0 items-center justify-center w-full -top-1 grid grid-cols-5 divide-x-2 divide-background/6">
        {players.map((player, index) => (
          <PlayerSlot
            key={index}
            player={player || undefined}
            isWaiting={!player}
            showSword={index < 4} // Don't show sword on last slot
          />
        ))}
      </div>
    </div>
  );
};
