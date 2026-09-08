import type { MainSection } from '@/types/sections/main-section.types';
import type { ReadonlyDeep } from 'type-fest';
import { github, linkedin, mail, scholar } from '../helpers/links';

const mainSectionData = {
  config: {
    icon: 'fa6-solid:user',
    title: 'Profile',
    slug: 'profile',
    visible: true,
  },
  image: import('@/assets/1403-08-11 20.51.29.jpg'),
  fullName: 'Masoud Hadi',
  role: 'M.Sc. Student in Computer Engineering - Artificial Intelligence',
  description: [
    {
      text: `I am an M.Sc. student in Computer Engineering (Artificial Intelligence) at the University of Isfahan. My current research focuses on scalable learning and equilibrium computation in structured multi-agent systems, particularly on leveraging structural properties of large Markov games to overcome computational bottlenecks.`,
    },
    {
      text: `More broadly, I am interested in developing principled, scalable, and reliable machine learning methods. My interests include reinforcement learning, multi-agent learning, trustworthy machine learning, and generative modeling, with an emphasis on the theoretical and algorithmic foundations of these areas.`,
    },
  ],
  action: {
    label: 'Download CV',
    url: '/cv.pdf',
    downloadedFileName: 'CV-Masoud_Hadi.pdf',
  },
  links: [
    github({ url: 'https://github.com/ex3ploiter' }),
    linkedin({ url: 'https://www.linkedin.com/in/masoud-hadi-a382601b4/' }),
    mail({ url: 'mailto:masoudhadi2001@gmail.com' }),
    scholar({ url: 'https://scholar.google.com/citations?hl=en&authuser=3&user=bs_BDewAAAAJ' }),
  ],
} as const satisfies ReadonlyDeep<MainSection>;

export default mainSectionData;
