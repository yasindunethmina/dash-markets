import { cn } from "@/lib/cn";
import Image from "next/image";
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

type PlayerSlotProps = {
  player?: PlayerDataT;
  isWaiting?: boolean;
  showSword?: boolean;
};

const players: (PlayerDataT | null)[] = [
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

const PlayerSlot = ({ player, showSword = true }: PlayerSlotProps) => {
  return (
    <div className="relative col-span-1 w-full flex flex-col items-center border-r border-background/6">
      <div
        className={cn(
          "rounded-sm text-xs font-semibold opacity-0 bg-primary/10 text-primary leading-[1.5] mt-4 px-2 py-1 mb-10",
          {
            "opacity-100": player?.hasSponsorship,
            "opacity-0": !player?.hasSponsorship,
          }
        )}
      >
        SPONSOR
      </div>

      <div className="relative w-[82px] h-[82px] flex items-center justify-center">
        {player?.isActive ? (
          <>
            <Image
              src={player.frame}
              className="w-full flex shrink-0"
              width={82}
              height={82}
              alt="polygon-frame"
            />

            <Image
              src={player.avatarUrl || ""}
              width={82}
              height={82}
              className={cn(
                "absolute inset-0 w-full -top-0.5 p-2 object-cover",
                {
                  "animate-pulse": player?.isLoading && player.isActive,
                }
              )}
              alt={`profile-${player?.displayName}`}
            />
          </>
        ) : (
          <Image
            src="/icons/polygon-loader.svg"
            className="w-full flex shrink-0 animate-spin-slow"
            width={82}
            height={82}
            alt="polygon-loader"
          />
        )}
      </div>

      <div className="my-5 space-y-1 flex flex-col items-center">
        <p className="font-bold text-base">{player?.displayName}</p>
        <p className="text-xs font-medium text-paragraph">
          {player?.isActive ? "PICKING TOKENS..." : "WAITING FOR PLAYER"}
        </p>
      </div>

      <Button
        variant={player?.buttonVariant}
        className="flex justify-center items-center px-3.5 py-2 text-sm rounded-[10px] font-semibold mb-20"
      >
        {player?.isActive ? "Place a bet" : "Join 100$"}
      </Button>

      <div className="absolute -right-5 top-1/2 -translate-y-1/2">
        {showSword && (
          <div className="border-background/6 border-2 z-50 bg-[#1A1933] p-2 rounded-full">
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
            key={index}
            player={player || undefined}
            isWaiting={!player}
            showSword={index < 4}
          />
        ))}
      </div>
    </div>
  );
}
