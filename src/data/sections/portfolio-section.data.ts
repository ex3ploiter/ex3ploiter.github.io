import type { PortfolioSection } from '@/types/sections/portfolio-section.types';
import type { ReadonlyDeep } from 'type-fest';
// import {
//   chakraUi,
//   eslint,
//   firebase,
//   jest,
//   nestJs,
//   nextJs,
//   nx,
//   pnpm,
//   postgreSql,
//   prettier,
//   react,
//   sass,
//   tailwindCss,
//   typescript,
// } from '../helpers/skills';

const portfolioSectionData = {
  config: {
    title: 'Publications',
    slug: 'publications',
    icon: 'fa6-solid:rocket',
    visible: true,
    screenshots: {
      title: 'Screenshots',
      icon: 'fa6-solid:images',
    },
  },
  projects: [
    {
      name: 'DISTIL: Data-Free Inversion of Suspicious Trojan Inputs via Latent Diffusion',
      image: import('@/assets/portfolio/DISTIL-Teaser.png'),
      published: 'ICCV 2025',
      authors: [
        {
          name: 'Hossein Mirzaei',
          isCorresponding: false,
          isBold: false,
          homepageLink: 'https://scholar.google.com/citations?user=gISaPsoAAAAJ&hl=en',
          isEqual: false,
        },
        {
          name: 'Zeinab Sadat Taghavi',
          isCorresponding: false,
          isBold: false,
          homepageLink: 'https://scholar.google.com/citations?hl=en&user=G9So2dEAAAAJ',
          isEqual: false,
        },
        {
          name: 'Sepehr Rezaee',
          isCorresponding: false,
          isBold: false,
          homepageLink: 'https://scholar.google.com/citations?user=kYl9IWkAAAAJ&hl=en',
          isEqual: false,
        },
        {
          name: 'Masoud Hadi',
          isCorresponding: false,
          isBold: true,
          homepageLink: 'https://scholar.google.com/citations?hl=en&user=bs_BDewAAAAJ',
          isEqual: false,
        },
        { name: 'Moein Madadi', isCorresponding: false, isBold: false, homepageLink: '#', isEqual: false },
        {
          name: 'Mackenzie W. Mathis',
          isCorresponding: false,
          isBold: false,
          homepageLink: 'https://scholar.google.com/citations?hl=en&user=IhqY9XgAAAAJ',
          isEqual: false,
        },
      ],
      paperLinks: [
        // { text: 'Project Website', url: '#' },
        {
          text: 'Paper',
          url: 'https://openaccess.thecvf.com/content/ICCV2025/html/Mirzaei_DISTIL_Data-Free_Inversion_of_Suspicious_Trojan_Inputs_via_Latent_Diffusion_ICCV_2025_paper.html',
        },
        { text: 'Code', url: 'https://github.com/AdaptiveMotorControlLab/DISTIL' },
      ],
      details: [],
      description: '',
      tagsList: {
        title: '',
        tags: [],
      },
      links: [],
    },

    {
      name: 'GS-VTON: Controllable 3D Virtual Try-on with Gaussian Splatting',
      image: import('@/assets/portfolio/GS-VTON-teaser.png'),
      published: 'IJCV 2026',

      authors: [
        {
          name: 'Yukang Cao',
          isCorresponding: false,
          isBold: false,
          homepageLink: 'https://scholar.google.com/citations?user=1rIzYQgAAAAJ&hl=en',
          isEqual: true,
        },
        {
          name: 'Masoud Hadi',
          isCorresponding: false,
          isBold: true,
          homepageLink: 'https://scholar.google.com/citations?hl=en&user=bs_BDewAAAAJ',
          isEqual: true,
        },
        {
          name: 'Liang Pan',
          isCorresponding: true,
          isBold: false,
          homepageLink: 'https://scholar.google.com/citations?user=lSDISOcAAAAJ&hl=en',
        },
        {
          name: 'Ziwei Liu',
          isCorresponding: true,
          isBold: false,
          homepageLink: 'https://scholar.google.com/citations?user=lc45xlcAAAAJ&hl=en',
        },
      ],
      paperLinks: [
        { text: 'Project Website', url: 'https://yukangcao.github.io/GS-VTON/' },
        { text: 'Paper', url: 'https://doi.org/10.1007/s11263-026-02805-3' },
        { text: 'Code', url: 'https://github.com/yukangcao/GS-VTON' },
      ],

      // dates: [new Date('2020-03'), null],
      // ,
      details: [
        // { label: 'Team size', value: '1 person' },
        // { label: 'My role', value: ['Front-end Developer', 'Designer'] },
        // { label: 'Company', value: 'None' },
        // { label: 'Category', value: ['Web app', 'Open source'] },
      ],
      pdfDetails: [
        { label: 'Demo', value: 'https://golden-bulls-d73jd7.netlify.app', url: '#' },
        { label: 'Repository', value: 'https://github.com/mark-freeman/golden-bulls', url: '#' },
      ],
      screenshots: [
        { src: import('@/assets/portfolio/project-1-screenshot-1.jpg'), alt: 'First screenshot' },
        { src: import('@/assets/portfolio/project-1-screenshot-2.jpg'), alt: 'Second screenshot' },
        { src: import('@/assets/portfolio/project-1-screenshot-3.jpg'), alt: 'Third screenshot' },
      ],
      // description: '\\* Authors noted with (*) can reorder their names in resumes and on websites.',
      description: '',
      tagsList: {
        // title: 'Technologies',
        title: '',
        // tags: [nextJs(), sass(), pnpm(), eslint(), prettier()],
        tags: [],
      },
      links: [],
    },

    {
      name: 'RODEO: Robust Outlier Detection via Exposing Adaptive Out-of-Distribution Samples',
      image: import('@/assets/portfolio/RODEO.png'),
      published: 'ICML 2024',

      authors: [
        {
          name: 'Hossein Mirzaei',
          isCorresponding: false,
          isBold: false,
          homepageLink: 'https://scholar.google.com/citations?user=gISaPsoAAAAJ&hl=en',
        },
        {
          name: 'Mohammad Jafari',
          isCorresponding: false,
          isBold: false,
          homepageLink: '#',
        },
        { name: 'Hamid Reza Dehbashi', isCorresponding: false, isBold: false, homepageLink: '#' },
        {
          name: 'Ali Ansari',
          isCorresponding: false,
          isBold: false,
          homepageLink: 'https://scholar.google.com/citations?user=kEZ8losAAAAJ&hl=en',
        },
        { name: 'Sepehr Ghobadi', isCorresponding: false, isBold: false, homepageLink: '#' },
        {
          name: 'Masoud Hadi',
          isCorresponding: false,
          isBold: true,
          homepageLink: 'https://scholar.google.com/citations?hl=en&user=bs_BDewAAAAJ',
        },
        {
          name: 'Arshia Soltani Moakhar',
          isCorresponding: false,
          isBold: false,
          homepageLink: 'https://scholar.google.com/citations?user=2H6Wl4MAAAAJ&hl=en',
        },
        {
          name: 'Mohammad Azizmalayeri',
          isCorresponding: false,
          isBold: false,
          homepageLink: 'https://scholar.google.com/citations?user=DkjSgaUAAAAJ&hl=en',
        },
        {
          name: 'Mahdieh Soleymani Baghshah',
          isCorresponding: false,
          isBold: false,
          homepageLink: 'https://scholar.google.com/citations?user=S1U0KlgAAAAJ&hl=en',
        },
        {
          name: 'Mohammad Hossein Rohban',
          isCorresponding: false,
          isBold: false,
          homepageLink: 'https://scholar.google.com/citations?user=pRyJ6FkAAAAJ&hl=en',
        },
      ],
      paperLinks: [
        { text: 'Project Website', url: 'https://rohban-lab.github.io/rodeo/' },
        { text: 'Paper', url: 'https://proceedings.mlr.press/v235/mirzaei24a.html' },
        { text: 'Code', url: '#' },
      ],

      details: [],
      description: '',
      tagsList: {
        // title: 'Technologies',
        title: '',
        // tags: [nextJs(), sass(), pnpm(), eslint(), prettier()],
        tags: [],
      },
      links: [],
    },
  ],
} as const satisfies ReadonlyDeep<PortfolioSection>;

export default portfolioSectionData;
