import { useMemo } from "react";
import { Asset } from "../../../types";
import { FileType } from "../types";

interface useFilteredDataProps {
  data: Asset[];
  fileType: FileType | undefined;
  searchBy: string;
  showFavorites: boolean;
  favorites: string[];
}

const useFilteredData = ({
  data,
  fileType,
  searchBy,
  showFavorites,
  favorites,
}: useFilteredDataProps): Asset[] => {
  return useMemo(() => {
    if (!data.length) return [];

    return data.filter((item: Asset) => {
      const matchesFileType = fileType
        ? item.mimeType.toLowerCase().startsWith(fileType.toLowerCase())
        : true;
      const matchesSearch = item.fileName
        .toLowerCase()
        .includes(searchBy.toLowerCase());

      const matchesFavorites = showFavorites
        ? favorites.includes(item.id)
        : true;

      return matchesFileType && matchesSearch && matchesFavorites;
    });
  }, [data, fileType, searchBy, favorites, showFavorites]);
};

export default useFilteredData;
