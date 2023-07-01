"use strict";
(self["webpackChunkgulp_builder"] = self["webpackChunkgulp_builder"] || []).push([["src_js_components_slider_js"],{

/***/ "./src/js/components/slider.js":
/*!*************************************!*\
  !*** ./src/js/components/slider.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swiper */ "./node_modules/swiper/swiper.esm.js");

swiper__WEBPACK_IMPORTED_MODULE_0__["default"].use([swiper__WEBPACK_IMPORTED_MODULE_0__.Navigation, swiper__WEBPACK_IMPORTED_MODULE_0__.Scrollbar]);
const swiper = new swiper__WEBPACK_IMPORTED_MODULE_0__["default"]('.quality__slider', {
  slidesPerView: 'auto',
  // loop: true,
  grabCursor: true,
  spaceBetween: 40,
  scrollbar: {
    el: '.quality__scroll',
    draggable: true
  },
  navigation: {
    nextEl: '.quality__slider-btn--next',
    prevEl: '.quality__slider-btn--prev'
  }
});

/***/ })

}]);
//# sourceMappingURL=src_js_components_slider_js.main.js.map