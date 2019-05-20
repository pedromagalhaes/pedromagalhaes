module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ({

/***/ "/+oN":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-prototype-of");

/***/ }),

/***/ "/XES":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: C:/playground/pedromagalhaes/node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js
var iterator = __webpack_require__("45mK");
var iterator_default = /*#__PURE__*/__webpack_require__.n(iterator);

// EXTERNAL MODULE: C:/playground/pedromagalhaes/node_modules/@babel/runtime-corejs2/core-js/symbol.js
var symbol = __webpack_require__("Gozm");
var symbol_default = /*#__PURE__*/__webpack_require__.n(symbol);

// CONCATENATED MODULE: C:/playground/pedromagalhaes/node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js



function typeof_typeof2(obj) { if (typeof symbol_default.a === "function" && typeof iterator_default.a === "symbol") { typeof_typeof2 = function _typeof2(obj) { return typeof obj; }; } else { typeof_typeof2 = function _typeof2(obj) { return obj && typeof symbol_default.a === "function" && obj.constructor === symbol_default.a && obj !== symbol_default.a.prototype ? "symbol" : typeof obj; }; } return typeof_typeof2(obj); }

function typeof_typeof(obj) {
  if (typeof symbol_default.a === "function" && typeof_typeof2(iterator_default.a) === "symbol") {
    typeof_typeof = function _typeof(obj) {
      return typeof_typeof2(obj);
    };
  } else {
    typeof_typeof = function _typeof(obj) {
      return obj && typeof symbol_default.a === "function" && obj.constructor === symbol_default.a && obj !== symbol_default.a.prototype ? "symbol" : typeof_typeof2(obj);
    };
  }

  return typeof_typeof(obj);
}
// EXTERNAL MODULE: C:/playground/pedromagalhaes/node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js
var assertThisInitialized = __webpack_require__("vTWr");

// CONCATENATED MODULE: C:/playground/pedromagalhaes/node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _possibleConstructorReturn; });


function _possibleConstructorReturn(self, call) {
  if (call && (typeof_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return Object(assertThisInitialized["a" /* default */])(self);
}

/***/ }),

/***/ "0bYB":
/***/ (function(module, exports) {

module.exports = require("isomorphic-unfetch");

/***/ }),

/***/ 1:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("1TCz");


/***/ }),

/***/ "1TCz":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: C:/playground/pedromagalhaes/node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js
var classCallCheck = __webpack_require__("h7sq");

// EXTERNAL MODULE: C:/playground/pedromagalhaes/node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js
var createClass = __webpack_require__("tS02");

// EXTERNAL MODULE: C:/playground/pedromagalhaes/node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js + 1 modules
var possibleConstructorReturn = __webpack_require__("/XES");

// EXTERNAL MODULE: C:/playground/pedromagalhaes/node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js
var getPrototypeOf = __webpack_require__("ztBH");

// EXTERNAL MODULE: C:/playground/pedromagalhaes/node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js + 1 modules
var inherits = __webpack_require__("Fayl");

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: C:/playground/pedromagalhaes/node_modules/next/app.js
var app = __webpack_require__("Khd+");
var app_default = /*#__PURE__*/__webpack_require__.n(app);

// EXTERNAL MODULE: external "react-apollo"
var external_react_apollo_ = __webpack_require__("MGkW");

// EXTERNAL MODULE: C:/playground/pedromagalhaes/node_modules/@babel/runtime-corejs2/helpers/esm/extends.js
var esm_extends = __webpack_require__("pneb");

// EXTERNAL MODULE: C:/playground/pedromagalhaes/node_modules/@babel/runtime-corejs2/core-js/promise.js
var promise = __webpack_require__("Ml6p");
var promise_default = /*#__PURE__*/__webpack_require__.n(promise);

// EXTERNAL MODULE: C:/playground/pedromagalhaes/node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js
var objectSpread = __webpack_require__("rNCn");

// EXTERNAL MODULE: C:/playground/pedromagalhaes/node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__("znL5");

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__("xnum");
var head_default = /*#__PURE__*/__webpack_require__.n(head_);

// EXTERNAL MODULE: external "apollo-boost"
var external_apollo_boost_ = __webpack_require__("YvTO");

// EXTERNAL MODULE: external "isomorphic-unfetch"
var external_isomorphic_unfetch_ = __webpack_require__("0bYB");
var external_isomorphic_unfetch_default = /*#__PURE__*/__webpack_require__.n(external_isomorphic_unfetch_);

// CONCATENATED MODULE: ./hoc/init-apollo.js


var init_apollo_apolloClient = null;

function create(initialState) {
  // Check out https://github.com/zeit/next.js/pull/4611 if you want to use the AWSAppSyncClient
  return new external_apollo_boost_["ApolloClient"]({
    connectToDevTools: false,
    ssrMode: !false,
    // Disables forceFetch on the server (so queries are only run once)
    link: new external_apollo_boost_["HttpLink"]({
      uri: 'http://localhost:4000/graphql',
      // Server URL (must be absolute)
      credentials: 'same-origin',
      // Additional fetch() options like `credentials` or `headers`
      // Use fetch() polyfill on the server
      fetch:  true && external_isomorphic_unfetch_default.a
    }),
    cache: new external_apollo_boost_["InMemoryCache"]().restore(initialState || {})
  });
}

function initApollo(initialState) {
  // Make sure to create a new client for every server-side request so that data
  // isn't shared between connections (which would be bad)
  if (true) {
    return create(initialState);
  } // Reuse client on the client-side


  if (!init_apollo_apolloClient) {
    init_apollo_apolloClient = create(initialState);
  }

  return init_apollo_apolloClient;
}
// CONCATENATED MODULE: ./hoc/with-apollo-client.js










function _catch(body, recover) {
  try {
    var result = body();
  } catch (e) {
    return recover(e);
  }

  if (result && result.then) {
    return result.then(void 0, recover);
  }

  return result;
}





