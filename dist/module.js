import "pusher-js";
import $586dX$laravelecho from "laravel-echo";
import * as $586dX$camelcase from "camelcase";
import $586dX$tinyemitterinstance from "tiny-emitter/instance";

function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}


var $43688df4eec40380$exports = {};

$parcel$export($43688df4eec40380$exports, "isFunction", () => $43688df4eec40380$export$f6e2535fb5126e54);
$parcel$export($43688df4eec40380$exports, "isString", () => $43688df4eec40380$export$844ec244b1367d54);
$parcel$export($43688df4eec40380$exports, "isLaravelEcho", () => $43688df4eec40380$export$9d3a618bd5e08712);
$parcel$export($43688df4eec40380$exports, "isSocketIo", () => $43688df4eec40380$export$d6a5f2567c00605);
$parcel$export($43688df4eec40380$exports, "unwrapIfSingle", () => $43688df4eec40380$export$51c60c1cff745357);
$parcel$export($43688df4eec40380$exports, "pipe", () => $43688df4eec40380$export$a4627e546088548d);
$parcel$export($43688df4eec40380$exports, "prefixWith", () => $43688df4eec40380$export$33dde070747c7f6d);
$parcel$export($43688df4eec40380$exports, "augmentMethod", () => $43688df4eec40380$export$accf2b169309c101);
$parcel$export($43688df4eec40380$exports, "log", () => $43688df4eec40380$export$bef1f36f5486a6a3);
$parcel$export($43688df4eec40380$exports, "camelCase", () => $43688df4eec40380$re_export$camelCase);

const $43688df4eec40380$export$f6e2535fb5126e54 = (obj)=>typeof obj === "function"
;
const $43688df4eec40380$export$844ec244b1367d54 = (value)=>typeof value === "string"
;
const $43688df4eec40380$export$9d3a618bd5e08712 = (obj)=>!!obj && $43688df4eec40380$export$f6e2535fb5126e54(obj.on) && $43688df4eec40380$export$f6e2535fb5126e54(obj.emit)
;
const $43688df4eec40380$export$d6a5f2567c00605 = (obj)=>!!obj && $43688df4eec40380$export$f6e2535fb5126e54(obj.on) && $43688df4eec40380$export$f6e2535fb5126e54(obj.emit)
;
const $43688df4eec40380$export$51c60c1cff745357 = (args)=>args && args.length <= 1 ? args[0] : args
;
const $43688df4eec40380$export$a4627e546088548d = (...fns)=>(x)=>fns.reduce((v, f)=>f(v)
        , x)
;
const $43688df4eec40380$export$33dde070747c7f6d = (prefix)=>(string)=>prefix + string
;
const $43688df4eec40380$export$accf2b169309c101 = (obj, methodKey, cb)=>{
    const originalFn = obj[methodKey];
    obj[methodKey] = (...args)=>{
        originalFn.call(obj, ...args);
        cb(...args);
    };
};
const $43688df4eec40380$export$bef1f36f5486a6a3 = (...params)=>{};



var $cca64769f3358be3$export$2e2bcd8739ae039 = {
    $on: (...args)=>$586dX$tinyemitterinstance.on(...args)
    ,
    $once: (...args)=>$586dX$tinyemitterinstance.once(...args)
    ,
    $off: (...args)=>$586dX$tinyemitterinstance.off(...args)
    ,
    $emit: (...args)=>$586dX$tinyemitterinstance.emit(...args)
};


class $14953074e7d024e2$export$2e2bcd8739ae039 extends $586dX$laravelecho {
    events = [];
    options = {};
    constructor(options){
        super(options);
        this.options = options;
        this.connector.pusher.connection.bind("error", (asd)=>{
            console.log(asd);
        });
        this.setEvent();
    }
    on(eventName, callback) {
        if (this.options.broadcaster == "pusher") this.connector.pusher.connection.bind(eventName, callback);
        else if (this.options.broadcaster == "socket.io") this.connector.socket.on(eventName, callback);
        else if (this.options.broadcaster == "null") $cca64769f3358be3$export$2e2bcd8739ae039.$on(eventName, callback);
        else if (typeof this.opti$s.broadcaster == "function") $cca64769f3358be3$export$2e2bcd8739ae039.$on(eventName, callback);
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
            let method = $43688df4eec40380$re_export$camelCase([
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



var $30ece060e544b072$export$2e2bcd8739ae039 = (echo)=>({
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
                            if ($43688df4eec40380$export$f6e2535fb5126e54(events[event])) events[event].bind(this)(payload);
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
        // for (const channel in this.$bindings) {
        //   if (Object.hasOwnProperty.call(this.$bindings, channel)) {
        //     delete this.$bindings[channel];
        //   }
        // }
        }
    })
;



const $a118670bf7476f3e$var$defaultOptions = {
    broadcaster: "pusher"
};
function $a118670bf7476f3e$var$install(app, options) {
    const auth = options.auth || {};
    const { headers: headers  } = auth;
    const echo = new $14953074e7d024e2$export$2e2bcd8739ae039({
        ...$a118670bf7476f3e$var$defaultOptions,
        ...options
    });
    app.mixin($30ece060e544b072$export$2e2bcd8739ae039(echo));
}
var $a118670bf7476f3e$export$2e2bcd8739ae039 = {
    install: $a118670bf7476f3e$var$install
};


export {$a118670bf7476f3e$export$2e2bcd8739ae039 as default};
//# sourceMappingURL=module.js.map
