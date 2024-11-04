import type { MainSection } from '@/types/sections/main-section.types';
import type { ReadonlyDeep } from 'type-fest';
// import { facebook, github, linkedin, mail, twitter } from '../helpers/links';
import { github, linkedin, mail,scholar } from '../helpers/links';

const mainSectionData = {
  config: {
    icon: 'fa6-solid:user',
    title: 'Profile',
    slug: 'profile',
    visible: true,
  },
  image: import('@/assets/1403-08-11 20.51.29.jpg'),
  fullName: 'Masoud Hadi',
  // role: 'Senior React Developer',
  // details: [
  //   { label: 'Phone', value: '605 475 6961', url: 'tel:605 475 6961' },
  //   { label: 'Email', value: 'mark.freeman.dev@gmail.com', url: 'mailto:mark.freeman.dev@gmail.com' },
  //   { label: 'From', value: 'Warsaw, Poland' },
  //   { label: 'Salary range', value: '18 000 - 25 000 PLN' },
  // ],
  // pdfDetails: [
  //   { label: 'Phone', value: '605 475 6961' },
  //   { label: 'Email', value: 'mark.freeman.dev@gmail.com' },
  //   { label: 'LinkedIn', value: '/in/mark-freeman', url: 'https://linkedin.com' },
  //   { label: 'GitHub', value: '/mark-freeman', url: 'https://github.com' },
  //   { label: 'Website', value: 'mark-freeman-personal-website.com', url: '/', fullRow: true },
  // ],
  description: [
    {
      text: 'I graduated with a Bachelor of Science in Computer Engineering, specializing in Intelligent Systems,\
      from Isfahan University of Technology. During my studies, I worked with [Prof. Ziwei Liu](https://liuziwei7.github.io/) and [Dr. Yukang Cao](https://yukangcao.github.io/) on generative models and 2D/3D editing. I also researched adversarial robustness and outlier detection with [Prof. Mohammad Hossein Rohban](https://scholar.google.com/citations?user=pRyJ6FkAAAAJ&hl=en), and explored GNN-based community detection under the guidance of [Prof. Abdolreza Mirzaei](https://scholar.google.com/citations?user=4t4LRdoAAAAJ&hl=en).',
    },
    {
      text: 'My primary research interests include generative models for both 2D (image/video) and 3D applications, as well as 3D scene understanding and learning.',
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
