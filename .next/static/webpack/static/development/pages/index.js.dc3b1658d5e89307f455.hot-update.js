webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/NoticeList.tsx":
/*!***********************************!*\
  !*** ./components/NoticeList.tsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _modules_notice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../modules/notice */ "./modules/notice.ts");
var _jsxFileName = "C:\\Users\\hyose\\Documents\\redux_typescript\\components\\NoticeList.tsx",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





function NoticeList(_ref) {
  _s();

  var _this = this;

  var props = _ref.props;
  var lists = props;
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useDispatch"])();
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 13
    }
  }, lists && lists.map(function (list) {
    return __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: {
        pathname: 'noticeDetail',
        query: {
          id: list.NTC_ID
        }
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 17
      }
    }, __jsx("li", {
      props: list,
      key: list.NTC_ID,
      onClick: function onClick() {
        return dispatch(Object(_modules_notice__WEBPACK_IMPORTED_MODULE_3__["getNtc"])(list.NTC_ID));
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 82
      }
    }, list.NTC_TITLE));
  })));
}

_s(NoticeList, "rgTLoBID190wEKCp9+G8W6F7A5M=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_2__["useDispatch"]];
});

_c = NoticeList;
;
/* harmony default export */ __webpack_exports__["default"] = (NoticeList);

var _c;

$RefreshReg$(_c, "NoticeList");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports_1 = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports_1;
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
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL05vdGljZUxpc3QudHN4Il0sIm5hbWVzIjpbIk5vdGljZUxpc3QiLCJwcm9wcyIsImxpc3RzIiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsIm1hcCIsImxpc3QiLCJwYXRobmFtZSIsInF1ZXJ5IiwiaWQiLCJOVENfSUQiLCJnZXROdGMiLCJOVENfVElUTEUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQU9BLFNBQVNBLFVBQVQsT0FBbUM7QUFBQTs7QUFBQTs7QUFBQSxNQUFkQyxLQUFjLFFBQWRBLEtBQWM7QUFFL0IsTUFBTUMsS0FBSyxHQUFHRCxLQUFkO0FBRUEsTUFBTUUsUUFBUSxHQUFHQywrREFBVyxFQUE1QjtBQUVBLFNBQ0ksbUVBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNLRixLQUFLLElBQUlBLEtBQUssQ0FBQ0csR0FBTixDQUFVLFVBQUNDLElBQUQ7QUFBQSxXQUNwQixNQUFDLGdEQUFEO0FBQU0sVUFBSSxFQUFFO0FBQUNDLGdCQUFRLEVBQUMsY0FBVjtBQUEwQkMsYUFBSyxFQUFFO0FBQUNDLFlBQUUsRUFBRUgsSUFBSSxDQUFDSTtBQUFWO0FBQWpDLE9BQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUFpRTtBQUFJLFdBQUssRUFBRUosSUFBWDtBQUFpQixTQUFHLEVBQUVBLElBQUksQ0FBQ0ksTUFBM0I7QUFBbUMsYUFBTyxFQUFFO0FBQUEsZUFBTVAsUUFBUSxDQUFDUSw4REFBTSxDQUFDTCxJQUFJLENBQUNJLE1BQU4sQ0FBUCxDQUFkO0FBQUEsT0FBNUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUFrRkosSUFBSSxDQUFDTSxTQUF2RixDQUFqRSxDQURvQjtBQUFBLEdBQVYsQ0FEZCxDQURKLENBREo7QUFTSDs7R0FmUVosVTtVQUlZSSx1RDs7O0tBSlpKLFU7QUFlUjtBQUVjQSx5RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcaW5kZXguanMuZGMzYjE2NThkNWU4OTMwN2Y0NTUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IHt1c2VEaXNwYXRjaH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgeyBnZXROdGMgfSBmcm9tICcuLi9tb2R1bGVzL25vdGljZSdcclxuXHJcblxyXG50eXBlIFByb3BzID0ge1xyXG4gICAgcHJvcHM6IGFueVtdXHJcbn1cclxuXHJcbmZ1bmN0aW9uIE5vdGljZUxpc3Qoe3Byb3BzfTogUHJvcHMpe1xyXG5cclxuICAgIGNvbnN0IGxpc3RzID0gcHJvcHM7XHJcblxyXG4gICAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG5cclxuICAgIHJldHVybihcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAge2xpc3RzICYmIGxpc3RzLm1hcCgobGlzdDogeyBOVENfSUQ6IHN0cmluZyB8IG51bWJlciB8IHVuZGVmaW5lZDsgTlRDX1RJVExFOiBSZWFjdC5SZWFjdE5vZGU7IH0pID0+IChcclxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e3twYXRobmFtZTonbm90aWNlRGV0YWlsJywgcXVlcnk6IHtpZDogbGlzdC5OVENfSUR9fX0+PGxpIHByb3BzPXtsaXN0fSBrZXk9e2xpc3QuTlRDX0lEfSBvbkNsaWNrPXsoKSA9PiBkaXNwYXRjaChnZXROdGMobGlzdC5OVENfSUQpKX0+e2xpc3QuTlRDX1RJVExFfTwvbGk+PC9MaW5rPlxyXG4gICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC8+XHJcbiAgICApXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBOb3RpY2VMaXN0OyJdLCJzb3VyY2VSb290IjoiIn0=