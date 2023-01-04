import { ASSETS_BASE_URL } from "../config";

export const configuationBase = (appEndpoint: string) => {
  const imagesAssetsUrl = `${ASSETS_BASE_URL}/images/${appEndpoint}`;
  return {
    imagesAssetsUrl,
    resolveImagePath: function (endPoint: string) {
      if (endPoint === "vite.svg") {
        return resolveImagePath(`${ASSETS_BASE_URL}/images`, "vite.svg");
      }
      return resolveImagePath(imagesAssetsUrl, endPoint);
    },
  };
};

const resolveImagePath = (baseUrl: string, endPoint: string) => {
  return `${baseUrl}/${endPoint}`;
};
