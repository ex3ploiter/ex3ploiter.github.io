import type { PortfolioSection } from '@/types/sections/portfolio-section.types';
import type { ReadonlyDeep } from 'type-fest';
import { demo, github, mockups, website } from '../helpers/links';
import {
  chakraUi,
  eslint,
  firebase,
  jest,
  nestJs,
  nextJs,
  nx,
  pnpm,
  postgreSql,
  prettier,
  react,
  sass,
  tailwindCss,
  typescript,
} from '../helpers/skills';

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
      name: 'GS-VTON: Controllable 3D Virtual Try-on with Gaussian Splatting',
      image: import('@/assets/portfolio/GS-VTON-teaser.png'),
      published: 'Preprint 2024',

      authors: [
        { name: "Masoud Hadi", isCorresponding: false,isBold:true,homepageLink:'#' ,isEqual:true},
        { name: "Yukang Cao", isCorresponding: false,isBold:false,homepageLink:'https://yukangcao.github.io/' ,isEqual:true},
        { name: "Liang Pan", isCorresponding: true ,isBold:false,homepageLink:'https://scholar.google.com/citations?user=lSDISOcAAAAJ&hl=zh-CN&oi=ao'},
        { name: "Ziwei Liu", isCorresponding: true ,isBold:false,homepageLink:'https://liuziwei7.github.io/'}
      ],
      paperLinks:[
        {text:'Project Website',url:'https://yukangcao.github.io/GS-VTON/'},
        {text:'Paper',url:'https://arxiv.org/abs/2410.05259'},
        {text:'Code',url:'https://github.com/yukangcao/GS-VTON'},

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
      description:
        '',
      tagsList: {
        // title: 'Technologies',
        title: '',
        // tags: [nextJs(), sass(), pnpm(), eslint(), prettier()],
        tags: [],
      },
      links: [mockups({ url: '#' }), demo({ url: '#' })],
    },

    {
      name: 'RODEO: Robust Out-of-Distribution Detection Via Exposing Adaptive Outliers',
      image: import('@/assets/portfolio/RODEO.png'),
      published: 'ICML 2024',



      authors: [
        { "name": "Hossein Mirzaei", "isCorresponding": false, "isBold": false, "homepageLink": "https://scholar.google.com/citations?user=gISaPsoAAAAJ&hl=en" },
        { "name": "Mohammad Jafari", "isCorresponding": false, "isBold": false, "homepageLink": "https://mohammadjafari80.github.io/" },
        { "name": "Hamid Reza Dehghani", "isCorresponding": false, "isBold": false, "homepageLink": "#" },
        { "name": "Ali Ansari", "isCorresponding": false, "isBold": false, "homepageLink": "https://allliance.github.io/" },
        { "name": "Sepehr Ghobadi", "isCorresponding": false, "isBold": false, "homepageLink": "#" },
        { "name": "Masoud Hadi", "isCorresponding": false, "isBold": true, "homepageLink": "#" },
        { "name": "Arshia Soltani Moakhar", "isCorresponding": false, "isBold": false, "homepageLink": "#" },
        { "name": "Mohammad Azizmalayeri", "isCorresponding": false, "isBold": false, "homepageLink": "#" },
        { "name": "Mahdieh Soleymani Baghshah", "isCorresponding": false, "isBold": false, "homepageLink": "https://scholar.google.com/citations?user=S1U0KlgAAAAJ&hl=en" },
        { "name": "Mohammad Hossein Rohban", "isCorresponding": false, "isBold": false, "homepageLink": "https://scholar.google.com/citations?user=pRyJ6FkAAAAJ&hl=en" }
      ],
      paperLinks: [
        { "text": "Project Website", "url": "https://rohban-lab.github.io/rodeo/" },
        { "text": "Paper", "url": "https://icml.cc/virtual/2024/poster/32673" },
        { "text": "Code", "url": "#" }
      ],


      details: [
      ],
      description:
        '',
      tagsList: {
        // title: 'Technologies',
        title: '',
        // tags: [nextJs(), sass(), pnpm(), eslint(), prettier()],
        tags: [],
      },
      links: [mockups({ url: '#' }), demo({ url: '#' })],
    },


  ],
} as const satisfies ReadonlyDeep<PortfolioSection>;

export default portfolioSectionData;