/* harmony default export */ var with_apollo_client = (function (App) {
  var _class, _temp;

  return _temp = _class =
  /*#__PURE__*/
  function (_React$Component) {
    Object(inherits["a" /* default */])(Apollo, _React$Component);

    Object(createClass["a" /* default */])(Apollo, null, [{
      key: "getInitialProps",
      value: function (ctx) {
        try {
          function _temp8() {
            function _temp5() {
              // Extract query data from the Apollo store
              var apolloState = apollo.cache.extract();
              return Object(objectSpread["a" /* default */])({}, appProps, {
                apolloState: apolloState
              });
            }

            // Run all GraphQL queries in the component tree
            // and extract the resulting data
            var apollo = initApollo();

            var _temp4 = function () {
              if (true) {
                function _temp10() {
                  // getDataFromTree does not call componentWillUnmount
                  // head side effect therefore need to be cleared manually
                  head_default.a.rewind();
                }

                var _temp11 = _catch(function () {
                  // Run all GraphQL queries
                  return promise_default.a.resolve(Object(external_react_apollo_["getDataFromTree"])(external_react_default.a.createElement(App, Object(esm_extends["a" /* default */])({}, appProps, {
                    Component: Component,
                    router: router,
                    apolloClient: apollo
                  })))).then(function () {});
                }, function (error) {
                  // Prevent Apollo Client GraphQL errors from crashing SSR.
                  // Handle them in components via the data.error prop:
                  // https://www.apollographql.com/docs/react/api/react-apollo.html#graphql-query-data-error
                  console.error('Error while running `getDataFromTree`', error);
                });

                return _temp11 && _temp11.then ? _temp11.then(_temp10) : _temp10(_temp11);
              }
            }();

            return _temp4 && _temp4.then ? _temp4.then(_temp5) : _temp5(_temp4);
          }

          var Component = ctx.Component,
              router = ctx.router;
          var appProps = {};

          var _temp9 = function () {
            if (App.getInitialProps) {
              return promise_default.a.resolve(App.getInitialProps(ctx)).then(function (_App$getInitialProps) {
                appProps = _App$getInitialProps;
              });
            }
          }();

          return promise_default.a.resolve(_temp9 && _temp9.then ? _temp9.then(_temp8) : _temp8(_temp9));
        } catch (e) {
          return promise_default.a.reject(e);
        }
      }
    }]);

    function Apollo(props) {
      var _this;

      Object(classCallCheck["a" /* default */])(this, Apollo);

      _this = Object(possibleConstructorReturn["a" /* default */])(this, Object(getPrototypeOf["a" /* default */])(Apollo).call(this, props));
      _this.apolloClient = initApollo(props.apolloState); // eslint-disable-line react/prop-types

      return _this;
    }

    Object(createClass["a" /* default */])(Apollo, [{
      key: "render",
      value: function render() {
        return external_react_default.a.createElement(App, Object(esm_extends["a" /* default */])({}, this.props, {
          apolloClient: this.apolloClient
        }));
      }
    }]);

    return Apollo;
  }(external_react_default.a.Component), Object(defineProperty["a" /* default */])(_class, "displayName", 'withApollo(App)'), _temp;
});
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__("4Q3z");
var router_default = /*#__PURE__*/__webpack_require__.n(router_);

// EXTERNAL MODULE: external "nprogress"
var external_nprogress_ = __webpack_require__("GvLQ");
var external_nprogress_default = /*#__PURE__*/__webpack_require__.n(external_nprogress_);

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__("Dtiu");
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// CONCATENATED MODULE: ../theme/vars.js
var vars_theme = {
  // font family
  bodyFont: '\'Ubuntu\', sans-serif',
  // font sizes
  bodySize: '16px',
  bodyLineHeight: '26px',
  descriptionSize: '16px',
  languagesSize: '14px',
  buttonFontSize: '15px',
  // palette
  color1: '#27363b',
  color2: '#557c83',
  color3: '#3aafa9',
  color4: '#dfdfdf',
  color5: '#a2d5ac',
  color6: '#fff',
  color7: '#eee',
  color8: '#ccc',
  color9: '#019b94',
  color10: 'rgb(100, 255, 218)',
  color11: 'rgb(204, 246, 223)',
  color12: '#334e52',
  // colors
  colorBlack: '#000',
  colorBody: '#444749',
  colorBorder: '#d0d0d0',
  colorBox: '#dfdfdf',
  colorContent: '#f7f7f7',
  colorDark: '#1d2327',
  colorDisabled: '#e5e5e5',
  colorFormBorder: '#bdbdbd',
  colorGreen: '#37d142',
  colorLoginBorder: '#dedede',
  colorPlaceholder: '#bdbdbd',
  colorSeparator: '#bdbdbd',
  colorTableBkg: '#f5f5f5',
  colorTableBorder: '#eceeef',
  colorTableText: '#373a3c',
  colorWhite: '#fff',
  colorProgresBar: '#bdbdbd',
  colorBkgError: '#fff5f7',
  inputBorderColor: '#dedede',
  inputColor: '#1d2327',
  // Containers
  desktopContainer: '1345px',
  // Breakpoints
  largeMonitorBreakpoint: '1200px'
};
/* harmony default export */ var vars = (vars_theme);
// EXTERNAL MODULE: C:/playground/pedromagalhaes/node_modules/semantic-ui-css/semantic.min.css
var semantic_min = __webpack_require__("jC5Q");

// EXTERNAL MODULE: C:/playground/pedromagalhaes/node_modules/nprogress/nprogress.css
var nprogress = __webpack_require__("p7IL");

// EXTERNAL MODULE: external "query-string"
var external_query_string_ = __webpack_require__("Lc87");
var external_query_string_default = /*#__PURE__*/__webpack_require__.n(external_query_string_);

// CONCATENATED MODULE: ./utils/polyfill.js



var polyfill_injectPolyfillIO = function injectPolyfillIO() {
  var _host$params = {
    host: 'https://polyfill.io/v3/polyfill.min.js',
    params: external_query_string_default.a.stringify({
      flags: ['gated', 'always'].join(', '),
      features: ['Promise.prototype.finally'].join(', ')
    })
  },
      host = _host$params.host,
      params = _host$params.params;
  var url = "".concat(host, "?").concat(params);
  return external_react_default.a.createElement(external_react_default.a.Fragment, null, external_react_default.a.createElement("link", {
    rel: "preload",
    as: "script",
    href: url,
    crossOrigin: "crossorigin"
  }), external_react_default.a.createElement("script", {
    crossOrigin: "anonymous",
    src: url
  }));
};

/* harmony default export */ var polyfill = (polyfill_injectPolyfillIO);
// CONCATENATED MODULE: ./utils/index.js


/* harmony default export */ var utils = ({});
// CONCATENATED MODULE: ./components/Layout/Head.js





