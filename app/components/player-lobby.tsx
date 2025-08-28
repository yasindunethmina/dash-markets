const PlayerLobby = () => {
  const players = [
    {
      id: 1,
      name: "DAVID",
      status: "PICKING TOKENS",
      avatar: "🗡️",
      isActive: true,
      color: "pink",
    },
    {
      id: 2,
      name: "PLAYER 2",
      status: "PICKING TOKENS",
      avatar: null,
      isActive: false,
      color: "purple",
    },
    {
      id: 3,
      name: "PLAYER 3",
      status: "WAITING FOR PLAYER",
      avatar: null,
      isActive: false,
      color: "blue",
    },
    {
      id: 4,
      name: "PLAYER 4",
      status: "WAITING FOR PLAYER",
      avatar: null,
      isActive: false,
      color: "blue",
    },
    {
      id: 5,
      name: "PLAYER 5",
      status: "WAITING FOR PLAYER",
      avatar: null,
      isActive: false,
      color: "blue",
    },
  ];

  const getPlayerSlot = (player) => {
    const isActive = player.isActive;
    const colorClasses = {
      pink: "border-pink-400",
      purple: "border-purple-400",
      blue: "border-blue-400",
    };

    return (
      <div key={player.id} className="flex flex-col items-center space-y-3">
        {/* Hexagonal Avatar */}
        <div className="relative">
          <div
            className={`w-16 h-16 ${
              isActive ? colorClasses[player.color] : "border-gray-600"
            } border-2 flex items-center justify-center text-white text-xl`}
            style={{
              clipPath:
                "polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)",
              backgroundColor: player.avatar ? "#1f2937" : "transparent",
            }}
          >
            {player.avatar && <span>{player.avatar}</span>}
          </div>
          {/* Status indicator */}
          <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-gray-600 rounded-full flex items-center justify-center">
            <span className="text-white text-xs">✓</span>
          </div>
        </div>

        {/* Player Info */}
        <div className="text-center">
          <h3 className="text-white font-semibold text-sm">{player.name}</h3>
          <p className="text-gray-400 text-xs uppercase tracking-wide mt-1">
            {player.status}
          </p>
        </div>

        {/* Action Button */}
        <button
          className={`px-6 py-2 rounded-lg text-sm font-medium transition-all ${
            isActive
              ? player.color === "pink"
                ? "border border-pink-400 text-pink-400 hover:bg-pink-400/10"
                : player.color === "purple"
                ? "border border-purple-400 text-purple-400 hover:bg-purple-400/10"
                : "border border-blue-400 text-blue-400 hover:bg-blue-400/10"
              : "bg-blue-600 hover:bg-blue-700 text-white"
          }`}
        >
          {isActive ? "Place a bet" : "Join 100$"}
        </button>
      </div>
    );
  };

  return (
    <div className="flex items-center justify-center p-4">
      <div className="relative w-full max-w-7xl" style={{ height: "500px" }}>
        {/* Outer SVG with rounded edges */}
        <svg
          className="absolute inset-0"
          viewBox="0 0 1040 397"
          preserveAspectRatio="none"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1001.65 0.5L1002.26 0.507812H1002.27C1008.73 0.668438 1014.9 3.3065 1019.48 7.89062L1032.11 20.5176C1036.84 25.2496 1039.5 31.6684 1039.5 38.3604V358.64L1039.49 359.254V359.26C1039.33 365.725 1036.69 371.891 1032.11 376.476L1019.48 389.109C1014.89 393.693 1008.72 396.332 1002.26 396.492H1002.25L1001.64 396.5H38.3613C31.6694 396.5 25.2506 393.841 20.5186 389.109L7.89062 376.481C3.30649 371.897 0.668437 365.731 0.507812 359.266V359.26L0.5 358.646V38.3643L0.507812 37.7373C0.668493 31.2725 3.30657 25.1055 7.89062 20.5215L20.5215 7.89062C25.2535 3.1586 31.6723 0.500194 38.3643 0.5H1001.65Z"
            stroke="#CED7FF"
            strokeOpacity="0.1"
          />
        </svg>

        {/* Inner SVG with sharp edges (8px inset) */}
        <svg
          className="absolute inset-2"
          viewBox="0 0 1040 397"
          preserveAspectRatio="none"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M990.64 0C994.547 0.000113145 998.295 1.55249 1001.06 4.31543L1013.68 16.9424C1016.45 19.7053 1018 23.453 1018 27.3604V347.633C1018 351.54 1016.45 355.288 1013.68 358.051L1001.05 370.685C998.288 373.448 994.54 375 990.633 375H27.3613C23.454 375 19.7063 373.448 16.9434 370.685L4.31543 358.057C1.55249 355.294 0.000113144 351.546 0 347.639V27.3643C0.00011365 23.4569 1.5525 19.7092 4.31543 16.9463L16.9463 4.31543C19.7092 1.5525 23.4569 0.000113145 27.3643 0H990.64Z"
            stroke="#CED7FF"
            strokeOpacity="0.1"
          />
        </svg>

        {/* Content Layer (8px inset) */}
        <div className="absolute inset-2 flex flex-col justify-center items-center">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-purple-400 text-lg font-medium">SEASON</h1>
          </div>

          {/* Players Grid */}
          <div className="flex justify-center items-center space-x-8 lg:space-x-12">
            {players.map((player) => getPlayerSlot(player))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlayerLobby;
