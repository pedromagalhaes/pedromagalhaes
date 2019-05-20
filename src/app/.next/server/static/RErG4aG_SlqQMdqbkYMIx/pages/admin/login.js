module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
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

/***/ 4:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("wDTD");


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

/***/ "9Tpg":
/***/ (function(module, exports) {

module.exports = require("react-google-maps");

/***/ }),

/***/ "C8TP":
/***/ (function(module, exports) {

module.exports = require("yup");

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

/***/ "IVrg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("J3/a");

/***/ }),

/***/ "J3/a":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/get-iterator");

/***/ }),

/***/ "K2gz":
/***/ (function(module, exports) {

module.exports = require("classnames");

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

/***/ "LcAa":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("TUA0");

/***/ }),

/***/ "MGkW":
/***/ (function(module, exports) {

module.exports = require("react-apollo");

/***/ }),

/***/ "NnCY":
/***/ (function(module, exports) {

module.exports = require("recompose");

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

/***/ "QxnH":
/***/ (function(module, exports) {

module.exports = require("formik");

/***/ }),

/***/ "R2Q7":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/array/is-array");

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

/***/ "e+cM":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "semantic-ui-react"
var external_semantic_ui_react_ = __webpack_require__("FfxO");

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__("Dtiu");
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// CONCATENATED MODULE: ./components/Modules/Teaser/Teaser.styles.js

var TeaserStyles = external_styled_components_default.a.section.withConfig({
  displayName: "Teaserstyles__TeaserStyles",
  componentId: "tifnwp-0"
})(["margin:0;.ui.segment{padding:50px 0 67px 0;text-align:left;background:", ";}h1.ui.header{font-size:17px;font-family:", ";font-weight:400;margin:0 0 5px 5px;color:", ";}h2.ui.header{font-size:65px;line-height:1.1;margin:0;color:", ";font-family:", ";}h3.ui.header{font-size:65px;line-height:1.1;color:", ";margin:0 0 35px 0;font-family:", ";}.description{margin-bottom:50px;max-width:510px;p{font-size:18px;color:", ";font-family:", ";}}.ui.inverted.primary.button,.ui.inverted.primary.buttons .button{color:", " !important;box-shadow:0 0 0 2px ", " inset !important;font-family:", ";font-weight:400;&:hover,&:active,&:focus{background:", ";color:", " !important;}}"], function (props) {
  return props.theme.color1;
}, function (props) {
  return props.theme.bodyFont;
}, function (props) {
  return props.theme.color10;
}, function (props) {
  return props.theme.color6;
}, function (props) {
  return props.theme.bodyFont;
}, function (props) {
  return props.theme.color4;
}, function (props) {
  return props.theme.bodyFont;
}, function (props) {
  return props.theme.color4;
}, function (props) {
  return props.theme.bodyFont;
}, function (props) {
  return props.theme.color10;
}, function (props) {
  return props.theme.color10;
}, function (props) {
  return props.theme.bodyFont;
}, function (props) {
  return props.theme.color9;
}, function (props) {
  return props.theme.color6;
});
/* harmony default export */ var Teaser_styles = (TeaserStyles);
// CONCATENATED MODULE: ./components/Modules/Teaser/Teaser.js




var Teaser_TeaserComponent = function TeaserComponent() {
  return external_react_default.a.createElement(Teaser_styles, null, external_react_default.a.createElement(external_semantic_ui_react_["Segment"], {
    textAlign: "center",
    vertical: true
  }, external_react_default.a.createElement(external_semantic_ui_react_["Container"], null, external_react_default.a.createElement(external_semantic_ui_react_["Header"], {
    as: "h1",
    content: "Hi, my name is",
    inverted: true
  }), external_react_default.a.createElement(external_semantic_ui_react_["Header"], {
    as: "h2",
    content: "Pedro Magalh\xE3es",
    inverted: true
  }), external_react_default.a.createElement(external_semantic_ui_react_["Header"], {
    as: "h3",
    content: "I build things for the web",
    inverted: true
  }), external_react_default.a.createElement("div", {
    className: "description"
  }, external_react_default.a.createElement("p", null, "Im a software engineer based in Portugal, specializing in building (and occasionally designing) exceptional, high-quality websites and applications.")), external_react_default.a.createElement(external_semantic_ui_react_["Button"], {
    primary: true,
    inverted: true,
    size: "big"
  }, "Get In Touch"))));
};

/* harmony default export */ var Teaser = (Teaser_TeaserComponent);
// CONCATENATED MODULE: ./components/Modules/About/About.styles.js

var AboutMeStyles = external_styled_components_default.a.section.withConfig({
  displayName: "Aboutstyles__AboutMeStyles",
  componentId: "sc-15d1deo-0"
})(["margin:0;background:", ";padding:40px 0 50px 0;h3.ui.header{position:relative;display:flex;align-items:center;width:100%;white-space:nowrap;font-size:30px;margin:10px 0 0;color:", ";font-weight:bold;&::before{counter-increment:section 1;content:'0' counter(section) '.';margin-right:15px;font-weight:normal;color:", ";font-size:20px;position:relative;bottom:0;display:none;}&::after{content:'';height:1px;width:100%;background-color:", ";position:relative;top:2px;display:none;}}.bio{p{font-size:17px;color:", ";a{color:", ";}}}ul{display:grid;grid-template-columns:minmax(140px,200px) minmax(140px,200px);overflow:hidden;list-style:none;margin:20px 0 0;padding:0;li{position:relative;margin-bottom:5px;padding-left:20px;font-size:14px;color:", ";&::before{content:'\u25B9';position:absolute;left:0;color:", ";font-size:14px;line-height:12px;top:5px;}}}"], function (props) {
  return props.theme.color2;
}, function (props) {
  return props.theme.color6;
}, function (props) {
  return props.theme.color6;
}, function (props) {
  return props.theme.color6;
}, function (props) {
  return props.theme.color6;
}, function (props) {
  return props.theme.color10;
}, function (props) {
  return props.theme.color6;
}, function (props) {
  return props.theme.color10;
});
/* harmony default export */ var About_styles = (AboutMeStyles);
// CONCATENATED MODULE: ./components/Modules/About/About.js




var About_AboutMe = function AboutMe() {
  return external_react_default.a.createElement(About_styles, null, external_react_default.a.createElement(external_semantic_ui_react_["Container"], null, external_react_default.a.createElement(external_semantic_ui_react_["Grid"], null, external_react_default.a.createElement(external_semantic_ui_react_["Grid"].Row, null, external_react_default.a.createElement(external_semantic_ui_react_["Grid"].Column, {
    computer: "16"
  }, external_react_default.a.createElement(external_semantic_ui_react_["Header"], {
    as: "h3",
    content: "About Me",
    inverted: true
  }))), external_react_default.a.createElement(external_semantic_ui_react_["Grid"].Row, null, external_react_default.a.createElement(external_semantic_ui_react_["Grid"].Column, {
    computer: "9"
  }, external_react_default.a.createElement("div", {
    className: "bio"
  }, external_react_default.a.createElement("p", null, "Hello! Im Pedro, a software engineer based in Algarve, who enjoys building things that live on the internet. I develop exceptional websites and web apps that provide intuitive, pixel-perfect user interfaces with efficient and modern backends."), external_react_default.a.createElement("p", null, "Shortly after graduating from", ' ', external_react_default.a.createElement("a", {
    href: "http://dminc.com/",
    target: "blank"
  }, "Instituto Superior da Maia"), ", I joined the engineering team at", external_react_default.a.createElement("a", {
    href: "https://www.ismai.pt/",
    target: "blank"
  }, ' ', "Digital Management"), ' ', "where I work on a wide variety of interesting and meaningful projects on a daily basis."), external_react_default.a.createElement("p", null, "Heres a few technologies Ive been working with recently:")), external_react_default.a.createElement("ul", null, external_react_default.a.createElement("li", null, "JavaScript"), external_react_default.a.createElement("li", null, "React"), external_react_default.a.createElement("li", null, "Node.js"), external_react_default.a.createElement("li", null, "Mongo DB"), external_react_default.a.createElement("li", null, "GraphQL"), external_react_default.a.createElement("li", null, "Jest"), external_react_default.a.createElement("li", null, "React Native"), external_react_default.a.createElement("li", null, "HTML & CSS"))), external_react_default.a.createElement(external_semantic_ui_react_["Grid"].Column, {
    computer: "2"
  }), external_react_default.a.createElement(external_semantic_ui_react_["Grid"].Column, {
    computer: "5"
  }, external_react_default.a.createElement(external_semantic_ui_react_["Image"], {
    src: "https://dummyimage.com/500x500/27363b/dfdfdf",
    fluid: true
  }))))));
};

/* harmony default export */ var About = (About_AboutMe);
// CONCATENATED MODULE: ./components/Modules/Worked/Worked.styles.js

var WorkedStyles = external_styled_components_default.a.section.withConfig({
  displayName: "Workedstyles__WorkedStyles",
  componentId: "sc-1tjxajv-0"
})(["background:", ";padding:45px 0 67px 0;.ui.vertical.tabular.menu .active.item,.ui.segment{background:none !important;}h3.ui.header{position:relative;display:flex;align-items:center;width:100%;white-space:nowrap;font-size:30px;margin:10px 0 0;color:", ";font-weight:bold;}h4.ui.header{color:", ";font-size:22px;font-weight:500;margin-bottom:5px;span{font-size:22px;font-weight:500;}}h5.ui.header{font-size:13px;font-weight:normal;letter-spacing:0.5px;color:", ";margin-bottom:30px;span{font-size:13px;font-weight:normal;letter-spacing:0.5px;color:", ";}}.stretched.twelve.wide.column{padding:0;margin:7px 0 0;}ul{font-size:18px;padding:0;margin:0;list-style:none;max-width:70%;li{position:relative;padding-left:30px;margin-bottom:10px;color:", ";font-size:15px;&::before{content:\"\u25B9\";position:absolute;left:0;color:", " !important;line-height:20px;}}}.ui.attached.segment,.ui.vertical.tabular.menu .active.item,.ui.vertical.tabular.menu{border-left:2px solid ", ";border-right:none !important;border-radius:0 !important;}.ui.vertical.tabular.menu .active.item{border-left:2px solid  ", " !important;border-top:none !important;border-bottom:none !important;border-right:none !important;background:", " !important;color:", " !important;position:relative;left:-2px;text-indent:2px;text-shadow:none !important;font-weight:normal;}.ui.attached.segment,.hDQpYG .ui.vertical.tabular.menu .active.item,.hDQpYG .ui.vertical.tabular.menu{border:none !important;}.ui.vertical.tabular.menu .item{color:", ";}.company{a{color:", " !important;}}"], function (props) {
  return props.theme.color12;
}, function (props) {
  return props.theme.color6;
}, function (props) {
  return props.theme.color7;
}, function (props) {
  return props.theme.color7;
}, function (props) {
  return props.theme.color7;
}, function (props) {
  return props.theme.color7;
}, function (props) {
  return props.theme.color10;
}, function (props) {
  return props.theme.color2;
}, function (props) {
  return props.theme.color10;
}, function (props) {
  return props.theme.color1;
}, function (props) {
  return props.theme.color10;
}, function (props) {
  return props.theme.color7;
}, function (props) {
  return props.theme.color10;
});
/* harmony default export */ var Worked_styles = (WorkedStyles);
// CONCATENATED MODULE: ./components/Modules/Worked/Worked.js



var panes = [{
  menuItem: 'Digital Management, LLC',
  render: function render() {
    return external_react_default.a.createElement(external_semantic_ui_react_["Tab"].Pane, null, external_react_default.a.createElement(external_semantic_ui_react_["Header"], {
      as: "h4",
      inverted: true
    }, external_react_default.a.createElement("span", null, "Senior Software Engineer"), external_react_default.a.createElement("span", {
      className: "company"
    }, external_react_default.a.createElement("a", {
      href: "https://www.dminc.com/",
      target: "_blank",
      rel: "nofollow noopener noreferrer"
    }, "\xA0@ Digital Management"))), external_react_default.a.createElement(external_semantic_ui_react_["Header"], {
      as: "h5",
      inverted: true
    }, external_react_default.a.createElement("span", null, "July - Dec 2015")), external_react_default.a.createElement("div", null, external_react_default.a.createElement("ul", null, external_react_default.a.createElement("li", null, "Developed and maintained code for in-house and client websites primarily using HTML, CSS, Sass, JavaScript, and jQuery"), external_react_default.a.createElement("li", null, "Manually tested sites in various browsers and mobile devices to ensure cross-browser compatibility and responsiveness"), external_react_default.a.createElement("li", null, "Clients included JetBlue, Lovesac, U.S. Cellular, U.S. Department of Defense, and more"))));
  }
}, {
  menuItem: 'Golden Gekko',
  render: function render() {
    return external_react_default.a.createElement(external_semantic_ui_react_["Tab"].Pane, null, external_react_default.a.createElement(external_semantic_ui_react_["Header"], {
      as: "h4",
      inverted: true
    }, external_react_default.a.createElement("span", null, "Lead Frontend Engineer"), external_react_default.a.createElement("span", {
      className: "company"
    }, external_react_default.a.createElement("a", {
      href: "https://www.dminc.com/",
      target: "_blank",
      rel: "nofollow noopener noreferrer"
    }, "\xA0@ Golden Gekko"))), external_react_default.a.createElement(external_semantic_ui_react_["Header"], {
      as: "h5",
      inverted: true
    }, external_react_default.a.createElement("span", null, "July - Dec 2015")), external_react_default.a.createElement("div", null, external_react_default.a.createElement("ul", null, external_react_default.a.createElement("li", null, "Developed and maintained code for in-house and client websites primarily using HTML, CSS, Sass, JavaScript, and jQuery"), external_react_default.a.createElement("li", null, "Manually tested sites in various browsers and mobile devices to ensure cross-browser compatibility and responsiveness"), external_react_default.a.createElement("li", null, "Clients included JetBlue, Lovesac, U.S. Cellular, U.S. Department of Defense, and more"))));
  }
}, {
  menuItem: 'Omnibees',
  render: function render() {
    return external_react_default.a.createElement(external_semantic_ui_react_["Tab"].Pane, null, external_react_default.a.createElement(external_semantic_ui_react_["Header"], {
      as: "h4",
      inverted: true
    }, external_react_default.a.createElement("span", null, "Lead Frontend Engineer"), external_react_default.a.createElement("span", {
      className: "company"
    }, external_react_default.a.createElement("a", {
      href: "https://www.dminc.com/",
      target: "_blank",
      rel: "nofollow noopener noreferrer"
    }, "\xA0@ Omnibees"))), external_react_default.a.createElement(external_semantic_ui_react_["Header"], {
      as: "h5",
      inverted: true
    }, external_react_default.a.createElement("span", null, "July - Dec 2015")), external_react_default.a.createElement("div", null, external_react_default.a.createElement("ul", null, external_react_default.a.createElement("li", null, "Developed and maintained code for in-house and client websites primarily using HTML, CSS, Sass, JavaScript, and jQuery"), external_react_default.a.createElement("li", null, "Manually tested sites in various browsers and mobile devices to ensure cross-browser compatibility and responsiveness"), external_react_default.a.createElement("li", null, "Clients included JetBlue, Lovesac, U.S. Cellular, U.S. Department of Defense, and more"))));
  }
}, {
  menuItem: 'Visualforma',
  render: function render() {
    return external_react_default.a.createElement(external_semantic_ui_react_["Tab"].Pane, null, external_react_default.a.createElement(external_semantic_ui_react_["Header"], {
      as: "h4",
      inverted: true
    }, external_react_default.a.createElement("span", null, "Senior Frontend Engineer"), external_react_default.a.createElement("span", {
      className: "company"
    }, external_react_default.a.createElement("a", {
      href: "https://www.dminc.com/",
      target: "_blank",
      rel: "nofollow noopener noreferrer"
    }, "\xA0@ Visualforma"))), external_react_default.a.createElement(external_semantic_ui_react_["Header"], {
      as: "h5",
      inverted: true
    }, external_react_default.a.createElement("span", null, "July - Dec 2015")), external_react_default.a.createElement("div", null, external_react_default.a.createElement("ul", null, external_react_default.a.createElement("li", null, "Developed and maintained code for in-house and client websites primarily using HTML, CSS, Sass, JavaScript, and jQuery"), external_react_default.a.createElement("li", null, "Manually tested sites in various browsers and mobile devices to ensure cross-browser compatibility and responsiveness"), external_react_default.a.createElement("li", null, "Clients included JetBlue, Lovesac, U.S. Cellular, U.S. Department of Defense, and more"))));
  }
}, {
  menuItem: 'Porto City Hall',
  render: function render() {
    return external_react_default.a.createElement(external_semantic_ui_react_["Tab"].Pane, null, external_react_default.a.createElement(external_semantic_ui_react_["Header"], {
      as: "h4",
      inverted: true
    }, external_react_default.a.createElement("span", null, "Full Stack Developer"), external_react_default.a.createElement("span", {
      className: "company"
    }, external_react_default.a.createElement("a", {
      href: "https://www.dminc.com/",
      target: "_blank",
      rel: "nofollow noopener noreferrer"
    }, "\xA0@ Porto City Hall"))), external_react_default.a.createElement(external_semantic_ui_react_["Header"], {
      as: "h5",
      inverted: true
    }, external_react_default.a.createElement("span", null, "July - Dec 2015")), external_react_default.a.createElement("div", null, external_react_default.a.createElement("ul", null, external_react_default.a.createElement("li", null, "Developed and maintained code for in-house and client websites primarily using HTML, CSS, Sass, JavaScript, and jQuery"), external_react_default.a.createElement("li", null, "Manually tested sites in various browsers and mobile devices to ensure cross-browser compatibility and responsiveness"), external_react_default.a.createElement("li", null, "Clients included JetBlue, Lovesac, U.S. Cellular, U.S. Department of Defense, and more"))));
  }
}];

var Worked_CardComponent = function CardComponent() {
  return external_react_default.a.createElement(Worked_styles, null, external_react_default.a.createElement(external_semantic_ui_react_["Container"], null, external_react_default.a.createElement(external_semantic_ui_react_["Grid"], null, external_react_default.a.createElement(external_semantic_ui_react_["Grid"].Row, null, external_react_default.a.createElement(external_semantic_ui_react_["Grid"].Column, {
    computer: "16"
  }, external_react_default.a.createElement(external_semantic_ui_react_["Header"], {
    as: "h3",
    content: "Where I've Worked",
    inverted: true
  }))), external_react_default.a.createElement(external_semantic_ui_react_["Grid"].Row, null, external_react_default.a.createElement(external_semantic_ui_react_["Grid"].Column, {
    computer: "16"
  }, external_react_default.a.createElement("div", {
    className: "tabs"
  }, external_react_default.a.createElement(external_semantic_ui_react_["Tab"], {
    menu: {
      fluid: true,
      vertical: true,
      tabular: true
    },
    panes: panes
  })))))));
};

/* harmony default export */ var Worked = (Worked_CardComponent);
// CONCATENATED MODULE: ./components/Modules/OtherProjects/OtherProjectItem.js



var OtherProjectItem_OtherProjectItem = function OtherProjectItem(_ref) {
  var title = _ref.title;
  return external_react_default.a.createElement("div", {
    className: "project"
  }, external_react_default.a.createElement("div", {
    className: "project-inner"
  }, external_react_default.a.createElement("div", null, external_react_default.a.createElement("div", {
    className: "project-header"
  }, external_react_default.a.createElement("div", {
    className: "folder"
  }, external_react_default.a.createElement(external_semantic_ui_react_["Icon"], {
    size: "big",
    name: "folder open outline"
  })), external_react_default.a.createElement("div", {
    className: "links"
  }, external_react_default.a.createElement("a", {
    className: "icon-link",
    href: "",
    target: "_blank",
    rel: "nofollow noopener noreferrer",
    "aria-label": "Github Link"
  }, external_react_default.a.createElement(external_semantic_ui_react_["Icon"], {
    name: "github"
  })), external_react_default.a.createElement("a", {
    className: "icon-link",
    href: "",
    target: "_blank",
    rel: "nofollow noopener noreferrer",
    "aria-label": "External Link"
  }, external_react_default.a.createElement(external_semantic_ui_react_["Icon"], {
    name: "external alternate"
  })))), external_react_default.a.createElement("div", null, external_react_default.a.createElement(external_semantic_ui_react_["Header"], {
    as: "h5",
    content: title || '',
    inverted: true
  })), external_react_default.a.createElement("div", {
    className: "project-description"
  }, external_react_default.a.createElement("p", null, "Custom wordpress theme and e-commerce site built with Timber and WooCommerce for blistabloc, a start-up selling the only reactive shoe insert that prevents blisters from forming."))), external_react_default.a.createElement("div", null, external_react_default.a.createElement("ul", {
    className: "tech-list"
  }, external_react_default.a.createElement("li", null, "React"), external_react_default.a.createElement("li", null, "NextJS"), external_react_default.a.createElement("li", null, "Node")))));
};

/* harmony default export */ var OtherProjects_OtherProjectItem = (OtherProjectItem_OtherProjectItem);
// CONCATENATED MODULE: ./components/Modules/OtherProjects/OtherProjects.styles.js

var Styles = external_styled_components_default.a.section.withConfig({
  displayName: "OtherProjectsstyles__Styles",
  componentId: "sc-1o4dy3u-0"
})(["margin:0;background:", ";padding:40px 0 80px 0;h3.ui.header{position:relative;display:flex;align-items:center;width:100%;white-space:nowrap;font-size:30px;margin:10px 0 0;color:", ";font-weight:bold;&::before{counter-increment:section 1;content:'0' counter(section) '.';margin-right:15px;font-weight:normal;color:", ";font-size:20px;position:relative;bottom:0;display:none;}&::after{content:'';height:1px;width:100%;background-color:", ";position:relative;top:2px;display:none;}}h5.ui.header{margin:0 0 10px;font-size:22px;color:", ";}.project-grid{display:grid;grid-gap:15px;position:relative;grid-template-columns:repeat(auto-fill,minmax(290px,1fr));}.project-inner{display:flex;justify-content:space-between;flex-direction:column;align-items:flex-start;position:relative;padding:25px;height:100%;transition:all 0.25s cubic-bezier(0.645,0.045,0.355,1);background-color:", ";}.project{transition:all 0.25s cubic-bezier(0.645,0.045,0.355,1);&:hover,&:focus{outline:0;.project-inner{transform:translateY(-5px);}}}.project-header{display:flex;justify-content:space-between;align-items:center;align-items:flex-end;margin-bottom:30px;}.folder{color:#64ffda;svg{width:40px;height:40px;fill:", ";}}.links{margin-right:-10px;color:#a8b2d1;}.icon-link{padding:10px;position:relative;top:-5px;i{font-size:18px;color:", ";}}.project-description{font-size:14px;margin-top:20px;color:", ";p{line-height:20px;}a{display:inline-block;text-decoration:none;text-decoration-skip-ink:auto;position:relative;transition:all 0.25s cubic-bezier(0.645,0.045,0.355,1);cursor:pointer;&:hover,&:focus,&:active{color:#64ffda;outline:0;&::after{width:100%;}}&::after{content:'';display:block;width:0;height:1px;position:relative;bottom:0.37em;background-color:#64ffda;transition:all 0.25s cubic-bezier(0.645,0.045,0.355,1);}}}.tech-list{flex-grow:1;display:flex;align-items:flex-end;flex-wrap:wrap;padding:0;margin:35px 0 0;list-style:none;li{display:list-item;margin:0;padding:0;list-style:none;font-family:", ";font-size:12px;color:", ";line-height:1.75;margin-right:35px;margin-left:0;padding-left:0;&:last-of-type{margin-right:0;}}}.show-more-button{margin:100px auto 0;}"], function (props) {
  return props.theme.color9;
}, function (props) {
  return props.theme.color6;
}, function (props) {
  return props.theme.color6;
}, function (props) {
  return props.theme.color6;
}, function (props) {
  return props.theme.color6;
}, function (props) {
  return props.theme.color1;
}, function (props) {
  return props.theme.color10;
}, function (props) {
  return props.theme.color8;
}, function (props) {
  return props.theme.color4;
}, function (props) {
  return props.theme.bodyFont;
}, function (props) {
  return props.theme.color4;
});
/* harmony default export */ var OtherProjects_styles = (Styles);
// CONCATENATED MODULE: ./components/Modules/OtherProjects/OtherProjects.js





var OtherProjects_CardComponent = function CardComponent() {
  return external_react_default.a.createElement(OtherProjects_styles, null, external_react_default.a.createElement(external_semantic_ui_react_["Container"], null, external_react_default.a.createElement(external_semantic_ui_react_["Grid"], null, external_react_default.a.createElement(external_semantic_ui_react_["Grid"].Row, null, external_react_default.a.createElement(external_semantic_ui_react_["Grid"].Column, {
    computer: "16"
  }, external_react_default.a.createElement(external_semantic_ui_react_["Header"], {
    as: "h3",
    content: "Other Projects",
    inverted: true
  }))), external_react_default.a.createElement(external_semantic_ui_react_["Grid"].Row, null, external_react_default.a.createElement(external_semantic_ui_react_["Grid"].Column, {
    computer: "16"
  }, external_react_default.a.createElement("div", {
    className: "project-grid"
  }, external_react_default.a.createElement(OtherProjects_OtherProjectItem, {
    title: "React Starter App"
  }), external_react_default.a.createElement(OtherProjects_OtherProjectItem, {
    title: "GraphQL Music Playlist"
  }), external_react_default.a.createElement(OtherProjects_OtherProjectItem, {
    title: "Next.js Boostrap"
  }), external_react_default.a.createElement(OtherProjects_OtherProjectItem, {
    title: "Google Weather App"
  }), external_react_default.a.createElement(OtherProjects_OtherProjectItem, {
    title: "GraphQL Music Playlist"
  }), external_react_default.a.createElement(OtherProjects_OtherProjectItem, {
    title: "Semantic UI Startkit"
  })))))));
};

/* harmony default export */ var OtherProjects = (OtherProjects_CardComponent);
// CONCATENATED MODULE: ./components/Modules/Projects/ProjectItem.js



var ProjectItem_ProjectItem = function ProjectItem(_ref) {
  var align = _ref.align,
      title = _ref.title,
      description = _ref.description;
  return external_react_default.a.createElement("div", {
    className: "grid ".concat(align)
  }, external_react_default.a.createElement("div", {
    className: "project"
  }, external_react_default.a.createElement("div", {
    className: "container"
  }, external_react_default.a.createElement(external_semantic_ui_react_["Header"], {
    as: "h4",
    content: "Featured Project",
    inverted: true
  }), external_react_default.a.createElement(external_semantic_ui_react_["Header"], {
    as: "h5",
    content: title,
    inverted: true
  }), external_react_default.a.createElement("div", {
    className: "description"
  }, external_react_default.a.createElement("p", null, description)), external_react_default.a.createElement("ul", {
    className: "techlist"
  }, external_react_default.a.createElement("li", null, "React"), external_react_default.a.createElement("li", null, "Node.js"), external_react_default.a.createElement("li", null, "Next.js"), external_react_default.a.createElement("li", null, "Microservices")), external_react_default.a.createElement("div", {
    className: "links"
  }, external_react_default.a.createElement("a", {
    href: "",
    target: "_blank"
  }, external_react_default.a.createElement(external_semantic_ui_react_["Icon"], {
    name: "github"
  })), external_react_default.a.createElement("a", {
    href: "",
    target: "_blank"
  }, external_react_default.a.createElement(external_semantic_ui_react_["Icon"], {
    name: "external"
  })))), external_react_default.a.createElement("div", {
    className: "image-container"
  }, external_react_default.a.createElement("div", {
    className: "image-wrapper"
  }, external_react_default.a.createElement("div", null), external_react_default.a.createElement(external_semantic_ui_react_["Image"], {
    src: "https://dummyimage.com/580x360/557C83/CCCCCC",
    fluid: true
  })))));
};

/* harmony default export */ var Projects_ProjectItem = (ProjectItem_ProjectItem);
// CONCATENATED MODULE: ./components/Modules/Projects/Projects.styles.js

var ProjectsStyles = external_styled_components_default.a.section.withConfig({
  displayName: "Projectsstyles__ProjectsStyles",
  componentId: "v3d62q-0"
})(["margin:0;background:", ";padding:40px 0 30px 0;.grid{position:relative;&.left{.image-container{grid-column:6 / -1;grid-row:1 / -1;}.container{text-align:left;grid-column:1 / 7;grid-row:1 / -1;}.techlist{justify-content:flex-start;li:first-child{margin-left:0;}}.links{text-align:left;a i{margin-left:0;margin-right:20px;}}}&.right{.container{text-align:right;}}}.ui.container{max-width:1000px;display:flex;justify-content:center;flex-direction:column;align-items:flex-start;}h3.ui.header{position:relative;display:flex;align-items:center;width:100%;white-space:nowrap;font-size:30px;margin:10px 0 0;font-weight:bold;}h4.ui.header{font-size:13px;font-weight:normal;margin-top:0;margin-bottom:7px;padding:0;color:", ";}h5.ui.header{font-size:28px;font-weight:600;margin:0 0 20px;}.image-container{grid-column:1 / 8;position:relative;z-index:1;grid-row:1 / -1;&::before{content:'';position:absolute;width:100%;height:100%;top:0;left:0;right:0;bottom:0;z-index:3;}.image-wrapper{position:relative;overflow:hidden;div{width:100%;padding-bottom:62.5%;}img{position:absolute;top:0;left:0;width:100%;height:100%;}}}.project{display:grid;grid-template-columns:1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;align-items:center;gap:10px 10px;margin-bottom:40px;.container{position:relative;z-index:2;grid-row:1 / -1;display:block;grid-column:7 / -1;}}.description{background-color:", ";font-size:16px;padding:20px;color:", ";}.techlist{justify-content:flex-end;display:flex;flex-wrap:wrap;margin:20px 0 5px;padding:0;list-style:none;li{margin-left:20px;font-size:13px;color:", ";margin-right:20px;margin-bottom:15px;white-space:nowrap;&:last-of-type{margin-right:0;}}}.links{text-align:right;i{padding:0;margin:0 0 0 20px;font-weight:normal;font-size:18px;color:", ";}}"], function (props) {
  return props.theme.color1;
}, function (props) {
  return props.theme.color10;
}, function (props) {
  return props.theme.color12;
}, function (props) {
  return props.theme.color7;
}, function (props) {
  return props.theme.color8;
}, function (props) {
  return props.theme.color8;
});
/* harmony default export */ var Projects_styles = (ProjectsStyles);
// CONCATENATED MODULE: ./components/Modules/Projects/Projects.js





var Projects_Projects = function Projects() {
  return external_react_default.a.createElement(Projects_styles, null, external_react_default.a.createElement(external_semantic_ui_react_["Container"], null, external_react_default.a.createElement(external_semantic_ui_react_["Grid"], null, external_react_default.a.createElement(external_semantic_ui_react_["Grid"].Row, null, external_react_default.a.createElement(external_semantic_ui_react_["Grid"].Column, {
    computer: "16"
  }, external_react_default.a.createElement(external_semantic_ui_react_["Header"], {
    as: "h3",
    content: "Works",
    inverted: true
  }))), external_react_default.a.createElement(external_semantic_ui_react_["Grid"].Row, null, external_react_default.a.createElement(external_semantic_ui_react_["Grid"].Column, {
    computer: "16"
  }, external_react_default.a.createElement(Projects_ProjectItem, {
    align: "right",
    title: "Art Basel",
    description: "Art Basel is an international art fair staged annually in Basel, Switzerland; Miami Beach, Florida; and Hong Kong, selling established and emerging artists. Art Basel provides a platform for galleries to show and sell their work to buyers."
  }))), external_react_default.a.createElement(external_semantic_ui_react_["Grid"].Row, null, external_react_default.a.createElement(external_semantic_ui_react_["Grid"].Column, {
    computer: "16"
  }, external_react_default.a.createElement(Projects_ProjectItem, {
    align: "left",
    title: "Grand Basel",
    description: "Grand Basel is a global automobile show that focuses on collectors pieces from the past and present as well as on new cars of exceptional value and quality. It is the worlds first and only show to present the automobile in contexts of art, design, architecture and lifestyle."
  }))))));
};

/* harmony default export */ var Modules_Projects_Projects = (Projects_Projects);
// EXTERNAL MODULE: C:/playground/pedromagalhaes/node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js
var classCallCheck = __webpack_require__("h7sq");

// EXTERNAL MODULE: C:/playground/pedromagalhaes/node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js
var createClass = __webpack_require__("tS02");

// EXTERNAL MODULE: C:/playground/pedromagalhaes/node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js + 1 modules
var possibleConstructorReturn = __webpack_require__("/XES");

// EXTERNAL MODULE: C:/playground/pedromagalhaes/node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js
var getPrototypeOf = __webpack_require__("ztBH");

// EXTERNAL MODULE: C:/playground/pedromagalhaes/node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js
var assertThisInitialized = __webpack_require__("vTWr");

// EXTERNAL MODULE: C:/playground/pedromagalhaes/node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js + 1 modules
var inherits = __webpack_require__("Fayl");

// EXTERNAL MODULE: C:/playground/pedromagalhaes/node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__("znL5");

// EXTERNAL MODULE: external "recompose"
var external_recompose_ = __webpack_require__("NnCY");

// EXTERNAL MODULE: external "react-google-maps"
var external_react_google_maps_ = __webpack_require__("9Tpg");

// CONCATENATED MODULE: ./components/Modules/Maps/GoogleMap/index.js








/* eslint-disable max-len */


 // https://tomchentw.github.io/react-google-maps/

var MyMapComponent = Object(external_recompose_["compose"])(Object(external_recompose_["withProps"])({
  googleMapURL: "https://maps.googleapis.com/maps/api/js?key=".concat(process.env.GMAPS_TOKEN, "&v=3.exp&libraries=geometry,drawing,places"),
  loadingElement: external_react_default.a.createElement("div", {
    style: {
      height: '100%'
    }
  }),
  containerElement: external_react_default.a.createElement("div", {
    style: {
      height: '500px'
    }
  }),
  mapElement: external_react_default.a.createElement("div", {
    style: {
      height: '100%'
    }
  })
}), external_react_google_maps_["withScriptjs"], external_react_google_maps_["withGoogleMap"])(function (props) {
  return external_react_default.a.createElement(external_react_google_maps_["GoogleMap"], {
    defaultZoom: 15,
    defaultCenter: {
      lat: 37.0843358,
      lng: -7.7888226
    }
  }, props.isMarkerShown && external_react_default.a.createElement(external_react_google_maps_["Marker"], {
    position: {
      lat: 37.0843358,
      lng: -7.7888226
    },
    onClick: props.onMarkerClick
  }));
});

var GoogleMap_MyFancyComponent =
/*#__PURE__*/
function (_React$PureComponent) {
  Object(inherits["a" /* default */])(MyFancyComponent, _React$PureComponent);

  function MyFancyComponent() {
    var _getPrototypeOf2;

    var _this;

    Object(classCallCheck["a" /* default */])(this, MyFancyComponent);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(possibleConstructorReturn["a" /* default */])(this, (_getPrototypeOf2 = Object(getPrototypeOf["a" /* default */])(MyFancyComponent)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "state", {
      isMarkerShown: false
    });

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "delayedShowMarker", function () {
      setTimeout(function () {
        _this.setState({
          isMarkerShown: true
        });
      }, 3000);
    });

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "handleMarkerClick", function () {
      _this.setState({
        isMarkerShown: false
      });

      _this.delayedShowMarker();
    });

    return _this;
  }

  Object(createClass["a" /* default */])(MyFancyComponent, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.delayedShowMarker();
    }
  }, {
    key: "render",
    value: function render() {
      var isMarkerShown = this.state.isMarkerShown;
      return external_react_default.a.createElement(MyMapComponent, {
        isMarkerShown: isMarkerShown,
        onMarkerClick: this.handleMarkerClick
      });
    }
  }]);

  return MyFancyComponent;
}(external_react_default.a.PureComponent);