/* harmony default export */ var Head = (external_react_default.a.memo(function () {
  var gtmScript = "\n  window.addEventListener('load', function(event) {\n    window.dataLayer = window.dataLayer || [];\n    function gtag(){dataLayer.push(arguments);}\n    gtag('js', new Date());\n    gtag('config', 'UA-23725125-1');\n  })";
  return external_react_default.a.createElement(head_default.a, null, external_react_default.a.createElement("title", null, "Pedro Magalh\xE3es | Software Engineer"), external_react_default.a.createElement("meta", {
    charSet: "utf-8"
  }), external_react_default.a.createElement("meta", {
    name: "viewport",
    content: "width=device-width, initial-scale=1, user-scalable=0"
  }), external_react_default.a.createElement("meta", {
    property: "og:site_name",
    content: "Pedro Magalh\xE3es"
  }), external_react_default.a.createElement("meta", {
    property: "og:type",
    content: "website"
  }), external_react_default.a.createElement("meta", {
    property: "og:title",
    content: "Pedro Magalh\xE3es | Software Engineer"
  }), external_react_default.a.createElement("meta", {
    property: "og:url",
    content: "https://www.pedromagalhaes.com/"
  }), external_react_default.a.createElement("meta", {
    property: "og:description",
    content: "Pedro Magalh\xE3es is a software engineer based in Algarve."
  }), ' ', external_react_default.a.createElement("meta", {
    property: "og:image",
    content: ""
  }), external_react_default.a.createElement("meta", {
    name: "twitter:card",
    content: "summary"
  }), external_react_default.a.createElement("meta", {
    name: "twitter:title",
    content: "Pedro Magalh\xE3es"
  }), external_react_default.a.createElement("meta", {
    name: "twitter:site",
    content: "Pedro Magalh\xE3es"
  }), external_react_default.a.createElement("meta", {
    name: "twitter:description",
    content: "Pedro Magalh\xE3es is a software engineer based in Algarve."
  }), ' ', external_react_default.a.createElement("meta", {
    name: "twitter:image:src",
    content: ""
  }), external_react_default.a.createElement("meta", {
    name: "google-site-verification",
    content: "google-site-verification=-X2gefQLbXmhgn5D0gqu2-dCcabbK_OoXGh3OP3kR0A"
  }), ' ', external_react_default.a.createElement("meta", {
    name: "msvalidate.01",
    content: ""
  }), external_react_default.a.createElement("meta", {
    property: "fb:app_id",
    content: ""
  }), external_react_default.a.createElement("link", {
    href: "https://fonts.googleapis.com/css?family=Ubuntu",
    rel: "stylesheet"
  }), " ", external_react_default.a.createElement("link", {
    rel: "shortcut icon",
    href: "/static/favicon/favicon.ico"
  }), " ", external_react_default.a.createElement("meta", {
    name: "msapplication-TileImage",
    content: "/static/favicon/mstile-150x150.png"
  }), external_react_default.a.createElement("link", {
    rel: "apple-touch-icon",
    href: "/static/favicon/apple-touch-icon.png"
  }), external_react_default.a.createElement("link", {
    rel: "android-touch-icon",
    href: "/static/favicon/apple-touch-icon.png"
  }), external_react_default.a.createElement("link", {
    rel: "icon",
    type: "image/png",
    href: "/static/favicon/android-chrome-192x192.png",
    sizes: "128x128"
  }), external_react_default.a.createElement("link", {
    rel: "apple-touch-icon-precomposed",
    sizes: "144x144",
    href: "/static/favicon/android-chrome-192x192.png"
  }), external_react_default.a.createElement("link", {
    rel: "apple-touch-icon-precomposed",
    sizes: "114x114",
    href: "/static/favicon/android-chrome-192x192.png"
  }), external_react_default.a.createElement("link", {
    rel: "apple-touch-icon-precomposed",
    sizes: "72x72",
    href: "/static/favicon/android-chrome-192x192.png"
  }), external_react_default.a.createElement("link", {
    rel: "apple-touch-icon-precomposed",
    sizes: "57x57",
    href: "/static/favicon/android-chrome-192x192.png"
  }), external_react_default.a.createElement("script", {
    async: true,
    src: "https://www.googletagmanager.com/gtag/js?id=UA-23725125-1"
  }), external_react_default.a.createElement("script", {
    id: "gtm-head",
    dangerouslySetInnerHTML: {
      __html: gtmScript
    }
  }), polyfill());
}));
// EXTERNAL MODULE: external "semantic-ui-react"
var external_semantic_ui_react_ = __webpack_require__("FfxO");

// EXTERNAL MODULE: C:/playground/pedromagalhaes/node_modules/next/link.js
var next_link = __webpack_require__("jvFD");
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);

// EXTERNAL MODULE: ./static/logo.svg
var logo = __webpack_require__("tU3Z");

// CONCATENATED MODULE: ./components/Layout/Header/index.styles.js

var HeaderStyles = external_styled_components_default.a.section.withConfig({
  displayName: "indexstyles__HeaderStyles",
  componentId: "sc-1w9rnxi-0"
})(["margin-bottom:0;.ui.segment{border-radius:0;padding:25px 0 25px 0;box-shadow:none;background:", ";}.right.menu{.item,.item button,.item i{transition:all 0.25s cubic-bezier(0.645,0.045,0.355,1) 0s;&:hover{outline:none;}}.item,.item button{font-size:15px;}}.left.menu{.logo.left.item{padding:0;border:0;margin:0;&:hover,&:active,&:focus{background:none;}svg{width:49px;shape-rendering:geometricPrecision;}span{color:", " !important;margin-left:15px;}&::before{background:none;}}}.ui.dropdown > .dropdown.icon{margin-left:10px;}.ui.secondary.inverted.menu a.item{background:none;color:", " !important;&.active,&:hover{color:", " !important;border-radius:0;}span{display:none;margin-right:10px;color:", " !important;}}.ui.inverted.button,.ui.inverted.button{color:", " !important;box-shadow:0 0 0 2px ", " inset !important;font-family:", ";font-weight:400;&:hover,&:active,&:focus{background:", ";color:", " !important;}}"], function (props) {
  return props.theme.color1;
}, function (props) {
  return props.theme.color6;
}, function (props) {
  return props.theme.color8;
}, function (props) {
  return props.theme.color6;
}, function (props) {
  return props.theme.color6;
}, function (props) {
  return props.theme.color10;
}, function (props) {
  return props.theme.color10;
}, function (props) {
  return props.theme.bodyFont;
}, function (props) {
  return props.theme.color10;
}, function (props) {
  return props.theme.color1;
});
/* harmony default export */ var index_styles = (HeaderStyles);
// CONCATENATED MODULE: ./components/Layout/Header/index.js






