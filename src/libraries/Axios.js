const axiosInstance = {
  get: url => {
    const match = url.match(/^restaurants\/(\d+)/);
    if (match?.length === 2) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          const restaurants: Array = require('../data/restaurants.json');
          const restaurant = restaurants.data.find(
            item => +item.id === +match[1],
          );
          resolve(restaurant);
        }, 1000);
      });
    }
    if (url === 'restaurants') {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(require('../data/restaurants.json'));
        }, 1000);
      });
    }
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
    return new Promise((resolve, reject) => reject('No path available'));
  },
};

export default axiosInstance;
