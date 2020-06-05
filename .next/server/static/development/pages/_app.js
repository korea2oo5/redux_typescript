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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./modules/index.tsx":
/*!***************************!*\
  !*** ./modules/index.tsx ***!
  \***************************/
/*! exports provided: default, wrapper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "wrapper", function() { return wrapper; });
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-redux-wrapper */ "next-redux-wrapper");
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-thunk */ "redux-thunk");
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux_thunk__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _notice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./notice */ "./modules/notice.ts");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



 // 액션 & 리듀서가 추가될때마다 설정

 // 미들웨어는 액션이 dispatch 되어서 리듀서에서 이를 처리하기전에 사전에 지정된 작업들을 설정
// 액션과 리듀서 사이의 중간자
// 미들웨어 설정
// composeWithDevTools - 리덕스 툴
// redux-thunk 비동기 작업 처리할 때 가장 기본적으로 사용하는 미들웨어
// thunk - 특정 작업을 나중에 하도록 미루기 위해서 함수형태로 감싼 것을 칭함

const bindMiddleware = middleware => {
  if (true) {
    const {
      composeWithDevTools
    } = __webpack_require__(/*! redux-devtools-extension */ "redux-devtools-extension");

    return composeWithDevTools(Object(redux__WEBPACK_IMPORTED_MODULE_0__["applyMiddleware"])(...middleware));
  }

  return Object(redux__WEBPACK_IMPORTED_MODULE_0__["applyMiddleware"])(...middleware);
}; // 액션 & 리듀서 추가하는 곳(하나의 리듀서로 통합하기 위한 작업)


const rootReducer = Object(redux__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])({
  notice: _notice__WEBPACK_IMPORTED_MODULE_3__["default"]
});
/* harmony default export */ __webpack_exports__["default"] = (rootReducer);

// TODO 알아보기
const reducer = (state, action) => {
  if (action.type === next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1__["HYDRATE"]) {
    const nextState = _objectSpread(_objectSpread({}, state), action.payload);

    if (state.data) nextState.data = state.data;
    return nextState;
  } else {
    return rootReducer(state, action);
  }
};

const initStore = () => {
  // 여러 reducer를 combineReducers에 하나로 통합해서 담고 또 그것을 createStore에 전달해준다.
  return Object(redux__WEBPACK_IMPORTED_MODULE_0__["createStore"])(reducer, bindMiddleware([redux_thunk__WEBPACK_IMPORTED_MODULE_2___default.a]));
};

const wrapper = Object(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1__["createWrapper"])(initStore);

/***/ }),

/***/ "./modules/notice.ts":
/*!***************************!*\
  !*** ./modules/notice.ts ***!
  \***************************/
/*! exports provided: getNtc, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getNtc", function() { return getNtc; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return reducer; });
// export const ntc = {NTCID: 'notice/NTCID'};
//
// export const getNtc = data => ({
//     type: ntc.NTCID,
//     data
// });
//
// const idInitialState = {
//     data : 0,
// }
//
// export default function reducer(state = idInitialState, action) {
//     switch (action.type) {
//         case ntc.NTCID:
//             return {
//                 ...state,
//                 data: action.data
//             }
//         default:
//             return state
//
//     }
// }
const NTCID = 'notice/NTCID';
const getNtc = data => ({
  type: NTCID,
  data
});
const idInitialState = {
  data: 0
};
function reducer(state = idInitialState, action) {
  switch (action.type) {
    case NTCID:
      return {
        data: action.data
      };

    default:
      return state;
  }
}

/***/ }),

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _modules__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../modules */ "./modules/index.tsx");
var _jsxFileName = "C:\\Users\\hyose\\Documents\\redux_typescript\\pages\\_app.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



function WraapedApp({
  Component,
  pageProps
}) {
  return __jsx(Component, _extends({}, pageProps, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 12
    }
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (_modules__WEBPACK_IMPORTED_MODULE_1__["wrapper"].withRedux(WraapedApp));

/***/ }),

