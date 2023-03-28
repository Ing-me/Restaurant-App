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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"*,\\n*::after,\\n*::before{\\n    margin: 0;\\n    padding: 0;\\n    box-sizing: border-box;\\n}\\n:root{\\n    --bg-primary: #334155;\\n    --bg-secondary: #0f172a;\\n    --text-primary: #f8fafc;\\n    --text-secondary:#f59e0b;\\n    --font-size: 16px;\\n}\\n\\n.container{\\n    background-color: var(--bg-primary);\\n    width: 100vw;\\n    height: 100vh;\\n    display: flex;\\n    flex-direction: column;\\n}\\n.navBar{\\n    background-color: var(--bg-secondary);\\n    display: flex;\\n    justify-content: space-between;\\n    align-items: center;\\n    color: white;\\n    padding: 20px 50px;\\n    position: sticky;\\n    top: 0;\\n    left: 0;\\n    width: 100%;\\n}\\n.logo{\\n    font-weight: 800;\\n    font-size: 2.5rem;\\n    text-transform: uppercase;\\n}\\n.link-navigation{\\n    display: flex;\\n    justify-content: space-between;\\n    align-items: center;\\n    list-style: none;\\n}\\n.link{\\n    border: 1px solid white;\\n    margin-right: 1rem;\\n    padding: 10px 15px;\\n    cursor: pointer;\\n}\\n.link-item{\\n    color: var(--text-primary);\\n}\\n.link:last-of-type{\\n    margin-right: 0;\\n}\\n.link-item{\\n    font-size: 1.2rem;\\n    text-decoration: none;\\n}\\n.link:hover{\\n    background-color: var(--bg-primary);\\n    transition: 1s ease-in-out;\\n}\\n.menuBtn{\\n    display: none;\\n}\\n\\n.main{\\n    display: flex;\\n    align-items: center;\\n    justify-content: flex-start;\\n    flex-direction: column;\\n    width: 100%;\\n    max-height: 80%;\\n    overflow-y: scroll;\\n}\\n.menu{\\n    padding: 2rem 2rem;\\n    margin: 20px 0px;\\n    flex-wrap: wrap;\\n}\\n.menuText{\\n    text-align: center;\\n    font-size: 2rem;\\n    color: var(--text-primary);\\n}\\n\\n.menuContainer{\\n    display: flex;\\n    justify-content: center;\\n    align-items: center;\\n    width: 100%;    \\n}\\n.prestigeImage{\\n    width: 500px;\\n    height: 750px;\\n    cursor: pointer;\\n    transition: all 1.5s;\\n}\\n.prestigeImage:hover{\\n    transform: rotateY(20deg)\\n}\\n\\n.cards{\\n    display: grid;\\n   grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));\\n    grid-auto-rows: 350px;\\n    gap: 15px;\\n    margin-left: 30px;\\n}\\n.card{\\n    background-color: var(--bg-secondary);\\n    display: flex;\\n    justify-content: center;\\n    align-items: center;\\n    flex-direction: column;\\n    padding: 20px;\\n    cursor: pointer;\\n    transition: all 1s;\\n}\\n.card:hover{\\n    transform: rotateY(15deg)\\n}\\n.cardBody{\\n    color: var(--text-primary);\\n    line-height: 1.5;\\n}\\n.cardImage{\\n    width: 250px;\\n    height: 250px;\\n}\\n.reservation{\\n    background-color: var(--bg-secondary);\\n    width: 100%;\\n    display: flex;\\n    justify-content: center;\\n    align-items: center;\\n    flex-direction: column;\\n}\\n.reservation > h1{\\n    color: var(--text-primary);\\n    margin-top: 50px;\\n    padding: 30px 0px;\\n    font-size: 2rem;\\n    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;\\n    font-style: italic;\\n}\\n.form{\\n    padding: 30px 5px;\\n    margin-top: 10px;\\n    margin-bottom: 50px;\\n    display: flex;\\n    justify-content: center;\\n    align-items: center;\\n    flex-wrap: wrap;\\n}\\n.form > input[type=\\\"text\\\"],\\n.form > input[type=\\\"email\\\"]\\n{\\n    padding: 10px 10px;\\n    margin-right: 10px;\\n    margin-top: 10px;\\n    width: 45%;\\n    border-radius: 20px;\\n    border: 1px solid var(--bg-primary);\\n    background-color: var(--bg-secondary);\\n    color: var(--text-primary);\\n    font-size: .8rem;\\n}\\n.form > input[type=\\\"phone\\\"],\\n.form > input[type=\\\"number\\\"],\\n.form > input[type=\\\"date\\\"]{\\n    padding: 10px 10px;\\n    margin-right: 10px;\\n    margin-top: 20px;\\n    width: 30%;\\n    border-radius: 20px;\\n    border: 1px solid var(--bg-primary);\\n    background-color: var(--bg-secondary);\\n    color: var(--text-primary);\\n    font-size: .8rem;\\n}\\n.form > input[type=\\\"submit\\\"]{\\n    padding: 10px 10px;\\n    margin-right: 10px;\\n    margin-top: 20px;\\n    width: 25%; \\n    border-radius: 20px;\\n    border: none;\\n    background-color: var(--bg-primary);\\n    color: var(--text-primary);\\n    cursor: pointer;\\n    transition: ease-in-out .5s;\\n}\\n.form > input[type=\\\"submit\\\"]:hover{\\n    background-color: var(--text-secondary);\\n    opacity: .7;\\n}\\n.form > textarea[type=\\\"text\\\"]{\\n    background-color: var(--bg-secondary);\\n    width: 90%;\\n    margin-top: 10px;\\n    padding: 15px;\\n    color: var(--text-primary);\\n}\\n.contact > .form > input[type=\\\"submit\\\"]{\\n    background-color: var(--bg-secondary);\\n}\\n\\n.contact{\\n    width: 100%;\\n    display: flex;\\n    justify-content: center;\\n    align-items: center;\\n    flex-direction: column;\\n    padding: 30px 0px;\\n}\\n.contact > h1{\\n    color: var(--text-primary);\\n    font-size: 2rem;\\n    font-style: italic;\\n}\\n\\n.footer{\\n    background-color: var(--bg-secondary);\\n    color: var(--text-primary);\\n    display: flex;\\n    flex-direction: column;\\n    justify-content: center;\\n    align-items: center;\\n    margin-top: 10px;\\n    padding: 10px 0;\\n    position: absolute;\\n    bottom: 0;\\n    left: 0;\\n    width: 100%;\\n}\\n.footer > .p-text{\\n    padding: 5px 0;\\n}\\n\\n\\n\\n\\n\\n\\n@media (max-width: 800px) {\\n    .container{\\n        display: flex;\\n    }\\n    .logo{\\n        font-size: 1.7rem;\\n        text-align: center;\\n        color: var(--text-secondary);\\n    }\\n    .menuBtn{\\n        display: flex;\\n    }\\n    .link-navigation{\\n        display: flex;\\n        flex-direction: column;\\n        justify-content: center;\\n        align-items: center;\\n        position: fixed;\\n        height: 100vh;\\n        background-color: var(--bg-secondary);\\n        width: 100%;\\n        top: 50px;\\n        left: -100%;\\n        transition: all 1s;\\n        z-index: 1;\\n    }\\n    .link{\\n        margin-bottom: 20px;\\n        border-left: none;\\n        border-top: none;\\n        border-right: none;\\n        border-bottom: 1px solid var(--text-secondary);\\n        width: 150px;\\n        text-align: center;\\n        color: var(--text-secondary);\\n    }\\n    .link-navigation.active{\\n        left: 0;\\n    }\\n    .link-item{\\n        color: var(--text-secondary);\\n    }\\n    .menu{\\n        margin: 10px 0px;\\n        padding: 5px 10px;\\n        width: 100%;\\n        \\n    }\\n    .menuContainer{\\n        margin: 30px auto;\\n        padding: 5px 0;\\n    }\\n    .prestigeImage{\\n       display: none;\\n    }\\n    .cards{\\n        margin: 0;\\n    }\\n    .form{\\n        display: flex;\\n        flex-direction: column;\\n        justify-content: center;\\n        align-items: center;\\n        width: 90%;\\n    }\\n    .reservation > h1{\\n        color: var(--text-secondary);\\n        font-size: 1.5rem;\\n        margin-top: 30px;\\n    }\\n    .form > input[type=\\\"text\\\"],\\n    .form > input[type=\\\"email\\\"]\\n    {   \\n        width: 100%;\\n        border-radius: 20px;\\n        border: 1px solid var(--bg-primary);\\n        background-color: var(--bg-secondary);\\n        color: var(--text-secondary);\\n        font-size: 1rem;\\n    }\\n    .form > input[type=\\\"phone\\\"],\\n    .form > input[type=\\\"number\\\"],\\n    .form > input[type=\\\"date\\\"],\\n    .form > textarea[type=\\\"text\\\"]\\n    {   \\n        width: 100%;\\n        border-radius: 20px;\\n        border: 1px solid var(--bg-primary);\\n        background-color: var(--bg-secondary);\\n        color: var(--text-secondary);\\n        font-size: 1rem;\\n    }\\n    .form > input[type=\\\"submit\\\"]{       \\n        width: 80%; \\n        border-radius: 20px;\\n        border: none;\\n        background-color: var(--text-secondary);\\n        color: var(--text-primary); \\n        opacity: .6;\\n        font-size: 1rem;\\n        padding: 10px 0px;\\n    }\\n    .form > input[type=\\\"submit\\\"]:hover{\\n        opacity: .9;\\n    }\\n    .footer{\\n        background-color: var(--bg-secondary);\\n        color: var(--text-primary);\\n        display: flex;\\n        flex-direction: column;\\n        justify-content: center;\\n        align-items: center;\\n        margin-top: 10px;\\n        padding: 10px 0;\\n        position: absolute;\\n        bottom: 0;\\n        left: 0;\\n        width: 100%;\\n    }\\n    .footer > .p-text{\\n        color: var(--text-secondary);\\n    }\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://restaurant-app/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://restaurant-app/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://restaurant-app/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://restaurant-app/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://restaurant-app/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://restaurant-app/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://restaurant-app/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://restaurant-app/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://restaurant-app/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://restaurant-app/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/cards.js":
/*!**********************!*\
  !*** ./src/cards.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _createElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createElement */ \"./src/createElement.js\");\n/* harmony import */ var _menu1_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu1.jpg */ \"./src/menu1.jpg\");\n/* harmony import */ var _menu2_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu2.jpg */ \"./src/menu2.jpg\");\n/* harmony import */ var _menu3_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./menu3.jpg */ \"./src/menu3.jpg\");\n/* harmony import */ var _menu5_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./menu5.jpg */ \"./src/menu5.jpg\");\n\n\n\n\n\n\nconst createCards =  () => {\n const cards = (0,_createElement__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('div', null, 'cards')\n const card = (0,_createElement__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('div',null, 'card')\n const card1 = (0,_createElement__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('div',null, 'card')\n const card2 = (0,_createElement__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('div',null, 'card')\n const card3 = (0,_createElement__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('div',null, 'card')\n const cardHeader = (0,_createElement__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('div', null, 'cardHeader')\n const cardHeader1 = (0,_createElement__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('div', null, 'cardHeader')\n const cardHeader2 = (0,_createElement__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('div', null, 'cardHeader')\n const cardHeader3 = (0,_createElement__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('div', null, 'cardHeader')\n\n const cardBody = (0,_createElement__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('div', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry.', 'cardBody')\n const cardBody1 = (0,_createElement__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('div', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry.', 'cardBody')\n const cardBody2 = (0,_createElement__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('div', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry', 'cardBody')\n const cardBody3 = (0,_createElement__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('div', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry.', 'cardBody')\n\n const Mymenu = new Image();\n Mymenu.src = _menu1_jpg__WEBPACK_IMPORTED_MODULE_1__\n Mymenu.classList.add('cardImage')\n\n const Mymenu1 = new Image();\n Mymenu1.src = _menu2_jpg__WEBPACK_IMPORTED_MODULE_2__\n Mymenu1.classList.add('cardImage')\n\n const Mymenu2 = new Image();\n Mymenu2.src = _menu3_jpg__WEBPACK_IMPORTED_MODULE_3__\n Mymenu2.classList.add('cardImage')\n\n const Mymenu4 = new Image();\n Mymenu4.src = _menu5_jpg__WEBPACK_IMPORTED_MODULE_4__\n Mymenu4.classList.add('cardImage')\n\n cardHeader.appendChild(Mymenu)\n cardHeader1.appendChild(Mymenu1)\n cardHeader2.appendChild(Mymenu2)\n cardHeader3.appendChild(Mymenu4)\n\n card.appendChild(cardHeader)\n card.appendChild(cardBody)\n\n card1.appendChild(cardHeader1)\n card1.appendChild(cardBody1)\n\n card2.appendChild(cardHeader2)\n card2.appendChild(cardBody2)\n\n card3.appendChild(cardHeader3)\n card3.appendChild(cardBody3)\n\n cards.appendChild(card)\n cards.appendChild(card1)\n cards.appendChild(card2)\n cards.appendChild(card3)\n\n return cards\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createCards);\n\n\n//# sourceURL=webpack://restaurant-app/./src/cards.js?");