/*
const trigger = (
  <span>
    {' '}
    <Icon name='world' size='large' />
  </span>
)

const options = [
  { key: 'en', text: 'English (US)' },
  { key: 'pt', text: 'Português (PT)' },
  { key: 'es', text: 'Spanish (ES)' }
]
*/

var Header_Header = function Header(_ref) {
  var router = _ref.router;

  var isActive = function isActive(url) {
    return !!(router.asPath === url);
  };

  return external_react_default.a.createElement(external_react_default.a.Fragment, null, external_react_default.a.createElement(index_styles, {
    className: "site-header"
  }, external_react_default.a.createElement(external_semantic_ui_react_["Segment"], {
    inverted: true
  }, external_react_default.a.createElement(external_semantic_ui_react_["Menu"], {
    inverted: true,
    secondary: true
  }, external_react_default.a.createElement(external_semantic_ui_react_["Container"], null, external_react_default.a.createElement(external_semantic_ui_react_["Menu"].Menu, {
    position: "left"
  }, external_react_default.a.createElement(link_default.a, {
    href: "/",
    as: "/"
  }, external_react_default.a.createElement(external_semantic_ui_react_["Menu"].Item, {
    className: "logo",
    position: "left"
  }, external_react_default.a.createElement(logo["a" /* default */], null)))), external_react_default.a.createElement(external_semantic_ui_react_["Menu"].Menu, {
    position: "right"
  }, external_react_default.a.createElement(external_react_default.a.Fragment, null, external_react_default.a.createElement(link_default.a, {
    href: "/public/about",
    as: "/about"
  }, external_react_default.a.createElement(external_semantic_ui_react_["Menu"].Item, {
    name: "about",
    active: isActive('/about')
  }, external_react_default.a.createElement("span", null, "02."), " About")), external_react_default.a.createElement(link_default.a, {
    href: "/public/projects",
    as: "/projects"
  }, external_react_default.a.createElement(external_semantic_ui_react_["Menu"].Item, {
    name: "projects",
    active: isActive('/projects')
  }, external_react_default.a.createElement("span", null, "03."), " Projects")), external_react_default.a.createElement(link_default.a, {
    href: "/public/services",
    as: "/services"
  }, external_react_default.a.createElement(external_semantic_ui_react_["Menu"].Item, {
    name: "services",
    active: isActive('/services')
  }, external_react_default.a.createElement("span", null, "04."), " Services")), external_react_default.a.createElement(link_default.a, {
    href: "/public/blog",
    as: "/blog"
  }, external_react_default.a.createElement(external_semantic_ui_react_["Menu"].Item, {
    name: "blog",
    active: isActive('/blog')
  }, external_react_default.a.createElement("span", null, "05."), " Blog")), external_react_default.a.createElement(link_default.a, {
    href: "/public/contact",
    as: "/contact"
  }, external_react_default.a.createElement(external_semantic_ui_react_["Menu"].Item, {
    name: "contact",
    active: isActive('/contact')
  }, external_react_default.a.createElement("span", null, "06."), " Contact")))), external_react_default.a.createElement(external_semantic_ui_react_["Menu"].Menu, {
    position: "right"
  }, external_react_default.a.createElement(external_semantic_ui_react_["Menu"].Item, null, external_react_default.a.createElement(external_semantic_ui_react_["Icon"], {
    size: "large",
    name: "search"
  })), external_react_default.a.createElement(link_default.a, {
    href: "/public/authentication/login",
    as: "/login"
  }, external_react_default.a.createElement(external_semantic_ui_react_["Menu"].Item, null, external_react_default.a.createElement(external_semantic_ui_react_["Button"], {
    inverted: true,
    basic: true,
    color: "grey"
  }, "Log In"))), external_react_default.a.createElement(link_default.a, {
    href: "/public/authentication/register",
    as: "/register"
  }, external_react_default.a.createElement(external_semantic_ui_react_["Menu"].Item, null, external_react_default.a.createElement(external_semantic_ui_react_["Button"], {
    inverted: true
  }, "Sign Up")))))))));
};

/* harmony default export */ var Layout_Header = (Object(router_["withRouter"])(Header_Header));
// CONCATENATED MODULE: ./components/Layout/Footer/index.styles.js

var FooterStyles = external_styled_components_default.a.section.withConfig({
  displayName: "indexstyles__FooterStyles",
  componentId: "sc-9v2hl6-0"
})(["padding:0;margin:0;.ui.segment{background:", ";padding:0;margin:0;}.ui.inverted.grid{&:first-child{.row{padding:70px 0 50px 0;a.item{color:", ";}}}&:last-child{.row{padding:10px 0 70px 0;margin:0;color:rgba(255,255,255,0.5);font-size:13px;a{color:rgba(255,255,255,0.5);}span{display:inline-block;margin:0 5px;}}}}h4.ui.header{color:#fff;font-weight:bold;}"], function (props) {
  return props.theme.color1;
}, function (props) {
  return props.theme.color8;
});
/* harmony default export */ var Footer_index_styles = (FooterStyles);
// CONCATENATED MODULE: ./components/Layout/Footer/index.js




