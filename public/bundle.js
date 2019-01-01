/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./main.js":
/*!*****************!*\
  !*** ./main.js ***!
  \*****************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\ndocument.addEventListener('DOMContentLoaded', function () {\n  var nav = __webpack_require__(/*! ./parts/nav */ \"./parts/nav.js\"),\n      slider = __webpack_require__(/*! ./parts/slider */ \"./parts/slider.js\"),\n      experts = __webpack_require__(/*! ./parts/experts */ \"./parts/experts.js\"),\n      faq = __webpack_require__(/*! ./parts/faq */ \"./parts/faq.js\"),\n      maps = __webpack_require__(/*! ./parts/ymaps */ \"./parts/ymaps.js\"),\n      vk = __webpack_require__(/*! ./parts/vk */ \"./parts/vk.js\"),\n      ig = __webpack_require__(/*! ./parts/ig */ \"./parts/ig.js\"),\n      form = __webpack_require__(/*! ./parts/form */ \"./parts/form.js\");\n\n  nav();\n  slider();\n  experts();\n  faq();\n  maps();\n  vk();\n  ig();\n  form();\n});\n\n//# sourceURL=webpack:///./main.js?");

/***/ }),

/***/ "./parts/experts.js":
/*!**************************!*\
  !*** ./parts/experts.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function experts() {\n  var expNextBtn = document.querySelector(\".experts-btn-next\"),\n      expPrevBtn = document.querySelector(\".experts-btn-prev\"),\n      expertSlide = document.querySelectorAll(\".experts-slide\");\n  expNextBtn.addEventListener('click', function () {\n    expertSlide.forEach(function (item) {\n      item.classList.toggle(\"active\");\n    });\n  });\n}\n\nmodule.exports = experts;\n\n//# sourceURL=webpack:///./parts/experts.js?");

/***/ }),

/***/ "./parts/faq.js":
/*!**********************!*\
  !*** ./parts/faq.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function faq() {\n  var faqBtn = document.querySelectorAll(\".question-btn\"),\n      faqItem = document.querySelectorAll(\".question\"),\n      faqItemFull = document.querySelectorAll(\".row-body\"),\n      toggle = false;\n\n  function deploy(n) {\n    faqItem[n].classList.add(\"full\");\n    faqBtn[n].classList.add(\"fwd\");\n    setTimeout(function () {\n      faqItemFull[n].style.display = \"flex\";\n    }, 500);\n  }\n\n  function rollUp(n) {\n    faqItem[n].classList.remove(\"full\");\n    faqBtn[n].classList.remove(\"fwd\");\n    faqItemFull[n].style.display = \"none\";\n  }\n\n  faqBtn.forEach(function (item, i) {\n    item.addEventListener('click', function (event) {\n      if (event.target.parentElement.classList.contains(\"fwd\")) {\n        rollUp(i);\n        toggle = !toggle;\n      } else {\n        faqItem.forEach(function (item, i) {\n          rollUp(i);\n        });\n        deploy(i);\n      }\n    });\n  });\n}\n\nmodule.exports = faq;\n\n//# sourceURL=webpack:///./parts/faq.js?");

/***/ }),

/***/ "./parts/form.js":
/*!***********************!*\
  !*** ./parts/form.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function form() {\n  var btnModal = document.querySelectorAll(\".btn-modal\"),\n      modalForm = document.querySelector(\".modal-frame-form\"),\n      modalFrame = document.querySelector(\".modal-frame\"),\n      btnClose = document.querySelector(\".close-btn\"),\n      homeBtn = document.querySelector(\".home-btn\"); // modalFrame.style.display = \"none\";\n\n  btnClose.addEventListener('click', function () {\n    modalFrame.style.display = \"none\";\n    document.body.style.overflow = \"\";\n    homeBtn.style.display = \"block\";\n  });\n  btnModal.forEach(function (item) {\n    item.addEventListener('click', function () {\n      modalFrame.style.display = \"block\";\n      document.body.style.overflow = \"hidden\";\n      homeBtn.style.display = \"none\";\n    });\n  });\n}\n\nmodule.exports = form;\n\n//# sourceURL=webpack:///./parts/form.js?");

/***/ }),

