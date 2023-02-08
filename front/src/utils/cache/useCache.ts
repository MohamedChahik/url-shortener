import { isString } from "../type.guards";

export const useCache = () => {
  const setCache = async <TCache>(data: TCache, key: string) => {
    const cache = isString(data) ? data : JSON.stringify(data);
    localStorage.setItem(key, cache);
  };

  const getCache = async (key: string) => {
    const cache = await localStorage.getItem(key);
    if (!cache) return null;

    return JSON.parse(cache);
  };

  const removeCache = async (key: string) => {
    await localStorage.removeItem(key);
  };

  return {
    setCache,
    getCache,
    removeCache,
  };
};
