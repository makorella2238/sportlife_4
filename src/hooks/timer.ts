import { useAppContext } from '@/lib/app.context';

export const useTimer = () => {
  const { timer } = useAppContext();

  return timer;
};