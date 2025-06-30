import { useAppContext } from '@/lib/app.context';

export const useTable = () => {
  const { table } = useAppContext();

  return table;
};