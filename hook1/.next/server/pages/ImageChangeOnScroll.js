module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/ImageChangeOnScroll.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/ImageChangeOnScroll.js":
/*!**************************************!*\
  !*** ./pages/ImageChangeOnScroll.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _src_ImageToggleOnScroll__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../src/ImageToggleOnScroll */ "./src/ImageToggleOnScroll.js");

var _jsxFileName = "D:\\Proyectos\\React\\Testing\\hooks\\pages\\ImageChangeOnScroll.js";



const ImageChangeOnScroll = () => {
  const {
    0: currentImgId,
    1: setCurrentImgId
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    window.document.title = `Img with title ${currentImgId}`;
    console.log(`Img with title ${currentImgId}`);
  }, [currentImgId]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      onMouseOver: () => {
        setCurrentImgId(1);
        console.log(currentImgId);
      },
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_src_ImageToggleOnScroll__WEBPACK_IMPORTED_MODULE_2__["default"], {
        primImg: "/assets/img/img1.jpg",
        secImg: "/assets/img/img2.jpg",
        style: {
          width: '100px'
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      onMouseOver: () => {
        setCurrentImgId(2);
        console.log(currentImgId);
      },
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_src_ImageToggleOnScroll__WEBPACK_IMPORTED_MODULE_2__["default"], {
        primImg: "/assets/img/img3.jpg",
        secImg: "/assets/img/img4.jpg",
        style: {
          width: '100px'
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_src_ImageToggleOnScroll__WEBPACK_IMPORTED_MODULE_2__["default"], {
      primImg: "/assets/img/img1.jpg",
      secImg: "/assets/img/img2.jpg",
      style: {
        width: '100px'
      }
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_src_ImageToggleOnScroll__WEBPACK_IMPORTED_MODULE_2__["default"], {
      primImg: "/assets/img/img3.jpg",
      secImg: "/assets/img/img4.jpg",
      style: {
        width: '100px'
      }
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_src_ImageToggleOnScroll__WEBPACK_IMPORTED_MODULE_2__["default"], {
      primImg: "/assets/img/img1.jpg",
      secImg: "/assets/img/img2.jpg",
      style: {
        width: '100px'
      }
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_src_ImageToggleOnScroll__WEBPACK_IMPORTED_MODULE_2__["default"], {
      primImg: "/assets/img/img3.jpg",
      secImg: "/assets/img/img4.jpg",
      style: {
        width: '100px'
      }
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 13
    }, undefined), "asd"]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 11,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (ImageChangeOnScroll);

/***/ }),

/***/ "./src/ImageToggleOnScroll.js":
/*!************************************!*\
  !*** ./src/ImageToggleOnScroll.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "D:\\Proyectos\\React\\Testing\\hooks\\src\\ImageToggleOnScroll.js";


const ImageToggleOnScroll = ({
  primImg,
  secImg
}) => {
  const imgRef = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(null);
  const {
    0: isLoading,
    1: setIsLoading
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(true);

  const isInView = () => {
    const rect = imgRef.current.getBoundingClientRect();
    return rect.top >= 0 && rect.bottom <= window.innerHeight;
  };

  const {
    0: inView,
    1: setInView
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    setIsLoading(false);
    setInView(isInView());
    window.addEventListener('scroll', scrollHandler);
    return () => {
      window.removeEventListener('scroll', scrollHandler);
    };
  }, []);

  const scrollHandler = () => {
    setInView(isInView());
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
      src: isLoading ? 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8/5+hHgAHggJ/PchI7wAAAABJRU5ErkJggg==' : inView ? secImg : primImg,
      alt: "",
      ref: imgRef
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 13
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 26,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (ImageToggleOnScroll);

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react/jsx-dev-runtime");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvSW1hZ2VDaGFuZ2VPblNjcm9sbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvSW1hZ2VUb2dnbGVPblNjcm9sbC5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIl0sIm5hbWVzIjpbIkltYWdlQ2hhbmdlT25TY3JvbGwiLCJjdXJyZW50SW1nSWQiLCJzZXRDdXJyZW50SW1nSWQiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIndpbmRvdyIsImRvY3VtZW50IiwidGl0bGUiLCJjb25zb2xlIiwibG9nIiwid2lkdGgiLCJJbWFnZVRvZ2dsZU9uU2Nyb2xsIiwicHJpbUltZyIsInNlY0ltZyIsImltZ1JlZiIsInVzZVJlZiIsImlzTG9hZGluZyIsInNldElzTG9hZGluZyIsImlzSW5WaWV3IiwicmVjdCIsImN1cnJlbnQiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJ0b3AiLCJib3R0b20iLCJpbm5lckhlaWdodCIsImluVmlldyIsInNldEluVmlldyIsImFkZEV2ZW50TGlzdGVuZXIiLCJzY3JvbGxIYW5kbGVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7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InNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vcGFnZXMvSW1hZ2VDaGFuZ2VPblNjcm9sbC5qc1wiKTtcbiIsImltcG9ydCBSZWFjdCwge3VzZVN0YXRlLCB1c2VFZmZlY3R9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IEltYWdlVG9nZ2xlT25TY3JvbGwgZnJvbSBcIi4uL3NyYy9JbWFnZVRvZ2dsZU9uU2Nyb2xsXCI7XHJcblxyXG5jb25zdCBJbWFnZUNoYW5nZU9uU2Nyb2xsID0gKCkgPT4ge1xyXG4gICAgY29uc3QgW2N1cnJlbnRJbWdJZCwgc2V0Q3VycmVudEltZ0lkXSA9IHVzZVN0YXRlKDApO1xyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICB3aW5kb3cuZG9jdW1lbnQudGl0bGUgPSBgSW1nIHdpdGggdGl0bGUgJHtjdXJyZW50SW1nSWR9YDtcclxuICAgICAgICBjb25zb2xlLmxvZyhgSW1nIHdpdGggdGl0bGUgJHtjdXJyZW50SW1nSWR9YCk7XHJcbiAgICB9LFtjdXJyZW50SW1nSWRdKTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGRpdiBvbk1vdXNlT3Zlcj17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgc2V0Q3VycmVudEltZ0lkKDEpO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coY3VycmVudEltZ0lkKTtcclxuICAgICAgICAgICAgfX0+XHJcbiAgICAgICAgICAgICAgICA8SW1hZ2VUb2dnbGVPblNjcm9sbCBwcmltSW1nPScvYXNzZXRzL2ltZy9pbWcxLmpwZycgc2VjSW1nPScvYXNzZXRzL2ltZy9pbWcyLmpwZydcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7d2lkdGg6ICcxMDBweCd9fS8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IG9uTW91c2VPdmVyPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBzZXRDdXJyZW50SW1nSWQoMik7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhjdXJyZW50SW1nSWQpO1xyXG4gICAgICAgICAgICB9fT5cclxuXHJcbiAgICAgICAgICAgICAgICA8SW1hZ2VUb2dnbGVPblNjcm9sbCBwcmltSW1nPScvYXNzZXRzL2ltZy9pbWczLmpwZycgc2VjSW1nPScvYXNzZXRzL2ltZy9pbWc0LmpwZydcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7d2lkdGg6ICcxMDBweCd9fS8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8SW1hZ2VUb2dnbGVPblNjcm9sbCBwcmltSW1nPScvYXNzZXRzL2ltZy9pbWcxLmpwZycgc2VjSW1nPScvYXNzZXRzL2ltZy9pbWcyLmpwZycgc3R5bGU9e3t3aWR0aDogJzEwMHB4J319Lz5cclxuICAgICAgICAgICAgPEltYWdlVG9nZ2xlT25TY3JvbGwgcHJpbUltZz0nL2Fzc2V0cy9pbWcvaW1nMy5qcGcnIHNlY0ltZz0nL2Fzc2V0cy9pbWcvaW1nNC5qcGcnIHN0eWxlPXt7d2lkdGg6ICcxMDBweCd9fS8+XHJcbiAgICAgICAgICAgIDxJbWFnZVRvZ2dsZU9uU2Nyb2xsIHByaW1JbWc9Jy9hc3NldHMvaW1nL2ltZzEuanBnJyBzZWNJbWc9Jy9hc3NldHMvaW1nL2ltZzIuanBnJyBzdHlsZT17e3dpZHRoOiAnMTAwcHgnfX0vPlxyXG4gICAgICAgICAgICA8SW1hZ2VUb2dnbGVPblNjcm9sbCBwcmltSW1nPScvYXNzZXRzL2ltZy9pbWczLmpwZycgc2VjSW1nPScvYXNzZXRzL2ltZy9pbWc0LmpwZycgc3R5bGU9e3t3aWR0aDogJzEwMHB4J319Lz5cclxuICAgICAgICAgICAgYXNkXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSW1hZ2VDaGFuZ2VPblNjcm9sbDtcclxuIiwiaW1wb3J0IFJlYWN0LCB7dXNlUmVmLCB1c2VFZmZlY3QsIHVzZVN0YXRlfSBmcm9tICdyZWFjdCc7XHJcblxyXG5jb25zdCBJbWFnZVRvZ2dsZU9uU2Nyb2xsID0gKHtwcmltSW1nLCBzZWNJbWd9KSA9PiB7XHJcbiAgICBjb25zdCBpbWdSZWYgPSB1c2VSZWYobnVsbCk7XHJcbiAgICBjb25zdCBbaXNMb2FkaW5nLCBzZXRJc0xvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSk7XHJcbiAgICBjb25zdCBpc0luVmlldyA9ICgpID0+IHtcclxuICAgICAgICBjb25zdCByZWN0ID0gaW1nUmVmLmN1cnJlbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcbiAgICAgICAgcmV0dXJuIHJlY3QudG9wID49IDAgJiYgcmVjdC5ib3R0b20gPD0gd2luZG93LmlubmVySGVpZ2h0O1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBbaW5WaWV3LCBzZXRJblZpZXddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBzZXRJc0xvYWRpbmcoZmFsc2UpXHJcbiAgICAgICAgc2V0SW5WaWV3KGlzSW5WaWV3KCkpO1xyXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBzY3JvbGxIYW5kbGVyKTtcclxuICAgICAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgc2Nyb2xsSGFuZGxlcik7XHJcbiAgICAgICAgfTtcclxuICAgIH0sIFtdKTtcclxuXHJcbiAgICBjb25zdCBzY3JvbGxIYW5kbGVyID0gKCkgPT4ge1xyXG4gICAgICAgIHNldEluVmlldyhpc0luVmlldygpKTtcclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8aW1nIHNyYz17XHJcbiAgICAgICAgICAgICAgICBpc0xvYWRpbmcgPyAnZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFBRUFBQUFCQ0FZQUFBQWZGY1NKQUFBQURVbEVRVlI0Mm1QOC81K2hIZ0FIZ2dKL1BjaEk3d0FBQUFCSlJVNUVya0pnZ2c9PSdcclxuICAgICAgICAgICAgICAgIDogaW5WaWV3ID8gc2VjSW1nIDogcHJpbUltZ30gYWx0PVwiXCIgcmVmPXtpbWdSZWZ9Lz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJbWFnZVRvZ2dsZU9uU2Nyb2xsOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9