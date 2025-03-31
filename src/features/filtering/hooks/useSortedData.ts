import { useMemo } from "react";
import { Asset } from "../../../types";
import { SortOption } from "../types";

interface useSortedDataProps {
  data: Asset[];
  sortBy: SortOption | undefined;
}

const useSortedData = ({ data, sortBy }: useSortedDataProps) => {
  return useMemo(() => {
    if (!data.length) return [];

    if (sortBy === "Created Date") {
      return [...data].sort(
        (a, b) =>
          new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime(),
      );
    }
    
    if (sortBy === "File Size") {
      return [...data].sort((a, b) => a.fileSize - b.fileSize);
    }

    if (sortBy === "Modified Date") {
      return [...data].sort(
        (a, b) =>
          new Date(a.modifiedAt).getTime() - new Date(b.modifiedAt).getTime(),
      );
    }

    return data;
  }, [data, sortBy]);
};

export default useSortedData;
