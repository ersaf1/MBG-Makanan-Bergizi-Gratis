interface SvgProps {
  className?: string;
  size?: number;
}

export function IllustrationKitchen({ className = "", size = 120 }: SvgProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 120 120" fill="none" className={className}>
      <rect width="120" height="120" rx="16" fill="#eff6ff" />
      <rect x="20" y="40" width="80" height="50" rx="6" fill="#dbeafe" stroke="#3b82f6" strokeWidth="1.5" />
      <rect x="28" y="48" width="24" height="16" rx="3" fill="#bfdbfe" />
      <rect x="56" y="48" width="24" height="16" rx="3" fill="#bfdbfe" />
      <circle cx="40" cy="78" r="4" fill="#3b82f6" />
      <circle cx="68" cy="78" r="4" fill="#3b82f6" />
      <rect x="84" y="30" width="8" height="20" rx="4" fill="#93c5fd" />
      <path d="M35 28 Q35 22 40 22 Q45 22 45 28" stroke="#60a5fa" strokeWidth="1.5" fill="none" />
      <path d="M55 26 Q55 20 60 20 Q65 20 65 26" stroke="#60a5fa" strokeWidth="1.5" fill="none" />
      <path d="M75 30 Q75 24 80 24 Q85 24 85 30" stroke="#60a5fa" strokeWidth="1.5" fill="none" />
      <rect x="30" y="95" width="60" height="4" rx="2" fill="#bfdbfe" />
    </svg>
  );
}

export function IllustrationSchool({ className = "", size = 120 }: SvgProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 120 120" fill="none" className={className}>
      <rect width="120" height="120" rx="16" fill="#eff6ff" />
      <rect x="25" y="50" width="70" height="45" rx="4" fill="#dbeafe" stroke="#3b82f6" strokeWidth="1.5" />
      <rect x="50" y="30" width="20" height="25" rx="2" fill="#93c5fd" />
      <polygon points="60,18 35,35 85,35" fill="#3b82f6" />
      <rect x="35" y="60" width="12" height="12" rx="2" fill="#bfdbfe" stroke="#60a5fa" strokeWidth="1" />
      <rect x="54" y="60" width="12" height="12" rx="2" fill="#bfdbfe" stroke="#60a5fa" strokeWidth="1" />
      <rect x="73" y="60" width="12" height="12" rx="2" fill="#bfdbfe" stroke="#60a5fa" strokeWidth="1" />
      <rect x="52" y="80" width="16" height="15" rx="2" fill="#3b82f6" />
      <circle cx="60" cy="87" r="1.5" fill="white" />
      <rect x="42" y="95" width="36" height="3" rx="1.5" fill="#bfdbfe" />
    </svg>
  );
}

export function IllustrationTruck({ className = "", size = 120 }: SvgProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 120 120" fill="none" className={className}>
      <rect width="120" height="120" rx="16" fill="#eff6ff" />
      <rect x="10" y="45" width="55" height="32" rx="4" fill="#3b82f6" />
      <rect x="15" y="50" width="45" height="22" rx="2" fill="white" opacity="0.2" />
      <text x="37" y="65" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold" fontFamily="system-ui">MBG</text>
      <rect x="10" y="73" width="55" height="4" fill="#06b6d4" />
      <path d="M65 52 L65 77 L90 77 L90 60 L80 52 Z" fill="#3b82f6" />
      <path d="M69 56 L69 68 L84 68 L80 56 Z" fill="#dbeafe" opacity="0.8" />
      <rect x="65" y="73" width="25" height="4" fill="#06b6d4" />
      <rect x="86" y="62" width="14" height="11" rx="2" fill="#475569" />
      <circle cx="30" cy="85" r="7" fill="#1e293b" />
      <circle cx="30" cy="85" r="4" fill="#475569" />
      <circle cx="80" cy="85" r="7" fill="#1e293b" />
      <circle cx="80" cy="85" r="4" fill="#475569" />
      <line x1="5" y1="92" x2="115" y2="92" stroke="#e2e8f0" strokeWidth="1" />
    </svg>
  );
}

