interface LogoMarkProps {
  className?: string;
  /** When true, the mark uses a dark fill suitable for light backgrounds. */
  variant?: 'dark' | 'light';
}

export default function LogoMark({ className = '', variant = 'dark' }: LogoMarkProps) {
  const bg = variant === 'dark' ? '#0A0A0A' : '#FFFFFF';
  const ring = '#FF3D00';
  const bars = '#FF3D00';
  return (
    <svg
      viewBox="0 0 64 64"
      className={className}
      role="img"
      aria-label="Premier English Academy logo"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="32" cy="32" r="31" fill={bg} />
      <circle cx="32" cy="32" r="25" fill="none" stroke={ring} strokeWidth="2" />
      <circle cx="32" cy="32" r="19" fill="none" stroke={ring} strokeWidth="1" opacity="0.5" />
      <g stroke={bars} strokeWidth="3.5" strokeLinecap="round">
        <line x1="20" y1="32" x2="20" y2="32" />
        <line x1="26" y1="25" x2="26" y2="39" />
        <line x1="32" y1="18" x2="32" y2="46" />
        <line x1="38" y1="25" x2="38" y2="39" />
        <line x1="44" y1="30" x2="44" y2="34" />
      </g>
    </svg>
  );
}