var Footer_Footer = function Footer() {
  return external_react_default.a.createElement(Footer_index_styles, {
    className: "site-footer"
  }, external_react_default.a.createElement(external_react_default.a.Fragment, null, external_react_default.a.createElement(external_semantic_ui_react_["Segment"], {
    inverted: true,
    vertical: true
  }, external_react_default.a.createElement(external_semantic_ui_react_["Container"], null, external_react_default.a.createElement(external_semantic_ui_react_["Grid"], {
    inverted: true,
    columns: 5
  }, external_react_default.a.createElement(external_semantic_ui_react_["Grid"].Row, null, external_react_default.a.createElement(external_semantic_ui_react_["Grid"].Column, null, external_react_default.a.createElement(external_semantic_ui_react_["Header"], {
    inverted: true,
    as: "h4",
    content: "About"
  }), external_react_default.a.createElement(external_semantic_ui_react_["List"], {
    link: true,
    inverted: true
  }, external_react_default.a.createElement(external_semantic_ui_react_["List"].Item, {
    as: "a"
  }, "Sitemap"), external_react_default.a.createElement(external_semantic_ui_react_["List"].Item, {
    as: "a"
  }, "Contact Us"), external_react_default.a.createElement(external_semantic_ui_react_["List"].Item, {
    as: "a"
  }, "Religious Ceremonies"), external_react_default.a.createElement(external_semantic_ui_react_["List"].Item, {
    as: "a"
  }, "Gazebo Plans"))), external_react_default.a.createElement(external_semantic_ui_react_["Grid"].Column, null, external_react_default.a.createElement(external_semantic_ui_react_["Header"], {
    inverted: true,
    as: "h4",
    content: "Services"
  }), external_react_default.a.createElement(external_semantic_ui_react_["List"], {
    link: true,
    inverted: true
  }, external_react_default.a.createElement(external_semantic_ui_react_["List"].Item, {
    as: "a"
  }, "Banana Pre-Order"), external_react_default.a.createElement(external_semantic_ui_react_["List"].Item, {
    as: "a"
  }, "DNA FAQ"), external_react_default.a.createElement(external_semantic_ui_react_["List"].Item, {
    as: "a"
  }, "How To Access"), external_react_default.a.createElement(external_semantic_ui_react_["List"].Item, {
    as: "a"
  }, "Favorite X-Men"))), external_react_default.a.createElement(external_semantic_ui_react_["Grid"].Column, null, external_react_default.a.createElement(external_semantic_ui_react_["Header"], {
    inverted: true,
    as: "h4",
    content: "Projects"
  }), external_react_default.a.createElement(external_semantic_ui_react_["List"], {
    link: true,
    inverted: true
  }, external_react_default.a.createElement(external_semantic_ui_react_["List"].Item, {
    as: "a"
  }, "Banana Pre-Order"), external_react_default.a.createElement(external_semantic_ui_react_["List"].Item, {
    as: "a"
  }, "DNA FAQ"), external_react_default.a.createElement(external_semantic_ui_react_["List"].Item, {
    as: "a"
  }, "How To Access"), external_react_default.a.createElement(external_semantic_ui_react_["List"].Item, {
    as: "a"
  }, "Favorite X-Men"))), external_react_default.a.createElement(external_semantic_ui_react_["Grid"].Column, null, external_react_default.a.createElement(external_semantic_ui_react_["Header"], {
    inverted: true,
    as: "h4",
    content: "Blog"
  }), external_react_default.a.createElement(external_semantic_ui_react_["List"], {
    link: true,
    inverted: true
  }, external_react_default.a.createElement(external_semantic_ui_react_["List"].Item, {
    as: "a"
  }, "Banana Pre-Order"), external_react_default.a.createElement(external_semantic_ui_react_["List"].Item, {
    as: "a"
  }, "DNA FAQ"), external_react_default.a.createElement(external_semantic_ui_react_["List"].Item, {
    as: "a"
  }, "How To Access"), external_react_default.a.createElement(external_semantic_ui_react_["List"].Item, {
    as: "a"
  }, "Favorite X-Men"))), external_react_default.a.createElement(external_semantic_ui_react_["Grid"].Column, null, external_react_default.a.createElement(external_semantic_ui_react_["Header"], {
    inverted: true,
    as: "h4",
    content: "Contact"
  }), external_react_default.a.createElement(external_semantic_ui_react_["List"], {
    link: true,
    inverted: true
  }, external_react_default.a.createElement(external_semantic_ui_react_["List"].Item, {
    as: "a"
  }, "Banana Pre-Order"), external_react_default.a.createElement(external_semantic_ui_react_["List"].Item, {
    as: "a"
  }, "DNA FAQ"), external_react_default.a.createElement(external_semantic_ui_react_["List"].Item, {
    as: "a"
  }, "How To Access"), external_react_default.a.createElement(external_semantic_ui_react_["List"].Item, {
    as: "a"
  }, "Favorite X-Men"))))), external_react_default.a.createElement(external_semantic_ui_react_["Grid"], {
    inverted: true
  }, external_react_default.a.createElement(external_semantic_ui_react_["Grid"].Row, null, external_react_default.a.createElement(external_semantic_ui_react_["Grid"].Column, {
    computer: 12
  }, external_react_default.a.createElement("p", null, "\xA9 2019 Pedro Magalhaes. Trademarks and brands are the property of their respective owners.")), external_react_default.a.createElement(external_semantic_ui_react_["Grid"].Column, {
    textAlign: "right",
    computer: 4
  }, external_react_default.a.createElement("p", null, external_react_default.a.createElement("a", null, "Legal"), " ", external_react_default.a.createElement("span", null, "|"), " ", external_react_default.a.createElement("a", null, "Terms"), " ", external_react_default.a.createElement("span", null, "|"), " ", external_react_default.a.createElement("a", null, "Privacy")))))))));
};

/* harmony default export */ var Layout_Footer = (Footer_Footer);
// EXTERNAL MODULE: C:/playground/pedromagalhaes/node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js
var taggedTemplateLiteral = __webpack_require__("2ewA");

// CONCATENATED MODULE: ./components/Layout/index.styles.js


function _templateObject() {
  var data = Object(taggedTemplateLiteral["a" /* default */])(["\n  body {\n    font-family: ", ";\n    font-size: ", ";\n    line-height: ", ";\n    background: #fff !important;\n  }\n\n  * {\n    font-family: ", ";\n  }\n\n  #nprogress {\n    .bar {\n      background: ", ";\n    }\n\n    .peg {\n      box-shadow: 0 0 10px ", ", 0 0 5px ", ";\n    }\n\n    .spinner-icon {\n      border-top-color: ", ";\n      border-left-color: ", ";\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}



var index_styles_GlobalStyle = function GlobalStyle(theme) {
  return Object(external_styled_components_["createGlobalStyle"])(_templateObject(), theme.bodyFont, theme.bodySize, theme.bodyLineHeight, theme.bodyFont, theme.colorProgresBar, theme.colorProgresBar, theme.colorProgresBar, theme.colorProgresBar, theme.colorProgresBar);
};

/* harmony default export */ var Layout_index_styles = (index_styles_GlobalStyle);
// CONCATENATED MODULE: ./components/Layout/index.js









var _React = external_react_default.a,
    useEffect = _React.useEffect;

var Layout_Layout = function Layout(_ref) {
  var children = _ref.children;
  var GlobalStyles = Layout_index_styles(vars);
  useEffect(function () {
    router_default.a.events.on('routeChangeStart', function () {
      return external_nprogress_default.a.start();
    });
    router_default.a.events.on('routeChangeComplete', function () {
      return external_nprogress_default.a.done();
    });
    router_default.a.events.on('routeChangeError', function () {
      return external_nprogress_default.a.done();
    });
  });
  return external_react_default.a.createElement("main", null, external_react_default.a.createElement(external_styled_components_["ThemeProvider"], {
    theme: vars
  }, external_react_default.a.createElement(external_react_default.a.Fragment, null, external_react_default.a.createElement(Head, null), external_react_default.a.createElement(GlobalStyles, null), external_react_default.a.createElement(Layout_Header, null), children, external_react_default.a.createElement(Layout_Footer, null))));
};

/* harmony default export */ var components_Layout = (Layout_Layout);
// CONCATENATED MODULE: ./pages/_app.js











var _app_MyApp =
/*#__PURE__*/
function (_App) {
  Object(inherits["a" /* default */])(MyApp, _App);

  function MyApp() {
    Object(classCallCheck["a" /* default */])(this, MyApp);

    return Object(possibleConstructorReturn["a" /* default */])(this, Object(getPrototypeOf["a" /* default */])(MyApp).apply(this, arguments));
  }

  Object(createClass["a" /* default */])(MyApp, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          Component = _this$props.Component,
          pageProps = _this$props.pageProps,
          apolloClient = _this$props.apolloClient;
      return external_react_default.a.createElement(app["Container"], null, external_react_default.a.createElement(components_Layout, null, external_react_default.a.createElement(external_react_apollo_["ApolloProvider"], {
        client: apolloClient
      }, external_react_default.a.createElement(Component, pageProps))));
    }
  }]);

  return MyApp;
}(app_default.a);