/* harmony default export */ var GoogleMap = (GoogleMap_MyFancyComponent);
// EXTERNAL MODULE: C:/playground/pedromagalhaes/node_modules/@babel/runtime-corejs2/helpers/esm/extends.js
var esm_extends = __webpack_require__("pneb");

// EXTERNAL MODULE: external "react-dom"
var external_react_dom_ = __webpack_require__("faye");

// EXTERNAL MODULE: external "react-map-gl"
var external_react_map_gl_ = __webpack_require__("fdHT");
var external_react_map_gl_default = /*#__PURE__*/__webpack_require__.n(external_react_map_gl_);

// CONCATENATED MODULE: ./components/Modules/Maps/DeckMap/control-panel.js






/* eslint-disable react/prop-types, react/destructuring-assignment, max-len */


var control_panel_defaultContainer = function defaultContainer(_ref) {
  var children = _ref.children;
  return external_react_default.a.createElement("div", {
    className: "control-panel"
  }, children);
};

var control_panel_ControlPanel =
/*#__PURE__*/
function (_PureComponent) {
  Object(inherits["a" /* default */])(ControlPanel, _PureComponent);

  function ControlPanel() {
    Object(classCallCheck["a" /* default */])(this, ControlPanel);

    return Object(possibleConstructorReturn["a" /* default */])(this, Object(getPrototypeOf["a" /* default */])(ControlPanel).apply(this, arguments));
  }

  Object(createClass["a" /* default */])(ControlPanel, [{
    key: "render",
    value: function render() {
      var Container = this.props.containerComponent || control_panel_defaultContainer;
      return external_react_default.a.createElement(Container, null, external_react_default.a.createElement("h3", null, "Marker, Popup, NavigationControl and FullscreenControl "), external_react_default.a.createElement("p", null, "Map showing top 20 most populated cities of the United States. Click on a marker to learn more."), external_react_default.a.createElement("p", null, "Data source: ", external_react_default.a.createElement("a", {
        href: "https://en.wikipedia.org/wiki/List_of_United_States_cities_by_population"
      }, "Wikipedia")), external_react_default.a.createElement("div", {
        className: "source-link"
      }, external_react_default.a.createElement("a", {
        href: "https://github.com/uber/react-map-gl/tree/4.1-release/examples/controls",
        target: "_new"
      }, "View Code \u2197")));
    }
  }]);

  return ControlPanel;
}(external_react_["PureComponent"]);


