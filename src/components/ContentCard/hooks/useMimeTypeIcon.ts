import { useMemo } from "react";
import ImageIcon from "@mui/icons-material/Image";
import InsertDriveFileIcon from "@mui/icons-material/InsertDriveFile";
import AudiotrackIcon from "@mui/icons-material/Audiotrack";
import OndemandVideoIcon from "@mui/icons-material/OndemandVideo";
import ArticleIcon from "@mui/icons-material/Article";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";

const useMimeTypeIcon = (mimeType: string) => {
  return useMemo(() => {
    if (mimeType.startsWith("image")) return ImageIcon;
    if (mimeType.startsWith("application")) return InsertDriveFileIcon;
    if (mimeType.startsWith("audio")) return AudiotrackIcon;
    if (mimeType.startsWith("video")) return OndemandVideoIcon;
    if (mimeType.startsWith("text")) return ArticleIcon;
    return HelpOutlineIcon;
  }, [mimeType]);
};

export default useMimeTypeIcon;
