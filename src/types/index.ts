export type CourseCategory =
  | 'Spoken English'
  | 'Public Speaking'
  | 'Career Skills'
  | 'Corporate Training';

export type CourseLevel = 'Beginner' | 'Intermediate' | 'Advanced';

export interface Course {
  id: number;
  title: string;
  description: string;
  category: CourseCategory;
  level: CourseLevel;
  duration: string;
  format: string;
  featured?: boolean;
}

export interface Service {
  id: number;
  title: string;
  description: string;
  iconName: 'MessageCircle' | 'Mic2' | 'Users' | 'Briefcase';
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  quote: string;
  image: string;
}

export interface Stat {
  id: number;
  value: string;
  label: string;
  iconName: 'Award' | 'Users' | 'Smile' | 'Building2';
}

export interface ProcessStep {
  id: number;
  step: string;
  title: string;
  description: string;
}

export interface ConsultationPayload {
  fullName: string;
  email: string;
  phone: string;
  interestArea: string;
  learningFormat: string;
  message: string;
}