// EXTERNAL MODULE: C:/playground/pedromagalhaes/node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js
var objectSpread = __webpack_require__("rNCn");

// EXTERNAL MODULE: ./static/logo.svg
var logo = __webpack_require__("tU3Z");

// CONCATENATED MODULE: ./components/Icons/Logo.js

/* harmony default export */ var Logo = (logo["a" /* default */]);
// CONCATENATED MODULE: ./static/github.svg
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



var github_SvgGithub = function SvgGithub(props) {
  return external_react_default.a.createElement("svg", _extends({
    viewBox: "0 0 438.549 438.549"
  }, props), external_react_default.a.createElement("path", {
    d: "M409.132 114.573c-19.608-33.596-46.205-60.194-79.798-79.8-33.598-19.607-70.277-29.408-110.063-29.408-39.781 0-76.472 9.804-110.063 29.408-33.596 19.605-60.192 46.204-79.8 79.8C9.803 148.168 0 184.854 0 224.63c0 47.78 13.94 90.745 41.827 128.906 27.884 38.164 63.906 64.572 108.063 79.227 5.14.954 8.945.283 11.419-1.996 2.475-2.282 3.711-5.14 3.711-8.562 0-.571-.049-5.708-.144-15.417a2549.81 2549.81 0 0 1-.144-25.406l-6.567 1.136c-4.187.767-9.469 1.092-15.846 1-6.374-.089-12.991-.757-19.842-1.999-6.854-1.231-13.229-4.086-19.13-8.559-5.898-4.473-10.085-10.328-12.56-17.556l-2.855-6.57c-1.903-4.374-4.899-9.233-8.992-14.559-4.093-5.331-8.232-8.945-12.419-10.848l-1.999-1.431c-1.332-.951-2.568-2.098-3.711-3.429-1.142-1.331-1.997-2.663-2.568-3.997-.572-1.335-.098-2.43 1.427-3.289 1.525-.859 4.281-1.276 8.28-1.276l5.708.853c3.807.763 8.516 3.042 14.133 6.851 5.614 3.806 10.229 8.754 13.846 14.842 4.38 7.806 9.657 13.754 15.846 17.847 6.184 4.093 12.419 6.136 18.699 6.136 6.28 0 11.704-.476 16.274-1.423 4.565-.952 8.848-2.383 12.847-4.285 1.713-12.758 6.377-22.559 13.988-29.41-10.848-1.14-20.601-2.857-29.264-5.14-8.658-2.286-17.605-5.996-26.835-11.14-9.235-5.137-16.896-11.516-22.985-19.126-6.09-7.614-11.088-17.61-14.987-29.979-3.901-12.374-5.852-26.648-5.852-42.826 0-23.035 7.52-42.637 22.557-58.817-7.044-17.318-6.379-36.732 1.997-58.24 5.52-1.715 13.706-.428 24.554 3.853 10.85 4.283 18.794 7.952 23.84 10.994 5.046 3.041 9.089 5.618 12.135 7.708 17.705-4.947 35.976-7.421 54.818-7.421s37.117 2.474 54.823 7.421l10.849-6.849c7.419-4.57 16.18-8.758 26.262-12.565 10.088-3.805 17.802-4.853 23.134-3.138 8.562 21.509 9.325 40.922 2.279 58.24 15.036 16.18 22.559 35.787 22.559 58.817 0 16.178-1.958 30.497-5.853 42.966-3.9 12.471-8.941 22.457-15.125 29.979-6.191 7.521-13.901 13.85-23.131 18.986-9.232 5.14-18.182 8.85-26.84 11.136-8.662 2.286-18.415 4.004-29.263 5.146 9.894 8.562 14.842 22.077 14.842 40.539v60.237c0 3.422 1.19 6.279 3.572 8.562 2.379 2.279 6.136 2.95 11.276 1.995 44.163-14.653 80.185-41.062 108.068-79.226 27.88-38.161 41.825-81.126 41.825-128.906-.01-39.771-9.818-76.454-29.414-110.049z"
  }));
};

