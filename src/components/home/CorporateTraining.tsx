import { motion } from 'framer-motion';
import { Check, ArrowRight, Building2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import SectionHeading from '../ui/SectionHeading';
import LogoMark from '../ui/LogoMark';
import WaveDecoration from '../ui/WaveDecoration';
import { corporateFeatures } from '../../data/stats';

export default function CorporateTraining() {
  return (
    <section className="relative overflow-hidden bg-deepBlack py-20 text-cleanWhite lg:py-28">
      <div className="bg-grid absolute inset-0 opacity-40" aria-hidden="true" />
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.04]"
        aria-hidden="true"
      >
        <LogoMark className="h-[36rem] w-[36rem]" variant="light" />
      </div>

      <div className="container-px relative">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7 }}
            className="relative aspect-[4/3] overflow-hidden rounded-[2rem] border border-white/10"
          >
            <img
              src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1000"
              alt="Corporate team in a professional training session"
              className="h-full w-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-deepBlack via-deepBlack/40 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between">
              <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-deepBlack/70 px-4 py-3 backdrop-blur-md">
                <Building2 className="h-5 w-5 text-brandRed" />
                <div className="leading-tight">
                  <p className="font-display text-sm font-bold">50+ Corporate Clients</p>
                  <p className="text-xs text-white/60">Across industries</p>
                </div>
              </div>
              <WaveDecoration bars={5} className="h-6" />
            </div>
          </motion.div>

          <div>
            <SectionHeading
              dark
              eyebrow="For Organizations"
              title={
                <>
                  Build a workforce that communicates with <span className="text-brandRed">confidence.</span>
                </>
              }
              description="Equip your teams with the English, presentation, leadership, and workplace communication skills that drive measurable business outcomes. Every program is tailored to your industry, your culture, and your goals."
            />

            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {corporateFeatures.map((feature, i) => (
                <motion.li
                  key={feature}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3"
                >
                  <span className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brandRed text-cleanWhite">
                    <Check className="h-3.5 w-3.5" />
                  </span>
                  <span className="text-sm font-medium text-white/85">{feature}</span>
                </motion.li>
              ))}
            </ul>

            <div className="mt-10">
              <Link to="/corporate-training" className="btn-primary">
                Discuss Corporate Training
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
