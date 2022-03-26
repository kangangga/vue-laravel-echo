import { isFunction } from "./utils";

export default (echo) => ({
  created() {
    const bindings = {};
    const exluceEventMethods = ["presence", "private"];
    this.$channel = this.$channel || {};
    this.$options.sockets = this.$options.sockets || {};
    const { sockets } = this.$options;

    const registerEvent = (events, channel) => {
      Object.keys(events).forEach(function (event) {
        if (!exluceEventMethods.includes(event)) {
          bindings[channel] = [];
          this.$channel[channel].listen(event, (payload) => {
            if (isFunction(events[event])) {
              events[event].bind(this)(payload);
            }
          });
          bindings[channel].push(event);
        }
      }, this);
    };

    Object.keys(sockets).forEach((channel) => {
      if (channel.startsWith("private:")) {
        this.$channel[channel] = echo.private(channel.replace("private:", ""));
      } else if (channel.startsWith("presence:")) {
        this.$channel[channel] = echo.join(channel.replace("presence:", ""));
      } else {
        this.$channel[channel] = echo.channel(channel);
      }

      echo[channel] = this.$channel[channel];
      registerEvent(sockets[channel], channel);
    });
  },
  beforeDestroy() {
    for (const channel in bindings) {
      if (Object.hasOwnProperty.call(bindings, channel)) {
        let ch = echo.private(channel);
        bindings[channel].forEach((listener) => {
          ch.stopListening(listener);
        });
      }
    }
  },
  destroy() {},
});
