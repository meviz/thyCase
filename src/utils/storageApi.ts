export const StorageApi = {
  getItem: <T>(key: string) => {
    return JSON.parse(localStorage.getItem(key)!) as T;
  },

  setItem: <T>(key: string, value: T) => {
    localStorage.setItem(key, JSON.stringify(value));
  },
};
