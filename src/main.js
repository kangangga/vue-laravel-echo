import "pusher-js";
import VueEcho from "./VueEcho";
import createMixin from "./createMixin";

function install(app, options) {
  const defaultOptions = {
    broadcaster: "pusher",
    disableStats: true,
    wsPort: 6001,
    wssPort: 6001,
    wsHost: "localhost",
    enabledTransports: ["ws", "flash"],
    auth: {
      headers: {
        "X-App-ID": options.appID || "",
      },
    },
  };

  const echo = new VueEcho({
    ...defaultOptions,
    ...options,
  });

  app.mixin(createMixin(echo));
}

export default { install };
