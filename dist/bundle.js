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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_burgerMenu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/burgerMenu */ \"./src/modules/burgerMenu.js\");\n/* harmony import */ var _modules_addArrow__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/addArrow */ \"./src/modules/addArrow.js\");\n/* harmony import */ var _modules_changeClub__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/changeClub */ \"./src/modules/changeClub.js\");\n/* harmony import */ var _modules_openModal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/openModal */ \"./src/modules/openModal.js\");\n\n\n\n\n\n\n(0,_modules_burgerMenu__WEBPACK_IMPORTED_MODULE_0__.default)();\n(0,_modules_addArrow__WEBPACK_IMPORTED_MODULE_1__.default)();\n(0,_modules_changeClub__WEBPACK_IMPORTED_MODULE_2__.default)();\n(0,_modules_openModal__WEBPACK_IMPORTED_MODULE_3__.default)();\n\n//# sourceURL=webpack://glo-diplom/./src/index.js?");

/***/ }),

/***/ "./src/modules/addArrow.js":
/*!*********************************!*\
  !*** ./src/modules/addArrow.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar addArrow = function addArrow() {\n  var toTop = document.getElementById('totop'),\n      headerMain = document.querySelector('.header-main');\n  toTop.style.cssText = 'display: none !important';\n  window.addEventListener('scroll', function () {\n    if (document.documentElement.scrollTop > headerMain.scrollHeight) {\n      toTop.style.cssText = \"\\n            position: fixed;\\n            display: block;\\n            \";\n    } else if (document.documentElement.scrollTop < headerMain.scrollHeight) {\n      toTop.style.cssText = 'display: none !important';\n    }\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (addArrow);\n\n//# sourceURL=webpack://glo-diplom/./src/modules/addArrow.js?");

/***/ }),

/***/ "./src/modules/burgerMenu.js":
/*!***********************************!*\
  !*** ./src/modules/burgerMenu.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar burgerMenu = function burgerMenu() {\n  var hiddenSmall = document.querySelector('.hidden-small'),\n      hiddenLarge = document.querySelector('.hidden-large'),\n      topMenu = document.querySelector('.top-menu'),\n      headSlider = document.querySelector('.head-slider'),\n      head = document.querySelector('.head'),\n      btnOpen = document.querySelector('img[src=\"images/menu-button.png\"]'),\n      popupMenu = document.querySelector('.popup-menu');\n\n  var handlerMenu = function handlerMenu() {\n    if (document.documentElement.clientWidth < 768) {\n      hiddenSmall.style.display = 'none';\n      hiddenLarge.style.display = 'block';\n      setTimeout(function () {\n        topMenu.style.cssText = \"\\n                margin-top: \".concat(head.offsetHeight, \"px;\\n                position: fixed;\\n                \");\n        headSlider.style.paddingTop = '25px';\n      }, 0);\n      window.addEventListener('scroll', function () {\n        if (document.documentElement.scrollTop > 0) {\n          topMenu.style.marginTop = '0';\n        } else if (document.documentElement.scrollTop === 0) {\n          topMenu.style.marginTop = \"\".concat(head.offsetHeight, \"px\");\n        }\n      });\n    } else if (window.innerWidth >= 768) {\n      hiddenLarge.style.display = 'none';\n      hiddenSmall.style.display = 'flex';\n      topMenu.style.cssText = \"\\n                margin-top: 0x;\\n                position: inherit;\\n                \";\n      headSlider.style.paddingTop = '0';\n      window.addEventListener('scroll', function () {\n        if (document.documentElement.scrollTop === 0) {\n          topMenu.style.marginTop = '0';\n        }\n      });\n    }\n  };\n\n  handlerMenu();\n  window.addEventListener('resize', handlerMenu);\n  btnOpen.addEventListener('click', function () {\n    document.querySelector('.popup-menu').style.display = 'flex';\n  });\n  popupMenu.addEventListener('click', function () {\n    popupMenu.style.display = 'none';\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (burgerMenu);\n\n//# sourceURL=webpack://glo-diplom/./src/modules/burgerMenu.js?");

/***/ }),

/***/ "./src/modules/changeClub.js":
/*!***********************************!*\
  !*** ./src/modules/changeClub.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar changeClub = function changeClub() {\n  var clubsList = document.querySelector('.clubs-list');\n  clubsList.addEventListener('click', function (event) {\n    var target = event.target;\n\n    if (target.textContent === 'Выбрать клуб') {\n      var element = clubsList.lastChild.previousSibling;\n      element.setAttribute('id', 'change-club');\n      var change = document.getElementById('change-club');\n      change.classList.toggle('active-club');\n      window.addEventListener('scroll', function () {\n        if (document.documentElement.scrollTop > 0) {\n          change.classList.remove('active-club');\n        }\n      });\n    }\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (changeClub);\n\n//# sourceURL=webpack://glo-diplom/./src/modules/changeClub.js?");

/***/ }),

/***/ "./src/modules/openModal.js":
/*!**********************************!*\
  !*** ./src/modules/openModal.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar openModal = function openModal() {\n  var header = document.querySelector('.header-main'),\n      visitForm = document.getElementById('free_visit_form'),\n      callbackForm = document.getElementById('callback_form'),\n      fixedGift = document.querySelector('.fixed-gift'),\n      gift = document.getElementById('gift');\n  header.addEventListener('click', function (event) {\n    var target = event.target;\n\n    if (target.classList.contains('open-popup')) {\n      visitForm.style.display = 'block';\n    }\n\n    if (target.classList.contains('callback-btn')) {\n      callbackForm.style.display = 'block';\n    }\n  });\n\n  if (fixedGift) {\n    fixedGift.addEventListener('click', function (event) {\n      var target = event.target;\n\n      if (target.closest('div>img')) {\n        gift.style.display = 'block';\n        fixedGift.classList.add('active-gift');\n      }\n    });\n  }\n\n  var hiddenWindow = function hiddenWindow(event) {\n    var target = event.target;\n\n    if (target.classList.contains('overlay') || target.classList.contains('close_icon') || target.classList.contains('close-btn')) {\n      visitForm.style.display = 'none';\n      callbackForm.style.display = 'none';\n\n      if (fixedGift) {\n        gift.style.display = 'none';\n        fixedGift.classList.remove('active-gift');\n      }\n    }\n  };\n\n  visitForm.addEventListener('click', hiddenWindow);\n  callbackForm.addEventListener('click', hiddenWindow);\n\n  if (fixedGift) {\n    gift.addEventListener('click', hiddenWindow);\n  }\n\n  if (fixedGift) {\n    window.addEventListener('resize', function () {\n      if (document.documentElement.clientWidth < 768) {\n        window.addEventListener('scroll', function () {\n          if (document.documentElement.scrollTop > 0) {\n            fixedGift.style.top = '70px';\n          } else if (document.documentElement.scrollTop === 0) {\n            fixedGift.style.top = '15px';\n          }\n        });\n      }\n    });\n  }\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (openModal);\n\n//# sourceURL=webpack://glo-diplom/./src/modules/openModal.js?");

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