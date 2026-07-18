import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Quote, ChevronLeft, ChevronRight, Star } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';
import { testimonials } from '../../data/testimonials';
import type { Testimonial } from '../../types';

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const count = testimonials.length;
  const active = testimonials[index];

  const go = (dir: number) => setIndex((prev) => (prev + dir + count) % count);

  return (
    <section id="testimonials" className="relative bg-softGray py-20 lg:py-28">
      <div className="container-px">
        <div className="mb-12 flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div className="max-w-2xl">
            <SectionHeading
              eyebrow="Voices of Our Graduates"
              title={
                <>
                  Real people. Real <span className="text-brandRed">transformations.</span>
                </>
              }
            />
          </div>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => go(-1)}
              aria-label="Previous testimonial"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-deepBlack/15 bg-cleanWhite text-deepBlack transition hover:border-brandRed hover:bg-brandRed hover:text-cleanWhite"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={() => go(1)}
              aria-label="Next testimonial"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-deepBlack/15 bg-cleanWhite text-deepBlack transition hover:border-brandRed hover:bg-brandRed hover:text-cleanWhite"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        <div className="relative overflow-hidden rounded-[2rem] border border-deepBlack/10 bg-cleanWhite p-8 sm:p-12 lg:p-16">
          <Quote
            className="pointer-events-none absolute right-8 top-8 h-24 w-24 text-brandRed/10"
            aria-hidden="true"
          />
          <AnimatePresence mode="wait">
            <motion.div
              key={active.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="relative grid gap-8 lg:grid-cols-[auto_1fr] lg:items-center"
            >
              <div className="relative mx-auto lg:mx-0">
                <span className="absolute -inset-2 rounded-full border-2 border-brandRed/30 animate-ringExpand" aria-hidden="true" />
                <span className="absolute -inset-1 rounded-full border border-brandRed/40" aria-hidden="true" />
                <img
                  src={active.image}
                  alt={`${active.name}, graduate of Premier English Academy`}
                  className="relative h-24 w-24 rounded-full border-2 border-brandRed object-cover sm:h-28 sm:w-28"
                  loading="lazy"
                />
              </div>
              <div>
                <div className="mb-4 flex items-center gap-1 text-brandRed">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <blockquote className="font-display text-xl font-semibold leading-relaxed text-deepBlack sm:text-2xl">
                  “{active.quote}”
                </blockquote>
                <div className="mt-6 flex flex-col">
                  <span className="font-display text-base font-bold text-deepBlack">{active.name}</span>
                  <span className="text-sm text-mediumGray">{active.role}</span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="mt-10 flex items-center gap-2">
            {testimonials.map((t: Testimonial, i) => (
              <button
                key={t.id}
                type="button"
                onClick={() => setIndex(i)}
                aria-label={`Go to testimonial ${i + 1}`}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === index ? 'w-8 bg-brandRed' : 'w-2 bg-deepBlack/20 hover:bg-deepBlack/40'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
