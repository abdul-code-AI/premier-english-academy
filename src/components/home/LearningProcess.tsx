import { motion } from 'framer-motion';
import { processSteps } from '../../data/stats';
import type { ProcessStep } from '../../types';

export default function LearningProcess() {
  return (
    <section className="relative bg-cleanWhite py-20 lg:py-28">
      <div className="container-px">
        <div className="mb-14 max-w-3xl">
          <span className="eyebrow">
            <span className="inline-block h-px w-6 bg-brandRed" />
            How You Learn
          </span>
          <h2 className="mt-4 font-display text-3xl font-extrabold tracking-tight text-deepBlack sm:text-4xl lg:text-[2.75rem]">
            A clear path from first word to <span className="text-brandRed">lasting confidence.</span>
          </h2>
        </div>

        <div className="relative">
          <div
            className="absolute left-0 top-12 hidden h-px w-full bg-gradient-to-r from-brandRed/40 via-brandRed/20 to-transparent lg:block"
            aria-hidden="true"
          />
          <div
            className="absolute left-6 top-0 h-full w-px bg-gradient-to-b from-brandRed/40 via-brandRed/20 to-transparent lg:hidden"
            aria-hidden="true"
          />

          <ol className="relative grid gap-10 lg:grid-cols-4 lg:gap-6">
            {processSteps.map((step: ProcessStep, i) => (
              <motion.li
                key={step.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className="relative flex gap-5 lg:flex-col lg:gap-0"
              >
                <div className="relative z-10 flex shrink-0 items-center justify-center">
                  <span className="relative inline-flex h-14 w-14 items-center justify-center rounded-full bg-deepBlack text-cleanWhite">
                    <span className="font-display text-base font-extrabold text-brandRed">
                      {step.step}
                    </span>
                    <span className="pointer-events-none absolute inset-0 rounded-full border border-brandRed/40 animate-ringExpand" style={{ animationDelay: `${i * 0.4}s` }} />
                  </span>
                </div>
                <div className="lg:mt-6">
                  <h3 className="font-display text-lg font-bold text-deepBlack">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-mediumGray">
                    {step.description}
                  </p>
                </div>
              </motion.li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
