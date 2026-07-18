import { motion } from 'framer-motion';
import { MessageCircle, Mic2, Users, Briefcase, ArrowUpRight } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';
import { services } from '../../data/services';
import type { Service } from '../../types';

const iconMap = {
  MessageCircle,
  Mic2,
  Users,
  Briefcase,
};

export default function ServiceGrid() {
  return (
    <section className="relative bg-cleanWhite py-20 lg:py-28">
      <div className="container-px">
        <div className="mb-14 max-w-3xl">
          <SectionHeading
            eyebrow="What We Help You Master"
            title={
              <>
                Skills that turn words into <span className="text-brandRed">influence.</span>
              </>
            }
            description="From everyday conversations to boardroom presentations, our programs build the practical communication muscles that matter most."
          />
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service: Service, i) => {
            const Icon = iconMap[service.iconName];
            return (
              <motion.article
                key={service.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group relative flex flex-col gap-5 overflow-hidden rounded-3xl border border-deepBlack/10 bg-cleanWhite p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-brandRed/40 hover:shadow-redGlowSoft"
              >
                <span
                  className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full border border-brandRed/10 transition-transform duration-500 group-hover:scale-125"
                  aria-hidden="true"
                />
                <div className="relative inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-brandRed/10 text-brandRed transition-colors duration-300 group-hover:bg-brandRed group-hover:text-cleanWhite">
                  <Icon className="h-6 w-6" />
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="font-display text-lg font-bold text-deepBlack">{service.title}</h3>
                  <p className="text-sm leading-relaxed text-mediumGray">{service.description}</p>
                </div>
                <a
                  href="#courses"
                  className="mt-auto inline-flex items-center gap-1 text-sm font-semibold text-deepBlack transition-colors group-hover:text-brandRed"
                >
                  Learn More
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
