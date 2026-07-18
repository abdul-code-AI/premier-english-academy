interface BadgeProps {
  children: React.ReactNode;
  variant?: 'red' | 'dark' | 'outline';
  className?: string;
}

export default function Badge({ children, variant = 'red', className = '' }: BadgeProps) {
  const styles = {
    red: 'bg-brandRed/10 text-brandRed border-brandRed/20',
    dark: 'bg-deepBlack text-cleanWhite border-deepBlack',
    outline: 'bg-transparent text-deepBlack border-deepBlack/15',
  };
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-semibold ${styles[variant]} ${className}`}
    >
      {children}
    </span>
  );
}
