import { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { Clock, MonitorPlay, Star, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import SectionHeading from '../components/ui/SectionHeading';
import Badge from '../components/ui/Badge';
import { courses, courseCategories } from '../data/courses';
import type { Course, CourseCategory } from '../types';

const levelStyles: Record<string, string> = {
  Beginner: 'bg-emerald-500/15 text-emerald-600 border-emerald-500/30',
  Intermediate: 'bg-amber-500/15 text-amber-600 border-amber-500/30',
  Advanced: 'bg-brandRed/15 text-brandRed border-brandRed/30',
};

export default function Courses() {
  const [active, setActive] = useState<CourseCategory | 'All Courses'>('All Courses');

  const filtered = useMemo(() => {
    if (active === 'All Courses') return courses;
    return courses.filter((c) => c.category === active);
  }, [active]);

  return (
    <>
      <section className="relative overflow-hidden bg-deepBlack py-32 text-cleanWhite lg:py-40">
        <div className="bg-grid absolute inset-0 opacity-40" aria-hidden="true" />
        <div className="container-px relative">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <span className="eyebrow">
              <span className="inline-block h-px w-6 bg-brandRed" />
              Our Courses
            </span>
            <h1 className="mt-4 font-display text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
              Programs designed for every <span className="text-brandRed">communicator.</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/70">
              From building everyday fluency to leading high-stakes presentations, our courses
              meet you where you are and take you where you want to go.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="bg-cleanWhite py-20 lg:py-28">
        <div className="container-px">
          <div className="mb-10 flex flex-wrap gap-2">
            {courseCategories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActive(cat)}
                className={`rounded-full border px-4 py-2 text-sm font-medium transition-all duration-200 ${
                  active === cat
                    ? 'border-brandRed bg-brandRed text-cleanWhite'
                    : 'border-deepBlack/15 bg-cleanWhite text-deepBlack hover:border-brandRed/50 hover:text-brandRed'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filtered.map((course: Course, i) => (
              <motion.article
                key={course.id}
                layout
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="group relative flex flex-col overflow-hidden rounded-3xl border border-deepBlack/10 bg-cleanWhite p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-brandRed/40 hover:shadow-redGlowSoft"
              >
                <span
                  className="absolute left-0 top-7 h-12 w-1 rounded-r-full bg-brandRed transition-all duration-300 group-hover:h-20"
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
                <h3 className="mb-2 font-display text-xl font-bold text-deepBlack">{course.title}</h3>
                <p className="mb-6 text-sm leading-relaxed text-mediumGray">{course.description}</p>
                <div className="mt-auto flex flex-col gap-4">
                  <div className="flex flex-wrap items-center gap-3 text-xs text-mediumGray">
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
                    className="inline-flex items-center justify-between rounded-full border border-deepBlack/15 px-4 py-2.5 text-sm font-semibold text-deepBlack transition-all duration-300 hover:border-brandRed hover:bg-brandRed hover:text-cleanWhite"
                  >
                    View Course
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>

          <div className="mt-16 rounded-[2rem] bg-deepBlack p-10 text-center text-cleanWhite sm:p-14">
            <SectionHeading
              dark
              align="center"
              eyebrow="Not Sure Which Course?"
              title="Book a free consultation."
              description="Our advisors will help you choose the right program based on your goals, level, and schedule."
            />
            <div className="mt-8 flex justify-center">
              <Link to="/contact" className="btn-primary">
                Book a Free Consultation
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
