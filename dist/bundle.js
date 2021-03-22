/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_burgerMenu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/burgerMenu */ \"./src/modules/burgerMenu.js\");\n\n\n\n(0,_modules_burgerMenu__WEBPACK_IMPORTED_MODULE_0__.default)();\n\n//# sourceURL=webpack://glo-diplom/./src/index.js?");

/***/ }),

/***/ "./src/modules/burgerMenu.js":
/*!***********************************!*\
  !*** ./src/modules/burgerMenu.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar burgerMenu = function burgerMenu() {\n  var hiddenSmall = document.querySelector('.hidden-small'),\n      hiddenLarge = document.querySelector('.hidden-large'),\n      topMenu = document.querySelector('.top-menu'),\n      headSlider = document.querySelector('.head-slider'),\n      head = document.querySelector('.head'),\n      btnOpen = document.querySelector('img[src=\"images/menu-button.png\"]'),\n      popupMenu = document.querySelector('.popup-menu');\n\n  var handlerMenu = function handlerMenu() {\n    if (document.documentElement.clientWidth < 768) {\n      hiddenSmall.style.display = 'none';\n      hiddenLarge.style.display = 'block';\n      setTimeout(function () {\n        topMenu.style.cssText = \"\\n                margin-top: \".concat(head.offsetHeight, \"px;\\n                position: fixed;\\n                \");\n        headSlider.style.paddingTop = '25px';\n      }, 0);\n      window.addEventListener('scroll', function () {\n        if (document.documentElement.scrollTop > 0) {\n          topMenu.style.marginTop = '0';\n        } else if (document.documentElement.scrollTop === 0) {\n          topMenu.style.marginTop = \"\".concat(head.offsetHeight, \"px\");\n        }\n      });\n    } else if (window.innerWidth >= 768) {\n      hiddenLarge.style.display = 'none';\n      hiddenSmall.style.display = 'flex';\n      topMenu.style.cssText = \"\\n                margin-top: 0x;\\n                position: inherit;\\n                \";\n      headSlider.style.paddingTop = '0';\n      window.addEventListener('scroll', function () {\n        if (document.documentElement.scrollTop === 0) {\n          topMenu.style.marginTop = '0';\n        }\n      });\n    }\n  };\n\n  handlerMenu();\n  window.addEventListener('resize', handlerMenu);\n  btnOpen.addEventListener('click', function () {\n    document.querySelector('.popup-menu').style.display = 'flex';\n  });\n  popupMenu.addEventListener('click', function () {\n    popupMenu.style.display = 'none';\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (burgerMenu);\n\n//# sourceURL=webpack://glo-diplom/./src/modules/burgerMenu.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;