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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! fonts/lemon_milk/LEMONMILK-BoldItalic.otf */ \"./src/fonts/lemon_milk/LEMONMILK-BoldItalic.otf\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! fonts/lemon_milk/LEMONMILK-Light.otf */ \"./src/fonts/lemon_milk/LEMONMILK-Light.otf\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! fonts/lemon_milk/LEMONMILK-Bold.otf */ \"./src/fonts/lemon_milk/LEMONMILK-Bold.otf\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap);\"]);\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap);\"]);\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\nvar ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);\nvar ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `* {\n    padding: 0;\n    margin: 0;\n}\n\n@font-face {\n    font-family: 'lemon-italic-bold';\n    src: url(${___CSS_LOADER_URL_REPLACEMENT_0___}) format('opentype');\n}\n\n@font-face {\n    font-family: 'lemon-light';\n    src: url(${___CSS_LOADER_URL_REPLACEMENT_1___}) format('opentype');\n}\n\n@font-face {\n    font-family: 'lemon-bold';\n    src: url(${___CSS_LOADER_URL_REPLACEMENT_2___}) format('opentype');\n}\n\nbody {\n    display: flex;\n    justify-content: center;\n    flex-direction: column;\n    background-color: pink;\n    font-family: 'Inter', sans-serif;\n    align-items: center;\n}\n\nnav {\n    display: flex;\n    justify-content: flex-end;\n    gap: 5px;\n    padding: 10px;\n    background-color: pink;\n    box-shadow: 5px 5px 5px;\n    margin-bottom: 15px;\n    width: 95%;\n    height: 100%;\n}\n\nnav button {\n    cursor: pointer;\n    transition: transform 0.3s;\n}\n\nnav button:hover {\n    transform: translateY(-5px);\n}\n\nheader {\n    overflow: visible;\n    position: sticky;\n    top: 0;\n    align-self: flex-end;\n    margin-right: 8vw;\n}\n\nbutton {\n    background-color: transparent;\n    border-color: transparent;\n    font-size: 1.6vh;\n    font-family: 'lemon-light';\n}\n\ndiv#content {\n    display: flex;\n    justify-content: center;\n    flex-direction: column;\n    align-items: center;\n    background-color: rgb(236, 90, 139);\n    width: 50vw;\n    height: 120vh;\n    align-self: center;\n    padding: 50px;\n    box-shadow: 10px 10px 5px;\n    margin-bottom: 50px;\n}\n\np#about {\n    width: 40vw;\n    font-family: 'Montserrat';\n}\n\nh1#welcome {\n    font-size: 5vh;\n    font-family: 'lemon-bold', sans-serif;\n    margin: 20px;\n}\n\nh1#about-header {\n    align-self: flex-start;\n    padding-left: 10px;\n    margin-bottom: 10px;\n    font-family: 'lemon-italic-bold'\n}\n\n.about-container {\n    background-color: rgb(236, 220, 220);\n    padding: 12px;\n    border-radius: 13px;\n    box-shadow: 7px 7px;\n}\n\nul {\n    list-style-type: none;\n}\n\n.hours-container {\n    background-color: rgb(236, 220, 220);\n    margin: 15px;\n    border-radius: 13px;\n    padding: 20px;\n    width: 15vw;\n    box-shadow: 7px 7px;\n    font-family: 'Montserrat';\n    \n}\n\n.second-container {\n    display: flex;\n    justify-content: space-between;\n}\n\nh1#hours {\n    margin-bottom: 10px;\n    font-family: 'lemon-italic-bold';\n}\n\n.location-container {\n    margin: 15px;\n    border-radius: 13px;\n    padding: 20px;\n    background-color: rgb(236, 220, 220);\n    height: 10vh;\n    box-shadow: 7px 7px;\n    font-family: 'Montserrat';\n}\n\nh1.location {\n    font-family: 'lemon-italic-bold'\n}\n\n.bottom-container {\n    background-color: rgb(236, 220, 220);\n    width: 100%;\n    height: 100%;\n    box-shadow: 7px 7px;\n    display: flex;\n    flex-direction: column;\n}\n\n.lemon-container {\n    width: 100%;\n    height: 50%;\n    display: flex;\n    padding: 15px;\n    align-items: center;\n    justify-content: space-around;\n}\n\n.lemon-about {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    font-family: 'Montserrat'\n}\n\n#lemon {\n    height: 14vw;\n    margin: 12px;\n    box-shadow: 5px 5px 5px;\n}\n\n.lemon-header {\n    font-family: 'lemon-bold'\n}\n\n.lemon-text {\n    width: 8vw;\n}\n\n.biscoff-container {\n    display: flex;\n    height: 50%;\n    width: 100%;\n    align-items: center;\n    font-family: 'Montserrat';\n    justify-content: space-around;\n}\n\n.biscoff-header {\n    font-family: 'lemon-bold'\n}\n\n.biscoff-text {\n    width: 8vw;\n}\n\n#biscoff {\n    height: 15vw;\n    width: 15vw;\n    box-shadow: 5px 5px 5px;\n}\n\n#menu-content {\n    display: grid;\n    grid: repeat(3, 1fr) / 1fr 1fr;\n    height: 125vh;\n    width: 55vw;\n    box-shadow: 10px 10px 5px;\n    background-color: rgb(236, 90, 139);\n    margin-bottom: 40px;\n    padding:15px;\n    gap: 10px;\n    place-items: center;\n}\n\n#biscoff-menu, #lemon-menu,\n#cheese-menu {\n    background-color: rgb(236, 220, 220);\n    box-shadow: 7px 7px 5px;\n    border-radius: 8px;\n    width: 90%;\n    height: 90%;\n    display: flex;\n    flex-direction: column;\n    font-family: 'Montserrat';\n    padding: 25px;\n    box-sizing: border-box;\n}\n\n#cheesecake-img-menu,\n#biscoff-img-menu,\n#lemon-img-menu {\n    height: 36vh;\n    width: 25vw;\n    border-radius: 8px;\n    box-shadow: 5px 5px 5px;\n}\n\n#biscoff-menu h1, #lemon-menu h1,\n#cheese-menu h1 {\n    font-family: 'lemon-italic-bold';\n    margin: 10px;\n    font-size: 4vh;\n}\n\n#biscoff-menu p, #lemon-menu p,\n#cheese-menu p {\n    margin: 10px;\n    font-size: 2vh;\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://restaurant-homepage/./src/styles.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://restaurant-homepage/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n  if (!url) {\n    return url;\n  }\n  url = String(url.__esModule ? url.default : url);\n\n  // If url is already wrapped in quotes, remove them\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n  if (options.hash) {\n    url += options.hash;\n  }\n\n  // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n  return url;\n};\n\n//# sourceURL=webpack://restaurant-homepage/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://restaurant-homepage/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://restaurant-homepage/./src/styles.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://restaurant-homepage/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://restaurant-homepage/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://restaurant-homepage/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://restaurant-homepage/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://restaurant-homepage/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://restaurant-homepage/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ \"./src/styles.css\");\n/* harmony import */ var _loadhome_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./loadhome.js */ \"./src/loadhome.js\");\n/* harmony import */ var _loadmenu_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./loadmenu.js */ \"./src/loadmenu.js\");\n\n\n\n\nconsole.log('before loadhome');\n\ndocument.addEventListener('DOMContentLoaded', () => {\n    console.log('DOM fully loaded and parsed');\n\n    // Load home content initially\n    (0,_loadhome_js__WEBPACK_IMPORTED_MODULE_1__.loadhome)();\n\n    // Get the buttons\n    const menuBtn = document.getElementById('menu');\n    const homeBtn = document.getElementById('home');\n\n    // Check if buttons exist before adding event listeners\n    if (menuBtn) {\n        menuBtn.addEventListener('click', _loadmenu_js__WEBPACK_IMPORTED_MODULE_2__.loadmenu);\n    } else {\n        console.error(\"Menu button not found.\");\n    }\n\n    if (homeBtn) {\n        homeBtn.addEventListener('click', _loadhome_js__WEBPACK_IMPORTED_MODULE_1__.loadhome);\n    } else {\n        console.error(\"Home button not found.\");\n    }\n});\n\nconsole.log('after loadhome');\n\nconsole.log(\"hello world\")\n\n//# sourceURL=webpack://restaurant-homepage/./src/index.js?");

