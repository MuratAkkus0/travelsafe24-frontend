export default function CityScoreIllustration() {
  return (
    <svg
      viewBox="0 0 400 400"
      role="img"
      aria-labelledby="cityScoreIllustrationTitle"
      className="rounded-lg w-sm lg:w-xl"
    >
      <title id="cityScoreIllustrationTitle">
        Stylized illustration of city blocks with a location pin and a fit
        score badge
      </title>
      <rect width="400" height="400" rx="24" fill="#eef2f1" />

      {/* Abstract city blocks */}
      <g opacity="0.9">
        <rect x="32" y="40" width="70" height="54" rx="6" fill="#cfe3da" />
        <rect x="112" y="40" width="90" height="34" rx="6" fill="#bcd7cb" />
        <rect x="212" y="40" width="60" height="54" rx="6" fill="#cfe3da" />
        <rect x="282" y="40" width="86" height="34" rx="6" fill="#bcd7cb" />

        <rect x="32" y="104" width="50" height="70" rx="6" fill="#bcd7cb" />
        <rect x="92" y="84" width="70" height="90" rx="6" fill="#cfe3da" />
        <rect x="172" y="104" width="56" height="50" rx="6" fill="#a9cabd" />
        <rect x="238" y="84" width="60" height="70" rx="6" fill="#cfe3da" />
        <rect x="308" y="84" width="60" height="90" rx="6" fill="#bcd7cb" />

        <rect x="32" y="184" width="90" height="46" rx="6" fill="#cfe3da" />
        <rect x="132" y="164" width="50" height="66" rx="6" fill="#a9cabd" />
        <rect x="238" y="164" width="70" height="46" rx="6" fill="#bcd7cb" />
        <rect x="318" y="184" width="50" height="66" rx="6" fill="#cfe3da" />

        <rect x="32" y="240" width="60" height="70" rx="6" fill="#bcd7cb" />
        <rect x="102" y="240" width="80" height="50" rx="6" fill="#cfe3da" />
        <rect x="192" y="220" width="56" height="90" rx="6" fill="#a9cabd" />
        <rect x="258" y="240" width="60" height="50" rx="6" fill="#cfe3da" />

        <rect x="32" y="320" width="100" height="40" rx="6" fill="#cfe3da" />
        <rect x="142" y="320" width="70" height="40" rx="6" fill="#bcd7cb" />
        <rect x="222" y="320" width="60" height="40" rx="6" fill="#cfe3da" />
        <rect x="292" y="300" width="76" height="60" rx="6" fill="#bcd7cb" />
      </g>

      {/* Winding road */}
      <path
        d="M0 210 C 80 190, 120 250, 200 220 S 320 170, 400 200"
        fill="none"
        stroke="#ffffff"
        strokeWidth="10"
        strokeLinecap="round"
      />

      {/* Location pin */}
      <path
        d="M200 120c-26 0-46 20-46 46 0 34 46 84 46 84s46-50 46-84c0-26-20-46-46-46Z"
        fill="var(--accent, #f7645e)"
        stroke="#ffffff"
        strokeWidth="6"
      />
      <circle cx="200" cy="166" r="18" fill="#ffffff" />

      {/* Score badge */}
      <g>
        <circle
          cx="300"
          cy="120"
          r="34"
          fill="#ffffff"
          stroke="var(--accent, #f7645e)"
          strokeWidth="4"
        />
        <text
          x="300"
          y="114"
          textAnchor="middle"
          fontSize="20"
          fontWeight="700"
          fill="#01110a"
        >
          9.4
        </text>
        <text
          x="300"
          y="132"
          textAnchor="middle"
          fontSize="10"
          fill="#4b5563"
        >
          fit score
        </text>
      </g>
    </svg>
  );
}
