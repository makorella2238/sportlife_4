import { useAppContext } from '@/lib/app.context';

export const useTeams = () => {
  const { teams } = useAppContext();

  return teams;
};