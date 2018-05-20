export const getItem = (key) => {
  try {
    const item = localStorage.getItem(key);
    if (item === null) {
      return undefined;
    }
    return JSON.parse(item);
  } catch (error) {
    return undefined;
  }
};

export const saveItem = (key, data) => {
  try {
    const item = JSON.stringify(data);
    localStorage.setItem(key, item);
  } catch (error) {
    // should log here
  }
};
