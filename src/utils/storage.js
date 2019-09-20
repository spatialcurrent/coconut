const { localStorage } = window; // eslint-disable-line

const storage = {
  get (key, defaultValue = '') {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : defaultValue;
  },

  set (key, value) {
    localStorage.setItem(key, JSON.stringify(value));
  },
};

export default storage;
