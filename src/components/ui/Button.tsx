import { Link } from 'react-router-dom';
import type { ReactNode } from 'react';

type Variant = 'primary' | 'secondary' | 'ghost';
type Size = 'sm' | 'md' | 'lg';

interface BaseProps {
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  className?: string;
}

interface ButtonAsLink extends BaseProps {
  to: string;
  onClick?: never;
  type?: never;
  disabled?: never;
}

interface ButtonAsButton extends BaseProps {
  to?: never;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
}

type ButtonProps = ButtonAsLink | ButtonAsButton;

const base =
  'inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brandRed disabled:opacity-60 disabled:cursor-not-allowed';

const variants: Record<Variant, string> = {
  primary:
    'bg-brandRed text-cleanWhite hover:bg-brandRedDark hover:shadow-redGlow',
  secondary:
    'border-2 border-cleanWhite/30 bg-transparent text-cleanWhite hover:border-brandRed hover:text-brandRed',
  ghost:
    'border-2 border-deepBlack/15 bg-cleanWhite text-deepBlack hover:border-brandRed hover:text-brandRed',
};

const sizes: Record<Size, string> = {
  sm: 'px-4 py-2 text-xs',
  md: 'px-6 py-3 text-sm',
  lg: 'px-8 py-4 text-base',
};

export default function Button(props: ButtonProps) {
  const { children, variant = 'primary', size = 'md', className = '' } = props;
  const classes = `${base} ${variants[variant]} ${sizes[size]} ${className}`;

  if (props.to) {
    return (
      <Link to={props.to} className={classes}>
        {children}
      </Link>
    );
  }
  return (
    <button
      type={props.type ?? 'button'}
      onClick={props.onClick}
      disabled={props.disabled}
      className={classes}
    >
      {children}
    </button>
  );
}
