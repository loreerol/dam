import mockData from "./mockData";

const pageSize = 8;

export const getAssets = async (pageParam: number = 0) => {
  const startIndex = pageParam * pageSize;
  const endIndex = startIndex + pageSize;
  const data = mockData.slice(startIndex, endIndex);
  const nextPage = data.length < pageSize ? null : pageParam + 1;

  await new Promise((resolve) => setTimeout(resolve, 500));

  return { data, nextPage };
};
