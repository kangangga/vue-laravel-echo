import { log } from "./utils";
import camelCase from "camelcase";

//https://pusher.com/docs/channels/using_channels/connection/#available-states
const phuserStatesName = [
  "failed",
  "connected",
  "connecting",
  "initialized",
  "unavailable",
  "state_change",
];

//https://socket.io/docs/v4/client-socket-instance/#events
const socketIOStatesName = [
  "connect",
  "reconnect",
  "connection",
  "disconnect",
  "connect_error",
  "reconnect_attempt",
];

function bindingEvent(echo, events) {
  events.forEach((event) => {
    let method = camelCase(["on", event]);
    echo[method] = (callback) => {
      connection.bind(event, callback);
    };
  });
}

export default function createBindingEvent(echo, options) {
  if (options.broadcaster == "pusher") {
    const { connection } = echo.connector.pusher;
    echo.on = (eventName, callback) => {
      connection.bind(eventName, callback);
    };

    bindingEvent(echo, phuserStatesName);
  } else if (options.broadcaster == "socket.io") {
    echo.on = (event, callback) => {
      echo.connector.socket.on(event, callback);
    };

    bindingEvent(echo, socketIOStatesName);
  } else if (options.broadcaster == "null") {
    echo.on = (event, callback) => {};
  } else if (typeof options.broadcaster == "function") {
    echo.on = (event, callback) => {};
  }
}
