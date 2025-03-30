import { useQuery } from '@tanstack/react-query';
import { getAssets } from './services';
import { assetQueryKeys } from './queryKeys';

export const useAssets = () => {
  return useQuery({
    queryKey: assetQueryKeys.all(),
    queryFn: getAssets,
    staleTime: 5 * 60 * 1000, 
  });
};