/* harmony default export */ var _app = __webpack_exports__["default"] = (with_apollo_client(_app_MyApp));

/***/ }),

/***/ "1v/0":
/***/ (function(module, exports, __webpack_require__) {

var _Object$setPrototypeOf = __webpack_require__("U9rZ");

function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = _Object$setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf;

/***/ }),

/***/ "2ewA":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _taggedTemplateLiteral; });
/* harmony import */ var _core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("emby");
/* harmony import */ var _core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_object_freeze__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("v0mK");
/* harmony import */ var _core_js_object_freeze__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_freeze__WEBPACK_IMPORTED_MODULE_1__);


function _taggedTemplateLiteral(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }

  return _core_js_object_freeze__WEBPACK_IMPORTED_MODULE_1___default()(_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_0___default()(strings, {
    raw: {
      value: _core_js_object_freeze__WEBPACK_IMPORTED_MODULE_1___default()(raw)
    }
  }));
}

/***/ }),

/***/ "45mK":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("gHn/");

/***/ }),

/***/ "4Q3z":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "8k7s":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("k1wZ");

/***/ }),

/***/ "Dtiu":
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),

/***/ "E1+a":
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;

/***/ }),

/***/ "FIas":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("Z6Kq");

/***/ }),

/***/ "Fayl":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: C:/playground/pedromagalhaes/node_modules/@babel/runtime-corejs2/core-js/object/create.js
var create = __webpack_require__("Tqks");
var create_default = /*#__PURE__*/__webpack_require__.n(create);

// EXTERNAL MODULE: C:/playground/pedromagalhaes/node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js
var set_prototype_of = __webpack_require__("U9rZ");
var set_prototype_of_default = /*#__PURE__*/__webpack_require__.n(set_prototype_of);

// CONCATENATED MODULE: C:/playground/pedromagalhaes/node_modules/@babel/runtime-corejs2/helpers/esm/setPrototypeOf.js

function _setPrototypeOf(o, p) {
  _setPrototypeOf = set_prototype_of_default.a || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}
// CONCATENATED MODULE: C:/playground/pedromagalhaes/node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _inherits; });


function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = create_default()(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

/***/ }),

/***/ "FfxO":
/***/ (function(module, exports) {

module.exports = require("semantic-ui-react");

/***/ }),

/***/ "Gf4D":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/freeze");

/***/ }),

/***/ "Gozm":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("vqFK");

/***/ }),

/***/ "GvLQ":
/***/ (function(module, exports) {

module.exports = require("nprogress");

/***/ }),

/***/ "HaU7":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("lpv4");

var _promise = _interopRequireDefault(__webpack_require__("Ml6p"));

var _assign = _interopRequireDefault(__webpack_require__("OCF2"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__("E1+a"));

var _createClass2 = _interopRequireDefault(__webpack_require__("Z05o"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__("OY2S"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__("zBsc"));

var _inherits2 = _interopRequireDefault(__webpack_require__("wt0f"));

var __importStar = void 0 && (void 0).__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) {
    if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  }
  result["default"] = mod;
  return result;
};

var __importDefault = void 0 && (void 0).__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var react_1 = __importStar(__webpack_require__("cDcd"));

var prop_types_1 = __importDefault(__webpack_require__("rf6O"));

var utils_1 = __webpack_require__("p8BD");

var router_1 = __webpack_require__("4Q3z");

var App =
/*#__PURE__*/
function (_react_1$Component) {
  (0, _inherits2.default)(App, _react_1$Component);

  function App() {
    (0, _classCallCheck2.default)(this, App);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(App).apply(this, arguments));
  }

  (0, _createClass2.default)(App, [{
    key: "getChildContext",
    value: function getChildContext() {
      return {
        router: router_1.makePublicRouterInstance(this.props.router)
      };
    } // Kept here for backwards compatibility.
    // When someone ended App they could call `super.componentDidCatch`. This is now deprecated.

  }, {
    key: "componentDidCatch",
    value: function componentDidCatch(err) {
      throw err;
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          router = _this$props.router,
          Component = _this$props.Component,
          pageProps = _this$props.pageProps;
      var url = createUrl(router);
      return react_1.default.createElement(Container, null, react_1.default.createElement(Component, (0, _assign.default)({}, pageProps, {
        url: url
      })));
    }
  }], [{
    key: "getInitialProps",
    value: function (_ref) {
      var Component = _ref.Component,
          router = _ref.router,
          ctx = _ref.ctx;

      try {
        return _promise.default.resolve(utils_1.loadGetInitialProps(Component, ctx)).then(function (pageProps) {
          return {
            pageProps: pageProps
          };
        });
      } catch (e) {
        return _promise.default.reject(e);
      }
    }
  }]);
  return App;
}(react_1.Component);

App.childContextTypes = {
  router: prop_types_1.default.object
};
exports.default = App;