/***/ }),

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _createElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createElement */ \"./src/createElement.js\");\n\n\nconst createContact = () => {\n    const contact = (0,_createElement__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('section', null, 'contact')\n    contact.setAttribute(\"id\",\"contact\")\n    const form = (0,_createElement__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('form', null, 'form')\n    form.setAttribute(\"method\", \"post\")\n    const h1 = document.createElement(\"h1\")\n    h1.innerHTML = \"Contact us\"\n    \n    // Creating inputs\n    const nameInput = document.createElement(\"input\")\n    nameInput.setAttribute(\"type\", \"text\")\n    nameInput.setAttribute(\"name\", \"fulleName\")\n    nameInput.setAttribute(\"placeholder\", \"Your fullname please!\")\n\n    const emailInput = document.createElement(\"input\")\n    emailInput.setAttribute(\"type\", \"email\")\n    emailInput.setAttribute(\"name\", \"email\")\n    emailInput.setAttribute(\"placeholder\", \"Your email please!\")\n\n    const messageInput = document.createElement(\"textarea\")\n    messageInput.setAttribute(\"type\", \"text\")\n    messageInput.setAttribute(\"name\", \"message\")\n    messageInput.setAttribute(\"placeholder\", \"Your message here\")\n    messageInput.cols = 50;\n    messageInput.rows = 10\n    \n\n    const sutbmitBtn = document.createElement(\"input\")\n    sutbmitBtn.setAttribute(\"type\", \"submit\")\n    sutbmitBtn.setAttribute(\"value\", \"Submit\")\n\n    form.appendChild(nameInput)\n    form.appendChild(emailInput)\n    form.appendChild(messageInput)\n    form.appendChild(sutbmitBtn)\n\n    contact.appendChild(h1)\n    contact.appendChild(form)\n    \n    return contact\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createContact);\n\n//# sourceURL=webpack://restaurant-app/./src/contact.js?");

