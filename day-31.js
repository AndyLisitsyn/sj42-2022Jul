// https://www.codewars.com/kata/534fcca5edb124cfe6000f60/train/javascript

const Singleton = function () {
  if (Singleton.__instance) {
    return Singleton.__instance;
  }
  Singleton.__instance = this;
};

// https://www.codewars.com/kata/588a00ad70720f2cd9000005/train/javascript

class Router {
  constructor() {
    this.routes = new Map();
  }

  bind(url, method, action) {
    this.routes.set(url + ":" + method, action);
  }

  runRequest(url, method) {
    if (!this.routes.has(url + ":" + method)) {
      return "Error 404: Not Found";
    }
    return this.routes.get(url + ":" + method)();
  }
}