var Container =
/*#__PURE__*/
function (_react_1$Component2) {
  (0, _inherits2.default)(Container, _react_1$Component2);

  function Container() {
    (0, _classCallCheck2.default)(this, Container);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Container).apply(this, arguments));
  }

  (0, _createClass2.default)(Container, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.scrollToHash();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      this.scrollToHash();
    }
  }, {
    key: "scrollToHash",
    value: function scrollToHash() {
      var hash = window.location.hash;
      hash = hash ? hash.substring(1) : false;
      if (!hash) return;
      var el = document.getElementById(hash);
      if (!el) return; // If we call scrollIntoView() in here without a setTimeout
      // it won't scroll properly.

      setTimeout(function () {
        return el.scrollIntoView();
      }, 0);
    }
  }, {
    key: "render",
    value: function render() {
      return this.props.children;
    }
  }]);
  return Container;
}(react_1.Component);

exports.Container = Container;
var warnUrl = utils_1.execOnce(function () {
  if (false) {}
});

function createUrl(router) {
  // This is to make sure we don't references the router object at call time
  var pathname = router.pathname,
      asPath = router.asPath,
      query = router.query;
  return {
    get query() {
      warnUrl();
      return query;
    },

    get pathname() {
      warnUrl();
      return pathname;
    },

    get asPath() {
      warnUrl();
      return asPath;
    },

    back: function back() {
      warnUrl();
      router.back();
    },
    push: function push(url, as) {
      warnUrl();
      return router.push(url, as);
    },
    pushTo: function pushTo(href, as) {
      warnUrl();
      var pushRoute = as ? href : null;
      var pushUrl = as || href;
      return router.push(pushRoute, pushUrl);
    },
    replace: function replace(url, as) {
      warnUrl();
      return router.replace(url, as);
    },
    replaceTo: function replaceTo(href, as) {
      warnUrl();
      var replaceRoute = as ? href : null;
      var replaceUrl = as || href;
      return router.replace(replaceRoute, replaceUrl);
    }
  };
}

exports.createUrl = createUrl;

/***/ }),

/***/ "KKIB":
/***/ (function(module, exports, __webpack_require__) {

var _Symbol$iterator = __webpack_require__("45mK");

var _Symbol = __webpack_require__("Gozm");

function _typeof2(obj) { if (typeof _Symbol === "function" && typeof _Symbol$iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof _Symbol === "function" && obj.constructor === _Symbol && obj !== _Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof _Symbol === "function" && _typeof2(_Symbol$iterator) === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof _Symbol === "function" && obj.constructor === _Symbol && obj !== _Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "KeDb":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/* global __NEXT_DATA__ */

var _interopRequireDefault = __webpack_require__("lpv4");

var _stringify = _interopRequireDefault(__webpack_require__("dZZJ"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__("E1+a"));

var _createClass2 = _interopRequireDefault(__webpack_require__("Z05o"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__("OY2S"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__("zBsc"));

var _inherits2 = _interopRequireDefault(__webpack_require__("wt0f"));

var __importStar = void 0 && (void 0).__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) {
    if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  }
  result["default"] = mod;
  return result;
};

var __importDefault = void 0 && (void 0).__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var url_1 = __webpack_require__("bzos");

var react_1 = __importStar(__webpack_require__("cDcd"));

var prop_types_1 = __importDefault(__webpack_require__("rf6O"));

var router_1 = __importStar(__webpack_require__("4Q3z"));

var utils_1 = __webpack_require__("p8BD");

function isLocal(href) {
  var url = url_1.parse(href, false, true);
  var origin = url_1.parse(utils_1.getLocationOrigin(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatFunc) {
  var lastHref = null;
  var lastAs = null;
  var lastResult = null;
  return function (href, as) {
    if (href === lastHref && as === lastAs) {
      return lastResult;
    }

    var result = formatFunc(href, as);
    lastHref = href;
    lastAs = as;
    lastResult = result;
    return result;
  };
}

function formatUrl(url) {
  return url && typeof url === 'object' ? utils_1.formatWithValidation(url) : url;
}

var Link =
/*#__PURE__*/
function (_react_1$Component) {
  (0, _inherits2.default)(Link, _react_1$Component);

  function Link() {
    var _this;

    (0, _classCallCheck2.default)(this, Link);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Link).apply(this, arguments)); // The function is memoized so that no extra lifecycles are needed
    // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html

    _this.formatUrls = memoizedFormatUrl(function (href, asHref) {
      return {
        href: formatUrl(href),
        as: formatUrl(asHref, true)
      };
    });

    _this.linkClicked = function (e) {
      var _e$currentTarget = e.currentTarget,
          nodeName = _e$currentTarget.nodeName,
          target = _e$currentTarget.target;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      var _this$formatUrls = _this.formatUrls(_this.props.href, _this.props.as),
          href = _this$formatUrls.href,
          as = _this$formatUrls.as;

      if (!isLocal(href)) {
        // ignore click if it's outside our scope
        return;
      }

      var pathname = window.location.pathname;
      href = url_1.resolve(pathname, href);
      as = as ? url_1.resolve(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      var scroll = _this.props.scroll;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      router_1.default[_this.props.replace ? 'replace' : 'push'](href, as, {
        shallow: _this.props.shallow
      }).then(function (success) {
        if (!success) return;

        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      }).catch(function (err) {
        if (_this.props.onError) _this.props.onError(err);
      });
    };

    return _this;
  }

  (0, _createClass2.default)(Link, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.prefetch();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if ((0, _stringify.default)(this.props.href) !== (0, _stringify.default)(prevProps.href)) {
        this.prefetch();
      }
    }
  }, {
    key: "prefetch",
    value: function prefetch() {
      if (!this.props.prefetch) return;
      if (typeof window === 'undefined') return; // Prefetch the JSON page if asked (only in the client)

      var pathname = window.location.pathname;

      var _this$formatUrls2 = this.formatUrls(this.props.href, this.props.as),
          parsedHref = _this$formatUrls2.href;

      var href = url_1.resolve(pathname, parsedHref);
      router_1.default.prefetch(href);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var children = this.props.children;

      var _this$formatUrls3 = this.formatUrls(this.props.href, this.props.as),
          href = _this$formatUrls3.href,
          as = _this$formatUrls3.as; // Deprecated. Warning shown by propType check. If the childen provided is a string (<Link>example</Link>) we wrap it in an <a> tag


      if (typeof children === 'string') {
        children = react_1.default.createElement("a", null, children);
      } // This will return the first child, if multiple are provided it will throw an error


      var child = react_1.Children.only(children);
      var props = {
        onClick: function onClick(e) {
          if (child.props && typeof child.props.onClick === 'function') {
            child.props.onClick(e);
          }

          if (!e.defaultPrevented) {
            _this2.linkClicked(e);
          }
        }
      }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
      // defined, we specify the current 'href', so that repetition is not needed by the user

      if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
        props.href = as || href;
      } // Add the ending slash to the paths. So, we can serve the
      // "<page>/index.html" directly.


      if (true) {
        if (props.href && typeof __NEXT_DATA__ !== 'undefined' && __NEXT_DATA__.nextExport) {
          props.href = router_1.Router._rewriteUrlForNextExport(props.href);
        }
      }

      return react_1.default.cloneElement(child, props);
    }
  }]);
  return Link;
}(react_1.Component);

if (false) { var exact, warn; }

exports.default = Link;

/***/ }),

