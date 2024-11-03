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
    description: '',
    faviconPath: '/src/assets/1403-08-11 20.51.29.jpg',
  },
  pdf: {
    footer:
      'I hereby give consent for my personal data included in my application to be processed for the purposes of the recruitment process.',
  },
} as const satisfies ReadonlyDeep<Config>;

export default config;
