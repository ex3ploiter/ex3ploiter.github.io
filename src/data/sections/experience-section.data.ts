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
        // tags: [react(), nextJs(), typescript(), nx(), firebase()],
        tags: [csharp(), dotnet(), mysql()],
      },
      // links: [facebook({ url: '#' }), linkedin({ url: '#' })],
      links: [website({ url: 'https://nigc.ir/' })],
    },
    // {
    //   role: 'React.js developer',
    //   company: 'Facebook',
    //   image: import('@/assets/logos/facebook-logo.png'),
    //   dates: [new Date('2019-04'), new Date('2020-02')],
    //   description: `
    //     - Aenean eget ultricies felis. Pellentesque dictum massa ut tellus eleifend, sed posuere massa mattis.
    //     - Ut posuere massa lacus, eleifend molestie tortor auctor vel.
    //     - Sed sed sollicitudin eros, id ultricies mi. Aliquam sodales elit vel ante tempor, non vehicula nibh facilisis.
    //     - Cras feugiat ultricies maximus. Aliquam tristique ex odio, ac semper urna accumsan a.
    //   `,
    //   tagsList: {
    //     title: 'Technologies',
    //     tags: [react(), reactQuery(), chakraUi(), eslint()],
    //   },
    //   links: [website({ url: '#' }), instagram({ url: '#' })],
    // },
    // {
    //   role: 'Junior front-end developer',
    //   company: 'GitLab',
    //   image: import('@/assets/logos/gitlab-logo.png'),
    //   dates: [new Date('2016-09'), new Date('2019-04')],
    //   description: `
    //     Nulla volutpat justo ante, rhoncus posuere massa egestas in:

    //     - Quisque pellentesque, dolor nec sollicitudin iaculis, sem velit consequat ligula, eget tempus ligula leo et est.
    //     - Maecenas ut elit sit amet nibh maximus condimentum in nec lorem. Pellentesque tincidunt odio vel leo suscipit, in interdum mi gravida.

    //     Donec non vulputate augue 🤓
    //   `,
    //   tagsList: {
    //     title: 'Technologies',
    //     tags: [vue(), tailwindCss(), pnpm()],
    //   },
    //   links: [twitter({ url: '#' }), github({ url: '#' })],
    // },
    ,
  ],
} as const satisfies ReadonlyDeep<ExperienceSection>;

export default experienceSectionData;
