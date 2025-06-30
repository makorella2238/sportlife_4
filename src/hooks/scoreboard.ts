import { useAppContext } from '@/lib/app.context';

export const useScoreboard = () => {
  const { scoreboard } = useAppContext();

  return { scoreboard };
};