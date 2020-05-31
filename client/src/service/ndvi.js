import __requestServer from "./api";

export const getNvdis = async () => {
  try {
    const data = await __requestServer({
      method: "GET",
      url: "ndvis"
    });
    return Promise.resolve(data);
  } catch (err) {
    return Promise.reject(err);
  }
};