/* harmony default export */ var github = (github_SvgGithub);
// CONCATENATED MODULE: ./components/Icons/Github.js



var Github_IconGithub = function IconGithub() {
  return external_react_default.a.createElement(github, null);
};

/* harmony default export */ var Github = (Github_IconGithub);
// CONCATENATED MODULE: ./static/linkedIn.svg
function linkedIn_extends() { linkedIn_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return linkedIn_extends.apply(this, arguments); }



var linkedIn_SvgLinkedIn = function SvgLinkedIn(props) {
  return external_react_default.a.createElement("svg", linkedIn_extends({
    viewBox: "0 0 430.117 430.117"
  }, props), external_react_default.a.createElement("path", {
    d: "M430.117 261.543V420.56h-92.188V272.193c0-37.271-13.334-62.707-46.703-62.707-25.473 0-40.632 17.142-47.301 33.724-2.432 5.928-3.058 14.179-3.058 22.477V420.56h-92.219s1.242-251.285 0-277.32h92.21v39.309c-.187.294-.43.611-.606.896h.606v-.896c12.251-18.869 34.13-45.824 83.102-45.824 60.673-.001 106.157 39.636 106.157 124.818zM52.183 9.558C20.635 9.558 0 30.251 0 57.463c0 26.619 20.038 47.94 50.959 47.94h.616c32.159 0 52.159-21.317 52.159-47.94-.606-27.212-20-47.905-51.551-47.905zM5.477 420.56h92.184V143.24H5.477v277.32z"
  }));
};

/* harmony default export */ var linkedIn = (linkedIn_SvgLinkedIn);
// CONCATENATED MODULE: ./components/Icons/Linkedin.js



var Linkedin_IconLinkedin = function IconLinkedin() {
  return external_react_default.a.createElement(linkedIn, null);
};

/* harmony default export */ var Linkedin = (Linkedin_IconLinkedin);
// CONCATENATED MODULE: ./static/codepen.svg
function codepen_extends() { codepen_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return codepen_extends.apply(this, arguments); }



var codepen_SvgCodepen = function SvgCodepen(props) {
  return external_react_default.a.createElement("svg", codepen_extends({
    viewBox: "0 0 31.665 31.665"
  }, props), external_react_default.a.createElement("path", {
    d: "M16.878.415a2.501 2.501 0 0 0-2.809.034L1.485 9.214a2.5 2.5 0 0 0-1.071 2.052v9.444c0 .84.421 1.623 1.122 2.086l12.79 8.455a2.5 2.5 0 0 0 2.758 0l13.044-8.618a2.501 2.501 0 0 0 1.122-2.086v-9.279a2.5 2.5 0 0 0-1.121-2.085L16.878.415zm9.743 10.23L21.8 13.882l-4.521-3.288-.029-6.467 9.371 6.518zM13.979 4.133v6.329l-4.633 3.24-4.621-3.099 9.254-6.47zM3.458 13.722l2.991 2.004-2.991 2.093v-4.097zm10.6 13.493l-9.331-6.258 4.661-3.258 4.67 3.133v6.383zm-1.772-11.541l3.021-2.113 3.519 2.313-3.119 2.095-3.421-2.295zm5.068 11.541V20.83l4.463-2.991 4.805 3.159-9.268 6.217zm10.6-9.288l-3.168-2.082 3.168-2.125v4.207z"
  }));
};

/* harmony default export */ var codepen = (codepen_SvgCodepen);
// CONCATENATED MODULE: ./components/Icons/Codepen.js