export function IllustrationChildren({ className = "", size = 120 }: SvgProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 120 120" fill="none" className={className}>
      <rect width="120" height="120" rx="16" fill="#eff6ff" />
      <circle cx="40" cy="38" r="10" fill="#fcd34d" />
      <circle cx="40" cy="38" r="8" fill="#fbbf24" />
      <circle cx="37" cy="36" r="1.2" fill="#1e293b" />
      <circle cx="43" cy="36" r="1.2" fill="#1e293b" />
      <path d="M37 41 Q40 44 43 41" stroke="#1e293b" strokeWidth="1" fill="none" />
      <rect x="33" y="50" width="14" height="22" rx="4" fill="#3b82f6" />
      <rect x="28" y="55" width="6" height="14" rx="3" fill="#fcd34d" />
      <rect x="46" y="55" width="6" height="14" rx="3" fill="#fcd34d" />
      <circle cx="80" cy="42" r="10" fill="#fcd34d" />
      <circle cx="80" cy="42" r="8" fill="#fbbf24" />
      <circle cx="77" cy="40" r="1.2" fill="#1e293b" />
      <circle cx="83" cy="40" r="1.2" fill="#1e293b" />
      <path d="M77 44 Q80 47 83 44" stroke="#1e293b" strokeWidth="1" fill="none" />
      <rect x="73" y="54" width="14" height="22" rx="4" fill="#06b6d4" />
      <rect x="68" y="59" width="6" height="14" rx="3" fill="#fcd34d" />
      <rect x="86" y="59" width="6" height="14" rx="3" fill="#fcd34d" />
      <rect x="30" y="82" width="60" height="8" rx="4" fill="#dbeafe" />
      <rect x="35" y="84" width="20" height="4" rx="2" fill="#3b82f6" opacity="0.3" />
      <rect x="60" y="84" width="15" height="4" rx="2" fill="#06b6d4" opacity="0.3" />
    </svg>
  );
}

export function IllustrationFood({ className = "", size = 120 }: SvgProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 120 120" fill="none" className={className}>
      <rect width="120" height="120" rx="16" fill="#eff6ff" />
      <ellipse cx="60" cy="70" rx="35" ry="20" fill="#dbeafe" stroke="#3b82f6" strokeWidth="1.5" />
      <ellipse cx="60" cy="65" rx="30" ry="15" fill="white" />
      <circle cx="50" cy="60" r="6" fill="#fbbf24" opacity="0.8" />
      <circle cx="65" cy="58" r="5" fill="#34d399" opacity="0.8" />
      <rect x="55" y="55" width="12" height="8" rx="2" fill="#f87171" opacity="0.7" />
      <circle cx="72" cy="63" r="4" fill="#a78bfa" opacity="0.6" />
      <rect x="48" y="78" width="24" height="3" rx="1.5" fill="#bfdbfe" />
      <path d="M30 40 Q30 32 38 32" stroke="#93c5fd" strokeWidth="1.5" fill="none" />
      <path d="M45 38 Q45 30 53 30" stroke="#93c5fd" strokeWidth="1.5" fill="none" />
      <path d="M70 40 Q70 32 78 32" stroke="#93c5fd" strokeWidth="1.5" fill="none" />
    </svg>
  );
}

export function IllustrationNutrition({ className = "", size = 120 }: SvgProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 120 120" fill="none" className={className}>
      <rect width="120" height="120" rx="16" fill="#ecfdf5" />
      <circle cx="60" cy="55" r="25" fill="#d1fae5" stroke="#10b981" strokeWidth="1.5" />
      <path d="M60 35 L60 55 L75 55" stroke="#10b981" strokeWidth="2" strokeLinecap="round" />
      <circle cx="60" cy="55" r="3" fill="#10b981" />
      <rect x="25" y="88" width="18" height="14" rx="3" fill="#3b82f6" />
      <rect x="48" y="88" width="18" height="14" rx="3" fill="#06b6d4" />
      <rect x="71" y="88" width="18" height="14" rx="3" fill="#f59e0b" />
      <text x="34" y="98" textAnchor="middle" fill="white" fontSize="6" fontWeight="bold" fontFamily="system-ui">P</text>
      <text x="57" y="98" textAnchor="middle" fill="white" fontSize="6" fontWeight="bold" fontFamily="system-ui">K</text>
      <text x="80" y="98" textAnchor="middle" fill="white" fontSize="6" fontWeight="bold" fontFamily="system-ui">L</text>
    </svg>
  );
}