/***/ }),

/***/ "./src/loadhome.js":
/*!*************************!*\
  !*** ./src/loadhome.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   loadhome: () => (/* binding */ loadhome)\n/* harmony export */ });\n/* harmony import */ var _images_biscoff_cake_jpeg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/biscoff-cake.jpeg */ \"./src/images/biscoff-cake.jpeg\");\n/* harmony import */ var _images_lemon_cake_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/lemon-cake.jpg */ \"./src/images/lemon-cake.jpg\");\n\n\n\nfunction loadhome() {\n    let content;\n\n    if (document.getElementById('menu-content')) {\n        content = document.getElementById('menu-content'); // If 'menu-content' exists\n    } else {\n        content = document.getElementById('content'); // If 'menu-content' doesn't exist\n    }\n    content.innerHTML = ''\n    content.id = 'content'\n\n    // Create and append the welcome header\n    const welcomeHeader = document.createElement('h1');\n    welcomeHeader.id = 'welcome';\n    welcomeHeader.textContent = \"Welcome to Michael's\";\n    content.appendChild(welcomeHeader);\n\n    // Create and append the about section\n    const aboutContainer = document.createElement('div');\n    aboutContainer.className = 'about-container';\n\n    const aboutHeader = document.createElement('h1');\n    aboutHeader.id = 'about-header';\n    aboutHeader.textContent = 'ABOUT';\n    aboutContainer.appendChild(aboutHeader);\n\n    const aboutText = document.createElement('p');\n    aboutText.id = 'about';\n    aboutText.textContent = \"At Michael's, we believe that every bite should be a moment of pure indulgence. Nestled in the heart of the city, Michael's is a high-end bakery renowned for its exquisite pastries, artisanal breads, and decadent desserts. Our master bakers, trained in the finest traditions, craft each item with meticulous care and attention to detail, using only the highest quality ingredients. From the delicate layers of our buttery croissants to the rich, velvety texture of our signature cakes, every creation at Michael's is a testament to our commitment to excellence. Whether you're celebrating a special occasion or simply treating yourself, Michael's offers an unforgettable culinary experience that delights the senses and elevates the art of baking to new heights.\";\n    aboutContainer.appendChild(aboutText);\n\n    content.appendChild(aboutContainer);\n\n    // Create and append the second container with hours and location\n    const secondContainer = document.createElement('div');\n    secondContainer.className = 'second-container';\n\n    // Hours container\n    const hoursContainer = document.createElement('div');\n    hoursContainer.className = 'hours-container';\n\n    const hoursHeader = document.createElement('h1');\n    hoursHeader.id = 'hours';\n    hoursHeader.textContent = 'HOURS';\n    hoursContainer.appendChild(hoursHeader);\n\n    const hoursList = document.createElement('ul');\n    const hours = [\n        \"Monday: 11:00 AM - 10:00 PM\",\n        \"Tuesday: 11:00 AM - 10:00 PM\",\n        \"Wednesday: 11:00 AM - 10:00 PM\",\n        \"Thursday: 11:00 AM - 10:00 PM\",\n        \"Friday: 11:00 AM - 11:00 PM\",\n        \"Saturday: 11:00 AM - 11:00 PM\",\n        \"Sunday: 11:00 AM - 09:00 PM\"\n    ];\n\n    hours.forEach(hour => {\n        const li = document.createElement('li');\n        li.textContent = hour;\n        hoursList.appendChild(li);\n    });\n\n    hoursContainer.appendChild(hoursList);\n    secondContainer.appendChild(hoursContainer);\n\n    // Location container\n    const locationContainer = document.createElement('div');\n    locationContainer.className = 'location-container';\n\n    const locationHeader = document.createElement('h1');\n    locationHeader.className = 'location';\n    locationHeader.textContent = 'LOCATION';\n    locationContainer.appendChild(locationHeader);\n\n    const locationText = document.createElement('p');\n    locationText.textContent = \"123 Maple Avenue, Suite 400, Springfield, IL 62704, USA\";\n    locationContainer.appendChild(locationText);\n\n    secondContainer.appendChild(locationContainer);\n\n    content.appendChild(secondContainer);\n\n    const bottomContainer = document.createElement('div')\n    bottomContainer.className = 'bottom-container'\n    content.appendChild(bottomContainer)\n\n\n    const lemonDiv = document.createElement('div');\n    lemonDiv.className = 'lemon-container'\n    bottomContainer.appendChild(lemonDiv)\n\n    const lemon = document.createElement('img');\n    lemon.src = _images_lemon_cake_jpg__WEBPACK_IMPORTED_MODULE_1__\n    lemon.id = 'lemon'\n    lemonDiv.appendChild(lemon)\n\n    const lemonAbout = document.createElement('div')\n    lemonAbout.className = 'lemon-about'\n    lemonDiv.appendChild(lemonAbout)\n\n    const lemonHeader = document.createElement('h1')\n    lemonHeader.className = 'lemon-header'\n    lemonHeader.textContent = 'Lovely Lemon Loaf'\n    const lemonText = document.createElement('p')\n    lemonText.className = \"lemon-text\"\n    lemonText.textContent = \"A moist, zesty cake bursting with citrus sweetness—perfectly balanced and light.\"\n    lemonAbout.appendChild(lemonHeader)\n    lemonAbout.appendChild(lemonText)\n\n\n    const biscoffDiv = document.createElement('div')\n    biscoffDiv.className = 'biscoff-container'\n    bottomContainer.appendChild(biscoffDiv)\n\n    const biscoffAbout = document.createElement('div')\n    biscoffDiv.appendChild(biscoffAbout)\n\n\n    const biscoffHeader = document.createElement('h1')\n    biscoffHeader.className = 'biscoff-header'\n    biscoffHeader.textContent = \"Butter Biscoff Bliss\"\n    const biscoffText = document.createElement('p')\n    biscoffText.className = 'biscoff-text'\n    biscoffText.textContent = \"A rich, buttery cake with spiced caramel flavors from irresistible Biscoff.\"\n    biscoffAbout.appendChild(biscoffHeader)\n    biscoffAbout.appendChild(biscoffText)\n\n    const biscoff = document.createElement('img');\n    biscoff.src = _images_biscoff_cake_jpeg__WEBPACK_IMPORTED_MODULE_0__\n    biscoff.id = 'biscoff'\n    biscoffDiv.appendChild(biscoff)\n}\n\n\n//# sourceURL=webpack://restaurant-homepage/./src/loadhome.js?");

