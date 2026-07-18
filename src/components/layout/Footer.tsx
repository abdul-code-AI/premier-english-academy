import { Link } from 'react-router-dom';
import { useState } from 'react';
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Instagram,
  Linkedin,
  Youtube,
  ArrowRight,
  Check,
} from 'lucide-react';
import LogoMark from '../ui/LogoMark';
import WaveDecoration from '../ui/WaveDecoration';

const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Courses', to: '/courses' },
  { label: 'Corporate Training', to: '/corporate-training' },
  { label: 'Contact', to: '/contact' },
];

const courseLinks = [
  'English for Executives',
  'Public Speaking 101',
  'Confident Conversations',
  'Interview Communication Mastery',
  'Leadership Communication',
];

const socials = [
  { Icon: Linkedin, label: 'LinkedIn', href: '#' },
  { Icon: Instagram, label: 'Instagram', href: '#' },
  { Icon: Facebook, label: 'Facebook', href: '#' },
  { Icon: Youtube, label: 'YouTube', href: '#' },
];

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const onSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
    setEmail('');
    setTimeout(() => setSubscribed(false), 3500);
  };

  return (
    <footer className="relative overflow-hidden bg-deepBlack text-white">
      <div className="bg-grid absolute inset-0 opacity-40" aria-hidden="true" />
      <div
        className="pointer-events-none absolute -right-24 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full border border-brandRed/20"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -left-32 -top-32 h-80 w-80 rounded-full border border-brandRed/10"
        aria-hidden="true"
      />

      <div className="container-px relative py-16">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          <div className="flex flex-col gap-5">
            <Link to="/" className="flex items-center gap-3" aria-label="Premier English Academy home">
              <LogoMark className="h-12 w-12" />
              <span className="flex flex-col leading-none">
                <span className="font-display text-base font-extrabold tracking-wide">PREMIER</span>
                <span className="font-display text-[11px] font-semibold uppercase tracking-[0.3em] text-brandRed">
                  English Academy
                </span>
              </span>
            </Link>
            <p className="max-w-sm text-sm leading-relaxed text-white/60">
              Practical communication training that helps students, professionals, and
              organizations speak with clarity, confidence, and impact.
            </p>
            <WaveDecoration bars={9} className="h-6 opacity-70" />
          </div>

          <div>
            <h3 className="mb-5 font-display text-sm font-bold uppercase tracking-wider text-white">
              Explore
            </h3>
            <ul className="flex flex-col gap-3">
              {navLinks.map((l) => (
                <li key={l.label}>
                  <Link
                    to={l.to}
                    className="text-sm text-white/60 transition-colors hover:text-brandRed"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-5 font-display text-sm font-bold uppercase tracking-wider text-white">
              Courses
            </h3>
            <ul className="flex flex-col gap-3">
              {courseLinks.map((c) => (
                <li key={c}>
                  <Link
                    to="/courses"
                    className="text-sm text-white/60 transition-colors hover:text-brandRed"
                  >
                    {c}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-5 font-display text-sm font-bold uppercase tracking-wider text-white">
              Stay in the loop
            </h3>
            <p className="mb-4 text-sm text-white/60">
              Communication tips, course updates, and free resources — straight to your inbox.
            </p>
            <form onSubmit={onSubscribe} className="mb-6 flex gap-2">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@email.com"
                aria-label="Email address for newsletter"
                className="w-full rounded-full border border-white/15 bg-white/5 px-4 py-2.5 text-sm text-white placeholder-white/40 outline-none transition focus:border-brandRed"
              />
              <button
                type="submit"
                aria-label="Subscribe"
                className="inline-flex h-10 w-12 shrink-0 items-center justify-center rounded-full bg-brandRed text-cleanWhite transition hover:bg-brandRedDark"
              >
                {subscribed ? <Check className="h-4 w-4" /> : <ArrowRight className="h-4 w-4" />}
              </button>
            </form>
            <ul className="flex flex-col gap-3 text-sm text-white/60">
              <li className="flex items-center gap-3">
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/5 text-brandRed">
                  <Mail className="h-4 w-4" />
                </span>
                hello@premierenglishacademy.com
              </li>
              <li className="flex items-center gap-3">
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/5 text-brandRed">
                  <Phone className="h-4 w-4" />
                </span>
                +91 90000 00000
              </li>
              <li className="flex items-center gap-3">
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/5 text-brandRed">
                  <MapPin className="h-4 w-4" />
                </span>
                Bengaluru · Online · On-site
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-6 border-t border-white/10 pt-8 sm:flex-row">
          <p className="text-xs text-white/50">
            © {new Date().getFullYear()} Premier English Academy. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            {socials.map(({ Icon, label, href }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white/70 transition hover:border-brandRed hover:text-brandRed"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
          <div className="flex items-center gap-5 text-xs text-white/50">
            <Link to="/" className="transition hover:text-brandRed">Privacy Policy</Link>
            <Link to="/" className="transition hover:text-brandRed">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
