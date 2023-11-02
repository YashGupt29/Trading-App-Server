"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/login",{

/***/ "./src/pages/login.jsx":
/*!*****************************!*\
  !*** ./src/pages/login.jsx ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _utils_FirebaseConfig__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/utils/FirebaseConfig */ \"./src/utils/FirebaseConfig.js\");\n/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/auth */ \"./node_modules/firebase/auth/dist/esm/index.esm.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_icons_fc__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-icons/fc */ \"./node_modules/react-icons/fc/index.esm.js\");\n\n\n\n\n\n\nfunction login() {\n    const handleLogin = async ()=>{\n        const provider = new firebase_auth__WEBPACK_IMPORTED_MODULE_2__.GoogleAuthProvider();\n        const { user: { displayName: name , email , photoUrl: profileImage  }  } = await (0,firebase_auth__WEBPACK_IMPORTED_MODULE_2__.signInWithPopup)(_utils_FirebaseConfig__WEBPACK_IMPORTED_MODULE_1__.firebaseAuth, provider);\n        try {\n            if (email) {}\n        } catch (error) {\n            console.log(error);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex justify-center items-center bg-panel-header-background h-screen w-screen flex-col gap-6\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex  items-center justify-center gap-2 text-white\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {\n                        src: \"/whatsapp.gif\",\n                        alt: \"whatsApp\",\n                        height: 300,\n                        width: 300\n                    }, void 0, false, {\n                        fileName: \"/home/yash/full-stack/whatsAppclone/client/src/pages/login.jsx\",\n                        lineNumber: 23,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: \"text-7xl\",\n                        children: \"Whatsapp\"\n                    }, void 0, false, {\n                        fileName: \"/home/yash/full-stack/whatsAppclone/client/src/pages/login.jsx\",\n                        lineNumber: 24,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/yash/full-stack/whatsAppclone/client/src/pages/login.jsx\",\n                lineNumber: 22,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: \"flex items-center justify-center gap-7 bg-search-input-container-background p-5 rounded-lg hover:bg-gray-700\",\n                onClick: handleLogin,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_fc__WEBPACK_IMPORTED_MODULE_5__.FcGoogle, {\n                        className: \"text-4xl\"\n                    }, void 0, false, {\n                        fileName: \"/home/yash/full-stack/whatsAppclone/client/src/pages/login.jsx\",\n                        lineNumber: 31,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: \"text-white text-2xl\",\n                        children: \"Login With Google\"\n                    }, void 0, false, {\n                        fileName: \"/home/yash/full-stack/whatsAppclone/client/src/pages/login.jsx\",\n                        lineNumber: 32,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/yash/full-stack/whatsAppclone/client/src/pages/login.jsx\",\n                lineNumber: 26,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/yash/full-stack/whatsAppclone/client/src/pages/login.jsx\",\n        lineNumber: 21,\n        columnNumber: 5\n    }, this);\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (login);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvbG9naW4uanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQXNEO0FBQ2M7QUFDckM7QUFDTDtBQUNnQjtBQUUxQyxTQUFTTSxRQUFRO0lBQ2YsTUFBTUMsY0FBYyxVQUFZO1FBQzlCLE1BQU1DLFdBQVcsSUFBSVAsNkRBQWtCQTtRQUN2QyxNQUFNLEVBQ0pRLE1BQU0sRUFBRUMsYUFBYUMsS0FBSSxFQUFFQyxNQUFLLEVBQUVDLFVBQVVDLGFBQVksRUFBRSxHQUMzRCxHQUFHLE1BQU1aLDhEQUFlQSxDQUFDRiwrREFBWUEsRUFBRVE7UUFDeEMsSUFBSTtZQUNGLElBQUlJLE9BQU8sQ0FDWCxDQUFDO1FBQ0gsRUFBRSxPQUFPRyxPQUFPO1lBQ2RDLFFBQVFDLEdBQUcsQ0FBQ0Y7UUFDZDtJQUNGO0lBQ0EscUJBQ0UsOERBQUNHO1FBQUlDLFdBQVU7OzBCQUNiLDhEQUFDRDtnQkFBSUMsV0FBVTs7a0NBQ2IsOERBQUNoQixtREFBS0E7d0JBQUNpQixLQUFJO3dCQUFnQkMsS0FBSTt3QkFBV0MsUUFBUTt3QkFBS0MsT0FBTzs7Ozs7O2tDQUM5RCw4REFBQ0M7d0JBQUtMLFdBQVU7a0NBQVc7Ozs7Ozs7Ozs7OzswQkFFN0IsOERBQUNNO2dCQUNDTixXQUFVO2dCQUVWTyxTQUFTbkI7O2tDQUVULDhEQUFDRixvREFBUUE7d0JBQUNjLFdBQVU7Ozs7OztrQ0FDcEIsOERBQUNLO3dCQUFLTCxXQUFVO2tDQUFzQjs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSTlDO0FBRUEsK0RBQWViLEtBQUtBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2xvZ2luLmpzeD9jOTNmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGZpcmViYXNlQXV0aCB9IGZyb20gXCJAL3V0aWxzL0ZpcmViYXNlQ29uZmlnXCI7XG5pbXBvcnQgeyBHb29nbGVBdXRoUHJvdmlkZXIsIHNpZ25JbldpdGhQb3B1cCB9IGZyb20gXCJmaXJlYmFzZS9hdXRoXCI7XG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IEZjR29vZ2xlIH0gZnJvbSBcInJlYWN0LWljb25zL2ZjXCI7XG5cbmZ1bmN0aW9uIGxvZ2luKCkge1xuICBjb25zdCBoYW5kbGVMb2dpbiA9IGFzeW5jICgpID0+IHtcbiAgICBjb25zdCBwcm92aWRlciA9IG5ldyBHb29nbGVBdXRoUHJvdmlkZXIoKTtcbiAgICBjb25zdCB7XG4gICAgICB1c2VyOiB7IGRpc3BsYXlOYW1lOiBuYW1lLCBlbWFpbCwgcGhvdG9Vcmw6IHByb2ZpbGVJbWFnZSB9LFxuICAgIH0gPSBhd2FpdCBzaWduSW5XaXRoUG9wdXAoZmlyZWJhc2VBdXRoLCBwcm92aWRlcik7XG4gICAgdHJ5IHtcbiAgICAgIGlmIChlbWFpbCkge1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgfVxuICB9O1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgYmctcGFuZWwtaGVhZGVyLWJhY2tncm91bmQgaC1zY3JlZW4gdy1zY3JlZW4gZmxleC1jb2wgZ2FwLTZcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCAgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIGdhcC0yIHRleHQtd2hpdGVcIj5cbiAgICAgICAgPEltYWdlIHNyYz1cIi93aGF0c2FwcC5naWZcIiBhbHQ9XCJ3aGF0c0FwcFwiIGhlaWdodD17MzAwfSB3aWR0aD17MzAwfSAvPlxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LTd4bFwiPldoYXRzYXBwPC9zcGFuPlxuICAgICAgPC9kaXY+XG4gICAgICA8YnV0dG9uXG4gICAgICAgIGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIGdhcC03IGJnLXNlYXJjaC1pbnB1dC1jb250YWluZXItYmFja2dyb3VuZCBwLTUgcm91bmRlZC1sZ1xuICAgICAgIGhvdmVyOmJnLWdyYXktNzAwXCJcbiAgICAgICAgb25DbGljaz17aGFuZGxlTG9naW59XG4gICAgICA+XG4gICAgICAgIDxGY0dvb2dsZSBjbGFzc05hbWU9XCJ0ZXh0LTR4bFwiIC8+XG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtd2hpdGUgdGV4dC0yeGxcIj5Mb2dpbiBXaXRoIEdvb2dsZTwvc3Bhbj5cbiAgICAgIDwvYnV0dG9uPlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBsb2dpbjtcbiJdLCJuYW1lcyI6WyJmaXJlYmFzZUF1dGgiLCJHb29nbGVBdXRoUHJvdmlkZXIiLCJzaWduSW5XaXRoUG9wdXAiLCJJbWFnZSIsIlJlYWN0IiwiRmNHb29nbGUiLCJsb2dpbiIsImhhbmRsZUxvZ2luIiwicHJvdmlkZXIiLCJ1c2VyIiwiZGlzcGxheU5hbWUiLCJuYW1lIiwiZW1haWwiLCJwaG90b1VybCIsInByb2ZpbGVJbWFnZSIsImVycm9yIiwiY29uc29sZSIsImxvZyIsImRpdiIsImNsYXNzTmFtZSIsInNyYyIsImFsdCIsImhlaWdodCIsIndpZHRoIiwic3BhbiIsImJ1dHRvbiIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/login.jsx\n"));

/***/ })

});