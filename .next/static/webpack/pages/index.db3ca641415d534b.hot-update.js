"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Price__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Price */ \"./pages/Price/index.tsx\");\n/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! wagmi */ \"./node_modules/wagmi/dist/index.js\");\n\nvar _s = $RefreshSig$();\n\n\nimpo;\n\nfunction Home() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"sell\"), tradeDirection = ref[0], setTradeDirection = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), finalize = ref1[0], setFinalize = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(), price = ref2[0], setPrice = ref2[1];\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(), quote = ref3[0], setQuote = ref3[1];\n    var address = (0,wagmi__WEBPACK_IMPORTED_MODULE_3__.useAccount)().address;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        className: \"flex min-h-screen flex-col items-center justify-between p-24\",\n        children: finalize && price ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(QuoteView, {\n            takerAddress: address,\n            price: price,\n            quote: quote,\n            setQuote: setQuote\n        }, void 0, false, {\n            fileName: \"/Users/godfrey/Documents/GitHub/dexswap/nrf-swapdex/pages/index.tsx\",\n            lineNumber: 20,\n            columnNumber: 9\n        }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Price__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n            takerAddress: address,\n            price: price,\n            setPrice: setPrice,\n            setFinalize: setFinalize\n        }, void 0, false, {\n            fileName: \"/Users/godfrey/Documents/GitHub/dexswap/nrf-swapdex/pages/index.tsx\",\n            lineNumber: 27,\n            columnNumber: 9\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/godfrey/Documents/GitHub/dexswap/nrf-swapdex/pages/index.tsx\",\n        lineNumber: 16,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"hNRKRrmmwO2a/+DG8Y4lBO/PzmI=\", false, function() {\n    return [\n        wagmi__WEBPACK_IMPORTED_MODULE_3__.useAccount\n    ];\n});\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBOztBQUFpQztBQUNEO0FBQ2hDRSxJQUFJO0FBRytCO0FBRXBCLFNBQVNFLElBQUksR0FBRzs7SUFDN0IsSUFBNENKLEdBQWdCLEdBQWhCQSwrQ0FBUSxDQUFDLE1BQU0sQ0FBQyxFQUFyREssY0FBYyxHQUF1QkwsR0FBZ0IsR0FBdkMsRUFBRU0saUJBQWlCLEdBQUlOLEdBQWdCLEdBQXBCO0lBQ3hDLElBQWdDQSxJQUFlLEdBQWZBLCtDQUFRLENBQUMsS0FBSyxDQUFDLEVBQXhDTyxRQUFRLEdBQWlCUCxJQUFlLEdBQWhDLEVBQUVRLFdBQVcsR0FBSVIsSUFBZSxHQUFuQjtJQUM1QixJQUEwQkEsSUFBcUMsR0FBckNBLCtDQUFRLEVBQTZCLEVBQXhEUyxLQUFLLEdBQWNULElBQXFDLEdBQW5ELEVBQUVVLFFBQVEsR0FBSVYsSUFBcUMsR0FBekM7SUFDdEIsSUFBMEJBLElBQVUsR0FBVkEsK0NBQVEsRUFBRSxFQUE3QlcsS0FBSyxHQUFjWCxJQUFVLEdBQXhCLEVBQUVZLFFBQVEsR0FBSVosSUFBVSxHQUFkO0lBQ3RCLElBQU0sT0FBUyxHQUFLRyxpREFBVSxFQUFFLENBQXhCVSxPQUFPO0lBRWYscUJBQ0UsOERBQUNDLE1BQUk7UUFDSEMsU0FBUyxFQUFHLDhEQUE0RDtrQkFFdkVSLFFBQVEsSUFBSUUsS0FBSyxpQkFDaEIsOERBQUNPLFNBQVM7WUFDUkMsWUFBWSxFQUFFSixPQUFPO1lBQ3JCSixLQUFLLEVBQUVBLEtBQUs7WUFDWkUsS0FBSyxFQUFFQSxLQUFLO1lBQ1pDLFFBQVEsRUFBRUEsUUFBUTs7Ozs7Z0JBQ2xCLGlCQUVGLDhEQUFDWCw4Q0FBUztZQUNSZ0IsWUFBWSxFQUFFSixPQUFPO1lBQ3JCSixLQUFLLEVBQUVBLEtBQUs7WUFDWkMsUUFBUSxFQUFFQSxRQUFRO1lBQ2xCRixXQUFXLEVBQUVBLFdBQVc7Ozs7O2dCQUN4Qjs7Ozs7WUFFQyxDQUNQO0FBQ0osQ0FBQztHQTVCdUJKLElBQUk7O1FBS05ELDZDQUFVOzs7QUFMUkMsS0FBQUEsSUFBSSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC50c3g/MDdmZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFByaWNlVmlldyBmcm9tIFwiLi9QcmljZVwiO1xuaW1wb1xuLy9pbXBvcnQgUXVvdGVWaWV3IGZyb20gXCIuL1F1b3RlL3Rlc3RcIjtcbmltcG9ydCB0eXBlIHsgUHJpY2VSZXNwb25zZSB9IGZyb20gXCIuL2FwaS90eXBlc1wiO1xuaW1wb3J0IHsgdXNlQWNjb3VudCB9IGZyb20gXCJ3YWdtaVwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICBjb25zdCBbdHJhZGVEaXJlY3Rpb24sIHNldFRyYWRlRGlyZWN0aW9uXSA9IHVzZVN0YXRlKFwic2VsbFwiKTtcbiAgY29uc3QgW2ZpbmFsaXplLCBzZXRGaW5hbGl6ZV0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtwcmljZSwgc2V0UHJpY2VdID0gdXNlU3RhdGU8UHJpY2VSZXNwb25zZSB8IHVuZGVmaW5lZD4oKTtcbiAgY29uc3QgW3F1b3RlLCBzZXRRdW90ZV0gPSB1c2VTdGF0ZSgpO1xuICBjb25zdCB7IGFkZHJlc3MgfSA9IHVzZUFjY291bnQoKTtcblxuICByZXR1cm4gKFxuICAgIDxtYWluXG4gICAgICBjbGFzc05hbWU9e2BmbGV4IG1pbi1oLXNjcmVlbiBmbGV4LWNvbCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIHAtMjRgfVxuICAgID5cbiAgICAgIHtmaW5hbGl6ZSAmJiBwcmljZSA/IChcbiAgICAgICAgPFF1b3RlVmlld1xuICAgICAgICAgIHRha2VyQWRkcmVzcz17YWRkcmVzc31cbiAgICAgICAgICBwcmljZT17cHJpY2V9XG4gICAgICAgICAgcXVvdGU9e3F1b3RlfVxuICAgICAgICAgIHNldFF1b3RlPXtzZXRRdW90ZX1cbiAgICAgICAgLz5cbiAgICAgICkgOiAoXG4gICAgICAgIDxQcmljZVZpZXdcbiAgICAgICAgICB0YWtlckFkZHJlc3M9e2FkZHJlc3N9XG4gICAgICAgICAgcHJpY2U9e3ByaWNlfVxuICAgICAgICAgIHNldFByaWNlPXtzZXRQcmljZX1cbiAgICAgICAgICBzZXRGaW5hbGl6ZT17c2V0RmluYWxpemV9XG4gICAgICAgIC8+XG4gICAgICApfVxuICAgIDwvbWFpbj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsIlByaWNlVmlldyIsImltcG8iLCJ1c2VBY2NvdW50IiwiSG9tZSIsInRyYWRlRGlyZWN0aW9uIiwic2V0VHJhZGVEaXJlY3Rpb24iLCJmaW5hbGl6ZSIsInNldEZpbmFsaXplIiwicHJpY2UiLCJzZXRQcmljZSIsInF1b3RlIiwic2V0UXVvdGUiLCJhZGRyZXNzIiwibWFpbiIsImNsYXNzTmFtZSIsIlF1b3RlVmlldyIsInRha2VyQWRkcmVzcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.tsx\n"));

/***/ })

});