var Codepen_IconCodepen = function IconCodepen() {
  return external_react_default.a.createElement(codepen, null);
};

/* harmony default export */ var Codepen = (Codepen_IconCodepen);
// CONCATENATED MODULE: ./static/instagram.svg
function instagram_extends() { instagram_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return instagram_extends.apply(this, arguments); }



var instagram_SvgInstagram = function SvgInstagram(props) {
  return external_react_default.a.createElement("svg", instagram_extends({
    viewBox: "0 0 512 512"
  }, props), external_react_default.a.createElement("path", {
    d: "M352 0H160C71.648 0 0 71.648 0 160v192c0 88.352 71.648 160 160 160h192c88.352 0 160-71.648 160-160V160C512 71.648 440.352 0 352 0zm112 352c0 61.76-50.24 112-112 112H160c-61.76 0-112-50.24-112-112V160C48 98.24 98.24 48 160 48h192c61.76 0 112 50.24 112 112v192z"
  }), external_react_default.a.createElement("path", {
    d: "M256 128c-70.688 0-128 57.312-128 128s57.312 128 128 128 128-57.312 128-128-57.312-128-128-128zm0 208c-44.096 0-80-35.904-80-80 0-44.128 35.904-80 80-80s80 35.872 80 80c0 44.096-35.904 80-80 80z"
  }), external_react_default.a.createElement("circle", {
    cx: 393.6,
    cy: 118.4,
    r: 17.056
  }));
};

/* harmony default export */ var instagram = (instagram_SvgInstagram);
// CONCATENATED MODULE: ./components/Icons/Instagram.js



var Instagram_IconInstagram = function IconInstagram() {
  return external_react_default.a.createElement(instagram, null);
};

/* harmony default export */ var Instagram = (Instagram_IconInstagram);
// CONCATENATED MODULE: ./static/twitter.svg
function twitter_extends() { twitter_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return twitter_extends.apply(this, arguments); }



var twitter_SvgTwitter = function SvgTwitter(props) {
  return external_react_default.a.createElement("svg", twitter_extends({
    viewBox: "0 0 612 612"
  }, props), external_react_default.a.createElement("path", {
    d: "M612 116.258a250.714 250.714 0 0 1-72.088 19.772c25.929-15.527 45.777-40.155 55.184-69.411-24.322 14.379-51.169 24.82-79.775 30.48-22.907-24.437-55.49-39.658-91.63-39.658-69.334 0-125.551 56.217-125.551 125.513 0 9.828 1.109 19.427 3.251 28.606-104.326-5.24-196.835-55.223-258.75-131.174-10.823 18.51-16.98 40.078-16.98 63.101 0 43.559 22.181 81.993 55.835 104.479a125.556 125.556 0 0 1-56.867-15.756v1.568c0 60.806 43.291 111.554 100.693 123.104-10.517 2.83-21.607 4.398-33.08 4.398-8.107 0-15.947-.803-23.634-2.333 15.985 49.907 62.336 86.199 117.253 87.194-42.947 33.654-97.099 53.655-155.916 53.655-10.134 0-20.116-.612-29.944-1.721 55.567 35.681 121.536 56.485 192.438 56.485 230.948 0 357.188-191.291 357.188-357.188l-.421-16.253c24.666-17.593 46.005-39.697 62.794-64.861z"
  }));
};

/* harmony default export */ var twitter = (twitter_SvgTwitter);
// CONCATENATED MODULE: ./components/Icons/Twitter.js



var Twitter_IconTwitter = function IconTwitter() {
  return external_react_default.a.createElement(twitter, null);
};

/* harmony default export */ var Twitter = (Twitter_IconTwitter);
// CONCATENATED MODULE: ./static/external.svg
function external_extends() { external_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return external_extends.apply(this, arguments); }



var external_SvgExternal = function SvgExternal(props) {
  return external_react_default.a.createElement("svg", external_extends({
    viewBox: "0 0 194.818 194.818"
  }, props), external_react_default.a.createElement("path", {
    d: "M185.818 2.161h-57.04c-4.971 0-9 4.029-9 9s4.029 9 9 9h35.312l-86.3 86.3a9 9 0 0 0 6.364 15.364 8.975 8.975 0 0 0 6.364-2.636l86.3-86.3v35.313c0 4.971 4.029 9 9 9s9-4.029 9-9v-57.04a9 9 0 0 0-9-9.001z"
  }), external_react_default.a.createElement("path", {
    d: "M149 77.201a9 9 0 0 0-9 9v88.456H18v-122h93.778c4.971 0 9-4.029 9-9s-4.029-9-9-9H9a9 9 0 0 0-9 9v140a9 9 0 0 0 9 9h140a9 9 0 0 0 9-9V86.201a9 9 0 0 0-9-9z"
  }));
};

/* harmony default export */ var external = (external_SvgExternal);
// CONCATENATED MODULE: ./components/Icons/External.js



var External_IconExternal = function IconExternal() {
  return external_react_default.a.createElement(external, null);
};

/* harmony default export */ var External = (External_IconExternal);
// CONCATENATED MODULE: ./static/folder.svg
function folder_extends() { folder_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return folder_extends.apply(this, arguments); }



var folder_SvgFolder = function SvgFolder(props) {
  return external_react_default.a.createElement("svg", folder_extends({
    viewBox: "0 0 60 60"
  }, props), external_react_default.a.createElement("path", {
    d: "M57.49 21.5H54v-6.268a2.735 2.735 0 0 0-2.732-2.732H26.515l-5-7H2.732A2.736 2.736 0 0 0 0 8.232v43.687h.006c-.005.563.17 1.114.522 1.575A2.546 2.546 0 0 0 2.565 54.5h44.759c1.156 0 2.174-.779 2.45-1.813L60 24.649v-.177c0-1.722-1.056-2.972-2.51-2.972zM2 8.232c0-.404.329-.732.732-.732h17.753l5 7h25.782c.404 0 .732.328.732.732V21.5H12.731c-.144 0-.287.012-.426.036-.973.163-1.782.873-2.023 1.776L2 45.899V8.232zm45.869 43.851a.566.566 0 0 1-.545.417H2.565a.552.552 0 0 1-.448-.222c-.063-.082-.16-.256-.123-.408l10.191-27.953a.566.566 0 0 1 .545-.417H57.49c.38 0 .477.546.502.819L47.869 52.083z"
  }));
};

/* harmony default export */ var folder = (folder_SvgFolder);
// CONCATENATED MODULE: ./components/Icons/Folder.js



var Folder_IconFolder = function IconFolder() {
  return external_react_default.a.createElement(folder, null);
};

/* harmony default export */ var Folder = (Folder_IconFolder);
// CONCATENATED MODULE: ./static/location.svg
function location_extends() { location_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return location_extends.apply(this, arguments); }



var location_SvgLocation = function SvgLocation(props) {
  return external_react_default.a.createElement("svg", location_extends({
    viewBox: "0 0 512 512"
  }, props), external_react_default.a.createElement("path", {
    d: "M256 0C156.748 0 76 80.748 76 180c0 33.534 9.289 66.26 26.869 94.652l142.885 230.257A15 15 0 0 0 258.499 512h.119a14.997 14.997 0 0 0 12.75-7.292L410.611 272.22C427.221 244.428 436 212.539 436 180 436 80.748 355.252 0 256 0zm128.866 256.818L258.272 468.186l-129.905-209.34C113.734 235.214 105.8 207.95 105.8 180c0-82.71 67.49-150.2 150.2-150.2S406.1 97.29 406.1 180c0 27.121-7.411 53.688-21.234 76.818z"
  }), external_react_default.a.createElement("path", {
    d: "M256 90c-49.626 0-90 40.374-90 90 0 49.309 39.717 90 90 90 50.903 0 90-41.233 90-90 0-49.626-40.374-90-90-90zm0 150.2c-33.257 0-60.2-27.033-60.2-60.2 0-33.084 27.116-60.2 60.2-60.2s60.1 27.116 60.1 60.2c0 32.683-26.316 60.2-60.1 60.2z"
  }));
};

/* harmony default export */ var static_location = (location_SvgLocation);
// CONCATENATED MODULE: ./components/Icons/Location.js



var Location_IconLocation = function IconLocation() {
  return external_react_default.a.createElement(static_location, null);
};

/* harmony default export */ var Location = (Location_IconLocation);
// CONCATENATED MODULE: ./static/star.svg
function star_extends() { star_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return star_extends.apply(this, arguments); }



var star_SvgStar = function SvgStar(props) {
  return external_react_default.a.createElement("svg", star_extends({
    "aria-label": "stars",
    width: 14,
    height: 16
  }, props), external_react_default.a.createElement("path", {
    d: "M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74L14 6z"
  }));
};

/* harmony default export */ var star = (star_SvgStar);
// CONCATENATED MODULE: ./components/Icons/Star.js



var Star_IconStar = function IconStar() {
  return external_react_default.a.createElement(star, null);
};

/* harmony default export */ var Star = (Star_IconStar);
// CONCATENATED MODULE: ./components/Icons/index.js











// CONCATENATED MODULE: ./components/Modules/Maps/DeckMap/city-pin.js







/* eslint-disable react/prop-types */


var pinStyle = {
  cursor: 'pointer'
};

var city_pin_CityPin =
/*#__PURE__*/
function (_PureComponent) {
  Object(inherits["a" /* default */])(CityPin, _PureComponent);

  function CityPin() {
    Object(classCallCheck["a" /* default */])(this, CityPin);

    return Object(possibleConstructorReturn["a" /* default */])(this, Object(getPrototypeOf["a" /* default */])(CityPin).apply(this, arguments));
  }

  Object(createClass["a" /* default */])(CityPin, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          _this$props$size = _this$props.size,
          size = _this$props$size === void 0 ? 20 : _this$props$size,
          onClick = _this$props.onClick;
      return external_react_default.a.createElement(Logo, {
        height: size,
        style: Object(objectSpread["a" /* default */])({}, pinStyle, {
          transform: "translate(".concat(-size / 2, "px,").concat(-size, "px)")
        }),
        onClick: onClick
      });
    }
  }]);

  return CityPin;
}(external_react_["PureComponent"]);


// CONCATENATED MODULE: ./components/Modules/Maps/DeckMap/city-info.js






/* eslint-disable react/prop-types, jsx-a11y/alt-text */


var city_info_CityInfo =
/*#__PURE__*/
function (_PureComponent) {
  Object(inherits["a" /* default */])(CityInfo, _PureComponent);

  function CityInfo() {
    Object(classCallCheck["a" /* default */])(this, CityInfo);

    return Object(possibleConstructorReturn["a" /* default */])(this, Object(getPrototypeOf["a" /* default */])(CityInfo).apply(this, arguments));
  }

  Object(createClass["a" /* default */])(CityInfo, [{
    key: "render",
    value: function render() {
      var info = this.props.info;
      var displayName = "".concat(info.city, ", ").concat(info.state);
      return external_react_default.a.createElement("div", null, external_react_default.a.createElement("div", null, displayName, " |", ' ', external_react_default.a.createElement("a", {
        target: "_new",
        href: "http://en.wikipedia.org/w/index.php?title=Special:Search&search=".concat(displayName)
      }, "Wikipedia")), external_react_default.a.createElement("img", {
        width: 240,
        src: info.image
      }));
    }
  }]);

  return CityInfo;
}(external_react_["PureComponent"]);


// EXTERNAL MODULE: ./components/Modules/Maps/DeckMap/cities.json
var cities = __webpack_require__("njL2");

// CONCATENATED MODULE: ./components/Modules/Maps/DeckMap/index.js









