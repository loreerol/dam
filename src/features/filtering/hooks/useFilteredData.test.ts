import { renderHook } from "@testing-library/react";
import useFilteredData from "../hooks/useFilteredData";
import { Asset } from "../../../types";

// TO DO: Sanitise the data being used, it should be more generic

const mockAssets: Asset[] = [
  {
    id: "1",
    fileName: "IpsumPrimisIn.jpeg",
    mimeType: "image/pjpeg",
    createdAt: "11/3/2024",
    modifiedAt: "10/5/2024",
    preview: "http://dummyimage.com/181x100.png/dddddd/000000",
    url: "https://localhost:3000/IpsumPrimisIn.jpeg",
    fileSize: 986.58,
  },
  {
    id: "2",
    fileName: "Purus.mpeg",
    mimeType: "video/mpeg",
    createdAt: "11/12/2024",
    modifiedAt: "10/3/2024",
    preview: "http://dummyimage.com/138x100.png/ff4444/ffffff",
    url: "https://localhost:3000/Purus.mpeg",
    fileSize: 518.06,
  },
  {
    id: "3",
    fileName: "EtIpsum.doc",
    mimeType: "application/msword",
    createdAt: "5/21/2024",
    modifiedAt: "4/3/2024",
    preview: "http://dummyimage.com/188x100.png/cc0000/ffffff",
    url: "https://localhost:3000/Ipsum.doc",
    fileSize: 791.86,
  },
  {
    id: "4",
    fileName: "EtEros.png",
    mimeType: "image/png",
    createdAt: "9/19/2024",
    modifiedAt: "5/18/2024",
    preview: "http://dummyimage.com/215x100.png/cc0000/ffffff",
    url: "https://localhost:3000/EtEros.png",
    fileSize: 374.15,
  },
];

describe("useFilteredData", () => {
  it("returns all assets when no filters are applied", () => {
    const { result } = renderHook(() =>
      useFilteredData({
        assets: mockAssets,
        fileType: undefined,
        searchBy: "",
        showFavorites: false,
        favorites: [],
      })
    );
    expect(result.current).toEqual(mockAssets);
  });

  it("filters by file type", () => {
    const { result } = renderHook(() =>
      useFilteredData({
        assets: mockAssets,
        fileType: "Image",
        searchBy: "",
        showFavorites: false,
        favorites: [],
      })
    );
    expect(result.current).toEqual([
      expect.objectContaining({
        id: "1",
        mimeType: "image/pjpeg",
      }),
      expect.objectContaining({
        id: "4",
        mimeType: "image/png",
      }),
    ]);
  });

  it("filters by search term", () => {
    const { result } = renderHook(() =>
      useFilteredData({
        assets: mockAssets,
        fileType: undefined,
        searchBy: "Purus",
        showFavorites: false,
        favorites: [],
      })
    );
    expect(result.current).toEqual([
      expect.objectContaining({
        id: "2",
        fileName: "Purus.mpeg",
      }),
    ]);
  });

  it("filters by favorites", () => {
    const { result } = renderHook(() =>
      useFilteredData({
        assets: mockAssets,
        fileType: undefined,
        searchBy: "",
        showFavorites: true,
        favorites: ["1", "3"],
      })
    );
    expect(result.current).toEqual([
      expect.objectContaining({ id: "1" }),
      expect.objectContaining({ id: "3" }),
    ]);
  });

  it("applies multiple filters together", () => {
    const { result } = renderHook(() =>
      useFilteredData({
        assets: mockAssets,
        fileType: "Image",
        searchBy: "Et",
        showFavorites: true,
        favorites: ["4", "2"],
      })
    );
    expect(result.current).toEqual([
      expect.objectContaining({
        id: "4",
        fileName: "EtEros.png",
        mimeType: "image/png",
      }),
    ]);
  });
});
