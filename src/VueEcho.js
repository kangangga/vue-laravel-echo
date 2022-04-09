import Echo from "laravel-echo";
import camelCase from "camelcase";
import globalEmitter from "./globalEmitter";

export default class VueEcho extends Echo {
  constructor(options) {
    super(options);
    this.events = [];
    this.options = options;
    this.setEvent();
  }

  on(eventName, callback) {
    if (this.options.broadcaster == "pusher") {
      this.connector.pusher.connection.bind(eventName, callback);
    } else if (this.options.broadcaster == "socket.io") {
      this.connector.socket.on(eventName, callback);
    } else if (this.options.broadcaster == "null") {
      globalEmitter.$on(eventName, callback);
    } else if (typeof this.opti$s.broadcaster == "function") {
      globalEmitter.$on(eventName, callback);
    }
  }

  setEvent(events = []) {
    if (this.options.broadcaster == "pusher") {
      this.events = [
        "error",
        "failed",
        "connected",
        "connecting",
        "initialized",
        "unavailable",
        "state_change",
      ];
      this.bindingEvent(this.connector.pusher.connection.bind);
    } else if (this.options.broadcaster == "socket.io") {
      this.events = [
        "connect",
        "reconnect",
        "connection",
        "disconnect",
        "connect_error",
        "reconnect_attempt",
      ];
      this.bindingEvent(this.connector.socket.on);
    }
  }

  bindingEvent(instance) {
    this.events.forEach((event) => {
      let method = camelCase(["on", event]);
      this[method] = (callback) => {
        instance(event, (data) => {
          callback(data);
        });
      };
    });
  }
}
