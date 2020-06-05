webpackHotUpdate("static\\development\\pages\\noticeDetail.js",{

/***/ "./pages/noticeDetail.tsx":
/*!********************************!*\
  !*** ./pages/noticeDetail.tsx ***!
  \********************************/
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
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");



var _jsxFileName = "C:\\Users\\hyose\\Documents\\redux_typescript\\pages\\noticeDetail.tsx",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;

/*import {useSelector} from "react-redux";
import React from "react";
import axios from 'axios';

const noticeDetail = ({info}) => {

    const NtcId = useSelector(state => state.notice.data);

    console.log(NtcId)
    return (*/
{}
/*        <>
           <h1>
               {info.NTC_TITLE}
           </h1>
           <div>
               공지사항 내용
           </div>
           <div>
               {info.NTC_CONTENT}
           </div>
           {info.NTC_REG_DT}
           <div>
               <span>삭제</span> <span>수정</span>
           </div>

       </>
   )
};*/

/*

noticeDetail.getInitialProps = async ({query}) => {

    const response = await axios.get('http://15.165.161.162:8086/api/web/notice/NoticeInfo',{
        params: {
            NTC_ID : query.id
        }
    });
    return {
        info : response.data.data[0]
    }
};

export default noticeDetail;*/





function NoticeDetail(_ref) {
  _s();

  var info = _ref.info;
  var NtcId = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"])(function (state) {
    return state.notice.data;
  });
  console.log(NtcId);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx("h1", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 13
    }
  }, info.NTC_TITLE), __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 13
    }
  }, "\uACF5\uC9C0\uC0AC\uD56D \uB0B4\uC6A9"), __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 13
    }
  }, info.NTC_CONTENT), info.NTC_REG_DT, __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 13
    }
  }, __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 17
    }
  }, "\uC0AD\uC81C"), " ", __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 33
    }
  }, "\uC218\uC815")));
}

_s(NoticeDetail, "HWTaT6TVIqijN0OkSFXYaPu/dXA=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"]];
});

_c = NoticeDetail;

NoticeDetail.getInitialProps = /*#__PURE__*/function () {
  var _ref3 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(_ref2) {
    var query, response;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            query = _ref2.query;
            _context.next = 3;
            return axios__WEBPACK_IMPORTED_MODULE_3___default.a.get('http://15.165.161.162:8086/api/web/notice/NoticeInfo', {
              params: {
                NTC_ID: query.id
              }
            });

          case 3:
            response = _context.sent;
            return _context.abrupt("return", {
              info: response.data.data[0]
            });

          case 5:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x) {
    return _ref3.apply(this, arguments);
  };
}();

/* harmony default export */ __webpack_exports__["default"] = (NoticeDetail);

var _c;

