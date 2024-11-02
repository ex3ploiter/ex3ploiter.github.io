import type { ExperienceSection } from '@/types/sections/experience-section.types';
import type { ReadonlyDeep } from 'type-fest';
import { facebook, github, instagram, linkedin, twitter, website } from '../helpers/links';
import {
  chakraUi,
  csharp,
  dotnet,
  eslint,
  firebase,
  mysql,
  nextJs,
  nx,
  pnpm,
  react,
  reactQuery,
  tailwindCss,
  typescript,
  vue,
} from '../helpers/skills';

const experienceSectionData = {
  config: {
    title: 'Work experience',
    slug: 'experience',
    icon: 'fa6-solid:suitcase',
    visible: true,
  },
  jobs: [
    {
      role: 'Software Engineer Intern',
      company: 'National Iranian Gas Company',
      image: import('@/assets/logos/NIGC.png'),
      dates: [new Date('2020-06'), new Date('2020-08')],
      description: `
        - Enhanced legacy software using C and .NET, resulting in improved efficiency and performance.
        - Utilized asynchronous programming and caching to enhance responsiveness and user experience.
      `,
      tagsList: {
        title: 'Technologies',
        tags: [csharp(), dotnet(), mysql()],
      },
      links: [website({ url: 'https://nigc.ir/' })],
    }
  ],
} as const satisfies ReadonlyDeep<ExperienceSection>;

export default experienceSectionData;
