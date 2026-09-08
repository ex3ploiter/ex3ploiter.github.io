import type { EducationSection } from '@/types/sections/education-section.types';
import type { ReadonlyDeep } from 'type-fest';
import { website } from '../helpers/links';

const educationSectionData = {
  config: {
    title: 'Education',
    slug: 'education',
    icon: 'fa6-solid:graduation-cap',
    visible: true,
  },
  diplomas: [
    {
      title: 'M.Sc. in Computer Engineering - Artificial Intelligence',
      institution: 'Isfahan University',
      image: import('@/assets/logos/logo_UI.png'),
      dates: [new Date('2024'), null],
      description: '',
      links: [website({ url: 'https://ui.ac.ir/en' })],
    },
    {
      title: 'B.Sc. in Computer Engineering - Intelligent Systems',
      institution: 'Isfahan University of Technology',
      image: import('@/assets/logos/ir.sabapp.IUT_512x512.webp'),
      dates: [new Date('2019'), new Date('2024')],
      description: '',
      links: [website({ url: 'https://english.iut.ac.ir/' })],
    },
  ],
} as const satisfies ReadonlyDeep<EducationSection>;

export default educationSectionData;
