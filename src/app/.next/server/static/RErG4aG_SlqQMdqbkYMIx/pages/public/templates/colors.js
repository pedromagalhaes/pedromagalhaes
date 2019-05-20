module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = 36);
/******/ })
/************************************************************************/
/******/ ({

/***/ 36:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("FnYn");


/***/ }),

/***/ "Dtiu":
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),

/***/ "FnYn":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("Dtiu");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);


var Styles = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.section.withConfig({
  displayName: "colors__Styles",
  componentId: "sc-1l2wwvj-0"
})([".grid-container{display:grid;grid-template-columns:auto auto auto;margin:0;padding:0;height:100vh;}.grid-item{font-size:30px;text-align:center;margin:0;display:flex;flex-direction:column;align-items:center;justify-content:center;text-transform:uppercase;}.color1{background:", ";color:", ";}.color2{background:", ";color:", ";}.color3{background:", ";color:", ";}.color4{background:", ";color:", ";}.color5{background:", ";color:", ";}.color6{background:", ";color:", ";}.color7{background:", ";color:", ";}.color8{background:", ";color:", ";}.color9{background:", ";color:", ";}.color10{background:", ";color:", ";}.color11{background:", ";color:", ";}.color12{background:", ";color:", ";}"], function (props) {
  return props.theme.color1;
}, function (props) {
  return props.theme.color10;
}, function (props) {
  return props.theme.color2;
}, function (props) {
  return props.theme.color6;
}, function (props) {
  return props.theme.color3;
}, function (props) {
  return props.theme.color6;
}, function (props) {
  return props.theme.color4;
}, function (props) {
  return props.theme.color1;
}, function (props) {
  return props.theme.color5;
}, function (props) {
  return props.theme.color6;
}, function (props) {
  return props.theme.color6;
}, function (props) {
  return props.theme.color1;
}, function (props) {
  return props.theme.color7;
}, function (props) {
  return props.theme.color1;
}, function (props) {
  return props.theme.color8;
}, function (props) {
  return props.theme.color1;
}, function (props) {
  return props.theme.color9;
}, function (props) {
  return props.theme.color6;
}, function (props) {
  return props.theme.color10;
}, function (props) {
  return props.theme.color1;
}, function (props) {
  return props.theme.color11;
}, function (props) {
  return props.theme.color1;
}, function (props) {
  return props.theme.color12;
}, function (props) {
  return props.theme.color6;
});

var Colors = function Colors() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Styles, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "grid-container"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "grid-item color1"
  }, "1 ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), "#27363b"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "grid-item color12"
  }, "12 ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), " #334e52"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "grid-item color2"
  }, "2 ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), " #557c83"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "grid-item color3"
  }, "3 ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), " #3aafa9"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "grid-item color9"
  }, "9 ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), " #019b94"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "grid-item color10"
  }, "10 ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), " rgb(100, 255, 218)"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "grid-item color5"
  }, "5 ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), " #a2d5ac"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "grid-item color6"
  }, "6 ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), " #fff"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "grid-item color7"
  }, "7 ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), " #eee"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "grid-item color11"
  }, "11 ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), " #eee"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "grid-item color4"
  }, "4 ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), " #dfdfdf"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "grid-item color8"
  }, "8 ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), " #ccc"))));
};

/* harmony default export */ __webpack_exports__["default"] = (Colors);

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })

/******/ });
//# sourceMappingURL=colors.js.map