/***/ }),

/***/ "./src/loadmenu.js":
/*!*************************!*\
  !*** ./src/loadmenu.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   loadmenu: () => (/* binding */ loadmenu)\n/* harmony export */ });\n/* harmony import */ var _images_biscoff_cake_jpeg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/biscoff-cake.jpeg */ \"./src/images/biscoff-cake.jpeg\");\n/* harmony import */ var _images_lemon_cake_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/lemon-cake.jpg */ \"./src/images/lemon-cake.jpg\");\n/* harmony import */ var _images_cheesecake_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images/cheesecake.jpg */ \"./src/images/cheesecake.jpg\");\n\n\n\n\nfunction loadmenu() {\n    let content;\n\n    if (document.getElementById('menu-content')) {\n        content = document.getElementById('menu-content'); // If 'menu-content' exists\n    } else {\n        content = document.getElementById('content'); // If 'menu-content' doesn't exist\n    }\n    content.innerHTML = ''\n    content.id = 'menu-content'\n\n    const biscoff = document.createElement('img')\n    biscoff.src = _images_biscoff_cake_jpeg__WEBPACK_IMPORTED_MODULE_0__\n    biscoff.id = 'biscoff-img-menu'\n    \n    const biscoffMenu = document.createElement('div')\n    biscoffMenu.id = 'biscoff-menu'\n\n    const biscoffMenuHeader = document.createElement('h1')\n    biscoffMenuHeader.textContent = \"Biscoff Tres Leches\"\n    const biscoffMenuText = document.createElement('p')\n    biscoffMenuText.textContent = \"An indulgent twist on the classic tres leches cake, this dessert is soaked in a rich combination of three creamy milks and topped with a luscious layer of Biscoff spread. The spiced caramel notes of Biscoff perfectly complement the soft, moist texture of the cake, making each bite a heavenly experience.\"\n\n    const lemon = document.createElement('img')\n    lemon.src = _images_lemon_cake_jpg__WEBPACK_IMPORTED_MODULE_1__\n    lemon.id = 'lemon-img-menu'\n\n    const lemonMenu = document.createElement('div')\n    lemonMenu.id = 'lemon-menu'\n\n    const lemonMenuHeader = document.createElement('h1')\n    lemonMenuHeader.textContent = 'Lemon Cake'\n    const lemonMenuText = document.createElement('p')\n    lemonMenuText.textContent = 'A zesty and refreshing treat bursting with bright citrus flavor. This moist lemon cake is infused with fresh lemon juice and zest, delivering a perfect balance of sweet and tangy with every bite. Finished with a light, sugary glaze, it’s a delightful dessert for any occasion.'\n\n    const cheesecake = document.createElement('img')\n    cheesecake.src = _images_cheesecake_jpg__WEBPACK_IMPORTED_MODULE_2__\n    cheesecake.id = 'cheesecake-img-menu'\n\n    const cheeseMenu = document.createElement('div')\n    cheeseMenu.id = 'cheese-menu'\n\n    const cheeseMenuHeader = document.createElement('h1')\n    cheeseMenuHeader.textContent = \"Cherry Cheesecake\"\n    const cheeseMenuText = document.createElement('p')\n    cheeseMenuText.textContent = \"A smooth and creamy cheesecake topped with a vibrant cherry compote. The tangy sweetness of the cherries contrasts beautifully with the rich, velvety cheesecake, all resting on a buttery graham cracker crust. It’s the perfect blend of flavors and textures for a show-stopping dessert.\"\n\n    content.appendChild(biscoff)\n    content.appendChild(biscoffMenu)\n    biscoffMenu.appendChild(biscoffMenuHeader)\n    biscoffMenu.appendChild(biscoffMenuText)\n    content.appendChild(lemon)\n    content.appendChild(lemonMenu)\n    lemonMenu.appendChild(lemonMenuHeader)\n    lemonMenu.appendChild(lemonMenuText)\n    content.appendChild(cheesecake)\n    content.appendChild(cheeseMenu)\n    cheeseMenu.appendChild(cheeseMenuHeader)\n    cheeseMenu.appendChild(cheeseMenuText)\n\n    \n\n}\n\n//# sourceURL=webpack://restaurant-homepage/./src/loadmenu.js?");