/***/ }),

/***/ "./src/createElement.js":
/*!******************************!*\
  !*** ./src/createElement.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst Element = (el, content,className) => {\n    const elem = document.createElement(el);\n    elem.innerHTML = content;\n    elem.classList.add(className)\n    return elem;\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Element);\n\n//# sourceURL=webpack://restaurant-app/./src/createElement.js?");

/***/ }),

/***/ "./src/footer.js":
/*!***********************!*\
  !*** ./src/footer.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _createElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createElement */ \"./src/createElement.js\");\n\n\nconst createFooter = () => {\n   const footer = (0,_createElement__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('footer', null, 'footer')\n   const p = (0,_createElement__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('p', 'Powered by KwenTIC', 'p-text')\n   const p1 = (0,_createElement__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('p', 'CopyRight 2023', 'p-text')\n\n   footer.appendChild(p)\n   footer.appendChild(p1)\n\n   return footer\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createFooter);\n\n//# sourceURL=webpack://restaurant-app/./src/footer.js?");

/***/ }),

/***/ "./src/header.js":
/*!***********************!*\
  !*** ./src/header.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _createElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createElement */ \"./src/createElement.js\");\n/* harmony import */ var _men_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./men.png */ \"./src/men.png\");\n\n\n\nconst  Header = () => {\n    //const element = document.querySelector('#content')\n   const nav = (0,_createElement__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('nav', null, 'navBar')\n   const label = (0,_createElement__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('label',null,'logo')\n   const ul = (0,_createElement__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('ul', null, 'link-navigation')\n   const li = (0,_createElement__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('li', null, 'link')\n   const li1 = (0,_createElement__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('li', null, 'link')\n   const li2 = (0,_createElement__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('li',null,'link')\n   const a = (0,_createElement__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('a', 'Home', 'link-item')\n   a.setAttribute(\"href\", \"#menu\")\n   const a1 = (0,_createElement__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('a', 'Menu', 'link-item')\n   a1.setAttribute(\"href\", \"#reservation\")\n   const a2 = (0,_createElement__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('a', 'Contact', 'link-item')\n   a2.setAttribute(\"href\", \"#contact\")\n\n  const myMenu = new Image();\n  myMenu.src = _men_png__WEBPACK_IMPORTED_MODULE_1__\n  myMenu.classList.add('menuBtn')\n   label.innerHTML = \"Le Goûté\"\n\n   myMenu.addEventListener('click', () => {\n    ul.classList.toggle('active')\n   })\n\n   li.appendChild(a)\n   li1.appendChild(a1)\n   li2.appendChild(a2)\n\n   ul.appendChild(li)\n   ul.appendChild(li1)\n   ul.appendChild(li2)\n\n   nav.appendChild(label)\n   nav.appendChild(ul)\n   nav.appendChild(myMenu)\n\n    \n\n    //element.appendChild(nav)\n   return nav;\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Header);\n\n//# sourceURL=webpack://restaurant-app/./src/header.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _createElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createElement */ \"./src/createElement.js\");\n/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contact */ \"./src/contact.js\");\n/* harmony import */ var _reservation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./reservation */ \"./src/reservation.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n\n\n\n\n\nconst createHome = () => {\n    const home = (0,_createElement__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('main', null, 'main')\n    home.appendChild((0,_menu__WEBPACK_IMPORTED_MODULE_3__[\"default\"])())\n    home.appendChild((0,_reservation__WEBPACK_IMPORTED_MODULE_2__[\"default\"])())\n    home.appendChild((0,_contact__WEBPACK_IMPORTED_MODULE_1__[\"default\"])())\n\n    return home\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createHome);\n\n//# sourceURL=webpack://restaurant-app/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header */ \"./src/header.js\");\n/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./footer */ \"./src/footer.js\");\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home */ \"./src/home.js\");\n\n\n\n\n\nfunction component() {\n\n    const element = document.querySelector('#content');\n    element.classList.add('container')\n    \n    element.appendChild((0,_header__WEBPACK_IMPORTED_MODULE_1__[\"default\"])())\n    element.appendChild((0,_home__WEBPACK_IMPORTED_MODULE_3__[\"default\"])())\n    element.appendChild((0,_footer__WEBPACK_IMPORTED_MODULE_2__[\"default\"])())\n    \n\n    return element;\n\n}\ndocument.body.appendChild(component());\n\n\n\n//# sourceURL=webpack://restaurant-app/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _createElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createElement */ \"./src/createElement.js\");\n/* harmony import */ var _prestige1_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./prestige1.jpg */ \"./src/prestige1.jpg\");\n/* harmony import */ var _cards__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cards */ \"./src/cards.js\");\n\n\n\nconst createMenu = () => {\n    const menu = (0,_createElement__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('section', null, 'menu')\n    menu.setAttribute(\"id\",\"menu\")\n    const h1 = (0,_createElement__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('h1', 'The Menu','menuText')\n    const div = (0,_createElement__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('div', null, 'menuContainer')\n    const myPrestige = new Image();\n    myPrestige.src = _prestige1_jpg__WEBPACK_IMPORTED_MODULE_1__;\n    myPrestige.classList.add('prestigeImage')\n    div.appendChild(myPrestige)\n    div.appendChild((0,_cards__WEBPACK_IMPORTED_MODULE_2__[\"default\"])())\n    menu.appendChild(h1)\n    menu.appendChild(div)\n\n    return menu\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createMenu);\n\n//# sourceURL=webpack://restaurant-app/./src/menu.js?");