/***/ 0:
/*!*****************************************!*\
  !*** multi private-next-pages/_app.tsx ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.tsx */"./pages/_app.tsx");


/***/ }),

/***/ "next-redux-wrapper":
/*!*************************************!*\
  !*** external "next-redux-wrapper" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-redux-wrapper");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ "redux-devtools-extension":
/*!*******************************************!*\
  !*** external "redux-devtools-extension" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-devtools-extension");

/***/ }),

/***/ "redux-thunk":
/*!******************************!*\
  !*** external "redux-thunk" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9pbmRleC50c3giLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9ub3RpY2UudHMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvX2FwcC50c3giLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC1yZWR1eC13cmFwcGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlZHV4LWRldnRvb2xzLWV4dGVuc2lvblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlZHV4LXRodW5rXCIiXSwibmFtZXMiOlsiYmluZE1pZGRsZXdhcmUiLCJtaWRkbGV3YXJlIiwiY29tcG9zZVdpdGhEZXZUb29scyIsInJlcXVpcmUiLCJhcHBseU1pZGRsZXdhcmUiLCJyb290UmVkdWNlciIsImNvbWJpbmVSZWR1Y2VycyIsIm5vdGljZSIsInJlZHVjZXIiLCJzdGF0ZSIsImFjdGlvbiIsInR5cGUiLCJIWURSQVRFIiwibmV4dFN0YXRlIiwicGF5bG9hZCIsImRhdGEiLCJpbml0U3RvcmUiLCJjcmVhdGVTdG9yZSIsInRodW5rTWlkZGxld2FyZSIsIndyYXBwZXIiLCJjcmVhdGVXcmFwcGVyIiwiTlRDSUQiLCJnZXROdGMiLCJpZEluaXRpYWxTdGF0ZSIsIldyYWFwZWRBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJ3aXRoUmVkdXgiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4RkE7QUFDQTtDQUVBOztDQUdBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQSxNQUFNQSxjQUFjLEdBQUlDLFVBQUQsSUFBZ0I7QUFDbkMsWUFBMkM7QUFDdkMsVUFBTTtBQUFFQztBQUFGLFFBQTBCQyxtQkFBTyxDQUFDLDBEQUFELENBQXZDOztBQUNBLFdBQU9ELG1CQUFtQixDQUFDRSw2REFBZSxDQUFDLEdBQUdILFVBQUosQ0FBaEIsQ0FBMUI7QUFDSDs7QUFDRCxTQUFPRyw2REFBZSxDQUFDLEdBQUdILFVBQUosQ0FBdEI7QUFDSCxDQU5ELEMsQ0FPQTs7O0FBQ0EsTUFBTUksV0FBVyxHQUFHQyw2REFBZSxDQUFDO0FBQ2hDQyx5REFBTUE7QUFEMEIsQ0FBRCxDQUFuQztBQUllRiwwRUFBZjs7QUFJQTtBQUNBLE1BQU1HLE9BQU8sR0FBRyxDQUFDQyxLQUFELEVBQVFDLE1BQVIsS0FBbUI7QUFDL0IsTUFBSUEsTUFBTSxDQUFDQyxJQUFQLEtBQWdCQywwREFBcEIsRUFBNkI7QUFDekIsVUFBTUMsU0FBUyxtQ0FDUkosS0FEUSxHQUVSQyxNQUFNLENBQUNJLE9BRkMsQ0FBZjs7QUFJQSxRQUFJTCxLQUFLLENBQUNNLElBQVYsRUFBZ0JGLFNBQVMsQ0FBQ0UsSUFBVixHQUFpQk4sS0FBSyxDQUFDTSxJQUF2QjtBQUNoQixXQUFPRixTQUFQO0FBQ0gsR0FQRCxNQU9PO0FBQ0gsV0FBT1IsV0FBVyxDQUFDSSxLQUFELEVBQVFDLE1BQVIsQ0FBbEI7QUFDSDtBQUNKLENBWEQ7O0FBYUEsTUFBTU0sU0FBUyxHQUFHLE1BQU07QUFDcEI7QUFDQSxTQUFPQyx5REFBVyxDQUFDVCxPQUFELEVBQVVSLGNBQWMsQ0FBQyxDQUFDa0Isa0RBQUQsQ0FBRCxDQUF4QixDQUFsQjtBQUNILENBSEQ7O0FBS08sTUFBTUMsT0FBTyxHQUFHQyx3RUFBYSxDQUFDSixTQUFELENBQTdCLEM7Ozs7Ozs7Ozs7OztBQ2hEUDtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTUssS0FBSyxHQUFHLGNBQWQ7QUFFTyxNQUFNQyxNQUFNLEdBQUlQLElBQUQsS0FBd0M7QUFDMURKLE1BQUksRUFBRVUsS0FEb0Q7QUFFMUROO0FBRjBELENBQXhDLENBQWY7QUFXUCxNQUFNUSxjQUF1QixHQUFHO0FBQzVCUixNQUFJLEVBQUU7QUFEc0IsQ0FBaEM7QUFHZSxTQUFTUCxPQUFULENBQWlCQyxLQUFjLEdBQUdjLGNBQWxDLEVBQWtEYixNQUFsRCxFQUFvRTtBQUMvRSxVQUFRQSxNQUFNLENBQUNDLElBQWY7QUFDSSxTQUFLVSxLQUFMO0FBQ0ksYUFBTztBQUFFTixZQUFJLEVBQUdMLE1BQU0sQ0FBQ0s7QUFBaEIsT0FBUDs7QUFDSjtBQUNJLGFBQU9OLEtBQVA7QUFKUjtBQU1ILEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3Q0Q7O0FBRUEsU0FBU2UsVUFBVCxDQUFvQjtBQUFFQyxXQUFGO0FBQWFDO0FBQWIsQ0FBcEIsRUFBd0Q7QUFDcEQsU0FBTyxNQUFDLFNBQUQsZUFBZUEsU0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQVA7QUFDSDs7QUFFY1AsK0dBQU8sQ0FBQ1EsU0FBUixDQUFrQkgsVUFBbEIsQ0FBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1BBLCtDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLHFEOzs7Ozs7Ozs7OztBQ0FBLHdDIiwiZmlsZSI6InN0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxfYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi8uLi8uLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuIiwiaW1wb3J0IHsgY3JlYXRlU3RvcmUsIGFwcGx5TWlkZGxld2FyZSwgY29tYmluZVJlZHVjZXJzIH0gZnJvbSAncmVkdXgnXHJcbmltcG9ydCB7IEhZRFJBVEUsIGNyZWF0ZVdyYXBwZXIgfSBmcm9tICduZXh0LXJlZHV4LXdyYXBwZXInXHJcbmltcG9ydCB0aHVua01pZGRsZXdhcmUgZnJvbSAncmVkdXgtdGh1bmsnXHJcbi8vIOyVoeyFmCAmIOumrOuTgOyEnOqwgCDstpTqsIDrkKDrlYzrp4jri6Qg7ISk7KCVXHJcbmltcG9ydCBub3RpY2UgZnJvbSAnLi9ub3RpY2UnXHJcblxyXG4vLyDrr7jrk6Tsm6jslrTripQg7JWh7IWY7J20IGRpc3BhdGNoIOuQmOyWtOyEnCDrpqzrk4DshJzsl5DshJwg7J2066W8IOyymOumrO2VmOq4sOyghOyXkCDsgqzsoITsl5Ag7KeA7KCV65CcIOyekeyXheuTpOydhCDshKTsoJVcclxuLy8g7JWh7IWY6rO8IOumrOuTgOyEnCDsgqzsnbTsnZgg7KSR6rCE7J6QXHJcblxyXG4vLyDrr7jrk6Tsm6jslrQg7ISk7KCVXHJcbi8vIGNvbXBvc2VXaXRoRGV2VG9vbHMgLSDrpqzrjZXsiqQg7Yi0XHJcbi8vIHJlZHV4LXRodW5rIOu5hOuPmeq4sCDsnpHsl4Ug7LKY66as7ZWgIOuVjCDqsIDsnqUg6riw67O47KCB7Jy866GcIOyCrOyaqe2VmOuKlCDrr7jrk6Tsm6jslrRcclxuLy8gdGh1bmsgLSDtirnsoJUg7J6R7JeF7J2EIOuCmOykkeyXkCDtlZjrj4TroZ0g66+466Oo6riwIOychO2VtOyEnCDtlajsiJjtmJXtg5zroZwg6rCQ7Iu8IOqyg+ydhCDsua3tlahcclxuY29uc3QgYmluZE1pZGRsZXdhcmUgPSAobWlkZGxld2FyZSkgPT4ge1xyXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcclxuICAgICAgICBjb25zdCB7IGNvbXBvc2VXaXRoRGV2VG9vbHMgfSA9IHJlcXVpcmUoJ3JlZHV4LWRldnRvb2xzLWV4dGVuc2lvbicpXHJcbiAgICAgICAgcmV0dXJuIGNvbXBvc2VXaXRoRGV2VG9vbHMoYXBwbHlNaWRkbGV3YXJlKC4uLm1pZGRsZXdhcmUpKVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGFwcGx5TWlkZGxld2FyZSguLi5taWRkbGV3YXJlKVxyXG59O1xyXG4vLyDslaHshZggJiDrpqzrk4DshJwg7LaU6rCA7ZWY64qUIOqzsyjtlZjrgpjsnZgg66as65OA7ISc66GcIO2Gte2Vqe2VmOq4sCDsnITtlZwg7J6R7JeFKVxyXG5jb25zdCByb290UmVkdWNlciA9IGNvbWJpbmVSZWR1Y2Vycyh7XHJcbiAgICBub3RpY2VcclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCByb290UmVkdWNlclxyXG5cclxuZXhwb3J0IHR5cGUgUm9vdFN0YXRlID0gUmV0dXJuVHlwZTx0eXBlb2Ygcm9vdFJlZHVjZXI+XHJcblxyXG4vLyBUT0RPIOyVjOyVhOuztOq4sFxyXG5jb25zdCByZWR1Y2VyID0gKHN0YXRlLCBhY3Rpb24pID0+IHtcclxuICAgIGlmIChhY3Rpb24udHlwZSA9PT0gSFlEUkFURSkge1xyXG4gICAgICAgIGNvbnN0IG5leHRTdGF0ZSA9IHtcclxuICAgICAgICAgICAgLi4uc3RhdGUsIC8vIHVzZSBwcmV2aW91cyBzdGF0ZVxyXG4gICAgICAgICAgICAuLi5hY3Rpb24ucGF5bG9hZCwgLy8gYXBwbHkgZGVsdGEgZnJvbSBoeWRyYXRpb25cclxuICAgICAgICB9O1xyXG4gICAgICAgIGlmIChzdGF0ZS5kYXRhKSBuZXh0U3RhdGUuZGF0YSA9IHN0YXRlLmRhdGFcclxuICAgICAgICByZXR1cm4gbmV4dFN0YXRlXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJldHVybiByb290UmVkdWNlcihzdGF0ZSwgYWN0aW9uKVxyXG4gICAgfVxyXG59O1xyXG5cclxuY29uc3QgaW5pdFN0b3JlID0gKCkgPT4ge1xyXG4gICAgLy8g7Jes65+sIHJlZHVjZXLrpbwgY29tYmluZVJlZHVjZXJz7JeQIO2VmOuCmOuhnCDthrXtlantlbTshJwg64u06rOgIOuYkCDqt7jqsoPsnYQgY3JlYXRlU3RvcmXsl5Ag7KCE64us7ZW07KSA64ukLlxyXG4gICAgcmV0dXJuIGNyZWF0ZVN0b3JlKHJlZHVjZXIsIGJpbmRNaWRkbGV3YXJlKFt0aHVua01pZGRsZXdhcmVdKSlcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCB3cmFwcGVyID0gY3JlYXRlV3JhcHBlcihpbml0U3RvcmUpIiwiLy8gZXhwb3J0IGNvbnN0IG50YyA9IHtOVENJRDogJ25vdGljZS9OVENJRCd9O1xyXG4vL1xyXG4vLyBleHBvcnQgY29uc3QgZ2V0TnRjID0gZGF0YSA9PiAoe1xyXG4vLyAgICAgdHlwZTogbnRjLk5UQ0lELFxyXG4vLyAgICAgZGF0YVxyXG4vLyB9KTtcclxuLy9cclxuLy8gY29uc3QgaWRJbml0aWFsU3RhdGUgPSB7XHJcbi8vICAgICBkYXRhIDogMCxcclxuLy8gfVxyXG4vL1xyXG4vLyBleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZWR1Y2VyKHN0YXRlID0gaWRJbml0aWFsU3RhdGUsIGFjdGlvbikge1xyXG4vLyAgICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4vLyAgICAgICAgIGNhc2UgbnRjLk5UQ0lEOlxyXG4vLyAgICAgICAgICAgICByZXR1cm4ge1xyXG4vLyAgICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbi8vICAgICAgICAgICAgICAgICBkYXRhOiBhY3Rpb24uZGF0YVxyXG4vLyAgICAgICAgICAgICB9XHJcbi8vICAgICAgICAgZGVmYXVsdDpcclxuLy8gICAgICAgICAgICAgcmV0dXJuIHN0YXRlXHJcbi8vXHJcbi8vICAgICB9XHJcbi8vIH1cclxuY29uc3QgTlRDSUQgPSAnbm90aWNlL05UQ0lEJyBhcyBjb25zdFxyXG5cclxuZXhwb3J0IGNvbnN0IGdldE50YyA9IChkYXRhOiBzdHJpbmcgfCBudW1iZXIgfCB1bmRlZmluZWQpID0+ICh7XHJcbiAgICB0eXBlOiBOVENJRCxcclxuICAgIGRhdGFcclxufSlcclxuXHJcbnR5cGUgTnRjQWN0aW9uID0gUmV0dXJuVHlwZTx0eXBlb2YgZ2V0TnRjPlxyXG5cclxudHlwZSBJZFN0YXRlID0ge1xyXG4gICAgZGF0YTogbnVtYmVyXHJcbn1cclxuXHJcbmNvbnN0IGlkSW5pdGlhbFN0YXRlOiBJZFN0YXRlID0ge1xyXG4gICAgZGF0YTogMFxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlZHVjZXIoc3RhdGU6IElkU3RhdGUgPSBpZEluaXRpYWxTdGF0ZSwgYWN0aW9uOiBOdGNBY3Rpb24pe1xyXG4gICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgICAgIGNhc2UgTlRDSUQ6XHJcbiAgICAgICAgICAgIHJldHVybiB7IGRhdGEgOiBhY3Rpb24uZGF0YSB9XHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlXHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBBcHBQcm9wcyB9IGZyb20gJ25leHQvYXBwJ1xyXG5pbXBvcnQge3dyYXBwZXJ9IGZyb20gJy4uL21vZHVsZXMnXHJcblxyXG5mdW5jdGlvbiBXcmFhcGVkQXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfTogQXBwUHJvcHMpIHtcclxuICAgIHJldHVybiA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdyYXBwZXIud2l0aFJlZHV4KFdyYWFwZWRBcHApOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQtcmVkdXgtd3JhcHBlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eC1kZXZ0b29scy1leHRlbnNpb25cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXgtdGh1bmtcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==