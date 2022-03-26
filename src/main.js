import "pusher-js";
import Echo from "laravel-echo";
import VueEcho from "./VueEcho";
import createBindingEvent from "./createBindingEvent";

function install(app, options) {
  const auth = options.auth || {};
  const { headers } = auth;
  const echo = new Echo({
    ...options,
    auth: {
      headers: {
        "X-APP-ID": options.key,
        ...headers,
      },
    },
  });

  app.config.globalProperties.$echo = echo;

  createBindingEvent(echo, options);

  app.mixin(VueEcho(echo));
}

export default { install };
