import { isFunction } from "./utils";

export default (echo) => ({
  created() {
    const exluceEventMethods = ["presence", "private"];
    this.$echo = echo;
    this.$channel = this.$channel || {};
    this.$bindings = this.$bindings || {};
    this.$options.laravelEcho = this.$options.laravelEcho || {};
    const { laravelEcho } = this.$options;

    const registerEvent = (events, channel) => {
      Object.keys(events).forEach(function (event) {
        if (!exluceEventMethods.includes(event)) {
          this.$bindings[channel] = [];
          this.$channel[channel].listen(event, (payload) => {
            if (isFunction(events[event])) {
              events[event].bind(this)(payload);
            }
          });
          this.$bindings[channel].push(event);
        }
      }, this);
    };

    Object.keys(laravelEcho).forEach((channel) => {
      if (channel.startsWith("private:")) {
        this.$channel[channel] = echo.private(channel.replace("private:", ""));
      } else if (channel.startsWith("presence:")) {
        this.$channel[channel] = echo.join(channel.replace("presence:", ""));
      } else {
        this.$channel[channel] = echo.channel(channel);
      }

      echo[channel] = this.$channel[channel];
      registerEvent(laravelEcho[channel], channel);
    });
  },
  beforeDestroy() {
    for (const channel in this.$bindings) {
      if (Object.hasOwnProperty.call(this.$bindings, channel)) {
        let ch = echo.private(channel);
        this.$bindings[channel].forEach((listener) => {
          ch.stopListening(listener);
        });
      }
    }
  },
  destroy() {
    // for (const channel in this.$bindings) {
    //   if (Object.hasOwnProperty.call(this.$bindings, channel)) {
    //     delete this.$bindings[channel];
    //   }
    // }
  },
});
