(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("React"));
	else if(typeof define === 'function' && define.amd)
		define(["React"], factory);
	else if(typeof exports === 'object')
		exports["ReactDuotone"] = factory(require("React"));
	else
		root["ReactDuotone"] = factory(root["React"]);
})(self, (__WEBPACK_EXTERNAL_MODULE__883__) => {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 371
(__unused_webpack_module, exports, __webpack_require__) {



var __createBinding = this && this.__createBinding || (Object.create ? function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  var desc = Object.getOwnPropertyDescriptor(m, k);
  if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
    desc = {
      enumerable: true,
      get: function () {
        return m[k];
      }
    };
  }
  Object.defineProperty(o, k2, desc);
} : function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
});
var __setModuleDefault = this && this.__setModuleDefault || (Object.create ? function (o, v) {
  Object.defineProperty(o, "default", {
    enumerable: true,
    value: v
  });
} : function (o, v) {
  o["default"] = v;
});
var __importStar = this && this.__importStar || function () {
  var ownKeys = function (o) {
    ownKeys = Object.getOwnPropertyNames || function (o) {
      var ar = [];
      for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
      return ar;
    };
    return ownKeys(o);
  };
  return function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
    __setModuleDefault(result, mod);
    return result;
  };
}();
var __rest = this && this.__rest || function (s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};
var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
const react_1 = __importStar(__webpack_require__(883));
const create_duotone_image_1 = __importDefault(__webpack_require__(443));
function DuotoneImage(_a) {
  var {
      src,
      primaryColor,
      secondaryColor,
      width,
      height
    } = _a,
    rest = __rest(_a, ["src", "primaryColor", "secondaryColor", "width", "height"]);
  const [duotoneImageSrc, setDuotoneImageSrc] = (0, react_1.useState)(null);
  (0, react_1.useEffect)(() => {
    const img = new Image();
    if (width !== undefined) {
      img.width = Number(width);
    }
    if (height !== undefined) {
      img.height = Number(height);
    }
    img.src = src;
    img.onload = () => {
      setDuotoneImageSrc((0, create_duotone_image_1.default)(img, primaryColor, secondaryColor));
    };
  }, [src, primaryColor, secondaryColor, width, height]);
  return react_1.default.createElement("img", Object.assign({}, rest, {
    width: width,
    height: height,
    src: duotoneImageSrc !== null && duotoneImageSrc !== void 0 ? duotoneImageSrc : undefined
  }));
}
exports["default"] = DuotoneImage;

/***/ },

/***/ 720
(__unused_webpack_module, exports) {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = createDuotoneGradient;
function createDuotoneGradient(primaryColorRGB, secondaryColorRGB) {
  const duotoneGradient = [];
  for (let i = 0; i < 256; i++) {
    const ratio = i / 255;
    duotoneGradient.push([Math.round(primaryColorRGB[0] * ratio + secondaryColorRGB[0] * (1 - ratio)), Math.round(primaryColorRGB[1] * ratio + secondaryColorRGB[1] * (1 - ratio)), Math.round(primaryColorRGB[2] * ratio + secondaryColorRGB[2] * (1 - ratio))]);
  }
  return duotoneGradient;
}

/***/ },

/***/ 443
(__unused_webpack_module, exports, __webpack_require__) {



var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
const hex_to_rgb_1 = __importDefault(__webpack_require__(89));
const create_duotone_gradient_1 = __importDefault(__webpack_require__(720));
function createDuotoneImage(imageElement, primaryColor, secondaryColor) {
  if (!imageElement || !(imageElement instanceof HTMLImageElement)) {
    throw new Error('Invalid arguments, You need to pass an image element');
  }
  if (!primaryColor || !secondaryColor) {
    throw new Error('Invalid arguments, You need to pass a primary and secondary color');
  }
  const primaryRgb = (0, hex_to_rgb_1.default)(primaryColor);
  const secondaryRgb = (0, hex_to_rgb_1.default)(secondaryColor);
  if (!primaryRgb || !secondaryRgb) {
    return null;
  }
  const duotoneGradient = (0, create_duotone_gradient_1.default)(primaryRgb, secondaryRgb);
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');
  const {
    height: imageHeight,
    width: imageWidth
  } = imageElement;
  canvas.width = imageWidth;
  canvas.height = imageHeight;
  if (!ctx) {
    return null;
  }
  ctx.drawImage(imageElement, 0, 0, imageWidth, imageHeight);
  const imageData = ctx.getImageData(0, 0, imageWidth, imageHeight);
  const pixels = imageData.data;
  for (let i = 0; i < pixels.length; i += 4) {
    const red = pixels[i];
    const green = pixels[i + 1];
    const blue = pixels[i + 2];
    // using relative luminance
    const avg = Math.round(0.2126 * red + 0.7152 * green + 0.0722 * blue);
    pixels[i] = duotoneGradient[avg][0];
    pixels[i + 1] = duotoneGradient[avg][1];
    pixels[i + 2] = duotoneGradient[avg][2];
  }
  ctx.putImageData(imageData, 0, 0);
  return canvas.toDataURL();
}
exports["default"] = createDuotoneImage;

/***/ },

/***/ 89
(__unused_webpack_module, exports) {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = hexToRgb;
function hexToRgb(hex) {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? [parseInt(result[1], 16), parseInt(result[2], 16), parseInt(result[3], 16)] : null;
}

/***/ },

/***/ 723
(__unused_webpack_module, exports, __webpack_require__) {



var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.DuotoneImage = exports.createDuotoneImage = void 0;
const create_duotone_image_1 = __importDefault(__webpack_require__(443));
exports.createDuotoneImage = create_duotone_image_1.default;
const component_1 = __importDefault(__webpack_require__(371));
exports.DuotoneImage = component_1.default;

/***/ },

/***/ 883
(module) {

module.exports = __WEBPACK_EXTERNAL_MODULE__883__;

/***/ }

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
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__(723);
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=react-duotone.js.map