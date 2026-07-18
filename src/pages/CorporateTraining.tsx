import { motion } from 'framer-motion';
import { Check, ArrowRight, TrendingUp, Users, Award, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import SectionHeading from '../components/ui/SectionHeading';
import LogoMark from '../components/ui/LogoMark';
import WaveDecoration from '../components/ui/WaveDecoration';
import { corporateFeatures } from '../data/stats';

const outcomes = [
  { Icon: TrendingUp, value: '40%', label: 'Average improvement in team communication scores' },
  { Icon: Users, value: '5,000+', label: 'Professionals trained across industries' },
  { Icon: Award, value: '50+', label: 'Corporate clients served' },
  { Icon: Clock, value: '4–12', label: 'Weeks to measurable results' },
];

export default function CorporateTraining() {
  return (
    <>
      <section className="relative overflow-hidden bg-deepBlack py-32 text-cleanWhite lg:py-40">
        <div className="bg-grid absolute inset-0 opacity-40" aria-hidden="true" />
        <div
          className="pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 opacity-[0.04]"
          aria-hidden="true"
        >
          <LogoMark className="h-[40rem] w-[40rem]" variant="light" />
        </div>
        <div className="container-px relative">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <span className="eyebrow">
              <WaveDecoration bars={4} className="h-4" />
              For Organizations
            </span>
            <h1 className="mt-4 font-display text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
              Build a workforce that communicates with <span className="text-brandRed">confidence.</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/70">
              Customized communication training for teams that need to present, persuade, and
              perform. We design programs around your industry, your culture, and your goals.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link to="/contact" className="btn-primary animate-pulseRed">
                Discuss Corporate Training
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link to="/courses" className="btn-secondary">
                Explore Courses
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="bg-cleanWhite py-20 lg:py-28">
        <div className="container-px">
          <div className="mb-14 max-w-3xl">
            <SectionHeading
              eyebrow="What We Offer"
              title={
                <>
                  Training programs tailored to your <span className="text-brandRed">organization.</span>
                </>
              }
              description="From entry-level teams to senior leadership, we deliver communication training that drives real business outcomes."
            />
          </div>
          <ul className="grid gap-4 sm:grid-cols-2">
            {corporateFeatures.map((feature, i) => (
              <motion.li
                key={feature}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="flex items-center gap-4 rounded-2xl border border-deepBlack/10 bg-softGray p-5"
              >
                <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brandRed text-cleanWhite">
                  <Check className="h-4 w-4" />
                </span>
                <span className="font-medium text-deepBlack">{feature}</span>
              </motion.li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-deepBlack py-20 text-cleanWhite lg:py-28">
        <div className="container-px">
          <div className="mb-14 max-w-3xl">
            <SectionHeading
              dark
              eyebrow="Outcomes That Matter"
              title={
                <>
                  Measurable results, <span className="text-brandRed">not just training hours.</span>
                </>
              }
              description="We track progress and tie every program to outcomes your business can see."
            />
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {outcomes.map((o, i) => (
              <motion.div
                key={o.label}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex flex-col gap-3 rounded-3xl border border-white/10 bg-charcoal p-7"
              >
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-brandRed/15 text-brandRed">
                  <o.Icon className="h-5 w-5" />
                </span>
                <p className="font-display text-3xl font-extrabold text-cleanWhite">{o.value}</p>
                <p className="text-sm text-white/60">{o.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-deepBlack to-[#3a0d00] py-20 text-cleanWhite lg:py-28">
        <div className="container-px">
          <div className="mx-auto max-w-3xl text-center">
            <SectionHeading
              dark
              align="center"
              eyebrow="Get Started"
              title="Let's design your training program."
              description="Tell us about your team and your goals. We'll build a customized proposal within 48 hours."
            />
            <div className="mt-8 flex justify-center">
              <Link to="/contact" className="btn-primary animate-pulseRed">
                Request a Proposal
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
