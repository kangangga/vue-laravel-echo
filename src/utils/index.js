export const isFunction = (obj) => typeof obj === "function";

export const isString = (value) => typeof value === "string";

export const isLaravelEcho = (obj) =>
  !!obj && isFunction(obj.on) && isFunction(obj.emit);

export const isSocketIo = (obj) =>
  !!obj && isFunction(obj.on) && isFunction(obj.emit);

export const unwrapIfSingle = (args) =>
  args && args.length <= 1 ? args[0] : args;

export const pipe =
  (...fns) =>
  (x) =>
    fns.reduce((v, f) => f(v), x);

export const prefixWith = (prefix) => (string) => prefix + string;

export const augmentMethod = (obj, methodKey, cb) => {
  const originalFn = obj[methodKey];
  obj[methodKey] = (...args) => {
    originalFn.call(obj, ...args);
    cb(...args);
  };
};

export const log = (...params) => {
  if (process.env.NODE_ENV === "development") {
    console.log(...params);
  }
};
