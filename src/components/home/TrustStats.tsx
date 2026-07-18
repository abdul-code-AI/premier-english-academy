import { motion } from 'framer-motion';
import { Award, Users, Smile, Building2, AudioLines } from 'lucide-react';
import { stats } from '../../data/stats';
import type { Stat } from '../../types';

const iconMap = {
  Award,
  Users,
  Smile,
  Building2,
};

export default function TrustStats() {
  return (
    <section className="relative bg-cleanWhite py-20">
      <div className="container-px">
        <div className="grid grid-cols-2 gap-6 lg:grid-cols-4 lg:gap-8">
          {stats.map((stat: Stat, i) => {
            const Icon = iconMap[stat.iconName];
            return (
              <motion.div
                key={stat.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group relative flex flex-col items-start gap-4 rounded-3xl border border-deepBlack/10 bg-softGray p-6 transition-all duration-300 hover:-translate-y-1 hover:border-brandRed/30 hover:shadow-card sm:p-8"
              >
                <div className="relative">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-deepBlack text-brandRed transition-colors duration-300 group-hover:bg-brandRed group-hover:text-cleanWhite">
                    <Icon className="h-5 w-5" />
                  </span>
                  <span className="pointer-events-none absolute -right-1 -top-1 text-brandRed">
                    <AudioLines className="h-4 w-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  </span>
                </div>
                <div>
                  <p className="font-display text-3xl font-extrabold tracking-tight text-deepBlack sm:text-4xl">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-sm font-medium text-mediumGray">{stat.label}</p>
                </div>
                <div className="mt-2 flex gap-1 opacity-50">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <span
                      key={j}
                      className="voice-bar"
                      style={{ height: `${4 + ((j * 3) % 14)}px` }}
                    />
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
