import type { Config } from '@/types/data';
// import { enUS } from 'date-fns/locale';
import { enUS } from 'date-fns/locale/en-US';
import type { ReadonlyDeep } from 'type-fest';

const config = {
  i18n: {
    locale: enUS,
    dateFormat: 'MMMM yyyy',
    translations: {
      now: 'now',
    },
  },
  meta: {
    title: 'Masoud Hadi',
    description:
      'Masoud Hadi is an M.Sc. student and AI researcher working on reinforcement learning theory, multi-agent learning, and learning in games.',
    faviconPath: '/src/assets/1403-08-11 20.51.29.jpg',
  },
} as const satisfies ReadonlyDeep<Config>;

export default config;
