import type { Stat, ProcessStep } from '../types';

export const stats: Stat[] = [
  { id: 1, value: '10+', label: 'Years of Training Experience', iconName: 'Award' },
  { id: 2, value: '5,000+', label: 'Learners Trained', iconName: 'Users' },
  { id: 3, value: '95%', label: 'Learner Satisfaction', iconName: 'Smile' },
  { id: 4, value: '50+', label: 'Corporate Clients', iconName: 'Building2' },
];

export const processSteps: ProcessStep[] = [
  {
    id: 1,
    step: '01',
    title: 'Assess',
    description:
      'Understand your current communication level, identify gaps, and set clear personal goals.',
  },
  {
    id: 2,
    step: '02',
    title: 'Learn',
    description:
      'Develop practical English and soft-skill techniques through guided, expert-led sessions.',
  },
  {
    id: 3,
    step: '03',
    title: 'Practice',
    description:
      'Apply new skills through real conversations, presentations, and hands-on activities.',
  },
  {
    id: 4,
    step: '04',
    title: 'Grow',
    description:
      'Build long-term confidence for academic, professional, and social situations.',
  },
];

export const corporateFeatures: string[] = [
  'Customized training programs',
  'Group workshops',
  'Presentation and leadership coaching',
  'Progress tracking',
];
