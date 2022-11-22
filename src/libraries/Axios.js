const axiosInstance = {
  get: url => {
    if (url === 'featured') {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(require('../data/featured.json'));
        }, 1000);
      });
    }
    if (url === 'categories') {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(require('../data/categories.json'));
        }, 1000);
      });
    }
    return new Promise();
  },
};

export default axiosInstance;
