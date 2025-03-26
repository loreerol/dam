export const formatSnakeCase = (text: string) => {
  return text.replace(/\.(\w+)$/, "").replace(/([a-z0-9])([A-Z])/g, "$1 $2");
};

export const formatMimeType = (mimeType: string) => {
  return mimeType.split("/")[1];
};