export function IllustrationAward({ className = "", size = 120 }: SvgProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 120 120" fill="none" className={className}>
      <rect width="120" height="120" rx="16" fill="#fef3c7" />
      <circle cx="60" cy="48" r="22" fill="#fbbf24" />
      <circle cx="60" cy="48" r="18" fill="#f59e0b" />
      <polygon points="60,32 63,42 74,42 65,48 68,58 60,52 52,58 55,48 46,42 57,42" fill="white" />
      <rect x="52" y="68" width="16" height="20" rx="2" fill="#3b82f6" />
      <rect x="44" y="84" width="32" height="6" rx="3" fill="#1e293b" />
      <path d="M48 68 L44 84" stroke="#3b82f6" strokeWidth="2" />
      <path d="M72 68 L76 84" stroke="#3b82f6" strokeWidth="2" />
    </svg>
  );
}

export function IllustrationBooks({ className = "", size = 120 }: SvgProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 120 120" fill="none" className={className}>
      <rect width="120" height="120" rx="16" fill="#eff6ff" />
      <rect x="30" y="45" width="18" height="35" rx="2" fill="#3b82f6" transform="rotate(-5 30 45)" />
      <rect x="48" y="42" width="18" height="38" rx="2" fill="#06b6d4" />
      <rect x="66" y="45" width="18" height="35" rx="2" fill="#f59e0b" transform="rotate(5 66 45)" />
      <rect x="28" y="82" width="60" height="5" rx="2.5" fill="#dbeafe" />
      <circle cx="60" cy="30" r="8" fill="#dbeafe" stroke="#3b82f6" strokeWidth="1" />
      <text x="60" y="34" textAnchor="middle" fill="#3b82f6" fontSize="8" fontWeight="bold" fontFamily="system-ui">G</text>
    </svg>
  );
}

export function IllustrationHeart({ className = "", size = 120 }: SvgProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 120 120" fill="none" className={className}>
      <rect width="120" height="120" rx="16" fill="#fce7f3" />
      <path d="M60 85 C30 65 20 45 35 35 C50 25 60 40 60 40 C60 40 70 25 85 35 C100 45 90 65 60 85Z" fill="#f472b6" />
      <path d="M60 78 C38 63 30 48 42 40 C52 33 60 44 60 44 C60 44 68 33 78 40 C90 48 82 63 60 78Z" fill="#ec4899" />
      <circle cx="48" cy="48" r="4" fill="white" opacity="0.4" />
    </svg>
  );
}

export function IllustrationFamily({ className = "", size = 120 }: SvgProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 120 120" fill="none" className={className}>
      <rect width="120" height="120" rx="16" fill="#eff6ff" />
      <circle cx="40" cy="35" r="9" fill="#fbbf24" />
      <rect x="33" y="46" width="14" height="20" rx="4" fill="#3b82f6" />
      <circle cx="65" cy="38" r="9" fill="#fbbf24" />
      <rect x="58" y="49" width="14" height="20" rx="4" fill="#06b6d4" />
      <circle cx="88" cy="42" r="7" fill="#fbbf24" />
      <rect x="82" y="51" width="12" height="16" rx="3" fill="#f59e0b" />
      <rect x="25" y="72" width="70" height="4" rx="2" fill="#dbeafe" />
      <path d="M50 52 L55 52 L52 58 Z" fill="#3b82f6" opacity="0.3" />
    </svg>
  );
}

