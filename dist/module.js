import "pusher-js";
import $586dX$laravelecho from "laravel-echo";
import $586dX$camelcase from "camelcase";



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


var $14953074e7d024e2$export$2e2bcd8739ae039 = (echo)=>({
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
        destroy () {}
    })
;




//https://pusher.com/docs/channels/using_channels/connection/#available-states
const $bf5c5007362aee1e$var$phuserStatesName = [
    "failed",
    "connected",
    "connecting",
    "initialized",
    "unavailable",
    "state_change", 
];
//https://socket.io/docs/v4/client-socket-instance/#events
const $bf5c5007362aee1e$var$socketIOStatesName = [
    "connect",
    "reconnect",
    "connection",
    "disconnect",
    "connect_error",
    "reconnect_attempt", 
];
function $bf5c5007362aee1e$var$bindingEvent(echo, events) {
    events.forEach((event)=>{
        let method = $586dX$camelcase([
            "on",
            event
        ]);
        echo[method] = (callback)=>{
            connection.bind(event, callback);
        };
    });
}
function $bf5c5007362aee1e$export$2e2bcd8739ae039(echo, options) {
    if (options.broadcaster == "pusher") {
        const { connection: connection  } = echo.connector.pusher;
        echo.on = (eventName, callback)=>{
            connection.bind(eventName, callback);
        };
        $bf5c5007362aee1e$var$bindingEvent(echo, $bf5c5007362aee1e$var$phuserStatesName);
    } else if (options.broadcaster == "socket.io") {
        echo.on = (event, callback)=>{
            echo.connector.socket.on(event, callback);
        };
        $bf5c5007362aee1e$var$bindingEvent(echo, $bf5c5007362aee1e$var$socketIOStatesName);
    } else if (options.broadcaster == "null") echo.on = (event, callback)=>{};
    else if (typeof options.broadcaster == "function") echo.on = (event, callback)=>{};
}


function $a118670bf7476f3e$var$install(app, options) {
    const auth = options.auth || {};
    const { headers: headers  } = auth;
    const echo = new $586dX$laravelecho({
        ...options,
        auth: {
            headers: {
                "X-APP-ID": options.key,
                ...headers
            }
        }
    });
    // app.config.globalProperties.$echo = echo;
    $bf5c5007362aee1e$export$2e2bcd8739ae039(echo, options);
    app.mixin($14953074e7d024e2$export$2e2bcd8739ae039(echo));
}
var $a118670bf7476f3e$export$2e2bcd8739ae039 = {
    install: $a118670bf7476f3e$var$install
};


export {$a118670bf7476f3e$export$2e2bcd8739ae039 as default};
//# sourceMappingURL=module.js.map
