import { useAppContext } from '@/lib/app.context';

export const usePerson = () => {
  const { person } = useAppContext();

  return person;
};