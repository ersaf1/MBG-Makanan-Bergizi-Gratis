interface MBGTruckProps {
  className?: string;
  size?: number;
  color?: string;
  accentColor?: string;
}

export function MBGTruck({
  className = "",
  size = 120,
  color = "#cc785c",
  accentColor = "#e8a55a",
}: MBGTruckProps) {
  return (
    <svg
      width={size}
      height={size * 0.7}
      viewBox="0 0 120 84"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Truck body (cargo box) */}
      <rect x="2" y="14" width="68" height="44" rx="4" fill={color} />
      <rect x="6" y="18" width="60" height="36" rx="2" fill="white" opacity="0.15" />

      {/* MBG text on cargo */}
      <text
        x="36"
        y="38"
        textAnchor="middle"
        fill="white"
        fontSize="14"
        fontWeight="bold"
        fontFamily="system-ui, sans-serif"
      >
        MBG
      </text>
      <text
        x="36"
        y="50"
        textAnchor="middle"
        fill="white"
        fontSize="5.5"
        fontFamily="system-ui, sans-serif"
        opacity="0.85"
      >
        Makan Bergizi Gratis
      </text>

      {/* Accent stripe */}
      <rect x="2" y="52" width="68" height="6" rx="0" fill={accentColor} />

      {/* Truck cabin */}
      <path
        d="M70 24 L70 58 L104 58 L104 36 L90 24 Z"
        fill={color}
      />
      {/* Cabin window */}
      <path
        d="M76 28 L76 42 L96 42 L90 28 Z"
        fill="#faf9f5"
        opacity="0.9"
      />
      {/* Cabin accent */}
      <rect x="70" y="52" width="34" height="6" fill={accentColor} />

      {/* Bumper */}
      <rect x="100" y="44" width="18" height="14" rx="3" fill="#475569" />
      <rect x="104" y="48" width="10" height="4" rx="1" fill="#fbbf24" opacity="0.8" />

      {/* Ground line */}
      <line x1="0" y1="68" x2="120" y2="68" stroke="#e2e8f0" strokeWidth="1" />

      {/* Rear wheel */}
      <circle cx="28" cy="64" r="10" fill="#1e293b" />
      <circle cx="28" cy="64" r="6" fill="#475569" />
      <circle cx="28" cy="64" r="2.5" fill="#94a3b8" />

      {/* Front wheel */}
      <circle cx="90" cy="64" r="10" fill="#1e293b" />
      <circle cx="90" cy="64" r="6" fill="#475569" />
      <circle cx="90" cy="64" r="2.5" fill="#94a3b8" />

      {/* Headlight */}
      <rect x="114" y="46" width="4" height="6" rx="1" fill="#fbbf24" />
    </svg>
  );
}

export function MBGTruckSide({
  className = "",
  size = 200,
}: {
  className?: string;
  size?: number;
}) {
  return (
    <svg
      width={size}
      height={size * 0.45}
      viewBox="0 0 200 90"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Long cargo body */}
      <rect x="4" y="10" width="120" height="48" rx="5" fill="#cc785c" />
      <rect x="8" y="14" width="112" height="40" rx="3" fill="white" opacity="0.12" />

      {/* Cargo content icons */}
      <text x="30" y="36" fontSize="16" fill="white" opacity="0.4">🍱</text>
      <text x="60" y="36" fontSize="16" fill="white" opacity="0.4">🥗</text>
      <text x="90" y="36" fontSize="16" fill="white" opacity="0.4">🥛</text>

      {/* MBG branding */}
      <rect x="8" y="14" width="50" height="20" rx="3" fill="#a9583e" />
      <text
        x="33"
        y="28"
        textAnchor="middle"
        fill="white"
        fontSize="11"
        fontWeight="bold"
        fontFamily="system-ui, sans-serif"
      >
        MBG
      </text>

      {/* Orange stripe */}
      <rect x="4" y="54" width="120" height="4" fill="#e8a55a" />

      {/* Cabin */}
      <path
        d="M124 18 L124 58 L168 58 L168 32 L150 18 Z"
        fill="#cc785c"
      />
      <path d="M130 22 L130 44 L160 44 L152 22 Z" fill="#faf9f5" opacity="0.85" />
      <rect x="124" y="54" width="44" height="4" fill="#e8a55a" />

      {/* Bumper */}
      <rect x="164" y="42" width="24" height="16" rx="4" fill="#334155" />
      <rect x="170" y="48" width="12" height="4" rx="1" fill="#fbbf24" opacity="0.7" />

      {/* Wheels */}
      <circle cx="40" cy="66" r="12" fill="#1e293b" />
      <circle cx="40" cy="66" r="7" fill="#475569" />
      <circle cx="40" cy="66" r="3" fill="#94a3b8" />

      <circle cx="150" cy="66" r="12" fill="#1e293b" />
      <circle cx="150" cy="66" r="7" fill="#475569" />
      <circle cx="150" cy="66" r="3" fill="#94a3b8" />

      {/* Ground */}
      <line x1="0" y1="78" x2="200" y2="78" stroke="#e2e8f0" strokeWidth="1" />
    </svg>
  );
}