$RefreshReg$(_c, "NoticeDetail");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9ub3RpY2VEZXRhaWwudHN4Il0sIm5hbWVzIjpbIk5vdGljZURldGFpbCIsImluZm8iLCJOdGNJZCIsInVzZVNlbGVjdG9yIiwic3RhdGUiLCJub3RpY2UiLCJkYXRhIiwiY29uc29sZSIsImxvZyIsIk5UQ19USVRMRSIsIk5UQ19DT05URU5UIiwiTlRDX1JFR19EVCIsImdldEluaXRpYWxQcm9wcyIsInF1ZXJ5IiwiYXhpb3MiLCJnZXQiLCJwYXJhbXMiLCJOVENfSUQiLCJpZCIsInJlc3BvbnNlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7OztBQVVBLENBaUJLO0FBakJKOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBa0JEOzs7Ozs7Ozs7Ozs7Ozs7O0FBZ0JBO0FBQ0E7QUFDQTs7QUFNQSxTQUFTQSxZQUFULE9BQXFDO0FBQUE7O0FBQUEsTUFBZEMsSUFBYyxRQUFkQSxJQUFjO0FBRWpDLE1BQU1DLEtBQUssR0FBR0MsK0RBQVcsQ0FBQyxVQUFDQyxLQUFEO0FBQUEsV0FBV0EsS0FBSyxDQUFDQyxNQUFOLENBQWFDLElBQXhCO0FBQUEsR0FBRCxDQUF6QjtBQUNBQyxTQUFPLENBQUNDLEdBQVIsQ0FBWU4sS0FBWjtBQUVBLFNBQ0ksbUVBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNLRCxJQUFJLENBQUNRLFNBRFYsQ0FESixFQUlJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNkNBSkosRUFPSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0tSLElBQUksQ0FBQ1MsV0FEVixDQVBKLEVBVUtULElBQUksQ0FBQ1UsVUFWVixFQVdJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQURKLE9BQ29CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBRHBCLENBWEosQ0FESjtBQW1CSDs7R0F4QlFYLFk7VUFFU0csdUQ7OztLQUZUSCxZOztBQTBCVEEsWUFBWSxDQUFDWSxlQUFiO0FBQUEsK0xBQStCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFnQkMsaUJBQWhCLFNBQWdCQSxLQUFoQjtBQUFBO0FBQUEsbUJBRUpDLDRDQUFLLENBQUNDLEdBQU4sQ0FBVSxzREFBVixFQUFpRTtBQUNwRkMsb0JBQU0sRUFBRTtBQUNKQyxzQkFBTSxFQUFHSixLQUFLLENBQUNLO0FBRFg7QUFENEUsYUFBakUsQ0FGSTs7QUFBQTtBQUVyQkMsb0JBRnFCO0FBQUEsNkNBT3BCO0FBQ0hsQixrQkFBSSxFQUFHa0IsUUFBUSxDQUFDYixJQUFULENBQWNBLElBQWQsQ0FBbUIsQ0FBbkI7QUFESixhQVBvQjs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUEvQjs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFZZU4sMkVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXG5vdGljZURldGFpbC5qcy40MDNjYTUxNDE3MTcwOGRiMTY5YS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyppbXBvcnQge3VzZVNlbGVjdG9yfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5cclxuY29uc3Qgbm90aWNlRGV0YWlsID0gKHtpbmZvfSkgPT4ge1xyXG5cclxuICAgIGNvbnN0IE50Y0lkID0gdXNlU2VsZWN0b3Ioc3RhdGUgPT4gc3RhdGUubm90aWNlLmRhdGEpO1xyXG5cclxuICAgIGNvbnNvbGUubG9nKE50Y0lkKVxyXG4gICAgcmV0dXJuICgqL1xyXG57LyogICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxoMT5cclxuICAgICAgICAgICAgICAgIHtpbmZvLk5UQ19USVRMRX1cclxuICAgICAgICAgICAgPC9oMT5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIOqzteyngOyCrO2VrSDrgrTsmqlcclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICB7aW5mby5OVENfQ09OVEVOVH1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIHtpbmZvLk5UQ19SRUdfRFR9XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8c3Bhbj7sgq3soJw8L3NwYW4+IDxzcGFuPuyImOyglTwvc3Bhbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG59OyovfVxyXG4vKlxyXG5cclxubm90aWNlRGV0YWlsLmdldEluaXRpYWxQcm9wcyA9IGFzeW5jICh7cXVlcnl9KSA9PiB7XHJcblxyXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5nZXQoJ2h0dHA6Ly8xNS4xNjUuMTYxLjE2Mjo4MDg2L2FwaS93ZWIvbm90aWNlL05vdGljZUluZm8nLHtcclxuICAgICAgICBwYXJhbXM6IHtcclxuICAgICAgICAgICAgTlRDX0lEIDogcXVlcnkuaWRcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgaW5mbyA6IHJlc3BvbnNlLmRhdGEuZGF0YVswXVxyXG4gICAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgbm90aWNlRGV0YWlsOyovXHJcblxyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcydcclxuaW1wb3J0IHsgdXNlU2VsZWN0b3J9IGZyb20gXCJyZWFjdC1yZWR1eFwiXHJcblxyXG50eXBlIFByb3BzID0ge1xyXG4gICAgaW5mbzogYW55W11cclxufVxyXG5cclxuZnVuY3Rpb24gTm90aWNlRGV0YWlsKHtpbmZvfTogUHJvcHMpIHtcclxuXHJcbiAgICBjb25zdCBOdGNJZCA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUubm90aWNlLmRhdGEpXHJcbiAgICBjb25zb2xlLmxvZyhOdGNJZClcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxoMT5cclxuICAgICAgICAgICAgICAgIHtpbmZvLk5UQ19USVRMRX1cclxuICAgICAgICAgICAgPC9oMT5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIOqzteyngOyCrO2VrSDrgrTsmqlcclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICB7aW5mby5OVENfQ09OVEVOVH1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIHtpbmZvLk5UQ19SRUdfRFR9XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8c3Bhbj7sgq3soJw8L3NwYW4+IDxzcGFuPuyImOyglTwvc3Bhbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG5cclxufVxyXG5cclxuTm90aWNlRGV0YWlsLmdldEluaXRpYWxQcm9wcyA9IGFzeW5jIGZ1bmN0aW9uKHtxdWVyeX0pIHtcclxuXHJcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLmdldCgnaHR0cDovLzE1LjE2NS4xNjEuMTYyOjgwODYvYXBpL3dlYi9ub3RpY2UvTm90aWNlSW5mbycse1xyXG4gICAgICAgIHBhcmFtczoge1xyXG4gICAgICAgICAgICBOVENfSUQgOiBxdWVyeS5pZFxyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBpbmZvIDogcmVzcG9uc2UuZGF0YS5kYXRhWzBdXHJcbiAgICB9XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBOb3RpY2VEZXRhaWwiXSwic291cmNlUm9vdCI6IiJ9