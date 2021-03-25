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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_burgerMenu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/burgerMenu */ \"./src/modules/burgerMenu.js\");\n/* harmony import */ var _modules_addArrow__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/addArrow */ \"./src/modules/addArrow.js\");\n/* harmony import */ var _modules_changeClub__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/changeClub */ \"./src/modules/changeClub.js\");\n/* harmony import */ var _modules_openModal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/openModal */ \"./src/modules/openModal.js\");\n/* harmony import */ var _modules_sliderCarousel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/sliderCarousel */ \"./src/modules/sliderCarousel.js\");\n/* harmony import */ var _modules_sliderPhoto__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/sliderPhoto */ \"./src/modules/sliderPhoto.js\");\n/* harmony import */ var _modules_sliderMain__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/sliderMain */ \"./src/modules/sliderMain.js\");\n\n\n\n\n\n\n\n\n\n(0,_modules_burgerMenu__WEBPACK_IMPORTED_MODULE_0__.default)();\n(0,_modules_addArrow__WEBPACK_IMPORTED_MODULE_1__.default)();\n(0,_modules_changeClub__WEBPACK_IMPORTED_MODULE_2__.default)();\n(0,_modules_openModal__WEBPACK_IMPORTED_MODULE_3__.default)();\n(0,_modules_sliderCarousel__WEBPACK_IMPORTED_MODULE_4__.default)();\n(0,_modules_sliderPhoto__WEBPACK_IMPORTED_MODULE_5__.default)();\n(0,_modules_sliderMain__WEBPACK_IMPORTED_MODULE_6__.default)();\n\n//# sourceURL=webpack://glo-diplom/./src/index.js?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar burgerMenu = function burgerMenu() {\n  var hiddenSmall = document.querySelector('.hidden-small'),\n      hiddenLarge = document.querySelector('.hidden-large'),\n      topMenu = document.querySelector('.top-menu'),\n      headSlider = document.querySelector('.head-slider'),\n      head = document.querySelector('.head'),\n      btnOpen = document.querySelector('img[src=\"images/menu-button.png\"]'),\n      popupMenu = document.querySelector('.popup-menu');\n\n  var handlerMenu = function handlerMenu() {\n    if (document.documentElement.clientWidth < 768) {\n      hiddenSmall.style.display = 'none';\n      hiddenLarge.style.display = 'block';\n\n      if (document.documentElement.scrollTop === 0) {\n        setTimeout(function () {\n          topMenu.style.cssText = \"\\n                margin-top: \".concat(head.offsetHeight, \"px;\\n                position: fixed;\\n                \");\n          headSlider.style.paddingTop = '25px';\n        }, 0);\n      }\n\n      window.addEventListener('scroll', function () {\n        if (document.documentElement.scrollTop > 0) {\n          topMenu.style.marginTop = '0';\n        } else if (document.documentElement.scrollTop === 0) {\n          topMenu.style.marginTop = \"\".concat(head.offsetHeight, \"px\");\n        }\n      });\n    } else if (window.innerWidth >= 768) {\n      hiddenLarge.style.display = 'none';\n      hiddenSmall.style.display = 'flex';\n      topMenu.style.cssText = \"\\n                margin-top: 0x;\\n                position: inherit;\\n                \";\n      headSlider.style.paddingTop = '0';\n      window.addEventListener('scroll', function () {\n        if (document.documentElement.scrollTop === 0) {\n          topMenu.style.marginTop = '0';\n        }\n      });\n    }\n  };\n\n  handlerMenu();\n  window.addEventListener('resize', handlerMenu);\n  btnOpen.addEventListener('click', function () {\n    document.querySelector('.popup-menu').style.display = 'flex';\n  });\n  popupMenu.addEventListener('click', function (event) {\n    var target = event.target;\n\n    if (target.closest('a[href^=\"#\"]') || target.closest('img[src=\"images/delete.png\"]')) {\n      popupMenu.style.display = 'none';\n    }\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (burgerMenu);\n\n//# sourceURL=webpack://glo-diplom/./src/modules/burgerMenu.js?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar openModal = function openModal() {\n  var header = document.querySelector('.header-main'),\n      visitForm = document.getElementById('free_visit_form'),\n      callbackForm = document.getElementById('callback_form'),\n      fixedGift = document.querySelector('.fixed-gift'),\n      gift = document.getElementById('gift');\n  header.addEventListener('click', function (event) {\n    var target = event.target;\n\n    if (target.classList.contains('open-popup')) {\n      visitForm.style.display = 'block';\n    }\n\n    if (target.classList.contains('callback-btn')) {\n      callbackForm.style.display = 'block';\n    }\n  });\n\n  if (fixedGift) {\n    fixedGift.addEventListener('click', function (event) {\n      var target = event.target;\n\n      if (target.closest('div>img')) {\n        gift.style.display = 'block';\n        fixedGift.classList.add('active-gift');\n      }\n    });\n  }\n\n  var hiddenWindow = function hiddenWindow(event) {\n    var target = event.target;\n\n    if (target.classList.contains('overlay') || target.classList.contains('close_icon') || target.classList.contains('close-btn')) {\n      visitForm.style.display = 'none';\n      callbackForm.style.display = 'none';\n\n      if (fixedGift) {\n        gift.style.display = 'none';\n        fixedGift.classList.remove('active-gift');\n      }\n    }\n  };\n\n  visitForm.addEventListener('click', hiddenWindow);\n  callbackForm.addEventListener('click', hiddenWindow);\n\n  if (fixedGift) {\n    gift.addEventListener('click', hiddenWindow);\n  }\n\n  if (fixedGift) {\n    window.addEventListener('resize', function () {\n      window.addEventListener('scroll', function () {\n        if (document.documentElement.scrollTop > 0 && document.documentElement.clientWidth < 768) {\n          fixedGift.style.top = '70px';\n        } else if (document.documentElement.scrollTop === 0 && document.documentElement.clientWidth < 768) {\n          fixedGift.style.top = '15px';\n        }\n      });\n    });\n  }\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (openModal);\n\n//# sourceURL=webpack://glo-diplom/./src/modules/openModal.js?");

