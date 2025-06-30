import { useAppContext } from '@/lib/app.context';

export const useMatch = () => {
  const { match } = useAppContext();

  return match;
};