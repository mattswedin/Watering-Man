/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _watering_man__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./watering_man */ \"./src/watering_man.js\");\n\ndocument.addEventListener(\"DOMContentLoaded\", function () {\n  var canvas = document.getElementById(\"canvas\");\n  var ctx = canvas.getContext('2d');\n  canvas.width = 968;\n  canvas.height = 632;\n  var bg = new Image();\n  bg.src = 'src/assets/backgrounds/sweet.png';\n\n  bg.onload = function () {\n    ctx.drawImage(bg, 0, 0, canvas.width, canvas.height);\n  };\n\n  _watering_man__WEBPACK_IMPORTED_MODULE_0__.wateringMan.draw(ctx);\n});\ndocument.addEventListener('keydown', function (event) {\n  if (event.key === 'ArrowLeft') {\n    console.log(\"left\");\n    _watering_man__WEBPACK_IMPORTED_MODULE_0__.wateringMan.x -= 10;\n    _watering_man__WEBPACK_IMPORTED_MODULE_0__.wateringMan.update();\n  } else if (event.key === 'ArrowRight') {\n    console.log(\"right\");\n    _watering_man__WEBPACK_IMPORTED_MODULE_0__.wateringMan.x += 10;\n    _watering_man__WEBPACK_IMPORTED_MODULE_0__.wateringMan.update();\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7QUFBQTtBQUdBQyxRQUFRLENBQUNDLGdCQUFULENBQTBCLGtCQUExQixFQUE4QyxZQUFZO0FBQ3RELE1BQU1DLE1BQU0sR0FBR0YsUUFBUSxDQUFDRyxjQUFULENBQXdCLFFBQXhCLENBQWY7QUFDQSxNQUFNQyxHQUFHLEdBQUdGLE1BQU0sQ0FBQ0csVUFBUCxDQUFrQixJQUFsQixDQUFaO0FBQ0FILEVBQUFBLE1BQU0sQ0FBQ0ksS0FBUCxHQUFlLEdBQWY7QUFDQUosRUFBQUEsTUFBTSxDQUFDSyxNQUFQLEdBQWdCLEdBQWhCO0FBQ0EsTUFBTUMsRUFBRSxHQUFHLElBQUlDLEtBQUosRUFBWDtBQUNBRCxFQUFBQSxFQUFFLENBQUNFLEdBQUgsR0FBUyxrQ0FBVDs7QUFDQUYsRUFBQUEsRUFBRSxDQUFDRyxNQUFILEdBQVksWUFBWTtBQUN4QlAsSUFBQUEsR0FBRyxDQUFDUSxTQUFKLENBQWNKLEVBQWQsRUFBa0IsQ0FBbEIsRUFBcUIsQ0FBckIsRUFBd0JOLE1BQU0sQ0FBQ0ksS0FBL0IsRUFBc0NKLE1BQU0sQ0FBQ0ssTUFBN0M7QUFBcUQsR0FEckQ7O0FBRUFSLEVBQUFBLDJEQUFBLENBQWlCSyxHQUFqQjtBQUVILENBWEQ7QUFjQUosUUFBUSxDQUFDQyxnQkFBVCxDQUEwQixTQUExQixFQUFxQyxVQUFVYSxLQUFWLEVBQWlCO0FBQ2xELE1BQUlBLEtBQUssQ0FBQ0MsR0FBTixLQUFjLFdBQWxCLEVBQStCO0FBQzNCQyxJQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxNQUFaO0FBQ0FsQixJQUFBQSx3REFBQSxJQUFpQixFQUFqQjtBQUNBQSxJQUFBQSw2REFBQTtBQUdILEdBTkQsTUFNTyxJQUFJZSxLQUFLLENBQUNDLEdBQU4sS0FBYyxZQUFsQixFQUFnQztBQUNuQ0MsSUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksT0FBWjtBQUNBbEIsSUFBQUEsd0RBQUEsSUFBaUIsRUFBakI7QUFDQUEsSUFBQUEsNkRBQUE7QUFDSDtBQUNKLENBWkQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9teV9wcm9qZWN0Ly4vc3JjL2luZGV4LmpzP2I2MzUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHt3YXRlcmluZ01hbn0gZnJvbSAnLi93YXRlcmluZ19tYW4nXG5cblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgZnVuY3Rpb24gKCkge1xuICAgIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2FudmFzXCIpO1xuICAgIGNvbnN0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuICAgIGNhbnZhcy53aWR0aCA9IDk2ODtcbiAgICBjYW52YXMuaGVpZ2h0ID0gNjMyO1xuICAgIGNvbnN0IGJnID0gbmV3IEltYWdlKClcbiAgICBiZy5zcmMgPSAnc3JjL2Fzc2V0cy9iYWNrZ3JvdW5kcy9zd2VldC5wbmcnO1xuICAgIGJnLm9ubG9hZCA9IGZ1bmN0aW9uICgpIHtcbiAgICBjdHguZHJhd0ltYWdlKGJnLCAwLCAwLCBjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQpfTtcbiAgICB3YXRlcmluZ01hbi5kcmF3KGN0eClcbiAgICBcbn0pO1xuXG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICBpZiAoZXZlbnQua2V5ID09PSAnQXJyb3dMZWZ0Jykge1xuICAgICAgICBjb25zb2xlLmxvZyhcImxlZnRcIilcbiAgICAgICAgd2F0ZXJpbmdNYW4ueCAtPSAxMDtcbiAgICAgICAgd2F0ZXJpbmdNYW4udXBkYXRlKClcblxuXG4gICAgfSBlbHNlIGlmIChldmVudC5rZXkgPT09ICdBcnJvd1JpZ2h0Jykge1xuICAgICAgICBjb25zb2xlLmxvZyhcInJpZ2h0XCIpXG4gICAgICAgIHdhdGVyaW5nTWFuLnggKz0gMTA7XG4gICAgICAgIHdhdGVyaW5nTWFuLnVwZGF0ZSgpXG4gICAgfVxufSk7XG4iXSwibmFtZXMiOlsid2F0ZXJpbmdNYW4iLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJjYW52YXMiLCJnZXRFbGVtZW50QnlJZCIsImN0eCIsImdldENvbnRleHQiLCJ3aWR0aCIsImhlaWdodCIsImJnIiwiSW1hZ2UiLCJzcmMiLCJvbmxvYWQiLCJkcmF3SW1hZ2UiLCJkcmF3IiwiZXZlbnQiLCJrZXkiLCJjb25zb2xlIiwibG9nIiwieCIsInVwZGF0ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/watering_man.js":
/*!*****************************!*\
  !*** ./src/watering_man.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"wateringMan\": function() { return /* binding */ wateringMan; }\n/* harmony export */ });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar WateringMan = /*#__PURE__*/function () {\n  function WateringMan() {\n    _classCallCheck(this, WateringMan);\n\n    this.height = 200;\n    this.width = 200;\n    this.x = 50;\n    this.y = 400;\n    this.vel = {\n      x: 0,\n      y: 0\n    };\n    this.player = new Image();\n    this.player.src = \"src/assets/watering_man/Playerreal.png\";\n  }\n\n  _createClass(WateringMan, [{\n    key: \"draw\",\n    value: function draw(ctx) {\n      ctx.fillStyle = 'green';\n      ctx.fillRect(this.x, this.y, this.width, this.height);\n      ctx.drawImage(this.player, this.x, this.y, this.width, this.height);\n    }\n  }, {\n    key: \"update\",\n    value: function update() {\n      this.draw();\n      this.x = this.x + this.vel.x;\n      this.y = this.y + this.vel.y;\n    }\n  }]);\n\n  return WateringMan;\n}();\n\nvar wateringMan = new WateringMan();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvd2F0ZXJpbmdfbWFuLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7SUFBTUE7QUFDRix5QkFBYztBQUFBOztBQUNWLFNBQUtDLE1BQUwsR0FBYyxHQUFkO0FBQ0EsU0FBS0MsS0FBTCxHQUFhLEdBQWI7QUFDQSxTQUFLQyxDQUFMLEdBQVMsRUFBVDtBQUNBLFNBQUtDLENBQUwsR0FBUyxHQUFUO0FBQ0EsU0FBS0MsR0FBTCxHQUFXO0FBQUVGLE1BQUFBLENBQUMsRUFBRSxDQUFMO0FBQVFDLE1BQUFBLENBQUMsRUFBRTtBQUFYLEtBQVg7QUFDQSxTQUFLRSxNQUFMLEdBQWMsSUFBSUMsS0FBSixFQUFkO0FBQ0EsU0FBS0QsTUFBTCxDQUFZRSxHQUFaLEdBQWtCLHdDQUFsQjtBQUNIOzs7O1dBR0QsY0FBS0MsR0FBTCxFQUFVO0FBQ05BLE1BQUFBLEdBQUcsQ0FBQ0MsU0FBSixHQUFnQixPQUFoQjtBQUNBRCxNQUFBQSxHQUFHLENBQUNFLFFBQUosQ0FBYSxLQUFLUixDQUFsQixFQUFxQixLQUFLQyxDQUExQixFQUE2QixLQUFLRixLQUFsQyxFQUF5QyxLQUFLRCxNQUE5QztBQUNBUSxNQUFBQSxHQUFHLENBQUNHLFNBQUosQ0FBYyxLQUFLTixNQUFuQixFQUEyQixLQUFLSCxDQUFoQyxFQUFtQyxLQUFLQyxDQUF4QyxFQUEyQyxLQUFLRixLQUFoRCxFQUF1RCxLQUFLRCxNQUE1RDtBQUNIOzs7V0FJRCxrQkFBUztBQUNMLFdBQUtZLElBQUw7QUFDQSxXQUFLVixDQUFMLEdBQVMsS0FBS0EsQ0FBTCxHQUFTLEtBQUtFLEdBQUwsQ0FBU0YsQ0FBM0I7QUFDQSxXQUFLQyxDQUFMLEdBQVMsS0FBS0EsQ0FBTCxHQUFTLEtBQUtDLEdBQUwsQ0FBU0QsQ0FBM0I7QUFDSDs7Ozs7O0FBRUwsSUFBTVUsV0FBVyxHQUFHLElBQUlkLFdBQUosRUFBcEIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9teV9wcm9qZWN0Ly4vc3JjL3dhdGVyaW5nX21hbi5qcz9jZTM1Il0sInNvdXJjZXNDb250ZW50IjpbImNsYXNzIFdhdGVyaW5nTWFue1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmhlaWdodCA9IDIwMDtcbiAgICAgICAgdGhpcy53aWR0aCA9IDIwMDtcbiAgICAgICAgdGhpcy54ID0gNTA7XG4gICAgICAgIHRoaXMueSA9IDQwMDtcbiAgICAgICAgdGhpcy52ZWwgPSB7IHg6IDAsIHk6IDAgfVxuICAgICAgICB0aGlzLnBsYXllciA9IG5ldyBJbWFnZSgpO1xuICAgICAgICB0aGlzLnBsYXllci5zcmMgPSBcInNyYy9hc3NldHMvd2F0ZXJpbmdfbWFuL1BsYXllcnJlYWwucG5nXCJcbiAgICB9O1xuICAgIFxuXG4gICAgZHJhdyhjdHgpIHtcbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9ICdncmVlbic7XG4gICAgICAgIGN0eC5maWxsUmVjdCh0aGlzLngsIHRoaXMueSwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpXG4gICAgICAgIGN0eC5kcmF3SW1hZ2UodGhpcy5wbGF5ZXIsIHRoaXMueCwgdGhpcy55LCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCk7XG4gICAgfVxuXG4gICAgXG5cbiAgICB1cGRhdGUoKSB7XG4gICAgICAgIHRoaXMuZHJhdygpXG4gICAgICAgIHRoaXMueCA9IHRoaXMueCArIHRoaXMudmVsLng7XG4gICAgICAgIHRoaXMueSA9IHRoaXMueSArIHRoaXMudmVsLnk7XG4gICAgfSAgIFxufVxuY29uc3Qgd2F0ZXJpbmdNYW4gPSBuZXcgV2F0ZXJpbmdNYW47XG5leHBvcnQge3dhdGVyaW5nTWFufTtcbiJdLCJuYW1lcyI6WyJXYXRlcmluZ01hbiIsImhlaWdodCIsIndpZHRoIiwieCIsInkiLCJ2ZWwiLCJwbGF5ZXIiLCJJbWFnZSIsInNyYyIsImN0eCIsImZpbGxTdHlsZSIsImZpbGxSZWN0IiwiZHJhd0ltYWdlIiwiZHJhdyIsIndhdGVyaW5nTWFuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/watering_man.js\n");

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
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;