import { useRouter } from 'next/router';
import { en } from '../../locales/en';
import { ru } from '../../locales/ru';

export const useTranslation = () => {
  const router = useRouter();

  const t = router.locale === 'en' ? en : ru;

  return { t };
};
