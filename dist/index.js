require("pusher-js");
var $df5CK$laravelecho = require("laravel-echo");
var $df5CK$camelcase = require("camelcase");
var $df5CK$tinyemitterinstance = require("tiny-emitter/instance");

function $parcel$defineInteropFlag(a) {
  Object.defineProperty(a, '__esModule', {value: true, configurable: true});
}
function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}
function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}

$parcel$defineInteropFlag(module.exports);

$parcel$export(module.exports, "default", () => $95930220612465e5$export$2e2bcd8739ae039);




var $21b2fe6729800740$export$2e2bcd8739ae039 = {
    $on: (...args)=>($parcel$interopDefault($df5CK$tinyemitterinstance)).on(...args)
    ,
    $once: (...args)=>($parcel$interopDefault($df5CK$tinyemitterinstance)).once(...args)
    ,
    $off: (...args)=>($parcel$interopDefault($df5CK$tinyemitterinstance)).off(...args)
    ,
    $emit: (...args)=>($parcel$interopDefault($df5CK$tinyemitterinstance)).emit(...args)
};


class $78820f4bb7bab1d4$export$2e2bcd8739ae039 extends ($parcel$interopDefault($df5CK$laravelecho)) {
    constructor(options){
        super(options);
        this.events = [];
        this.options = options;
        this.setEvent();
    }
    on(eventName, callback) {
        if (this.options.broadcaster == "pusher") this.connector.pusher.connection.bind(eventName, callback);
        else if (this.options.broadcaster == "socket.io") this.connector.socket.on(eventName, callback);
        else if (this.options.broadcaster == "null") $21b2fe6729800740$export$2e2bcd8739ae039.$on(eventName, callback);
        else if (typeof this.opti$s.broadcaster == "function") $21b2fe6729800740$export$2e2bcd8739ae039.$on(eventName, callback);
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
        this.events.forEach((event)=>{
            let method = ($parcel$interopDefault($df5CK$camelcase))([
                "on",
                event
            ]);
            this[method] = (callback)=>{
                instance(event, (data)=>{
                    callback(data);
                });
            };
        });
    }
}


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


var $82f7580b4a93f690$export$2e2bcd8739ae039 = (echo)=>({
        created () {
            const exluceEventMethods = [
                "presence",
                "private"
            ];
            this.$echo = echo;
            this.$channel = this.$channel || {};
            this.$bindings = this.$bindings || {};
            this.$options.laravelEcho = this.$options.laravelEcho || {};
            const { laravelEcho: laravelEcho  } = this.$options;
            const registerEvent = (events, channel)=>{
                Object.keys(events).forEach(function(event) {
                    if (!exluceEventMethods.includes(event)) {
                        this.$bindings[channel] = [];
                        this.$channel[channel].listen(event, (payload)=>{
                            if ($76d7ee1550ea5c75$export$f6e2535fb5126e54(events[event])) events[event].bind(this)(payload);
                        });
                        this.$bindings[channel].push(event);
                    }
                }, this);
            };
            Object.keys(laravelEcho).forEach((channel)=>{
                if (channel.startsWith("private:")) this.$channel[channel] = echo.private(channel.replace("private:", ""));
                else if (channel.startsWith("presence:")) this.$channel[channel] = echo.join(channel.replace("presence:", ""));
                else this.$channel[channel] = echo.channel(channel);
                echo[channel] = this.$channel[channel];
                registerEvent(laravelEcho[channel], channel);
            });
        },
        beforeDestroy () {
            for(const channel in this.$bindings)if (Object.hasOwnProperty.call(this.$bindings, channel)) {
                let ch = echo.private(channel);
                this.$bindings[channel].forEach((listener)=>{
                    ch.stopListening(listener);
                });
            }
        },
        destroy () {
            for(const channel in this.$bindings)if (Object.hasOwnProperty.call(this.$bindings, channel)) delete this.$bindings[channel];
        }
    })
;


const $95930220612465e5$var$defaultOptions = {
    broadcaster: "pusher"
};
function $95930220612465e5$var$install(app, options) {
    const auth = options.auth || {};
    const { headers: headers  } = auth;
    const echo = new $78820f4bb7bab1d4$export$2e2bcd8739ae039({
        ...$95930220612465e5$var$defaultOptions,
        ...options
    });
    app.mixin($82f7580b4a93f690$export$2e2bcd8739ae039(echo));
}
var $95930220612465e5$export$2e2bcd8739ae039 = {
    install: $95930220612465e5$var$install
};


//# sourceMappingURL=index.js.map
