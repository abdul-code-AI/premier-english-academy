import HeroSection from '../components/home/HeroSection';
import TrustStats from '../components/home/TrustStats';
import ServiceGrid from '../components/home/ServiceGrid';
import AboutSection from '../components/home/AboutSection';
import CourseDiscovery from '../components/home/CourseDiscovery';
import LearningProcess from '../components/home/LearningProcess';
import CorporateTraining from '../components/home/CorporateTraining';
import Testimonials from '../components/home/Testimonials';
import ConsultationForm from '../components/home/ConsultationForm';

export default function Home() {
  return (
    <>
      <HeroSection />
      <TrustStats />
      <ServiceGrid />
      <AboutSection />
      <CourseDiscovery />
      <LearningProcess />
      <CorporateTraining />
      <Testimonials />
      <ConsultationForm />
    </>
  );
}