export function IllustrationVegetables({ className = "", size = 120 }: SvgProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 120 120" fill="none" className={className}>
      <rect width="120" height="120" rx="16" fill="#ecfdf5" />
      <ellipse cx="60" cy="80" rx="30" ry="12" fill="#d1fae5" />
      <rect x="55" y="40" width="10" height="35" rx="5" fill="#34d399" />
      <path d="M55 50 Q40 35 45 25" stroke="#10b981" strokeWidth="2" fill="none" />
      <ellipse cx="45" cy="25" rx="8" ry="5" fill="#34d399" transform="rotate(-20 45 25)" />
      <path d="M65 50 Q80 35 75 25" stroke="#10b981" strokeWidth="2" fill="none" />
      <ellipse cx="75" cy="25" rx="8" ry="5" fill="#34d399" transform="rotate(20 75 25)" />
      <circle cx="40" cy="75" r="8" fill="#f87171" opacity="0.6" />
      <circle cx="75" cy="72" r="6" fill="#fbbf24" opacity="0.6" />
      <circle cx="58" cy="78" r="5" fill="#a78bfa" opacity="0.5" />
    </svg>
  );
}

export function IllustrationPacking({ className = "", size = 120 }: SvgProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 120 120" fill="none" className={className}>
      <rect width="120" height="120" rx="16" fill="#eff6ff" />
      <rect x="25" y="45" width="45" height="35" rx="4" fill="#dbeafe" stroke="#3b82f6" strokeWidth="1.5" />
      <line x1="25" y1="55" x2="70" y2="55" stroke="#3b82f6" strokeWidth="1" />
      <rect x="35" y="60" width="20" height="3" rx="1.5" fill="#93c5fd" />
      <rect x="35" y="67" width="15" height="3" rx="1.5" fill="#93c5fd" />
      <rect x="60" y="55" width="30" height="25" rx="4" fill="#06b6d4" />
      <rect x="65" y="60" width="20" height="3" rx="1.5" fill="white" opacity="0.5" />
      <rect x="65" y="67" width="14" height="3" rx="1.5" fill="white" opacity="0.5" />
      <path d="M47 45 L47 38 L73 38 L73 45" stroke="#3b82f6" strokeWidth="1.5" fill="#dbeafe" />
      <rect x="55" y="82" width="10" height="8" fill="#dbeafe" />
      <rect x="45" y="82" width="10" height="8" fill="#dbeafe" />
    </svg>
  );
}

export function IllustrationStar({ className = "", size = 120 }: SvgProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 120 120" fill="none" className={className}>
      <rect width="120" height="120" rx="16" fill="#fef3c7" />
      <polygon points="60,20 70,45 97,45 76,60 84,85 60,70 36,85 44,60 23,45 50,45" fill="#fbbf24" />
      <polygon points="60,30 67,47 87,47 72,58 78,77 60,66 42,77 48,58 33,47 53,47" fill="#f59e0b" />
      <circle cx="55" cy="50" r="2" fill="white" opacity="0.5" />
      <circle cx="68" cy="55" r="1.5" fill="white" opacity="0.4" />
    </svg>
  );
}

export function IllustrationLove({ className = "", size = 120 }: SvgProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 120 120" fill="none" className={className}>
      <rect width="120" height="120" rx="16" fill="#fce7f3" />
      <circle cx="45" cy="45" r="12" fill="#fbbf24" />
      <rect x="38" y="58" width="14" height="18" rx="4" fill="#3b82f6" />
      <circle cx="75" cy="48" r="12" fill="#fbbf24" />
      <rect x="68" y="61" width="14" height="18" rx="4" fill="#06b6d4" />
      <path d="M55 70 C55 62 60 58 60 58 C60 58 65 62 65 70 C65 78 60 82 60 82 C60 82 55 78 55 70Z" fill="#f472b6" />
      <rect x="30" y="82" width="60" height="4" rx="2" fill="#dbeafe" />
    </svg>
  );
}
