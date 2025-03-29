export type Asset = {
  id: string;
  fileName: string;
  mimeType: string;
  createdAt: string;
  modifiedAt: string;
  preview: string;
  url: string;
  fileSize: number;
};

export type Filter = "Created Date" | "File Size" | "Modified Date";

export type FileType = "Application" | "Image" | "Video";
