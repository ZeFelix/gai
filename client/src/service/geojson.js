import __requestServer from "./api";

export const getGeojson = async id => {
  try {
    const data = await __requestServer({
      method: "GET",
      url: `farms/${id}/geojson`
    });
    return Promise.resolve(data);
  } catch (err) {
    return Promise.reject(err);
  }
};
