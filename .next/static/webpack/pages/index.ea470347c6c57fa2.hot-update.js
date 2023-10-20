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

/***/ "./pages/Quote/index.tsx":
/*!*******************************!*\
  !*** ./pages/Quote/index.tsx ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ QuoteView; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! swr */ \"./node_modules/swr/core/dist/index.mjs\");\n/* harmony import */ var _lib_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../lib/constants */ \"./lib/constants.ts\");\n/* harmony import */ var _Price__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Price */ \"./pages/Price/index.tsx\");\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ethers */ \"./node_modules/ethers/lib.esm/index.js\");\n/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! wagmi */ \"./node_modules/wagmi/dist/index.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction QuoteView(param) {\n    var price = param.price, quote = param.quote, setQuote = param.setQuote, takerAddress = param.takerAddress;\n    _s();\n    // fetch quote here\n    var address = (0,wagmi__WEBPACK_IMPORTED_MODULE_4__.useAccount)().address;\n    var ref = (0,swr__WEBPACK_IMPORTED_MODULE_1__[\"default\"])([\n        \"/api/quote\",\n        {\n            sellToken: price.sellTokenAddress,\n            buyToken: price.buyTokenAddress,\n            sellAmount: price.sellAmount,\n            // buyAmount: TODO if we want to support buys,\n            takerAddress: takerAddress\n        }, \n    ], _Price__WEBPACK_IMPORTED_MODULE_3__.fetcher, {\n        onSuccess: function(data) {\n            setQuote(data);\n            console.log(\"quote\", data);\n        }\n    }), isLoadingPrice = ref.isLoading;\n    var config = (0,wagmi__WEBPACK_IMPORTED_MODULE_4__.usePrepareSendTransaction)({\n        to: quote === null || quote === void 0 ? void 0 : quote.to,\n        data: quote === null || quote === void 0 ? void 0 : quote.data\n    }).config;\n    var sendTransaction = (0,wagmi__WEBPACK_IMPORTED_MODULE_4__.useSendTransaction)(config).sendTransaction;\n    if (!quote) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: \"Getting best quote...\"\n        }, void 0, false, {\n            fileName: \"/Users/godfrey/Documents/GitHub/dexswap/nrf-swapdex/pages/Quote/index.tsx\",\n            lineNumber: 60,\n            columnNumber: 12\n        }, this);\n    }\n    var sellTokenInfo = _lib_constants__WEBPACK_IMPORTED_MODULE_2__.POLYGON_TOKENS_BY_ADDRESS[price.sellTokenAddress.toLowerCase()];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"p-3 mx-auto max-w-screen-sm \",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"bg-slate-200 dark:bg-slate-800 p-4 rounded-sm mb-3\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"text-xl mb-2 text-white\",\n                                children: \"You pay\"\n                            }, void 0, false, {\n                                fileName: \"/Users/godfrey/Documents/GitHub/dexswap/nrf-swapdex/pages/Quote/index.tsx\",\n                                lineNumber: 70,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex items-center text-lg sm:text-3xl text-white\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                        alt: sellTokenInfo.symbol,\n                                        className: \"h-9 w-9 mr-2 rounded-md\",\n                                        src: sellTokenInfo.logoURI\n                                    }, void 0, false, {\n                                        fileName: \"/Users/godfrey/Documents/GitHub/dexswap/nrf-swapdex/pages/Quote/index.tsx\",\n                                        lineNumber: 72,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        children: (0,ethers__WEBPACK_IMPORTED_MODULE_5__.formatUnits)(quote.sellAmount, sellTokenInfo.decimals)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/godfrey/Documents/GitHub/dexswap/nrf-swapdex/pages/Quote/index.tsx\",\n                                        lineNumber: 77,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"ml-2\",\n                                        children: sellTokenInfo.symbol\n                                    }, void 0, false, {\n                                        fileName: \"/Users/godfrey/Documents/GitHub/dexswap/nrf-swapdex/pages/Quote/index.tsx\",\n                                        lineNumber: 78,\n                                        columnNumber: 13\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/godfrey/Documents/GitHub/dexswap/nrf-swapdex/pages/Quote/index.tsx\",\n                                lineNumber: 71,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/godfrey/Documents/GitHub/dexswap/nrf-swapdex/pages/Quote/index.tsx\",\n                        lineNumber: 69,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"bg-slate-200 dark:bg-slate-800 p-4 rounded-sm mb-3\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"text-xl mb-2 text-white\",\n                                children: \"You receive\"\n                            }, void 0, false, {\n                                fileName: \"/Users/godfrey/Documents/GitHub/dexswap/nrf-swapdex/pages/Quote/index.tsx\",\n                                lineNumber: 83,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex items-center text-lg sm:text-3xl text-white\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                        alt: _lib_constants__WEBPACK_IMPORTED_MODULE_2__.POLYGON_TOKENS_BY_ADDRESS[price.buyTokenAddress.toLowerCase()].symbol,\n                                        className: \"h-9 w-9 mr-2 rounded-md\",\n                                        src: _lib_constants__WEBPACK_IMPORTED_MODULE_2__.POLYGON_TOKENS_BY_ADDRESS[price.buyTokenAddress.toLowerCase()].logoURI\n                                    }, void 0, false, {\n                                        fileName: \"/Users/godfrey/Documents/GitHub/dexswap/nrf-swapdex/pages/Quote/index.tsx\",\n                                        lineNumber: 85,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        children: (0,ethers__WEBPACK_IMPORTED_MODULE_5__.formatUnits)(quote.buyAmount, _lib_constants__WEBPACK_IMPORTED_MODULE_2__.POLYGON_TOKENS_BY_ADDRESS[price.buyTokenAddress.toLowerCase()].decimals)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/godfrey/Documents/GitHub/dexswap/nrf-swapdex/pages/Quote/index.tsx\",\n                                        lineNumber: 96,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"ml-2\",\n                                        children: _lib_constants__WEBPACK_IMPORTED_MODULE_2__.POLYGON_TOKENS_BY_ADDRESS[price.buyTokenAddress.toLowerCase()].symbol\n                                    }, void 0, false, {\n                                        fileName: \"/Users/godfrey/Documents/GitHub/dexswap/nrf-swapdex/pages/Quote/index.tsx\",\n                                        lineNumber: 103,\n                                        columnNumber: 13\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/godfrey/Documents/GitHub/dexswap/nrf-swapdex/pages/Quote/index.tsx\",\n                                lineNumber: 84,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/godfrey/Documents/GitHub/dexswap/nrf-swapdex/pages/Quote/index.tsx\",\n                        lineNumber: 82,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/godfrey/Documents/GitHub/dexswap/nrf-swapdex/pages/Quote/index.tsx\",\n                lineNumber: 68,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: \"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full\",\n                onClick: function() {\n                    console.log(\"submitting quote to blockchain\");\n                    sendTransaction && sendTransaction();\n                },\n                children: \"Place Order\"\n            }, void 0, false, {\n                fileName: \"/Users/godfrey/Documents/GitHub/dexswap/nrf-swapdex/pages/Quote/index.tsx\",\n                lineNumber: 113,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/godfrey/Documents/GitHub/dexswap/nrf-swapdex/pages/Quote/index.tsx\",\n        lineNumber: 67,\n        columnNumber: 5\n    }, this);\n}\n_s(QuoteView, \"Dap7CJOa0XFr8mzAnj+gAIRl//A=\", false, function() {\n    return [\n        wagmi__WEBPACK_IMPORTED_MODULE_4__.useAccount,\n        swr__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n        wagmi__WEBPACK_IMPORTED_MODULE_4__.usePrepareSendTransaction,\n        wagmi__WEBPACK_IMPORTED_MODULE_4__.useSendTransaction\n    ];\n});\n_c = QuoteView;\nvar _c;\n$RefreshReg$(_c, \"QuoteView\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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ZGV4LnRzeD8zZjkwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB1c2VTV1IgZnJvbSBcInN3clwiO1xuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XG5pbXBvcnQge1xuICBQT0xZR09OX1RPS0VOU19CWV9TWU1CT0wsXG4gIFBPTFlHT05fVE9LRU5TX0JZX0FERFJFU1MsXG59IGZyb20gXCIuLi8uLi9saWIvY29uc3RhbnRzXCI7XG5pbXBvcnQgeyBmZXRjaGVyIH0gZnJvbSBcIi4uL1ByaWNlXCI7XG5pbXBvcnQgdHlwZSB7IFByaWNlUmVzcG9uc2UsIFF1b3RlUmVzcG9uc2UgfSBmcm9tIFwiLi4vYXBpL3R5cGVzXCI7XG5pbXBvcnQgeyBmb3JtYXRVbml0cyB9IGZyb20gXCJldGhlcnNcIjtcbmltcG9ydCB7XG4gIHVzZUFjY291bnQsXG4gIHVzZVNlbmRUcmFuc2FjdGlvbixcbiAgdXNlUHJlcGFyZVNlbmRUcmFuc2FjdGlvbixcbiAgdHlwZSBBZGRyZXNzLFxufSBmcm9tIFwid2FnbWlcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUXVvdGVWaWV3KHtcbiAgcHJpY2UsXG4gIHF1b3RlLFxuICBzZXRRdW90ZSxcbiAgdGFrZXJBZGRyZXNzLFxufToge1xuICBwcmljZTogUHJpY2VSZXNwb25zZTtcbiAgcXVvdGU6IFF1b3RlUmVzcG9uc2UgfCB1bmRlZmluZWQ7XG4gIHNldFF1b3RlOiAocHJpY2U6IGFueSkgPT4gdm9pZDtcbiAgdGFrZXJBZGRyZXNzOiBBZGRyZXNzIHwgdW5kZWZpbmVkO1xufSkge1xuICAvLyBmZXRjaCBxdW90ZSBoZXJlXG5cbiAgY29uc3QgeyBhZGRyZXNzIH0gPSB1c2VBY2NvdW50KCk7XG5cbiAgY29uc3QgeyBpc0xvYWRpbmc6IGlzTG9hZGluZ1ByaWNlIH0gPSB1c2VTV1IoXG4gICAgW1xuICAgICAgXCIvYXBpL3F1b3RlXCIsXG4gICAgICB7XG4gICAgICAgIHNlbGxUb2tlbjogcHJpY2Uuc2VsbFRva2VuQWRkcmVzcyxcbiAgICAgICAgYnV5VG9rZW46IHByaWNlLmJ1eVRva2VuQWRkcmVzcyxcbiAgICAgICAgc2VsbEFtb3VudDogcHJpY2Uuc2VsbEFtb3VudCxcbiAgICAgICAgLy8gYnV5QW1vdW50OiBUT0RPIGlmIHdlIHdhbnQgdG8gc3VwcG9ydCBidXlzLFxuICAgICAgICB0YWtlckFkZHJlc3MsXG4gICAgICB9LFxuICAgIF0sXG4gICAgZmV0Y2hlcixcbiAgICB7XG4gICAgICBvblN1Y2Nlc3M6IChkYXRhKSA9PiB7XG4gICAgICAgIHNldFF1b3RlKGRhdGEpO1xuICAgICAgICBjb25zb2xlLmxvZyhcInF1b3RlXCIsIGRhdGEpO1xuICAgICAgfSxcbiAgICB9XG4gICk7XG5cbiAgY29uc3QgeyBjb25maWcgfSA9IHVzZVByZXBhcmVTZW5kVHJhbnNhY3Rpb24oe1xuICAgIHRvOiBxdW90ZT8udG8sIC8vIFRoZSBhZGRyZXNzIG9mIHRoZSBjb250cmFjdCB0byBzZW5kIGNhbGwgZGF0YSB0bywgaW4gdGhpcyBjYXNlIDB4IEV4Y2hhbmdlIFByb3h5XG4gICAgZGF0YTogcXVvdGU/LmRhdGEsIC8vIFRoZSBjYWxsIGRhdGEgcmVxdWlyZWQgdG8gYmUgc2VudCB0byB0aGUgdG8gY29udHJhY3QgYWRkcmVzcy5cbiAgfSk7XG5cbiAgY29uc3QgeyBzZW5kVHJhbnNhY3Rpb24gfSA9IHVzZVNlbmRUcmFuc2FjdGlvbihjb25maWcpO1xuXG4gIGlmICghcXVvdGUpIHtcbiAgICByZXR1cm4gPGRpdj5HZXR0aW5nIGJlc3QgcXVvdGUuLi48L2Rpdj47XG4gIH1cblxuICBjb25zdCBzZWxsVG9rZW5JbmZvID1cbiAgICBQT0xZR09OX1RPS0VOU19CWV9BRERSRVNTW3ByaWNlLnNlbGxUb2tlbkFkZHJlc3MudG9Mb3dlckNhc2UoKV07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInAtMyBteC1hdXRvIG1heC13LXNjcmVlbi1zbSBcIj5cbiAgICAgIDxmb3JtPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLXNsYXRlLTIwMCBkYXJrOmJnLXNsYXRlLTgwMCBwLTQgcm91bmRlZC1zbSBtYi0zXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXhsIG1iLTIgdGV4dC13aGl0ZVwiPllvdSBwYXk8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIHRleHQtbGcgc206dGV4dC0zeGwgdGV4dC13aGl0ZVwiPlxuICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICBhbHQ9e3NlbGxUb2tlbkluZm8uc3ltYm9sfVxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJoLTkgdy05IG1yLTIgcm91bmRlZC1tZFwiXG4gICAgICAgICAgICAgIHNyYz17c2VsbFRva2VuSW5mby5sb2dvVVJJfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxzcGFuPntmb3JtYXRVbml0cyhxdW90ZS5zZWxsQW1vdW50LCBzZWxsVG9rZW5JbmZvLmRlY2ltYWxzKX08L3NwYW4+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1sLTJcIj57c2VsbFRva2VuSW5mby5zeW1ib2x9PC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctc2xhdGUtMjAwIGRhcms6Ymctc2xhdGUtODAwIHAtNCByb3VuZGVkLXNtIG1iLTNcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQteGwgbWItMiB0ZXh0LXdoaXRlXCI+WW91IHJlY2VpdmU8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIHRleHQtbGcgc206dGV4dC0zeGwgdGV4dC13aGl0ZVwiPlxuICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICBhbHQ9e1xuICAgICAgICAgICAgICAgIFBPTFlHT05fVE9LRU5TX0JZX0FERFJFU1NbcHJpY2UuYnV5VG9rZW5BZGRyZXNzLnRvTG93ZXJDYXNlKCldXG4gICAgICAgICAgICAgICAgICAuc3ltYm9sXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaC05IHctOSBtci0yIHJvdW5kZWQtbWRcIlxuICAgICAgICAgICAgICBzcmM9e1xuICAgICAgICAgICAgICAgIFBPTFlHT05fVE9LRU5TX0JZX0FERFJFU1NbcHJpY2UuYnV5VG9rZW5BZGRyZXNzLnRvTG93ZXJDYXNlKCldXG4gICAgICAgICAgICAgICAgICAubG9nb1VSSVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPHNwYW4+XG4gICAgICAgICAgICAgIHtmb3JtYXRVbml0cyhcbiAgICAgICAgICAgICAgICBxdW90ZS5idXlBbW91bnQsXG4gICAgICAgICAgICAgICAgUE9MWUdPTl9UT0tFTlNfQllfQUREUkVTU1twcmljZS5idXlUb2tlbkFkZHJlc3MudG9Mb3dlckNhc2UoKV1cbiAgICAgICAgICAgICAgICAgIC5kZWNpbWFsc1xuICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtbC0yXCI+XG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBQT0xZR09OX1RPS0VOU19CWV9BRERSRVNTW3ByaWNlLmJ1eVRva2VuQWRkcmVzcy50b0xvd2VyQ2FzZSgpXVxuICAgICAgICAgICAgICAgICAgLnN5bWJvbFxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Zvcm0+XG5cbiAgICAgIDxidXR0b25cbiAgICAgICAgY2xhc3NOYW1lPVwiYmctYmx1ZS01MDAgaG92ZXI6YmctYmx1ZS03MDAgdGV4dC13aGl0ZSBmb250LWJvbGQgcHktMiBweC00IHJvdW5kZWQgdy1mdWxsXCJcbiAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgIGNvbnNvbGUubG9nKFwic3VibWl0dGluZyBxdW90ZSB0byBibG9ja2NoYWluXCIpO1xuICAgICAgICAgIHNlbmRUcmFuc2FjdGlvbiAmJiBzZW5kVHJhbnNhY3Rpb24oKTtcbiAgICAgICAgfX1cbiAgICAgID5cbiAgICAgICAgUGxhY2UgT3JkZXJcbiAgICAgIDwvYnV0dG9uPlxuICAgIDwvZGl2PlxuICApO1xufSJdLCJuYW1lcyI6WyJ1c2VTV1IiLCJQT0xZR09OX1RPS0VOU19CWV9BRERSRVNTIiwiZmV0Y2hlciIsImZvcm1hdFVuaXRzIiwidXNlQWNjb3VudCIsInVzZVNlbmRUcmFuc2FjdGlvbiIsInVzZVByZXBhcmVTZW5kVHJhbnNhY3Rpb24iLCJRdW90ZVZpZXciLCJwcmljZSIsInF1b3RlIiwic2V0UXVvdGUiLCJ0YWtlckFkZHJlc3MiLCJhZGRyZXNzIiwic2VsbFRva2VuIiwic2VsbFRva2VuQWRkcmVzcyIsImJ1eVRva2VuIiwiYnV5VG9rZW5BZGRyZXNzIiwic2VsbEFtb3VudCIsIm9uU3VjY2VzcyIsImRhdGEiLCJjb25zb2xlIiwibG9nIiwiaXNMb2FkaW5nIiwiaXNMb2FkaW5nUHJpY2UiLCJjb25maWciLCJ0byIsInNlbmRUcmFuc2FjdGlvbiIsImRpdiIsInNlbGxUb2tlbkluZm8iLCJ0b0xvd2VyQ2FzZSIsImNsYXNzTmFtZSIsImZvcm0iLCJpbWciLCJhbHQiLCJzeW1ib2wiLCJzcmMiLCJsb2dvVVJJIiwic3BhbiIsImRlY2ltYWxzIiwiYnV5QW1vdW50IiwiYnV0dG9uIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/Quote/index.tsx\n"));

