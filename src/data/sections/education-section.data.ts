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
    // {
    //   title: 'Information Technology',
    //   institution: 'Wrocław University of Science and Technology',
    //   image: import('@/assets/logos/wroclaw-university-of-technology.jpg'),
    //   dates: [new Date('2014.10'), new Date('2016.07')],
    //   description: 'Master degree. Specialization in software development.',
    //   links: [website({ url: '#' })],
    // },
    {
      title: 'Computing Engineering',
      institution: 'Isfahan University of Technology',
      image: import('@/assets/logos/ir.sabapp.IUT_512x512.webp'),
      dates: [new Date('2019'), new Date('2024')],
      description: 'Bachelor of Science in Computer Engineering – Specialization in Intelligent Systems',
      links: [website({ url: 'https://english.iut.ac.ir/' })],
    },
  ],
} as const satisfies ReadonlyDeep<EducationSection>;

export default educationSectionData;