/***/ "./parts/ig.js":
/*!*********************!*\
  !*** ./parts/ig.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function ig() {\n  var btnIgprev = document.querySelector(\".ig-prev\"),\n      btnIgnext = document.querySelector(\".ig-next\"),\n      igPostNum = 1,\n      urls = [\"p/Bhvhnoyhhs0/\", \"p/BnsfxlLBPFe/\", \"p/BnwSx75lKVR/\", \"p/BodgLRVB3Wa/\", \"p/Bht1fD7hMpq/\", // \"p/BcagLIDlB9h/\",\n  \"p/BVq96PGFA0Z/\", \"p/BbytzKMlLLH/\"];\n  getIg(urls[0]);\n  btnIgnext.addEventListener('click', function () {\n    if (igPostNum == urls.length - 1) {\n      igPostNum = 0;\n    } else {\n      igPostNum++;\n    }\n\n    getIg(urls[igPostNum]);\n  });\n  btnIgprev.addEventListener('click', function () {\n    //пофиксить первый клик\n    if (igPostNum == 0) {\n      igPostNum = urls.length - 1;\n    } else {\n      igPostNum--;\n    }\n\n    getIg(urls[igPostNum]);\n  });\n\n  function getIg(url) {\n    var divIg = document.querySelector(\".ig-post\");\n    divIg.style.transition = \"0.5s\";\n    var request = new XMLHttpRequest();\n    request.open(\"GET\", \"https://api.instagram.com/oembed?url=http://instagr.am/\" + url + \"&maxwidth=320&omitscript=true&hidecaption=true\");\n    request.send();\n    request.addEventListener('readystatechange', function () {\n      if (request.readyState == 4 && request.status == 200) {\n        var data = JSON.parse(request.response);\n        divIg.style.opacity = 0;\n        setTimeout(function () {\n          divIg.innerHTML = data.html;\n          instgrm.Embeds.process(); // let frame = divIg.querySelector(\"iframe\");\n          // frame.addEventListener('load', () => {\n          //     frame.style.height = \"444px\";\n          //     console.log(frame);\n          // });\n\n          setTimeout(function () {\n            divIg.style.opacity = 1;\n          }, 600);\n        }, 500);\n      }\n    });\n  }\n}\n\nmodule.exports = ig;\n\n//# sourceURL=webpack:///./parts/ig.js?");

/***/ }),

/***/ "./parts/nav.js":
/*!**********************!*\
  !*** ./parts/nav.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function nav() {\n  var navBtn = document.querySelectorAll(\".nav-menu\"),\n      homeBtn = document.querySelector(\".home-btn\"),\n      header = document.querySelector(\"header\"),\n      main = document.querySelector(\".main\"),\n      masterclass = document.querySelector(\".masterclass\"),\n      program = document.querySelector(\".program\"),\n      experts = document.querySelector(\".experts\"),\n      media = document.querySelector(\".social-media\"),\n      contacts = document.querySelector(\".contacts\");\n  homeBtn.addEventListener('click', function () {\n    header.scrollIntoView({\n      block: \"start\",\n      behavior: \"smooth\"\n    });\n  });\n  var homeMove = setInterval(function () {\n    homeBtn.classList.add(\"up\");\n    setTimeout(function () {\n      homeBtn.classList.remove(\"up\");\n    }, 500);\n  }, 6000);\n  navBtn.forEach(function (item, i) {\n    item.addEventListener('click', function () {\n      switch (i) {\n        case 0:\n          main.scrollIntoView({\n            block: \"start\",\n            behavior: \"smooth\"\n          });\n          break;\n\n        case 1:\n          masterclass.scrollIntoView({\n            block: \"start\",\n            behavior: \"smooth\"\n          });\n          break;\n\n        case 2:\n          program.scrollIntoView({\n            block: \"start\",\n            behavior: \"smooth\"\n          });\n          break;\n\n        case 3:\n          media.scrollIntoView({\n            block: \"start\",\n            behavior: \"smooth\"\n          });\n          break;\n\n        case 4:\n          experts.scrollIntoView({\n            block: \"start\",\n            behavior: \"smooth\"\n          });\n          break;\n\n        case 5:\n          contacts.scrollIntoView({\n            block: \"start\",\n            behavior: \"smooth\"\n          });\n          break;\n      }\n    });\n  });\n}\n\nmodule.exports = nav;\n\n//# sourceURL=webpack:///./parts/nav.js?");

/***/ }),

