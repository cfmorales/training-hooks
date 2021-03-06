webpackHotUpdate_N_E("pages/ImageChangeOnScroll",{

/***/ "./src/ImageToggleOnScroll.js":
/*!************************************!*\
  !*** ./src/ImageToggleOnScroll.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


var _jsxFileName = "D:\\Proyectos\\React\\Testing\\hooks\\src\\ImageToggleOnScroll.js",
    _this = undefined,
    _s = $RefreshSig$();



var ImageToggleOnScroll = function ImageToggleOnScroll(_ref) {
  _s();

  var primImg = _ref.primImg,
      secImg = _ref.secImg;
  var imgRef = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(null);

  var isInView = function isInView() {
    var rect = imgRef.current.getBoundingClientRect();
    return rect.top >= 0 && rect.bottom <= window.innerHeight;
  };

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      inView = _useState[0],
      setInView = _useState[1];

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    window.addEventListener('scroll', scrollHandler);
    return function () {
      window.removeEventListener('scroll', scrollHandler);
    };
  }, []);

  var scrollHandler = function scrollHandler() {
    setInView(isInView());
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
      src: inView ? secImg : primImg,
      alt: "",
      ref: imgRef
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 13
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 24,
    columnNumber: 9
  }, _this);
};

_s(ImageToggleOnScroll, "By24E/nl/S+LcJEaQGcFSTffZWg=");

_c = ImageToggleOnScroll;
/* harmony default export */ __webpack_exports__["default"] = (ImageToggleOnScroll);

var _c;

$RefreshReg$(_c, "ImageToggleOnScroll");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL0ltYWdlVG9nZ2xlT25TY3JvbGwuanMiXSwibmFtZXMiOlsiSW1hZ2VUb2dnbGVPblNjcm9sbCIsInByaW1JbWciLCJzZWNJbWciLCJpbWdSZWYiLCJ1c2VSZWYiLCJpc0luVmlldyIsInJlY3QiLCJjdXJyZW50IiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwidG9wIiwiYm90dG9tIiwid2luZG93IiwiaW5uZXJIZWlnaHQiLCJ1c2VTdGF0ZSIsImluVmlldyIsInNldEluVmlldyIsInVzZUVmZmVjdCIsImFkZEV2ZW50TGlzdGVuZXIiLCJzY3JvbGxIYW5kbGVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBRUEsSUFBTUEsbUJBQW1CLEdBQUcsU0FBdEJBLG1CQUFzQixPQUF1QjtBQUFBOztBQUFBLE1BQXJCQyxPQUFxQixRQUFyQkEsT0FBcUI7QUFBQSxNQUFaQyxNQUFZLFFBQVpBLE1BQVk7QUFDL0MsTUFBTUMsTUFBTSxHQUFHQyxvREFBTSxDQUFDLElBQUQsQ0FBckI7O0FBRUEsTUFBTUMsUUFBUSxHQUFHLFNBQVhBLFFBQVcsR0FBTTtBQUNuQixRQUFNQyxJQUFJLEdBQUdILE1BQU0sQ0FBQ0ksT0FBUCxDQUFlQyxxQkFBZixFQUFiO0FBQ0EsV0FBT0YsSUFBSSxDQUFDRyxHQUFMLElBQVksQ0FBWixJQUFpQkgsSUFBSSxDQUFDSSxNQUFMLElBQWVDLE1BQU0sQ0FBQ0MsV0FBOUM7QUFDSCxHQUhEOztBQUgrQyxrQkFRbkJDLHNEQUFRLENBQUMsS0FBRCxDQVJXO0FBQUEsTUFReENDLE1BUndDO0FBQUEsTUFRaENDLFNBUmdDOztBQVMvQ0MseURBQVMsQ0FBQyxZQUFNO0FBQ1pMLFVBQU0sQ0FBQ00sZ0JBQVAsQ0FBd0IsUUFBeEIsRUFBa0NDLGFBQWxDO0FBQ0EsV0FBTyxZQUFNO0FBQ1RQLFlBQU0sQ0FBQ1EsbUJBQVAsQ0FBMkIsUUFBM0IsRUFBcUNELGFBQXJDO0FBQ0gsS0FGRDtBQUdILEdBTFEsRUFLTixFQUxNLENBQVQ7O0FBT0EsTUFBTUEsYUFBYSxHQUFHLFNBQWhCQSxhQUFnQixHQUFNO0FBQ3hCSCxhQUFTLENBQUNWLFFBQVEsRUFBVCxDQUFUO0FBQ0gsR0FGRDs7QUFJQSxzQkFDSTtBQUFBLDJCQUNJO0FBQUssU0FBRyxFQUFFUyxNQUFNLEdBQUdaLE1BQUgsR0FBWUQsT0FBNUI7QUFBcUMsU0FBRyxFQUFDLEVBQXpDO0FBQTRDLFNBQUcsRUFBRUU7QUFBakQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FESjtBQUtILENBekJEOztHQUFNSCxtQjs7S0FBQUEsbUI7QUEyQlNBLGtGQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL0ltYWdlQ2hhbmdlT25TY3JvbGwuN2E2ZGU2Zjg5OWY2NjIxNGYwNmMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZVJlZiwgdXNlRWZmZWN0LCB1c2VTdGF0ZX0gZnJvbSAncmVhY3QnO1xyXG5cclxuY29uc3QgSW1hZ2VUb2dnbGVPblNjcm9sbCA9ICh7cHJpbUltZywgc2VjSW1nfSkgPT4ge1xyXG4gICAgY29uc3QgaW1nUmVmID0gdXNlUmVmKG51bGwpO1xyXG5cclxuICAgIGNvbnN0IGlzSW5WaWV3ID0gKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHJlY3QgPSBpbWdSZWYuY3VycmVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuICAgICAgICByZXR1cm4gcmVjdC50b3AgPj0gMCAmJiByZWN0LmJvdHRvbSA8PSB3aW5kb3cuaW5uZXJIZWlnaHQ7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IFtpblZpZXcsIHNldEluVmlld10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBzY3JvbGxIYW5kbGVyKTtcclxuICAgICAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgc2Nyb2xsSGFuZGxlcik7XHJcbiAgICAgICAgfTtcclxuICAgIH0sIFtdKTtcclxuXHJcbiAgICBjb25zdCBzY3JvbGxIYW5kbGVyID0gKCkgPT4ge1xyXG4gICAgICAgIHNldEluVmlldyhpc0luVmlldygpKTtcclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8aW1nIHNyYz17aW5WaWV3ID8gc2VjSW1nIDogcHJpbUltZ30gYWx0PVwiXCIgcmVmPXtpbWdSZWZ9Lz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJbWFnZVRvZ2dsZU9uU2Nyb2xsOyJdLCJzb3VyY2VSb290IjoiIn0=