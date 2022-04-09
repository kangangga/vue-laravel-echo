import "pusher-js";
import VueEcho from "./VueEcho";
import createMixin from "./createMixin";

const defaultOptions = {
  broadcaster: "pusher",
};

function install(app, options) {
  const auth = options.auth || {};
  const { headers } = auth;
  const echo = new VueEcho({
    ...defaultOptions,
    ...options,
  });

  app.mixin(createMixin(echo));
}

export * as utils from "./utils";

export default { install };