/***/ "./parts/slider.js":
/*!*************************!*\
  !*** ./parts/slider.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function slider() {\n  var slide = document.querySelectorAll(\".program-wrapper\"),\n      nextBtn = document.querySelector(\".next\"),\n      prevBtn = document.querySelector(\".prev\"),\n      currentSlide = 0;\n  slide.forEach(function (item) {\n    item.style.display = \"none\";\n  });\n  slide[0].style.display = \"block\";\n\n  function slideToNext() {\n    slide[currentSlide].style.display = \"none\";\n\n    if (currentSlide < slide.length - 1) {\n      currentSlide++;\n      slide[currentSlide].style.display = \"block\";\n    } else {\n      currentSlide = 0;\n      slide[currentSlide].style.display = \"block\";\n    }\n  }\n\n  function slideToPrev() {\n    slide[currentSlide].style.display = \"none\";\n\n    if (currentSlide == 0) {\n      currentSlide = slide.length - 1;\n      slide[currentSlide].style.display = \"block\";\n    } else {\n      currentSlide--;\n      slide[currentSlide].style.display = \"block\";\n    }\n  } // let autoSlide = setInterval(function(){slideToNext();}, 7000);\n\n\n  nextBtn.addEventListener('click', function () {\n    // clearInterval(autoSlide);\n    slideToNext(); // autoSlide = setInterval(function(){slideToNext();}, 7000);\n  });\n  prevBtn.addEventListener('click', function () {\n    // clearInterval(autoSlide);\n    slideToPrev(); // autoSlide = setInterval(function(){slideToNext();}, 7000);     \n  });\n}\n\nmodule.exports = slider;\n\n//# sourceURL=webpack:///./parts/slider.js?");

/***/ }),

