// @flow

export const getItem = (key: string) => {
  try {
    const item : ?string = localStorage.getItem(key);
    if (item == null) {
      return undefined;
    }
    return JSON.parse(item);
  } catch (error) {
    return undefined;
  }
};

export const saveItem = (key: string, data: any) => {
  try {
    const item = JSON.stringify(data);
    localStorage.setItem(key, item);
  } catch (error) {
    // should log here
  }
};
