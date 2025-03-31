import { useInfiniteQuery } from "@tanstack/react-query";
import { getAssets } from "./services";
import { assetQueryKeys } from "./queryKeys";

export const useAssets = () => {
  return useInfiniteQuery({
    queryKey: assetQueryKeys.all(),
    queryFn: ({ pageParam = 0 }) => getAssets(pageParam),
    initialPageParam: 0,
    getNextPageParam: (lastPage) => lastPage.nextPage,
    staleTime: 5 * 60 * 1000,
  });
};
