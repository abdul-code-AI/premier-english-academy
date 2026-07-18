import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import SectionHeading from '../ui/SectionHeading';
import LogoMark from '../ui/LogoMark';

const benefits = [
  {
    title: 'Practical learning',
    description: 'Real conversations, live practice, and feedback that sticks.',
  },
  {
    title: 'Expert guidance',
    description: 'Trainers with years of communication coaching experience.',
  },
  {
    title: 'Measurable confidence',
    description: 'Track progress with assessments and visible milestones.',
  },
];

export default function AboutSection() {
  return (
    <section className="relative overflow-hidden bg-softGray py-20 lg:py-28">
      <div className="container-px">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative aspect-[4/5] w-full max-w-md overflow-hidden rounded-[2rem] border border-deepBlack/10">
              <img
                src="https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg?auto=compress&cs=tinysrgb&w=900"
                alt="Trainer coaching a learner in a communication session"
                className="h-full w-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-deepBlack/30 to-transparent" />
            </div>

            <div
              className="pointer-events-none absolute -left-6 -top-6 h-32 w-32 rounded-full border-2 border-brandRed/30"
              aria-hidden="true"
            />
            <div
              className="pointer-events-none absolute -bottom-8 -right-4 h-40 w-40 rounded-full border border-deepBlack/10"
              aria-hidden="true"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="absolute -bottom-6 left-6 flex items-center gap-3 rounded-2xl border border-deepBlack/10 bg-cleanWhite p-3 pr-5 shadow-card"
            >
              <LogoMark className="h-12 w-12" />
              <div className="leading-tight">
                <p className="font-display text-sm font-extrabold text-deepBlack">Since 2014</p>
                <p className="text-xs text-mediumGray">Trusted communication training</p>
              </div>
            </motion.div>
          </motion.div>

          <div>
            <SectionHeading
              eyebrow="Why Premier English Academy?"
              title={
                <>
                  Communication is more than <span className="text-brandRed">words.</span>
                </>
              }
              description="We believe communication is the bridge between potential and opportunity. Our practical, confidence-first approach helps you find your voice — not just the right vocabulary. Every session is designed to make you a clearer, more confident, and more persuasive communicator in the situations that matter to you."
            />

            <ul className="mt-8 flex flex-col gap-4">
              {benefits.map((b, i) => (
                <motion.li
                  key={b.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.5, delay: 0.1 * i }}
                  className="flex items-start gap-4"
                >
                  <span className="mt-0.5 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-brandRed/10 text-brandRed">
                    <CheckCircle2 className="h-4 w-4" />
                  </span>
                  <div>
                    <p className="font-display text-base font-bold text-deepBlack">{b.title}</p>
                    <p className="text-sm text-mediumGray">{b.description}</p>
                  </div>
                </motion.li>
              ))}
            </ul>

            <div className="mt-10">
              <Link to="/about" className="btn-primary">
                Learn More About Us
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
