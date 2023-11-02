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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _utils_FirebaseConfig__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/utils/FirebaseConfig */ \"./src/utils/FirebaseConfig.js\");\n/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/auth */ \"./node_modules/firebase/auth/dist/esm/index.esm.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_icons_fc__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-icons/fc */ \"./node_modules/react-icons/fc/index.esm.js\");\n\n\n\n\n\n\nfunction login() {\n    const handleLogin = async ()=>{\n        const provider = new firebase_auth__WEBPACK_IMPORTED_MODULE_2__.GoogleAuthProvider();\n        const { user: { displayName: name , email , photoURL  }  } = await (0,firebase_auth__WEBPACK_IMPORTED_MODULE_2__.signInWithPopup)(_utils_FirebaseConfig__WEBPACK_IMPORTED_MODULE_1__.firebaseAuth, provider);\n        console.log({\n            user\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex justify-center items-center bg-panel-header-background h-screen w-screen flex-col gap-6\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex  items-center justify-center gap-2 text-white\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {\n                        src: \"/whatsapp.gif\",\n                        alt: \"whatsApp\",\n                        height: 300,\n                        width: 300\n                    }, void 0, false, {\n                        fileName: \"/home/yash/full-stack/whatsAppclone/client/src/pages/login.jsx\",\n                        lineNumber: 18,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: \"text-7xl\",\n                        children: \"Whatsapp\"\n                    }, void 0, false, {\n                        fileName: \"/home/yash/full-stack/whatsAppclone/client/src/pages/login.jsx\",\n                        lineNumber: 19,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/yash/full-stack/whatsAppclone/client/src/pages/login.jsx\",\n                lineNumber: 17,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: \"flex items-center justify-center gap-7 bg-search-input-container-background p-5 rounded-lg hover:bg-gray-700\",\n                onClick: handleLogin,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_fc__WEBPACK_IMPORTED_MODULE_5__.FcGoogle, {\n                        className: \"text-4xl\"\n                    }, void 0, false, {\n                        fileName: \"/home/yash/full-stack/whatsAppclone/client/src/pages/login.jsx\",\n                        lineNumber: 26,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: \"text-white text-2xl\",\n                        children: \"Login With Google\"\n                    }, void 0, false, {\n                        fileName: \"/home/yash/full-stack/whatsAppclone/client/src/pages/login.jsx\",\n                        lineNumber: 27,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/yash/full-stack/whatsAppclone/client/src/pages/login.jsx\",\n                lineNumber: 21,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/yash/full-stack/whatsAppclone/client/src/pages/login.jsx\",\n        lineNumber: 16,\n        columnNumber: 5\n    }, this);\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (login);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvbG9naW4uanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQXNEO0FBQ2M7QUFDckM7QUFDTDtBQUNnQjtBQUUxQyxTQUFTTSxRQUFRO0lBQ2YsTUFBTUMsY0FBYyxVQUFZO1FBQzlCLE1BQU1DLFdBQVcsSUFBSVAsNkRBQWtCQTtRQUN2QyxNQUFNLEVBQ0pRLE1BQU0sRUFBRUMsYUFBYUMsS0FBSSxFQUFFQyxNQUFLLEVBQUVDLFNBQVEsRUFBRSxHQUM3QyxHQUFHLE1BQU1YLDhEQUFlQSxDQUFDRiwrREFBWUEsRUFBRVE7UUFDeENNLFFBQVFDLEdBQUcsQ0FBQztZQUFFTjtRQUFLO0lBQ3JCO0lBQ0EscUJBQ0UsOERBQUNPO1FBQUlDLFdBQVU7OzBCQUNiLDhEQUFDRDtnQkFBSUMsV0FBVTs7a0NBQ2IsOERBQUNkLG1EQUFLQTt3QkFBQ2UsS0FBSTt3QkFBZ0JDLEtBQUk7d0JBQVdDLFFBQVE7d0JBQUtDLE9BQU87Ozs7OztrQ0FDOUQsOERBQUNDO3dCQUFLTCxXQUFVO2tDQUFXOzs7Ozs7Ozs7Ozs7MEJBRTdCLDhEQUFDTTtnQkFDQ04sV0FBVTtnQkFFVk8sU0FBU2pCOztrQ0FFVCw4REFBQ0Ysb0RBQVFBO3dCQUFDWSxXQUFVOzs7Ozs7a0NBQ3BCLDhEQUFDSzt3QkFBS0wsV0FBVTtrQ0FBc0I7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUk5QztBQUVBLCtEQUFlWCxLQUFLQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy9sb2dpbi5qc3g/YzkzZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBmaXJlYmFzZUF1dGggfSBmcm9tIFwiQC91dGlscy9GaXJlYmFzZUNvbmZpZ1wiO1xuaW1wb3J0IHsgR29vZ2xlQXV0aFByb3ZpZGVyLCBzaWduSW5XaXRoUG9wdXAgfSBmcm9tIFwiZmlyZWJhc2UvYXV0aFwiO1xuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBGY0dvb2dsZSB9IGZyb20gXCJyZWFjdC1pY29ucy9mY1wiO1xuXG5mdW5jdGlvbiBsb2dpbigpIHtcbiAgY29uc3QgaGFuZGxlTG9naW4gPSBhc3luYyAoKSA9PiB7XG4gICAgY29uc3QgcHJvdmlkZXIgPSBuZXcgR29vZ2xlQXV0aFByb3ZpZGVyKCk7XG4gICAgY29uc3Qge1xuICAgICAgdXNlcjogeyBkaXNwbGF5TmFtZTogbmFtZSwgZW1haWwsIHBob3RvVVJMIH0sXG4gICAgfSA9IGF3YWl0IHNpZ25JbldpdGhQb3B1cChmaXJlYmFzZUF1dGgsIHByb3ZpZGVyKTtcbiAgICBjb25zb2xlLmxvZyh7IHVzZXIgfSk7XG4gIH07XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciBiZy1wYW5lbC1oZWFkZXItYmFja2dyb3VuZCBoLXNjcmVlbiB3LXNjcmVlbiBmbGV4LWNvbCBnYXAtNlwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4ICBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgZ2FwLTIgdGV4dC13aGl0ZVwiPlxuICAgICAgICA8SW1hZ2Ugc3JjPVwiL3doYXRzYXBwLmdpZlwiIGFsdD1cIndoYXRzQXBwXCIgaGVpZ2h0PXszMDB9IHdpZHRoPXszMDB9IC8+XG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtN3hsXCI+V2hhdHNhcHA8L3NwYW4+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxidXR0b25cbiAgICAgICAgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgZ2FwLTcgYmctc2VhcmNoLWlucHV0LWNvbnRhaW5lci1iYWNrZ3JvdW5kIHAtNSByb3VuZGVkLWxnXG4gICAgICAgaG92ZXI6YmctZ3JheS03MDBcIlxuICAgICAgICBvbkNsaWNrPXtoYW5kbGVMb2dpbn1cbiAgICAgID5cbiAgICAgICAgPEZjR29vZ2xlIGNsYXNzTmFtZT1cInRleHQtNHhsXCIgLz5cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC13aGl0ZSB0ZXh0LTJ4bFwiPkxvZ2luIFdpdGggR29vZ2xlPC9zcGFuPlxuICAgICAgPC9idXR0b24+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGxvZ2luO1xuIl0sIm5hbWVzIjpbImZpcmViYXNlQXV0aCIsIkdvb2dsZUF1dGhQcm92aWRlciIsInNpZ25JbldpdGhQb3B1cCIsIkltYWdlIiwiUmVhY3QiLCJGY0dvb2dsZSIsImxvZ2luIiwiaGFuZGxlTG9naW4iLCJwcm92aWRlciIsInVzZXIiLCJkaXNwbGF5TmFtZSIsIm5hbWUiLCJlbWFpbCIsInBob3RvVVJMIiwiY29uc29sZSIsImxvZyIsImRpdiIsImNsYXNzTmFtZSIsInNyYyIsImFsdCIsImhlaWdodCIsIndpZHRoIiwic3BhbiIsImJ1dHRvbiIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/login.jsx\n"));

/***/ })

});