import { useAppContext } from '@/lib/app.context';

export const useScenario = () => {
  const { scenario } = useAppContext();

  return scenario;
};