/* eslint-disable no-unused-vars, no-underscore-dangle */







var TOKEN = process.env.DECKMAP_TOKEN;
var fullscreenControlStyle = {
  position: 'absolute',
  top: 0,
  left: 0,
  padding: '10px'
};
var navStyle = {
  position: 'absolute',
  top: 36,
  left: 0,
  padding: '10px'
};

var DeckMap_App =
/*#__PURE__*/
function (_Component) {
  Object(inherits["a" /* default */])(App, _Component);

  function App(props) {
    var _this;

    Object(classCallCheck["a" /* default */])(this, App);

    _this = Object(possibleConstructorReturn["a" /* default */])(this, Object(getPrototypeOf["a" /* default */])(App).call(this, props));

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "_updateViewport", function (viewport) {
      _this.setState({
        viewport: viewport
      });
    });

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "_renderCityMarker", function (city, index) {
      return external_react_default.a.createElement(external_react_map_gl_["Marker"], {
        key: "marker-".concat(index),
        longitude: city.longitude,
        latitude: city.latitude
      }, external_react_default.a.createElement(city_pin_CityPin, {
        size: 20,
        onClick: function onClick() {
          return _this.setState({
            popupInfo: city
          });
        }
      }));
    });

    _this.state = {
      viewport: {
        latitude: 37.0843358,
        longitude: -7.7888226,
        zoom: 10,
        bearing: 0,
        pitch: 0
      },
      popupInfo: null
    };
    return _this;
  }

  Object(createClass["a" /* default */])(App, [{
    key: "_renderPopup",
    value: function _renderPopup() {
      var _this2 = this;

      var popupInfo = this.state.popupInfo;
      return popupInfo && external_react_default.a.createElement(external_react_map_gl_["Popup"], {
        tipSize: 5,
        anchor: "top",
        longitude: popupInfo.longitude,
        latitude: popupInfo.latitude,
        closeOnClick: false,
        onClose: function onClose() {
          return _this2.setState({
            popupInfo: null
          });
        }
      }, external_react_default.a.createElement(city_info_CityInfo, {
        info: popupInfo
      }));
    }
  }, {
    key: "render",
    value: function render() {
      var viewport = this.state.viewport;
      return external_react_default.a.createElement("div", {
        style: {
          position: 'relative',
          height: 500
        }
      }, external_react_default.a.createElement(external_react_map_gl_default.a, Object(esm_extends["a" /* default */])({}, viewport, {
        width: "100%",
        height: "100%",
        mapStyle: "mapbox://styles/mapbox/dark-v9",
        onViewportChange: this._updateViewport,
        mapboxApiAccessToken: TOKEN
      }), cities.map(this._renderCityMarker), this._renderPopup(), external_react_default.a.createElement("div", {
        className: "fullscreen",
        style: fullscreenControlStyle
      }, external_react_default.a.createElement(external_react_map_gl_["FullscreenControl"], null)), external_react_default.a.createElement("div", {
        className: "nav",
        style: navStyle
      }, external_react_default.a.createElement(external_react_map_gl_["NavigationControl"], {
        onViewportChange: this._updateViewport
      }))));
    }
  }]);

  return App;
}(external_react_["Component"]);


function renderToDom(container) {
  Object(external_react_dom_["render"])(external_react_default.a.createElement(DeckMap_App, null), container);
}
// EXTERNAL MODULE: external "react-apollo"
var external_react_apollo_ = __webpack_require__("MGkW");

// EXTERNAL MODULE: external "nanoid"
var external_nanoid_ = __webpack_require__("yOjx");
var external_nanoid_default = /*#__PURE__*/__webpack_require__.n(external_nanoid_);

// EXTERNAL MODULE: external "formik"
var external_formik_ = __webpack_require__("QxnH");

// EXTERNAL MODULE: external "yup"
var external_yup_ = __webpack_require__("C8TP");

// EXTERNAL MODULE: C:/playground/pedromagalhaes/node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js
var taggedTemplateLiteral = __webpack_require__("2ewA");

// EXTERNAL MODULE: external "graphql-tag"
var external_graphql_tag_ = __webpack_require__("txk1");
var external_graphql_tag_default = /*#__PURE__*/__webpack_require__.n(external_graphql_tag_);

// CONCATENATED MODULE: ./mutations/Signup.js


function _templateObject() {
  var data = Object(taggedTemplateLiteral["a" /* default */])(["\n  mutation Signup($firstName: String, $lastName: String, $email: String, $password: String) {\n    signup(firstName: $firstName, lastName: $lastName, email: $email, password: $password) {\n      id\n      firstName\n      lastName\n      email\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}


/* harmony default export */ var Signup = (external_graphql_tag_default()(_templateObject()));
// CONCATENATED MODULE: ./components/Modules/Authentication/SignUp.styles.js

var SignUpStyles = external_styled_components_default.a.section.withConfig({
  displayName: "SignUpstyles__SignUpStyles",
  componentId: "sc-1smdzxi-0"
})(["margin:0;background:", ";padding:60px 0 100px 0;h3.ui.header{position:relative;display:flex;align-items:center;width:100%;white-space:nowrap;font-size:30px;margin:10px 0 0;color:", ";font-weight:bold;&::before{counter-increment:section 1;content:'0' counter(section) '.';margin-right:15px;font-weight:normal;color:", ";font-size:20px;position:relative;bottom:0;display:none;}&::after{content:'';height:1px;width:100%;background-color:", ";position:relative;top:2px;display:none;}}"], function (props) {
  return props.theme.color7;
}, function (props) {
  return props.theme.color6;
}, function (props) {
  return props.theme.color6;
}, function (props) {
  return props.theme.color6;
});
/* harmony default export */ var SignUp_styles = (SignUpStyles);
// CONCATENATED MODULE: ./components/Modules/Authentication/SignUp.js


/* eslint-disable no-unused-vars */








var initialValues = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  confirmPassword: '',
  termsCondition: false
};
var validationSchema = external_yup_["object"]().shape({
  firstName: external_yup_["string"]().required('First name is required!'),
  lastName: external_yup_["string"]().required('Last name is required!'),
  email: external_yup_["string"]().email('Invalid email address').required('Email is required!'),
  password: external_yup_["string"]().required('Password is required!').min(7, 'Password must be at least 7 characters long.').matches(/^(?=.*[A-Z]).{7,}$/, 'Your password must be at least 7 characters and contain at least one uppercase character.'),
  confirmPassword: external_yup_["string"]().required('This field is required!').oneOf([external_yup_["ref"]('password'), null], 'Passwords don\'t match'),
  termsCondition: external_yup_["string"]().oneOf(['true'], 'This field is required!')
});

var SignUp_SignUp = function SignUp() {
  return external_react_default.a.createElement(external_react_default.a.Fragment, null, external_react_default.a.createElement(SignUp_styles, null, external_react_default.a.createElement(external_semantic_ui_react_["Container"], null, external_react_default.a.createElement(external_semantic_ui_react_["Grid"], null, external_react_default.a.createElement(external_semantic_ui_react_["Grid"].Row, null, external_react_default.a.createElement(external_semantic_ui_react_["Grid"].Column, null, external_react_default.a.createElement(Shared_ModuleTitle, {
    as: "h1",
    text: "Create an Account",
    icon: "signup"
  }))), external_react_default.a.createElement(external_semantic_ui_react_["Grid"].Row, null, external_react_default.a.createElement(external_semantic_ui_react_["Grid"].Column, {
    computer: "10"
  }, external_react_default.a.createElement(Shared_Text, {
    as: "p"
  }, "As a registered user you will be able to save your favorite artworks, galleries, artists and events. You can also access exclusive features and subscribe to our newsletters.")))), external_react_default.a.createElement(external_react_apollo_["Mutation"], {
    mutation: Signup,
    onCompleted: function onCompleted(data) {
      console.log(data);
    },
    onError: function onError(error) {
      console.log(error.graphQLErrors);
    }
  }, function (create, _ref) {
    var loading = _ref.loading,
        error = _ref.error,
        data = _ref.data;
    return external_react_default.a.createElement(external_formik_["Formik"], {
      initialValues: initialValues,
      validationSchema: validationSchema,
      size: "large",
      onSubmit: function onSubmit(values, _ref2) {
        var setSubmitting = _ref2.setSubmitting,
            resetForm = _ref2.resetForm;
        setTimeout(function () {
          create({
            variables: {
              firstName: values.firstName,
              lastName: values.lastName,
              email: values.email,
              password: values.password
            }
          });
          resetForm(initialValues);
          setSubmitting(false);
        }, 500);
      }
    }, function (props) {
      var values = props.values,
          touched = props.touched,
          errors = props.errors,
          isSubmitting = props.isSubmitting,
          handleChange = props.handleChange,
          handleBlur = props.handleBlur,
          handleSubmit = props.handleSubmit;
      return external_react_default.a.createElement("form", {
        onSubmit: handleSubmit
      }, external_react_default.a.createElement(external_semantic_ui_react_["Grid"], null, external_react_default.a.createElement(external_semantic_ui_react_["Grid"].Row, null, external_react_default.a.createElement(external_semantic_ui_react_["Grid"].Column, {
        computer: 10
      }, external_react_default.a.createElement(external_semantic_ui_react_["Grid"], null, external_react_default.a.createElement(external_semantic_ui_react_["Grid"].Row, null, external_react_default.a.createElement(external_semantic_ui_react_["Grid"].Column, {
        computer: 16
      }, loading && external_react_default.a.createElement("p", null, "Loading..."), error && error.graphQLErrors.length > 0 && external_react_default.a.createElement(external_semantic_ui_react_["Message"], {
        header: "There was some errors with your submission:",
        negative: true,
        size: "small",
        content: error.graphQLErrors.map(function (_ref3) {
          var message = _ref3.message;
          return external_react_default.a.createElement("span", {
            key: external_nanoid_default()()
          }, "- ", message);
        })
      }))), external_react_default.a.createElement(external_semantic_ui_react_["Grid"].Row, null, external_react_default.a.createElement(external_semantic_ui_react_["Grid"].Column, {
        computer: "8"
      }, external_react_default.a.createElement(external_semantic_ui_react_["Form"].Input, {
        fluid: true,
        label: "First name",
        name: "firstName",
        id: "firstName",
        value: values.firstName,
        onChange: handleChange,
        onBlur: handleBlur,
        error: errors.firstName && touched.firstName
      }), errors.firstName && touched.firstName && external_react_default.a.createElement(Shared_FormFieldError, null, errors.firstName)), external_react_default.a.createElement(external_semantic_ui_react_["Grid"].Column, {
        computer: "8"
      }, external_react_default.a.createElement(external_semantic_ui_react_["Form"].Input, {
        fluid: true,
        label: "Last name",
        name: "lastName",
        id: "lastName",
        value: values.lastName,
        onChange: handleChange,
        onBlur: handleBlur,
        error: errors.lastName && touched.lastName
      }), errors.lastName && touched.lastName && external_react_default.a.createElement(Shared_FormFieldError, null, errors.lastName))), external_react_default.a.createElement(external_semantic_ui_react_["Grid"].Row, null, external_react_default.a.createElement(external_semantic_ui_react_["Grid"].Column, {
        computer: 16
      }, external_react_default.a.createElement(external_semantic_ui_react_["Form"].Input, {
        fluid: true,
        label: "E-mail address",
        name: "email",
        id: "email",
        value: values.email,
        onChange: handleChange,
        onBlur: handleBlur,
        error: errors.email && touched.email
      }), errors.email && touched.email && external_react_default.a.createElement(Shared_FormFieldError, null, errors.email))), external_react_default.a.createElement(external_semantic_ui_react_["Grid"].Row, null, external_react_default.a.createElement(external_semantic_ui_react_["Grid"].Column, {
        computer: 8
      }, external_react_default.a.createElement(external_semantic_ui_react_["Form"].Input, {
        fluid: true,
        name: "password",
        label: "Password",
        id: "password",
        type: "password",
        value: values.password,
        onChange: handleChange,
        onBlur: handleBlur,
        error: errors.password && touched.password
      }), errors.password && touched.password && external_react_default.a.createElement(Shared_FormFieldError, null, errors.password)), external_react_default.a.createElement(external_semantic_ui_react_["Grid"].Column, {
        computer: 8
      }, external_react_default.a.createElement(external_semantic_ui_react_["Form"].Input, {
        fluid: true,
        name: "confirmPassword",
        label: "Confirm password",
        id: "confirmPassword",
        type: "password",
        value: values.confirmPassword,
        onChange: handleChange,
        onBlur: handleBlur,
        error: errors.confirmPassword && touched.confirmPassword
      }), errors.confirmPassword && touched.confirmPassword && external_react_default.a.createElement(Shared_FormFieldError, null, errors.confirmPassword))), external_react_default.a.createElement(external_semantic_ui_react_["Grid"].Row, null, external_react_default.a.createElement(external_semantic_ui_react_["Grid"].Column, {
        computer: "16"
      }, external_react_default.a.createElement(external_semantic_ui_react_["Form"].Checkbox, {
        label: "I agree to the Terms and Conditions",
        id: "termsCondition",
        name: "termsCondition",
        onChange: handleChange,
        onBlur: handleBlur,
        error: errors.termsCondition && touched.termsCondition,
        checked: values.termsCondition
      }), errors.termsCondition && touched.termsCondition && external_react_default.a.createElement(Shared_FormFieldError, null, errors.termsCondition))), external_react_default.a.createElement(external_semantic_ui_react_["Grid"].Row, null, external_react_default.a.createElement(external_semantic_ui_react_["Grid"].Column, {
        computer: "16"
      }, external_react_default.a.createElement(external_semantic_ui_react_["Button"], {
        color: "teal",
        fluid: true,
        size: "large",
        type: "submit",
        disabled: isSubmitting
      }, "Submit"))))))));
    });
  }))));
};

/* harmony default export */ var Authentication_SignUp = (Object(external_react_apollo_["withApollo"])(SignUp_SignUp));
// EXTERNAL MODULE: C:/playground/pedromagalhaes/node_modules/@babel/runtime-corejs2/core-js/array/is-array.js
var is_array = __webpack_require__("ysci");
var is_array_default = /*#__PURE__*/__webpack_require__.n(is_array);

// CONCATENATED MODULE: C:/playground/pedromagalhaes/node_modules/@babel/runtime-corejs2/helpers/esm/arrayWithHoles.js

function _arrayWithHoles(arr) {
  if (is_array_default()(arr)) return arr;
}
// EXTERNAL MODULE: C:/playground/pedromagalhaes/node_modules/@babel/runtime-corejs2/core-js/get-iterator.js
var get_iterator = __webpack_require__("IVrg");
var get_iterator_default = /*#__PURE__*/__webpack_require__.n(get_iterator);

// CONCATENATED MODULE: C:/playground/pedromagalhaes/node_modules/@babel/runtime-corejs2/helpers/esm/iterableToArrayLimit.js

function _iterableToArrayLimit(arr, i) {
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = get_iterator_default()(arr), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}
// CONCATENATED MODULE: C:/playground/pedromagalhaes/node_modules/@babel/runtime-corejs2/helpers/esm/nonIterableRest.js
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}
// CONCATENATED MODULE: C:/playground/pedromagalhaes/node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js



function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();
}
// EXTERNAL MODULE: C:/playground/pedromagalhaes/node_modules/next/link.js
var next_link = __webpack_require__("jvFD");
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);