/***/ "./parts/vk.js":
/*!*********************!*\
  !*** ./parts/vk.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function vk() {\n  var widgetWidth = 400;\n  document.documentElement.clientWidth < 580 ? widgetWidth = 320 : widgetWidth = 400;\n\n  (function () {\n    VK.Widgets.Post(\"postVk1\", -146293871, 248, 'JGRAacVK2d0-MENU8FFhqC4klDuK', {\n      width: \"\".concat(widgetWidth)\n    });\n  })();\n\n  (function () {\n    VK.Widgets.Post(\"postVk2\", -146293871, 201, 'IgEMe3hkyIS0b3S-ryOkAuXhaD4S', {\n      width: \"\".concat(widgetWidth)\n    });\n  })();\n\n  (function () {\n    VK.Widgets.Post(\"postVk3\", -146293871, 255, '0zCkudzKbnQtuLM14pbc9qjMlfGX', {\n      width: \"\".concat(widgetWidth)\n    });\n  })();\n\n  (function () {\n    VK.Widgets.Post(\"postVk4\", -146293871, 252, '4AeOyEgT5syf-gUzPRRefXjR0lZP', {\n      width: \"\".concat(widgetWidth)\n    });\n  })();\n\n  (function () {\n    VK.Widgets.Post(\"postVk5\", -146293871, 253, '5WZdiXl-3ArEI3aDgWFXDWm475MC', {\n      width: \"\".concat(widgetWidth)\n    });\n  })();\n\n  var vkSlide = document.querySelectorAll(\".vk-post\"),\n      btnVkprev = document.querySelector(\".vk-prev\"),\n      btnVknext = document.querySelector(\".vk-next\"),\n      // socialDiv = document.querySelector(\".social-media\"),\n  // vkDiv = document.querySelector(\".vk\"),\n  vkPostNum = 0; // console.log(vkSlide[0].style.cssText);\n  // console.log(vkSlide[0].children[0]);\n\n  if (document.documentElement.clientWidth < 768) vkSlide.forEach(function (item) {\n    item.style.animation = \"none\";\n  });\n  vkSlide.forEach(function (item) {\n    item.style.display = \"none\";\n  });\n  vkSlide[vkPostNum].style.display = \"block\"; // setTimeout(() => {\n  //     console.log(document.querySelector(\"#vkwidget1\").clientHeight);\n  //     console.log(vkSlide[0].getAttribute(\"style\"));\n  //     console.log(vkSlide[0].style.height);\n  // }, 7000); // показывает верно, как-то надо добраться до момента загрущки iframe\n  // vkDiv.addEventListener('load', () => {\n  //     console.log(\"here\");\n  //     console.log(vkSlide[0].style.height);\n  // });\n  // console.log(vkSlide[0].getAttribute(\"style\"));\n\n  btnVknext.addEventListener('click', function () {\n    vkSlide[vkPostNum].style.display = \"none\";\n\n    if (vkPostNum == vkSlide.length - 1) {\n      vkPostNum = 0;\n    } else {\n      vkPostNum++;\n    } // if(document.documentElement.clientWidth < 580){\n    //     vkSlide[vkPostNum].addEventListener('load', () => {\n    //         console.log(\"loaded\");\n    //         socialDiv.style.height = parseInt(vkSlide[vkPostNum].style.height) + 135 + \"px\";\n    //         vkDiv.style.height = parseInt(vkSlide[vkPostNum].style.height) + 15 + \"px\";\n    //     });\n    // }\n\n\n    vkSlide[vkPostNum].style.display = \"block\";\n  });\n  btnVkprev.addEventListener('click', function () {\n    vkSlide[vkPostNum].style.display = \"none\";\n\n    if (vkPostNum == 0) {\n      vkPostNum = vkSlide.length - 1;\n    } else {\n      vkPostNum--;\n    } // if(document.documentElement.clientWidth < 580){\n    //     socialDiv.style.height = parseInt(vkSlide[vkPostNum].style.height) + 135 + \"px\";\n    //     vkDiv.style.height = parseInt(vkSlide[vkPostNum].style.height) + 15 + \"px\";\n    // }\n\n\n    vkSlide[vkPostNum].style.display = \"block\";\n  }); //vk chat\n  // let vk = VK.Widgets.CommunityMessages(\"vkMessage\", 146293871, {\n  //     widgetPosition: \"left\",\n  //     welcomeScreen: 0,\n  //     disableButtonTooltip: 1,\n  // });\n}\n\nmodule.exports = vk;\n\n//# sourceURL=webpack:///./parts/vk.js?");

/***/ }),

/***/ "./parts/ymaps.js":
/*!************************!*\
  !*** ./parts/ymaps.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function maps() {\n  ymaps.ready(init);\n\n  function init() {\n    var myMap1 = new ymaps.Map(\"mapBibirevo\", {\n      //   center: [55.894882, 37.610855],\n      center: [55.8948, 37.6108],\n      controls: [],\n      zoom: 17\n    });\n    var myMap2 = new ymaps.Map(\"mapVdnh\", {\n      //   center: [55.894882, 37.610855],\n      center: [55.8178, 37.6354],\n      controls: [],\n      zoom: 17\n    });\n    var placeBibirevo = new ymaps.Placemark([55.8948, 37.6108], {\n      iconContent: \"РОББО Клуб\"\n    }, {\n      preset: 'islands#darkGreenStretchyIcon'\n    });\n    myMap1.geoObjects.add(placeBibirevo);\n    var placeVdnh = new ymaps.Placemark([55.8178, 37.6354], {\n      iconContent: \"РОББО Клуб\"\n    }, {\n      preset: 'islands#darkGreenStretchyIcon'\n    });\n    myMap2.geoObjects.add(placeVdnh);\n  }\n}\n\nmodule.exports = maps;\n\n//# sourceURL=webpack:///./parts/ymaps.js?");

/***/ })

/******/ });