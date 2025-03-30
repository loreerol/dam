import { useMemo } from "react";
import { Asset } from "../../../types";
import { FileType } from "../types";

interface useFilteredDataProps {
  assets: Asset[] | undefined;
  fileType: FileType | undefined;
  searchBy: string;
  showFavorites: boolean;
  favorites: string[];
}

const useFilteredData = ({
  assets,
  fileType,
  searchBy,
  showFavorites,
  favorites,
}: useFilteredDataProps): Asset[] => {
  return useMemo(() => {
    if (!assets?.length) return [];

    return assets.filter((item: Asset) => {
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
  }, [assets, fileType, searchBy, favorites, showFavorites]);
};

export default useFilteredData;