// CONCATENATED MODULE: ./mutations/Login.js


function Login_templateObject() {
  var data = Object(taggedTemplateLiteral["a" /* default */])(["\n  mutation Login($email: String, $password: String) {\n    login(email: $email, password: $password) {\n      id\n      email\n      firstName\n      lastName\n    }\n  }\n"]);

  Login_templateObject = function _templateObject() {
    return data;
  };

  return data;
}


/* harmony default export */ var Login = (external_graphql_tag_default()(Login_templateObject()));
// CONCATENATED MODULE: ./components/Modules/Authentication/SignIn.js







var _React = external_react_default.a,
    useState = _React.useState;

var SignIn_RegisterBox = function RegisterBox() {
  var _useState = useState(''),
      _useState2 = _slicedToArray(_useState, 2),
      email = _useState2[0],
      setEmail = _useState2[1];

  var _useState3 = useState(''),
      _useState4 = _slicedToArray(_useState3, 2),
      password = _useState4[0],
      setPassword = _useState4[1];

  var onInputChange = function onInputChange(e) {
    e.target.name === 'email' && setEmail(e.target.value);
    e.target.name === 'password' && setPassword(e.target.value);
  };

  var validateForm = function validateForm() {
    return email && password;
  };

  var resetForm = function resetForm() {
    setEmail('');
    setPassword('');
  };

  return external_react_default.a.createElement(external_react_default.a.Fragment, null, external_react_default.a.createElement(external_semantic_ui_react_["Container"], null, external_react_default.a.createElement(external_semantic_ui_react_["Grid"], {
    textAlign: "center",
    style: {
      height: '100%'
    },
    verticalAlign: "middle"
  }, external_react_default.a.createElement(external_semantic_ui_react_["Grid"].Column, {
    style: {
      maxWidth: 450
    }
  }, external_react_default.a.createElement(external_react_apollo_["Mutation"], {
    mutation: Login,
    onCompleted: function onCompleted(data) {
      console.log(data);
    },
    onError: function onError(error) {
      console.log(error.graphQLErrors);
    }
  }, function (create, _ref) {
    var loading = _ref.loading,
        error = _ref.error;
    return external_react_default.a.createElement(external_semantic_ui_react_["Form"], {
      size: "large",
      onSubmit: function onSubmit(e) {
        e.preventDefault();
        e.stopPropagation();

        if (validateForm()) {
          create({
            variables: {
              email: email,
              password: password
            }
          });
          resetForm();
        }
      }
    }, external_react_default.a.createElement(external_semantic_ui_react_["Segment"], {
      stacked: true
    }, loading && external_react_default.a.createElement("p", null, "Loading..."), error && external_react_default.a.createElement("div", null, external_react_default.a.createElement("pre", null, "Bad:", ' ', error.graphQLErrors.map(function (_ref2) {
      var message = _ref2.message;
      return external_react_default.a.createElement("span", {
        key: external_nanoid_default()()
      }, message);
    }))), external_react_default.a.createElement(external_semantic_ui_react_["Form"].Input, {
      fluid: true,
      icon: "user",
      iconPosition: "left",
      placeholder: "E-mail address",
      name: "email",
      id: "email",
      value: email,
      onChange: onInputChange
    }), external_react_default.a.createElement(external_semantic_ui_react_["Form"].Input, {
      fluid: true,
      icon: "lock",
      iconPosition: "left",
      name: "password",
      placeholder: "Password",
      id: "password",
      type: "password",
      value: password,
      onChange: onInputChange
    }), external_react_default.a.createElement(external_semantic_ui_react_["Button"], {
      color: "teal",
      fluid: true,
      size: "large"
    }, "Login")));
  }), external_react_default.a.createElement(external_semantic_ui_react_["Message"], null, "New to us?", external_react_default.a.createElement(link_default.a, {
    href: "/public/register",
    as: "/register"
  }, external_react_default.a.createElement("a", {
    href: "#"
  }, "Sign Up")))))));
};

/* harmony default export */ var SignIn = (Object(external_react_apollo_["withApollo"])(SignIn_RegisterBox));
// CONCATENATED MODULE: ./components/Shared/ModuleTitle.js



var ModuleTitle_ModuleTitle = function ModuleTitle(_ref) {
  var as = _ref.as,
      icon = _ref.icon,
      text = _ref.text,
      dividing = _ref.dividing;
  return external_react_default.a.createElement(external_semantic_ui_react_["Header"], {
    as: as,
    dividing: dividing
  }, external_react_default.a.createElement(external_semantic_ui_react_["Icon"], {
    name: icon
  }), external_react_default.a.createElement(external_semantic_ui_react_["Header"].Content, null, text));
};

/* harmony default export */ var Shared_ModuleTitle = (ModuleTitle_ModuleTitle);
// CONCATENATED MODULE: ./components/Shared/BlogFeed.js



var BlogFeed_BlogFeed = function BlogFeed() {
  return external_react_default.a.createElement(external_semantic_ui_react_["Card"], null, external_react_default.a.createElement(external_semantic_ui_react_["Card"].Content, null, external_react_default.a.createElement(external_semantic_ui_react_["Card"].Header, null, "Recent Activity")), external_react_default.a.createElement(external_semantic_ui_react_["Card"].Content, null, external_react_default.a.createElement(external_semantic_ui_react_["Feed"], null, external_react_default.a.createElement(external_semantic_ui_react_["Feed"].Event, null, external_react_default.a.createElement(external_semantic_ui_react_["Feed"].Label, {
    image: "/images/avatar/small/jenny.jpg"
  }), external_react_default.a.createElement(external_semantic_ui_react_["Feed"].Content, null, external_react_default.a.createElement(external_semantic_ui_react_["Feed"].Date, {
    content: "1 day ago"
  }), external_react_default.a.createElement(external_semantic_ui_react_["Feed"].Summary, null, "You added ", external_react_default.a.createElement("a", null, "Jenny Hess"), " to your ", external_react_default.a.createElement("a", null, "coworker"), " group."))), external_react_default.a.createElement(external_semantic_ui_react_["Feed"].Event, null, external_react_default.a.createElement(external_semantic_ui_react_["Feed"].Label, {
    image: "/images/avatar/small/molly.png"
  }), external_react_default.a.createElement(external_semantic_ui_react_["Feed"].Content, null, external_react_default.a.createElement(external_semantic_ui_react_["Feed"].Date, {
    content: "3 days ago"
  }), external_react_default.a.createElement(external_semantic_ui_react_["Feed"].Summary, null, "You added ", external_react_default.a.createElement("a", null, "Molly Malone"), " as a friend."))), external_react_default.a.createElement(external_semantic_ui_react_["Feed"].Event, null, external_react_default.a.createElement(external_semantic_ui_react_["Feed"].Label, {
    image: "/images/avatar/small/elliot.jpg"
  }), external_react_default.a.createElement(external_semantic_ui_react_["Feed"].Content, null, external_react_default.a.createElement(external_semantic_ui_react_["Feed"].Date, {
    content: "4 days ago"
  }), external_react_default.a.createElement(external_semantic_ui_react_["Feed"].Summary, null, "You added ", external_react_default.a.createElement("a", null, "Elliot Baker"), " to your ", external_react_default.a.createElement("a", null, "musicians"), " group."))))));
};

/* harmony default export */ var Shared_BlogFeed = (BlogFeed_BlogFeed);
// CONCATENATED MODULE: ./components/Shared/Card.styles.js

var CardStyles = external_styled_components_default.a.section.withConfig({
  displayName: "Cardstyles__CardStyles",
  componentId: "sc-1fgzdb6-0"
})([".ui.fluid.card{margin-bottom:20px;padding-bottom:0;border:none;border-radius:0;box-shadow:none;}.ui.card >:first-child,.ui.cards > .card >:first-child{border-radius:0 !important;}"]);
/* harmony default export */ var Card_styles = (CardStyles);
// CONCATENATED MODULE: ./components/Shared/Card.js




