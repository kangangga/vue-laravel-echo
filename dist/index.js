require("pusher-js");
var $df5CK$laravelecho = require("laravel-echo");
var $df5CK$camelcase = require("camelcase");

function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}
function $parcel$defineInteropFlag(a) {
  Object.defineProperty(a, '__esModule', {value: true, configurable: true});
}
function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

$parcel$defineInteropFlag(module.exports);

$parcel$export(module.exports, "default", () => $95930220612465e5$export$2e2bcd8739ae039);


const $76d7ee1550ea5c75$export$f6e2535fb5126e54 = (obj)=>typeof obj === "function"
;
const $76d7ee1550ea5c75$export$844ec244b1367d54 = (value)=>typeof value === "string"
;
const $76d7ee1550ea5c75$export$9d3a618bd5e08712 = (obj)=>!!obj && $76d7ee1550ea5c75$export$f6e2535fb5126e54(obj.on) && $76d7ee1550ea5c75$export$f6e2535fb5126e54(obj.emit)
;
const $76d7ee1550ea5c75$export$d6a5f2567c00605 = (obj)=>!!obj && $76d7ee1550ea5c75$export$f6e2535fb5126e54(obj.on) && $76d7ee1550ea5c75$export$f6e2535fb5126e54(obj.emit)
;
const $76d7ee1550ea5c75$export$51c60c1cff745357 = (args)=>args && args.length <= 1 ? args[0] : args
;
const $76d7ee1550ea5c75$export$a4627e546088548d = (...fns)=>(x)=>fns.reduce((v, f)=>f(v)
        , x)
;
const $76d7ee1550ea5c75$export$33dde070747c7f6d = (prefix)=>(string)=>prefix + string
;
const $76d7ee1550ea5c75$export$accf2b169309c101 = (obj, methodKey, cb)=>{
    const originalFn = obj[methodKey];
    obj[methodKey] = (...args)=>{
        originalFn.call(obj, ...args);
        cb(...args);
    };
};
const $76d7ee1550ea5c75$export$bef1f36f5486a6a3 = (...params)=>{};


var $78820f4bb7bab1d4$export$2e2bcd8739ae039 = (echo)=>({
        created () {
            const bindings = {};
            const exluceEventMethods = [
                "presence",
                "private"
            ];
            this.$channel = this.$channel || {};
            this.$options.sockets = this.$options.sockets || {};
            const { sockets: sockets  } = this.$options;
            const registerEvent = (events, channel)=>{
                Object.keys(events).forEach(function(event) {
                    if (!exluceEventMethods.includes(event)) {
                        bindings[channel] = [];
                        this.$channel[channel].listen(event, (payload)=>{
                            if ($76d7ee1550ea5c75$export$f6e2535fb5126e54(events[event])) events[event].bind(this)(payload);
                        });
                        bindings[channel].push(event);
                    }
                }, this);
            };
            Object.keys(sockets).forEach((channel)=>{
                if (channel.startsWith("private:")) this.$channel[channel] = echo.private(channel.replace("private:", ""));
                else if (channel.startsWith("presence:")) this.$channel[channel] = echo.join(channel.replace("presence:", ""));
                else this.$channel[channel] = echo.channel(channel);
                echo[channel] = this.$channel[channel];
                registerEvent(sockets[channel], channel);
            });
        },
        beforeDestroy () {
            for(const channel in bindings)if (Object.hasOwnProperty.call(bindings, channel)) {
                let ch = echo.private(channel);
                bindings[channel].forEach((listener)=>{
                    ch.stopListening(listener);
                });
            }
        },
        destroy () {}
    })
;




//https://pusher.com/docs/channels/using_channels/connection/#available-states
const $877c6c4880e93c0a$var$phuserStatesName = [
    "failed",
    "connected",
    "connecting",
    "initialized",
    "unavailable",
    "state_change", 
];
//https://socket.io/docs/v4/client-socket-instance/#events
const $877c6c4880e93c0a$var$socketIOStatesName = [
    "connect",
    "reconnect",
    "connection",
    "disconnect",
    "connect_error",
    "reconnect_attempt", 
];
function $877c6c4880e93c0a$var$bindingEvent(echo, events) {
    events.forEach((event)=>{
        let method = ($parcel$interopDefault($df5CK$camelcase))([
            "on",
            event
        ]);
        echo[method] = (callback)=>{
            connection.bind(event, callback);
        };
    });
}
function $877c6c4880e93c0a$export$2e2bcd8739ae039(echo, options) {
    if (options.broadcaster == "pusher") {
        const { connection: connection  } = echo.connector.pusher;
        echo.on = (eventName, callback)=>{
            connection.bind(eventName, callback);
        };
        $877c6c4880e93c0a$var$bindingEvent(echo, $877c6c4880e93c0a$var$phuserStatesName);
    } else if (options.broadcaster == "socket.io") {
        echo.on = (event, callback)=>{
            echo.connector.socket.on(event, callback);
        };
        $877c6c4880e93c0a$var$bindingEvent(echo, $877c6c4880e93c0a$var$socketIOStatesName);
    } else if (options.broadcaster == "null") echo.on = (event, callback)=>{};
    else if (typeof options.broadcaster == "function") echo.on = (event, callback)=>{};
}


function $95930220612465e5$var$install(app, options) {
    const auth = options.auth || {};
    const { headers: headers  } = auth;
    const echo = new ($parcel$interopDefault($df5CK$laravelecho))({
        ...options,
        auth: {
            headers: {
                "X-APP-ID": options.key,
                ...headers
            }
        }
    });
    app.config.globalProperties.$echo = echo;
    $877c6c4880e93c0a$export$2e2bcd8739ae039(echo, options);
    app.mixin($78820f4bb7bab1d4$export$2e2bcd8739ae039(echo));
}
var $95930220612465e5$export$2e2bcd8739ae039 = {
    install: $95930220612465e5$var$install
};


//# sourceMappingURL=index.js.map