/***/ }),

/***/ "./src/modules/sliderCarousel.js":
/*!***************************************!*\
  !*** ./src/modules/sliderCarousel.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _iterableToArray(iter) { if (typeof Symbol !== \"undefined\" && Symbol.iterator in Object(iter)) return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }\n\nfunction _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === \"undefined\" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === \"number\") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError(\"Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it[\"return\"] != null) it[\"return\"](); } finally { if (didErr) throw err; } } }; }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar sliderCarusel = function sliderCarusel() {\n  var options = {\n    main: '#services>.wrapper',\n    wrap: '.services-slider',\n    prev: '#prev',\n    next: '#next',\n    infinity: true,\n    slideToShow: 5,\n    responsive: [{\n      breakpoint: 1100,\n      slideToShow: 4\n    }, {\n      breakpoint: 896,\n      slideToShow: 3\n    }, {\n      breakpoint: 665,\n      slideToShow: 2\n    }, {\n      breakpoint: 480,\n      slideToShow: 1\n    }]\n  };\n\n  var SliderCarusel = /*#__PURE__*/function () {\n    function SliderCarusel(_ref) {\n      var main = _ref.main,\n          wrap = _ref.wrap,\n          _ref$position = _ref.position,\n          position = _ref$position === void 0 ? 0 : _ref$position,\n          next = _ref.next,\n          prev = _ref.prev,\n          maxPosition = _ref.maxPosition,\n          _ref$infinity = _ref.infinity,\n          infinity = _ref$infinity === void 0 ? false : _ref$infinity,\n          slideToShow = _ref.slideToShow,\n          _ref$responsive = _ref.responsive,\n          responsive = _ref$responsive === void 0 ? [] : _ref$responsive;\n\n      _classCallCheck(this, SliderCarusel);\n\n      this.main = document.querySelector(main);\n      this.wrap = document.querySelector(wrap);\n      this.slides = document.querySelector(wrap).children;\n      this.next = document.querySelector(next);\n      this.prev = document.querySelector(prev);\n      this.slideToShow = slideToShow;\n      this.options = {\n        position: position,\n        widthSlide: Math.floor(100 / this.slideToShow),\n        infinity: infinity,\n        maxPosition: maxPosition\n      };\n      this.responsive = responsive;\n    }\n\n    _createClass(SliderCarusel, [{\n      key: \"addClass\",\n      value: function addClass() {\n        var _this = this;\n\n        this.main.classList.add('carousel-slider');\n        this.wrap.classList.add('carousel-slider__wrap');\n\n        var _iterator = _createForOfIteratorHelper(this.slides),\n            _step;\n\n        try {\n          for (_iterator.s(); !(_step = _iterator.n()).done;) {\n            var item = _step.value;\n            item.classList.add('carousel-slider__item');\n          }\n        } catch (err) {\n          _iterator.e(err);\n        } finally {\n          _iterator.f();\n        }\n\n        var style = document.querySelectorAll('.carousel-slider__item');\n        style.forEach(function (item) {\n          item.style.flex = \"0 0 \".concat(_this.options.widthSlide, \"%\");\n        });\n      }\n    }, {\n      key: \"ctrlSlider\",\n      value: function ctrlSlider() {\n        this.next.addEventListener('click', this.nextSlider.bind(this));\n        this.prev.addEventListener('click', this.prevSlider.bind(this));\n      }\n    }, {\n      key: \"nextSlider\",\n      value: function nextSlider() {\n        this.options.maxPosition = this.slides.length - this.slideToShow;\n\n        if (this.options.infinity || this.options.position < this.options.maxPosition) {\n          ++this.options.position;\n\n          if (this.options.position > this.options.maxPosition) {\n            this.options.position = 0;\n          }\n\n          this.wrap.style.transform = \"\\n                translateX(-\".concat(this.options.widthSlide * this.options.position, \"%)\\n            \");\n        }\n      }\n    }, {\n      key: \"prevSlider\",\n      value: function prevSlider() {\n        this.options.maxPosition = this.slides.length - this.slideToShow;\n\n        if (this.options.infinity || this.options.position > 0) {\n          --this.options.position;\n\n          if (this.options.position < 0) {\n            this.options.position = this.options.maxPosition;\n          }\n\n          this.wrap.style.transform = \"\\n                translateX(-\".concat(this.options.widthSlide * this.options.position, \"%)\\n                \");\n        }\n      }\n    }, {\n      key: \"addArrow\",\n      value: function addArrow() {\n        this.prev = document.createElement('button');\n        this.next = document.createElement('button');\n        this.prev.className = 'glo-slider__prev';\n        this.next.className = 'glo-slider__next';\n        this.main.appendChild(this.prev);\n        this.main.appendChild(this.next);\n      }\n    }, {\n      key: \"responsiveInit\",\n      value: function responsiveInit() {\n        var _this2 = this;\n\n        var slideToShowDefault = this.slideToShow,\n            allResponse = this.responsive.map(function (item) {\n          return item.breakpoint;\n        }),\n            maxResponse = Math.max.apply(Math, _toConsumableArray(allResponse));\n\n        var checkResponse = function checkResponse() {\n          var widthWindow = document.documentElement.clientWidth;\n\n          if (widthWindow < maxResponse) {\n            for (var i = 0; i < allResponse.length; i++) {\n              if (widthWindow < allResponse[i]) {\n                _this2.slideToShow = _this2.responsive[i].slideToShow;\n                _this2.options.widthSlide = Math.floor(100 / _this2.slideToShow);\n                var style = document.querySelectorAll('.carousel-slider__item');\n                style.forEach(function (item) {\n                  item.style.flex = \"0 0 \".concat(_this2.options.widthSlide, \"%\");\n                });\n                _this2.maxPosition = _this2.slides.length - _this2.slideToShow;\n              }\n            }\n          } else {\n            _this2.slideToShow = slideToShowDefault;\n            _this2.options.widthSlide = Math.floor(100 / _this2.slideToShow);\n\n            var _style = document.querySelectorAll('.carousel-slider__item');\n\n            _style.forEach(function (item) {\n              item.style.flex = \"0 0 \".concat(_this2.options.widthSlide, \"%\");\n            });\n          }\n        };\n\n        checkResponse();\n        window.addEventListener('resize', checkResponse);\n      }\n    }, {\n      key: \"init\",\n      value: function init() {\n        this.responsiveInit();\n        this.addClass();\n\n        if (this.prev && this.next) {\n          this.ctrlSlider();\n        } else {\n          this.addArrow();\n          this.ctrlSlider();\n        }\n      }\n    }]);\n\n    return SliderCarusel;\n  }();\n\n  var carusel = new SliderCarusel(options);\n  carusel.init();\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sliderCarusel);\n\n//# sourceURL=webpack://glo-diplom/./src/modules/sliderCarousel.js?");

/***/ }),

/***/ "./src/modules/sliderMain.js":
/*!***********************************!*\
  !*** ./src/modules/sliderMain.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar sliderMain = function sliderMain() {\n  var slider = document.querySelector('.main-slider'),\n      wrap = document.querySelector('header');\n  var slide = document.querySelectorAll('.main-slider .slide');\n  var currentSlide = 0,\n      interval;\n\n  var prevSlide = function prevSlide(elem, index) {\n    elem[index].style.display = 'none';\n  };\n\n  var nextSlide = function nextSlide(elem, index) {\n    elem[index].style.display = 'block';\n  };\n\n  var autoPlaySlide = function autoPlaySlide() {\n    slide = document.querySelectorAll('.main-slider .slide');\n    prevSlide(slide, currentSlide);\n    currentSlide++;\n\n    if (currentSlide >= slide.length) {\n      currentSlide = 0;\n    }\n\n    nextSlide(slide, currentSlide);\n  };\n\n  var startSlide = function startSlide() {\n    var time = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 2000;\n    interval = setInterval(autoPlaySlide, time);\n  };\n\n  var stopSlide = function stopSlide() {\n    clearInterval(interval);\n  };\n\n  wrap.addEventListener('mouseover', function (event) {\n    if (event.target.closest('.slide-text')) {\n      stopSlide();\n    }\n  });\n  slider.addEventListener('mouseout', function (event) {\n    if (event.target.closest('.slide-text')) {\n      startSlide();\n    }\n  });\n  startSlide(2000);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sliderMain);\n\n//# sourceURL=webpack://glo-diplom/./src/modules/sliderMain.js?");

/***/ }),

