import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X, ArrowRight } from 'lucide-react';
import LogoMark from '../ui/LogoMark';
import WaveDecoration from '../ui/WaveDecoration';

const links = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Courses', to: '/courses' },
  { label: 'Corporate Training', to: '/corporate-training' },
  { label: 'Testimonials', to: '/#testimonials' },
  { label: 'Contact', to: '/contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  const isHome = location.pathname === '/';
  const solid = scrolled || !isHome || open;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        solid
          ? 'bg-deepBlack/95 backdrop-blur-md shadow-[0_4px_24px_-12px_rgba(0,0,0,0.6)]'
          : 'bg-transparent'
      }`}
    >
      <nav className="container-px flex h-20 items-center justify-between">
        <Link to="/" className="group flex items-center gap-3" aria-label="Premier English Academy home">
          <span className="relative">
            <LogoMark className="h-10 w-10 transition-transform duration-300 group-hover:rotate-6" />
            <span className="pointer-events-none absolute -right-1 -top-1 hidden sm:block">
              <WaveDecoration bars={3} className="h-4" />
            </span>
          </span>
          <span className="flex flex-col leading-none">
            <span className="font-display text-sm font-extrabold tracking-wide text-cleanWhite">
              PREMIER
            </span>
            <span className="font-display text-[10px] font-semibold uppercase tracking-[0.3em] text-brandRed">
              English Academy
            </span>
          </span>
        </Link>

        <ul className="hidden items-center gap-1 lg:flex">
          {links.map((link) => {
            const isHash = link.to.includes('#');
            const [path, hash] = isHash ? link.to.split('#') : [link.to, ''];
            const isActive = isHash
              ? location.pathname === (path || '/') && location.hash === `#${hash}`
              : location.pathname === link.to && location.hash === '';
            return (
              <li key={link.label}>
                <NavLink
                  to={link.to}
                  className={`group relative rounded-full px-4 py-2 text-sm font-medium transition-colors duration-200 ${
                    isActive ? 'text-brandRed' : 'text-white/80 hover:text-cleanWhite'
                  }`}
                >
                  {link.label}
                  <span
                    className={`absolute left-1/2 top-1/2 h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-brandRed transition-opacity duration-200 ${
                      isActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-60'
                    }`}
                    style={{ transform: 'translate(-50%, 14px)' }}
                  />
                </NavLink>
              </li>
            );
          })}
        </ul>

        <div className="hidden lg:block">
          <Link to="/contact" className="btn-primary animate-pulseRed">
            Join Now
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-cleanWhite transition hover:border-brandRed hover:text-brandRed lg:hidden"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden border-t border-white/10 bg-deepBlack lg:hidden"
          >
            <ul className="container-px flex flex-col gap-1 py-6">
              {links.map((link, i) => (
                <motion.li
                  key={link.label}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * i, duration: 0.3 }}
                >
                  <Link
                    to={link.to}
                    className="flex items-center justify-between rounded-2xl px-4 py-3 text-base font-medium text-white/85 transition hover:bg-white/5 hover:text-brandRed"
                  >
                    {link.label}
                    <ArrowRight className="h-4 w-4 text-brandRed" />
                  </Link>
                </motion.li>
              ))}
              <li className="mt-3">
                <Link to="/contact" className="btn-primary w-full">
                  Join Now
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
