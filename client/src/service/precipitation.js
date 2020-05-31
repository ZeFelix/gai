import __requestServer from "./api";

export const getPrecipitations = async () => {
  try {
    const data = await __requestServer({
      method: "GET",
      url: "precipitations"
    });
    return Promise.resolve(data);
  } catch (err) {
    return Promise.reject(err);
  }
};
