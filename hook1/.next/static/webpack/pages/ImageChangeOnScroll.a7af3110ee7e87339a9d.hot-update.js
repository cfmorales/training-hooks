webpackHotUpdate_N_E("pages/ImageChangeOnScroll",{

/***/ "./pages/ImageChangeOnScroll.js":
/*!**************************************!*\
  !*** ./pages/ImageChangeOnScroll.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _src_ImageToggleOnScroll__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../src/ImageToggleOnScroll */ "./src/ImageToggleOnScroll.js");


var _jsxFileName = "D:\\Proyectos\\React\\Testing\\hooks\\pages\\ImageChangeOnScroll.js",
    _this = undefined,
    _s = $RefreshSig$();




var ImageChangeOnScroll = function ImageChangeOnScroll() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0),
      currentImgId = _useState[0],
      setCurrentImgId = _useState[1];

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    window.document.title = "Img with title ".concat(currentImgId);
    console.log("Img with title ".concat(currentImgId));
  }, []);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      onMouseOver: function onMouseOver() {
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
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      onMouseOver: function onMouseOver() {
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
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_src_ImageToggleOnScroll__WEBPACK_IMPORTED_MODULE_2__["default"], {
      primImg: "/assets/img/img1.jpg",
      secImg: "/assets/img/img2.jpg",
      style: {
        width: '100px'
      }
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_src_ImageToggleOnScroll__WEBPACK_IMPORTED_MODULE_2__["default"], {
      primImg: "/assets/img/img3.jpg",
      secImg: "/assets/img/img4.jpg",
      style: {
        width: '100px'
      }
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_src_ImageToggleOnScroll__WEBPACK_IMPORTED_MODULE_2__["default"], {
      primImg: "/assets/img/img1.jpg",
      secImg: "/assets/img/img2.jpg",
      style: {
        width: '100px'
      }
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_src_ImageToggleOnScroll__WEBPACK_IMPORTED_MODULE_2__["default"], {
      primImg: "/assets/img/img3.jpg",
      secImg: "/assets/img/img4.jpg",
      style: {
        width: '100px'
      }
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 13
    }, _this), "asd"]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 11,
    columnNumber: 9
  }, _this);
};

_s(ImageChangeOnScroll, "GwfI4AiPmXtchHDB+FpKN+i+2Po=");

_c = ImageChangeOnScroll;
/* harmony default export */ __webpack_exports__["default"] = (ImageChangeOnScroll);

var _c;

