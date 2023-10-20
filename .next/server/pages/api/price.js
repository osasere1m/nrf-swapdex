"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/price";
exports.ids = ["pages/api/price"];
exports.modules = {

/***/ "qs":
/*!*********************!*\
  !*** external "qs" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("qs");

/***/ }),

/***/ "(api)/./pages/api/price.ts":
/*!****************************!*\
  !*** ./pages/api/price.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var qs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! qs */ \"qs\");\n/* harmony import */ var qs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(qs__WEBPACK_IMPORTED_MODULE_0__);\n// Next.js API route support: https://nextjs.org/docs/api-routes/introduction\n\nasync function handler(req, res) {\n    const query = qs__WEBPACK_IMPORTED_MODULE_0___default().stringify(req.query);\n    const response = await fetch(`https://polygon.api.0x.org/swap/v1/price?${query}`, {\n        headers: {\n            \"0x-api-key\": \"7f13d4f8-9a18-4a1c-8115-533a29ea5b27\"\n        }\n    });\n    const data = await response.json();\n    res.status(200).json(data);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvcHJpY2UudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsNkVBQTZFO0FBQ3pEO0FBT0wsZUFBZUMsT0FBTyxDQUNuQ0MsR0FBbUIsRUFDbkJDLEdBQXlCLEVBQ3pCO0lBQ0EsTUFBTUMsS0FBSyxHQUFHSixtREFBWSxDQUFDRSxHQUFHLENBQUNFLEtBQUssQ0FBQztJQUNyQyxNQUFNRSxRQUFRLEdBQUcsTUFBTUMsS0FBSyxDQUMxQixDQUFDLHlDQUF5QyxFQUFFSCxLQUFLLENBQUMsQ0FBQyxFQUNuRDtRQUNFSSxPQUFPLEVBQUU7WUFDUCxZQUFZLEVBQUUsc0NBQXNDO1NBQ3JEO0tBQ0YsQ0FDRjtJQUVELE1BQU1DLElBQUksR0FBRyxNQUFNSCxRQUFRLENBQUNJLElBQUksRUFBRTtJQUVsQ1AsR0FBRyxDQUFDUSxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNELElBQUksQ0FBQ0QsSUFBSSxDQUFDLENBQUM7QUFDN0IsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovLzB4LW5leHRqcy1zd2FwLXBhZ2VzLy4vcGFnZXMvYXBpL3ByaWNlLnRzPzg5MzQiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gTmV4dC5qcyBBUEkgcm91dGUgc3VwcG9ydDogaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvYXBpLXJvdXRlcy9pbnRyb2R1Y3Rpb25cbmltcG9ydCBxcyBmcm9tIFwicXNcIjtcbmltcG9ydCB0eXBlIHsgTmV4dEFwaVJlcXVlc3QsIE5leHRBcGlSZXNwb25zZSB9IGZyb20gXCJuZXh0XCI7XG5cbnR5cGUgRGF0YSA9IHtcbiAgbmFtZTogc3RyaW5nO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gaGFuZGxlcihcbiAgcmVxOiBOZXh0QXBpUmVxdWVzdCxcbiAgcmVzOiBOZXh0QXBpUmVzcG9uc2U8YW55PlxuKSB7XG4gIGNvbnN0IHF1ZXJ5ID0gcXMuc3RyaW5naWZ5KHJlcS5xdWVyeSk7XG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXG4gICAgYGh0dHBzOi8vcG9seWdvbi5hcGkuMHgub3JnL3N3YXAvdjEvcHJpY2U/JHtxdWVyeX1gLFxuICAgIHtcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgXCIweC1hcGkta2V5XCI6IFwiN2YxM2Q0ZjgtOWExOC00YTFjLTgxMTUtNTMzYTI5ZWE1YjI3XCIsIC8vIHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDXzBYX0FQSV9LRVksXG4gICAgICB9LFxuICAgIH1cbiAgKTtcblxuICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuXG4gIHJlcy5zdGF0dXMoMjAwKS5qc29uKGRhdGEpO1xufVxuIl0sIm5hbWVzIjpbInFzIiwiaGFuZGxlciIsInJlcSIsInJlcyIsInF1ZXJ5Iiwic3RyaW5naWZ5IiwicmVzcG9uc2UiLCJmZXRjaCIsImhlYWRlcnMiLCJkYXRhIiwianNvbiIsInN0YXR1cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/price.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/price.ts"));
module.exports = __webpack_exports__;

})();