/***/ }),

/***/ "./src/reservation.js":
/*!****************************!*\
  !*** ./src/reservation.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _createElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createElement */ \"./src/createElement.js\");\n\n\nconst createReservation = () => {\n    const reservation = (0,_createElement__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('section', null, 'reservation')\n    reservation.setAttribute(\"id\",\"reservation\")\n    const form = (0,_createElement__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('form', null, 'form')\n    form.setAttribute(\"method\", \"post\")\n    const h1 = document.createElement(\"h1\")\n    h1.innerHTML = \"Book Table here\"\n    \n    // Creating inputs\n    const nameInput = document.createElement(\"input\")\n    nameInput.setAttribute(\"type\", \"text\")\n    nameInput.setAttribute(\"name\", \"fulleName\")\n    nameInput.setAttribute(\"placeholder\", \"Your fullname please!\")\n\n    const emailInput = document.createElement(\"input\")\n    emailInput.setAttribute(\"type\", \"email\")\n    emailInput.setAttribute(\"name\", \"email\")\n    emailInput.setAttribute(\"placeholder\", \"Your email please!\")\n\n    const phoneInput = document.createElement(\"input\")\n    phoneInput.setAttribute(\"type\", \"phone\")\n    phoneInput.setAttribute(\"name\", \"phone\")\n    phoneInput.setAttribute(\"placeholder\", \"Your phone please!\")\n\n    const personInput = document.createElement(\"input\")\n    personInput.setAttribute(\"type\", \"number\")\n    personInput.setAttribute(\"name\", \"person\")\n    personInput.setAttribute(\"placeholder\", \"How many people\")\n\n    const dateInput = document.createElement(\"input\")\n    dateInput.setAttribute(\"type\", \"date\")\n    dateInput.setAttribute(\"name\", \"reservationDate\")\n\n    const sutbmitBtn = document.createElement(\"input\")\n    sutbmitBtn.setAttribute(\"type\", \"submit\")\n    sutbmitBtn.setAttribute(\"value\", \"Submit\")\n\n    form.appendChild(nameInput)\n    form.appendChild(emailInput)\n    form.appendChild(phoneInput)\n    form.appendChild(personInput)\n    form.appendChild(dateInput)\n    form.appendChild(sutbmitBtn)\n\n    reservation.appendChild(h1)\n    reservation.appendChild(form)\n    return reservation\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createReservation);\n\n//# sourceURL=webpack://restaurant-app/./src/reservation.js?");

