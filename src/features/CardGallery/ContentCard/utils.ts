export const formatSnakeCase = (text: string) => {
  return text.replace(/\.(\w+)$/, "").replace(/([a-z0-9])([A-Z])/g, "$1 $2");
};

export const getFileExtention = (mimeType: string) => {
  return mimeType.split("/")[1];
};

export const getFileType = (mimeType: string) => {
  return mimeType.split("/")[0];
};

export const formatDate = (inputDate: string) => {
  const date = new Date(inputDate);
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "short",
    day: "numeric",
  };
  return new Intl.DateTimeFormat("en-US", options).format(date);
};
