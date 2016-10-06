/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	var Canvas = __webpack_require__( 2 );
	var Cube = __webpack_require__( 1 );
	
	window.onload = function() {
	    main();
	}
	
	var main = function() {
		var canvas = new Canvas();
		var cube = new Cube();
	}
	
	
	
	
	
	
	
	
	
	


/***/ },
/* 1 */
/***/ function(module, exports) {

	var Cube = function() {
		console.log( "Hello I am a cube" );
	}
	
	module.exports = Cube;

/***/ },
/* 2 */
/***/ function(module, exports) {

	var Canvas = function() {
		console.log( "Hello I am a canvas" );
		this.display();
	}
	
	Canvas.prototype = {
		display: function() {
	
			var canvas = document.getElementById( 'canvas' );
			console.log( canvas );
			canvas.width = 800;
			canvas.height = 800;
		    var context = canvas.getContext( '2d' );
		    context.fillStyle = "blue";
			context.fillRect(10,10, 100, 200);
		},
	}
	
	module.exports = Canvas;

/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map