$RefreshReg$(_c, "ImageChangeOnScroll");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvSW1hZ2VDaGFuZ2VPblNjcm9sbC5qcyJdLCJuYW1lcyI6WyJJbWFnZUNoYW5nZU9uU2Nyb2xsIiwidXNlU3RhdGUiLCJjdXJyZW50SW1nSWQiLCJzZXRDdXJyZW50SW1nSWQiLCJ1c2VFZmZlY3QiLCJ3aW5kb3ciLCJkb2N1bWVudCIsInRpdGxlIiwiY29uc29sZSIsImxvZyIsIndpZHRoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFFQSxJQUFNQSxtQkFBbUIsR0FBRyxTQUF0QkEsbUJBQXNCLEdBQU07QUFBQTs7QUFBQSxrQkFDVUMsc0RBQVEsQ0FBQyxDQUFELENBRGxCO0FBQUEsTUFDdkJDLFlBRHVCO0FBQUEsTUFDVEMsZUFEUzs7QUFFOUJDLHlEQUFTLENBQUMsWUFBTTtBQUNaQyxVQUFNLENBQUNDLFFBQVAsQ0FBZ0JDLEtBQWhCLDRCQUEwQ0wsWUFBMUM7QUFDQU0sV0FBTyxDQUFDQyxHQUFSLDBCQUE4QlAsWUFBOUI7QUFDSCxHQUhRLEVBR04sRUFITSxDQUFUO0FBSUEsc0JBQ0k7QUFBQSw0QkFDSTtBQUFLLGlCQUFXLEVBQUUsdUJBQU07QUFDcEJDLHVCQUFlLENBQUMsQ0FBRCxDQUFmO0FBQ0FLLGVBQU8sQ0FBQ0MsR0FBUixDQUFZUCxZQUFaO0FBQ0gsT0FIRDtBQUFBLDZCQUlJLHFFQUFDLGdFQUFEO0FBQXFCLGVBQU8sRUFBQyxzQkFBN0I7QUFBb0QsY0FBTSxFQUFDLHNCQUEzRDtBQUNxQixhQUFLLEVBQUU7QUFBQ1EsZUFBSyxFQUFFO0FBQVI7QUFENUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUpKO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFESixlQVFJO0FBQUssaUJBQVcsRUFBRSx1QkFBTTtBQUNwQlAsdUJBQWUsQ0FBQyxDQUFELENBQWY7QUFDQUssZUFBTyxDQUFDQyxHQUFSLENBQVlQLFlBQVo7QUFDSCxPQUhEO0FBQUEsNkJBS0kscUVBQUMsZ0VBQUQ7QUFBcUIsZUFBTyxFQUFDLHNCQUE3QjtBQUFvRCxjQUFNLEVBQUMsc0JBQTNEO0FBQ3FCLGFBQUssRUFBRTtBQUFDUSxlQUFLLEVBQUU7QUFBUjtBQUQ1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTEo7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQVJKLGVBZ0JJLHFFQUFDLGdFQUFEO0FBQXFCLGFBQU8sRUFBQyxzQkFBN0I7QUFBb0QsWUFBTSxFQUFDLHNCQUEzRDtBQUFrRixXQUFLLEVBQUU7QUFBQ0EsYUFBSyxFQUFFO0FBQVI7QUFBekY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQWhCSixlQWlCSSxxRUFBQyxnRUFBRDtBQUFxQixhQUFPLEVBQUMsc0JBQTdCO0FBQW9ELFlBQU0sRUFBQyxzQkFBM0Q7QUFBa0YsV0FBSyxFQUFFO0FBQUNBLGFBQUssRUFBRTtBQUFSO0FBQXpGO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFqQkosZUFrQkkscUVBQUMsZ0VBQUQ7QUFBcUIsYUFBTyxFQUFDLHNCQUE3QjtBQUFvRCxZQUFNLEVBQUMsc0JBQTNEO0FBQWtGLFdBQUssRUFBRTtBQUFDQSxhQUFLLEVBQUU7QUFBUjtBQUF6RjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBbEJKLGVBbUJJLHFFQUFDLGdFQUFEO0FBQXFCLGFBQU8sRUFBQyxzQkFBN0I7QUFBb0QsWUFBTSxFQUFDLHNCQUEzRDtBQUFrRixXQUFLLEVBQUU7QUFBQ0EsYUFBSyxFQUFFO0FBQVI7QUFBekY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQW5CSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FESjtBQXdCSCxDQTlCRDs7R0FBTVYsbUI7O0tBQUFBLG1CO0FBZ0NTQSxrRkFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9JbWFnZUNoYW5nZU9uU2Nyb2xsLmE3YWYzMTEwZWU3ZTg3MzM5YTlkLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZSwgdXNlRWZmZWN0fSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBJbWFnZVRvZ2dsZU9uU2Nyb2xsIGZyb20gXCIuLi9zcmMvSW1hZ2VUb2dnbGVPblNjcm9sbFwiO1xyXG5cclxuY29uc3QgSW1hZ2VDaGFuZ2VPblNjcm9sbCA9ICgpID0+IHtcclxuICAgIGNvbnN0IFtjdXJyZW50SW1nSWQsIHNldEN1cnJlbnRJbWdJZF0gPSB1c2VTdGF0ZSgwKTtcclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgd2luZG93LmRvY3VtZW50LnRpdGxlID0gYEltZyB3aXRoIHRpdGxlICR7Y3VycmVudEltZ0lkfWA7XHJcbiAgICAgICAgY29uc29sZS5sb2coYEltZyB3aXRoIHRpdGxlICR7Y3VycmVudEltZ0lkfWApO1xyXG4gICAgfSwgW10pO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IG9uTW91c2VPdmVyPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBzZXRDdXJyZW50SW1nSWQoMSk7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhjdXJyZW50SW1nSWQpO1xyXG4gICAgICAgICAgICB9fT5cclxuICAgICAgICAgICAgICAgIDxJbWFnZVRvZ2dsZU9uU2Nyb2xsIHByaW1JbWc9Jy9hc3NldHMvaW1nL2ltZzEuanBnJyBzZWNJbWc9Jy9hc3NldHMvaW1nL2ltZzIuanBnJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3t3aWR0aDogJzEwMHB4J319Lz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgb25Nb3VzZU92ZXI9eygpID0+IHtcclxuICAgICAgICAgICAgICAgIHNldEN1cnJlbnRJbWdJZCgyKTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGN1cnJlbnRJbWdJZCk7XHJcbiAgICAgICAgICAgIH19PlxyXG5cclxuICAgICAgICAgICAgICAgIDxJbWFnZVRvZ2dsZU9uU2Nyb2xsIHByaW1JbWc9Jy9hc3NldHMvaW1nL2ltZzMuanBnJyBzZWNJbWc9Jy9hc3NldHMvaW1nL2ltZzQuanBnJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3t3aWR0aDogJzEwMHB4J319Lz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxJbWFnZVRvZ2dsZU9uU2Nyb2xsIHByaW1JbWc9Jy9hc3NldHMvaW1nL2ltZzEuanBnJyBzZWNJbWc9Jy9hc3NldHMvaW1nL2ltZzIuanBnJyBzdHlsZT17e3dpZHRoOiAnMTAwcHgnfX0vPlxyXG4gICAgICAgICAgICA8SW1hZ2VUb2dnbGVPblNjcm9sbCBwcmltSW1nPScvYXNzZXRzL2ltZy9pbWczLmpwZycgc2VjSW1nPScvYXNzZXRzL2ltZy9pbWc0LmpwZycgc3R5bGU9e3t3aWR0aDogJzEwMHB4J319Lz5cclxuICAgICAgICAgICAgPEltYWdlVG9nZ2xlT25TY3JvbGwgcHJpbUltZz0nL2Fzc2V0cy9pbWcvaW1nMS5qcGcnIHNlY0ltZz0nL2Fzc2V0cy9pbWcvaW1nMi5qcGcnIHN0eWxlPXt7d2lkdGg6ICcxMDBweCd9fS8+XHJcbiAgICAgICAgICAgIDxJbWFnZVRvZ2dsZU9uU2Nyb2xsIHByaW1JbWc9Jy9hc3NldHMvaW1nL2ltZzMuanBnJyBzZWNJbWc9Jy9hc3NldHMvaW1nL2ltZzQuanBnJyBzdHlsZT17e3dpZHRoOiAnMTAwcHgnfX0vPlxyXG4gICAgICAgICAgICBhc2RcclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJbWFnZUNoYW5nZU9uU2Nyb2xsO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9