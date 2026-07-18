import { motion } from 'framer-motion';
import { CheckCircle2, Target, Eye, Heart, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import SectionHeading from '../components/ui/SectionHeading';
import TrustStats from '../components/home/TrustStats';
import LogoMark from '../components/ui/LogoMark';

const values = [
  {
    Icon: Target,
    title: 'Our Mission',
    description:
      'To help every learner speak with clarity, confidence, and purpose — in any situation life or work demands.',
  },
  {
    Icon: Eye,
    title: 'Our Vision',
    description:
      'A world where communication is no longer a barrier but a bridge — to opportunity, leadership, and connection.',
  },
  {
    Icon: Heart,
    title: 'Our Approach',
    description:
      'Practical, confidence-first, and human. We coach the person, not just the language.',
  },
];

const pillars = [
  'Practical, real-world practice in every session',
  'Expert trainers with years of coaching experience',
  'Personalised feedback and measurable progress',
  'Supportive, judgment-free learning environment',
  'Flexible formats — online, in-person, and hybrid',
  'Programs for students, professionals, and organizations',
];

export default function About() {
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
              About the Academy
            </span>
            <h1 className="mt-4 font-display text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
              We turn hesitant speakers into <span className="text-brandRed">confident communicators.</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/70">
              Premier English Academy exists to help people become confident, effective, and
              professional communicators. Since 2014, we have trained thousands of learners —
              from students stepping into their first interview to executives leading global teams.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="bg-cleanWhite py-20 lg:py-28">
        <div className="container-px grid gap-6 lg:grid-cols-3">
          {values.map((v, i) => (
            <motion.div
              key={v.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex flex-col gap-4 rounded-3xl border border-deepBlack/10 bg-softGray p-8"
            >
              <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-brandRed/10 text-brandRed">
                <v.Icon className="h-6 w-6" />
              </span>
              <h3 className="font-display text-xl font-bold text-deepBlack">{v.title}</h3>
              <p className="text-sm leading-relaxed text-mediumGray">{v.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="bg-softGray py-20 lg:py-28">
        <div className="container-px grid items-center gap-14 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[2rem] border border-deepBlack/10">
              <img
                src="https://images.pexels.com/photos/8617715/pexels-photo-8617715.jpeg?auto=compress&cs=tinysrgb&w=1000"
                alt="Premier English Academy classroom in session"
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="absolute -bottom-6 -right-4 flex items-center gap-3 rounded-2xl border border-deepBlack/10 bg-cleanWhite p-4 shadow-card">
              <LogoMark className="h-12 w-12" />
              <div className="leading-tight">
                <p className="font-display text-base font-extrabold text-deepBlack">10+ Years</p>
                <p className="text-xs text-mediumGray">Of communication coaching</p>
              </div>
            </div>
          </motion.div>
          <div>
            <SectionHeading
              eyebrow="What Sets Us Apart"
              title={
                <>
                  Built on six pillars of <span className="text-brandRed">confident communication.</span>
                </>
              }
              description="Our philosophy is simple: communication is a skill, and skills are built through practice, feedback, and the right guidance."
            />
            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {pillars.map((p, i) => (
                <motion.li
                  key={p}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.4, delay: i * 0.06 }}
                  className="flex items-start gap-3"
                >
                  <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brandRed/10 text-brandRed">
                    <CheckCircle2 className="h-3.5 w-3.5" />
                  </span>
                  <span className="text-sm text-deepBlack">{p}</span>
                </motion.li>
              ))}
            </ul>
            <div className="mt-10">
              <Link to="/contact" className="btn-primary">
                Start Your Journey
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <TrustStats />
    </>
  );
}
