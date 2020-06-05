webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./containers/NoticeContainers.tsx":
false,

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_NoticeList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/NoticeList */ "./components/NoticeList.tsx");


var _jsxFileName = "C:\\Users\\hyose\\Documents\\redux_typescript\\pages\\index.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;
// import React from 'react';
// import axios from 'axios';
// import NoticeContainers from "../containers/NoticeContainers";
//
// const Index = ({lists}) => {
//
//     return (
//         <>
//             <NoticeContainers props={lists}/>
//         </>
//     )
// };


 // 배열이 가지는 항목의 값의 타입을 단언할 수 없다면 any를 사용

function Index(_ref) {
  var lists = _ref.lists;
  // return (
  //     <>
  //         {lists && lists.map(list => (
  //             <li key={list.NTC_ID} >{list.NTC_TITLE}</li>
  //         ))}
  //     </>
  // )
  return __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx(_components_NoticeList__WEBPACK_IMPORTED_MODULE_4__["default"], {
    props: lists,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 13
    }
  }));
}

_c = Index;
Index.getInitialProps = /*#__PURE__*/Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
  var response;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return axios__WEBPACK_IMPORTED_MODULE_3___default.a.get('http://15.165.161.162:8086/api/web/notice/NoticeList?PAGE=1');

        case 2:
          response = _context.sent;
          return _context.abrupt("return", {
            lists: response.data.data[0].list
          });

        case 4:
        case "end":
          return _context.stop();
      }
    }
  }, _callee);
}));
/* harmony default export */ __webpack_exports__["default"] = (Index);

var _c;

$RefreshReg$(_c, "Index");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC50c3giXSwibmFtZXMiOlsiSW5kZXgiLCJsaXN0cyIsImdldEluaXRpYWxQcm9wcyIsImF4aW9zIiwiZ2V0IiwicmVzcG9uc2UiLCJkYXRhIiwibGlzdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0NBR0E7O0FBS0EsU0FBU0EsS0FBVCxPQUFpQztBQUFBLE1BQWhCQyxLQUFnQixRQUFoQkEsS0FBZ0I7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUNJLG1FQUNJLE1BQUMsOERBQUQ7QUFBWSxTQUFLLEVBQUVBLEtBQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFESixDQURKO0FBTUg7O0tBZFFELEs7QUFlVEEsS0FBSyxDQUFDRSxlQUFOLGlNQUF3QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUNHQyw0Q0FBSyxDQUFDQyxHQUFOLENBQVUsNkRBQVYsQ0FESDs7QUFBQTtBQUNkQyxrQkFEYztBQUFBLDJDQUViO0FBQ0hKLGlCQUFLLEVBQUdJLFFBQVEsQ0FBQ0MsSUFBVCxDQUFjQSxJQUFkLENBQW1CLENBQW5CLEVBQXNCQztBQUQzQixXQUZhOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLENBQXhCO0FBUWVQLG9FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxpbmRleC5qcy44YmU3MDRkZjFhNWM0ODJkNGRjYi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuLy8gaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuLy8gaW1wb3J0IE5vdGljZUNvbnRhaW5lcnMgZnJvbSBcIi4uL2NvbnRhaW5lcnMvTm90aWNlQ29udGFpbmVyc1wiO1xyXG4vL1xyXG4vLyBjb25zdCBJbmRleCA9ICh7bGlzdHN9KSA9PiB7XHJcbi8vXHJcbi8vICAgICByZXR1cm4gKFxyXG4vLyAgICAgICAgIDw+XHJcbi8vICAgICAgICAgICAgIDxOb3RpY2VDb250YWluZXJzIHByb3BzPXtsaXN0c30vPlxyXG4vLyAgICAgICAgIDwvPlxyXG4vLyAgICAgKVxyXG4vLyB9O1xyXG5cclxuXHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IE5vdGljZUxpc3QgZnJvbSBcIi4uL2NvbXBvbmVudHMvTm90aWNlTGlzdFwiO1xyXG5cclxuLy8g67Cw7Je07J20IOqwgOyngOuKlCDtla3rqqnsnZgg6rCS7J2YIO2DgOyeheydhCDri6jslrjtlaAg7IiYIOyXhuuLpOuptCBhbnnrpbwg7IKs7JqpXHJcbnR5cGUgUHJvcHMgPSB7XHJcbiAgICBsaXN0czogYW55W11cclxufVxyXG5cclxuZnVuY3Rpb24gSW5kZXgoeyBsaXN0cyB9OiBQcm9wcykge1xyXG4gICAgLy8gcmV0dXJuIChcclxuICAgIC8vICAgICA8PlxyXG4gICAgLy8gICAgICAgICB7bGlzdHMgJiYgbGlzdHMubWFwKGxpc3QgPT4gKFxyXG4gICAgLy8gICAgICAgICAgICAgPGxpIGtleT17bGlzdC5OVENfSUR9ID57bGlzdC5OVENfVElUTEV9PC9saT5cclxuICAgIC8vICAgICAgICAgKSl9XHJcbiAgICAvLyAgICAgPC8+XHJcbiAgICAvLyApXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxOb3RpY2VMaXN0IHByb3BzPXtsaXN0c30vPlxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG5cclxufVxyXG5JbmRleC5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyBmdW5jdGlvbigpIHtcclxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MuZ2V0KCdodHRwOi8vMTUuMTY1LjE2MS4xNjI6ODA4Ni9hcGkvd2ViL25vdGljZS9Ob3RpY2VMaXN0P1BBR0U9MScpO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBsaXN0cyA6IHJlc3BvbnNlLmRhdGEuZGF0YVswXS5saXN0XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBJbmRleCJdLCJzb3VyY2VSb290IjoiIn0=