/***/ }),

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Price__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Price */ \"./pages/Price/index.tsx\");\n/* harmony import */ var _Quote__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Quote */ \"./pages/Quote/index.tsx\");\n/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! wagmi */ \"./node_modules/wagmi/dist/index.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction Home() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"sell\"), tradeDirection = ref[0], setTradeDirection = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), finalize = ref1[0], setFinalize = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(), price = ref2[0], setPrice = ref2[1];\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(), quote = ref3[0], setQuote = ref3[1];\n    var address = (0,wagmi__WEBPACK_IMPORTED_MODULE_4__.useAccount)().address;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        className: \"flex min-h-screen flex-col items-center justify-between p-24\",\n        children: finalize && price ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Quote__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n            takerAddress: address,\n            price: price,\n            quote: quote,\n            setQuote: setQuote\n        }, void 0, false, {\n            fileName: \"/Users/godfrey/Documents/GitHub/dexswap/nrf-swapdex/pages/index.tsx\",\n            lineNumber: 20,\n            columnNumber: 9\n        }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Price__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n            takerAddress: address,\n            price: price,\n            setPrice: setPrice,\n            setFinalize: setFinalize\n        }, void 0, false, {\n            fileName: \"/Users/godfrey/Documents/GitHub/dexswap/nrf-swapdex/pages/index.tsx\",\n            lineNumber: 27,\n            columnNumber: 9\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/godfrey/Documents/GitHub/dexswap/nrf-swapdex/pages/index.tsx\",\n        lineNumber: 16,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"hNRKRrmmwO2a/+DG8Y4lBO/PzmI=\", false, function() {\n    return [\n        wagmi__WEBPACK_IMPORTED_MODULE_4__.useAccount\n    ];\n});\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTs7QUFBaUM7QUFDRDtBQUNBO0FBR0c7QUFFcEIsU0FBU0ksSUFBSSxHQUFHOztJQUM3QixJQUE0Q0osR0FBZ0IsR0FBaEJBLCtDQUFRLENBQUMsTUFBTSxDQUFDLEVBQXJESyxjQUFjLEdBQXVCTCxHQUFnQixHQUF2QyxFQUFFTSxpQkFBaUIsR0FBSU4sR0FBZ0IsR0FBcEI7SUFDeEMsSUFBZ0NBLElBQWUsR0FBZkEsK0NBQVEsQ0FBQyxLQUFLLENBQUMsRUFBeENPLFFBQVEsR0FBaUJQLElBQWUsR0FBaEMsRUFBRVEsV0FBVyxHQUFJUixJQUFlLEdBQW5CO0lBQzVCLElBQTBCQSxJQUFxQyxHQUFyQ0EsK0NBQVEsRUFBNkIsRUFBeERTLEtBQUssR0FBY1QsSUFBcUMsR0FBbkQsRUFBRVUsUUFBUSxHQUFJVixJQUFxQyxHQUF6QztJQUN0QixJQUEwQkEsSUFBVSxHQUFWQSwrQ0FBUSxFQUFFLEVBQTdCVyxLQUFLLEdBQWNYLElBQVUsR0FBeEIsRUFBRVksUUFBUSxHQUFJWixJQUFVLEdBQWQ7SUFDdEIsSUFBTSxPQUFTLEdBQUtHLGlEQUFVLEVBQUUsQ0FBeEJVLE9BQU87SUFFZixxQkFDRSw4REFBQ0MsTUFBSTtRQUNIQyxTQUFTLEVBQUcsOERBQTREO2tCQUV2RVIsUUFBUSxJQUFJRSxLQUFLLGlCQUNoQiw4REFBQ1AsOENBQVM7WUFDUmMsWUFBWSxFQUFFSCxPQUFPO1lBQ3JCSixLQUFLLEVBQUVBLEtBQUs7WUFDWkUsS0FBSyxFQUFFQSxLQUFLO1lBQ1pDLFFBQVEsRUFBRUEsUUFBUTs7Ozs7Z0JBQ2xCLGlCQUVGLDhEQUFDWCw4Q0FBUztZQUNSZSxZQUFZLEVBQUVILE9BQU87WUFDckJKLEtBQUssRUFBRUEsS0FBSztZQUNaQyxRQUFRLEVBQUVBLFFBQVE7WUFDbEJGLFdBQVcsRUFBRUEsV0FBVzs7Ozs7Z0JBQ3hCOzs7OztZQUVDLENBQ1A7QUFDSixDQUFDO0dBNUJ1QkosSUFBSTs7UUFLTkQsNkNBQVU7OztBQUxSQyxLQUFBQSxJQUFJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LnRzeD8wN2ZmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgUHJpY2VWaWV3IGZyb20gXCIuL1ByaWNlXCI7XG5pbXBvcnQgUXVvdGVWaWV3IGZyb20gXCIuL1F1b3RlXCI7XG4vL2ltcG9ydCBRdW90ZVZpZXcgZnJvbSBcIi4vUXVvdGUvdGVzdFwiO1xuaW1wb3J0IHR5cGUgeyBQcmljZVJlc3BvbnNlIH0gZnJvbSBcIi4vYXBpL3R5cGVzXCI7XG5pbXBvcnQgeyB1c2VBY2NvdW50IH0gZnJvbSBcIndhZ21pXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gIGNvbnN0IFt0cmFkZURpcmVjdGlvbiwgc2V0VHJhZGVEaXJlY3Rpb25dID0gdXNlU3RhdGUoXCJzZWxsXCIpO1xuICBjb25zdCBbZmluYWxpemUsIHNldEZpbmFsaXplXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW3ByaWNlLCBzZXRQcmljZV0gPSB1c2VTdGF0ZTxQcmljZVJlc3BvbnNlIHwgdW5kZWZpbmVkPigpO1xuICBjb25zdCBbcXVvdGUsIHNldFF1b3RlXSA9IHVzZVN0YXRlKCk7XG4gIGNvbnN0IHsgYWRkcmVzcyB9ID0gdXNlQWNjb3VudCgpO1xuXG4gIHJldHVybiAoXG4gICAgPG1haW5cbiAgICAgIGNsYXNzTmFtZT17YGZsZXggbWluLWgtc2NyZWVuIGZsZXgtY29sIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gcC0yNGB9XG4gICAgPlxuICAgICAge2ZpbmFsaXplICYmIHByaWNlID8gKFxuICAgICAgICA8UXVvdGVWaWV3XG4gICAgICAgICAgdGFrZXJBZGRyZXNzPXthZGRyZXNzfVxuICAgICAgICAgIHByaWNlPXtwcmljZX1cbiAgICAgICAgICBxdW90ZT17cXVvdGV9XG4gICAgICAgICAgc2V0UXVvdGU9e3NldFF1b3RlfVxuICAgICAgICAvPlxuICAgICAgKSA6IChcbiAgICAgICAgPFByaWNlVmlld1xuICAgICAgICAgIHRha2VyQWRkcmVzcz17YWRkcmVzc31cbiAgICAgICAgICBwcmljZT17cHJpY2V9XG4gICAgICAgICAgc2V0UHJpY2U9e3NldFByaWNlfVxuICAgICAgICAgIHNldEZpbmFsaXplPXtzZXRGaW5hbGl6ZX1cbiAgICAgICAgLz5cbiAgICAgICl9XG4gICAgPC9tYWluPlxuICApO1xufVxuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwiUHJpY2VWaWV3IiwiUXVvdGVWaWV3IiwidXNlQWNjb3VudCIsIkhvbWUiLCJ0cmFkZURpcmVjdGlvbiIsInNldFRyYWRlRGlyZWN0aW9uIiwiZmluYWxpemUiLCJzZXRGaW5hbGl6ZSIsInByaWNlIiwic2V0UHJpY2UiLCJxdW90ZSIsInNldFF1b3RlIiwiYWRkcmVzcyIsIm1haW4iLCJjbGFzc05hbWUiLCJ0YWtlckFkZHJlc3MiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.tsx\n"));

/***/ })

});