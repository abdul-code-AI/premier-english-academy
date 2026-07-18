import { useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Clock, MonitorPlay, Star, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import SectionHeading from '../ui/SectionHeading';
import Badge from '../ui/Badge';
import { courses, courseCategories } from '../../data/courses';
import type { Course, CourseCategory } from '../../types';

const levelStyles: Record<string, string> = {
  Beginner: 'bg-emerald-500/15 text-emerald-400 border-emerald-500/30',
  Intermediate: 'bg-amber-500/15 text-amber-400 border-amber-500/30',
  Advanced: 'bg-brandRed/15 text-brandRed border-brandRed/30',
};

export default function CourseDiscovery() {
  const [active, setActive] = useState<CourseCategory | 'All Courses'>('All Courses');

  const filtered = useMemo(() => {
    if (active === 'All Courses') return courses;
    return courses.filter((c) => c.category === active);
  }, [active]);

  return (
    <section id="courses" className="relative overflow-hidden bg-deepBlack py-20 text-cleanWhite lg:py-28">
      <div className="bg-grid absolute inset-0 opacity-40" aria-hidden="true" />
      <div
        className="pointer-events-none absolute -right-32 top-1/4 h-96 w-96 rounded-full border border-brandRed/15"
        aria-hidden="true"
      />

      <div className="container-px relative">
        <div className="mb-12 max-w-3xl">
          <SectionHeading
            dark
            eyebrow="Find Your Path"
            title={
              <>
                Find the Right Course for <span className="text-brandRed">Your Goals.</span>
              </>
            }
            description="Filter by category to discover programs designed for every stage of your communication journey."
          />
        </div>

        <div className="mb-10 flex flex-wrap gap-2">
          {courseCategories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActive(cat)}
              className={`rounded-full border px-4 py-2 text-sm font-medium transition-all duration-200 ${
                active === cat
                  ? 'border-brandRed bg-brandRed text-cleanWhite'
                  : 'border-white/15 bg-white/5 text-white/70 hover:border-brandRed/50 hover:text-cleanWhite'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filtered.map((course: Course) => (
              <motion.article
                key={course.id}
                layout
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4, ease: [0.21, 0.5, 0.3, 1] as const }}
                className="group relative flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-charcoal p-6 transition-all duration-300 hover:-translate-y-1 hover:border-brandRed/40"
              >
                <span
                  className="absolute left-0 top-6 h-12 w-1 rounded-r-full bg-brandRed transition-all duration-300 group-hover:h-20"
                  aria-hidden="true"
                />
                <div className="mb-4 flex items-center justify-between">
                  <Badge variant="red">{course.category}</Badge>
                  {course.featured && (
                    <span className="inline-flex items-center gap-1 text-xs font-semibold text-brandRed">
                      <Star className="h-3.5 w-3.5 fill-current" />
                      Featured
                    </span>
                  )}
                </div>
                <h3 className="mb-2 font-display text-xl font-bold text-cleanWhite">
                  {course.title}
                </h3>
                <p className="mb-5 text-sm leading-relaxed text-white/60">
                  {course.description}
                </p>

                <div className="mt-auto flex flex-col gap-4">
                  <div className="flex flex-wrap items-center gap-3 text-xs text-white/60">
                    <span
                      className={`rounded-full border px-2.5 py-1 font-semibold ${levelStyles[course.level]}`}
                    >
                      {course.level}
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <Clock className="h-3.5 w-3.5 text-brandRed" />
                      {course.duration}
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <MonitorPlay className="h-3.5 w-3.5 text-brandRed" />
                      {course.format}
                    </span>
                  </div>
                  <Link
                    to="/contact"
                    className="inline-flex items-center justify-between rounded-full border border-white/15 px-4 py-2.5 text-sm font-semibold text-cleanWhite transition-all duration-300 hover:border-brandRed hover:bg-brandRed"
                  >
                    View Course
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
