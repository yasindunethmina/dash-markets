import Image from "next/image";
import { FaChevronLeft } from "react-icons/fa";

export function GameInfoPanel() {
  return (
    <div className="relative w-full px-2">
      {/* Background SVG - Now inline with fixed height */}
      <div
        className="relative w-full shadow-xl shadow-black/25"
        style={{ height: "85px" }}
      >
        <svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 1042 83"
          preserveAspectRatio="none"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <mask id="path-1-inside-1_1_1411" fill="white">
            <path d="M1039.07 16.0711C1040.95 17.9464 1042 20.49 1042 23.1421V59.8579C1042 62.51 1040.95 65.0536 1039.07 66.9289L1025.93 80.0711C1024.05 81.9464 1021.51 83 1018.86 83H23.1422C20.49 83 17.9464 81.9464 16.0711 80.0711L2.92893 66.9289C1.05357 65.0536 0 62.51 0 59.8579V23.1421C0 20.49 1.05357 17.9464 2.92893 16.0711L16.0711 2.92893C17.9464 1.05357 20.49 0 23.1421 0H1018.86C1021.51 0 1024.05 1.05357 1025.93 2.92893L1039.07 16.0711Z" />
          </mask>
          <path
            d="M1039.07 16.0711C1040.95 17.9464 1042 20.49 1042 23.1421V59.8579C1042 62.51 1040.95 65.0536 1039.07 66.9289L1025.93 80.0711C1024.05 81.9464 1021.51 83 1018.86 83H23.1422C20.49 83 17.9464 81.9464 16.0711 80.0711L2.92893 66.9289C1.05357 65.0536 0 62.51 0 59.8579V23.1421C0 20.49 1.05357 17.9464 2.92893 16.0711L16.0711 2.92893C17.9464 1.05357 20.49 0 23.1421 0H1018.86C1021.51 0 1024.05 1.05357 1025.93 2.92893L1039.07 16.0711Z"
            fill="#CED7FF"
            fillOpacity="0.07"
          />
          <path
            d="M1025.93 2.92893L1026.64 2.22183L1025.93 2.92893ZM2.92893 66.9289L3.63604 66.2218L2.92893 66.9289ZM16.0711 80.0711L15.364 80.7782L16.0711 80.0711ZM1025.93 80.0711L1026.64 80.7782L1025.93 80.0711ZM1039.07 66.9289L1039.78 67.636L1039.07 66.9289ZM1039.07 16.0711L1039.78 15.364L1039.07 16.0711ZM1042 23.1421H1041V59.8579H1042H1043V23.1421H1042ZM1039.07 66.9289L1038.36 66.2218L1025.22 79.364L1025.93 80.0711L1026.64 80.7782L1039.78 67.636L1039.07 66.9289ZM1018.86 83V82H23.1422V83V84H1018.86V83ZM16.0711 80.0711L16.7782 79.364L3.63604 66.2218L2.92893 66.9289L2.22183 67.636L15.364 80.7782L16.0711 80.0711ZM0 59.8579H1V23.1421H0H-1V59.8579H0ZM2.92893 16.0711L3.63604 16.7782L16.7782 3.63604L16.0711 2.92893L15.364 2.22183L2.22183 15.364L2.92893 16.0711ZM23.1421 0V1H1018.86V0V-1H23.1421V0ZM1025.93 2.92893L1025.22 3.63604L1038.36 16.7782L1039.07 16.0711L1039.78 15.364L1026.64 2.22183L1025.93 2.92893ZM1018.86 0V1C1021.24 1 1023.53 1.94821 1025.22 3.63604L1025.93 2.92893L1026.64 2.22183C1024.57 0.158923 1021.78 -1 1018.86 -1V0ZM16.0711 2.92893L16.7782 3.63604C18.466 1.94821 20.7552 1 23.1421 1V0V-1C20.2248 -1 17.4269 0.158926 15.364 2.22183L16.0711 2.92893ZM0 23.1421H1C1 20.7552 1.94821 18.466 3.63604 16.7782L2.92893 16.0711L2.22183 15.364C0.158925 17.4269 -1 20.2248 -1 23.1421H0ZM2.92893 66.9289L3.63604 66.2218C1.94821 64.534 1 62.2448 1 59.8579H0H-1C-1 62.7752 0.158926 65.5731 2.22183 67.636L2.92893 66.9289ZM23.1422 83V82C20.7552 82 18.466 81.0518 16.7782 79.364L16.0711 80.0711L15.364 80.7782C17.4269 82.8411 20.2248 84 23.1422 84V83ZM1025.93 80.0711L1025.22 79.364C1023.53 81.0518 1021.24 82 1018.86 82V83V84C1021.78 84 1024.57 82.8411 1026.64 80.7782L1025.93 80.0711ZM1042 59.8579H1041C1041 62.2448 1040.05 64.534 1038.36 66.2218L1039.07 66.9289L1039.78 67.636C1041.84 65.5731 1043 62.7752 1043 59.8579H1042ZM1042 23.1421H1043C1043 20.2248 1041.84 17.4269 1039.78 15.364L1039.07 16.0711L1038.36 16.7782C1040.05 18.466 1041 20.7552 1041 23.1421H1042Z"
            fill="#CED7FF"
            fillOpacity="0.06"
            mask="url(#path-1-inside-1_1_1411)"
          />
        </svg>

        {/* Content - absolute positioned to match image dimensions */}
        <div className="absolute inset-0 grid grid-cols-5 w-full divide-x divide-background/10 drop-shadow-xl shadow-black/25">
          {/* Back button */}
          <div className="col-span-1 flex items-center px-5 py-4">
            <button className="flex justify-center items-center gap-x-2.5 px-4 py-2.5 rounded-lg bg-[rgba(206,215,255,0.07)] shadow-[inset_0_1px_0_0_rgba(255,255,255,0.18),inset_0_1px_0_0_rgba(255,255,255,0.02)] backdrop-blur-[3px]">
              <FaChevronLeft className="text-[#757995] w-2" />
              <span className="text-sm font-semibold">Back</span>
            </button>
          </div>

          {/* Game ID */}
          <div className="col-span-1 px-5 py-4 space-y-0.5 flex flex-col justify-center">
            <p className="text-xs font-semibold leading-[1.5] text-tertiary">
              Game id:
            </p>
            <p className="text-lg font-semibold leading-[1.5]">#G1A2B3</p>
          </div>

          {/* Status and Timer */}
          <div className="flex flex-col items-center justify-center">
            <p className="text-primary font-bold leading-[1.4] text-sm uppercase">
              WAITING
            </p>
            <p className="text-[22px] font-bold">1m 34s</p>
          </div>

          {/* Stake */}
          <div className="col-span-1 px-5 py-4 space-y-0.5 flex flex-col justify-center items-end">
            <p className="text-xs font-semibold leading-[1.5] text-tertiary">
              Stake:
            </p>
            <p className="text-lg font-semibold leading-[1.5]">100$</p>
          </div>

          {/* Referral Link Button */}
          <div className="col-span-1 px-5 py-4 flex justify-end items-center">
            <button className="flex justify-center items-center px-3.5 py-2.5 gap-1 rounded-[10px] border border-cyan bg-cyan/4 font-semibold text-cyan animate-cyan-glow">
              Referral link
              <Image src="/icons/copy.svg" width={18} height={18} alt="copy" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
