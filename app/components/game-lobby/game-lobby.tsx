import { cn } from "@/lib/cn";
import Image from "next/image";
import AnimatedDots from "../game-info-panel/animated-dots";
import Button from "../shared/button";
import SvgContainerLobby from "./svg-container-lobby";

type PlayerDataT = {
  id: string;
  displayName: string;
  isActive: boolean;
  hasSponsorship: boolean;
  frame: string;
  avatarUrl?: string;
  isLoading: boolean;
  buttonVariant: "primary" | "outline-pink" | "outline-purple";
};

const players: Array<PlayerDataT | null> = [
  {
    id: "1",
    displayName: "DAVID",
    isActive: true,
    hasSponsorship: true,
    frame: "/icons/hexagon-frame-pink.svg",
    avatarUrl: "/icons/polygon-profile-1.svg",
    isLoading: false,
    buttonVariant: "outline-pink",
  },
  {
    id: "2",
    displayName: "Player 2",
    isActive: true,
    hasSponsorship: false,
    frame: "/icons/hexagon-frame-purple.svg",
    avatarUrl: "/icons/hexagon-skeleton.svg",
    isLoading: true,
    buttonVariant: "outline-purple",
  },
  {
    id: "3",
    displayName: "Player 3",
    isActive: false,
    hasSponsorship: false,
    frame: "/icons/hexagon-frame-loader.svg",
    isLoading: true,
    buttonVariant: "primary",
  },
  {
    id: "4",
    displayName: "Player 4",
    isActive: false,
    hasSponsorship: false,
    frame: "/icons/hexagon-frame-loader.svg",
    isLoading: true,
    buttonVariant: "primary",
  },
  {
    id: "5",
    displayName: "Player 5",
    isActive: false,
    hasSponsorship: false,
    frame: "/icons/hexagon-frame-loader.svg",
    isLoading: true,
    buttonVariant: "primary",
  },
];

type PlayerSlotProps = {
  player?: PlayerDataT;
  showSword?: boolean;
};

const PlayerSlot = ({ player, showSword = true }: PlayerSlotProps) => {
  const {
    displayName = "",
    hasSponsorship = false,
    isActive = false,
    frame = "/icons/hexagon-frame-loader.svg",
    avatarUrl = "",
    isLoading = false,
    buttonVariant = "primary",
  } = player || {};

  const actionText = isActive ? "Place a bet" : "Join 100$";

  return (
    <div className="relative col-span-1 w-full flex flex-col items-center border-r border-background/6 last:border-r-0">
      {/* Sponsor badge */}
      <div
        className={cn(
          "rounded-sm text-xs font-semibold bg-primary/10 text-primary leading-[1.5] mt-4 px-2 py-1 mb-10",
          {
            "opacity-100": hasSponsorship,
            "opacity-0": !hasSponsorship,
          }
        )}
      >
        SPONSOR
      </div>

      {/* Avatar + Frame */}
      <div className="relative w-[82px] h-[82px] flex items-center justify-center">
        {isActive ? (
          <>
            <Image
              src={frame}
              width={82}
              height={82}
              alt="polygon-frame"
              className="w-full flex shrink-0"
            />
            <Image
              src={avatarUrl}
              width={82}
              height={82}
              alt={`profile-${displayName}`}
              className={cn(
                "absolute inset-0 -top-0.5 p-2 w-full object-cover",
                { "animate-pulse": isLoading }
              )}
            />
          </>
        ) : (
          <Image
            src={frame}
            width={82}
            height={82}
            alt="polygon-loader"
            className="w-full flex shrink-0 animate-spin-slow"
          />
        )}
      </div>

      {/* Name & Status */}
      <div className="my-5 space-y-1 flex flex-col items-center">
        <p className="font-bold text-base">{displayName}</p>
        <p
          className={cn("text-xs font-medium text-paragraph", {
            "flex items-center justify-end": isActive,
            "animate-pulse": !isActive,
          })}
        >
          {isActive ? (
            <>
              <span>PICKING TOKENS</span>
              <AnimatedDots />
            </>
          ) : (
            "WAITING FOR PLAYER"
          )}
        </p>
      </div>

      {/* Action Button */}
      <Button
        variant={buttonVariant}
        className="flex justify-center items-center px-3.5 py-2 text-sm rounded-[10px] font-semibold mb-20 hover:scale-[102%] hover:-translate-y-0.5 active:scale-95 active:translate-y-0"
      >
        {actionText}
      </Button>

      {/* Sword icon */}
      {showSword && (
        <div className="absolute -right-5 top-1/2 -translate-y-1/2 z-50 p-2 rounded-full bg-[#1A1933] border-2 border-background/6">
          <Image
            src="/icons/sword.svg"
            width={20}
            height={20}
            alt="sword"
            className="w-5 h-5"
          />
        </div>
      )}
    </div>
  );
};

export default function GameLobby() {
  return (
    <div className="relative w-full">
      <SvgContainerLobby />

      {/* Radial glow effect */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-4/5 h-2/3 rounded-full bg-[#8968FF] opacity-[0.08] mix-blend-plus-lighter filter blur-[75px]" />
      </div>

      {/* Players grid */}
      <div className="grid grid-cols-5 py-[22px] px-8">
        {players.map((player, index) => (
          <PlayerSlot
            key={player?.id ?? index}
            player={player ?? undefined}
            showSword={index < players.length - 1}
          />
        ))}
      </div>
    </div>
  );
}