/***/ }),

/***/ "./src/men.png":
/*!*********************!*\
  !*** ./src/men.png ***!
  \*********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"9544f49f8b11476ec4b1.png\";\n\n//# sourceURL=webpack://restaurant-app/./src/men.png?");

/***/ }),

/***/ "./src/menu1.jpg":
/*!***********************!*\
  !*** ./src/menu1.jpg ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"80af5079239a4cdb0dc2.jpg\";\n\n//# sourceURL=webpack://restaurant-app/./src/menu1.jpg?");

/***/ }),

/***/ "./src/menu2.jpg":
/*!***********************!*\
  !*** ./src/menu2.jpg ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"193df506d39475de9032.jpg\";\n\n//# sourceURL=webpack://restaurant-app/./src/menu2.jpg?");

/***/ }),

/***/ "./src/menu3.jpg":
/*!***********************!*\
  !*** ./src/menu3.jpg ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"f6a2f734f0b8a72f28f9.jpg\";\n\n//# sourceURL=webpack://restaurant-app/./src/menu3.jpg?");

/***/ }),

/***/ "./src/menu5.jpg":
/*!***********************!*\
  !*** ./src/menu5.jpg ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"b57518fb57afbe7908b7.jpg\";\n\n//# sourceURL=webpack://restaurant-app/./src/menu5.jpg?");

/***/ }),

/***/ "./src/prestige1.jpg":
/*!***************************!*\
  !*** ./src/prestige1.jpg ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"7195613540a073bbc717.jpg\";\n\n//# sourceURL=webpack://restaurant-app/./src/prestige1.jpg?");

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
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
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