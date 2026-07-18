import type { Course, CourseCategory } from '../types';

export const courseCategories: (CourseCategory | 'All Courses')[] = [
  'All Courses',
  'Spoken English',
  'Public Speaking',
  'Career Skills',
  'Corporate Training',
];

export const courses: Course[] = [
  {
    id: 1,
    title: 'English for Executives',
    description:
      'Refine boardroom English, executive presence, and high-stakes professional communication.',
    category: 'Corporate Training',
    level: 'Advanced',
    duration: '10 weeks',
    format: 'Live Online + In-person',
    featured: true,
  },
  {
    id: 2,
    title: 'Public Speaking 101',
    description:
      'Overcome stage fear, structure powerful talks, and deliver presentations that move audiences.',
    category: 'Public Speaking',
    level: 'Beginner',
    duration: '6 weeks',
    format: 'Live Online',
  },
  {
    id: 3,
    title: 'Confident Conversations',
    description:
      'Build everyday spoken English fluency for social, academic, and professional settings.',
    category: 'Spoken English',
    level: 'Beginner',
    duration: '8 weeks',
    format: 'Live Online',
  },
  {
    id: 4,
    title: 'Interview Communication Mastery',
    description:
      'Master interview answers, body language, and the confidence that lands the right offer.',
    category: 'Career Skills',
    level: 'Intermediate',
    duration: '4 weeks',
    format: 'Live Online + 1:1 Coaching',
    featured: true,
  },
  {
    id: 5,
    title: 'Business English Essentials',
    description:
      'Emails, meetings, reports, and the professional vocabulary that powers modern workplaces.',
    category: 'Career Skills',
    level: 'Intermediate',
    duration: '8 weeks',
    format: 'Live Online',
  },
  {
    id: 6,
    title: 'Leadership Communication',
    description:
      'Lead with clarity — influence, feedback, difficult conversations, and team alignment.',
    category: 'Career Skills',
    level: 'Advanced',
    duration: '10 weeks',
    format: 'In-person + Live Online',
  },
  {
    id: 7,
    title: 'Accent & Pronunciation Lab',
    description:
      'Neutralise strong accents, sharpen pronunciation, and speak with global clarity.',
    category: 'Spoken English',
    level: 'Intermediate',
    duration: '6 weeks',
    format: 'Live Online',
  },
  {
    id: 8,
    title: 'Corporate Workshop Series',
    description:
      'Customised on-site training programs for teams focused on communication and leadership.',
    category: 'Corporate Training',
    level: 'Intermediate',
    duration: 'Flexible',
    format: 'On-site Workshops',
  },
];