/***/ "./src/modules/sliderPhoto.js":
/*!************************************!*\
  !*** ./src/modules/sliderPhoto.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar sliderPhoto = function sliderPhoto() {\n  var slide = document.querySelectorAll('.gallery-slider>.slide'),\n      slider = document.querySelector('.gallery-slider');\n  slide.forEach(function () {\n    var liPoint = document.createElement('li');\n    liPoint.setAttribute('class', 'dots');\n    document.querySelector('.slider-dots').appendChild(liPoint);\n  });\n  var currentSlide = 0,\n      interval;\n  var dots = document.querySelectorAll('.dots');\n\n  if (currentSlide === 0) {\n    dots[0].setAttribute('class', 'dots dots-active');\n  }\n\n  var prevSlide = function prevSlide(elem, index, strClass) {\n    elem[index].classList.remove(strClass);\n  };\n\n  var nextSlide = function nextSlide(elem, index, strClass) {\n    elem[index].classList.add(strClass);\n  };\n\n  var autoPlaySlide = function autoPlaySlide() {\n    prevSlide(slide, currentSlide, 'slide-active');\n    prevSlide(dots, currentSlide, 'dots-active');\n    currentSlide++;\n\n    if (currentSlide >= slide.length) {\n      currentSlide = 0;\n    }\n\n    nextSlide(slide, currentSlide, 'slide-active');\n    nextSlide(dots, currentSlide, 'dots-active');\n  };\n\n  var startSlide = function startSlide() {\n    var time = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 2000;\n    interval = setInterval(autoPlaySlide, time);\n  };\n\n  var stopSlide = function stopSlide() {\n    clearInterval(interval);\n  };\n\n  slider.addEventListener('click', function (event) {\n    var target = event.target;\n\n    if (target.matches('#arrow-next, #arrow-prev, .dots')) {\n      prevSlide(slide, currentSlide, 'slide-active');\n      prevSlide(dots, currentSlide, 'dots-active');\n\n      if (target.matches('#arrow-next')) {\n        currentSlide++;\n      } else if (target.matches('#arrow-prev')) {\n        currentSlide--;\n      } else if (target.matches('.dots')) {\n        dots.forEach(function (item, index) {\n          if (item === target) {\n            currentSlide = index;\n          }\n        });\n      }\n\n      if (currentSlide >= slide.length) {\n        currentSlide = 0;\n      }\n\n      if (currentSlide < 0) {\n        currentSlide = slide.length - 1;\n      }\n\n      nextSlide(slide, currentSlide, 'slide-active');\n      nextSlide(dots, currentSlide, 'dots-active');\n    }\n  });\n  slider.addEventListener('mouseover', function (event) {\n    if (event.target.matches('#arrow-next, #arrow-prev') || event.target.matches('.dots')) {\n      stopSlide();\n    }\n  });\n  slider.addEventListener('mouseout', function (event) {\n    if (event.target.matches('#arrow-next, #arrow-prev') || event.target.matches('.dots')) {\n      startSlide();\n    }\n  });\n  startSlide();\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sliderPhoto);\n\n//# sourceURL=webpack://glo-diplom/./src/modules/sliderPhoto.js?");

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