var Card_CardComponent = function CardComponent() {
  return external_react_default.a.createElement(Card_styles, null, external_react_default.a.createElement(external_semantic_ui_react_["Container"], null, external_react_default.a.createElement(external_semantic_ui_react_["Grid"], {
    columns: 1
  }, external_react_default.a.createElement(external_semantic_ui_react_["Grid"].Row, null, external_react_default.a.createElement(external_semantic_ui_react_["Grid"].Column, {
    computer: 16
  }, external_react_default.a.createElement(external_semantic_ui_react_["Card"], {
    fluid: true
  }, external_react_default.a.createElement(external_semantic_ui_react_["Card"].Content, null, external_react_default.a.createElement(external_semantic_ui_react_["Card"].Header, null, "Matthew")), external_react_default.a.createElement(external_semantic_ui_react_["Image"], {
    style: {
      maxHeight: '333px'
    },
    src: "https://dummyimage.com/1127x333/27363b/dfdfdf",
    fluid: true
  }), external_react_default.a.createElement(external_semantic_ui_react_["Card"].Content, null, external_react_default.a.createElement(external_semantic_ui_react_["Card"].Meta, null, external_react_default.a.createElement("span", {
    className: "date"
  }, "Joined in 2015")), external_react_default.a.createElement(external_semantic_ui_react_["Card"].Description, null, "Matthew is a musician living in Nashville."))))))));
};

/* harmony default export */ var Card = (Card_CardComponent);
// CONCATENATED MODULE: ./components/Shared/ListItem.js



var ListItem_ListItem = function ListItem(_ref) {
  var title = _ref.title,
      description = _ref.description;
  return external_react_default.a.createElement(external_semantic_ui_react_["Item"], null, external_react_default.a.createElement(external_semantic_ui_react_["Item"].Image, {
    src: ""
  }), external_react_default.a.createElement(external_semantic_ui_react_["Item"].Content, null, external_react_default.a.createElement(external_semantic_ui_react_["Item"].Header, {
    as: "a"
  }, title), external_react_default.a.createElement(external_semantic_ui_react_["Item"].Meta, null, external_react_default.a.createElement("span", {
    className: "cinema"
  }, "Union Square 14")), external_react_default.a.createElement(external_semantic_ui_react_["Item"].Description, null, description), external_react_default.a.createElement(external_semantic_ui_react_["Item"].Extra, null, external_react_default.a.createElement(external_semantic_ui_react_["Label"], null, "IMAX"), external_react_default.a.createElement(external_semantic_ui_react_["Label"], {
    icon: "globe",
    content: "Additional Languages"
  }))));
};

/* harmony default export */ var Shared_ListItem = (ListItem_ListItem);
// CONCATENATED MODULE: ./components/Shared/SideBarListItem.js



var SideBarListItem_SideBarListItem = function SideBarListItem() {
  return external_react_default.a.createElement(external_semantic_ui_react_["List"].Item, null, external_react_default.a.createElement(external_semantic_ui_react_["List"].Icon, {
    name: "github",
    size: "large",
    verticalAlign: "middle"
  }), external_react_default.a.createElement(external_semantic_ui_react_["List"].Content, null, external_react_default.a.createElement(external_semantic_ui_react_["List"].Header, {
    as: "a"
  }, "Semantic-Org/Semantic-UI"), external_react_default.a.createElement(external_semantic_ui_react_["List"].Description, {
    as: "a"
  }, "Updated 20 mins ago")));
};

/* harmony default export */ var Shared_SideBarListItem = (SideBarListItem_SideBarListItem);
// EXTERNAL MODULE: C:/playground/pedromagalhaes/node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js
var get_own_property_symbols = __webpack_require__("8k7s");
var get_own_property_symbols_default = /*#__PURE__*/__webpack_require__.n(get_own_property_symbols);

// EXTERNAL MODULE: C:/playground/pedromagalhaes/node_modules/@babel/runtime-corejs2/core-js/object/keys.js
var keys = __webpack_require__("TPw6");
var keys_default = /*#__PURE__*/__webpack_require__.n(keys);

// CONCATENATED MODULE: C:/playground/pedromagalhaes/node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutPropertiesLoose.js

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};

  var sourceKeys = keys_default()(source);

  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}
// CONCATENATED MODULE: C:/playground/pedromagalhaes/node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js


function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose(source, excluded);
  var key, i;

  if (get_own_property_symbols_default.a) {
    var sourceSymbolKeys = get_own_property_symbols_default()(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}
// CONCATENATED MODULE: ./components/Shared/FullScreenLoader.js





var FullScreenLoader_FullScreenLoader = function FullScreenLoader(_ref) {
  var className = _ref.className,
      props = _objectWithoutProperties(_ref, ["className"]);

  var active = props.active;
  return external_react_default.a.createElement("div", {
    className: className
  }, external_react_default.a.createElement(external_semantic_ui_react_["Dimmer"], {
    active: active
  }, external_react_default.a.createElement(external_semantic_ui_react_["Loader"], {
    size: "large"
  })));
};

var StyledFullScreenLoader = external_styled_components_default()(FullScreenLoader_FullScreenLoader).withConfig({
  displayName: "FullScreenLoader__StyledFullScreenLoader",
  componentId: "sc-18eyfgg-0"
})(["&.dimmed.dimmable > .ui.animating.dimmer,&.dimmed.dimmable > .ui.visible.dimmer,&.ui.active.dimmer{display:flex !important;position:fixed;align-items:center;justify-content:center;height:100%;background-color:rgba(0,0,0,0.5);}"]);
/* harmony default export */ var Shared_FullScreenLoader = (StyledFullScreenLoader);
// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__("K2gz");
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);

// CONCATENATED MODULE: ./components/Shared/Separator.js




var mID = 'separator';

var Separator_Separator = function Separator(_ref) {
  var className = _ref.className,
      isRow = _ref.isRow,
      cssClass = _ref.cssClass,
      id = _ref.id;
  return external_react_default.a.createElement(external_react_default.a.Fragment, null, isRow ? external_react_default.a.createElement(external_semantic_ui_react_["Grid"].Row, {
    className: className
  }, external_react_default.a.createElement(external_semantic_ui_react_["Grid"].Column, {
    className: mID
  }, external_react_default.a.createElement("hr", null))) : external_react_default.a.createElement(external_semantic_ui_react_["Container"], {
    as: "section",
    id: id,
    className: external_classnames_default()(className)
  }, external_react_default.a.createElement(external_semantic_ui_react_["Divider"], {
    className: cssClass
  })));
};

var StyledComponent = external_styled_components_default()(Separator_Separator).withConfig({
  displayName: "Separator__StyledComponent",
  componentId: "sc-1axfdhl-0"
})([".rm-separator{&.ui.divider{margin-top:0;border-top:none;border-bottom:1px solid #ccc;width:100%;}}&.row{padding:0 !important;hr{background:#ccc;height:1px;margin:0;border:none;}}"]);
/* harmony default export */ var Shared_Separator = (StyledComponent);
// CONCATENATED MODULE: ./components/Shared/Text.js





var Text_createStyledText = function createStyledText(as, props) {
  return external_styled_components_default()(as, props).withConfig({
    displayName: "Text",
    componentId: "btz5l3-0"
  })(["font-size:", ";line-height:", ";font-weight:", ";"], props.isSmall ? '16px' : null, props.isSmall ? '24px' : null, props.isStrong ? 'bold' : null);
};

var Text_Text = function Text(_ref) {
  var props = Object(esm_extends["a" /* default */])({}, _ref);

  var as = props.as,
      isHtml = props.isHtml,
      className = props.className,
      children = props.children;
  var Element = Text_createStyledText(as || 'div', props);
  return external_react_default.a.createElement(external_react_["Fragment"], null, isHtml ? external_react_default.a.createElement(Element, {
    className: className,
    dangerouslySetInnerHTML: {
      __html: children
    }
  }) : external_react_default.a.createElement(Element, {
    className: className
  }, children));
};

/* harmony default export */ var Shared_Text = (Text_Text);
// CONCATENATED MODULE: ./components/Shared/FormFieldError.js


var FormFieldError_FormFieldError = function FormFieldError(_ref) {
  var children = _ref.children;
  return external_react_default.a.createElement("p", null, children);
};

/* harmony default export */ var Shared_FormFieldError = (FormFieldError_FormFieldError);
// CONCATENATED MODULE: ./components/index.js
/* concated harmony reexport Teaser */__webpack_require__.d(__webpack_exports__, "h", function() { return Teaser; });
/* concated harmony reexport AboutMe */__webpack_require__.d(__webpack_exports__, "a", function() { return About; });
/* concated harmony reexport Worked */__webpack_require__.d(__webpack_exports__, "j", function() { return Worked; });
/* concated harmony reexport OtherProjects */__webpack_require__.d(__webpack_exports__, "d", function() { return OtherProjects; });
/* concated harmony reexport Projects */__webpack_require__.d(__webpack_exports__, "e", function() { return Modules_Projects_Projects; });
/* unused concated harmony import ProjectItem */
/* unused concated harmony import OtherProjectItem */
/* unused concated harmony import Map */
/* unused concated harmony import DeckMap */
/* concated harmony reexport SignUp */__webpack_require__.d(__webpack_exports__, "g", function() { return Authentication_SignUp; });
/* concated harmony reexport SignIn */__webpack_require__.d(__webpack_exports__, "f", function() { return SignIn; });
/* concated harmony reexport ModuleTitle */__webpack_require__.d(__webpack_exports__, "c", function() { return Shared_ModuleTitle; });
/* unused concated harmony import BlogFeed */
/* unused concated harmony import Card */
/* unused concated harmony import ListItem */
/* unused concated harmony import SideBarListItem */
/* unused concated harmony import FullScreenLoader */
/* unused concated harmony import Separator */
/* concated harmony reexport Text */__webpack_require__.d(__webpack_exports__, "i", function() { return Shared_Text; });
/* concated harmony reexport FormFieldError */__webpack_require__.d(__webpack_exports__, "b", function() { return Shared_FormFieldError; });
// modules










 // shared












/***/ }),

/***/ "emby":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("ltjX");

/***/ }),

/***/ "faye":
/***/ (function(module, exports) {

module.exports = require("react-dom");

/***/ }),

/***/ "fdHT":
/***/ (function(module, exports) {

module.exports = require("react-map-gl");

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

/***/ "njL2":
/***/ (function(module) {

module.exports = [{"city":"Moncarapacho","population":"7,591","image":"http://www.uf-moncarapacho-fuseta.pt/site/images/artigos/Moncarapacho-Algarve.jpg","state":"Olhão","latitude":37.0843358,"longitude":-7.7888226}];

/***/ }),

/***/ "o5io":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/create");

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

/***/ "txk1":
/***/ (function(module, exports) {

module.exports = require("graphql-tag");

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

/***/ "wDTD":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("e+cM");



var Home = function Home() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_1__[/* Teaser */ "h"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_1__[/* AboutMe */ "a"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_1__[/* Worked */ "j"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_1__[/* Projects */ "e"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_1__[/* OtherProjects */ "d"], null));
};

/* harmony default export */ __webpack_exports__["default"] = (Home);

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

/***/ "yOjx":
/***/ (function(module, exports) {

module.exports = require("nanoid");

/***/ }),

/***/ "ysci":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("R2Q7");

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
//# sourceMappingURL=login.js.map