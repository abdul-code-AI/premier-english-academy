import { motion } from 'framer-motion';
import { ArrowRight, PhoneCall, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import WaveDecoration from '../ui/WaveDecoration';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: 0.1 * i, ease: [0.21, 0.5, 0.3, 1] as const },
  }),
};

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-deepBlack text-cleanWhite">
      <div className="bg-grid absolute inset-0 opacity-50" aria-hidden="true" />
      <div
        className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full border border-brandRed/20"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -right-32 -top-24 h-[28rem] w-[28rem] rounded-full border border-brandRed/10"
        aria-hidden="true"
      />

      <div className="container-px relative grid min-h-[92vh] items-center gap-12 py-28 lg:grid-cols-2 lg:py-0">
        <div className="flex flex-col gap-7">
          <motion.span
            custom={0}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="eyebrow"
          >
            <WaveDecoration bars={4} className="h-4" />
            Speak With Confidence
          </motion.span>

          <motion.h1
            custom={1}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="font-display text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl xl:text-7xl"
          >
            Master the Art of <span className="text-brandRed">Communication.</span>
          </motion.h1>

          <motion.p
            custom={2}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="max-w-xl text-base leading-relaxed text-white/70 sm:text-lg"
          >
            Build the English skills, confidence, and soft skills you need to express
            yourself clearly and succeed in every conversation.
          </motion.p>

          <motion.div
            custom={3}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="flex flex-wrap items-center gap-4"
          >
            <Link to="/courses" className="btn-primary animate-pulseRed">
              Explore Our Courses
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link to="/contact" className="btn-secondary">
              <PhoneCall className="h-4 w-4" />
              Book a Free Consultation
            </Link>
          </motion.div>

          <motion.div
            custom={4}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="flex items-center gap-4 pt-4"
          >
            <div className="flex -space-x-2">
              {[1, 2, 3, 4].map((i) => (
                <span
                  key={i}
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full border-2 border-deepBlack bg-gradient-to-br from-brandRed to-brandRedDark text-xs font-bold text-cleanWhite"
                >
                  {String.fromCharCode(64 + i)}
                </span>
              ))}
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1 text-brandRed">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-3.5 w-3.5 fill-current" />
                ))}
              </div>
              <p className="text-xs text-white/60">
                Practical training for students, professionals, and ambitious leaders.
              </p>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.21, 0.5, 0.3, 1] }}
          className="relative"
        >
          <div className="relative mx-auto aspect-[4/5] w-full max-w-md overflow-hidden rounded-[2rem] border border-white/10 lg:max-w-lg">
            <img
              src="https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg?auto=compress&cs=tinysrgb&w=900"
              alt="Confident professional speaking and presenting to an audience"
              className="h-full w-full object-cover"
              loading="eager"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-deepBlack via-deepBlack/30 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-r from-deepBlack/40 to-transparent" />

            <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
              <div className="rounded-2xl border border-white/10 bg-deepBlack/70 px-4 py-3 backdrop-blur-md">
                <p className="font-display text-2xl font-extrabold text-cleanWhite">5,000+</p>
                <p className="text-xs text-white/70">Learners trained</p>
              </div>
              <WaveDecoration bars={6} className="h-8" />
            </div>
          </div>

<motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="absolute -right-4 top-1/3 hidden flex-col gap-1 rounded-2xl border border-white/10 bg-deepBlack/70 p-3 backdrop-blur-md md:flex"
          >
            {Array.from({ length: 5 }).map((_, i) => (
              <span
                key={i}
                className="voice-bar animate-voiceWave"
                style={{
                  height: `${10 + i * 6}px`,
                  animationDelay: `${i * 0.15}s`,
                }}
              />
            ))}
          </motion.div>
        </motion.div>
      </div>

      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-brandRed/50 to-transparent" />
    </section>
  );
}