/***/ }),

/***/ "./src/fonts/lemon_milk/LEMONMILK-Bold.otf":
/*!*************************************************!*\
  !*** ./src/fonts/lemon_milk/LEMONMILK-Bold.otf ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"fonts/LEMONMILK-Bold.otf\";\n\n//# sourceURL=webpack://restaurant-homepage/./src/fonts/lemon_milk/LEMONMILK-Bold.otf?");

/***/ }),

/***/ "./src/fonts/lemon_milk/LEMONMILK-BoldItalic.otf":
/*!*******************************************************!*\
  !*** ./src/fonts/lemon_milk/LEMONMILK-BoldItalic.otf ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"fonts/LEMONMILK-BoldItalic.otf\";\n\n//# sourceURL=webpack://restaurant-homepage/./src/fonts/lemon_milk/LEMONMILK-BoldItalic.otf?");

/***/ }),

/***/ "./src/fonts/lemon_milk/LEMONMILK-Light.otf":
/*!**************************************************!*\
  !*** ./src/fonts/lemon_milk/LEMONMILK-Light.otf ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"fonts/LEMONMILK-Light.otf\";\n\n//# sourceURL=webpack://restaurant-homepage/./src/fonts/lemon_milk/LEMONMILK-Light.otf?");

/***/ }),

/***/ "./src/images/biscoff-cake.jpeg":
/*!**************************************!*\
  !*** ./src/images/biscoff-cake.jpeg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"images/biscoff-cake.jpeg\";\n\n//# sourceURL=webpack://restaurant-homepage/./src/images/biscoff-cake.jpeg?");

/***/ }),

/***/ "./src/images/cheesecake.jpg":
/*!***********************************!*\
  !*** ./src/images/cheesecake.jpg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"images/cheesecake.jpg\";\n\n//# sourceURL=webpack://restaurant-homepage/./src/images/cheesecake.jpg?");

/***/ }),

/***/ "./src/images/lemon-cake.jpg":
/*!***********************************!*\
  !*** ./src/images/lemon-cake.jpg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"images/lemon-cake.jpg\";\n\n//# sourceURL=webpack://restaurant-homepage/./src/images/lemon-cake.jpg?");

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
/******/ 			id: moduleId,
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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
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