/***/ "Khd+":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("HaU7")


/***/ }),

/***/ "Lc87":
/***/ (function(module, exports) {

module.exports = require("query-string");

/***/ }),

/***/ "LcAa":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("TUA0");

/***/ }),

/***/ "MGkW":
/***/ (function(module, exports) {

module.exports = require("react-apollo");

/***/ }),

/***/ "Ml6p":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("aC71");

/***/ }),

/***/ "OCF2":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("dGr4");

/***/ }),

/***/ "OY2S":
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__("KKIB");

var assertThisInitialized = __webpack_require__("TG6z");

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return assertThisInitialized(self);
}

module.exports = _possibleConstructorReturn;

/***/ }),

/***/ "TG6z":
/***/ (function(module, exports) {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized;

/***/ }),

/***/ "TPw6":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("qJj/");

/***/ }),

/***/ "TUA0":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "Tqks":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("o5io");

/***/ }),

/***/ "U9rZ":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("Wk4r");

/***/ }),

/***/ "Wk4r":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/set-prototype-of");

/***/ }),

/***/ "YvTO":
/***/ (function(module, exports) {

module.exports = require("apollo-boost");

/***/ }),

/***/ "Z05o":
/***/ (function(module, exports, __webpack_require__) {

var _Object$defineProperty = __webpack_require__("LcAa");

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;

    _Object$defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;

/***/ }),

/***/ "Z6Kq":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "aC71":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/promise");

/***/ }),

/***/ "bzos":
/***/ (function(module, exports) {

module.exports = require("url");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "dGr4":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/assign");

/***/ }),

/***/ "dZZJ":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("fozc");

/***/ }),

/***/ "emby":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("ltjX");

/***/ }),

/***/ "fozc":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/json/stringify");

/***/ }),

/***/ "gHn/":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "h7sq":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _classCallCheck; });
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

/***/ }),

/***/ "jC5Q":
/***/ (function(module, exports) {



/***/ }),

/***/ "jPfo":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("/+oN");

/***/ }),

/***/ "jvFD":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("KeDb")


/***/ }),

/***/ "k1wZ":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-symbols");

/***/ }),

/***/ "lpv4":
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "ltjX":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-properties");

/***/ }),

/***/ "o5io":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/create");

/***/ }),

/***/ "p7IL":
/***/ (function(module, exports) {



/***/ }),

/***/ "p8BD":
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/utils");

/***/ }),

/***/ "pneb":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _extends; });
/* harmony import */ var _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("OCF2");
/* harmony import */ var _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__);

function _extends() {
  _extends = _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default.a || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

/***/ }),

/***/ "qJj/":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/keys");

/***/ }),

/***/ "rNCn":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _objectSpread; });
/* harmony import */ var _core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("FIas");
/* harmony import */ var _core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("8k7s");
/* harmony import */ var _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _core_js_object_keys__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("TPw6");
/* harmony import */ var _core_js_object_keys__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_keys__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _defineProperty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("znL5");




function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    var ownKeys = _core_js_object_keys__WEBPACK_IMPORTED_MODULE_2___default()(source);

    if (typeof _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default.a === 'function') {
      ownKeys = ownKeys.concat(_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default()(source).filter(function (sym) {
        return _core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0___default()(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      Object(_defineProperty__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(target, key, source[key]);
    });
  }

  return target;
}

/***/ }),

/***/ "rf6O":
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "tS02":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _createClass; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("LcAa");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);


function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;

    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

/***/ }),

/***/ "tU3Z":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



var SvgLogo = function SvgLogo(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", _extends({
    viewBox: "0 0 392.81 472.61"
  }, props), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M349.3 187.88c-.1 87.42-56.6 146.19-140.6 146.19h-94.84v92.32c-27.27-6.09-70.33-25.8-70.33-89.36 0-36.05.16-141.86.18-149.09V43.54h165c84 0 140.5 57.86 140.58 144zM208.7 0H.17v187.87s-.18 111.84-.18 149.12c0 107.29 88.72 135.62 135.62 135.62h21.77v-95.06h51.32c108.19 0 183.87-77.82 184.11-189.34v-1C392.57 76.99 316.89.04 208.7.04",
    fill: "#64ffda"
  }));
};

/* harmony default export */ __webpack_exports__["a"] = (SvgLogo);

/***/ }),

/***/ "v0mK":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("Gf4D");

/***/ }),

/***/ "vTWr":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _assertThisInitialized; });
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

/***/ }),

/***/ "vqFK":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol");

/***/ }),

/***/ "wt0f":
/***/ (function(module, exports, __webpack_require__) {

var _Object$create = __webpack_require__("Tqks");

var setPrototypeOf = __webpack_require__("1v/0");

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = _Object$create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) setPrototypeOf(subClass, superClass);
}

module.exports = _inherits;

/***/ }),

/***/ "xnum":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "zBsc":
/***/ (function(module, exports, __webpack_require__) {

var _Object$getPrototypeOf = __webpack_require__("jPfo");

var _Object$setPrototypeOf = __webpack_require__("U9rZ");

function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = _Object$setPrototypeOf ? _Object$getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || _Object$getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf;

/***/ }),

/***/ "znL5":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _defineProperty; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("LcAa");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);

function _defineProperty(obj, key, value) {
  if (key in obj) {
    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "ztBH":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _getPrototypeOf; });
/* harmony import */ var _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("jPfo");
/* harmony import */ var _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("U9rZ");
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1__);


function _getPrototypeOf(o) {
  _getPrototypeOf = _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1___default.a ? _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default.a : function _getPrototypeOf(o) {
    return o.__proto__ || _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default()(o);
  };
  return _getPrototypeOf(o);
}

/***/ })

/******/ });
//# sourceMappingURL=_app.js.map