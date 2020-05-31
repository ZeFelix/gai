import __requestServer from "./api";

export const getFarms = async () => {
  try {
    const data = await __requestServer({
      method: "GET",
      url: "farms"
    });
    return Promise.resolve(data);
  } catch (err) {
    return Promise.reject(err);
  }
};
