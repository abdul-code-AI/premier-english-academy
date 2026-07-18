import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, AlertCircle, ArrowRight } from 'lucide-react';
import { supabase, isSupabaseConfigured } from '../../lib/supabaseClient';
import WaveDecoration from '../ui/WaveDecoration';

const schema = z.object({
  fullName: z.string().min(2, 'Please enter your full name'),
  email: z.string().email('Please enter a valid email address'),
  phone: z
    .string()
    .min(7, 'Please enter a valid phone number')
    .regex(/^[+]?[\d\s()-]{7,}$/, 'Please enter a valid phone number'),
  interestArea: z.string().min(1, 'Please select an interest area'),
  learningFormat: z.string().min(1, 'Please select a preferred format'),
  message: z.string().max(500, 'Message is too long'),
});

type FormValues = z.infer<typeof schema>;

const interestOptions = [
  'Spoken English',
  'Public Speaking',
  'Interview Skills',
  'Business Etiquette',
  'Leadership Communication',
  'Corporate Training',
];

const formatOptions = ['Live Online', 'In-person', 'Hybrid', '1:1 Coaching'];

export default function ConsultationForm() {
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      fullName: '',
      email: '',
      phone: '',
      interestArea: '',
      learningFormat: '',
      message: '',
    },
  });

  const onSubmit = async (values: FormValues) => {
    setSubmitError(null);
    try {
      if (supabase && isSupabaseConfigured) {
        const { error } = await supabase.from('consultations').insert({
          full_name: values.fullName,
          email: values.email,
          phone: values.phone,
          interest_area: values.interestArea,
          learning_format: values.learningFormat,
          message: values.message,
        });
        if (error) throw error;
      } else {
        await new Promise((r) => setTimeout(r, 1200));
      }
      setSubmitted(true);
      reset();
    } catch (err) {
      setSubmitError(
        err instanceof Error ? err.message : 'Something went wrong. Please try again.'
      );
    }
  };

  const inputBase =
    'w-full rounded-xl border bg-cleanWhite px-4 py-3 text-sm text-deepBlack placeholder-mediumGray/60 outline-none transition focus:border-brandRed focus:ring-2 focus:ring-brandRed/20';
  const inputBorder = (hasError: boolean) =>
    hasError ? 'border-brandRed' : 'border-deepBlack/15';

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-gradient-to-br from-deepBlack via-deepBlack to-[#3a0d00] py-20 text-cleanWhite lg:py-28"
    >
      <div className="bg-grid absolute inset-0 opacity-30" aria-hidden="true" />
      <div
        className="pointer-events-none absolute -left-20 top-1/3 h-80 w-80 rounded-full bg-brandRed/20 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -right-20 bottom-10 h-72 w-72 rounded-full bg-brandRed/10 blur-3xl"
        aria-hidden="true"
      />

      <div className="container-px relative grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
        >
          <span className="eyebrow">
            <WaveDecoration bars={4} className="h-4" />
            Free Consultation
          </span>
          <h2 className="mt-4 font-display text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
            Ready to Speak With <span className="text-brandRed">Confidence?</span>
          </h2>
          <p className="mt-5 max-w-md text-base leading-relaxed text-white/70">
            Book a free consultation and discover the right communication program for your goals.
            Our advisors will help you choose a path that fits your level, schedule, and ambitions.
          </p>

          <ul className="mt-8 flex flex-col gap-3 text-sm text-white/80">
            {[
              'Personalised program recommendation',
              'No obligation, completely free',
              'Available online and in-person',
            ].map((item) => (
              <li key={item} className="flex items-center gap-3">
                <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-brandRed/15 text-brandRed">
                  <CheckCircle2 className="h-3.5 w-3.5" />
                </span>
                {item}
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="relative rounded-[2rem] border border-white/10 bg-cleanWhite/5 p-6 backdrop-blur-md sm:p-8"
        >
          <AnimatePresence mode="wait">
            {submitted ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="flex flex-col items-center gap-4 py-16 text-center"
              >
                <span className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-brandRed text-cleanWhite">
                  <CheckCircle2 className="h-8 w-8" />
                </span>
                <h3 className="font-display text-2xl font-bold text-cleanWhite">Request received!</h3>
                <p className="max-w-sm text-sm text-white/70">
                  Thank you for reaching out. One of our advisors will contact you within 24 hours
                  to schedule your free consultation.
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="mt-2 inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-2.5 text-sm font-semibold text-cleanWhite transition hover:border-brandRed hover:text-brandRed"
                >
                  Submit another request
                </button>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onSubmit={handleSubmit(onSubmit)}
                noValidate
                className="flex flex-col gap-4"
              >
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor="fullName" className="mb-1.5 block text-xs font-semibold text-white/80">
                      Full name
                    </label>
                    <input
                      id="fullName"
                      type="text"
                      placeholder="Your name"
                      aria-invalid={!!errors.fullName}
                      className={`${inputBase} ${inputBorder(!!errors.fullName)}`}
                      {...register('fullName')}
                    />
                    {errors.fullName && (
                      <p className="mt-1 flex items-center gap-1 text-xs text-brandRed">
                        <AlertCircle className="h-3 w-3" />
                        {errors.fullName.message}
                      </p>
                    )}
                  </div>
                  <div>
                    <label htmlFor="email" className="mb-1.5 block text-xs font-semibold text-white/80">
                      Email address
                    </label>
                    <input
                      id="email"
                      type="email"
                      placeholder="you@email.com"
                      aria-invalid={!!errors.email}
                      className={`${inputBase} ${inputBorder(!!errors.email)}`}
                      {...register('email')}
                    />
                    {errors.email && (
                      <p className="mt-1 flex items-center gap-1 text-xs text-brandRed">
                        <AlertCircle className="h-3 w-3" />
                        {errors.email.message}
                      </p>
                    )}
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor="phone" className="mb-1.5 block text-xs font-semibold text-white/80">
                      Phone number
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      placeholder="+91 90000 00000"
                      aria-invalid={!!errors.phone}
                      className={`${inputBase} ${inputBorder(!!errors.phone)}`}
                      {...register('phone')}
                    />
                    {errors.phone && (
                      <p className="mt-1 flex items-center gap-1 text-xs text-brandRed">
                        <AlertCircle className="h-3 w-3" />
                        {errors.phone.message}
                      </p>
                    )}
                  </div>
                  <div>
                    <label htmlFor="interestArea" className="mb-1.5 block text-xs font-semibold text-white/80">
                      Interest area
                    </label>
                    <select
                      id="interestArea"
                      aria-invalid={!!errors.interestArea}
                      className={`${inputBase} ${inputBorder(!!errors.interestArea)}`}
                      {...register('interestArea')}
                    >
                      <option value="">Select an area</option>
                      {interestOptions.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                    {errors.interestArea && (
                      <p className="mt-1 flex items-center gap-1 text-xs text-brandRed">
                        <AlertCircle className="h-3 w-3" />
                        {errors.interestArea.message}
                      </p>
                    )}
                  </div>
                </div>

                <div>
                  <label htmlFor="learningFormat" className="mb-1.5 block text-xs font-semibold text-white/80">
                    Preferred learning format
                  </label>
                  <select
                    id="learningFormat"
                    aria-invalid={!!errors.learningFormat}
                    className={`${inputBase} ${inputBorder(!!errors.learningFormat)}`}
                    {...register('learningFormat')}
                  >
                    <option value="">Select a format</option>
                    {formatOptions.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                  {errors.learningFormat && (
                    <p className="mt-1 flex items-center gap-1 text-xs text-brandRed">
                      <AlertCircle className="h-3 w-3" />
                      {errors.learningFormat.message}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="message" className="mb-1.5 block text-xs font-semibold text-white/80">
                    Message <span className="text-white/40">(optional)</span>
                  </label>
                  <textarea
                    id="message"
                    rows={3}
                    placeholder="Tell us about your goals..."
                    className={`${inputBase} ${inputBorder(!!errors.message)} resize-none`}
                    {...register('message')}
                  />
                  {errors.message && (
                    <p className="mt-1 flex items-center gap-1 text-xs text-brandRed">
                      <AlertCircle className="h-3 w-3" />
                      {errors.message.message}
                    </p>
                  )}
                </div>

                {submitError && (
                  <p className="flex items-center gap-2 rounded-xl border border-brandRed/30 bg-brandRed/10 px-4 py-3 text-xs text-brandRed">
                    <AlertCircle className="h-4 w-4" />
                    {submitError}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="group inline-flex items-center justify-center gap-3 rounded-full bg-brandRed px-6 py-4 text-sm font-semibold text-cleanWhite transition-all duration-300 hover:bg-brandRedDark hover:shadow-redGlow disabled:cursor-not-allowed disabled:opacity-70"
                >
                  {isSubmitting ? (
                    <>
                      <WaveDecoration bars={5} className="h-4" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Book My Free Consultation
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                    </>
                  )}
                </button>

                <p className="text-center text-xs text-white/40">
                  By submitting, you agree to be contacted about Premier English Academy programs.
                </p>
              </motion.form>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
