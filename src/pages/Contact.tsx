import ConsultationForm from '../components/home/ConsultationForm';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import { motion } from 'framer-motion';

const contactInfo = [
  { Icon: Mail, label: 'Email', value: 'hello@premierenglishacademy.com' },
  { Icon: Phone, label: 'Phone', value: '+91 90000 00000' },
  { Icon: MapPin, label: 'Location', value: 'Bengaluru · Online · On-site' },
  { Icon: Clock, label: 'Hours', value: 'Mon–Sat, 9 AM – 7 PM IST' },
];

export default function Contact() {
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
              Contact Us
            </span>
            <h1 className="mt-4 font-display text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
              Let's start a <span className="text-brandRed">conversation.</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/70">
              Whether you're an individual learner or an organization, we're here to help you
              communicate with confidence. Reach out — we usually respond within 24 hours.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="bg-cleanWhite py-20 lg:py-28">
        <div className="container-px">
          <div className="mb-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {contactInfo.map((info, i) => (
              <motion.div
                key={info.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="flex flex-col gap-3 rounded-2xl border border-deepBlack/10 bg-softGray p-6"
              >
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-brandRed/10 text-brandRed">
                  <info.Icon className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-mediumGray">
                    {info.label}
                  </p>
                  <p className="mt-1 text-sm font-medium text-deepBlack">{info.value}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <ConsultationForm />
    </>
  );
}
