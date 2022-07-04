// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"hWUhW":[function(require,module,exports) {
"use strict";
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "7e247707c9c984ed";
function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
function _createForOfIteratorHelper(o, allowArrayLike) {
    var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
    if (!it) {
        if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
            if (it) o = it;
            var i = 0;
            var F = function F() {};
            return {
                s: F,
                n: function n() {
                    if (i >= o.length) return {
                        done: true
                    };
                    return {
                        done: false,
                        value: o[i++]
                    };
                },
                e: function e(_e) {
                    throw _e;
                },
                f: F
            };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var normalCompletion = true, didErr = false, err;
    return {
        s: function s() {
            it = it.call(o);
        },
        n: function n() {
            var step = it.next();
            normalCompletion = step.done;
            return step;
        },
        e: function e(_e2) {
            didErr = true;
            err = _e2;
        },
        f: function f() {
            try {
                if (!normalCompletion && it.return != null) it.return();
            } finally{
                if (didErr) throw err;
            }
        }
    };
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function accept(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function dispose(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == 'https:' && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? 'wss' : 'ws';
    var ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/'); // $FlowFixMe
    ws.onmessage = function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        acceptedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === 'update') {
            // Remove error overlay if there is one
            if (typeof document !== 'undefined') removeErrorOverlay();
            var assets = data.assets.filter(function(asset) {
                return asset.envHash === HMR_ENV_HASH;
            }); // Handle HMR Update
            var handled = assets.every(function(asset) {
                return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                assets.forEach(function(asset) {
                    hmrApply(module.bundle.root, asset);
                });
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else window.location.reload();
        }
        if (data.type === 'error') {
            // Log parcel errors to console
            var _iterator = _createForOfIteratorHelper(data.diagnostics.ansi), _step;
            try {
                for(_iterator.s(); !(_step = _iterator.n()).done;){
                    var ansiDiagnostic = _step.value;
                    var stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                    console.error('🚨 [parcel]: ' + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
                }
            } catch (err) {
                _iterator.e(err);
            } finally{
                _iterator.f();
            }
            if (typeof document !== 'undefined') {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn('[parcel] 🚨 Connection to the HMR server was lost');
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log('[parcel] ✨ Error resolved');
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    var errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    var _iterator2 = _createForOfIteratorHelper(diagnostics), _step2;
    try {
        for(_iterator2.s(); !(_step2 = _iterator2.n()).done;){
            var diagnostic = _step2.value;
            var stack = diagnostic.codeframe ? diagnostic.codeframe : diagnostic.stack;
            errorHTML += "\n      <div>\n        <div style=\"font-size: 18px; font-weight: bold; margin-top: 20px;\">\n          \uD83D\uDEA8 ".concat(diagnostic.message, "\n        </div>\n        <pre>").concat(stack, "</pre>\n        <div>\n          ").concat(diagnostic.hints.map(function(hint) {
                return '<div>💡 ' + hint + '</div>';
            }).join(''), "\n        </div>\n        ").concat(diagnostic.documentation ? "<div>\uD83D\uDCDD <a style=\"color: violet\" href=\"".concat(diagnostic.documentation, "\" target=\"_blank\">Learn more</a></div>") : '', "\n      </div>\n    ");
        }
    } catch (err) {
        _iterator2.e(err);
    } finally{
        _iterator2.f();
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', link.getAttribute('href').split('?')[0] + '?' + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(window.location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
        var deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                var oldDeps = modules[asset.id][1];
                for(var dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    var id = oldDeps[dep];
                    var parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            var fn = new Function('require', 'module', 'exports', asset.output);
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id1) {
    var modules = bundle.modules;
    if (!modules) return;
    if (modules[id1]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        var deps = modules[id1][1];
        var orphans = [];
        for(var dep in deps){
            var parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id1];
        delete bundle.cache[id1]; // Now delete the orphans.
        orphans.forEach(function(id) {
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id1);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    var parents = getParents(module.bundle.root, id);
    var accepted = false;
    while(parents.length > 0){
        var v = parents.shift();
        var a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            var p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push.apply(parents, _toConsumableArray(p));
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) return true;
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"fj5J1":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _appVue = require("./App.vue");
var _appVueDefault = parcelHelpers.interopDefault(_appVue);
var _vue = require("vue");
var _main = require("../src/main");
var _mainDefault = parcelHelpers.interopDefault(_main);
const app = _vue.createApp(_appVueDefault.default);
app.use(_mainDefault.default, {
    broadcaster: "pusher",
    appID: 1200830,
    cluster: "ap1",
    forceTLS: false,
    key: "5381deda1bddf6f3135b",
    authEndpoint: "http://localhost:8000/websockets/auth"
});
app.mount("#app");

},{"./App.vue":"kaEuL","vue":"gzxs9","../src/main":"gLLPy","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kaEuL":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let script;
let initialize = ()=>{
    script = require('script:./App.vue');
    if (script.__esModule) script = script.default;
    script.render = require('template:./App.vue').render;
    script.__cssModules = require('style:./App.vue').default;
    require('custom:./App.vue').default(script);
    script.__scopeId = 'data-v-bf2398';
    script.__file = "/home/angga/GitHub/kangangga/library/example/App.vue";
};
initialize();
if (module.hot) {
    script.__hmrId = 'bf2398-hmr';
    module.hot.accept(()=>{
        setTimeout(()=>{
            initialize();
            if (!__VUE_HMR_RUNTIME__.createRecord('bf2398-hmr', script)) __VUE_HMR_RUNTIME__.reload('bf2398-hmr', script);
        }, 0);
    });
}
exports.default = script;

},{"script:./App.vue":"lmf8o","template:./App.vue":"bmTmW","style:./App.vue":"8VovU","custom:./App.vue":"diO36","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lmf8o":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _vue = require("vue");
exports.default = _vue.defineComponent({
    data () {
        return {
            connected: false,
            message: "Connect"
        };
    },
    laravelEcho: {
        "private:test": {
            TestEvent (data) {
                console.log(this);
            }
        }
    },
    methods: {
        onConnect () {
            this.message = "Connecting...";
            this.$echo.connect();
        }
    },
    mounted () {
        this.$echo.on("connected", (data)=>{
            console.log(data);
            this.connected = true;
        });
    }
});

},{"vue":"gzxs9","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gzxs9":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "compile", ()=>compile
);
var _runtimeDom = require("@vue/runtime-dom");
parcelHelpers.exportAll(_runtimeDom, exports);
function initDev() {
    _runtimeDom.initCustomFormatter();
}
initDev();
const compile = ()=>{
    _runtimeDom.warn(`Runtime compilation is not supported in this build of Vue.` + ` Configure your bundler to alias "vue" to "vue/dist/vue.esm-bundler.js".`);
};

},{"@vue/runtime-dom":"9wNvI","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9wNvI":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Transition", ()=>Transition
);
parcelHelpers.export(exports, "TransitionGroup", ()=>TransitionGroup
);
parcelHelpers.export(exports, "VueElement", ()=>VueElement
);
parcelHelpers.export(exports, "createApp", ()=>createApp
);
parcelHelpers.export(exports, "createSSRApp", ()=>createSSRApp
);
parcelHelpers.export(exports, "defineCustomElement", ()=>defineCustomElement
);
parcelHelpers.export(exports, "defineSSRCustomElement", ()=>defineSSRCustomElement
);
parcelHelpers.export(exports, "hydrate", ()=>hydrate
);
parcelHelpers.export(exports, "initDirectivesForSSR", ()=>initDirectivesForSSR
);
parcelHelpers.export(exports, "render", ()=>render
);
parcelHelpers.export(exports, "useCssModule", ()=>useCssModule
);
parcelHelpers.export(exports, "useCssVars", ()=>useCssVars
);
parcelHelpers.export(exports, "vModelCheckbox", ()=>vModelCheckbox
);
parcelHelpers.export(exports, "vModelDynamic", ()=>vModelDynamic
);
parcelHelpers.export(exports, "vModelRadio", ()=>vModelRadio
);
parcelHelpers.export(exports, "vModelSelect", ()=>vModelSelect
);
parcelHelpers.export(exports, "vModelText", ()=>vModelText
);
parcelHelpers.export(exports, "vShow", ()=>vShow
);
parcelHelpers.export(exports, "withKeys", ()=>withKeys
);
parcelHelpers.export(exports, "withModifiers", ()=>withModifiers
);
var _runtimeCore = require("@vue/runtime-core");
var _shared = require("@vue/shared");
parcelHelpers.exportAll(_runtimeCore, exports);
const svgNS = 'http://www.w3.org/2000/svg';
const doc = typeof document !== 'undefined' ? document : null;
const templateContainer = doc && doc.createElement('template');
const nodeOps = {
    insert: (child, parent, anchor)=>{
        parent.insertBefore(child, anchor || null);
    },
    remove: (child)=>{
        const parent = child.parentNode;
        if (parent) parent.removeChild(child);
    },
    createElement: (tag, isSVG, is, props)=>{
        const el = isSVG ? doc.createElementNS(svgNS, tag) : doc.createElement(tag, is ? {
            is
        } : undefined);
        if (tag === 'select' && props && props.multiple != null) el.setAttribute('multiple', props.multiple);
        return el;
    },
    createText: (text)=>doc.createTextNode(text)
    ,
    createComment: (text)=>doc.createComment(text)
    ,
    setText: (node, text)=>{
        node.nodeValue = text;
    },
    setElementText: (el, text)=>{
        el.textContent = text;
    },
    parentNode: (node)=>node.parentNode
    ,
    nextSibling: (node)=>node.nextSibling
    ,
    querySelector: (selector)=>doc.querySelector(selector)
    ,
    setScopeId (el, id) {
        el.setAttribute(id, '');
    },
    cloneNode (el) {
        const cloned = el.cloneNode(true);
        // #3072
        // - in `patchDOMProp`, we store the actual value in the `el._value` property.
        // - normally, elements using `:value` bindings will not be hoisted, but if
        //   the bound value is a constant, e.g. `:value="true"` - they do get
        //   hoisted.
        // - in production, hoisted nodes are cloned when subsequent inserts, but
        //   cloneNode() does not copy the custom property we attached.
        // - This may need to account for other custom DOM properties we attach to
        //   elements in addition to `_value` in the future.
        if (`_value` in el) cloned._value = el._value;
        return cloned;
    },
    // __UNSAFE__
    // Reason: innerHTML.
    // Static content here can only come from compiled templates.
    // As long as the user only uses trusted templates, this is safe.
    insertStaticContent (content, parent, anchor, isSVG, start, end) {
        // <parent> before | first ... last | anchor </parent>
        const before = anchor ? anchor.previousSibling : parent.lastChild;
        // #5308 can only take cached path if:
        // - has a single root node
        // - nextSibling info is still available
        if (start && (start === end || start.nextSibling)) // cached
        while(true){
            parent.insertBefore(start.cloneNode(true), anchor);
            if (start === end || !(start = start.nextSibling)) break;
        }
        else {
            // fresh insert
            templateContainer.innerHTML = isSVG ? `<svg>${content}</svg>` : content;
            const template = templateContainer.content;
            if (isSVG) {
                // remove outer svg wrapper
                const wrapper = template.firstChild;
                while(wrapper.firstChild)template.appendChild(wrapper.firstChild);
                template.removeChild(wrapper);
            }
            parent.insertBefore(template, anchor);
        }
        return [
            // first
            before ? before.nextSibling : parent.firstChild,
            // last
            anchor ? anchor.previousSibling : parent.lastChild
        ];
    }
};
// compiler should normalize class + :class bindings on the same element
// into a single binding ['staticClass', dynamic]
function patchClass(el, value, isSVG) {
    // directly setting className should be faster than setAttribute in theory
    // if this is an element during a transition, take the temporary transition
    // classes into account.
    const transitionClasses = el._vtc;
    if (transitionClasses) value = (value ? [
        value,
        ...transitionClasses
    ] : [
        ...transitionClasses
    ]).join(' ');
    if (value == null) el.removeAttribute('class');
    else if (isSVG) el.setAttribute('class', value);
    else el.className = value;
}
function patchStyle(el, prev, next) {
    const style = el.style;
    const isCssString = _shared.isString(next);
    if (next && !isCssString) {
        for(const key in next)setStyle(style, key, next[key]);
        if (prev && !_shared.isString(prev)) {
            for(const key in prev)if (next[key] == null) setStyle(style, key, '');
        }
    } else {
        const currentDisplay = style.display;
        if (isCssString) {
            if (prev !== next) style.cssText = next;
        } else if (prev) el.removeAttribute('style');
        // indicates that the `display` of the element is controlled by `v-show`,
        // so we always keep the current `display` value regardless of the `style`
        // value, thus handing over control to `v-show`.
        if ('_vod' in el) style.display = currentDisplay;
    }
}
const importantRE = /\s*!important$/;
function setStyle(style, name, val) {
    if (_shared.isArray(val)) val.forEach((v)=>setStyle(style, name, v)
    );
    else if (name.startsWith('--')) // custom property definition
    style.setProperty(name, val);
    else {
        const prefixed = autoPrefix(style, name);
        if (importantRE.test(val)) // !important
        style.setProperty(_shared.hyphenate(prefixed), val.replace(importantRE, ''), 'important');
        else style[prefixed] = val;
    }
}
const prefixes = [
    'Webkit',
    'Moz',
    'ms'
];
const prefixCache = {};
function autoPrefix(style, rawName) {
    const cached = prefixCache[rawName];
    if (cached) return cached;
    let name = _runtimeCore.camelize(rawName);
    if (name !== 'filter' && name in style) return prefixCache[rawName] = name;
    name = _shared.capitalize(name);
    for(let i = 0; i < prefixes.length; i++){
        const prefixed = prefixes[i] + name;
        if (prefixed in style) return prefixCache[rawName] = prefixed;
    }
    return rawName;
}
const xlinkNS = 'http://www.w3.org/1999/xlink';
function patchAttr(el, key, value, isSVG, instance) {
    if (isSVG && key.startsWith('xlink:')) {
        if (value == null) el.removeAttributeNS(xlinkNS, key.slice(6, key.length));
        else el.setAttributeNS(xlinkNS, key, value);
    } else {
        // note we are only checking boolean attributes that don't have a
        // corresponding dom prop of the same name here.
        const isBoolean = _shared.isSpecialBooleanAttr(key);
        if (value == null || isBoolean && !_shared.includeBooleanAttr(value)) el.removeAttribute(key);
        else el.setAttribute(key, isBoolean ? '' : value);
    }
}
// __UNSAFE__
// functions. The user is responsible for using them with only trusted content.
function patchDOMProp(el, key, value, // the following args are passed only due to potential innerHTML/textContent
// overriding existing VNodes, in which case the old tree must be properly
// unmounted.
prevChildren, parentComponent, parentSuspense, unmountChildren) {
    if (key === 'innerHTML' || key === 'textContent') {
        if (prevChildren) unmountChildren(prevChildren, parentComponent, parentSuspense);
        el[key] = value == null ? '' : value;
        return;
    }
    if (key === 'value' && el.tagName !== 'PROGRESS' && // custom elements may use _value internally
    !el.tagName.includes('-')) {
        // store value as _value as well since
        // non-string values will be stringified.
        el._value = value;
        const newValue = value == null ? '' : value;
        if (el.value !== newValue || // #4956: always set for OPTION elements because its value falls back to
        // textContent if no value attribute is present. And setting .value for
        // OPTION has no side effect
        el.tagName === 'OPTION') el.value = newValue;
        if (value == null) el.removeAttribute(key);
        return;
    }
    if (value === '' || value == null) {
        const type = typeof el[key];
        if (type === 'boolean') {
            // e.g. <select multiple> compiles to { multiple: '' }
            el[key] = _shared.includeBooleanAttr(value);
            return;
        } else if (value == null && type === 'string') {
            // e.g. <div :id="null">
            el[key] = '';
            el.removeAttribute(key);
            return;
        } else if (type === 'number') {
            // e.g. <img :width="null">
            // the value of some IDL attr must be greater than 0, e.g. input.size = 0 -> error
            try {
                el[key] = 0;
            } catch (_a) {}
            el.removeAttribute(key);
            return;
        }
    }
    // some properties perform value validation and throw
    try {
        el[key] = value;
    } catch (e) {
        _runtimeCore.warn(`Failed setting prop "${key}" on <${el.tagName.toLowerCase()}>: ` + `value ${value} is invalid.`, e);
    }
}
// Async edge case fix requires storing an event listener's attach timestamp.
let _getNow = Date.now;
let skipTimestampCheck = false;
if (typeof window !== 'undefined') {
    // Determine what event timestamp the browser is using. Annoyingly, the
    // timestamp can either be hi-res (relative to page load) or low-res
    // (relative to UNIX epoch), so in order to compare time we have to use the
    // same timestamp type when saving the flush timestamp.
    if (_getNow() > document.createEvent('Event').timeStamp) // if the low-res timestamp which is bigger than the event timestamp
    // (which is evaluated AFTER) it means the event is using a hi-res timestamp,
    // and we need to use the hi-res version for event listeners as well.
    _getNow = ()=>performance.now()
    ;
    // #3485: Firefox <= 53 has incorrect Event.timeStamp implementation
    // and does not fire microtasks in between event propagation, so safe to exclude.
    const ffMatch = navigator.userAgent.match(/firefox\/(\d+)/i);
    skipTimestampCheck = !!(ffMatch && Number(ffMatch[1]) <= 53);
}
// To avoid the overhead of repeatedly calling performance.now(), we cache
// and use the same timestamp for all event listeners attached in the same tick.
let cachedNow = 0;
const p = Promise.resolve();
const reset = ()=>{
    cachedNow = 0;
};
const getNow = ()=>cachedNow || (p.then(reset), cachedNow = _getNow())
;
function addEventListener(el, event, handler, options) {
    el.addEventListener(event, handler, options);
}
function removeEventListener(el, event, handler, options) {
    el.removeEventListener(event, handler, options);
}
function patchEvent(el, rawName, prevValue, nextValue, instance = null) {
    // vei = vue event invokers
    const invokers = el._vei || (el._vei = {});
    const existingInvoker = invokers[rawName];
    if (nextValue && existingInvoker) // patch
    existingInvoker.value = nextValue;
    else {
        const [name, options] = parseName(rawName);
        if (nextValue) {
            // add
            const invoker = invokers[rawName] = createInvoker(nextValue, instance);
            addEventListener(el, name, invoker, options);
        } else if (existingInvoker) {
            // remove
            removeEventListener(el, name, existingInvoker, options);
            invokers[rawName] = undefined;
        }
    }
}
const optionsModifierRE = /(?:Once|Passive|Capture)$/;
function parseName(name) {
    let options;
    if (optionsModifierRE.test(name)) {
        options = {};
        let m;
        while(m = name.match(optionsModifierRE)){
            name = name.slice(0, name.length - m[0].length);
            options[m[0].toLowerCase()] = true;
        }
    }
    return [
        _shared.hyphenate(name.slice(2)),
        options
    ];
}
function createInvoker(initialValue, instance) {
    const invoker = (e)=>{
        // async edge case #6566: inner click event triggers patch, event handler
        // attached to outer element during patch, and triggered again. This
        // happens because browsers fire microtask ticks between event propagation.
        // the solution is simple: we save the timestamp when a handler is attached,
        // and the handler would only fire if the event passed to it was fired
        // AFTER it was attached.
        const timeStamp = e.timeStamp || _getNow();
        if (skipTimestampCheck || timeStamp >= invoker.attached - 1) _runtimeCore.callWithAsyncErrorHandling(patchStopImmediatePropagation(e, invoker.value), instance, 5 /* NATIVE_EVENT_HANDLER */ , [
            e
        ]);
    };
    invoker.value = initialValue;
    invoker.attached = getNow();
    return invoker;
}
function patchStopImmediatePropagation(e1, value) {
    if (_shared.isArray(value)) {
        const originalStop = e1.stopImmediatePropagation;
        e1.stopImmediatePropagation = ()=>{
            originalStop.call(e1);
            e1._stopped = true;
        };
        return value.map((fn)=>(e)=>!e._stopped && fn && fn(e)
        );
    } else return value;
}
const nativeOnRE = /^on[a-z]/;
const patchProp = (el, key, prevValue, nextValue, isSVG = false, prevChildren, parentComponent, parentSuspense, unmountChildren)=>{
    if (key === 'class') patchClass(el, nextValue, isSVG);
    else if (key === 'style') patchStyle(el, prevValue, nextValue);
    else if (_shared.isOn(key)) // ignore v-model listeners
    {
        if (!_shared.isModelListener(key)) patchEvent(el, key, prevValue, nextValue, parentComponent);
    } else if (key[0] === '.' ? (key = key.slice(1), true) : key[0] === '^' ? (key = key.slice(1), false) : shouldSetAsProp(el, key, nextValue, isSVG)) patchDOMProp(el, key, nextValue, prevChildren, parentComponent, parentSuspense, unmountChildren);
    else {
        // special case for <input v-model type="checkbox"> with
        // :true-value & :false-value
        // store value as dom properties since non-string values will be
        // stringified.
        if (key === 'true-value') el._trueValue = nextValue;
        else if (key === 'false-value') el._falseValue = nextValue;
        patchAttr(el, key, nextValue, isSVG);
    }
};
function shouldSetAsProp(el, key, value, isSVG) {
    if (isSVG) {
        // most keys must be set as attribute on svg elements to work
        // ...except innerHTML & textContent
        if (key === 'innerHTML' || key === 'textContent') return true;
        // or native onclick with function values
        if (key in el && nativeOnRE.test(key) && _shared.isFunction(value)) return true;
        return false;
    }
    // spellcheck and draggable are numerated attrs, however their
    // corresponding DOM properties are actually booleans - this leads to
    // setting it with a string "false" value leading it to be coerced to
    // `true`, so we need to always treat them as attributes.
    // Note that `contentEditable` doesn't have this problem: its DOM
    // property is also enumerated string values.
    if (key === 'spellcheck' || key === 'draggable') return false;
    // #1787, #2840 form property on form elements is readonly and must be set as
    // attribute.
    if (key === 'form') return false;
    // #1526 <input list> must be set as attribute
    if (key === 'list' && el.tagName === 'INPUT') return false;
    // #2766 <textarea type> must be set as attribute
    if (key === 'type' && el.tagName === 'TEXTAREA') return false;
    // native onclick with string value, must be set as attribute
    if (nativeOnRE.test(key) && _shared.isString(value)) return false;
    return key in el;
}
function defineCustomElement(options, hydate) {
    const Comp = _runtimeCore.defineComponent(options);
    class VueCustomElement extends VueElement {
        constructor(initialProps){
            super(Comp, initialProps, hydate);
        }
    }
    VueCustomElement.def = Comp;
    return VueCustomElement;
}
const defineSSRCustomElement = (options)=>{
    // @ts-ignore
    return defineCustomElement(options, hydrate);
};
const BaseClass = typeof HTMLElement !== 'undefined' ? HTMLElement : class {
};
class VueElement extends BaseClass {
    constructor(_def, _props = {}, hydrate1){
        super();
        this._def = _def;
        this._props = _props;
        /**
         * @internal
         */ this._instance = null;
        this._connected = false;
        this._resolved = false;
        this._numberProps = null;
        if (this.shadowRoot && hydrate1) hydrate1(this._createVNode(), this.shadowRoot);
        else {
            if (this.shadowRoot) _runtimeCore.warn(`Custom element has pre-rendered declarative shadow root but is not ` + `defined as hydratable. Use \`defineSSRCustomElement\`.`);
            this.attachShadow({
                mode: 'open'
            });
        }
    }
    connectedCallback() {
        this._connected = true;
        if (!this._instance) this._resolveDef();
    }
    disconnectedCallback() {
        this._connected = false;
        _runtimeCore.nextTick(()=>{
            if (!this._connected) {
                render(null, this.shadowRoot);
                this._instance = null;
            }
        });
    }
    /**
     * resolve inner component definition (handle possible async component)
     */ _resolveDef() {
        if (this._resolved) return;
        this._resolved = true;
        // set initial attrs
        for(let i = 0; i < this.attributes.length; i++)this._setAttr(this.attributes[i].name);
        // watch future attr changes
        new MutationObserver((mutations)=>{
            for (const m of mutations)this._setAttr(m.attributeName);
        }).observe(this, {
            attributes: true
        });
        const resolve = (def)=>{
            const { props , styles  } = def;
            const hasOptions = !_shared.isArray(props);
            const rawKeys = props ? hasOptions ? Object.keys(props) : props : [];
            // cast Number-type props set before resolve
            let numberProps;
            if (hasOptions) for(const key in this._props){
                const opt = props[key];
                if (opt === Number || opt && opt.type === Number) {
                    this._props[key] = _shared.toNumber(this._props[key]);
                    (numberProps || (numberProps = Object.create(null)))[key] = true;
                }
            }
            this._numberProps = numberProps;
            // check if there are props set pre-upgrade or connect
            for (const key1 of Object.keys(this))if (key1[0] !== '_') this._setProp(key1, this[key1], true, false);
            // defining getter/setters on prototype
            for (const key2 of rawKeys.map(_shared.camelize))Object.defineProperty(this, key2, {
                get () {
                    return this._getProp(key2);
                },
                set (val) {
                    this._setProp(key2, val);
                }
            });
            // apply CSS
            this._applyStyles(styles);
            // initial render
            this._update();
        };
        const asyncDef = this._def.__asyncLoader;
        if (asyncDef) asyncDef().then(resolve);
        else resolve(this._def);
    }
    _setAttr(key) {
        let value = this.getAttribute(key);
        if (this._numberProps && this._numberProps[key]) value = _shared.toNumber(value);
        this._setProp(_shared.camelize(key), value, false);
    }
    /**
     * @internal
     */ _getProp(key) {
        return this._props[key];
    }
    /**
     * @internal
     */ _setProp(key, val, shouldReflect = true, shouldUpdate = true) {
        if (val !== this._props[key]) {
            this._props[key] = val;
            if (shouldUpdate && this._instance) this._update();
            // reflect
            if (shouldReflect) {
                if (val === true) this.setAttribute(_shared.hyphenate(key), '');
                else if (typeof val === 'string' || typeof val === 'number') this.setAttribute(_shared.hyphenate(key), val + '');
                else if (!val) this.removeAttribute(_shared.hyphenate(key));
            }
        }
    }
    _update() {
        render(this._createVNode(), this.shadowRoot);
    }
    _createVNode() {
        const vnode = _runtimeCore.createVNode(this._def, _shared.extend({}, this._props));
        if (!this._instance) vnode.ce = (instance)=>{
            this._instance = instance;
            instance.isCE = true;
            instance.ceReload = (newStyles)=>{
                // always reset styles
                if (this._styles) {
                    this._styles.forEach((s)=>this.shadowRoot.removeChild(s)
                    );
                    this._styles.length = 0;
                }
                this._applyStyles(newStyles);
                // if this is an async component, ceReload is called from the inner
                // component so no need to reload the async wrapper
                if (!this._def.__asyncLoader) {
                    // reload
                    this._instance = null;
                    this._update();
                }
            };
            // intercept emit
            instance.emit = (event, ...args)=>{
                this.dispatchEvent(new CustomEvent(event, {
                    detail: args
                }));
            };
            // locate nearest Vue custom element parent for provide/inject
            let parent = this;
            while(parent = parent && (parent.parentNode || parent.host))if (parent instanceof VueElement) {
                instance.parent = parent._instance;
                break;
            }
        };
        return vnode;
    }
    _applyStyles(styles) {
        if (styles) styles.forEach((css)=>{
            const s = document.createElement('style');
            s.textContent = css;
            this.shadowRoot.appendChild(s);
            (this._styles || (this._styles = [])).push(s);
        });
    }
}
function useCssModule(name = '$style') {
    /* istanbul ignore else */ {
        const instance = _runtimeCore.getCurrentInstance();
        if (!instance) {
            _runtimeCore.warn(`useCssModule must be called inside setup()`);
            return _shared.EMPTY_OBJ;
        }
        const modules = instance.type.__cssModules;
        if (!modules) {
            _runtimeCore.warn(`Current instance does not have CSS modules injected.`);
            return _shared.EMPTY_OBJ;
        }
        const mod = modules[name];
        if (!mod) {
            _runtimeCore.warn(`Current instance does not have CSS module named "${name}".`);
            return _shared.EMPTY_OBJ;
        }
        return mod;
    }
}
/**
 * Runtime helper for SFC's CSS variable injection feature.
 * @private
 */ function useCssVars(getter) {
    const instance = _runtimeCore.getCurrentInstance();
    /* istanbul ignore next */ if (!instance) {
        _runtimeCore.warn(`useCssVars is called without current active component instance.`);
        return;
    }
    const setVars = ()=>setVarsOnVNode(instance.subTree, getter(instance.proxy))
    ;
    _runtimeCore.watchPostEffect(setVars);
    _runtimeCore.onMounted(()=>{
        const ob = new MutationObserver(setVars);
        ob.observe(instance.subTree.el.parentNode, {
            childList: true
        });
        _runtimeCore.onUnmounted(()=>ob.disconnect()
        );
    });
}
function setVarsOnVNode(vnode, vars) {
    if (vnode.shapeFlag & 128 /* SUSPENSE */ ) {
        const suspense = vnode.suspense;
        vnode = suspense.activeBranch;
        if (suspense.pendingBranch && !suspense.isHydrating) suspense.effects.push(()=>{
            setVarsOnVNode(suspense.activeBranch, vars);
        });
    }
    // drill down HOCs until it's a non-component vnode
    while(vnode.component)vnode = vnode.component.subTree;
    if (vnode.shapeFlag & 1 /* ELEMENT */  && vnode.el) setVarsOnNode(vnode.el, vars);
    else if (vnode.type === _runtimeCore.Fragment) vnode.children.forEach((c)=>setVarsOnVNode(c, vars)
    );
    else if (vnode.type === _runtimeCore.Static) {
        let { el , anchor  } = vnode;
        while(el){
            setVarsOnNode(el, vars);
            if (el === anchor) break;
            el = el.nextSibling;
        }
    }
}
function setVarsOnNode(el, vars) {
    if (el.nodeType === 1) {
        const style = el.style;
        for(const key in vars)style.setProperty(`--${key}`, vars[key]);
    }
}
const TRANSITION = 'transition';
const ANIMATION = 'animation';
// DOM Transition is a higher-order-component based on the platform-agnostic
// base Transition component, with DOM-specific logic.
const Transition = (props, { slots  })=>_runtimeCore.h(_runtimeCore.BaseTransition, resolveTransitionProps(props), slots)
;
Transition.displayName = 'Transition';
const DOMTransitionPropsValidators = {
    name: String,
    type: String,
    css: {
        type: Boolean,
        default: true
    },
    duration: [
        String,
        Number,
        Object
    ],
    enterFromClass: String,
    enterActiveClass: String,
    enterToClass: String,
    appearFromClass: String,
    appearActiveClass: String,
    appearToClass: String,
    leaveFromClass: String,
    leaveActiveClass: String,
    leaveToClass: String
};
const TransitionPropsValidators = Transition.props = /*#__PURE__*/ _shared.extend({}, _runtimeCore.BaseTransition.props, DOMTransitionPropsValidators);
/**
 * #3227 Incoming hooks may be merged into arrays when wrapping Transition
 * with custom HOCs.
 */ const callHook = (hook, args = [])=>{
    if (_shared.isArray(hook)) hook.forEach((h)=>h(...args)
    );
    else if (hook) hook(...args);
};
/**
 * Check if a hook expects a callback (2nd arg), which means the user
 * intends to explicitly control the end of the transition.
 */ const hasExplicitCallback = (hook)=>{
    return hook ? _shared.isArray(hook) ? hook.some((h)=>h.length > 1
    ) : hook.length > 1 : false;
};
function resolveTransitionProps(rawProps) {
    const baseProps = {};
    for(const key in rawProps)if (!(key in DOMTransitionPropsValidators)) baseProps[key] = rawProps[key];
    if (rawProps.css === false) return baseProps;
    const { name ='v' , type , duration , enterFromClass =`${name}-enter-from` , enterActiveClass =`${name}-enter-active` , enterToClass =`${name}-enter-to` , appearFromClass =enterFromClass , appearActiveClass =enterActiveClass , appearToClass =enterToClass , leaveFromClass =`${name}-leave-from` , leaveActiveClass =`${name}-leave-active` , leaveToClass =`${name}-leave-to`  } = rawProps;
    const durations = normalizeDuration(duration);
    const enterDuration = durations && durations[0];
    const leaveDuration = durations && durations[1];
    const { onBeforeEnter , onEnter , onEnterCancelled , onLeave , onLeaveCancelled , onBeforeAppear =onBeforeEnter , onAppear =onEnter , onAppearCancelled =onEnterCancelled  } = baseProps;
    const finishEnter = (el, isAppear, done)=>{
        removeTransitionClass(el, isAppear ? appearToClass : enterToClass);
        removeTransitionClass(el, isAppear ? appearActiveClass : enterActiveClass);
        done && done();
    };
    const finishLeave = (el, done)=>{
        removeTransitionClass(el, leaveToClass);
        removeTransitionClass(el, leaveActiveClass);
        done && done();
    };
    const makeEnterHook = (isAppear)=>{
        return (el, done)=>{
            const hook = isAppear ? onAppear : onEnter;
            const resolve = ()=>finishEnter(el, isAppear, done)
            ;
            callHook(hook, [
                el,
                resolve
            ]);
            nextFrame(()=>{
                removeTransitionClass(el, isAppear ? appearFromClass : enterFromClass);
                addTransitionClass(el, isAppear ? appearToClass : enterToClass);
                if (!hasExplicitCallback(hook)) whenTransitionEnds(el, type, enterDuration, resolve);
            });
        };
    };
    return _shared.extend(baseProps, {
        onBeforeEnter (el) {
            callHook(onBeforeEnter, [
                el
            ]);
            addTransitionClass(el, enterFromClass);
            addTransitionClass(el, enterActiveClass);
        },
        onBeforeAppear (el) {
            callHook(onBeforeAppear, [
                el
            ]);
            addTransitionClass(el, appearFromClass);
            addTransitionClass(el, appearActiveClass);
        },
        onEnter: makeEnterHook(false),
        onAppear: makeEnterHook(true),
        onLeave (el, done) {
            const resolve = ()=>finishLeave(el, done)
            ;
            addTransitionClass(el, leaveFromClass);
            // force reflow so *-leave-from classes immediately take effect (#2593)
            forceReflow();
            addTransitionClass(el, leaveActiveClass);
            nextFrame(()=>{
                removeTransitionClass(el, leaveFromClass);
                addTransitionClass(el, leaveToClass);
                if (!hasExplicitCallback(onLeave)) whenTransitionEnds(el, type, leaveDuration, resolve);
            });
            callHook(onLeave, [
                el,
                resolve
            ]);
        },
        onEnterCancelled (el) {
            finishEnter(el, false);
            callHook(onEnterCancelled, [
                el
            ]);
        },
        onAppearCancelled (el) {
            finishEnter(el, true);
            callHook(onAppearCancelled, [
                el
            ]);
        },
        onLeaveCancelled (el) {
            finishLeave(el);
            callHook(onLeaveCancelled, [
                el
            ]);
        }
    });
}
function normalizeDuration(duration) {
    if (duration == null) return null;
    else if (_shared.isObject(duration)) return [
        NumberOf(duration.enter),
        NumberOf(duration.leave)
    ];
    else {
        const n = NumberOf(duration);
        return [
            n,
            n
        ];
    }
}
function NumberOf(val) {
    const res = _shared.toNumber(val);
    validateDuration(res);
    return res;
}
function validateDuration(val) {
    if (typeof val !== 'number') _runtimeCore.warn(`<transition> explicit duration is not a valid number - ` + `got ${JSON.stringify(val)}.`);
    else if (isNaN(val)) _runtimeCore.warn(`<transition> explicit duration is NaN - ` + 'the duration expression might be incorrect.');
}
function addTransitionClass(el, cls) {
    cls.split(/\s+/).forEach((c)=>c && el.classList.add(c)
    );
    (el._vtc || (el._vtc = new Set())).add(cls);
}
function removeTransitionClass(el, cls) {
    cls.split(/\s+/).forEach((c)=>c && el.classList.remove(c)
    );
    const { _vtc  } = el;
    if (_vtc) {
        _vtc.delete(cls);
        if (!_vtc.size) el._vtc = undefined;
    }
}
function nextFrame(cb) {
    requestAnimationFrame(()=>{
        requestAnimationFrame(cb);
    });
}
let endId = 0;
function whenTransitionEnds(el, expectedType, explicitTimeout, resolve) {
    const id = el._endId = ++endId;
    const resolveIfNotStale = ()=>{
        if (id === el._endId) resolve();
    };
    if (explicitTimeout) return setTimeout(resolveIfNotStale, explicitTimeout);
    const { type , timeout , propCount  } = getTransitionInfo(el, expectedType);
    if (!type) return resolve();
    const endEvent = type + 'end';
    let ended = 0;
    const end = ()=>{
        el.removeEventListener(endEvent, onEnd);
        resolveIfNotStale();
    };
    const onEnd = (e)=>{
        if (e.target === el && ++ended >= propCount) end();
    };
    setTimeout(()=>{
        if (ended < propCount) end();
    }, timeout + 1);
    el.addEventListener(endEvent, onEnd);
}
function getTransitionInfo(el, expectedType) {
    const styles = window.getComputedStyle(el);
    // JSDOM may return undefined for transition properties
    const getStyleProperties = (key)=>(styles[key] || '').split(', ')
    ;
    const transitionDelays = getStyleProperties(TRANSITION + 'Delay');
    const transitionDurations = getStyleProperties(TRANSITION + 'Duration');
    const transitionTimeout = getTimeout(transitionDelays, transitionDurations);
    const animationDelays = getStyleProperties(ANIMATION + 'Delay');
    const animationDurations = getStyleProperties(ANIMATION + 'Duration');
    const animationTimeout = getTimeout(animationDelays, animationDurations);
    let type = null;
    let timeout = 0;
    let propCount = 0;
    /* istanbul ignore if */ if (expectedType === TRANSITION) {
        if (transitionTimeout > 0) {
            type = TRANSITION;
            timeout = transitionTimeout;
            propCount = transitionDurations.length;
        }
    } else if (expectedType === ANIMATION) {
        if (animationTimeout > 0) {
            type = ANIMATION;
            timeout = animationTimeout;
            propCount = animationDurations.length;
        }
    } else {
        timeout = Math.max(transitionTimeout, animationTimeout);
        type = timeout > 0 ? transitionTimeout > animationTimeout ? TRANSITION : ANIMATION : null;
        propCount = type ? type === TRANSITION ? transitionDurations.length : animationDurations.length : 0;
    }
    const hasTransform = type === TRANSITION && /\b(transform|all)(,|$)/.test(styles[TRANSITION + 'Property']);
    return {
        type,
        timeout,
        propCount,
        hasTransform
    };
}
function getTimeout(delays, durations) {
    while(delays.length < durations.length)delays = delays.concat(delays);
    return Math.max(...durations.map((d, i)=>toMs(d) + toMs(delays[i])
    ));
}
// Old versions of Chromium (below 61.0.3163.100) formats floating pointer
// numbers in a locale-dependent way, using a comma instead of a dot.
// If comma is not replaced with a dot, the input will be rounded down
// (i.e. acting as a floor function) causing unexpected behaviors
function toMs(s) {
    return Number(s.slice(0, -1).replace(',', '.')) * 1000;
}
// synchronously force layout to put elements into a certain state
function forceReflow() {
    return document.body.offsetHeight;
}
const positionMap = new WeakMap();
const newPositionMap = new WeakMap();
const TransitionGroupImpl = {
    name: 'TransitionGroup',
    props: /*#__PURE__*/ _shared.extend({}, TransitionPropsValidators, {
        tag: String,
        moveClass: String
    }),
    setup (props, { slots  }) {
        const instance = _runtimeCore.getCurrentInstance();
        const state = _runtimeCore.useTransitionState();
        let prevChildren;
        let children;
        _runtimeCore.onUpdated(()=>{
            // children is guaranteed to exist after initial render
            if (!prevChildren.length) return;
            const moveClass = props.moveClass || `${props.name || 'v'}-move`;
            if (!hasCSSTransform(prevChildren[0].el, instance.vnode.el, moveClass)) return;
            // we divide the work into three loops to avoid mixing DOM reads and writes
            // in each iteration - which helps prevent layout thrashing.
            prevChildren.forEach(callPendingCbs);
            prevChildren.forEach(recordPosition);
            const movedChildren = prevChildren.filter(applyTranslation);
            // force reflow to put everything in position
            forceReflow();
            movedChildren.forEach((c)=>{
                const el = c.el;
                const style = el.style;
                addTransitionClass(el, moveClass);
                style.transform = style.webkitTransform = style.transitionDuration = '';
                const cb = el._moveCb = (e)=>{
                    if (e && e.target !== el) return;
                    if (!e || /transform$/.test(e.propertyName)) {
                        el.removeEventListener('transitionend', cb);
                        el._moveCb = null;
                        removeTransitionClass(el, moveClass);
                    }
                };
                el.addEventListener('transitionend', cb);
            });
        });
        return ()=>{
            const rawProps = _runtimeCore.toRaw(props);
            const cssTransitionProps = resolveTransitionProps(rawProps);
            let tag = rawProps.tag || _runtimeCore.Fragment;
            prevChildren = children;
            children = slots.default ? _runtimeCore.getTransitionRawChildren(slots.default()) : [];
            for(let i = 0; i < children.length; i++){
                const child = children[i];
                if (child.key != null) _runtimeCore.setTransitionHooks(child, _runtimeCore.resolveTransitionHooks(child, cssTransitionProps, state, instance));
                else _runtimeCore.warn(`<TransitionGroup> children must be keyed.`);
            }
            if (prevChildren) for(let i1 = 0; i1 < prevChildren.length; i1++){
                const child = prevChildren[i1];
                _runtimeCore.setTransitionHooks(child, _runtimeCore.resolveTransitionHooks(child, cssTransitionProps, state, instance));
                positionMap.set(child, child.el.getBoundingClientRect());
            }
            return _runtimeCore.createVNode(tag, null, children);
        };
    }
};
const TransitionGroup = TransitionGroupImpl;
function callPendingCbs(c) {
    const el = c.el;
    if (el._moveCb) el._moveCb();
    if (el._enterCb) el._enterCb();
}
function recordPosition(c) {
    newPositionMap.set(c, c.el.getBoundingClientRect());
}
function applyTranslation(c) {
    const oldPos = positionMap.get(c);
    const newPos = newPositionMap.get(c);
    const dx = oldPos.left - newPos.left;
    const dy = oldPos.top - newPos.top;
    if (dx || dy) {
        const s = c.el.style;
        s.transform = s.webkitTransform = `translate(${dx}px,${dy}px)`;
        s.transitionDuration = '0s';
        return c;
    }
}
function hasCSSTransform(el, root, moveClass) {
    // Detect whether an element with the move class applied has
    // CSS transitions. Since the element may be inside an entering
    // transition at this very moment, we make a clone of it and remove
    // all other transition classes applied to ensure only the move class
    // is applied.
    const clone = el.cloneNode();
    if (el._vtc) el._vtc.forEach((cls)=>{
        cls.split(/\s+/).forEach((c)=>c && clone.classList.remove(c)
        );
    });
    moveClass.split(/\s+/).forEach((c)=>c && clone.classList.add(c)
    );
    clone.style.display = 'none';
    const container = root.nodeType === 1 ? root : root.parentNode;
    container.appendChild(clone);
    const { hasTransform  } = getTransitionInfo(clone);
    container.removeChild(clone);
    return hasTransform;
}
const getModelAssigner = (vnode)=>{
    const fn = vnode.props['onUpdate:modelValue'];
    return _shared.isArray(fn) ? (value)=>_shared.invokeArrayFns(fn, value)
     : fn;
};
function onCompositionStart(e) {
    e.target.composing = true;
}
function onCompositionEnd(e) {
    const target = e.target;
    if (target.composing) {
        target.composing = false;
        trigger(target, 'input');
    }
}
function trigger(el, type) {
    const e = document.createEvent('HTMLEvents');
    e.initEvent(type, true, true);
    el.dispatchEvent(e);
}
// We are exporting the v-model runtime directly as vnode hooks so that it can
// be tree-shaken in case v-model is never used.
const vModelText = {
    created (el, { modifiers: { lazy , trim , number  }  }, vnode) {
        el._assign = getModelAssigner(vnode);
        const castToNumber = number || vnode.props && vnode.props.type === 'number';
        addEventListener(el, lazy ? 'change' : 'input', (e)=>{
            if (e.target.composing) return;
            let domValue = el.value;
            if (trim) domValue = domValue.trim();
            else if (castToNumber) domValue = _shared.toNumber(domValue);
            el._assign(domValue);
        });
        if (trim) addEventListener(el, 'change', ()=>{
            el.value = el.value.trim();
        });
        if (!lazy) {
            addEventListener(el, 'compositionstart', onCompositionStart);
            addEventListener(el, 'compositionend', onCompositionEnd);
            // Safari < 10.2 & UIWebView doesn't fire compositionend when
            // switching focus before confirming composition choice
            // this also fixes the issue where some browsers e.g. iOS Chrome
            // fires "change" instead of "input" on autocomplete.
            addEventListener(el, 'change', onCompositionEnd);
        }
    },
    // set value on mounted so it's after min/max for type="range"
    mounted (el, { value  }) {
        el.value = value == null ? '' : value;
    },
    beforeUpdate (el, { value , modifiers: { lazy , trim , number  }  }, vnode) {
        el._assign = getModelAssigner(vnode);
        // avoid clearing unresolved text. #2302
        if (el.composing) return;
        if (document.activeElement === el) {
            if (lazy) return;
            if (trim && el.value.trim() === value) return;
            if ((number || el.type === 'number') && _shared.toNumber(el.value) === value) return;
        }
        const newValue = value == null ? '' : value;
        if (el.value !== newValue) el.value = newValue;
    }
};
const vModelCheckbox = {
    // #4096 array checkboxes need to be deep traversed
    deep: true,
    created (el, _, vnode) {
        el._assign = getModelAssigner(vnode);
        addEventListener(el, 'change', ()=>{
            const modelValue = el._modelValue;
            const elementValue = getValue(el);
            const checked = el.checked;
            const assign = el._assign;
            if (_shared.isArray(modelValue)) {
                const index = _shared.looseIndexOf(modelValue, elementValue);
                const found = index !== -1;
                if (checked && !found) assign(modelValue.concat(elementValue));
                else if (!checked && found) {
                    const filtered = [
                        ...modelValue
                    ];
                    filtered.splice(index, 1);
                    assign(filtered);
                }
            } else if (_shared.isSet(modelValue)) {
                const cloned = new Set(modelValue);
                if (checked) cloned.add(elementValue);
                else cloned.delete(elementValue);
                assign(cloned);
            } else assign(getCheckboxValue(el, checked));
        });
    },
    // set initial checked on mount to wait for true-value/false-value
    mounted: setChecked,
    beforeUpdate (el, binding, vnode) {
        el._assign = getModelAssigner(vnode);
        setChecked(el, binding, vnode);
    }
};
function setChecked(el, { value , oldValue  }, vnode) {
    el._modelValue = value;
    if (_shared.isArray(value)) el.checked = _shared.looseIndexOf(value, vnode.props.value) > -1;
    else if (_shared.isSet(value)) el.checked = value.has(vnode.props.value);
    else if (value !== oldValue) el.checked = _shared.looseEqual(value, getCheckboxValue(el, true));
}
const vModelRadio = {
    created (el, { value  }, vnode) {
        el.checked = _shared.looseEqual(value, vnode.props.value);
        el._assign = getModelAssigner(vnode);
        addEventListener(el, 'change', ()=>{
            el._assign(getValue(el));
        });
    },
    beforeUpdate (el, { value , oldValue  }, vnode) {
        el._assign = getModelAssigner(vnode);
        if (value !== oldValue) el.checked = _shared.looseEqual(value, vnode.props.value);
    }
};
const vModelSelect = {
    // <select multiple> value need to be deep traversed
    deep: true,
    created (el, { value , modifiers: { number  }  }, vnode) {
        const isSetModel = _shared.isSet(value);
        addEventListener(el, 'change', ()=>{
            const selectedVal = Array.prototype.filter.call(el.options, (o)=>o.selected
            ).map((o)=>number ? _shared.toNumber(getValue(o)) : getValue(o)
            );
            el._assign(el.multiple ? isSetModel ? new Set(selectedVal) : selectedVal : selectedVal[0]);
        });
        el._assign = getModelAssigner(vnode);
    },
    // set value in mounted & updated because <select> relies on its children
    // <option>s.
    mounted (el, { value  }) {
        setSelected(el, value);
    },
    beforeUpdate (el, _binding, vnode) {
        el._assign = getModelAssigner(vnode);
    },
    updated (el, { value  }) {
        setSelected(el, value);
    }
};
function setSelected(el, value) {
    const isMultiple = el.multiple;
    if (isMultiple && !_shared.isArray(value) && !_shared.isSet(value)) {
        _runtimeCore.warn(`<select multiple v-model> expects an Array or Set value for its binding, ` + `but got ${Object.prototype.toString.call(value).slice(8, -1)}.`);
        return;
    }
    for(let i = 0, l = el.options.length; i < l; i++){
        const option = el.options[i];
        const optionValue = getValue(option);
        if (isMultiple) {
            if (_shared.isArray(value)) option.selected = _shared.looseIndexOf(value, optionValue) > -1;
            else option.selected = value.has(optionValue);
        } else if (_shared.looseEqual(getValue(option), value)) {
            if (el.selectedIndex !== i) el.selectedIndex = i;
            return;
        }
    }
    if (!isMultiple && el.selectedIndex !== -1) el.selectedIndex = -1;
}
// retrieve raw value set via :value bindings
function getValue(el) {
    return '_value' in el ? el._value : el.value;
}
// retrieve raw value for true-value and false-value set via :true-value or :false-value bindings
function getCheckboxValue(el, checked) {
    const key = checked ? '_trueValue' : '_falseValue';
    return key in el ? el[key] : checked;
}
const vModelDynamic = {
    created (el, binding, vnode) {
        callModelHook(el, binding, vnode, null, 'created');
    },
    mounted (el, binding, vnode) {
        callModelHook(el, binding, vnode, null, 'mounted');
    },
    beforeUpdate (el, binding, vnode, prevVNode) {
        callModelHook(el, binding, vnode, prevVNode, 'beforeUpdate');
    },
    updated (el, binding, vnode, prevVNode) {
        callModelHook(el, binding, vnode, prevVNode, 'updated');
    }
};
function callModelHook(el, binding, vnode, prevVNode, hook) {
    let modelToUse;
    switch(el.tagName){
        case 'SELECT':
            modelToUse = vModelSelect;
            break;
        case 'TEXTAREA':
            modelToUse = vModelText;
            break;
        default:
            switch(vnode.props && vnode.props.type){
                case 'checkbox':
                    modelToUse = vModelCheckbox;
                    break;
                case 'radio':
                    modelToUse = vModelRadio;
                    break;
                default:
                    modelToUse = vModelText;
            }
    }
    const fn = modelToUse[hook];
    fn && fn(el, binding, vnode, prevVNode);
}
// SSR vnode transforms, only used when user includes client-oriented render
// function in SSR
function initVModelForSSR() {
    vModelText.getSSRProps = ({ value  })=>({
            value
        })
    ;
    vModelRadio.getSSRProps = ({ value  }, vnode)=>{
        if (vnode.props && _shared.looseEqual(vnode.props.value, value)) return {
            checked: true
        };
    };
    vModelCheckbox.getSSRProps = ({ value  }, vnode)=>{
        if (_shared.isArray(value)) {
            if (vnode.props && _shared.looseIndexOf(value, vnode.props.value) > -1) return {
                checked: true
            };
        } else if (_shared.isSet(value)) {
            if (vnode.props && value.has(vnode.props.value)) return {
                checked: true
            };
        } else if (value) return {
            checked: true
        };
    };
}
const systemModifiers = [
    'ctrl',
    'shift',
    'alt',
    'meta'
];
const modifierGuards = {
    stop: (e)=>e.stopPropagation()
    ,
    prevent: (e)=>e.preventDefault()
    ,
    self: (e)=>e.target !== e.currentTarget
    ,
    ctrl: (e)=>!e.ctrlKey
    ,
    shift: (e)=>!e.shiftKey
    ,
    alt: (e)=>!e.altKey
    ,
    meta: (e)=>!e.metaKey
    ,
    left: (e)=>'button' in e && e.button !== 0
    ,
    middle: (e)=>'button' in e && e.button !== 1
    ,
    right: (e)=>'button' in e && e.button !== 2
    ,
    exact: (e, modifiers)=>systemModifiers.some((m)=>e[`${m}Key`] && !modifiers.includes(m)
        )
};
/**
 * @private
 */ const withModifiers = (fn, modifiers)=>{
    return (event, ...args)=>{
        for(let i = 0; i < modifiers.length; i++){
            const guard = modifierGuards[modifiers[i]];
            if (guard && guard(event, modifiers)) return;
        }
        return fn(event, ...args);
    };
};
// Kept for 2.x compat.
// Note: IE11 compat for `spacebar` and `del` is removed for now.
const keyNames = {
    esc: 'escape',
    space: ' ',
    up: 'arrow-up',
    left: 'arrow-left',
    right: 'arrow-right',
    down: 'arrow-down',
    delete: 'backspace'
};
/**
 * @private
 */ const withKeys = (fn, modifiers)=>{
    return (event)=>{
        if (!('key' in event)) return;
        const eventKey = _shared.hyphenate(event.key);
        if (modifiers.some((k)=>k === eventKey || keyNames[k] === eventKey
        )) return fn(event);
    };
};
const vShow = {
    beforeMount (el, { value  }, { transition  }) {
        el._vod = el.style.display === 'none' ? '' : el.style.display;
        if (transition && value) transition.beforeEnter(el);
        else setDisplay(el, value);
    },
    mounted (el, { value  }, { transition  }) {
        if (transition && value) transition.enter(el);
    },
    updated (el, { value , oldValue  }, { transition  }) {
        if (!value === !oldValue) return;
        if (transition) {
            if (value) {
                transition.beforeEnter(el);
                setDisplay(el, true);
                transition.enter(el);
            } else transition.leave(el, ()=>{
                setDisplay(el, false);
            });
        } else setDisplay(el, value);
    },
    beforeUnmount (el, { value  }) {
        setDisplay(el, value);
    }
};
function setDisplay(el, value) {
    el.style.display = value ? el._vod : 'none';
}
// SSR vnode transforms, only used when user includes client-oriented render
// function in SSR
function initVShowForSSR() {
    vShow.getSSRProps = ({ value  })=>{
        if (!value) return {
            style: {
                display: 'none'
            }
        };
    };
}
const rendererOptions = _shared.extend({
    patchProp
}, nodeOps);
// lazy create the renderer - this makes core renderer logic tree-shakable
// in case the user only imports reactivity utilities from Vue.
let renderer;
let enabledHydration = false;
function ensureRenderer() {
    return renderer || (renderer = _runtimeCore.createRenderer(rendererOptions));
}
function ensureHydrationRenderer() {
    renderer = enabledHydration ? renderer : _runtimeCore.createHydrationRenderer(rendererOptions);
    enabledHydration = true;
    return renderer;
}
// use explicit type casts here to avoid import() calls in rolled-up d.ts
const render = (...args)=>{
    ensureRenderer().render(...args);
};
const hydrate = (...args)=>{
    ensureHydrationRenderer().hydrate(...args);
};
const createApp = (...args)=>{
    const app = ensureRenderer().createApp(...args);
    injectNativeTagCheck(app);
    injectCompilerOptionsCheck(app);
    const { mount  } = app;
    app.mount = (containerOrSelector)=>{
        const container = normalizeContainer(containerOrSelector);
        if (!container) return;
        const component = app._component;
        if (!_shared.isFunction(component) && !component.render && !component.template) // __UNSAFE__
        // Reason: potential execution of JS expressions in in-DOM template.
        // The user must make sure the in-DOM template is trusted. If it's
        // rendered by the server, the template should not contain any user data.
        component.template = container.innerHTML;
        // clear content before mounting
        container.innerHTML = '';
        const proxy = mount(container, false, container instanceof SVGElement);
        if (container instanceof Element) {
            container.removeAttribute('v-cloak');
            container.setAttribute('data-v-app', '');
        }
        return proxy;
    };
    return app;
};
const createSSRApp = (...args)=>{
    const app = ensureHydrationRenderer().createApp(...args);
    injectNativeTagCheck(app);
    injectCompilerOptionsCheck(app);
    const { mount  } = app;
    app.mount = (containerOrSelector)=>{
        const container = normalizeContainer(containerOrSelector);
        if (container) return mount(container, true, container instanceof SVGElement);
    };
    return app;
};
function injectNativeTagCheck(app) {
    // Inject `isNativeTag`
    // this is used for component name validation (dev only)
    Object.defineProperty(app.config, 'isNativeTag', {
        value: (tag)=>_shared.isHTMLTag(tag) || _shared.isSVGTag(tag)
        ,
        writable: false
    });
}
// dev only
function injectCompilerOptionsCheck(app) {
    if (_runtimeCore.isRuntimeOnly()) {
        const isCustomElement = app.config.isCustomElement;
        Object.defineProperty(app.config, 'isCustomElement', {
            get () {
                return isCustomElement;
            },
            set () {
                _runtimeCore.warn(`The \`isCustomElement\` config option is deprecated. Use ` + `\`compilerOptions.isCustomElement\` instead.`);
            }
        });
        const compilerOptions = app.config.compilerOptions;
        const msg = `The \`compilerOptions\` config option is only respected when using ` + `a build of Vue.js that includes the runtime compiler (aka "full build"). ` + `Since you are using the runtime-only build, \`compilerOptions\` ` + `must be passed to \`@vue/compiler-dom\` in the build setup instead.\n` + `- For vue-loader: pass it via vue-loader's \`compilerOptions\` loader option.\n` + `- For vue-cli: see https://cli.vuejs.org/guide/webpack.html#modifying-options-of-a-loader\n` + `- For vite: pass it via @vitejs/plugin-vue options. See https://github.com/vitejs/vite/tree/main/packages/plugin-vue#example-for-passing-options-to-vuecompiler-dom`;
        Object.defineProperty(app.config, 'compilerOptions', {
            get () {
                _runtimeCore.warn(msg);
                return compilerOptions;
            },
            set () {
                _runtimeCore.warn(msg);
            }
        });
    }
}
function normalizeContainer(container) {
    if (_shared.isString(container)) {
        const res = document.querySelector(container);
        if (!res) _runtimeCore.warn(`Failed to mount app: mount target selector "${container}" returned null.`);
        return res;
    }
    if (window.ShadowRoot && container instanceof window.ShadowRoot && container.mode === 'closed') _runtimeCore.warn(`mounting on a ShadowRoot with \`{mode: "closed"}\` may lead to unpredictable bugs`);
    return container;
}
let ssrDirectiveInitialized = false;
/**
 * @internal
 */ const initDirectivesForSSR = ()=>{
    if (!ssrDirectiveInitialized) {
        ssrDirectiveInitialized = true;
        initVModelForSSR();
        initVShowForSSR();
    }
};

},{"@vue/runtime-core":"lmqBl","@vue/shared":"3SM3y","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lmqBl":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "EffectScope", ()=>_reactivity.EffectScope
);
parcelHelpers.export(exports, "ReactiveEffect", ()=>_reactivity.ReactiveEffect
);
parcelHelpers.export(exports, "customRef", ()=>_reactivity.customRef
);
parcelHelpers.export(exports, "effect", ()=>_reactivity.effect
);
parcelHelpers.export(exports, "effectScope", ()=>_reactivity.effectScope
);
parcelHelpers.export(exports, "getCurrentScope", ()=>_reactivity.getCurrentScope
);
parcelHelpers.export(exports, "isProxy", ()=>_reactivity.isProxy
);
parcelHelpers.export(exports, "isReactive", ()=>_reactivity.isReactive
);
parcelHelpers.export(exports, "isReadonly", ()=>_reactivity.isReadonly
);
parcelHelpers.export(exports, "isRef", ()=>_reactivity.isRef
);
parcelHelpers.export(exports, "isShallow", ()=>_reactivity.isShallow
);
parcelHelpers.export(exports, "markRaw", ()=>_reactivity.markRaw
);
parcelHelpers.export(exports, "onScopeDispose", ()=>_reactivity.onScopeDispose
);
parcelHelpers.export(exports, "proxyRefs", ()=>_reactivity.proxyRefs
);
parcelHelpers.export(exports, "reactive", ()=>_reactivity.reactive
);
parcelHelpers.export(exports, "readonly", ()=>_reactivity.readonly
);
parcelHelpers.export(exports, "ref", ()=>_reactivity.ref
);
parcelHelpers.export(exports, "shallowReactive", ()=>_reactivity.shallowReactive
);
parcelHelpers.export(exports, "shallowReadonly", ()=>_reactivity.shallowReadonly
);
parcelHelpers.export(exports, "shallowRef", ()=>_reactivity.shallowRef
);
parcelHelpers.export(exports, "stop", ()=>_reactivity.stop
);
parcelHelpers.export(exports, "toRaw", ()=>_reactivity.toRaw
);
parcelHelpers.export(exports, "toRef", ()=>_reactivity.toRef
);
parcelHelpers.export(exports, "toRefs", ()=>_reactivity.toRefs
);
parcelHelpers.export(exports, "triggerRef", ()=>_reactivity.triggerRef
);
parcelHelpers.export(exports, "unref", ()=>_reactivity.unref
);
parcelHelpers.export(exports, "camelize", ()=>_shared.camelize
);
parcelHelpers.export(exports, "capitalize", ()=>_shared.capitalize
);
parcelHelpers.export(exports, "normalizeClass", ()=>_shared.normalizeClass
);
parcelHelpers.export(exports, "normalizeProps", ()=>_shared.normalizeProps
);
parcelHelpers.export(exports, "normalizeStyle", ()=>_shared.normalizeStyle
);
parcelHelpers.export(exports, "toDisplayString", ()=>_shared.toDisplayString
);
parcelHelpers.export(exports, "toHandlerKey", ()=>_shared.toHandlerKey
);
parcelHelpers.export(exports, "BaseTransition", ()=>BaseTransition
);
parcelHelpers.export(exports, "Comment", ()=>Comment
);
parcelHelpers.export(exports, "Fragment", ()=>Fragment
);
parcelHelpers.export(exports, "KeepAlive", ()=>KeepAlive
);
parcelHelpers.export(exports, "Static", ()=>Static
);
parcelHelpers.export(exports, "Suspense", ()=>Suspense
);
parcelHelpers.export(exports, "Teleport", ()=>Teleport
);
parcelHelpers.export(exports, "Text", ()=>Text
);
parcelHelpers.export(exports, "callWithAsyncErrorHandling", ()=>callWithAsyncErrorHandling
);
parcelHelpers.export(exports, "callWithErrorHandling", ()=>callWithErrorHandling
);
parcelHelpers.export(exports, "cloneVNode", ()=>cloneVNode
);
parcelHelpers.export(exports, "compatUtils", ()=>compatUtils
);
parcelHelpers.export(exports, "computed", ()=>computed
);
parcelHelpers.export(exports, "createBlock", ()=>createBlock
);
parcelHelpers.export(exports, "createCommentVNode", ()=>createCommentVNode
);
parcelHelpers.export(exports, "createElementBlock", ()=>createElementBlock
);
parcelHelpers.export(exports, "createElementVNode", ()=>createBaseVNode
);
parcelHelpers.export(exports, "createHydrationRenderer", ()=>createHydrationRenderer
);
parcelHelpers.export(exports, "createPropsRestProxy", ()=>createPropsRestProxy
);
parcelHelpers.export(exports, "createRenderer", ()=>createRenderer
);
parcelHelpers.export(exports, "createSlots", ()=>createSlots
);
parcelHelpers.export(exports, "createStaticVNode", ()=>createStaticVNode
);
parcelHelpers.export(exports, "createTextVNode", ()=>createTextVNode
);
parcelHelpers.export(exports, "createVNode", ()=>createVNode
);
parcelHelpers.export(exports, "defineAsyncComponent", ()=>defineAsyncComponent
);
parcelHelpers.export(exports, "defineComponent", ()=>defineComponent
);
parcelHelpers.export(exports, "defineEmits", ()=>defineEmits
);
parcelHelpers.export(exports, "defineExpose", ()=>defineExpose
);
parcelHelpers.export(exports, "defineProps", ()=>defineProps
);
parcelHelpers.export(exports, "devtools", ()=>devtools
);
parcelHelpers.export(exports, "getCurrentInstance", ()=>getCurrentInstance
);
parcelHelpers.export(exports, "getTransitionRawChildren", ()=>getTransitionRawChildren
);
parcelHelpers.export(exports, "guardReactiveProps", ()=>guardReactiveProps
);
parcelHelpers.export(exports, "h", ()=>h
);
parcelHelpers.export(exports, "handleError", ()=>handleError
);
parcelHelpers.export(exports, "initCustomFormatter", ()=>initCustomFormatter
);
parcelHelpers.export(exports, "inject", ()=>inject
);
parcelHelpers.export(exports, "isMemoSame", ()=>isMemoSame
);
parcelHelpers.export(exports, "isRuntimeOnly", ()=>isRuntimeOnly
);
parcelHelpers.export(exports, "isVNode", ()=>isVNode
);
parcelHelpers.export(exports, "mergeDefaults", ()=>mergeDefaults
);
parcelHelpers.export(exports, "mergeProps", ()=>mergeProps
);
parcelHelpers.export(exports, "nextTick", ()=>nextTick
);
parcelHelpers.export(exports, "onActivated", ()=>onActivated
);
parcelHelpers.export(exports, "onBeforeMount", ()=>onBeforeMount
);
parcelHelpers.export(exports, "onBeforeUnmount", ()=>onBeforeUnmount
);
parcelHelpers.export(exports, "onBeforeUpdate", ()=>onBeforeUpdate
);
parcelHelpers.export(exports, "onDeactivated", ()=>onDeactivated
);
parcelHelpers.export(exports, "onErrorCaptured", ()=>onErrorCaptured
);
parcelHelpers.export(exports, "onMounted", ()=>onMounted
);
parcelHelpers.export(exports, "onRenderTracked", ()=>onRenderTracked
);
parcelHelpers.export(exports, "onRenderTriggered", ()=>onRenderTriggered
);
parcelHelpers.export(exports, "onServerPrefetch", ()=>onServerPrefetch
);
parcelHelpers.export(exports, "onUnmounted", ()=>onUnmounted
);
parcelHelpers.export(exports, "onUpdated", ()=>onUpdated
);
parcelHelpers.export(exports, "openBlock", ()=>openBlock
);
parcelHelpers.export(exports, "popScopeId", ()=>popScopeId
);
parcelHelpers.export(exports, "provide", ()=>provide
);
parcelHelpers.export(exports, "pushScopeId", ()=>pushScopeId
);
parcelHelpers.export(exports, "queuePostFlushCb", ()=>queuePostFlushCb
);
parcelHelpers.export(exports, "registerRuntimeCompiler", ()=>registerRuntimeCompiler
);
parcelHelpers.export(exports, "renderList", ()=>renderList
);
parcelHelpers.export(exports, "renderSlot", ()=>renderSlot
);
parcelHelpers.export(exports, "resolveComponent", ()=>resolveComponent
);
parcelHelpers.export(exports, "resolveDirective", ()=>resolveDirective
);
parcelHelpers.export(exports, "resolveDynamicComponent", ()=>resolveDynamicComponent
);
parcelHelpers.export(exports, "resolveFilter", ()=>resolveFilter
);
parcelHelpers.export(exports, "resolveTransitionHooks", ()=>resolveTransitionHooks
);
parcelHelpers.export(exports, "setBlockTracking", ()=>setBlockTracking
);
parcelHelpers.export(exports, "setDevtoolsHook", ()=>setDevtoolsHook
);
parcelHelpers.export(exports, "setTransitionHooks", ()=>setTransitionHooks
);
parcelHelpers.export(exports, "ssrContextKey", ()=>ssrContextKey
);
parcelHelpers.export(exports, "ssrUtils", ()=>ssrUtils
);
parcelHelpers.export(exports, "toHandlers", ()=>toHandlers
);
parcelHelpers.export(exports, "transformVNodeArgs", ()=>transformVNodeArgs
);
parcelHelpers.export(exports, "useAttrs", ()=>useAttrs
);
parcelHelpers.export(exports, "useSSRContext", ()=>useSSRContext
);
parcelHelpers.export(exports, "useSlots", ()=>useSlots
);
parcelHelpers.export(exports, "useTransitionState", ()=>useTransitionState
);
parcelHelpers.export(exports, "version", ()=>version
);
parcelHelpers.export(exports, "warn", ()=>warn
);
parcelHelpers.export(exports, "watch", ()=>watch
);
parcelHelpers.export(exports, "watchEffect", ()=>watchEffect
);
parcelHelpers.export(exports, "watchPostEffect", ()=>watchPostEffect
);
parcelHelpers.export(exports, "watchSyncEffect", ()=>watchSyncEffect
);
parcelHelpers.export(exports, "withAsyncContext", ()=>withAsyncContext
);
parcelHelpers.export(exports, "withCtx", ()=>withCtx
);
parcelHelpers.export(exports, "withDefaults", ()=>withDefaults
);
parcelHelpers.export(exports, "withDirectives", ()=>withDirectives
);
parcelHelpers.export(exports, "withMemo", ()=>withMemo
);
parcelHelpers.export(exports, "withScopeId", ()=>withScopeId
);
var _reactivity = require("@vue/reactivity");
var _shared = require("@vue/shared");
const stack = [];
function pushWarningContext(vnode) {
    stack.push(vnode);
}
function popWarningContext() {
    stack.pop();
}
function warn(msg, ...args) {
    // avoid props formatting or warn handler tracking deps that might be mutated
    // during patch, leading to infinite recursion.
    _reactivity.pauseTracking();
    const instance = stack.length ? stack[stack.length - 1].component : null;
    const appWarnHandler = instance && instance.appContext.config.warnHandler;
    const trace = getComponentTrace();
    if (appWarnHandler) callWithErrorHandling(appWarnHandler, instance, 11 /* APP_WARN_HANDLER */ , [
        msg + args.join(''),
        instance && instance.proxy,
        trace.map(({ vnode  })=>`at <${formatComponentName(instance, vnode.type)}>`
        ).join('\n'),
        trace
    ]);
    else {
        const warnArgs = [
            `[Vue warn]: ${msg}`,
            ...args
        ];
        /* istanbul ignore if */ if (trace.length && // avoid spamming console during tests
        true) warnArgs.push(`\n`, ...formatTrace(trace));
        console.warn(...warnArgs);
    }
    _reactivity.resetTracking();
}
function getComponentTrace() {
    let currentVNode = stack[stack.length - 1];
    if (!currentVNode) return [];
    // we can't just use the stack because it will be incomplete during updates
    // that did not start from the root. Re-construct the parent chain using
    // instance parent pointers.
    const normalizedStack = [];
    while(currentVNode){
        const last = normalizedStack[0];
        if (last && last.vnode === currentVNode) last.recurseCount++;
        else normalizedStack.push({
            vnode: currentVNode,
            recurseCount: 0
        });
        const parentInstance = currentVNode.component && currentVNode.component.parent;
        currentVNode = parentInstance && parentInstance.vnode;
    }
    return normalizedStack;
}
/* istanbul ignore next */ function formatTrace(trace) {
    const logs = [];
    trace.forEach((entry, i)=>{
        logs.push(...i === 0 ? [] : [
            `\n`
        ], ...formatTraceEntry(entry));
    });
    return logs;
}
function formatTraceEntry({ vnode , recurseCount  }) {
    const postfix = recurseCount > 0 ? `... (${recurseCount} recursive calls)` : ``;
    const isRoot = vnode.component ? vnode.component.parent == null : false;
    const open = ` at <${formatComponentName(vnode.component, vnode.type, isRoot)}`;
    const close = `>` + postfix;
    return vnode.props ? [
        open,
        ...formatProps(vnode.props),
        close
    ] : [
        open + close
    ];
}
/* istanbul ignore next */ function formatProps(props) {
    const res = [];
    const keys = Object.keys(props);
    keys.slice(0, 3).forEach((key)=>{
        res.push(...formatProp(key, props[key]));
    });
    if (keys.length > 3) res.push(` ...`);
    return res;
}
/* istanbul ignore next */ function formatProp(key, value, raw) {
    if (_shared.isString(value)) {
        value = JSON.stringify(value);
        return raw ? value : [
            `${key}=${value}`
        ];
    } else if (typeof value === 'number' || typeof value === 'boolean' || value == null) return raw ? value : [
        `${key}=${value}`
    ];
    else if (_reactivity.isRef(value)) {
        value = formatProp(key, _reactivity.toRaw(value.value), true);
        return raw ? value : [
            `${key}=Ref<`,
            value,
            `>`
        ];
    } else if (_shared.isFunction(value)) return [
        `${key}=fn${value.name ? `<${value.name}>` : ``}`
    ];
    else {
        value = _reactivity.toRaw(value);
        return raw ? value : [
            `${key}=`,
            value
        ];
    }
}
const ErrorTypeStrings = {
    ["sp" /* SERVER_PREFETCH */ ]: 'serverPrefetch hook',
    ["bc" /* BEFORE_CREATE */ ]: 'beforeCreate hook',
    ["c" /* CREATED */ ]: 'created hook',
    ["bm" /* BEFORE_MOUNT */ ]: 'beforeMount hook',
    ["m" /* MOUNTED */ ]: 'mounted hook',
    ["bu" /* BEFORE_UPDATE */ ]: 'beforeUpdate hook',
    ["u" /* UPDATED */ ]: 'updated',
    ["bum" /* BEFORE_UNMOUNT */ ]: 'beforeUnmount hook',
    ["um" /* UNMOUNTED */ ]: 'unmounted hook',
    ["a" /* ACTIVATED */ ]: 'activated hook',
    ["da" /* DEACTIVATED */ ]: 'deactivated hook',
    ["ec" /* ERROR_CAPTURED */ ]: 'errorCaptured hook',
    ["rtc" /* RENDER_TRACKED */ ]: 'renderTracked hook',
    ["rtg" /* RENDER_TRIGGERED */ ]: 'renderTriggered hook',
    [0 /* SETUP_FUNCTION */ ]: 'setup function',
    [1 /* RENDER_FUNCTION */ ]: 'render function',
    [2 /* WATCH_GETTER */ ]: 'watcher getter',
    [3 /* WATCH_CALLBACK */ ]: 'watcher callback',
    [4 /* WATCH_CLEANUP */ ]: 'watcher cleanup function',
    [5 /* NATIVE_EVENT_HANDLER */ ]: 'native event handler',
    [6 /* COMPONENT_EVENT_HANDLER */ ]: 'component event handler',
    [7 /* VNODE_HOOK */ ]: 'vnode hook',
    [8 /* DIRECTIVE_HOOK */ ]: 'directive hook',
    [9 /* TRANSITION_HOOK */ ]: 'transition hook',
    [10 /* APP_ERROR_HANDLER */ ]: 'app errorHandler',
    [11 /* APP_WARN_HANDLER */ ]: 'app warnHandler',
    [12 /* FUNCTION_REF */ ]: 'ref function',
    [13 /* ASYNC_COMPONENT_LOADER */ ]: 'async component loader',
    [14 /* SCHEDULER */ ]: "scheduler flush. This is likely a Vue internals bug. Please open an issue at https://new-issue.vuejs.org/?repo=vuejs/core"
};
function callWithErrorHandling(fn, instance, type, args) {
    let res;
    try {
        res = args ? fn(...args) : fn();
    } catch (err) {
        handleError(err, instance, type);
    }
    return res;
}
function callWithAsyncErrorHandling(fn, instance, type, args) {
    if (_shared.isFunction(fn)) {
        const res = callWithErrorHandling(fn, instance, type, args);
        if (res && _shared.isPromise(res)) res.catch((err)=>{
            handleError(err, instance, type);
        });
        return res;
    }
    const values = [];
    for(let i = 0; i < fn.length; i++)values.push(callWithAsyncErrorHandling(fn[i], instance, type, args));
    return values;
}
function handleError(err, instance, type, throwInDev = true) {
    const contextVNode = instance ? instance.vnode : null;
    if (instance) {
        let cur = instance.parent;
        // the exposed instance is the render proxy to keep it consistent with 2.x
        const exposedInstance = instance.proxy;
        // in production the hook receives only the error code
        const errorInfo = ErrorTypeStrings[type];
        while(cur){
            const errorCapturedHooks = cur.ec;
            if (errorCapturedHooks) for(let i = 0; i < errorCapturedHooks.length; i++){
                if (errorCapturedHooks[i](err, exposedInstance, errorInfo) === false) return;
            }
            cur = cur.parent;
        }
        // app-level handling
        const appErrorHandler = instance.appContext.config.errorHandler;
        if (appErrorHandler) {
            callWithErrorHandling(appErrorHandler, null, 10 /* APP_ERROR_HANDLER */ , [
                err,
                exposedInstance,
                errorInfo
            ]);
            return;
        }
    }
    logError(err, type, contextVNode, throwInDev);
}
function logError(err, type, contextVNode, throwInDev = true) {
    {
        const info = ErrorTypeStrings[type];
        if (contextVNode) pushWarningContext(contextVNode);
        warn(`Unhandled error${info ? ` during execution of ${info}` : ``}`);
        if (contextVNode) popWarningContext();
        // crash in dev by default so it's more noticeable
        if (throwInDev) throw err;
        else console.error(err);
    }
}
let isFlushing = false;
let isFlushPending = false;
const queue = [];
let flushIndex = 0;
const pendingPreFlushCbs = [];
let activePreFlushCbs = null;
let preFlushIndex = 0;
const pendingPostFlushCbs = [];
let activePostFlushCbs = null;
let postFlushIndex = 0;
const resolvedPromise = Promise.resolve();
let currentFlushPromise = null;
let currentPreFlushParentJob = null;
const RECURSION_LIMIT = 100;
function nextTick(fn) {
    const p = currentFlushPromise || resolvedPromise;
    return fn ? p.then(this ? fn.bind(this) : fn) : p;
}
// #2768
// Use binary-search to find a suitable position in the queue,
// so that the queue maintains the increasing order of job's id,
// which can prevent the job from being skipped and also can avoid repeated patching.
function findInsertionIndex(id) {
    // the start index should be `flushIndex + 1`
    let start = flushIndex + 1;
    let end = queue.length;
    while(start < end){
        const middle = start + end >>> 1;
        const middleJobId = getId(queue[middle]);
        middleJobId < id ? start = middle + 1 : end = middle;
    }
    return start;
}
function queueJob(job) {
    // the dedupe search uses the startIndex argument of Array.includes()
    // by default the search index includes the current job that is being run
    // so it cannot recursively trigger itself again.
    // if the job is a watch() callback, the search will start with a +1 index to
    // allow it recursively trigger itself - it is the user's responsibility to
    // ensure it doesn't end up in an infinite loop.
    if ((!queue.length || !queue.includes(job, isFlushing && job.allowRecurse ? flushIndex + 1 : flushIndex)) && job !== currentPreFlushParentJob) {
        if (job.id == null) queue.push(job);
        else queue.splice(findInsertionIndex(job.id), 0, job);
        queueFlush();
    }
}
function queueFlush() {
    if (!isFlushing && !isFlushPending) {
        isFlushPending = true;
        currentFlushPromise = resolvedPromise.then(flushJobs);
    }
}
function invalidateJob(job) {
    const i = queue.indexOf(job);
    if (i > flushIndex) queue.splice(i, 1);
}
function queueCb(cb, activeQueue, pendingQueue, index) {
    if (!_shared.isArray(cb)) {
        if (!activeQueue || !activeQueue.includes(cb, cb.allowRecurse ? index + 1 : index)) pendingQueue.push(cb);
    } else // if cb is an array, it is a component lifecycle hook which can only be
    // triggered by a job, which is already deduped in the main queue, so
    // we can skip duplicate check here to improve perf
    pendingQueue.push(...cb);
    queueFlush();
}
function queuePreFlushCb(cb) {
    queueCb(cb, activePreFlushCbs, pendingPreFlushCbs, preFlushIndex);
}
function queuePostFlushCb(cb) {
    queueCb(cb, activePostFlushCbs, pendingPostFlushCbs, postFlushIndex);
}
function flushPreFlushCbs(seen, parentJob = null) {
    if (pendingPreFlushCbs.length) {
        currentPreFlushParentJob = parentJob;
        activePreFlushCbs = [
            ...new Set(pendingPreFlushCbs)
        ];
        pendingPreFlushCbs.length = 0;
        seen = seen || new Map();
        for(preFlushIndex = 0; preFlushIndex < activePreFlushCbs.length; preFlushIndex++){
            if (checkRecursiveUpdates(seen, activePreFlushCbs[preFlushIndex])) continue;
            activePreFlushCbs[preFlushIndex]();
        }
        activePreFlushCbs = null;
        preFlushIndex = 0;
        currentPreFlushParentJob = null;
        // recursively flush until it drains
        flushPreFlushCbs(seen, parentJob);
    }
}
function flushPostFlushCbs(seen) {
    if (pendingPostFlushCbs.length) {
        const deduped = [
            ...new Set(pendingPostFlushCbs)
        ];
        pendingPostFlushCbs.length = 0;
        // #1947 already has active queue, nested flushPostFlushCbs call
        if (activePostFlushCbs) {
            activePostFlushCbs.push(...deduped);
            return;
        }
        activePostFlushCbs = deduped;
        seen = seen || new Map();
        activePostFlushCbs.sort((a, b)=>getId(a) - getId(b)
        );
        for(postFlushIndex = 0; postFlushIndex < activePostFlushCbs.length; postFlushIndex++){
            if (checkRecursiveUpdates(seen, activePostFlushCbs[postFlushIndex])) continue;
            activePostFlushCbs[postFlushIndex]();
        }
        activePostFlushCbs = null;
        postFlushIndex = 0;
    }
}
const getId = (job)=>job.id == null ? Infinity : job.id
;
function flushJobs(seen) {
    isFlushPending = false;
    isFlushing = true;
    seen = seen || new Map();
    flushPreFlushCbs(seen);
    // Sort queue before flush.
    // This ensures that:
    // 1. Components are updated from parent to child. (because parent is always
    //    created before the child so its render effect will have smaller
    //    priority number)
    // 2. If a component is unmounted during a parent component's update,
    //    its update can be skipped.
    queue.sort((a, b)=>getId(a) - getId(b)
    );
    // conditional usage of checkRecursiveUpdate must be determined out of
    // try ... catch block since Rollup by default de-optimizes treeshaking
    // inside try-catch. This can leave all warning code unshaked. Although
    // they would get eventually shaken by a minifier like terser, some minifiers
    // would fail to do that (e.g. https://github.com/evanw/esbuild/issues/1610)
    const check = (job)=>checkRecursiveUpdates(seen, job)
    ;
    try {
        for(flushIndex = 0; flushIndex < queue.length; flushIndex++){
            const job = queue[flushIndex];
            if (job && job.active !== false) {
                if (check(job)) continue;
                // console.log(`running:`, job.id)
                callWithErrorHandling(job, null, 14 /* SCHEDULER */ );
            }
        }
    } finally{
        flushIndex = 0;
        queue.length = 0;
        flushPostFlushCbs(seen);
        isFlushing = false;
        currentFlushPromise = null;
        // some postFlushCb queued jobs!
        // keep flushing until it drains.
        if (queue.length || pendingPreFlushCbs.length || pendingPostFlushCbs.length) flushJobs(seen);
    }
}
function checkRecursiveUpdates(seen, fn) {
    if (!seen.has(fn)) seen.set(fn, 1);
    else {
        const count = seen.get(fn);
        if (count > RECURSION_LIMIT) {
            const instance = fn.ownerInstance;
            const componentName = instance && getComponentName(instance.type);
            warn(`Maximum recursive updates exceeded${componentName ? ` in component <${componentName}>` : ``}. ` + `This means you have a reactive effect that is mutating its own ` + `dependencies and thus recursively triggering itself. Possible sources ` + `include component template, render function, updated hook or ` + `watcher source function.`);
            return true;
        } else seen.set(fn, count + 1);
    }
}
/* eslint-disable no-restricted-globals */ let isHmrUpdating = false;
const hmrDirtyComponents = new Set();
_shared.getGlobalThis().__VUE_HMR_RUNTIME__ = {
    createRecord: tryWrap(createRecord),
    rerender: tryWrap(rerender),
    reload: tryWrap(reload)
};
const map = new Map();
function registerHMR(instance) {
    const id = instance.type.__hmrId;
    let record = map.get(id);
    if (!record) {
        createRecord(id, instance.type);
        record = map.get(id);
    }
    record.instances.add(instance);
}
function unregisterHMR(instance) {
    map.get(instance.type.__hmrId).instances.delete(instance);
}
function createRecord(id, initialDef) {
    if (map.has(id)) return false;
    map.set(id, {
        initialDef: normalizeClassComponent(initialDef),
        instances: new Set()
    });
    return true;
}
function normalizeClassComponent(component) {
    return isClassComponent(component) ? component.__vccOpts : component;
}
function rerender(id, newRender) {
    const record = map.get(id);
    if (!record) return;
    // update initial record (for not-yet-rendered component)
    record.initialDef.render = newRender;
    [
        ...record.instances
    ].forEach((instance)=>{
        if (newRender) {
            instance.render = newRender;
            normalizeClassComponent(instance.type).render = newRender;
        }
        instance.renderCache = [];
        // this flag forces child components with slot content to update
        isHmrUpdating = true;
        instance.update();
        isHmrUpdating = false;
    });
}
function reload(id, newComp) {
    const record = map.get(id);
    if (!record) return;
    newComp = normalizeClassComponent(newComp);
    // update initial def (for not-yet-rendered components)
    updateComponentDef(record.initialDef, newComp);
    // create a snapshot which avoids the set being mutated during updates
    const instances = [
        ...record.instances
    ];
    for (const instance1 of instances){
        const oldComp = normalizeClassComponent(instance1.type);
        if (!hmrDirtyComponents.has(oldComp)) {
            // 1. Update existing comp definition to match new one
            if (oldComp !== record.initialDef) updateComponentDef(oldComp, newComp);
            // 2. mark definition dirty. This forces the renderer to replace the
            // component on patch.
            hmrDirtyComponents.add(oldComp);
        }
        // 3. invalidate options resolution cache
        instance1.appContext.optionsCache.delete(instance1.type);
        // 4. actually update
        if (instance1.ceReload) {
            // custom element
            hmrDirtyComponents.add(oldComp);
            instance1.ceReload(newComp.styles);
            hmrDirtyComponents.delete(oldComp);
        } else if (instance1.parent) {
            // 4. Force the parent instance to re-render. This will cause all updated
            // components to be unmounted and re-mounted. Queue the update so that we
            // don't end up forcing the same parent to re-render multiple times.
            queueJob(instance1.parent.update);
            // instance is the inner component of an async custom element
            // invoke to reset styles
            if (instance1.parent.type.__asyncLoader && instance1.parent.ceReload) instance1.parent.ceReload(newComp.styles);
        } else if (instance1.appContext.reload) // root instance mounted via createApp() has a reload method
        instance1.appContext.reload();
        else if (typeof window !== 'undefined') // root instance inside tree created via raw render(). Force reload.
        window.location.reload();
        else console.warn('[HMR] Root or manually mounted instance modified. Full reload required.');
    }
    // 5. make sure to cleanup dirty hmr components after update
    queuePostFlushCb(()=>{
        for (const instance of instances)hmrDirtyComponents.delete(normalizeClassComponent(instance.type));
    });
}
function updateComponentDef(oldComp, newComp) {
    _shared.extend(oldComp, newComp);
    for(const key in oldComp)if (key !== '__file' && !(key in newComp)) delete oldComp[key];
}
function tryWrap(fn) {
    return (id, arg)=>{
        try {
            return fn(id, arg);
        } catch (e) {
            console.error(e);
            console.warn(`[HMR] Something went wrong during Vue component hot-reload. ` + `Full reload required.`);
        }
    };
}
let devtools;
let buffer = [];
let devtoolsNotInstalled = false;
function emit(event, ...args) {
    if (devtools) devtools.emit(event, ...args);
    else if (!devtoolsNotInstalled) buffer.push({
        event,
        args
    });
}
function setDevtoolsHook(hook, target) {
    var _a, _b;
    devtools = hook;
    if (devtools) {
        devtools.enabled = true;
        buffer.forEach(({ event , args  })=>devtools.emit(event, ...args)
        );
        buffer = [];
    } else if (// handle late devtools injection - only do this if we are in an actual
    // browser environment to avoid the timer handle stalling test runner exit
    // (#4815)
    // eslint-disable-next-line no-restricted-globals
    typeof window !== 'undefined' && // some envs mock window but not fully
    window.HTMLElement && // also exclude jsdom
    !((_b = (_a = window.navigator) === null || _a === void 0 ? void 0 : _a.userAgent) === null || _b === void 0 ? void 0 : _b.includes('jsdom'))) {
        const replay = target.__VUE_DEVTOOLS_HOOK_REPLAY__ = target.__VUE_DEVTOOLS_HOOK_REPLAY__ || [];
        replay.push((newHook)=>{
            setDevtoolsHook(newHook, target);
        });
        // clear buffer after 3s - the user probably doesn't have devtools installed
        // at all, and keeping the buffer will cause memory leaks (#4738)
        setTimeout(()=>{
            if (!devtools) {
                target.__VUE_DEVTOOLS_HOOK_REPLAY__ = null;
                devtoolsNotInstalled = true;
                buffer = [];
            }
        }, 3000);
    } else {
        // non-browser env, assume not installed
        devtoolsNotInstalled = true;
        buffer = [];
    }
}
function devtoolsInitApp(app, version1) {
    emit("app:init" /* APP_INIT */ , app, version1, {
        Fragment,
        Text,
        Comment,
        Static
    });
}
function devtoolsUnmountApp(app) {
    emit("app:unmount" /* APP_UNMOUNT */ , app);
}
const devtoolsComponentAdded = /*#__PURE__*/ createDevtoolsComponentHook("component:added" /* COMPONENT_ADDED */ );
const devtoolsComponentUpdated = /*#__PURE__*/ createDevtoolsComponentHook("component:updated" /* COMPONENT_UPDATED */ );
const devtoolsComponentRemoved = /*#__PURE__*/ createDevtoolsComponentHook("component:removed" /* COMPONENT_REMOVED */ );
function createDevtoolsComponentHook(hook) {
    return (component)=>{
        emit(hook, component.appContext.app, component.uid, component.parent ? component.parent.uid : undefined, component);
    };
}
const devtoolsPerfStart = /*#__PURE__*/ createDevtoolsPerformanceHook("perf:start" /* PERFORMANCE_START */ );
const devtoolsPerfEnd = /*#__PURE__*/ createDevtoolsPerformanceHook("perf:end" /* PERFORMANCE_END */ );
function createDevtoolsPerformanceHook(hook) {
    return (component, type, time)=>{
        emit(hook, component.appContext.app, component.uid, component, type, time);
    };
}
function devtoolsComponentEmit(component, event, params) {
    emit("component:emit" /* COMPONENT_EMIT */ , component.appContext.app, component, event, params);
}
function emit$1(instance, event, ...rawArgs) {
    const props = instance.vnode.props || _shared.EMPTY_OBJ;
    {
        const { emitsOptions , propsOptions: [propsOptions]  } = instance;
        if (emitsOptions) {
            if (!(event in emitsOptions) && true) {
                if (!propsOptions || !(_shared.toHandlerKey(event) in propsOptions)) warn(`Component emitted event "${event}" but it is neither declared in ` + `the emits option nor as an "${_shared.toHandlerKey(event)}" prop.`);
            } else {
                const validator = emitsOptions[event];
                if (_shared.isFunction(validator)) {
                    const isValid = validator(...rawArgs);
                    if (!isValid) warn(`Invalid event arguments: event validation failed for event "${event}".`);
                }
            }
        }
    }
    let args = rawArgs;
    const isModelListener = event.startsWith('update:');
    // for v-model update:xxx events, apply modifiers on args
    const modelArg = isModelListener && event.slice(7);
    if (modelArg && modelArg in props) {
        const modifiersKey = `${modelArg === 'modelValue' ? 'model' : modelArg}Modifiers`;
        const { number , trim  } = props[modifiersKey] || _shared.EMPTY_OBJ;
        if (trim) args = rawArgs.map((a)=>a.trim()
        );
        else if (number) args = rawArgs.map(_shared.toNumber);
    }
    devtoolsComponentEmit(instance, event, args);
    {
        const lowerCaseEvent = event.toLowerCase();
        if (lowerCaseEvent !== event && props[_shared.toHandlerKey(lowerCaseEvent)]) warn(`Event "${lowerCaseEvent}" is emitted in component ` + `${formatComponentName(instance, instance.type)} but the handler is registered for "${event}". ` + `Note that HTML attributes are case-insensitive and you cannot use ` + `v-on to listen to camelCase events when using in-DOM templates. ` + `You should probably use "${_shared.hyphenate(event)}" instead of "${event}".`);
    }
    let handlerName;
    let handler = props[handlerName = _shared.toHandlerKey(event)] || // also try camelCase event handler (#2249)
    props[handlerName = _shared.toHandlerKey(_shared.camelize(event))];
    // for v-model update:xxx events, also trigger kebab-case equivalent
    // for props passed via kebab-case
    if (!handler && isModelListener) handler = props[handlerName = _shared.toHandlerKey(_shared.hyphenate(event))];
    if (handler) callWithAsyncErrorHandling(handler, instance, 6 /* COMPONENT_EVENT_HANDLER */ , args);
    const onceHandler = props[handlerName + `Once`];
    if (onceHandler) {
        if (!instance.emitted) instance.emitted = {};
        else if (instance.emitted[handlerName]) return;
        instance.emitted[handlerName] = true;
        callWithAsyncErrorHandling(onceHandler, instance, 6 /* COMPONENT_EVENT_HANDLER */ , args);
    }
}
function normalizeEmitsOptions(comp, appContext, asMixin = false) {
    const cache = appContext.emitsCache;
    const cached = cache.get(comp);
    if (cached !== undefined) return cached;
    const raw1 = comp.emits;
    let normalized = {};
    // apply mixin/extends props
    let hasExtends = false;
    if (__VUE_OPTIONS_API__ && !_shared.isFunction(comp)) {
        const extendEmits = (raw)=>{
            const normalizedFromExtend = normalizeEmitsOptions(raw, appContext, true);
            if (normalizedFromExtend) {
                hasExtends = true;
                _shared.extend(normalized, normalizedFromExtend);
            }
        };
        if (!asMixin && appContext.mixins.length) appContext.mixins.forEach(extendEmits);
        if (comp.extends) extendEmits(comp.extends);
        if (comp.mixins) comp.mixins.forEach(extendEmits);
    }
    if (!raw1 && !hasExtends) {
        cache.set(comp, null);
        return null;
    }
    if (_shared.isArray(raw1)) raw1.forEach((key)=>normalized[key] = null
    );
    else _shared.extend(normalized, raw1);
    cache.set(comp, normalized);
    return normalized;
}
// Check if an incoming prop key is a declared emit event listener.
// e.g. With `emits: { click: null }`, props named `onClick` and `onclick` are
// both considered matched listeners.
function isEmitListener(options, key) {
    if (!options || !_shared.isOn(key)) return false;
    key = key.slice(2).replace(/Once$/, '');
    return _shared.hasOwn(options, key[0].toLowerCase() + key.slice(1)) || _shared.hasOwn(options, _shared.hyphenate(key)) || _shared.hasOwn(options, key);
}
/**
 * mark the current rendering instance for asset resolution (e.g.
 * resolveComponent, resolveDirective) during render
 */ let currentRenderingInstance = null;
let currentScopeId = null;
/**
 * Note: rendering calls maybe nested. The function returns the parent rendering
 * instance if present, which should be restored after the render is done:
 *
 * ```js
 * const prev = setCurrentRenderingInstance(i)
 * // ...render
 * setCurrentRenderingInstance(prev)
 * ```
 */ function setCurrentRenderingInstance(instance) {
    const prev = currentRenderingInstance;
    currentRenderingInstance = instance;
    currentScopeId = instance && instance.type.__scopeId || null;
    return prev;
}
/**
 * Set scope id when creating hoisted vnodes.
 * @private compiler helper
 */ function pushScopeId(id) {
    currentScopeId = id;
}
/**
 * Technically we no longer need this after 3.0.8 but we need to keep the same
 * API for backwards compat w/ code generated by compilers.
 * @private
 */ function popScopeId() {
    currentScopeId = null;
}
/**
 * Only for backwards compat
 * @private
 */ const withScopeId = (_id)=>withCtx
;
/**
 * Wrap a slot function to memoize current rendering instance
 * @private compiler helper
 */ function withCtx(fn, ctx = currentRenderingInstance, isNonScopedSlot // false only
) {
    if (!ctx) return fn;
    // already normalized
    if (fn._n) return fn;
    const renderFnWithContext = (...args)=>{
        // If a user calls a compiled slot inside a template expression (#1745), it
        // can mess up block tracking, so by default we disable block tracking and
        // force bail out when invoking a compiled slot (indicated by the ._d flag).
        // This isn't necessary if rendering a compiled `<slot>`, so we flip the
        // ._d flag off when invoking the wrapped fn inside `renderSlot`.
        if (renderFnWithContext._d) setBlockTracking(-1);
        const prevInstance = setCurrentRenderingInstance(ctx);
        const res = fn(...args);
        setCurrentRenderingInstance(prevInstance);
        if (renderFnWithContext._d) setBlockTracking(1);
        devtoolsComponentUpdated(ctx);
        return res;
    };
    // mark normalized to avoid duplicated wrapping
    renderFnWithContext._n = true;
    // mark this as compiled by default
    // this is used in vnode.ts -> normalizeChildren() to set the slot
    // rendering flag.
    renderFnWithContext._c = true;
    // disable block tracking by default
    renderFnWithContext._d = true;
    return renderFnWithContext;
}
/**
 * dev only flag to track whether $attrs was used during render.
 * If $attrs was used during render then the warning for failed attrs
 * fallthrough can be suppressed.
 */ let accessedAttrs = false;
function markAttrsAccessed() {
    accessedAttrs = true;
}
function renderComponentRoot(instance) {
    const { type: Component , vnode , proxy , withProxy , props , propsOptions: [propsOptions] , slots , attrs , emit: emit1 , render , renderCache , data , setupState , ctx , inheritAttrs  } = instance;
    let result;
    let fallthroughAttrs;
    const prev = setCurrentRenderingInstance(instance);
    accessedAttrs = false;
    try {
        if (vnode.shapeFlag & 4 /* STATEFUL_COMPONENT */ ) {
            // withProxy is a proxy with a different `has` trap only for
            // runtime-compiled render functions using `with` block.
            const proxyToUse = withProxy || proxy;
            result = normalizeVNode(render.call(proxyToUse, proxyToUse, renderCache, props, setupState, data, ctx));
            fallthroughAttrs = attrs;
        } else {
            // functional
            const render = Component;
            // in dev, mark attrs accessed if optional props (attrs === props)
            if (attrs === props) markAttrsAccessed();
            result = normalizeVNode(render.length > 1 ? render(props, {
                get attrs () {
                    markAttrsAccessed();
                    return attrs;
                },
                slots,
                emit: emit1
            }) : render(props, null));
            fallthroughAttrs = Component.props ? attrs : getFunctionalFallthrough(attrs);
        }
    } catch (err) {
        blockStack.length = 0;
        handleError(err, instance, 1 /* RENDER_FUNCTION */ );
        result = createVNode(Comment);
    }
    // attr merging
    // in dev mode, comments are preserved, and it's possible for a template
    // to have comments along side the root element which makes it a fragment
    let root = result;
    let setRoot = undefined;
    if (result.patchFlag > 0 && result.patchFlag & 2048 /* DEV_ROOT_FRAGMENT */ ) [root, setRoot] = getChildRoot(result);
    if (fallthroughAttrs && inheritAttrs !== false) {
        const keys = Object.keys(fallthroughAttrs);
        const { shapeFlag  } = root;
        if (keys.length) {
            if (shapeFlag & 7 /* COMPONENT */ ) {
                if (propsOptions && keys.some(_shared.isModelListener)) // If a v-model listener (onUpdate:xxx) has a corresponding declared
                // prop, it indicates this component expects to handle v-model and
                // it should not fallthrough.
                // related: #1543, #1643, #1989
                fallthroughAttrs = filterModelListeners(fallthroughAttrs, propsOptions);
                root = cloneVNode(root, fallthroughAttrs);
            } else if (!accessedAttrs && root.type !== Comment) {
                const allAttrs = Object.keys(attrs);
                const eventAttrs = [];
                const extraAttrs = [];
                for(let i = 0, l = allAttrs.length; i < l; i++){
                    const key = allAttrs[i];
                    if (_shared.isOn(key)) // ignore v-model handlers when they fail to fallthrough
                    {
                        if (!_shared.isModelListener(key)) // remove `on`, lowercase first letter to reflect event casing
                        // accurately
                        eventAttrs.push(key[2].toLowerCase() + key.slice(3));
                    } else extraAttrs.push(key);
                }
                if (extraAttrs.length) warn(`Extraneous non-props attributes (` + `${extraAttrs.join(', ')}) ` + `were passed to component but could not be automatically inherited ` + `because component renders fragment or text root nodes.`);
                if (eventAttrs.length) warn(`Extraneous non-emits event listeners (` + `${eventAttrs.join(', ')}) ` + `were passed to component but could not be automatically inherited ` + `because component renders fragment or text root nodes. ` + `If the listener is intended to be a component custom event listener only, ` + `declare it using the "emits" option.`);
            }
        }
    }
    // inherit directives
    if (vnode.dirs) {
        if (!isElementRoot(root)) warn(`Runtime directive used on component with non-element root node. ` + `The directives will not function as intended.`);
        root.dirs = root.dirs ? root.dirs.concat(vnode.dirs) : vnode.dirs;
    }
    // inherit transition data
    if (vnode.transition) {
        if (!isElementRoot(root)) warn(`Component inside <Transition> renders non-element root node ` + `that cannot be animated.`);
        root.transition = vnode.transition;
    }
    if (setRoot) setRoot(root);
    else result = root;
    setCurrentRenderingInstance(prev);
    return result;
}
/**
 * dev only
 * In dev mode, template root level comments are rendered, which turns the
 * template into a fragment root, but we need to locate the single element
 * root for attrs and scope id processing.
 */ const getChildRoot = (vnode)=>{
    const rawChildren = vnode.children;
    const dynamicChildren = vnode.dynamicChildren;
    const childRoot = filterSingleRoot(rawChildren);
    if (!childRoot) return [
        vnode,
        undefined
    ];
    const index = rawChildren.indexOf(childRoot);
    const dynamicIndex = dynamicChildren ? dynamicChildren.indexOf(childRoot) : -1;
    const setRoot = (updatedRoot)=>{
        rawChildren[index] = updatedRoot;
        if (dynamicChildren) {
            if (dynamicIndex > -1) dynamicChildren[dynamicIndex] = updatedRoot;
            else if (updatedRoot.patchFlag > 0) vnode.dynamicChildren = [
                ...dynamicChildren,
                updatedRoot
            ];
        }
    };
    return [
        normalizeVNode(childRoot),
        setRoot
    ];
};
function filterSingleRoot(children) {
    let singleRoot;
    for(let i = 0; i < children.length; i++){
        const child = children[i];
        if (isVNode(child)) // ignore user comment
        {
            if (child.type !== Comment || child.children === 'v-if') {
                if (singleRoot) // has more than 1 non-comment child, return now
                return;
                else singleRoot = child;
            }
        } else return;
    }
    return singleRoot;
}
const getFunctionalFallthrough = (attrs)=>{
    let res;
    for(const key in attrs)if (key === 'class' || key === 'style' || _shared.isOn(key)) (res || (res = {}))[key] = attrs[key];
    return res;
};
const filterModelListeners = (attrs, props)=>{
    const res = {};
    for(const key in attrs)if (!_shared.isModelListener(key) || !(key.slice(9) in props)) res[key] = attrs[key];
    return res;
};
const isElementRoot = (vnode)=>{
    return vnode.shapeFlag & 7 /* ELEMENT */  || vnode.type === Comment // potential v-if branch switch
    ;
};
function shouldUpdateComponent(prevVNode, nextVNode, optimized) {
    const { props: prevProps , children: prevChildren , component  } = prevVNode;
    const { props: nextProps , children: nextChildren , patchFlag  } = nextVNode;
    const emits = component.emitsOptions;
    // Parent component's render function was hot-updated. Since this may have
    // caused the child component's slots content to have changed, we need to
    // force the child to update as well.
    if ((prevChildren || nextChildren) && isHmrUpdating) return true;
    // force child update for runtime directive or transition on component vnode.
    if (nextVNode.dirs || nextVNode.transition) return true;
    if (optimized && patchFlag >= 0) {
        if (patchFlag & 1024 /* DYNAMIC_SLOTS */ ) // slot content that references values that might have changed,
        // e.g. in a v-for
        return true;
        if (patchFlag & 16 /* FULL_PROPS */ ) {
            if (!prevProps) return !!nextProps;
            // presence of this flag indicates props are always non-null
            return hasPropsChanged(prevProps, nextProps, emits);
        } else if (patchFlag & 8 /* PROPS */ ) {
            const dynamicProps = nextVNode.dynamicProps;
            for(let i = 0; i < dynamicProps.length; i++){
                const key = dynamicProps[i];
                if (nextProps[key] !== prevProps[key] && !isEmitListener(emits, key)) return true;
            }
        }
    } else {
        // this path is only taken by manually written render functions
        // so presence of any children leads to a forced update
        if (prevChildren || nextChildren) {
            if (!nextChildren || !nextChildren.$stable) return true;
        }
        if (prevProps === nextProps) return false;
        if (!prevProps) return !!nextProps;
        if (!nextProps) return true;
        return hasPropsChanged(prevProps, nextProps, emits);
    }
    return false;
}
function hasPropsChanged(prevProps, nextProps, emitsOptions) {
    const nextKeys = Object.keys(nextProps);
    if (nextKeys.length !== Object.keys(prevProps).length) return true;
    for(let i = 0; i < nextKeys.length; i++){
        const key = nextKeys[i];
        if (nextProps[key] !== prevProps[key] && !isEmitListener(emitsOptions, key)) return true;
    }
    return false;
}
function updateHOCHostEl({ vnode , parent  }, el // HostNode
) {
    while(parent && parent.subTree === vnode){
        (vnode = parent.vnode).el = el;
        parent = parent.parent;
    }
}
const isSuspense = (type)=>type.__isSuspense
;
// Suspense exposes a component-like API, and is treated like a component
// in the compiler, but internally it's a special built-in type that hooks
// directly into the renderer.
const SuspenseImpl = {
    name: 'Suspense',
    // In order to make Suspense tree-shakable, we need to avoid importing it
    // directly in the renderer. The renderer checks for the __isSuspense flag
    // on a vnode's type and calls the `process` method, passing in renderer
    // internals.
    __isSuspense: true,
    process (n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized, // platform-specific impl passed from renderer
    rendererInternals) {
        if (n1 == null) mountSuspense(n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized, rendererInternals);
        else patchSuspense(n1, n2, container, anchor, parentComponent, isSVG, slotScopeIds, optimized, rendererInternals);
    },
    hydrate: hydrateSuspense,
    create: createSuspenseBoundary,
    normalize: normalizeSuspenseChildren
};
// Force-casted public typing for h and TSX props inference
const Suspense = SuspenseImpl;
function triggerEvent(vnode, name) {
    const eventListener = vnode.props && vnode.props[name];
    if (_shared.isFunction(eventListener)) eventListener();
}
function mountSuspense(vnode, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized, rendererInternals) {
    const { p: patch , o: { createElement  }  } = rendererInternals;
    const hiddenContainer = createElement('div');
    const suspense = vnode.suspense = createSuspenseBoundary(vnode, parentSuspense, parentComponent, container, hiddenContainer, anchor, isSVG, slotScopeIds, optimized, rendererInternals);
    // start mounting the content subtree in an off-dom container
    patch(null, suspense.pendingBranch = vnode.ssContent, hiddenContainer, null, parentComponent, suspense, isSVG, slotScopeIds);
    // now check if we have encountered any async deps
    if (suspense.deps > 0) {
        // has async
        // invoke @fallback event
        triggerEvent(vnode, 'onPending');
        triggerEvent(vnode, 'onFallback');
        // mount the fallback tree
        patch(null, vnode.ssFallback, container, anchor, parentComponent, null, isSVG, slotScopeIds);
        setActiveBranch(suspense, vnode.ssFallback);
    } else // Suspense has no async deps. Just resolve.
    suspense.resolve();
}
function patchSuspense(n1, n2, container, anchor, parentComponent, isSVG, slotScopeIds, optimized, { p: patch , um: unmount , o: { createElement  }  }) {
    const suspense = n2.suspense = n1.suspense;
    suspense.vnode = n2;
    n2.el = n1.el;
    const newBranch = n2.ssContent;
    const newFallback = n2.ssFallback;
    const { activeBranch , pendingBranch , isInFallback , isHydrating  } = suspense;
    if (pendingBranch) {
        suspense.pendingBranch = newBranch;
        if (isSameVNodeType(newBranch, pendingBranch)) {
            // same root type but content may have changed.
            patch(pendingBranch, newBranch, suspense.hiddenContainer, null, parentComponent, suspense, isSVG, slotScopeIds, optimized);
            if (suspense.deps <= 0) suspense.resolve();
            else if (isInFallback) {
                patch(activeBranch, newFallback, container, anchor, parentComponent, null, isSVG, slotScopeIds, optimized);
                setActiveBranch(suspense, newFallback);
            }
        } else {
            // toggled before pending tree is resolved
            suspense.pendingId++;
            if (isHydrating) {
                // if toggled before hydration is finished, the current DOM tree is
                // no longer valid. set it as the active branch so it will be unmounted
                // when resolved
                suspense.isHydrating = false;
                suspense.activeBranch = pendingBranch;
            } else unmount(pendingBranch, parentComponent, suspense);
            // increment pending ID. this is used to invalidate async callbacks
            // reset suspense state
            suspense.deps = 0;
            // discard effects from pending branch
            suspense.effects.length = 0;
            // discard previous container
            suspense.hiddenContainer = createElement('div');
            if (isInFallback) {
                // already in fallback state
                patch(null, newBranch, suspense.hiddenContainer, null, parentComponent, suspense, isSVG, slotScopeIds, optimized);
                if (suspense.deps <= 0) suspense.resolve();
                else {
                    patch(activeBranch, newFallback, container, anchor, parentComponent, null, isSVG, slotScopeIds, optimized);
                    setActiveBranch(suspense, newFallback);
                }
            } else if (activeBranch && isSameVNodeType(newBranch, activeBranch)) {
                // toggled "back" to current active branch
                patch(activeBranch, newBranch, container, anchor, parentComponent, suspense, isSVG, slotScopeIds, optimized);
                // force resolve
                suspense.resolve(true);
            } else {
                // switched to a 3rd branch
                patch(null, newBranch, suspense.hiddenContainer, null, parentComponent, suspense, isSVG, slotScopeIds, optimized);
                if (suspense.deps <= 0) suspense.resolve();
            }
        }
    } else if (activeBranch && isSameVNodeType(newBranch, activeBranch)) {
        // root did not change, just normal patch
        patch(activeBranch, newBranch, container, anchor, parentComponent, suspense, isSVG, slotScopeIds, optimized);
        setActiveBranch(suspense, newBranch);
    } else {
        // root node toggled
        // invoke @pending event
        triggerEvent(n2, 'onPending');
        // mount pending branch in off-dom container
        suspense.pendingBranch = newBranch;
        suspense.pendingId++;
        patch(null, newBranch, suspense.hiddenContainer, null, parentComponent, suspense, isSVG, slotScopeIds, optimized);
        if (suspense.deps <= 0) // incoming branch has no async deps, resolve now.
        suspense.resolve();
        else {
            const { timeout , pendingId  } = suspense;
            if (timeout > 0) setTimeout(()=>{
                if (suspense.pendingId === pendingId) suspense.fallback(newFallback);
            }, timeout);
            else if (timeout === 0) suspense.fallback(newFallback);
        }
    }
}
let hasWarned = false;
function createSuspenseBoundary(vnode1, parent1, parentComponent1, container1, hiddenContainer, anchor1, isSVG1, slotScopeIds, optimized, rendererInternals, isHydrating = false) {
    /* istanbul ignore if */ if (!hasWarned) {
        hasWarned = true;
        // @ts-ignore `console.info` cannot be null error
        console[console.info ? 'info' : 'log'](`<Suspense> is an experimental feature and its API will likely change.`);
    }
    const { p: patch , m: move , um: unmount , n: next , o: { parentNode , remove  }  } = rendererInternals;
    const timeout = _shared.toNumber(vnode1.props && vnode1.props.timeout);
    const suspense = {
        vnode: vnode1,
        parent: parent1,
        parentComponent: parentComponent1,
        isSVG: isSVG1,
        container: container1,
        hiddenContainer,
        anchor: anchor1,
        deps: 0,
        pendingId: 0,
        timeout: typeof timeout === 'number' ? timeout : -1,
        activeBranch: null,
        pendingBranch: null,
        isInFallback: true,
        isHydrating,
        isUnmounted: false,
        effects: [],
        resolve (resume = false) {
            if (!resume && !suspense.pendingBranch) throw new Error(`suspense.resolve() is called without a pending branch.`);
            if (suspense.isUnmounted) throw new Error(`suspense.resolve() is called on an already unmounted suspense boundary.`);
            const { vnode , activeBranch , pendingBranch , pendingId , effects , parentComponent , container  } = suspense;
            if (suspense.isHydrating) suspense.isHydrating = false;
            else if (!resume) {
                const delayEnter = activeBranch && pendingBranch.transition && pendingBranch.transition.mode === 'out-in';
                if (delayEnter) activeBranch.transition.afterLeave = ()=>{
                    if (pendingId === suspense.pendingId) move(pendingBranch, container, anchor, 0 /* ENTER */ );
                };
                // this is initial anchor on mount
                let { anchor  } = suspense;
                // unmount current active tree
                if (activeBranch) {
                    // if the fallback tree was mounted, it may have been moved
                    // as part of a parent suspense. get the latest anchor for insertion
                    anchor = next(activeBranch);
                    unmount(activeBranch, parentComponent, suspense, true);
                }
                if (!delayEnter) // move content from off-dom container to actual container
                move(pendingBranch, container, anchor, 0 /* ENTER */ );
            }
            setActiveBranch(suspense, pendingBranch);
            suspense.pendingBranch = null;
            suspense.isInFallback = false;
            // flush buffered effects
            // check if there is a pending parent suspense
            let parent = suspense.parent;
            let hasUnresolvedAncestor = false;
            while(parent){
                if (parent.pendingBranch) {
                    // found a pending parent suspense, merge buffered post jobs
                    // into that parent
                    parent.effects.push(...effects);
                    hasUnresolvedAncestor = true;
                    break;
                }
                parent = parent.parent;
            }
            // no pending parent suspense, flush all jobs
            if (!hasUnresolvedAncestor) queuePostFlushCb(effects);
            suspense.effects = [];
            // invoke @resolve event
            triggerEvent(vnode, 'onResolve');
        },
        fallback (fallbackVNode) {
            if (!suspense.pendingBranch) return;
            const { vnode , activeBranch , parentComponent , container , isSVG  } = suspense;
            // invoke @fallback event
            triggerEvent(vnode, 'onFallback');
            const anchor = next(activeBranch);
            const mountFallback = ()=>{
                if (!suspense.isInFallback) return;
                // mount the fallback tree
                patch(null, fallbackVNode, container, anchor, parentComponent, null, isSVG, slotScopeIds, optimized);
                setActiveBranch(suspense, fallbackVNode);
            };
            const delayEnter = fallbackVNode.transition && fallbackVNode.transition.mode === 'out-in';
            if (delayEnter) activeBranch.transition.afterLeave = mountFallback;
            suspense.isInFallback = true;
            // unmount current active branch
            unmount(activeBranch, parentComponent, null, true // shouldRemove
            );
            if (!delayEnter) mountFallback();
        },
        move (container, anchor, type) {
            suspense.activeBranch && move(suspense.activeBranch, container, anchor, type);
            suspense.container = container;
        },
        next () {
            return suspense.activeBranch && next(suspense.activeBranch);
        },
        registerDep (instance, setupRenderEffect) {
            const isInPendingSuspense = !!suspense.pendingBranch;
            if (isInPendingSuspense) suspense.deps++;
            const hydratedEl = instance.vnode.el;
            instance.asyncDep.catch((err)=>{
                handleError(err, instance, 0 /* SETUP_FUNCTION */ );
            }).then((asyncSetupResult)=>{
                // retry when the setup() promise resolves.
                // component may have been unmounted before resolve.
                if (instance.isUnmounted || suspense.isUnmounted || suspense.pendingId !== instance.suspenseId) return;
                // retry from this component
                instance.asyncResolved = true;
                const { vnode  } = instance;
                pushWarningContext(vnode);
                handleSetupResult(instance, asyncSetupResult, false);
                if (hydratedEl) // vnode may have been replaced if an update happened before the
                // async dep is resolved.
                vnode.el = hydratedEl;
                const placeholder = !hydratedEl && instance.subTree.el;
                setupRenderEffect(instance, vnode, // component may have been moved before resolve.
                // if this is not a hydration, instance.subTree will be the comment
                // placeholder.
                parentNode(hydratedEl || instance.subTree.el), // anchor will not be used if this is hydration, so only need to
                // consider the comment placeholder case.
                hydratedEl ? null : next(instance.subTree), suspense, isSVG1, optimized);
                if (placeholder) remove(placeholder);
                updateHOCHostEl(instance, vnode.el);
                popWarningContext();
                // only decrease deps count if suspense is not already resolved
                if (isInPendingSuspense && --suspense.deps === 0) suspense.resolve();
            });
        },
        unmount (parentSuspense, doRemove) {
            suspense.isUnmounted = true;
            if (suspense.activeBranch) unmount(suspense.activeBranch, parentComponent1, parentSuspense, doRemove);
            if (suspense.pendingBranch) unmount(suspense.pendingBranch, parentComponent1, parentSuspense, doRemove);
        }
    };
    return suspense;
}
function hydrateSuspense(node, vnode, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized, rendererInternals, hydrateNode) {
    /* eslint-disable no-restricted-globals */ const suspense = vnode.suspense = createSuspenseBoundary(vnode, parentSuspense, parentComponent, node.parentNode, document.createElement('div'), null, isSVG, slotScopeIds, optimized, rendererInternals, true);
    // there are two possible scenarios for server-rendered suspense:
    // - success: ssr content should be fully resolved
    // - failure: ssr content should be the fallback branch.
    // however, on the client we don't really know if it has failed or not
    // attempt to hydrate the DOM assuming it has succeeded, but we still
    // need to construct a suspense boundary first
    const result = hydrateNode(node, suspense.pendingBranch = vnode.ssContent, parentComponent, suspense, slotScopeIds, optimized);
    if (suspense.deps === 0) suspense.resolve();
    return result;
/* eslint-enable no-restricted-globals */ }
function normalizeSuspenseChildren(vnode) {
    const { shapeFlag , children  } = vnode;
    const isSlotChildren = shapeFlag & 32 /* SLOTS_CHILDREN */ ;
    vnode.ssContent = normalizeSuspenseSlot(isSlotChildren ? children.default : children);
    vnode.ssFallback = isSlotChildren ? normalizeSuspenseSlot(children.fallback) : createVNode(Comment);
}
function normalizeSuspenseSlot(s) {
    let block;
    if (_shared.isFunction(s)) {
        const trackBlock = isBlockTreeEnabled && s._c;
        if (trackBlock) {
            // disableTracking: false
            // allow block tracking for compiled slots
            // (see ./componentRenderContext.ts)
            s._d = false;
            openBlock();
        }
        s = s();
        if (trackBlock) {
            s._d = true;
            block = currentBlock;
            closeBlock();
        }
    }
    if (_shared.isArray(s)) {
        const singleChild = filterSingleRoot(s);
        if (!singleChild) warn(`<Suspense> slots expect a single root node.`);
        s = singleChild;
    }
    s = normalizeVNode(s);
    if (block && !s.dynamicChildren) s.dynamicChildren = block.filter((c)=>c !== s
    );
    return s;
}
function queueEffectWithSuspense(fn, suspense) {
    if (suspense && suspense.pendingBranch) {
        if (_shared.isArray(fn)) suspense.effects.push(...fn);
        else suspense.effects.push(fn);
    } else queuePostFlushCb(fn);
}
function setActiveBranch(suspense, branch) {
    suspense.activeBranch = branch;
    const { vnode , parentComponent  } = suspense;
    const el = vnode.el = branch.el;
    // in case suspense is the root node of a component,
    // recursively update the HOC el
    if (parentComponent && parentComponent.subTree === vnode) {
        parentComponent.vnode.el = el;
        updateHOCHostEl(parentComponent, el);
    }
}
function provide(key, value) {
    if (!currentInstance) warn(`provide() can only be used inside setup().`);
    else {
        let provides = currentInstance.provides;
        // by default an instance inherits its parent's provides object
        // but when it needs to provide values of its own, it creates its
        // own provides object using parent provides object as prototype.
        // this way in `inject` we can simply look up injections from direct
        // parent and let the prototype chain do the work.
        const parentProvides = currentInstance.parent && currentInstance.parent.provides;
        if (parentProvides === provides) provides = currentInstance.provides = Object.create(parentProvides);
        // TS doesn't allow symbol as index type
        provides[key] = value;
    }
}
function inject(key, defaultValue, treatDefaultAsFactory = false) {
    // fallback to `currentRenderingInstance` so that this can be called in
    // a functional component
    const instance = currentInstance || currentRenderingInstance;
    if (instance) {
        // #2400
        // to support `app.use` plugins,
        // fallback to appContext's `provides` if the instance is at root
        const provides = instance.parent == null ? instance.vnode.appContext && instance.vnode.appContext.provides : instance.parent.provides;
        if (provides && key in provides) // TS doesn't allow symbol as index type
        return provides[key];
        else if (arguments.length > 1) return treatDefaultAsFactory && _shared.isFunction(defaultValue) ? defaultValue.call(instance.proxy) : defaultValue;
        else warn(`injection "${String(key)}" not found.`);
    } else warn(`inject() can only be used inside setup() or functional components.`);
}
// Simple effect.
function watchEffect(effect, options) {
    return doWatch(effect, null, options);
}
function watchPostEffect(effect, options) {
    return doWatch(effect, null, Object.assign(options || {}, {
        flush: 'post'
    }));
}
function watchSyncEffect(effect, options) {
    return doWatch(effect, null, Object.assign(options || {}, {
        flush: 'sync'
    }));
}
// initial value for watchers to trigger on undefined initial values
const INITIAL_WATCHER_VALUE = {};
// implementation
function watch(source, cb, options) {
    if (!_shared.isFunction(cb)) warn(`\`watch(fn, options?)\` signature has been moved to a separate API. ` + `Use \`watchEffect(fn, options?)\` instead. \`watch\` now only ` + `supports \`watch(source, cb, options?) signature.`);
    return doWatch(source, cb, options);
}
function doWatch(source, cb, { immediate , deep , flush , onTrack , onTrigger  } = _shared.EMPTY_OBJ) {
    if (!cb) {
        if (immediate !== undefined) warn(`watch() "immediate" option is only respected when using the ` + `watch(source, callback, options?) signature.`);
        if (deep !== undefined) warn(`watch() "deep" option is only respected when using the ` + `watch(source, callback, options?) signature.`);
    }
    const warnInvalidSource = (s)=>{
        warn(`Invalid watch source: `, s, `A watch source can only be a getter/effect function, a ref, ` + `a reactive object, or an array of these types.`);
    };
    const instance = currentInstance;
    let getter;
    let forceTrigger = false;
    let isMultiSource = false;
    if (_reactivity.isRef(source)) {
        getter = ()=>source.value
        ;
        forceTrigger = _reactivity.isShallow(source);
    } else if (_reactivity.isReactive(source)) {
        getter = ()=>source
        ;
        deep = true;
    } else if (_shared.isArray(source)) {
        isMultiSource = true;
        forceTrigger = source.some(_reactivity.isReactive);
        getter = ()=>source.map((s)=>{
                if (_reactivity.isRef(s)) return s.value;
                else if (_reactivity.isReactive(s)) return traverse(s);
                else if (_shared.isFunction(s)) return callWithErrorHandling(s, instance, 2 /* WATCH_GETTER */ );
                else warnInvalidSource(s);
            })
        ;
    } else if (_shared.isFunction(source)) {
        if (cb) // getter with cb
        getter = ()=>callWithErrorHandling(source, instance, 2 /* WATCH_GETTER */ )
        ;
        else // no cb -> simple effect
        getter = ()=>{
            if (instance && instance.isUnmounted) return;
            if (cleanup) cleanup();
            return callWithAsyncErrorHandling(source, instance, 3 /* WATCH_CALLBACK */ , [
                onCleanup
            ]);
        };
    } else {
        getter = _shared.NOOP;
        warnInvalidSource(source);
    }
    if (cb && deep) {
        const baseGetter = getter;
        getter = ()=>traverse(baseGetter())
        ;
    }
    let cleanup;
    let onCleanup = (fn)=>{
        cleanup = effect.onStop = ()=>{
            callWithErrorHandling(fn, instance, 4 /* WATCH_CLEANUP */ );
        };
    };
    // in SSR there is no need to setup an actual effect, and it should be noop
    // unless it's eager
    if (isInSSRComponentSetup) {
        // we will also not call the invalidate callback (+ runner is not set up)
        onCleanup = _shared.NOOP;
        if (!cb) getter();
        else if (immediate) callWithAsyncErrorHandling(cb, instance, 3 /* WATCH_CALLBACK */ , [
            getter(),
            isMultiSource ? [] : undefined,
            onCleanup
        ]);
        return _shared.NOOP;
    }
    let oldValue = isMultiSource ? [] : INITIAL_WATCHER_VALUE;
    const job = ()=>{
        if (!effect.active) return;
        if (cb) {
            // watch(source, cb)
            const newValue = effect.run();
            if (deep || forceTrigger || (isMultiSource ? newValue.some((v, i)=>_shared.hasChanged(v, oldValue[i])
            ) : _shared.hasChanged(newValue, oldValue)) || false) {
                // cleanup before running cb again
                if (cleanup) cleanup();
                callWithAsyncErrorHandling(cb, instance, 3 /* WATCH_CALLBACK */ , [
                    newValue,
                    // pass undefined as the old value when it's changed for the first time
                    oldValue === INITIAL_WATCHER_VALUE ? undefined : oldValue,
                    onCleanup
                ]);
                oldValue = newValue;
            }
        } else // watchEffect
        effect.run();
    };
    // important: mark the job as a watcher callback so that scheduler knows
    // it is allowed to self-trigger (#1727)
    job.allowRecurse = !!cb;
    let scheduler;
    if (flush === 'sync') scheduler = job; // the scheduler function gets called directly
    else if (flush === 'post') scheduler = ()=>queuePostRenderEffect(job, instance && instance.suspense)
    ;
    else // default: 'pre'
    scheduler = ()=>{
        if (!instance || instance.isMounted) queuePreFlushCb(job);
        else // with 'pre' option, the first call must happen before
        // the component is mounted so it is called synchronously.
        job();
    };
    const effect = new _reactivity.ReactiveEffect(getter, scheduler);
    effect.onTrack = onTrack;
    effect.onTrigger = onTrigger;
    // initial run
    if (cb) {
        if (immediate) job();
        else oldValue = effect.run();
    } else if (flush === 'post') queuePostRenderEffect(effect.run.bind(effect), instance && instance.suspense);
    else effect.run();
    return ()=>{
        effect.stop();
        if (instance && instance.scope) _shared.remove(instance.scope.effects, effect);
    };
}
// this.$watch
function instanceWatch(source, value, options) {
    const publicThis = this.proxy;
    const getter = _shared.isString(source) ? source.includes('.') ? createPathGetter(publicThis, source) : ()=>publicThis[source]
     : source.bind(publicThis, publicThis);
    let cb;
    if (_shared.isFunction(value)) cb = value;
    else {
        cb = value.handler;
        options = value;
    }
    const cur = currentInstance;
    setCurrentInstance(this);
    const res = doWatch(getter, cb.bind(publicThis), options);
    if (cur) setCurrentInstance(cur);
    else unsetCurrentInstance();
    return res;
}
function createPathGetter(ctx, path) {
    const segments = path.split('.');
    return ()=>{
        let cur = ctx;
        for(let i = 0; i < segments.length && cur; i++)cur = cur[segments[i]];
        return cur;
    };
}
function traverse(value, seen) {
    if (!_shared.isObject(value) || value["__v_skip" /* SKIP */ ]) return value;
    seen = seen || new Set();
    if (seen.has(value)) return value;
    seen.add(value);
    if (_reactivity.isRef(value)) traverse(value.value, seen);
    else if (_shared.isArray(value)) for(let i = 0; i < value.length; i++)traverse(value[i], seen);
    else if (_shared.isSet(value) || _shared.isMap(value)) value.forEach((v)=>{
        traverse(v, seen);
    });
    else if (_shared.isPlainObject(value)) for(const key in value)traverse(value[key], seen);
    return value;
}
function useTransitionState() {
    const state = {
        isMounted: false,
        isLeaving: false,
        isUnmounting: false,
        leavingVNodes: new Map()
    };
    onMounted(()=>{
        state.isMounted = true;
    });
    onBeforeUnmount(()=>{
        state.isUnmounting = true;
    });
    return state;
}
const TransitionHookValidator = [
    Function,
    Array
];
const BaseTransitionImpl = {
    name: `BaseTransition`,
    props: {
        mode: String,
        appear: Boolean,
        persisted: Boolean,
        // enter
        onBeforeEnter: TransitionHookValidator,
        onEnter: TransitionHookValidator,
        onAfterEnter: TransitionHookValidator,
        onEnterCancelled: TransitionHookValidator,
        // leave
        onBeforeLeave: TransitionHookValidator,
        onLeave: TransitionHookValidator,
        onAfterLeave: TransitionHookValidator,
        onLeaveCancelled: TransitionHookValidator,
        // appear
        onBeforeAppear: TransitionHookValidator,
        onAppear: TransitionHookValidator,
        onAfterAppear: TransitionHookValidator,
        onAppearCancelled: TransitionHookValidator
    },
    setup (props, { slots  }) {
        const instance = getCurrentInstance();
        const state = useTransitionState();
        let prevTransitionKey;
        return ()=>{
            const children = slots.default && getTransitionRawChildren(slots.default(), true);
            if (!children || !children.length) return;
            // warn multiple elements
            if (children.length > 1) warn("<transition> can only be used on a single element or component. Use <transition-group> for lists.");
            // there's no need to track reactivity for these props so use the raw
            // props for a bit better perf
            const rawProps = _reactivity.toRaw(props);
            const { mode  } = rawProps;
            // check mode
            if (mode && mode !== 'in-out' && mode !== 'out-in' && mode !== 'default') warn(`invalid <transition> mode: ${mode}`);
            // at this point children has a guaranteed length of 1.
            const child = children[0];
            if (state.isLeaving) return emptyPlaceholder(child);
            // in the case of <transition><keep-alive/></transition>, we need to
            // compare the type of the kept-alive children.
            const innerChild = getKeepAliveChild(child);
            if (!innerChild) return emptyPlaceholder(child);
            const enterHooks = resolveTransitionHooks(innerChild, rawProps, state, instance);
            setTransitionHooks(innerChild, enterHooks);
            const oldChild = instance.subTree;
            const oldInnerChild = oldChild && getKeepAliveChild(oldChild);
            let transitionKeyChanged = false;
            const { getTransitionKey  } = innerChild.type;
            if (getTransitionKey) {
                const key = getTransitionKey();
                if (prevTransitionKey === undefined) prevTransitionKey = key;
                else if (key !== prevTransitionKey) {
                    prevTransitionKey = key;
                    transitionKeyChanged = true;
                }
            }
            // handle mode
            if (oldInnerChild && oldInnerChild.type !== Comment && (!isSameVNodeType(innerChild, oldInnerChild) || transitionKeyChanged)) {
                const leavingHooks = resolveTransitionHooks(oldInnerChild, rawProps, state, instance);
                // update old tree's hooks in case of dynamic transition
                setTransitionHooks(oldInnerChild, leavingHooks);
                // switching between different views
                if (mode === 'out-in') {
                    state.isLeaving = true;
                    // return placeholder node and queue update when leave finishes
                    leavingHooks.afterLeave = ()=>{
                        state.isLeaving = false;
                        instance.update();
                    };
                    return emptyPlaceholder(child);
                } else if (mode === 'in-out' && innerChild.type !== Comment) leavingHooks.delayLeave = (el, earlyRemove, delayedLeave)=>{
                    const leavingVNodesCache = getLeavingNodesForType(state, oldInnerChild);
                    leavingVNodesCache[String(oldInnerChild.key)] = oldInnerChild;
                    // early removal callback
                    el._leaveCb = ()=>{
                        earlyRemove();
                        el._leaveCb = undefined;
                        delete enterHooks.delayedLeave;
                    };
                    enterHooks.delayedLeave = delayedLeave;
                };
            }
            return child;
        };
    }
};
// export the public type for h/tsx inference
// also to avoid inline import() in generated d.ts files
const BaseTransition = BaseTransitionImpl;
function getLeavingNodesForType(state, vnode) {
    const { leavingVNodes  } = state;
    let leavingVNodesCache = leavingVNodes.get(vnode.type);
    if (!leavingVNodesCache) {
        leavingVNodesCache = Object.create(null);
        leavingVNodes.set(vnode.type, leavingVNodesCache);
    }
    return leavingVNodesCache;
}
// The transition hooks are attached to the vnode as vnode.transition
// and will be called at appropriate timing in the renderer.
function resolveTransitionHooks(vnode2, props, state, instance) {
    const { appear , mode , persisted =false , onBeforeEnter , onEnter , onAfterEnter , onEnterCancelled , onBeforeLeave , onLeave , onAfterLeave , onLeaveCancelled , onBeforeAppear , onAppear , onAfterAppear , onAppearCancelled  } = props;
    const key1 = String(vnode2.key);
    const leavingVNodesCache = getLeavingNodesForType(state, vnode2);
    const callHook1 = (hook, args)=>{
        hook && callWithAsyncErrorHandling(hook, instance, 9 /* TRANSITION_HOOK */ , args);
    };
    const hooks = {
        mode,
        persisted,
        beforeEnter (el) {
            let hook = onBeforeEnter;
            if (!state.isMounted) {
                if (appear) hook = onBeforeAppear || onBeforeEnter;
                else return;
            }
            // for same element (v-show)
            if (el._leaveCb) el._leaveCb(true);
            // for toggled element with same key (v-if)
            const leavingVNode = leavingVNodesCache[key1];
            if (leavingVNode && isSameVNodeType(vnode2, leavingVNode) && leavingVNode.el._leaveCb) // force early removal (not cancelled)
            leavingVNode.el._leaveCb();
            callHook1(hook, [
                el
            ]);
        },
        enter (el) {
            let hook = onEnter;
            let afterHook = onAfterEnter;
            let cancelHook = onEnterCancelled;
            if (!state.isMounted) {
                if (appear) {
                    hook = onAppear || onEnter;
                    afterHook = onAfterAppear || onAfterEnter;
                    cancelHook = onAppearCancelled || onEnterCancelled;
                } else return;
            }
            let called = false;
            const done = el._enterCb = (cancelled)=>{
                if (called) return;
                called = true;
                if (cancelled) callHook1(cancelHook, [
                    el
                ]);
                else callHook1(afterHook, [
                    el
                ]);
                if (hooks.delayedLeave) hooks.delayedLeave();
                el._enterCb = undefined;
            };
            if (hook) {
                hook(el, done);
                if (hook.length <= 1) done();
            } else done();
        },
        leave (el, remove) {
            const key = String(vnode2.key);
            if (el._enterCb) el._enterCb(true);
            if (state.isUnmounting) return remove();
            callHook1(onBeforeLeave, [
                el
            ]);
            let called = false;
            const done = el._leaveCb = (cancelled)=>{
                if (called) return;
                called = true;
                remove();
                if (cancelled) callHook1(onLeaveCancelled, [
                    el
                ]);
                else callHook1(onAfterLeave, [
                    el
                ]);
                el._leaveCb = undefined;
                if (leavingVNodesCache[key] === vnode2) delete leavingVNodesCache[key];
            };
            leavingVNodesCache[key] = vnode2;
            if (onLeave) {
                onLeave(el, done);
                if (onLeave.length <= 1) done();
            } else done();
        },
        clone (vnode) {
            return resolveTransitionHooks(vnode, props, state, instance);
        }
    };
    return hooks;
}
// the placeholder really only handles one special case: KeepAlive
// in the case of a KeepAlive in a leave phase we need to return a KeepAlive
// placeholder with empty content to avoid the KeepAlive instance from being
// unmounted.
function emptyPlaceholder(vnode) {
    if (isKeepAlive(vnode)) {
        vnode = cloneVNode(vnode);
        vnode.children = null;
        return vnode;
    }
}
function getKeepAliveChild(vnode) {
    return isKeepAlive(vnode) ? vnode.children ? vnode.children[0] : undefined : vnode;
}
function setTransitionHooks(vnode, hooks) {
    if (vnode.shapeFlag & 6 /* COMPONENT */  && vnode.component) setTransitionHooks(vnode.component.subTree, hooks);
    else if (vnode.shapeFlag & 128 /* SUSPENSE */ ) {
        vnode.ssContent.transition = hooks.clone(vnode.ssContent);
        vnode.ssFallback.transition = hooks.clone(vnode.ssFallback);
    } else vnode.transition = hooks;
}
function getTransitionRawChildren(children, keepComment = false) {
    let ret = [];
    let keyedFragmentCount = 0;
    for(let i = 0; i < children.length; i++){
        const child = children[i];
        // handle fragment children case, e.g. v-for
        if (child.type === Fragment) {
            if (child.patchFlag & 128 /* KEYED_FRAGMENT */ ) keyedFragmentCount++;
            ret = ret.concat(getTransitionRawChildren(child.children, keepComment));
        } else if (keepComment || child.type !== Comment) ret.push(child);
    }
    // #1126 if a transition children list contains multiple sub fragments, these
    // fragments will be merged into a flat children array. Since each v-for
    // fragment may contain different static bindings inside, we need to de-op
    // these children to force full diffs to ensure correct behavior.
    if (keyedFragmentCount > 1) for(let i1 = 0; i1 < ret.length; i1++)ret[i1].patchFlag = -2 /* BAIL */ ;
    return ret;
}
// implementation, close to no-op
function defineComponent(options) {
    return _shared.isFunction(options) ? {
        setup: options,
        name: options.name
    } : options;
}
const isAsyncWrapper = (i)=>!!i.type.__asyncLoader
;
function defineAsyncComponent(source) {
    if (_shared.isFunction(source)) source = {
        loader: source
    };
    const { loader , loadingComponent , errorComponent , delay =200 , timeout , suspensible =true , onError: userOnError  } = source;
    let pendingRequest = null;
    let resolvedComp;
    let retries = 0;
    const retry = ()=>{
        retries++;
        pendingRequest = null;
        return load();
    };
    const load = ()=>{
        let thisRequest;
        return pendingRequest || (thisRequest = pendingRequest = loader().catch((err)=>{
            err = err instanceof Error ? err : new Error(String(err));
            if (userOnError) return new Promise((resolve1, reject)=>{
                const userRetry = ()=>resolve1(retry())
                ;
                const userFail = ()=>reject(err)
                ;
                userOnError(err, userRetry, userFail, retries + 1);
            });
            else throw err;
        }).then((comp)=>{
            if (thisRequest !== pendingRequest && pendingRequest) return pendingRequest;
            if (!comp) warn(`Async component loader resolved to undefined. ` + `If you are using retry(), make sure to return its return value.`);
            // interop module default
            if (comp && (comp.__esModule || comp[Symbol.toStringTag] === 'Module')) comp = comp.default;
            if (comp && !_shared.isObject(comp) && !_shared.isFunction(comp)) throw new Error(`Invalid async component load result: ${comp}`);
            resolvedComp = comp;
            return comp;
        }));
    };
    return defineComponent({
        name: 'AsyncComponentWrapper',
        __asyncLoader: load,
        get __asyncResolved () {
            return resolvedComp;
        },
        setup () {
            const instance = currentInstance;
            // already resolved
            if (resolvedComp) return ()=>createInnerComp(resolvedComp, instance)
            ;
            const onError = (err)=>{
                pendingRequest = null;
                handleError(err, instance, 13 /* ASYNC_COMPONENT_LOADER */ , !errorComponent /* do not throw in dev if user provided error component */ );
            };
            // suspense-controlled or SSR.
            if (suspensible && instance.suspense || isInSSRComponentSetup) return load().then((comp)=>{
                return ()=>createInnerComp(comp, instance)
                ;
            }).catch((err)=>{
                onError(err);
                return ()=>errorComponent ? createVNode(errorComponent, {
                        error: err
                    }) : null
                ;
            });
            const loaded = _reactivity.ref(false);
            const error = _reactivity.ref();
            const delayed = _reactivity.ref(!!delay);
            if (delay) setTimeout(()=>{
                delayed.value = false;
            }, delay);
            if (timeout != null) setTimeout(()=>{
                if (!loaded.value && !error.value) {
                    const err = new Error(`Async component timed out after ${timeout}ms.`);
                    onError(err);
                    error.value = err;
                }
            }, timeout);
            load().then(()=>{
                loaded.value = true;
                if (instance.parent && isKeepAlive(instance.parent.vnode)) // parent is keep-alive, force update so the loaded component's
                // name is taken into account
                queueJob(instance.parent.update);
            }).catch((err)=>{
                onError(err);
                error.value = err;
            });
            return ()=>{
                if (loaded.value && resolvedComp) return createInnerComp(resolvedComp, instance);
                else if (error.value && errorComponent) return createVNode(errorComponent, {
                    error: error.value
                });
                else if (loadingComponent && !delayed.value) return createVNode(loadingComponent);
            };
        }
    });
}
function createInnerComp(comp, { vnode: { ref , props , children  }  }) {
    const vnode = createVNode(comp, props, children);
    // ensure inner component inherits the async wrapper's ref owner
    vnode.ref = ref;
    return vnode;
}
const isKeepAlive = (vnode)=>vnode.type.__isKeepAlive
;
const KeepAliveImpl = {
    name: `KeepAlive`,
    // Marker for special handling inside the renderer. We are not using a ===
    // check directly on KeepAlive in the renderer, because importing it directly
    // would prevent it from being tree-shaken.
    __isKeepAlive: true,
    props: {
        include: [
            String,
            RegExp,
            Array
        ],
        exclude: [
            String,
            RegExp,
            Array
        ],
        max: [
            String,
            Number
        ]
    },
    setup (props, { slots  }) {
        const instance2 = getCurrentInstance();
        // KeepAlive communicates with the instantiated renderer via the
        // ctx where the renderer passes in its internals,
        // and the KeepAlive instance exposes activate/deactivate implementations.
        // The whole point of this is to avoid importing KeepAlive directly in the
        // renderer to facilitate tree-shaking.
        const sharedContext = instance2.ctx;
        // if the internal renderer is not registered, it indicates that this is server-side rendering,
        // for KeepAlive, we just need to render its children
        if (!sharedContext.renderer) return slots.default;
        const cache = new Map();
        const keys = new Set();
        let current = null;
        instance2.__v_cache = cache;
        const parentSuspense = instance2.suspense;
        const { renderer: { p: patch , m: move , um: _unmount , o: { createElement  }  }  } = sharedContext;
        const storageContainer = createElement('div');
        sharedContext.activate = (vnode, container, anchor, isSVG, optimized)=>{
            const instance = vnode.component;
            move(vnode, container, anchor, 0 /* ENTER */ , parentSuspense);
            // in case props have changed
            patch(instance.vnode, vnode, container, anchor, instance, parentSuspense, isSVG, vnode.slotScopeIds, optimized);
            queuePostRenderEffect(()=>{
                instance.isDeactivated = false;
                if (instance.a) _shared.invokeArrayFns(instance.a);
                const vnodeHook = vnode.props && vnode.props.onVnodeMounted;
                if (vnodeHook) invokeVNodeHook(vnodeHook, instance.parent, vnode);
            }, parentSuspense);
            // Update components tree
            devtoolsComponentAdded(instance);
        };
        sharedContext.deactivate = (vnode)=>{
            const instance = vnode.component;
            move(vnode, storageContainer, null, 1 /* LEAVE */ , parentSuspense);
            queuePostRenderEffect(()=>{
                if (instance.da) _shared.invokeArrayFns(instance.da);
                const vnodeHook = vnode.props && vnode.props.onVnodeUnmounted;
                if (vnodeHook) invokeVNodeHook(vnodeHook, instance.parent, vnode);
                instance.isDeactivated = true;
            }, parentSuspense);
            // Update components tree
            devtoolsComponentAdded(instance);
        };
        function unmount(vnode) {
            // reset the shapeFlag so it can be properly unmounted
            resetShapeFlag(vnode);
            _unmount(vnode, instance2, parentSuspense, true);
        }
        function pruneCache(filter) {
            cache.forEach((vnode, key)=>{
                const name = getComponentName(vnode.type);
                if (name && (!filter || !filter(name))) pruneCacheEntry(key);
            });
        }
        function pruneCacheEntry(key) {
            const cached = cache.get(key);
            if (!current || cached.type !== current.type) unmount(cached);
            else if (current) // current active instance should no longer be kept-alive.
            // we can't unmount it now but it might be later, so reset its flag now.
            resetShapeFlag(current);
            cache.delete(key);
            keys.delete(key);
        }
        // prune cache on include/exclude prop change
        watch(()=>[
                props.include,
                props.exclude
            ]
        , ([include, exclude])=>{
            include && pruneCache((name)=>matches(include, name)
            );
            exclude && pruneCache((name)=>!matches(exclude, name)
            );
        }, // prune post-render after `current` has been updated
        {
            flush: 'post',
            deep: true
        });
        // cache sub tree after render
        let pendingCacheKey = null;
        const cacheSubtree = ()=>{
            // fix #1621, the pendingCacheKey could be 0
            if (pendingCacheKey != null) cache.set(pendingCacheKey, getInnerChild(instance2.subTree));
        };
        onMounted(cacheSubtree);
        onUpdated(cacheSubtree);
        onBeforeUnmount(()=>{
            cache.forEach((cached)=>{
                const { subTree , suspense  } = instance2;
                const vnode = getInnerChild(subTree);
                if (cached.type === vnode.type) {
                    // current instance will be unmounted as part of keep-alive's unmount
                    resetShapeFlag(vnode);
                    // but invoke its deactivated hook here
                    const da = vnode.component.da;
                    da && queuePostRenderEffect(da, suspense);
                    return;
                }
                unmount(cached);
            });
        });
        return ()=>{
            pendingCacheKey = null;
            if (!slots.default) return null;
            const children = slots.default();
            const rawVNode = children[0];
            if (children.length > 1) {
                warn(`KeepAlive should contain exactly one component child.`);
                current = null;
                return children;
            } else if (!isVNode(rawVNode) || !(rawVNode.shapeFlag & 4 /* STATEFUL_COMPONENT */ ) && !(rawVNode.shapeFlag & 128 /* SUSPENSE */ )) {
                current = null;
                return rawVNode;
            }
            let vnode = getInnerChild(rawVNode);
            const comp = vnode.type;
            // for async components, name check should be based in its loaded
            // inner component if available
            const name = getComponentName(isAsyncWrapper(vnode) ? vnode.type.__asyncResolved || {} : comp);
            const { include , exclude , max  } = props;
            if (include && (!name || !matches(include, name)) || exclude && name && matches(exclude, name)) {
                current = vnode;
                return rawVNode;
            }
            const key = vnode.key == null ? comp : vnode.key;
            const cachedVNode = cache.get(key);
            // clone vnode if it's reused because we are going to mutate it
            if (vnode.el) {
                vnode = cloneVNode(vnode);
                if (rawVNode.shapeFlag & 128 /* SUSPENSE */ ) rawVNode.ssContent = vnode;
            }
            // #1513 it's possible for the returned vnode to be cloned due to attr
            // fallthrough or scopeId, so the vnode here may not be the final vnode
            // that is mounted. Instead of caching it directly, we store the pending
            // key and cache `instance.subTree` (the normalized vnode) in
            // beforeMount/beforeUpdate hooks.
            pendingCacheKey = key;
            if (cachedVNode) {
                // copy over mounted state
                vnode.el = cachedVNode.el;
                vnode.component = cachedVNode.component;
                if (vnode.transition) // recursively update transition hooks on subTree
                setTransitionHooks(vnode, vnode.transition);
                // avoid vnode being mounted as fresh
                vnode.shapeFlag |= 512 /* COMPONENT_KEPT_ALIVE */ ;
                // make this key the freshest
                keys.delete(key);
                keys.add(key);
            } else {
                keys.add(key);
                // prune oldest entry
                if (max && keys.size > parseInt(max, 10)) pruneCacheEntry(keys.values().next().value);
            }
            // avoid vnode being unmounted
            vnode.shapeFlag |= 256 /* COMPONENT_SHOULD_KEEP_ALIVE */ ;
            current = vnode;
            return rawVNode;
        };
    }
};
// export the public type for h/tsx inference
// also to avoid inline import() in generated d.ts files
const KeepAlive = KeepAliveImpl;
function matches(pattern, name) {
    if (_shared.isArray(pattern)) return pattern.some((p)=>matches(p, name)
    );
    else if (_shared.isString(pattern)) return pattern.split(',').includes(name);
    else if (pattern.test) return pattern.test(name);
    /* istanbul ignore next */ return false;
}
function onActivated(hook, target) {
    registerKeepAliveHook(hook, "a" /* ACTIVATED */ , target);
}
function onDeactivated(hook, target) {
    registerKeepAliveHook(hook, "da" /* DEACTIVATED */ , target);
}
function registerKeepAliveHook(hook, type, target = currentInstance) {
    // cache the deactivate branch check wrapper for injected hooks so the same
    // hook can be properly deduped by the scheduler. "__wdc" stands for "with
    // deactivation check".
    const wrappedHook = hook.__wdc || (hook.__wdc = ()=>{
        // only fire the hook if the target instance is NOT in a deactivated branch.
        let current = target;
        while(current){
            if (current.isDeactivated) return;
            current = current.parent;
        }
        return hook();
    });
    injectHook(type, wrappedHook, target);
    // In addition to registering it on the target instance, we walk up the parent
    // chain and register it on all ancestor instances that are keep-alive roots.
    // This avoids the need to walk the entire component tree when invoking these
    // hooks, and more importantly, avoids the need to track child components in
    // arrays.
    if (target) {
        let current = target.parent;
        while(current && current.parent){
            if (isKeepAlive(current.parent.vnode)) injectToKeepAliveRoot(wrappedHook, type, target, current);
            current = current.parent;
        }
    }
}
function injectToKeepAliveRoot(hook, type, target, keepAliveRoot) {
    // injectHook wraps the original for error handling, so make sure to remove
    // the wrapped version.
    const injected = injectHook(type, hook, keepAliveRoot, true);
    onUnmounted(()=>{
        _shared.remove(keepAliveRoot[type], injected);
    }, target);
}
function resetShapeFlag(vnode) {
    let shapeFlag = vnode.shapeFlag;
    if (shapeFlag & 256 /* COMPONENT_SHOULD_KEEP_ALIVE */ ) shapeFlag -= 256 /* COMPONENT_SHOULD_KEEP_ALIVE */ ;
    if (shapeFlag & 512 /* COMPONENT_KEPT_ALIVE */ ) shapeFlag -= 512 /* COMPONENT_KEPT_ALIVE */ ;
    vnode.shapeFlag = shapeFlag;
}
function getInnerChild(vnode) {
    return vnode.shapeFlag & 128 /* SUSPENSE */  ? vnode.ssContent : vnode;
}
function injectHook(type, hook, target = currentInstance, prepend = false) {
    if (target) {
        const hooks = target[type] || (target[type] = []);
        // cache the error handling wrapper for injected hooks so the same hook
        // can be properly deduped by the scheduler. "__weh" stands for "with error
        // handling".
        const wrappedHook = hook.__weh || (hook.__weh = (...args)=>{
            if (target.isUnmounted) return;
            // disable tracking inside all lifecycle hooks
            // since they can potentially be called inside effects.
            _reactivity.pauseTracking();
            // Set currentInstance during hook invocation.
            // This assumes the hook does not synchronously trigger other hooks, which
            // can only be false when the user does something really funky.
            setCurrentInstance(target);
            const res = callWithAsyncErrorHandling(hook, target, type, args);
            unsetCurrentInstance();
            _reactivity.resetTracking();
            return res;
        });
        if (prepend) hooks.unshift(wrappedHook);
        else hooks.push(wrappedHook);
        return wrappedHook;
    } else {
        const apiName = _shared.toHandlerKey(ErrorTypeStrings[type].replace(/ hook$/, ''));
        warn(`${apiName} is called when there is no active component instance to be ` + `associated with. ` + `Lifecycle injection APIs can only be used during execution of setup().` + (` If you are using async setup(), make sure to register lifecycle ` + `hooks before the first await statement.`));
    }
}
const createHook = (lifecycle)=>(hook, target = currentInstance)=>// post-create lifecycle registrations are noops during SSR (except for serverPrefetch)
        (!isInSSRComponentSetup || lifecycle === "sp" /* SERVER_PREFETCH */ ) && injectHook(lifecycle, hook, target)
;
const onBeforeMount = createHook("bm" /* BEFORE_MOUNT */ );
const onMounted = createHook("m" /* MOUNTED */ );
const onBeforeUpdate = createHook("bu" /* BEFORE_UPDATE */ );
const onUpdated = createHook("u" /* UPDATED */ );
const onBeforeUnmount = createHook("bum" /* BEFORE_UNMOUNT */ );
const onUnmounted = createHook("um" /* UNMOUNTED */ );
const onServerPrefetch = createHook("sp" /* SERVER_PREFETCH */ );
const onRenderTriggered = createHook("rtg" /* RENDER_TRIGGERED */ );
const onRenderTracked = createHook("rtc" /* RENDER_TRACKED */ );
function onErrorCaptured(hook, target = currentInstance) {
    injectHook("ec" /* ERROR_CAPTURED */ , hook, target);
}
function createDuplicateChecker() {
    const cache = Object.create(null);
    return (type, key)=>{
        if (cache[key]) warn(`${type} property "${key}" is already defined in ${cache[key]}.`);
        else cache[key] = type;
    };
}
let shouldCacheAccess = true;
function applyOptions(instance) {
    const options = resolveMergedOptions(instance);
    const publicThis = instance.proxy;
    const ctx = instance.ctx;
    // do not cache property access on public proxy during state initialization
    shouldCacheAccess = false;
    // call beforeCreate first before accessing other options since
    // the hook may mutate resolved options (#2791)
    if (options.beforeCreate) callHook(options.beforeCreate, instance, "bc" /* BEFORE_CREATE */ );
    const { // state
    data: dataOptions , computed: computedOptions , methods , watch: watchOptions , provide: provideOptions , inject: injectOptions , // lifecycle
    created , beforeMount , mounted , beforeUpdate , updated , activated , deactivated , beforeDestroy , beforeUnmount , destroyed , unmounted , render , renderTracked , renderTriggered , errorCaptured , serverPrefetch , // public API
    expose , inheritAttrs , // assets
    components , directives , filters  } = options;
    const checkDuplicateProperties = createDuplicateChecker();
    {
        const [propsOptions] = instance.propsOptions;
        if (propsOptions) for(const key in propsOptions)checkDuplicateProperties("Props" /* PROPS */ , key);
    }
    // options initialization order (to be consistent with Vue 2):
    // - props (already done outside of this function)
    // - inject
    // - methods
    // - data (deferred since it relies on `this` access)
    // - computed
    // - watch (deferred since it relies on `this` access)
    if (injectOptions) resolveInjections(injectOptions, ctx, checkDuplicateProperties, instance.appContext.config.unwrapInjectedRef);
    if (methods) for(const key4 in methods){
        const methodHandler = methods[key4];
        if (_shared.isFunction(methodHandler)) {
            Object.defineProperty(ctx, key4, {
                value: methodHandler.bind(publicThis),
                configurable: true,
                enumerable: true,
                writable: true
            });
            checkDuplicateProperties("Methods" /* METHODS */ , key4);
        } else warn(`Method "${key4}" has type "${typeof methodHandler}" in the component definition. ` + `Did you reference the function correctly?`);
    }
    if (dataOptions) {
        if (!_shared.isFunction(dataOptions)) warn(`The data option must be a function. ` + `Plain object usage is no longer supported.`);
        const data = dataOptions.call(publicThis, publicThis);
        if (_shared.isPromise(data)) warn(`data() returned a Promise - note data() cannot be async; If you ` + `intend to perform data fetching before component renders, use ` + `async setup() + <Suspense>.`);
        if (!_shared.isObject(data)) warn(`data() should return an object.`);
        else {
            instance.data = _reactivity.reactive(data);
            for(const key in data){
                checkDuplicateProperties("Data" /* DATA */ , key);
                // expose data on ctx during dev
                if (key[0] !== '$' && key[0] !== '_') Object.defineProperty(ctx, key, {
                    configurable: true,
                    enumerable: true,
                    get: ()=>data[key]
                    ,
                    set: _shared.NOOP
                });
            }
        }
    }
    // state initialization complete at this point - start caching access
    shouldCacheAccess = true;
    if (computedOptions) for(const key2 in computedOptions){
        const opt = computedOptions[key2];
        const get = _shared.isFunction(opt) ? opt.bind(publicThis, publicThis) : _shared.isFunction(opt.get) ? opt.get.bind(publicThis, publicThis) : _shared.NOOP;
        if (get === _shared.NOOP) warn(`Computed property "${key2}" has no getter.`);
        const set = !_shared.isFunction(opt) && _shared.isFunction(opt.set) ? opt.set.bind(publicThis) : ()=>{
            warn(`Write operation failed: computed property "${key2}" is readonly.`);
        };
        const c = computed({
            get,
            set
        });
        Object.defineProperty(ctx, key2, {
            enumerable: true,
            configurable: true,
            get: ()=>c.value
            ,
            set: (v)=>c.value = v
        });
        checkDuplicateProperties("Computed" /* COMPUTED */ , key2);
    }
    if (watchOptions) for(const key3 in watchOptions)createWatcher(watchOptions[key3], ctx, publicThis, key3);
    if (provideOptions) {
        const provides = _shared.isFunction(provideOptions) ? provideOptions.call(publicThis) : provideOptions;
        Reflect.ownKeys(provides).forEach((key)=>{
            provide(key, provides[key]);
        });
    }
    if (created) callHook(created, instance, "c" /* CREATED */ );
    function registerLifecycleHook(register, hook) {
        if (_shared.isArray(hook)) hook.forEach((_hook)=>register(_hook.bind(publicThis))
        );
        else if (hook) register(hook.bind(publicThis));
    }
    registerLifecycleHook(onBeforeMount, beforeMount);
    registerLifecycleHook(onMounted, mounted);
    registerLifecycleHook(onBeforeUpdate, beforeUpdate);
    registerLifecycleHook(onUpdated, updated);
    registerLifecycleHook(onActivated, activated);
    registerLifecycleHook(onDeactivated, deactivated);
    registerLifecycleHook(onErrorCaptured, errorCaptured);
    registerLifecycleHook(onRenderTracked, renderTracked);
    registerLifecycleHook(onRenderTriggered, renderTriggered);
    registerLifecycleHook(onBeforeUnmount, beforeUnmount);
    registerLifecycleHook(onUnmounted, unmounted);
    registerLifecycleHook(onServerPrefetch, serverPrefetch);
    if (_shared.isArray(expose)) {
        if (expose.length) {
            const exposed = instance.exposed || (instance.exposed = {});
            expose.forEach((key)=>{
                Object.defineProperty(exposed, key, {
                    get: ()=>publicThis[key]
                    ,
                    set: (val)=>publicThis[key] = val
                });
            });
        } else if (!instance.exposed) instance.exposed = {};
    }
    // options that are handled when creating the instance but also need to be
    // applied from mixins
    if (render && instance.render === _shared.NOOP) instance.render = render;
    if (inheritAttrs != null) instance.inheritAttrs = inheritAttrs;
    // asset options.
    if (components) instance.components = components;
    if (directives) instance.directives = directives;
}
function resolveInjections(injectOptions, ctx, checkDuplicateProperties = _shared.NOOP, unwrapRef = false) {
    if (_shared.isArray(injectOptions)) injectOptions = normalizeInject(injectOptions);
    for(const key in injectOptions){
        const opt = injectOptions[key];
        let injected;
        if (_shared.isObject(opt)) {
            if ('default' in opt) injected = inject(opt.from || key, opt.default, true);
            else injected = inject(opt.from || key);
        } else injected = inject(opt);
        if (_reactivity.isRef(injected)) {
            // TODO remove the check in 3.3
            if (unwrapRef) Object.defineProperty(ctx, key, {
                enumerable: true,
                configurable: true,
                get: ()=>injected.value
                ,
                set: (v)=>injected.value = v
            });
            else {
                warn(`injected property "${key}" is a ref and will be auto-unwrapped ` + `and no longer needs \`.value\` in the next minor release. ` + `To opt-in to the new behavior now, ` + `set \`app.config.unwrapInjectedRef = true\` (this config is ` + `temporary and will not be needed in the future.)`);
                ctx[key] = injected;
            }
        } else ctx[key] = injected;
        checkDuplicateProperties("Inject" /* INJECT */ , key);
    }
}
function callHook(hook, instance, type) {
    callWithAsyncErrorHandling(_shared.isArray(hook) ? hook.map((h1)=>h1.bind(instance.proxy)
    ) : hook.bind(instance.proxy), instance, type);
}
function createWatcher(raw, ctx, publicThis, key) {
    const getter = key.includes('.') ? createPathGetter(publicThis, key) : ()=>publicThis[key]
    ;
    if (_shared.isString(raw)) {
        const handler = ctx[raw];
        if (_shared.isFunction(handler)) watch(getter, handler);
        else warn(`Invalid watch handler specified by key "${raw}"`, handler);
    } else if (_shared.isFunction(raw)) watch(getter, raw.bind(publicThis));
    else if (_shared.isObject(raw)) {
        if (_shared.isArray(raw)) raw.forEach((r)=>createWatcher(r, ctx, publicThis, key)
        );
        else {
            const handler = _shared.isFunction(raw.handler) ? raw.handler.bind(publicThis) : ctx[raw.handler];
            if (_shared.isFunction(handler)) watch(getter, handler, raw);
            else warn(`Invalid watch handler specified by key "${raw.handler}"`, handler);
        }
    } else warn(`Invalid watch option: "${key}"`, raw);
}
/**
 * Resolve merged options and cache it on the component.
 * This is done only once per-component since the merging does not involve
 * instances.
 */ function resolveMergedOptions(instance) {
    const base = instance.type;
    const { mixins , extends: extendsOptions  } = base;
    const { mixins: globalMixins , optionsCache: cache , config: { optionMergeStrategies  }  } = instance.appContext;
    const cached = cache.get(base);
    let resolved;
    if (cached) resolved = cached;
    else if (!globalMixins.length && !mixins && !extendsOptions) resolved = base;
    else {
        resolved = {};
        if (globalMixins.length) globalMixins.forEach((m)=>mergeOptions(resolved, m, optionMergeStrategies, true)
        );
        mergeOptions(resolved, base, optionMergeStrategies);
    }
    cache.set(base, resolved);
    return resolved;
}
function mergeOptions(to, from, strats, asMixin = false) {
    const { mixins , extends: extendsOptions  } = from;
    if (extendsOptions) mergeOptions(to, extendsOptions, strats, true);
    if (mixins) mixins.forEach((m)=>mergeOptions(to, m, strats, true)
    );
    for(const key in from)if (asMixin && key === 'expose') warn(`"expose" option is ignored when declared in mixins or extends. ` + `It should only be declared in the base component itself.`);
    else {
        const strat = internalOptionMergeStrats[key] || strats && strats[key];
        to[key] = strat ? strat(to[key], from[key]) : from[key];
    }
    return to;
}
const internalOptionMergeStrats = {
    data: mergeDataFn,
    props: mergeObjectOptions,
    emits: mergeObjectOptions,
    // objects
    methods: mergeObjectOptions,
    computed: mergeObjectOptions,
    // lifecycle
    beforeCreate: mergeAsArray,
    created: mergeAsArray,
    beforeMount: mergeAsArray,
    mounted: mergeAsArray,
    beforeUpdate: mergeAsArray,
    updated: mergeAsArray,
    beforeDestroy: mergeAsArray,
    beforeUnmount: mergeAsArray,
    destroyed: mergeAsArray,
    unmounted: mergeAsArray,
    activated: mergeAsArray,
    deactivated: mergeAsArray,
    errorCaptured: mergeAsArray,
    serverPrefetch: mergeAsArray,
    // assets
    components: mergeObjectOptions,
    directives: mergeObjectOptions,
    // watch
    watch: mergeWatchOptions,
    // provide / inject
    provide: mergeDataFn,
    inject: mergeInject
};
function mergeDataFn(to, from) {
    if (!from) return to;
    if (!to) return from;
    return function mergedDataFn() {
        return _shared.extend(_shared.isFunction(to) ? to.call(this, this) : to, _shared.isFunction(from) ? from.call(this, this) : from);
    };
}
function mergeInject(to, from) {
    return mergeObjectOptions(normalizeInject(to), normalizeInject(from));
}
function normalizeInject(raw) {
    if (_shared.isArray(raw)) {
        const res = {};
        for(let i = 0; i < raw.length; i++)res[raw[i]] = raw[i];
        return res;
    }
    return raw;
}
function mergeAsArray(to, from) {
    return to ? [
        ...new Set([].concat(to, from))
    ] : from;
}
function mergeObjectOptions(to, from) {
    return to ? _shared.extend(_shared.extend(Object.create(null), to), from) : from;
}
function mergeWatchOptions(to, from) {
    if (!to) return from;
    if (!from) return to;
    const merged = _shared.extend(Object.create(null), to);
    for(const key in from)merged[key] = mergeAsArray(to[key], from[key]);
    return merged;
}
function initProps(instance, rawProps, isStateful, isSSR = false) {
    const props = {};
    const attrs = {};
    _shared.def(attrs, InternalObjectKey, 1);
    instance.propsDefaults = Object.create(null);
    setFullProps(instance, rawProps, props, attrs);
    // ensure all declared prop keys are present
    for(const key in instance.propsOptions[0])if (!(key in props)) props[key] = undefined;
    validateProps(rawProps || {}, props, instance);
    if (isStateful) // stateful
    instance.props = isSSR ? props : _reactivity.shallowReactive(props);
    else if (!instance.type.props) // functional w/ optional props, props === attrs
    instance.props = attrs;
    else // functional w/ declared props
    instance.props = props;
    instance.attrs = attrs;
}
function updateProps(instance, rawProps, rawPrevProps, optimized) {
    const { props , attrs , vnode: { patchFlag  }  } = instance;
    const rawCurrentProps = _reactivity.toRaw(props);
    const [options] = instance.propsOptions;
    let hasAttrsChanged = false;
    if (// always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    !(instance.type.__hmrId || instance.parent && instance.parent.type.__hmrId) && (optimized || patchFlag > 0) && !(patchFlag & 16 /* FULL_PROPS */ )) {
        if (patchFlag & 8 /* PROPS */ ) {
            // Compiler-generated props & no keys change, just set the updated
            // the props.
            const propsToUpdate = instance.vnode.dynamicProps;
            for(let i = 0; i < propsToUpdate.length; i++){
                let key = propsToUpdate[i];
                // PROPS flag guarantees rawProps to be non-null
                const value = rawProps[key];
                if (options) {
                    // attr / props separation was done on init and will be consistent
                    // in this code path, so just check if attrs have it.
                    if (_shared.hasOwn(attrs, key)) {
                        if (value !== attrs[key]) {
                            attrs[key] = value;
                            hasAttrsChanged = true;
                        }
                    } else {
                        const camelizedKey = _shared.camelize(key);
                        props[camelizedKey] = resolvePropValue(options, rawCurrentProps, camelizedKey, value, instance, false);
                    }
                } else if (value !== attrs[key]) {
                    attrs[key] = value;
                    hasAttrsChanged = true;
                }
            }
        }
    } else {
        // full props update.
        if (setFullProps(instance, rawProps, props, attrs)) hasAttrsChanged = true;
        // in case of dynamic props, check if we need to delete keys from
        // the props object
        let kebabKey;
        for(const key in rawCurrentProps)if (!rawProps || !_shared.hasOwn(rawProps, key) && ((kebabKey = _shared.hyphenate(key)) === key || !_shared.hasOwn(rawProps, kebabKey))) {
            if (options) {
                if (rawPrevProps && (rawPrevProps[key] !== undefined || // for kebab-case
                rawPrevProps[kebabKey] !== undefined)) props[key] = resolvePropValue(options, rawCurrentProps, key, undefined, instance, true);
            } else delete props[key];
        }
        // in the case of functional component w/o props declaration, props and
        // attrs point to the same object so it should already have been updated.
        if (attrs !== rawCurrentProps) {
            for(const key in attrs)if (!rawProps || !_shared.hasOwn(rawProps, key) && true) {
                delete attrs[key];
                hasAttrsChanged = true;
            }
        }
    }
    // trigger updates for $attrs in case it's used in component slots
    if (hasAttrsChanged) _reactivity.trigger(instance, "set" /* SET */ , '$attrs');
    validateProps(rawProps || {}, props, instance);
}
function setFullProps(instance, rawProps, props, attrs) {
    const [options, needCastKeys] = instance.propsOptions;
    let hasAttrsChanged = false;
    let rawCastValues;
    if (rawProps) for(let key in rawProps){
        // key, ref are reserved and never passed down
        if (_shared.isReservedProp(key)) continue;
        const value = rawProps[key];
        // prop option names are camelized during normalization, so to support
        // kebab -> camel conversion here we need to camelize the key.
        let camelKey;
        if (options && _shared.hasOwn(options, camelKey = _shared.camelize(key))) {
            if (!needCastKeys || !needCastKeys.includes(camelKey)) props[camelKey] = value;
            else (rawCastValues || (rawCastValues = {}))[camelKey] = value;
        } else if (!isEmitListener(instance.emitsOptions, key)) {
            if (!(key in attrs) || value !== attrs[key]) {
                attrs[key] = value;
                hasAttrsChanged = true;
            }
        }
    }
    if (needCastKeys) {
        const rawCurrentProps = _reactivity.toRaw(props);
        const castValues = rawCastValues || _shared.EMPTY_OBJ;
        for(let i = 0; i < needCastKeys.length; i++){
            const key = needCastKeys[i];
            props[key] = resolvePropValue(options, rawCurrentProps, key, castValues[key], instance, !_shared.hasOwn(castValues, key));
        }
    }
    return hasAttrsChanged;
}
function resolvePropValue(options, props, key, value, instance, isAbsent) {
    const opt = options[key];
    if (opt != null) {
        const hasDefault = _shared.hasOwn(opt, 'default');
        // default values
        if (hasDefault && value === undefined) {
            const defaultValue = opt.default;
            if (opt.type !== Function && _shared.isFunction(defaultValue)) {
                const { propsDefaults  } = instance;
                if (key in propsDefaults) value = propsDefaults[key];
                else {
                    setCurrentInstance(instance);
                    value = propsDefaults[key] = defaultValue.call(null, props);
                    unsetCurrentInstance();
                }
            } else value = defaultValue;
        }
        // boolean casting
        if (opt[0 /* shouldCast */ ]) {
            if (isAbsent && !hasDefault) value = false;
            else if (opt[1 /* shouldCastTrue */ ] && (value === '' || value === _shared.hyphenate(key))) value = true;
        }
    }
    return value;
}
function normalizePropsOptions(comp, appContext, asMixin = false) {
    const cache = appContext.propsCache;
    const cached = cache.get(comp);
    if (cached) return cached;
    const raw2 = comp.props;
    const normalized = {};
    const needCastKeys = [];
    // apply mixin/extends props
    let hasExtends = false;
    if (__VUE_OPTIONS_API__ && !_shared.isFunction(comp)) {
        const extendProps = (raw)=>{
            hasExtends = true;
            const [props, keys] = normalizePropsOptions(raw, appContext, true);
            _shared.extend(normalized, props);
            if (keys) needCastKeys.push(...keys);
        };
        if (!asMixin && appContext.mixins.length) appContext.mixins.forEach(extendProps);
        if (comp.extends) extendProps(comp.extends);
        if (comp.mixins) comp.mixins.forEach(extendProps);
    }
    if (!raw2 && !hasExtends) {
        cache.set(comp, _shared.EMPTY_ARR);
        return _shared.EMPTY_ARR;
    }
    if (_shared.isArray(raw2)) for(let i = 0; i < raw2.length; i++){
        if (!_shared.isString(raw2[i])) warn(`props must be strings when using array syntax.`, raw2[i]);
        const normalizedKey = _shared.camelize(raw2[i]);
        if (validatePropName(normalizedKey)) normalized[normalizedKey] = _shared.EMPTY_OBJ;
    }
    else if (raw2) {
        if (!_shared.isObject(raw2)) warn(`invalid props options`, raw2);
        for(const key in raw2){
            const normalizedKey = _shared.camelize(key);
            if (validatePropName(normalizedKey)) {
                const opt = raw2[key];
                const prop = normalized[normalizedKey] = _shared.isArray(opt) || _shared.isFunction(opt) ? {
                    type: opt
                } : opt;
                if (prop) {
                    const booleanIndex = getTypeIndex(Boolean, prop.type);
                    const stringIndex = getTypeIndex(String, prop.type);
                    prop[0 /* shouldCast */ ] = booleanIndex > -1;
                    prop[1 /* shouldCastTrue */ ] = stringIndex < 0 || booleanIndex < stringIndex;
                    // if the prop needs boolean casting or default value
                    if (booleanIndex > -1 || _shared.hasOwn(prop, 'default')) needCastKeys.push(normalizedKey);
                }
            }
        }
    }
    const res = [
        normalized,
        needCastKeys
    ];
    cache.set(comp, res);
    return res;
}
function validatePropName(key) {
    if (key[0] !== '$') return true;
    else warn(`Invalid prop name: "${key}" is a reserved property.`);
    return false;
}
// use function string name to check type constructors
// so that it works across vms / iframes.
function getType(ctor) {
    const match = ctor && ctor.toString().match(/^\s*function (\w+)/);
    return match ? match[1] : ctor === null ? 'null' : '';
}
function isSameType(a, b) {
    return getType(a) === getType(b);
}
function getTypeIndex(type, expectedTypes) {
    if (_shared.isArray(expectedTypes)) return expectedTypes.findIndex((t)=>isSameType(t, type)
    );
    else if (_shared.isFunction(expectedTypes)) return isSameType(expectedTypes, type) ? 0 : -1;
    return -1;
}
/**
 * dev only
 */ function validateProps(rawProps, props, instance) {
    const resolvedValues = _reactivity.toRaw(props);
    const options = instance.propsOptions[0];
    for(const key in options){
        let opt = options[key];
        if (opt == null) continue;
        validateProp(key, resolvedValues[key], opt, !_shared.hasOwn(rawProps, key) && !_shared.hasOwn(rawProps, _shared.hyphenate(key)));
    }
}
/**
 * dev only
 */ function validateProp(name, value, prop, isAbsent) {
    const { type , required , validator  } = prop;
    // required!
    if (required && isAbsent) {
        warn('Missing required prop: "' + name + '"');
        return;
    }
    // missing but optional
    if (value == null && !prop.required) return;
    // type check
    if (type != null && type !== true) {
        let isValid = false;
        const types = _shared.isArray(type) ? type : [
            type
        ];
        const expectedTypes = [];
        // value is valid as long as one of the specified types match
        for(let i = 0; i < types.length && !isValid; i++){
            const { valid , expectedType  } = assertType(value, types[i]);
            expectedTypes.push(expectedType || '');
            isValid = valid;
        }
        if (!isValid) {
            warn(getInvalidTypeMessage(name, value, expectedTypes));
            return;
        }
    }
    // custom validator
    if (validator && !validator(value)) warn('Invalid prop: custom validator check failed for prop "' + name + '".');
}
const isSimpleType = /*#__PURE__*/ _shared.makeMap('String,Number,Boolean,Function,Symbol,BigInt');
/**
 * dev only
 */ function assertType(value, type) {
    let valid;
    const expectedType = getType(type);
    if (isSimpleType(expectedType)) {
        const t = typeof value;
        valid = t === expectedType.toLowerCase();
        // for primitive wrapper objects
        if (!valid && t === 'object') valid = value instanceof type;
    } else if (expectedType === 'Object') valid = _shared.isObject(value);
    else if (expectedType === 'Array') valid = _shared.isArray(value);
    else if (expectedType === 'null') valid = value === null;
    else valid = value instanceof type;
    return {
        valid,
        expectedType
    };
}
/**
 * dev only
 */ function getInvalidTypeMessage(name, value, expectedTypes) {
    let message = `Invalid prop: type check failed for prop "${name}".` + ` Expected ${expectedTypes.map(_shared.capitalize).join(' | ')}`;
    const expectedType = expectedTypes[0];
    const receivedType = _shared.toRawType(value);
    const expectedValue = styleValue(value, expectedType);
    const receivedValue = styleValue(value, receivedType);
    // check if we need to specify expected value
    if (expectedTypes.length === 1 && isExplicable(expectedType) && !isBoolean(expectedType, receivedType)) message += ` with value ${expectedValue}`;
    message += `, got ${receivedType} `;
    // check if we need to specify received value
    if (isExplicable(receivedType)) message += `with value ${receivedValue}.`;
    return message;
}
/**
 * dev only
 */ function styleValue(value, type) {
    if (type === 'String') return `"${value}"`;
    else if (type === 'Number') return `${Number(value)}`;
    else return `${value}`;
}
/**
 * dev only
 */ function isExplicable(type) {
    const explicitTypes = [
        'string',
        'number',
        'boolean'
    ];
    return explicitTypes.some((elem)=>type.toLowerCase() === elem
    );
}
/**
 * dev only
 */ function isBoolean(...args) {
    return args.some((elem)=>elem.toLowerCase() === 'boolean'
    );
}
const isInternalKey = (key)=>key[0] === '_' || key === '$stable'
;
const normalizeSlotValue = (value)=>_shared.isArray(value) ? value.map(normalizeVNode) : [
        normalizeVNode(value)
    ]
;
const normalizeSlot = (key, rawSlot, ctx)=>{
    const normalized = withCtx((...args)=>{
        if (currentInstance) warn(`Slot "${key}" invoked outside of the render function: ` + `this will not track dependencies used in the slot. ` + `Invoke the slot function inside the render function instead.`);
        return normalizeSlotValue(rawSlot(...args));
    }, ctx);
    normalized._c = false;
    return normalized;
};
const normalizeObjectSlots = (rawSlots, slots, instance)=>{
    const ctx = rawSlots._ctx;
    for(const key in rawSlots){
        if (isInternalKey(key)) continue;
        const value = rawSlots[key];
        if (_shared.isFunction(value)) slots[key] = normalizeSlot(key, value, ctx);
        else if (value != null) {
            warn(`Non-function value encountered for slot "${key}". ` + `Prefer function slots for better performance.`);
            const normalized = normalizeSlotValue(value);
            slots[key] = ()=>normalized
            ;
        }
    }
};
const normalizeVNodeSlots = (instance, children)=>{
    if (!isKeepAlive(instance.vnode) && true) warn(`Non-function value encountered for default slot. ` + `Prefer function slots for better performance.`);
    const normalized = normalizeSlotValue(children);
    instance.slots.default = ()=>normalized
    ;
};
const initSlots = (instance, children)=>{
    if (instance.vnode.shapeFlag & 32 /* SLOTS_CHILDREN */ ) {
        const type = children._;
        if (type) {
            // users can get the shallow readonly version of the slots object through `this.$slots`,
            // we should avoid the proxy object polluting the slots of the internal instance
            instance.slots = _reactivity.toRaw(children);
            // make compiler marker non-enumerable
            _shared.def(children, '_', type);
        } else normalizeObjectSlots(children, instance.slots = {});
    } else {
        instance.slots = {};
        if (children) normalizeVNodeSlots(instance, children);
    }
    _shared.def(instance.slots, InternalObjectKey, 1);
};
const updateSlots = (instance, children, optimized)=>{
    const { vnode , slots  } = instance;
    let needDeletionCheck = true;
    let deletionComparisonTarget = _shared.EMPTY_OBJ;
    if (vnode.shapeFlag & 32 /* SLOTS_CHILDREN */ ) {
        const type = children._;
        if (type) {
            // compiled slots.
            if (isHmrUpdating) // Parent was HMR updated so slot content may have changed.
            // force update slots and mark instance for hmr as well
            _shared.extend(slots, children);
            else if (optimized && type === 1 /* STABLE */ ) // compiled AND stable.
            // no need to update, and skip stale slots removal.
            needDeletionCheck = false;
            else {
                // compiled but dynamic (v-if/v-for on slots) - update slots, but skip
                // normalization.
                _shared.extend(slots, children);
                // #2893
                // when rendering the optimized slots by manually written render function,
                // we need to delete the `slots._` flag if necessary to make subsequent updates reliable,
                // i.e. let the `renderSlot` create the bailed Fragment
                if (!optimized && type === 1 /* STABLE */ ) delete slots._;
            }
        } else {
            needDeletionCheck = !children.$stable;
            normalizeObjectSlots(children, slots);
        }
        deletionComparisonTarget = children;
    } else if (children) {
        // non slot object children (direct value) passed to a component
        normalizeVNodeSlots(instance, children);
        deletionComparisonTarget = {
            default: 1
        };
    }
    // delete stale slots
    if (needDeletionCheck) {
        for(const key in slots)if (!isInternalKey(key) && !(key in deletionComparisonTarget)) delete slots[key];
    }
};
/**
Runtime helper for applying directives to a vnode. Example usage:

const comp = resolveComponent('comp')
const foo = resolveDirective('foo')
const bar = resolveDirective('bar')

return withDirectives(h(comp), [
  [foo, this.x],
  [bar, this.y]
])
*/ function validateDirectiveName(name) {
    if (_shared.isBuiltInDirective(name)) warn('Do not use built-in directive ids as custom directive id: ' + name);
}
/**
 * Adds directives to a VNode.
 */ function withDirectives(vnode, directives) {
    const internalInstance = currentRenderingInstance;
    if (internalInstance === null) {
        warn(`withDirectives can only be used inside render functions.`);
        return vnode;
    }
    const instance = internalInstance.proxy;
    const bindings = vnode.dirs || (vnode.dirs = []);
    for(let i = 0; i < directives.length; i++){
        let [dir, value, arg, modifiers = _shared.EMPTY_OBJ] = directives[i];
        if (_shared.isFunction(dir)) dir = {
            mounted: dir,
            updated: dir
        };
        if (dir.deep) traverse(value);
        bindings.push({
            dir,
            instance,
            value,
            oldValue: void 0,
            arg,
            modifiers
        });
    }
    return vnode;
}
function invokeDirectiveHook(vnode, prevVNode, instance, name) {
    const bindings = vnode.dirs;
    const oldBindings = prevVNode && prevVNode.dirs;
    for(let i = 0; i < bindings.length; i++){
        const binding = bindings[i];
        if (oldBindings) binding.oldValue = oldBindings[i].value;
        let hook = binding.dir[name];
        if (hook) {
            // disable tracking inside all lifecycle hooks
            // since they can potentially be called inside effects.
            _reactivity.pauseTracking();
            callWithAsyncErrorHandling(hook, instance, 8 /* DIRECTIVE_HOOK */ , [
                vnode.el,
                binding,
                vnode,
                prevVNode
            ]);
            _reactivity.resetTracking();
        }
    }
}
function createAppContext() {
    return {
        app: null,
        config: {
            isNativeTag: _shared.NO,
            performance: false,
            globalProperties: {},
            optionMergeStrategies: {},
            errorHandler: undefined,
            warnHandler: undefined,
            compilerOptions: {}
        },
        mixins: [],
        components: {},
        directives: {},
        provides: Object.create(null),
        optionsCache: new WeakMap(),
        propsCache: new WeakMap(),
        emitsCache: new WeakMap()
    };
}
let uid = 0;
function createAppAPI(render, hydrate) {
    return function createApp(rootComponent, rootProps = null) {
        if (rootProps != null && !_shared.isObject(rootProps)) {
            warn(`root props passed to app.mount() must be an object.`);
            rootProps = null;
        }
        const context = createAppContext();
        const installedPlugins = new Set();
        let isMounted = false;
        const app = context.app = {
            _uid: uid++,
            _component: rootComponent,
            _props: rootProps,
            _container: null,
            _context: context,
            _instance: null,
            version,
            get config () {
                return context.config;
            },
            set config (v){
                warn(`app.config cannot be replaced. Modify individual options instead.`);
            },
            use (plugin, ...options) {
                if (installedPlugins.has(plugin)) warn(`Plugin has already been applied to target app.`);
                else if (plugin && _shared.isFunction(plugin.install)) {
                    installedPlugins.add(plugin);
                    plugin.install(app, ...options);
                } else if (_shared.isFunction(plugin)) {
                    installedPlugins.add(plugin);
                    plugin(app, ...options);
                } else warn(`A plugin must either be a function or an object with an "install" ` + `function.`);
                return app;
            },
            mixin (mixin) {
                if (__VUE_OPTIONS_API__) {
                    if (!context.mixins.includes(mixin)) context.mixins.push(mixin);
                    else warn('Mixin has already been applied to target app' + (mixin.name ? `: ${mixin.name}` : ''));
                } else warn('Mixins are only available in builds supporting Options API');
                return app;
            },
            component (name, component) {
                validateComponentName(name, context.config);
                if (!component) return context.components[name];
                if (context.components[name]) warn(`Component "${name}" has already been registered in target app.`);
                context.components[name] = component;
                return app;
            },
            directive (name, directive) {
                validateDirectiveName(name);
                if (!directive) return context.directives[name];
                if (context.directives[name]) warn(`Directive "${name}" has already been registered in target app.`);
                context.directives[name] = directive;
                return app;
            },
            mount (rootContainer, isHydrate, isSVG) {
                if (!isMounted) {
                    const vnode = createVNode(rootComponent, rootProps);
                    // store app context on the root VNode.
                    // this will be set on the root instance on initial mount.
                    vnode.appContext = context;
                    context.reload = ()=>{
                        render(cloneVNode(vnode), rootContainer, isSVG);
                    };
                    if (isHydrate && hydrate) hydrate(vnode, rootContainer);
                    else render(vnode, rootContainer, isSVG);
                    isMounted = true;
                    app._container = rootContainer;
                    rootContainer.__vue_app__ = app;
                    app._instance = vnode.component;
                    devtoolsInitApp(app, version);
                    return getExposeProxy(vnode.component) || vnode.component.proxy;
                } else warn(`App has already been mounted.\n` + `If you want to remount the same app, move your app creation logic ` + `into a factory function and create fresh app instances for each ` + `mount - e.g. \`const createMyApp = () => createApp(App)\``);
            },
            unmount () {
                if (isMounted) {
                    render(null, app._container);
                    app._instance = null;
                    devtoolsUnmountApp(app);
                    delete app._container.__vue_app__;
                } else warn(`Cannot unmount an app that is not mounted.`);
            },
            provide (key, value) {
                if (key in context.provides) warn(`App already provides property with key "${String(key)}". ` + `It will be overwritten with the new value.`);
                // TypeScript doesn't allow symbols as index type
                // https://github.com/Microsoft/TypeScript/issues/24587
                context.provides[key] = value;
                return app;
            }
        };
        return app;
    };
}
/**
 * Function for handling a template ref
 */ function setRef(rawRef, oldRawRef, parentSuspense, vnode, isUnmount = false) {
    if (_shared.isArray(rawRef)) {
        rawRef.forEach((r, i)=>setRef(r, oldRawRef && (_shared.isArray(oldRawRef) ? oldRawRef[i] : oldRawRef), parentSuspense, vnode, isUnmount)
        );
        return;
    }
    if (isAsyncWrapper(vnode) && !isUnmount) // when mounting async components, nothing needs to be done,
    // because the template ref is forwarded to inner component
    return;
    const refValue = vnode.shapeFlag & 4 /* STATEFUL_COMPONENT */  ? getExposeProxy(vnode.component) || vnode.component.proxy : vnode.el;
    const value = isUnmount ? null : refValue;
    const { i: owner , r: ref  } = rawRef;
    if (!owner) {
        warn(`Missing ref owner context. ref cannot be used on hoisted vnodes. ` + `A vnode with ref must be created inside the render function.`);
        return;
    }
    const oldRef = oldRawRef && oldRawRef.r;
    const refs = owner.refs === _shared.EMPTY_OBJ ? owner.refs = {} : owner.refs;
    const setupState = owner.setupState;
    // dynamic ref changed. unset old ref
    if (oldRef != null && oldRef !== ref) {
        if (_shared.isString(oldRef)) {
            refs[oldRef] = null;
            if (_shared.hasOwn(setupState, oldRef)) setupState[oldRef] = null;
        } else if (_reactivity.isRef(oldRef)) oldRef.value = null;
    }
    if (_shared.isFunction(ref)) callWithErrorHandling(ref, owner, 12 /* FUNCTION_REF */ , [
        value,
        refs
    ]);
    else {
        const _isString = _shared.isString(ref);
        const _isRef = _reactivity.isRef(ref);
        if (_isString || _isRef) {
            const doSet = ()=>{
                if (rawRef.f) {
                    const existing = _isString ? refs[ref] : ref.value;
                    if (isUnmount) _shared.isArray(existing) && _shared.remove(existing, refValue);
                    else {
                        if (!_shared.isArray(existing)) {
                            if (_isString) refs[ref] = [
                                refValue
                            ];
                            else {
                                ref.value = [
                                    refValue
                                ];
                                if (rawRef.k) refs[rawRef.k] = ref.value;
                            }
                        } else if (!existing.includes(refValue)) existing.push(refValue);
                    }
                } else if (_isString) {
                    refs[ref] = value;
                    if (_shared.hasOwn(setupState, ref)) setupState[ref] = value;
                } else if (_reactivity.isRef(ref)) {
                    ref.value = value;
                    if (rawRef.k) refs[rawRef.k] = value;
                } else warn('Invalid template ref type:', ref, `(${typeof ref})`);
            };
            if (value) {
                doSet.id = -1;
                queuePostRenderEffect(doSet, parentSuspense);
            } else doSet();
        } else warn('Invalid template ref type:', ref, `(${typeof ref})`);
    }
}
let hasMismatch = false;
const isSVGContainer = (container)=>/svg/.test(container.namespaceURI) && container.tagName !== 'foreignObject'
;
const isComment = (node)=>node.nodeType === 8 /* COMMENT */ 
;
// Note: hydration is DOM-specific
// But we have to place it in core due to tight coupling with core - splitting
// it out creates a ton of unnecessary complexity.
// Hydration also depends on some renderer internal logic which needs to be
// passed in via arguments.
function createHydrationFunctions(rendererInternals) {
    const { mt: mountComponent , p: patch , o: { patchProp , nextSibling , parentNode , remove , insert , createComment  }  } = rendererInternals;
    const hydrate = (vnode, container)=>{
        if (!container.hasChildNodes()) {
            warn(`Attempting to hydrate existing markup but container is empty. ` + `Performing full mount instead.`);
            patch(null, vnode, container);
            flushPostFlushCbs();
            return;
        }
        hasMismatch = false;
        hydrateNode(container.firstChild, vnode, null, null, null);
        flushPostFlushCbs();
        if (hasMismatch && true) // this error should show up in production
        console.error(`Hydration completed but contains mismatches.`);
    };
    const hydrateNode = (node, vnode, parentComponent, parentSuspense, slotScopeIds, optimized = false)=>{
        const isFragmentStart = isComment(node) && node.data === '[';
        const onMismatch = ()=>handleMismatch(node, vnode, parentComponent, parentSuspense, slotScopeIds, isFragmentStart)
        ;
        const { type , ref , shapeFlag  } = vnode;
        const domType = node.nodeType;
        vnode.el = node;
        let nextNode = null;
        switch(type){
            case Text:
                if (domType !== 3 /* TEXT */ ) nextNode = onMismatch();
                else {
                    if (node.data !== vnode.children) {
                        hasMismatch = true;
                        warn(`Hydration text mismatch:` + `\n- Client: ${JSON.stringify(node.data)}` + `\n- Server: ${JSON.stringify(vnode.children)}`);
                        node.data = vnode.children;
                    }
                    nextNode = nextSibling(node);
                }
                break;
            case Comment:
                if (domType !== 8 /* COMMENT */  || isFragmentStart) nextNode = onMismatch();
                else nextNode = nextSibling(node);
                break;
            case Static:
                if (domType !== 1 /* ELEMENT */ ) nextNode = onMismatch();
                else {
                    // determine anchor, adopt content
                    nextNode = node;
                    // if the static vnode has its content stripped during build,
                    // adopt it from the server-rendered HTML.
                    const needToAdoptContent = !vnode.children.length;
                    for(let i = 0; i < vnode.staticCount; i++){
                        if (needToAdoptContent) vnode.children += nextNode.outerHTML;
                        if (i === vnode.staticCount - 1) vnode.anchor = nextNode;
                        nextNode = nextSibling(nextNode);
                    }
                    return nextNode;
                }
                break;
            case Fragment:
                if (!isFragmentStart) nextNode = onMismatch();
                else nextNode = hydrateFragment(node, vnode, parentComponent, parentSuspense, slotScopeIds, optimized);
                break;
            default:
                if (shapeFlag & 1 /* ELEMENT */ ) {
                    if (domType !== 1 /* ELEMENT */  || vnode.type.toLowerCase() !== node.tagName.toLowerCase()) nextNode = onMismatch();
                    else nextNode = hydrateElement(node, vnode, parentComponent, parentSuspense, slotScopeIds, optimized);
                } else if (shapeFlag & 6 /* COMPONENT */ ) {
                    // when setting up the render effect, if the initial vnode already
                    // has .el set, the component will perform hydration instead of mount
                    // on its sub-tree.
                    vnode.slotScopeIds = slotScopeIds;
                    const container = parentNode(node);
                    mountComponent(vnode, container, null, parentComponent, parentSuspense, isSVGContainer(container), optimized);
                    // component may be async, so in the case of fragments we cannot rely
                    // on component's rendered output to determine the end of the fragment
                    // instead, we do a lookahead to find the end anchor node.
                    nextNode = isFragmentStart ? locateClosingAsyncAnchor(node) : nextSibling(node);
                    // #3787
                    // if component is async, it may get moved / unmounted before its
                    // inner component is loaded, so we need to give it a placeholder
                    // vnode that matches its adopted DOM.
                    if (isAsyncWrapper(vnode)) {
                        let subTree;
                        if (isFragmentStart) {
                            subTree = createVNode(Fragment);
                            subTree.anchor = nextNode ? nextNode.previousSibling : container.lastChild;
                        } else subTree = node.nodeType === 3 ? createTextVNode('') : createVNode('div');
                        subTree.el = node;
                        vnode.component.subTree = subTree;
                    }
                } else if (shapeFlag & 64 /* TELEPORT */ ) {
                    if (domType !== 8 /* COMMENT */ ) nextNode = onMismatch();
                    else nextNode = vnode.type.hydrate(node, vnode, parentComponent, parentSuspense, slotScopeIds, optimized, rendererInternals, hydrateChildren);
                } else if (shapeFlag & 128 /* SUSPENSE */ ) nextNode = vnode.type.hydrate(node, vnode, parentComponent, parentSuspense, isSVGContainer(parentNode(node)), slotScopeIds, optimized, rendererInternals, hydrateNode);
                else warn('Invalid HostVNode type:', type, `(${typeof type})`);
        }
        if (ref != null) setRef(ref, null, parentSuspense, vnode);
        return nextNode;
    };
    const hydrateElement = (el, vnode, parentComponent, parentSuspense, slotScopeIds, optimized)=>{
        optimized = optimized || !!vnode.dynamicChildren;
        const { type , props , patchFlag , shapeFlag , dirs  } = vnode;
        // #4006 for form elements with non-string v-model value bindings
        // e.g. <option :value="obj">, <input type="checkbox" :true-value="1">
        const forcePatchValue = type === 'input' && dirs || type === 'option';
        {
            if (dirs) invokeDirectiveHook(vnode, null, parentComponent, 'created');
            // props
            if (props) {
                if (forcePatchValue || !optimized || patchFlag & 48 /* HYDRATE_EVENTS */ ) {
                    for(const key in props)if (forcePatchValue && key.endsWith('value') || _shared.isOn(key) && !_shared.isReservedProp(key)) patchProp(el, key, null, props[key], false, undefined, parentComponent);
                } else if (props.onClick) // Fast path for click listeners (which is most often) to avoid
                // iterating through props.
                patchProp(el, 'onClick', null, props.onClick, false, undefined, parentComponent);
            }
            // vnode / directive hooks
            let vnodeHooks;
            if (vnodeHooks = props && props.onVnodeBeforeMount) invokeVNodeHook(vnodeHooks, parentComponent, vnode);
            if (dirs) invokeDirectiveHook(vnode, null, parentComponent, 'beforeMount');
            if ((vnodeHooks = props && props.onVnodeMounted) || dirs) queueEffectWithSuspense(()=>{
                vnodeHooks && invokeVNodeHook(vnodeHooks, parentComponent, vnode);
                dirs && invokeDirectiveHook(vnode, null, parentComponent, 'mounted');
            }, parentSuspense);
            // children
            if (shapeFlag & 16 /* ARRAY_CHILDREN */  && // skip if element has innerHTML / textContent
            !(props && (props.innerHTML || props.textContent))) {
                let next = hydrateChildren(el.firstChild, vnode, el, parentComponent, parentSuspense, slotScopeIds, optimized);
                let hasWarned1 = false;
                while(next){
                    hasMismatch = true;
                    if (!hasWarned1) {
                        warn(`Hydration children mismatch in <${vnode.type}>: ` + `server rendered element contains more child nodes than client vdom.`);
                        hasWarned1 = true;
                    }
                    // The SSRed DOM contains more nodes than it should. Remove them.
                    const cur = next;
                    next = next.nextSibling;
                    remove(cur);
                }
            } else if (shapeFlag & 8 /* TEXT_CHILDREN */ ) {
                if (el.textContent !== vnode.children) {
                    hasMismatch = true;
                    warn(`Hydration text content mismatch in <${vnode.type}>:\n` + `- Client: ${el.textContent}\n` + `- Server: ${vnode.children}`);
                    el.textContent = vnode.children;
                }
            }
        }
        return el.nextSibling;
    };
    const hydrateChildren = (node, parentVNode, container, parentComponent, parentSuspense, slotScopeIds, optimized)=>{
        optimized = optimized || !!parentVNode.dynamicChildren;
        const children = parentVNode.children;
        const l = children.length;
        let hasWarned2 = false;
        for(let i = 0; i < l; i++){
            const vnode = optimized ? children[i] : children[i] = normalizeVNode(children[i]);
            if (node) node = hydrateNode(node, vnode, parentComponent, parentSuspense, slotScopeIds, optimized);
            else if (vnode.type === Text && !vnode.children) continue;
            else {
                hasMismatch = true;
                if (!hasWarned2) {
                    warn(`Hydration children mismatch in <${container.tagName.toLowerCase()}>: ` + `server rendered element contains fewer child nodes than client vdom.`);
                    hasWarned2 = true;
                }
                // the SSRed DOM didn't contain enough nodes. Mount the missing ones.
                patch(null, vnode, container, null, parentComponent, parentSuspense, isSVGContainer(container), slotScopeIds);
            }
        }
        return node;
    };
    const hydrateFragment = (node, vnode, parentComponent, parentSuspense, slotScopeIds, optimized)=>{
        const { slotScopeIds: fragmentSlotScopeIds  } = vnode;
        if (fragmentSlotScopeIds) slotScopeIds = slotScopeIds ? slotScopeIds.concat(fragmentSlotScopeIds) : fragmentSlotScopeIds;
        const container = parentNode(node);
        const next = hydrateChildren(nextSibling(node), vnode, container, parentComponent, parentSuspense, slotScopeIds, optimized);
        if (next && isComment(next) && next.data === ']') return nextSibling(vnode.anchor = next);
        else {
            // fragment didn't hydrate successfully, since we didn't get a end anchor
            // back. This should have led to node/children mismatch warnings.
            hasMismatch = true;
            // since the anchor is missing, we need to create one and insert it
            insert(vnode.anchor = createComment(`]`), container, next);
            return next;
        }
    };
    const handleMismatch = (node, vnode, parentComponent, parentSuspense, slotScopeIds, isFragment)=>{
        hasMismatch = true;
        warn(`Hydration node mismatch:\n- Client vnode:`, vnode.type, `\n- Server rendered DOM:`, node, node.nodeType === 3 /* TEXT */  ? `(text)` : isComment(node) && node.data === '[' ? `(start of fragment)` : ``);
        vnode.el = null;
        if (isFragment) {
            // remove excessive fragment nodes
            const end = locateClosingAsyncAnchor(node);
            while(true){
                const next = nextSibling(node);
                if (next && next !== end) remove(next);
                else break;
            }
        }
        const next = nextSibling(node);
        const container = parentNode(node);
        remove(node);
        patch(null, vnode, container, next, parentComponent, parentSuspense, isSVGContainer(container), slotScopeIds);
        return next;
    };
    const locateClosingAsyncAnchor = (node)=>{
        let match = 0;
        while(node){
            node = nextSibling(node);
            if (node && isComment(node)) {
                if (node.data === '[') match++;
                if (node.data === ']') {
                    if (match === 0) return nextSibling(node);
                    else match--;
                }
            }
        }
        return node;
    };
    return [
        hydrate,
        hydrateNode
    ];
}
/* eslint-disable no-restricted-globals */ let supported;
let perf;
function startMeasure(instance, type) {
    if (instance.appContext.config.performance && isSupported()) perf.mark(`vue-${type}-${instance.uid}`);
    devtoolsPerfStart(instance, type, supported ? perf.now() : Date.now());
}
function endMeasure(instance, type) {
    if (instance.appContext.config.performance && isSupported()) {
        const startTag = `vue-${type}-${instance.uid}`;
        const endTag = startTag + `:end`;
        perf.mark(endTag);
        perf.measure(`<${formatComponentName(instance, instance.type)}> ${type}`, startTag, endTag);
        perf.clearMarks(startTag);
        perf.clearMarks(endTag);
    }
    devtoolsPerfEnd(instance, type, supported ? perf.now() : Date.now());
}
function isSupported() {
    if (supported !== undefined) return supported;
    if (typeof window !== 'undefined' && window.performance) {
        supported = true;
        perf = window.performance;
    } else supported = false;
    return supported;
}
/**
 * This is only called in esm-bundler builds.
 * It is called when a renderer is created, in `baseCreateRenderer` so that
 * importing runtime-core is side-effects free.
 *
 * istanbul-ignore-next
 */ function initFeatureFlags() {
    const needWarn = [];
    if (typeof __VUE_OPTIONS_API__ !== 'boolean') {
        needWarn.push(`__VUE_OPTIONS_API__`);
        _shared.getGlobalThis().__VUE_OPTIONS_API__ = true;
    }
    if (typeof __VUE_PROD_DEVTOOLS__ !== 'boolean') {
        needWarn.push(`__VUE_PROD_DEVTOOLS__`);
        _shared.getGlobalThis().__VUE_PROD_DEVTOOLS__ = false;
    }
    if (needWarn.length) {
        const multi = needWarn.length > 1;
        console.warn(`Feature flag${multi ? `s` : ``} ${needWarn.join(', ')} ${multi ? `are` : `is`} not explicitly defined. You are running the esm-bundler build of Vue, ` + `which expects these compile-time feature flags to be globally injected ` + `via the bundler config in order to get better tree-shaking in the ` + `production bundle.\n\n` + `For more details, see https://link.vuejs.org/feature-flags.`);
    }
}
const queuePostRenderEffect = queueEffectWithSuspense;
/**
 * The createRenderer function accepts two generic arguments:
 * HostNode and HostElement, corresponding to Node and Element types in the
 * host environment. For example, for runtime-dom, HostNode would be the DOM
 * `Node` interface and HostElement would be the DOM `Element` interface.
 *
 * Custom renderers can pass in the platform specific types like this:
 *
 * ``` js
 * const { render, createApp } = createRenderer<Node, Element>({
 *   patchProp,
 *   ...nodeOps
 * })
 * ```
 */ function createRenderer(options) {
    return baseCreateRenderer(options);
}
// Separate API for creating hydration-enabled renderer.
// Hydration logic is only used when calling this function, making it
// tree-shakable.
function createHydrationRenderer(options) {
    return baseCreateRenderer(options, createHydrationFunctions);
}
// implementation
function baseCreateRenderer(options, createHydrationFns) {
    initFeatureFlags();
    const target = _shared.getGlobalThis();
    target.__VUE__ = true;
    setDevtoolsHook(target.__VUE_DEVTOOLS_GLOBAL_HOOK__, target);
    const { insert: hostInsert , remove: hostRemove , patchProp: hostPatchProp , createElement: hostCreateElement , createText: hostCreateText , createComment: hostCreateComment , setText: hostSetText , setElementText: hostSetElementText , parentNode: hostParentNode , nextSibling: hostNextSibling , setScopeId: hostSetScopeId = _shared.NOOP , cloneNode: hostCloneNode , insertStaticContent: hostInsertStaticContent  } = options;
    // Note: functions inside this closure should use `const xxx = () => {}`
    // style in order to prevent being inlined by minifiers.
    const patch = (n1, n2, container, anchor = null, parentComponent = null, parentSuspense = null, isSVG = false, slotScopeIds = null, optimized = isHmrUpdating ? false : !!n2.dynamicChildren)=>{
        if (n1 === n2) return;
        // patching & not same type, unmount old tree
        if (n1 && !isSameVNodeType(n1, n2)) {
            anchor = getNextHostNode(n1);
            unmount(n1, parentComponent, parentSuspense, true);
            n1 = null;
        }
        if (n2.patchFlag === -2 /* BAIL */ ) {
            optimized = false;
            n2.dynamicChildren = null;
        }
        const { type , ref , shapeFlag  } = n2;
        switch(type){
            case Text:
                processText(n1, n2, container, anchor);
                break;
            case Comment:
                processCommentNode(n1, n2, container, anchor);
                break;
            case Static:
                if (n1 == null) mountStaticNode(n2, container, anchor, isSVG);
                else patchStaticNode(n1, n2, container, isSVG);
                break;
            case Fragment:
                processFragment(n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
                break;
            default:
                if (shapeFlag & 1 /* ELEMENT */ ) processElement(n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
                else if (shapeFlag & 6 /* COMPONENT */ ) processComponent(n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
                else if (shapeFlag & 64 /* TELEPORT */ ) type.process(n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized, internals);
                else if (shapeFlag & 128 /* SUSPENSE */ ) type.process(n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized, internals);
                else warn('Invalid VNode type:', type, `(${typeof type})`);
        }
        // set ref
        if (ref != null && parentComponent) setRef(ref, n1 && n1.ref, parentSuspense, n2 || n1, !n2);
    };
    const processText = (n1, n2, container, anchor)=>{
        if (n1 == null) hostInsert(n2.el = hostCreateText(n2.children), container, anchor);
        else {
            const el = n2.el = n1.el;
            if (n2.children !== n1.children) hostSetText(el, n2.children);
        }
    };
    const processCommentNode = (n1, n2, container, anchor)=>{
        if (n1 == null) hostInsert(n2.el = hostCreateComment(n2.children || ''), container, anchor);
        else // there's no support for dynamic comments
        n2.el = n1.el;
    };
    const mountStaticNode = (n2, container, anchor, isSVG)=>{
        [n2.el, n2.anchor] = hostInsertStaticContent(n2.children, container, anchor, isSVG, n2.el, n2.anchor);
    };
    /**
     * Dev / HMR only
     */ const patchStaticNode = (n1, n2, container, isSVG)=>{
        // static nodes are only patched during dev for HMR
        if (n2.children !== n1.children) {
            const anchor = hostNextSibling(n1.anchor);
            // remove existing
            removeStaticNode(n1);
            [n2.el, n2.anchor] = hostInsertStaticContent(n2.children, container, anchor, isSVG);
        } else {
            n2.el = n1.el;
            n2.anchor = n1.anchor;
        }
    };
    const moveStaticNode = ({ el , anchor  }, container, nextSibling)=>{
        let next;
        while(el && el !== anchor){
            next = hostNextSibling(el);
            hostInsert(el, container, nextSibling);
            el = next;
        }
        hostInsert(anchor, container, nextSibling);
    };
    const removeStaticNode = ({ el , anchor  })=>{
        let next;
        while(el && el !== anchor){
            next = hostNextSibling(el);
            hostRemove(el);
            el = next;
        }
        hostRemove(anchor);
    };
    const processElement = (n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized)=>{
        isSVG = isSVG || n2.type === 'svg';
        if (n1 == null) mountElement(n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
        else patchElement(n1, n2, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
    };
    const mountElement = (vnode, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized)=>{
        let el;
        let vnodeHook;
        const { type , props , shapeFlag , transition , patchFlag , dirs  } = vnode;
        el = vnode.el = hostCreateElement(vnode.type, isSVG, props && props.is, props);
        // mount children first, since some props may rely on child content
        // being already rendered, e.g. `<select value>`
        if (shapeFlag & 8 /* TEXT_CHILDREN */ ) hostSetElementText(el, vnode.children);
        else if (shapeFlag & 16 /* ARRAY_CHILDREN */ ) mountChildren(vnode.children, el, null, parentComponent, parentSuspense, isSVG && type !== 'foreignObject', slotScopeIds, optimized);
        if (dirs) invokeDirectiveHook(vnode, null, parentComponent, 'created');
        // props
        if (props) {
            for(const key in props)if (key !== 'value' && !_shared.isReservedProp(key)) hostPatchProp(el, key, null, props[key], isSVG, vnode.children, parentComponent, parentSuspense, unmountChildren);
            /**
                 * Special case for setting value on DOM elements:
                 * - it can be order-sensitive (e.g. should be set *after* min/max, #2325, #4024)
                 * - it needs to be forced (#1471)
                 * #2353 proposes adding another renderer option to configure this, but
                 * the properties affects are so finite it is worth special casing it
                 * here to reduce the complexity. (Special casing it also should not
                 * affect non-DOM renderers)
                 */ if ('value' in props) hostPatchProp(el, 'value', null, props.value);
            if (vnodeHook = props.onVnodeBeforeMount) invokeVNodeHook(vnodeHook, parentComponent, vnode);
        }
        // scopeId
        setScopeId(el, vnode, vnode.scopeId, slotScopeIds, parentComponent);
        Object.defineProperty(el, '__vnode', {
            value: vnode,
            enumerable: false
        });
        Object.defineProperty(el, '__vueParentComponent', {
            value: parentComponent,
            enumerable: false
        });
        if (dirs) invokeDirectiveHook(vnode, null, parentComponent, 'beforeMount');
        // #1583 For inside suspense + suspense not resolved case, enter hook should call when suspense resolved
        // #1689 For inside suspense + suspense resolved case, just call it
        const needCallTransitionHooks = (!parentSuspense || parentSuspense && !parentSuspense.pendingBranch) && transition && !transition.persisted;
        if (needCallTransitionHooks) transition.beforeEnter(el);
        hostInsert(el, container, anchor);
        if ((vnodeHook = props && props.onVnodeMounted) || needCallTransitionHooks || dirs) queuePostRenderEffect(()=>{
            vnodeHook && invokeVNodeHook(vnodeHook, parentComponent, vnode);
            needCallTransitionHooks && transition.enter(el);
            dirs && invokeDirectiveHook(vnode, null, parentComponent, 'mounted');
        }, parentSuspense);
    };
    const setScopeId = (el, vnode, scopeId, slotScopeIds, parentComponent)=>{
        if (scopeId) hostSetScopeId(el, scopeId);
        if (slotScopeIds) for(let i = 0; i < slotScopeIds.length; i++)hostSetScopeId(el, slotScopeIds[i]);
        if (parentComponent) {
            let subTree = parentComponent.subTree;
            if (subTree.patchFlag > 0 && subTree.patchFlag & 2048 /* DEV_ROOT_FRAGMENT */ ) subTree = filterSingleRoot(subTree.children) || subTree;
            if (vnode === subTree) {
                const parentVNode = parentComponent.vnode;
                setScopeId(el, parentVNode, parentVNode.scopeId, parentVNode.slotScopeIds, parentComponent.parent);
            }
        }
    };
    const mountChildren = (children, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized, start = 0)=>{
        for(let i = start; i < children.length; i++){
            const child = children[i] = optimized ? cloneIfMounted(children[i]) : normalizeVNode(children[i]);
            patch(null, child, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
        }
    };
    const patchElement = (n1, n2, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized)=>{
        const el = n2.el = n1.el;
        let { patchFlag , dynamicChildren , dirs  } = n2;
        // #1426 take the old vnode's patch flag into account since user may clone a
        // compiler-generated vnode, which de-opts to FULL_PROPS
        patchFlag |= n1.patchFlag & 16 /* FULL_PROPS */ ;
        const oldProps = n1.props || _shared.EMPTY_OBJ;
        const newProps = n2.props || _shared.EMPTY_OBJ;
        let vnodeHook;
        // disable recurse in beforeUpdate hooks
        parentComponent && toggleRecurse(parentComponent, false);
        if (vnodeHook = newProps.onVnodeBeforeUpdate) invokeVNodeHook(vnodeHook, parentComponent, n2, n1);
        if (dirs) invokeDirectiveHook(n2, n1, parentComponent, 'beforeUpdate');
        parentComponent && toggleRecurse(parentComponent, true);
        if (isHmrUpdating) {
            // HMR updated, force full diff
            patchFlag = 0;
            optimized = false;
            dynamicChildren = null;
        }
        const areChildrenSVG = isSVG && n2.type !== 'foreignObject';
        if (dynamicChildren) {
            patchBlockChildren(n1.dynamicChildren, dynamicChildren, el, parentComponent, parentSuspense, areChildrenSVG, slotScopeIds);
            if (parentComponent && parentComponent.type.__hmrId) traverseStaticChildren(n1, n2);
        } else if (!optimized) // full diff
        patchChildren(n1, n2, el, null, parentComponent, parentSuspense, areChildrenSVG, slotScopeIds, false);
        if (patchFlag > 0) {
            // the presence of a patchFlag means this element's render code was
            // generated by the compiler and can take the fast path.
            // in this path old node and new node are guaranteed to have the same shape
            // (i.e. at the exact same position in the source template)
            if (patchFlag & 16 /* FULL_PROPS */ ) // element props contain dynamic keys, full diff needed
            patchProps(el, n2, oldProps, newProps, parentComponent, parentSuspense, isSVG);
            else {
                // class
                // this flag is matched when the element has dynamic class bindings.
                if (patchFlag & 2 /* CLASS */ ) {
                    if (oldProps.class !== newProps.class) hostPatchProp(el, 'class', null, newProps.class, isSVG);
                }
                // style
                // this flag is matched when the element has dynamic style bindings
                if (patchFlag & 4 /* STYLE */ ) hostPatchProp(el, 'style', oldProps.style, newProps.style, isSVG);
                // props
                // This flag is matched when the element has dynamic prop/attr bindings
                // other than class and style. The keys of dynamic prop/attrs are saved for
                // faster iteration.
                // Note dynamic keys like :[foo]="bar" will cause this optimization to
                // bail out and go through a full diff because we need to unset the old key
                if (patchFlag & 8 /* PROPS */ ) {
                    // if the flag is present then dynamicProps must be non-null
                    const propsToUpdate = n2.dynamicProps;
                    for(let i = 0; i < propsToUpdate.length; i++){
                        const key = propsToUpdate[i];
                        const prev = oldProps[key];
                        const next = newProps[key];
                        // #1471 force patch value
                        if (next !== prev || key === 'value') hostPatchProp(el, key, prev, next, isSVG, n1.children, parentComponent, parentSuspense, unmountChildren);
                    }
                }
            }
            // text
            // This flag is matched when the element has only dynamic text children.
            if (patchFlag & 1 /* TEXT */ ) {
                if (n1.children !== n2.children) hostSetElementText(el, n2.children);
            }
        } else if (!optimized && dynamicChildren == null) // unoptimized, full diff
        patchProps(el, n2, oldProps, newProps, parentComponent, parentSuspense, isSVG);
        if ((vnodeHook = newProps.onVnodeUpdated) || dirs) queuePostRenderEffect(()=>{
            vnodeHook && invokeVNodeHook(vnodeHook, parentComponent, n2, n1);
            dirs && invokeDirectiveHook(n2, n1, parentComponent, 'updated');
        }, parentSuspense);
    };
    // The fast path for blocks.
    const patchBlockChildren = (oldChildren, newChildren, fallbackContainer, parentComponent, parentSuspense, isSVG, slotScopeIds)=>{
        for(let i = 0; i < newChildren.length; i++){
            const oldVNode = oldChildren[i];
            const newVNode = newChildren[i];
            // Determine the container (parent element) for the patch.
            const container = // oldVNode may be an errored async setup() component inside Suspense
            // which will not have a mounted element
            oldVNode.el && (oldVNode.type === Fragment || // - In the case of different nodes, there is going to be a replacement
            // which also requires the correct parent container
            !isSameVNodeType(oldVNode, newVNode) || // - In the case of a component, it could contain anything.
            oldVNode.shapeFlag & 70 /* TELEPORT */ ) ? hostParentNode(oldVNode.el) : // just pass the block element here to avoid a DOM parentNode call.
            fallbackContainer;
            patch(oldVNode, newVNode, container, null, parentComponent, parentSuspense, isSVG, slotScopeIds, true);
        }
    };
    const patchProps = (el, vnode, oldProps, newProps, parentComponent, parentSuspense, isSVG)=>{
        if (oldProps !== newProps) {
            for(const key in newProps){
                // empty string is not valid prop
                if (_shared.isReservedProp(key)) continue;
                const next = newProps[key];
                const prev = oldProps[key];
                // defer patching value
                if (next !== prev && key !== 'value') hostPatchProp(el, key, prev, next, isSVG, vnode.children, parentComponent, parentSuspense, unmountChildren);
            }
            if (oldProps !== _shared.EMPTY_OBJ) {
                for(const key in oldProps)if (!_shared.isReservedProp(key) && !(key in newProps)) hostPatchProp(el, key, oldProps[key], null, isSVG, vnode.children, parentComponent, parentSuspense, unmountChildren);
            }
            if ('value' in newProps) hostPatchProp(el, 'value', oldProps.value, newProps.value);
        }
    };
    const processFragment = (n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized)=>{
        const fragmentStartAnchor = n2.el = n1 ? n1.el : hostCreateText('');
        const fragmentEndAnchor = n2.anchor = n1 ? n1.anchor : hostCreateText('');
        let { patchFlag , dynamicChildren , slotScopeIds: fragmentSlotScopeIds  } = n2;
        if (isHmrUpdating) {
            // HMR updated, force full diff
            patchFlag = 0;
            optimized = false;
            dynamicChildren = null;
        }
        // check if this is a slot fragment with :slotted scope ids
        if (fragmentSlotScopeIds) slotScopeIds = slotScopeIds ? slotScopeIds.concat(fragmentSlotScopeIds) : fragmentSlotScopeIds;
        if (n1 == null) {
            hostInsert(fragmentStartAnchor, container, anchor);
            hostInsert(fragmentEndAnchor, container, anchor);
            // a fragment can only have array children
            // since they are either generated by the compiler, or implicitly created
            // from arrays.
            mountChildren(n2.children, container, fragmentEndAnchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
        } else if (patchFlag > 0 && patchFlag & 64 /* STABLE_FRAGMENT */  && dynamicChildren && // #2715 the previous fragment could've been a BAILed one as a result
        // of renderSlot() with no valid children
        n1.dynamicChildren) {
            // a stable fragment (template root or <template v-for>) doesn't need to
            // patch children order, but it may contain dynamicChildren.
            patchBlockChildren(n1.dynamicChildren, dynamicChildren, container, parentComponent, parentSuspense, isSVG, slotScopeIds);
            if (parentComponent && parentComponent.type.__hmrId) traverseStaticChildren(n1, n2);
            else if (// #2080 if the stable fragment has a key, it's a <template v-for> that may
            //  get moved around. Make sure all root level vnodes inherit el.
            // #2134 or if it's a component root, it may also get moved around
            // as the component is being moved.
            n2.key != null || parentComponent && n2 === parentComponent.subTree) traverseStaticChildren(n1, n2, true);
        } else // keyed / unkeyed, or manual fragments.
        // for keyed & unkeyed, since they are compiler generated from v-for,
        // each child is guaranteed to be a block so the fragment will never
        // have dynamicChildren.
        patchChildren(n1, n2, container, fragmentEndAnchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
    };
    const processComponent = (n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized)=>{
        n2.slotScopeIds = slotScopeIds;
        if (n1 == null) {
            if (n2.shapeFlag & 512 /* COMPONENT_KEPT_ALIVE */ ) parentComponent.ctx.activate(n2, container, anchor, isSVG, optimized);
            else mountComponent(n2, container, anchor, parentComponent, parentSuspense, isSVG, optimized);
        } else updateComponent(n1, n2, optimized);
    };
    const mountComponent = (initialVNode, container, anchor, parentComponent, parentSuspense, isSVG, optimized)=>{
        const instance = initialVNode.component = createComponentInstance(initialVNode, parentComponent, parentSuspense);
        if (instance.type.__hmrId) registerHMR(instance);
        pushWarningContext(initialVNode);
        startMeasure(instance, `mount`);
        // inject renderer internals for keepAlive
        if (isKeepAlive(initialVNode)) instance.ctx.renderer = internals;
        startMeasure(instance, `init`);
        setupComponent(instance);
        endMeasure(instance, `init`);
        // setup() is async. This component relies on async logic to be resolved
        // before proceeding
        if (instance.asyncDep) {
            parentSuspense && parentSuspense.registerDep(instance, setupRenderEffect);
            // Give it a placeholder if this is not hydration
            // TODO handle self-defined fallback
            if (!initialVNode.el) {
                const placeholder = instance.subTree = createVNode(Comment);
                processCommentNode(null, placeholder, container, anchor);
            }
            return;
        }
        setupRenderEffect(instance, initialVNode, container, anchor, parentSuspense, isSVG, optimized);
        popWarningContext();
        endMeasure(instance, `mount`);
    };
    const updateComponent = (n1, n2, optimized)=>{
        const instance = n2.component = n1.component;
        if (shouldUpdateComponent(n1, n2, optimized)) {
            if (instance.asyncDep && !instance.asyncResolved) {
                pushWarningContext(n2);
                updateComponentPreRender(instance, n2, optimized);
                popWarningContext();
                return;
            } else {
                // normal update
                instance.next = n2;
                // in case the child component is also queued, remove it to avoid
                // double updating the same child component in the same flush.
                invalidateJob(instance.update);
                // instance.update is the reactive effect.
                instance.update();
            }
        } else {
            // no update needed. just copy over properties
            n2.component = n1.component;
            n2.el = n1.el;
            instance.vnode = n2;
        }
    };
    const setupRenderEffect = (instance, initialVNode, container, anchor, parentSuspense, isSVG, optimized)=>{
        const componentUpdateFn = ()=>{
            if (!instance.isMounted) {
                let vnodeHook;
                const { el , props  } = initialVNode;
                const { bm , m , parent  } = instance;
                const isAsyncWrapperVNode = isAsyncWrapper(initialVNode);
                toggleRecurse(instance, false);
                // beforeMount hook
                if (bm) _shared.invokeArrayFns(bm);
                // onVnodeBeforeMount
                if (!isAsyncWrapperVNode && (vnodeHook = props && props.onVnodeBeforeMount)) invokeVNodeHook(vnodeHook, parent, initialVNode);
                toggleRecurse(instance, true);
                if (el && hydrateNode) {
                    // vnode has adopted host node - perform hydration instead of mount.
                    const hydrateSubTree = ()=>{
                        startMeasure(instance, `render`);
                        instance.subTree = renderComponentRoot(instance);
                        endMeasure(instance, `render`);
                        startMeasure(instance, `hydrate`);
                        hydrateNode(el, instance.subTree, instance, parentSuspense, null);
                        endMeasure(instance, `hydrate`);
                    };
                    if (isAsyncWrapperVNode) initialVNode.type.__asyncLoader().then(// note: we are moving the render call into an async callback,
                    // which means it won't track dependencies - but it's ok because
                    // a server-rendered async wrapper is already in resolved state
                    // and it will never need to change.
                    ()=>!instance.isUnmounted && hydrateSubTree()
                    );
                    else hydrateSubTree();
                } else {
                    startMeasure(instance, `render`);
                    const subTree = instance.subTree = renderComponentRoot(instance);
                    endMeasure(instance, `render`);
                    startMeasure(instance, `patch`);
                    patch(null, subTree, container, anchor, instance, parentSuspense, isSVG);
                    endMeasure(instance, `patch`);
                    initialVNode.el = subTree.el;
                }
                // mounted hook
                if (m) queuePostRenderEffect(m, parentSuspense);
                // onVnodeMounted
                if (!isAsyncWrapperVNode && (vnodeHook = props && props.onVnodeMounted)) {
                    const scopedInitialVNode = initialVNode;
                    queuePostRenderEffect(()=>invokeVNodeHook(vnodeHook, parent, scopedInitialVNode)
                    , parentSuspense);
                }
                // activated hook for keep-alive roots.
                // #1742 activated hook must be accessed after first render
                // since the hook may be injected by a child keep-alive
                if (initialVNode.shapeFlag & 256 /* COMPONENT_SHOULD_KEEP_ALIVE */ ) instance.a && queuePostRenderEffect(instance.a, parentSuspense);
                instance.isMounted = true;
                devtoolsComponentAdded(instance);
                // #2458: deference mount-only object parameters to prevent memleaks
                initialVNode = container = anchor = null;
            } else {
                // updateComponent
                // This is triggered by mutation of component's own state (next: null)
                // OR parent calling processComponent (next: VNode)
                let { next , bu , u , parent , vnode  } = instance;
                let originNext = next;
                let vnodeHook;
                pushWarningContext(next || instance.vnode);
                // Disallow component effect recursion during pre-lifecycle hooks.
                toggleRecurse(instance, false);
                if (next) {
                    next.el = vnode.el;
                    updateComponentPreRender(instance, next, optimized);
                } else next = vnode;
                // beforeUpdate hook
                if (bu) _shared.invokeArrayFns(bu);
                // onVnodeBeforeUpdate
                if (vnodeHook = next.props && next.props.onVnodeBeforeUpdate) invokeVNodeHook(vnodeHook, parent, next, vnode);
                toggleRecurse(instance, true);
                startMeasure(instance, `render`);
                const nextTree = renderComponentRoot(instance);
                endMeasure(instance, `render`);
                const prevTree = instance.subTree;
                instance.subTree = nextTree;
                startMeasure(instance, `patch`);
                patch(prevTree, nextTree, // parent may have changed if it's in a teleport
                hostParentNode(prevTree.el), // anchor may have changed if it's in a fragment
                getNextHostNode(prevTree), instance, parentSuspense, isSVG);
                endMeasure(instance, `patch`);
                next.el = nextTree.el;
                if (originNext === null) // self-triggered update. In case of HOC, update parent component
                // vnode el. HOC is indicated by parent instance's subTree pointing
                // to child component's vnode
                updateHOCHostEl(instance, nextTree.el);
                // updated hook
                if (u) queuePostRenderEffect(u, parentSuspense);
                // onVnodeUpdated
                if (vnodeHook = next.props && next.props.onVnodeUpdated) queuePostRenderEffect(()=>invokeVNodeHook(vnodeHook, parent, next, vnode)
                , parentSuspense);
                devtoolsComponentUpdated(instance);
                popWarningContext();
            }
        };
        // create reactive effect for rendering
        const effect = instance.effect = new _reactivity.ReactiveEffect(componentUpdateFn, ()=>queueJob(instance.update)
        , instance.scope // track it in component's effect scope
        );
        const update = instance.update = effect.run.bind(effect);
        update.id = instance.uid;
        // allowRecurse
        // #1801, #2043 component render effects should allow recursive updates
        toggleRecurse(instance, true);
        effect.onTrack = instance.rtc ? (e)=>_shared.invokeArrayFns(instance.rtc, e)
         : void 0;
        effect.onTrigger = instance.rtg ? (e)=>_shared.invokeArrayFns(instance.rtg, e)
         : void 0;
        // @ts-ignore (for scheduler)
        update.ownerInstance = instance;
        update();
    };
    const updateComponentPreRender = (instance, nextVNode, optimized)=>{
        nextVNode.component = instance;
        const prevProps = instance.vnode.props;
        instance.vnode = nextVNode;
        instance.next = null;
        updateProps(instance, nextVNode.props, prevProps, optimized);
        updateSlots(instance, nextVNode.children, optimized);
        _reactivity.pauseTracking();
        // props update may have triggered pre-flush watchers.
        // flush them before the render update.
        flushPreFlushCbs(undefined, instance.update);
        _reactivity.resetTracking();
    };
    const patchChildren = (n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized = false)=>{
        const c1 = n1 && n1.children;
        const prevShapeFlag = n1 ? n1.shapeFlag : 0;
        const c2 = n2.children;
        const { patchFlag , shapeFlag  } = n2;
        // fast path
        if (patchFlag > 0) {
            if (patchFlag & 128 /* KEYED_FRAGMENT */ ) {
                // this could be either fully-keyed or mixed (some keyed some not)
                // presence of patchFlag means children are guaranteed to be arrays
                patchKeyedChildren(c1, c2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
                return;
            } else if (patchFlag & 256 /* UNKEYED_FRAGMENT */ ) {
                // unkeyed
                patchUnkeyedChildren(c1, c2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
                return;
            }
        }
        // children has 3 possibilities: text, array or no children.
        if (shapeFlag & 8 /* TEXT_CHILDREN */ ) {
            // text children fast path
            if (prevShapeFlag & 16 /* ARRAY_CHILDREN */ ) unmountChildren(c1, parentComponent, parentSuspense);
            if (c2 !== c1) hostSetElementText(container, c2);
        } else if (prevShapeFlag & 16 /* ARRAY_CHILDREN */ ) {
            // prev children was array
            if (shapeFlag & 16 /* ARRAY_CHILDREN */ ) // two arrays, cannot assume anything, do full diff
            patchKeyedChildren(c1, c2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
            else // no new children, just unmount old
            unmountChildren(c1, parentComponent, parentSuspense, true);
        } else {
            // prev children was text OR null
            // new children is array OR null
            if (prevShapeFlag & 8 /* TEXT_CHILDREN */ ) hostSetElementText(container, '');
            // mount new if array
            if (shapeFlag & 16 /* ARRAY_CHILDREN */ ) mountChildren(c2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
        }
    };
    const patchUnkeyedChildren = (c1, c2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized)=>{
        c1 = c1 || _shared.EMPTY_ARR;
        c2 = c2 || _shared.EMPTY_ARR;
        const oldLength = c1.length;
        const newLength = c2.length;
        const commonLength = Math.min(oldLength, newLength);
        let i;
        for(i = 0; i < commonLength; i++){
            const nextChild = c2[i] = optimized ? cloneIfMounted(c2[i]) : normalizeVNode(c2[i]);
            patch(c1[i], nextChild, container, null, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
        }
        if (oldLength > newLength) // remove old
        unmountChildren(c1, parentComponent, parentSuspense, true, false, commonLength);
        else // mount new
        mountChildren(c2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized, commonLength);
    };
    // can be all-keyed or mixed
    const patchKeyedChildren = (c1, c2, container, parentAnchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized)=>{
        let i = 0;
        const l2 = c2.length;
        let e1 = c1.length - 1; // prev ending index
        let e2 = l2 - 1; // next ending index
        // 1. sync from start
        // (a b) c
        // (a b) d e
        while(i <= e1 && i <= e2){
            const n1 = c1[i];
            const n2 = c2[i] = optimized ? cloneIfMounted(c2[i]) : normalizeVNode(c2[i]);
            if (isSameVNodeType(n1, n2)) patch(n1, n2, container, null, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
            else break;
            i++;
        }
        // 2. sync from end
        // a (b c)
        // d e (b c)
        while(i <= e1 && i <= e2){
            const n1 = c1[e1];
            const n2 = c2[e2] = optimized ? cloneIfMounted(c2[e2]) : normalizeVNode(c2[e2]);
            if (isSameVNodeType(n1, n2)) patch(n1, n2, container, null, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
            else break;
            e1--;
            e2--;
        }
        // 3. common sequence + mount
        // (a b)
        // (a b) c
        // i = 2, e1 = 1, e2 = 2
        // (a b)
        // c (a b)
        // i = 0, e1 = -1, e2 = 0
        if (i > e1) {
            if (i <= e2) {
                const nextPos = e2 + 1;
                const anchor = nextPos < l2 ? c2[nextPos].el : parentAnchor;
                while(i <= e2){
                    patch(null, c2[i] = optimized ? cloneIfMounted(c2[i]) : normalizeVNode(c2[i]), container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
                    i++;
                }
            }
        } else if (i > e2) while(i <= e1){
            unmount(c1[i], parentComponent, parentSuspense, true);
            i++;
        }
        else {
            const s1 = i; // prev starting index
            const s2 = i; // next starting index
            // 5.1 build key:index map for newChildren
            const keyToNewIndexMap = new Map();
            for(i = s2; i <= e2; i++){
                const nextChild = c2[i] = optimized ? cloneIfMounted(c2[i]) : normalizeVNode(c2[i]);
                if (nextChild.key != null) {
                    if (keyToNewIndexMap.has(nextChild.key)) warn(`Duplicate keys found during update:`, JSON.stringify(nextChild.key), `Make sure keys are unique.`);
                    keyToNewIndexMap.set(nextChild.key, i);
                }
            }
            // 5.2 loop through old children left to be patched and try to patch
            // matching nodes & remove nodes that are no longer present
            let j;
            let patched = 0;
            const toBePatched = e2 - s2 + 1;
            let moved = false;
            // used to track whether any node has moved
            let maxNewIndexSoFar = 0;
            // works as Map<newIndex, oldIndex>
            // Note that oldIndex is offset by +1
            // and oldIndex = 0 is a special value indicating the new node has
            // no corresponding old node.
            // used for determining longest stable subsequence
            const newIndexToOldIndexMap = new Array(toBePatched);
            for(i = 0; i < toBePatched; i++)newIndexToOldIndexMap[i] = 0;
            for(i = s1; i <= e1; i++){
                const prevChild = c1[i];
                if (patched >= toBePatched) {
                    // all new children have been patched so this can only be a removal
                    unmount(prevChild, parentComponent, parentSuspense, true);
                    continue;
                }
                let newIndex;
                if (prevChild.key != null) newIndex = keyToNewIndexMap.get(prevChild.key);
                else {
                    // key-less node, try to locate a key-less node of the same type
                    for(j = s2; j <= e2; j++)if (newIndexToOldIndexMap[j - s2] === 0 && isSameVNodeType(prevChild, c2[j])) {
                        newIndex = j;
                        break;
                    }
                }
                if (newIndex === undefined) unmount(prevChild, parentComponent, parentSuspense, true);
                else {
                    newIndexToOldIndexMap[newIndex - s2] = i + 1;
                    if (newIndex >= maxNewIndexSoFar) maxNewIndexSoFar = newIndex;
                    else moved = true;
                    patch(prevChild, c2[newIndex], container, null, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
                    patched++;
                }
            }
            // 5.3 move and mount
            // generate longest stable subsequence only when nodes have moved
            const increasingNewIndexSequence = moved ? getSequence(newIndexToOldIndexMap) : _shared.EMPTY_ARR;
            j = increasingNewIndexSequence.length - 1;
            // looping backwards so that we can use last patched node as anchor
            for(i = toBePatched - 1; i >= 0; i--){
                const nextIndex = s2 + i;
                const nextChild = c2[nextIndex];
                const anchor = nextIndex + 1 < l2 ? c2[nextIndex + 1].el : parentAnchor;
                if (newIndexToOldIndexMap[i] === 0) // mount new
                patch(null, nextChild, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
                else if (moved) {
                    // move if:
                    // There is no stable subsequence (e.g. a reverse)
                    // OR current node is not among the stable sequence
                    if (j < 0 || i !== increasingNewIndexSequence[j]) move(nextChild, container, anchor, 2 /* REORDER */ );
                    else j--;
                }
            }
        }
    };
    const move = (vnode, container, anchor, moveType, parentSuspense = null)=>{
        const { el , type , transition , children , shapeFlag  } = vnode;
        if (shapeFlag & 6 /* COMPONENT */ ) {
            move(vnode.component.subTree, container, anchor, moveType);
            return;
        }
        if (shapeFlag & 128 /* SUSPENSE */ ) {
            vnode.suspense.move(container, anchor, moveType);
            return;
        }
        if (shapeFlag & 64 /* TELEPORT */ ) {
            type.move(vnode, container, anchor, internals);
            return;
        }
        if (type === Fragment) {
            hostInsert(el, container, anchor);
            for(let i = 0; i < children.length; i++)move(children[i], container, anchor, moveType);
            hostInsert(vnode.anchor, container, anchor);
            return;
        }
        if (type === Static) {
            moveStaticNode(vnode, container, anchor);
            return;
        }
        // single nodes
        const needTransition = moveType !== 2 /* REORDER */  && shapeFlag & 1 /* ELEMENT */  && transition;
        if (needTransition) {
            if (moveType === 0 /* ENTER */ ) {
                transition.beforeEnter(el);
                hostInsert(el, container, anchor);
                queuePostRenderEffect(()=>transition.enter(el)
                , parentSuspense);
            } else {
                const { leave , delayLeave , afterLeave  } = transition;
                const remove = ()=>hostInsert(el, container, anchor)
                ;
                const performLeave = ()=>{
                    leave(el, ()=>{
                        remove();
                        afterLeave && afterLeave();
                    });
                };
                if (delayLeave) delayLeave(el, remove, performLeave);
                else performLeave();
            }
        } else hostInsert(el, container, anchor);
    };
    const unmount = (vnode, parentComponent, parentSuspense, doRemove = false, optimized = false)=>{
        const { type , props , ref , children , dynamicChildren , shapeFlag , patchFlag , dirs  } = vnode;
        // unset ref
        if (ref != null) setRef(ref, null, parentSuspense, vnode, true);
        if (shapeFlag & 256 /* COMPONENT_SHOULD_KEEP_ALIVE */ ) {
            parentComponent.ctx.deactivate(vnode);
            return;
        }
        const shouldInvokeDirs = shapeFlag & 1 /* ELEMENT */  && dirs;
        const shouldInvokeVnodeHook = !isAsyncWrapper(vnode);
        let vnodeHook;
        if (shouldInvokeVnodeHook && (vnodeHook = props && props.onVnodeBeforeUnmount)) invokeVNodeHook(vnodeHook, parentComponent, vnode);
        if (shapeFlag & 6 /* COMPONENT */ ) unmountComponent(vnode.component, parentSuspense, doRemove);
        else {
            if (shapeFlag & 128 /* SUSPENSE */ ) {
                vnode.suspense.unmount(parentSuspense, doRemove);
                return;
            }
            if (shouldInvokeDirs) invokeDirectiveHook(vnode, null, parentComponent, 'beforeUnmount');
            if (shapeFlag & 64 /* TELEPORT */ ) vnode.type.remove(vnode, parentComponent, parentSuspense, optimized, internals, doRemove);
            else if (dynamicChildren && (type !== Fragment || patchFlag > 0 && patchFlag & 64 /* STABLE_FRAGMENT */ )) // fast path for block nodes: only need to unmount dynamic children.
            unmountChildren(dynamicChildren, parentComponent, parentSuspense, false, true);
            else if (type === Fragment && patchFlag & 384 /* UNKEYED_FRAGMENT */  || !optimized && shapeFlag & 16 /* ARRAY_CHILDREN */ ) unmountChildren(children, parentComponent, parentSuspense);
            if (doRemove) remove1(vnode);
        }
        if (shouldInvokeVnodeHook && (vnodeHook = props && props.onVnodeUnmounted) || shouldInvokeDirs) queuePostRenderEffect(()=>{
            vnodeHook && invokeVNodeHook(vnodeHook, parentComponent, vnode);
            shouldInvokeDirs && invokeDirectiveHook(vnode, null, parentComponent, 'unmounted');
        }, parentSuspense);
    };
    const remove1 = (vnode)=>{
        const { type , el , anchor , transition  } = vnode;
        if (type === Fragment) {
            removeFragment(el, anchor);
            return;
        }
        if (type === Static) {
            removeStaticNode(vnode);
            return;
        }
        const performRemove = ()=>{
            hostRemove(el);
            if (transition && !transition.persisted && transition.afterLeave) transition.afterLeave();
        };
        if (vnode.shapeFlag & 1 /* ELEMENT */  && transition && !transition.persisted) {
            const { leave , delayLeave  } = transition;
            const performLeave = ()=>leave(el, performRemove)
            ;
            if (delayLeave) delayLeave(vnode.el, performRemove, performLeave);
            else performLeave();
        } else performRemove();
    };
    const removeFragment = (cur, end)=>{
        // For fragments, directly remove all contained DOM nodes.
        // (fragment child nodes cannot have transition)
        let next;
        while(cur !== end){
            next = hostNextSibling(cur);
            hostRemove(cur);
            cur = next;
        }
        hostRemove(end);
    };
    const unmountComponent = (instance, parentSuspense, doRemove)=>{
        if (instance.type.__hmrId) unregisterHMR(instance);
        const { bum , scope , update , subTree , um  } = instance;
        // beforeUnmount hook
        if (bum) _shared.invokeArrayFns(bum);
        // stop effects in component scope
        scope.stop();
        // update may be null if a component is unmounted before its async
        // setup has resolved.
        if (update) {
            // so that scheduler will no longer invoke it
            update.active = false;
            unmount(subTree, instance, parentSuspense, doRemove);
        }
        // unmounted hook
        if (um) queuePostRenderEffect(um, parentSuspense);
        queuePostRenderEffect(()=>{
            instance.isUnmounted = true;
        }, parentSuspense);
        // A component with async dep inside a pending suspense is unmounted before
        // its async dep resolves. This should remove the dep from the suspense, and
        // cause the suspense to resolve immediately if that was the last dep.
        if (parentSuspense && parentSuspense.pendingBranch && !parentSuspense.isUnmounted && instance.asyncDep && !instance.asyncResolved && instance.suspenseId === parentSuspense.pendingId) {
            parentSuspense.deps--;
            if (parentSuspense.deps === 0) parentSuspense.resolve();
        }
        devtoolsComponentRemoved(instance);
    };
    const unmountChildren = (children, parentComponent, parentSuspense, doRemove = false, optimized = false, start = 0)=>{
        for(let i = start; i < children.length; i++)unmount(children[i], parentComponent, parentSuspense, doRemove, optimized);
    };
    const getNextHostNode = (vnode)=>{
        if (vnode.shapeFlag & 6 /* COMPONENT */ ) return getNextHostNode(vnode.component.subTree);
        if (vnode.shapeFlag & 128 /* SUSPENSE */ ) return vnode.suspense.next();
        return hostNextSibling(vnode.anchor || vnode.el);
    };
    const render = (vnode, container, isSVG)=>{
        if (vnode == null) {
            if (container._vnode) unmount(container._vnode, null, null, true);
        } else patch(container._vnode || null, vnode, container, null, null, null, isSVG);
        flushPostFlushCbs();
        container._vnode = vnode;
    };
    const internals = {
        p: patch,
        um: unmount,
        m: move,
        r: remove1,
        mt: mountComponent,
        mc: mountChildren,
        pc: patchChildren,
        pbc: patchBlockChildren,
        n: getNextHostNode,
        o: options
    };
    let hydrate;
    let hydrateNode;
    if (createHydrationFns) [hydrate, hydrateNode] = createHydrationFns(internals);
    return {
        render,
        hydrate,
        createApp: createAppAPI(render, hydrate)
    };
}
function toggleRecurse({ effect , update  }, allowed) {
    effect.allowRecurse = update.allowRecurse = allowed;
}
/**
 * #1156
 * When a component is HMR-enabled, we need to make sure that all static nodes
 * inside a block also inherit the DOM element from the previous tree so that
 * HMR updates (which are full updates) can retrieve the element for patching.
 *
 * #2080
 * Inside keyed `template` fragment static children, if a fragment is moved,
 * the children will always be moved. Therefore, in order to ensure correct move
 * position, el should be inherited from previous nodes.
 */ function traverseStaticChildren(n1, n2, shallow = false) {
    const ch1 = n1.children;
    const ch2 = n2.children;
    if (_shared.isArray(ch1) && _shared.isArray(ch2)) for(let i = 0; i < ch1.length; i++){
        // this is only called in the optimized path so array children are
        // guaranteed to be vnodes
        const c1 = ch1[i];
        let c2 = ch2[i];
        if (c2.shapeFlag & 1 /* ELEMENT */  && !c2.dynamicChildren) {
            if (c2.patchFlag <= 0 || c2.patchFlag === 32 /* HYDRATE_EVENTS */ ) {
                c2 = ch2[i] = cloneIfMounted(ch2[i]);
                c2.el = c1.el;
            }
            if (!shallow) traverseStaticChildren(c1, c2);
        }
        // also inherit for comment nodes, but not placeholders (e.g. v-if which
        // would have received .el during block patch)
        if (c2.type === Comment && !c2.el) c2.el = c1.el;
    }
}
// https://en.wikipedia.org/wiki/Longest_increasing_subsequence
function getSequence(arr) {
    const p = arr.slice();
    const result = [
        0
    ];
    let i, j, u, v, c;
    const len = arr.length;
    for(i = 0; i < len; i++){
        const arrI = arr[i];
        if (arrI !== 0) {
            j = result[result.length - 1];
            if (arr[j] < arrI) {
                p[i] = j;
                result.push(i);
                continue;
            }
            u = 0;
            v = result.length - 1;
            while(u < v){
                c = u + v >> 1;
                if (arr[result[c]] < arrI) u = c + 1;
                else v = c;
            }
            if (arrI < arr[result[u]]) {
                if (u > 0) p[i] = result[u - 1];
                result[u] = i;
            }
        }
    }
    u = result.length;
    v = result[u - 1];
    while(u-- > 0){
        result[u] = v;
        v = p[v];
    }
    return result;
}
const isTeleport = (type)=>type.__isTeleport
;
const isTeleportDisabled = (props)=>props && (props.disabled || props.disabled === '')
;
const isTargetSVG = (target)=>typeof SVGElement !== 'undefined' && target instanceof SVGElement
;
const resolveTarget = (props, select)=>{
    const targetSelector = props && props.to;
    if (_shared.isString(targetSelector)) {
        if (!select) {
            warn(`Current renderer does not support string target for Teleports. ` + `(missing querySelector renderer option)`);
            return null;
        } else {
            const target = select(targetSelector);
            if (!target) warn(`Failed to locate Teleport target with selector "${targetSelector}". ` + `Note the target element must exist before the component is mounted - ` + `i.e. the target cannot be rendered by the component itself, and ` + `ideally should be outside of the entire Vue component tree.`);
            return target;
        }
    } else {
        if (!targetSelector && !isTeleportDisabled(props)) warn(`Invalid Teleport target: ${targetSelector}`);
        return targetSelector;
    }
};
const TeleportImpl = {
    __isTeleport: true,
    process (n1, n2, container2, anchor2, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized, internals) {
        const { mc: mountChildren , pc: patchChildren , pbc: patchBlockChildren , o: { insert , querySelector , createText , createComment  }  } = internals;
        const disabled = isTeleportDisabled(n2.props);
        let { shapeFlag , children , dynamicChildren  } = n2;
        // #3302
        // HMR updated, force full diff
        if (isHmrUpdating) {
            optimized = false;
            dynamicChildren = null;
        }
        if (n1 == null) {
            // insert anchors in the main view
            const placeholder = n2.el = createComment('teleport start');
            const mainAnchor = n2.anchor = createComment('teleport end');
            insert(placeholder, container2, anchor2);
            insert(mainAnchor, container2, anchor2);
            const target = n2.target = resolveTarget(n2.props, querySelector);
            const targetAnchor = n2.targetAnchor = createText('');
            if (target) {
                insert(targetAnchor, target);
                // #2652 we could be teleporting from a non-SVG tree into an SVG tree
                isSVG = isSVG || isTargetSVG(target);
            } else if (!disabled) warn('Invalid Teleport target on mount:', target, `(${typeof target})`);
            const mount = (container, anchor)=>{
                // Teleport *always* has Array children. This is enforced in both the
                // compiler and vnode children normalization.
                if (shapeFlag & 16 /* ARRAY_CHILDREN */ ) mountChildren(children, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
            };
            if (disabled) mount(container2, mainAnchor);
            else if (target) mount(target, targetAnchor);
        } else {
            // update content
            n2.el = n1.el;
            const mainAnchor = n2.anchor = n1.anchor;
            const target = n2.target = n1.target;
            const targetAnchor = n2.targetAnchor = n1.targetAnchor;
            const wasDisabled = isTeleportDisabled(n1.props);
            const currentContainer = wasDisabled ? container2 : target;
            const currentAnchor = wasDisabled ? mainAnchor : targetAnchor;
            isSVG = isSVG || isTargetSVG(target);
            if (dynamicChildren) {
                // fast path when the teleport happens to be a block root
                patchBlockChildren(n1.dynamicChildren, dynamicChildren, currentContainer, parentComponent, parentSuspense, isSVG, slotScopeIds);
                // even in block tree mode we need to make sure all root-level nodes
                // in the teleport inherit previous DOM references so that they can
                // be moved in future patches.
                traverseStaticChildren(n1, n2, true);
            } else if (!optimized) patchChildren(n1, n2, currentContainer, currentAnchor, parentComponent, parentSuspense, isSVG, slotScopeIds, false);
            if (disabled) {
                if (!wasDisabled) // enabled -> disabled
                // move into main container
                moveTeleport(n2, container2, mainAnchor, internals, 1 /* TOGGLE */ );
            } else {
                // target changed
                if ((n2.props && n2.props.to) !== (n1.props && n1.props.to)) {
                    const nextTarget = n2.target = resolveTarget(n2.props, querySelector);
                    if (nextTarget) moveTeleport(n2, nextTarget, null, internals, 0 /* TARGET_CHANGE */ );
                    else warn('Invalid Teleport target on update:', target, `(${typeof target})`);
                } else if (wasDisabled) // disabled -> enabled
                // move into teleport target
                moveTeleport(n2, target, targetAnchor, internals, 1 /* TOGGLE */ );
            }
        }
    },
    remove (vnode, parentComponent, parentSuspense, optimized, { um: unmount , o: { remove: hostRemove  }  }, doRemove) {
        const { shapeFlag , children , anchor , targetAnchor , target , props  } = vnode;
        if (target) hostRemove(targetAnchor);
        // an unmounted teleport should always remove its children if not disabled
        if (doRemove || !isTeleportDisabled(props)) {
            hostRemove(anchor);
            if (shapeFlag & 16 /* ARRAY_CHILDREN */ ) for(let i = 0; i < children.length; i++){
                const child = children[i];
                unmount(child, parentComponent, parentSuspense, true, !!child.dynamicChildren);
            }
        }
    },
    move: moveTeleport,
    hydrate: hydrateTeleport
};
function moveTeleport(vnode, container, parentAnchor, { o: { insert  } , m: move  }, moveType = 2 /* REORDER */ ) {
    // move target anchor if this is a target change.
    if (moveType === 0 /* TARGET_CHANGE */ ) insert(vnode.targetAnchor, container, parentAnchor);
    const { el , anchor , shapeFlag , children , props  } = vnode;
    const isReorder = moveType === 2 /* REORDER */ ;
    // move main view anchor if this is a re-order.
    if (isReorder) insert(el, container, parentAnchor);
    // if this is a re-order and teleport is enabled (content is in target)
    // do not move children. So the opposite is: only move children if this
    // is not a reorder, or the teleport is disabled
    if (!isReorder || isTeleportDisabled(props)) {
        // Teleport has either Array children or no children.
        if (shapeFlag & 16 /* ARRAY_CHILDREN */ ) for(let i = 0; i < children.length; i++)move(children[i], container, parentAnchor, 2 /* REORDER */ );
    }
    // move main view anchor if this is a re-order.
    if (isReorder) insert(anchor, container, parentAnchor);
}
function hydrateTeleport(node, vnode, parentComponent, parentSuspense, slotScopeIds, optimized, { o: { nextSibling , parentNode , querySelector  }  }, hydrateChildren) {
    const target = vnode.target = resolveTarget(vnode.props, querySelector);
    if (target) {
        // if multiple teleports rendered to the same target element, we need to
        // pick up from where the last teleport finished instead of the first node
        const targetNode = target._lpa || target.firstChild;
        if (vnode.shapeFlag & 16 /* ARRAY_CHILDREN */ ) {
            if (isTeleportDisabled(vnode.props)) {
                vnode.anchor = hydrateChildren(nextSibling(node), vnode, parentNode(node), parentComponent, parentSuspense, slotScopeIds, optimized);
                vnode.targetAnchor = targetNode;
            } else {
                vnode.anchor = nextSibling(node);
                vnode.targetAnchor = hydrateChildren(targetNode, vnode, target, parentComponent, parentSuspense, slotScopeIds, optimized);
            }
            target._lpa = vnode.targetAnchor && nextSibling(vnode.targetAnchor);
        }
    }
    return vnode.anchor && nextSibling(vnode.anchor);
}
// Force-casted public typing for h and TSX props inference
const Teleport = TeleportImpl;
const COMPONENTS = 'components';
const DIRECTIVES = 'directives';
/**
 * @private
 */ function resolveComponent(name, maybeSelfReference) {
    return resolveAsset(COMPONENTS, name, true, maybeSelfReference) || name;
}
const NULL_DYNAMIC_COMPONENT = Symbol();
/**
 * @private
 */ function resolveDynamicComponent(component) {
    if (_shared.isString(component)) return resolveAsset(COMPONENTS, component, false) || component;
    else // invalid types will fallthrough to createVNode and raise warning
    return component || NULL_DYNAMIC_COMPONENT;
}
/**
 * @private
 */ function resolveDirective(name) {
    return resolveAsset(DIRECTIVES, name);
}
// implementation
function resolveAsset(type, name, warnMissing = true, maybeSelfReference = false) {
    const instance = currentRenderingInstance || currentInstance;
    if (instance) {
        const Component = instance.type;
        // explicit self name has highest priority
        if (type === COMPONENTS) {
            const selfName = getComponentName(Component);
            if (selfName && (selfName === name || selfName === _shared.camelize(name) || selfName === _shared.capitalize(_shared.camelize(name)))) return Component;
        }
        const res = // local registration
        // check instance[type] first which is resolved for options API
        resolve(instance[type] || Component[type], name) || // global registration
        resolve(instance.appContext[type], name);
        if (!res && maybeSelfReference) // fallback to implicit self-reference
        return Component;
        if (warnMissing && !res) {
            const extra = type === COMPONENTS ? `\nIf this is a native custom element, make sure to exclude it from ` + `component resolution via compilerOptions.isCustomElement.` : ``;
            warn(`Failed to resolve ${type.slice(0, -1)}: ${name}${extra}`);
        }
        return res;
    } else warn(`resolve${_shared.capitalize(type.slice(0, -1))} ` + `can only be used in render() or setup().`);
}
function resolve(registry, name) {
    return registry && (registry[name] || registry[_shared.camelize(name)] || registry[_shared.capitalize(_shared.camelize(name))]);
}
const Fragment = Symbol('Fragment');
const Text = Symbol('Text');
const Comment = Symbol('Comment');
const Static = Symbol('Static');
// Since v-if and v-for are the two possible ways node structure can dynamically
// change, once we consider v-if branches and each v-for fragment a block, we
// can divide a template into nested blocks, and within each block the node
// structure would be stable. This allows us to skip most children diffing
// and only worry about the dynamic nodes (indicated by patch flags).
const blockStack = [];
let currentBlock = null;
/**
 * Open a block.
 * This must be called before `createBlock`. It cannot be part of `createBlock`
 * because the children of the block are evaluated before `createBlock` itself
 * is called. The generated code typically looks like this:
 *
 * ```js
 * function render() {
 *   return (openBlock(),createBlock('div', null, [...]))
 * }
 * ```
 * disableTracking is true when creating a v-for fragment block, since a v-for
 * fragment always diffs its children.
 *
 * @private
 */ function openBlock(disableTracking = false) {
    blockStack.push(currentBlock = disableTracking ? null : []);
}
function closeBlock() {
    blockStack.pop();
    currentBlock = blockStack[blockStack.length - 1] || null;
}
// Whether we should be tracking dynamic child nodes inside a block.
// Only tracks when this value is > 0
// We are not using a simple boolean because this value may need to be
// incremented/decremented by nested usage of v-once (see below)
let isBlockTreeEnabled = 1;
/**
 * Block tracking sometimes needs to be disabled, for example during the
 * creation of a tree that needs to be cached by v-once. The compiler generates
 * code like this:
 *
 * ``` js
 * _cache[1] || (
 *   setBlockTracking(-1),
 *   _cache[1] = createVNode(...),
 *   setBlockTracking(1),
 *   _cache[1]
 * )
 * ```
 *
 * @private
 */ function setBlockTracking(value) {
    isBlockTreeEnabled += value;
}
function setupBlock(vnode) {
    // save current block children on the block vnode
    vnode.dynamicChildren = isBlockTreeEnabled > 0 ? currentBlock || _shared.EMPTY_ARR : null;
    // close block
    closeBlock();
    // a block is always going to be patched, so track it as a child of its
    // parent block
    if (isBlockTreeEnabled > 0 && currentBlock) currentBlock.push(vnode);
    return vnode;
}
/**
 * @private
 */ function createElementBlock(type, props, children, patchFlag, dynamicProps, shapeFlag) {
    return setupBlock(createBaseVNode(type, props, children, patchFlag, dynamicProps, shapeFlag, true));
}
/**
 * Create a block root vnode. Takes the same exact arguments as `createVNode`.
 * A block root keeps track of dynamic nodes within the block in the
 * `dynamicChildren` array.
 *
 * @private
 */ function createBlock(type, props, children, patchFlag, dynamicProps) {
    return setupBlock(createVNode(type, props, children, patchFlag, dynamicProps, true));
}
function isVNode(value) {
    return value ? value.__v_isVNode === true : false;
}
function isSameVNodeType(n1, n2) {
    if (n2.shapeFlag & 6 /* COMPONENT */  && hmrDirtyComponents.has(n2.type)) // HMR only: if the component has been hot-updated, force a reload.
    return false;
    return n1.type === n2.type && n1.key === n2.key;
}
let vnodeArgsTransformer;
/**
 * Internal API for registering an arguments transform for createVNode
 * used for creating stubs in the test-utils
 * It is *internal* but needs to be exposed for test-utils to pick up proper
 * typings
 */ function transformVNodeArgs(transformer) {
    vnodeArgsTransformer = transformer;
}
const createVNodeWithArgsTransform = (...args)=>{
    return _createVNode(...vnodeArgsTransformer ? vnodeArgsTransformer(args, currentRenderingInstance) : args);
};
const InternalObjectKey = `__vInternal`;
const normalizeKey = ({ key  })=>key != null ? key : null
;
const normalizeRef = ({ ref , ref_key , ref_for  })=>{
    return ref != null ? _shared.isString(ref) || _reactivity.isRef(ref) || _shared.isFunction(ref) ? {
        i: currentRenderingInstance,
        r: ref,
        k: ref_key,
        f: !!ref_for
    } : ref : null;
};
function createBaseVNode(type, props = null, children = null, patchFlag = 0, dynamicProps = null, shapeFlag = type === Fragment ? 0 : 1 /* ELEMENT */ , isBlockNode = false, needFullChildrenNormalization = false) {
    const vnode = {
        __v_isVNode: true,
        __v_skip: true,
        type,
        props,
        key: props && normalizeKey(props),
        ref: props && normalizeRef(props),
        scopeId: currentScopeId,
        slotScopeIds: null,
        children,
        component: null,
        suspense: null,
        ssContent: null,
        ssFallback: null,
        dirs: null,
        transition: null,
        el: null,
        anchor: null,
        target: null,
        targetAnchor: null,
        staticCount: 0,
        shapeFlag,
        patchFlag,
        dynamicProps,
        dynamicChildren: null,
        appContext: null
    };
    if (needFullChildrenNormalization) {
        normalizeChildren(vnode, children);
        // normalize suspense children
        if (shapeFlag & 128 /* SUSPENSE */ ) type.normalize(vnode);
    } else if (children) // compiled element vnode - if children is passed, only possible types are
    // string or Array.
    vnode.shapeFlag |= _shared.isString(children) ? 8 /* TEXT_CHILDREN */  : 16 /* ARRAY_CHILDREN */ ;
    // validate key
    if (vnode.key !== vnode.key) warn(`VNode created with invalid key (NaN). VNode type:`, vnode.type);
    // track vnode for block tree
    if (isBlockTreeEnabled > 0 && // avoid a block node from tracking itself
    !isBlockNode && // has current parent block
    currentBlock && (vnode.patchFlag > 0 || shapeFlag & 6 /* COMPONENT */ ) && // the EVENTS flag is only for hydration and if it is the only flag, the
    // vnode should not be considered dynamic due to handler caching.
    vnode.patchFlag !== 32 /* HYDRATE_EVENTS */ ) currentBlock.push(vnode);
    return vnode;
}
const createVNode = createVNodeWithArgsTransform;
function _createVNode(type, props = null, children = null, patchFlag = 0, dynamicProps = null, isBlockNode = false) {
    if (!type || type === NULL_DYNAMIC_COMPONENT) {
        if (!type) warn(`Invalid vnode type when creating vnode: ${type}.`);
        type = Comment;
    }
    if (isVNode(type)) {
        // createVNode receiving an existing vnode. This happens in cases like
        // <component :is="vnode"/>
        // #2078 make sure to merge refs during the clone instead of overwriting it
        const cloned = cloneVNode(type, props, true);
        if (children) normalizeChildren(cloned, children);
        return cloned;
    }
    // class component normalization.
    if (isClassComponent(type)) type = type.__vccOpts;
    // class & style normalization.
    if (props) {
        // for reactive or proxy objects, we need to clone it to enable mutation.
        props = guardReactiveProps(props);
        let { class: klass , style  } = props;
        if (klass && !_shared.isString(klass)) props.class = _shared.normalizeClass(klass);
        if (_shared.isObject(style)) {
            // reactive state objects need to be cloned since they are likely to be
            // mutated
            if (_reactivity.isProxy(style) && !_shared.isArray(style)) style = _shared.extend({}, style);
            props.style = _shared.normalizeStyle(style);
        }
    }
    // encode the vnode type information into a bitmap
    const shapeFlag = _shared.isString(type) ? 1 /* ELEMENT */  : isSuspense(type) ? 128 /* SUSPENSE */  : isTeleport(type) ? 64 /* TELEPORT */  : _shared.isObject(type) ? 4 /* STATEFUL_COMPONENT */  : _shared.isFunction(type) ? 2 /* FUNCTIONAL_COMPONENT */  : 0;
    if (shapeFlag & 4 /* STATEFUL_COMPONENT */  && _reactivity.isProxy(type)) {
        type = _reactivity.toRaw(type);
        warn(`Vue received a Component which was made a reactive object. This can ` + `lead to unnecessary performance overhead, and should be avoided by ` + `marking the component with \`markRaw\` or using \`shallowRef\` ` + `instead of \`ref\`.`, `\nComponent that was made reactive: `, type);
    }
    return createBaseVNode(type, props, children, patchFlag, dynamicProps, shapeFlag, isBlockNode, true);
}
function guardReactiveProps(props) {
    if (!props) return null;
    return _reactivity.isProxy(props) || InternalObjectKey in props ? _shared.extend({}, props) : props;
}
function cloneVNode(vnode, extraProps, mergeRef = false) {
    // This is intentionally NOT using spread or extend to avoid the runtime
    // key enumeration cost.
    const { props , ref , patchFlag , children  } = vnode;
    const mergedProps = extraProps ? mergeProps(props || {}, extraProps) : props;
    const cloned = {
        __v_isVNode: true,
        __v_skip: true,
        type: vnode.type,
        props: mergedProps,
        key: mergedProps && normalizeKey(mergedProps),
        ref: extraProps && extraProps.ref ? // if the vnode itself already has a ref, cloneVNode will need to merge
        // the refs so the single vnode can be set on multiple refs
        mergeRef && ref ? _shared.isArray(ref) ? ref.concat(normalizeRef(extraProps)) : [
            ref,
            normalizeRef(extraProps)
        ] : normalizeRef(extraProps) : ref,
        scopeId: vnode.scopeId,
        slotScopeIds: vnode.slotScopeIds,
        children: patchFlag === -1 /* HOISTED */  && _shared.isArray(children) ? children.map(deepCloneVNode) : children,
        target: vnode.target,
        targetAnchor: vnode.targetAnchor,
        staticCount: vnode.staticCount,
        shapeFlag: vnode.shapeFlag,
        // if the vnode is cloned with extra props, we can no longer assume its
        // existing patch flag to be reliable and need to add the FULL_PROPS flag.
        // note: preserve flag for fragments since they use the flag for children
        // fast paths only.
        patchFlag: extraProps && vnode.type !== Fragment ? patchFlag === -1 // hoisted node
         ? 16 /* FULL_PROPS */  : patchFlag | 16 /* FULL_PROPS */  : patchFlag,
        dynamicProps: vnode.dynamicProps,
        dynamicChildren: vnode.dynamicChildren,
        appContext: vnode.appContext,
        dirs: vnode.dirs,
        transition: vnode.transition,
        // These should technically only be non-null on mounted VNodes. However,
        // they *should* be copied for kept-alive vnodes. So we just always copy
        // them since them being non-null during a mount doesn't affect the logic as
        // they will simply be overwritten.
        component: vnode.component,
        suspense: vnode.suspense,
        ssContent: vnode.ssContent && cloneVNode(vnode.ssContent),
        ssFallback: vnode.ssFallback && cloneVNode(vnode.ssFallback),
        el: vnode.el,
        anchor: vnode.anchor
    };
    return cloned;
}
/**
 * Dev only, for HMR of hoisted vnodes reused in v-for
 * https://github.com/vitejs/vite/issues/2022
 */ function deepCloneVNode(vnode) {
    const cloned = cloneVNode(vnode);
    if (_shared.isArray(vnode.children)) cloned.children = vnode.children.map(deepCloneVNode);
    return cloned;
}
/**
 * @private
 */ function createTextVNode(text = ' ', flag = 0) {
    return createVNode(Text, null, text, flag);
}
/**
 * @private
 */ function createStaticVNode(content, numberOfNodes) {
    // A static vnode can contain multiple stringified elements, and the number
    // of elements is necessary for hydration.
    const vnode = createVNode(Static, null, content);
    vnode.staticCount = numberOfNodes;
    return vnode;
}
/**
 * @private
 */ function createCommentVNode(text = '', // when used as the v-else branch, the comment node must be created as a
// block to ensure correct updates.
asBlock = false) {
    return asBlock ? (openBlock(), createBlock(Comment, null, text)) : createVNode(Comment, null, text);
}
function normalizeVNode(child) {
    if (child == null || typeof child === 'boolean') // empty placeholder
    return createVNode(Comment);
    else if (_shared.isArray(child)) // fragment
    return createVNode(Fragment, null, // #3666, avoid reference pollution when reusing vnode
    child.slice());
    else if (typeof child === 'object') // already vnode, this should be the most common since compiled templates
    // always produce all-vnode children arrays
    return cloneIfMounted(child);
    else // strings and numbers
    return createVNode(Text, null, String(child));
}
// optimized normalization for template-compiled render fns
function cloneIfMounted(child) {
    return child.el === null || child.memo ? child : cloneVNode(child);
}
function normalizeChildren(vnode, children) {
    let type = 0;
    const { shapeFlag  } = vnode;
    if (children == null) children = null;
    else if (_shared.isArray(children)) type = 16 /* ARRAY_CHILDREN */ ;
    else if (typeof children === 'object') {
        if (shapeFlag & 65 /* TELEPORT */ ) {
            // Normalize slot to plain children for plain element and Teleport
            const slot = children.default;
            if (slot) {
                // _c marker is added by withCtx() indicating this is a compiled slot
                slot._c && (slot._d = false);
                normalizeChildren(vnode, slot());
                slot._c && (slot._d = true);
            }
            return;
        } else {
            type = 32 /* SLOTS_CHILDREN */ ;
            const slotFlag = children._;
            if (!slotFlag && !(InternalObjectKey in children)) children._ctx = currentRenderingInstance;
            else if (slotFlag === 3 /* FORWARDED */  && currentRenderingInstance) {
                // a child component receives forwarded slots from the parent.
                // its slot type is determined by its parent's slot type.
                if (currentRenderingInstance.slots._ === 1 /* STABLE */ ) children._ = 1 /* STABLE */ ;
                else {
                    children._ = 2 /* DYNAMIC */ ;
                    vnode.patchFlag |= 1024 /* DYNAMIC_SLOTS */ ;
                }
            }
        }
    } else if (_shared.isFunction(children)) {
        children = {
            default: children,
            _ctx: currentRenderingInstance
        };
        type = 32 /* SLOTS_CHILDREN */ ;
    } else {
        children = String(children);
        // force teleport children to array so it can be moved around
        if (shapeFlag & 64 /* TELEPORT */ ) {
            type = 16 /* ARRAY_CHILDREN */ ;
            children = [
                createTextVNode(children)
            ];
        } else type = 8 /* TEXT_CHILDREN */ ;
    }
    vnode.children = children;
    vnode.shapeFlag |= type;
}
function mergeProps(...args) {
    const ret = {};
    for(let i = 0; i < args.length; i++){
        const toMerge = args[i];
        for(const key in toMerge){
            if (key === 'class') {
                if (ret.class !== toMerge.class) ret.class = _shared.normalizeClass([
                    ret.class,
                    toMerge.class
                ]);
            } else if (key === 'style') ret.style = _shared.normalizeStyle([
                ret.style,
                toMerge.style
            ]);
            else if (_shared.isOn(key)) {
                const existing = ret[key];
                const incoming = toMerge[key];
                if (incoming && existing !== incoming && !(_shared.isArray(existing) && existing.includes(incoming))) ret[key] = existing ? [].concat(existing, incoming) : incoming;
            } else if (key !== '') ret[key] = toMerge[key];
        }
    }
    return ret;
}
function invokeVNodeHook(hook, instance, vnode, prevVNode = null) {
    callWithAsyncErrorHandling(hook, instance, 7 /* VNODE_HOOK */ , [
        vnode,
        prevVNode
    ]);
}
/**
 * Actual implementation
 */ function renderList(source, renderItem, cache, index) {
    let ret;
    const cached = cache && cache[index];
    if (_shared.isArray(source) || _shared.isString(source)) {
        ret = new Array(source.length);
        for(let i = 0, l = source.length; i < l; i++)ret[i] = renderItem(source[i], i, undefined, cached && cached[i]);
    } else if (typeof source === 'number') {
        if (!Number.isInteger(source)) {
            warn(`The v-for range expect an integer value but got ${source}.`);
            return [];
        }
        ret = new Array(source);
        for(let i = 0; i < source; i++)ret[i] = renderItem(i + 1, i, undefined, cached && cached[i]);
    } else if (_shared.isObject(source)) {
        if (source[Symbol.iterator]) ret = Array.from(source, (item, i)=>renderItem(item, i, undefined, cached && cached[i])
        );
        else {
            const keys = Object.keys(source);
            ret = new Array(keys.length);
            for(let i = 0, l = keys.length; i < l; i++){
                const key = keys[i];
                ret[i] = renderItem(source[key], key, i, cached && cached[i]);
            }
        }
    } else ret = [];
    if (cache) cache[index] = ret;
    return ret;
}
/**
 * Compiler runtime helper for creating dynamic slots object
 * @private
 */ function createSlots(slots, dynamicSlots) {
    for(let i = 0; i < dynamicSlots.length; i++){
        const slot = dynamicSlots[i];
        // array of dynamic slot generated by <template v-for="..." #[...]>
        if (_shared.isArray(slot)) for(let j = 0; j < slot.length; j++)slots[slot[j].name] = slot[j].fn;
        else if (slot) // conditional single slot generated by <template v-if="..." #foo>
        slots[slot.name] = slot.fn;
    }
    return slots;
}
/**
 * Compiler runtime helper for rendering `<slot/>`
 * @private
 */ function renderSlot(slots, name, props = {}, // this is not a user-facing function, so the fallback is always generated by
// the compiler and guaranteed to be a function returning an array
fallback, noSlotted) {
    if (currentRenderingInstance.isCE) return createVNode('slot', name === 'default' ? null : {
        name
    }, fallback && fallback());
    let slot = slots[name];
    if (slot && slot.length > 1) {
        warn(`SSR-optimized slot function detected in a non-SSR-optimized render ` + `function. You need to mark this component with $dynamic-slots in the ` + `parent template.`);
        slot = ()=>[]
        ;
    }
    // a compiled slot disables block tracking by default to avoid manual
    // invocation interfering with template-based block tracking, but in
    // `renderSlot` we can be sure that it's template-based so we can force
    // enable it.
    if (slot && slot._c) slot._d = false;
    openBlock();
    const validSlotContent = slot && ensureValidVNode(slot(props));
    const rendered = createBlock(Fragment, {
        key: props.key || `_${name}`
    }, validSlotContent || (fallback ? fallback() : []), validSlotContent && slots._ === 1 /* STABLE */  ? 64 /* STABLE_FRAGMENT */  : -2 /* BAIL */ );
    if (!noSlotted && rendered.scopeId) rendered.slotScopeIds = [
        rendered.scopeId + '-s'
    ];
    if (slot && slot._c) slot._d = true;
    return rendered;
}
function ensureValidVNode(vnodes) {
    return vnodes.some((child)=>{
        if (!isVNode(child)) return true;
        if (child.type === Comment) return false;
        if (child.type === Fragment && !ensureValidVNode(child.children)) return false;
        return true;
    }) ? vnodes : null;
}
/**
 * For prefixing keys in v-on="obj" with "on"
 * @private
 */ function toHandlers(obj) {
    const ret = {};
    if (!_shared.isObject(obj)) {
        warn(`v-on with no argument expects an object value.`);
        return ret;
    }
    for(const key in obj)ret[_shared.toHandlerKey(key)] = obj[key];
    return ret;
}
/**
 * #2437 In Vue 3, functional components do not have a public instance proxy but
 * they exist in the internal parent chain. For code that relies on traversing
 * public $parent chains, skip functional ones and go to the parent instead.
 */ const getPublicInstance = (i)=>{
    if (!i) return null;
    if (isStatefulComponent(i)) return getExposeProxy(i) || i.proxy;
    return getPublicInstance(i.parent);
};
const publicPropertiesMap = _shared.extend(Object.create(null), {
    $: (i)=>i
    ,
    $el: (i)=>i.vnode.el
    ,
    $data: (i)=>i.data
    ,
    $props: (i)=>_reactivity.shallowReadonly(i.props)
    ,
    $attrs: (i)=>_reactivity.shallowReadonly(i.attrs)
    ,
    $slots: (i)=>_reactivity.shallowReadonly(i.slots)
    ,
    $refs: (i)=>_reactivity.shallowReadonly(i.refs)
    ,
    $parent: (i)=>getPublicInstance(i.parent)
    ,
    $root: (i)=>getPublicInstance(i.root)
    ,
    $emit: (i)=>i.emit
    ,
    $options: (i)=>__VUE_OPTIONS_API__ ? resolveMergedOptions(i) : i.type
    ,
    $forceUpdate: (i)=>()=>queueJob(i.update)
    ,
    $nextTick: (i)=>nextTick.bind(i.proxy)
    ,
    $watch: (i)=>__VUE_OPTIONS_API__ ? instanceWatch.bind(i) : _shared.NOOP
});
const PublicInstanceProxyHandlers = {
    get ({ _: instance  }, key) {
        const { ctx , setupState , data , props , accessCache , type , appContext  } = instance;
        // for internal formatters to know that this is a Vue instance
        if (key === '__isVue') return true;
        // prioritize <script setup> bindings during dev.
        // this allows even properties that start with _ or $ to be used - so that
        // it aligns with the production behavior where the render fn is inlined and
        // indeed has access to all declared variables.
        if (setupState !== _shared.EMPTY_OBJ && setupState.__isScriptSetup && _shared.hasOwn(setupState, key)) return setupState[key];
        // data / props / ctx
        // This getter gets called for every property access on the render context
        // during render and is a major hotspot. The most expensive part of this
        // is the multiple hasOwn() calls. It's much faster to do a simple property
        // access on a plain object, so we use an accessCache object (with null
        // prototype) to memoize what access type a key corresponds to.
        let normalizedProps;
        if (key[0] !== '$') {
            const n = accessCache[key];
            if (n !== undefined) switch(n){
                case 1 /* SETUP */ :
                    return setupState[key];
                case 2 /* DATA */ :
                    return data[key];
                case 4 /* CONTEXT */ :
                    return ctx[key];
                case 3 /* PROPS */ :
                    return props[key];
            }
            else if (setupState !== _shared.EMPTY_OBJ && _shared.hasOwn(setupState, key)) {
                accessCache[key] = 1 /* SETUP */ ;
                return setupState[key];
            } else if (data !== _shared.EMPTY_OBJ && _shared.hasOwn(data, key)) {
                accessCache[key] = 2 /* DATA */ ;
                return data[key];
            } else if (// only cache other properties when instance has declared (thus stable)
            // props
            (normalizedProps = instance.propsOptions[0]) && _shared.hasOwn(normalizedProps, key)) {
                accessCache[key] = 3 /* PROPS */ ;
                return props[key];
            } else if (ctx !== _shared.EMPTY_OBJ && _shared.hasOwn(ctx, key)) {
                accessCache[key] = 4 /* CONTEXT */ ;
                return ctx[key];
            } else if (!__VUE_OPTIONS_API__ || shouldCacheAccess) accessCache[key] = 0 /* OTHER */ ;
        }
        const publicGetter = publicPropertiesMap[key];
        let cssModule, globalProperties;
        // public $xxx properties
        if (publicGetter) {
            if (key === '$attrs') {
                _reactivity.track(instance, "get" /* GET */ , key);
                markAttrsAccessed();
            }
            return publicGetter(instance);
        } else if (// css module (injected by vue-loader)
        (cssModule = type.__cssModules) && (cssModule = cssModule[key])) return cssModule;
        else if (ctx !== _shared.EMPTY_OBJ && _shared.hasOwn(ctx, key)) {
            // user may set custom properties to `this` that start with `$`
            accessCache[key] = 4 /* CONTEXT */ ;
            return ctx[key];
        } else if (globalProperties = appContext.config.globalProperties, _shared.hasOwn(globalProperties, key)) return globalProperties[key];
        else if (currentRenderingInstance && (!_shared.isString(key) || // #1091 avoid internal isRef/isVNode checks on component instance leading
        // to infinite warning loop
        key.indexOf('__v') !== 0)) {
            if (data !== _shared.EMPTY_OBJ && (key[0] === '$' || key[0] === '_') && _shared.hasOwn(data, key)) warn(`Property ${JSON.stringify(key)} must be accessed via $data because it starts with a reserved ` + `character ("$" or "_") and is not proxied on the render context.`);
            else if (instance === currentRenderingInstance) warn(`Property ${JSON.stringify(key)} was accessed during render ` + `but is not defined on instance.`);
        }
    },
    set ({ _: instance  }, key, value) {
        const { data , setupState , ctx  } = instance;
        if (setupState !== _shared.EMPTY_OBJ && _shared.hasOwn(setupState, key)) {
            setupState[key] = value;
            return true;
        } else if (data !== _shared.EMPTY_OBJ && _shared.hasOwn(data, key)) {
            data[key] = value;
            return true;
        } else if (_shared.hasOwn(instance.props, key)) {
            warn(`Attempting to mutate prop "${key}". Props are readonly.`, instance);
            return false;
        }
        if (key[0] === '$' && key.slice(1) in instance) {
            warn(`Attempting to mutate public property "${key}". ` + `Properties starting with $ are reserved and readonly.`, instance);
            return false;
        } else if (key in instance.appContext.config.globalProperties) Object.defineProperty(ctx, key, {
            enumerable: true,
            configurable: true,
            value
        });
        else ctx[key] = value;
        return true;
    },
    has ({ _: { data , setupState , accessCache , ctx , appContext , propsOptions  }  }, key) {
        let normalizedProps;
        return !!accessCache[key] || data !== _shared.EMPTY_OBJ && _shared.hasOwn(data, key) || setupState !== _shared.EMPTY_OBJ && _shared.hasOwn(setupState, key) || (normalizedProps = propsOptions[0]) && _shared.hasOwn(normalizedProps, key) || _shared.hasOwn(ctx, key) || _shared.hasOwn(publicPropertiesMap, key) || _shared.hasOwn(appContext.config.globalProperties, key);
    },
    defineProperty (target, key, descriptor) {
        if (descriptor.get != null) this.set(target, key, descriptor.get(), null);
        else if (descriptor.value != null) this.set(target, key, descriptor.value, null);
        return Reflect.defineProperty(target, key, descriptor);
    }
};
PublicInstanceProxyHandlers.ownKeys = (target)=>{
    warn(`Avoid app logic that relies on enumerating keys on a component instance. ` + `The keys will be empty in production mode to avoid performance overhead.`);
    return Reflect.ownKeys(target);
};
const RuntimeCompiledPublicInstanceProxyHandlers = /*#__PURE__*/ _shared.extend({}, PublicInstanceProxyHandlers, {
    get (target, key) {
        // fast path for unscopables when using `with` block
        if (key === Symbol.unscopables) return;
        return PublicInstanceProxyHandlers.get(target, key, target);
    },
    has (_, key) {
        const has = key[0] !== '_' && !_shared.isGloballyWhitelisted(key);
        if (!has && PublicInstanceProxyHandlers.has(_, key)) warn(`Property ${JSON.stringify(key)} should not start with _ which is a reserved prefix for Vue internals.`);
        return has;
    }
});
// dev only
// In dev mode, the proxy target exposes the same properties as seen on `this`
// for easier console inspection. In prod mode it will be an empty object so
// these properties definitions can be skipped.
function createDevRenderContext(instance) {
    const target = {};
    // expose internal instance for proxy handlers
    Object.defineProperty(target, `_`, {
        configurable: true,
        enumerable: false,
        get: ()=>instance
    });
    // expose public properties
    Object.keys(publicPropertiesMap).forEach((key)=>{
        Object.defineProperty(target, key, {
            configurable: true,
            enumerable: false,
            get: ()=>publicPropertiesMap[key](instance)
            ,
            // intercepted by the proxy so no need for implementation,
            // but needed to prevent set errors
            set: _shared.NOOP
        });
    });
    return target;
}
// dev only
function exposePropsOnRenderContext(instance) {
    const { ctx , propsOptions: [propsOptions]  } = instance;
    if (propsOptions) Object.keys(propsOptions).forEach((key)=>{
        Object.defineProperty(ctx, key, {
            enumerable: true,
            configurable: true,
            get: ()=>instance.props[key]
            ,
            set: _shared.NOOP
        });
    });
}
// dev only
function exposeSetupStateOnRenderContext(instance) {
    const { ctx , setupState  } = instance;
    Object.keys(_reactivity.toRaw(setupState)).forEach((key)=>{
        if (!setupState.__isScriptSetup) {
            if (key[0] === '$' || key[0] === '_') {
                warn(`setup() return property ${JSON.stringify(key)} should not start with "$" or "_" ` + `which are reserved prefixes for Vue internals.`);
                return;
            }
            Object.defineProperty(ctx, key, {
                enumerable: true,
                configurable: true,
                get: ()=>setupState[key]
                ,
                set: _shared.NOOP
            });
        }
    });
}
const emptyAppContext = createAppContext();
let uid$1 = 0;
function createComponentInstance(vnode, parent, suspense) {
    const type = vnode.type;
    // inherit parent app context - or - if root, adopt from root vnode
    const appContext = (parent ? parent.appContext : vnode.appContext) || emptyAppContext;
    const instance = {
        uid: uid$1++,
        vnode,
        type,
        parent,
        appContext,
        root: null,
        next: null,
        subTree: null,
        effect: null,
        update: null,
        scope: new _reactivity.EffectScope(true),
        render: null,
        proxy: null,
        exposed: null,
        exposeProxy: null,
        withProxy: null,
        provides: parent ? parent.provides : Object.create(appContext.provides),
        accessCache: null,
        renderCache: [],
        // local resovled assets
        components: null,
        directives: null,
        // resolved props and emits options
        propsOptions: normalizePropsOptions(type, appContext),
        emitsOptions: normalizeEmitsOptions(type, appContext),
        // emit
        emit: null,
        emitted: null,
        // props default value
        propsDefaults: _shared.EMPTY_OBJ,
        // inheritAttrs
        inheritAttrs: type.inheritAttrs,
        // state
        ctx: _shared.EMPTY_OBJ,
        data: _shared.EMPTY_OBJ,
        props: _shared.EMPTY_OBJ,
        attrs: _shared.EMPTY_OBJ,
        slots: _shared.EMPTY_OBJ,
        refs: _shared.EMPTY_OBJ,
        setupState: _shared.EMPTY_OBJ,
        setupContext: null,
        // suspense related
        suspense,
        suspenseId: suspense ? suspense.pendingId : 0,
        asyncDep: null,
        asyncResolved: false,
        // lifecycle hooks
        // not using enums here because it results in computed properties
        isMounted: false,
        isUnmounted: false,
        isDeactivated: false,
        bc: null,
        c: null,
        bm: null,
        m: null,
        bu: null,
        u: null,
        um: null,
        bum: null,
        da: null,
        a: null,
        rtg: null,
        rtc: null,
        ec: null,
        sp: null
    };
    instance.ctx = createDevRenderContext(instance);
    instance.root = parent ? parent.root : instance;
    instance.emit = emit$1.bind(null, instance);
    // apply custom element special handling
    if (vnode.ce) vnode.ce(instance);
    return instance;
}
let currentInstance = null;
const getCurrentInstance = ()=>currentInstance || currentRenderingInstance
;
const setCurrentInstance = (instance)=>{
    currentInstance = instance;
    instance.scope.on();
};
const unsetCurrentInstance = ()=>{
    currentInstance && currentInstance.scope.off();
    currentInstance = null;
};
const isBuiltInTag = /*#__PURE__*/ _shared.makeMap('slot,component');
function validateComponentName(name, config) {
    const appIsNativeTag = config.isNativeTag || _shared.NO;
    if (isBuiltInTag(name) || appIsNativeTag(name)) warn('Do not use built-in or reserved HTML elements as component id: ' + name);
}
function isStatefulComponent(instance) {
    return instance.vnode.shapeFlag & 4 /* STATEFUL_COMPONENT */ ;
}
let isInSSRComponentSetup = false;
function setupComponent(instance, isSSR = false) {
    isInSSRComponentSetup = isSSR;
    const { props , children  } = instance.vnode;
    const isStateful = isStatefulComponent(instance);
    initProps(instance, props, isStateful, isSSR);
    initSlots(instance, children);
    const setupResult = isStateful ? setupStatefulComponent(instance, isSSR) : undefined;
    isInSSRComponentSetup = false;
    return setupResult;
}
function setupStatefulComponent(instance, isSSR) {
    const Component = instance.type;
    if (Component.name) validateComponentName(Component.name, instance.appContext.config);
    if (Component.components) {
        const names = Object.keys(Component.components);
        for(let i = 0; i < names.length; i++)validateComponentName(names[i], instance.appContext.config);
    }
    if (Component.directives) {
        const names = Object.keys(Component.directives);
        for(let i = 0; i < names.length; i++)validateDirectiveName(names[i]);
    }
    if (Component.compilerOptions && isRuntimeOnly()) warn(`"compilerOptions" is only supported when using a build of Vue that ` + `includes the runtime compiler. Since you are using a runtime-only ` + `build, the options should be passed via your build tool config instead.`);
    // 0. create render proxy property access cache
    instance.accessCache = Object.create(null);
    // 1. create public instance / render proxy
    // also mark it raw so it's never observed
    instance.proxy = _reactivity.markRaw(new Proxy(instance.ctx, PublicInstanceProxyHandlers));
    exposePropsOnRenderContext(instance);
    // 2. call setup()
    const { setup  } = Component;
    if (setup) {
        const setupContext = instance.setupContext = setup.length > 1 ? createSetupContext(instance) : null;
        setCurrentInstance(instance);
        _reactivity.pauseTracking();
        const setupResult = callWithErrorHandling(setup, instance, 0 /* SETUP_FUNCTION */ , [
            _reactivity.shallowReadonly(instance.props),
            setupContext
        ]);
        _reactivity.resetTracking();
        unsetCurrentInstance();
        if (_shared.isPromise(setupResult)) {
            setupResult.then(unsetCurrentInstance, unsetCurrentInstance);
            if (isSSR) // return the promise so server-renderer can wait on it
            return setupResult.then((resolvedResult)=>{
                handleSetupResult(instance, resolvedResult, isSSR);
            }).catch((e)=>{
                handleError(e, instance, 0 /* SETUP_FUNCTION */ );
            });
            else // async setup returned Promise.
            // bail here and wait for re-entry.
            instance.asyncDep = setupResult;
        } else handleSetupResult(instance, setupResult, isSSR);
    } else finishComponentSetup(instance, isSSR);
}
function handleSetupResult(instance, setupResult, isSSR) {
    if (_shared.isFunction(setupResult)) {
        // setup returned an inline render function
        if (instance.type.__ssrInlineRender) // when the function's name is `ssrRender` (compiled by SFC inline mode),
        // set it as ssrRender instead.
        instance.ssrRender = setupResult;
        else instance.render = setupResult;
    } else if (_shared.isObject(setupResult)) {
        if (isVNode(setupResult)) warn(`setup() should not return VNodes directly - ` + `return a render function instead.`);
        instance.devtoolsRawSetupState = setupResult;
        instance.setupState = _reactivity.proxyRefs(setupResult);
        exposeSetupStateOnRenderContext(instance);
    } else if (setupResult !== undefined) warn(`setup() should return an object. Received: ${setupResult === null ? 'null' : typeof setupResult}`);
    finishComponentSetup(instance, isSSR);
}
let compile;
let installWithProxy;
/**
 * For runtime-dom to register the compiler.
 * Note the exported method uses any to avoid d.ts relying on the compiler types.
 */ function registerRuntimeCompiler(_compile) {
    compile = _compile;
    installWithProxy = (i)=>{
        if (i.render._rc) i.withProxy = new Proxy(i.ctx, RuntimeCompiledPublicInstanceProxyHandlers);
    };
}
// dev only
const isRuntimeOnly = ()=>!compile
;
function finishComponentSetup(instance, isSSR, skipOptions) {
    const Component = instance.type;
    // template / render function normalization
    // could be already set when returned from setup()
    if (!instance.render) {
        // only do on-the-fly compile if not in SSR - SSR on-the-fly compilation
        // is done by server-renderer
        if (!isSSR && compile && !Component.render) {
            const template = Component.template;
            if (template) {
                startMeasure(instance, `compile`);
                const { isCustomElement , compilerOptions  } = instance.appContext.config;
                const { delimiters , compilerOptions: componentCompilerOptions  } = Component;
                const finalCompilerOptions = _shared.extend(_shared.extend({
                    isCustomElement,
                    delimiters
                }, compilerOptions), componentCompilerOptions);
                Component.render = compile(template, finalCompilerOptions);
                endMeasure(instance, `compile`);
            }
        }
        instance.render = Component.render || _shared.NOOP;
        // for runtime-compiled render functions using `with` blocks, the render
        // proxy used needs a different `has` handler which is more performant and
        // also only allows a whitelist of globals to fallthrough.
        if (installWithProxy) installWithProxy(instance);
    }
    // support for 2.x options
    if (__VUE_OPTIONS_API__ && true) {
        setCurrentInstance(instance);
        _reactivity.pauseTracking();
        applyOptions(instance);
        _reactivity.resetTracking();
        unsetCurrentInstance();
    }
    // warn missing template/render
    // the runtime compilation of template in SSR is done by server-render
    if (!Component.render && instance.render === _shared.NOOP && !isSSR) {
        /* istanbul ignore if */ if (!compile && Component.template) warn(`Component provided template option but ` + `runtime compilation is not supported in this build of Vue.` + ` Configure your bundler to alias "vue" to "vue/dist/vue.esm-bundler.js".`);
        else warn(`Component is missing template or render function.`);
    }
}
function createAttrsProxy(instance) {
    return new Proxy(instance.attrs, {
        get (target, key) {
            markAttrsAccessed();
            _reactivity.track(instance, "get" /* GET */ , '$attrs');
            return target[key];
        },
        set () {
            warn(`setupContext.attrs is readonly.`);
            return false;
        },
        deleteProperty () {
            warn(`setupContext.attrs is readonly.`);
            return false;
        }
    });
}
function createSetupContext(instance) {
    const expose = (exposed)=>{
        if (instance.exposed) warn(`expose() should be called only once per setup().`);
        instance.exposed = exposed || {};
    };
    let attrs;
    // We use getters in dev in case libs like test-utils overwrite instance
    // properties (overwrites should not be done in prod)
    return Object.freeze({
        get attrs () {
            return attrs || (attrs = createAttrsProxy(instance));
        },
        get slots () {
            return _reactivity.shallowReadonly(instance.slots);
        },
        get emit () {
            return (event, ...args)=>instance.emit(event, ...args)
            ;
        },
        expose
    });
}
function getExposeProxy(instance) {
    if (instance.exposed) return instance.exposeProxy || (instance.exposeProxy = new Proxy(_reactivity.proxyRefs(_reactivity.markRaw(instance.exposed)), {
        get (target, key) {
            if (key in target) return target[key];
            else if (key in publicPropertiesMap) return publicPropertiesMap[key](instance);
        }
    }));
}
const classifyRE = /(?:^|[-_])(\w)/g;
const classify = (str)=>str.replace(classifyRE, (c)=>c.toUpperCase()
    ).replace(/[-_]/g, '')
;
function getComponentName(Component) {
    return _shared.isFunction(Component) ? Component.displayName || Component.name : Component.name;
}
/* istanbul ignore next */ function formatComponentName(instance, Component, isRoot = false) {
    let name = getComponentName(Component);
    if (!name && Component.__file) {
        const match = Component.__file.match(/([^/\\]+)\.\w+$/);
        if (match) name = match[1];
    }
    if (!name && instance && instance.parent) {
        // try to infer the name based on reverse resolution
        const inferFromRegistry = (registry)=>{
            for(const key in registry){
                if (registry[key] === Component) return key;
            }
        };
        name = inferFromRegistry(instance.components || instance.parent.type.components) || inferFromRegistry(instance.appContext.components);
    }
    return name ? classify(name) : isRoot ? `App` : `Anonymous`;
}
function isClassComponent(value) {
    return _shared.isFunction(value) && '__vccOpts' in value;
}
const computed = (getterOrOptions, debugOptions)=>{
    // @ts-ignore
    return _reactivity.computed(getterOrOptions, debugOptions, isInSSRComponentSetup);
};
// dev only
const warnRuntimeUsage = (method)=>warn(`${method}() is a compiler-hint helper that is only usable inside ` + `<script setup> of a single file component. Its arguments should be ` + `compiled away and passing it at runtime has no effect.`)
;
// implementation
function defineProps() {
    warnRuntimeUsage(`defineProps`);
    return null;
}
// implementation
function defineEmits() {
    warnRuntimeUsage(`defineEmits`);
    return null;
}
/**
 * Vue `<script setup>` compiler macro for declaring a component's exposed
 * instance properties when it is accessed by a parent component via template
 * refs.
 *
 * `<script setup>` components are closed by default - i.e. variables inside
 * the `<script setup>` scope is not exposed to parent unless explicitly exposed
 * via `defineExpose`.
 *
 * This is only usable inside `<script setup>`, is compiled away in the
 * output and should **not** be actually called at runtime.
 */ function defineExpose(exposed) {
    warnRuntimeUsage(`defineExpose`);
}
/**
 * Vue `<script setup>` compiler macro for providing props default values when
 * using type-based `defineProps` declaration.
 *
 * Example usage:
 * ```ts
 * withDefaults(defineProps<{
 *   size?: number
 *   labels?: string[]
 * }>(), {
 *   size: 3,
 *   labels: () => ['default label']
 * })
 * ```
 *
 * This is only usable inside `<script setup>`, is compiled away in the output
 * and should **not** be actually called at runtime.
 */ function withDefaults(props, defaults) {
    warnRuntimeUsage(`withDefaults`);
    return null;
}
function useSlots() {
    return getContext().slots;
}
function useAttrs() {
    return getContext().attrs;
}
function getContext() {
    const i = getCurrentInstance();
    if (!i) warn(`useContext() called without active instance.`);
    return i.setupContext || (i.setupContext = createSetupContext(i));
}
/**
 * Runtime helper for merging default declarations. Imported by compiled code
 * only.
 * @internal
 */ function mergeDefaults(raw, defaults) {
    const props = _shared.isArray(raw) ? raw.reduce((normalized, p)=>(normalized[p] = {}, normalized)
    , {}) : raw;
    for(const key in defaults){
        const opt = props[key];
        if (opt) {
            if (_shared.isArray(opt) || _shared.isFunction(opt)) props[key] = {
                type: opt,
                default: defaults[key]
            };
            else opt.default = defaults[key];
        } else if (opt === null) props[key] = {
            default: defaults[key]
        };
        else warn(`props default key "${key}" has no corresponding declaration.`);
    }
    return props;
}
/**
 * Used to create a proxy for the rest element when destructuring props with
 * defineProps().
 * @internal
 */ function createPropsRestProxy(props, excludedKeys) {
    const ret = {};
    for(const key in props)if (!excludedKeys.includes(key)) Object.defineProperty(ret, key, {
        enumerable: true,
        get: ()=>props[key]
    });
    return ret;
}
/**
 * `<script setup>` helper for persisting the current instance context over
 * async/await flows.
 *
 * `@vue/compiler-sfc` converts the following:
 *
 * ```ts
 * const x = await foo()
 * ```
 *
 * into:
 *
 * ```ts
 * let __temp, __restore
 * const x = (([__temp, __restore] = withAsyncContext(() => foo())),__temp=await __temp,__restore(),__temp)
 * ```
 * @internal
 */ function withAsyncContext(getAwaitable) {
    const ctx = getCurrentInstance();
    if (!ctx) warn(`withAsyncContext called without active current instance. ` + `This is likely a bug.`);
    let awaitable = getAwaitable();
    unsetCurrentInstance();
    if (_shared.isPromise(awaitable)) awaitable = awaitable.catch((e)=>{
        setCurrentInstance(ctx);
        throw e;
    });
    return [
        awaitable,
        ()=>setCurrentInstance(ctx)
    ];
}
// Actual implementation
function h(type, propsOrChildren, children) {
    const l = arguments.length;
    if (l === 2) {
        if (_shared.isObject(propsOrChildren) && !_shared.isArray(propsOrChildren)) {
            // single vnode without props
            if (isVNode(propsOrChildren)) return createVNode(type, null, [
                propsOrChildren
            ]);
            // props without children
            return createVNode(type, propsOrChildren);
        } else // omit props
        return createVNode(type, null, propsOrChildren);
    } else {
        if (l > 3) children = Array.prototype.slice.call(arguments, 2);
        else if (l === 3 && isVNode(children)) children = [
            children
        ];
        return createVNode(type, propsOrChildren, children);
    }
}
const ssrContextKey = Symbol(`ssrContext`);
const useSSRContext = ()=>{
    {
        const ctx = inject(ssrContextKey);
        if (!ctx) warn(`Server rendering context not provided. Make sure to only call ` + `useSSRContext() conditionally in the server build.`);
        return ctx;
    }
};
function isShallow(value) {
    return !!(value && value["__v_isShallow" /* IS_SHALLOW */ ]);
}
function initCustomFormatter() {
    /* eslint-disable no-restricted-globals */ if (typeof window === 'undefined') return;
    const vueStyle = {
        style: 'color:#3ba776'
    };
    const numberStyle = {
        style: 'color:#0b1bc9'
    };
    const stringStyle = {
        style: 'color:#b62e24'
    };
    const keywordStyle = {
        style: 'color:#9d288c'
    };
    // custom formatter for Chrome
    // https://www.mattzeunert.com/2016/02/19/custom-chrome-devtools-object-formatters.html
    const formatter = {
        header (obj) {
            // TODO also format ComponentPublicInstance & ctx.slots/attrs in setup
            if (!_shared.isObject(obj)) return null;
            if (obj.__isVue) return [
                'div',
                vueStyle,
                `VueInstance`
            ];
            else if (_reactivity.isRef(obj)) return [
                'div',
                {},
                [
                    'span',
                    vueStyle,
                    genRefFlag(obj)
                ],
                '<',
                formatValue(obj.value),
                `>`
            ];
            else if (_reactivity.isReactive(obj)) return [
                'div',
                {},
                [
                    'span',
                    vueStyle,
                    isShallow(obj) ? 'ShallowReactive' : 'Reactive'
                ],
                '<',
                formatValue(obj),
                `>${_reactivity.isReadonly(obj) ? ` (readonly)` : ``}`
            ];
            else if (_reactivity.isReadonly(obj)) return [
                'div',
                {},
                [
                    'span',
                    vueStyle,
                    isShallow(obj) ? 'ShallowReadonly' : 'Readonly'
                ],
                '<',
                formatValue(obj),
                '>'
            ];
            return null;
        },
        hasBody (obj) {
            return obj && obj.__isVue;
        },
        body (obj) {
            if (obj && obj.__isVue) return [
                'div',
                {},
                ...formatInstance(obj.$)
            ];
        }
    };
    function formatInstance(instance) {
        const blocks = [];
        if (instance.type.props && instance.props) blocks.push(createInstanceBlock('props', _reactivity.toRaw(instance.props)));
        if (instance.setupState !== _shared.EMPTY_OBJ) blocks.push(createInstanceBlock('setup', instance.setupState));
        if (instance.data !== _shared.EMPTY_OBJ) blocks.push(createInstanceBlock('data', _reactivity.toRaw(instance.data)));
        const computed1 = extractKeys(instance, 'computed');
        if (computed1) blocks.push(createInstanceBlock('computed', computed1));
        const injected = extractKeys(instance, 'inject');
        if (injected) blocks.push(createInstanceBlock('injected', injected));
        blocks.push([
            'div',
            {},
            [
                'span',
                {
                    style: keywordStyle.style + ';opacity:0.66'
                },
                '$ (internal): '
            ],
            [
                'object',
                {
                    object: instance
                }
            ]
        ]);
        return blocks;
    }
    function createInstanceBlock(type, target) {
        target = _shared.extend({}, target);
        if (!Object.keys(target).length) return [
            'span',
            {}
        ];
        return [
            'div',
            {
                style: 'line-height:1.25em;margin-bottom:0.6em'
            },
            [
                'div',
                {
                    style: 'color:#476582'
                },
                type
            ],
            [
                'div',
                {
                    style: 'padding-left:1.25em'
                },
                ...Object.keys(target).map((key)=>{
                    return [
                        'div',
                        {},
                        [
                            'span',
                            keywordStyle,
                            key + ': '
                        ],
                        formatValue(target[key], false)
                    ];
                })
            ]
        ];
    }
    function formatValue(v, asRaw = true) {
        if (typeof v === 'number') return [
            'span',
            numberStyle,
            v
        ];
        else if (typeof v === 'string') return [
            'span',
            stringStyle,
            JSON.stringify(v)
        ];
        else if (typeof v === 'boolean') return [
            'span',
            keywordStyle,
            v
        ];
        else if (_shared.isObject(v)) return [
            'object',
            {
                object: asRaw ? _reactivity.toRaw(v) : v
            }
        ];
        else return [
            'span',
            stringStyle,
            String(v)
        ];
    }
    function extractKeys(instance, type) {
        const Comp = instance.type;
        if (_shared.isFunction(Comp)) return;
        const extracted = {};
        for(const key in instance.ctx)if (isKeyOfType(Comp, key, type)) extracted[key] = instance.ctx[key];
        return extracted;
    }
    function isKeyOfType(Comp, key, type) {
        const opts = Comp[type];
        if (_shared.isArray(opts) && opts.includes(key) || _shared.isObject(opts) && key in opts) return true;
        if (Comp.extends && isKeyOfType(Comp.extends, key, type)) return true;
        if (Comp.mixins && Comp.mixins.some((m)=>isKeyOfType(m, key, type)
        )) return true;
    }
    function genRefFlag(v) {
        if (isShallow(v)) return `ShallowRef`;
        if (v.effect) return `ComputedRef`;
        return `Ref`;
    }
    if (window.devtoolsFormatters) window.devtoolsFormatters.push(formatter);
    else window.devtoolsFormatters = [
        formatter
    ];
}
function withMemo(memo, render, cache, index) {
    const cached = cache[index];
    if (cached && isMemoSame(cached, memo)) return cached;
    const ret = render();
    // shallow clone
    ret.memo = memo.slice();
    return cache[index] = ret;
}
function isMemoSame(cached, memo) {
    const prev = cached.memo;
    if (prev.length != memo.length) return false;
    for(let i = 0; i < prev.length; i++){
        if (prev[i] !== memo[i]) return false;
    }
    // make sure to let parent block track it when returning cached
    if (isBlockTreeEnabled > 0 && currentBlock) currentBlock.push(cached);
    return true;
}
// Core API ------------------------------------------------------------------
const version = "3.2.31";
const _ssrUtils = {
    createComponentInstance,
    setupComponent,
    renderComponentRoot,
    setCurrentRenderingInstance,
    isVNode,
    normalizeVNode
};
/**
 * SSR utils for \@vue/server-renderer. Only exposed in cjs builds.
 * @internal
 */ const ssrUtils = _ssrUtils;
/**
 * @internal only exposed in compat builds
 */ const resolveFilter = null;
/**
 * @internal only exposed in compat builds.
 */ const compatUtils = null;

},{"@vue/reactivity":"d7UXQ","@vue/shared":"3SM3y","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"d7UXQ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "EffectScope", ()=>EffectScope
);
parcelHelpers.export(exports, "ITERATE_KEY", ()=>ITERATE_KEY
);
parcelHelpers.export(exports, "ReactiveEffect", ()=>ReactiveEffect
);
parcelHelpers.export(exports, "computed", ()=>computed
);
parcelHelpers.export(exports, "customRef", ()=>customRef
);
parcelHelpers.export(exports, "deferredComputed", ()=>deferredComputed
);
parcelHelpers.export(exports, "effect", ()=>effect
);
parcelHelpers.export(exports, "effectScope", ()=>effectScope
);
parcelHelpers.export(exports, "enableTracking", ()=>enableTracking
);
parcelHelpers.export(exports, "getCurrentScope", ()=>getCurrentScope
);
parcelHelpers.export(exports, "isProxy", ()=>isProxy
);
parcelHelpers.export(exports, "isReactive", ()=>isReactive
);
parcelHelpers.export(exports, "isReadonly", ()=>isReadonly
);
parcelHelpers.export(exports, "isRef", ()=>isRef
);
parcelHelpers.export(exports, "isShallow", ()=>isShallow
);
parcelHelpers.export(exports, "markRaw", ()=>markRaw
);
parcelHelpers.export(exports, "onScopeDispose", ()=>onScopeDispose
);
parcelHelpers.export(exports, "pauseTracking", ()=>pauseTracking
);
parcelHelpers.export(exports, "proxyRefs", ()=>proxyRefs
);
parcelHelpers.export(exports, "reactive", ()=>reactive
);
parcelHelpers.export(exports, "readonly", ()=>readonly
);
parcelHelpers.export(exports, "ref", ()=>ref
);
parcelHelpers.export(exports, "resetTracking", ()=>resetTracking
);
parcelHelpers.export(exports, "shallowReactive", ()=>shallowReactive
);
parcelHelpers.export(exports, "shallowReadonly", ()=>shallowReadonly
);
parcelHelpers.export(exports, "shallowRef", ()=>shallowRef
);
parcelHelpers.export(exports, "stop", ()=>stop
);
parcelHelpers.export(exports, "toRaw", ()=>toRaw
);
parcelHelpers.export(exports, "toRef", ()=>toRef
);
parcelHelpers.export(exports, "toRefs", ()=>toRefs
);
parcelHelpers.export(exports, "track", ()=>track
);
parcelHelpers.export(exports, "trigger", ()=>trigger
);
parcelHelpers.export(exports, "triggerRef", ()=>triggerRef
);
parcelHelpers.export(exports, "unref", ()=>unref
);
var _shared = require("@vue/shared");
function warn(msg, ...args) {
    console.warn(`[Vue warn] ${msg}`, ...args);
}
let activeEffectScope;
class EffectScope {
    constructor(detached = false){
        this.active = true;
        this.effects = [];
        this.cleanups = [];
        if (!detached && activeEffectScope) {
            this.parent = activeEffectScope;
            this.index = (activeEffectScope.scopes || (activeEffectScope.scopes = [])).push(this) - 1;
        }
    }
    run(fn) {
        if (this.active) try {
            activeEffectScope = this;
            return fn();
        } finally{
            activeEffectScope = this.parent;
        }
        else warn(`cannot run an inactive effect scope.`);
    }
    on() {
        activeEffectScope = this;
    }
    off() {
        activeEffectScope = this.parent;
    }
    stop(fromParent) {
        if (this.active) {
            let i, l;
            for(i = 0, l = this.effects.length; i < l; i++)this.effects[i].stop();
            for(i = 0, l = this.cleanups.length; i < l; i++)this.cleanups[i]();
            if (this.scopes) for(i = 0, l = this.scopes.length; i < l; i++)this.scopes[i].stop(true);
            // nested scope, dereference from parent to avoid memory leaks
            if (this.parent && !fromParent) {
                // optimized O(1) removal
                const last = this.parent.scopes.pop();
                if (last && last !== this) {
                    this.parent.scopes[this.index] = last;
                    last.index = this.index;
                }
            }
            this.active = false;
        }
    }
}
function effectScope(detached) {
    return new EffectScope(detached);
}
function recordEffectScope(effect1, scope = activeEffectScope) {
    if (scope && scope.active) scope.effects.push(effect1);
}
function getCurrentScope() {
    return activeEffectScope;
}
function onScopeDispose(fn) {
    if (activeEffectScope) activeEffectScope.cleanups.push(fn);
    else warn(`onScopeDispose() is called when there is no active effect scope` + ` to be associated with.`);
}
const createDep = (effects)=>{
    const dep = new Set(effects);
    dep.w = 0;
    dep.n = 0;
    return dep;
};
const wasTracked = (dep)=>(dep.w & trackOpBit) > 0
;
const newTracked = (dep)=>(dep.n & trackOpBit) > 0
;
const initDepMarkers = ({ deps  })=>{
    if (deps.length) for(let i = 0; i < deps.length; i++)deps[i].w |= trackOpBit; // set was tracked
};
const finalizeDepMarkers = (effect2)=>{
    const { deps  } = effect2;
    if (deps.length) {
        let ptr = 0;
        for(let i = 0; i < deps.length; i++){
            const dep = deps[i];
            if (wasTracked(dep) && !newTracked(dep)) dep.delete(effect2);
            else deps[ptr++] = dep;
            // clear bits
            dep.w &= ~trackOpBit;
            dep.n &= ~trackOpBit;
        }
        deps.length = ptr;
    }
};
const targetMap = new WeakMap();
// The number of effects currently being tracked recursively.
let effectTrackDepth = 0;
let trackOpBit = 1;
/**
 * The bitwise track markers support at most 30 levels of recursion.
 * This value is chosen to enable modern JS engines to use a SMI on all platforms.
 * When recursion depth is greater, fall back to using a full cleanup.
 */ const maxMarkerBits = 30;
let activeEffect;
const ITERATE_KEY = Symbol('iterate');
const MAP_KEY_ITERATE_KEY = Symbol('Map key iterate');
class ReactiveEffect {
    constructor(fn, scheduler1 = null, scope){
        this.fn = fn;
        this.scheduler = scheduler1;
        this.active = true;
        this.deps = [];
        this.parent = undefined;
        recordEffectScope(this, scope);
    }
    run() {
        if (!this.active) return this.fn();
        let parent = activeEffect;
        let lastShouldTrack = shouldTrack;
        while(parent){
            if (parent === this) return;
            parent = parent.parent;
        }
        try {
            this.parent = activeEffect;
            activeEffect = this;
            shouldTrack = true;
            trackOpBit = 1 << ++effectTrackDepth;
            if (effectTrackDepth <= maxMarkerBits) initDepMarkers(this);
            else cleanupEffect(this);
            return this.fn();
        } finally{
            if (effectTrackDepth <= maxMarkerBits) finalizeDepMarkers(this);
            trackOpBit = 1 << --effectTrackDepth;
            activeEffect = this.parent;
            shouldTrack = lastShouldTrack;
            this.parent = undefined;
        }
    }
    stop() {
        if (this.active) {
            cleanupEffect(this);
            if (this.onStop) this.onStop();
            this.active = false;
        }
    }
}
function cleanupEffect(effect3) {
    const { deps  } = effect3;
    if (deps.length) {
        for(let i = 0; i < deps.length; i++)deps[i].delete(effect3);
        deps.length = 0;
    }
}
function effect(fn, options) {
    if (fn.effect) fn = fn.effect.fn;
    const _effect = new ReactiveEffect(fn);
    if (options) {
        _shared.extend(_effect, options);
        if (options.scope) recordEffectScope(_effect, options.scope);
    }
    if (!options || !options.lazy) _effect.run();
    const runner = _effect.run.bind(_effect);
    runner.effect = _effect;
    return runner;
}
function stop(runner) {
    runner.effect.stop();
}
let shouldTrack = true;
const trackStack = [];
function pauseTracking() {
    trackStack.push(shouldTrack);
    shouldTrack = false;
}
function enableTracking() {
    trackStack.push(shouldTrack);
    shouldTrack = true;
}
function resetTracking() {
    const last = trackStack.pop();
    shouldTrack = last === undefined ? true : last;
}
function track(target, type, key) {
    if (shouldTrack && activeEffect) {
        let depsMap = targetMap.get(target);
        if (!depsMap) targetMap.set(target, depsMap = new Map());
        let dep = depsMap.get(key);
        if (!dep) depsMap.set(key, dep = createDep());
        const eventInfo = {
            effect: activeEffect,
            target,
            type,
            key
        };
        trackEffects(dep, eventInfo);
    }
}
function trackEffects(dep, debuggerEventExtraInfo) {
    let shouldTrack1 = false;
    if (effectTrackDepth <= maxMarkerBits) {
        if (!newTracked(dep)) {
            dep.n |= trackOpBit; // set newly tracked
            shouldTrack1 = !wasTracked(dep);
        }
    } else // Full cleanup mode.
    shouldTrack1 = !dep.has(activeEffect);
    if (shouldTrack1) {
        dep.add(activeEffect);
        activeEffect.deps.push(dep);
        if (activeEffect.onTrack) activeEffect.onTrack(Object.assign({
            effect: activeEffect
        }, debuggerEventExtraInfo));
    }
}
function trigger(target, type, key1, newValue, oldValue, oldTarget) {
    const depsMap = targetMap.get(target);
    if (!depsMap) // never been tracked
    return;
    let deps = [];
    if (type === "clear" /* CLEAR */ ) // collection being cleared
    // trigger all effects for target
    deps = [
        ...depsMap.values()
    ];
    else if (key1 === 'length' && _shared.isArray(target)) depsMap.forEach((dep, key)=>{
        if (key === 'length' || key >= newValue) deps.push(dep);
    });
    else {
        // schedule runs for SET | ADD | DELETE
        if (key1 !== void 0) deps.push(depsMap.get(key1));
        // also run for iteration key on ADD | DELETE | Map.SET
        switch(type){
            case "add" /* ADD */ :
                if (!_shared.isArray(target)) {
                    deps.push(depsMap.get(ITERATE_KEY));
                    if (_shared.isMap(target)) deps.push(depsMap.get(MAP_KEY_ITERATE_KEY));
                } else if (_shared.isIntegerKey(key1)) // new index added to array -> length changes
                deps.push(depsMap.get('length'));
                break;
            case "delete" /* DELETE */ :
                if (!_shared.isArray(target)) {
                    deps.push(depsMap.get(ITERATE_KEY));
                    if (_shared.isMap(target)) deps.push(depsMap.get(MAP_KEY_ITERATE_KEY));
                }
                break;
            case "set" /* SET */ :
                if (_shared.isMap(target)) deps.push(depsMap.get(ITERATE_KEY));
                break;
        }
    }
    const eventInfo = {
        target,
        type,
        key: key1,
        newValue,
        oldValue,
        oldTarget
    };
    if (deps.length === 1) {
        if (deps[0]) triggerEffects(deps[0], eventInfo);
    } else {
        const effects = [];
        for (const dep of deps)if (dep) effects.push(...dep);
        triggerEffects(createDep(effects), eventInfo);
    }
}
function triggerEffects(dep, debuggerEventExtraInfo) {
    // spread into array for stabilization
    for (const effect4 of _shared.isArray(dep) ? dep : [
        ...dep
    ])if (effect4 !== activeEffect || effect4.allowRecurse) {
        if (effect4.onTrigger) effect4.onTrigger(_shared.extend({
            effect: effect4
        }, debuggerEventExtraInfo));
        if (effect4.scheduler) effect4.scheduler();
        else effect4.run();
    }
}
const isNonTrackableKeys = /*#__PURE__*/ _shared.makeMap(`__proto__,__v_isRef,__isVue`);
const builtInSymbols = new Set(Object.getOwnPropertyNames(Symbol).map((key)=>Symbol[key]
).filter(_shared.isSymbol));
const get = /*#__PURE__*/ createGetter();
const shallowGet = /*#__PURE__*/ createGetter(false, true);
const readonlyGet = /*#__PURE__*/ createGetter(true);
const shallowReadonlyGet = /*#__PURE__*/ createGetter(true, true);
const arrayInstrumentations = /*#__PURE__*/ createArrayInstrumentations();
function createArrayInstrumentations() {
    const instrumentations = {};
    [
        'includes',
        'indexOf',
        'lastIndexOf'
    ].forEach((key)=>{
        instrumentations[key] = function(...args) {
            const arr = toRaw(this);
            for(let i = 0, l = this.length; i < l; i++)track(arr, "get" /* GET */ , i + '');
            // we run the method using the original args first (which may be reactive)
            const res = arr[key](...args);
            if (res === -1 || res === false) // if that didn't work, run it again using raw values.
            return arr[key](...args.map(toRaw));
            else return res;
        };
    });
    [
        'push',
        'pop',
        'shift',
        'unshift',
        'splice'
    ].forEach((key)=>{
        instrumentations[key] = function(...args) {
            pauseTracking();
            const res = toRaw(this)[key].apply(this, args);
            resetTracking();
            return res;
        };
    });
    return instrumentations;
}
function createGetter(isReadonly1 = false, shallow = false) {
    return function get(target, key, receiver) {
        if (key === "__v_isReactive" /* IS_REACTIVE */ ) return !isReadonly1;
        else if (key === "__v_isReadonly" /* IS_READONLY */ ) return isReadonly1;
        else if (key === "__v_isShallow" /* IS_SHALLOW */ ) return shallow;
        else if (key === "__v_raw" /* RAW */  && receiver === (isReadonly1 ? shallow ? shallowReadonlyMap : readonlyMap : shallow ? shallowReactiveMap : reactiveMap).get(target)) return target;
        const targetIsArray = _shared.isArray(target);
        if (!isReadonly1 && targetIsArray && _shared.hasOwn(arrayInstrumentations, key)) return Reflect.get(arrayInstrumentations, key, receiver);
        const res = Reflect.get(target, key, receiver);
        if (_shared.isSymbol(key) ? builtInSymbols.has(key) : isNonTrackableKeys(key)) return res;
        if (!isReadonly1) track(target, "get" /* GET */ , key);
        if (shallow) return res;
        if (isRef(res)) {
            // ref unwrapping - does not apply for Array + integer key.
            const shouldUnwrap = !targetIsArray || !_shared.isIntegerKey(key);
            return shouldUnwrap ? res.value : res;
        }
        if (_shared.isObject(res)) // Convert returned value into a proxy as well. we do the isObject check
        // here to avoid invalid value warning. Also need to lazy access readonly
        // and reactive here to avoid circular dependency.
        return isReadonly1 ? readonly(res) : reactive(res);
        return res;
    };
}
const set = /*#__PURE__*/ createSetter();
const shallowSet = /*#__PURE__*/ createSetter(true);
function createSetter(shallow = false) {
    return function set(target, key, value, receiver) {
        let oldValue = target[key];
        if (isReadonly(oldValue) && isRef(oldValue) && !isRef(value)) return false;
        if (!shallow && !isReadonly(value)) {
            if (!isShallow(value)) {
                value = toRaw(value);
                oldValue = toRaw(oldValue);
            }
            if (!_shared.isArray(target) && isRef(oldValue) && !isRef(value)) {
                oldValue.value = value;
                return true;
            }
        }
        const hadKey = _shared.isArray(target) && _shared.isIntegerKey(key) ? Number(key) < target.length : _shared.hasOwn(target, key);
        const result = Reflect.set(target, key, value, receiver);
        // don't trigger if target is something up in the prototype chain of original
        if (target === toRaw(receiver)) {
            if (!hadKey) trigger(target, "add" /* ADD */ , key, value);
            else if (_shared.hasChanged(value, oldValue)) trigger(target, "set" /* SET */ , key, value, oldValue);
        }
        return result;
    };
}
function deleteProperty(target, key) {
    const hadKey = _shared.hasOwn(target, key);
    const oldValue = target[key];
    const result = Reflect.deleteProperty(target, key);
    if (result && hadKey) trigger(target, "delete" /* DELETE */ , key, undefined, oldValue);
    return result;
}
function has(target, key) {
    const result = Reflect.has(target, key);
    if (!_shared.isSymbol(key) || !builtInSymbols.has(key)) track(target, "has" /* HAS */ , key);
    return result;
}
function ownKeys(target) {
    track(target, "iterate" /* ITERATE */ , _shared.isArray(target) ? 'length' : ITERATE_KEY);
    return Reflect.ownKeys(target);
}
const mutableHandlers = {
    get,
    set,
    deleteProperty,
    has,
    ownKeys
};
const readonlyHandlers = {
    get: readonlyGet,
    set (target, key) {
        console.warn(`Set operation on key "${String(key)}" failed: target is readonly.`, target);
        return true;
    },
    deleteProperty (target, key) {
        console.warn(`Delete operation on key "${String(key)}" failed: target is readonly.`, target);
        return true;
    }
};
const shallowReactiveHandlers = /*#__PURE__*/ _shared.extend({}, mutableHandlers, {
    get: shallowGet,
    set: shallowSet
});
// Props handlers are special in the sense that it should not unwrap top-level
// refs (in order to allow refs to be explicitly passed down), but should
// retain the reactivity of the normal readonly object.
const shallowReadonlyHandlers = /*#__PURE__*/ _shared.extend({}, readonlyHandlers, {
    get: shallowReadonlyGet
});
const toShallow = (value)=>value
;
const getProto = (v)=>Reflect.getPrototypeOf(v)
;
function get$1(target, key, isReadonly2 = false, isShallow1 = false) {
    // #1772: readonly(reactive(Map)) should return readonly + reactive version
    // of the value
    target = target["__v_raw" /* RAW */ ];
    const rawTarget = toRaw(target);
    const rawKey = toRaw(key);
    if (key !== rawKey) !isReadonly2 && track(rawTarget, "get" /* GET */ , key);
    !isReadonly2 && track(rawTarget, "get" /* GET */ , rawKey);
    const { has: has1  } = getProto(rawTarget);
    const wrap = isShallow1 ? toShallow : isReadonly2 ? toReadonly : toReactive;
    if (has1.call(rawTarget, key)) return wrap(target.get(key));
    else if (has1.call(rawTarget, rawKey)) return wrap(target.get(rawKey));
    else if (target !== rawTarget) // #3602 readonly(reactive(Map))
    // ensure that the nested reactive `Map` can do tracking for itself
    target.get(key);
}
function has$1(key, isReadonly3 = false) {
    const target = this["__v_raw" /* RAW */ ];
    const rawTarget = toRaw(target);
    const rawKey = toRaw(key);
    if (key !== rawKey) !isReadonly3 && track(rawTarget, "has" /* HAS */ , key);
    !isReadonly3 && track(rawTarget, "has" /* HAS */ , rawKey);
    return key === rawKey ? target.has(key) : target.has(key) || target.has(rawKey);
}
function size(target, isReadonly4 = false) {
    target = target["__v_raw" /* RAW */ ];
    !isReadonly4 && track(toRaw(target), "iterate" /* ITERATE */ , ITERATE_KEY);
    return Reflect.get(target, 'size', target);
}
function add(value) {
    value = toRaw(value);
    const target = toRaw(this);
    const proto = getProto(target);
    const hadKey = proto.has.call(target, value);
    if (!hadKey) {
        target.add(value);
        trigger(target, "add" /* ADD */ , value, value);
    }
    return this;
}
function set$1(key, value) {
    value = toRaw(value);
    const target = toRaw(this);
    const { has: has2 , get: get1  } = getProto(target);
    let hadKey = has2.call(target, key);
    if (!hadKey) {
        key = toRaw(key);
        hadKey = has2.call(target, key);
    } else checkIdentityKeys(target, has2, key);
    const oldValue = get1.call(target, key);
    target.set(key, value);
    if (!hadKey) trigger(target, "add" /* ADD */ , key, value);
    else if (_shared.hasChanged(value, oldValue)) trigger(target, "set" /* SET */ , key, value, oldValue);
    return this;
}
function deleteEntry(key) {
    const target = toRaw(this);
    const { has: has3 , get: get2  } = getProto(target);
    let hadKey = has3.call(target, key);
    if (!hadKey) {
        key = toRaw(key);
        hadKey = has3.call(target, key);
    } else checkIdentityKeys(target, has3, key);
    const oldValue = get2 ? get2.call(target, key) : undefined;
    // forward the operation before queueing reactions
    const result = target.delete(key);
    if (hadKey) trigger(target, "delete" /* DELETE */ , key, undefined, oldValue);
    return result;
}
function clear() {
    const target = toRaw(this);
    const hadItems = target.size !== 0;
    const oldTarget = _shared.isMap(target) ? new Map(target) : new Set(target);
    // forward the operation before queueing reactions
    const result = target.clear();
    if (hadItems) trigger(target, "clear" /* CLEAR */ , undefined, undefined, oldTarget);
    return result;
}
function createForEach(isReadonly5, isShallow2) {
    return function forEach(callback, thisArg) {
        const observed = this;
        const target = observed["__v_raw" /* RAW */ ];
        const rawTarget = toRaw(target);
        const wrap = isShallow2 ? toShallow : isReadonly5 ? toReadonly : toReactive;
        !isReadonly5 && track(rawTarget, "iterate" /* ITERATE */ , ITERATE_KEY);
        return target.forEach((value, key)=>{
            // important: make sure the callback is
            // 1. invoked with the reactive map as `this` and 3rd arg
            // 2. the value received should be a corresponding reactive/readonly.
            return callback.call(thisArg, wrap(value), wrap(key), observed);
        });
    };
}
function createIterableMethod(method, isReadonly6, isShallow3) {
    return function(...args) {
        const target = this["__v_raw" /* RAW */ ];
        const rawTarget = toRaw(target);
        const targetIsMap = _shared.isMap(rawTarget);
        const isPair = method === 'entries' || method === Symbol.iterator && targetIsMap;
        const isKeyOnly = method === 'keys' && targetIsMap;
        const innerIterator = target[method](...args);
        const wrap = isShallow3 ? toShallow : isReadonly6 ? toReadonly : toReactive;
        !isReadonly6 && track(rawTarget, "iterate" /* ITERATE */ , isKeyOnly ? MAP_KEY_ITERATE_KEY : ITERATE_KEY);
        // return a wrapped iterator which returns observed versions of the
        // values emitted from the real iterator
        return {
            // iterator protocol
            next () {
                const { value , done  } = innerIterator.next();
                return done ? {
                    value,
                    done
                } : {
                    value: isPair ? [
                        wrap(value[0]),
                        wrap(value[1])
                    ] : wrap(value),
                    done
                };
            },
            // iterable protocol
            [Symbol.iterator] () {
                return this;
            }
        };
    };
}
function createReadonlyMethod(type) {
    return function(...args) {
        {
            const key = args[0] ? `on key "${args[0]}" ` : ``;
            console.warn(`${_shared.capitalize(type)} operation ${key}failed: target is readonly.`, toRaw(this));
        }
        return type === "delete" /* DELETE */  ? false : this;
    };
}
function createInstrumentations() {
    const mutableInstrumentations1 = {
        get (key) {
            return get$1(this, key);
        },
        get size () {
            return size(this);
        },
        has: has$1,
        add,
        set: set$1,
        delete: deleteEntry,
        clear,
        forEach: createForEach(false, false)
    };
    const shallowInstrumentations1 = {
        get (key) {
            return get$1(this, key, false, true);
        },
        get size () {
            return size(this);
        },
        has: has$1,
        add,
        set: set$1,
        delete: deleteEntry,
        clear,
        forEach: createForEach(false, true)
    };
    const readonlyInstrumentations1 = {
        get (key) {
            return get$1(this, key, true);
        },
        get size () {
            return size(this, true);
        },
        has (key) {
            return has$1.call(this, key, true);
        },
        add: createReadonlyMethod("add" /* ADD */ ),
        set: createReadonlyMethod("set" /* SET */ ),
        delete: createReadonlyMethod("delete" /* DELETE */ ),
        clear: createReadonlyMethod("clear" /* CLEAR */ ),
        forEach: createForEach(true, false)
    };
    const shallowReadonlyInstrumentations1 = {
        get (key) {
            return get$1(this, key, true, true);
        },
        get size () {
            return size(this, true);
        },
        has (key) {
            return has$1.call(this, key, true);
        },
        add: createReadonlyMethod("add" /* ADD */ ),
        set: createReadonlyMethod("set" /* SET */ ),
        delete: createReadonlyMethod("delete" /* DELETE */ ),
        clear: createReadonlyMethod("clear" /* CLEAR */ ),
        forEach: createForEach(true, true)
    };
    const iteratorMethods = [
        'keys',
        'values',
        'entries',
        Symbol.iterator
    ];
    iteratorMethods.forEach((method)=>{
        mutableInstrumentations1[method] = createIterableMethod(method, false, false);
        readonlyInstrumentations1[method] = createIterableMethod(method, true, false);
        shallowInstrumentations1[method] = createIterableMethod(method, false, true);
        shallowReadonlyInstrumentations1[method] = createIterableMethod(method, true, true);
    });
    return [
        mutableInstrumentations1,
        readonlyInstrumentations1,
        shallowInstrumentations1,
        shallowReadonlyInstrumentations1
    ];
}
const [mutableInstrumentations, readonlyInstrumentations, shallowInstrumentations, shallowReadonlyInstrumentations] = /* #__PURE__*/ createInstrumentations();
function createInstrumentationGetter(isReadonly7, shallow) {
    const instrumentations = shallow ? isReadonly7 ? shallowReadonlyInstrumentations : shallowInstrumentations : isReadonly7 ? readonlyInstrumentations : mutableInstrumentations;
    return (target, key, receiver)=>{
        if (key === "__v_isReactive" /* IS_REACTIVE */ ) return !isReadonly7;
        else if (key === "__v_isReadonly" /* IS_READONLY */ ) return isReadonly7;
        else if (key === "__v_raw" /* RAW */ ) return target;
        return Reflect.get(_shared.hasOwn(instrumentations, key) && key in target ? instrumentations : target, key, receiver);
    };
}
const mutableCollectionHandlers = {
    get: /*#__PURE__*/ createInstrumentationGetter(false, false)
};
const shallowCollectionHandlers = {
    get: /*#__PURE__*/ createInstrumentationGetter(false, true)
};
const readonlyCollectionHandlers = {
    get: /*#__PURE__*/ createInstrumentationGetter(true, false)
};
const shallowReadonlyCollectionHandlers = {
    get: /*#__PURE__*/ createInstrumentationGetter(true, true)
};
function checkIdentityKeys(target, has4, key) {
    const rawKey = toRaw(key);
    if (rawKey !== key && has4.call(target, rawKey)) {
        const type = _shared.toRawType(target);
        console.warn(`Reactive ${type} contains both the raw and reactive ` + `versions of the same object${type === `Map` ? ` as keys` : ``}, ` + `which can lead to inconsistencies. ` + `Avoid differentiating between the raw and reactive versions ` + `of an object and only use the reactive version if possible.`);
    }
}
const reactiveMap = new WeakMap();
const shallowReactiveMap = new WeakMap();
const readonlyMap = new WeakMap();
const shallowReadonlyMap = new WeakMap();
function targetTypeMap(rawType) {
    switch(rawType){
        case 'Object':
        case 'Array':
            return 1 /* COMMON */ ;
        case 'Map':
        case 'Set':
        case 'WeakMap':
        case 'WeakSet':
            return 2 /* COLLECTION */ ;
        default:
            return 0 /* INVALID */ ;
    }
}
function getTargetType(value) {
    return value["__v_skip" /* SKIP */ ] || !Object.isExtensible(value) ? 0 /* INVALID */  : targetTypeMap(_shared.toRawType(value));
}
function reactive(target) {
    // if trying to observe a readonly proxy, return the readonly version.
    if (isReadonly(target)) return target;
    return createReactiveObject(target, false, mutableHandlers, mutableCollectionHandlers, reactiveMap);
}
/**
 * Return a shallowly-reactive copy of the original object, where only the root
 * level properties are reactive. It also does not auto-unwrap refs (even at the
 * root level).
 */ function shallowReactive(target) {
    return createReactiveObject(target, false, shallowReactiveHandlers, shallowCollectionHandlers, shallowReactiveMap);
}
/**
 * Creates a readonly copy of the original object. Note the returned copy is not
 * made reactive, but `readonly` can be called on an already reactive object.
 */ function readonly(target) {
    return createReactiveObject(target, true, readonlyHandlers, readonlyCollectionHandlers, readonlyMap);
}
/**
 * Returns a reactive-copy of the original object, where only the root level
 * properties are readonly, and does NOT unwrap refs nor recursively convert
 * returned properties.
 * This is used for creating the props proxy object for stateful components.
 */ function shallowReadonly(target) {
    return createReactiveObject(target, true, shallowReadonlyHandlers, shallowReadonlyCollectionHandlers, shallowReadonlyMap);
}
function createReactiveObject(target, isReadonly8, baseHandlers, collectionHandlers, proxyMap) {
    if (!_shared.isObject(target)) {
        console.warn(`value cannot be made reactive: ${String(target)}`);
        return target;
    }
    // target is already a Proxy, return it.
    // exception: calling readonly() on a reactive object
    if (target["__v_raw" /* RAW */ ] && !(isReadonly8 && target["__v_isReactive" /* IS_REACTIVE */ ])) return target;
    // target already has corresponding Proxy
    const existingProxy = proxyMap.get(target);
    if (existingProxy) return existingProxy;
    // only a whitelist of value types can be observed.
    const targetType = getTargetType(target);
    if (targetType === 0 /* INVALID */ ) return target;
    const proxy = new Proxy(target, targetType === 2 /* COLLECTION */  ? collectionHandlers : baseHandlers);
    proxyMap.set(target, proxy);
    return proxy;
}
function isReactive(value) {
    if (isReadonly(value)) return isReactive(value["__v_raw" /* RAW */ ]);
    return !!(value && value["__v_isReactive" /* IS_REACTIVE */ ]);
}
function isReadonly(value) {
    return !!(value && value["__v_isReadonly" /* IS_READONLY */ ]);
}
function isShallow(value) {
    return !!(value && value["__v_isShallow" /* IS_SHALLOW */ ]);
}
function isProxy(value) {
    return isReactive(value) || isReadonly(value);
}
function toRaw(observed) {
    const raw = observed && observed["__v_raw" /* RAW */ ];
    return raw ? toRaw(raw) : observed;
}
function markRaw(value) {
    _shared.def(value, "__v_skip" /* SKIP */ , true);
    return value;
}
const toReactive = (value)=>_shared.isObject(value) ? reactive(value) : value
;
const toReadonly = (value)=>_shared.isObject(value) ? readonly(value) : value
;
function trackRefValue(ref1) {
    if (shouldTrack && activeEffect) {
        ref1 = toRaw(ref1);
        trackEffects(ref1.dep || (ref1.dep = createDep()), {
            target: ref1,
            type: "get" /* GET */ ,
            key: 'value'
        });
    }
}
function triggerRefValue(ref2, newVal) {
    ref2 = toRaw(ref2);
    if (ref2.dep) triggerEffects(ref2.dep, {
        target: ref2,
        type: "set" /* SET */ ,
        key: 'value',
        newValue: newVal
    });
}
function isRef(r) {
    return !!(r && r.__v_isRef === true);
}
function ref(value) {
    return createRef(value, false);
}
function shallowRef(value) {
    return createRef(value, true);
}
function createRef(rawValue, shallow) {
    if (isRef(rawValue)) return rawValue;
    return new RefImpl(rawValue, shallow);
}
class RefImpl {
    constructor(value, __v_isShallow){
        this.__v_isShallow = __v_isShallow;
        this.dep = undefined;
        this.__v_isRef = true;
        this._rawValue = __v_isShallow ? value : toRaw(value);
        this._value = __v_isShallow ? value : toReactive(value);
    }
    get value() {
        trackRefValue(this);
        return this._value;
    }
    set value(newVal) {
        newVal = this.__v_isShallow ? newVal : toRaw(newVal);
        if (_shared.hasChanged(newVal, this._rawValue)) {
            this._rawValue = newVal;
            this._value = this.__v_isShallow ? newVal : toReactive(newVal);
            triggerRefValue(this, newVal);
        }
    }
}
function triggerRef(ref3) {
    triggerRefValue(ref3, ref3.value);
}
function unref(ref4) {
    return isRef(ref4) ? ref4.value : ref4;
}
const shallowUnwrapHandlers = {
    get: (target, key, receiver)=>unref(Reflect.get(target, key, receiver))
    ,
    set: (target, key, value, receiver)=>{
        const oldValue = target[key];
        if (isRef(oldValue) && !isRef(value)) {
            oldValue.value = value;
            return true;
        } else return Reflect.set(target, key, value, receiver);
    }
};
function proxyRefs(objectWithRefs) {
    return isReactive(objectWithRefs) ? objectWithRefs : new Proxy(objectWithRefs, shallowUnwrapHandlers);
}
class CustomRefImpl {
    constructor(factory){
        this.dep = undefined;
        this.__v_isRef = true;
        const { get: get3 , set: set1  } = factory(()=>trackRefValue(this)
        , ()=>triggerRefValue(this)
        );
        this._get = get3;
        this._set = set1;
    }
    get value() {
        return this._get();
    }
    set value(newVal) {
        this._set(newVal);
    }
}
function customRef(factory) {
    return new CustomRefImpl(factory);
}
function toRefs(object) {
    if (!isProxy(object)) console.warn(`toRefs() expects a reactive object but received a plain one.`);
    const ret = _shared.isArray(object) ? new Array(object.length) : {};
    for(const key in object)ret[key] = toRef(object, key);
    return ret;
}
class ObjectRefImpl {
    constructor(_object, _key, _defaultValue){
        this._object = _object;
        this._key = _key;
        this._defaultValue = _defaultValue;
        this.__v_isRef = true;
    }
    get value() {
        const val = this._object[this._key];
        return val === undefined ? this._defaultValue : val;
    }
    set value(newVal) {
        this._object[this._key] = newVal;
    }
}
function toRef(object, key, defaultValue) {
    const val = object[key];
    return isRef(val) ? val : new ObjectRefImpl(object, key, defaultValue);
}
class ComputedRefImpl {
    constructor(getter, _setter, isReadonly9, isSSR){
        this._setter = _setter;
        this.dep = undefined;
        this.__v_isRef = true;
        this._dirty = true;
        this.effect = new ReactiveEffect(getter, ()=>{
            if (!this._dirty) {
                this._dirty = true;
                triggerRefValue(this);
            }
        });
        this.effect.computed = this;
        this.effect.active = this._cacheable = !isSSR;
        this["__v_isReadonly" /* IS_READONLY */ ] = isReadonly9;
    }
    get value() {
        // the computed ref may get wrapped by other proxies e.g. readonly() #3376
        const self = toRaw(this);
        trackRefValue(self);
        if (self._dirty || !self._cacheable) {
            self._dirty = false;
            self._value = self.effect.run();
        }
        return self._value;
    }
    set value(newValue) {
        this._setter(newValue);
    }
}
function computed(getterOrOptions, debugOptions, isSSR = false) {
    let getter;
    let setter;
    const onlyGetter = _shared.isFunction(getterOrOptions);
    if (onlyGetter) {
        getter = getterOrOptions;
        setter = ()=>{
            console.warn('Write operation failed: computed value is readonly');
        };
    } else {
        getter = getterOrOptions.get;
        setter = getterOrOptions.set;
    }
    const cRef = new ComputedRefImpl(getter, setter, onlyGetter || !setter, isSSR);
    if (debugOptions && !isSSR) {
        cRef.effect.onTrack = debugOptions.onTrack;
        cRef.effect.onTrigger = debugOptions.onTrigger;
    }
    return cRef;
}
var _a;
const tick = Promise.resolve();
const queue = [];
let queued = false;
const scheduler = (fn)=>{
    queue.push(fn);
    if (!queued) {
        queued = true;
        tick.then(flush);
    }
};
const flush = ()=>{
    for(let i = 0; i < queue.length; i++)queue[i]();
    queue.length = 0;
    queued = false;
};
class DeferredComputedRefImpl {
    constructor(getter){
        this.dep = undefined;
        this._dirty = true;
        this.__v_isRef = true;
        this[_a] = true;
        let compareTarget;
        let hasCompareTarget = false;
        let scheduled = false;
        this.effect = new ReactiveEffect(getter, (computedTrigger)=>{
            if (this.dep) {
                if (computedTrigger) {
                    compareTarget = this._value;
                    hasCompareTarget = true;
                } else if (!scheduled) {
                    const valueToCompare = hasCompareTarget ? compareTarget : this._value;
                    scheduled = true;
                    hasCompareTarget = false;
                    scheduler(()=>{
                        if (this.effect.active && this._get() !== valueToCompare) triggerRefValue(this);
                        scheduled = false;
                    });
                }
                // chained upstream computeds are notified synchronously to ensure
                // value invalidation in case of sync access; normal effects are
                // deferred to be triggered in scheduler.
                for (const e of this.dep)if (e.computed instanceof DeferredComputedRefImpl) e.scheduler(true);
            }
            this._dirty = true;
        });
        this.effect.computed = this;
    }
    _get() {
        if (this._dirty) {
            this._dirty = false;
            return this._value = this.effect.run();
        }
        return this._value;
    }
    get value() {
        trackRefValue(this);
        // the computed ref may get wrapped by other proxies e.g. readonly() #3376
        return toRaw(this)._get();
    }
}
_a = "__v_isReadonly" /* IS_READONLY */ ;
function deferredComputed(getter) {
    return new DeferredComputedRefImpl(getter);
}

},{"@vue/shared":"3SM3y","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3SM3y":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "EMPTY_ARR", ()=>EMPTY_ARR
);
parcelHelpers.export(exports, "EMPTY_OBJ", ()=>EMPTY_OBJ
);
parcelHelpers.export(exports, "NO", ()=>NO
);
parcelHelpers.export(exports, "NOOP", ()=>NOOP
);
parcelHelpers.export(exports, "PatchFlagNames", ()=>PatchFlagNames
);
parcelHelpers.export(exports, "camelize", ()=>camelize
);
parcelHelpers.export(exports, "capitalize", ()=>capitalize
);
parcelHelpers.export(exports, "def", ()=>def
);
parcelHelpers.export(exports, "escapeHtml", ()=>escapeHtml
);
parcelHelpers.export(exports, "escapeHtmlComment", ()=>escapeHtmlComment
);
parcelHelpers.export(exports, "extend", ()=>extend
);
parcelHelpers.export(exports, "generateCodeFrame", ()=>generateCodeFrame
);
parcelHelpers.export(exports, "getGlobalThis", ()=>getGlobalThis
);
parcelHelpers.export(exports, "hasChanged", ()=>hasChanged
);
parcelHelpers.export(exports, "hasOwn", ()=>hasOwn
);
parcelHelpers.export(exports, "hyphenate", ()=>hyphenate
);
parcelHelpers.export(exports, "includeBooleanAttr", ()=>includeBooleanAttr
);
parcelHelpers.export(exports, "invokeArrayFns", ()=>invokeArrayFns
);
parcelHelpers.export(exports, "isArray", ()=>isArray
);
parcelHelpers.export(exports, "isBooleanAttr", ()=>isBooleanAttr
);
parcelHelpers.export(exports, "isBuiltInDirective", ()=>isBuiltInDirective
);
parcelHelpers.export(exports, "isDate", ()=>isDate
);
parcelHelpers.export(exports, "isFunction", ()=>isFunction
);
parcelHelpers.export(exports, "isGloballyWhitelisted", ()=>isGloballyWhitelisted
);
parcelHelpers.export(exports, "isHTMLTag", ()=>isHTMLTag
);
parcelHelpers.export(exports, "isIntegerKey", ()=>isIntegerKey
);
parcelHelpers.export(exports, "isKnownHtmlAttr", ()=>isKnownHtmlAttr
);
parcelHelpers.export(exports, "isKnownSvgAttr", ()=>isKnownSvgAttr
);
parcelHelpers.export(exports, "isMap", ()=>isMap
);
parcelHelpers.export(exports, "isModelListener", ()=>isModelListener
);
parcelHelpers.export(exports, "isNoUnitNumericStyleProp", ()=>isNoUnitNumericStyleProp
);
parcelHelpers.export(exports, "isObject", ()=>isObject
);
parcelHelpers.export(exports, "isOn", ()=>isOn
);
parcelHelpers.export(exports, "isPlainObject", ()=>isPlainObject
);
parcelHelpers.export(exports, "isPromise", ()=>isPromise
);
parcelHelpers.export(exports, "isReservedProp", ()=>isReservedProp
);
parcelHelpers.export(exports, "isSSRSafeAttrName", ()=>isSSRSafeAttrName
);
parcelHelpers.export(exports, "isSVGTag", ()=>isSVGTag
);
parcelHelpers.export(exports, "isSet", ()=>isSet
);
parcelHelpers.export(exports, "isSpecialBooleanAttr", ()=>isSpecialBooleanAttr
);
parcelHelpers.export(exports, "isString", ()=>isString
);
parcelHelpers.export(exports, "isSymbol", ()=>isSymbol
);
parcelHelpers.export(exports, "isVoidTag", ()=>isVoidTag
);
parcelHelpers.export(exports, "looseEqual", ()=>looseEqual
);
parcelHelpers.export(exports, "looseIndexOf", ()=>looseIndexOf
);
parcelHelpers.export(exports, "makeMap", ()=>makeMap
);
parcelHelpers.export(exports, "normalizeClass", ()=>normalizeClass
);
parcelHelpers.export(exports, "normalizeProps", ()=>normalizeProps
);
parcelHelpers.export(exports, "normalizeStyle", ()=>normalizeStyle
);
parcelHelpers.export(exports, "objectToString", ()=>objectToString
);
parcelHelpers.export(exports, "parseStringStyle", ()=>parseStringStyle
);
parcelHelpers.export(exports, "propsToAttrMap", ()=>propsToAttrMap
);
parcelHelpers.export(exports, "remove", ()=>remove
);
parcelHelpers.export(exports, "slotFlagsText", ()=>slotFlagsText
);
parcelHelpers.export(exports, "stringifyStyle", ()=>stringifyStyle
);
parcelHelpers.export(exports, "toDisplayString", ()=>toDisplayString
);
parcelHelpers.export(exports, "toHandlerKey", ()=>toHandlerKey
);
parcelHelpers.export(exports, "toNumber", ()=>toNumber
);
parcelHelpers.export(exports, "toRawType", ()=>toRawType
);
parcelHelpers.export(exports, "toTypeString", ()=>toTypeString
);
var global = arguments[3];
/**
 * Make a map and return a function for checking if a key
 * is in that map.
 * IMPORTANT: all calls of this function must be prefixed with
 * \/\*#\_\_PURE\_\_\*\/
 * So that rollup can tree-shake them if necessary.
 */ function makeMap(str, expectsLowerCase) {
    const map = Object.create(null);
    const list = str.split(',');
    for(let i = 0; i < list.length; i++)map[list[i]] = true;
    return expectsLowerCase ? (val)=>!!map[val.toLowerCase()]
     : (val)=>!!map[val]
    ;
}
/**
 * dev only flag -> name mapping
 */ const PatchFlagNames = {
    [1 /* TEXT */ ]: `TEXT`,
    [2 /* CLASS */ ]: `CLASS`,
    [4 /* STYLE */ ]: `STYLE`,
    [8 /* PROPS */ ]: `PROPS`,
    [16 /* FULL_PROPS */ ]: `FULL_PROPS`,
    [32 /* HYDRATE_EVENTS */ ]: `HYDRATE_EVENTS`,
    [64 /* STABLE_FRAGMENT */ ]: `STABLE_FRAGMENT`,
    [128 /* KEYED_FRAGMENT */ ]: `KEYED_FRAGMENT`,
    [256 /* UNKEYED_FRAGMENT */ ]: `UNKEYED_FRAGMENT`,
    [512 /* NEED_PATCH */ ]: `NEED_PATCH`,
    [1024 /* DYNAMIC_SLOTS */ ]: `DYNAMIC_SLOTS`,
    [2048 /* DEV_ROOT_FRAGMENT */ ]: `DEV_ROOT_FRAGMENT`,
    [-1 /* HOISTED */ ]: `HOISTED`,
    [-2 /* BAIL */ ]: `BAIL`
};
/**
 * Dev only
 */ const slotFlagsText = {
    [1 /* STABLE */ ]: 'STABLE',
    [2 /* DYNAMIC */ ]: 'DYNAMIC',
    [3 /* FORWARDED */ ]: 'FORWARDED'
};
const GLOBALS_WHITE_LISTED = "Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt";
const isGloballyWhitelisted = /*#__PURE__*/ makeMap(GLOBALS_WHITE_LISTED);
const range = 2;
function generateCodeFrame(source, start = 0, end = source.length) {
    // Split the content into individual lines but capture the newline sequence
    // that separated each line. This is important because the actual sequence is
    // needed to properly take into account the full line length for offset
    // comparison
    let lines = source.split(/(\r?\n)/);
    // Separate the lines and newline sequences into separate arrays for easier referencing
    const newlineSequences = lines.filter((_, idx)=>idx % 2 === 1
    );
    lines = lines.filter((_, idx)=>idx % 2 === 0
    );
    let count = 0;
    const res = [];
    for(let i = 0; i < lines.length; i++){
        count += lines[i].length + (newlineSequences[i] && newlineSequences[i].length || 0);
        if (count >= start) {
            for(let j = i - range; j <= i + range || end > count; j++){
                if (j < 0 || j >= lines.length) continue;
                const line = j + 1;
                res.push(`${line}${' '.repeat(Math.max(3 - String(line).length, 0))}|  ${lines[j]}`);
                const lineLength = lines[j].length;
                const newLineSeqLength = newlineSequences[j] && newlineSequences[j].length || 0;
                if (j === i) {
                    // push underline
                    const pad = start - (count - (lineLength + newLineSeqLength));
                    const length = Math.max(1, end > count ? lineLength - pad : end - start);
                    res.push(`   |  ` + ' '.repeat(pad) + '^'.repeat(length));
                } else if (j > i) {
                    if (end > count) {
                        const length = Math.max(Math.min(end - count, lineLength), 1);
                        res.push(`   |  ` + '^'.repeat(length));
                    }
                    count += lineLength + newLineSeqLength;
                }
            }
            break;
        }
    }
    return res.join('\n');
}
/**
 * On the client we only need to offer special cases for boolean attributes that
 * have different names from their corresponding dom properties:
 * - itemscope -> N/A
 * - allowfullscreen -> allowFullscreen
 * - formnovalidate -> formNoValidate
 * - ismap -> isMap
 * - nomodule -> noModule
 * - novalidate -> noValidate
 * - readonly -> readOnly
 */ const specialBooleanAttrs = `itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly`;
const isSpecialBooleanAttr = /*#__PURE__*/ makeMap(specialBooleanAttrs);
/**
 * The full list is needed during SSR to produce the correct initial markup.
 */ const isBooleanAttr = /*#__PURE__*/ makeMap(specialBooleanAttrs + `,async,autofocus,autoplay,controls,default,defer,disabled,hidden,` + `loop,open,required,reversed,scoped,seamless,` + `checked,muted,multiple,selected`);
/**
 * Boolean attributes should be included if the value is truthy or ''.
 * e.g. `<select multiple>` compiles to `{ multiple: '' }`
 */ function includeBooleanAttr(value) {
    return !!value || value === '';
}
const unsafeAttrCharRE = /[>/="'\u0009\u000a\u000c\u0020]/;
const attrValidationCache = {};
function isSSRSafeAttrName(name) {
    if (attrValidationCache.hasOwnProperty(name)) return attrValidationCache[name];
    const isUnsafe = unsafeAttrCharRE.test(name);
    if (isUnsafe) console.error(`unsafe attribute name: ${name}`);
    return attrValidationCache[name] = !isUnsafe;
}
const propsToAttrMap = {
    acceptCharset: 'accept-charset',
    className: 'class',
    htmlFor: 'for',
    httpEquiv: 'http-equiv'
};
/**
 * CSS properties that accept plain numbers
 */ const isNoUnitNumericStyleProp = /*#__PURE__*/ makeMap(`animation-iteration-count,border-image-outset,border-image-slice,` + `border-image-width,box-flex,box-flex-group,box-ordinal-group,column-count,` + `columns,flex,flex-grow,flex-positive,flex-shrink,flex-negative,flex-order,` + `grid-row,grid-row-end,grid-row-span,grid-row-start,grid-column,` + `grid-column-end,grid-column-span,grid-column-start,font-weight,line-clamp,` + `line-height,opacity,order,orphans,tab-size,widows,z-index,zoom,` + // SVG
`fill-opacity,flood-opacity,stop-opacity,stroke-dasharray,stroke-dashoffset,` + `stroke-miterlimit,stroke-opacity,stroke-width`);
/**
 * Known attributes, this is used for stringification of runtime static nodes
 * so that we don't stringify bindings that cannot be set from HTML.
 * Don't also forget to allow `data-*` and `aria-*`!
 * Generated from https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes
 */ const isKnownHtmlAttr = /*#__PURE__*/ makeMap(`accept,accept-charset,accesskey,action,align,allow,alt,async,` + `autocapitalize,autocomplete,autofocus,autoplay,background,bgcolor,` + `border,buffered,capture,challenge,charset,checked,cite,class,code,` + `codebase,color,cols,colspan,content,contenteditable,contextmenu,controls,` + `coords,crossorigin,csp,data,datetime,decoding,default,defer,dir,dirname,` + `disabled,download,draggable,dropzone,enctype,enterkeyhint,for,form,` + `formaction,formenctype,formmethod,formnovalidate,formtarget,headers,` + `height,hidden,high,href,hreflang,http-equiv,icon,id,importance,integrity,` + `ismap,itemprop,keytype,kind,label,lang,language,loading,list,loop,low,` + `manifest,max,maxlength,minlength,media,min,multiple,muted,name,novalidate,` + `open,optimum,pattern,ping,placeholder,poster,preload,radiogroup,readonly,` + `referrerpolicy,rel,required,reversed,rows,rowspan,sandbox,scope,scoped,` + `selected,shape,size,sizes,slot,span,spellcheck,src,srcdoc,srclang,srcset,` + `start,step,style,summary,tabindex,target,title,translate,type,usemap,` + `value,width,wrap`);
/**
 * Generated from https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute
 */ const isKnownSvgAttr = /*#__PURE__*/ makeMap(`xmlns,accent-height,accumulate,additive,alignment-baseline,alphabetic,amplitude,` + `arabic-form,ascent,attributeName,attributeType,azimuth,baseFrequency,` + `baseline-shift,baseProfile,bbox,begin,bias,by,calcMode,cap-height,class,` + `clip,clipPathUnits,clip-path,clip-rule,color,color-interpolation,` + `color-interpolation-filters,color-profile,color-rendering,` + `contentScriptType,contentStyleType,crossorigin,cursor,cx,cy,d,decelerate,` + `descent,diffuseConstant,direction,display,divisor,dominant-baseline,dur,dx,` + `dy,edgeMode,elevation,enable-background,end,exponent,fill,fill-opacity,` + `fill-rule,filter,filterRes,filterUnits,flood-color,flood-opacity,` + `font-family,font-size,font-size-adjust,font-stretch,font-style,` + `font-variant,font-weight,format,from,fr,fx,fy,g1,g2,glyph-name,` + `glyph-orientation-horizontal,glyph-orientation-vertical,glyphRef,` + `gradientTransform,gradientUnits,hanging,height,href,hreflang,horiz-adv-x,` + `horiz-origin-x,id,ideographic,image-rendering,in,in2,intercept,k,k1,k2,k3,` + `k4,kernelMatrix,kernelUnitLength,kerning,keyPoints,keySplines,keyTimes,` + `lang,lengthAdjust,letter-spacing,lighting-color,limitingConeAngle,local,` + `marker-end,marker-mid,marker-start,markerHeight,markerUnits,markerWidth,` + `mask,maskContentUnits,maskUnits,mathematical,max,media,method,min,mode,` + `name,numOctaves,offset,opacity,operator,order,orient,orientation,origin,` + `overflow,overline-position,overline-thickness,panose-1,paint-order,path,` + `pathLength,patternContentUnits,patternTransform,patternUnits,ping,` + `pointer-events,points,pointsAtX,pointsAtY,pointsAtZ,preserveAlpha,` + `preserveAspectRatio,primitiveUnits,r,radius,referrerPolicy,refX,refY,rel,` + `rendering-intent,repeatCount,repeatDur,requiredExtensions,requiredFeatures,` + `restart,result,rotate,rx,ry,scale,seed,shape-rendering,slope,spacing,` + `specularConstant,specularExponent,speed,spreadMethod,startOffset,` + `stdDeviation,stemh,stemv,stitchTiles,stop-color,stop-opacity,` + `strikethrough-position,strikethrough-thickness,string,stroke,` + `stroke-dasharray,stroke-dashoffset,stroke-linecap,stroke-linejoin,` + `stroke-miterlimit,stroke-opacity,stroke-width,style,surfaceScale,` + `systemLanguage,tabindex,tableValues,target,targetX,targetY,text-anchor,` + `text-decoration,text-rendering,textLength,to,transform,transform-origin,` + `type,u1,u2,underline-position,underline-thickness,unicode,unicode-bidi,` + `unicode-range,units-per-em,v-alphabetic,v-hanging,v-ideographic,` + `v-mathematical,values,vector-effect,version,vert-adv-y,vert-origin-x,` + `vert-origin-y,viewBox,viewTarget,visibility,width,widths,word-spacing,` + `writing-mode,x,x-height,x1,x2,xChannelSelector,xlink:actuate,xlink:arcrole,` + `xlink:href,xlink:role,xlink:show,xlink:title,xlink:type,xml:base,xml:lang,` + `xml:space,y,y1,y2,yChannelSelector,z,zoomAndPan`);
function normalizeStyle(value) {
    if (isArray(value)) {
        const res = {};
        for(let i = 0; i < value.length; i++){
            const item = value[i];
            const normalized = isString(item) ? parseStringStyle(item) : normalizeStyle(item);
            if (normalized) for(const key in normalized)res[key] = normalized[key];
        }
        return res;
    } else if (isString(value)) return value;
    else if (isObject(value)) return value;
}
const listDelimiterRE = /;(?![^(]*\))/g;
const propertyDelimiterRE = /:(.+)/;
function parseStringStyle(cssText) {
    const ret = {};
    cssText.split(listDelimiterRE).forEach((item)=>{
        if (item) {
            const tmp = item.split(propertyDelimiterRE);
            tmp.length > 1 && (ret[tmp[0].trim()] = tmp[1].trim());
        }
    });
    return ret;
}
function stringifyStyle(styles) {
    let ret = '';
    if (!styles || isString(styles)) return ret;
    for(const key in styles){
        const value = styles[key];
        const normalizedKey = key.startsWith(`--`) ? key : hyphenate(key);
        if (isString(value) || typeof value === 'number' && isNoUnitNumericStyleProp(normalizedKey)) // only render valid values
        ret += `${normalizedKey}:${value};`;
    }
    return ret;
}
function normalizeClass(value) {
    let res = '';
    if (isString(value)) res = value;
    else if (isArray(value)) for(let i = 0; i < value.length; i++){
        const normalized = normalizeClass(value[i]);
        if (normalized) res += normalized + ' ';
    }
    else if (isObject(value)) {
        for(const name in value)if (value[name]) res += name + ' ';
    }
    return res.trim();
}
function normalizeProps(props) {
    if (!props) return null;
    let { class: klass , style  } = props;
    if (klass && !isString(klass)) props.class = normalizeClass(klass);
    if (style) props.style = normalizeStyle(style);
    return props;
}
// These tag configs are shared between compiler-dom and runtime-dom, so they
// https://developer.mozilla.org/en-US/docs/Web/HTML/Element
const HTML_TAGS = "html,body,base,head,link,meta,style,title,address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot";
// https://developer.mozilla.org/en-US/docs/Web/SVG/Element
const SVG_TAGS = "svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistanceLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view";
const VOID_TAGS = 'area,base,br,col,embed,hr,img,input,link,meta,param,source,track,wbr';
/**
 * Compiler only.
 * Do NOT use in runtime code paths unless behind `(process.env.NODE_ENV !== 'production')` flag.
 */ const isHTMLTag = /*#__PURE__*/ makeMap(HTML_TAGS);
/**
 * Compiler only.
 * Do NOT use in runtime code paths unless behind `(process.env.NODE_ENV !== 'production')` flag.
 */ const isSVGTag = /*#__PURE__*/ makeMap(SVG_TAGS);
/**
 * Compiler only.
 * Do NOT use in runtime code paths unless behind `(process.env.NODE_ENV !== 'production')` flag.
 */ const isVoidTag = /*#__PURE__*/ makeMap(VOID_TAGS);
const escapeRE = /["'&<>]/;
function escapeHtml(string) {
    const str = '' + string;
    const match = escapeRE.exec(str);
    if (!match) return str;
    let html = '';
    let escaped;
    let index;
    let lastIndex = 0;
    for(index = match.index; index < str.length; index++){
        switch(str.charCodeAt(index)){
            case 34:
                escaped = '&quot;';
                break;
            case 38:
                escaped = '&amp;';
                break;
            case 39:
                escaped = '&#39;';
                break;
            case 60:
                escaped = '&lt;';
                break;
            case 62:
                escaped = '&gt;';
                break;
            default:
                continue;
        }
        if (lastIndex !== index) html += str.slice(lastIndex, index);
        lastIndex = index + 1;
        html += escaped;
    }
    return lastIndex !== index ? html + str.slice(lastIndex, index) : html;
}
// https://www.w3.org/TR/html52/syntax.html#comments
const commentStripRE = /^-?>|<!--|-->|--!>|<!-$/g;
function escapeHtmlComment(src) {
    return src.replace(commentStripRE, '');
}
function looseCompareArrays(a, b) {
    if (a.length !== b.length) return false;
    let equal = true;
    for(let i = 0; equal && i < a.length; i++)equal = looseEqual(a[i], b[i]);
    return equal;
}
function looseEqual(a, b) {
    if (a === b) return true;
    let aValidType = isDate(a);
    let bValidType = isDate(b);
    if (aValidType || bValidType) return aValidType && bValidType ? a.getTime() === b.getTime() : false;
    aValidType = isArray(a);
    bValidType = isArray(b);
    if (aValidType || bValidType) return aValidType && bValidType ? looseCompareArrays(a, b) : false;
    aValidType = isObject(a);
    bValidType = isObject(b);
    if (aValidType || bValidType) {
        /* istanbul ignore if: this if will probably never be called */ if (!aValidType || !bValidType) return false;
        const aKeysCount = Object.keys(a).length;
        const bKeysCount = Object.keys(b).length;
        if (aKeysCount !== bKeysCount) return false;
        for(const key in a){
            const aHasKey = a.hasOwnProperty(key);
            const bHasKey = b.hasOwnProperty(key);
            if (aHasKey && !bHasKey || !aHasKey && bHasKey || !looseEqual(a[key], b[key])) return false;
        }
    }
    return String(a) === String(b);
}
function looseIndexOf(arr, val) {
    return arr.findIndex((item)=>looseEqual(item, val)
    );
}
/**
 * For converting {{ interpolation }} values to displayed strings.
 * @private
 */ const toDisplayString = (val)=>{
    return isString(val) ? val : val == null ? '' : isArray(val) || isObject(val) && (val.toString === objectToString || !isFunction(val.toString)) ? JSON.stringify(val, replacer, 2) : String(val);
};
const replacer = (_key, val1)=>{
    // can't use isRef here since @vue/shared has no deps
    if (val1 && val1.__v_isRef) return replacer(_key, val1.value);
    else if (isMap(val1)) return {
        [`Map(${val1.size})`]: [
            ...val1.entries()
        ].reduce((entries, [key, val])=>{
            entries[`${key} =>`] = val;
            return entries;
        }, {})
    };
    else if (isSet(val1)) return {
        [`Set(${val1.size})`]: [
            ...val1.values()
        ]
    };
    else if (isObject(val1) && !isArray(val1) && !isPlainObject(val1)) return String(val1);
    return val1;
};
const EMPTY_OBJ = Object.freeze({});
const EMPTY_ARR = Object.freeze([]);
const NOOP = ()=>{};
/**
 * Always return false.
 */ const NO = ()=>false
;
const onRE = /^on[^a-z]/;
const isOn = (key)=>onRE.test(key)
;
const isModelListener = (key)=>key.startsWith('onUpdate:')
;
const extend = Object.assign;
const remove = (arr, el)=>{
    const i = arr.indexOf(el);
    if (i > -1) arr.splice(i, 1);
};
const hasOwnProperty = Object.prototype.hasOwnProperty;
const hasOwn = (val, key)=>hasOwnProperty.call(val, key)
;
const isArray = Array.isArray;
const isMap = (val)=>toTypeString(val) === '[object Map]'
;
const isSet = (val)=>toTypeString(val) === '[object Set]'
;
const isDate = (val)=>val instanceof Date
;
const isFunction = (val)=>typeof val === 'function'
;
const isString = (val)=>typeof val === 'string'
;
const isSymbol = (val)=>typeof val === 'symbol'
;
const isObject = (val)=>val !== null && typeof val === 'object'
;
const isPromise = (val)=>{
    return isObject(val) && isFunction(val.then) && isFunction(val.catch);
};
const objectToString = Object.prototype.toString;
const toTypeString = (value)=>objectToString.call(value)
;
const toRawType = (value)=>{
    // extract "RawType" from strings like "[object RawType]"
    return toTypeString(value).slice(8, -1);
};
const isPlainObject = (val)=>toTypeString(val) === '[object Object]'
;
const isIntegerKey = (key)=>isString(key) && key !== 'NaN' && key[0] !== '-' && '' + parseInt(key, 10) === key
;
const isReservedProp = /*#__PURE__*/ makeMap(// the leading comma is intentional so empty string "" is also included
",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted");
const isBuiltInDirective = /*#__PURE__*/ makeMap('bind,cloak,else-if,else,for,html,if,model,on,once,pre,show,slot,text,memo');
const cacheStringFunction = (fn)=>{
    const cache = Object.create(null);
    return (str)=>{
        const hit = cache[str];
        return hit || (cache[str] = fn(str));
    };
};
const camelizeRE = /-(\w)/g;
/**
 * @private
 */ const camelize = cacheStringFunction((str)=>{
    return str.replace(camelizeRE, (_, c)=>c ? c.toUpperCase() : ''
    );
});
const hyphenateRE = /\B([A-Z])/g;
/**
 * @private
 */ const hyphenate = cacheStringFunction((str)=>str.replace(hyphenateRE, '-$1').toLowerCase()
);
/**
 * @private
 */ const capitalize = cacheStringFunction((str)=>str.charAt(0).toUpperCase() + str.slice(1)
);
/**
 * @private
 */ const toHandlerKey = cacheStringFunction((str)=>str ? `on${capitalize(str)}` : ``
);
// compare whether a value has changed, accounting for NaN.
const hasChanged = (value, oldValue)=>!Object.is(value, oldValue)
;
const invokeArrayFns = (fns, arg)=>{
    for(let i = 0; i < fns.length; i++)fns[i](arg);
};
const def = (obj, key, value)=>{
    Object.defineProperty(obj, key, {
        configurable: true,
        enumerable: false,
        value
    });
};
const toNumber = (val)=>{
    const n = parseFloat(val);
    return isNaN(n) ? val : n;
};
let _globalThis;
const getGlobalThis = ()=>{
    return _globalThis || (_globalThis = typeof globalThis !== 'undefined' ? globalThis : typeof self !== 'undefined' ? self : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : {});
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, '__esModule', {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === 'default' || key === '__esModule' || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"bmTmW":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "render", ()=>render
);
var _vue = require("vue");
const _hoisted_1 = {
    id: "app"
};
const _hoisted_2 = {
    class: "center-screen"
};
const _hoisted_3 = [
    "disabled"
];
function render(_ctx, _cache) {
    return _vue.openBlock(), _vue.createElementBlock("div", _hoisted_1, [
        _vue.createElementVNode("div", _hoisted_2, [
            _vue.createElementVNode("button", {
                onClick: _cache[0] || (_cache[0] = (...args)=>_ctx.onConnect && _ctx.onConnect(...args)
                ),
                disabled: _ctx.connected
            }, _vue.toDisplayString(_ctx.message), 9 /* TEXT, PROPS */ , _hoisted_3)
        ])
    ]);
}
if (module.hot) module.hot.accept(()=>{
    __VUE_HMR_RUNTIME__.rerender('bf2398-hmr', render);
});

},{"vue":"gzxs9","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8VovU":[function() {},{}],"diO36":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let NOOP = ()=>{};
exports.default = (script)=>{};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gLLPy":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _pusherJs = require("pusher-js");
var _vueEcho = require("./VueEcho");
var _vueEchoDefault = parcelHelpers.interopDefault(_vueEcho);
var _createMixin = require("./createMixin");
var _createMixinDefault = parcelHelpers.interopDefault(_createMixin);
function install(app, options) {
    const defaultOptions = {
        broadcaster: "pusher",
        disableStats: true,
        wsPort: 6001,
        wssPort: 6001,
        wsHost: "localhost",
        enabledTransports: [
            "ws",
            "flash"
        ],
        auth: {
            headers: {
                "X-App-ID": options.appID || ""
            }
        }
    };
    const echo = new _vueEchoDefault.default({
        ...defaultOptions,
        ...options
    });
    app.mixin(_createMixinDefault.default(echo));
}
exports.default = {
    install
};

},{"pusher-js":"gHGyJ","./createMixin":"5sSAl","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","./VueEcho":"14ofH"}],"gHGyJ":[function(require,module,exports) {
/*!
 * Pusher JavaScript Library v4.4.0
 * https://pusher.com/
 *
 * Copyright 2017, Pusher
 * Released under the MIT licence.
 */ (function webpackUniversalModuleDefinition(root, factory) {
    module.exports = factory();
})(this, function() {
    return /******/ function(modules) {
        /******/ // The module cache
        /******/ var installedModules = {};
        /******/ // The require function
        /******/ function __webpack_require__(moduleId) {
            /******/ // Check if module is in cache
            /******/ if (installedModules[moduleId]) /******/ return installedModules[moduleId].exports;
            /******/ // Create a new module (and put it into the cache)
            /******/ var module = installedModules[moduleId] = {
                /******/ exports: {},
                /******/ id: moduleId,
                /******/ loaded: false
            };
            /******/ // Execute the module function
            /******/ modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
            /******/ // Flag the module as loaded
            /******/ module.loaded = true;
            /******/ // Return the exports of the module
            /******/ return module.exports;
        /******/ }
        /******/ // expose the modules object (__webpack_modules__)
        /******/ __webpack_require__.m = modules;
        /******/ // expose the module cache
        /******/ __webpack_require__.c = installedModules;
        /******/ // __webpack_public_path__
        /******/ __webpack_require__.p = "";
        /******/ // Load entry module and return exports
        /******/ return __webpack_require__(0);
    /******/ }([
        /* 0 */ /***/ function(module, exports, __webpack_require__) {
            "use strict";
            var pusher_1 = __webpack_require__(1);
            module.exports = pusher_1["default"];
        /***/ },
        /* 1 */ /***/ function(module, exports, __webpack_require__) {
            "use strict";
            var runtime_1 = __webpack_require__(2);
            var Collections = __webpack_require__(9);
            var dispatcher_1 = __webpack_require__(24);
            var timeline_1 = __webpack_require__(39);
            var level_1 = __webpack_require__(40);
            var StrategyBuilder = __webpack_require__(41);
            var timers_1 = __webpack_require__(12);
            var defaults_1 = __webpack_require__(5);
            var DefaultConfig = __webpack_require__(71);
            var logger_1 = __webpack_require__(8);
            var factory_1 = __webpack_require__(43);
            var url_store_1 = __webpack_require__(14);
            var Pusher1 = function() {
                function Pusher(app_key, options1) {
                    var _this = this;
                    checkAppKey(app_key);
                    options1 = options1 || {};
                    if (!options1.cluster && !(options1.wsHost || options1.httpHost)) {
                        var suffix = url_store_1["default"].buildLogSuffix("javascriptQuickStart");
                        logger_1["default"].warn("You should always specify a cluster when connecting. " + suffix);
                    }
                    this.key = app_key;
                    this.config = Collections.extend(DefaultConfig.getGlobalConfig(), options1.cluster ? DefaultConfig.getClusterConfig(options1.cluster) : {}, options1);
                    this.channels = factory_1["default"].createChannels();
                    this.global_emitter = new dispatcher_1["default"]();
                    this.sessionID = Math.floor(Math.random() * 1000000000);
                    this.timeline = new timeline_1["default"](this.key, this.sessionID, {
                        cluster: this.config.cluster,
                        features: Pusher.getClientFeatures(),
                        params: this.config.timelineParams || {},
                        limit: 50,
                        level: level_1["default"].INFO,
                        version: defaults_1["default"].VERSION
                    });
                    if (!this.config.disableStats) this.timelineSender = factory_1["default"].createTimelineSender(this.timeline, {
                        host: this.config.statsHost,
                        path: "/timeline/v2/" + runtime_1["default"].TimelineTransport.name
                    });
                    var getStrategy = function(options) {
                        var config = Collections.extend({}, _this.config, options);
                        return StrategyBuilder.build(runtime_1["default"].getDefaultStrategy(config), config);
                    };
                    this.connection = factory_1["default"].createConnectionManager(this.key, Collections.extend({
                        getStrategy: getStrategy,
                        timeline: this.timeline,
                        activityTimeout: this.config.activity_timeout,
                        pongTimeout: this.config.pong_timeout,
                        unavailableTimeout: this.config.unavailable_timeout
                    }, this.config, {
                        useTLS: this.shouldUseTLS()
                    }));
                    this.connection.bind('connected', function() {
                        _this.subscribeAll();
                        if (_this.timelineSender) _this.timelineSender.send(_this.connection.isUsingTLS());
                    });
                    this.connection.bind('message', function(event) {
                        var eventName = event.event;
                        var internal = eventName.indexOf('pusher_internal:') === 0;
                        if (event.channel) {
                            var channel = _this.channel(event.channel);
                            if (channel) channel.handleEvent(event);
                        }
                        if (!internal) _this.global_emitter.emit(event.event, event.data);
                    });
                    this.connection.bind('connecting', function() {
                        _this.channels.disconnect();
                    });
                    this.connection.bind('disconnected', function() {
                        _this.channels.disconnect();
                    });
                    this.connection.bind('error', function(err) {
                        logger_1["default"].warn('Error', err);
                    });
                    Pusher.instances.push(this);
                    this.timeline.info({
                        instances: Pusher.instances.length
                    });
                    if (Pusher.isReady) this.connect();
                }
                Pusher.ready = function() {
                    Pusher.isReady = true;
                    for(var i = 0, l = Pusher.instances.length; i < l; i++)Pusher.instances[i].connect();
                };
                Pusher.log = function(message) {
                    if (Pusher.logToConsole && window.console && window.console.log) window.console.log(message);
                };
                Pusher.getClientFeatures = function() {
                    return Collections.keys(Collections.filterObject({
                        "ws": runtime_1["default"].Transports.ws
                    }, function(t) {
                        return t.isSupported({});
                    }));
                };
                Pusher.prototype.channel = function(name) {
                    return this.channels.find(name);
                };
                Pusher.prototype.allChannels = function() {
                    return this.channels.all();
                };
                Pusher.prototype.connect = function() {
                    this.connection.connect();
                    if (this.timelineSender) {
                        if (!this.timelineSenderTimer) {
                            var usingTLS = this.connection.isUsingTLS();
                            var timelineSender = this.timelineSender;
                            this.timelineSenderTimer = new timers_1.PeriodicTimer(60000, function() {
                                timelineSender.send(usingTLS);
                            });
                        }
                    }
                };
                Pusher.prototype.disconnect = function() {
                    this.connection.disconnect();
                    if (this.timelineSenderTimer) {
                        this.timelineSenderTimer.ensureAborted();
                        this.timelineSenderTimer = null;
                    }
                };
                Pusher.prototype.bind = function(event_name, callback, context) {
                    this.global_emitter.bind(event_name, callback, context);
                    return this;
                };
                Pusher.prototype.unbind = function(event_name, callback, context) {
                    this.global_emitter.unbind(event_name, callback, context);
                    return this;
                };
                Pusher.prototype.bind_global = function(callback) {
                    this.global_emitter.bind_global(callback);
                    return this;
                };
                Pusher.prototype.unbind_global = function(callback) {
                    this.global_emitter.unbind_global(callback);
                    return this;
                };
                Pusher.prototype.unbind_all = function(callback) {
                    this.global_emitter.unbind_all();
                    return this;
                };
                Pusher.prototype.subscribeAll = function() {
                    var channelName;
                    for(channelName in this.channels.channels)if (this.channels.channels.hasOwnProperty(channelName)) this.subscribe(channelName);
                };
                Pusher.prototype.subscribe = function(channel_name) {
                    var channel = this.channels.add(channel_name, this);
                    if (channel.subscriptionPending && channel.subscriptionCancelled) channel.reinstateSubscription();
                    else if (!channel.subscriptionPending && this.connection.state === "connected") channel.subscribe();
                    return channel;
                };
                Pusher.prototype.unsubscribe = function(channel_name) {
                    var channel = this.channels.find(channel_name);
                    if (channel && channel.subscriptionPending) channel.cancelSubscription();
                    else {
                        channel = this.channels.remove(channel_name);
                        if (channel && this.connection.state === "connected") channel.unsubscribe();
                    }
                };
                Pusher.prototype.send_event = function(event_name, data, channel) {
                    return this.connection.send_event(event_name, data, channel);
                };
                Pusher.prototype.shouldUseTLS = function() {
                    if (runtime_1["default"].getProtocol() === "https:") return true;
                    else if (this.config.forceTLS === true) return true;
                    else return Boolean(this.config.encrypted);
                };
                Pusher.instances = [];
                Pusher.isReady = false;
                Pusher.logToConsole = false;
                Pusher.Runtime = runtime_1["default"];
                Pusher.ScriptReceivers = runtime_1["default"].ScriptReceivers;
                Pusher.DependenciesReceivers = runtime_1["default"].DependenciesReceivers;
                Pusher.auth_callbacks = runtime_1["default"].auth_callbacks;
                return Pusher;
            }();
            exports.__esModule = true;
            exports["default"] = Pusher1;
            function checkAppKey(key) {
                if (key === null || key === undefined) throw "You must pass your app key when you instantiate Pusher.";
            }
            runtime_1["default"].setup(Pusher1);
        /***/ },
        /* 2 */ /***/ function(module, exports, __webpack_require__) {
            "use strict";
            var dependencies_1 = __webpack_require__(3);
            var xhr_auth_1 = __webpack_require__(7);
            var jsonp_auth_1 = __webpack_require__(15);
            var script_request_1 = __webpack_require__(16);
            var jsonp_request_1 = __webpack_require__(17);
            var script_receiver_factory_1 = __webpack_require__(4);
            var jsonp_timeline_1 = __webpack_require__(18);
            var transports_1 = __webpack_require__(19);
            var net_info_1 = __webpack_require__(26);
            var default_strategy_1 = __webpack_require__(27);
            var transport_connection_initializer_1 = __webpack_require__(28);
            var http_1 = __webpack_require__(29);
            var Runtime = {
                nextAuthCallbackID: 1,
                auth_callbacks: {},
                ScriptReceivers: script_receiver_factory_1.ScriptReceivers,
                DependenciesReceivers: dependencies_1.DependenciesReceivers,
                getDefaultStrategy: default_strategy_1["default"],
                Transports: transports_1["default"],
                transportConnectionInitializer: transport_connection_initializer_1["default"],
                HTTPFactory: http_1["default"],
                TimelineTransport: jsonp_timeline_1["default"],
                getXHRAPI: function() {
                    return window.XMLHttpRequest;
                },
                getWebSocketAPI: function() {
                    return window.WebSocket || window.MozWebSocket;
                },
                setup: function(PusherClass) {
                    var _this = this;
                    window.Pusher = PusherClass;
                    var initializeOnDocumentBody = function() {
                        _this.onDocumentBody(PusherClass.ready);
                    };
                    if (!window.JSON) dependencies_1.Dependencies.load("json2", {}, initializeOnDocumentBody);
                    else initializeOnDocumentBody();
                },
                getDocument: function() {
                    return document;
                },
                getProtocol: function() {
                    return this.getDocument().location.protocol;
                },
                getAuthorizers: function() {
                    return {
                        ajax: xhr_auth_1["default"],
                        jsonp: jsonp_auth_1["default"]
                    };
                },
                onDocumentBody: function(callback) {
                    var _this = this;
                    if (document.body) callback();
                    else setTimeout(function() {
                        _this.onDocumentBody(callback);
                    }, 0);
                },
                createJSONPRequest: function(url, data) {
                    return new jsonp_request_1["default"](url, data);
                },
                createScriptRequest: function(src) {
                    return new script_request_1["default"](src);
                },
                getLocalStorage: function() {
                    try {
                        return window.localStorage;
                    } catch (e) {
                        return undefined;
                    }
                },
                createXHR: function() {
                    if (this.getXHRAPI()) return this.createXMLHttpRequest();
                    else return this.createMicrosoftXHR();
                },
                createXMLHttpRequest: function() {
                    var Constructor = this.getXHRAPI();
                    return new Constructor();
                },
                createMicrosoftXHR: function() {
                    return new ActiveXObject("Microsoft.XMLHTTP");
                },
                getNetwork: function() {
                    return net_info_1.Network;
                },
                createWebSocket: function(url) {
                    var Constructor = this.getWebSocketAPI();
                    return new Constructor(url);
                },
                createSocketRequest: function(method, url) {
                    if (this.isXHRSupported()) return this.HTTPFactory.createXHR(method, url);
                    else if (this.isXDRSupported(url.indexOf("https:") === 0)) return this.HTTPFactory.createXDR(method, url);
                    else throw "Cross-origin HTTP requests are not supported";
                },
                isXHRSupported: function() {
                    var Constructor = this.getXHRAPI();
                    return Boolean(Constructor) && new Constructor().withCredentials !== undefined;
                },
                isXDRSupported: function(useTLS) {
                    var protocol = useTLS ? "https:" : "http:";
                    var documentProtocol = this.getProtocol();
                    return Boolean(window['XDomainRequest']) && documentProtocol === protocol;
                },
                addUnloadListener: function(listener) {
                    if (window.addEventListener !== undefined) window.addEventListener("unload", listener, false);
                    else if (window.attachEvent !== undefined) window.attachEvent("onunload", listener);
                },
                removeUnloadListener: function(listener) {
                    if (window.addEventListener !== undefined) window.removeEventListener("unload", listener, false);
                    else if (window.detachEvent !== undefined) window.detachEvent("onunload", listener);
                }
            };
            exports.__esModule = true;
            exports["default"] = Runtime;
        /***/ },
        /* 3 */ /***/ function(module, exports, __webpack_require__) {
            "use strict";
            var script_receiver_factory_1 = __webpack_require__(4);
            var defaults_1 = __webpack_require__(5);
            var dependency_loader_1 = __webpack_require__(6);
            exports.DependenciesReceivers = new script_receiver_factory_1.ScriptReceiverFactory("_pusher_dependencies", "Pusher.DependenciesReceivers");
            exports.Dependencies = new dependency_loader_1["default"]({
                cdn_http: defaults_1["default"].cdn_http,
                cdn_https: defaults_1["default"].cdn_https,
                version: defaults_1["default"].VERSION,
                suffix: defaults_1["default"].dependency_suffix,
                receivers: exports.DependenciesReceivers
            });
        /***/ },
        /* 4 */ /***/ function(module, exports) {
            "use strict";
            var ScriptReceiverFactory1 = function() {
                function ScriptReceiverFactory(prefix, name) {
                    this.lastId = 0;
                    this.prefix = prefix;
                    this.name = name;
                }
                ScriptReceiverFactory.prototype.create = function(callback) {
                    this.lastId++;
                    var number = this.lastId;
                    var id = this.prefix + number;
                    var name = this.name + "[" + number + "]";
                    var called = false;
                    var callbackWrapper = function() {
                        if (!called) {
                            callback.apply(null, arguments);
                            called = true;
                        }
                    };
                    this[number] = callbackWrapper;
                    return {
                        number: number,
                        id: id,
                        name: name,
                        callback: callbackWrapper
                    };
                };
                ScriptReceiverFactory.prototype.remove = function(receiver) {
                    delete this[receiver.number];
                };
                return ScriptReceiverFactory;
            }();
            exports.ScriptReceiverFactory = ScriptReceiverFactory1;
            exports.ScriptReceivers = new ScriptReceiverFactory1("_pusher_script_", "Pusher.ScriptReceivers");
        /***/ },
        /* 5 */ /***/ function(module, exports) {
            "use strict";
            var Defaults = {
                VERSION: "4.4.0",
                PROTOCOL: 7,
                host: 'ws.pusherapp.com',
                ws_port: 80,
                wss_port: 443,
                ws_path: '',
                sockjs_host: 'sockjs.pusher.com',
                sockjs_http_port: 80,
                sockjs_https_port: 443,
                sockjs_path: "/pusher",
                stats_host: 'stats.pusher.com',
                channel_auth_endpoint: '/pusher/auth',
                channel_auth_transport: 'ajax',
                activity_timeout: 120000,
                pong_timeout: 30000,
                unavailable_timeout: 10000,
                cdn_http: 'http://js.pusher.com',
                cdn_https: 'https://js.pusher.com',
                dependency_suffix: ''
            };
            exports.__esModule = true;
            exports["default"] = Defaults;
        /***/ },
        /* 6 */ /***/ function(module, exports, __webpack_require__) {
            "use strict";
            var script_receiver_factory_1 = __webpack_require__(4);
            var runtime_1 = __webpack_require__(2);
            var DependencyLoader1 = function() {
                function DependencyLoader(options) {
                    this.options = options;
                    this.receivers = options.receivers || script_receiver_factory_1.ScriptReceivers;
                    this.loading = {};
                }
                DependencyLoader.prototype.load = function(name, options, callback) {
                    var self = this;
                    if (self.loading[name] && self.loading[name].length > 0) self.loading[name].push(callback);
                    else {
                        self.loading[name] = [
                            callback
                        ];
                        var request = runtime_1["default"].createScriptRequest(self.getPath(name, options));
                        var receiver = self.receivers.create(function(error) {
                            self.receivers.remove(receiver);
                            if (self.loading[name]) {
                                var callbacks = self.loading[name];
                                delete self.loading[name];
                                var successCallback = function(wasSuccessful) {
                                    if (!wasSuccessful) request.cleanup();
                                };
                                for(var i = 0; i < callbacks.length; i++)callbacks[i](error, successCallback);
                            }
                        });
                        request.send(receiver);
                    }
                };
                DependencyLoader.prototype.getRoot = function(options) {
                    var cdn;
                    var protocol = runtime_1["default"].getDocument().location.protocol;
                    if (options && options.useTLS || protocol === "https:") cdn = this.options.cdn_https;
                    else cdn = this.options.cdn_http;
                    return cdn.replace(/\/*$/, "") + "/" + this.options.version;
                };
                DependencyLoader.prototype.getPath = function(name, options) {
                    return this.getRoot(options) + '/' + name + this.options.suffix + '.js';
                };
                return DependencyLoader;
            }();
            exports.__esModule = true;
            exports["default"] = DependencyLoader1;
        /***/ },
        /* 7 */ /***/ function(module, exports, __webpack_require__) {
            "use strict";
            var logger_1 = __webpack_require__(8);
            var runtime_1 = __webpack_require__(2);
            var url_store_1 = __webpack_require__(14);
            var ajax = function(context, socketId, callback) {
                var self = this, xhr;
                xhr = runtime_1["default"].createXHR();
                xhr.open("POST", self.options.authEndpoint, true);
                xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
                for(var headerName in this.authOptions.headers)xhr.setRequestHeader(headerName, this.authOptions.headers[headerName]);
                xhr.onreadystatechange = function() {
                    if (xhr.readyState === 4) {
                        if (xhr.status === 200) {
                            var data, parsed = false;
                            try {
                                data = JSON.parse(xhr.responseText);
                                parsed = true;
                            } catch (e) {
                                callback(true, 'JSON returned from webapp was invalid, yet status code was 200. Data was: ' + xhr.responseText);
                            }
                            if (parsed) callback(false, data);
                        } else {
                            var suffix = url_store_1["default"].buildLogSuffix("authenticationEndpoint");
                            logger_1["default"].warn("Couldn't retrieve authentication info. " + xhr.status + ("Clients must be authenticated to join private or presence channels. " + suffix));
                            callback(true, xhr.status);
                        }
                    }
                };
                xhr.send(this.composeQuery(socketId));
                return xhr;
            };
            exports.__esModule = true;
            exports["default"] = ajax;
        /***/ },
        /* 8 */ /***/ function(module, exports, __webpack_require__) {
            "use strict";
            var collections_1 = __webpack_require__(9);
            var pusher_1 = __webpack_require__(1);
            var Logger = {
                debug: function() {
                    var args = [];
                    for(var _i = 0; _i < arguments.length; _i++)args[_i - 0] = arguments[_i];
                    if (!pusher_1["default"].log) return;
                    pusher_1["default"].log(collections_1.stringify.apply(this, arguments));
                },
                warn: function() {
                    var args = [];
                    for(var _i = 0; _i < arguments.length; _i++)args[_i - 0] = arguments[_i];
                    var message = collections_1.stringify.apply(this, arguments);
                    if (pusher_1["default"].log) pusher_1["default"].log(message);
                    else if (window.console) {
                        if (window.console.warn) window.console.warn(message);
                        else if (window.console.log) window.console.log(message);
                    }
                }
            };
            exports.__esModule = true;
            exports["default"] = Logger;
        /***/ },
        /* 9 */ /***/ function(module, exports, __webpack_require__) {
            "use strict";
            var base64_1 = __webpack_require__(10);
            var util_1 = __webpack_require__(11);
            function extend(target) {
                var sources = [];
                for(var _i = 1; _i < arguments.length; _i++)sources[_i - 1] = arguments[_i];
                for(var i = 0; i < sources.length; i++){
                    var extensions = sources[i];
                    for(var property in extensions)if (extensions[property] && extensions[property].constructor && extensions[property].constructor === Object) target[property] = extend(target[property] || {}, extensions[property]);
                    else target[property] = extensions[property];
                }
                return target;
            }
            exports.extend = extend;
            function stringify() {
                var m = [
                    "Pusher"
                ];
                for(var i = 0; i < arguments.length; i++)if (typeof arguments[i] === "string") m.push(arguments[i]);
                else m.push(safeJSONStringify(arguments[i]));
                return m.join(" : ");
            }
            exports.stringify = stringify;
            function arrayIndexOf(array, item) {
                var nativeIndexOf = Array.prototype.indexOf;
                if (array === null) return -1;
                if (nativeIndexOf && array.indexOf === nativeIndexOf) return array.indexOf(item);
                for(var i = 0, l = array.length; i < l; i++){
                    if (array[i] === item) return i;
                }
                return -1;
            }
            exports.arrayIndexOf = arrayIndexOf;
            function objectApply(object, f) {
                for(var key in object)if (Object.prototype.hasOwnProperty.call(object, key)) f(object[key], key, object);
            }
            exports.objectApply = objectApply;
            function keys1(object) {
                var keys = [];
                objectApply(object, function(_, key) {
                    keys.push(key);
                });
                return keys;
            }
            exports.keys = keys1;
            function values1(object) {
                var values = [];
                objectApply(object, function(value) {
                    values.push(value);
                });
                return values;
            }
            exports.values = values1;
            function apply(array, f, context) {
                for(var i = 0; i < array.length; i++)f.call(context || window, array[i], i, array);
            }
            exports.apply = apply;
            function map(array, f) {
                var result = [];
                for(var i = 0; i < array.length; i++)result.push(f(array[i], i, array, result));
                return result;
            }
            exports.map = map;
            function mapObject(object, f) {
                var result = {};
                objectApply(object, function(value, key) {
                    result[key] = f(value);
                });
                return result;
            }
            exports.mapObject = mapObject;
            function filter(array, test) {
                test = test || function(value) {
                    return !!value;
                };
                var result = [];
                for(var i = 0; i < array.length; i++)if (test(array[i], i, array, result)) result.push(array[i]);
                return result;
            }
            exports.filter = filter;
            function filterObject(object, test) {
                var result = {};
                objectApply(object, function(value, key) {
                    if (test && test(value, key, object, result) || Boolean(value)) result[key] = value;
                });
                return result;
            }
            exports.filterObject = filterObject;
            function flatten(object) {
                var result = [];
                objectApply(object, function(value, key) {
                    result.push([
                        key,
                        value
                    ]);
                });
                return result;
            }
            exports.flatten = flatten;
            function any(array, test) {
                for(var i = 0; i < array.length; i++){
                    if (test(array[i], i, array)) return true;
                }
                return false;
            }
            exports.any = any;
            function all(array, test) {
                for(var i = 0; i < array.length; i++){
                    if (!test(array[i], i, array)) return false;
                }
                return true;
            }
            exports.all = all;
            function encodeParamsObject(data) {
                return mapObject(data, function(value) {
                    if (typeof value === "object") value = safeJSONStringify(value);
                    return encodeURIComponent(base64_1["default"](value.toString()));
                });
            }
            exports.encodeParamsObject = encodeParamsObject;
            function buildQueryString(data) {
                var params = filterObject(data, function(value) {
                    return value !== undefined;
                });
                var query = map(flatten(encodeParamsObject(params)), util_1["default"].method("join", "=")).join("&");
                return query;
            }
            exports.buildQueryString = buildQueryString;
            function decycleObject(object) {
                var objects = [], paths = [];
                return function derez(value, path) {
                    var i, name, nu;
                    switch(typeof value){
                        case 'object':
                            if (!value) return null;
                            for(i = 0; i < objects.length; i += 1){
                                if (objects[i] === value) return {
                                    $ref: paths[i]
                                };
                            }
                            objects.push(value);
                            paths.push(path);
                            if (Object.prototype.toString.apply(value) === '[object Array]') {
                                nu = [];
                                for(i = 0; i < value.length; i += 1)nu[i] = derez(value[i], path + '[' + i + ']');
                            } else {
                                nu = {};
                                for(name in value)if (Object.prototype.hasOwnProperty.call(value, name)) nu[name] = derez(value[name], path + '[' + JSON.stringify(name) + ']');
                            }
                            return nu;
                        case 'number':
                        case 'string':
                        case 'boolean':
                            return value;
                    }
                }(object, '$');
            }
            exports.decycleObject = decycleObject;
            function safeJSONStringify(source) {
                try {
                    return JSON.stringify(source);
                } catch (e) {
                    return JSON.stringify(decycleObject(source));
                }
            }
            exports.safeJSONStringify = safeJSONStringify;
        /***/ },
        /* 10 */ /***/ function(module, exports, __webpack_require__) {
            "use strict";
            function encode(s) {
                return btoa(utob(s));
            }
            exports.__esModule = true;
            exports["default"] = encode;
            var fromCharCode = String.fromCharCode;
            var b64chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
            var b64tab = {};
            for(var i = 0, l = b64chars.length; i < l; i++)b64tab[b64chars.charAt(i)] = i;
            var cb_utob = function(c) {
                var cc = c.charCodeAt(0);
                return cc < 128 ? c : cc < 2048 ? fromCharCode(192 | cc >>> 6) + fromCharCode(128 | cc & 63) : fromCharCode(224 | cc >>> 12 & 15) + fromCharCode(128 | cc >>> 6 & 63) + fromCharCode(128 | cc & 63);
            };
            var utob = function(u) {
                return u.replace(/[^\x00-\x7F]/g, cb_utob);
            };
            var cb_encode = function(ccc) {
                var padlen = [
                    0,
                    2,
                    1
                ][ccc.length % 3];
                var ord = ccc.charCodeAt(0) << 16 | (ccc.length > 1 ? ccc.charCodeAt(1) : 0) << 8 | (ccc.length > 2 ? ccc.charCodeAt(2) : 0);
                var chars = [
                    b64chars.charAt(ord >>> 18),
                    b64chars.charAt(ord >>> 12 & 63),
                    padlen >= 2 ? '=' : b64chars.charAt(ord >>> 6 & 63),
                    padlen >= 1 ? '=' : b64chars.charAt(ord & 63)
                ];
                return chars.join('');
            };
            var btoa = window.btoa || function(b) {
                return b.replace(/[\s\S]{1,3}/g, cb_encode);
            };
        /***/ },
        /* 11 */ /***/ function(module, exports, __webpack_require__) {
            "use strict";
            var timers_1 = __webpack_require__(12);
            var Util = {
                now: function() {
                    if (Date.now) return Date.now();
                    else return new Date().valueOf();
                },
                defer: function(callback) {
                    return new timers_1.OneOffTimer(0, callback);
                },
                method: function(name) {
                    var args = [];
                    for(var _i = 1; _i < arguments.length; _i++)args[_i - 1] = arguments[_i];
                    var boundArguments = Array.prototype.slice.call(arguments, 1);
                    return function(object) {
                        return object[name].apply(object, boundArguments.concat(arguments));
                    };
                }
            };
            exports.__esModule = true;
            exports["default"] = Util;
        /***/ },
        /* 12 */ /***/ function(module, exports, __webpack_require__) {
            "use strict";
            var __extends = this && this.__extends || function(d, b) {
                for(var p in b)if (b.hasOwnProperty(p)) d[p] = b[p];
                function __() {
                    this.constructor = d;
                }
                d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
            };
            var abstract_timer_1 = __webpack_require__(13);
            function clearTimeout(timer) {
                window.clearTimeout(timer);
            }
            function clearInterval(timer) {
                window.clearInterval(timer);
            }
            var OneOffTimer1 = function(_super) {
                __extends(OneOffTimer, _super);
                function OneOffTimer(delay, callback) {
                    _super.call(this, setTimeout, clearTimeout, delay, function(timer) {
                        callback();
                        return null;
                    });
                }
                return OneOffTimer;
            }(abstract_timer_1["default"]);
            exports.OneOffTimer = OneOffTimer1;
            var PeriodicTimer1 = function(_super) {
                __extends(PeriodicTimer, _super);
                function PeriodicTimer(delay, callback) {
                    _super.call(this, setInterval, clearInterval, delay, function(timer) {
                        callback();
                        return timer;
                    });
                }
                return PeriodicTimer;
            }(abstract_timer_1["default"]);
            exports.PeriodicTimer = PeriodicTimer1;
        /***/ },
        /* 13 */ /***/ function(module, exports) {
            "use strict";
            var Timer1 = function() {
                function Timer(set, clear, delay, callback) {
                    var _this = this;
                    this.clear = clear;
                    this.timer = set(function() {
                        if (_this.timer) _this.timer = callback(_this.timer);
                    }, delay);
                }
                Timer.prototype.isRunning = function() {
                    return this.timer !== null;
                };
                Timer.prototype.ensureAborted = function() {
                    if (this.timer) {
                        this.clear(this.timer);
                        this.timer = null;
                    }
                };
                return Timer;
            }();
            exports.__esModule = true;
            exports["default"] = Timer1;
        /***/ },
        /* 14 */ /***/ function(module, exports) {
            "use strict";
            var urlStore = {
                baseUrl: "https://pusher.com",
                urls: {
                    authenticationEndpoint: {
                        path: "/docs/authenticating_users"
                    },
                    javascriptQuickStart: {
                        path: "/docs/javascript_quick_start"
                    },
                    triggeringClientEvents: {
                        path: "/docs/client_api_guide/client_events#trigger-events"
                    }
                }
            };
            var buildLogSuffix = function(key) {
                var urlPrefix = "See:";
                var urlObj = urlStore.urls[key];
                if (!urlObj) return "";
                var url;
                if (urlObj.fullUrl) url = urlObj.fullUrl;
                else if (urlObj.path) url = urlStore.baseUrl + urlObj.path;
                if (!url) return "";
                return urlPrefix + " " + url;
            };
            exports.__esModule = true;
            exports["default"] = {
                buildLogSuffix: buildLogSuffix
            };
        /***/ },
        /* 15 */ /***/ function(module, exports, __webpack_require__) {
            "use strict";
            var logger_1 = __webpack_require__(8);
            var jsonp = function(context, socketId, callback) {
                if (this.authOptions.headers !== undefined) logger_1["default"].warn("Warn", "To send headers with the auth request, you must use AJAX, rather than JSONP.");
                var callbackName = context.nextAuthCallbackID.toString();
                context.nextAuthCallbackID++;
                var document = context.getDocument();
                var script = document.createElement("script");
                context.auth_callbacks[callbackName] = function(data) {
                    callback(false, data);
                };
                var callback_name = "Pusher.auth_callbacks['" + callbackName + "']";
                script.src = this.options.authEndpoint + '?callback=' + encodeURIComponent(callback_name) + '&' + this.composeQuery(socketId);
                var head = document.getElementsByTagName("head")[0] || document.documentElement;
                head.insertBefore(script, head.firstChild);
            };
            exports.__esModule = true;
            exports["default"] = jsonp;
        /***/ },
        /* 16 */ /***/ function(module, exports) {
            "use strict";
            var ScriptRequest1 = function() {
                function ScriptRequest(src) {
                    this.src = src;
                }
                ScriptRequest.prototype.send = function(receiver) {
                    var self = this;
                    var errorString = "Error loading " + self.src;
                    self.script = document.createElement("script");
                    self.script.id = receiver.id;
                    self.script.src = self.src;
                    self.script.type = "text/javascript";
                    self.script.charset = "UTF-8";
                    if (self.script.addEventListener) {
                        self.script.onerror = function() {
                            receiver.callback(errorString);
                        };
                        self.script.onload = function() {
                            receiver.callback(null);
                        };
                    } else self.script.onreadystatechange = function() {
                        if (self.script.readyState === 'loaded' || self.script.readyState === 'complete') receiver.callback(null);
                    };
                    if (self.script.async === undefined && document.attachEvent && /opera/i.test(navigator.userAgent)) {
                        self.errorScript = document.createElement("script");
                        self.errorScript.id = receiver.id + "_error";
                        self.errorScript.text = receiver.name + "('" + errorString + "');";
                        self.script.async = self.errorScript.async = false;
                    } else self.script.async = true;
                    var head = document.getElementsByTagName('head')[0];
                    head.insertBefore(self.script, head.firstChild);
                    if (self.errorScript) head.insertBefore(self.errorScript, self.script.nextSibling);
                };
                ScriptRequest.prototype.cleanup = function() {
                    if (this.script) {
                        this.script.onload = this.script.onerror = null;
                        this.script.onreadystatechange = null;
                    }
                    if (this.script && this.script.parentNode) this.script.parentNode.removeChild(this.script);
                    if (this.errorScript && this.errorScript.parentNode) this.errorScript.parentNode.removeChild(this.errorScript);
                    this.script = null;
                    this.errorScript = null;
                };
                return ScriptRequest;
            }();
            exports.__esModule = true;
            exports["default"] = ScriptRequest1;
        /***/ },
        /* 17 */ /***/ function(module, exports, __webpack_require__) {
            "use strict";
            var Collections = __webpack_require__(9);
            var runtime_1 = __webpack_require__(2);
            var JSONPRequest1 = function() {
                function JSONPRequest(url, data) {
                    this.url = url;
                    this.data = data;
                }
                JSONPRequest.prototype.send = function(receiver) {
                    if (this.request) return;
                    var query = Collections.buildQueryString(this.data);
                    var url = this.url + "/" + receiver.number + "?" + query;
                    this.request = runtime_1["default"].createScriptRequest(url);
                    this.request.send(receiver);
                };
                JSONPRequest.prototype.cleanup = function() {
                    if (this.request) this.request.cleanup();
                };
                return JSONPRequest;
            }();
            exports.__esModule = true;
            exports["default"] = JSONPRequest1;
        /***/ },
        /* 18 */ /***/ function(module, exports, __webpack_require__) {
            "use strict";
            var runtime_1 = __webpack_require__(2);
            var script_receiver_factory_1 = __webpack_require__(4);
            var getAgent = function(sender, useTLS) {
                return function(data, callback) {
                    var scheme = "http" + (useTLS ? "s" : "") + "://";
                    var url = scheme + (sender.host || sender.options.host) + sender.options.path;
                    var request = runtime_1["default"].createJSONPRequest(url, data);
                    var receiver = runtime_1["default"].ScriptReceivers.create(function(error, result) {
                        script_receiver_factory_1.ScriptReceivers.remove(receiver);
                        request.cleanup();
                        if (result && result.host) sender.host = result.host;
                        if (callback) callback(error, result);
                    });
                    request.send(receiver);
                };
            };
            var jsonp = {
                name: 'jsonp',
                getAgent: getAgent
            };
            exports.__esModule = true;
            exports["default"] = jsonp;
        /***/ },
        /* 19 */ /***/ function(module, exports, __webpack_require__) {
            "use strict";
            var transports_1 = __webpack_require__(20);
            var transport_1 = __webpack_require__(22);
            var URLSchemes = __webpack_require__(21);
            var runtime_1 = __webpack_require__(2);
            var dependencies_1 = __webpack_require__(3);
            var Collections = __webpack_require__(9);
            var SockJSTransport = new transport_1["default"]({
                file: "sockjs",
                urls: URLSchemes.sockjs,
                handlesActivityChecks: true,
                supportsPing: false,
                isSupported: function() {
                    return true;
                },
                isInitialized: function() {
                    return window.SockJS !== undefined;
                },
                getSocket: function(url, options) {
                    return new window.SockJS(url, null, {
                        js_path: dependencies_1.Dependencies.getPath("sockjs", {
                            useTLS: options.useTLS
                        }),
                        ignore_null_origin: options.ignoreNullOrigin
                    });
                },
                beforeOpen: function(socket, path) {
                    socket.send(JSON.stringify({
                        path: path
                    }));
                }
            });
            var xdrConfiguration = {
                isSupported: function(environment) {
                    var yes = runtime_1["default"].isXDRSupported(environment.useTLS);
                    return yes;
                }
            };
            var XDRStreamingTransport = new transport_1["default"](Collections.extend({}, transports_1.streamingConfiguration, xdrConfiguration));
            var XDRPollingTransport = new transport_1["default"](Collections.extend({}, transports_1.pollingConfiguration, xdrConfiguration));
            transports_1["default"].xdr_streaming = XDRStreamingTransport;
            transports_1["default"].xdr_polling = XDRPollingTransport;
            transports_1["default"].sockjs = SockJSTransport;
            exports.__esModule = true;
            exports["default"] = transports_1["default"];
        /***/ },
        /* 20 */ /***/ function(module, exports, __webpack_require__) {
            "use strict";
            var URLSchemes = __webpack_require__(21);
            var transport_1 = __webpack_require__(22);
            var Collections = __webpack_require__(9);
            var runtime_1 = __webpack_require__(2);
            var WSTransport = new transport_1["default"]({
                urls: URLSchemes.ws,
                handlesActivityChecks: false,
                supportsPing: false,
                isInitialized: function() {
                    return Boolean(runtime_1["default"].getWebSocketAPI());
                },
                isSupported: function() {
                    return Boolean(runtime_1["default"].getWebSocketAPI());
                },
                getSocket: function(url) {
                    return runtime_1["default"].createWebSocket(url);
                }
            });
            var httpConfiguration = {
                urls: URLSchemes.http,
                handlesActivityChecks: false,
                supportsPing: true,
                isInitialized: function() {
                    return true;
                }
            };
            exports.streamingConfiguration = Collections.extend({
                getSocket: function(url) {
                    return runtime_1["default"].HTTPFactory.createStreamingSocket(url);
                }
            }, httpConfiguration);
            exports.pollingConfiguration = Collections.extend({
                getSocket: function(url) {
                    return runtime_1["default"].HTTPFactory.createPollingSocket(url);
                }
            }, httpConfiguration);
            var xhrConfiguration = {
                isSupported: function() {
                    return runtime_1["default"].isXHRSupported();
                }
            };
            var XHRStreamingTransport = new transport_1["default"](Collections.extend({}, exports.streamingConfiguration, xhrConfiguration));
            var XHRPollingTransport = new transport_1["default"](Collections.extend({}, exports.pollingConfiguration, xhrConfiguration));
            var Transports = {
                ws: WSTransport,
                xhr_streaming: XHRStreamingTransport,
                xhr_polling: XHRPollingTransport
            };
            exports.__esModule = true;
            exports["default"] = Transports;
        /***/ },
        /* 21 */ /***/ function(module, exports, __webpack_require__) {
            "use strict";
            var defaults_1 = __webpack_require__(5);
            function getGenericURL(baseScheme, params, path) {
                var scheme = baseScheme + (params.useTLS ? "s" : "");
                var host = params.useTLS ? params.hostTLS : params.hostNonTLS;
                return scheme + "://" + host + path;
            }
            function getGenericPath(key, queryString) {
                var path = "/app/" + key;
                var query = "?protocol=" + defaults_1["default"].PROTOCOL + "&client=js" + "&version=" + defaults_1["default"].VERSION + (queryString ? "&" + queryString : "");
                return path + query;
            }
            exports.ws = {
                getInitial: function(key, params) {
                    var path = (params.httpPath || "") + getGenericPath(key, "flash=false");
                    return getGenericURL("ws", params, path);
                }
            };
            exports.http = {
                getInitial: function(key, params) {
                    var path = (params.httpPath || "/pusher") + getGenericPath(key);
                    return getGenericURL("http", params, path);
                }
            };
            exports.sockjs = {
                getInitial: function(key, params) {
                    return getGenericURL("http", params, params.httpPath || "/pusher");
                },
                getPath: function(key, params) {
                    return getGenericPath(key);
                }
            };
        /***/ },
        /* 22 */ /***/ function(module, exports, __webpack_require__) {
            "use strict";
            var transport_connection_1 = __webpack_require__(23);
            var Transport1 = function() {
                function Transport(hooks) {
                    this.hooks = hooks;
                }
                Transport.prototype.isSupported = function(environment) {
                    return this.hooks.isSupported(environment);
                };
                Transport.prototype.createConnection = function(name, priority, key, options) {
                    return new transport_connection_1["default"](this.hooks, name, priority, key, options);
                };
                return Transport;
            }();
            exports.__esModule = true;
            exports["default"] = Transport1;
        /***/ },
        /* 23 */ /***/ function(module, exports, __webpack_require__) {
            "use strict";
            var __extends = this && this.__extends || function(d, b) {
                for(var p in b)if (b.hasOwnProperty(p)) d[p] = b[p];
                function __() {
                    this.constructor = d;
                }
                d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
            };
            var util_1 = __webpack_require__(11);
            var Collections = __webpack_require__(9);
            var dispatcher_1 = __webpack_require__(24);
            var logger_1 = __webpack_require__(8);
            var runtime_1 = __webpack_require__(2);
            var TransportConnection1 = function(_super) {
                __extends(TransportConnection, _super);
                function TransportConnection(hooks, name, priority, key, options) {
                    _super.call(this);
                    this.initialize = runtime_1["default"].transportConnectionInitializer;
                    this.hooks = hooks;
                    this.name = name;
                    this.priority = priority;
                    this.key = key;
                    this.options = options;
                    this.state = "new";
                    this.timeline = options.timeline;
                    this.activityTimeout = options.activityTimeout;
                    this.id = this.timeline.generateUniqueID();
                }
                TransportConnection.prototype.handlesActivityChecks = function() {
                    return Boolean(this.hooks.handlesActivityChecks);
                };
                TransportConnection.prototype.supportsPing = function() {
                    return Boolean(this.hooks.supportsPing);
                };
                TransportConnection.prototype.connect = function() {
                    var _this = this;
                    if (this.socket || this.state !== "initialized") return false;
                    var url = this.hooks.urls.getInitial(this.key, this.options);
                    try {
                        this.socket = this.hooks.getSocket(url, this.options);
                    } catch (e) {
                        util_1["default"].defer(function() {
                            _this.onError(e);
                            _this.changeState("closed");
                        });
                        return false;
                    }
                    this.bindListeners();
                    logger_1["default"].debug("Connecting", {
                        transport: this.name,
                        url: url
                    });
                    this.changeState("connecting");
                    return true;
                };
                TransportConnection.prototype.close = function() {
                    if (this.socket) {
                        this.socket.close();
                        return true;
                    } else return false;
                };
                TransportConnection.prototype.send = function(data) {
                    var _this = this;
                    if (this.state === "open") {
                        util_1["default"].defer(function() {
                            if (_this.socket) _this.socket.send(data);
                        });
                        return true;
                    } else return false;
                };
                TransportConnection.prototype.ping = function() {
                    if (this.state === "open" && this.supportsPing()) this.socket.ping();
                };
                TransportConnection.prototype.onOpen = function() {
                    if (this.hooks.beforeOpen) this.hooks.beforeOpen(this.socket, this.hooks.urls.getPath(this.key, this.options));
                    this.changeState("open");
                    this.socket.onopen = undefined;
                };
                TransportConnection.prototype.onError = function(error) {
                    this.emit("error", {
                        type: 'WebSocketError',
                        error: error
                    });
                    this.timeline.error(this.buildTimelineMessage({
                        error: error.toString()
                    }));
                };
                TransportConnection.prototype.onClose = function(closeEvent) {
                    if (closeEvent) this.changeState("closed", {
                        code: closeEvent.code,
                        reason: closeEvent.reason,
                        wasClean: closeEvent.wasClean
                    });
                    else this.changeState("closed");
                    this.unbindListeners();
                    this.socket = undefined;
                };
                TransportConnection.prototype.onMessage = function(message) {
                    this.emit("message", message);
                };
                TransportConnection.prototype.onActivity = function() {
                    this.emit("activity");
                };
                TransportConnection.prototype.bindListeners = function() {
                    var _this = this;
                    this.socket.onopen = function() {
                        _this.onOpen();
                    };
                    this.socket.onerror = function(error) {
                        _this.onError(error);
                    };
                    this.socket.onclose = function(closeEvent) {
                        _this.onClose(closeEvent);
                    };
                    this.socket.onmessage = function(message) {
                        _this.onMessage(message);
                    };
                    if (this.supportsPing()) this.socket.onactivity = function() {
                        _this.onActivity();
                    };
                };
                TransportConnection.prototype.unbindListeners = function() {
                    if (this.socket) {
                        this.socket.onopen = undefined;
                        this.socket.onerror = undefined;
                        this.socket.onclose = undefined;
                        this.socket.onmessage = undefined;
                        if (this.supportsPing()) this.socket.onactivity = undefined;
                    }
                };
                TransportConnection.prototype.changeState = function(state, params) {
                    this.state = state;
                    this.timeline.info(this.buildTimelineMessage({
                        state: state,
                        params: params
                    }));
                    this.emit(state, params);
                };
                TransportConnection.prototype.buildTimelineMessage = function(message) {
                    return Collections.extend({
                        cid: this.id
                    }, message);
                };
                return TransportConnection;
            }(dispatcher_1["default"]);
            exports.__esModule = true;
            exports["default"] = TransportConnection1;
        /***/ },
        /* 24 */ /***/ function(module, exports, __webpack_require__) {
            "use strict";
            var Collections = __webpack_require__(9);
            var callback_registry_1 = __webpack_require__(25);
            var Dispatcher1 = function() {
                function Dispatcher(failThrough) {
                    this.callbacks = new callback_registry_1["default"]();
                    this.global_callbacks = [];
                    this.failThrough = failThrough;
                }
                Dispatcher.prototype.bind = function(eventName, callback, context) {
                    this.callbacks.add(eventName, callback, context);
                    return this;
                };
                Dispatcher.prototype.bind_global = function(callback) {
                    this.global_callbacks.push(callback);
                    return this;
                };
                Dispatcher.prototype.unbind = function(eventName, callback, context) {
                    this.callbacks.remove(eventName, callback, context);
                    return this;
                };
                Dispatcher.prototype.unbind_global = function(callback) {
                    if (!callback) {
                        this.global_callbacks = [];
                        return this;
                    }
                    this.global_callbacks = Collections.filter(this.global_callbacks || [], function(c) {
                        return c !== callback;
                    });
                    return this;
                };
                Dispatcher.prototype.unbind_all = function() {
                    this.unbind();
                    this.unbind_global();
                    return this;
                };
                Dispatcher.prototype.emit = function(eventName, data, metadata) {
                    for(var i = 0; i < this.global_callbacks.length; i++)this.global_callbacks[i](eventName, data);
                    var callbacks = this.callbacks.get(eventName);
                    var args = [];
                    if (metadata) args.push(data, metadata);
                    else if (data) args.push(data);
                    if (callbacks && callbacks.length > 0) for(var i = 0; i < callbacks.length; i++)callbacks[i].fn.apply(callbacks[i].context || window, args);
                    else if (this.failThrough) this.failThrough(eventName, data);
                    return this;
                };
                return Dispatcher;
            }();
            exports.__esModule = true;
            exports["default"] = Dispatcher1;
        /***/ },
        /* 25 */ /***/ function(module, exports, __webpack_require__) {
            "use strict";
            var Collections = __webpack_require__(9);
            var CallbackRegistry1 = function() {
                function CallbackRegistry() {
                    this._callbacks = {};
                }
                CallbackRegistry.prototype.get = function(name) {
                    return this._callbacks[prefix(name)];
                };
                CallbackRegistry.prototype.add = function(name, callback, context) {
                    var prefixedEventName = prefix(name);
                    this._callbacks[prefixedEventName] = this._callbacks[prefixedEventName] || [];
                    this._callbacks[prefixedEventName].push({
                        fn: callback,
                        context: context
                    });
                };
                CallbackRegistry.prototype.remove = function(name, callback, context) {
                    if (!name && !callback && !context) {
                        this._callbacks = {};
                        return;
                    }
                    var names = name ? [
                        prefix(name)
                    ] : Collections.keys(this._callbacks);
                    if (callback || context) this.removeCallback(names, callback, context);
                    else this.removeAllCallbacks(names);
                };
                CallbackRegistry.prototype.removeCallback = function(names, callback, context) {
                    Collections.apply(names, function(name) {
                        this._callbacks[name] = Collections.filter(this._callbacks[name] || [], function(binding) {
                            return callback && callback !== binding.fn || context && context !== binding.context;
                        });
                        if (this._callbacks[name].length === 0) delete this._callbacks[name];
                    }, this);
                };
                CallbackRegistry.prototype.removeAllCallbacks = function(names) {
                    Collections.apply(names, function(name) {
                        delete this._callbacks[name];
                    }, this);
                };
                return CallbackRegistry;
            }();
            exports.__esModule = true;
            exports["default"] = CallbackRegistry1;
            function prefix(name) {
                return "_" + name;
            }
        /***/ },
        /* 26 */ /***/ function(module, exports, __webpack_require__) {
            "use strict";
            var __extends = this && this.__extends || function(d, b) {
                for(var p in b)if (b.hasOwnProperty(p)) d[p] = b[p];
                function __() {
                    this.constructor = d;
                }
                d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
            };
            var dispatcher_1 = __webpack_require__(24);
            var NetInfo1 = function(_super) {
                __extends(NetInfo, _super);
                function NetInfo() {
                    _super.call(this);
                    var self = this;
                    if (window.addEventListener !== undefined) {
                        window.addEventListener("online", function() {
                            self.emit('online');
                        }, false);
                        window.addEventListener("offline", function() {
                            self.emit('offline');
                        }, false);
                    }
                }
                NetInfo.prototype.isOnline = function() {
                    if (window.navigator.onLine === undefined) return true;
                    else return window.navigator.onLine;
                };
                return NetInfo;
            }(dispatcher_1["default"]);
            exports.NetInfo = NetInfo1;
            exports.Network = new NetInfo1();
        /***/ },
        /* 27 */ /***/ function(module, exports) {
            "use strict";
            var getDefaultStrategy = function(config) {
                var wsStrategy;
                if (config.useTLS) wsStrategy = [
                    ":best_connected_ever",
                    ":ws_loop",
                    [
                        ":delayed",
                        2000,
                        [
                            ":http_fallback_loop"
                        ]
                    ]
                ];
                else wsStrategy = [
                    ":best_connected_ever",
                    ":ws_loop",
                    [
                        ":delayed",
                        2000,
                        [
                            ":wss_loop"
                        ]
                    ],
                    [
                        ":delayed",
                        5000,
                        [
                            ":http_fallback_loop"
                        ]
                    ]
                ];
                return [
                    [
                        ":def",
                        "ws_options",
                        {
                            hostNonTLS: config.wsHost + ":" + config.wsPort,
                            hostTLS: config.wsHost + ":" + config.wssPort,
                            httpPath: config.wsPath
                        }
                    ],
                    [
                        ":def",
                        "wss_options",
                        [
                            ":extend",
                            ":ws_options",
                            {
                                useTLS: true
                            }
                        ]
                    ],
                    [
                        ":def",
                        "sockjs_options",
                        {
                            hostNonTLS: config.httpHost + ":" + config.httpPort,
                            hostTLS: config.httpHost + ":" + config.httpsPort,
                            httpPath: config.httpPath
                        }
                    ],
                    [
                        ":def",
                        "timeouts",
                        {
                            loop: true,
                            timeout: 15000,
                            timeoutLimit: 60000
                        }
                    ],
                    [
                        ":def",
                        "ws_manager",
                        [
                            ":transport_manager",
                            {
                                lives: 2,
                                minPingDelay: 10000,
                                maxPingDelay: config.activity_timeout
                            }
                        ]
                    ],
                    [
                        ":def",
                        "streaming_manager",
                        [
                            ":transport_manager",
                            {
                                lives: 2,
                                minPingDelay: 10000,
                                maxPingDelay: config.activity_timeout
                            }
                        ]
                    ],
                    [
                        ":def_transport",
                        "ws",
                        "ws",
                        3,
                        ":ws_options",
                        ":ws_manager"
                    ],
                    [
                        ":def_transport",
                        "wss",
                        "ws",
                        3,
                        ":wss_options",
                        ":ws_manager"
                    ],
                    [
                        ":def_transport",
                        "sockjs",
                        "sockjs",
                        1,
                        ":sockjs_options"
                    ],
                    [
                        ":def_transport",
                        "xhr_streaming",
                        "xhr_streaming",
                        1,
                        ":sockjs_options",
                        ":streaming_manager"
                    ],
                    [
                        ":def_transport",
                        "xdr_streaming",
                        "xdr_streaming",
                        1,
                        ":sockjs_options",
                        ":streaming_manager"
                    ],
                    [
                        ":def_transport",
                        "xhr_polling",
                        "xhr_polling",
                        1,
                        ":sockjs_options"
                    ],
                    [
                        ":def_transport",
                        "xdr_polling",
                        "xdr_polling",
                        1,
                        ":sockjs_options"
                    ],
                    [
                        ":def",
                        "ws_loop",
                        [
                            ":sequential",
                            ":timeouts",
                            ":ws"
                        ]
                    ],
                    [
                        ":def",
                        "wss_loop",
                        [
                            ":sequential",
                            ":timeouts",
                            ":wss"
                        ]
                    ],
                    [
                        ":def",
                        "sockjs_loop",
                        [
                            ":sequential",
                            ":timeouts",
                            ":sockjs"
                        ]
                    ],
                    [
                        ":def",
                        "streaming_loop",
                        [
                            ":sequential",
                            ":timeouts",
                            [
                                ":if",
                                [
                                    ":is_supported",
                                    ":xhr_streaming"
                                ],
                                ":xhr_streaming",
                                ":xdr_streaming"
                            ]
                        ]
                    ],
                    [
                        ":def",
                        "polling_loop",
                        [
                            ":sequential",
                            ":timeouts",
                            [
                                ":if",
                                [
                                    ":is_supported",
                                    ":xhr_polling"
                                ],
                                ":xhr_polling",
                                ":xdr_polling"
                            ]
                        ]
                    ],
                    [
                        ":def",
                        "http_loop",
                        [
                            ":if",
                            [
                                ":is_supported",
                                ":streaming_loop"
                            ],
                            [
                                ":best_connected_ever",
                                ":streaming_loop",
                                [
                                    ":delayed",
                                    4000,
                                    [
                                        ":polling_loop"
                                    ]
                                ]
                            ],
                            [
                                ":polling_loop"
                            ]
                        ]
                    ],
                    [
                        ":def",
                        "http_fallback_loop",
                        [
                            ":if",
                            [
                                ":is_supported",
                                ":http_loop"
                            ],
                            [
                                ":http_loop"
                            ],
                            [
                                ":sockjs_loop"
                            ]
                        ]
                    ],
                    [
                        ":def",
                        "strategy",
                        [
                            ":cached",
                            1800000,
                            [
                                ":first_connected",
                                [
                                    ":if",
                                    [
                                        ":is_supported",
                                        ":ws"
                                    ],
                                    wsStrategy,
                                    ":http_fallback_loop"
                                ]
                            ]
                        ]
                    ]
                ];
            };
            exports.__esModule = true;
            exports["default"] = getDefaultStrategy;
        /***/ },
        /* 28 */ /***/ function(module, exports, __webpack_require__) {
            "use strict";
            var dependencies_1 = __webpack_require__(3);
            function default_1() {
                var self = this;
                self.timeline.info(self.buildTimelineMessage({
                    transport: self.name + (self.options.useTLS ? "s" : "")
                }));
                if (self.hooks.isInitialized()) self.changeState("initialized");
                else if (self.hooks.file) {
                    self.changeState("initializing");
                    dependencies_1.Dependencies.load(self.hooks.file, {
                        useTLS: self.options.useTLS
                    }, function(error, callback) {
                        if (self.hooks.isInitialized()) {
                            self.changeState("initialized");
                            callback(true);
                        } else {
                            if (error) self.onError(error);
                            self.onClose();
                            callback(false);
                        }
                    });
                } else self.onClose();
            }
            exports.__esModule = true;
            exports["default"] = default_1;
        /***/ },
        /* 29 */ /***/ function(module, exports, __webpack_require__) {
            "use strict";
            var http_xdomain_request_1 = __webpack_require__(30);
            var http_1 = __webpack_require__(32);
            http_1["default"].createXDR = function(method, url) {
                return this.createRequest(http_xdomain_request_1["default"], method, url);
            };
            exports.__esModule = true;
            exports["default"] = http_1["default"];
        /***/ },
        /* 30 */ /***/ function(module, exports, __webpack_require__) {
            "use strict";
            var Errors = __webpack_require__(31);
            var hooks = {
                getRequest: function(socket) {
                    var xdr = new window.XDomainRequest();
                    xdr.ontimeout = function() {
                        socket.emit("error", new Errors.RequestTimedOut());
                        socket.close();
                    };
                    xdr.onerror = function(e) {
                        socket.emit("error", e);
                        socket.close();
                    };
                    xdr.onprogress = function() {
                        if (xdr.responseText && xdr.responseText.length > 0) socket.onChunk(200, xdr.responseText);
                    };
                    xdr.onload = function() {
                        if (xdr.responseText && xdr.responseText.length > 0) socket.onChunk(200, xdr.responseText);
                        socket.emit("finished", 200);
                        socket.close();
                    };
                    return xdr;
                },
                abortRequest: function(xdr) {
                    xdr.ontimeout = xdr.onerror = xdr.onprogress = xdr.onload = null;
                    xdr.abort();
                }
            };
            exports.__esModule = true;
            exports["default"] = hooks;
        /***/ },
        /* 31 */ /***/ function(module, exports) {
            "use strict";
            var __extends = this && this.__extends || function(d, b) {
                for(var p in b)if (b.hasOwnProperty(p)) d[p] = b[p];
                function __() {
                    this.constructor = d;
                }
                d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
            };
            var BadEventName1 = function(_super) {
                __extends(BadEventName, _super);
                function BadEventName() {
                    _super.apply(this, arguments);
                }
                return BadEventName;
            }(Error);
            exports.BadEventName = BadEventName1;
            var RequestTimedOut1 = function(_super) {
                __extends(RequestTimedOut, _super);
                function RequestTimedOut() {
                    _super.apply(this, arguments);
                }
                return RequestTimedOut;
            }(Error);
            exports.RequestTimedOut = RequestTimedOut1;
            var TransportPriorityTooLow1 = function(_super) {
                __extends(TransportPriorityTooLow, _super);
                function TransportPriorityTooLow() {
                    _super.apply(this, arguments);
                }
                return TransportPriorityTooLow;
            }(Error);
            exports.TransportPriorityTooLow = TransportPriorityTooLow1;
            var TransportClosed1 = function(_super) {
                __extends(TransportClosed, _super);
                function TransportClosed() {
                    _super.apply(this, arguments);
                }
                return TransportClosed;
            }(Error);
            exports.TransportClosed = TransportClosed1;
            var UnsupportedFeature1 = function(_super) {
                __extends(UnsupportedFeature, _super);
                function UnsupportedFeature() {
                    _super.apply(this, arguments);
                }
                return UnsupportedFeature;
            }(Error);
            exports.UnsupportedFeature = UnsupportedFeature1;
            var UnsupportedTransport1 = function(_super) {
                __extends(UnsupportedTransport, _super);
                function UnsupportedTransport() {
                    _super.apply(this, arguments);
                }
                return UnsupportedTransport;
            }(Error);
            exports.UnsupportedTransport = UnsupportedTransport1;
            var UnsupportedStrategy1 = function(_super) {
                __extends(UnsupportedStrategy, _super);
                function UnsupportedStrategy() {
                    _super.apply(this, arguments);
                }
                return UnsupportedStrategy;
            }(Error);
            exports.UnsupportedStrategy = UnsupportedStrategy1;
        /***/ },
        /* 32 */ /***/ function(module, exports, __webpack_require__) {
            "use strict";
            var http_request_1 = __webpack_require__(33);
            var http_socket_1 = __webpack_require__(34);
            var http_streaming_socket_1 = __webpack_require__(36);
            var http_polling_socket_1 = __webpack_require__(37);
            var http_xhr_request_1 = __webpack_require__(38);
            var HTTP = {
                createStreamingSocket: function(url) {
                    return this.createSocket(http_streaming_socket_1["default"], url);
                },
                createPollingSocket: function(url) {
                    return this.createSocket(http_polling_socket_1["default"], url);
                },
                createSocket: function(hooks, url) {
                    return new http_socket_1["default"](hooks, url);
                },
                createXHR: function(method, url) {
                    return this.createRequest(http_xhr_request_1["default"], method, url);
                },
                createRequest: function(hooks, method, url) {
                    return new http_request_1["default"](hooks, method, url);
                }
            };
            exports.__esModule = true;
            exports["default"] = HTTP;
        /***/ },
        /* 33 */ /***/ function(module, exports, __webpack_require__) {
            "use strict";
            var __extends = this && this.__extends || function(d, b) {
                for(var p in b)if (b.hasOwnProperty(p)) d[p] = b[p];
                function __() {
                    this.constructor = d;
                }
                d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
            };
            var runtime_1 = __webpack_require__(2);
            var dispatcher_1 = __webpack_require__(24);
            var MAX_BUFFER_LENGTH = 262144;
            var HTTPRequest1 = function(_super) {
                __extends(HTTPRequest, _super);
                function HTTPRequest(hooks, method, url) {
                    _super.call(this);
                    this.hooks = hooks;
                    this.method = method;
                    this.url = url;
                }
                HTTPRequest.prototype.start = function(payload) {
                    var _this = this;
                    this.position = 0;
                    this.xhr = this.hooks.getRequest(this);
                    this.unloader = function() {
                        _this.close();
                    };
                    runtime_1["default"].addUnloadListener(this.unloader);
                    this.xhr.open(this.method, this.url, true);
                    if (this.xhr.setRequestHeader) this.xhr.setRequestHeader("Content-Type", "application/json");
                    this.xhr.send(payload);
                };
                HTTPRequest.prototype.close = function() {
                    if (this.unloader) {
                        runtime_1["default"].removeUnloadListener(this.unloader);
                        this.unloader = null;
                    }
                    if (this.xhr) {
                        this.hooks.abortRequest(this.xhr);
                        this.xhr = null;
                    }
                };
                HTTPRequest.prototype.onChunk = function(status, data) {
                    while(true){
                        var chunk = this.advanceBuffer(data);
                        if (chunk) this.emit("chunk", {
                            status: status,
                            data: chunk
                        });
                        else break;
                    }
                    if (this.isBufferTooLong(data)) this.emit("buffer_too_long");
                };
                HTTPRequest.prototype.advanceBuffer = function(buffer) {
                    var unreadData = buffer.slice(this.position);
                    var endOfLinePosition = unreadData.indexOf("\n");
                    if (endOfLinePosition !== -1) {
                        this.position += endOfLinePosition + 1;
                        return unreadData.slice(0, endOfLinePosition);
                    } else return null;
                };
                HTTPRequest.prototype.isBufferTooLong = function(buffer) {
                    return this.position === buffer.length && buffer.length > MAX_BUFFER_LENGTH;
                };
                return HTTPRequest;
            }(dispatcher_1["default"]);
            exports.__esModule = true;
            exports["default"] = HTTPRequest1;
        /***/ },
        /* 34 */ /***/ function(module, exports, __webpack_require__) {
            "use strict";
            var state_1 = __webpack_require__(35);
            var util_1 = __webpack_require__(11);
            var runtime_1 = __webpack_require__(2);
            var autoIncrement = 1;
            var HTTPSocket1 = function() {
                function HTTPSocket(hooks, url) {
                    this.hooks = hooks;
                    this.session = randomNumber(1000) + "/" + randomString(8);
                    this.location = getLocation(url);
                    this.readyState = state_1["default"].CONNECTING;
                    this.openStream();
                }
                HTTPSocket.prototype.send = function(payload) {
                    return this.sendRaw(JSON.stringify([
                        payload
                    ]));
                };
                HTTPSocket.prototype.ping = function() {
                    this.hooks.sendHeartbeat(this);
                };
                HTTPSocket.prototype.close = function(code, reason) {
                    this.onClose(code, reason, true);
                };
                HTTPSocket.prototype.sendRaw = function(payload) {
                    if (this.readyState === state_1["default"].OPEN) try {
                        runtime_1["default"].createSocketRequest("POST", getUniqueURL(getSendURL(this.location, this.session))).start(payload);
                        return true;
                    } catch (e) {
                        return false;
                    }
                    else return false;
                };
                HTTPSocket.prototype.reconnect = function() {
                    this.closeStream();
                    this.openStream();
                };
                HTTPSocket.prototype.onClose = function(code, reason, wasClean) {
                    this.closeStream();
                    this.readyState = state_1["default"].CLOSED;
                    if (this.onclose) this.onclose({
                        code: code,
                        reason: reason,
                        wasClean: wasClean
                    });
                };
                HTTPSocket.prototype.onChunk = function(chunk) {
                    if (chunk.status !== 200) return;
                    if (this.readyState === state_1["default"].OPEN) this.onActivity();
                    var payload;
                    var type = chunk.data.slice(0, 1);
                    switch(type){
                        case 'o':
                            payload = JSON.parse(chunk.data.slice(1) || '{}');
                            this.onOpen(payload);
                            break;
                        case 'a':
                            payload = JSON.parse(chunk.data.slice(1) || '[]');
                            for(var i = 0; i < payload.length; i++)this.onEvent(payload[i]);
                            break;
                        case 'm':
                            payload = JSON.parse(chunk.data.slice(1) || 'null');
                            this.onEvent(payload);
                            break;
                        case 'h':
                            this.hooks.onHeartbeat(this);
                            break;
                        case 'c':
                            payload = JSON.parse(chunk.data.slice(1) || '[]');
                            this.onClose(payload[0], payload[1], true);
                            break;
                    }
                };
                HTTPSocket.prototype.onOpen = function(options) {
                    if (this.readyState === state_1["default"].CONNECTING) {
                        if (options && options.hostname) this.location.base = replaceHost(this.location.base, options.hostname);
                        this.readyState = state_1["default"].OPEN;
                        if (this.onopen) this.onopen();
                    } else this.onClose(1006, "Server lost session", true);
                };
                HTTPSocket.prototype.onEvent = function(event) {
                    if (this.readyState === state_1["default"].OPEN && this.onmessage) this.onmessage({
                        data: event
                    });
                };
                HTTPSocket.prototype.onActivity = function() {
                    if (this.onactivity) this.onactivity();
                };
                HTTPSocket.prototype.onError = function(error) {
                    if (this.onerror) this.onerror(error);
                };
                HTTPSocket.prototype.openStream = function() {
                    var _this = this;
                    this.stream = runtime_1["default"].createSocketRequest("POST", getUniqueURL(this.hooks.getReceiveURL(this.location, this.session)));
                    this.stream.bind("chunk", function(chunk) {
                        _this.onChunk(chunk);
                    });
                    this.stream.bind("finished", function(status) {
                        _this.hooks.onFinished(_this, status);
                    });
                    this.stream.bind("buffer_too_long", function() {
                        _this.reconnect();
                    });
                    try {
                        this.stream.start();
                    } catch (error) {
                        util_1["default"].defer(function() {
                            _this.onError(error);
                            _this.onClose(1006, "Could not start streaming", false);
                        });
                    }
                };
                HTTPSocket.prototype.closeStream = function() {
                    if (this.stream) {
                        this.stream.unbind_all();
                        this.stream.close();
                        this.stream = null;
                    }
                };
                return HTTPSocket;
            }();
            function getLocation(url) {
                var parts = /([^\?]*)\/*(\??.*)/.exec(url);
                return {
                    base: parts[1],
                    queryString: parts[2]
                };
            }
            function getSendURL(url, session) {
                return url.base + "/" + session + "/xhr_send";
            }
            function getUniqueURL(url) {
                var separator = url.indexOf('?') === -1 ? "?" : "&";
                return url + separator + "t=" + +new Date() + "&n=" + autoIncrement++;
            }
            function replaceHost(url, hostname) {
                var urlParts = /(https?:\/\/)([^\/:]+)((\/|:)?.*)/.exec(url);
                return urlParts[1] + hostname + urlParts[3];
            }
            function randomNumber(max) {
                return Math.floor(Math.random() * max);
            }
            function randomString(length) {
                var result = [];
                for(var i = 0; i < length; i++)result.push(randomNumber(32).toString(32));
                return result.join('');
            }
            exports.__esModule = true;
            exports["default"] = HTTPSocket1;
        /***/ },
        /* 35 */ /***/ function(module, exports) {
            "use strict";
            var State1;
            (function(State) {
                State[State["CONNECTING"] = 0] = "CONNECTING";
                State[State["OPEN"] = 1] = "OPEN";
                State[State["CLOSED"] = 3] = "CLOSED";
            })(State1 || (State1 = {}));
            exports.__esModule = true;
            exports["default"] = State1;
        /***/ },
        /* 36 */ /***/ function(module, exports) {
            "use strict";
            var hooks = {
                getReceiveURL: function(url, session) {
                    return url.base + "/" + session + "/xhr_streaming" + url.queryString;
                },
                onHeartbeat: function(socket) {
                    socket.sendRaw("[]");
                },
                sendHeartbeat: function(socket) {
                    socket.sendRaw("[]");
                },
                onFinished: function(socket, status) {
                    socket.onClose(1006, "Connection interrupted (" + status + ")", false);
                }
            };
            exports.__esModule = true;
            exports["default"] = hooks;
        /***/ },
        /* 37 */ /***/ function(module, exports) {
            "use strict";
            var hooks = {
                getReceiveURL: function(url, session) {
                    return url.base + "/" + session + "/xhr" + url.queryString;
                },
                onHeartbeat: function() {},
                sendHeartbeat: function(socket) {
                    socket.sendRaw("[]");
                },
                onFinished: function(socket, status) {
                    if (status === 200) socket.reconnect();
                    else socket.onClose(1006, "Connection interrupted (" + status + ")", false);
                }
            };
            exports.__esModule = true;
            exports["default"] = hooks;
        /***/ },
        /* 38 */ /***/ function(module, exports, __webpack_require__) {
            "use strict";
            var runtime_1 = __webpack_require__(2);
            var hooks = {
                getRequest: function(socket) {
                    var Constructor = runtime_1["default"].getXHRAPI();
                    var xhr = new Constructor();
                    xhr.onreadystatechange = xhr.onprogress = function() {
                        switch(xhr.readyState){
                            case 3:
                                if (xhr.responseText && xhr.responseText.length > 0) socket.onChunk(xhr.status, xhr.responseText);
                                break;
                            case 4:
                                if (xhr.responseText && xhr.responseText.length > 0) socket.onChunk(xhr.status, xhr.responseText);
                                socket.emit("finished", xhr.status);
                                socket.close();
                                break;
                        }
                    };
                    return xhr;
                },
                abortRequest: function(xhr) {
                    xhr.onreadystatechange = null;
                    xhr.abort();
                }
            };
            exports.__esModule = true;
            exports["default"] = hooks;
        /***/ },
        /* 39 */ /***/ function(module, exports, __webpack_require__) {
            "use strict";
            var Collections = __webpack_require__(9);
            var util_1 = __webpack_require__(11);
            var level_1 = __webpack_require__(40);
            var Timeline1 = function() {
                function Timeline(key, session, options) {
                    this.key = key;
                    this.session = session;
                    this.events = [];
                    this.options = options || {};
                    this.sent = 0;
                    this.uniqueID = 0;
                }
                Timeline.prototype.log = function(level, event) {
                    if (level <= this.options.level) {
                        this.events.push(Collections.extend({}, event, {
                            timestamp: util_1["default"].now()
                        }));
                        if (this.options.limit && this.events.length > this.options.limit) this.events.shift();
                    }
                };
                Timeline.prototype.error = function(event) {
                    this.log(level_1["default"].ERROR, event);
                };
                Timeline.prototype.info = function(event) {
                    this.log(level_1["default"].INFO, event);
                };
                Timeline.prototype.debug = function(event) {
                    this.log(level_1["default"].DEBUG, event);
                };
                Timeline.prototype.isEmpty = function() {
                    return this.events.length === 0;
                };
                Timeline.prototype.send = function(sendfn, callback) {
                    var _this = this;
                    var data = Collections.extend({
                        session: this.session,
                        bundle: this.sent + 1,
                        key: this.key,
                        lib: "js",
                        version: this.options.version,
                        cluster: this.options.cluster,
                        features: this.options.features,
                        timeline: this.events
                    }, this.options.params);
                    this.events = [];
                    sendfn(data, function(error, result) {
                        if (!error) _this.sent++;
                        if (callback) callback(error, result);
                    });
                    return true;
                };
                Timeline.prototype.generateUniqueID = function() {
                    this.uniqueID++;
                    return this.uniqueID;
                };
                return Timeline;
            }();
            exports.__esModule = true;
            exports["default"] = Timeline1;
        /***/ },
        /* 40 */ /***/ function(module, exports) {
            "use strict";
            var TimelineLevel1;
            (function(TimelineLevel) {
                TimelineLevel[TimelineLevel["ERROR"] = 3] = "ERROR";
                TimelineLevel[TimelineLevel["INFO"] = 6] = "INFO";
                TimelineLevel[TimelineLevel["DEBUG"] = 7] = "DEBUG";
            })(TimelineLevel1 || (TimelineLevel1 = {}));
            exports.__esModule = true;
            exports["default"] = TimelineLevel1;
        /***/ },
        /* 41 */ /***/ function(module, exports, __webpack_require__) {
            "use strict";
            var Collections = __webpack_require__(9);
            var util_1 = __webpack_require__(11);
            var transport_manager_1 = __webpack_require__(42);
            var Errors = __webpack_require__(31);
            var transport_strategy_1 = __webpack_require__(64);
            var sequential_strategy_1 = __webpack_require__(65);
            var best_connected_ever_strategy_1 = __webpack_require__(66);
            var cached_strategy_1 = __webpack_require__(67);
            var delayed_strategy_1 = __webpack_require__(68);
            var if_strategy_1 = __webpack_require__(69);
            var first_connected_strategy_1 = __webpack_require__(70);
            var runtime_1 = __webpack_require__(2);
            var Transports = runtime_1["default"].Transports;
            exports.build = function(scheme, options) {
                var context = Collections.extend({}, globalContext, options);
                return evaluate(scheme, context)[1].strategy;
            };
            var UnsupportedStrategy = {
                isSupported: function() {
                    return false;
                },
                connect: function(_, callback) {
                    var deferred = util_1["default"].defer(function() {
                        callback(new Errors.UnsupportedStrategy());
                    });
                    return {
                        abort: function() {
                            deferred.ensureAborted();
                        },
                        forceMinPriority: function() {}
                    };
                }
            };
            function returnWithOriginalContext(f) {
                return function(context) {
                    return [
                        f.apply(this, arguments),
                        context
                    ];
                };
            }
            var globalContext = {
                extend: function(context, first, second) {
                    return [
                        Collections.extend({}, first, second),
                        context
                    ];
                },
                def: function(context, name, value) {
                    if (context[name] !== undefined) throw "Redefining symbol " + name;
                    context[name] = value;
                    return [
                        undefined,
                        context
                    ];
                },
                def_transport: function(context, name, type, priority, options, manager) {
                    var transportClass = Transports[type];
                    if (!transportClass) throw new Errors.UnsupportedTransport(type);
                    var enabled = (!context.enabledTransports || Collections.arrayIndexOf(context.enabledTransports, name) !== -1) && (!context.disabledTransports || Collections.arrayIndexOf(context.disabledTransports, name) === -1);
                    var transport;
                    if (enabled) transport = new transport_strategy_1["default"](name, priority, manager ? manager.getAssistant(transportClass) : transportClass, Collections.extend({
                        key: context.key,
                        useTLS: context.useTLS,
                        timeline: context.timeline,
                        ignoreNullOrigin: context.ignoreNullOrigin
                    }, options));
                    else transport = UnsupportedStrategy;
                    var newContext = context.def(context, name, transport)[1];
                    newContext.Transports = context.Transports || {};
                    newContext.Transports[name] = transport;
                    return [
                        undefined,
                        newContext
                    ];
                },
                transport_manager: returnWithOriginalContext(function(_, options) {
                    return new transport_manager_1["default"](options);
                }),
                sequential: returnWithOriginalContext(function(_, options) {
                    var strategies = Array.prototype.slice.call(arguments, 2);
                    return new sequential_strategy_1["default"](strategies, options);
                }),
                cached: returnWithOriginalContext(function(context, ttl, strategy) {
                    return new cached_strategy_1["default"](strategy, context.Transports, {
                        ttl: ttl,
                        timeline: context.timeline,
                        useTLS: context.useTLS
                    });
                }),
                first_connected: returnWithOriginalContext(function(_, strategy) {
                    return new first_connected_strategy_1["default"](strategy);
                }),
                best_connected_ever: returnWithOriginalContext(function() {
                    var strategies = Array.prototype.slice.call(arguments, 1);
                    return new best_connected_ever_strategy_1["default"](strategies);
                }),
                delayed: returnWithOriginalContext(function(_, delay, strategy) {
                    return new delayed_strategy_1["default"](strategy, {
                        delay: delay
                    });
                }),
                "if": returnWithOriginalContext(function(_, test, trueBranch, falseBranch) {
                    return new if_strategy_1["default"](test, trueBranch, falseBranch);
                }),
                is_supported: returnWithOriginalContext(function(_, strategy) {
                    return function() {
                        return strategy.isSupported();
                    };
                })
            };
            function isSymbol(expression) {
                return typeof expression === "string" && expression.charAt(0) === ":";
            }
            function getSymbolValue(expression, context) {
                return context[expression.slice(1)];
            }
            function evaluateListOfExpressions(expressions, context) {
                if (expressions.length === 0) return [
                    [],
                    context
                ];
                var head = evaluate(expressions[0], context);
                var tail = evaluateListOfExpressions(expressions.slice(1), head[1]);
                return [
                    [
                        head[0]
                    ].concat(tail[0]),
                    tail[1]
                ];
            }
            function evaluateString(expression, context) {
                if (!isSymbol(expression)) return [
                    expression,
                    context
                ];
                var value = getSymbolValue(expression, context);
                if (value === undefined) throw "Undefined symbol " + expression;
                return [
                    value,
                    context
                ];
            }
            function evaluateArray(expression, context) {
                if (isSymbol(expression[0])) {
                    var f = getSymbolValue(expression[0], context);
                    if (expression.length > 1) {
                        if (typeof f !== "function") throw "Calling non-function " + expression[0];
                        var args = [
                            Collections.extend({}, context)
                        ].concat(Collections.map(expression.slice(1), function(arg) {
                            return evaluate(arg, Collections.extend({}, context))[0];
                        }));
                        return f.apply(this, args);
                    } else return [
                        f,
                        context
                    ];
                } else return evaluateListOfExpressions(expression, context);
            }
            function evaluate(expression, context) {
                if (typeof expression === "string") return evaluateString(expression, context);
                else if (typeof expression === "object") {
                    if (expression instanceof Array && expression.length > 0) return evaluateArray(expression, context);
                }
                return [
                    expression,
                    context
                ];
            }
        /***/ },
        /* 42 */ /***/ function(module, exports, __webpack_require__) {
            "use strict";
            var factory_1 = __webpack_require__(43);
            var TransportManager1 = function() {
                function TransportManager(options) {
                    this.options = options || {};
                    this.livesLeft = this.options.lives || Infinity;
                }
                TransportManager.prototype.getAssistant = function(transport) {
                    return factory_1["default"].createAssistantToTheTransportManager(this, transport, {
                        minPingDelay: this.options.minPingDelay,
                        maxPingDelay: this.options.maxPingDelay
                    });
                };
                TransportManager.prototype.isAlive = function() {
                    return this.livesLeft > 0;
                };
                TransportManager.prototype.reportDeath = function() {
                    this.livesLeft -= 1;
                };
                return TransportManager;
            }();
            exports.__esModule = true;
            exports["default"] = TransportManager1;
        /***/ },
        /* 43 */ /***/ function(module, exports, __webpack_require__) {
            "use strict";
            var assistant_to_the_transport_manager_1 = __webpack_require__(44);
            var handshake_1 = __webpack_require__(45);
            var pusher_authorizer_1 = __webpack_require__(48);
            var timeline_sender_1 = __webpack_require__(49);
            var presence_channel_1 = __webpack_require__(50);
            var private_channel_1 = __webpack_require__(51);
            var encrypted_channel_1 = __webpack_require__(54);
            var channel_1 = __webpack_require__(52);
            var connection_manager_1 = __webpack_require__(62);
            var channels_1 = __webpack_require__(63);
            var Factory = {
                createChannels: function() {
                    return new channels_1["default"]();
                },
                createConnectionManager: function(key, options) {
                    return new connection_manager_1["default"](key, options);
                },
                createChannel: function(name, pusher) {
                    return new channel_1["default"](name, pusher);
                },
                createPrivateChannel: function(name, pusher) {
                    return new private_channel_1["default"](name, pusher);
                },
                createPresenceChannel: function(name, pusher) {
                    return new presence_channel_1["default"](name, pusher);
                },
                createEncryptedChannel: function(name, pusher) {
                    return new encrypted_channel_1["default"](name, pusher);
                },
                createTimelineSender: function(timeline, options) {
                    return new timeline_sender_1["default"](timeline, options);
                },
                createAuthorizer: function(channel, options) {
                    if (options.authorizer) return options.authorizer(channel, options);
                    return new pusher_authorizer_1["default"](channel, options);
                },
                createHandshake: function(transport, callback) {
                    return new handshake_1["default"](transport, callback);
                },
                createAssistantToTheTransportManager: function(manager, transport, options) {
                    return new assistant_to_the_transport_manager_1["default"](manager, transport, options);
                }
            };
            exports.__esModule = true;
            exports["default"] = Factory;
        /***/ },
        /* 44 */ /***/ function(module, exports, __webpack_require__) {
            "use strict";
            var util_1 = __webpack_require__(11);
            var Collections = __webpack_require__(9);
            var AssistantToTheTransportManager1 = function() {
                function AssistantToTheTransportManager(manager, transport, options) {
                    this.manager = manager;
                    this.transport = transport;
                    this.minPingDelay = options.minPingDelay;
                    this.maxPingDelay = options.maxPingDelay;
                    this.pingDelay = undefined;
                }
                AssistantToTheTransportManager.prototype.createConnection = function(name, priority, key, options) {
                    var _this = this;
                    options = Collections.extend({}, options, {
                        activityTimeout: this.pingDelay
                    });
                    var connection = this.transport.createConnection(name, priority, key, options);
                    var openTimestamp = null;
                    var onOpen = function() {
                        connection.unbind("open", onOpen);
                        connection.bind("closed", onClosed);
                        openTimestamp = util_1["default"].now();
                    };
                    var onClosed = function(closeEvent) {
                        connection.unbind("closed", onClosed);
                        if (closeEvent.code === 1002 || closeEvent.code === 1003) _this.manager.reportDeath();
                        else if (!closeEvent.wasClean && openTimestamp) {
                            var lifespan = util_1["default"].now() - openTimestamp;
                            if (lifespan < 2 * _this.maxPingDelay) {
                                _this.manager.reportDeath();
                                _this.pingDelay = Math.max(lifespan / 2, _this.minPingDelay);
                            }
                        }
                    };
                    connection.bind("open", onOpen);
                    return connection;
                };
                AssistantToTheTransportManager.prototype.isSupported = function(environment) {
                    return this.manager.isAlive() && this.transport.isSupported(environment);
                };
                return AssistantToTheTransportManager;
            }();
            exports.__esModule = true;
            exports["default"] = AssistantToTheTransportManager1;
        /***/ },
        /* 45 */ /***/ function(module, exports, __webpack_require__) {
            "use strict";
            var Collections = __webpack_require__(9);
            var Protocol = __webpack_require__(46);
            var connection_1 = __webpack_require__(47);
            var Handshake1 = function() {
                function Handshake(transport, callback) {
                    this.transport = transport;
                    this.callback = callback;
                    this.bindListeners();
                }
                Handshake.prototype.close = function() {
                    this.unbindListeners();
                    this.transport.close();
                };
                Handshake.prototype.bindListeners = function() {
                    var _this = this;
                    this.onMessage = function(m) {
                        _this.unbindListeners();
                        var result;
                        try {
                            result = Protocol.processHandshake(m);
                        } catch (e) {
                            _this.finish("error", {
                                error: e
                            });
                            _this.transport.close();
                            return;
                        }
                        if (result.action === "connected") _this.finish("connected", {
                            connection: new connection_1["default"](result.id, _this.transport),
                            activityTimeout: result.activityTimeout
                        });
                        else {
                            _this.finish(result.action, {
                                error: result.error
                            });
                            _this.transport.close();
                        }
                    };
                    this.onClosed = function(closeEvent) {
                        _this.unbindListeners();
                        var action = Protocol.getCloseAction(closeEvent) || "backoff";
                        var error = Protocol.getCloseError(closeEvent);
                        _this.finish(action, {
                            error: error
                        });
                    };
                    this.transport.bind("message", this.onMessage);
                    this.transport.bind("closed", this.onClosed);
                };
                Handshake.prototype.unbindListeners = function() {
                    this.transport.unbind("message", this.onMessage);
                    this.transport.unbind("closed", this.onClosed);
                };
                Handshake.prototype.finish = function(action, params) {
                    this.callback(Collections.extend({
                        transport: this.transport,
                        action: action
                    }, params));
                };
                return Handshake;
            }();
            exports.__esModule = true;
            exports["default"] = Handshake1;
        /***/ },
        /* 46 */ /***/ function(module, exports) {
            "use strict";
            exports.decodeMessage = function(messageEvent) {
                try {
                    var messageData = JSON.parse(messageEvent.data);
                    var pusherEventData = messageData.data;
                    if (typeof pusherEventData === 'string') try {
                        pusherEventData = JSON.parse(messageData.data);
                    } catch (e) {}
                    var pusherEvent = {
                        event: messageData.event,
                        channel: messageData.channel,
                        data: pusherEventData
                    };
                    if (messageData.user_id) pusherEvent.user_id = messageData.user_id;
                    return pusherEvent;
                } catch (e) {
                    throw {
                        type: 'MessageParseError',
                        error: e,
                        data: messageEvent.data
                    };
                }
            };
            exports.encodeMessage = function(event) {
                return JSON.stringify(event);
            };
            exports.processHandshake = function(messageEvent) {
                var message = exports.decodeMessage(messageEvent);
                if (message.event === "pusher:connection_established") {
                    if (!message.data.activity_timeout) throw "No activity timeout specified in handshake";
                    return {
                        action: "connected",
                        id: message.data.socket_id,
                        activityTimeout: message.data.activity_timeout * 1000
                    };
                } else if (message.event === "pusher:error") return {
                    action: this.getCloseAction(message.data),
                    error: this.getCloseError(message.data)
                };
                else throw "Invalid handshake";
            };
            exports.getCloseAction = function(closeEvent) {
                if (closeEvent.code < 4000) {
                    if (closeEvent.code >= 1002 && closeEvent.code <= 1004) return "backoff";
                    else return null;
                } else if (closeEvent.code === 4000) return "tls_only";
                else if (closeEvent.code < 4100) return "refused";
                else if (closeEvent.code < 4200) return "backoff";
                else if (closeEvent.code < 4300) return "retry";
                else return "refused";
            };
            exports.getCloseError = function(closeEvent) {
                if (closeEvent.code !== 1000 && closeEvent.code !== 1001) return {
                    type: 'PusherError',
                    data: {
                        code: closeEvent.code,
                        message: closeEvent.reason || closeEvent.message
                    }
                };
                else return null;
            };
        /***/ },
        /* 47 */ /***/ function(module, exports, __webpack_require__) {
            "use strict";
            var __extends = this && this.__extends || function(d, b) {
                for(var p in b)if (b.hasOwnProperty(p)) d[p] = b[p];
                function __() {
                    this.constructor = d;
                }
                d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
            };
            var Collections = __webpack_require__(9);
            var dispatcher_1 = __webpack_require__(24);
            var Protocol = __webpack_require__(46);
            var logger_1 = __webpack_require__(8);
            var Connection1 = function(_super) {
                __extends(Connection, _super);
                function Connection(id, transport) {
                    _super.call(this);
                    this.id = id;
                    this.transport = transport;
                    this.activityTimeout = transport.activityTimeout;
                    this.bindListeners();
                }
                Connection.prototype.handlesActivityChecks = function() {
                    return this.transport.handlesActivityChecks();
                };
                Connection.prototype.send = function(data) {
                    return this.transport.send(data);
                };
                Connection.prototype.send_event = function(name, data, channel) {
                    var event = {
                        event: name,
                        data: data
                    };
                    if (channel) event.channel = channel;
                    logger_1["default"].debug('Event sent', event);
                    return this.send(Protocol.encodeMessage(event));
                };
                Connection.prototype.ping = function() {
                    if (this.transport.supportsPing()) this.transport.ping();
                    else this.send_event('pusher:ping', {});
                };
                Connection.prototype.close = function() {
                    this.transport.close();
                };
                Connection.prototype.bindListeners = function() {
                    var _this = this;
                    var listeners = {
                        message: function(messageEvent) {
                            var pusherEvent;
                            try {
                                pusherEvent = Protocol.decodeMessage(messageEvent);
                            } catch (e) {
                                _this.emit('error', {
                                    type: 'MessageParseError',
                                    error: e,
                                    data: messageEvent.data
                                });
                            }
                            if (pusherEvent !== undefined) {
                                logger_1["default"].debug('Event recd', pusherEvent);
                                switch(pusherEvent.event){
                                    case 'pusher:error':
                                        _this.emit('error', {
                                            type: 'PusherError',
                                            data: pusherEvent.data
                                        });
                                        break;
                                    case 'pusher:ping':
                                        _this.emit("ping");
                                        break;
                                    case 'pusher:pong':
                                        _this.emit("pong");
                                        break;
                                }
                                _this.emit('message', pusherEvent);
                            }
                        },
                        activity: function() {
                            _this.emit("activity");
                        },
                        error: function(error) {
                            _this.emit("error", {
                                type: "WebSocketError",
                                error: error
                            });
                        },
                        closed: function(closeEvent) {
                            unbindListeners();
                            if (closeEvent && closeEvent.code) _this.handleCloseEvent(closeEvent);
                            _this.transport = null;
                            _this.emit("closed");
                        }
                    };
                    var unbindListeners = function() {
                        Collections.objectApply(listeners, function(listener, event) {
                            _this.transport.unbind(event, listener);
                        });
                    };
                    Collections.objectApply(listeners, function(listener, event) {
                        _this.transport.bind(event, listener);
                    });
                };
                Connection.prototype.handleCloseEvent = function(closeEvent) {
                    var action = Protocol.getCloseAction(closeEvent);
                    var error = Protocol.getCloseError(closeEvent);
                    if (error) this.emit('error', error);
                    if (action) this.emit(action, {
                        action: action,
                        error: error
                    });
                };
                return Connection;
            }(dispatcher_1["default"]);
            exports.__esModule = true;
            exports["default"] = Connection1;
        /***/ },
        /* 48 */ /***/ function(module, exports, __webpack_require__) {
            "use strict";
            var runtime_1 = __webpack_require__(2);
            var PusherAuthorizer1 = function() {
                function PusherAuthorizer(channel, options) {
                    this.channel = channel;
                    var authTransport = options.authTransport;
                    if (typeof runtime_1["default"].getAuthorizers()[authTransport] === "undefined") throw "'" + authTransport + "' is not a recognized auth transport";
                    this.type = authTransport;
                    this.options = options;
                    this.authOptions = (options || {}).auth || {};
                }
                PusherAuthorizer.prototype.composeQuery = function(socketId) {
                    var query = 'socket_id=' + encodeURIComponent(socketId) + '&channel_name=' + encodeURIComponent(this.channel.name);
                    for(var i in this.authOptions.params)query += "&" + encodeURIComponent(i) + "=" + encodeURIComponent(this.authOptions.params[i]);
                    return query;
                };
                PusherAuthorizer.prototype.authorize = function(socketId, callback) {
                    PusherAuthorizer.authorizers = PusherAuthorizer.authorizers || runtime_1["default"].getAuthorizers();
                    return PusherAuthorizer.authorizers[this.type].call(this, runtime_1["default"], socketId, callback);
                };
                return PusherAuthorizer;
            }();
            exports.__esModule = true;
            exports["default"] = PusherAuthorizer1;
        /***/ },
        /* 49 */ /***/ function(module, exports, __webpack_require__) {
            "use strict";
            var runtime_1 = __webpack_require__(2);
            var TimelineSender1 = function() {
                function TimelineSender(timeline, options) {
                    this.timeline = timeline;
                    this.options = options || {};
                }
                TimelineSender.prototype.send = function(useTLS, callback) {
                    if (this.timeline.isEmpty()) return;
                    this.timeline.send(runtime_1["default"].TimelineTransport.getAgent(this, useTLS), callback);
                };
                return TimelineSender;
            }();
            exports.__esModule = true;
            exports["default"] = TimelineSender1;
        /***/ },
        /* 50 */ /***/ function(module, exports, __webpack_require__) {
            "use strict";
            var __extends = this && this.__extends || function(d, b) {
                for(var p in b)if (b.hasOwnProperty(p)) d[p] = b[p];
                function __() {
                    this.constructor = d;
                }
                d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
            };
            var private_channel_1 = __webpack_require__(51);
            var logger_1 = __webpack_require__(8);
            var members_1 = __webpack_require__(53);
            var url_store_1 = __webpack_require__(14);
            var PresenceChannel1 = function(_super) {
                __extends(PresenceChannel, _super);
                function PresenceChannel(name, pusher) {
                    _super.call(this, name, pusher);
                    this.members = new members_1["default"]();
                }
                PresenceChannel.prototype.authorize = function(socketId, callback) {
                    var _this = this;
                    _super.prototype.authorize.call(this, socketId, function(error, authData) {
                        if (!error) {
                            if (authData.channel_data === undefined) {
                                var suffix = url_store_1["default"].buildLogSuffix("authenticationEndpoint");
                                logger_1["default"].warn("Invalid auth response for channel '" + _this.name + "'," + ("expected 'channel_data' field. " + suffix));
                                callback("Invalid auth response");
                                return;
                            }
                            var channelData = JSON.parse(authData.channel_data);
                            _this.members.setMyID(channelData.user_id);
                        }
                        callback(error, authData);
                    });
                };
                PresenceChannel.prototype.handleEvent = function(event) {
                    var eventName = event.event;
                    if (eventName.indexOf("pusher_internal:") === 0) this.handleInternalEvent(event);
                    else {
                        var data = event.data;
                        var metadata = {};
                        if (event.user_id) metadata.user_id = event.user_id;
                        this.emit(eventName, data, metadata);
                    }
                };
                PresenceChannel.prototype.handleInternalEvent = function(event) {
                    var eventName = event.event;
                    var data = event.data;
                    switch(eventName){
                        case "pusher_internal:subscription_succeeded":
                            this.handleSubscriptionSucceededEvent(event);
                            break;
                        case "pusher_internal:member_added":
                            var addedMember = this.members.addMember(data);
                            this.emit('pusher:member_added', addedMember);
                            break;
                        case "pusher_internal:member_removed":
                            var removedMember = this.members.removeMember(data);
                            if (removedMember) this.emit('pusher:member_removed', removedMember);
                            break;
                    }
                };
                PresenceChannel.prototype.handleSubscriptionSucceededEvent = function(event) {
                    this.subscriptionPending = false;
                    this.subscribed = true;
                    if (this.subscriptionCancelled) this.pusher.unsubscribe(this.name);
                    else {
                        this.members.onSubscription(event.data);
                        this.emit("pusher:subscription_succeeded", this.members);
                    }
                };
                PresenceChannel.prototype.disconnect = function() {
                    this.members.reset();
                    _super.prototype.disconnect.call(this);
                };
                return PresenceChannel;
            }(private_channel_1["default"]);
            exports.__esModule = true;
            exports["default"] = PresenceChannel1;
        /***/ },
        /* 51 */ /***/ function(module, exports, __webpack_require__) {
            "use strict";
            var __extends = this && this.__extends || function(d, b) {
                for(var p in b)if (b.hasOwnProperty(p)) d[p] = b[p];
                function __() {
                    this.constructor = d;
                }
                d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
            };
            var factory_1 = __webpack_require__(43);
            var channel_1 = __webpack_require__(52);
            var PrivateChannel1 = function(_super) {
                __extends(PrivateChannel, _super);
                function PrivateChannel() {
                    _super.apply(this, arguments);
                }
                PrivateChannel.prototype.authorize = function(socketId, callback) {
                    var authorizer = factory_1["default"].createAuthorizer(this, this.pusher.config);
                    return authorizer.authorize(socketId, callback);
                };
                return PrivateChannel;
            }(channel_1["default"]);
            exports.__esModule = true;
            exports["default"] = PrivateChannel1;
        /***/ },
        /* 52 */ /***/ function(module, exports, __webpack_require__) {
            "use strict";
            var __extends = this && this.__extends || function(d, b) {
                for(var p in b)if (b.hasOwnProperty(p)) d[p] = b[p];
                function __() {
                    this.constructor = d;
                }
                d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
            };
            var dispatcher_1 = __webpack_require__(24);
            var Errors = __webpack_require__(31);
            var logger_1 = __webpack_require__(8);
            var url_store_1 = __webpack_require__(14);
            var Channel1 = function(_super) {
                __extends(Channel, _super);
                function Channel(name, pusher) {
                    _super.call(this, function(event, data) {
                        logger_1["default"].debug('No callbacks on ' + name + ' for ' + event);
                    });
                    this.name = name;
                    this.pusher = pusher;
                    this.subscribed = false;
                    this.subscriptionPending = false;
                    this.subscriptionCancelled = false;
                }
                Channel.prototype.authorize = function(socketId, callback) {
                    return callback(false, {});
                };
                Channel.prototype.trigger = function(event, data) {
                    if (event.indexOf("client-") !== 0) throw new Errors.BadEventName("Event '" + event + "' does not start with 'client-'");
                    if (!this.subscribed) {
                        var suffix = url_store_1["default"].buildLogSuffix("triggeringClientEvents");
                        logger_1["default"].warn("Client event triggered before channel 'subscription_succeeded' event . " + suffix);
                    }
                    return this.pusher.send_event(event, data, this.name);
                };
                Channel.prototype.disconnect = function() {
                    this.subscribed = false;
                    this.subscriptionPending = false;
                };
                Channel.prototype.handleEvent = function(event) {
                    var eventName = event.event;
                    var data = event.data;
                    if (eventName === "pusher_internal:subscription_succeeded") this.handleSubscriptionSucceededEvent(event);
                    else if (eventName.indexOf("pusher_internal:") !== 0) {
                        var metadata = {};
                        this.emit(eventName, data, metadata);
                    }
                };
                Channel.prototype.handleSubscriptionSucceededEvent = function(event) {
                    this.subscriptionPending = false;
                    this.subscribed = true;
                    if (this.subscriptionCancelled) this.pusher.unsubscribe(this.name);
                    else this.emit("pusher:subscription_succeeded", event.data);
                };
                Channel.prototype.subscribe = function() {
                    var _this = this;
                    if (this.subscribed) return;
                    this.subscriptionPending = true;
                    this.subscriptionCancelled = false;
                    this.authorize(this.pusher.connection.socket_id, function(error, data) {
                        if (error) _this.emit('pusher:subscription_error', data);
                        else _this.pusher.send_event('pusher:subscribe', {
                            auth: data.auth,
                            channel_data: data.channel_data,
                            channel: _this.name
                        });
                    });
                };
                Channel.prototype.unsubscribe = function() {
                    this.subscribed = false;
                    this.pusher.send_event('pusher:unsubscribe', {
                        channel: this.name
                    });
                };
                Channel.prototype.cancelSubscription = function() {
                    this.subscriptionCancelled = true;
                };
                Channel.prototype.reinstateSubscription = function() {
                    this.subscriptionCancelled = false;
                };
                return Channel;
            }(dispatcher_1["default"]);
            exports.__esModule = true;
            exports["default"] = Channel1;
        /***/ },
        /* 53 */ /***/ function(module, exports, __webpack_require__) {
            "use strict";
            var Collections = __webpack_require__(9);
            var Members1 = function() {
                function Members() {
                    this.reset();
                }
                Members.prototype.get = function(id) {
                    if (Object.prototype.hasOwnProperty.call(this.members, id)) return {
                        id: id,
                        info: this.members[id]
                    };
                    else return null;
                };
                Members.prototype.each = function(callback) {
                    var _this = this;
                    Collections.objectApply(this.members, function(member, id) {
                        callback(_this.get(id));
                    });
                };
                Members.prototype.setMyID = function(id) {
                    this.myID = id;
                };
                Members.prototype.onSubscription = function(subscriptionData) {
                    this.members = subscriptionData.presence.hash;
                    this.count = subscriptionData.presence.count;
                    this.me = this.get(this.myID);
                };
                Members.prototype.addMember = function(memberData) {
                    if (this.get(memberData.user_id) === null) this.count++;
                    this.members[memberData.user_id] = memberData.user_info;
                    return this.get(memberData.user_id);
                };
                Members.prototype.removeMember = function(memberData) {
                    var member = this.get(memberData.user_id);
                    if (member) {
                        delete this.members[memberData.user_id];
                        this.count--;
                    }
                    return member;
                };
                Members.prototype.reset = function() {
                    this.members = {};
                    this.count = 0;
                    this.myID = null;
                    this.me = null;
                };
                return Members;
            }();
            exports.__esModule = true;
            exports["default"] = Members1;
        /***/ },
        /* 54 */ /***/ function(module, exports, __webpack_require__) {
            "use strict";
            var __extends = this && this.__extends || function(d, b) {
                for(var p in b)if (b.hasOwnProperty(p)) d[p] = b[p];
                function __() {
                    this.constructor = d;
                }
                d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
            };
            var private_channel_1 = __webpack_require__(51);
            var Errors = __webpack_require__(31);
            var logger_1 = __webpack_require__(8);
            var tweetnacl_1 = __webpack_require__(55);
            var tweetnacl_util_1 = __webpack_require__(57);
            var EncryptedChannel1 = function(_super) {
                __extends(EncryptedChannel, _super);
                function EncryptedChannel() {
                    _super.apply(this, arguments);
                    this.key = null;
                }
                EncryptedChannel.prototype.authorize = function(socketId, callback) {
                    var _this = this;
                    _super.prototype.authorize.call(this, socketId, function(error, authData) {
                        if (error) {
                            callback(true, authData);
                            return;
                        }
                        var sharedSecret = authData["shared_secret"];
                        if (!sharedSecret) {
                            var errorMsg = "No shared_secret key in auth payload for encrypted channel: " + _this.name;
                            callback(true, errorMsg);
                            logger_1["default"].warn("Error: " + errorMsg);
                            return;
                        }
                        _this.key = tweetnacl_util_1.decodeBase64(sharedSecret);
                        delete authData["shared_secret"];
                        callback(false, authData);
                    });
                };
                EncryptedChannel.prototype.trigger = function(event, data) {
                    throw new Errors.UnsupportedFeature('Client events are not currently supported for encrypted channels');
                };
                EncryptedChannel.prototype.handleEvent = function(event) {
                    var eventName = event.event;
                    var data = event.data;
                    if (eventName.indexOf("pusher_internal:") === 0 || eventName.indexOf("pusher:") === 0) {
                        _super.prototype.handleEvent.call(this, event);
                        return;
                    }
                    this.handleEncryptedEvent(eventName, data);
                };
                EncryptedChannel.prototype.handleEncryptedEvent = function(event, data) {
                    var _this = this;
                    if (!this.key) {
                        logger_1["default"].debug('Received encrypted event before key has been retrieved from the authEndpoint');
                        return;
                    }
                    if (!data.ciphertext || !data.nonce) {
                        logger_1["default"].warn('Unexpected format for encrypted event, expected object with `ciphertext` and `nonce` fields, got: ' + data);
                        return;
                    }
                    var cipherText = tweetnacl_util_1.decodeBase64(data.ciphertext);
                    if (cipherText.length < tweetnacl_1.secretbox.overheadLength) {
                        logger_1["default"].warn("Expected encrypted event ciphertext length to be " + tweetnacl_1.secretbox.overheadLength + ", got: " + cipherText.length);
                        return;
                    }
                    var nonce = tweetnacl_util_1.decodeBase64(data.nonce);
                    if (nonce.length < tweetnacl_1.secretbox.nonceLength) {
                        logger_1["default"].warn("Expected encrypted event nonce length to be " + tweetnacl_1.secretbox.nonceLength + ", got: " + nonce.length);
                        return;
                    }
                    var bytes = tweetnacl_1.secretbox.open(cipherText, nonce, this.key);
                    if (bytes === null) {
                        logger_1["default"].debug('Failed to decrypted an event, probably because it was encrypted with a different key. Fetching a new key from the authEndpoint...');
                        this.authorize(this.pusher.connection.socket_id, function(error, authData) {
                            if (error) {
                                logger_1["default"].warn("Failed to make a request to the authEndpoint: " + authData + ". Unable to fetch new key, so dropping encrypted event");
                                return;
                            }
                            bytes = tweetnacl_1.secretbox.open(cipherText, nonce, _this.key);
                            if (bytes === null) {
                                logger_1["default"].warn("Failed to decrypt event with new key. Dropping encrypted event");
                                return;
                            }
                            _this.emitJSON(event, tweetnacl_util_1.encodeUTF8(bytes));
                            return;
                        });
                        return;
                    }
                    this.emitJSON(event, tweetnacl_util_1.encodeUTF8(bytes));
                };
                EncryptedChannel.prototype.emitJSON = function(eventName, data) {
                    try {
                        this.emit(eventName, JSON.parse(data));
                    } catch (e) {
                        this.emit(eventName, data);
                    }
                    return this;
                };
                return EncryptedChannel;
            }(private_channel_1["default"]);
            exports.__esModule = true;
            exports["default"] = EncryptedChannel1;
        /***/ },
        /* 55 */ /***/ function(module, exports, __webpack_require__) {
            (function(nacl) {
                // Ported in 2014 by Dmitry Chestnykh and Devi Mandiri.
                // Public domain.
                //
                // Implementation derived from TweetNaCl version 20140427.
                // See for details: http://tweetnacl.cr.yp.to/
                var gf = function(init) {
                    var i, r = new Float64Array(16);
                    if (init) for(i = 0; i < init.length; i++)r[i] = init[i];
                    return r;
                };
                //  Pluggable, initialized in high-level API below.
                var randombytes = function() {
                    throw new Error('no PRNG');
                };
                var _0 = new Uint8Array(16);
                var _9 = new Uint8Array(32);
                _9[0] = 9;
                var gf0 = gf(), gf1 = gf([
                    1
                ]), _121665 = gf([
                    56129,
                    1
                ]), D = gf([
                    30883,
                    4953,
                    19914,
                    30187,
                    55467,
                    16705,
                    2637,
                    112,
                    59544,
                    30585,
                    16505,
                    36039,
                    65139,
                    11119,
                    27886,
                    20995
                ]), D2 = gf([
                    61785,
                    9906,
                    39828,
                    60374,
                    45398,
                    33411,
                    5274,
                    224,
                    53552,
                    61171,
                    33010,
                    6542,
                    64743,
                    22239,
                    55772,
                    9222
                ]), X = gf([
                    54554,
                    36645,
                    11616,
                    51542,
                    42930,
                    38181,
                    51040,
                    26924,
                    56412,
                    64982,
                    57905,
                    49316,
                    21502,
                    52590,
                    14035,
                    8553
                ]), Y = gf([
                    26200,
                    26214,
                    26214,
                    26214,
                    26214,
                    26214,
                    26214,
                    26214,
                    26214,
                    26214,
                    26214,
                    26214,
                    26214,
                    26214,
                    26214,
                    26214
                ]), I = gf([
                    41136,
                    18958,
                    6951,
                    50414,
                    58488,
                    44335,
                    6150,
                    12099,
                    55207,
                    15867,
                    153,
                    11085,
                    57099,
                    20417,
                    9344,
                    11139
                ]);
                function ts64(x, i, h, l) {
                    x[i] = h >> 24 & 255;
                    x[i + 1] = h >> 16 & 255;
                    x[i + 2] = h >> 8 & 255;
                    x[i + 3] = h & 255;
                    x[i + 4] = l >> 24 & 255;
                    x[i + 5] = l >> 16 & 255;
                    x[i + 6] = l >> 8 & 255;
                    x[i + 7] = l & 255;
                }
                function vn(x, xi, y, yi, n) {
                    var i, d = 0;
                    for(i = 0; i < n; i++)d |= x[xi + i] ^ y[yi + i];
                    return (1 & d - 1 >>> 8) - 1;
                }
                function crypto_verify_16(x, xi, y, yi) {
                    return vn(x, xi, y, yi, 16);
                }
                function crypto_verify_32(x, xi, y, yi) {
                    return vn(x, xi, y, yi, 32);
                }
                function core_salsa20(o, p, k, c) {
                    var j0 = c[0] & 255 | (c[1] & 255) << 8 | (c[2] & 255) << 16 | (c[3] & 255) << 24, j1 = k[0] & 255 | (k[1] & 255) << 8 | (k[2] & 255) << 16 | (k[3] & 255) << 24, j2 = k[4] & 255 | (k[5] & 255) << 8 | (k[6] & 255) << 16 | (k[7] & 255) << 24, j3 = k[8] & 255 | (k[9] & 255) << 8 | (k[10] & 255) << 16 | (k[11] & 255) << 24, j4 = k[12] & 255 | (k[13] & 255) << 8 | (k[14] & 255) << 16 | (k[15] & 255) << 24, j5 = c[4] & 255 | (c[5] & 255) << 8 | (c[6] & 255) << 16 | (c[7] & 255) << 24, j6 = p[0] & 255 | (p[1] & 255) << 8 | (p[2] & 255) << 16 | (p[3] & 255) << 24, j7 = p[4] & 255 | (p[5] & 255) << 8 | (p[6] & 255) << 16 | (p[7] & 255) << 24, j8 = p[8] & 255 | (p[9] & 255) << 8 | (p[10] & 255) << 16 | (p[11] & 255) << 24, j9 = p[12] & 255 | (p[13] & 255) << 8 | (p[14] & 255) << 16 | (p[15] & 255) << 24, j10 = c[8] & 255 | (c[9] & 255) << 8 | (c[10] & 255) << 16 | (c[11] & 255) << 24, j11 = k[16] & 255 | (k[17] & 255) << 8 | (k[18] & 255) << 16 | (k[19] & 255) << 24, j12 = k[20] & 255 | (k[21] & 255) << 8 | (k[22] & 255) << 16 | (k[23] & 255) << 24, j13 = k[24] & 255 | (k[25] & 255) << 8 | (k[26] & 255) << 16 | (k[27] & 255) << 24, j14 = k[28] & 255 | (k[29] & 255) << 8 | (k[30] & 255) << 16 | (k[31] & 255) << 24, j15 = c[12] & 255 | (c[13] & 255) << 8 | (c[14] & 255) << 16 | (c[15] & 255) << 24;
                    var x0 = j0, x1 = j1, x2 = j2, x3 = j3, x4 = j4, x5 = j5, x6 = j6, x7 = j7, x8 = j8, x9 = j9, x10 = j10, x11 = j11, x12 = j12, x13 = j13, x14 = j14, x15 = j15, u;
                    for(var i = 0; i < 20; i += 2){
                        u = x0 + x12 | 0;
                        x4 ^= u << 7 | u >>> 25;
                        u = x4 + x0 | 0;
                        x8 ^= u << 9 | u >>> 23;
                        u = x8 + x4 | 0;
                        x12 ^= u << 13 | u >>> 19;
                        u = x12 + x8 | 0;
                        x0 ^= u << 18 | u >>> 14;
                        u = x5 + x1 | 0;
                        x9 ^= u << 7 | u >>> 25;
                        u = x9 + x5 | 0;
                        x13 ^= u << 9 | u >>> 23;
                        u = x13 + x9 | 0;
                        x1 ^= u << 13 | u >>> 19;
                        u = x1 + x13 | 0;
                        x5 ^= u << 18 | u >>> 14;
                        u = x10 + x6 | 0;
                        x14 ^= u << 7 | u >>> 25;
                        u = x14 + x10 | 0;
                        x2 ^= u << 9 | u >>> 23;
                        u = x2 + x14 | 0;
                        x6 ^= u << 13 | u >>> 19;
                        u = x6 + x2 | 0;
                        x10 ^= u << 18 | u >>> 14;
                        u = x15 + x11 | 0;
                        x3 ^= u << 7 | u >>> 25;
                        u = x3 + x15 | 0;
                        x7 ^= u << 9 | u >>> 23;
                        u = x7 + x3 | 0;
                        x11 ^= u << 13 | u >>> 19;
                        u = x11 + x7 | 0;
                        x15 ^= u << 18 | u >>> 14;
                        u = x0 + x3 | 0;
                        x1 ^= u << 7 | u >>> 25;
                        u = x1 + x0 | 0;
                        x2 ^= u << 9 | u >>> 23;
                        u = x2 + x1 | 0;
                        x3 ^= u << 13 | u >>> 19;
                        u = x3 + x2 | 0;
                        x0 ^= u << 18 | u >>> 14;
                        u = x5 + x4 | 0;
                        x6 ^= u << 7 | u >>> 25;
                        u = x6 + x5 | 0;
                        x7 ^= u << 9 | u >>> 23;
                        u = x7 + x6 | 0;
                        x4 ^= u << 13 | u >>> 19;
                        u = x4 + x7 | 0;
                        x5 ^= u << 18 | u >>> 14;
                        u = x10 + x9 | 0;
                        x11 ^= u << 7 | u >>> 25;
                        u = x11 + x10 | 0;
                        x8 ^= u << 9 | u >>> 23;
                        u = x8 + x11 | 0;
                        x9 ^= u << 13 | u >>> 19;
                        u = x9 + x8 | 0;
                        x10 ^= u << 18 | u >>> 14;
                        u = x15 + x14 | 0;
                        x12 ^= u << 7 | u >>> 25;
                        u = x12 + x15 | 0;
                        x13 ^= u << 9 | u >>> 23;
                        u = x13 + x12 | 0;
                        x14 ^= u << 13 | u >>> 19;
                        u = x14 + x13 | 0;
                        x15 ^= u << 18 | u >>> 14;
                    }
                    x0 = x0 + j0 | 0;
                    x1 = x1 + j1 | 0;
                    x2 = x2 + j2 | 0;
                    x3 = x3 + j3 | 0;
                    x4 = x4 + j4 | 0;
                    x5 = x5 + j5 | 0;
                    x6 = x6 + j6 | 0;
                    x7 = x7 + j7 | 0;
                    x8 = x8 + j8 | 0;
                    x9 = x9 + j9 | 0;
                    x10 = x10 + j10 | 0;
                    x11 = x11 + j11 | 0;
                    x12 = x12 + j12 | 0;
                    x13 = x13 + j13 | 0;
                    x14 = x14 + j14 | 0;
                    x15 = x15 + j15 | 0;
                    o[0] = x0 >>> 0 & 255;
                    o[1] = x0 >>> 8 & 255;
                    o[2] = x0 >>> 16 & 255;
                    o[3] = x0 >>> 24 & 255;
                    o[4] = x1 >>> 0 & 255;
                    o[5] = x1 >>> 8 & 255;
                    o[6] = x1 >>> 16 & 255;
                    o[7] = x1 >>> 24 & 255;
                    o[8] = x2 >>> 0 & 255;
                    o[9] = x2 >>> 8 & 255;
                    o[10] = x2 >>> 16 & 255;
                    o[11] = x2 >>> 24 & 255;
                    o[12] = x3 >>> 0 & 255;
                    o[13] = x3 >>> 8 & 255;
                    o[14] = x3 >>> 16 & 255;
                    o[15] = x3 >>> 24 & 255;
                    o[16] = x4 >>> 0 & 255;
                    o[17] = x4 >>> 8 & 255;
                    o[18] = x4 >>> 16 & 255;
                    o[19] = x4 >>> 24 & 255;
                    o[20] = x5 >>> 0 & 255;
                    o[21] = x5 >>> 8 & 255;
                    o[22] = x5 >>> 16 & 255;
                    o[23] = x5 >>> 24 & 255;
                    o[24] = x6 >>> 0 & 255;
                    o[25] = x6 >>> 8 & 255;
                    o[26] = x6 >>> 16 & 255;
                    o[27] = x6 >>> 24 & 255;
                    o[28] = x7 >>> 0 & 255;
                    o[29] = x7 >>> 8 & 255;
                    o[30] = x7 >>> 16 & 255;
                    o[31] = x7 >>> 24 & 255;
                    o[32] = x8 >>> 0 & 255;
                    o[33] = x8 >>> 8 & 255;
                    o[34] = x8 >>> 16 & 255;
                    o[35] = x8 >>> 24 & 255;
                    o[36] = x9 >>> 0 & 255;
                    o[37] = x9 >>> 8 & 255;
                    o[38] = x9 >>> 16 & 255;
                    o[39] = x9 >>> 24 & 255;
                    o[40] = x10 >>> 0 & 255;
                    o[41] = x10 >>> 8 & 255;
                    o[42] = x10 >>> 16 & 255;
                    o[43] = x10 >>> 24 & 255;
                    o[44] = x11 >>> 0 & 255;
                    o[45] = x11 >>> 8 & 255;
                    o[46] = x11 >>> 16 & 255;
                    o[47] = x11 >>> 24 & 255;
                    o[48] = x12 >>> 0 & 255;
                    o[49] = x12 >>> 8 & 255;
                    o[50] = x12 >>> 16 & 255;
                    o[51] = x12 >>> 24 & 255;
                    o[52] = x13 >>> 0 & 255;
                    o[53] = x13 >>> 8 & 255;
                    o[54] = x13 >>> 16 & 255;
                    o[55] = x13 >>> 24 & 255;
                    o[56] = x14 >>> 0 & 255;
                    o[57] = x14 >>> 8 & 255;
                    o[58] = x14 >>> 16 & 255;
                    o[59] = x14 >>> 24 & 255;
                    o[60] = x15 >>> 0 & 255;
                    o[61] = x15 >>> 8 & 255;
                    o[62] = x15 >>> 16 & 255;
                    o[63] = x15 >>> 24 & 255;
                }
                function core_hsalsa20(o, p, k, c) {
                    var j0 = c[0] & 255 | (c[1] & 255) << 8 | (c[2] & 255) << 16 | (c[3] & 255) << 24, j1 = k[0] & 255 | (k[1] & 255) << 8 | (k[2] & 255) << 16 | (k[3] & 255) << 24, j2 = k[4] & 255 | (k[5] & 255) << 8 | (k[6] & 255) << 16 | (k[7] & 255) << 24, j3 = k[8] & 255 | (k[9] & 255) << 8 | (k[10] & 255) << 16 | (k[11] & 255) << 24, j4 = k[12] & 255 | (k[13] & 255) << 8 | (k[14] & 255) << 16 | (k[15] & 255) << 24, j5 = c[4] & 255 | (c[5] & 255) << 8 | (c[6] & 255) << 16 | (c[7] & 255) << 24, j6 = p[0] & 255 | (p[1] & 255) << 8 | (p[2] & 255) << 16 | (p[3] & 255) << 24, j7 = p[4] & 255 | (p[5] & 255) << 8 | (p[6] & 255) << 16 | (p[7] & 255) << 24, j8 = p[8] & 255 | (p[9] & 255) << 8 | (p[10] & 255) << 16 | (p[11] & 255) << 24, j9 = p[12] & 255 | (p[13] & 255) << 8 | (p[14] & 255) << 16 | (p[15] & 255) << 24, j10 = c[8] & 255 | (c[9] & 255) << 8 | (c[10] & 255) << 16 | (c[11] & 255) << 24, j11 = k[16] & 255 | (k[17] & 255) << 8 | (k[18] & 255) << 16 | (k[19] & 255) << 24, j12 = k[20] & 255 | (k[21] & 255) << 8 | (k[22] & 255) << 16 | (k[23] & 255) << 24, j13 = k[24] & 255 | (k[25] & 255) << 8 | (k[26] & 255) << 16 | (k[27] & 255) << 24, j14 = k[28] & 255 | (k[29] & 255) << 8 | (k[30] & 255) << 16 | (k[31] & 255) << 24, j15 = c[12] & 255 | (c[13] & 255) << 8 | (c[14] & 255) << 16 | (c[15] & 255) << 24;
                    var x0 = j0, x1 = j1, x2 = j2, x3 = j3, x4 = j4, x5 = j5, x6 = j6, x7 = j7, x8 = j8, x9 = j9, x10 = j10, x11 = j11, x12 = j12, x13 = j13, x14 = j14, x15 = j15, u;
                    for(var i = 0; i < 20; i += 2){
                        u = x0 + x12 | 0;
                        x4 ^= u << 7 | u >>> 25;
                        u = x4 + x0 | 0;
                        x8 ^= u << 9 | u >>> 23;
                        u = x8 + x4 | 0;
                        x12 ^= u << 13 | u >>> 19;
                        u = x12 + x8 | 0;
                        x0 ^= u << 18 | u >>> 14;
                        u = x5 + x1 | 0;
                        x9 ^= u << 7 | u >>> 25;
                        u = x9 + x5 | 0;
                        x13 ^= u << 9 | u >>> 23;
                        u = x13 + x9 | 0;
                        x1 ^= u << 13 | u >>> 19;
                        u = x1 + x13 | 0;
                        x5 ^= u << 18 | u >>> 14;
                        u = x10 + x6 | 0;
                        x14 ^= u << 7 | u >>> 25;
                        u = x14 + x10 | 0;
                        x2 ^= u << 9 | u >>> 23;
                        u = x2 + x14 | 0;
                        x6 ^= u << 13 | u >>> 19;
                        u = x6 + x2 | 0;
                        x10 ^= u << 18 | u >>> 14;
                        u = x15 + x11 | 0;
                        x3 ^= u << 7 | u >>> 25;
                        u = x3 + x15 | 0;
                        x7 ^= u << 9 | u >>> 23;
                        u = x7 + x3 | 0;
                        x11 ^= u << 13 | u >>> 19;
                        u = x11 + x7 | 0;
                        x15 ^= u << 18 | u >>> 14;
                        u = x0 + x3 | 0;
                        x1 ^= u << 7 | u >>> 25;
                        u = x1 + x0 | 0;
                        x2 ^= u << 9 | u >>> 23;
                        u = x2 + x1 | 0;
                        x3 ^= u << 13 | u >>> 19;
                        u = x3 + x2 | 0;
                        x0 ^= u << 18 | u >>> 14;
                        u = x5 + x4 | 0;
                        x6 ^= u << 7 | u >>> 25;
                        u = x6 + x5 | 0;
                        x7 ^= u << 9 | u >>> 23;
                        u = x7 + x6 | 0;
                        x4 ^= u << 13 | u >>> 19;
                        u = x4 + x7 | 0;
                        x5 ^= u << 18 | u >>> 14;
                        u = x10 + x9 | 0;
                        x11 ^= u << 7 | u >>> 25;
                        u = x11 + x10 | 0;
                        x8 ^= u << 9 | u >>> 23;
                        u = x8 + x11 | 0;
                        x9 ^= u << 13 | u >>> 19;
                        u = x9 + x8 | 0;
                        x10 ^= u << 18 | u >>> 14;
                        u = x15 + x14 | 0;
                        x12 ^= u << 7 | u >>> 25;
                        u = x12 + x15 | 0;
                        x13 ^= u << 9 | u >>> 23;
                        u = x13 + x12 | 0;
                        x14 ^= u << 13 | u >>> 19;
                        u = x14 + x13 | 0;
                        x15 ^= u << 18 | u >>> 14;
                    }
                    o[0] = x0 >>> 0 & 255;
                    o[1] = x0 >>> 8 & 255;
                    o[2] = x0 >>> 16 & 255;
                    o[3] = x0 >>> 24 & 255;
                    o[4] = x5 >>> 0 & 255;
                    o[5] = x5 >>> 8 & 255;
                    o[6] = x5 >>> 16 & 255;
                    o[7] = x5 >>> 24 & 255;
                    o[8] = x10 >>> 0 & 255;
                    o[9] = x10 >>> 8 & 255;
                    o[10] = x10 >>> 16 & 255;
                    o[11] = x10 >>> 24 & 255;
                    o[12] = x15 >>> 0 & 255;
                    o[13] = x15 >>> 8 & 255;
                    o[14] = x15 >>> 16 & 255;
                    o[15] = x15 >>> 24 & 255;
                    o[16] = x6 >>> 0 & 255;
                    o[17] = x6 >>> 8 & 255;
                    o[18] = x6 >>> 16 & 255;
                    o[19] = x6 >>> 24 & 255;
                    o[20] = x7 >>> 0 & 255;
                    o[21] = x7 >>> 8 & 255;
                    o[22] = x7 >>> 16 & 255;
                    o[23] = x7 >>> 24 & 255;
                    o[24] = x8 >>> 0 & 255;
                    o[25] = x8 >>> 8 & 255;
                    o[26] = x8 >>> 16 & 255;
                    o[27] = x8 >>> 24 & 255;
                    o[28] = x9 >>> 0 & 255;
                    o[29] = x9 >>> 8 & 255;
                    o[30] = x9 >>> 16 & 255;
                    o[31] = x9 >>> 24 & 255;
                }
                function crypto_core_salsa20(out, inp, k, c) {
                    core_salsa20(out, inp, k, c);
                }
                function crypto_core_hsalsa20(out, inp, k, c) {
                    core_hsalsa20(out, inp, k, c);
                }
                var sigma = new Uint8Array([
                    101,
                    120,
                    112,
                    97,
                    110,
                    100,
                    32,
                    51,
                    50,
                    45,
                    98,
                    121,
                    116,
                    101,
                    32,
                    107
                ]);
                // "expand 32-byte k"
                function crypto_stream_salsa20_xor(c, cpos, m, mpos, b, n, k) {
                    var z = new Uint8Array(16), x = new Uint8Array(64);
                    var u, i;
                    for(i = 0; i < 16; i++)z[i] = 0;
                    for(i = 0; i < 8; i++)z[i] = n[i];
                    while(b >= 64){
                        crypto_core_salsa20(x, z, k, sigma);
                        for(i = 0; i < 64; i++)c[cpos + i] = m[mpos + i] ^ x[i];
                        u = 1;
                        for(i = 8; i < 16; i++){
                            u = u + (z[i] & 255) | 0;
                            z[i] = u & 255;
                            u >>>= 8;
                        }
                        b -= 64;
                        cpos += 64;
                        mpos += 64;
                    }
                    if (b > 0) {
                        crypto_core_salsa20(x, z, k, sigma);
                        for(i = 0; i < b; i++)c[cpos + i] = m[mpos + i] ^ x[i];
                    }
                    return 0;
                }
                function crypto_stream_salsa20(c, cpos, b, n, k) {
                    var z = new Uint8Array(16), x = new Uint8Array(64);
                    var u, i;
                    for(i = 0; i < 16; i++)z[i] = 0;
                    for(i = 0; i < 8; i++)z[i] = n[i];
                    while(b >= 64){
                        crypto_core_salsa20(x, z, k, sigma);
                        for(i = 0; i < 64; i++)c[cpos + i] = x[i];
                        u = 1;
                        for(i = 8; i < 16; i++){
                            u = u + (z[i] & 255) | 0;
                            z[i] = u & 255;
                            u >>>= 8;
                        }
                        b -= 64;
                        cpos += 64;
                    }
                    if (b > 0) {
                        crypto_core_salsa20(x, z, k, sigma);
                        for(i = 0; i < b; i++)c[cpos + i] = x[i];
                    }
                    return 0;
                }
                function crypto_stream(c, cpos, d, n, k) {
                    var s = new Uint8Array(32);
                    crypto_core_hsalsa20(s, n, k, sigma);
                    var sn = new Uint8Array(8);
                    for(var i = 0; i < 8; i++)sn[i] = n[i + 16];
                    return crypto_stream_salsa20(c, cpos, d, sn, s);
                }
                function crypto_stream_xor(c, cpos, m, mpos, d, n, k) {
                    var s = new Uint8Array(32);
                    crypto_core_hsalsa20(s, n, k, sigma);
                    var sn = new Uint8Array(8);
                    for(var i = 0; i < 8; i++)sn[i] = n[i + 16];
                    return crypto_stream_salsa20_xor(c, cpos, m, mpos, d, sn, s);
                }
                /*
	* Port of Andrew Moon's Poly1305-donna-16. Public domain.
	* https://github.com/floodyberry/poly1305-donna
	*/ var poly1305 = function(key) {
                    this.buffer = new Uint8Array(16);
                    this.r = new Uint16Array(10);
                    this.h = new Uint16Array(10);
                    this.pad = new Uint16Array(8);
                    this.leftover = 0;
                    this.fin = 0;
                    var t0, t1, t2, t3, t4, t5, t6, t7;
                    t0 = key[0] & 255 | (key[1] & 255) << 8;
                    this.r[0] = t0 & 8191;
                    t1 = key[2] & 255 | (key[3] & 255) << 8;
                    this.r[1] = (t0 >>> 13 | t1 << 3) & 8191;
                    t2 = key[4] & 255 | (key[5] & 255) << 8;
                    this.r[2] = (t1 >>> 10 | t2 << 6) & 7939;
                    t3 = key[6] & 255 | (key[7] & 255) << 8;
                    this.r[3] = (t2 >>> 7 | t3 << 9) & 8191;
                    t4 = key[8] & 255 | (key[9] & 255) << 8;
                    this.r[4] = (t3 >>> 4 | t4 << 12) & 255;
                    this.r[5] = t4 >>> 1 & 8190;
                    t5 = key[10] & 255 | (key[11] & 255) << 8;
                    this.r[6] = (t4 >>> 14 | t5 << 2) & 8191;
                    t6 = key[12] & 255 | (key[13] & 255) << 8;
                    this.r[7] = (t5 >>> 11 | t6 << 5) & 8065;
                    t7 = key[14] & 255 | (key[15] & 255) << 8;
                    this.r[8] = (t6 >>> 8 | t7 << 8) & 8191;
                    this.r[9] = t7 >>> 5 & 127;
                    this.pad[0] = key[16] & 255 | (key[17] & 255) << 8;
                    this.pad[1] = key[18] & 255 | (key[19] & 255) << 8;
                    this.pad[2] = key[20] & 255 | (key[21] & 255) << 8;
                    this.pad[3] = key[22] & 255 | (key[23] & 255) << 8;
                    this.pad[4] = key[24] & 255 | (key[25] & 255) << 8;
                    this.pad[5] = key[26] & 255 | (key[27] & 255) << 8;
                    this.pad[6] = key[28] & 255 | (key[29] & 255) << 8;
                    this.pad[7] = key[30] & 255 | (key[31] & 255) << 8;
                };
                poly1305.prototype.blocks = function(m, mpos, bytes) {
                    var hibit = this.fin ? 0 : 2048;
                    var t0, t1, t2, t3, t4, t5, t6, t7, c;
                    var d0, d1, d2, d3, d4, d5, d6, d7, d8, d9;
                    var h0 = this.h[0], h1 = this.h[1], h2 = this.h[2], h3 = this.h[3], h4 = this.h[4], h5 = this.h[5], h6 = this.h[6], h7 = this.h[7], h8 = this.h[8], h9 = this.h[9];
                    var r0 = this.r[0], r1 = this.r[1], r2 = this.r[2], r3 = this.r[3], r4 = this.r[4], r5 = this.r[5], r6 = this.r[6], r7 = this.r[7], r8 = this.r[8], r9 = this.r[9];
                    while(bytes >= 16){
                        t0 = m[mpos + 0] & 255 | (m[mpos + 1] & 255) << 8;
                        h0 += t0 & 8191;
                        t1 = m[mpos + 2] & 255 | (m[mpos + 3] & 255) << 8;
                        h1 += (t0 >>> 13 | t1 << 3) & 8191;
                        t2 = m[mpos + 4] & 255 | (m[mpos + 5] & 255) << 8;
                        h2 += (t1 >>> 10 | t2 << 6) & 8191;
                        t3 = m[mpos + 6] & 255 | (m[mpos + 7] & 255) << 8;
                        h3 += (t2 >>> 7 | t3 << 9) & 8191;
                        t4 = m[mpos + 8] & 255 | (m[mpos + 9] & 255) << 8;
                        h4 += (t3 >>> 4 | t4 << 12) & 8191;
                        h5 += t4 >>> 1 & 8191;
                        t5 = m[mpos + 10] & 255 | (m[mpos + 11] & 255) << 8;
                        h6 += (t4 >>> 14 | t5 << 2) & 8191;
                        t6 = m[mpos + 12] & 255 | (m[mpos + 13] & 255) << 8;
                        h7 += (t5 >>> 11 | t6 << 5) & 8191;
                        t7 = m[mpos + 14] & 255 | (m[mpos + 15] & 255) << 8;
                        h8 += (t6 >>> 8 | t7 << 8) & 8191;
                        h9 += t7 >>> 5 | hibit;
                        c = 0;
                        d0 = c;
                        d0 += h0 * r0;
                        d0 += h1 * (5 * r9);
                        d0 += h2 * (5 * r8);
                        d0 += h3 * (5 * r7);
                        d0 += h4 * (5 * r6);
                        c = d0 >>> 13;
                        d0 &= 8191;
                        d0 += h5 * (5 * r5);
                        d0 += h6 * (5 * r4);
                        d0 += h7 * (5 * r3);
                        d0 += h8 * (5 * r2);
                        d0 += h9 * (5 * r1);
                        c += d0 >>> 13;
                        d0 &= 8191;
                        d1 = c;
                        d1 += h0 * r1;
                        d1 += h1 * r0;
                        d1 += h2 * (5 * r9);
                        d1 += h3 * (5 * r8);
                        d1 += h4 * (5 * r7);
                        c = d1 >>> 13;
                        d1 &= 8191;
                        d1 += h5 * (5 * r6);
                        d1 += h6 * (5 * r5);
                        d1 += h7 * (5 * r4);
                        d1 += h8 * (5 * r3);
                        d1 += h9 * (5 * r2);
                        c += d1 >>> 13;
                        d1 &= 8191;
                        d2 = c;
                        d2 += h0 * r2;
                        d2 += h1 * r1;
                        d2 += h2 * r0;
                        d2 += h3 * (5 * r9);
                        d2 += h4 * (5 * r8);
                        c = d2 >>> 13;
                        d2 &= 8191;
                        d2 += h5 * (5 * r7);
                        d2 += h6 * (5 * r6);
                        d2 += h7 * (5 * r5);
                        d2 += h8 * (5 * r4);
                        d2 += h9 * (5 * r3);
                        c += d2 >>> 13;
                        d2 &= 8191;
                        d3 = c;
                        d3 += h0 * r3;
                        d3 += h1 * r2;
                        d3 += h2 * r1;
                        d3 += h3 * r0;
                        d3 += h4 * (5 * r9);
                        c = d3 >>> 13;
                        d3 &= 8191;
                        d3 += h5 * (5 * r8);
                        d3 += h6 * (5 * r7);
                        d3 += h7 * (5 * r6);
                        d3 += h8 * (5 * r5);
                        d3 += h9 * (5 * r4);
                        c += d3 >>> 13;
                        d3 &= 8191;
                        d4 = c;
                        d4 += h0 * r4;
                        d4 += h1 * r3;
                        d4 += h2 * r2;
                        d4 += h3 * r1;
                        d4 += h4 * r0;
                        c = d4 >>> 13;
                        d4 &= 8191;
                        d4 += h5 * (5 * r9);
                        d4 += h6 * (5 * r8);
                        d4 += h7 * (5 * r7);
                        d4 += h8 * (5 * r6);
                        d4 += h9 * (5 * r5);
                        c += d4 >>> 13;
                        d4 &= 8191;
                        d5 = c;
                        d5 += h0 * r5;
                        d5 += h1 * r4;
                        d5 += h2 * r3;
                        d5 += h3 * r2;
                        d5 += h4 * r1;
                        c = d5 >>> 13;
                        d5 &= 8191;
                        d5 += h5 * r0;
                        d5 += h6 * (5 * r9);
                        d5 += h7 * (5 * r8);
                        d5 += h8 * (5 * r7);
                        d5 += h9 * (5 * r6);
                        c += d5 >>> 13;
                        d5 &= 8191;
                        d6 = c;
                        d6 += h0 * r6;
                        d6 += h1 * r5;
                        d6 += h2 * r4;
                        d6 += h3 * r3;
                        d6 += h4 * r2;
                        c = d6 >>> 13;
                        d6 &= 8191;
                        d6 += h5 * r1;
                        d6 += h6 * r0;
                        d6 += h7 * (5 * r9);
                        d6 += h8 * (5 * r8);
                        d6 += h9 * (5 * r7);
                        c += d6 >>> 13;
                        d6 &= 8191;
                        d7 = c;
                        d7 += h0 * r7;
                        d7 += h1 * r6;
                        d7 += h2 * r5;
                        d7 += h3 * r4;
                        d7 += h4 * r3;
                        c = d7 >>> 13;
                        d7 &= 8191;
                        d7 += h5 * r2;
                        d7 += h6 * r1;
                        d7 += h7 * r0;
                        d7 += h8 * (5 * r9);
                        d7 += h9 * (5 * r8);
                        c += d7 >>> 13;
                        d7 &= 8191;
                        d8 = c;
                        d8 += h0 * r8;
                        d8 += h1 * r7;
                        d8 += h2 * r6;
                        d8 += h3 * r5;
                        d8 += h4 * r4;
                        c = d8 >>> 13;
                        d8 &= 8191;
                        d8 += h5 * r3;
                        d8 += h6 * r2;
                        d8 += h7 * r1;
                        d8 += h8 * r0;
                        d8 += h9 * (5 * r9);
                        c += d8 >>> 13;
                        d8 &= 8191;
                        d9 = c;
                        d9 += h0 * r9;
                        d9 += h1 * r8;
                        d9 += h2 * r7;
                        d9 += h3 * r6;
                        d9 += h4 * r5;
                        c = d9 >>> 13;
                        d9 &= 8191;
                        d9 += h5 * r4;
                        d9 += h6 * r3;
                        d9 += h7 * r2;
                        d9 += h8 * r1;
                        d9 += h9 * r0;
                        c += d9 >>> 13;
                        d9 &= 8191;
                        c = (c << 2) + c | 0;
                        c = c + d0 | 0;
                        d0 = c & 8191;
                        c = c >>> 13;
                        d1 += c;
                        h0 = d0;
                        h1 = d1;
                        h2 = d2;
                        h3 = d3;
                        h4 = d4;
                        h5 = d5;
                        h6 = d6;
                        h7 = d7;
                        h8 = d8;
                        h9 = d9;
                        mpos += 16;
                        bytes -= 16;
                    }
                    this.h[0] = h0;
                    this.h[1] = h1;
                    this.h[2] = h2;
                    this.h[3] = h3;
                    this.h[4] = h4;
                    this.h[5] = h5;
                    this.h[6] = h6;
                    this.h[7] = h7;
                    this.h[8] = h8;
                    this.h[9] = h9;
                };
                poly1305.prototype.finish = function(mac, macpos) {
                    var g = new Uint16Array(10);
                    var c, mask, f, i;
                    if (this.leftover) {
                        i = this.leftover;
                        this.buffer[i++] = 1;
                        for(; i < 16; i++)this.buffer[i] = 0;
                        this.fin = 1;
                        this.blocks(this.buffer, 0, 16);
                    }
                    c = this.h[1] >>> 13;
                    this.h[1] &= 8191;
                    for(i = 2; i < 10; i++){
                        this.h[i] += c;
                        c = this.h[i] >>> 13;
                        this.h[i] &= 8191;
                    }
                    this.h[0] += c * 5;
                    c = this.h[0] >>> 13;
                    this.h[0] &= 8191;
                    this.h[1] += c;
                    c = this.h[1] >>> 13;
                    this.h[1] &= 8191;
                    this.h[2] += c;
                    g[0] = this.h[0] + 5;
                    c = g[0] >>> 13;
                    g[0] &= 8191;
                    for(i = 1; i < 10; i++){
                        g[i] = this.h[i] + c;
                        c = g[i] >>> 13;
                        g[i] &= 8191;
                    }
                    g[9] -= 8192;
                    mask = (c ^ 1) - 1;
                    for(i = 0; i < 10; i++)g[i] &= mask;
                    mask = ~mask;
                    for(i = 0; i < 10; i++)this.h[i] = this.h[i] & mask | g[i];
                    this.h[0] = (this.h[0] | this.h[1] << 13) & 65535;
                    this.h[1] = (this.h[1] >>> 3 | this.h[2] << 10) & 65535;
                    this.h[2] = (this.h[2] >>> 6 | this.h[3] << 7) & 65535;
                    this.h[3] = (this.h[3] >>> 9 | this.h[4] << 4) & 65535;
                    this.h[4] = (this.h[4] >>> 12 | this.h[5] << 1 | this.h[6] << 14) & 65535;
                    this.h[5] = (this.h[6] >>> 2 | this.h[7] << 11) & 65535;
                    this.h[6] = (this.h[7] >>> 5 | this.h[8] << 8) & 65535;
                    this.h[7] = (this.h[8] >>> 8 | this.h[9] << 5) & 65535;
                    f = this.h[0] + this.pad[0];
                    this.h[0] = f & 65535;
                    for(i = 1; i < 8; i++){
                        f = (this.h[i] + this.pad[i] | 0) + (f >>> 16) | 0;
                        this.h[i] = f & 65535;
                    }
                    mac[macpos + 0] = this.h[0] >>> 0 & 255;
                    mac[macpos + 1] = this.h[0] >>> 8 & 255;
                    mac[macpos + 2] = this.h[1] >>> 0 & 255;
                    mac[macpos + 3] = this.h[1] >>> 8 & 255;
                    mac[macpos + 4] = this.h[2] >>> 0 & 255;
                    mac[macpos + 5] = this.h[2] >>> 8 & 255;
                    mac[macpos + 6] = this.h[3] >>> 0 & 255;
                    mac[macpos + 7] = this.h[3] >>> 8 & 255;
                    mac[macpos + 8] = this.h[4] >>> 0 & 255;
                    mac[macpos + 9] = this.h[4] >>> 8 & 255;
                    mac[macpos + 10] = this.h[5] >>> 0 & 255;
                    mac[macpos + 11] = this.h[5] >>> 8 & 255;
                    mac[macpos + 12] = this.h[6] >>> 0 & 255;
                    mac[macpos + 13] = this.h[6] >>> 8 & 255;
                    mac[macpos + 14] = this.h[7] >>> 0 & 255;
                    mac[macpos + 15] = this.h[7] >>> 8 & 255;
                };
                poly1305.prototype.update = function(m, mpos, bytes) {
                    var i, want;
                    if (this.leftover) {
                        want = 16 - this.leftover;
                        if (want > bytes) want = bytes;
                        for(i = 0; i < want; i++)this.buffer[this.leftover + i] = m[mpos + i];
                        bytes -= want;
                        mpos += want;
                        this.leftover += want;
                        if (this.leftover < 16) return;
                        this.blocks(this.buffer, 0, 16);
                        this.leftover = 0;
                    }
                    if (bytes >= 16) {
                        want = bytes - bytes % 16;
                        this.blocks(m, mpos, want);
                        mpos += want;
                        bytes -= want;
                    }
                    if (bytes) {
                        for(i = 0; i < bytes; i++)this.buffer[this.leftover + i] = m[mpos + i];
                        this.leftover += bytes;
                    }
                };
                function crypto_onetimeauth(out, outpos, m, mpos, n, k) {
                    var s = new poly1305(k);
                    s.update(m, mpos, n);
                    s.finish(out, outpos);
                    return 0;
                }
                function crypto_onetimeauth_verify(h, hpos, m, mpos, n, k) {
                    var x = new Uint8Array(16);
                    crypto_onetimeauth(x, 0, m, mpos, n, k);
                    return crypto_verify_16(h, hpos, x, 0);
                }
                function crypto_secretbox(c, m, d, n, k) {
                    var i;
                    if (d < 32) return -1;
                    crypto_stream_xor(c, 0, m, 0, d, n, k);
                    crypto_onetimeauth(c, 16, c, 32, d - 32, c);
                    for(i = 0; i < 16; i++)c[i] = 0;
                    return 0;
                }
                function crypto_secretbox_open(m, c, d, n, k) {
                    var i;
                    var x = new Uint8Array(32);
                    if (d < 32) return -1;
                    crypto_stream(x, 0, 32, n, k);
                    if (crypto_onetimeauth_verify(c, 16, c, 32, d - 32, x) !== 0) return -1;
                    crypto_stream_xor(m, 0, c, 0, d, n, k);
                    for(i = 0; i < 32; i++)m[i] = 0;
                    return 0;
                }
                function set25519(r, a) {
                    var i;
                    for(i = 0; i < 16; i++)r[i] = a[i] | 0;
                }
                function car25519(o) {
                    var i, v, c = 1;
                    for(i = 0; i < 16; i++){
                        v = o[i] + c + 65535;
                        c = Math.floor(v / 65536);
                        o[i] = v - c * 65536;
                    }
                    o[0] += c - 1 + 37 * (c - 1);
                }
                function sel25519(p, q, b) {
                    var t, c = ~(b - 1);
                    for(var i = 0; i < 16; i++){
                        t = c & (p[i] ^ q[i]);
                        p[i] ^= t;
                        q[i] ^= t;
                    }
                }
                function pack25519(o, n) {
                    var i, j, b;
                    var m = gf(), t = gf();
                    for(i = 0; i < 16; i++)t[i] = n[i];
                    car25519(t);
                    car25519(t);
                    car25519(t);
                    for(j = 0; j < 2; j++){
                        m[0] = t[0] - 65517;
                        for(i = 1; i < 15; i++){
                            m[i] = t[i] - 65535 - (m[i - 1] >> 16 & 1);
                            m[i - 1] &= 65535;
                        }
                        m[15] = t[15] - 32767 - (m[14] >> 16 & 1);
                        b = m[15] >> 16 & 1;
                        m[14] &= 65535;
                        sel25519(t, m, 1 - b);
                    }
                    for(i = 0; i < 16; i++){
                        o[2 * i] = t[i] & 255;
                        o[2 * i + 1] = t[i] >> 8;
                    }
                }
                function neq25519(a, b) {
                    var c = new Uint8Array(32), d = new Uint8Array(32);
                    pack25519(c, a);
                    pack25519(d, b);
                    return crypto_verify_32(c, 0, d, 0);
                }
                function par25519(a) {
                    var d = new Uint8Array(32);
                    pack25519(d, a);
                    return d[0] & 1;
                }
                function unpack25519(o, n) {
                    var i;
                    for(i = 0; i < 16; i++)o[i] = n[2 * i] + (n[2 * i + 1] << 8);
                    o[15] &= 32767;
                }
                function A(o, a, b) {
                    for(var i = 0; i < 16; i++)o[i] = a[i] + b[i];
                }
                function Z(o, a, b) {
                    for(var i = 0; i < 16; i++)o[i] = a[i] - b[i];
                }
                function M(o, a, b) {
                    var v, c, t0 = 0, t1 = 0, t2 = 0, t3 = 0, t4 = 0, t5 = 0, t6 = 0, t7 = 0, t8 = 0, t9 = 0, t10 = 0, t11 = 0, t12 = 0, t13 = 0, t14 = 0, t15 = 0, t16 = 0, t17 = 0, t18 = 0, t19 = 0, t20 = 0, t21 = 0, t22 = 0, t23 = 0, t24 = 0, t25 = 0, t26 = 0, t27 = 0, t28 = 0, t29 = 0, t30 = 0, b0 = b[0], b1 = b[1], b2 = b[2], b3 = b[3], b4 = b[4], b5 = b[5], b6 = b[6], b7 = b[7], b8 = b[8], b9 = b[9], b10 = b[10], b11 = b[11], b12 = b[12], b13 = b[13], b14 = b[14], b15 = b[15];
                    v = a[0];
                    t0 += v * b0;
                    t1 += v * b1;
                    t2 += v * b2;
                    t3 += v * b3;
                    t4 += v * b4;
                    t5 += v * b5;
                    t6 += v * b6;
                    t7 += v * b7;
                    t8 += v * b8;
                    t9 += v * b9;
                    t10 += v * b10;
                    t11 += v * b11;
                    t12 += v * b12;
                    t13 += v * b13;
                    t14 += v * b14;
                    t15 += v * b15;
                    v = a[1];
                    t1 += v * b0;
                    t2 += v * b1;
                    t3 += v * b2;
                    t4 += v * b3;
                    t5 += v * b4;
                    t6 += v * b5;
                    t7 += v * b6;
                    t8 += v * b7;
                    t9 += v * b8;
                    t10 += v * b9;
                    t11 += v * b10;
                    t12 += v * b11;
                    t13 += v * b12;
                    t14 += v * b13;
                    t15 += v * b14;
                    t16 += v * b15;
                    v = a[2];
                    t2 += v * b0;
                    t3 += v * b1;
                    t4 += v * b2;
                    t5 += v * b3;
                    t6 += v * b4;
                    t7 += v * b5;
                    t8 += v * b6;
                    t9 += v * b7;
                    t10 += v * b8;
                    t11 += v * b9;
                    t12 += v * b10;
                    t13 += v * b11;
                    t14 += v * b12;
                    t15 += v * b13;
                    t16 += v * b14;
                    t17 += v * b15;
                    v = a[3];
                    t3 += v * b0;
                    t4 += v * b1;
                    t5 += v * b2;
                    t6 += v * b3;
                    t7 += v * b4;
                    t8 += v * b5;
                    t9 += v * b6;
                    t10 += v * b7;
                    t11 += v * b8;
                    t12 += v * b9;
                    t13 += v * b10;
                    t14 += v * b11;
                    t15 += v * b12;
                    t16 += v * b13;
                    t17 += v * b14;
                    t18 += v * b15;
                    v = a[4];
                    t4 += v * b0;
                    t5 += v * b1;
                    t6 += v * b2;
                    t7 += v * b3;
                    t8 += v * b4;
                    t9 += v * b5;
                    t10 += v * b6;
                    t11 += v * b7;
                    t12 += v * b8;
                    t13 += v * b9;
                    t14 += v * b10;
                    t15 += v * b11;
                    t16 += v * b12;
                    t17 += v * b13;
                    t18 += v * b14;
                    t19 += v * b15;
                    v = a[5];
                    t5 += v * b0;
                    t6 += v * b1;
                    t7 += v * b2;
                    t8 += v * b3;
                    t9 += v * b4;
                    t10 += v * b5;
                    t11 += v * b6;
                    t12 += v * b7;
                    t13 += v * b8;
                    t14 += v * b9;
                    t15 += v * b10;
                    t16 += v * b11;
                    t17 += v * b12;
                    t18 += v * b13;
                    t19 += v * b14;
                    t20 += v * b15;
                    v = a[6];
                    t6 += v * b0;
                    t7 += v * b1;
                    t8 += v * b2;
                    t9 += v * b3;
                    t10 += v * b4;
                    t11 += v * b5;
                    t12 += v * b6;
                    t13 += v * b7;
                    t14 += v * b8;
                    t15 += v * b9;
                    t16 += v * b10;
                    t17 += v * b11;
                    t18 += v * b12;
                    t19 += v * b13;
                    t20 += v * b14;
                    t21 += v * b15;
                    v = a[7];
                    t7 += v * b0;
                    t8 += v * b1;
                    t9 += v * b2;
                    t10 += v * b3;
                    t11 += v * b4;
                    t12 += v * b5;
                    t13 += v * b6;
                    t14 += v * b7;
                    t15 += v * b8;
                    t16 += v * b9;
                    t17 += v * b10;
                    t18 += v * b11;
                    t19 += v * b12;
                    t20 += v * b13;
                    t21 += v * b14;
                    t22 += v * b15;
                    v = a[8];
                    t8 += v * b0;
                    t9 += v * b1;
                    t10 += v * b2;
                    t11 += v * b3;
                    t12 += v * b4;
                    t13 += v * b5;
                    t14 += v * b6;
                    t15 += v * b7;
                    t16 += v * b8;
                    t17 += v * b9;
                    t18 += v * b10;
                    t19 += v * b11;
                    t20 += v * b12;
                    t21 += v * b13;
                    t22 += v * b14;
                    t23 += v * b15;
                    v = a[9];
                    t9 += v * b0;
                    t10 += v * b1;
                    t11 += v * b2;
                    t12 += v * b3;
                    t13 += v * b4;
                    t14 += v * b5;
                    t15 += v * b6;
                    t16 += v * b7;
                    t17 += v * b8;
                    t18 += v * b9;
                    t19 += v * b10;
                    t20 += v * b11;
                    t21 += v * b12;
                    t22 += v * b13;
                    t23 += v * b14;
                    t24 += v * b15;
                    v = a[10];
                    t10 += v * b0;
                    t11 += v * b1;
                    t12 += v * b2;
                    t13 += v * b3;
                    t14 += v * b4;
                    t15 += v * b5;
                    t16 += v * b6;
                    t17 += v * b7;
                    t18 += v * b8;
                    t19 += v * b9;
                    t20 += v * b10;
                    t21 += v * b11;
                    t22 += v * b12;
                    t23 += v * b13;
                    t24 += v * b14;
                    t25 += v * b15;
                    v = a[11];
                    t11 += v * b0;
                    t12 += v * b1;
                    t13 += v * b2;
                    t14 += v * b3;
                    t15 += v * b4;
                    t16 += v * b5;
                    t17 += v * b6;
                    t18 += v * b7;
                    t19 += v * b8;
                    t20 += v * b9;
                    t21 += v * b10;
                    t22 += v * b11;
                    t23 += v * b12;
                    t24 += v * b13;
                    t25 += v * b14;
                    t26 += v * b15;
                    v = a[12];
                    t12 += v * b0;
                    t13 += v * b1;
                    t14 += v * b2;
                    t15 += v * b3;
                    t16 += v * b4;
                    t17 += v * b5;
                    t18 += v * b6;
                    t19 += v * b7;
                    t20 += v * b8;
                    t21 += v * b9;
                    t22 += v * b10;
                    t23 += v * b11;
                    t24 += v * b12;
                    t25 += v * b13;
                    t26 += v * b14;
                    t27 += v * b15;
                    v = a[13];
                    t13 += v * b0;
                    t14 += v * b1;
                    t15 += v * b2;
                    t16 += v * b3;
                    t17 += v * b4;
                    t18 += v * b5;
                    t19 += v * b6;
                    t20 += v * b7;
                    t21 += v * b8;
                    t22 += v * b9;
                    t23 += v * b10;
                    t24 += v * b11;
                    t25 += v * b12;
                    t26 += v * b13;
                    t27 += v * b14;
                    t28 += v * b15;
                    v = a[14];
                    t14 += v * b0;
                    t15 += v * b1;
                    t16 += v * b2;
                    t17 += v * b3;
                    t18 += v * b4;
                    t19 += v * b5;
                    t20 += v * b6;
                    t21 += v * b7;
                    t22 += v * b8;
                    t23 += v * b9;
                    t24 += v * b10;
                    t25 += v * b11;
                    t26 += v * b12;
                    t27 += v * b13;
                    t28 += v * b14;
                    t29 += v * b15;
                    v = a[15];
                    t15 += v * b0;
                    t16 += v * b1;
                    t17 += v * b2;
                    t18 += v * b3;
                    t19 += v * b4;
                    t20 += v * b5;
                    t21 += v * b6;
                    t22 += v * b7;
                    t23 += v * b8;
                    t24 += v * b9;
                    t25 += v * b10;
                    t26 += v * b11;
                    t27 += v * b12;
                    t28 += v * b13;
                    t29 += v * b14;
                    t30 += v * b15;
                    t0 += 38 * t16;
                    t1 += 38 * t17;
                    t2 += 38 * t18;
                    t3 += 38 * t19;
                    t4 += 38 * t20;
                    t5 += 38 * t21;
                    t6 += 38 * t22;
                    t7 += 38 * t23;
                    t8 += 38 * t24;
                    t9 += 38 * t25;
                    t10 += 38 * t26;
                    t11 += 38 * t27;
                    t12 += 38 * t28;
                    t13 += 38 * t29;
                    t14 += 38 * t30;
                    // t15 left as is
                    // first car
                    c = 1;
                    v = t0 + c + 65535;
                    c = Math.floor(v / 65536);
                    t0 = v - c * 65536;
                    v = t1 + c + 65535;
                    c = Math.floor(v / 65536);
                    t1 = v - c * 65536;
                    v = t2 + c + 65535;
                    c = Math.floor(v / 65536);
                    t2 = v - c * 65536;
                    v = t3 + c + 65535;
                    c = Math.floor(v / 65536);
                    t3 = v - c * 65536;
                    v = t4 + c + 65535;
                    c = Math.floor(v / 65536);
                    t4 = v - c * 65536;
                    v = t5 + c + 65535;
                    c = Math.floor(v / 65536);
                    t5 = v - c * 65536;
                    v = t6 + c + 65535;
                    c = Math.floor(v / 65536);
                    t6 = v - c * 65536;
                    v = t7 + c + 65535;
                    c = Math.floor(v / 65536);
                    t7 = v - c * 65536;
                    v = t8 + c + 65535;
                    c = Math.floor(v / 65536);
                    t8 = v - c * 65536;
                    v = t9 + c + 65535;
                    c = Math.floor(v / 65536);
                    t9 = v - c * 65536;
                    v = t10 + c + 65535;
                    c = Math.floor(v / 65536);
                    t10 = v - c * 65536;
                    v = t11 + c + 65535;
                    c = Math.floor(v / 65536);
                    t11 = v - c * 65536;
                    v = t12 + c + 65535;
                    c = Math.floor(v / 65536);
                    t12 = v - c * 65536;
                    v = t13 + c + 65535;
                    c = Math.floor(v / 65536);
                    t13 = v - c * 65536;
                    v = t14 + c + 65535;
                    c = Math.floor(v / 65536);
                    t14 = v - c * 65536;
                    v = t15 + c + 65535;
                    c = Math.floor(v / 65536);
                    t15 = v - c * 65536;
                    t0 += c - 1 + 37 * (c - 1);
                    // second car
                    c = 1;
                    v = t0 + c + 65535;
                    c = Math.floor(v / 65536);
                    t0 = v - c * 65536;
                    v = t1 + c + 65535;
                    c = Math.floor(v / 65536);
                    t1 = v - c * 65536;
                    v = t2 + c + 65535;
                    c = Math.floor(v / 65536);
                    t2 = v - c * 65536;
                    v = t3 + c + 65535;
                    c = Math.floor(v / 65536);
                    t3 = v - c * 65536;
                    v = t4 + c + 65535;
                    c = Math.floor(v / 65536);
                    t4 = v - c * 65536;
                    v = t5 + c + 65535;
                    c = Math.floor(v / 65536);
                    t5 = v - c * 65536;
                    v = t6 + c + 65535;
                    c = Math.floor(v / 65536);
                    t6 = v - c * 65536;
                    v = t7 + c + 65535;
                    c = Math.floor(v / 65536);
                    t7 = v - c * 65536;
                    v = t8 + c + 65535;
                    c = Math.floor(v / 65536);
                    t8 = v - c * 65536;
                    v = t9 + c + 65535;
                    c = Math.floor(v / 65536);
                    t9 = v - c * 65536;
                    v = t10 + c + 65535;
                    c = Math.floor(v / 65536);
                    t10 = v - c * 65536;
                    v = t11 + c + 65535;
                    c = Math.floor(v / 65536);
                    t11 = v - c * 65536;
                    v = t12 + c + 65535;
                    c = Math.floor(v / 65536);
                    t12 = v - c * 65536;
                    v = t13 + c + 65535;
                    c = Math.floor(v / 65536);
                    t13 = v - c * 65536;
                    v = t14 + c + 65535;
                    c = Math.floor(v / 65536);
                    t14 = v - c * 65536;
                    v = t15 + c + 65535;
                    c = Math.floor(v / 65536);
                    t15 = v - c * 65536;
                    t0 += c - 1 + 37 * (c - 1);
                    o[0] = t0;
                    o[1] = t1;
                    o[2] = t2;
                    o[3] = t3;
                    o[4] = t4;
                    o[5] = t5;
                    o[6] = t6;
                    o[7] = t7;
                    o[8] = t8;
                    o[9] = t9;
                    o[10] = t10;
                    o[11] = t11;
                    o[12] = t12;
                    o[13] = t13;
                    o[14] = t14;
                    o[15] = t15;
                }
                function S(o, a) {
                    M(o, a, a);
                }
                function inv25519(o, i) {
                    var c = gf();
                    var a;
                    for(a = 0; a < 16; a++)c[a] = i[a];
                    for(a = 253; a >= 0; a--){
                        S(c, c);
                        if (a !== 2 && a !== 4) M(c, c, i);
                    }
                    for(a = 0; a < 16; a++)o[a] = c[a];
                }
                function pow2523(o, i) {
                    var c = gf();
                    var a;
                    for(a = 0; a < 16; a++)c[a] = i[a];
                    for(a = 250; a >= 0; a--){
                        S(c, c);
                        if (a !== 1) M(c, c, i);
                    }
                    for(a = 0; a < 16; a++)o[a] = c[a];
                }
                function crypto_scalarmult(q, n, p) {
                    var z = new Uint8Array(32);
                    var x = new Float64Array(80), r, i;
                    var a = gf(), b = gf(), c = gf(), d = gf(), e = gf(), f = gf();
                    for(i = 0; i < 31; i++)z[i] = n[i];
                    z[31] = n[31] & 127 | 64;
                    z[0] &= 248;
                    unpack25519(x, p);
                    for(i = 0; i < 16; i++){
                        b[i] = x[i];
                        d[i] = a[i] = c[i] = 0;
                    }
                    a[0] = d[0] = 1;
                    for(i = 254; i >= 0; --i){
                        r = z[i >>> 3] >>> (i & 7) & 1;
                        sel25519(a, b, r);
                        sel25519(c, d, r);
                        A(e, a, c);
                        Z(a, a, c);
                        A(c, b, d);
                        Z(b, b, d);
                        S(d, e);
                        S(f, a);
                        M(a, c, a);
                        M(c, b, e);
                        A(e, a, c);
                        Z(a, a, c);
                        S(b, a);
                        Z(c, d, f);
                        M(a, c, _121665);
                        A(a, a, d);
                        M(c, c, a);
                        M(a, d, f);
                        M(d, b, x);
                        S(b, e);
                        sel25519(a, b, r);
                        sel25519(c, d, r);
                    }
                    for(i = 0; i < 16; i++){
                        x[i + 16] = a[i];
                        x[i + 32] = c[i];
                        x[i + 48] = b[i];
                        x[i + 64] = d[i];
                    }
                    var x32 = x.subarray(32);
                    var x16 = x.subarray(16);
                    inv25519(x32, x32);
                    M(x16, x16, x32);
                    pack25519(q, x16);
                    return 0;
                }
                function crypto_scalarmult_base(q, n) {
                    return crypto_scalarmult(q, n, _9);
                }
                function crypto_box_keypair(y, x) {
                    randombytes(x, 32);
                    return crypto_scalarmult_base(y, x);
                }
                function crypto_box_beforenm(k, y, x) {
                    var s = new Uint8Array(32);
                    crypto_scalarmult(s, x, y);
                    return crypto_core_hsalsa20(k, _0, s, sigma);
                }
                var crypto_box_afternm = crypto_secretbox;
                var crypto_box_open_afternm = crypto_secretbox_open;
                function crypto_box(c, m, d, n, y, x) {
                    var k = new Uint8Array(32);
                    crypto_box_beforenm(k, y, x);
                    return crypto_box_afternm(c, m, d, n, k);
                }
                function crypto_box_open(m, c, d, n, y, x) {
                    var k = new Uint8Array(32);
                    crypto_box_beforenm(k, y, x);
                    return crypto_box_open_afternm(m, c, d, n, k);
                }
                var K = [
                    1116352408,
                    3609767458,
                    1899447441,
                    602891725,
                    3049323471,
                    3964484399,
                    3921009573,
                    2173295548,
                    961987163,
                    4081628472,
                    1508970993,
                    3053834265,
                    2453635748,
                    2937671579,
                    2870763221,
                    3664609560,
                    3624381080,
                    2734883394,
                    310598401,
                    1164996542,
                    607225278,
                    1323610764,
                    1426881987,
                    3590304994,
                    1925078388,
                    4068182383,
                    2162078206,
                    991336113,
                    2614888103,
                    633803317,
                    3248222580,
                    3479774868,
                    3835390401,
                    2666613458,
                    4022224774,
                    944711139,
                    264347078,
                    2341262773,
                    604807628,
                    2007800933,
                    770255983,
                    1495990901,
                    1249150122,
                    1856431235,
                    1555081692,
                    3175218132,
                    1996064986,
                    2198950837,
                    2554220882,
                    3999719339,
                    2821834349,
                    766784016,
                    2952996808,
                    2566594879,
                    3210313671,
                    3203337956,
                    3336571891,
                    1034457026,
                    3584528711,
                    2466948901,
                    113926993,
                    3758326383,
                    338241895,
                    168717936,
                    666307205,
                    1188179964,
                    773529912,
                    1546045734,
                    1294757372,
                    1522805485,
                    1396182291,
                    2643833823,
                    1695183700,
                    2343527390,
                    1986661051,
                    1014477480,
                    2177026350,
                    1206759142,
                    2456956037,
                    344077627,
                    2730485921,
                    1290863460,
                    2820302411,
                    3158454273,
                    3259730800,
                    3505952657,
                    3345764771,
                    106217008,
                    3516065817,
                    3606008344,
                    3600352804,
                    1432725776,
                    4094571909,
                    1467031594,
                    275423344,
                    851169720,
                    430227734,
                    3100823752,
                    506948616,
                    1363258195,
                    659060556,
                    3750685593,
                    883997877,
                    3785050280,
                    958139571,
                    3318307427,
                    1322822218,
                    3812723403,
                    1537002063,
                    2003034995,
                    1747873779,
                    3602036899,
                    1955562222,
                    1575990012,
                    2024104815,
                    1125592928,
                    2227730452,
                    2716904306,
                    2361852424,
                    442776044,
                    2428436474,
                    593698344,
                    2756734187,
                    3733110249,
                    3204031479,
                    2999351573,
                    3329325298,
                    3815920427,
                    3391569614,
                    3928383900,
                    3515267271,
                    566280711,
                    3940187606,
                    3454069534,
                    4118630271,
                    4000239992,
                    116418474,
                    1914138554,
                    174292421,
                    2731055270,
                    289380356,
                    3203993006,
                    460393269,
                    320620315,
                    685471733,
                    587496836,
                    852142971,
                    1086792851,
                    1017036298,
                    365543100,
                    1126000580,
                    2618297676,
                    1288033470,
                    3409855158,
                    1501505948,
                    4234509866,
                    1607167915,
                    987167468,
                    1816402316,
                    1246189591
                ];
                function crypto_hashblocks_hl(hh, hl, m, n) {
                    var wh = new Int32Array(16), wl = new Int32Array(16), bh0, bh1, bh2, bh3, bh4, bh5, bh6, bh7, bl0, bl1, bl2, bl3, bl4, bl5, bl6, bl7, th, tl, i, j, h, l, a, b, c, d;
                    var ah0 = hh[0], ah1 = hh[1], ah2 = hh[2], ah3 = hh[3], ah4 = hh[4], ah5 = hh[5], ah6 = hh[6], ah7 = hh[7], al0 = hl[0], al1 = hl[1], al2 = hl[2], al3 = hl[3], al4 = hl[4], al5 = hl[5], al6 = hl[6], al7 = hl[7];
                    var pos = 0;
                    while(n >= 128){
                        for(i = 0; i < 16; i++){
                            j = 8 * i + pos;
                            wh[i] = m[j + 0] << 24 | m[j + 1] << 16 | m[j + 2] << 8 | m[j + 3];
                            wl[i] = m[j + 4] << 24 | m[j + 5] << 16 | m[j + 6] << 8 | m[j + 7];
                        }
                        for(i = 0; i < 80; i++){
                            bh0 = ah0;
                            bh1 = ah1;
                            bh2 = ah2;
                            bh3 = ah3;
                            bh4 = ah4;
                            bh5 = ah5;
                            bh6 = ah6;
                            bh7 = ah7;
                            bl0 = al0;
                            bl1 = al1;
                            bl2 = al2;
                            bl3 = al3;
                            bl4 = al4;
                            bl5 = al5;
                            bl6 = al6;
                            bl7 = al7;
                            // add
                            h = ah7;
                            l = al7;
                            a = l & 65535;
                            b = l >>> 16;
                            c = h & 65535;
                            d = h >>> 16;
                            // Sigma1
                            h = (ah4 >>> 14 | al4 << 18) ^ (ah4 >>> 18 | al4 << 14) ^ (al4 >>> 9 | ah4 << 23);
                            l = (al4 >>> 14 | ah4 << 18) ^ (al4 >>> 18 | ah4 << 14) ^ (ah4 >>> 9 | al4 << 23);
                            a += l & 65535;
                            b += l >>> 16;
                            c += h & 65535;
                            d += h >>> 16;
                            // Ch
                            h = ah4 & ah5 ^ ~ah4 & ah6;
                            l = al4 & al5 ^ ~al4 & al6;
                            a += l & 65535;
                            b += l >>> 16;
                            c += h & 65535;
                            d += h >>> 16;
                            // K
                            h = K[i * 2];
                            l = K[i * 2 + 1];
                            a += l & 65535;
                            b += l >>> 16;
                            c += h & 65535;
                            d += h >>> 16;
                            // w
                            h = wh[i % 16];
                            l = wl[i % 16];
                            a += l & 65535;
                            b += l >>> 16;
                            c += h & 65535;
                            d += h >>> 16;
                            b += a >>> 16;
                            c += b >>> 16;
                            d += c >>> 16;
                            th = c & 65535 | d << 16;
                            tl = a & 65535 | b << 16;
                            // add
                            h = th;
                            l = tl;
                            a = l & 65535;
                            b = l >>> 16;
                            c = h & 65535;
                            d = h >>> 16;
                            // Sigma0
                            h = (ah0 >>> 28 | al0 << 4) ^ (al0 >>> 2 | ah0 << 30) ^ (al0 >>> 7 | ah0 << 25);
                            l = (al0 >>> 28 | ah0 << 4) ^ (ah0 >>> 2 | al0 << 30) ^ (ah0 >>> 7 | al0 << 25);
                            a += l & 65535;
                            b += l >>> 16;
                            c += h & 65535;
                            d += h >>> 16;
                            // Maj
                            h = ah0 & ah1 ^ ah0 & ah2 ^ ah1 & ah2;
                            l = al0 & al1 ^ al0 & al2 ^ al1 & al2;
                            a += l & 65535;
                            b += l >>> 16;
                            c += h & 65535;
                            d += h >>> 16;
                            b += a >>> 16;
                            c += b >>> 16;
                            d += c >>> 16;
                            bh7 = c & 65535 | d << 16;
                            bl7 = a & 65535 | b << 16;
                            // add
                            h = bh3;
                            l = bl3;
                            a = l & 65535;
                            b = l >>> 16;
                            c = h & 65535;
                            d = h >>> 16;
                            h = th;
                            l = tl;
                            a += l & 65535;
                            b += l >>> 16;
                            c += h & 65535;
                            d += h >>> 16;
                            b += a >>> 16;
                            c += b >>> 16;
                            d += c >>> 16;
                            bh3 = c & 65535 | d << 16;
                            bl3 = a & 65535 | b << 16;
                            ah1 = bh0;
                            ah2 = bh1;
                            ah3 = bh2;
                            ah4 = bh3;
                            ah5 = bh4;
                            ah6 = bh5;
                            ah7 = bh6;
                            ah0 = bh7;
                            al1 = bl0;
                            al2 = bl1;
                            al3 = bl2;
                            al4 = bl3;
                            al5 = bl4;
                            al6 = bl5;
                            al7 = bl6;
                            al0 = bl7;
                            if (i % 16 === 15) for(j = 0; j < 16; j++){
                                // add
                                h = wh[j];
                                l = wl[j];
                                a = l & 65535;
                                b = l >>> 16;
                                c = h & 65535;
                                d = h >>> 16;
                                h = wh[(j + 9) % 16];
                                l = wl[(j + 9) % 16];
                                a += l & 65535;
                                b += l >>> 16;
                                c += h & 65535;
                                d += h >>> 16;
                                // sigma0
                                th = wh[(j + 1) % 16];
                                tl = wl[(j + 1) % 16];
                                h = (th >>> 1 | tl << 31) ^ (th >>> 8 | tl << 24) ^ th >>> 7;
                                l = (tl >>> 1 | th << 31) ^ (tl >>> 8 | th << 24) ^ (tl >>> 7 | th << 25);
                                a += l & 65535;
                                b += l >>> 16;
                                c += h & 65535;
                                d += h >>> 16;
                                // sigma1
                                th = wh[(j + 14) % 16];
                                tl = wl[(j + 14) % 16];
                                h = (th >>> 19 | tl << 13) ^ (tl >>> 29 | th << 3) ^ th >>> 6;
                                l = (tl >>> 19 | th << 13) ^ (th >>> 29 | tl << 3) ^ (tl >>> 6 | th << 26);
                                a += l & 65535;
                                b += l >>> 16;
                                c += h & 65535;
                                d += h >>> 16;
                                b += a >>> 16;
                                c += b >>> 16;
                                d += c >>> 16;
                                wh[j] = c & 65535 | d << 16;
                                wl[j] = a & 65535 | b << 16;
                            }
                        }
                        // add
                        h = ah0;
                        l = al0;
                        a = l & 65535;
                        b = l >>> 16;
                        c = h & 65535;
                        d = h >>> 16;
                        h = hh[0];
                        l = hl[0];
                        a += l & 65535;
                        b += l >>> 16;
                        c += h & 65535;
                        d += h >>> 16;
                        b += a >>> 16;
                        c += b >>> 16;
                        d += c >>> 16;
                        hh[0] = ah0 = c & 65535 | d << 16;
                        hl[0] = al0 = a & 65535 | b << 16;
                        h = ah1;
                        l = al1;
                        a = l & 65535;
                        b = l >>> 16;
                        c = h & 65535;
                        d = h >>> 16;
                        h = hh[1];
                        l = hl[1];
                        a += l & 65535;
                        b += l >>> 16;
                        c += h & 65535;
                        d += h >>> 16;
                        b += a >>> 16;
                        c += b >>> 16;
                        d += c >>> 16;
                        hh[1] = ah1 = c & 65535 | d << 16;
                        hl[1] = al1 = a & 65535 | b << 16;
                        h = ah2;
                        l = al2;
                        a = l & 65535;
                        b = l >>> 16;
                        c = h & 65535;
                        d = h >>> 16;
                        h = hh[2];
                        l = hl[2];
                        a += l & 65535;
                        b += l >>> 16;
                        c += h & 65535;
                        d += h >>> 16;
                        b += a >>> 16;
                        c += b >>> 16;
                        d += c >>> 16;
                        hh[2] = ah2 = c & 65535 | d << 16;
                        hl[2] = al2 = a & 65535 | b << 16;
                        h = ah3;
                        l = al3;
                        a = l & 65535;
                        b = l >>> 16;
                        c = h & 65535;
                        d = h >>> 16;
                        h = hh[3];
                        l = hl[3];
                        a += l & 65535;
                        b += l >>> 16;
                        c += h & 65535;
                        d += h >>> 16;
                        b += a >>> 16;
                        c += b >>> 16;
                        d += c >>> 16;
                        hh[3] = ah3 = c & 65535 | d << 16;
                        hl[3] = al3 = a & 65535 | b << 16;
                        h = ah4;
                        l = al4;
                        a = l & 65535;
                        b = l >>> 16;
                        c = h & 65535;
                        d = h >>> 16;
                        h = hh[4];
                        l = hl[4];
                        a += l & 65535;
                        b += l >>> 16;
                        c += h & 65535;
                        d += h >>> 16;
                        b += a >>> 16;
                        c += b >>> 16;
                        d += c >>> 16;
                        hh[4] = ah4 = c & 65535 | d << 16;
                        hl[4] = al4 = a & 65535 | b << 16;
                        h = ah5;
                        l = al5;
                        a = l & 65535;
                        b = l >>> 16;
                        c = h & 65535;
                        d = h >>> 16;
                        h = hh[5];
                        l = hl[5];
                        a += l & 65535;
                        b += l >>> 16;
                        c += h & 65535;
                        d += h >>> 16;
                        b += a >>> 16;
                        c += b >>> 16;
                        d += c >>> 16;
                        hh[5] = ah5 = c & 65535 | d << 16;
                        hl[5] = al5 = a & 65535 | b << 16;
                        h = ah6;
                        l = al6;
                        a = l & 65535;
                        b = l >>> 16;
                        c = h & 65535;
                        d = h >>> 16;
                        h = hh[6];
                        l = hl[6];
                        a += l & 65535;
                        b += l >>> 16;
                        c += h & 65535;
                        d += h >>> 16;
                        b += a >>> 16;
                        c += b >>> 16;
                        d += c >>> 16;
                        hh[6] = ah6 = c & 65535 | d << 16;
                        hl[6] = al6 = a & 65535 | b << 16;
                        h = ah7;
                        l = al7;
                        a = l & 65535;
                        b = l >>> 16;
                        c = h & 65535;
                        d = h >>> 16;
                        h = hh[7];
                        l = hl[7];
                        a += l & 65535;
                        b += l >>> 16;
                        c += h & 65535;
                        d += h >>> 16;
                        b += a >>> 16;
                        c += b >>> 16;
                        d += c >>> 16;
                        hh[7] = ah7 = c & 65535 | d << 16;
                        hl[7] = al7 = a & 65535 | b << 16;
                        pos += 128;
                        n -= 128;
                    }
                    return n;
                }
                function crypto_hash(out, m, n) {
                    var hh = new Int32Array(8), hl = new Int32Array(8), x = new Uint8Array(256), i, b = n;
                    hh[0] = 1779033703;
                    hh[1] = 3144134277;
                    hh[2] = 1013904242;
                    hh[3] = 2773480762;
                    hh[4] = 1359893119;
                    hh[5] = 2600822924;
                    hh[6] = 528734635;
                    hh[7] = 1541459225;
                    hl[0] = 4089235720;
                    hl[1] = 2227873595;
                    hl[2] = 4271175723;
                    hl[3] = 1595750129;
                    hl[4] = 2917565137;
                    hl[5] = 725511199;
                    hl[6] = 4215389547;
                    hl[7] = 327033209;
                    crypto_hashblocks_hl(hh, hl, m, n);
                    n %= 128;
                    for(i = 0; i < n; i++)x[i] = m[b - n + i];
                    x[n] = 128;
                    n = 256 - 128 * (n < 112 ? 1 : 0);
                    x[n - 9] = 0;
                    ts64(x, n - 8, b / 536870912 | 0, b << 3);
                    crypto_hashblocks_hl(hh, hl, x, n);
                    for(i = 0; i < 8; i++)ts64(out, 8 * i, hh[i], hl[i]);
                    return 0;
                }
                function add(p, q) {
                    var a = gf(), b = gf(), c = gf(), d = gf(), e = gf(), f = gf(), g = gf(), h = gf(), t = gf();
                    Z(a, p[1], p[0]);
                    Z(t, q[1], q[0]);
                    M(a, a, t);
                    A(b, p[0], p[1]);
                    A(t, q[0], q[1]);
                    M(b, b, t);
                    M(c, p[3], q[3]);
                    M(c, c, D2);
                    M(d, p[2], q[2]);
                    A(d, d, d);
                    Z(e, b, a);
                    Z(f, d, c);
                    A(g, d, c);
                    A(h, b, a);
                    M(p[0], e, f);
                    M(p[1], h, g);
                    M(p[2], g, f);
                    M(p[3], e, h);
                }
                function cswap(p, q, b) {
                    var i;
                    for(i = 0; i < 4; i++)sel25519(p[i], q[i], b);
                }
                function pack(r, p) {
                    var tx = gf(), ty = gf(), zi = gf();
                    inv25519(zi, p[2]);
                    M(tx, p[0], zi);
                    M(ty, p[1], zi);
                    pack25519(r, ty);
                    r[31] ^= par25519(tx) << 7;
                }
                function scalarmult(p, q, s) {
                    var b, i;
                    set25519(p[0], gf0);
                    set25519(p[1], gf1);
                    set25519(p[2], gf1);
                    set25519(p[3], gf0);
                    for(i = 255; i >= 0; --i){
                        b = s[i / 8 | 0] >> (i & 7) & 1;
                        cswap(p, q, b);
                        add(q, p);
                        add(p, p);
                        cswap(p, q, b);
                    }
                }
                function scalarbase(p, s) {
                    var q = [
                        gf(),
                        gf(),
                        gf(),
                        gf()
                    ];
                    set25519(q[0], X);
                    set25519(q[1], Y);
                    set25519(q[2], gf1);
                    M(q[3], X, Y);
                    scalarmult(p, q, s);
                }
                function crypto_sign_keypair(pk, sk, seeded) {
                    var d = new Uint8Array(64);
                    var p = [
                        gf(),
                        gf(),
                        gf(),
                        gf()
                    ];
                    var i;
                    if (!seeded) randombytes(sk, 32);
                    crypto_hash(d, sk, 32);
                    d[0] &= 248;
                    d[31] &= 127;
                    d[31] |= 64;
                    scalarbase(p, d);
                    pack(pk, p);
                    for(i = 0; i < 32; i++)sk[i + 32] = pk[i];
                    return 0;
                }
                var L = new Float64Array([
                    237,
                    211,
                    245,
                    92,
                    26,
                    99,
                    18,
                    88,
                    214,
                    156,
                    247,
                    162,
                    222,
                    249,
                    222,
                    20,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    16
                ]);
                function modL(r, x) {
                    var carry, i, j, k;
                    for(i = 63; i >= 32; --i){
                        carry = 0;
                        for(j = i - 32, k = i - 12; j < k; ++j){
                            x[j] += carry - 16 * x[i] * L[j - (i - 32)];
                            carry = x[j] + 128 >> 8;
                            x[j] -= carry * 256;
                        }
                        x[j] += carry;
                        x[i] = 0;
                    }
                    carry = 0;
                    for(j = 0; j < 32; j++){
                        x[j] += carry - (x[31] >> 4) * L[j];
                        carry = x[j] >> 8;
                        x[j] &= 255;
                    }
                    for(j = 0; j < 32; j++)x[j] -= carry * L[j];
                    for(i = 0; i < 32; i++){
                        x[i + 1] += x[i] >> 8;
                        r[i] = x[i] & 255;
                    }
                }
                function reduce(r) {
                    var x = new Float64Array(64), i;
                    for(i = 0; i < 64; i++)x[i] = r[i];
                    for(i = 0; i < 64; i++)r[i] = 0;
                    modL(r, x);
                }
                // Note: difference from C - smlen returned, not passed as argument.
                function crypto_sign(sm, m, n, sk) {
                    var d = new Uint8Array(64), h = new Uint8Array(64), r = new Uint8Array(64);
                    var i, j, x = new Float64Array(64);
                    var p = [
                        gf(),
                        gf(),
                        gf(),
                        gf()
                    ];
                    crypto_hash(d, sk, 32);
                    d[0] &= 248;
                    d[31] &= 127;
                    d[31] |= 64;
                    var smlen = n + 64;
                    for(i = 0; i < n; i++)sm[64 + i] = m[i];
                    for(i = 0; i < 32; i++)sm[32 + i] = d[32 + i];
                    crypto_hash(r, sm.subarray(32), n + 32);
                    reduce(r);
                    scalarbase(p, r);
                    pack(sm, p);
                    for(i = 32; i < 64; i++)sm[i] = sk[i];
                    crypto_hash(h, sm, n + 64);
                    reduce(h);
                    for(i = 0; i < 64; i++)x[i] = 0;
                    for(i = 0; i < 32; i++)x[i] = r[i];
                    for(i = 0; i < 32; i++)for(j = 0; j < 32; j++)x[i + j] += h[i] * d[j];
                    modL(sm.subarray(32), x);
                    return smlen;
                }
                function unpackneg(r, p) {
                    var t = gf(), chk = gf(), num = gf(), den = gf(), den2 = gf(), den4 = gf(), den6 = gf();
                    set25519(r[2], gf1);
                    unpack25519(r[1], p);
                    S(num, r[1]);
                    M(den, num, D);
                    Z(num, num, r[2]);
                    A(den, r[2], den);
                    S(den2, den);
                    S(den4, den2);
                    M(den6, den4, den2);
                    M(t, den6, num);
                    M(t, t, den);
                    pow2523(t, t);
                    M(t, t, num);
                    M(t, t, den);
                    M(t, t, den);
                    M(r[0], t, den);
                    S(chk, r[0]);
                    M(chk, chk, den);
                    if (neq25519(chk, num)) M(r[0], r[0], I);
                    S(chk, r[0]);
                    M(chk, chk, den);
                    if (neq25519(chk, num)) return -1;
                    if (par25519(r[0]) === p[31] >> 7) Z(r[0], gf0, r[0]);
                    M(r[3], r[0], r[1]);
                    return 0;
                }
                function crypto_sign_open(m, sm, n, pk) {
                    var i, mlen;
                    var t = new Uint8Array(32), h = new Uint8Array(64);
                    var p = [
                        gf(),
                        gf(),
                        gf(),
                        gf()
                    ], q = [
                        gf(),
                        gf(),
                        gf(),
                        gf()
                    ];
                    mlen = -1;
                    if (n < 64) return -1;
                    if (unpackneg(q, pk)) return -1;
                    for(i = 0; i < n; i++)m[i] = sm[i];
                    for(i = 0; i < 32; i++)m[i + 32] = pk[i];
                    crypto_hash(h, m, n);
                    reduce(h);
                    scalarmult(p, q, h);
                    scalarbase(q, sm.subarray(32));
                    add(p, q);
                    pack(t, p);
                    n -= 64;
                    if (crypto_verify_32(sm, 0, t, 0)) {
                        for(i = 0; i < n; i++)m[i] = 0;
                        return -1;
                    }
                    for(i = 0; i < n; i++)m[i] = sm[i + 64];
                    mlen = n;
                    return mlen;
                }
                var crypto_secretbox_KEYBYTES = 32, crypto_secretbox_NONCEBYTES = 24, crypto_secretbox_ZEROBYTES = 32, crypto_secretbox_BOXZEROBYTES = 16, crypto_scalarmult_BYTES = 32, crypto_scalarmult_SCALARBYTES = 32, crypto_box_PUBLICKEYBYTES = 32, crypto_box_SECRETKEYBYTES = 32, crypto_box_BEFORENMBYTES = 32, crypto_box_NONCEBYTES = crypto_secretbox_NONCEBYTES, crypto_box_ZEROBYTES = crypto_secretbox_ZEROBYTES, crypto_box_BOXZEROBYTES = crypto_secretbox_BOXZEROBYTES, crypto_sign_BYTES = 64, crypto_sign_PUBLICKEYBYTES = 32, crypto_sign_SECRETKEYBYTES = 64, crypto_sign_SEEDBYTES = 32, crypto_hash_BYTES = 64;
                nacl.lowlevel = {
                    crypto_core_hsalsa20: crypto_core_hsalsa20,
                    crypto_stream_xor: crypto_stream_xor,
                    crypto_stream: crypto_stream,
                    crypto_stream_salsa20_xor: crypto_stream_salsa20_xor,
                    crypto_stream_salsa20: crypto_stream_salsa20,
                    crypto_onetimeauth: crypto_onetimeauth,
                    crypto_onetimeauth_verify: crypto_onetimeauth_verify,
                    crypto_verify_16: crypto_verify_16,
                    crypto_verify_32: crypto_verify_32,
                    crypto_secretbox: crypto_secretbox,
                    crypto_secretbox_open: crypto_secretbox_open,
                    crypto_scalarmult: crypto_scalarmult,
                    crypto_scalarmult_base: crypto_scalarmult_base,
                    crypto_box_beforenm: crypto_box_beforenm,
                    crypto_box_afternm: crypto_box_afternm,
                    crypto_box: crypto_box,
                    crypto_box_open: crypto_box_open,
                    crypto_box_keypair: crypto_box_keypair,
                    crypto_hash: crypto_hash,
                    crypto_sign: crypto_sign,
                    crypto_sign_keypair: crypto_sign_keypair,
                    crypto_sign_open: crypto_sign_open,
                    crypto_secretbox_KEYBYTES: crypto_secretbox_KEYBYTES,
                    crypto_secretbox_NONCEBYTES: crypto_secretbox_NONCEBYTES,
                    crypto_secretbox_ZEROBYTES: crypto_secretbox_ZEROBYTES,
                    crypto_secretbox_BOXZEROBYTES: crypto_secretbox_BOXZEROBYTES,
                    crypto_scalarmult_BYTES: crypto_scalarmult_BYTES,
                    crypto_scalarmult_SCALARBYTES: crypto_scalarmult_SCALARBYTES,
                    crypto_box_PUBLICKEYBYTES: crypto_box_PUBLICKEYBYTES,
                    crypto_box_SECRETKEYBYTES: crypto_box_SECRETKEYBYTES,
                    crypto_box_BEFORENMBYTES: crypto_box_BEFORENMBYTES,
                    crypto_box_NONCEBYTES: crypto_box_NONCEBYTES,
                    crypto_box_ZEROBYTES: crypto_box_ZEROBYTES,
                    crypto_box_BOXZEROBYTES: crypto_box_BOXZEROBYTES,
                    crypto_sign_BYTES: crypto_sign_BYTES,
                    crypto_sign_PUBLICKEYBYTES: crypto_sign_PUBLICKEYBYTES,
                    crypto_sign_SECRETKEYBYTES: crypto_sign_SECRETKEYBYTES,
                    crypto_sign_SEEDBYTES: crypto_sign_SEEDBYTES,
                    crypto_hash_BYTES: crypto_hash_BYTES
                };
                /* High-level API */ function checkLengths(k, n) {
                    if (k.length !== crypto_secretbox_KEYBYTES) throw new Error('bad key size');
                    if (n.length !== crypto_secretbox_NONCEBYTES) throw new Error('bad nonce size');
                }
                function checkBoxLengths(pk, sk) {
                    if (pk.length !== crypto_box_PUBLICKEYBYTES) throw new Error('bad public key size');
                    if (sk.length !== crypto_box_SECRETKEYBYTES) throw new Error('bad secret key size');
                }
                function checkArrayTypes() {
                    for(var i = 0; i < arguments.length; i++){
                        if (!(arguments[i] instanceof Uint8Array)) throw new TypeError('unexpected type, use Uint8Array');
                    }
                }
                function cleanup(arr) {
                    for(var i = 0; i < arr.length; i++)arr[i] = 0;
                }
                nacl.randomBytes = function(n) {
                    var b = new Uint8Array(n);
                    randombytes(b, n);
                    return b;
                };
                nacl.secretbox = function(msg, nonce, key) {
                    checkArrayTypes(msg, nonce, key);
                    checkLengths(key, nonce);
                    var m = new Uint8Array(crypto_secretbox_ZEROBYTES + msg.length);
                    var c = new Uint8Array(m.length);
                    for(var i = 0; i < msg.length; i++)m[i + crypto_secretbox_ZEROBYTES] = msg[i];
                    crypto_secretbox(c, m, m.length, nonce, key);
                    return c.subarray(crypto_secretbox_BOXZEROBYTES);
                };
                nacl.secretbox.open = function(box, nonce, key) {
                    checkArrayTypes(box, nonce, key);
                    checkLengths(key, nonce);
                    var c = new Uint8Array(crypto_secretbox_BOXZEROBYTES + box.length);
                    var m = new Uint8Array(c.length);
                    for(var i = 0; i < box.length; i++)c[i + crypto_secretbox_BOXZEROBYTES] = box[i];
                    if (c.length < 32) return null;
                    if (crypto_secretbox_open(m, c, c.length, nonce, key) !== 0) return null;
                    return m.subarray(crypto_secretbox_ZEROBYTES);
                };
                nacl.secretbox.keyLength = crypto_secretbox_KEYBYTES;
                nacl.secretbox.nonceLength = crypto_secretbox_NONCEBYTES;
                nacl.secretbox.overheadLength = crypto_secretbox_BOXZEROBYTES;
                nacl.scalarMult = function(n, p) {
                    checkArrayTypes(n, p);
                    if (n.length !== crypto_scalarmult_SCALARBYTES) throw new Error('bad n size');
                    if (p.length !== crypto_scalarmult_BYTES) throw new Error('bad p size');
                    var q = new Uint8Array(crypto_scalarmult_BYTES);
                    crypto_scalarmult(q, n, p);
                    return q;
                };
                nacl.scalarMult.base = function(n) {
                    checkArrayTypes(n);
                    if (n.length !== crypto_scalarmult_SCALARBYTES) throw new Error('bad n size');
                    var q = new Uint8Array(crypto_scalarmult_BYTES);
                    crypto_scalarmult_base(q, n);
                    return q;
                };
                nacl.scalarMult.scalarLength = crypto_scalarmult_SCALARBYTES;
                nacl.scalarMult.groupElementLength = crypto_scalarmult_BYTES;
                nacl.box = function(msg, nonce, publicKey, secretKey) {
                    var k = nacl.box.before(publicKey, secretKey);
                    return nacl.secretbox(msg, nonce, k);
                };
                nacl.box.before = function(publicKey, secretKey) {
                    checkArrayTypes(publicKey, secretKey);
                    checkBoxLengths(publicKey, secretKey);
                    var k = new Uint8Array(crypto_box_BEFORENMBYTES);
                    crypto_box_beforenm(k, publicKey, secretKey);
                    return k;
                };
                nacl.box.after = nacl.secretbox;
                nacl.box.open = function(msg, nonce, publicKey, secretKey) {
                    var k = nacl.box.before(publicKey, secretKey);
                    return nacl.secretbox.open(msg, nonce, k);
                };
                nacl.box.open.after = nacl.secretbox.open;
                nacl.box.keyPair = function() {
                    var pk = new Uint8Array(crypto_box_PUBLICKEYBYTES);
                    var sk = new Uint8Array(crypto_box_SECRETKEYBYTES);
                    crypto_box_keypair(pk, sk);
                    return {
                        publicKey: pk,
                        secretKey: sk
                    };
                };
                nacl.box.keyPair.fromSecretKey = function(secretKey) {
                    checkArrayTypes(secretKey);
                    if (secretKey.length !== crypto_box_SECRETKEYBYTES) throw new Error('bad secret key size');
                    var pk = new Uint8Array(crypto_box_PUBLICKEYBYTES);
                    crypto_scalarmult_base(pk, secretKey);
                    return {
                        publicKey: pk,
                        secretKey: new Uint8Array(secretKey)
                    };
                };
                nacl.box.publicKeyLength = crypto_box_PUBLICKEYBYTES;
                nacl.box.secretKeyLength = crypto_box_SECRETKEYBYTES;
                nacl.box.sharedKeyLength = crypto_box_BEFORENMBYTES;
                nacl.box.nonceLength = crypto_box_NONCEBYTES;
                nacl.box.overheadLength = nacl.secretbox.overheadLength;
                nacl.sign = function(msg, secretKey) {
                    checkArrayTypes(msg, secretKey);
                    if (secretKey.length !== crypto_sign_SECRETKEYBYTES) throw new Error('bad secret key size');
                    var signedMsg = new Uint8Array(crypto_sign_BYTES + msg.length);
                    crypto_sign(signedMsg, msg, msg.length, secretKey);
                    return signedMsg;
                };
                nacl.sign.open = function(signedMsg, publicKey) {
                    checkArrayTypes(signedMsg, publicKey);
                    if (publicKey.length !== crypto_sign_PUBLICKEYBYTES) throw new Error('bad public key size');
                    var tmp = new Uint8Array(signedMsg.length);
                    var mlen = crypto_sign_open(tmp, signedMsg, signedMsg.length, publicKey);
                    if (mlen < 0) return null;
                    var m = new Uint8Array(mlen);
                    for(var i = 0; i < m.length; i++)m[i] = tmp[i];
                    return m;
                };
                nacl.sign.detached = function(msg, secretKey) {
                    var signedMsg = nacl.sign(msg, secretKey);
                    var sig = new Uint8Array(crypto_sign_BYTES);
                    for(var i = 0; i < sig.length; i++)sig[i] = signedMsg[i];
                    return sig;
                };
                nacl.sign.detached.verify = function(msg, sig, publicKey) {
                    checkArrayTypes(msg, sig, publicKey);
                    if (sig.length !== crypto_sign_BYTES) throw new Error('bad signature size');
                    if (publicKey.length !== crypto_sign_PUBLICKEYBYTES) throw new Error('bad public key size');
                    var sm = new Uint8Array(crypto_sign_BYTES + msg.length);
                    var m = new Uint8Array(crypto_sign_BYTES + msg.length);
                    var i;
                    for(i = 0; i < crypto_sign_BYTES; i++)sm[i] = sig[i];
                    for(i = 0; i < msg.length; i++)sm[i + crypto_sign_BYTES] = msg[i];
                    return crypto_sign_open(m, sm, sm.length, publicKey) >= 0;
                };
                nacl.sign.keyPair = function() {
                    var pk = new Uint8Array(crypto_sign_PUBLICKEYBYTES);
                    var sk = new Uint8Array(crypto_sign_SECRETKEYBYTES);
                    crypto_sign_keypair(pk, sk);
                    return {
                        publicKey: pk,
                        secretKey: sk
                    };
                };
                nacl.sign.keyPair.fromSecretKey = function(secretKey) {
                    checkArrayTypes(secretKey);
                    if (secretKey.length !== crypto_sign_SECRETKEYBYTES) throw new Error('bad secret key size');
                    var pk = new Uint8Array(crypto_sign_PUBLICKEYBYTES);
                    for(var i = 0; i < pk.length; i++)pk[i] = secretKey[32 + i];
                    return {
                        publicKey: pk,
                        secretKey: new Uint8Array(secretKey)
                    };
                };
                nacl.sign.keyPair.fromSeed = function(seed) {
                    checkArrayTypes(seed);
                    if (seed.length !== crypto_sign_SEEDBYTES) throw new Error('bad seed size');
                    var pk = new Uint8Array(crypto_sign_PUBLICKEYBYTES);
                    var sk = new Uint8Array(crypto_sign_SECRETKEYBYTES);
                    for(var i = 0; i < 32; i++)sk[i] = seed[i];
                    crypto_sign_keypair(pk, sk, true);
                    return {
                        publicKey: pk,
                        secretKey: sk
                    };
                };
                nacl.sign.publicKeyLength = crypto_sign_PUBLICKEYBYTES;
                nacl.sign.secretKeyLength = crypto_sign_SECRETKEYBYTES;
                nacl.sign.seedLength = crypto_sign_SEEDBYTES;
                nacl.sign.signatureLength = crypto_sign_BYTES;
                nacl.hash = function(msg) {
                    checkArrayTypes(msg);
                    var h = new Uint8Array(crypto_hash_BYTES);
                    crypto_hash(h, msg, msg.length);
                    return h;
                };
                nacl.hash.hashLength = crypto_hash_BYTES;
                nacl.verify = function(x, y) {
                    checkArrayTypes(x, y);
                    // Zero length arguments are considered not equal.
                    if (x.length === 0 || y.length === 0) return false;
                    if (x.length !== y.length) return false;
                    return vn(x, 0, y, 0, x.length) === 0 ? true : false;
                };
                nacl.setPRNG = function(fn) {
                    randombytes = fn;
                };
                (function() {
                    // Initialize PRNG if environment provides CSPRNG.
                    // If not, methods calling randombytes will throw.
                    var crypto = typeof self !== 'undefined' ? self.crypto || self.msCrypto : null;
                    if (crypto && crypto.getRandomValues) {
                        // Browsers.
                        var QUOTA = 65536;
                        nacl.setPRNG(function(x, n) {
                            var i, v = new Uint8Array(n);
                            for(i = 0; i < n; i += QUOTA)crypto.getRandomValues(v.subarray(i, i + Math.min(n - i, QUOTA)));
                            for(i = 0; i < n; i++)x[i] = v[i];
                            cleanup(v);
                        });
                    } else {
                        // Node.js.
                        crypto = __webpack_require__(56);
                        if (crypto && crypto.randomBytes) nacl.setPRNG(function(x, n) {
                            var i, v = crypto.randomBytes(n);
                            for(i = 0; i < n; i++)x[i] = v[i];
                            cleanup(v);
                        });
                    }
                })();
            })(typeof module !== 'undefined' && module.exports ? module.exports : self.nacl = self.nacl || {});
        /***/ },
        /* 56 */ /***/ function(module, exports) {
        /* (ignored) */ /***/ },
        /* 57 */ /***/ function(module, exports, __webpack_require__) {
            /* WEBPACK VAR INJECTION */ (function(Buffer) {
                // Public domain.
                (function(root, f) {
                    if (typeof module !== 'undefined' && module.exports) module.exports = f();
                    else if (root.nacl) root.nacl.util = f();
                    else {
                        root.nacl = {};
                        root.nacl.util = f();
                    }
                })(this, function() {
                    'use strict';
                    var util = {};
                    function validateBase64(s) {
                        if (!/^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/.test(s)) throw new TypeError('invalid encoding');
                    }
                    util.decodeUTF8 = function(s) {
                        if (typeof s !== 'string') throw new TypeError('expected string');
                        var i, d = unescape(encodeURIComponent(s)), b = new Uint8Array(d.length);
                        for(i = 0; i < d.length; i++)b[i] = d.charCodeAt(i);
                        return b;
                    };
                    util.encodeUTF8 = function(arr) {
                        var i, s = [];
                        for(i = 0; i < arr.length; i++)s.push(String.fromCharCode(arr[i]));
                        return decodeURIComponent(escape(s.join('')));
                    };
                    if (typeof atob === 'undefined') {
                        // Node.js
                        if (typeof Buffer.from !== 'undefined') {
                            // Node v6 and later
                            util.encodeBase64 = function(arr) {
                                return Buffer.from(arr).toString('base64');
                            };
                            util.decodeBase64 = function(s) {
                                validateBase64(s);
                                return new Uint8Array(Array.prototype.slice.call(Buffer.from(s, 'base64'), 0));
                            };
                        } else {
                            // Node earlier than v6
                            util.encodeBase64 = function(arr) {
                                return new Buffer(arr).toString('base64');
                            };
                            util.decodeBase64 = function(s) {
                                validateBase64(s);
                                return new Uint8Array(Array.prototype.slice.call(new Buffer(s, 'base64'), 0));
                            };
                        }
                    } else {
                        // Browsers
                        util.encodeBase64 = function(arr) {
                            var i, s = [], len = arr.length;
                            for(i = 0; i < len; i++)s.push(String.fromCharCode(arr[i]));
                            return btoa(s.join(''));
                        };
                        util.decodeBase64 = function(s) {
                            validateBase64(s);
                            var i, d = atob(s), b = new Uint8Array(d.length);
                            for(i = 0; i < d.length; i++)b[i] = d.charCodeAt(i);
                            return b;
                        };
                    }
                    return util;
                });
            /* WEBPACK VAR INJECTION */ }).call(exports, __webpack_require__(58).Buffer);
        /***/ },
        /* 58 */ /***/ function(module, exports, __webpack_require__) {
            /*!
	 * The buffer module from node.js, for the browser.
	 *
	 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
	 * @license  MIT
	 */ /* eslint-disable no-proto */ 'use strict';
            var base64 = __webpack_require__(59);
            var ieee754 = __webpack_require__(60);
            var isArray = __webpack_require__(61);
            exports.Buffer = Buffer;
            exports.SlowBuffer = SlowBuffer;
            exports.INSPECT_MAX_BYTES = 50;
            /**
	 * If `Buffer.TYPED_ARRAY_SUPPORT`:
	 *   === true    Use Uint8Array implementation (fastest)
	 *   === false   Use Object implementation (most compatible, even IE6)
	 *
	 * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
	 * Opera 11.6+, iOS 4.2+.
	 *
	 * Due to various browser bugs, sometimes the Object implementation will be used even
	 * when the browser supports typed arrays.
	 *
	 * Note:
	 *
	 *   - Firefox 4-29 lacks support for adding new properties to `Uint8Array` instances,
	 *     See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438.
	 *
	 *   - Chrome 9-10 is missing the `TypedArray.prototype.subarray` function.
	 *
	 *   - IE10 has a broken `TypedArray.prototype.subarray` function which returns arrays of
	 *     incorrect length in some situations.

	 * We detect these buggy browsers and set `Buffer.TYPED_ARRAY_SUPPORT` to `false` so they
	 * get the Object implementation, which is slower but behaves correctly.
	 */ Buffer.TYPED_ARRAY_SUPPORT = window.TYPED_ARRAY_SUPPORT !== undefined ? window.TYPED_ARRAY_SUPPORT : typedArraySupport();
            /*
	 * Export kMaxLength after typed array support is determined.
	 */ exports.kMaxLength = kMaxLength();
            function typedArraySupport() {
                try {
                    var arr = new Uint8Array(1);
                    arr.__proto__ = {
                        __proto__: Uint8Array.prototype,
                        foo: function() {
                            return 42;
                        }
                    };
                    return arr.foo() === 42 && typeof arr.subarray === 'function' && arr.subarray(1, 1).byteLength === 0 // ie10 has broken `subarray`
                    ;
                } catch (e) {
                    return false;
                }
            }
            function kMaxLength() {
                return Buffer.TYPED_ARRAY_SUPPORT ? 2147483647 : 1073741823;
            }
            function createBuffer(that, length) {
                if (kMaxLength() < length) throw new RangeError('Invalid typed array length');
                if (Buffer.TYPED_ARRAY_SUPPORT) {
                    // Return an augmented `Uint8Array` instance, for best performance
                    that = new Uint8Array(length);
                    that.__proto__ = Buffer.prototype;
                } else {
                    // Fallback: Return an object instance of the Buffer class
                    if (that === null) that = new Buffer(length);
                    that.length = length;
                }
                return that;
            }
            /**
	 * The Buffer constructor returns instances of `Uint8Array` that have their
	 * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
	 * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
	 * and the `Uint8Array` methods. Square bracket notation works as expected -- it
	 * returns a single octet.
	 *
	 * The `Uint8Array` prototype remains unmodified.
	 */ function Buffer(arg, encodingOrOffset, length) {
                if (!Buffer.TYPED_ARRAY_SUPPORT && !(this instanceof Buffer)) return new Buffer(arg, encodingOrOffset, length);
                // Common case.
                if (typeof arg === 'number') {
                    if (typeof encodingOrOffset === 'string') throw new Error('If encoding is specified then the first argument must be a string');
                    return allocUnsafe(this, arg);
                }
                return from(this, arg, encodingOrOffset, length);
            }
            Buffer.poolSize = 8192 // not used by this implementation
            ;
            // TODO: Legacy, not needed anymore. Remove in next major version.
            Buffer._augment = function(arr) {
                arr.__proto__ = Buffer.prototype;
                return arr;
            };
            function from(that, value, encodingOrOffset, length) {
                if (typeof value === 'number') throw new TypeError('"value" argument must not be a number');
                if (typeof ArrayBuffer !== 'undefined' && value instanceof ArrayBuffer) return fromArrayBuffer(that, value, encodingOrOffset, length);
                if (typeof value === 'string') return fromString(that, value, encodingOrOffset);
                return fromObject(that, value);
            }
            /**
	 * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
	 * if value is a number.
	 * Buffer.from(str[, encoding])
	 * Buffer.from(array)
	 * Buffer.from(buffer)
	 * Buffer.from(arrayBuffer[, byteOffset[, length]])
	 **/ Buffer.from = function(value, encodingOrOffset, length) {
                return from(null, value, encodingOrOffset, length);
            };
            if (Buffer.TYPED_ARRAY_SUPPORT) {
                Buffer.prototype.__proto__ = Uint8Array.prototype;
                Buffer.__proto__ = Uint8Array;
                if (typeof Symbol !== 'undefined' && Symbol.species && Buffer[Symbol.species] === Buffer) // Fix subarray() in ES2016. See: https://github.com/feross/buffer/pull/97
                Object.defineProperty(Buffer, Symbol.species, {
                    value: null,
                    configurable: true
                });
            }
            function assertSize(size) {
                if (typeof size !== 'number') throw new TypeError('"size" argument must be a number');
                else if (size < 0) throw new RangeError('"size" argument must not be negative');
            }
            function alloc(that, size, fill, encoding) {
                assertSize(size);
                if (size <= 0) return createBuffer(that, size);
                if (fill !== undefined) // Only pay attention to encoding if it's a string. This
                // prevents accidentally sending in a number that would
                // be interpretted as a start offset.
                return typeof encoding === 'string' ? createBuffer(that, size).fill(fill, encoding) : createBuffer(that, size).fill(fill);
                return createBuffer(that, size);
            }
            /**
	 * Creates a new filled Buffer instance.
	 * alloc(size[, fill[, encoding]])
	 **/ Buffer.alloc = function(size, fill, encoding) {
                return alloc(null, size, fill, encoding);
            };
            function allocUnsafe(that, size) {
                assertSize(size);
                that = createBuffer(that, size < 0 ? 0 : checked(size) | 0);
                if (!Buffer.TYPED_ARRAY_SUPPORT) for(var i = 0; i < size; ++i)that[i] = 0;
                return that;
            }
            /**
	 * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
	 * */ Buffer.allocUnsafe = function(size) {
                return allocUnsafe(null, size);
            };
            /**
	 * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
	 */ Buffer.allocUnsafeSlow = function(size) {
                return allocUnsafe(null, size);
            };
            function fromString(that, string, encoding) {
                if (typeof encoding !== 'string' || encoding === '') encoding = 'utf8';
                if (!Buffer.isEncoding(encoding)) throw new TypeError('"encoding" must be a valid string encoding');
                var length = byteLength1(string, encoding) | 0;
                that = createBuffer(that, length);
                var actual = that.write(string, encoding);
                if (actual !== length) // Writing a hex string, for example, that contains invalid characters will
                // cause everything after the first invalid character to be ignored. (e.g.
                // 'abxxcd' will be treated as 'ab')
                that = that.slice(0, actual);
                return that;
            }
            function fromArrayLike(that, array) {
                var length = array.length < 0 ? 0 : checked(array.length) | 0;
                that = createBuffer(that, length);
                for(var i = 0; i < length; i += 1)that[i] = array[i] & 255;
                return that;
            }
            function fromArrayBuffer(that, array, byteOffset, length) {
                array.byteLength // this throws if `array` is not a valid ArrayBuffer
                ;
                if (byteOffset < 0 || array.byteLength < byteOffset) throw new RangeError('\'offset\' is out of bounds');
                if (array.byteLength < byteOffset + (length || 0)) throw new RangeError('\'length\' is out of bounds');
                if (byteOffset === undefined && length === undefined) array = new Uint8Array(array);
                else if (length === undefined) array = new Uint8Array(array, byteOffset);
                else array = new Uint8Array(array, byteOffset, length);
                if (Buffer.TYPED_ARRAY_SUPPORT) {
                    // Return an augmented `Uint8Array` instance, for best performance
                    that = array;
                    that.__proto__ = Buffer.prototype;
                } else // Fallback: Return an object instance of the Buffer class
                that = fromArrayLike(that, array);
                return that;
            }
            function fromObject(that, obj) {
                if (Buffer.isBuffer(obj)) {
                    var len = checked(obj.length) | 0;
                    that = createBuffer(that, len);
                    if (that.length === 0) return that;
                    obj.copy(that, 0, 0, len);
                    return that;
                }
                if (obj) {
                    if (typeof ArrayBuffer !== 'undefined' && obj.buffer instanceof ArrayBuffer || 'length' in obj) {
                        if (typeof obj.length !== 'number' || isnan(obj.length)) return createBuffer(that, 0);
                        return fromArrayLike(that, obj);
                    }
                    if (obj.type === 'Buffer' && isArray(obj.data)) return fromArrayLike(that, obj.data);
                }
                throw new TypeError('First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.');
            }
            function checked(length) {
                // Note: cannot use `length < kMaxLength()` here because that fails when
                // length is NaN (which is otherwise coerced to zero.)
                if (length >= kMaxLength()) throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + kMaxLength().toString(16) + ' bytes');
                return length | 0;
            }
            function SlowBuffer(length) {
                if (+length != length) length = 0;
                return Buffer.alloc(+length);
            }
            Buffer.isBuffer = function isBuffer(b) {
                return !!(b != null && b._isBuffer);
            };
            Buffer.compare = function compare(a, b) {
                if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) throw new TypeError('Arguments must be Buffers');
                if (a === b) return 0;
                var x = a.length;
                var y = b.length;
                for(var i = 0, len = Math.min(x, y); i < len; ++i)if (a[i] !== b[i]) {
                    x = a[i];
                    y = b[i];
                    break;
                }
                if (x < y) return -1;
                if (y < x) return 1;
                return 0;
            };
            Buffer.isEncoding = function isEncoding(encoding) {
                switch(String(encoding).toLowerCase()){
                    case 'hex':
                    case 'utf8':
                    case 'utf-8':
                    case 'ascii':
                    case 'latin1':
                    case 'binary':
                    case 'base64':
                    case 'ucs2':
                    case 'ucs-2':
                    case 'utf16le':
                    case 'utf-16le':
                        return true;
                    default:
                        return false;
                }
            };
            Buffer.concat = function concat(list, length) {
                if (!isArray(list)) throw new TypeError('"list" argument must be an Array of Buffers');
                if (list.length === 0) return Buffer.alloc(0);
                var i;
                if (length === undefined) {
                    length = 0;
                    for(i = 0; i < list.length; ++i)length += list[i].length;
                }
                var buffer = Buffer.allocUnsafe(length);
                var pos = 0;
                for(i = 0; i < list.length; ++i){
                    var buf = list[i];
                    if (!Buffer.isBuffer(buf)) throw new TypeError('"list" argument must be an Array of Buffers');
                    buf.copy(buffer, pos);
                    pos += buf.length;
                }
                return buffer;
            };
            function byteLength1(string, encoding) {
                if (Buffer.isBuffer(string)) return string.length;
                if (typeof ArrayBuffer !== 'undefined' && typeof ArrayBuffer.isView === 'function' && (ArrayBuffer.isView(string) || string instanceof ArrayBuffer)) return string.byteLength;
                if (typeof string !== 'string') string = '' + string;
                var len = string.length;
                if (len === 0) return 0;
                // Use a for loop to avoid recursion
                var loweredCase = false;
                for(;;)switch(encoding){
                    case 'ascii':
                    case 'latin1':
                    case 'binary':
                        return len;
                    case 'utf8':
                    case 'utf-8':
                    case undefined:
                        return utf8ToBytes(string).length;
                    case 'ucs2':
                    case 'ucs-2':
                    case 'utf16le':
                    case 'utf-16le':
                        return len * 2;
                    case 'hex':
                        return len >>> 1;
                    case 'base64':
                        return base64ToBytes(string).length;
                    default:
                        if (loweredCase) return utf8ToBytes(string).length // assume utf8
                        ;
                        encoding = ('' + encoding).toLowerCase();
                        loweredCase = true;
                }
            }
            Buffer.byteLength = byteLength1;
            function slowToString(encoding, start, end) {
                var loweredCase = false;
                // No need to verify that "this.length <= MAX_UINT32" since it's a read-only
                // property of a typed array.
                // This behaves neither like String nor Uint8Array in that we set start/end
                // to their upper/lower bounds if the value passed is out of range.
                // undefined is handled specially as per ECMA-262 6th Edition,
                // Section 13.3.3.7 Runtime Semantics: KeyedBindingInitialization.
                if (start === undefined || start < 0) start = 0;
                // Return early if start > this.length. Done here to prevent potential uint32
                // coercion fail below.
                if (start > this.length) return '';
                if (end === undefined || end > this.length) end = this.length;
                if (end <= 0) return '';
                // Force coersion to uint32. This will also coerce falsey/NaN values to 0.
                end >>>= 0;
                start >>>= 0;
                if (end <= start) return '';
                if (!encoding) encoding = 'utf8';
                while(true)switch(encoding){
                    case 'hex':
                        return hexSlice(this, start, end);
                    case 'utf8':
                    case 'utf-8':
                        return utf8Slice(this, start, end);
                    case 'ascii':
                        return asciiSlice(this, start, end);
                    case 'latin1':
                    case 'binary':
                        return latin1Slice(this, start, end);
                    case 'base64':
                        return base64Slice(this, start, end);
                    case 'ucs2':
                    case 'ucs-2':
                    case 'utf16le':
                    case 'utf-16le':
                        return utf16leSlice(this, start, end);
                    default:
                        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding);
                        encoding = (encoding + '').toLowerCase();
                        loweredCase = true;
                }
            }
            // The property is used by `Buffer.isBuffer` and `is-buffer` (in Safari 5-7) to detect
            // Buffer instances.
            Buffer.prototype._isBuffer = true;
            function swap(b, n, m) {
                var i = b[n];
                b[n] = b[m];
                b[m] = i;
            }
            Buffer.prototype.swap16 = function swap16() {
                var len = this.length;
                if (len % 2 !== 0) throw new RangeError('Buffer size must be a multiple of 16-bits');
                for(var i = 0; i < len; i += 2)swap(this, i, i + 1);
                return this;
            };
            Buffer.prototype.swap32 = function swap32() {
                var len = this.length;
                if (len % 4 !== 0) throw new RangeError('Buffer size must be a multiple of 32-bits');
                for(var i = 0; i < len; i += 4){
                    swap(this, i, i + 3);
                    swap(this, i + 1, i + 2);
                }
                return this;
            };
            Buffer.prototype.swap64 = function swap64() {
                var len = this.length;
                if (len % 8 !== 0) throw new RangeError('Buffer size must be a multiple of 64-bits');
                for(var i = 0; i < len; i += 8){
                    swap(this, i, i + 7);
                    swap(this, i + 1, i + 6);
                    swap(this, i + 2, i + 5);
                    swap(this, i + 3, i + 4);
                }
                return this;
            };
            Buffer.prototype.toString = function toString() {
                var length = this.length | 0;
                if (length === 0) return '';
                if (arguments.length === 0) return utf8Slice(this, 0, length);
                return slowToString.apply(this, arguments);
            };
            Buffer.prototype.equals = function equals(b) {
                if (!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer');
                if (this === b) return true;
                return Buffer.compare(this, b) === 0;
            };
            Buffer.prototype.inspect = function inspect() {
                var str = '';
                var max = exports.INSPECT_MAX_BYTES;
                if (this.length > 0) {
                    str = this.toString('hex', 0, max).match(/.{2}/g).join(' ');
                    if (this.length > max) str += ' ... ';
                }
                return '<Buffer ' + str + '>';
            };
            Buffer.prototype.compare = function compare(target, start, end, thisStart, thisEnd) {
                if (!Buffer.isBuffer(target)) throw new TypeError('Argument must be a Buffer');
                if (start === undefined) start = 0;
                if (end === undefined) end = target ? target.length : 0;
                if (thisStart === undefined) thisStart = 0;
                if (thisEnd === undefined) thisEnd = this.length;
                if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) throw new RangeError('out of range index');
                if (thisStart >= thisEnd && start >= end) return 0;
                if (thisStart >= thisEnd) return -1;
                if (start >= end) return 1;
                start >>>= 0;
                end >>>= 0;
                thisStart >>>= 0;
                thisEnd >>>= 0;
                if (this === target) return 0;
                var x = thisEnd - thisStart;
                var y = end - start;
                var len = Math.min(x, y);
                var thisCopy = this.slice(thisStart, thisEnd);
                var targetCopy = target.slice(start, end);
                for(var i = 0; i < len; ++i)if (thisCopy[i] !== targetCopy[i]) {
                    x = thisCopy[i];
                    y = targetCopy[i];
                    break;
                }
                if (x < y) return -1;
                if (y < x) return 1;
                return 0;
            };
            // Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
            // OR the last index of `val` in `buffer` at offset <= `byteOffset`.
            //
            // Arguments:
            // - buffer - a Buffer to search
            // - val - a string, Buffer, or number
            // - byteOffset - an index into `buffer`; will be clamped to an int32
            // - encoding - an optional encoding, relevant is val is a string
            // - dir - true for indexOf, false for lastIndexOf
            function bidirectionalIndexOf(buffer, val, byteOffset, encoding, dir) {
                // Empty buffer means no match
                if (buffer.length === 0) return -1;
                // Normalize byteOffset
                if (typeof byteOffset === 'string') {
                    encoding = byteOffset;
                    byteOffset = 0;
                } else if (byteOffset > 2147483647) byteOffset = 2147483647;
                else if (byteOffset < -2147483648) byteOffset = -2147483648;
                byteOffset = +byteOffset // Coerce to Number.
                ;
                if (isNaN(byteOffset)) // byteOffset: it it's undefined, null, NaN, "foo", etc, search whole buffer
                byteOffset = dir ? 0 : buffer.length - 1;
                // Normalize byteOffset: negative offsets start from the end of the buffer
                if (byteOffset < 0) byteOffset = buffer.length + byteOffset;
                if (byteOffset >= buffer.length) {
                    if (dir) return -1;
                    else byteOffset = buffer.length - 1;
                } else if (byteOffset < 0) {
                    if (dir) byteOffset = 0;
                    else return -1;
                }
                // Normalize val
                if (typeof val === 'string') val = Buffer.from(val, encoding);
                // Finally, search either indexOf (if dir is true) or lastIndexOf
                if (Buffer.isBuffer(val)) {
                    // Special case: looking for empty string/buffer always fails
                    if (val.length === 0) return -1;
                    return arrayIndexOf(buffer, val, byteOffset, encoding, dir);
                } else if (typeof val === 'number') {
                    val = val & 255 // Search for a byte value [0-255]
                    ;
                    if (Buffer.TYPED_ARRAY_SUPPORT && typeof Uint8Array.prototype.indexOf === 'function') {
                        if (dir) return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset);
                        else return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset);
                    }
                    return arrayIndexOf(buffer, [
                        val
                    ], byteOffset, encoding, dir);
                }
                throw new TypeError('val must be string, number or Buffer');
            }
            function arrayIndexOf(arr, val, byteOffset, encoding, dir) {
                var indexSize = 1;
                var arrLength = arr.length;
                var valLength = val.length;
                if (encoding !== undefined) {
                    encoding = String(encoding).toLowerCase();
                    if (encoding === 'ucs2' || encoding === 'ucs-2' || encoding === 'utf16le' || encoding === 'utf-16le') {
                        if (arr.length < 2 || val.length < 2) return -1;
                        indexSize = 2;
                        arrLength /= 2;
                        valLength /= 2;
                        byteOffset /= 2;
                    }
                }
                function read(buf, i) {
                    if (indexSize === 1) return buf[i];
                    else return buf.readUInt16BE(i * indexSize);
                }
                var i1;
                if (dir) {
                    var foundIndex = -1;
                    for(i1 = byteOffset; i1 < arrLength; i1++)if (read(arr, i1) === read(val, foundIndex === -1 ? 0 : i1 - foundIndex)) {
                        if (foundIndex === -1) foundIndex = i1;
                        if (i1 - foundIndex + 1 === valLength) return foundIndex * indexSize;
                    } else {
                        if (foundIndex !== -1) i1 -= i1 - foundIndex;
                        foundIndex = -1;
                    }
                } else {
                    if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength;
                    for(i1 = byteOffset; i1 >= 0; i1--){
                        var found = true;
                        for(var j = 0; j < valLength; j++)if (read(arr, i1 + j) !== read(val, j)) {
                            found = false;
                            break;
                        }
                        if (found) return i1;
                    }
                }
                return -1;
            }
            Buffer.prototype.includes = function includes(val, byteOffset, encoding) {
                return this.indexOf(val, byteOffset, encoding) !== -1;
            };
            Buffer.prototype.indexOf = function indexOf(val, byteOffset, encoding) {
                return bidirectionalIndexOf(this, val, byteOffset, encoding, true);
            };
            Buffer.prototype.lastIndexOf = function lastIndexOf(val, byteOffset, encoding) {
                return bidirectionalIndexOf(this, val, byteOffset, encoding, false);
            };
            function hexWrite(buf, string, offset, length) {
                offset = Number(offset) || 0;
                var remaining = buf.length - offset;
                if (!length) length = remaining;
                else {
                    length = Number(length);
                    if (length > remaining) length = remaining;
                }
                // must be an even number of digits
                var strLen = string.length;
                if (strLen % 2 !== 0) throw new TypeError('Invalid hex string');
                if (length > strLen / 2) length = strLen / 2;
                for(var i = 0; i < length; ++i){
                    var parsed = parseInt(string.substr(i * 2, 2), 16);
                    if (isNaN(parsed)) return i;
                    buf[offset + i] = parsed;
                }
                return i;
            }
            function utf8Write(buf, string, offset, length) {
                return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length);
            }
            function asciiWrite(buf, string, offset, length) {
                return blitBuffer(asciiToBytes(string), buf, offset, length);
            }
            function latin1Write(buf, string, offset, length) {
                return asciiWrite(buf, string, offset, length);
            }
            function base64Write(buf, string, offset, length) {
                return blitBuffer(base64ToBytes(string), buf, offset, length);
            }
            function ucs2Write(buf, string, offset, length) {
                return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length);
            }
            Buffer.prototype.write = function write(string, offset, length, encoding) {
                // Buffer#write(string)
                if (offset === undefined) {
                    encoding = 'utf8';
                    length = this.length;
                    offset = 0;
                // Buffer#write(string, encoding)
                } else if (length === undefined && typeof offset === 'string') {
                    encoding = offset;
                    length = this.length;
                    offset = 0;
                // Buffer#write(string, offset[, length][, encoding])
                } else if (isFinite(offset)) {
                    offset = offset | 0;
                    if (isFinite(length)) {
                        length = length | 0;
                        if (encoding === undefined) encoding = 'utf8';
                    } else {
                        encoding = length;
                        length = undefined;
                    }
                // legacy write(string, encoding, offset, length) - remove in v0.13
                } else throw new Error('Buffer.write(string, encoding, offset[, length]) is no longer supported');
                var remaining = this.length - offset;
                if (length === undefined || length > remaining) length = remaining;
                if (string.length > 0 && (length < 0 || offset < 0) || offset > this.length) throw new RangeError('Attempt to write outside buffer bounds');
                if (!encoding) encoding = 'utf8';
                var loweredCase = false;
                for(;;)switch(encoding){
                    case 'hex':
                        return hexWrite(this, string, offset, length);
                    case 'utf8':
                    case 'utf-8':
                        return utf8Write(this, string, offset, length);
                    case 'ascii':
                        return asciiWrite(this, string, offset, length);
                    case 'latin1':
                    case 'binary':
                        return latin1Write(this, string, offset, length);
                    case 'base64':
                        // Warning: maxLength not taken into account in base64Write
                        return base64Write(this, string, offset, length);
                    case 'ucs2':
                    case 'ucs-2':
                    case 'utf16le':
                    case 'utf-16le':
                        return ucs2Write(this, string, offset, length);
                    default:
                        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding);
                        encoding = ('' + encoding).toLowerCase();
                        loweredCase = true;
                }
            };
            Buffer.prototype.toJSON = function toJSON() {
                return {
                    type: 'Buffer',
                    data: Array.prototype.slice.call(this._arr || this, 0)
                };
            };
            function base64Slice(buf, start, end) {
                if (start === 0 && end === buf.length) return base64.fromByteArray(buf);
                else return base64.fromByteArray(buf.slice(start, end));
            }
            function utf8Slice(buf, start, end) {
                end = Math.min(buf.length, end);
                var res = [];
                var i = start;
                while(i < end){
                    var firstByte = buf[i];
                    var codePoint = null;
                    var bytesPerSequence = firstByte > 239 ? 4 : firstByte > 223 ? 3 : firstByte > 191 ? 2 : 1;
                    if (i + bytesPerSequence <= end) {
                        var secondByte, thirdByte, fourthByte, tempCodePoint;
                        switch(bytesPerSequence){
                            case 1:
                                if (firstByte < 128) codePoint = firstByte;
                                break;
                            case 2:
                                secondByte = buf[i + 1];
                                if ((secondByte & 192) === 128) {
                                    tempCodePoint = (firstByte & 31) << 6 | secondByte & 63;
                                    if (tempCodePoint > 127) codePoint = tempCodePoint;
                                }
                                break;
                            case 3:
                                secondByte = buf[i + 1];
                                thirdByte = buf[i + 2];
                                if ((secondByte & 192) === 128 && (thirdByte & 192) === 128) {
                                    tempCodePoint = (firstByte & 15) << 12 | (secondByte & 63) << 6 | thirdByte & 63;
                                    if (tempCodePoint > 2047 && (tempCodePoint < 55296 || tempCodePoint > 57343)) codePoint = tempCodePoint;
                                }
                                break;
                            case 4:
                                secondByte = buf[i + 1];
                                thirdByte = buf[i + 2];
                                fourthByte = buf[i + 3];
                                if ((secondByte & 192) === 128 && (thirdByte & 192) === 128 && (fourthByte & 192) === 128) {
                                    tempCodePoint = (firstByte & 15) << 18 | (secondByte & 63) << 12 | (thirdByte & 63) << 6 | fourthByte & 63;
                                    if (tempCodePoint > 65535 && tempCodePoint < 1114112) codePoint = tempCodePoint;
                                }
                        }
                    }
                    if (codePoint === null) {
                        // we did not generate a valid codePoint so insert a
                        // replacement char (U+FFFD) and advance only 1 byte
                        codePoint = 65533;
                        bytesPerSequence = 1;
                    } else if (codePoint > 65535) {
                        // encode to utf16 (surrogate pair dance)
                        codePoint -= 65536;
                        res.push(codePoint >>> 10 & 1023 | 55296);
                        codePoint = 56320 | codePoint & 1023;
                    }
                    res.push(codePoint);
                    i += bytesPerSequence;
                }
                return decodeCodePointsArray(res);
            }
            // Based on http://stackoverflow.com/a/22747272/680742, the browser with
            // the lowest limit is Chrome, with 0x10000 args.
            // We go 1 magnitude less, for safety
            var MAX_ARGUMENTS_LENGTH = 4096;
            function decodeCodePointsArray(codePoints) {
                var len = codePoints.length;
                if (len <= MAX_ARGUMENTS_LENGTH) return String.fromCharCode.apply(String, codePoints) // avoid extra slice()
                ;
                // Decode in chunks to avoid "call stack size exceeded".
                var res = '';
                var i = 0;
                while(i < len)res += String.fromCharCode.apply(String, codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH));
                return res;
            }
            function asciiSlice(buf, start, end) {
                var ret = '';
                end = Math.min(buf.length, end);
                for(var i = start; i < end; ++i)ret += String.fromCharCode(buf[i] & 127);
                return ret;
            }
            function latin1Slice(buf, start, end) {
                var ret = '';
                end = Math.min(buf.length, end);
                for(var i = start; i < end; ++i)ret += String.fromCharCode(buf[i]);
                return ret;
            }
            function hexSlice(buf, start, end) {
                var len = buf.length;
                if (!start || start < 0) start = 0;
                if (!end || end < 0 || end > len) end = len;
                var out = '';
                for(var i = start; i < end; ++i)out += toHex(buf[i]);
                return out;
            }
            function utf16leSlice(buf, start, end) {
                var bytes = buf.slice(start, end);
                var res = '';
                for(var i = 0; i < bytes.length; i += 2)res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256);
                return res;
            }
            Buffer.prototype.slice = function slice(start, end) {
                var len = this.length;
                start = ~~start;
                end = end === undefined ? len : ~~end;
                if (start < 0) {
                    start += len;
                    if (start < 0) start = 0;
                } else if (start > len) start = len;
                if (end < 0) {
                    end += len;
                    if (end < 0) end = 0;
                } else if (end > len) end = len;
                if (end < start) end = start;
                var newBuf;
                if (Buffer.TYPED_ARRAY_SUPPORT) {
                    newBuf = this.subarray(start, end);
                    newBuf.__proto__ = Buffer.prototype;
                } else {
                    var sliceLen = end - start;
                    newBuf = new Buffer(sliceLen, undefined);
                    for(var i = 0; i < sliceLen; ++i)newBuf[i] = this[i + start];
                }
                return newBuf;
            };
            /*
	 * Need to make sure that buffer isn't trying to write out of bounds.
	 */ function checkOffset(offset, ext, length) {
                if (offset % 1 !== 0 || offset < 0) throw new RangeError('offset is not uint');
                if (offset + ext > length) throw new RangeError('Trying to access beyond buffer length');
            }
            Buffer.prototype.readUIntLE = function readUIntLE(offset, byteLength, noAssert) {
                offset = offset | 0;
                byteLength = byteLength | 0;
                if (!noAssert) checkOffset(offset, byteLength, this.length);
                var val = this[offset];
                var mul = 1;
                var i = 0;
                while(++i < byteLength && (mul *= 256))val += this[offset + i] * mul;
                return val;
            };
            Buffer.prototype.readUIntBE = function readUIntBE(offset, byteLength, noAssert) {
                offset = offset | 0;
                byteLength = byteLength | 0;
                if (!noAssert) checkOffset(offset, byteLength, this.length);
                var val = this[offset + --byteLength];
                var mul = 1;
                while(byteLength > 0 && (mul *= 256))val += this[offset + --byteLength] * mul;
                return val;
            };
            Buffer.prototype.readUInt8 = function readUInt8(offset, noAssert) {
                if (!noAssert) checkOffset(offset, 1, this.length);
                return this[offset];
            };
            Buffer.prototype.readUInt16LE = function readUInt16LE(offset, noAssert) {
                if (!noAssert) checkOffset(offset, 2, this.length);
                return this[offset] | this[offset + 1] << 8;
            };
            Buffer.prototype.readUInt16BE = function readUInt16BE(offset, noAssert) {
                if (!noAssert) checkOffset(offset, 2, this.length);
                return this[offset] << 8 | this[offset + 1];
            };
            Buffer.prototype.readUInt32LE = function readUInt32LE(offset, noAssert) {
                if (!noAssert) checkOffset(offset, 4, this.length);
                return (this[offset] | this[offset + 1] << 8 | this[offset + 2] << 16) + this[offset + 3] * 16777216;
            };
            Buffer.prototype.readUInt32BE = function readUInt32BE(offset, noAssert) {
                if (!noAssert) checkOffset(offset, 4, this.length);
                return this[offset] * 16777216 + (this[offset + 1] << 16 | this[offset + 2] << 8 | this[offset + 3]);
            };
            Buffer.prototype.readIntLE = function readIntLE(offset, byteLength, noAssert) {
                offset = offset | 0;
                byteLength = byteLength | 0;
                if (!noAssert) checkOffset(offset, byteLength, this.length);
                var val = this[offset];
                var mul = 1;
                var i = 0;
                while(++i < byteLength && (mul *= 256))val += this[offset + i] * mul;
                mul *= 128;
                if (val >= mul) val -= Math.pow(2, 8 * byteLength);
                return val;
            };
            Buffer.prototype.readIntBE = function readIntBE(offset, byteLength, noAssert) {
                offset = offset | 0;
                byteLength = byteLength | 0;
                if (!noAssert) checkOffset(offset, byteLength, this.length);
                var i = byteLength;
                var mul = 1;
                var val = this[offset + --i];
                while(i > 0 && (mul *= 256))val += this[offset + --i] * mul;
                mul *= 128;
                if (val >= mul) val -= Math.pow(2, 8 * byteLength);
                return val;
            };
            Buffer.prototype.readInt8 = function readInt8(offset, noAssert) {
                if (!noAssert) checkOffset(offset, 1, this.length);
                if (!(this[offset] & 128)) return this[offset];
                return (255 - this[offset] + 1) * -1;
            };
            Buffer.prototype.readInt16LE = function readInt16LE(offset, noAssert) {
                if (!noAssert) checkOffset(offset, 2, this.length);
                var val = this[offset] | this[offset + 1] << 8;
                return val & 32768 ? val | 4294901760 : val;
            };
            Buffer.prototype.readInt16BE = function readInt16BE(offset, noAssert) {
                if (!noAssert) checkOffset(offset, 2, this.length);
                var val = this[offset + 1] | this[offset] << 8;
                return val & 32768 ? val | 4294901760 : val;
            };
            Buffer.prototype.readInt32LE = function readInt32LE(offset, noAssert) {
                if (!noAssert) checkOffset(offset, 4, this.length);
                return this[offset] | this[offset + 1] << 8 | this[offset + 2] << 16 | this[offset + 3] << 24;
            };
            Buffer.prototype.readInt32BE = function readInt32BE(offset, noAssert) {
                if (!noAssert) checkOffset(offset, 4, this.length);
                return this[offset] << 24 | this[offset + 1] << 16 | this[offset + 2] << 8 | this[offset + 3];
            };
            Buffer.prototype.readFloatLE = function readFloatLE(offset, noAssert) {
                if (!noAssert) checkOffset(offset, 4, this.length);
                return ieee754.read(this, offset, true, 23, 4);
            };
            Buffer.prototype.readFloatBE = function readFloatBE(offset, noAssert) {
                if (!noAssert) checkOffset(offset, 4, this.length);
                return ieee754.read(this, offset, false, 23, 4);
            };
            Buffer.prototype.readDoubleLE = function readDoubleLE(offset, noAssert) {
                if (!noAssert) checkOffset(offset, 8, this.length);
                return ieee754.read(this, offset, true, 52, 8);
            };
            Buffer.prototype.readDoubleBE = function readDoubleBE(offset, noAssert) {
                if (!noAssert) checkOffset(offset, 8, this.length);
                return ieee754.read(this, offset, false, 52, 8);
            };
            function checkInt(buf, value, offset, ext, max, min) {
                if (!Buffer.isBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance');
                if (value > max || value < min) throw new RangeError('"value" argument is out of bounds');
                if (offset + ext > buf.length) throw new RangeError('Index out of range');
            }
            Buffer.prototype.writeUIntLE = function writeUIntLE(value, offset, byteLength, noAssert) {
                value = +value;
                offset = offset | 0;
                byteLength = byteLength | 0;
                if (!noAssert) {
                    var maxBytes = Math.pow(2, 8 * byteLength) - 1;
                    checkInt(this, value, offset, byteLength, maxBytes, 0);
                }
                var mul = 1;
                var i = 0;
                this[offset] = value & 255;
                while(++i < byteLength && (mul *= 256))this[offset + i] = value / mul & 255;
                return offset + byteLength;
            };
            Buffer.prototype.writeUIntBE = function writeUIntBE(value, offset, byteLength, noAssert) {
                value = +value;
                offset = offset | 0;
                byteLength = byteLength | 0;
                if (!noAssert) {
                    var maxBytes = Math.pow(2, 8 * byteLength) - 1;
                    checkInt(this, value, offset, byteLength, maxBytes, 0);
                }
                var i = byteLength - 1;
                var mul = 1;
                this[offset + i] = value & 255;
                while(--i >= 0 && (mul *= 256))this[offset + i] = value / mul & 255;
                return offset + byteLength;
            };
            Buffer.prototype.writeUInt8 = function writeUInt8(value, offset, noAssert) {
                value = +value;
                offset = offset | 0;
                if (!noAssert) checkInt(this, value, offset, 1, 255, 0);
                if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value);
                this[offset] = value & 255;
                return offset + 1;
            };
            function objectWriteUInt16(buf, value, offset, littleEndian) {
                if (value < 0) value = 65535 + value + 1;
                for(var i = 0, j = Math.min(buf.length - offset, 2); i < j; ++i)buf[offset + i] = (value & 255 << 8 * (littleEndian ? i : 1 - i)) >>> (littleEndian ? i : 1 - i) * 8;
            }
            Buffer.prototype.writeUInt16LE = function writeUInt16LE(value, offset, noAssert) {
                value = +value;
                offset = offset | 0;
                if (!noAssert) checkInt(this, value, offset, 2, 65535, 0);
                if (Buffer.TYPED_ARRAY_SUPPORT) {
                    this[offset] = value & 255;
                    this[offset + 1] = value >>> 8;
                } else objectWriteUInt16(this, value, offset, true);
                return offset + 2;
            };
            Buffer.prototype.writeUInt16BE = function writeUInt16BE(value, offset, noAssert) {
                value = +value;
                offset = offset | 0;
                if (!noAssert) checkInt(this, value, offset, 2, 65535, 0);
                if (Buffer.TYPED_ARRAY_SUPPORT) {
                    this[offset] = value >>> 8;
                    this[offset + 1] = value & 255;
                } else objectWriteUInt16(this, value, offset, false);
                return offset + 2;
            };
            function objectWriteUInt32(buf, value, offset, littleEndian) {
                if (value < 0) value = 4294967295 + value + 1;
                for(var i = 0, j = Math.min(buf.length - offset, 4); i < j; ++i)buf[offset + i] = value >>> (littleEndian ? i : 3 - i) * 8 & 255;
            }
            Buffer.prototype.writeUInt32LE = function writeUInt32LE(value, offset, noAssert) {
                value = +value;
                offset = offset | 0;
                if (!noAssert) checkInt(this, value, offset, 4, 4294967295, 0);
                if (Buffer.TYPED_ARRAY_SUPPORT) {
                    this[offset + 3] = value >>> 24;
                    this[offset + 2] = value >>> 16;
                    this[offset + 1] = value >>> 8;
                    this[offset] = value & 255;
                } else objectWriteUInt32(this, value, offset, true);
                return offset + 4;
            };
            Buffer.prototype.writeUInt32BE = function writeUInt32BE(value, offset, noAssert) {
                value = +value;
                offset = offset | 0;
                if (!noAssert) checkInt(this, value, offset, 4, 4294967295, 0);
                if (Buffer.TYPED_ARRAY_SUPPORT) {
                    this[offset] = value >>> 24;
                    this[offset + 1] = value >>> 16;
                    this[offset + 2] = value >>> 8;
                    this[offset + 3] = value & 255;
                } else objectWriteUInt32(this, value, offset, false);
                return offset + 4;
            };
            Buffer.prototype.writeIntLE = function writeIntLE(value, offset, byteLength, noAssert) {
                value = +value;
                offset = offset | 0;
                if (!noAssert) {
                    var limit = Math.pow(2, 8 * byteLength - 1);
                    checkInt(this, value, offset, byteLength, limit - 1, -limit);
                }
                var i = 0;
                var mul = 1;
                var sub = 0;
                this[offset] = value & 255;
                while(++i < byteLength && (mul *= 256)){
                    if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) sub = 1;
                    this[offset + i] = (value / mul >> 0) - sub & 255;
                }
                return offset + byteLength;
            };
            Buffer.prototype.writeIntBE = function writeIntBE(value, offset, byteLength, noAssert) {
                value = +value;
                offset = offset | 0;
                if (!noAssert) {
                    var limit = Math.pow(2, 8 * byteLength - 1);
                    checkInt(this, value, offset, byteLength, limit - 1, -limit);
                }
                var i = byteLength - 1;
                var mul = 1;
                var sub = 0;
                this[offset + i] = value & 255;
                while(--i >= 0 && (mul *= 256)){
                    if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) sub = 1;
                    this[offset + i] = (value / mul >> 0) - sub & 255;
                }
                return offset + byteLength;
            };
            Buffer.prototype.writeInt8 = function writeInt8(value, offset, noAssert) {
                value = +value;
                offset = offset | 0;
                if (!noAssert) checkInt(this, value, offset, 1, 127, -128);
                if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value);
                if (value < 0) value = 255 + value + 1;
                this[offset] = value & 255;
                return offset + 1;
            };
            Buffer.prototype.writeInt16LE = function writeInt16LE(value, offset, noAssert) {
                value = +value;
                offset = offset | 0;
                if (!noAssert) checkInt(this, value, offset, 2, 32767, -32768);
                if (Buffer.TYPED_ARRAY_SUPPORT) {
                    this[offset] = value & 255;
                    this[offset + 1] = value >>> 8;
                } else objectWriteUInt16(this, value, offset, true);
                return offset + 2;
            };
            Buffer.prototype.writeInt16BE = function writeInt16BE(value, offset, noAssert) {
                value = +value;
                offset = offset | 0;
                if (!noAssert) checkInt(this, value, offset, 2, 32767, -32768);
                if (Buffer.TYPED_ARRAY_SUPPORT) {
                    this[offset] = value >>> 8;
                    this[offset + 1] = value & 255;
                } else objectWriteUInt16(this, value, offset, false);
                return offset + 2;
            };
            Buffer.prototype.writeInt32LE = function writeInt32LE(value, offset, noAssert) {
                value = +value;
                offset = offset | 0;
                if (!noAssert) checkInt(this, value, offset, 4, 2147483647, -2147483648);
                if (Buffer.TYPED_ARRAY_SUPPORT) {
                    this[offset] = value & 255;
                    this[offset + 1] = value >>> 8;
                    this[offset + 2] = value >>> 16;
                    this[offset + 3] = value >>> 24;
                } else objectWriteUInt32(this, value, offset, true);
                return offset + 4;
            };
            Buffer.prototype.writeInt32BE = function writeInt32BE(value, offset, noAssert) {
                value = +value;
                offset = offset | 0;
                if (!noAssert) checkInt(this, value, offset, 4, 2147483647, -2147483648);
                if (value < 0) value = 4294967295 + value + 1;
                if (Buffer.TYPED_ARRAY_SUPPORT) {
                    this[offset] = value >>> 24;
                    this[offset + 1] = value >>> 16;
                    this[offset + 2] = value >>> 8;
                    this[offset + 3] = value & 255;
                } else objectWriteUInt32(this, value, offset, false);
                return offset + 4;
            };
            function checkIEEE754(buf, value, offset, ext, max, min) {
                if (offset + ext > buf.length) throw new RangeError('Index out of range');
                if (offset < 0) throw new RangeError('Index out of range');
            }
            function writeFloat(buf, value, offset, littleEndian, noAssert) {
                if (!noAssert) checkIEEE754(buf, value, offset, 4, 340282346638528860000000000000000000000, -340282346638528860000000000000000000000);
                ieee754.write(buf, value, offset, littleEndian, 23, 4);
                return offset + 4;
            }
            Buffer.prototype.writeFloatLE = function writeFloatLE(value, offset, noAssert) {
                return writeFloat(this, value, offset, true, noAssert);
            };
            Buffer.prototype.writeFloatBE = function writeFloatBE(value, offset, noAssert) {
                return writeFloat(this, value, offset, false, noAssert);
            };
            function writeDouble(buf, value, offset, littleEndian, noAssert) {
                if (!noAssert) checkIEEE754(buf, value, offset, 8, 179769313486231570000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, -179769313486231570000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000);
                ieee754.write(buf, value, offset, littleEndian, 52, 8);
                return offset + 8;
            }
            Buffer.prototype.writeDoubleLE = function writeDoubleLE(value, offset, noAssert) {
                return writeDouble(this, value, offset, true, noAssert);
            };
            Buffer.prototype.writeDoubleBE = function writeDoubleBE(value, offset, noAssert) {
                return writeDouble(this, value, offset, false, noAssert);
            };
            // copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
            Buffer.prototype.copy = function copy(target, targetStart, start, end) {
                if (!start) start = 0;
                if (!end && end !== 0) end = this.length;
                if (targetStart >= target.length) targetStart = target.length;
                if (!targetStart) targetStart = 0;
                if (end > 0 && end < start) end = start;
                // Copy 0 bytes; we're done
                if (end === start) return 0;
                if (target.length === 0 || this.length === 0) return 0;
                // Fatal error conditions
                if (targetStart < 0) throw new RangeError('targetStart out of bounds');
                if (start < 0 || start >= this.length) throw new RangeError('sourceStart out of bounds');
                if (end < 0) throw new RangeError('sourceEnd out of bounds');
                // Are we oob?
                if (end > this.length) end = this.length;
                if (target.length - targetStart < end - start) end = target.length - targetStart + start;
                var len = end - start;
                var i;
                if (this === target && start < targetStart && targetStart < end) // descending copy from end
                for(i = len - 1; i >= 0; --i)target[i + targetStart] = this[i + start];
                else if (len < 1000 || !Buffer.TYPED_ARRAY_SUPPORT) // ascending copy from start
                for(i = 0; i < len; ++i)target[i + targetStart] = this[i + start];
                else Uint8Array.prototype.set.call(target, this.subarray(start, start + len), targetStart);
                return len;
            };
            // Usage:
            //    buffer.fill(number[, offset[, end]])
            //    buffer.fill(buffer[, offset[, end]])
            //    buffer.fill(string[, offset[, end]][, encoding])
            Buffer.prototype.fill = function fill(val, start, end, encoding) {
                // Handle string cases:
                if (typeof val === 'string') {
                    if (typeof start === 'string') {
                        encoding = start;
                        start = 0;
                        end = this.length;
                    } else if (typeof end === 'string') {
                        encoding = end;
                        end = this.length;
                    }
                    if (val.length === 1) {
                        var code = val.charCodeAt(0);
                        if (code < 256) val = code;
                    }
                    if (encoding !== undefined && typeof encoding !== 'string') throw new TypeError('encoding must be a string');
                    if (typeof encoding === 'string' && !Buffer.isEncoding(encoding)) throw new TypeError('Unknown encoding: ' + encoding);
                } else if (typeof val === 'number') val = val & 255;
                // Invalid ranges are not set to a default, so can range check early.
                if (start < 0 || this.length < start || this.length < end) throw new RangeError('Out of range index');
                if (end <= start) return this;
                start = start >>> 0;
                end = end === undefined ? this.length : end >>> 0;
                if (!val) val = 0;
                var i;
                if (typeof val === 'number') for(i = start; i < end; ++i)this[i] = val;
                else {
                    var bytes = Buffer.isBuffer(val) ? val : utf8ToBytes(new Buffer(val, encoding).toString());
                    var len = bytes.length;
                    for(i = 0; i < end - start; ++i)this[i + start] = bytes[i % len];
                }
                return this;
            };
            // HELPER FUNCTIONS
            // ================
            var INVALID_BASE64_RE = /[^+\/0-9A-Za-z-_]/g;
            function base64clean(str) {
                // Node strips out invalid characters like \n and \t from the string, base64-js does not
                str = stringtrim(str).replace(INVALID_BASE64_RE, '');
                // Node converts strings with length < 2 to ''
                if (str.length < 2) return '';
                // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
                while(str.length % 4 !== 0)str = str + '=';
                return str;
            }
            function stringtrim(str) {
                if (str.trim) return str.trim();
                return str.replace(/^\s+|\s+$/g, '');
            }
            function toHex(n) {
                if (n < 16) return '0' + n.toString(16);
                return n.toString(16);
            }
            function utf8ToBytes(string, units) {
                units = units || Infinity;
                var codePoint;
                var length = string.length;
                var leadSurrogate = null;
                var bytes = [];
                for(var i = 0; i < length; ++i){
                    codePoint = string.charCodeAt(i);
                    // is surrogate component
                    if (codePoint > 55295 && codePoint < 57344) {
                        // last char was a lead
                        if (!leadSurrogate) {
                            // no lead yet
                            if (codePoint > 56319) {
                                // unexpected trail
                                if ((units -= 3) > -1) bytes.push(239, 191, 189);
                                continue;
                            } else if (i + 1 === length) {
                                // unpaired lead
                                if ((units -= 3) > -1) bytes.push(239, 191, 189);
                                continue;
                            }
                            // valid lead
                            leadSurrogate = codePoint;
                            continue;
                        }
                        // 2 leads in a row
                        if (codePoint < 56320) {
                            if ((units -= 3) > -1) bytes.push(239, 191, 189);
                            leadSurrogate = codePoint;
                            continue;
                        }
                        // valid surrogate pair
                        codePoint = (leadSurrogate - 55296 << 10 | codePoint - 56320) + 65536;
                    } else if (leadSurrogate) // valid bmp char, but last char was a lead
                    {
                        if ((units -= 3) > -1) bytes.push(239, 191, 189);
                    }
                    leadSurrogate = null;
                    // encode utf8
                    if (codePoint < 128) {
                        if ((units -= 1) < 0) break;
                        bytes.push(codePoint);
                    } else if (codePoint < 2048) {
                        if ((units -= 2) < 0) break;
                        bytes.push(codePoint >> 6 | 192, codePoint & 63 | 128);
                    } else if (codePoint < 65536) {
                        if ((units -= 3) < 0) break;
                        bytes.push(codePoint >> 12 | 224, codePoint >> 6 & 63 | 128, codePoint & 63 | 128);
                    } else if (codePoint < 1114112) {
                        if ((units -= 4) < 0) break;
                        bytes.push(codePoint >> 18 | 240, codePoint >> 12 & 63 | 128, codePoint >> 6 & 63 | 128, codePoint & 63 | 128);
                    } else throw new Error('Invalid code point');
                }
                return bytes;
            }
            function asciiToBytes(str) {
                var byteArray = [];
                for(var i = 0; i < str.length; ++i)// Node's code seems to be doing this and not & 0x7F..
                byteArray.push(str.charCodeAt(i) & 255);
                return byteArray;
            }
            function utf16leToBytes(str, units) {
                var c, hi, lo;
                var byteArray = [];
                for(var i = 0; i < str.length; ++i){
                    if ((units -= 2) < 0) break;
                    c = str.charCodeAt(i);
                    hi = c >> 8;
                    lo = c % 256;
                    byteArray.push(lo);
                    byteArray.push(hi);
                }
                return byteArray;
            }
            function base64ToBytes(str) {
                return base64.toByteArray(base64clean(str));
            }
            function blitBuffer(src, dst, offset, length) {
                for(var i = 0; i < length; ++i){
                    if (i + offset >= dst.length || i >= src.length) break;
                    dst[i + offset] = src[i];
                }
                return i;
            }
            function isnan(val) {
                return val !== val // eslint-disable-line no-self-compare
                ;
            }
        /***/ },
        /* 59 */ /***/ function(module, exports) {
            'use strict';
            exports.byteLength = byteLength;
            exports.toByteArray = toByteArray;
            exports.fromByteArray = fromByteArray;
            var lookup = [];
            var revLookup = [];
            var Arr = typeof Uint8Array !== 'undefined' ? Uint8Array : Array;
            var code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
            for(var i2 = 0, len1 = code.length; i2 < len1; ++i2){
                lookup[i2] = code[i2];
                revLookup[code.charCodeAt(i2)] = i2;
            }
            // Support decoding URL-safe base64 strings, as Node.js does.
            // See: https://en.wikipedia.org/wiki/Base64#URL_applications
            revLookup['-'.charCodeAt(0)] = 62;
            revLookup['_'.charCodeAt(0)] = 63;
            function getLens(b64) {
                var len = b64.length;
                if (len % 4 > 0) throw new Error('Invalid string. Length must be a multiple of 4');
                // Trim off extra bytes after placeholder bytes are found
                // See: https://github.com/beatgammit/base64-js/issues/42
                var validLen = b64.indexOf('=');
                if (validLen === -1) validLen = len;
                var placeHoldersLen = validLen === len ? 0 : 4 - validLen % 4;
                return [
                    validLen,
                    placeHoldersLen
                ];
            }
            // base64 is 4/3 + up to two characters of the original data
            function byteLength(b64) {
                var lens = getLens(b64);
                var validLen = lens[0];
                var placeHoldersLen = lens[1];
                return (validLen + placeHoldersLen) * 3 / 4 - placeHoldersLen;
            }
            function _byteLength(b64, validLen, placeHoldersLen) {
                return (validLen + placeHoldersLen) * 3 / 4 - placeHoldersLen;
            }
            function toByteArray(b64) {
                var tmp;
                var lens = getLens(b64);
                var validLen = lens[0];
                var placeHoldersLen = lens[1];
                var arr = new Arr(_byteLength(b64, validLen, placeHoldersLen));
                var curByte = 0;
                // if there are placeholders, only get up to the last complete 4 chars
                var len = placeHoldersLen > 0 ? validLen - 4 : validLen;
                for(var i = 0; i < len; i += 4){
                    tmp = revLookup[b64.charCodeAt(i)] << 18 | revLookup[b64.charCodeAt(i + 1)] << 12 | revLookup[b64.charCodeAt(i + 2)] << 6 | revLookup[b64.charCodeAt(i + 3)];
                    arr[curByte++] = tmp >> 16 & 255;
                    arr[curByte++] = tmp >> 8 & 255;
                    arr[curByte++] = tmp & 255;
                }
                if (placeHoldersLen === 2) {
                    tmp = revLookup[b64.charCodeAt(i)] << 2 | revLookup[b64.charCodeAt(i + 1)] >> 4;
                    arr[curByte++] = tmp & 255;
                }
                if (placeHoldersLen === 1) {
                    tmp = revLookup[b64.charCodeAt(i)] << 10 | revLookup[b64.charCodeAt(i + 1)] << 4 | revLookup[b64.charCodeAt(i + 2)] >> 2;
                    arr[curByte++] = tmp >> 8 & 255;
                    arr[curByte++] = tmp & 255;
                }
                return arr;
            }
            function tripletToBase64(num) {
                return lookup[num >> 18 & 63] + lookup[num >> 12 & 63] + lookup[num >> 6 & 63] + lookup[num & 63];
            }
            function encodeChunk(uint8, start, end) {
                var tmp;
                var output = [];
                for(var i = start; i < end; i += 3){
                    tmp = (uint8[i] << 16 & 16711680) + (uint8[i + 1] << 8 & 65280) + (uint8[i + 2] & 255);
                    output.push(tripletToBase64(tmp));
                }
                return output.join('');
            }
            function fromByteArray(uint8) {
                var tmp;
                var len = uint8.length;
                var extraBytes = len % 3 // if we have 1 byte left, pad 2 bytes
                ;
                var parts = [];
                var maxChunkLength = 16383 // must be multiple of 3
                ;
                // go through the array every three bytes, we'll deal with trailing stuff later
                for(var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength)parts.push(encodeChunk(uint8, i, i + maxChunkLength > len2 ? len2 : i + maxChunkLength));
                // pad the end with zeros, but make sure to not forget the extra bytes
                if (extraBytes === 1) {
                    tmp = uint8[len - 1];
                    parts.push(lookup[tmp >> 2] + lookup[tmp << 4 & 63] + '==');
                } else if (extraBytes === 2) {
                    tmp = (uint8[len - 2] << 8) + uint8[len - 1];
                    parts.push(lookup[tmp >> 10] + lookup[tmp >> 4 & 63] + lookup[tmp << 2 & 63] + '=');
                }
                return parts.join('');
            }
        /***/ },
        /* 60 */ /***/ function(module, exports) {
            exports.read = function(buffer, offset, isLE, mLen, nBytes) {
                var e, m;
                var eLen = nBytes * 8 - mLen - 1;
                var eMax = (1 << eLen) - 1;
                var eBias = eMax >> 1;
                var nBits = -7;
                var i = isLE ? nBytes - 1 : 0;
                var d = isLE ? -1 : 1;
                var s = buffer[offset + i];
                i += d;
                e = s & (1 << -nBits) - 1;
                s >>= -nBits;
                nBits += eLen;
                for(; nBits > 0; e = e * 256 + buffer[offset + i], i += d, nBits -= 8);
                m = e & (1 << -nBits) - 1;
                e >>= -nBits;
                nBits += mLen;
                for(; nBits > 0; m = m * 256 + buffer[offset + i], i += d, nBits -= 8);
                if (e === 0) e = 1 - eBias;
                else if (e === eMax) return m ? NaN : (s ? -1 : 1) * Infinity;
                else {
                    m = m + Math.pow(2, mLen);
                    e = e - eBias;
                }
                return (s ? -1 : 1) * m * Math.pow(2, e - mLen);
            };
            exports.write = function(buffer, value, offset, isLE, mLen, nBytes) {
                var e, m, c;
                var eLen = nBytes * 8 - mLen - 1;
                var eMax = (1 << eLen) - 1;
                var eBias = eMax >> 1;
                var rt = mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0;
                var i = isLE ? 0 : nBytes - 1;
                var d = isLE ? 1 : -1;
                var s = value < 0 || value === 0 && 1 / value < 0 ? 1 : 0;
                value = Math.abs(value);
                if (isNaN(value) || value === Infinity) {
                    m = isNaN(value) ? 1 : 0;
                    e = eMax;
                } else {
                    e = Math.floor(Math.log(value) / Math.LN2);
                    if (value * (c = Math.pow(2, -e)) < 1) {
                        e--;
                        c *= 2;
                    }
                    if (e + eBias >= 1) value += rt / c;
                    else value += rt * Math.pow(2, 1 - eBias);
                    if (value * c >= 2) {
                        e++;
                        c /= 2;
                    }
                    if (e + eBias >= eMax) {
                        m = 0;
                        e = eMax;
                    } else if (e + eBias >= 1) {
                        m = (value * c - 1) * Math.pow(2, mLen);
                        e = e + eBias;
                    } else {
                        m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen);
                        e = 0;
                    }
                }
                for(; mLen >= 8; buffer[offset + i] = m & 255, i += d, m /= 256, mLen -= 8);
                e = e << mLen | m;
                eLen += mLen;
                for(; eLen > 0; buffer[offset + i] = e & 255, i += d, e /= 256, eLen -= 8);
                buffer[offset + i - d] |= s * 128;
            };
        /***/ },
        /* 61 */ /***/ function(module, exports) {
            var toString = {}.toString;
            module.exports = Array.isArray || function(arr) {
                return toString.call(arr) == '[object Array]';
            };
        /***/ },
        /* 62 */ /***/ function(module, exports, __webpack_require__) {
            "use strict";
            var __extends = this && this.__extends || function(d, b) {
                for(var p in b)if (b.hasOwnProperty(p)) d[p] = b[p];
                function __() {
                    this.constructor = d;
                }
                d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
            };
            var dispatcher_1 = __webpack_require__(24);
            var timers_1 = __webpack_require__(12);
            var logger_1 = __webpack_require__(8);
            var Collections = __webpack_require__(9);
            var runtime_1 = __webpack_require__(2);
            var ConnectionManager1 = function(_super) {
                __extends(ConnectionManager, _super);
                function ConnectionManager(key, options) {
                    var _this = this;
                    _super.call(this);
                    this.key = key;
                    this.options = options || {};
                    this.state = "initialized";
                    this.connection = null;
                    this.usingTLS = !!options.useTLS;
                    this.timeline = this.options.timeline;
                    this.errorCallbacks = this.buildErrorCallbacks();
                    this.connectionCallbacks = this.buildConnectionCallbacks(this.errorCallbacks);
                    this.handshakeCallbacks = this.buildHandshakeCallbacks(this.errorCallbacks);
                    var Network = runtime_1["default"].getNetwork();
                    Network.bind("online", function() {
                        _this.timeline.info({
                            netinfo: "online"
                        });
                        if (_this.state === "connecting" || _this.state === "unavailable") _this.retryIn(0);
                    });
                    Network.bind("offline", function() {
                        _this.timeline.info({
                            netinfo: "offline"
                        });
                        if (_this.connection) _this.sendActivityCheck();
                    });
                    this.updateStrategy();
                }
                ConnectionManager.prototype.connect = function() {
                    if (this.connection || this.runner) return;
                    if (!this.strategy.isSupported()) {
                        this.updateState("failed");
                        return;
                    }
                    this.updateState("connecting");
                    this.startConnecting();
                    this.setUnavailableTimer();
                };
                ConnectionManager.prototype.send = function(data) {
                    if (this.connection) return this.connection.send(data);
                    else return false;
                };
                ConnectionManager.prototype.send_event = function(name, data, channel) {
                    if (this.connection) return this.connection.send_event(name, data, channel);
                    else return false;
                };
                ConnectionManager.prototype.disconnect = function() {
                    this.disconnectInternally();
                    this.updateState("disconnected");
                };
                ConnectionManager.prototype.isUsingTLS = function() {
                    return this.usingTLS;
                };
                ConnectionManager.prototype.startConnecting = function() {
                    var _this = this;
                    var callback = function(error, handshake) {
                        if (error) _this.runner = _this.strategy.connect(0, callback);
                        else if (handshake.action === "error") {
                            _this.emit("error", {
                                type: "HandshakeError",
                                error: handshake.error
                            });
                            _this.timeline.error({
                                handshakeError: handshake.error
                            });
                        } else {
                            _this.abortConnecting();
                            _this.handshakeCallbacks[handshake.action](handshake);
                        }
                    };
                    this.runner = this.strategy.connect(0, callback);
                };
                ConnectionManager.prototype.abortConnecting = function() {
                    if (this.runner) {
                        this.runner.abort();
                        this.runner = null;
                    }
                };
                ConnectionManager.prototype.disconnectInternally = function() {
                    this.abortConnecting();
                    this.clearRetryTimer();
                    this.clearUnavailableTimer();
                    if (this.connection) {
                        var connection = this.abandonConnection();
                        connection.close();
                    }
                };
                ConnectionManager.prototype.updateStrategy = function() {
                    this.strategy = this.options.getStrategy({
                        key: this.key,
                        timeline: this.timeline,
                        useTLS: this.usingTLS
                    });
                };
                ConnectionManager.prototype.retryIn = function(delay) {
                    var _this = this;
                    this.timeline.info({
                        action: "retry",
                        delay: delay
                    });
                    if (delay > 0) this.emit("connecting_in", Math.round(delay / 1000));
                    this.retryTimer = new timers_1.OneOffTimer(delay || 0, function() {
                        _this.disconnectInternally();
                        _this.connect();
                    });
                };
                ConnectionManager.prototype.clearRetryTimer = function() {
                    if (this.retryTimer) {
                        this.retryTimer.ensureAborted();
                        this.retryTimer = null;
                    }
                };
                ConnectionManager.prototype.setUnavailableTimer = function() {
                    var _this = this;
                    this.unavailableTimer = new timers_1.OneOffTimer(this.options.unavailableTimeout, function() {
                        _this.updateState("unavailable");
                    });
                };
                ConnectionManager.prototype.clearUnavailableTimer = function() {
                    if (this.unavailableTimer) this.unavailableTimer.ensureAborted();
                };
                ConnectionManager.prototype.sendActivityCheck = function() {
                    var _this = this;
                    this.stopActivityCheck();
                    this.connection.ping();
                    this.activityTimer = new timers_1.OneOffTimer(this.options.pongTimeout, function() {
                        _this.timeline.error({
                            pong_timed_out: _this.options.pongTimeout
                        });
                        _this.retryIn(0);
                    });
                };
                ConnectionManager.prototype.resetActivityCheck = function() {
                    var _this = this;
                    this.stopActivityCheck();
                    if (this.connection && !this.connection.handlesActivityChecks()) this.activityTimer = new timers_1.OneOffTimer(this.activityTimeout, function() {
                        _this.sendActivityCheck();
                    });
                };
                ConnectionManager.prototype.stopActivityCheck = function() {
                    if (this.activityTimer) this.activityTimer.ensureAborted();
                };
                ConnectionManager.prototype.buildConnectionCallbacks = function(errorCallbacks) {
                    var _this = this;
                    return Collections.extend({}, errorCallbacks, {
                        message: function(message) {
                            _this.resetActivityCheck();
                            _this.emit('message', message);
                        },
                        ping: function() {
                            _this.send_event('pusher:pong', {});
                        },
                        activity: function() {
                            _this.resetActivityCheck();
                        },
                        error: function(error) {
                            _this.emit("error", {
                                type: "WebSocketError",
                                error: error
                            });
                        },
                        closed: function() {
                            _this.abandonConnection();
                            if (_this.shouldRetry()) _this.retryIn(1000);
                        }
                    });
                };
                ConnectionManager.prototype.buildHandshakeCallbacks = function(errorCallbacks) {
                    var _this = this;
                    return Collections.extend({}, errorCallbacks, {
                        connected: function(handshake) {
                            _this.activityTimeout = Math.min(_this.options.activityTimeout, handshake.activityTimeout, handshake.connection.activityTimeout || Infinity);
                            _this.clearUnavailableTimer();
                            _this.setConnection(handshake.connection);
                            _this.socket_id = _this.connection.id;
                            _this.updateState("connected", {
                                socket_id: _this.socket_id
                            });
                        }
                    });
                };
                ConnectionManager.prototype.buildErrorCallbacks = function() {
                    var _this = this;
                    var withErrorEmitted = function(callback) {
                        return function(result) {
                            if (result.error) _this.emit("error", {
                                type: "WebSocketError",
                                error: result.error
                            });
                            callback(result);
                        };
                    };
                    return {
                        tls_only: withErrorEmitted(function() {
                            _this.usingTLS = true;
                            _this.updateStrategy();
                            _this.retryIn(0);
                        }),
                        refused: withErrorEmitted(function() {
                            _this.disconnect();
                        }),
                        backoff: withErrorEmitted(function() {
                            _this.retryIn(1000);
                        }),
                        retry: withErrorEmitted(function() {
                            _this.retryIn(0);
                        })
                    };
                };
                ConnectionManager.prototype.setConnection = function(connection) {
                    this.connection = connection;
                    for(var event in this.connectionCallbacks)this.connection.bind(event, this.connectionCallbacks[event]);
                    this.resetActivityCheck();
                };
                ConnectionManager.prototype.abandonConnection = function() {
                    if (!this.connection) return;
                    this.stopActivityCheck();
                    for(var event in this.connectionCallbacks)this.connection.unbind(event, this.connectionCallbacks[event]);
                    var connection = this.connection;
                    this.connection = null;
                    return connection;
                };
                ConnectionManager.prototype.updateState = function(newState, data) {
                    var previousState = this.state;
                    this.state = newState;
                    if (previousState !== newState) {
                        var newStateDescription = newState;
                        if (newStateDescription === "connected") newStateDescription += " with new socket ID " + data.socket_id;
                        logger_1["default"].debug('State changed', previousState + ' -> ' + newStateDescription);
                        this.timeline.info({
                            state: newState,
                            params: data
                        });
                        this.emit('state_change', {
                            previous: previousState,
                            current: newState
                        });
                        this.emit(newState, data);
                    }
                };
                ConnectionManager.prototype.shouldRetry = function() {
                    return this.state === "connecting" || this.state === "connected";
                };
                return ConnectionManager;
            }(dispatcher_1["default"]);
            exports.__esModule = true;
            exports["default"] = ConnectionManager1;
        /***/ },
        /* 63 */ /***/ function(module, exports, __webpack_require__) {
            "use strict";
            var Collections = __webpack_require__(9);
            var factory_1 = __webpack_require__(43);
            var Errors = __webpack_require__(31);
            var Channels1 = function() {
                function Channels() {
                    this.channels = {};
                }
                Channels.prototype.add = function(name, pusher) {
                    if (!this.channels[name]) this.channels[name] = createChannel(name, pusher);
                    return this.channels[name];
                };
                Channels.prototype.all = function() {
                    return Collections.values(this.channels);
                };
                Channels.prototype.find = function(name) {
                    return this.channels[name];
                };
                Channels.prototype.remove = function(name) {
                    var channel = this.channels[name];
                    delete this.channels[name];
                    return channel;
                };
                Channels.prototype.disconnect = function() {
                    Collections.objectApply(this.channels, function(channel) {
                        channel.disconnect();
                    });
                };
                return Channels;
            }();
            exports.__esModule = true;
            exports["default"] = Channels1;
            function createChannel(name, pusher) {
                if (name.indexOf('private-encrypted-') === 0) {
                    if (navigator.product == "ReactNative") {
                        var errorMsg = "Encrypted channels are not yet supported when using React Native builds.";
                        throw new Errors.UnsupportedFeature(errorMsg);
                    }
                    return factory_1["default"].createEncryptedChannel(name, pusher);
                } else if (name.indexOf('private-') === 0) return factory_1["default"].createPrivateChannel(name, pusher);
                else if (name.indexOf('presence-') === 0) return factory_1["default"].createPresenceChannel(name, pusher);
                else return factory_1["default"].createChannel(name, pusher);
            }
        /***/ },
        /* 64 */ /***/ function(module, exports, __webpack_require__) {
            "use strict";
            var factory_1 = __webpack_require__(43);
            var util_1 = __webpack_require__(11);
            var Errors = __webpack_require__(31);
            var Collections = __webpack_require__(9);
            var TransportStrategy1 = function() {
                function TransportStrategy(name, priority, transport, options) {
                    this.name = name;
                    this.priority = priority;
                    this.transport = transport;
                    this.options = options || {};
                }
                TransportStrategy.prototype.isSupported = function() {
                    return this.transport.isSupported({
                        useTLS: this.options.useTLS
                    });
                };
                TransportStrategy.prototype.connect = function(minPriority, callback) {
                    var _this = this;
                    if (!this.isSupported()) return failAttempt(new Errors.UnsupportedStrategy(), callback);
                    else if (this.priority < minPriority) return failAttempt(new Errors.TransportPriorityTooLow(), callback);
                    var connected = false;
                    var transport = this.transport.createConnection(this.name, this.priority, this.options.key, this.options);
                    var handshake = null;
                    var onInitialized = function() {
                        transport.unbind("initialized", onInitialized);
                        transport.connect();
                    };
                    var onOpen = function() {
                        handshake = factory_1["default"].createHandshake(transport, function(result) {
                            connected = true;
                            unbindListeners();
                            callback(null, result);
                        });
                    };
                    var onError = function(error) {
                        unbindListeners();
                        callback(error);
                    };
                    var onClosed = function() {
                        unbindListeners();
                        var serializedTransport;
                        serializedTransport = Collections.safeJSONStringify(transport);
                        callback(new Errors.TransportClosed(serializedTransport));
                    };
                    var unbindListeners = function() {
                        transport.unbind("initialized", onInitialized);
                        transport.unbind("open", onOpen);
                        transport.unbind("error", onError);
                        transport.unbind("closed", onClosed);
                    };
                    transport.bind("initialized", onInitialized);
                    transport.bind("open", onOpen);
                    transport.bind("error", onError);
                    transport.bind("closed", onClosed);
                    transport.initialize();
                    return {
                        abort: function() {
                            if (connected) return;
                            unbindListeners();
                            if (handshake) handshake.close();
                            else transport.close();
                        },
                        forceMinPriority: function(p) {
                            if (connected) return;
                            if (_this.priority < p) {
                                if (handshake) handshake.close();
                                else transport.close();
                            }
                        }
                    };
                };
                return TransportStrategy;
            }();
            exports.__esModule = true;
            exports["default"] = TransportStrategy1;
            function failAttempt(error, callback) {
                util_1["default"].defer(function() {
                    callback(error);
                });
                return {
                    abort: function() {},
                    forceMinPriority: function() {}
                };
            }
        /***/ },
        /* 65 */ /***/ function(module, exports, __webpack_require__) {
            "use strict";
            var Collections = __webpack_require__(9);
            var util_1 = __webpack_require__(11);
            var timers_1 = __webpack_require__(12);
            var SequentialStrategy1 = function() {
                function SequentialStrategy(strategies, options) {
                    this.strategies = strategies;
                    this.loop = Boolean(options.loop);
                    this.failFast = Boolean(options.failFast);
                    this.timeout = options.timeout;
                    this.timeoutLimit = options.timeoutLimit;
                }
                SequentialStrategy.prototype.isSupported = function() {
                    return Collections.any(this.strategies, util_1["default"].method("isSupported"));
                };
                SequentialStrategy.prototype.connect = function(minPriority, callback) {
                    var _this = this;
                    var strategies = this.strategies;
                    var current = 0;
                    var timeout = this.timeout;
                    var runner = null;
                    var tryNextStrategy = function(error, handshake) {
                        if (handshake) callback(null, handshake);
                        else {
                            current = current + 1;
                            if (_this.loop) current = current % strategies.length;
                            if (current < strategies.length) {
                                if (timeout) {
                                    timeout = timeout * 2;
                                    if (_this.timeoutLimit) timeout = Math.min(timeout, _this.timeoutLimit);
                                }
                                runner = _this.tryStrategy(strategies[current], minPriority, {
                                    timeout: timeout,
                                    failFast: _this.failFast
                                }, tryNextStrategy);
                            } else callback(true);
                        }
                    };
                    runner = this.tryStrategy(strategies[current], minPriority, {
                        timeout: timeout,
                        failFast: this.failFast
                    }, tryNextStrategy);
                    return {
                        abort: function() {
                            runner.abort();
                        },
                        forceMinPriority: function(p) {
                            minPriority = p;
                            if (runner) runner.forceMinPriority(p);
                        }
                    };
                };
                SequentialStrategy.prototype.tryStrategy = function(strategy, minPriority, options, callback) {
                    var timer = null;
                    var runner = null;
                    if (options.timeout > 0) timer = new timers_1.OneOffTimer(options.timeout, function() {
                        runner.abort();
                        callback(true);
                    });
                    runner = strategy.connect(minPriority, function(error, handshake) {
                        if (error && timer && timer.isRunning() && !options.failFast) return;
                        if (timer) timer.ensureAborted();
                        callback(error, handshake);
                    });
                    return {
                        abort: function() {
                            if (timer) timer.ensureAborted();
                            runner.abort();
                        },
                        forceMinPriority: function(p) {
                            runner.forceMinPriority(p);
                        }
                    };
                };
                return SequentialStrategy;
            }();
            exports.__esModule = true;
            exports["default"] = SequentialStrategy1;
        /***/ },
        /* 66 */ /***/ function(module, exports, __webpack_require__) {
            "use strict";
            var Collections = __webpack_require__(9);
            var util_1 = __webpack_require__(11);
            var BestConnectedEverStrategy1 = function() {
                function BestConnectedEverStrategy(strategies) {
                    this.strategies = strategies;
                }
                BestConnectedEverStrategy.prototype.isSupported = function() {
                    return Collections.any(this.strategies, util_1["default"].method("isSupported"));
                };
                BestConnectedEverStrategy.prototype.connect = function(minPriority, callback) {
                    return connect(this.strategies, minPriority, function(i, runners) {
                        return function(error, handshake) {
                            runners[i].error = error;
                            if (error) {
                                if (allRunnersFailed(runners)) callback(true);
                                return;
                            }
                            Collections.apply(runners, function(runner) {
                                runner.forceMinPriority(handshake.transport.priority);
                            });
                            callback(null, handshake);
                        };
                    });
                };
                return BestConnectedEverStrategy;
            }();
            exports.__esModule = true;
            exports["default"] = BestConnectedEverStrategy1;
            function connect(strategies, minPriority, callbackBuilder) {
                var runners = Collections.map(strategies, function(strategy, i, _, rs) {
                    return strategy.connect(minPriority, callbackBuilder(i, rs));
                });
                return {
                    abort: function() {
                        Collections.apply(runners, abortRunner);
                    },
                    forceMinPriority: function(p) {
                        Collections.apply(runners, function(runner) {
                            runner.forceMinPriority(p);
                        });
                    }
                };
            }
            function allRunnersFailed(runners) {
                return Collections.all(runners, function(runner) {
                    return Boolean(runner.error);
                });
            }
            function abortRunner(runner) {
                if (!runner.error && !runner.aborted) {
                    runner.abort();
                    runner.aborted = true;
                }
            }
        /***/ },
        /* 67 */ /***/ function(module, exports, __webpack_require__) {
            "use strict";
            var util_1 = __webpack_require__(11);
            var runtime_1 = __webpack_require__(2);
            var sequential_strategy_1 = __webpack_require__(65);
            var Collections = __webpack_require__(9);
            var CachedStrategy1 = function() {
                function CachedStrategy(strategy, transports, options) {
                    this.strategy = strategy;
                    this.transports = transports;
                    this.ttl = options.ttl || 1800000;
                    this.usingTLS = options.useTLS;
                    this.timeline = options.timeline;
                }
                CachedStrategy.prototype.isSupported = function() {
                    return this.strategy.isSupported();
                };
                CachedStrategy.prototype.connect = function(minPriority, callback) {
                    var usingTLS = this.usingTLS;
                    var info = fetchTransportCache(usingTLS);
                    var strategies = [
                        this.strategy
                    ];
                    if (info && info.timestamp + this.ttl >= util_1["default"].now()) {
                        var transport = this.transports[info.transport];
                        if (transport) {
                            this.timeline.info({
                                cached: true,
                                transport: info.transport,
                                latency: info.latency
                            });
                            strategies.push(new sequential_strategy_1["default"]([
                                transport
                            ], {
                                timeout: info.latency * 2 + 1000,
                                failFast: true
                            }));
                        }
                    }
                    var startTimestamp = util_1["default"].now();
                    var runner = strategies.pop().connect(minPriority, function cb(error, handshake) {
                        if (error) {
                            flushTransportCache(usingTLS);
                            if (strategies.length > 0) {
                                startTimestamp = util_1["default"].now();
                                runner = strategies.pop().connect(minPriority, cb);
                            } else callback(error);
                        } else {
                            storeTransportCache(usingTLS, handshake.transport.name, util_1["default"].now() - startTimestamp);
                            callback(null, handshake);
                        }
                    });
                    return {
                        abort: function() {
                            runner.abort();
                        },
                        forceMinPriority: function(p) {
                            minPriority = p;
                            if (runner) runner.forceMinPriority(p);
                        }
                    };
                };
                return CachedStrategy;
            }();
            exports.__esModule = true;
            exports["default"] = CachedStrategy1;
            function getTransportCacheKey(usingTLS) {
                return "pusherTransport" + (usingTLS ? "TLS" : "NonTLS");
            }
            function fetchTransportCache(usingTLS) {
                var storage = runtime_1["default"].getLocalStorage();
                if (storage) try {
                    var serializedCache = storage[getTransportCacheKey(usingTLS)];
                    if (serializedCache) return JSON.parse(serializedCache);
                } catch (e) {
                    flushTransportCache(usingTLS);
                }
                return null;
            }
            function storeTransportCache(usingTLS, transport, latency) {
                var storage = runtime_1["default"].getLocalStorage();
                if (storage) try {
                    storage[getTransportCacheKey(usingTLS)] = Collections.safeJSONStringify({
                        timestamp: util_1["default"].now(),
                        transport: transport,
                        latency: latency
                    });
                } catch (e) {}
            }
            function flushTransportCache(usingTLS) {
                var storage = runtime_1["default"].getLocalStorage();
                if (storage) try {
                    delete storage[getTransportCacheKey(usingTLS)];
                } catch (e) {}
            }
        /***/ },
        /* 68 */ /***/ function(module, exports, __webpack_require__) {
            "use strict";
            var timers_1 = __webpack_require__(12);
            var DelayedStrategy1 = function() {
                function DelayedStrategy(strategy, _a) {
                    var number = _a.delay;
                    this.strategy = strategy;
                    this.options = {
                        delay: number
                    };
                }
                DelayedStrategy.prototype.isSupported = function() {
                    return this.strategy.isSupported();
                };
                DelayedStrategy.prototype.connect = function(minPriority, callback) {
                    var strategy = this.strategy;
                    var runner;
                    var timer = new timers_1.OneOffTimer(this.options.delay, function() {
                        runner = strategy.connect(minPriority, callback);
                    });
                    return {
                        abort: function() {
                            timer.ensureAborted();
                            if (runner) runner.abort();
                        },
                        forceMinPriority: function(p) {
                            minPriority = p;
                            if (runner) runner.forceMinPriority(p);
                        }
                    };
                };
                return DelayedStrategy;
            }();
            exports.__esModule = true;
            exports["default"] = DelayedStrategy1;
        /***/ },
        /* 69 */ /***/ function(module, exports) {
            "use strict";
            var IfStrategy1 = function() {
                function IfStrategy(test, trueBranch, falseBranch) {
                    this.test = test;
                    this.trueBranch = trueBranch;
                    this.falseBranch = falseBranch;
                }
                IfStrategy.prototype.isSupported = function() {
                    var branch = this.test() ? this.trueBranch : this.falseBranch;
                    return branch.isSupported();
                };
                IfStrategy.prototype.connect = function(minPriority, callback) {
                    var branch = this.test() ? this.trueBranch : this.falseBranch;
                    return branch.connect(minPriority, callback);
                };
                return IfStrategy;
            }();
            exports.__esModule = true;
            exports["default"] = IfStrategy1;
        /***/ },
        /* 70 */ /***/ function(module, exports) {
            "use strict";
            var FirstConnectedStrategy1 = function() {
                function FirstConnectedStrategy(strategy) {
                    this.strategy = strategy;
                }
                FirstConnectedStrategy.prototype.isSupported = function() {
                    return this.strategy.isSupported();
                };
                FirstConnectedStrategy.prototype.connect = function(minPriority, callback) {
                    var runner = this.strategy.connect(minPriority, function(error, handshake) {
                        if (handshake) runner.abort();
                        callback(error, handshake);
                    });
                    return runner;
                };
                return FirstConnectedStrategy;
            }();
            exports.__esModule = true;
            exports["default"] = FirstConnectedStrategy1;
        /***/ },
        /* 71 */ /***/ function(module, exports, __webpack_require__) {
            "use strict";
            var defaults_1 = __webpack_require__(5);
            exports.getGlobalConfig = function() {
                return {
                    wsHost: defaults_1["default"].host,
                    wsPort: defaults_1["default"].ws_port,
                    wssPort: defaults_1["default"].wss_port,
                    wsPath: defaults_1["default"].ws_path,
                    httpHost: defaults_1["default"].sockjs_host,
                    httpPort: defaults_1["default"].sockjs_http_port,
                    httpsPort: defaults_1["default"].sockjs_https_port,
                    httpPath: defaults_1["default"].sockjs_path,
                    statsHost: defaults_1["default"].stats_host,
                    authEndpoint: defaults_1["default"].channel_auth_endpoint,
                    authTransport: defaults_1["default"].channel_auth_transport,
                    activity_timeout: defaults_1["default"].activity_timeout,
                    pong_timeout: defaults_1["default"].pong_timeout,
                    unavailable_timeout: defaults_1["default"].unavailable_timeout
                };
            };
            exports.getClusterConfig = function(clusterName) {
                return {
                    wsHost: "ws-" + clusterName + ".pusher.com",
                    httpHost: "sockjs-" + clusterName + ".pusher.com"
                };
            };
        /***/ }
    ]);
});

},{}],"5sSAl":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _utils = require("./utils");
exports.default = (echo)=>({
        created () {
            const exluceEventMethods = [
                "presence",
                "private"
            ];
            this.$echo = echo;
            this.$channel = this.$channel || {};
            this.$bindings = this.$bindings || {};
            this.$options.laravelEcho = this.$options.laravelEcho || {};
            const { laravelEcho  } = this.$options;
            const registerEvent = (events, channel)=>{
                Object.keys(events).forEach(function(event) {
                    if (!exluceEventMethods.includes(event)) {
                        this.$bindings[channel] = [];
                        this.$channel[channel].listen(event, (payload)=>{
                            if (_utils.isFunction(events[event])) events[event].bind(this)(payload);
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

},{"./utils":"jxTvD","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jxTvD":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "isFunction", ()=>isFunction
);
parcelHelpers.export(exports, "isString", ()=>isString
);
parcelHelpers.export(exports, "isLaravelEcho", ()=>isLaravelEcho
);
parcelHelpers.export(exports, "isSocketIo", ()=>isSocketIo
);
parcelHelpers.export(exports, "unwrapIfSingle", ()=>unwrapIfSingle
);
parcelHelpers.export(exports, "pipe", ()=>pipe
);
parcelHelpers.export(exports, "prefixWith", ()=>prefixWith
);
parcelHelpers.export(exports, "augmentMethod", ()=>augmentMethod
);
parcelHelpers.export(exports, "log", ()=>log
);
const isFunction = (obj)=>typeof obj === "function"
;
const isString = (value)=>typeof value === "string"
;
const isLaravelEcho = (obj)=>!!obj && isFunction(obj.on) && isFunction(obj.emit)
;
const isSocketIo = (obj)=>!!obj && isFunction(obj.on) && isFunction(obj.emit)
;
const unwrapIfSingle = (args)=>args && args.length <= 1 ? args[0] : args
;
const pipe = (...fns)=>(x)=>fns.reduce((v, f)=>f(v)
        , x)
;
const prefixWith = (prefix)=>(string)=>prefix + string
;
const augmentMethod = (obj, methodKey, cb)=>{
    const originalFn = obj[methodKey];
    obj[methodKey] = (...args)=>{
        originalFn.call(obj, ...args);
        cb(...args);
    };
};
const log = (...params)=>{
    console.log(...params);
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"14ofH":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _laravelEcho = require("laravel-echo");
var _laravelEchoDefault = parcelHelpers.interopDefault(_laravelEcho);
var _camelcase = require("camelcase");
var _camelcaseDefault = parcelHelpers.interopDefault(_camelcase);
var _globalEmitter = require("./globalEmitter");
var _globalEmitterDefault = parcelHelpers.interopDefault(_globalEmitter);
class VueEcho extends _laravelEchoDefault.default {
    constructor(options){
        super(options);
        this.events = [];
        this.options = options;
        this.setEvent();
    }
    on(eventName, callback) {
        if (this.options.broadcaster == "pusher") this.connector.pusher.connection.bind(eventName, callback);
        else if (this.options.broadcaster == "socket.io") this.connector.socket.on(eventName, callback);
        else if (this.options.broadcaster == "null") _globalEmitterDefault.default.$on(eventName, callback);
        else if (typeof this.opti$s.broadcaster == "function") _globalEmitterDefault.default.$on(eventName, callback);
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
            let method = _camelcaseDefault.default([
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
exports.default = VueEcho;

},{"laravel-echo":"895nz","camelcase":"iFHGE","./globalEmitter":"fAjHw","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"895nz":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>Echo
);
function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    Object.defineProperty(Constructor, "prototype", {
        writable: false
    });
    return Constructor;
}
function _extends() {
    _extends = Object.assign || function(target) {
        for(var i = 1; i < arguments.length; i++){
            var source = arguments[i];
            for(var key in source)if (Object.prototype.hasOwnProperty.call(source, key)) target[key] = source[key];
        }
        return target;
    };
    return _extends.apply(this, arguments);
}
function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) throw new TypeError("Super expression must either be null or a function");
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            writable: true,
            configurable: true
        }
    });
    Object.defineProperty(subClass, "prototype", {
        writable: false
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
}
function _getPrototypeOf(o1) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o1);
}
function _setPrototypeOf(o2, p1) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _setPrototypeOf(o2, p1);
}
function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
        return true;
    } catch (e) {
        return false;
    }
}
function _assertThisInitialized(self) {
    if (self === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return self;
}
function _possibleConstructorReturn(self, call) {
    if (call && (typeof call === "object" || typeof call === "function")) return call;
    else if (call !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
    return _assertThisInitialized(self);
}
function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();
    return function _createSuperInternal() {
        var Super = _getPrototypeOf(Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = _getPrototypeOf(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
        } else result = Super.apply(this, arguments);
        return _possibleConstructorReturn(this, result);
    };
}
var Connector = /*#__PURE__*/ function() {
    /**
   * Create a new class instance.
   */ function Connector1(options) {
        _classCallCheck(this, Connector1);
        /**
     * Default connector options.
     */ this._defaultOptions = {
            auth: {
                headers: {}
            },
            authEndpoint: '/broadcasting/auth',
            broadcaster: 'pusher',
            csrfToken: null,
            host: null,
            key: null,
            namespace: 'App.Events'
        };
        this.setOptions(options);
        this.connect();
    }
    /**
   * Merge the custom options with the defaults.
   */ _createClass(Connector1, [
        {
            key: "setOptions",
            value: function setOptions(options) {
                this.options = _extends(this._defaultOptions, options);
                if (this.csrfToken()) this.options.auth.headers['X-CSRF-TOKEN'] = this.csrfToken();
                return options;
            }
        },
        {
            key: "csrfToken",
            value: function csrfToken() {
                var selector;
                if (typeof window !== 'undefined' && window['Laravel'] && window['Laravel'].csrfToken) return window['Laravel'].csrfToken;
                else if (this.options.csrfToken) return this.options.csrfToken;
                else if (typeof document !== 'undefined' && typeof document.querySelector === 'function' && (selector = document.querySelector('meta[name="csrf-token"]'))) return selector.getAttribute('content');
                return null;
            }
        }
    ]);
    return Connector1;
}();
/**
 * This class represents a basic channel.
 */ var Channel = /*#__PURE__*/ function() {
    function Channel1() {
        _classCallCheck(this, Channel1);
    }
    _createClass(Channel1, [
        {
            key: "listenForWhisper",
            value: /**
     * Listen for a whisper event on the channel instance.
     */ function listenForWhisper(event, callback) {
                return this.listen('.client-' + event, callback);
            }
        },
        {
            key: "notification",
            value: function notification(callback) {
                return this.listen('.Illuminate\\Notifications\\Events\\BroadcastNotificationCreated', callback);
            }
        },
        {
            key: "stopListeningForWhisper",
            value: function stopListeningForWhisper(event, callback) {
                return this.stopListening('.client-' + event, callback);
            }
        }
    ]);
    return Channel1;
}();
/**
 * Event name formatter
 */ var EventFormatter = /*#__PURE__*/ function() {
    /**
   * Create a new class instance.
   */ function EventFormatter1(namespace) {
        _classCallCheck(this, EventFormatter1);
        this.setNamespace(namespace);
    }
    /**
   * Format the given event name.
   */ _createClass(EventFormatter1, [
        {
            key: "format",
            value: function format(event) {
                if (event.charAt(0) === '.' || event.charAt(0) === '\\') return event.substr(1);
                else if (this.namespace) event = this.namespace + '.' + event;
                return event.replace(/\./g, '\\');
            }
        },
        {
            key: "setNamespace",
            value: function setNamespace(value) {
                this.namespace = value;
            }
        }
    ]);
    return EventFormatter1;
}();
/**
 * This class represents a Pusher channel.
 */ var PusherChannel = /*#__PURE__*/ function(_Channel) {
    _inherits(PusherChannel1, _Channel);
    var _super = _createSuper(PusherChannel1);
    /**
   * Create a new class instance.
   */ function PusherChannel1(pusher, name, options) {
        var _this;
        _classCallCheck(this, PusherChannel1);
        _this = _super.call(this);
        _this.name = name;
        _this.pusher = pusher;
        _this.options = options;
        _this.eventFormatter = new EventFormatter(_this.options.namespace);
        _this.subscribe();
        return _this;
    }
    /**
   * Subscribe to a Pusher channel.
   */ _createClass(PusherChannel1, [
        {
            key: "subscribe",
            value: function subscribe() {
                this.subscription = this.pusher.subscribe(this.name);
            }
        },
        {
            key: "unsubscribe",
            value: function unsubscribe() {
                this.pusher.unsubscribe(this.name);
            }
        },
        {
            key: "listen",
            value: function listen(event, callback) {
                this.on(this.eventFormatter.format(event), callback);
                return this;
            }
        },
        {
            key: "listenToAll",
            value: function listenToAll(callback) {
                var _this2 = this;
                this.subscription.bind_global(function(event, data) {
                    if (event.startsWith('pusher:')) return;
                    var namespace = _this2.options.namespace.replace(/\./g, '\\');
                    var formattedEvent = event.startsWith(namespace) ? event.substring(namespace.length + 1) : '.' + event;
                    callback(formattedEvent, data);
                });
                return this;
            }
        },
        {
            key: "stopListening",
            value: function stopListening(event, callback) {
                if (callback) this.subscription.unbind(this.eventFormatter.format(event), callback);
                else this.subscription.unbind(this.eventFormatter.format(event));
                return this;
            }
        },
        {
            key: "stopListeningToAll",
            value: function stopListeningToAll(callback) {
                if (callback) this.subscription.unbind_global(callback);
                else this.subscription.unbind_global();
                return this;
            }
        },
        {
            key: "subscribed",
            value: function subscribed(callback) {
                this.on('pusher:subscription_succeeded', function() {
                    callback();
                });
                return this;
            }
        },
        {
            key: "error",
            value: function error(callback) {
                this.on('pusher:subscription_error', function(status) {
                    callback(status);
                });
                return this;
            }
        },
        {
            key: "on",
            value: function on(event, callback) {
                this.subscription.bind(event, callback);
                return this;
            }
        }
    ]);
    return PusherChannel1;
}(Channel);
/**
 * This class represents a Pusher private channel.
 */ var PusherPrivateChannel = /*#__PURE__*/ function(_PusherChannel) {
    _inherits(PusherPrivateChannel1, _PusherChannel);
    var _super = _createSuper(PusherPrivateChannel1);
    function PusherPrivateChannel1() {
        _classCallCheck(this, PusherPrivateChannel1);
        return _super.apply(this, arguments);
    }
    _createClass(PusherPrivateChannel1, [
        {
            key: "whisper",
            value: /**
     * Trigger client event on the channel.
     */ function whisper(eventName, data) {
                this.pusher.channels.channels[this.name].trigger("client-".concat(eventName), data);
                return this;
            }
        }
    ]);
    return PusherPrivateChannel1;
}(PusherChannel);
/**
 * This class represents a Pusher private channel.
 */ var PusherEncryptedPrivateChannel = /*#__PURE__*/ function(_PusherChannel) {
    _inherits(PusherEncryptedPrivateChannel1, _PusherChannel);
    var _super = _createSuper(PusherEncryptedPrivateChannel1);
    function PusherEncryptedPrivateChannel1() {
        _classCallCheck(this, PusherEncryptedPrivateChannel1);
        return _super.apply(this, arguments);
    }
    _createClass(PusherEncryptedPrivateChannel1, [
        {
            key: "whisper",
            value: /**
     * Trigger client event on the channel.
     */ function whisper(eventName, data) {
                this.pusher.channels.channels[this.name].trigger("client-".concat(eventName), data);
                return this;
            }
        }
    ]);
    return PusherEncryptedPrivateChannel1;
}(PusherChannel);
/**
 * This class represents a Pusher presence channel.
 */ var PusherPresenceChannel = /*#__PURE__*/ function(_PusherChannel) {
    _inherits(PusherPresenceChannel1, _PusherChannel);
    var _super = _createSuper(PusherPresenceChannel1);
    function PusherPresenceChannel1() {
        _classCallCheck(this, PusherPresenceChannel1);
        return _super.apply(this, arguments);
    }
    _createClass(PusherPresenceChannel1, [
        {
            key: "here",
            value: /**
     * Register a callback to be called anytime the member list changes.
     */ function here(callback) {
                this.on('pusher:subscription_succeeded', function(data) {
                    callback(Object.keys(data.members).map(function(k) {
                        return data.members[k];
                    }));
                });
                return this;
            }
        },
        {
            key: "joining",
            value: function joining(callback) {
                this.on('pusher:member_added', function(member) {
                    callback(member.info);
                });
                return this;
            }
        },
        {
            key: "leaving",
            value: function leaving(callback) {
                this.on('pusher:member_removed', function(member) {
                    callback(member.info);
                });
                return this;
            }
        },
        {
            key: "whisper",
            value: function whisper(eventName, data) {
                this.pusher.channels.channels[this.name].trigger("client-".concat(eventName), data);
                return this;
            }
        }
    ]);
    return PusherPresenceChannel1;
}(PusherChannel);
/**
 * This class represents a Socket.io channel.
 */ var SocketIoChannel = /*#__PURE__*/ function(_Channel) {
    _inherits(SocketIoChannel1, _Channel);
    var _super = _createSuper(SocketIoChannel1);
    /**
   * Create a new class instance.
   */ function SocketIoChannel1(socket, name, options) {
        var _this;
        _classCallCheck(this, SocketIoChannel1);
        _this = _super.call(this);
        /**
     * The event callbacks applied to the socket.
     */ _this.events = {};
        /**
     * User supplied callbacks for events on this channel.
     */ _this.listeners = {};
        _this.name = name;
        _this.socket = socket;
        _this.options = options;
        _this.eventFormatter = new EventFormatter(_this.options.namespace);
        _this.subscribe();
        return _this;
    }
    /**
   * Subscribe to a Socket.io channel.
   */ _createClass(SocketIoChannel1, [
        {
            key: "subscribe",
            value: function subscribe() {
                this.socket.emit('subscribe', {
                    channel: this.name,
                    auth: this.options.auth || {}
                });
            }
        },
        {
            key: "unsubscribe",
            value: function unsubscribe() {
                this.unbind();
                this.socket.emit('unsubscribe', {
                    channel: this.name,
                    auth: this.options.auth || {}
                });
            }
        },
        {
            key: "listen",
            value: function listen(event, callback) {
                this.on(this.eventFormatter.format(event), callback);
                return this;
            }
        },
        {
            key: "stopListening",
            value: function stopListening(event, callback) {
                this.unbindEvent(this.eventFormatter.format(event), callback);
                return this;
            }
        },
        {
            key: "subscribed",
            value: function subscribed(callback) {
                this.on('connect', function(socket) {
                    callback(socket);
                });
                return this;
            }
        },
        {
            key: "error",
            value: function error(callback) {
                return this;
            }
        },
        {
            key: "on",
            value: function on(event, callback) {
                var _this2 = this;
                this.listeners[event] = this.listeners[event] || [];
                if (!this.events[event]) {
                    this.events[event] = function(channel, data) {
                        if (_this2.name === channel && _this2.listeners[event]) _this2.listeners[event].forEach(function(cb) {
                            return cb(data);
                        });
                    };
                    this.socket.on(event, this.events[event]);
                }
                this.listeners[event].push(callback);
                return this;
            }
        },
        {
            key: "unbind",
            value: function unbind() {
                var _this3 = this;
                Object.keys(this.events).forEach(function(event) {
                    _this3.unbindEvent(event);
                });
            }
        },
        {
            key: "unbindEvent",
            value: function unbindEvent(event, callback) {
                this.listeners[event] = this.listeners[event] || [];
                if (callback) this.listeners[event] = this.listeners[event].filter(function(cb) {
                    return cb !== callback;
                });
                if (!callback || this.listeners[event].length === 0) {
                    if (this.events[event]) {
                        this.socket.removeListener(event, this.events[event]);
                        delete this.events[event];
                    }
                    delete this.listeners[event];
                }
            }
        }
    ]);
    return SocketIoChannel1;
}(Channel);
/**
 * This class represents a Socket.io private channel.
 */ var SocketIoPrivateChannel = /*#__PURE__*/ function(_SocketIoChannel) {
    _inherits(SocketIoPrivateChannel1, _SocketIoChannel);
    var _super = _createSuper(SocketIoPrivateChannel1);
    function SocketIoPrivateChannel1() {
        _classCallCheck(this, SocketIoPrivateChannel1);
        return _super.apply(this, arguments);
    }
    _createClass(SocketIoPrivateChannel1, [
        {
            key: "whisper",
            value: /**
     * Trigger client event on the channel.
     */ function whisper(eventName, data) {
                this.socket.emit('client event', {
                    channel: this.name,
                    event: "client-".concat(eventName),
                    data: data
                });
                return this;
            }
        }
    ]);
    return SocketIoPrivateChannel1;
}(SocketIoChannel);
/**
 * This class represents a Socket.io presence channel.
 */ var SocketIoPresenceChannel = /*#__PURE__*/ function(_SocketIoPrivateChann) {
    _inherits(SocketIoPresenceChannel1, _SocketIoPrivateChann);
    var _super = _createSuper(SocketIoPresenceChannel1);
    function SocketIoPresenceChannel1() {
        _classCallCheck(this, SocketIoPresenceChannel1);
        return _super.apply(this, arguments);
    }
    _createClass(SocketIoPresenceChannel1, [
        {
            key: "here",
            value: /**
     * Register a callback to be called anytime the member list changes.
     */ function here(callback) {
                this.on('presence:subscribed', function(members) {
                    callback(members.map(function(m) {
                        return m.user_info;
                    }));
                });
                return this;
            }
        },
        {
            key: "joining",
            value: function joining(callback) {
                this.on('presence:joining', function(member) {
                    return callback(member.user_info);
                });
                return this;
            }
        },
        {
            key: "leaving",
            value: function leaving(callback) {
                this.on('presence:leaving', function(member) {
                    return callback(member.user_info);
                });
                return this;
            }
        }
    ]);
    return SocketIoPresenceChannel1;
}(SocketIoPrivateChannel);
/**
 * This class represents a null channel.
 */ var NullChannel = /*#__PURE__*/ function(_Channel) {
    _inherits(NullChannel1, _Channel);
    var _super = _createSuper(NullChannel1);
    function NullChannel1() {
        _classCallCheck(this, NullChannel1);
        return _super.apply(this, arguments);
    }
    _createClass(NullChannel1, [
        {
            key: "subscribe",
            value: /**
     * Subscribe to a channel.
     */ function subscribe() {}
        },
        {
            key: "unsubscribe",
            value: function unsubscribe() {}
        },
        {
            key: "listen",
            value: function listen(event, callback) {
                return this;
            }
        },
        {
            key: "stopListening",
            value: function stopListening(event, callback) {
                return this;
            }
        },
        {
            key: "subscribed",
            value: function subscribed(callback) {
                return this;
            }
        },
        {
            key: "error",
            value: function error(callback) {
                return this;
            }
        },
        {
            key: "on",
            value: function on(event, callback) {
                return this;
            }
        }
    ]);
    return NullChannel1;
}(Channel);
/**
 * This class represents a null private channel.
 */ var NullPrivateChannel = /*#__PURE__*/ function(_NullChannel) {
    _inherits(NullPrivateChannel1, _NullChannel);
    var _super = _createSuper(NullPrivateChannel1);
    function NullPrivateChannel1() {
        _classCallCheck(this, NullPrivateChannel1);
        return _super.apply(this, arguments);
    }
    _createClass(NullPrivateChannel1, [
        {
            key: "whisper",
            value: /**
     * Trigger client event on the channel.
     */ function whisper(eventName, data) {
                return this;
            }
        }
    ]);
    return NullPrivateChannel1;
}(NullChannel);
/**
 * This class represents a null presence channel.
 */ var NullPresenceChannel = /*#__PURE__*/ function(_NullChannel) {
    _inherits(NullPresenceChannel1, _NullChannel);
    var _super = _createSuper(NullPresenceChannel1);
    function NullPresenceChannel1() {
        _classCallCheck(this, NullPresenceChannel1);
        return _super.apply(this, arguments);
    }
    _createClass(NullPresenceChannel1, [
        {
            key: "here",
            value: /**
     * Register a callback to be called anytime the member list changes.
     */ function here(callback) {
                return this;
            }
        },
        {
            key: "joining",
            value: function joining(callback) {
                return this;
            }
        },
        {
            key: "leaving",
            value: function leaving(callback) {
                return this;
            }
        },
        {
            key: "whisper",
            value: function whisper(eventName, data) {
                return this;
            }
        }
    ]);
    return NullPresenceChannel1;
}(NullChannel);
/**
 * This class creates a connector to Pusher.
 */ var PusherConnector = /*#__PURE__*/ function(_Connector) {
    _inherits(PusherConnector1, _Connector);
    var _super = _createSuper(PusherConnector1);
    function PusherConnector1() {
        var _this;
        _classCallCheck(this, PusherConnector1);
        _this = _super.apply(this, arguments);
        /**
     * All of the subscribed channel names.
     */ _this.channels = {};
        return _this;
    }
    /**
   * Create a fresh Pusher connection.
   */ _createClass(PusherConnector1, [
        {
            key: "connect",
            value: function connect() {
                if (typeof this.options.client !== 'undefined') this.pusher = this.options.client;
                else this.pusher = new Pusher(this.options.key, this.options);
            }
        },
        {
            key: "listen",
            value: function listen(name, event, callback) {
                return this.channel(name).listen(event, callback);
            }
        },
        {
            key: "channel",
            value: function channel(name) {
                if (!this.channels[name]) this.channels[name] = new PusherChannel(this.pusher, name, this.options);
                return this.channels[name];
            }
        },
        {
            key: "privateChannel",
            value: function privateChannel(name) {
                if (!this.channels['private-' + name]) this.channels['private-' + name] = new PusherPrivateChannel(this.pusher, 'private-' + name, this.options);
                return this.channels['private-' + name];
            }
        },
        {
            key: "encryptedPrivateChannel",
            value: function encryptedPrivateChannel(name) {
                if (!this.channels['private-encrypted-' + name]) this.channels['private-encrypted-' + name] = new PusherEncryptedPrivateChannel(this.pusher, 'private-encrypted-' + name, this.options);
                return this.channels['private-encrypted-' + name];
            }
        },
        {
            key: "presenceChannel",
            value: function presenceChannel(name) {
                if (!this.channels['presence-' + name]) this.channels['presence-' + name] = new PusherPresenceChannel(this.pusher, 'presence-' + name, this.options);
                return this.channels['presence-' + name];
            }
        },
        {
            key: "leave",
            value: function leave(name1) {
                var _this2 = this;
                var channels = [
                    name1,
                    'private-' + name1,
                    'presence-' + name1
                ];
                channels.forEach(function(name, index) {
                    _this2.leaveChannel(name);
                });
            }
        },
        {
            key: "leaveChannel",
            value: function leaveChannel(name) {
                if (this.channels[name]) {
                    this.channels[name].unsubscribe();
                    delete this.channels[name];
                }
            }
        },
        {
            key: "socketId",
            value: function socketId() {
                return this.pusher.connection.socket_id;
            }
        },
        {
            key: "disconnect",
            value: function disconnect() {
                this.pusher.disconnect();
            }
        }
    ]);
    return PusherConnector1;
}(Connector);
/**
 * This class creates a connnector to a Socket.io server.
 */ var SocketIoConnector = /*#__PURE__*/ function(_Connector) {
    _inherits(SocketIoConnector1, _Connector);
    var _super = _createSuper(SocketIoConnector1);
    function SocketIoConnector1() {
        var _this;
        _classCallCheck(this, SocketIoConnector1);
        _this = _super.apply(this, arguments);
        /**
     * All of the subscribed channel names.
     */ _this.channels = {};
        return _this;
    }
    /**
   * Create a fresh Socket.io connection.
   */ _createClass(SocketIoConnector1, [
        {
            key: "connect",
            value: function connect() {
                var _this2 = this;
                var io = this.getSocketIO();
                this.socket = io(this.options.host, this.options);
                this.socket.on('reconnect', function() {
                    Object.values(_this2.channels).forEach(function(channel) {
                        channel.subscribe();
                    });
                });
                return this.socket;
            }
        },
        {
            key: "getSocketIO",
            value: function getSocketIO() {
                if (typeof this.options.client !== 'undefined') return this.options.client;
                if (typeof io !== 'undefined') return io;
                throw new Error('Socket.io client not found. Should be globally available or passed via options.client');
            }
        },
        {
            key: "listen",
            value: function listen(name, event, callback) {
                return this.channel(name).listen(event, callback);
            }
        },
        {
            key: "channel",
            value: function channel(name) {
                if (!this.channels[name]) this.channels[name] = new SocketIoChannel(this.socket, name, this.options);
                return this.channels[name];
            }
        },
        {
            key: "privateChannel",
            value: function privateChannel(name) {
                if (!this.channels['private-' + name]) this.channels['private-' + name] = new SocketIoPrivateChannel(this.socket, 'private-' + name, this.options);
                return this.channels['private-' + name];
            }
        },
        {
            key: "presenceChannel",
            value: function presenceChannel(name) {
                if (!this.channels['presence-' + name]) this.channels['presence-' + name] = new SocketIoPresenceChannel(this.socket, 'presence-' + name, this.options);
                return this.channels['presence-' + name];
            }
        },
        {
            key: "leave",
            value: function leave(name2) {
                var _this3 = this;
                var channels = [
                    name2,
                    'private-' + name2,
                    'presence-' + name2
                ];
                channels.forEach(function(name) {
                    _this3.leaveChannel(name);
                });
            }
        },
        {
            key: "leaveChannel",
            value: function leaveChannel(name) {
                if (this.channels[name]) {
                    this.channels[name].unsubscribe();
                    delete this.channels[name];
                }
            }
        },
        {
            key: "socketId",
            value: function socketId() {
                return this.socket.id;
            }
        },
        {
            key: "disconnect",
            value: function disconnect() {
                this.socket.disconnect();
            }
        }
    ]);
    return SocketIoConnector1;
}(Connector);
/**
 * This class creates a null connector.
 */ var NullConnector = /*#__PURE__*/ function(_Connector) {
    _inherits(NullConnector1, _Connector);
    var _super = _createSuper(NullConnector1);
    function NullConnector1() {
        var _this;
        _classCallCheck(this, NullConnector1);
        _this = _super.apply(this, arguments);
        /**
     * All of the subscribed channel names.
     */ _this.channels = {};
        return _this;
    }
    /**
   * Create a fresh connection.
   */ _createClass(NullConnector1, [
        {
            key: "connect",
            value: function connect() {}
        },
        {
            key: "listen",
            value: function listen(name, event, callback) {
                return new NullChannel();
            }
        },
        {
            key: "channel",
            value: function channel(name) {
                return new NullChannel();
            }
        },
        {
            key: "privateChannel",
            value: function privateChannel(name) {
                return new NullPrivateChannel();
            }
        },
        {
            key: "presenceChannel",
            value: function presenceChannel(name) {
                return new NullPresenceChannel();
            }
        },
        {
            key: "leave",
            value: function leave(name) {}
        },
        {
            key: "leaveChannel",
            value: function leaveChannel(name) {}
        },
        {
            key: "socketId",
            value: function socketId() {
                return 'fake-socket-id';
            }
        },
        {
            key: "disconnect",
            value: function disconnect() {}
        }
    ]);
    return NullConnector1;
}(Connector);
/**
 * This class is the primary API for interacting with broadcasting.
 */ var Echo = /*#__PURE__*/ function() {
    /**
   * Create a new class instance.
   */ function Echo1(options) {
        _classCallCheck(this, Echo1);
        this.options = options;
        this.connect();
        if (!this.options.withoutInterceptors) this.registerInterceptors();
    }
    /**
   * Get a channel instance by name.
   */ _createClass(Echo1, [
        {
            key: "channel",
            value: function channel(_channel) {
                return this.connector.channel(_channel);
            }
        },
        {
            key: "connect",
            value: function connect() {
                if (this.options.broadcaster == 'pusher') this.connector = new PusherConnector(this.options);
                else if (this.options.broadcaster == 'socket.io') this.connector = new SocketIoConnector(this.options);
                else if (this.options.broadcaster == 'null') this.connector = new NullConnector(this.options);
                else if (typeof this.options.broadcaster == 'function') this.connector = new this.options.broadcaster(this.options);
            }
        },
        {
            key: "disconnect",
            value: function disconnect() {
                this.connector.disconnect();
            }
        },
        {
            key: "join",
            value: function join(channel) {
                return this.connector.presenceChannel(channel);
            }
        },
        {
            key: "leave",
            value: function leave(channel) {
                this.connector.leave(channel);
            }
        },
        {
            key: "leaveChannel",
            value: function leaveChannel(channel) {
                this.connector.leaveChannel(channel);
            }
        },
        {
            key: "listen",
            value: function listen(channel, event, callback) {
                return this.connector.listen(channel, event, callback);
            }
        },
        {
            key: "private",
            value: function _private(channel) {
                return this.connector.privateChannel(channel);
            }
        },
        {
            key: "encryptedPrivate",
            value: function encryptedPrivate(channel) {
                return this.connector.encryptedPrivateChannel(channel);
            }
        },
        {
            key: "socketId",
            value: function socketId() {
                return this.connector.socketId();
            }
        },
        {
            key: "registerInterceptors",
            value: function registerInterceptors() {
                if (typeof Vue === 'function' && Vue.http) this.registerVueRequestInterceptor();
                if (typeof axios === 'function') this.registerAxiosRequestInterceptor();
                if (typeof jQuery === 'function') this.registerjQueryAjaxSetup();
            }
        },
        {
            key: "registerVueRequestInterceptor",
            value: function registerVueRequestInterceptor() {
                var _this = this;
                Vue.http.interceptors.push(function(request, next) {
                    if (_this.socketId()) request.headers.set('X-Socket-ID', _this.socketId());
                    next();
                });
            }
        },
        {
            key: "registerAxiosRequestInterceptor",
            value: function registerAxiosRequestInterceptor() {
                var _this2 = this;
                axios.interceptors.request.use(function(config) {
                    if (_this2.socketId()) config.headers['X-Socket-Id'] = _this2.socketId();
                    return config;
                });
            }
        },
        {
            key: "registerjQueryAjaxSetup",
            value: function registerjQueryAjaxSetup() {
                var _this3 = this;
                if (typeof jQuery.ajax != 'undefined') jQuery.ajaxPrefilter(function(options, originalOptions, xhr) {
                    if (_this3.socketId()) xhr.setRequestHeader('X-Socket-Id', _this3.socketId());
                });
            }
        }
    ]);
    return Echo1;
}();

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"iFHGE":[function(require,module,exports) {
'use strict';
const UPPERCASE = /[\p{Lu}]/u;
const LOWERCASE = /[\p{Ll}]/u;
const LEADING_CAPITAL = /^[\p{Lu}](?![\p{Lu}])/gu;
const IDENTIFIER = /([\p{Alpha}\p{N}_]|$)/u;
const SEPARATORS = /[_.\- ]+/;
const LEADING_SEPARATORS = new RegExp('^' + SEPARATORS.source);
const SEPARATORS_AND_IDENTIFIER = new RegExp(SEPARATORS.source + IDENTIFIER.source, 'gu');
const NUMBERS_AND_IDENTIFIER = new RegExp('\\d+' + IDENTIFIER.source, 'gu');
const preserveCamelCase = (string, toLowerCase, toUpperCase)=>{
    let isLastCharLower = false;
    let isLastCharUpper = false;
    let isLastLastCharUpper = false;
    for(let i = 0; i < string.length; i++){
        const character = string[i];
        if (isLastCharLower && UPPERCASE.test(character)) {
            string = string.slice(0, i) + '-' + string.slice(i);
            isLastCharLower = false;
            isLastLastCharUpper = isLastCharUpper;
            isLastCharUpper = true;
            i++;
        } else if (isLastCharUpper && isLastLastCharUpper && LOWERCASE.test(character)) {
            string = string.slice(0, i - 1) + '-' + string.slice(i - 1);
            isLastLastCharUpper = isLastCharUpper;
            isLastCharUpper = false;
            isLastCharLower = true;
        } else {
            isLastCharLower = toLowerCase(character) === character && toUpperCase(character) !== character;
            isLastLastCharUpper = isLastCharUpper;
            isLastCharUpper = toUpperCase(character) === character && toLowerCase(character) !== character;
        }
    }
    return string;
};
const preserveConsecutiveUppercase = (input, toLowerCase)=>{
    LEADING_CAPITAL.lastIndex = 0;
    return input.replace(LEADING_CAPITAL, (m1)=>toLowerCase(m1)
    );
};
const postProcess = (input, toUpperCase)=>{
    SEPARATORS_AND_IDENTIFIER.lastIndex = 0;
    NUMBERS_AND_IDENTIFIER.lastIndex = 0;
    return input.replace(SEPARATORS_AND_IDENTIFIER, (_, identifier)=>toUpperCase(identifier)
    ).replace(NUMBERS_AND_IDENTIFIER, (m)=>toUpperCase(m)
    );
};
const camelCase = (input, options)=>{
    if (!(typeof input === 'string' || Array.isArray(input))) throw new TypeError('Expected the input to be `string | string[]`');
    options = {
        pascalCase: false,
        preserveConsecutiveUppercase: false,
        ...options
    };
    if (Array.isArray(input)) input = input.map((x)=>x.trim()
    ).filter((x)=>x.length
    ).join('-');
    else input = input.trim();
    if (input.length === 0) return '';
    const toLowerCase = options.locale === false ? (string)=>string.toLowerCase()
     : (string)=>string.toLocaleLowerCase(options.locale)
    ;
    const toUpperCase = options.locale === false ? (string)=>string.toUpperCase()
     : (string)=>string.toLocaleUpperCase(options.locale)
    ;
    if (input.length === 1) return options.pascalCase ? toUpperCase(input) : toLowerCase(input);
    const hasUpperCase = input !== toLowerCase(input);
    if (hasUpperCase) input = preserveCamelCase(input, toLowerCase, toUpperCase);
    input = input.replace(LEADING_SEPARATORS, '');
    if (options.preserveConsecutiveUppercase) input = preserveConsecutiveUppercase(input, toLowerCase);
    else input = toLowerCase(input);
    if (options.pascalCase) input = toUpperCase(input.charAt(0)) + input.slice(1);
    return postProcess(input, toUpperCase);
};
module.exports = camelCase;
// TODO: Remove this for the next major release
module.exports.default = camelCase;

},{}],"fAjHw":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _instance = require("tiny-emitter/instance");
var _instanceDefault = parcelHelpers.interopDefault(_instance);
exports.default = {
    $on: (...args)=>_instanceDefault.default.on(...args)
    ,
    $once: (...args)=>_instanceDefault.default.once(...args)
    ,
    $off: (...args)=>_instanceDefault.default.off(...args)
    ,
    $emit: (...args)=>_instanceDefault.default.emit(...args)
};

},{"tiny-emitter/instance":"fEdJw","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fEdJw":[function(require,module,exports) {
var E = require('./index.js');
module.exports = new E();

},{"./index.js":"2GwCf"}],"2GwCf":[function(require,module,exports) {
function E() {
// Keep this empty so it's easier to inherit from
// (via https://github.com/lipsmack from https://github.com/scottcorgan/tiny-emitter/issues/3)
}
E.prototype = {
    on: function(name, callback, ctx) {
        var e = this.e || (this.e = {});
        (e[name] || (e[name] = [])).push({
            fn: callback,
            ctx: ctx
        });
        return this;
    },
    once: function(name, callback, ctx) {
        var self = this;
        function listener() {
            self.off(name, listener);
            callback.apply(ctx, arguments);
        }
        listener._ = callback;
        return this.on(name, listener, ctx);
    },
    emit: function(name) {
        var data = [].slice.call(arguments, 1);
        var evtArr = ((this.e || (this.e = {}))[name] || []).slice();
        var i = 0;
        var len = evtArr.length;
        for(; i < len; i++)evtArr[i].fn.apply(evtArr[i].ctx, data);
        return this;
    },
    off: function(name, callback) {
        var e = this.e || (this.e = {});
        var evts = e[name];
        var liveEvents = [];
        if (evts && callback) {
            for(var i = 0, len = evts.length; i < len; i++)if (evts[i].fn !== callback && evts[i].fn._ !== callback) liveEvents.push(evts[i]);
        }
        // Remove event from queue to prevent memory leak
        // Suggested by https://github.com/lazd
        // Ref: https://github.com/scottcorgan/tiny-emitter/commit/c6ebfaa9bc973b33d110a84a307742b7cf94c953#commitcomment-5024910
        liveEvents.length ? e[name] = liveEvents : delete e[name];
        return this;
    }
};
module.exports = E;
module.exports.TinyEmitter = E;

},{}]},["hWUhW","fj5J1"], "fj5J1", "parcelRequire1c18")

//# sourceMappingURL=index.c9c984ed.js.map
