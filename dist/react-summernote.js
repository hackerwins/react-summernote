(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("jquery"), require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["jquery", "react"], factory);
	else if(typeof exports === 'object')
		exports["ReactSummernote"] = factory(require("jquery"), require("react"));
	else
		root["ReactSummernote"] = factory(root["$"], root["React"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_1__, __WEBPACK_EXTERNAL_MODULE_8__) {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 16);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout() {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
})();
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch (e) {
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch (e) {
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }
}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e) {
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e) {
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }
}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while (len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) {
    return [];
};

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () {
    return '/';
};
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function () {
    return 0;
};

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

if (process.env.NODE_ENV === 'production') {
  module.exports = __webpack_require__(14);
} else {
  module.exports = __webpack_require__(13);
}
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (process.env.NODE_ENV !== 'production') {
  var ReactIs = __webpack_require__(3);

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = __webpack_require__(12)(ReactIs.isElement, throwOnDirectAccess);
} else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = __webpack_require__(11)();
}
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(jQuery, module) {var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/*!
 * 
 * Super simple wysiwyg editor v0.8.15
 * https://summernote.org
 * 
 * 
 * Copyright 2013- Alan Hong. and other contributors
 * summernote may be freely distributed under the MIT license.
 * 
 * Date: 2020-01-04T11:44Z
 * 
 */
(function webpackUniversalModuleDefinition(root, factory) {
  if (( false ? 'undefined' : _typeof(exports)) === 'object' && ( false ? 'undefined' : _typeof(module)) === 'object') module.exports = factory(__webpack_require__(1));else if (true) !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(1)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else {
    var a = (typeof exports === 'undefined' ? 'undefined' : _typeof(exports)) === 'object' ? factory(require("jquery")) : factory(root["jQuery"]);
    for (var i in a) {
      ((typeof exports === 'undefined' ? 'undefined' : _typeof(exports)) === 'object' ? exports : root)[i] = a[i];
    }
  }
})(window, function (__WEBPACK_EXTERNAL_MODULE__0__) {
  return (/******/function (modules) {
      // webpackBootstrap
      /******/ // The module cache
      /******/var installedModules = {};
      /******/
      /******/ // The require function
      /******/function __webpack_require__(moduleId) {
        /******/
        /******/ // Check if module is in cache
        /******/if (installedModules[moduleId]) {
          /******/return installedModules[moduleId].exports;
          /******/
        }
        /******/ // Create a new module (and put it into the cache)
        /******/var module = installedModules[moduleId] = {
          /******/i: moduleId,
          /******/l: false,
          /******/exports: {}
          /******/ };
        /******/
        /******/ // Execute the module function
        /******/modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
        /******/
        /******/ // Flag the module as loaded
        /******/module.l = true;
        /******/
        /******/ // Return the exports of the module
        /******/return module.exports;
        /******/
      }
      /******/
      /******/
      /******/ // expose the modules object (__webpack_modules__)
      /******/__webpack_require__.m = modules;
      /******/
      /******/ // expose the module cache
      /******/__webpack_require__.c = installedModules;
      /******/
      /******/ // define getter function for harmony exports
      /******/__webpack_require__.d = function (exports, name, getter) {
        /******/if (!__webpack_require__.o(exports, name)) {
          /******/Object.defineProperty(exports, name, { enumerable: true, get: getter });
          /******/
        }
        /******/
      };
      /******/
      /******/ // define __esModule on exports
      /******/__webpack_require__.r = function (exports) {
        /******/if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
          /******/Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
          /******/
        }
        /******/Object.defineProperty(exports, '__esModule', { value: true });
        /******/
      };
      /******/
      /******/ // create a fake namespace object
      /******/ // mode & 1: value is a module id, require it
      /******/ // mode & 2: merge all properties of value into the ns
      /******/ // mode & 4: return value when already ns object
      /******/ // mode & 8|1: behave like require
      /******/__webpack_require__.t = function (value, mode) {
        /******/if (mode & 1) value = __webpack_require__(value);
        /******/if (mode & 8) return value;
        /******/if (mode & 4 && (typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object' && value && value.__esModule) return value;
        /******/var ns = Object.create(null);
        /******/__webpack_require__.r(ns);
        /******/Object.defineProperty(ns, 'default', { enumerable: true, value: value });
        /******/if (mode & 2 && typeof value != 'string') for (var key in value) {
          __webpack_require__.d(ns, key, function (key) {
            return value[key];
          }.bind(null, key));
        } /******/return ns;
        /******/
      };
      /******/
      /******/ // getDefaultExport function for compatibility with non-harmony modules
      /******/__webpack_require__.n = function (module) {
        /******/var getter = module && module.__esModule ?
        /******/function getDefault() {
          return module['default'];
        } :
        /******/function getModuleExports() {
          return module;
        };
        /******/__webpack_require__.d(getter, 'a', getter);
        /******/return getter;
        /******/
      };
      /******/
      /******/ // Object.prototype.hasOwnProperty.call
      /******/__webpack_require__.o = function (object, property) {
        return Object.prototype.hasOwnProperty.call(object, property);
      };
      /******/
      /******/ // __webpack_public_path__
      /******/__webpack_require__.p = "";
      /******/
      /******/
      /******/ // Load entry module and return exports
      /******/return __webpack_require__(__webpack_require__.s = 51);
      /******/
    }(
    /************************************************************************/
    /******/{

      /***/0:
      /***/function _(module, exports) {

        module.exports = __WEBPACK_EXTERNAL_MODULE__0__;

        /***/
      },

      /***/1:
      /***/function _(module, __webpack_exports__, __webpack_require__) {

        "use strict";
        /* harmony import */
        var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
        /* harmony import */var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);

        var Renderer = function () {
          function Renderer(markup, children, options, callback) {
            _classCallCheck(this, Renderer);

            this.markup = markup;
            this.children = children;
            this.options = options;
            this.callback = callback;
          }

          _createClass(Renderer, [{
            key: 'render',
            value: function render($parent) {
              var $node = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this.markup);

              if (this.options && this.options.contents) {
                $node.html(this.options.contents);
              }

              if (this.options && this.options.className) {
                $node.addClass(this.options.className);
              }

              if (this.options && this.options.data) {
                jquery__WEBPACK_IMPORTED_MODULE_0___default.a.each(this.options.data, function (k, v) {
                  $node.attr('data-' + k, v);
                });
              }

              if (this.options && this.options.click) {
                $node.on('click', this.options.click);
              }

              if (this.children) {
                var $container = $node.find('.note-children-container');
                this.children.forEach(function (child) {
                  child.render($container.length ? $container : $node);
                });
              }

              if (this.callback) {
                this.callback($node, this.options);
              }

              if (this.options && this.options.callback) {
                this.options.callback($node);
              }

              if ($parent) {
                $parent.append($node);
              }

              return $node;
            }
          }]);

          return Renderer;
        }();

        /* harmony default export */

        __webpack_exports__["a"] = {
          create: function create(markup, callback) {
            return function () {
              var options = _typeof(arguments[1]) === 'object' ? arguments[1] : arguments[0];
              var children = Array.isArray(arguments[0]) ? arguments[0] : [];

              if (options && options.children) {
                children = options.children;
              }

              return new Renderer(markup, children, options, callback);
            };
          }
        };

        /***/
      },

      /***/2:
      /***/function _(module, exports) {

        /* WEBPACK VAR INJECTION */(function (__webpack_amd_options__) {
          /* globals __webpack_amd_options__ */
          module.exports = __webpack_amd_options__;

          /* WEBPACK VAR INJECTION */
        }).call(this, {});

        /***/
      },

      /***/3:
      /***/function _(module, __webpack_exports__, __webpack_require__) {

        "use strict";

        // EXTERNAL MODULE: external {"root":"jQuery","commonjs2":"jquery","commonjs":"jquery","amd":"jquery"}

        var external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_ = __webpack_require__(0);
        var external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default = /*#__PURE__*/__webpack_require__.n(external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_);

        // CONCATENATED MODULE: ./src/js/base/summernote-en-US.js

        external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default.a.summernote = external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default.a.summernote || {
          lang: {}
        };
        external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default.a.extend(external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default.a.summernote.lang, {
          'en-US': {
            font: {
              bold: 'Bold',
              italic: 'Italic',
              underline: 'Underline',
              clear: 'Remove Font Style',
              height: 'Line Height',
              name: 'Font Family',
              strikethrough: 'Strikethrough',
              subscript: 'Subscript',
              superscript: 'Superscript',
              size: 'Font Size',
              sizeunit: 'Font Size Unit'
            },
            image: {
              image: 'Picture',
              insert: 'Insert Image',
              resizeFull: 'Resize full',
              resizeHalf: 'Resize half',
              resizeQuarter: 'Resize quarter',
              resizeNone: 'Original size',
              floatLeft: 'Float Left',
              floatRight: 'Float Right',
              floatNone: 'Remove float',
              shapeRounded: 'Shape: Rounded',
              shapeCircle: 'Shape: Circle',
              shapeThumbnail: 'Shape: Thumbnail',
              shapeNone: 'Shape: None',
              dragImageHere: 'Drag image or text here',
              dropImage: 'Drop image or Text',
              selectFromFiles: 'Select from files',
              maximumFileSize: 'Maximum file size',
              maximumFileSizeError: 'Maximum file size exceeded.',
              url: 'Image URL',
              remove: 'Remove Image',
              original: 'Original'
            },
            video: {
              video: 'Video',
              videoLink: 'Video Link',
              insert: 'Insert Video',
              url: 'Video URL',
              providers: '(YouTube, Vimeo, Vine, Instagram, DailyMotion or Youku)'
            },
            link: {
              link: 'Link',
              insert: 'Insert Link',
              unlink: 'Unlink',
              edit: 'Edit',
              textToDisplay: 'Text to display',
              url: 'To what URL should this link go?',
              openInNewWindow: 'Open in new window',
              useProtocol: 'Use default protocol'
            },
            table: {
              table: 'Table',
              addRowAbove: 'Add row above',
              addRowBelow: 'Add row below',
              addColLeft: 'Add column left',
              addColRight: 'Add column right',
              delRow: 'Delete row',
              delCol: 'Delete column',
              delTable: 'Delete table'
            },
            hr: {
              insert: 'Insert Horizontal Rule'
            },
            style: {
              style: 'Style',
              p: 'Normal',
              blockquote: 'Quote',
              pre: 'Code',
              h1: 'Header 1',
              h2: 'Header 2',
              h3: 'Header 3',
              h4: 'Header 4',
              h5: 'Header 5',
              h6: 'Header 6'
            },
            lists: {
              unordered: 'Unordered list',
              ordered: 'Ordered list'
            },
            options: {
              help: 'Help',
              fullscreen: 'Full Screen',
              codeview: 'Code View'
            },
            paragraph: {
              paragraph: 'Paragraph',
              outdent: 'Outdent',
              indent: 'Indent',
              left: 'Align left',
              center: 'Align center',
              right: 'Align right',
              justify: 'Justify full'
            },
            color: {
              recent: 'Recent Color',
              more: 'More Color',
              background: 'Background Color',
              foreground: 'Text Color',
              transparent: 'Transparent',
              setTransparent: 'Set transparent',
              reset: 'Reset',
              resetToDefault: 'Reset to default',
              cpSelect: 'Select'
            },
            shortcut: {
              shortcuts: 'Keyboard shortcuts',
              close: 'Close',
              textFormatting: 'Text formatting',
              action: 'Action',
              paragraphFormatting: 'Paragraph formatting',
              documentStyle: 'Document Style',
              extraKeys: 'Extra keys'
            },
            help: {
              'insertParagraph': 'Insert Paragraph',
              'undo': 'Undoes the last command',
              'redo': 'Redoes the last command',
              'tab': 'Tab',
              'untab': 'Untab',
              'bold': 'Set a bold style',
              'italic': 'Set a italic style',
              'underline': 'Set a underline style',
              'strikethrough': 'Set a strikethrough style',
              'removeFormat': 'Clean a style',
              'justifyLeft': 'Set left align',
              'justifyCenter': 'Set center align',
              'justifyRight': 'Set right align',
              'justifyFull': 'Set full align',
              'insertUnorderedList': 'Toggle unordered list',
              'insertOrderedList': 'Toggle ordered list',
              'outdent': 'Outdent on current paragraph',
              'indent': 'Indent on current paragraph',
              'formatPara': 'Change current block\'s format as a paragraph(P tag)',
              'formatH1': 'Change current block\'s format as H1',
              'formatH2': 'Change current block\'s format as H2',
              'formatH3': 'Change current block\'s format as H3',
              'formatH4': 'Change current block\'s format as H4',
              'formatH5': 'Change current block\'s format as H5',
              'formatH6': 'Change current block\'s format as H6',
              'insertHorizontalRule': 'Insert horizontal rule',
              'linkDialog.show': 'Show Link Dialog'
            },
            history: {
              undo: 'Undo',
              redo: 'Redo'
            },
            specialChar: {
              specialChar: 'SPECIAL CHARACTERS',
              select: 'Select Special characters'
            },
            output: {
              noSelection: 'No Selection Made!'
            }
          }
        });
        // CONCATENATED MODULE: ./src/js/base/core/env.js

        var isSupportAmd = "function" === 'function' && __webpack_require__(2); // eslint-disable-line

        /**
         * returns whether font is installed or not.
         *
         * @param {String} fontName
         * @return {Boolean}
         */

        var genericFontFamilies = ['sans-serif', 'serif', 'monospace', 'cursive', 'fantasy'];

        function validFontName(fontName) {
          return external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default.a.inArray(fontName.toLowerCase(), genericFontFamilies) === -1 ? '\'' + fontName + '\'' : fontName;
        }

        function isFontInstalled(fontName) {
          var testFontName = fontName === 'Comic Sans MS' ? 'Courier New' : 'Comic Sans MS';
          var testText = 'mmmmmmmmmmwwwww';
          var testSize = '200px';
          var canvas = document.createElement('canvas');
          var context = canvas.getContext('2d');
          context.font = testSize + " '" + testFontName + "'";
          var originalWidth = context.measureText(testText).width;
          context.font = testSize + ' ' + validFontName(fontName) + ', "' + testFontName + '"';
          var width = context.measureText(testText).width;
          return originalWidth !== width;
        }

        var userAgent = navigator.userAgent;
        var isMSIE = /MSIE|Trident/i.test(userAgent);
        var browserVersion = void 0;

        if (isMSIE) {
          var matches = /MSIE (\d+[.]\d+)/.exec(userAgent);

          if (matches) {
            browserVersion = parseFloat(matches[1]);
          }

          matches = /Trident\/.*rv:([0-9]{1,}[.0-9]{0,})/.exec(userAgent);

          if (matches) {
            browserVersion = parseFloat(matches[1]);
          }
        }

        var isEdge = /Edge\/\d+/.test(userAgent);
        var hasCodeMirror = !!window.CodeMirror;
        var isSupportTouch = 'ontouchstart' in window || navigator.MaxTouchPoints > 0 || navigator.msMaxTouchPoints > 0; // [workaround] IE doesn't have input events for contentEditable
        // - see: https://goo.gl/4bfIvA

        var inputEventName = isMSIE ? 'DOMCharacterDataModified DOMSubtreeModified DOMNodeInserted' : 'input';
        /**
         * @class core.env
         *
         * Object which check platform and agent
         *
         * @singleton
         * @alternateClassName env
         */

        /* harmony default export */var env = {
          isMac: navigator.appVersion.indexOf('Mac') > -1,
          isMSIE: isMSIE,
          isEdge: isEdge,
          isFF: !isEdge && /firefox/i.test(userAgent),
          isPhantom: /PhantomJS/i.test(userAgent),
          isWebkit: !isEdge && /webkit/i.test(userAgent),
          isChrome: !isEdge && /chrome/i.test(userAgent),
          isSafari: !isEdge && /safari/i.test(userAgent) && !/chrome/i.test(userAgent),
          browserVersion: browserVersion,
          jqueryVersion: parseFloat(external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default.a.fn.jquery),
          isSupportAmd: isSupportAmd,
          isSupportTouch: isSupportTouch,
          hasCodeMirror: hasCodeMirror,
          isFontInstalled: isFontInstalled,
          isW3CRangeSupport: !!document.createRange,
          inputEventName: inputEventName,
          genericFontFamilies: genericFontFamilies,
          validFontName: validFontName
        };
        // CONCATENATED MODULE: ./src/js/base/core/func.js

        /**
         * @class core.func
         *
         * func utils (for high-order func's arg)
         *
         * @singleton
         * @alternateClassName func
         */

        function eq(itemA) {
          return function (itemB) {
            return itemA === itemB;
          };
        }

        function eq2(itemA, itemB) {
          return itemA === itemB;
        }

        function peq2(propName) {
          return function (itemA, itemB) {
            return itemA[propName] === itemB[propName];
          };
        }

        function ok() {
          return true;
        }

        function fail() {
          return false;
        }

        function not(f) {
          return function () {
            return !f.apply(f, arguments);
          };
        }

        function and(fA, fB) {
          return function (item) {
            return fA(item) && fB(item);
          };
        }

        function func_self(a) {
          return a;
        }

        function invoke(obj, method) {
          return function () {
            return obj[method].apply(obj, arguments);
          };
        }

        var idCounter = 0;
        /**
         * reset globally-unique id
         *
         */

        function resetUniqueId() {
          idCounter = 0;
        }
        /**
         * generate a globally-unique id
         *
         * @param {String} [prefix]
         */

        function uniqueId(prefix) {
          var id = ++idCounter + '';
          return prefix ? prefix + id : id;
        }
        /**
         * returns bnd (bounds) from rect
         *
         * - IE Compatibility Issue: http://goo.gl/sRLOAo
         * - Scroll Issue: http://goo.gl/sNjUc
         *
         * @param {Rect} rect
         * @return {Object} bounds
         * @return {Number} bounds.top
         * @return {Number} bounds.left
         * @return {Number} bounds.width
         * @return {Number} bounds.height
         */

        function rect2bnd(rect) {
          var $document = external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default()(document);
          return {
            top: rect.top + $document.scrollTop(),
            left: rect.left + $document.scrollLeft(),
            width: rect.right - rect.left,
            height: rect.bottom - rect.top
          };
        }
        /**
         * returns a copy of the object where the keys have become the values and the values the keys.
         * @param {Object} obj
         * @return {Object}
         */

        function invertObject(obj) {
          var inverted = {};

          for (var key in obj) {
            if (obj.hasOwnProperty(key)) {
              inverted[obj[key]] = key;
            }
          }

          return inverted;
        }
        /**
         * @param {String} namespace
         * @param {String} [prefix]
         * @return {String}
         */

        function namespaceToCamel(namespace, prefix) {
          prefix = prefix || '';
          return prefix + namespace.split('.').map(function (name) {
            return name.substring(0, 1).toUpperCase() + name.substring(1);
          }).join('');
        }
        /**
         * Returns a function, that, as long as it continues to be invoked, will not
         * be triggered. The function will be called after it stops being called for
         * N milliseconds. If `immediate` is passed, trigger the function on the
         * leading edge, instead of the trailing.
         * @param {Function} func
         * @param {Number} wait
         * @param {Boolean} immediate
         * @return {Function}
         */

        function debounce(func, wait, immediate) {
          var timeout = void 0;
          return function () {
            var context = this;
            var args = arguments;

            var later = function later() {
              timeout = null;

              if (!immediate) {
                func.apply(context, args);
              }
            };

            var callNow = immediate && !timeout;
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);

            if (callNow) {
              func.apply(context, args);
            }
          };
        }
        /**
         *
         * @param {String} url
         * @return {Boolean}
         */

        function isValidUrl(url) {
          var expression = /[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/gi;
          return expression.test(url);
        }

        /* harmony default export */var func = {
          eq: eq,
          eq2: eq2,
          peq2: peq2,
          ok: ok,
          fail: fail,
          self: func_self,
          not: not,
          and: and,
          invoke: invoke,
          resetUniqueId: resetUniqueId,
          uniqueId: uniqueId,
          rect2bnd: rect2bnd,
          invertObject: invertObject,
          namespaceToCamel: namespaceToCamel,
          debounce: debounce,
          isValidUrl: isValidUrl
        };
        // CONCATENATED MODULE: ./src/js/base/core/lists.js

        /**
         * returns the first item of an array.
         *
         * @param {Array} array
         */

        function lists_head(array) {
          return array[0];
        }
        /**
         * returns the last item of an array.
         *
         * @param {Array} array
         */

        function lists_last(array) {
          return array[array.length - 1];
        }
        /**
         * returns everything but the last entry of the array.
         *
         * @param {Array} array
         */

        function initial(array) {
          return array.slice(0, array.length - 1);
        }
        /**
         * returns the rest of the items in an array.
         *
         * @param {Array} array
         */

        function tail(array) {
          return array.slice(1);
        }
        /**
         * returns item of array
         */

        function find(array, pred) {
          for (var idx = 0, len = array.length; idx < len; idx++) {
            var item = array[idx];

            if (pred(item)) {
              return item;
            }
          }
        }
        /**
         * returns true if all of the values in the array pass the predicate truth test.
         */

        function lists_all(array, pred) {
          for (var idx = 0, len = array.length; idx < len; idx++) {
            if (!pred(array[idx])) {
              return false;
            }
          }

          return true;
        }
        /**
         * returns true if the value is present in the list.
         */

        function contains(array, item) {
          if (array && array.length && item) {
            if (array.indexOf) {
              return array.indexOf(item) !== -1;
            } else if (array.contains) {
              // `DOMTokenList` doesn't implement `.indexOf`, but it implements `.contains`
              return array.contains(item);
            }
          }

          return false;
        }
        /**
         * get sum from a list
         *
         * @param {Array} array - array
         * @param {Function} fn - iterator
         */

        function sum(array, fn) {
          fn = fn || func.self;
          return array.reduce(function (memo, v) {
            return memo + fn(v);
          }, 0);
        }
        /**
         * returns a copy of the collection with array type.
         * @param {Collection} collection - collection eg) node.childNodes, ...
         */

        function from(collection) {
          var result = [];
          var length = collection.length;
          var idx = -1;

          while (++idx < length) {
            result[idx] = collection[idx];
          }

          return result;
        }
        /**
         * returns whether list is empty or not
         */

        function isEmpty(array) {
          return !array || !array.length;
        }
        /**
         * cluster elements by predicate function.
         *
         * @param {Array} array - array
         * @param {Function} fn - predicate function for cluster rule
         * @param {Array[]}
         */

        function clusterBy(array, fn) {
          if (!array.length) {
            return [];
          }

          var aTail = tail(array);
          return aTail.reduce(function (memo, v) {
            var aLast = lists_last(memo);

            if (fn(lists_last(aLast), v)) {
              aLast[aLast.length] = v;
            } else {
              memo[memo.length] = [v];
            }

            return memo;
          }, [[lists_head(array)]]);
        }
        /**
         * returns a copy of the array with all false values removed
         *
         * @param {Array} array - array
         * @param {Function} fn - predicate function for cluster rule
         */

        function compact(array) {
          var aResult = [];

          for (var idx = 0, len = array.length; idx < len; idx++) {
            if (array[idx]) {
              aResult.push(array[idx]);
            }
          }

          return aResult;
        }
        /**
         * produces a duplicate-free version of the array
         *
         * @param {Array} array
         */

        function unique(array) {
          var results = [];

          for (var idx = 0, len = array.length; idx < len; idx++) {
            if (!contains(results, array[idx])) {
              results.push(array[idx]);
            }
          }

          return results;
        }
        /**
         * returns next item.
         * @param {Array} array
         */

        function lists_next(array, item) {
          if (array && array.length && item) {
            var idx = array.indexOf(item);
            return idx === -1 ? null : array[idx + 1];
          }

          return null;
        }
        /**
         * returns prev item.
         * @param {Array} array
         */

        function prev(array, item) {
          if (array && array.length && item) {
            var idx = array.indexOf(item);
            return idx === -1 ? null : array[idx - 1];
          }

          return null;
        }
        /**
         * @class core.list
         *
         * list utils
         *
         * @singleton
         * @alternateClassName list
         */

        /* harmony default export */var lists = {
          head: lists_head,
          last: lists_last,
          initial: initial,
          tail: tail,
          prev: prev,
          next: lists_next,
          find: find,
          contains: contains,
          all: lists_all,
          sum: sum,
          from: from,
          isEmpty: isEmpty,
          clusterBy: clusterBy,
          compact: compact,
          unique: unique
        };
        // CONCATENATED MODULE: ./src/js/base/core/dom.js


        var NBSP_CHAR = String.fromCharCode(160);
        var ZERO_WIDTH_NBSP_CHAR = '\uFEFF';
        /**
         * @method isEditable
         *
         * returns whether node is `note-editable` or not.
         *
         * @param {Node} node
         * @return {Boolean}
         */

        function isEditable(node) {
          return node && external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default()(node).hasClass('note-editable');
        }
        /**
         * @method isControlSizing
         *
         * returns whether node is `note-control-sizing` or not.
         *
         * @param {Node} node
         * @return {Boolean}
         */

        function isControlSizing(node) {
          return node && external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default()(node).hasClass('note-control-sizing');
        }
        /**
         * @method makePredByNodeName
         *
         * returns predicate which judge whether nodeName is same
         *
         * @param {String} nodeName
         * @return {Function}
         */

        function makePredByNodeName(nodeName) {
          nodeName = nodeName.toUpperCase();
          return function (node) {
            return node && node.nodeName.toUpperCase() === nodeName;
          };
        }
        /**
         * @method isText
         *
         *
         *
         * @param {Node} node
         * @return {Boolean} true if node's type is text(3)
         */

        function isText(node) {
          return node && node.nodeType === 3;
        }
        /**
         * @method isElement
         *
         *
         *
         * @param {Node} node
         * @return {Boolean} true if node's type is element(1)
         */

        function isElement(node) {
          return node && node.nodeType === 1;
        }
        /**
         * ex) br, col, embed, hr, img, input, ...
         * @see http://www.w3.org/html/wg/drafts/html/master/syntax.html#void-elements
         */

        function isVoid(node) {
          return node && /^BR|^IMG|^HR|^IFRAME|^BUTTON|^INPUT|^AUDIO|^VIDEO|^EMBED/.test(node.nodeName.toUpperCase());
        }

        function isPara(node) {
          if (isEditable(node)) {
            return false;
          } // Chrome(v31.0), FF(v25.0.1) use DIV for paragraph


          return node && /^DIV|^P|^LI|^H[1-7]/.test(node.nodeName.toUpperCase());
        }

        function isHeading(node) {
          return node && /^H[1-7]/.test(node.nodeName.toUpperCase());
        }

        var isPre = makePredByNodeName('PRE');
        var isLi = makePredByNodeName('LI');

        function isPurePara(node) {
          return isPara(node) && !isLi(node);
        }

        var isTable = makePredByNodeName('TABLE');
        var isData = makePredByNodeName('DATA');

        function dom_isInline(node) {
          return !isBodyContainer(node) && !isList(node) && !isHr(node) && !isPara(node) && !isTable(node) && !isBlockquote(node) && !isData(node);
        }

        function isList(node) {
          return node && /^UL|^OL/.test(node.nodeName.toUpperCase());
        }

        var isHr = makePredByNodeName('HR');

        function dom_isCell(node) {
          return node && /^TD|^TH/.test(node.nodeName.toUpperCase());
        }

        var isBlockquote = makePredByNodeName('BLOCKQUOTE');

        function isBodyContainer(node) {
          return dom_isCell(node) || isBlockquote(node) || isEditable(node);
        }

        var isAnchor = makePredByNodeName('A');

        function isParaInline(node) {
          return dom_isInline(node) && !!dom_ancestor(node, isPara);
        }

        function isBodyInline(node) {
          return dom_isInline(node) && !dom_ancestor(node, isPara);
        }

        var isBody = makePredByNodeName('BODY');
        /**
         * returns whether nodeB is closest sibling of nodeA
         *
         * @param {Node} nodeA
         * @param {Node} nodeB
         * @return {Boolean}
         */

        function isClosestSibling(nodeA, nodeB) {
          return nodeA.nextSibling === nodeB || nodeA.previousSibling === nodeB;
        }
        /**
         * returns array of closest siblings with node
         *
         * @param {Node} node
         * @param {function} [pred] - predicate function
         * @return {Node[]}
         */

        function withClosestSiblings(node, pred) {
          pred = pred || func.ok;
          var siblings = [];

          if (node.previousSibling && pred(node.previousSibling)) {
            siblings.push(node.previousSibling);
          }

          siblings.push(node);

          if (node.nextSibling && pred(node.nextSibling)) {
            siblings.push(node.nextSibling);
          }

          return siblings;
        }
        /**
         * blank HTML for cursor position
         * - [workaround] old IE only works with &nbsp;
         * - [workaround] IE11 and other browser works with bogus br
         */

        var blankHTML = env.isMSIE && env.browserVersion < 11 ? '&nbsp;' : '<br>';
        /**
         * @method nodeLength
         *
         * returns #text's text size or element's childNodes size
         *
         * @param {Node} node
         */

        function nodeLength(node) {
          if (isText(node)) {
            return node.nodeValue.length;
          }

          if (node) {
            return node.childNodes.length;
          }

          return 0;
        }
        /**
         * returns whether deepest child node is empty or not.
         *
         * @param {Node} node
         * @return {Boolean}
         */

        function deepestChildIsEmpty(node) {
          do {
            if (node.firstElementChild === null || node.firstElementChild.innerHTML === '') break;
          } while (node = node.firstElementChild);

          return dom_isEmpty(node);
        }
        /**
         * returns whether node is empty or not.
         *
         * @param {Node} node
         * @return {Boolean}
         */

        function dom_isEmpty(node) {
          var len = nodeLength(node);

          if (len === 0) {
            return true;
          } else if (!isText(node) && len === 1 && node.innerHTML === blankHTML) {
            // ex) <p><br></p>, <span><br></span>
            return true;
          } else if (lists.all(node.childNodes, isText) && node.innerHTML === '') {
            // ex) <p></p>, <span></span>
            return true;
          }

          return false;
        }
        /**
         * padding blankHTML if node is empty (for cursor position)
         */

        function paddingBlankHTML(node) {
          if (!isVoid(node) && !nodeLength(node)) {
            node.innerHTML = blankHTML;
          }
        }
        /**
         * find nearest ancestor predicate hit
         *
         * @param {Node} node
         * @param {Function} pred - predicate function
         */

        function dom_ancestor(node, pred) {
          while (node) {
            if (pred(node)) {
              return node;
            }

            if (isEditable(node)) {
              break;
            }

            node = node.parentNode;
          }

          return null;
        }
        /**
         * find nearest ancestor only single child blood line and predicate hit
         *
         * @param {Node} node
         * @param {Function} pred - predicate function
         */

        function singleChildAncestor(node, pred) {
          node = node.parentNode;

          while (node) {
            if (nodeLength(node) !== 1) {
              break;
            }

            if (pred(node)) {
              return node;
            }

            if (isEditable(node)) {
              break;
            }

            node = node.parentNode;
          }

          return null;
        }
        /**
         * returns new array of ancestor nodes (until predicate hit).
         *
         * @param {Node} node
         * @param {Function} [optional] pred - predicate function
         */

        function listAncestor(node, pred) {
          pred = pred || func.fail;
          var ancestors = [];
          dom_ancestor(node, function (el) {
            if (!isEditable(el)) {
              ancestors.push(el);
            }

            return pred(el);
          });
          return ancestors;
        }
        /**
         * find farthest ancestor predicate hit
         */

        function lastAncestor(node, pred) {
          var ancestors = listAncestor(node);
          return lists.last(ancestors.filter(pred));
        }
        /**
         * returns common ancestor node between two nodes.
         *
         * @param {Node} nodeA
         * @param {Node} nodeB
         */

        function commonAncestor(nodeA, nodeB) {
          var ancestors = listAncestor(nodeA);

          for (var n = nodeB; n; n = n.parentNode) {
            if (ancestors.indexOf(n) > -1) return n;
          }

          return null; // difference document area
        }
        /**
         * listing all previous siblings (until predicate hit).
         *
         * @param {Node} node
         * @param {Function} [optional] pred - predicate function
         */

        function listPrev(node, pred) {
          pred = pred || func.fail;
          var nodes = [];

          while (node) {
            if (pred(node)) {
              break;
            }

            nodes.push(node);
            node = node.previousSibling;
          }

          return nodes;
        }
        /**
         * listing next siblings (until predicate hit).
         *
         * @param {Node} node
         * @param {Function} [pred] - predicate function
         */

        function listNext(node, pred) {
          pred = pred || func.fail;
          var nodes = [];

          while (node) {
            if (pred(node)) {
              break;
            }

            nodes.push(node);
            node = node.nextSibling;
          }

          return nodes;
        }
        /**
         * listing descendant nodes
         *
         * @param {Node} node
         * @param {Function} [pred] - predicate function
         */

        function listDescendant(node, pred) {
          var descendants = [];
          pred = pred || func.ok; // start DFS(depth first search) with node

          (function fnWalk(current) {
            if (node !== current && pred(current)) {
              descendants.push(current);
            }

            for (var idx = 0, len = current.childNodes.length; idx < len; idx++) {
              fnWalk(current.childNodes[idx]);
            }
          })(node);

          return descendants;
        }
        /**
         * wrap node with new tag.
         *
         * @param {Node} node
         * @param {Node} tagName of wrapper
         * @return {Node} - wrapper
         */

        function wrap(node, wrapperName) {
          var parent = node.parentNode;
          var wrapper = external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default()('<' + wrapperName + '>')[0];
          parent.insertBefore(wrapper, node);
          wrapper.appendChild(node);
          return wrapper;
        }
        /**
         * insert node after preceding
         *
         * @param {Node} node
         * @param {Node} preceding - predicate function
         */

        function insertAfter(node, preceding) {
          var next = preceding.nextSibling;
          var parent = preceding.parentNode;

          if (next) {
            parent.insertBefore(node, next);
          } else {
            parent.appendChild(node);
          }

          return node;
        }
        /**
         * append elements.
         *
         * @param {Node} node
         * @param {Collection} aChild
         */

        function appendChildNodes(node, aChild) {
          external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default.a.each(aChild, function (idx, child) {
            node.appendChild(child);
          });
          return node;
        }
        /**
         * returns whether boundaryPoint is left edge or not.
         *
         * @param {BoundaryPoint} point
         * @return {Boolean}
         */

        function isLeftEdgePoint(point) {
          return point.offset === 0;
        }
        /**
         * returns whether boundaryPoint is right edge or not.
         *
         * @param {BoundaryPoint} point
         * @return {Boolean}
         */

        function isRightEdgePoint(point) {
          return point.offset === nodeLength(point.node);
        }
        /**
         * returns whether boundaryPoint is edge or not.
         *
         * @param {BoundaryPoint} point
         * @return {Boolean}
         */

        function isEdgePoint(point) {
          return isLeftEdgePoint(point) || isRightEdgePoint(point);
        }
        /**
         * returns whether node is left edge of ancestor or not.
         *
         * @param {Node} node
         * @param {Node} ancestor
         * @return {Boolean}
         */

        function isLeftEdgeOf(node, ancestor) {
          while (node && node !== ancestor) {
            if (dom_position(node) !== 0) {
              return false;
            }

            node = node.parentNode;
          }

          return true;
        }
        /**
         * returns whether node is right edge of ancestor or not.
         *
         * @param {Node} node
         * @param {Node} ancestor
         * @return {Boolean}
         */

        function isRightEdgeOf(node, ancestor) {
          if (!ancestor) {
            return false;
          }

          while (node && node !== ancestor) {
            if (dom_position(node) !== nodeLength(node.parentNode) - 1) {
              return false;
            }

            node = node.parentNode;
          }

          return true;
        }
        /**
         * returns whether point is left edge of ancestor or not.
         * @param {BoundaryPoint} point
         * @param {Node} ancestor
         * @return {Boolean}
         */

        function isLeftEdgePointOf(point, ancestor) {
          return isLeftEdgePoint(point) && isLeftEdgeOf(point.node, ancestor);
        }
        /**
         * returns whether point is right edge of ancestor or not.
         * @param {BoundaryPoint} point
         * @param {Node} ancestor
         * @return {Boolean}
         */

        function isRightEdgePointOf(point, ancestor) {
          return isRightEdgePoint(point) && isRightEdgeOf(point.node, ancestor);
        }
        /**
         * returns offset from parent.
         *
         * @param {Node} node
         */

        function dom_position(node) {
          var offset = 0;

          while (node = node.previousSibling) {
            offset += 1;
          }

          return offset;
        }

        function hasChildren(node) {
          return !!(node && node.childNodes && node.childNodes.length);
        }
        /**
         * returns previous boundaryPoint
         *
         * @param {BoundaryPoint} point
         * @param {Boolean} isSkipInnerOffset
         * @return {BoundaryPoint}
         */

        function dom_prevPoint(point, isSkipInnerOffset) {
          var node = void 0;
          var offset = void 0;

          if (point.offset === 0) {
            if (isEditable(point.node)) {
              return null;
            }

            node = point.node.parentNode;
            offset = dom_position(point.node);
          } else if (hasChildren(point.node)) {
            node = point.node.childNodes[point.offset - 1];
            offset = nodeLength(node);
          } else {
            node = point.node;
            offset = isSkipInnerOffset ? 0 : point.offset - 1;
          }

          return {
            node: node,
            offset: offset
          };
        }
        /**
         * returns next boundaryPoint
         *
         * @param {BoundaryPoint} point
         * @param {Boolean} isSkipInnerOffset
         * @return {BoundaryPoint}
         */

        function dom_nextPoint(point, isSkipInnerOffset) {
          var node = void 0,
              offset = void 0;

          if (dom_isEmpty(point.node)) {
            return null;
          }

          if (nodeLength(point.node) === point.offset) {
            if (isEditable(point.node)) {
              return null;
            }

            node = point.node.parentNode;
            offset = dom_position(point.node) + 1;
          } else if (hasChildren(point.node)) {
            node = point.node.childNodes[point.offset];
            offset = 0;

            if (dom_isEmpty(node)) {
              return null;
            }
          } else {
            node = point.node;
            offset = isSkipInnerOffset ? nodeLength(point.node) : point.offset + 1;

            if (dom_isEmpty(node)) {
              return null;
            }
          }

          return {
            node: node,
            offset: offset
          };
        }
        /**
         * returns whether pointA and pointB is same or not.
         *
         * @param {BoundaryPoint} pointA
         * @param {BoundaryPoint} pointB
         * @return {Boolean}
         */

        function isSamePoint(pointA, pointB) {
          return pointA.node === pointB.node && pointA.offset === pointB.offset;
        }
        /**
         * returns whether point is visible (can set cursor) or not.
         *
         * @param {BoundaryPoint} point
         * @return {Boolean}
         */

        function isVisiblePoint(point) {
          if (isText(point.node) || !hasChildren(point.node) || dom_isEmpty(point.node)) {
            return true;
          }

          var leftNode = point.node.childNodes[point.offset - 1];
          var rightNode = point.node.childNodes[point.offset];

          if ((!leftNode || isVoid(leftNode)) && (!rightNode || isVoid(rightNode))) {
            return true;
          }

          return false;
        }
        /**
         * @method prevPointUtil
         *
         * @param {BoundaryPoint} point
         * @param {Function} pred
         * @return {BoundaryPoint}
         */

        function prevPointUntil(point, pred) {
          while (point) {
            if (pred(point)) {
              return point;
            }

            point = dom_prevPoint(point);
          }

          return null;
        }
        /**
         * @method nextPointUntil
         *
         * @param {BoundaryPoint} point
         * @param {Function} pred
         * @return {BoundaryPoint}
         */

        function nextPointUntil(point, pred) {
          while (point) {
            if (pred(point)) {
              return point;
            }

            point = dom_nextPoint(point);
          }

          return null;
        }
        /**
         * returns whether point has character or not.
         *
         * @param {Point} point
         * @return {Boolean}
         */

        function isCharPoint(point) {
          if (!isText(point.node)) {
            return false;
          }

          var ch = point.node.nodeValue.charAt(point.offset - 1);
          return ch && ch !== ' ' && ch !== NBSP_CHAR;
        }
        /**
         * returns whether point has space or not.
         *
         * @param {Point} point
         * @return {Boolean}
         */

        function isSpacePoint(point) {
          if (!isText(point.node)) {
            return false;
          }

          var ch = point.node.nodeValue.charAt(point.offset - 1);
          return ch === ' ' || ch === NBSP_CHAR;
        }

        ;
        /**
         * @method walkPoint
         *
         * @param {BoundaryPoint} startPoint
         * @param {BoundaryPoint} endPoint
         * @param {Function} handler
         * @param {Boolean} isSkipInnerOffset
         */

        function walkPoint(startPoint, endPoint, handler, isSkipInnerOffset) {
          var point = startPoint;

          while (point) {
            handler(point);

            if (isSamePoint(point, endPoint)) {
              break;
            }

            var isSkipOffset = isSkipInnerOffset && startPoint.node !== point.node && endPoint.node !== point.node;
            point = dom_nextPoint(point, isSkipOffset);
          }
        }
        /**
         * @method makeOffsetPath
         *
         * return offsetPath(array of offset) from ancestor
         *
         * @param {Node} ancestor - ancestor node
         * @param {Node} node
         */

        function makeOffsetPath(ancestor, node) {
          var ancestors = listAncestor(node, func.eq(ancestor));
          return ancestors.map(dom_position).reverse();
        }
        /**
         * @method fromOffsetPath
         *
         * return element from offsetPath(array of offset)
         *
         * @param {Node} ancestor - ancestor node
         * @param {array} offsets - offsetPath
         */

        function fromOffsetPath(ancestor, offsets) {
          var current = ancestor;

          for (var i = 0, len = offsets.length; i < len; i++) {
            if (current.childNodes.length <= offsets[i]) {
              current = current.childNodes[current.childNodes.length - 1];
            } else {
              current = current.childNodes[offsets[i]];
            }
          }

          return current;
        }
        /**
         * @method splitNode
         *
         * split element or #text
         *
         * @param {BoundaryPoint} point
         * @param {Object} [options]
         * @param {Boolean} [options.isSkipPaddingBlankHTML] - default: false
         * @param {Boolean} [options.isNotSplitEdgePoint] - default: false
         * @param {Boolean} [options.isDiscardEmptySplits] - default: false
         * @return {Node} right node of boundaryPoint
         */

        function splitNode(point, options) {
          var isSkipPaddingBlankHTML = options && options.isSkipPaddingBlankHTML;
          var isNotSplitEdgePoint = options && options.isNotSplitEdgePoint;
          var isDiscardEmptySplits = options && options.isDiscardEmptySplits;

          if (isDiscardEmptySplits) {
            isSkipPaddingBlankHTML = true;
          } // edge case


          if (isEdgePoint(point) && (isText(point.node) || isNotSplitEdgePoint)) {
            if (isLeftEdgePoint(point)) {
              return point.node;
            } else if (isRightEdgePoint(point)) {
              return point.node.nextSibling;
            }
          } // split #text


          if (isText(point.node)) {
            return point.node.splitText(point.offset);
          } else {
            var childNode = point.node.childNodes[point.offset];
            var clone = insertAfter(point.node.cloneNode(false), point.node);
            appendChildNodes(clone, listNext(childNode));

            if (!isSkipPaddingBlankHTML) {
              paddingBlankHTML(point.node);
              paddingBlankHTML(clone);
            }

            if (isDiscardEmptySplits) {
              if (dom_isEmpty(point.node)) {
                remove(point.node);
              }

              if (dom_isEmpty(clone)) {
                remove(clone);
                return point.node.nextSibling;
              }
            }

            return clone;
          }
        }
        /**
         * @method splitTree
         *
         * split tree by point
         *
         * @param {Node} root - split root
         * @param {BoundaryPoint} point
         * @param {Object} [options]
         * @param {Boolean} [options.isSkipPaddingBlankHTML] - default: false
         * @param {Boolean} [options.isNotSplitEdgePoint] - default: false
         * @return {Node} right node of boundaryPoint
         */

        function splitTree(root, point, options) {
          // ex) [#text, <span>, <p>]
          var ancestors = listAncestor(point.node, func.eq(root));

          if (!ancestors.length) {
            return null;
          } else if (ancestors.length === 1) {
            return splitNode(point, options);
          }

          return ancestors.reduce(function (node, parent) {
            if (node === point.node) {
              node = splitNode(point, options);
            }

            return splitNode({
              node: parent,
              offset: node ? dom_position(node) : nodeLength(parent)
            }, options);
          });
        }
        /**
         * split point
         *
         * @param {Point} point
         * @param {Boolean} isInline
         * @return {Object}
         */

        function splitPoint(point, isInline) {
          // find splitRoot, container
          //  - inline: splitRoot is a child of paragraph
          //  - block: splitRoot is a child of bodyContainer
          var pred = isInline ? isPara : isBodyContainer;
          var ancestors = listAncestor(point.node, pred);
          var topAncestor = lists.last(ancestors) || point.node;
          var splitRoot = void 0,
              container = void 0;

          if (pred(topAncestor)) {
            splitRoot = ancestors[ancestors.length - 2];
            container = topAncestor;
          } else {
            splitRoot = topAncestor;
            container = splitRoot.parentNode;
          } // if splitRoot is exists, split with splitTree


          var pivot = splitRoot && splitTree(splitRoot, point, {
            isSkipPaddingBlankHTML: isInline,
            isNotSplitEdgePoint: isInline
          }); // if container is point.node, find pivot with point.offset

          if (!pivot && container === point.node) {
            pivot = point.node.childNodes[point.offset];
          }

          return {
            rightNode: pivot,
            container: container
          };
        }

        function create(nodeName) {
          return document.createElement(nodeName);
        }

        function createText(text) {
          return document.createTextNode(text);
        }
        /**
         * @method remove
         *
         * remove node, (isRemoveChild: remove child or not)
         *
         * @param {Node} node
         * @param {Boolean} isRemoveChild
         */

        function remove(node, isRemoveChild) {
          if (!node || !node.parentNode) {
            return;
          }

          if (node.removeNode) {
            return node.removeNode(isRemoveChild);
          }

          var parent = node.parentNode;

          if (!isRemoveChild) {
            var nodes = [];

            for (var i = 0, len = node.childNodes.length; i < len; i++) {
              nodes.push(node.childNodes[i]);
            }

            for (var _i = 0, _len = nodes.length; _i < _len; _i++) {
              parent.insertBefore(nodes[_i], node);
            }
          }

          parent.removeChild(node);
        }
        /**
         * @method removeWhile
         *
         * @param {Node} node
         * @param {Function} pred
         */

        function removeWhile(node, pred) {
          while (node) {
            if (isEditable(node) || !pred(node)) {
              break;
            }

            var parent = node.parentNode;
            remove(node);
            node = parent;
          }
        }
        /**
         * @method replace
         *
         * replace node with provided nodeName
         *
         * @param {Node} node
         * @param {String} nodeName
         * @return {Node} - new node
         */

        function replace(node, nodeName) {
          if (node.nodeName.toUpperCase() === nodeName.toUpperCase()) {
            return node;
          }

          var newNode = create(nodeName);

          if (node.style.cssText) {
            newNode.style.cssText = node.style.cssText;
          }

          appendChildNodes(newNode, lists.from(node.childNodes));
          insertAfter(newNode, node);
          remove(node);
          return newNode;
        }

        var isTextarea = makePredByNodeName('TEXTAREA');
        /**
         * @param {jQuery} $node
         * @param {Boolean} [stripLinebreaks] - default: false
         */

        function dom_value($node, stripLinebreaks) {
          var val = isTextarea($node[0]) ? $node.val() : $node.html();

          if (stripLinebreaks) {
            return val.replace(/[\n\r]/g, '');
          }

          return val;
        }
        /**
         * @method html
         *
         * get the HTML contents of node
         *
         * @param {jQuery} $node
         * @param {Boolean} [isNewlineOnBlock]
         */

        function dom_html($node, isNewlineOnBlock) {
          var markup = dom_value($node);

          if (isNewlineOnBlock) {
            var regexTag = /<(\/?)(\b(?!!)[^>\s]*)(.*?)(\s*\/?>)/g;
            markup = markup.replace(regexTag, function (match, endSlash, name) {
              name = name.toUpperCase();
              var isEndOfInlineContainer = /^DIV|^TD|^TH|^P|^LI|^H[1-7]/.test(name) && !!endSlash;
              var isBlockNode = /^BLOCKQUOTE|^TABLE|^TBODY|^TR|^HR|^UL|^OL/.test(name);
              return match + (isEndOfInlineContainer || isBlockNode ? '\n' : '');
            });
            markup = markup.trim();
          }

          return markup;
        }

        function posFromPlaceholder(placeholder) {
          var $placeholder = external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default()(placeholder);
          var pos = $placeholder.offset();
          var height = $placeholder.outerHeight(true); // include margin

          return {
            left: pos.left,
            top: pos.top + height
          };
        }

        function attachEvents($node, events) {
          Object.keys(events).forEach(function (key) {
            $node.on(key, events[key]);
          });
        }

        function detachEvents($node, events) {
          Object.keys(events).forEach(function (key) {
            $node.off(key, events[key]);
          });
        }
        /**
         * @method isCustomStyleTag
         *
         * assert if a node contains a "note-styletag" class,
         * which implies that's a custom-made style tag node
         *
         * @param {Node} an HTML DOM node
         */

        function isCustomStyleTag(node) {
          return node && !isText(node) && lists.contains(node.classList, 'note-styletag');
        }

        /* harmony default export */var dom = {
          /** @property {String} NBSP_CHAR */
          NBSP_CHAR: NBSP_CHAR,

          /** @property {String} ZERO_WIDTH_NBSP_CHAR */
          ZERO_WIDTH_NBSP_CHAR: ZERO_WIDTH_NBSP_CHAR,

          /** @property {String} blank */
          blank: blankHTML,

          /** @property {String} emptyPara */
          emptyPara: '<p>' + blankHTML + '</p>',
          makePredByNodeName: makePredByNodeName,
          isEditable: isEditable,
          isControlSizing: isControlSizing,
          isText: isText,
          isElement: isElement,
          isVoid: isVoid,
          isPara: isPara,
          isPurePara: isPurePara,
          isHeading: isHeading,
          isInline: dom_isInline,
          isBlock: func.not(dom_isInline),
          isBodyInline: isBodyInline,
          isBody: isBody,
          isParaInline: isParaInline,
          isPre: isPre,
          isList: isList,
          isTable: isTable,
          isData: isData,
          isCell: dom_isCell,
          isBlockquote: isBlockquote,
          isBodyContainer: isBodyContainer,
          isAnchor: isAnchor,
          isDiv: makePredByNodeName('DIV'),
          isLi: isLi,
          isBR: makePredByNodeName('BR'),
          isSpan: makePredByNodeName('SPAN'),
          isB: makePredByNodeName('B'),
          isU: makePredByNodeName('U'),
          isS: makePredByNodeName('S'),
          isI: makePredByNodeName('I'),
          isImg: makePredByNodeName('IMG'),
          isTextarea: isTextarea,
          deepestChildIsEmpty: deepestChildIsEmpty,
          isEmpty: dom_isEmpty,
          isEmptyAnchor: func.and(isAnchor, dom_isEmpty),
          isClosestSibling: isClosestSibling,
          withClosestSiblings: withClosestSiblings,
          nodeLength: nodeLength,
          isLeftEdgePoint: isLeftEdgePoint,
          isRightEdgePoint: isRightEdgePoint,
          isEdgePoint: isEdgePoint,
          isLeftEdgeOf: isLeftEdgeOf,
          isRightEdgeOf: isRightEdgeOf,
          isLeftEdgePointOf: isLeftEdgePointOf,
          isRightEdgePointOf: isRightEdgePointOf,
          prevPoint: dom_prevPoint,
          nextPoint: dom_nextPoint,
          isSamePoint: isSamePoint,
          isVisiblePoint: isVisiblePoint,
          prevPointUntil: prevPointUntil,
          nextPointUntil: nextPointUntil,
          isCharPoint: isCharPoint,
          isSpacePoint: isSpacePoint,
          walkPoint: walkPoint,
          ancestor: dom_ancestor,
          singleChildAncestor: singleChildAncestor,
          listAncestor: listAncestor,
          lastAncestor: lastAncestor,
          listNext: listNext,
          listPrev: listPrev,
          listDescendant: listDescendant,
          commonAncestor: commonAncestor,
          wrap: wrap,
          insertAfter: insertAfter,
          appendChildNodes: appendChildNodes,
          position: dom_position,
          hasChildren: hasChildren,
          makeOffsetPath: makeOffsetPath,
          fromOffsetPath: fromOffsetPath,
          splitTree: splitTree,
          splitPoint: splitPoint,
          create: create,
          createText: createText,
          remove: remove,
          removeWhile: removeWhile,
          replace: replace,
          html: dom_html,
          value: dom_value,
          posFromPlaceholder: posFromPlaceholder,
          attachEvents: attachEvents,
          detachEvents: detachEvents,
          isCustomStyleTag: isCustomStyleTag
        };
        // CONCATENATED MODULE: ./src/js/base/Context.js


        var Context_Context = function () {
          /**
           * @param {jQuery} $note
           * @param {Object} options
           */
          function Context_Context($note, options) {
            _classCallCheck(this, Context_Context);

            this.$note = $note;
            this.memos = {};
            this.modules = {};
            this.layoutInfo = {};
            this.options = external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default.a.extend(true, {}, options); // init ui with options

            external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default.a.summernote.ui = external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default.a.summernote.ui_template(this.options);
            this.ui = external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default.a.summernote.ui;
            this.initialize();
          }
          /**
           * create layout and initialize modules and other resources
           */

          _createClass(Context_Context, [{
            key: 'initialize',
            value: function initialize() {
              this.layoutInfo = this.ui.createLayout(this.$note);

              this._initialize();

              this.$note.hide();
              return this;
            }
            /**
             * destroy modules and other resources and remove layout
             */

          }, {
            key: 'destroy',
            value: function destroy() {
              this._destroy();

              this.$note.removeData('summernote');
              this.ui.removeLayout(this.$note, this.layoutInfo);
            }
            /**
             * destory modules and other resources and initialize it again
             */

          }, {
            key: 'reset',
            value: function reset() {
              var disabled = this.isDisabled();
              this.code(dom.emptyPara);

              this._destroy();

              this._initialize();

              if (disabled) {
                this.disable();
              }
            }
          }, {
            key: '_initialize',
            value: function _initialize() {
              var _this = this;

              // set own id
              this.options.id = func.uniqueId(external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default.a.now()); // set default container for tooltips, popovers, and dialogs

              this.options.container = this.options.container || this.layoutInfo.editor; // add optional buttons

              var buttons = external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default.a.extend({}, this.options.buttons);
              Object.keys(buttons).forEach(function (key) {
                _this.memo('button.' + key, buttons[key]);
              });
              var modules = external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default.a.extend({}, this.options.modules, external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default.a.summernote.plugins || {}); // add and initialize modules

              Object.keys(modules).forEach(function (key) {
                _this.module(key, modules[key], true);
              });
              Object.keys(this.modules).forEach(function (key) {
                _this.initializeModule(key);
              });
            }
          }, {
            key: '_destroy',
            value: function _destroy() {
              var _this2 = this;

              // destroy modules with reversed order
              Object.keys(this.modules).reverse().forEach(function (key) {
                _this2.removeModule(key);
              });
              Object.keys(this.memos).forEach(function (key) {
                _this2.removeMemo(key);
              }); // trigger custom onDestroy callback

              this.triggerEvent('destroy', this);
            }
          }, {
            key: 'code',
            value: function code(html) {
              var isActivated = this.invoke('codeview.isActivated');

              if (html === undefined) {
                this.invoke('codeview.sync');
                return isActivated ? this.layoutInfo.codable.val() : this.layoutInfo.editable.html();
              } else {
                if (isActivated) {
                  this.layoutInfo.codable.val(html);
                } else {
                  this.layoutInfo.editable.html(html);
                }

                this.$note.val(html);
                this.triggerEvent('change', html, this.layoutInfo.editable);
              }
            }
          }, {
            key: 'isDisabled',
            value: function isDisabled() {
              return this.layoutInfo.editable.attr('contenteditable') === 'false';
            }
          }, {
            key: 'enable',
            value: function enable() {
              this.layoutInfo.editable.attr('contenteditable', true);
              this.invoke('toolbar.activate', true);
              this.triggerEvent('disable', false);
              this.options.editing = true;
            }
          }, {
            key: 'disable',
            value: function disable() {
              // close codeview if codeview is opend
              if (this.invoke('codeview.isActivated')) {
                this.invoke('codeview.deactivate');
              }

              this.layoutInfo.editable.attr('contenteditable', false);
              this.options.editing = false;
              this.invoke('toolbar.deactivate', true);
              this.triggerEvent('disable', true);
            }
          }, {
            key: 'triggerEvent',
            value: function triggerEvent() {
              var namespace = lists.head(arguments);
              var args = lists.tail(lists.from(arguments));
              var callback = this.options.callbacks[func.namespaceToCamel(namespace, 'on')];

              if (callback) {
                callback.apply(this.$note[0], args);
              }

              this.$note.trigger('summernote.' + namespace, args);
            }
          }, {
            key: 'initializeModule',
            value: function initializeModule(key) {
              var module = this.modules[key];
              module.shouldInitialize = module.shouldInitialize || func.ok;

              if (!module.shouldInitialize()) {
                return;
              } // initialize module


              if (module.initialize) {
                module.initialize();
              } // attach events


              if (module.events) {
                dom.attachEvents(this.$note, module.events);
              }
            }
          }, {
            key: 'module',
            value: function module(key, ModuleClass, withoutIntialize) {
              if (arguments.length === 1) {
                return this.modules[key];
              }

              this.modules[key] = new ModuleClass(this);

              if (!withoutIntialize) {
                this.initializeModule(key);
              }
            }
          }, {
            key: 'removeModule',
            value: function removeModule(key) {
              var module = this.modules[key];

              if (module.shouldInitialize()) {
                if (module.events) {
                  dom.detachEvents(this.$note, module.events);
                }

                if (module.destroy) {
                  module.destroy();
                }
              }

              delete this.modules[key];
            }
          }, {
            key: 'memo',
            value: function memo(key, obj) {
              if (arguments.length === 1) {
                return this.memos[key];
              }

              this.memos[key] = obj;
            }
          }, {
            key: 'removeMemo',
            value: function removeMemo(key) {
              if (this.memos[key] && this.memos[key].destroy) {
                this.memos[key].destroy();
              }

              delete this.memos[key];
            }
            /**
             * Some buttons need to change their visual style immediately once they get pressed
             */

          }, {
            key: 'createInvokeHandlerAndUpdateState',
            value: function createInvokeHandlerAndUpdateState(namespace, value) {
              var _this3 = this;

              return function (event) {
                _this3.createInvokeHandler(namespace, value)(event);
                _this3.invoke('buttons.updateCurrentStyle');
              };
            }
          }, {
            key: 'createInvokeHandler',
            value: function createInvokeHandler(namespace, value) {
              var _this4 = this;

              return function (event) {
                event.preventDefault();
                var $target = external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default()(event.target);
                _this4.invoke(namespace, value || $target.closest('[data-value]').data('value'), $target);
              };
            }
          }, {
            key: 'invoke',
            value: function invoke() {
              var namespace = lists.head(arguments);
              var args = lists.tail(lists.from(arguments));
              var splits = namespace.split('.');
              var hasSeparator = splits.length > 1;
              var moduleName = hasSeparator && lists.head(splits);
              var methodName = hasSeparator ? lists.last(splits) : lists.head(splits);
              var module = this.modules[moduleName || 'editor'];

              if (!moduleName && this[methodName]) {
                return this[methodName].apply(this, args);
              } else if (module && module[methodName] && module.shouldInitialize()) {
                return module[methodName].apply(module, args);
              }
            }
          }]);

          return Context_Context;
        }();
        // CONCATENATED MODULE: ./src/js/summernote.js


        external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default.a.fn.extend({
          /**
           * Summernote API
           *
           * @param {Object|String}
           * @return {this}
           */
          summernote: function summernote() {
            var type = external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default.a.type(lists.head(arguments));
            var isExternalAPICalled = type === 'string';
            var hasInitOptions = type === 'object';
            var options = external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default.a.extend({}, external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default.a.summernote.options, hasInitOptions ? lists.head(arguments) : {}); // Update options

            options.langInfo = external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default.a.extend(true, {}, external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default.a.summernote.lang['en-US'], external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default.a.summernote.lang[options.lang]);
            options.icons = external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default.a.extend(true, {}, external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default.a.summernote.options.icons, options.icons);
            options.tooltip = options.tooltip === 'auto' ? !env.isSupportTouch : options.tooltip;
            this.each(function (idx, note) {
              var $note = external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default()(note);

              if (!$note.data('summernote')) {
                var context = new Context_Context($note, options);
                $note.data('summernote', context);
                $note.data('summernote').triggerEvent('init', context.layoutInfo);
              }
            });
            var $note = this.first();

            if ($note.length) {
              var context = $note.data('summernote');

              if (isExternalAPICalled) {
                return context.invoke.apply(context, lists.from(arguments));
              } else if (options.focus) {
                context.invoke('editor.focus');
              }
            }

            return this;
          }
        });
        // CONCATENATED MODULE: ./src/js/base/core/range.js


        /**
         * return boundaryPoint from TextRange, inspired by Andy Na's HuskyRange.js
         *
         * @param {TextRange} textRange
         * @param {Boolean} isStart
         * @return {BoundaryPoint}
         *
         * @see http://msdn.microsoft.com/en-us/library/ie/ms535872(v=vs.85).aspx
         */

        function textRangeToPoint(textRange, isStart) {
          var container = textRange.parentElement();
          var offset = void 0;
          var tester = document.body.createTextRange();
          var prevContainer = void 0;
          var childNodes = lists.from(container.childNodes);

          for (offset = 0; offset < childNodes.length; offset++) {
            if (dom.isText(childNodes[offset])) {
              continue;
            }

            tester.moveToElementText(childNodes[offset]);

            if (tester.compareEndPoints('StartToStart', textRange) >= 0) {
              break;
            }

            prevContainer = childNodes[offset];
          }

          if (offset !== 0 && dom.isText(childNodes[offset - 1])) {
            var textRangeStart = document.body.createTextRange();
            var curTextNode = null;
            textRangeStart.moveToElementText(prevContainer || container);
            textRangeStart.collapse(!prevContainer);
            curTextNode = prevContainer ? prevContainer.nextSibling : container.firstChild;
            var pointTester = textRange.duplicate();
            pointTester.setEndPoint('StartToStart', textRangeStart);
            var textCount = pointTester.text.replace(/[\r\n]/g, '').length;

            while (textCount > curTextNode.nodeValue.length && curTextNode.nextSibling) {
              textCount -= curTextNode.nodeValue.length;
              curTextNode = curTextNode.nextSibling;
            } // [workaround] enforce IE to re-reference curTextNode, hack


            var dummy = curTextNode.nodeValue; // eslint-disable-line

            if (isStart && curTextNode.nextSibling && dom.isText(curTextNode.nextSibling) && textCount === curTextNode.nodeValue.length) {
              textCount -= curTextNode.nodeValue.length;
              curTextNode = curTextNode.nextSibling;
            }

            container = curTextNode;
            offset = textCount;
          }

          return {
            cont: container,
            offset: offset
          };
        }
        /**
         * return TextRange from boundary point (inspired by google closure-library)
         * @param {BoundaryPoint} point
         * @return {TextRange}
         */

        function pointToTextRange(point) {
          var textRangeInfo = function textRangeInfo(container, offset) {
            var node = void 0,
                isCollapseToStart = void 0;

            if (dom.isText(container)) {
              var prevTextNodes = dom.listPrev(container, func.not(dom.isText));
              var prevContainer = lists.last(prevTextNodes).previousSibling;
              node = prevContainer || container.parentNode;
              offset += lists.sum(lists.tail(prevTextNodes), dom.nodeLength);
              isCollapseToStart = !prevContainer;
            } else {
              node = container.childNodes[offset] || container;

              if (dom.isText(node)) {
                return textRangeInfo(node, 0);
              }

              offset = 0;
              isCollapseToStart = false;
            }

            return {
              node: node,
              collapseToStart: isCollapseToStart,
              offset: offset
            };
          };

          var textRange = document.body.createTextRange();
          var info = textRangeInfo(point.node, point.offset);
          textRange.moveToElementText(info.node);
          textRange.collapse(info.collapseToStart);
          textRange.moveStart('character', info.offset);
          return textRange;
        }
        /**
           * Wrapped Range
           *
           * @constructor
           * @param {Node} sc - start container
           * @param {Number} so - start offset
           * @param {Node} ec - end container
           * @param {Number} eo - end offset
           */

        var range_WrappedRange = function () {
          function range_WrappedRange(sc, so, ec, eo) {
            _classCallCheck(this, range_WrappedRange);

            this.sc = sc;
            this.so = so;
            this.ec = ec;
            this.eo = eo; // isOnEditable: judge whether range is on editable or not

            this.isOnEditable = this.makeIsOn(dom.isEditable); // isOnList: judge whether range is on list node or not

            this.isOnList = this.makeIsOn(dom.isList); // isOnAnchor: judge whether range is on anchor node or not

            this.isOnAnchor = this.makeIsOn(dom.isAnchor); // isOnCell: judge whether range is on cell node or not

            this.isOnCell = this.makeIsOn(dom.isCell); // isOnData: judge whether range is on data node or not

            this.isOnData = this.makeIsOn(dom.isData);
          } // nativeRange: get nativeRange from sc, so, ec, eo


          _createClass(range_WrappedRange, [{
            key: 'nativeRange',
            value: function nativeRange() {
              if (env.isW3CRangeSupport) {
                var w3cRange = document.createRange();
                w3cRange.setStart(this.sc, this.sc.data && this.so > this.sc.data.length ? 0 : this.so);
                w3cRange.setEnd(this.ec, this.sc.data ? Math.min(this.eo, this.sc.data.length) : this.eo);
                return w3cRange;
              } else {
                var textRange = pointToTextRange({
                  node: this.sc,
                  offset: this.so
                });
                textRange.setEndPoint('EndToEnd', pointToTextRange({
                  node: this.ec,
                  offset: this.eo
                }));
                return textRange;
              }
            }
          }, {
            key: 'getPoints',
            value: function getPoints() {
              return {
                sc: this.sc,
                so: this.so,
                ec: this.ec,
                eo: this.eo
              };
            }
          }, {
            key: 'getStartPoint',
            value: function getStartPoint() {
              return {
                node: this.sc,
                offset: this.so
              };
            }
          }, {
            key: 'getEndPoint',
            value: function getEndPoint() {
              return {
                node: this.ec,
                offset: this.eo
              };
            }
            /**
             * select update visible range
             */

          }, {
            key: 'select',
            value: function select() {
              var nativeRng = this.nativeRange();

              if (env.isW3CRangeSupport) {
                var selection = document.getSelection();

                if (selection.rangeCount > 0) {
                  selection.removeAllRanges();
                }

                selection.addRange(nativeRng);
              } else {
                nativeRng.select();
              }

              return this;
            }
            /**
             * Moves the scrollbar to start container(sc) of current range
             *
             * @return {WrappedRange}
             */

          }, {
            key: 'scrollIntoView',
            value: function scrollIntoView(container) {
              var height = external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default()(container).height();

              if (container.scrollTop + height < this.sc.offsetTop) {
                container.scrollTop += Math.abs(container.scrollTop + height - this.sc.offsetTop);
              }

              return this;
            }
            /**
             * @return {WrappedRange}
             */

          }, {
            key: 'normalize',
            value: function normalize() {
              /**
               * @param {BoundaryPoint} point
               * @param {Boolean} isLeftToRight - true: prefer to choose right node
               *                                - false: prefer to choose left node
               * @return {BoundaryPoint}
               */
              var getVisiblePoint = function getVisiblePoint(point, isLeftToRight) {
                if (!point) {
                  return point;
                } // Just use the given point [XXX:Adhoc]
                //  - case 01. if the point is on the middle of the node
                //  - case 02. if the point is on the right edge and prefer to choose left node
                //  - case 03. if the point is on the left edge and prefer to choose right node
                //  - case 04. if the point is on the right edge and prefer to choose right node but the node is void
                //  - case 05. if the point is on the left edge and prefer to choose left node but the node is void
                //  - case 06. if the point is on the block node and there is no children


                if (dom.isVisiblePoint(point)) {
                  if (!dom.isEdgePoint(point) || dom.isRightEdgePoint(point) && !isLeftToRight || dom.isLeftEdgePoint(point) && isLeftToRight || dom.isRightEdgePoint(point) && isLeftToRight && dom.isVoid(point.node.nextSibling) || dom.isLeftEdgePoint(point) && !isLeftToRight && dom.isVoid(point.node.previousSibling) || dom.isBlock(point.node) && dom.isEmpty(point.node)) {
                    return point;
                  }
                } // point on block's edge


                var block = dom.ancestor(point.node, dom.isBlock);
                var hasRightNode = false;

                if (!hasRightNode) {
                  var prevPoint = dom.prevPoint(point) || {
                    node: null
                  };
                  hasRightNode = (dom.isLeftEdgePointOf(point, block) || dom.isVoid(prevPoint.node)) && !isLeftToRight;
                }

                var hasLeftNode = false;

                if (!hasLeftNode) {
                  var _nextPoint = dom.nextPoint(point) || {
                    node: null
                  };
                  hasLeftNode = (dom.isRightEdgePointOf(point, block) || dom.isVoid(_nextPoint.node)) && isLeftToRight;
                }

                if (hasRightNode || hasLeftNode) {
                  // returns point already on visible point
                  if (dom.isVisiblePoint(point)) {
                    return point;
                  } // reverse direction


                  isLeftToRight = !isLeftToRight;
                }

                var nextPoint = isLeftToRight ? dom.nextPointUntil(dom.nextPoint(point), dom.isVisiblePoint) : dom.prevPointUntil(dom.prevPoint(point), dom.isVisiblePoint);
                return nextPoint || point;
              };

              var endPoint = getVisiblePoint(this.getEndPoint(), false);
              var startPoint = this.isCollapsed() ? endPoint : getVisiblePoint(this.getStartPoint(), true);
              return new range_WrappedRange(startPoint.node, startPoint.offset, endPoint.node, endPoint.offset);
            }
            /**
             * returns matched nodes on range
             *
             * @param {Function} [pred] - predicate function
             * @param {Object} [options]
             * @param {Boolean} [options.includeAncestor]
             * @param {Boolean} [options.fullyContains]
             * @return {Node[]}
             */

          }, {
            key: 'nodes',
            value: function nodes(pred, options) {
              pred = pred || func.ok;
              var includeAncestor = options && options.includeAncestor;
              var fullyContains = options && options.fullyContains; // TODO compare points and sort

              var startPoint = this.getStartPoint();
              var endPoint = this.getEndPoint();
              var nodes = [];
              var leftEdgeNodes = [];
              dom.walkPoint(startPoint, endPoint, function (point) {
                if (dom.isEditable(point.node)) {
                  return;
                }

                var node = void 0;

                if (fullyContains) {
                  if (dom.isLeftEdgePoint(point)) {
                    leftEdgeNodes.push(point.node);
                  }

                  if (dom.isRightEdgePoint(point) && lists.contains(leftEdgeNodes, point.node)) {
                    node = point.node;
                  }
                } else if (includeAncestor) {
                  node = dom.ancestor(point.node, pred);
                } else {
                  node = point.node;
                }

                if (node && pred(node)) {
                  nodes.push(node);
                }
              }, true);
              return lists.unique(nodes);
            }
            /**
             * returns commonAncestor of range
             * @return {Element} - commonAncestor
             */

          }, {
            key: 'commonAncestor',
            value: function commonAncestor() {
              return dom.commonAncestor(this.sc, this.ec);
            }
            /**
             * returns expanded range by pred
             *
             * @param {Function} pred - predicate function
             * @return {WrappedRange}
             */

          }, {
            key: 'expand',
            value: function expand(pred) {
              var startAncestor = dom.ancestor(this.sc, pred);
              var endAncestor = dom.ancestor(this.ec, pred);

              if (!startAncestor && !endAncestor) {
                return new range_WrappedRange(this.sc, this.so, this.ec, this.eo);
              }

              var boundaryPoints = this.getPoints();

              if (startAncestor) {
                boundaryPoints.sc = startAncestor;
                boundaryPoints.so = 0;
              }

              if (endAncestor) {
                boundaryPoints.ec = endAncestor;
                boundaryPoints.eo = dom.nodeLength(endAncestor);
              }

              return new range_WrappedRange(boundaryPoints.sc, boundaryPoints.so, boundaryPoints.ec, boundaryPoints.eo);
            }
            /**
             * @param {Boolean} isCollapseToStart
             * @return {WrappedRange}
             */

          }, {
            key: 'collapse',
            value: function collapse(isCollapseToStart) {
              if (isCollapseToStart) {
                return new range_WrappedRange(this.sc, this.so, this.sc, this.so);
              } else {
                return new range_WrappedRange(this.ec, this.eo, this.ec, this.eo);
              }
            }
            /**
             * splitText on range
             */

          }, {
            key: 'splitText',
            value: function splitText() {
              var isSameContainer = this.sc === this.ec;
              var boundaryPoints = this.getPoints();

              if (dom.isText(this.ec) && !dom.isEdgePoint(this.getEndPoint())) {
                this.ec.splitText(this.eo);
              }

              if (dom.isText(this.sc) && !dom.isEdgePoint(this.getStartPoint())) {
                boundaryPoints.sc = this.sc.splitText(this.so);
                boundaryPoints.so = 0;

                if (isSameContainer) {
                  boundaryPoints.ec = boundaryPoints.sc;
                  boundaryPoints.eo = this.eo - this.so;
                }
              }

              return new range_WrappedRange(boundaryPoints.sc, boundaryPoints.so, boundaryPoints.ec, boundaryPoints.eo);
            }
            /**
             * delete contents on range
             * @return {WrappedRange}
             */

          }, {
            key: 'deleteContents',
            value: function deleteContents() {
              if (this.isCollapsed()) {
                return this;
              }

              var rng = this.splitText();
              var nodes = rng.nodes(null, {
                fullyContains: true
              }); // find new cursor point

              var point = dom.prevPointUntil(rng.getStartPoint(), function (point) {
                return !lists.contains(nodes, point.node);
              });
              var emptyParents = [];
              external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default.a.each(nodes, function (idx, node) {
                // find empty parents
                var parent = node.parentNode;

                if (point.node !== parent && dom.nodeLength(parent) === 1) {
                  emptyParents.push(parent);
                }

                dom.remove(node, false);
              }); // remove empty parents

              external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default.a.each(emptyParents, function (idx, node) {
                dom.remove(node, false);
              });
              return new range_WrappedRange(point.node, point.offset, point.node, point.offset).normalize();
            }
            /**
             * makeIsOn: return isOn(pred) function
             */

          }, {
            key: 'makeIsOn',
            value: function makeIsOn(pred) {
              return function () {
                var ancestor = dom.ancestor(this.sc, pred);
                return !!ancestor && ancestor === dom.ancestor(this.ec, pred);
              };
            }
            /**
             * @param {Function} pred
             * @return {Boolean}
             */

          }, {
            key: 'isLeftEdgeOf',
            value: function isLeftEdgeOf(pred) {
              if (!dom.isLeftEdgePoint(this.getStartPoint())) {
                return false;
              }

              var node = dom.ancestor(this.sc, pred);
              return node && dom.isLeftEdgeOf(this.sc, node);
            }
            /**
             * returns whether range was collapsed or not
             */

          }, {
            key: 'isCollapsed',
            value: function isCollapsed() {
              return this.sc === this.ec && this.so === this.eo;
            }
            /**
             * wrap inline nodes which children of body with paragraph
             *
             * @return {WrappedRange}
             */

          }, {
            key: 'wrapBodyInlineWithPara',
            value: function wrapBodyInlineWithPara() {
              if (dom.isBodyContainer(this.sc) && dom.isEmpty(this.sc)) {
                this.sc.innerHTML = dom.emptyPara;
                return new range_WrappedRange(this.sc.firstChild, 0, this.sc.firstChild, 0);
              }
              /**
               * [workaround] firefox often create range on not visible point. so normalize here.
               *  - firefox: |<p>text</p>|
               *  - chrome: <p>|text|</p>
               */

              var rng = this.normalize();

              if (dom.isParaInline(this.sc) || dom.isPara(this.sc)) {
                return rng;
              } // find inline top ancestor


              var topAncestor = void 0;

              if (dom.isInline(rng.sc)) {
                var ancestors = dom.listAncestor(rng.sc, func.not(dom.isInline));
                topAncestor = lists.last(ancestors);

                if (!dom.isInline(topAncestor)) {
                  topAncestor = ancestors[ancestors.length - 2] || rng.sc.childNodes[rng.so];
                }
              } else {
                topAncestor = rng.sc.childNodes[rng.so > 0 ? rng.so - 1 : 0];
              }

              if (topAncestor) {
                // siblings not in paragraph
                var inlineSiblings = dom.listPrev(topAncestor, dom.isParaInline).reverse();
                inlineSiblings = inlineSiblings.concat(dom.listNext(topAncestor.nextSibling, dom.isParaInline)); // wrap with paragraph

                if (inlineSiblings.length) {
                  var para = dom.wrap(lists.head(inlineSiblings), 'p');
                  dom.appendChildNodes(para, lists.tail(inlineSiblings));
                }
              }

              return this.normalize();
            }
            /**
             * insert node at current cursor
             *
             * @param {Node} node
             * @return {Node}
             */

          }, {
            key: 'insertNode',
            value: function insertNode(node) {
              var rng = this;

              if (dom.isText(node) || dom.isInline(node)) {
                rng = this.wrapBodyInlineWithPara().deleteContents();
              }

              var info = dom.splitPoint(rng.getStartPoint(), dom.isInline(node));

              if (info.rightNode) {
                info.rightNode.parentNode.insertBefore(node, info.rightNode);
              } else {
                info.container.appendChild(node);
              }

              return node;
            }
            /**
             * insert html at current cursor
             */

          }, {
            key: 'pasteHTML',
            value: function pasteHTML(markup) {
              markup = external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default.a.trim(markup);
              var contentsContainer = external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default()('<div></div>').html(markup)[0];
              var childNodes = lists.from(contentsContainer.childNodes); // const rng = this.wrapBodyInlineWithPara().deleteContents();

              var rng = this;

              if (rng.so >= 0) {
                childNodes = childNodes.reverse();
              }

              childNodes = childNodes.map(function (childNode) {
                return rng.insertNode(childNode);
              });

              if (rng.so > 0) {
                childNodes = childNodes.reverse();
              }

              return childNodes;
            }
            /**
             * returns text in range
             *
             * @return {String}
             */

          }, {
            key: 'toString',
            value: function toString() {
              var nativeRng = this.nativeRange();
              return env.isW3CRangeSupport ? nativeRng.toString() : nativeRng.text;
            }
            /**
             * returns range for word before cursor
             *
             * @param {Boolean} [findAfter] - find after cursor, default: false
             * @return {WrappedRange}
             */

          }, {
            key: 'getWordRange',
            value: function getWordRange(findAfter) {
              var endPoint = this.getEndPoint();

              if (!dom.isCharPoint(endPoint)) {
                return this;
              }

              var startPoint = dom.prevPointUntil(endPoint, function (point) {
                return !dom.isCharPoint(point);
              });

              if (findAfter) {
                endPoint = dom.nextPointUntil(endPoint, function (point) {
                  return !dom.isCharPoint(point);
                });
              }

              return new range_WrappedRange(startPoint.node, startPoint.offset, endPoint.node, endPoint.offset);
            }
            /**
             * returns range for words before cursor
             *
             * @param {Boolean} [findAfter] - find after cursor, default: false
             * @return {WrappedRange}
             */

          }, {
            key: 'getWordsRange',
            value: function getWordsRange(findAfter) {
              var endPoint = this.getEndPoint();

              var isNotTextPoint = function isNotTextPoint(point) {
                return !dom.isCharPoint(point) && !dom.isSpacePoint(point);
              };

              if (isNotTextPoint(endPoint)) {
                return this;
              }

              var startPoint = dom.prevPointUntil(endPoint, isNotTextPoint);

              if (findAfter) {
                endPoint = dom.nextPointUntil(endPoint, isNotTextPoint);
              }

              return new range_WrappedRange(startPoint.node, startPoint.offset, endPoint.node, endPoint.offset);
            }

            /**
             * returns range for words before cursor that match with a Regex
             *
             * example:
             *  range: 'hi @Peter Pan'
             *  regex: '/@[a-z ]+/i'
             *  return range: '@Peter Pan'
             *
             * @param {RegExp} [regex]
             * @return {WrappedRange|null}
             */

          }, {
            key: 'getWordsMatchRange',
            value: function getWordsMatchRange(regex) {
              var endPoint = this.getEndPoint();
              var startPoint = dom.prevPointUntil(endPoint, function (point) {
                if (!dom.isCharPoint(point) && !dom.isSpacePoint(point)) {
                  return true;
                }

                var rng = new range_WrappedRange(point.node, point.offset, endPoint.node, endPoint.offset);
                var result = regex.exec(rng.toString());
                return result && result.index === 0;
              });
              var rng = new range_WrappedRange(startPoint.node, startPoint.offset, endPoint.node, endPoint.offset);
              var text = rng.toString();
              var result = regex.exec(text);

              if (result && result[0].length === text.length) {
                return rng;
              } else {
                return null;
              }
            }

            /**
             * create offsetPath bookmark
             *
             * @param {Node} editable
             */

          }, {
            key: 'bookmark',
            value: function bookmark(editable) {
              return {
                s: {
                  path: dom.makeOffsetPath(editable, this.sc),
                  offset: this.so
                },
                e: {
                  path: dom.makeOffsetPath(editable, this.ec),
                  offset: this.eo
                }
              };
            }
            /**
             * create offsetPath bookmark base on paragraph
             *
             * @param {Node[]} paras
             */

          }, {
            key: 'paraBookmark',
            value: function paraBookmark(paras) {
              return {
                s: {
                  path: lists.tail(dom.makeOffsetPath(lists.head(paras), this.sc)),
                  offset: this.so
                },
                e: {
                  path: lists.tail(dom.makeOffsetPath(lists.last(paras), this.ec)),
                  offset: this.eo
                }
              };
            }
            /**
             * getClientRects
             * @return {Rect[]}
             */

          }, {
            key: 'getClientRects',
            value: function getClientRects() {
              var nativeRng = this.nativeRange();
              return nativeRng.getClientRects();
            }
          }]);

          return range_WrappedRange;
        }();
        /**
         * Data structure
         *  * BoundaryPoint: a point of dom tree
         *  * BoundaryPoints: two boundaryPoints corresponding to the start and the end of the Range
         *
         * See to http://www.w3.org/TR/DOM-Level-2-Traversal-Range/ranges.html#Level-2-Range-Position
         */

        /* harmony default export */

        var core_range = {
          /**
           * create Range Object From arguments or Browser Selection
           *
           * @param {Node} sc - start container
           * @param {Number} so - start offset
           * @param {Node} ec - end container
           * @param {Number} eo - end offset
           * @return {WrappedRange}
           */
          create: function create(sc, so, ec, eo) {
            if (arguments.length === 4) {
              return new range_WrappedRange(sc, so, ec, eo);
            } else if (arguments.length === 2) {
              // collapsed
              ec = sc;
              eo = so;
              return new range_WrappedRange(sc, so, ec, eo);
            } else {
              var wrappedRange = this.createFromSelection();

              if (!wrappedRange && arguments.length === 1) {
                var bodyElement = arguments[0];

                if (dom.isEditable(bodyElement)) {
                  bodyElement = bodyElement.lastChild;
                }

                return this.createFromBodyElement(bodyElement, dom.emptyPara === arguments[0].innerHTML);
              }

              return wrappedRange;
            }
          },
          createFromBodyElement: function createFromBodyElement(bodyElement) {
            var isCollapseToStart = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

            var wrappedRange = this.createFromNode(bodyElement);
            return wrappedRange.collapse(isCollapseToStart);
          },
          createFromSelection: function createFromSelection() {
            var sc = void 0,
                so = void 0,
                ec = void 0,
                eo = void 0;

            if (env.isW3CRangeSupport) {
              var selection = document.getSelection();

              if (!selection || selection.rangeCount === 0) {
                return null;
              } else if (dom.isBody(selection.anchorNode)) {
                // Firefox: returns entire body as range on initialization.
                // We won't never need it.
                return null;
              }

              var nativeRng = selection.getRangeAt(0);
              sc = nativeRng.startContainer;
              so = nativeRng.startOffset;
              ec = nativeRng.endContainer;
              eo = nativeRng.endOffset;
            } else {
              // IE8: TextRange
              var textRange = document.selection.createRange();
              var textRangeEnd = textRange.duplicate();
              textRangeEnd.collapse(false);
              var textRangeStart = textRange;
              textRangeStart.collapse(true);
              var startPoint = textRangeToPoint(textRangeStart, true);
              var endPoint = textRangeToPoint(textRangeEnd, false); // same visible point case: range was collapsed.

              if (dom.isText(startPoint.node) && dom.isLeftEdgePoint(startPoint) && dom.isTextNode(endPoint.node) && dom.isRightEdgePoint(endPoint) && endPoint.node.nextSibling === startPoint.node) {
                startPoint = endPoint;
              }

              sc = startPoint.cont;
              so = startPoint.offset;
              ec = endPoint.cont;
              eo = endPoint.offset;
            }

            return new range_WrappedRange(sc, so, ec, eo);
          },

          /**
           * @method
           *
           * create WrappedRange from node
           *
           * @param {Node} node
           * @return {WrappedRange}
           */
          createFromNode: function createFromNode(node) {
            var sc = node;
            var so = 0;
            var ec = node;
            var eo = dom.nodeLength(ec); // browsers can't target a picture or void node

            if (dom.isVoid(sc)) {
              so = dom.listPrev(sc).length - 1;
              sc = sc.parentNode;
            }

            if (dom.isBR(ec)) {
              eo = dom.listPrev(ec).length - 1;
              ec = ec.parentNode;
            } else if (dom.isVoid(ec)) {
              eo = dom.listPrev(ec).length;
              ec = ec.parentNode;
            }

            return this.create(sc, so, ec, eo);
          },

          /**
           * create WrappedRange from node after position
           *
           * @param {Node} node
           * @return {WrappedRange}
           */
          createFromNodeBefore: function createFromNodeBefore(node) {
            return this.createFromNode(node).collapse(true);
          },

          /**
           * create WrappedRange from node after position
           *
           * @param {Node} node
           * @return {WrappedRange}
           */
          createFromNodeAfter: function createFromNodeAfter(node) {
            return this.createFromNode(node).collapse();
          },

          /**
           * @method
           *
           * create WrappedRange from bookmark
           *
           * @param {Node} editable
           * @param {Object} bookmark
           * @return {WrappedRange}
           */
          createFromBookmark: function createFromBookmark(editable, bookmark) {
            var sc = dom.fromOffsetPath(editable, bookmark.s.path);
            var so = bookmark.s.offset;
            var ec = dom.fromOffsetPath(editable, bookmark.e.path);
            var eo = bookmark.e.offset;
            return new range_WrappedRange(sc, so, ec, eo);
          },

          /**
           * @method
           *
           * create WrappedRange from paraBookmark
           *
           * @param {Object} bookmark
           * @param {Node[]} paras
           * @return {WrappedRange}
           */
          createFromParaBookmark: function createFromParaBookmark(bookmark, paras) {
            var so = bookmark.s.offset;
            var eo = bookmark.e.offset;
            var sc = dom.fromOffsetPath(lists.head(paras), bookmark.s.path);
            var ec = dom.fromOffsetPath(lists.last(paras), bookmark.e.path);
            return new range_WrappedRange(sc, so, ec, eo);
          }
        };
        // CONCATENATED MODULE: ./src/js/base/core/key.js


        var KEY_MAP = {
          'BACKSPACE': 8,
          'TAB': 9,
          'ENTER': 13,
          'SPACE': 32,
          'DELETE': 46,
          // Arrow
          'LEFT': 37,
          'UP': 38,
          'RIGHT': 39,
          'DOWN': 40,
          // Number: 0-9
          'NUM0': 48,
          'NUM1': 49,
          'NUM2': 50,
          'NUM3': 51,
          'NUM4': 52,
          'NUM5': 53,
          'NUM6': 54,
          'NUM7': 55,
          'NUM8': 56,
          // Alphabet: a-z
          'B': 66,
          'E': 69,
          'I': 73,
          'J': 74,
          'K': 75,
          'L': 76,
          'R': 82,
          'S': 83,
          'U': 85,
          'V': 86,
          'Y': 89,
          'Z': 90,
          'SLASH': 191,
          'LEFTBRACKET': 219,
          'BACKSLASH': 220,
          'RIGHTBRACKET': 221,
          // Navigation
          'HOME': 36,
          'END': 35,
          'PAGEUP': 33,
          'PAGEDOWN': 34
        };
        /**
         * @class core.key
         *
         * Object for keycodes.
         *
         * @singleton
         * @alternateClassName key
         */

        /* harmony default export */var core_key = {
          /**
           * @method isEdit
           *
           * @param {Number} keyCode
           * @return {Boolean}
           */
          isEdit: function isEdit(keyCode) {
            return lists.contains([KEY_MAP.BACKSPACE, KEY_MAP.TAB, KEY_MAP.ENTER, KEY_MAP.SPACE, KEY_MAP.DELETE], keyCode);
          },

          /**
           * @method isMove
           *
           * @param {Number} keyCode
           * @return {Boolean}
           */
          isMove: function isMove(keyCode) {
            return lists.contains([KEY_MAP.LEFT, KEY_MAP.UP, KEY_MAP.RIGHT, KEY_MAP.DOWN], keyCode);
          },

          /**
           * @method isNavigation
           *
           * @param {Number} keyCode
           * @return {Boolean}
           */
          isNavigation: function isNavigation(keyCode) {
            return lists.contains([KEY_MAP.HOME, KEY_MAP.END, KEY_MAP.PAGEUP, KEY_MAP.PAGEDOWN], keyCode);
          },

          /**
           * @property {Object} nameFromCode
           * @property {String} nameFromCode.8 "BACKSPACE"
           */
          nameFromCode: func.invertObject(KEY_MAP),
          code: KEY_MAP
        };
        // CONCATENATED MODULE: ./src/js/base/core/async.js

        /**
         * @method readFileAsDataURL
         *
         * read contents of file as representing URL
         *
         * @param {File} file
         * @return {Promise} - then: dataUrl
         */

        function readFileAsDataURL(file) {
          return external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default.a.Deferred(function (deferred) {
            external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default.a.extend(new FileReader(), {
              onload: function onload(e) {
                var dataURL = e.target.result;
                deferred.resolve(dataURL);
              },
              onerror: function onerror(err) {
                deferred.reject(err);
              }
            }).readAsDataURL(file);
          }).promise();
        }
        /**
         * @method createImage
         *
         * create `<image>` from url string
         *
         * @param {String} url
         * @return {Promise} - then: $image
         */

        function createImage(url) {
          return external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default.a.Deferred(function (deferred) {
            var $img = external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default()('<img>');
            $img.one('load', function () {
              $img.off('error abort');
              deferred.resolve($img);
            }).one('error abort', function () {
              $img.off('load').detach();
              deferred.reject($img);
            }).css({
              display: 'none'
            }).appendTo(document.body).attr('src', url);
          }).promise();
        }
        // CONCATENATED MODULE: ./src/js/base/editing/History.js

        var History_History = function () {
          function History_History($editable) {
            _classCallCheck(this, History_History);

            this.stack = [];
            this.stackOffset = -1;
            this.$editable = $editable;
            this.editable = $editable[0];
          }

          _createClass(History_History, [{
            key: 'makeSnapshot',
            value: function makeSnapshot() {
              var rng = core_range.create(this.editable);
              var emptyBookmark = {
                s: {
                  path: [],
                  offset: 0
                },
                e: {
                  path: [],
                  offset: 0
                }
              };
              return {
                contents: this.$editable.html(),
                bookmark: rng && rng.isOnEditable() ? rng.bookmark(this.editable) : emptyBookmark
              };
            }
          }, {
            key: 'applySnapshot',
            value: function applySnapshot(snapshot) {
              if (snapshot.contents !== null) {
                this.$editable.html(snapshot.contents);
              }

              if (snapshot.bookmark !== null) {
                core_range.createFromBookmark(this.editable, snapshot.bookmark).select();
              }
            }
            /**
            * @method rewind
            * Rewinds the history stack back to the first snapshot taken.
            * Leaves the stack intact, so that "Redo" can still be used.
            */

          }, {
            key: 'rewind',
            value: function rewind() {
              // Create snap shot if not yet recorded
              if (this.$editable.html() !== this.stack[this.stackOffset].contents) {
                this.recordUndo();
              } // Return to the first available snapshot.


              this.stackOffset = 0; // Apply that snapshot.

              this.applySnapshot(this.stack[this.stackOffset]);
            }
            /**
            *  @method commit
            *  Resets history stack, but keeps current editor's content.
            */

          }, {
            key: 'commit',
            value: function commit() {
              // Clear the stack.
              this.stack = []; // Restore stackOffset to its original value.

              this.stackOffset = -1; // Record our first snapshot (of nothing).

              this.recordUndo();
            }
            /**
            * @method reset
            * Resets the history stack completely; reverting to an empty editor.
            */

          }, {
            key: 'reset',
            value: function reset() {
              // Clear the stack.
              this.stack = []; // Restore stackOffset to its original value.

              this.stackOffset = -1; // Clear the editable area.

              this.$editable.html(''); // Record our first snapshot (of nothing).

              this.recordUndo();
            }
            /**
             * undo
             */

          }, {
            key: 'undo',
            value: function undo() {
              // Create snap shot if not yet recorded
              if (this.$editable.html() !== this.stack[this.stackOffset].contents) {
                this.recordUndo();
              }

              if (this.stackOffset > 0) {
                this.stackOffset--;
                this.applySnapshot(this.stack[this.stackOffset]);
              }
            }
            /**
             * redo
             */

          }, {
            key: 'redo',
            value: function redo() {
              if (this.stack.length - 1 > this.stackOffset) {
                this.stackOffset++;
                this.applySnapshot(this.stack[this.stackOffset]);
              }
            }
            /**
             * recorded undo
             */

          }, {
            key: 'recordUndo',
            value: function recordUndo() {
              this.stackOffset++; // Wash out stack after stackOffset

              if (this.stack.length > this.stackOffset) {
                this.stack = this.stack.slice(0, this.stackOffset);
              } // Create new snapshot and push it to the end


              this.stack.push(this.makeSnapshot());
            }
          }]);

          return History_History;
        }();
        // CONCATENATED MODULE: ./src/js/base/editing/Style.js


        var Style_Style = function () {
          function Style_Style() {
            _classCallCheck(this, Style_Style);
          }

          _createClass(Style_Style, [{
            key: 'jQueryCSS',

            /**
             * @method jQueryCSS
             *
             * [workaround] for old jQuery
             * passing an array of style properties to .css()
             * will result in an object of property-value pairs.
             * (compability with version < 1.9)
             *
             * @private
             * @param  {jQuery} $obj
             * @param  {Array} propertyNames - An array of one or more CSS properties.
             * @return {Object}
             */
            value: function jQueryCSS($obj, propertyNames) {
              if (env.jqueryVersion < 1.9) {
                var result = {};
                external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default.a.each(propertyNames, function (idx, propertyName) {
                  result[propertyName] = $obj.css(propertyName);
                });
                return result;
              }

              return $obj.css(propertyNames);
            }
            /**
             * returns style object from node
             *
             * @param {jQuery} $node
             * @return {Object}
             */

          }, {
            key: 'fromNode',
            value: function fromNode($node) {
              var properties = ['font-family', 'font-size', 'text-align', 'list-style-type', 'line-height'];
              var styleInfo = this.jQueryCSS($node, properties) || {};
              var fontSize = $node[0].style.fontSize || styleInfo['font-size'];
              styleInfo['font-size'] = parseInt(fontSize, 10);
              styleInfo['font-size-unit'] = fontSize.match(/[a-z%]+$/);
              return styleInfo;
            }
            /**
             * paragraph level style
             *
             * @param {WrappedRange} rng
             * @param {Object} styleInfo
             */

          }, {
            key: 'stylePara',
            value: function stylePara(rng, styleInfo) {
              external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default.a.each(rng.nodes(dom.isPara, {
                includeAncestor: true
              }), function (idx, para) {
                external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default()(para).css(styleInfo);
              });
            }
            /**
             * insert and returns styleNodes on range.
             *
             * @param {WrappedRange} rng
             * @param {Object} [options] - options for styleNodes
             * @param {String} [options.nodeName] - default: `SPAN`
             * @param {Boolean} [options.expandClosestSibling] - default: `false`
             * @param {Boolean} [options.onlyPartialContains] - default: `false`
             * @return {Node[]}
             */

          }, {
            key: 'styleNodes',
            value: function styleNodes(rng, options) {
              rng = rng.splitText();
              var nodeName = options && options.nodeName || 'SPAN';
              var expandClosestSibling = !!(options && options.expandClosestSibling);
              var onlyPartialContains = !!(options && options.onlyPartialContains);

              if (rng.isCollapsed()) {
                return [rng.insertNode(dom.create(nodeName))];
              }

              var pred = dom.makePredByNodeName(nodeName);
              var nodes = rng.nodes(dom.isText, {
                fullyContains: true
              }).map(function (text) {
                return dom.singleChildAncestor(text, pred) || dom.wrap(text, nodeName);
              });

              if (expandClosestSibling) {
                if (onlyPartialContains) {
                  var nodesInRange = rng.nodes(); // compose with partial contains predication

                  pred = func.and(pred, function (node) {
                    return lists.contains(nodesInRange, node);
                  });
                }

                return nodes.map(function (node) {
                  var siblings = dom.withClosestSiblings(node, pred);
                  var head = lists.head(siblings);
                  var tails = lists.tail(siblings);
                  external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default.a.each(tails, function (idx, elem) {
                    dom.appendChildNodes(head, elem.childNodes);
                    dom.remove(elem);
                  });
                  return lists.head(siblings);
                });
              } else {
                return nodes;
              }
            }
            /**
             * get current style on cursor
             *
             * @param {WrappedRange} rng
             * @return {Object} - object contains style properties.
             */

          }, {
            key: 'current',
            value: function current(rng) {
              var $cont = external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default()(!dom.isElement(rng.sc) ? rng.sc.parentNode : rng.sc);
              var styleInfo = this.fromNode($cont); // document.queryCommandState for toggle state
              // [workaround] prevent Firefox nsresult: "0x80004005 (NS_ERROR_FAILURE)"

              try {
                styleInfo = external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default.a.extend(styleInfo, {
                  'font-bold': document.queryCommandState('bold') ? 'bold' : 'normal',
                  'font-italic': document.queryCommandState('italic') ? 'italic' : 'normal',
                  'font-underline': document.queryCommandState('underline') ? 'underline' : 'normal',
                  'font-subscript': document.queryCommandState('subscript') ? 'subscript' : 'normal',
                  'font-superscript': document.queryCommandState('superscript') ? 'superscript' : 'normal',
                  'font-strikethrough': document.queryCommandState('strikethrough') ? 'strikethrough' : 'normal',
                  'font-family': document.queryCommandValue('fontname') || styleInfo['font-family']
                });
              } catch (e) {} // list-style-type to list-style(unordered, ordered)


              if (!rng.isOnList()) {
                styleInfo['list-style'] = 'none';
              } else {
                var orderedTypes = ['circle', 'disc', 'disc-leading-zero', 'square'];
                var isUnordered = orderedTypes.indexOf(styleInfo['list-style-type']) > -1;
                styleInfo['list-style'] = isUnordered ? 'unordered' : 'ordered';
              }

              var para = dom.ancestor(rng.sc, dom.isPara);

              if (para && para.style['line-height']) {
                styleInfo['line-height'] = para.style.lineHeight;
              } else {
                var lineHeight = parseInt(styleInfo['line-height'], 10) / parseInt(styleInfo['font-size'], 10);
                styleInfo['line-height'] = lineHeight.toFixed(1);
              }

              styleInfo.anchor = rng.isOnAnchor() && dom.ancestor(rng.sc, dom.isAnchor);
              styleInfo.ancestors = dom.listAncestor(rng.sc, dom.isEditable);
              styleInfo.range = rng;
              return styleInfo;
            }
          }]);

          return Style_Style;
        }();
        // CONCATENATED MODULE: ./src/js/base/editing/Bullet.js


        var Bullet_Bullet = function () {
          function Bullet_Bullet() {
            _classCallCheck(this, Bullet_Bullet);
          }

          _createClass(Bullet_Bullet, [{
            key: 'insertOrderedList',

            /**
             * toggle ordered list
             */
            value: function insertOrderedList(editable) {
              this.toggleList('OL', editable);
            }
            /**
             * toggle unordered list
             */

          }, {
            key: 'insertUnorderedList',
            value: function insertUnorderedList(editable) {
              this.toggleList('UL', editable);
            }
            /**
             * indent
             */

          }, {
            key: 'indent',
            value: function indent(editable) {
              var _this5 = this;

              var rng = core_range.create(editable).wrapBodyInlineWithPara();
              var paras = rng.nodes(dom.isPara, {
                includeAncestor: true
              });
              var clustereds = lists.clusterBy(paras, func.peq2('parentNode'));
              external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default.a.each(clustereds, function (idx, paras) {
                var head = lists.head(paras);

                if (dom.isLi(head)) {
                  var previousList = _this5.findList(head.previousSibling);

                  if (previousList) {
                    paras.map(function (para) {
                      return previousList.appendChild(para);
                    });
                  } else {
                    _this5.wrapList(paras, head.parentNode.nodeName);
                    paras.map(function (para) {
                      return para.parentNode;
                    }).map(function (para) {
                      return _this5.appendToPrevious(para);
                    });
                  }
                } else {
                  external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default.a.each(paras, function (idx, para) {
                    external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default()(para).css('marginLeft', function (idx, val) {
                      return (parseInt(val, 10) || 0) + 25;
                    });
                  });
                }
              });
              rng.select();
            }
            /**
             * outdent
             */

          }, {
            key: 'outdent',
            value: function outdent(editable) {
              var _this6 = this;

              var rng = core_range.create(editable).wrapBodyInlineWithPara();
              var paras = rng.nodes(dom.isPara, {
                includeAncestor: true
              });
              var clustereds = lists.clusterBy(paras, func.peq2('parentNode'));
              external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default.a.each(clustereds, function (idx, paras) {
                var head = lists.head(paras);

                if (dom.isLi(head)) {
                  _this6.releaseList([paras]);
                } else {
                  external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default.a.each(paras, function (idx, para) {
                    external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default()(para).css('marginLeft', function (idx, val) {
                      val = parseInt(val, 10) || 0;
                      return val > 25 ? val - 25 : '';
                    });
                  });
                }
              });
              rng.select();
            }
            /**
             * toggle list
             *
             * @param {String} listName - OL or UL
             */

          }, {
            key: 'toggleList',
            value: function toggleList(listName, editable) {
              var _this7 = this;

              var rng = core_range.create(editable).wrapBodyInlineWithPara();
              var paras = rng.nodes(dom.isPara, {
                includeAncestor: true
              });
              var bookmark = rng.paraBookmark(paras);
              var clustereds = lists.clusterBy(paras, func.peq2('parentNode')); // paragraph to list

              if (lists.find(paras, dom.isPurePara)) {
                var wrappedParas = [];
                external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default.a.each(clustereds, function (idx, paras) {
                  wrappedParas = wrappedParas.concat(_this7.wrapList(paras, listName));
                });
                paras = wrappedParas; // list to paragraph or change list style
              } else {
                var diffLists = rng.nodes(dom.isList, {
                  includeAncestor: true
                }).filter(function (listNode) {
                  return !external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default.a.nodeName(listNode, listName);
                });

                if (diffLists.length) {
                  external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default.a.each(diffLists, function (idx, listNode) {
                    dom.replace(listNode, listName);
                  });
                } else {
                  paras = this.releaseList(clustereds, true);
                }
              }

              core_range.createFromParaBookmark(bookmark, paras).select();
            }
            /**
             * @param {Node[]} paras
             * @param {String} listName
             * @return {Node[]}
             */

          }, {
            key: 'wrapList',
            value: function wrapList(paras, listName) {
              var head = lists.head(paras);
              var last = lists.last(paras);
              var prevList = dom.isList(head.previousSibling) && head.previousSibling;
              var nextList = dom.isList(last.nextSibling) && last.nextSibling;
              var listNode = prevList || dom.insertAfter(dom.create(listName || 'UL'), last); // P to LI

              paras = paras.map(function (para) {
                return dom.isPurePara(para) ? dom.replace(para, 'LI') : para;
              }); // append to list(<ul>, <ol>)

              dom.appendChildNodes(listNode, paras);

              if (nextList) {
                dom.appendChildNodes(listNode, lists.from(nextList.childNodes));
                dom.remove(nextList);
              }

              return paras;
            }
            /**
             * @method releaseList
             *
             * @param {Array[]} clustereds
             * @param {Boolean} isEscapseToBody
             * @return {Node[]}
             */

          }, {
            key: 'releaseList',
            value: function releaseList(clustereds, isEscapseToBody) {
              var _this8 = this;

              var releasedParas = [];
              external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default.a.each(clustereds, function (idx, paras) {
                var head = lists.head(paras);
                var last = lists.last(paras);
                var headList = isEscapseToBody ? dom.lastAncestor(head, dom.isList) : head.parentNode;
                var parentItem = headList.parentNode;

                if (headList.parentNode.nodeName === 'LI') {
                  paras.map(function (para) {
                    var newList = _this8.findNextSiblings(para);

                    if (parentItem.nextSibling) {
                      parentItem.parentNode.insertBefore(para, parentItem.nextSibling);
                    } else {
                      parentItem.parentNode.appendChild(para);
                    }

                    if (newList.length) {
                      _this8.wrapList(newList, headList.nodeName);
                      para.appendChild(newList[0].parentNode);
                    }
                  });

                  if (headList.children.length === 0) {
                    parentItem.removeChild(headList);
                  }

                  if (parentItem.childNodes.length === 0) {
                    parentItem.parentNode.removeChild(parentItem);
                  }
                } else {
                  var lastList = headList.childNodes.length > 1 ? dom.splitTree(headList, {
                    node: last.parentNode,
                    offset: dom.position(last) + 1
                  }, {
                    isSkipPaddingBlankHTML: true
                  }) : null;
                  var middleList = dom.splitTree(headList, {
                    node: head.parentNode,
                    offset: dom.position(head)
                  }, {
                    isSkipPaddingBlankHTML: true
                  });
                  paras = isEscapseToBody ? dom.listDescendant(middleList, dom.isLi) : lists.from(middleList.childNodes).filter(dom.isLi); // LI to P

                  if (isEscapseToBody || !dom.isList(headList.parentNode)) {
                    paras = paras.map(function (para) {
                      return dom.replace(para, 'P');
                    });
                  }

                  external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default.a.each(lists.from(paras).reverse(), function (idx, para) {
                    dom.insertAfter(para, headList);
                  }); // remove empty lists

                  var rootLists = lists.compact([headList, middleList, lastList]);
                  external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default.a.each(rootLists, function (idx, rootList) {
                    var listNodes = [rootList].concat(dom.listDescendant(rootList, dom.isList));
                    external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default.a.each(listNodes.reverse(), function (idx, listNode) {
                      if (!dom.nodeLength(listNode)) {
                        dom.remove(listNode, true);
                      }
                    });
                  });
                }

                releasedParas = releasedParas.concat(paras);
              });
              return releasedParas;
            }
            /**
             * @method appendToPrevious
             *
             * Appends list to previous list item, if
             * none exist it wraps the list in a new list item.
             *
             * @param {HTMLNode} ListItem
             * @return {HTMLNode}
             */

          }, {
            key: 'appendToPrevious',
            value: function appendToPrevious(node) {
              return node.previousSibling ? dom.appendChildNodes(node.previousSibling, [node]) : this.wrapList([node], 'LI');
            }
            /**
             * @method findList
             *
             * Finds an existing list in list item
             *
             * @param {HTMLNode} ListItem
             * @return {Array[]}
             */

          }, {
            key: 'findList',
            value: function findList(node) {
              return node ? lists.find(node.children, function (child) {
                return ['OL', 'UL'].indexOf(child.nodeName) > -1;
              }) : null;
            }
            /**
             * @method findNextSiblings
             *
             * Finds all list item siblings that follow it
             *
             * @param {HTMLNode} ListItem
             * @return {HTMLNode}
             */

          }, {
            key: 'findNextSiblings',
            value: function findNextSiblings(node) {
              var siblings = [];

              while (node.nextSibling) {
                siblings.push(node.nextSibling);
                node = node.nextSibling;
              }

              return siblings;
            }
          }]);

          return Bullet_Bullet;
        }();
        // CONCATENATED MODULE: ./src/js/base/editing/Typing.js


        /**
         * @class editing.Typing
         *
         * Typing
         *
         */

        var Typing_Typing = function () {
          function Typing_Typing(context) {
            _classCallCheck(this, Typing_Typing);

            // a Bullet instance to toggle lists off
            this.bullet = new Bullet_Bullet();
            this.options = context.options;
          }
          /**
           * insert tab
           *
           * @param {WrappedRange} rng
           * @param {Number} tabsize
           */

          _createClass(Typing_Typing, [{
            key: 'insertTab',
            value: function insertTab(rng, tabsize) {
              var tab = dom.createText(new Array(tabsize + 1).join(dom.NBSP_CHAR));
              rng = rng.deleteContents();
              rng.insertNode(tab, true);
              rng = core_range.create(tab, tabsize);
              rng.select();
            }
            /**
             * insert paragraph
             *
             * @param {jQuery} $editable
             * @param {WrappedRange} rng Can be used in unit tests to "mock" the range
             *
             * blockquoteBreakingLevel
             *   0 - No break, the new paragraph remains inside the quote
             *   1 - Break the first blockquote in the ancestors list
             *   2 - Break all blockquotes, so that the new paragraph is not quoted (this is the default)
             */

          }, {
            key: 'insertParagraph',
            value: function insertParagraph(editable, rng) {
              rng = rng || core_range.create(editable); // deleteContents on range.

              rng = rng.deleteContents(); // Wrap range if it needs to be wrapped by paragraph

              rng = rng.wrapBodyInlineWithPara(); // finding paragraph

              var splitRoot = dom.ancestor(rng.sc, dom.isPara);
              var nextPara = void 0; // on paragraph: split paragraph

              if (splitRoot) {
                // if it is an empty line with li
                if (dom.isLi(splitRoot) && (dom.isEmpty(splitRoot) || dom.deepestChildIsEmpty(splitRoot))) {
                  // toogle UL/OL and escape
                  this.bullet.toggleList(splitRoot.parentNode.nodeName);
                  return;
                } else {
                  var blockquote = null;

                  if (this.options.blockquoteBreakingLevel === 1) {
                    blockquote = dom.ancestor(splitRoot, dom.isBlockquote);
                  } else if (this.options.blockquoteBreakingLevel === 2) {
                    blockquote = dom.lastAncestor(splitRoot, dom.isBlockquote);
                  }

                  if (blockquote) {
                    // We're inside a blockquote and options ask us to break it
                    nextPara = external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default()(dom.emptyPara)[0]; // If the split is right before a <br>, remove it so that there's no "empty line"
                    // after the split in the new blockquote created

                    if (dom.isRightEdgePoint(rng.getStartPoint()) && dom.isBR(rng.sc.nextSibling)) {
                      external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default()(rng.sc.nextSibling).remove();
                    }

                    var split = dom.splitTree(blockquote, rng.getStartPoint(), {
                      isDiscardEmptySplits: true
                    });

                    if (split) {
                      split.parentNode.insertBefore(nextPara, split);
                    } else {
                      dom.insertAfter(nextPara, blockquote); // There's no split if we were at the end of the blockquote
                    }
                  } else {
                    nextPara = dom.splitTree(splitRoot, rng.getStartPoint()); // not a blockquote, just insert the paragraph

                    var emptyAnchors = dom.listDescendant(splitRoot, dom.isEmptyAnchor);
                    emptyAnchors = emptyAnchors.concat(dom.listDescendant(nextPara, dom.isEmptyAnchor));
                    external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default.a.each(emptyAnchors, function (idx, anchor) {
                      dom.remove(anchor);
                    }); // replace empty heading, pre or custom-made styleTag with P tag

                    if ((dom.isHeading(nextPara) || dom.isPre(nextPara) || dom.isCustomStyleTag(nextPara)) && dom.isEmpty(nextPara)) {
                      nextPara = dom.replace(nextPara, 'p');
                    }
                  }
                } // no paragraph: insert empty paragraph
              } else {
                var next = rng.sc.childNodes[rng.so];
                nextPara = external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default()(dom.emptyPara)[0];

                if (next) {
                  rng.sc.insertBefore(nextPara, next);
                } else {
                  rng.sc.appendChild(nextPara);
                }
              }

              core_range.create(nextPara, 0).normalize().select().scrollIntoView(editable);
            }
          }]);

          return Typing_Typing;
        }();
        // CONCATENATED MODULE: ./src/js/base/editing/Table.js


        /**
         * @class Create a virtual table to create what actions to do in change.
         * @param {object} startPoint Cell selected to apply change.
         * @param {enum} where  Where change will be applied Row or Col. Use enum: TableResultAction.where
         * @param {enum} action Action to be applied. Use enum: TableResultAction.requestAction
         * @param {object} domTable Dom element of table to make changes.
         */

        var TableResultAction = function TableResultAction(startPoint, where, action, domTable) {
          var _startPoint = {
            'colPos': 0,
            'rowPos': 0
          };
          var _virtualTable = [];
          var _actionCellList = []; /// ///////////////////////////////////////////
          // Private functions
          /// ///////////////////////////////////////////

          /**
           * Set the startPoint of action.
           */

          function setStartPoint() {
            if (!startPoint || !startPoint.tagName || startPoint.tagName.toLowerCase() !== 'td' && startPoint.tagName.toLowerCase() !== 'th') {
              console.error('Impossible to identify start Cell point.', startPoint);
              return;
            }

            _startPoint.colPos = startPoint.cellIndex;

            if (!startPoint.parentElement || !startPoint.parentElement.tagName || startPoint.parentElement.tagName.toLowerCase() !== 'tr') {
              console.error('Impossible to identify start Row point.', startPoint);
              return;
            }

            _startPoint.rowPos = startPoint.parentElement.rowIndex;
          }
          /**
           * Define virtual table position info object.
           *
           * @param {int} rowIndex Index position in line of virtual table.
           * @param {int} cellIndex Index position in column of virtual table.
           * @param {object} baseRow Row affected by this position.
           * @param {object} baseCell Cell affected by this position.
           * @param {bool} isSpan Inform if it is an span cell/row.
           */

          function setVirtualTablePosition(rowIndex, cellIndex, baseRow, baseCell, isRowSpan, isColSpan, isVirtualCell) {
            var objPosition = {
              'baseRow': baseRow,
              'baseCell': baseCell,
              'isRowSpan': isRowSpan,
              'isColSpan': isColSpan,
              'isVirtual': isVirtualCell
            };

            if (!_virtualTable[rowIndex]) {
              _virtualTable[rowIndex] = [];
            }

            _virtualTable[rowIndex][cellIndex] = objPosition;
          }
          /**
           * Create action cell object.
           *
           * @param {object} virtualTableCellObj Object of specific position on virtual table.
           * @param {enum} resultAction Action to be applied in that item.
           */

          function getActionCell(virtualTableCellObj, resultAction, virtualRowPosition, virtualColPosition) {
            return {
              'baseCell': virtualTableCellObj.baseCell,
              'action': resultAction,
              'virtualTable': {
                'rowIndex': virtualRowPosition,
                'cellIndex': virtualColPosition
              }
            };
          }
          /**
           * Recover free index of row to append Cell.
           *
           * @param {int} rowIndex Index of row to find free space.
           * @param {int} cellIndex Index of cell to find free space in table.
           */

          function recoverCellIndex(rowIndex, cellIndex) {
            if (!_virtualTable[rowIndex]) {
              return cellIndex;
            }

            if (!_virtualTable[rowIndex][cellIndex]) {
              return cellIndex;
            }

            var newCellIndex = cellIndex;

            while (_virtualTable[rowIndex][newCellIndex]) {
              newCellIndex++;

              if (!_virtualTable[rowIndex][newCellIndex]) {
                return newCellIndex;
              }
            }
          }
          /**
           * Recover info about row and cell and add information to virtual table.
           *
           * @param {object} row Row to recover information.
           * @param {object} cell Cell to recover information.
           */

          function addCellInfoToVirtual(row, cell) {
            var cellIndex = recoverCellIndex(row.rowIndex, cell.cellIndex);
            var cellHasColspan = cell.colSpan > 1;
            var cellHasRowspan = cell.rowSpan > 1;
            var isThisSelectedCell = row.rowIndex === _startPoint.rowPos && cell.cellIndex === _startPoint.colPos;
            setVirtualTablePosition(row.rowIndex, cellIndex, row, cell, cellHasRowspan, cellHasColspan, false); // Add span rows to virtual Table.

            var rowspanNumber = cell.attributes.rowSpan ? parseInt(cell.attributes.rowSpan.value, 10) : 0;

            if (rowspanNumber > 1) {
              for (var rp = 1; rp < rowspanNumber; rp++) {
                var rowspanIndex = row.rowIndex + rp;
                adjustStartPoint(rowspanIndex, cellIndex, cell, isThisSelectedCell);
                setVirtualTablePosition(rowspanIndex, cellIndex, row, cell, true, cellHasColspan, true);
              }
            } // Add span cols to virtual table.


            var colspanNumber = cell.attributes.colSpan ? parseInt(cell.attributes.colSpan.value, 10) : 0;

            if (colspanNumber > 1) {
              for (var cp = 1; cp < colspanNumber; cp++) {
                var cellspanIndex = recoverCellIndex(row.rowIndex, cellIndex + cp);
                adjustStartPoint(row.rowIndex, cellspanIndex, cell, isThisSelectedCell);
                setVirtualTablePosition(row.rowIndex, cellspanIndex, row, cell, cellHasRowspan, true, true);
              }
            }
          }
          /**
           * Process validation and adjust of start point if needed
           *
           * @param {int} rowIndex
           * @param {int} cellIndex
           * @param {object} cell
           * @param {bool} isSelectedCell
           */

          function adjustStartPoint(rowIndex, cellIndex, cell, isSelectedCell) {
            if (rowIndex === _startPoint.rowPos && _startPoint.colPos >= cell.cellIndex && cell.cellIndex <= cellIndex && !isSelectedCell) {
              _startPoint.colPos++;
            }
          }
          /**
           * Create virtual table of cells with all cells, including span cells.
           */

          function createVirtualTable() {
            var rows = domTable.rows;

            for (var rowIndex = 0; rowIndex < rows.length; rowIndex++) {
              var cells = rows[rowIndex].cells;

              for (var cellIndex = 0; cellIndex < cells.length; cellIndex++) {
                addCellInfoToVirtual(rows[rowIndex], cells[cellIndex]);
              }
            }
          }
          /**
           * Get action to be applied on the cell.
           *
           * @param {object} cell virtual table cell to apply action
           */

          function getDeleteResultActionToCell(cell) {
            switch (where) {
              case TableResultAction.where.Column:
                if (cell.isColSpan) {
                  return TableResultAction.resultAction.SubtractSpanCount;
                }

                break;

              case TableResultAction.where.Row:
                if (!cell.isVirtual && cell.isRowSpan) {
                  return TableResultAction.resultAction.AddCell;
                } else if (cell.isRowSpan) {
                  return TableResultAction.resultAction.SubtractSpanCount;
                }

                break;
            }

            return TableResultAction.resultAction.RemoveCell;
          }
          /**
           * Get action to be applied on the cell.
           *
           * @param {object} cell virtual table cell to apply action
           */

          function getAddResultActionToCell(cell) {
            switch (where) {
              case TableResultAction.where.Column:
                if (cell.isColSpan) {
                  return TableResultAction.resultAction.SumSpanCount;
                } else if (cell.isRowSpan && cell.isVirtual) {
                  return TableResultAction.resultAction.Ignore;
                }

                break;

              case TableResultAction.where.Row:
                if (cell.isRowSpan) {
                  return TableResultAction.resultAction.SumSpanCount;
                } else if (cell.isColSpan && cell.isVirtual) {
                  return TableResultAction.resultAction.Ignore;
                }

                break;
            }

            return TableResultAction.resultAction.AddCell;
          }

          function init() {
            setStartPoint();
            createVirtualTable();
          } /// ///////////////////////////////////////////
          // Public functions
          /// ///////////////////////////////////////////

          /**
           * Recover array os what to do in table.
           */

          this.getActionList = function () {
            var fixedRow = where === TableResultAction.where.Row ? _startPoint.rowPos : -1;
            var fixedCol = where === TableResultAction.where.Column ? _startPoint.colPos : -1;
            var actualPosition = 0;
            var canContinue = true;

            while (canContinue) {
              var rowPosition = fixedRow >= 0 ? fixedRow : actualPosition;
              var colPosition = fixedCol >= 0 ? fixedCol : actualPosition;
              var row = _virtualTable[rowPosition];

              if (!row) {
                canContinue = false;
                return _actionCellList;
              }

              var cell = row[colPosition];

              if (!cell) {
                canContinue = false;
                return _actionCellList;
              } // Define action to be applied in this cell


              var resultAction = TableResultAction.resultAction.Ignore;

              switch (action) {
                case TableResultAction.requestAction.Add:
                  resultAction = getAddResultActionToCell(cell);
                  break;

                case TableResultAction.requestAction.Delete:
                  resultAction = getDeleteResultActionToCell(cell);
                  break;
              }

              _actionCellList.push(getActionCell(cell, resultAction, rowPosition, colPosition));

              actualPosition++;
            }

            return _actionCellList;
          };

          init();
        };
        /**
        *
        * Where action occours enum.
        */

        TableResultAction.where = {
          'Row': 0,
          'Column': 1
        };
        /**
        *
        * Requested action to apply enum.
        */

        TableResultAction.requestAction = {
          'Add': 0,
          'Delete': 1
        };
        /**
        *
        * Result action to be executed enum.
        */

        TableResultAction.resultAction = {
          'Ignore': 0,
          'SubtractSpanCount': 1,
          'RemoveCell': 2,
          'AddCell': 3,
          'SumSpanCount': 4
        };
        /**
         *
         * @class editing.Table
         *
         * Table
         *
         */

        var Table_Table = function () {
          function Table_Table() {
            _classCallCheck(this, Table_Table);
          }

          _createClass(Table_Table, [{
            key: 'tab',

            /**
             * handle tab key
             *
             * @param {WrappedRange} rng
             * @param {Boolean} isShift
             */
            value: function tab(rng, isShift) {
              var cell = dom.ancestor(rng.commonAncestor(), dom.isCell);
              var table = dom.ancestor(cell, dom.isTable);
              var cells = dom.listDescendant(table, dom.isCell);
              var nextCell = lists[isShift ? 'prev' : 'next'](cells, cell);

              if (nextCell) {
                core_range.create(nextCell, 0).select();
              }
            }
            /**
             * Add a new row
             *
             * @param {WrappedRange} rng
             * @param {String} position (top/bottom)
             * @return {Node}
             */

          }, {
            key: 'addRow',
            value: function addRow(rng, position) {
              var cell = dom.ancestor(rng.commonAncestor(), dom.isCell);
              var currentTr = external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default()(cell).closest('tr');
              var trAttributes = this.recoverAttributes(currentTr);
              var html = external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default()('<tr' + trAttributes + '></tr>');
              var vTable = new TableResultAction(cell, TableResultAction.where.Row, TableResultAction.requestAction.Add, external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default()(currentTr).closest('table')[0]);
              var actions = vTable.getActionList();

              for (var idCell = 0; idCell < actions.length; idCell++) {
                var currentCell = actions[idCell];
                var tdAttributes = this.recoverAttributes(currentCell.baseCell);

                switch (currentCell.action) {
                  case TableResultAction.resultAction.AddCell:
                    html.append('<td' + tdAttributes + '>' + dom.blank + '</td>');
                    break;

                  case TableResultAction.resultAction.SumSpanCount:
                    if (position === 'top') {
                      var baseCellTr = currentCell.baseCell.parent;
                      var isTopFromRowSpan = (!baseCellTr ? 0 : currentCell.baseCell.closest('tr').rowIndex) <= currentTr[0].rowIndex;

                      if (isTopFromRowSpan) {
                        var newTd = external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default()('<div></div>').append(external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default()('<td' + tdAttributes + '>' + dom.blank + '</td>').removeAttr('rowspan')).html();
                        html.append(newTd);
                        break;
                      }
                    }

                    var rowspanNumber = parseInt(currentCell.baseCell.rowSpan, 10);
                    rowspanNumber++;
                    currentCell.baseCell.setAttribute('rowSpan', rowspanNumber);
                    break;
                }
              }

              if (position === 'top') {
                currentTr.before(html);
              } else {
                var cellHasRowspan = cell.rowSpan > 1;

                if (cellHasRowspan) {
                  var lastTrIndex = currentTr[0].rowIndex + (cell.rowSpan - 2);
                  external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default()(external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default()(currentTr).parent().find('tr')[lastTrIndex]).after(external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default()(html));
                  return;
                }

                currentTr.after(html);
              }
            }
            /**
             * Add a new col
             *
             * @param {WrappedRange} rng
             * @param {String} position (left/right)
             * @return {Node}
             */

          }, {
            key: 'addCol',
            value: function addCol(rng, position) {
              var cell = dom.ancestor(rng.commonAncestor(), dom.isCell);
              var row = external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default()(cell).closest('tr');
              var rowsGroup = external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default()(row).siblings();
              rowsGroup.push(row);
              var vTable = new TableResultAction(cell, TableResultAction.where.Column, TableResultAction.requestAction.Add, external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default()(row).closest('table')[0]);
              var actions = vTable.getActionList();

              for (var actionIndex = 0; actionIndex < actions.length; actionIndex++) {
                var currentCell = actions[actionIndex];
                var tdAttributes = this.recoverAttributes(currentCell.baseCell);

                switch (currentCell.action) {
                  case TableResultAction.resultAction.AddCell:
                    if (position === 'right') {
                      external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default()(currentCell.baseCell).after('<td' + tdAttributes + '>' + dom.blank + '</td>');
                    } else {
                      external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default()(currentCell.baseCell).before('<td' + tdAttributes + '>' + dom.blank + '</td>');
                    }

                    break;

                  case TableResultAction.resultAction.SumSpanCount:
                    if (position === 'right') {
                      var colspanNumber = parseInt(currentCell.baseCell.colSpan, 10);
                      colspanNumber++;
                      currentCell.baseCell.setAttribute('colSpan', colspanNumber);
                    } else {
                      external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default()(currentCell.baseCell).before('<td' + tdAttributes + '>' + dom.blank + '</td>');
                    }

                    break;
                }
              }
            }
            /*
            * Copy attributes from element.
            *
            * @param {object} Element to recover attributes.
            * @return {string} Copied string elements.
            */

          }, {
            key: 'recoverAttributes',
            value: function recoverAttributes(el) {
              var resultStr = '';

              if (!el) {
                return resultStr;
              }

              var attrList = el.attributes || [];

              for (var i = 0; i < attrList.length; i++) {
                if (attrList[i].name.toLowerCase() === 'id') {
                  continue;
                }

                if (attrList[i].specified) {
                  resultStr += ' ' + attrList[i].name + '=\'' + attrList[i].value + '\'';
                }
              }

              return resultStr;
            }
            /**
             * Delete current row
             *
             * @param {WrappedRange} rng
             * @return {Node}
             */

          }, {
            key: 'deleteRow',
            value: function deleteRow(rng) {
              var cell = dom.ancestor(rng.commonAncestor(), dom.isCell);
              var row = external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default()(cell).closest('tr');
              var cellPos = row.children('td, th').index(external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default()(cell));
              var rowPos = row[0].rowIndex;
              var vTable = new TableResultAction(cell, TableResultAction.where.Row, TableResultAction.requestAction.Delete, external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default()(row).closest('table')[0]);
              var actions = vTable.getActionList();

              for (var actionIndex = 0; actionIndex < actions.length; actionIndex++) {
                if (!actions[actionIndex]) {
                  continue;
                }

                var baseCell = actions[actionIndex].baseCell;
                var virtualPosition = actions[actionIndex].virtualTable;
                var hasRowspan = baseCell.rowSpan && baseCell.rowSpan > 1;
                var rowspanNumber = hasRowspan ? parseInt(baseCell.rowSpan, 10) : 0;

                switch (actions[actionIndex].action) {
                  case TableResultAction.resultAction.Ignore:
                    continue;

                  case TableResultAction.resultAction.AddCell:
                    var nextRow = row.next('tr')[0];

                    if (!nextRow) {
                      continue;
                    }

                    var cloneRow = row[0].cells[cellPos];

                    if (hasRowspan) {
                      if (rowspanNumber > 2) {
                        rowspanNumber--;
                        nextRow.insertBefore(cloneRow, nextRow.cells[cellPos]);
                        nextRow.cells[cellPos].setAttribute('rowSpan', rowspanNumber);
                        nextRow.cells[cellPos].innerHTML = '';
                      } else if (rowspanNumber === 2) {
                        nextRow.insertBefore(cloneRow, nextRow.cells[cellPos]);
                        nextRow.cells[cellPos].removeAttribute('rowSpan');
                        nextRow.cells[cellPos].innerHTML = '';
                      }
                    }

                    continue;

                  case TableResultAction.resultAction.SubtractSpanCount:
                    if (hasRowspan) {
                      if (rowspanNumber > 2) {
                        rowspanNumber--;
                        baseCell.setAttribute('rowSpan', rowspanNumber);

                        if (virtualPosition.rowIndex !== rowPos && baseCell.cellIndex === cellPos) {
                          baseCell.innerHTML = '';
                        }
                      } else if (rowspanNumber === 2) {
                        baseCell.removeAttribute('rowSpan');

                        if (virtualPosition.rowIndex !== rowPos && baseCell.cellIndex === cellPos) {
                          baseCell.innerHTML = '';
                        }
                      }
                    }

                    continue;

                  case TableResultAction.resultAction.RemoveCell:
                    // Do not need remove cell because row will be deleted.
                    continue;
                }
              }

              row.remove();
            }
            /**
             * Delete current col
             *
             * @param {WrappedRange} rng
             * @return {Node}
             */

          }, {
            key: 'deleteCol',
            value: function deleteCol(rng) {
              var cell = dom.ancestor(rng.commonAncestor(), dom.isCell);
              var row = external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default()(cell).closest('tr');
              var cellPos = row.children('td, th').index(external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default()(cell));
              var vTable = new TableResultAction(cell, TableResultAction.where.Column, TableResultAction.requestAction.Delete, external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default()(row).closest('table')[0]);
              var actions = vTable.getActionList();

              for (var actionIndex = 0; actionIndex < actions.length; actionIndex++) {
                if (!actions[actionIndex]) {
                  continue;
                }

                switch (actions[actionIndex].action) {
                  case TableResultAction.resultAction.Ignore:
                    continue;

                  case TableResultAction.resultAction.SubtractSpanCount:
                    var baseCell = actions[actionIndex].baseCell;
                    var hasColspan = baseCell.colSpan && baseCell.colSpan > 1;

                    if (hasColspan) {
                      var colspanNumber = baseCell.colSpan ? parseInt(baseCell.colSpan, 10) : 0;

                      if (colspanNumber > 2) {
                        colspanNumber--;
                        baseCell.setAttribute('colSpan', colspanNumber);

                        if (baseCell.cellIndex === cellPos) {
                          baseCell.innerHTML = '';
                        }
                      } else if (colspanNumber === 2) {
                        baseCell.removeAttribute('colSpan');

                        if (baseCell.cellIndex === cellPos) {
                          baseCell.innerHTML = '';
                        }
                      }
                    }

                    continue;

                  case TableResultAction.resultAction.RemoveCell:
                    dom.remove(actions[actionIndex].baseCell, true);
                    continue;
                }
              }
            }
            /**
             * create empty table element
             *
             * @param {Number} rowCount
             * @param {Number} colCount
             * @return {Node}
             */

          }, {
            key: 'createTable',
            value: function createTable(colCount, rowCount, options) {
              var tds = [];
              var tdHTML = void 0;

              for (var idxCol = 0; idxCol < colCount; idxCol++) {
                tds.push('<td>' + dom.blank + '</td>');
              }

              tdHTML = tds.join('');
              var trs = [];
              var trHTML = void 0;

              for (var idxRow = 0; idxRow < rowCount; idxRow++) {
                trs.push('<tr>' + tdHTML + '</tr>');
              }

              trHTML = trs.join('');
              var $table = external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default()('<table>' + trHTML + '</table>');

              if (options && options.tableClassName) {
                $table.addClass(options.tableClassName);
              }

              return $table[0];
            }
            /**
             * Delete current table
             *
             * @param {WrappedRange} rng
             * @return {Node}
             */

          }, {
            key: 'deleteTable',
            value: function deleteTable(rng) {
              var cell = dom.ancestor(rng.commonAncestor(), dom.isCell);
              external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default()(cell).closest('table').remove();
            }
          }]);

          return Table_Table;
        }();
        // CONCATENATED MODULE: ./src/js/base/module/Editor.js


        var KEY_BOGUS = 'bogus';
        /**
         * @class Editor
         */

        var Editor_Editor = function () {
          function Editor_Editor(context) {
            var _this9 = this;

            _classCallCheck(this, Editor_Editor);

            this.context = context;
            this.$note = context.layoutInfo.note;
            this.$editor = context.layoutInfo.editor;
            this.$editable = context.layoutInfo.editable;
            this.options = context.options;
            this.lang = this.options.langInfo;
            this.editable = this.$editable[0];
            this.lastRange = null;
            this.snapshot = null;
            this.style = new Style_Style();
            this.table = new Table_Table();
            this.typing = new Typing_Typing(context);
            this.bullet = new Bullet_Bullet();
            this.history = new History_History(this.$editable);
            this.context.memo('help.undo', this.lang.help.undo);
            this.context.memo('help.redo', this.lang.help.redo);
            this.context.memo('help.tab', this.lang.help.tab);
            this.context.memo('help.untab', this.lang.help.untab);
            this.context.memo('help.insertParagraph', this.lang.help.insertParagraph);
            this.context.memo('help.insertOrderedList', this.lang.help.insertOrderedList);
            this.context.memo('help.insertUnorderedList', this.lang.help.insertUnorderedList);
            this.context.memo('help.indent', this.lang.help.indent);
            this.context.memo('help.outdent', this.lang.help.outdent);
            this.context.memo('help.formatPara', this.lang.help.formatPara);
            this.context.memo('help.insertHorizontalRule', this.lang.help.insertHorizontalRule);
            this.context.memo('help.fontName', this.lang.help.fontName); // native commands(with execCommand), generate function for execCommand

            var commands = ['bold', 'italic', 'underline', 'strikethrough', 'superscript', 'subscript', 'justifyLeft', 'justifyCenter', 'justifyRight', 'justifyFull', 'formatBlock', 'removeFormat', 'backColor'];

            for (var idx = 0, len = commands.length; idx < len; idx++) {
              this[commands[idx]] = function (sCmd) {
                return function (value) {
                  _this9.beforeCommand();
                  document.execCommand(sCmd, false, value);
                  _this9.afterCommand(true);
                };
              }(commands[idx]);

              this.context.memo('help.' + commands[idx], this.lang.help[commands[idx]]);
            }

            this.fontName = this.wrapCommand(function (value) {
              return _this9.fontStyling('font-family', env.validFontName(value));
            });
            this.fontSize = this.wrapCommand(function (value) {
              var unit = _this9.currentStyle()['font-size-unit'];
              return _this9.fontStyling('font-size', value + unit);
            });
            this.fontSizeUnit = this.wrapCommand(function (value) {
              var size = _this9.currentStyle()['font-size'];
              return _this9.fontStyling('font-size', size + value);
            });

            for (var _idx = 1; _idx <= 6; _idx++) {
              this['formatH' + _idx] = function (idx) {
                return function () {
                  _this9.formatBlock('H' + idx);
                };
              }(_idx);

              this.context.memo('help.formatH' + _idx, this.lang.help['formatH' + _idx]);
            }

            ;
            this.insertParagraph = this.wrapCommand(function () {
              _this9.typing.insertParagraph(_this9.editable);
            });
            this.insertOrderedList = this.wrapCommand(function () {
              _this9.bullet.insertOrderedList(_this9.editable);
            });
            this.insertUnorderedList = this.wrapCommand(function () {
              _this9.bullet.insertUnorderedList(_this9.editable);
            });
            this.indent = this.wrapCommand(function () {
              _this9.bullet.indent(_this9.editable);
            });
            this.outdent = this.wrapCommand(function () {
              _this9.bullet.outdent(_this9.editable);
            });
            /**
             * insertNode
             * insert node
             * @param {Node} node
             */

            this.insertNode = this.wrapCommand(function (node) {
              if (_this9.isLimited(external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default()(node).text().length)) {
                return;
              }

              var rng = _this9.getLastRange();
              rng.insertNode(node);
              _this9.setLastRange(core_range.createFromNodeAfter(node).select());
            });
            /**
             * insert text
             * @param {String} text
             */

            this.insertText = this.wrapCommand(function (text) {
              if (_this9.isLimited(text.length)) {
                return;
              }

              var rng = _this9.getLastRange();
              var textNode = rng.insertNode(dom.createText(text));
              _this9.setLastRange(core_range.create(textNode, dom.nodeLength(textNode)).select());
            });
            /**
             * paste HTML
             * @param {String} markup
             */

            this.pasteHTML = this.wrapCommand(function (markup) {
              if (_this9.isLimited(markup.length)) {
                return;
              }

              markup = _this9.context.invoke('codeview.purify', markup);
              var contents = _this9.getLastRange().pasteHTML(markup);
              _this9.setLastRange(core_range.createFromNodeAfter(lists.last(contents)).select());
            });
            /**
             * formatBlock
             *
             * @param {String} tagName
             */

            this.formatBlock = this.wrapCommand(function (tagName, $target) {
              var onApplyCustomStyle = _this9.options.callbacks.onApplyCustomStyle;

              if (onApplyCustomStyle) {
                onApplyCustomStyle.call(_this9, $target, _this9.context, _this9.onFormatBlock);
              } else {
                _this9.onFormatBlock(tagName, $target);
              }
            });
            /**
             * insert horizontal rule
             */

            this.insertHorizontalRule = this.wrapCommand(function () {
              var hrNode = _this9.getLastRange().insertNode(dom.create('HR'));

              if (hrNode.nextSibling) {
                _this9.setLastRange(core_range.create(hrNode.nextSibling, 0).normalize().select());
              }
            });
            /**
             * lineHeight
             * @param {String} value
             */

            this.lineHeight = this.wrapCommand(function (value) {
              _this9.style.stylePara(_this9.getLastRange(), {
                lineHeight: value
              });
            });
            /**
             * create link (command)
             *
             * @param {Object} linkInfo
             */

            this.createLink = this.wrapCommand(function (linkInfo) {
              var linkUrl = linkInfo.url;
              var linkText = linkInfo.text;
              var isNewWindow = linkInfo.isNewWindow;
              var checkProtocol = linkInfo.checkProtocol;
              var rng = linkInfo.range || _this9.getLastRange();
              var additionalTextLength = linkText.length - rng.toString().length;

              if (additionalTextLength > 0 && _this9.isLimited(additionalTextLength)) {
                return;
              }

              var isTextChanged = rng.toString() !== linkText; // handle spaced urls from input

              if (typeof linkUrl === 'string') {
                linkUrl = linkUrl.trim();
              }

              if (_this9.options.onCreateLink) {
                linkUrl = _this9.options.onCreateLink(linkUrl);
              } else if (checkProtocol) {
                // if url doesn't have any protocol and not even a relative or a label, use http:// as default
                linkUrl = /^([A-Za-z][A-Za-z0-9+-.]*\:|#|\/)/.test(linkUrl) ? linkUrl : _this9.options.defaultProtocol + linkUrl;
              }

              var anchors = [];

              if (isTextChanged) {
                rng = rng.deleteContents();
                var anchor = rng.insertNode(external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default()('<A>' + linkText + '</A>')[0]);
                anchors.push(anchor);
              } else {
                anchors = _this9.style.styleNodes(rng, {
                  nodeName: 'A',
                  expandClosestSibling: true,
                  onlyPartialContains: true
                });
              }

              external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default.a.each(anchors, function (idx, anchor) {
                external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default()(anchor).attr('href', linkUrl);

                if (isNewWindow) {
                  external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default()(anchor).attr('target', '_blank');
                } else {
                  external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default()(anchor).removeAttr('target');
                }
              });
              var startRange = core_range.createFromNodeBefore(lists.head(anchors));
              var startPoint = startRange.getStartPoint();
              var endRange = core_range.createFromNodeAfter(lists.last(anchors));
              var endPoint = endRange.getEndPoint();
              _this9.setLastRange(core_range.create(startPoint.node, startPoint.offset, endPoint.node, endPoint.offset).select());
            });
            /**
             * setting color
             *
             * @param {Object} sObjColor  color code
             * @param {String} sObjColor.foreColor foreground color
             * @param {String} sObjColor.backColor background color
             */

            this.color = this.wrapCommand(function (colorInfo) {
              var foreColor = colorInfo.foreColor;
              var backColor = colorInfo.backColor;

              if (foreColor) {
                document.execCommand('foreColor', false, foreColor);
              }

              if (backColor) {
                document.execCommand('backColor', false, backColor);
              }
            });
            /**
             * Set foreground color
             *
             * @param {String} colorCode foreground color code
             */

            this.foreColor = this.wrapCommand(function (colorInfo) {
              document.execCommand('styleWithCSS', false, true);
              document.execCommand('foreColor', false, colorInfo);
            });
            /**
             * insert Table
             *
             * @param {String} dimension of table (ex : "5x5")
             */

            this.insertTable = this.wrapCommand(function (dim) {
              var dimension = dim.split('x');
              var rng = _this9.getLastRange().deleteContents();
              rng.insertNode(_this9.table.createTable(dimension[0], dimension[1], _this9.options));
            });
            /**
             * remove media object and Figure Elements if media object is img with Figure.
             */

            this.removeMedia = this.wrapCommand(function () {
              var $target = external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default()(_this9.restoreTarget()).parent();

              if ($target.closest('figure').length) {
                $target.closest('figure').remove();
              } else {
                $target = external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default()(_this9.restoreTarget()).detach();
              }

              _this9.context.triggerEvent('media.delete', $target, _this9.$editable);
            });
            /**
             * float me
             *
             * @param {String} value
             */

            this.floatMe = this.wrapCommand(function (value) {
              var $target = external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default()(_this9.restoreTarget());
              $target.toggleClass('note-float-left', value === 'left');
              $target.toggleClass('note-float-right', value === 'right');
              $target.css('float', value === 'none' ? '' : value);
            });
            /**
             * resize overlay element
             * @param {String} value
             */

            this.resize = this.wrapCommand(function (value) {
              var $target = external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default()(_this9.restoreTarget());
              value = parseFloat(value);

              if (value === 0) {
                $target.css('width', '');
              } else {
                $target.css({
                  width: value * 100 + '%',
                  height: ''
                });
              }
            });
          }

          _createClass(Editor_Editor, [{
            key: 'initialize',
            value: function initialize() {
              var _this10 = this;

              // bind custom events
              this.$editable.on('keydown', function (event) {
                if (event.keyCode === core_key.code.ENTER) {
                  _this10.context.triggerEvent('enter', event);
                }

                _this10.context.triggerEvent('keydown', event); // keep a snapshot to limit text on input event

                _this10.snapshot = _this10.history.makeSnapshot();

                if (!event.isDefaultPrevented()) {
                  if (_this10.options.shortcuts) {
                    _this10.handleKeyMap(event);
                  } else {
                    _this10.preventDefaultEditableShortCuts(event);
                  }
                }

                if (_this10.isLimited(1, event)) {
                  var lastRange = _this10.getLastRange();

                  if (lastRange.eo - lastRange.so === 0) {
                    return false;
                  }
                }

                _this10.setLastRange();
              }).on('keyup', function (event) {
                _this10.setLastRange();
                _this10.context.triggerEvent('keyup', event);
              }).on('focus', function (event) {
                _this10.setLastRange();
                _this10.context.triggerEvent('focus', event);
              }).on('blur', function (event) {
                _this10.context.triggerEvent('blur', event);
              }).on('mousedown', function (event) {
                _this10.context.triggerEvent('mousedown', event);
              }).on('mouseup', function (event) {
                _this10.setLastRange();
                _this10.history.recordUndo();
                _this10.context.triggerEvent('mouseup', event);
              }).on('scroll', function (event) {
                _this10.context.triggerEvent('scroll', event);
              }).on('paste', function (event) {
                _this10.setLastRange();
                _this10.context.triggerEvent('paste', event);
              }).on('input', function (event) {
                // To limit composition characters (e.g. Korean)
                if (_this10.isLimited(0) && _this10.snapshot) {
                  _this10.history.applySnapshot(_this10.snapshot);
                }
              });
              this.$editable.attr('spellcheck', this.options.spellCheck);
              this.$editable.attr('autocorrect', this.options.spellCheck);

              if (this.options.disableGrammar) {
                this.$editable.attr('data-gramm', false);
              } // init content before set event


              this.$editable.html(dom.html(this.$note) || dom.emptyPara);
              this.$editable.on(env.inputEventName, func.debounce(function () {
                _this10.context.triggerEvent('change', _this10.$editable.html(), _this10.$editable);
              }, 10));
              this.$editor.on('focusin', function (event) {
                _this10.context.triggerEvent('focusin', event);
              }).on('focusout', function (event) {
                _this10.context.triggerEvent('focusout', event);
              });

              if (!this.options.airMode) {
                if (this.options.width) {
                  this.$editor.outerWidth(this.options.width);
                }

                if (this.options.height) {
                  this.$editable.outerHeight(this.options.height);
                }

                if (this.options.maxHeight) {
                  this.$editable.css('max-height', this.options.maxHeight);
                }

                if (this.options.minHeight) {
                  this.$editable.css('min-height', this.options.minHeight);
                }
              }

              this.history.recordUndo();
              this.setLastRange();
            }
          }, {
            key: 'destroy',
            value: function destroy() {
              this.$editable.off();
            }
          }, {
            key: 'handleKeyMap',
            value: function handleKeyMap(event) {
              var keyMap = this.options.keyMap[env.isMac ? 'mac' : 'pc'];
              var keys = [];

              if (event.metaKey) {
                keys.push('CMD');
              }

              if (event.ctrlKey && !event.altKey) {
                keys.push('CTRL');
              }

              if (event.shiftKey) {
                keys.push('SHIFT');
              }

              var keyName = core_key.nameFromCode[event.keyCode];

              if (keyName) {
                keys.push(keyName);
              }

              var eventName = keyMap[keys.join('+')];

              if (keyName === 'TAB' && !this.options.tabDisable) {
                this.afterCommand();
              } else if (eventName) {
                if (this.context.invoke(eventName) !== false) {
                  event.preventDefault();
                }
              } else if (core_key.isEdit(event.keyCode)) {
                this.afterCommand();
              }
            }
          }, {
            key: 'preventDefaultEditableShortCuts',
            value: function preventDefaultEditableShortCuts(event) {
              // B(Bold, 66) / I(Italic, 73) / U(Underline, 85)
              if ((event.ctrlKey || event.metaKey) && lists.contains([66, 73, 85], event.keyCode)) {
                event.preventDefault();
              }
            }
          }, {
            key: 'isLimited',
            value: function isLimited(pad, event) {
              pad = pad || 0;

              if (typeof event !== 'undefined') {
                if (core_key.isMove(event.keyCode) || core_key.isNavigation(event.keyCode) || event.ctrlKey || event.metaKey || lists.contains([core_key.code.BACKSPACE, core_key.code.DELETE], event.keyCode)) {
                  return false;
                }
              }

              if (this.options.maxTextLength > 0) {
                if (this.$editable.text().length + pad > this.options.maxTextLength) {
                  return true;
                }
              }

              return false;
            }
            /**
             * create range
             * @return {WrappedRange}
             */

          }, {
            key: 'createRange',
            value: function createRange() {
              this.focus();
              this.setLastRange();
              return this.getLastRange();
            }
          }, {
            key: 'setLastRange',
            value: function setLastRange(rng) {
              if (rng) {
                this.lastRange = rng;
              } else {
                this.lastRange = core_range.create(this.editable);

                if (external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default()(this.lastRange.sc).closest('.note-editable').length === 0) {
                  this.lastRange = core_range.createFromBodyElement(this.editable);
                }
              }
            }
          }, {
            key: 'getLastRange',
            value: function getLastRange() {
              if (!this.lastRange) {
                this.setLastRange();
              }

              return this.lastRange;
            }
            /**
             * saveRange
             *
             * save current range
             *
             * @param {Boolean} [thenCollapse=false]
             */

          }, {
            key: 'saveRange',
            value: function saveRange(thenCollapse) {
              if (thenCollapse) {
                this.getLastRange().collapse().select();
              }
            }
            /**
             * restoreRange
             *
             * restore lately range
             */

          }, {
            key: 'restoreRange',
            value: function restoreRange() {
              if (this.lastRange) {
                this.lastRange.select();
                this.focus();
              }
            }
          }, {
            key: 'saveTarget',
            value: function saveTarget(node) {
              this.$editable.data('target', node);
            }
          }, {
            key: 'clearTarget',
            value: function clearTarget() {
              this.$editable.removeData('target');
            }
          }, {
            key: 'restoreTarget',
            value: function restoreTarget() {
              return this.$editable.data('target');
            }
            /**
             * currentStyle
             *
             * current style
             * @return {Object|Boolean} unfocus
             */

          }, {
            key: 'currentStyle',
            value: function currentStyle() {
              var rng = core_range.create();

              if (rng) {
                rng = rng.normalize();
              }

              return rng ? this.style.current(rng) : this.style.fromNode(this.$editable);
            }
            /**
             * style from node
             *
             * @param {jQuery} $node
             * @return {Object}
             */

          }, {
            key: 'styleFromNode',
            value: function styleFromNode($node) {
              return this.style.fromNode($node);
            }
            /**
             * undo
             */

          }, {
            key: 'undo',
            value: function undo() {
              this.context.triggerEvent('before.command', this.$editable.html());
              this.history.undo();
              this.context.triggerEvent('change', this.$editable.html(), this.$editable);
            }
            /*
            * commit
            */

          }, {
            key: 'commit',
            value: function commit() {
              this.context.triggerEvent('before.command', this.$editable.html());
              this.history.commit();
              this.context.triggerEvent('change', this.$editable.html(), this.$editable);
            }
            /**
             * redo
             */

          }, {
            key: 'redo',
            value: function redo() {
              this.context.triggerEvent('before.command', this.$editable.html());
              this.history.redo();
              this.context.triggerEvent('change', this.$editable.html(), this.$editable);
            }
            /**
             * before command
             */

          }, {
            key: 'beforeCommand',
            value: function beforeCommand() {
              this.context.triggerEvent('before.command', this.$editable.html()); // keep focus on editable before command execution

              this.focus();
            }
            /**
             * after command
             * @param {Boolean} isPreventTrigger
             */

          }, {
            key: 'afterCommand',
            value: function afterCommand(isPreventTrigger) {
              this.normalizeContent();
              this.history.recordUndo();

              if (!isPreventTrigger) {
                this.context.triggerEvent('change', this.$editable.html(), this.$editable);
              }
            }
            /**
             * handle tab key
             */

          }, {
            key: 'tab',
            value: function tab() {
              var rng = this.getLastRange();

              if (rng.isCollapsed() && rng.isOnCell()) {
                this.table.tab(rng);
              } else {
                if (this.options.tabSize === 0) {
                  return false;
                }

                if (!this.isLimited(this.options.tabSize)) {
                  this.beforeCommand();
                  this.typing.insertTab(rng, this.options.tabSize);
                  this.afterCommand();
                }
              }
            }
            /**
             * handle shift+tab key
             */

          }, {
            key: 'untab',
            value: function untab() {
              var rng = this.getLastRange();

              if (rng.isCollapsed() && rng.isOnCell()) {
                this.table.tab(rng, true);
              } else {
                if (this.options.tabSize === 0) {
                  return false;
                }
              }
            }
            /**
             * run given function between beforeCommand and afterCommand
             */

          }, {
            key: 'wrapCommand',
            value: function wrapCommand(fn) {
              return function () {
                this.beforeCommand();
                fn.apply(this, arguments);
                this.afterCommand();
              };
            }
            /**
             * insert image
             *
             * @param {String} src
             * @param {String|Function} param
             * @return {Promise}
             */

          }, {
            key: 'insertImage',
            value: function insertImage(src, param) {
              var _this11 = this;

              return createImage(src, param).then(function ($image) {
                _this11.beforeCommand();

                if (typeof param === 'function') {
                  param($image);
                } else {
                  if (typeof param === 'string') {
                    $image.attr('data-filename', param);
                  }

                  $image.css('width', Math.min(_this11.$editable.width(), $image.width()));
                }

                $image.show();
                _this11.getLastRange().insertNode($image[0]);
                _this11.setLastRange(core_range.createFromNodeAfter($image[0]).select());
                _this11.afterCommand();
              }).fail(function (e) {
                _this11.context.triggerEvent('image.upload.error', e);
              });
            }
            /**
             * insertImages
             * @param {File[]} files
             */

          }, {
            key: 'insertImagesAsDataURL',
            value: function insertImagesAsDataURL(files) {
              var _this12 = this;

              external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default.a.each(files, function (idx, file) {
                var filename = file.name;

                if (_this12.options.maximumImageFileSize && _this12.options.maximumImageFileSize < file.size) {
                  _this12.context.triggerEvent('image.upload.error', _this12.lang.image.maximumFileSizeError);
                } else {
                  readFileAsDataURL(file).then(function (dataURL) {
                    return _this12.insertImage(dataURL, filename);
                  }).fail(function () {
                    _this12.context.triggerEvent('image.upload.error');
                  });
                }
              });
            }
            /**
             * insertImagesOrCallback
             * @param {File[]} files
             */

          }, {
            key: 'insertImagesOrCallback',
            value: function insertImagesOrCallback(files) {
              var callbacks = this.options.callbacks; // If onImageUpload set,

              if (callbacks.onImageUpload) {
                this.context.triggerEvent('image.upload', files); // else insert Image as dataURL
              } else {
                this.insertImagesAsDataURL(files);
              }
            }
            /**
             * return selected plain text
             * @return {String} text
             */

          }, {
            key: 'getSelectedText',
            value: function getSelectedText() {
              var rng = this.getLastRange(); // if range on anchor, expand range with anchor

              if (rng.isOnAnchor()) {
                rng = core_range.createFromNode(dom.ancestor(rng.sc, dom.isAnchor));
              }

              return rng.toString();
            }
          }, {
            key: 'onFormatBlock',
            value: function onFormatBlock(tagName, $target) {
              // [workaround] for MSIE, IE need `<`
              document.execCommand('FormatBlock', false, env.isMSIE ? '<' + tagName + '>' : tagName); // support custom class

              if ($target && $target.length) {
                // find the exact element has given tagName
                if ($target[0].tagName.toUpperCase() !== tagName.toUpperCase()) {
                  $target = $target.find(tagName);
                }

                if ($target && $target.length) {
                  var className = $target[0].className || '';

                  if (className) {
                    var currentRange = this.createRange();
                    var $parent = external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default()([currentRange.sc, currentRange.ec]).closest(tagName);
                    $parent.addClass(className);
                  }
                }
              }
            }
          }, {
            key: 'formatPara',
            value: function formatPara() {
              this.formatBlock('P');
            }
          }, {
            key: 'fontStyling',
            value: function fontStyling(target, value) {
              var rng = this.getLastRange();

              if (rng !== '') {
                var spans = this.style.styleNodes(rng);
                this.$editor.find('.note-status-output').html('');
                external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default()(spans).css(target, value); // [workaround] added styled bogus span for style
                //  - also bogus character needed for cursor position

                if (rng.isCollapsed()) {
                  var firstSpan = lists.head(spans);

                  if (firstSpan && !dom.nodeLength(firstSpan)) {
                    firstSpan.innerHTML = dom.ZERO_WIDTH_NBSP_CHAR;
                    core_range.createFromNodeAfter(firstSpan.firstChild).select();
                    this.setLastRange();
                    this.$editable.data(KEY_BOGUS, firstSpan);
                  }
                }
              } else {
                var noteStatusOutput = external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default.a.now();
                this.$editor.find('.note-status-output').html('<div id="note-status-output-' + noteStatusOutput + '" class="alert alert-info">' + this.lang.output.noSelection + '</div>');
                setTimeout(function () {
                  external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default()('#note-status-output-' + noteStatusOutput).remove();
                }, 5000);
              }
            }
            /**
             * unlink
             *
             * @type command
             */

          }, {
            key: 'unlink',
            value: function unlink() {
              var rng = this.getLastRange();

              if (rng.isOnAnchor()) {
                var anchor = dom.ancestor(rng.sc, dom.isAnchor);
                rng = core_range.createFromNode(anchor);
                rng.select();
                this.setLastRange();
                this.beforeCommand();
                document.execCommand('unlink');
                this.afterCommand();
              }
            }
            /**
             * returns link info
             *
             * @return {Object}
             * @return {WrappedRange} return.range
             * @return {String} return.text
             * @return {Boolean} [return.isNewWindow=true]
             * @return {String} [return.url=""]
             */

          }, {
            key: 'getLinkInfo',
            value: function getLinkInfo() {
              var rng = this.getLastRange().expand(dom.isAnchor); // Get the first anchor on range(for edit).

              var $anchor = external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default()(lists.head(rng.nodes(dom.isAnchor)));
              var linkInfo = {
                range: rng,
                text: rng.toString(),
                url: $anchor.length ? $anchor.attr('href') : ''
              }; // When anchor exists,

              if ($anchor.length) {
                // Set isNewWindow by checking its target.
                linkInfo.isNewWindow = $anchor.attr('target') === '_blank';
              }

              return linkInfo;
            }
          }, {
            key: 'addRow',
            value: function addRow(position) {
              var rng = this.getLastRange(this.$editable);

              if (rng.isCollapsed() && rng.isOnCell()) {
                this.beforeCommand();
                this.table.addRow(rng, position);
                this.afterCommand();
              }
            }
          }, {
            key: 'addCol',
            value: function addCol(position) {
              var rng = this.getLastRange(this.$editable);

              if (rng.isCollapsed() && rng.isOnCell()) {
                this.beforeCommand();
                this.table.addCol(rng, position);
                this.afterCommand();
              }
            }
          }, {
            key: 'deleteRow',
            value: function deleteRow() {
              var rng = this.getLastRange(this.$editable);

              if (rng.isCollapsed() && rng.isOnCell()) {
                this.beforeCommand();
                this.table.deleteRow(rng);
                this.afterCommand();
              }
            }
          }, {
            key: 'deleteCol',
            value: function deleteCol() {
              var rng = this.getLastRange(this.$editable);

              if (rng.isCollapsed() && rng.isOnCell()) {
                this.beforeCommand();
                this.table.deleteCol(rng);
                this.afterCommand();
              }
            }
          }, {
            key: 'deleteTable',
            value: function deleteTable() {
              var rng = this.getLastRange(this.$editable);

              if (rng.isCollapsed() && rng.isOnCell()) {
                this.beforeCommand();
                this.table.deleteTable(rng);
                this.afterCommand();
              }
            }
            /**
             * @param {Position} pos
             * @param {jQuery} $target - target element
             * @param {Boolean} [bKeepRatio] - keep ratio
             */

          }, {
            key: 'resizeTo',
            value: function resizeTo(pos, $target, bKeepRatio) {
              var imageSize = void 0;

              if (bKeepRatio) {
                var newRatio = pos.y / pos.x;
                var ratio = $target.data('ratio');
                imageSize = {
                  width: ratio > newRatio ? pos.x : pos.y / ratio,
                  height: ratio > newRatio ? pos.x * ratio : pos.y
                };
              } else {
                imageSize = {
                  width: pos.x,
                  height: pos.y
                };
              }

              $target.css(imageSize);
            }
            /**
             * returns whether editable area has focus or not.
             */

          }, {
            key: 'hasFocus',
            value: function hasFocus() {
              return this.$editable.is(':focus');
            }
            /**
             * set focus
             */

          }, {
            key: 'focus',
            value: function focus() {
              // [workaround] Screen will move when page is scolled in IE.
              //  - do focus when not focused
              if (!this.hasFocus()) {
                this.$editable.focus();
              }
            }
            /**
             * returns whether contents is empty or not.
             * @return {Boolean}
             */

          }, {
            key: 'isEmpty',
            value: function isEmpty() {
              return dom.isEmpty(this.$editable[0]) || dom.emptyPara === this.$editable.html();
            }
            /**
             * Removes all contents and restores the editable instance to an _emptyPara_.
             */

          }, {
            key: 'empty',
            value: function empty() {
              this.context.invoke('code', dom.emptyPara);
            }
            /**
             * normalize content
             */

          }, {
            key: 'normalizeContent',
            value: function normalizeContent() {
              this.$editable[0].normalize();
            }
          }]);

          return Editor_Editor;
        }();
        // CONCATENATED MODULE: ./src/js/base/module/Clipboard.js

        var Clipboard_Clipboard = function () {
          function Clipboard_Clipboard(context) {
            _classCallCheck(this, Clipboard_Clipboard);

            this.context = context;
            this.$editable = context.layoutInfo.editable;
          }

          _createClass(Clipboard_Clipboard, [{
            key: 'initialize',
            value: function initialize() {
              this.$editable.on('paste', this.pasteByEvent.bind(this));
            }
            /**
             * paste by clipboard event
             *
             * @param {Event} event
             */

          }, {
            key: 'pasteByEvent',
            value: function pasteByEvent(event) {
              var clipboardData = event.originalEvent.clipboardData;

              if (clipboardData && clipboardData.items && clipboardData.items.length) {
                var item = clipboardData.items.length > 1 ? clipboardData.items[1] : lists.head(clipboardData.items);

                if (item.kind === 'file' && item.type.indexOf('image/') !== -1) {
                  // paste img file
                  this.context.invoke('editor.insertImagesOrCallback', [item.getAsFile()]);
                  event.preventDefault();
                  this.context.invoke('editor.afterCommand');
                } else if (item.kind === 'string') {
                  // paste text with maxTextLength check
                  if (this.context.invoke('editor.isLimited', clipboardData.getData('Text').length)) {
                    event.preventDefault();
                  } else {
                    this.context.invoke('editor.afterCommand');
                  }
                }
              }
            }
          }]);

          return Clipboard_Clipboard;
        }();
        // CONCATENATED MODULE: ./src/js/base/module/Dropzone.js

        var Dropzone_Dropzone = function () {
          function Dropzone_Dropzone(context) {
            _classCallCheck(this, Dropzone_Dropzone);

            this.context = context;
            this.$eventListener = external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default()(document);
            this.$editor = context.layoutInfo.editor;
            this.$editable = context.layoutInfo.editable;
            this.options = context.options;
            this.lang = this.options.langInfo;
            this.documentEventHandlers = {};
            this.$dropzone = external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default()(['<div class="note-dropzone">', '<div class="note-dropzone-message"/>', '</div>'].join('')).prependTo(this.$editor);
          }
          /**
           * attach Drag and Drop Events
           */

          _createClass(Dropzone_Dropzone, [{
            key: 'initialize',
            value: function initialize() {
              if (this.options.disableDragAndDrop) {
                // prevent default drop event
                this.documentEventHandlers.onDrop = function (e) {
                  e.preventDefault();
                }; // do not consider outside of dropzone


                this.$eventListener = this.$dropzone;
                this.$eventListener.on('drop', this.documentEventHandlers.onDrop);
              } else {
                this.attachDragAndDropEvent();
              }
            }
            /**
             * attach Drag and Drop Events
             */

          }, {
            key: 'attachDragAndDropEvent',
            value: function attachDragAndDropEvent() {
              var _this13 = this;

              var collection = external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default()();
              var $dropzoneMessage = this.$dropzone.find('.note-dropzone-message');

              this.documentEventHandlers.onDragenter = function (e) {
                var isCodeview = _this13.context.invoke('codeview.isActivated');
                var hasEditorSize = _this13.$editor.width() > 0 && _this13.$editor.height() > 0;

                if (!isCodeview && !collection.length && hasEditorSize) {
                  _this13.$editor.addClass('dragover');
                  _this13.$dropzone.width(_this13.$editor.width());
                  _this13.$dropzone.height(_this13.$editor.height());
                  $dropzoneMessage.text(_this13.lang.image.dragImageHere);
                }

                collection = collection.add(e.target);
              };

              this.documentEventHandlers.onDragleave = function (e) {
                collection = collection.not(e.target); // If nodeName is BODY, then just make it over (fix for IE)

                if (!collection.length || e.target.nodeName === 'BODY') {
                  collection = external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default()();
                  _this13.$editor.removeClass('dragover');
                }
              };

              this.documentEventHandlers.onDrop = function () {
                collection = external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default()();
                _this13.$editor.removeClass('dragover');
              }; // show dropzone on dragenter when dragging a object to document
              // -but only if the editor is visible, i.e. has a positive width and height


              this.$eventListener.on('dragenter', this.documentEventHandlers.onDragenter).on('dragleave', this.documentEventHandlers.onDragleave).on('drop', this.documentEventHandlers.onDrop); // change dropzone's message on hover.

              this.$dropzone.on('dragenter', function () {
                _this13.$dropzone.addClass('hover');
                $dropzoneMessage.text(_this13.lang.image.dropImage);
              }).on('dragleave', function () {
                _this13.$dropzone.removeClass('hover');
                $dropzoneMessage.text(_this13.lang.image.dragImageHere);
              }); // attach dropImage

              this.$dropzone.on('drop', function (event) {
                var dataTransfer = event.originalEvent.dataTransfer; // stop the browser from opening the dropped content

                event.preventDefault();

                if (dataTransfer && dataTransfer.files && dataTransfer.files.length) {
                  _this13.$editable.focus();
                  _this13.context.invoke('editor.insertImagesOrCallback', dataTransfer.files);
                } else {
                  external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default.a.each(dataTransfer.types, function (idx, type) {
                    // skip moz-specific types
                    if (type.toLowerCase().indexOf('_moz_') > -1) {
                      return;
                    }

                    var content = dataTransfer.getData(type);

                    if (type.toLowerCase().indexOf('text') > -1) {
                      _this13.context.invoke('editor.pasteHTML', content);
                    } else {
                      external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default()(content).each(function (idx, item) {
                        _this13.context.invoke('editor.insertNode', item);
                      });
                    }
                  });
                }
              }).on('dragover', false); // prevent default dragover event
            }
          }, {
            key: 'destroy',
            value: function destroy() {
              var _this14 = this;

              Object.keys(this.documentEventHandlers).forEach(function (key) {
                _this14.$eventListener.off(key.substr(2).toLowerCase(), _this14.documentEventHandlers[key]);
              });
              this.documentEventHandlers = {};
            }
          }]);

          return Dropzone_Dropzone;
        }();
        // CONCATENATED MODULE: ./src/js/base/module/Codeview.js


        var CodeMirror = void 0;

        if (env.hasCodeMirror) {
          CodeMirror = window.CodeMirror;
        }
        /**
         * @class Codeview
         */

        var Codeview_CodeView = function () {
          function Codeview_CodeView(context) {
            _classCallCheck(this, Codeview_CodeView);

            this.context = context;
            this.$editor = context.layoutInfo.editor;
            this.$editable = context.layoutInfo.editable;
            this.$codable = context.layoutInfo.codable;
            this.options = context.options;
          }

          _createClass(Codeview_CodeView, [{
            key: 'sync',
            value: function sync() {
              var isCodeview = this.isActivated();

              if (isCodeview && env.hasCodeMirror) {
                this.$codable.data('cmEditor').save();
              }
            }
            /**
             * @return {Boolean}
             */

          }, {
            key: 'isActivated',
            value: function isActivated() {
              return this.$editor.hasClass('codeview');
            }
            /**
             * toggle codeview
             */

          }, {
            key: 'toggle',
            value: function toggle() {
              if (this.isActivated()) {
                this.deactivate();
              } else {
                this.activate();
              }

              this.context.triggerEvent('codeview.toggled');
            }
            /**
             * purify input value
             * @param value
             * @returns {*}
             */

          }, {
            key: 'purify',
            value: function purify(value) {
              if (this.options.codeviewFilter) {
                // filter code view regex
                value = value.replace(this.options.codeviewFilterRegex, ''); // allow specific iframe tag

                if (this.options.codeviewIframeFilter) {
                  var whitelist = this.options.codeviewIframeWhitelistSrc.concat(this.options.codeviewIframeWhitelistSrcBase);
                  value = value.replace(/(<iframe.*?>.*?(?:<\/iframe>)?)/gi, function (tag) {
                    // remove if src attribute is duplicated
                    if (/<.+src(?==?('|"|\s)?)[\s\S]+src(?=('|"|\s)?)[^>]*?>/i.test(tag)) {
                      return '';
                    }

                    var _iteratorNormalCompletion = true;
                    var _didIteratorError = false;
                    var _iteratorError = undefined;

                    try {
                      for (var _iterator = whitelist[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                        var src = _step.value;

                        // pass if src is trusted
                        if (new RegExp('src="(https?:)?\/\/' + src.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&') + '\/(.+)"').test(tag)) {
                          return tag;
                        }
                      }
                    } catch (err) {
                      _didIteratorError = true;
                      _iteratorError = err;
                    } finally {
                      try {
                        if (!_iteratorNormalCompletion && _iterator.return) {
                          _iterator.return();
                        }
                      } finally {
                        if (_didIteratorError) {
                          throw _iteratorError;
                        }
                      }
                    }

                    return '';
                  });
                }
              }

              return value;
            }
            /**
             * activate code view
             */

          }, {
            key: 'activate',
            value: function activate() {
              var _this15 = this;

              this.$codable.val(dom.html(this.$editable, this.options.prettifyHtml));
              this.$codable.height(this.$editable.height());
              this.context.invoke('toolbar.updateCodeview', true);
              this.$editor.addClass('codeview');
              this.$codable.focus(); // activate CodeMirror as codable

              if (env.hasCodeMirror) {
                var cmEditor = CodeMirror.fromTextArea(this.$codable[0], this.options.codemirror); // CodeMirror TernServer

                if (this.options.codemirror.tern) {
                  var server = new CodeMirror.TernServer(this.options.codemirror.tern);
                  cmEditor.ternServer = server;
                  cmEditor.on('cursorActivity', function (cm) {
                    server.updateArgHints(cm);
                  });
                }

                cmEditor.on('blur', function (event) {
                  _this15.context.triggerEvent('blur.codeview', cmEditor.getValue(), event);
                });
                cmEditor.on('change', function (event) {
                  _this15.context.triggerEvent('change.codeview', cmEditor.getValue(), cmEditor);
                }); // CodeMirror hasn't Padding.

                cmEditor.setSize(null, this.$editable.outerHeight());
                this.$codable.data('cmEditor', cmEditor);
              } else {
                this.$codable.on('blur', function (event) {
                  _this15.context.triggerEvent('blur.codeview', _this15.$codable.val(), event);
                });
                this.$codable.on('input', function (event) {
                  _this15.context.triggerEvent('change.codeview', _this15.$codable.val(), _this15.$codable);
                });
              }
            }
            /**
             * deactivate code view
             */

          }, {
            key: 'deactivate',
            value: function deactivate() {
              // deactivate CodeMirror as codable
              if (env.hasCodeMirror) {
                var cmEditor = this.$codable.data('cmEditor');
                this.$codable.val(cmEditor.getValue());
                cmEditor.toTextArea();
              }

              var value = this.purify(dom.value(this.$codable, this.options.prettifyHtml) || dom.emptyPara);
              var isChange = this.$editable.html() !== value;
              this.$editable.html(value);
              this.$editable.height(this.options.height ? this.$codable.height() : 'auto');
              this.$editor.removeClass('codeview');

              if (isChange) {
                this.context.triggerEvent('change', this.$editable.html(), this.$editable);
              }

              this.$editable.focus();
              this.context.invoke('toolbar.updateCodeview', false);
            }
          }, {
            key: 'destroy',
            value: function destroy() {
              if (this.isActivated()) {
                this.deactivate();
              }
            }
          }]);

          return Codeview_CodeView;
        }();
        // CONCATENATED MODULE: ./src/js/base/module/Statusbar.js

        var EDITABLE_PADDING = 24;

        var Statusbar_Statusbar = function () {
          function Statusbar_Statusbar(context) {
            _classCallCheck(this, Statusbar_Statusbar);

            this.$document = external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default()(document);
            this.$statusbar = context.layoutInfo.statusbar;
            this.$editable = context.layoutInfo.editable;
            this.options = context.options;
          }

          _createClass(Statusbar_Statusbar, [{
            key: 'initialize',
            value: function initialize() {
              var _this16 = this;

              if (this.options.airMode || this.options.disableResizeEditor) {
                this.destroy();
                return;
              }

              this.$statusbar.on('mousedown', function (event) {
                event.preventDefault();
                event.stopPropagation();
                var editableTop = _this16.$editable.offset().top - _this16.$document.scrollTop();

                var onMouseMove = function onMouseMove(event) {
                  var height = event.clientY - (editableTop + EDITABLE_PADDING);
                  height = _this16.options.minheight > 0 ? Math.max(height, _this16.options.minheight) : height;
                  height = _this16.options.maxHeight > 0 ? Math.min(height, _this16.options.maxHeight) : height;
                  _this16.$editable.height(height);
                };

                _this16.$document.on('mousemove', onMouseMove).one('mouseup', function () {
                  _this16.$document.off('mousemove', onMouseMove);
                });
              });
            }
          }, {
            key: 'destroy',
            value: function destroy() {
              this.$statusbar.off();
              this.$statusbar.addClass('locked');
            }
          }]);

          return Statusbar_Statusbar;
        }();
        // CONCATENATED MODULE: ./src/js/base/module/Fullscreen.js

        var Fullscreen_Fullscreen = function () {
          function Fullscreen_Fullscreen(context) {
            var _this17 = this;

            _classCallCheck(this, Fullscreen_Fullscreen);

            this.context = context;
            this.$editor = context.layoutInfo.editor;
            this.$toolbar = context.layoutInfo.toolbar;
            this.$editable = context.layoutInfo.editable;
            this.$codable = context.layoutInfo.codable;
            this.$window = external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default()(window);
            this.$scrollbar = external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default()('html, body');

            this.onResize = function () {
              _this17.resizeTo({
                h: _this17.$window.height() - _this17.$toolbar.outerHeight()
              });
            };
          }

          _createClass(Fullscreen_Fullscreen, [{
            key: 'resizeTo',
            value: function resizeTo(size) {
              this.$editable.css('height', size.h);
              this.$codable.css('height', size.h);

              if (this.$codable.data('cmeditor')) {
                this.$codable.data('cmeditor').setsize(null, size.h);
              }
            }
            /**
             * toggle fullscreen
             */

          }, {
            key: 'toggle',
            value: function toggle() {
              this.$editor.toggleClass('fullscreen');

              if (this.isFullscreen()) {
                this.$editable.data('orgHeight', this.$editable.css('height'));
                this.$editable.data('orgMaxHeight', this.$editable.css('maxHeight'));
                this.$editable.css('maxHeight', '');
                this.$window.on('resize', this.onResize).trigger('resize');
                this.$scrollbar.css('overflow', 'hidden');
              } else {
                this.$window.off('resize', this.onResize);
                this.resizeTo({
                  h: this.$editable.data('orgHeight')
                });
                this.$editable.css('maxHeight', this.$editable.css('orgMaxHeight'));
                this.$scrollbar.css('overflow', 'visible');
              }

              this.context.invoke('toolbar.updateFullscreen', this.isFullscreen());
            }
          }, {
            key: 'isFullscreen',
            value: function isFullscreen() {
              return this.$editor.hasClass('fullscreen');
            }
          }]);

          return Fullscreen_Fullscreen;
        }();
        // CONCATENATED MODULE: ./src/js/base/module/Handle.js


        var Handle_Handle = function () {
          function Handle_Handle(context) {
            var _this18 = this;

            _classCallCheck(this, Handle_Handle);

            this.context = context;
            this.$document = external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default()(document);
            this.$editingArea = context.layoutInfo.editingArea;
            this.options = context.options;
            this.lang = this.options.langInfo;
            this.events = {
              'summernote.mousedown': function summernoteMousedown(we, e) {
                if (_this18.update(e.target, e)) {
                  e.preventDefault();
                }
              },
              'summernote.keyup summernote.scroll summernote.change summernote.dialog.shown': function summernoteKeyupSummernoteScrollSummernoteChangeSummernoteDialogShown() {
                _this18.update();
              },
              'summernote.disable summernote.blur': function summernoteDisableSummernoteBlur() {
                _this18.hide();
              },
              'summernote.codeview.toggled': function summernoteCodeviewToggled() {
                _this18.update();
              }
            };
          }

          _createClass(Handle_Handle, [{
            key: 'initialize',
            value: function initialize() {
              var _this19 = this;

              this.$handle = external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default()(['<div class="note-handle">', '<div class="note-control-selection">', '<div class="note-control-selection-bg"></div>', '<div class="note-control-holder note-control-nw"></div>', '<div class="note-control-holder note-control-ne"></div>', '<div class="note-control-holder note-control-sw"></div>', '<div class="', this.options.disableResizeImage ? 'note-control-holder' : 'note-control-sizing', ' note-control-se"></div>', this.options.disableResizeImage ? '' : '<div class="note-control-selection-info"></div>', '</div>', '</div>'].join('')).prependTo(this.$editingArea);
              this.$handle.on('mousedown', function (event) {
                if (dom.isControlSizing(event.target)) {
                  event.preventDefault();
                  event.stopPropagation();
                  var $target = _this19.$handle.find('.note-control-selection').data('target');
                  var posStart = $target.offset();
                  var scrollTop = _this19.$document.scrollTop();

                  var onMouseMove = function onMouseMove(event) {
                    _this19.context.invoke('editor.resizeTo', {
                      x: event.clientX - posStart.left,
                      y: event.clientY - (posStart.top - scrollTop)
                    }, $target, !event.shiftKey);
                    _this19.update($target[0], event);
                  };

                  _this19.$document.on('mousemove', onMouseMove).one('mouseup', function (e) {
                    e.preventDefault();
                    _this19.$document.off('mousemove', onMouseMove);
                    _this19.context.invoke('editor.afterCommand');
                  });

                  if (!$target.data('ratio')) {
                    // original ratio.
                    $target.data('ratio', $target.height() / $target.width());
                  }
                }
              }); // Listen for scrolling on the handle overlay.

              this.$handle.on('wheel', function (e) {
                e.preventDefault();
                _this19.update();
              });
            }
          }, {
            key: 'destroy',
            value: function destroy() {
              this.$handle.remove();
            }
          }, {
            key: 'update',
            value: function update(target, event) {
              if (this.context.isDisabled()) {
                return false;
              }

              var isImage = dom.isImg(target);
              var $selection = this.$handle.find('.note-control-selection');
              this.context.invoke('imagePopover.update', target, event);

              if (isImage) {
                var $image = external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default()(target);
                var position = $image.position();
                var pos = {
                  left: position.left + parseInt($image.css('marginLeft'), 10),
                  top: position.top + parseInt($image.css('marginTop'), 10)
                }; // exclude margin

                var imageSize = {
                  w: $image.outerWidth(false),
                  h: $image.outerHeight(false)
                };
                $selection.css({
                  display: 'block',
                  left: pos.left,
                  top: pos.top,
                  width: imageSize.w,
                  height: imageSize.h
                }).data('target', $image); // save current image element.

                var origImageObj = new Image();
                origImageObj.src = $image.attr('src');
                var sizingText = imageSize.w + 'x' + imageSize.h + ' (' + this.lang.image.original + ': ' + origImageObj.width + 'x' + origImageObj.height + ')';
                $selection.find('.note-control-selection-info').text(sizingText);
                this.context.invoke('editor.saveTarget', target);
              } else {
                this.hide();
              }

              return isImage;
            }
            /**
             * hide
             *
             * @param {jQuery} $handle
             */

          }, {
            key: 'hide',
            value: function hide() {
              this.context.invoke('editor.clearTarget');
              this.$handle.children().hide();
            }
          }]);

          return Handle_Handle;
        }();
        // CONCATENATED MODULE: ./src/js/base/module/AutoLink.js


        var defaultScheme = 'http://';
        var linkPattern = /^([A-Za-z][A-Za-z0-9+-.]*\:[\/]{2}|tel:|mailto:[A-Z0-9._%+-]+@)?(www\.)?(.+)$/i;

        var AutoLink_AutoLink = function () {
          function AutoLink_AutoLink(context) {
            var _this20 = this;

            _classCallCheck(this, AutoLink_AutoLink);

            this.context = context;
            this.events = {
              'summernote.keyup': function summernoteKeyup(we, e) {
                if (!e.isDefaultPrevented()) {
                  _this20.handleKeyup(e);
                }
              },
              'summernote.keydown': function summernoteKeydown(we, e) {
                _this20.handleKeydown(e);
              }
            };
          }

          _createClass(AutoLink_AutoLink, [{
            key: 'initialize',
            value: function initialize() {
              this.lastWordRange = null;
            }
          }, {
            key: 'destroy',
            value: function destroy() {
              this.lastWordRange = null;
            }
          }, {
            key: 'replace',
            value: function replace() {
              if (!this.lastWordRange) {
                return;
              }

              var keyword = this.lastWordRange.toString();
              var match = keyword.match(linkPattern);

              if (match && (match[1] || match[2])) {
                var link = match[1] ? keyword : defaultScheme + keyword;
                var urlText = keyword.replace(/^(?:https?:\/\/)?(?:tel?:?)?(?:mailto?:?)?(?:www\.)?/i, '').split('/')[0];
                var node = external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default()('<a />').html(urlText).attr('href', link)[0];

                if (this.context.options.linkTargetBlank) {
                  external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default()(node).attr('target', '_blank');
                }

                this.lastWordRange.insertNode(node);
                this.lastWordRange = null;
                this.context.invoke('editor.focus');
              }
            }
          }, {
            key: 'handleKeydown',
            value: function handleKeydown(e) {
              if (lists.contains([core_key.code.ENTER, core_key.code.SPACE], e.keyCode)) {
                var wordRange = this.context.invoke('editor.createRange').getWordRange();
                this.lastWordRange = wordRange;
              }
            }
          }, {
            key: 'handleKeyup',
            value: function handleKeyup(e) {
              if (lists.contains([core_key.code.ENTER, core_key.code.SPACE], e.keyCode)) {
                this.replace();
              }
            }
          }]);

          return AutoLink_AutoLink;
        }();
        // CONCATENATED MODULE: ./src/js/base/module/AutoSync.js

        /**
         * textarea auto sync.
         */

        var AutoSync_AutoSync = function () {
          function AutoSync_AutoSync(context) {
            var _this21 = this;

            _classCallCheck(this, AutoSync_AutoSync);

            this.$note = context.layoutInfo.note;
            this.events = {
              'summernote.change': function summernoteChange() {
                _this21.$note.val(context.invoke('code'));
              }
            };
          }

          _createClass(AutoSync_AutoSync, [{
            key: 'shouldInitialize',
            value: function shouldInitialize() {
              return dom.isTextarea(this.$note[0]);
            }
          }]);

          return AutoSync_AutoSync;
        }();
        // CONCATENATED MODULE: ./src/js/base/module/AutoReplace.js


        var AutoReplace_AutoReplace = function () {
          function AutoReplace_AutoReplace(context) {
            var _this22 = this;

            _classCallCheck(this, AutoReplace_AutoReplace);

            this.context = context;
            this.options = context.options.replace || {};
            this.keys = [core_key.code.ENTER, core_key.code.SPACE, core_key.code.PERIOD, core_key.code.COMMA, core_key.code.SEMICOLON, core_key.code.SLASH];
            this.previousKeydownCode = null;
            this.events = {
              'summernote.keyup': function summernoteKeyup(we, e) {
                if (!e.isDefaultPrevented()) {
                  _this22.handleKeyup(e);
                }
              },
              'summernote.keydown': function summernoteKeydown(we, e) {
                _this22.handleKeydown(e);
              }
            };
          }

          _createClass(AutoReplace_AutoReplace, [{
            key: 'shouldInitialize',
            value: function shouldInitialize() {
              return !!this.options.match;
            }
          }, {
            key: 'initialize',
            value: function initialize() {
              this.lastWord = null;
            }
          }, {
            key: 'destroy',
            value: function destroy() {
              this.lastWord = null;
            }
          }, {
            key: 'replace',
            value: function replace() {
              if (!this.lastWord) {
                return;
              }

              var self = this;
              var keyword = this.lastWord.toString();
              this.options.match(keyword, function (match) {
                if (match) {
                  var node = '';

                  if (typeof match === 'string') {
                    node = dom.createText(match);
                  } else if (match instanceof jQuery) {
                    node = match[0];
                  } else if (match instanceof Node) {
                    node = match;
                  }

                  if (!node) return;
                  self.lastWord.insertNode(node);
                  self.lastWord = null;
                  self.context.invoke('editor.focus');
                }
              });
            }
          }, {
            key: 'handleKeydown',
            value: function handleKeydown(e) {
              // this forces it to remember the last whole word, even if multiple termination keys are pressed
              // before the previous key is let go.
              if (this.previousKeydownCode && lists.contains(this.keys, this.previousKeydownCode)) {
                this.previousKeydownCode = e.keyCode;
                return;
              }

              if (lists.contains(this.keys, e.keyCode)) {
                var wordRange = this.context.invoke('editor.createRange').getWordRange();
                this.lastWord = wordRange;
              }

              this.previousKeydownCode = e.keyCode;
            }
          }, {
            key: 'handleKeyup',
            value: function handleKeyup(e) {
              if (lists.contains(this.keys, e.keyCode)) {
                this.replace();
              }
            }
          }]);

          return AutoReplace_AutoReplace;
        }();
        // CONCATENATED MODULE: ./src/js/base/module/Placeholder.js

        var Placeholder_Placeholder = function () {
          function Placeholder_Placeholder(context) {
            var _this23 = this;

            _classCallCheck(this, Placeholder_Placeholder);

            this.context = context;
            this.$editingArea = context.layoutInfo.editingArea;
            this.options = context.options;

            if (this.options.inheritPlaceholder === true) {
              // get placeholder value from the original element
              this.options.placeholder = this.context.$note.attr('placeholder') || this.options.placeholder;
            }

            this.events = {
              'summernote.init summernote.change': function summernoteInitSummernoteChange() {
                _this23.update();
              },
              'summernote.codeview.toggled': function summernoteCodeviewToggled() {
                _this23.update();
              }
            };
          }

          _createClass(Placeholder_Placeholder, [{
            key: 'shouldInitialize',
            value: function shouldInitialize() {
              return !!this.options.placeholder;
            }
          }, {
            key: 'initialize',
            value: function initialize() {
              var _this24 = this;

              this.$placeholder = external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default()('<div class="note-placeholder">');
              this.$placeholder.on('click', function () {
                _this24.context.invoke('focus');
              }).html(this.options.placeholder).prependTo(this.$editingArea);
              this.update();
            }
          }, {
            key: 'destroy',
            value: function destroy() {
              this.$placeholder.remove();
            }
          }, {
            key: 'update',
            value: function update() {
              var isShow = !this.context.invoke('codeview.isActivated') && this.context.invoke('editor.isEmpty');
              this.$placeholder.toggle(isShow);
            }
          }]);

          return Placeholder_Placeholder;
        }();
        // CONCATENATED MODULE: ./src/js/base/module/Buttons.js


        var Buttons_Buttons = function () {
          function Buttons_Buttons(context) {
            _classCallCheck(this, Buttons_Buttons);

            this.ui = external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default.a.summernote.ui;
            this.context = context;
            this.$toolbar = context.layoutInfo.toolbar;
            this.options = context.options;
            this.lang = this.options.langInfo;
            this.invertedKeyMap = func.invertObject(this.options.keyMap[env.isMac ? 'mac' : 'pc']);
          }

          _createClass(Buttons_Buttons, [{
            key: 'representShortcut',
            value: function representShortcut(editorMethod) {
              var shortcut = this.invertedKeyMap[editorMethod];

              if (!this.options.shortcuts || !shortcut) {
                return '';
              }

              if (env.isMac) {
                shortcut = shortcut.replace('CMD', '⌘').replace('SHIFT', '⇧');
              }

              shortcut = shortcut.replace('BACKSLASH', '\\').replace('SLASH', '/').replace('LEFTBRACKET', '[').replace('RIGHTBRACKET', ']');
              return ' (' + shortcut + ')';
            }
          }, {
            key: 'button',
            value: function button(o) {
              if (!this.options.tooltip && o.tooltip) {
                delete o.tooltip;
              }

              o.container = this.options.container;
              return this.ui.button(o);
            }
          }, {
            key: 'initialize',
            value: function initialize() {
              this.addToolbarButtons();
              this.addImagePopoverButtons();
              this.addLinkPopoverButtons();
              this.addTablePopoverButtons();
              this.fontInstalledMap = {};
            }
          }, {
            key: 'destroy',
            value: function destroy() {
              delete this.fontInstalledMap;
            }
          }, {
            key: 'isFontInstalled',
            value: function isFontInstalled(name) {
              if (!this.fontInstalledMap.hasOwnProperty(name)) {
                this.fontInstalledMap[name] = env.isFontInstalled(name) || lists.contains(this.options.fontNamesIgnoreCheck, name);
              }

              return this.fontInstalledMap[name];
            }
          }, {
            key: 'isFontDeservedToAdd',
            value: function isFontDeservedToAdd(name) {
              name = name.toLowerCase();
              return name !== '' && this.isFontInstalled(name) && env.genericFontFamilies.indexOf(name) === -1;
            }
          }, {
            key: 'colorPalette',
            value: function colorPalette(className, tooltip, backColor, foreColor) {
              var _this25 = this;

              return this.ui.buttonGroup({
                className: 'note-color ' + className,
                children: [this.button({
                  className: 'note-current-color-button',
                  contents: this.ui.icon(this.options.icons.font + ' note-recent-color'),
                  tooltip: tooltip,
                  click: function click(e) {
                    var $button = external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default()(e.currentTarget);

                    if (backColor && foreColor) {
                      _this25.context.invoke('editor.color', {
                        backColor: $button.attr('data-backColor'),
                        foreColor: $button.attr('data-foreColor')
                      });
                    } else if (backColor) {
                      _this25.context.invoke('editor.color', {
                        backColor: $button.attr('data-backColor')
                      });
                    } else if (foreColor) {
                      _this25.context.invoke('editor.color', {
                        foreColor: $button.attr('data-foreColor')
                      });
                    }
                  },
                  callback: function callback($button) {
                    var $recentColor = $button.find('.note-recent-color');

                    if (backColor) {
                      $recentColor.css('background-color', _this25.options.colorButton.backColor);
                      $button.attr('data-backColor', _this25.options.colorButton.backColor);
                    }

                    if (foreColor) {
                      $recentColor.css('color', _this25.options.colorButton.foreColor);
                      $button.attr('data-foreColor', _this25.options.colorButton.foreColor);
                    } else {
                      $recentColor.css('color', 'transparent');
                    }
                  }
                }), this.button({
                  className: 'dropdown-toggle',
                  contents: this.ui.dropdownButtonContents('', this.options),
                  tooltip: this.lang.color.more,
                  data: {
                    toggle: 'dropdown'
                  }
                }), this.ui.dropdown({
                  items: (backColor ? ['<div class="note-palette">', '<div class="note-palette-title">' + this.lang.color.background + '</div>', '<div>', '<button type="button" class="note-color-reset btn btn-light" data-event="backColor" data-value="inherit">', this.lang.color.transparent, '</button>', '</div>', '<div class="note-holder" data-event="backColor"/>', '<div>', '<button type="button" class="note-color-select btn" data-event="openPalette" data-value="backColorPicker">', this.lang.color.cpSelect, '</button>', '<input type="color" id="backColorPicker" class="note-btn note-color-select-btn" value="' + this.options.colorButton.backColor + '" data-event="backColorPalette">', '</div>', '<div class="note-holder-custom" id="backColorPalette" data-event="backColor"/>', '</div>'].join('') : '') + (foreColor ? ['<div class="note-palette">', '<div class="note-palette-title">' + this.lang.color.foreground + '</div>', '<div>', '<button type="button" class="note-color-reset btn btn-light" data-event="removeFormat" data-value="foreColor">', this.lang.color.resetToDefault, '</button>', '</div>', '<div class="note-holder" data-event="foreColor"/>', '<div>', '<button type="button" class="note-color-select btn" data-event="openPalette" data-value="foreColorPicker">', this.lang.color.cpSelect, '</button>', '<input type="color" id="foreColorPicker" class="note-btn note-color-select-btn" value="' + this.options.colorButton.foreColor + '" data-event="foreColorPalette">', '</div>', // Fix missing Div, Commented to find easily if it's wrong
                  '<div class="note-holder-custom" id="foreColorPalette" data-event="foreColor"/>', '</div>'].join('') : ''),
                  callback: function callback($dropdown) {
                    $dropdown.find('.note-holder').each(function (idx, item) {
                      var $holder = external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default()(item);
                      $holder.append(_this25.ui.palette({
                        colors: _this25.options.colors,
                        colorsName: _this25.options.colorsName,
                        eventName: $holder.data('event'),
                        container: _this25.options.container,
                        tooltip: _this25.options.tooltip
                      }).render());
                    });
                    /* TODO: do we have to record recent custom colors within cookies? */

                    var customColors = [['#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF']];
                    $dropdown.find('.note-holder-custom').each(function (idx, item) {
                      var $holder = external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default()(item);
                      $holder.append(_this25.ui.palette({
                        colors: customColors,
                        colorsName: customColors,
                        eventName: $holder.data('event'),
                        container: _this25.options.container,
                        tooltip: _this25.options.tooltip
                      }).render());
                    });
                    $dropdown.find('input[type=color]').each(function (idx, item) {
                      external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default()(item).change(function () {
                        var $chip = $dropdown.find('#' + external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default()(this).data('event')).find('.note-color-btn').first();
                        var color = this.value.toUpperCase();
                        $chip.css('background-color', color).attr('aria-label', color).attr('data-value', color).attr('data-original-title', color);
                        $chip.click();
                      });
                    });
                  },
                  click: function click(event) {
                    event.stopPropagation();
                    var $parent = external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default()('.' + className).find('.show');
                    var $button = external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default()(event.target);
                    var eventName = $button.data('event');
                    var value = $button.attr('data-value');

                    if (eventName === 'openPalette') {
                      var $picker = $parent.find('#' + value);
                      var $palette = external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default()($parent.find('#' + $picker.data('event')).find('.note-color-row')[0]); // Shift palette chips

                      var $chip = $palette.find('.note-color-btn').last().detach(); // Set chip attributes

                      var color = $picker.val();
                      $chip.css('background-color', color).attr('aria-label', color).attr('data-value', color).attr('data-original-title', color);
                      $palette.prepend($chip);
                      $picker.click();
                    } else if (lists.contains(['backColor', 'foreColor'], eventName)) {
                      var key = eventName === 'backColor' ? 'background-color' : 'color';
                      var $color = $button.closest('.note-color').find('.note-recent-color');
                      var $currentButton = $button.closest('.note-color').find('.note-current-color-button');
                      $color.css(key, value);
                      $currentButton.attr('data-' + eventName, value);
                      _this25.context.invoke('editor.' + eventName, value);
                    }
                  }
                })]
              }).render();
            }
          }, {
            key: 'addToolbarButtons',
            value: function addToolbarButtons() {
              var _this26 = this;

              this.context.memo('button.style', function () {
                return _this26.ui.buttonGroup([_this26.button({
                  className: 'dropdown-toggle',
                  contents: _this26.ui.dropdownButtonContents(_this26.ui.icon(_this26.options.icons.magic), _this26.options),
                  tooltip: _this26.lang.style.style,
                  data: {
                    toggle: 'dropdown'
                  }
                }), _this26.ui.dropdown({
                  className: 'dropdown-style',
                  items: _this26.options.styleTags,
                  title: _this26.lang.style.style,
                  template: function template(item) {
                    if (typeof item === 'string') {
                      item = {
                        tag: item,
                        title: _this26.lang.style.hasOwnProperty(item) ? _this26.lang.style[item] : item
                      };
                    }

                    var tag = item.tag;
                    var title = item.title;
                    var style = item.style ? ' style="' + item.style + '" ' : '';
                    var className = item.className ? ' class="' + item.className + '"' : '';
                    return '<' + tag + style + className + '>' + title + '</' + tag + '>';
                  },
                  click: _this26.context.createInvokeHandler('editor.formatBlock')
                })]).render();
              });

              var _loop = function _loop(styleIdx, styleLen) {
                var item = _this26.options.styleTags[styleIdx];
                _this26.context.memo('button.style.' + item, function () {
                  return _this26.button({
                    className: 'note-btn-style-' + item,
                    contents: '<div data-value="' + item + '">' + item.toUpperCase() + '</div>',
                    tooltip: _this26.lang.style[item],
                    click: _this26.context.createInvokeHandler('editor.formatBlock')
                  }).render();
                });
              };

              for (var styleIdx = 0, styleLen = this.options.styleTags.length; styleIdx < styleLen; styleIdx++) {
                _loop(styleIdx, styleLen);
              }

              this.context.memo('button.bold', function () {
                return _this26.button({
                  className: 'note-btn-bold',
                  contents: _this26.ui.icon(_this26.options.icons.bold),
                  tooltip: _this26.lang.font.bold + _this26.representShortcut('bold'),
                  click: _this26.context.createInvokeHandlerAndUpdateState('editor.bold')
                }).render();
              });
              this.context.memo('button.italic', function () {
                return _this26.button({
                  className: 'note-btn-italic',
                  contents: _this26.ui.icon(_this26.options.icons.italic),
                  tooltip: _this26.lang.font.italic + _this26.representShortcut('italic'),
                  click: _this26.context.createInvokeHandlerAndUpdateState('editor.italic')
                }).render();
              });
              this.context.memo('button.underline', function () {
                return _this26.button({
                  className: 'note-btn-underline',
                  contents: _this26.ui.icon(_this26.options.icons.underline),
                  tooltip: _this26.lang.font.underline + _this26.representShortcut('underline'),
                  click: _this26.context.createInvokeHandlerAndUpdateState('editor.underline')
                }).render();
              });
              this.context.memo('button.clear', function () {
                return _this26.button({
                  contents: _this26.ui.icon(_this26.options.icons.eraser),
                  tooltip: _this26.lang.font.clear + _this26.representShortcut('removeFormat'),
                  click: _this26.context.createInvokeHandler('editor.removeFormat')
                }).render();
              });
              this.context.memo('button.strikethrough', function () {
                return _this26.button({
                  className: 'note-btn-strikethrough',
                  contents: _this26.ui.icon(_this26.options.icons.strikethrough),
                  tooltip: _this26.lang.font.strikethrough + _this26.representShortcut('strikethrough'),
                  click: _this26.context.createInvokeHandlerAndUpdateState('editor.strikethrough')
                }).render();
              });
              this.context.memo('button.superscript', function () {
                return _this26.button({
                  className: 'note-btn-superscript',
                  contents: _this26.ui.icon(_this26.options.icons.superscript),
                  tooltip: _this26.lang.font.superscript,
                  click: _this26.context.createInvokeHandlerAndUpdateState('editor.superscript')
                }).render();
              });
              this.context.memo('button.subscript', function () {
                return _this26.button({
                  className: 'note-btn-subscript',
                  contents: _this26.ui.icon(_this26.options.icons.subscript),
                  tooltip: _this26.lang.font.subscript,
                  click: _this26.context.createInvokeHandlerAndUpdateState('editor.subscript')
                }).render();
              });
              this.context.memo('button.fontname', function () {
                var styleInfo = _this26.context.invoke('editor.currentStyle');

                if (_this26.options.addDefaultFonts) {
                  // Add 'default' fonts into the fontnames array if not exist
                  external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default.a.each(styleInfo['font-family'].split(','), function (idx, fontname) {
                    fontname = fontname.trim().replace(/['"]+/g, '');

                    if (_this26.isFontDeservedToAdd(fontname)) {
                      if (_this26.options.fontNames.indexOf(fontname) === -1) {
                        _this26.options.fontNames.push(fontname);
                      }
                    }
                  });
                }

                return _this26.ui.buttonGroup([_this26.button({
                  className: 'dropdown-toggle',
                  contents: _this26.ui.dropdownButtonContents('<span class="note-current-fontname"/>', _this26.options),
                  tooltip: _this26.lang.font.name,
                  data: {
                    toggle: 'dropdown'
                  }
                }), _this26.ui.dropdownCheck({
                  className: 'dropdown-fontname',
                  checkClassName: _this26.options.icons.menuCheck,
                  items: _this26.options.fontNames.filter(_this26.isFontInstalled.bind(_this26)),
                  title: _this26.lang.font.name,
                  template: function template(item) {
                    return '<span style="font-family: ' + env.validFontName(item) + '">' + item + '</span>';
                  },
                  click: _this26.context.createInvokeHandlerAndUpdateState('editor.fontName')
                })]).render();
              });
              this.context.memo('button.fontsize', function () {
                return _this26.ui.buttonGroup([_this26.button({
                  className: 'dropdown-toggle',
                  contents: _this26.ui.dropdownButtonContents('<span class="note-current-fontsize"/>', _this26.options),
                  tooltip: _this26.lang.font.size,
                  data: {
                    toggle: 'dropdown'
                  }
                }), _this26.ui.dropdownCheck({
                  className: 'dropdown-fontsize',
                  checkClassName: _this26.options.icons.menuCheck,
                  items: _this26.options.fontSizes,
                  title: _this26.lang.font.size,
                  click: _this26.context.createInvokeHandlerAndUpdateState('editor.fontSize')
                })]).render();
              });
              this.context.memo('button.fontsizeunit', function () {
                return _this26.ui.buttonGroup([_this26.button({
                  className: 'dropdown-toggle',
                  contents: _this26.ui.dropdownButtonContents('<span class="note-current-fontsizeunit"/>', _this26.options),
                  tooltip: _this26.lang.font.sizeunit,
                  data: {
                    toggle: 'dropdown'
                  }
                }), _this26.ui.dropdownCheck({
                  className: 'dropdown-fontsizeunit',
                  checkClassName: _this26.options.icons.menuCheck,
                  items: _this26.options.fontSizeUnits,
                  title: _this26.lang.font.sizeunit,
                  click: _this26.context.createInvokeHandlerAndUpdateState('editor.fontSizeUnit')
                })]).render();
              });
              this.context.memo('button.color', function () {
                return _this26.colorPalette('note-color-all', _this26.lang.color.recent, true, true);
              });
              this.context.memo('button.forecolor', function () {
                return _this26.colorPalette('note-color-fore', _this26.lang.color.foreground, false, true);
              });
              this.context.memo('button.backcolor', function () {
                return _this26.colorPalette('note-color-back', _this26.lang.color.background, true, false);
              });
              this.context.memo('button.ul', function () {
                return _this26.button({
                  contents: _this26.ui.icon(_this26.options.icons.unorderedlist),
                  tooltip: _this26.lang.lists.unordered + _this26.representShortcut('insertUnorderedList'),
                  click: _this26.context.createInvokeHandler('editor.insertUnorderedList')
                }).render();
              });
              this.context.memo('button.ol', function () {
                return _this26.button({
                  contents: _this26.ui.icon(_this26.options.icons.orderedlist),
                  tooltip: _this26.lang.lists.ordered + _this26.representShortcut('insertOrderedList'),
                  click: _this26.context.createInvokeHandler('editor.insertOrderedList')
                }).render();
              });
              var justifyLeft = this.button({
                contents: this.ui.icon(this.options.icons.alignLeft),
                tooltip: this.lang.paragraph.left + this.representShortcut('justifyLeft'),
                click: this.context.createInvokeHandler('editor.justifyLeft')
              });
              var justifyCenter = this.button({
                contents: this.ui.icon(this.options.icons.alignCenter),
                tooltip: this.lang.paragraph.center + this.representShortcut('justifyCenter'),
                click: this.context.createInvokeHandler('editor.justifyCenter')
              });
              var justifyRight = this.button({
                contents: this.ui.icon(this.options.icons.alignRight),
                tooltip: this.lang.paragraph.right + this.representShortcut('justifyRight'),
                click: this.context.createInvokeHandler('editor.justifyRight')
              });
              var justifyFull = this.button({
                contents: this.ui.icon(this.options.icons.alignJustify),
                tooltip: this.lang.paragraph.justify + this.representShortcut('justifyFull'),
                click: this.context.createInvokeHandler('editor.justifyFull')
              });
              var outdent = this.button({
                contents: this.ui.icon(this.options.icons.outdent),
                tooltip: this.lang.paragraph.outdent + this.representShortcut('outdent'),
                click: this.context.createInvokeHandler('editor.outdent')
              });
              var indent = this.button({
                contents: this.ui.icon(this.options.icons.indent),
                tooltip: this.lang.paragraph.indent + this.representShortcut('indent'),
                click: this.context.createInvokeHandler('editor.indent')
              });
              this.context.memo('button.justifyLeft', func.invoke(justifyLeft, 'render'));
              this.context.memo('button.justifyCenter', func.invoke(justifyCenter, 'render'));
              this.context.memo('button.justifyRight', func.invoke(justifyRight, 'render'));
              this.context.memo('button.justifyFull', func.invoke(justifyFull, 'render'));
              this.context.memo('button.outdent', func.invoke(outdent, 'render'));
              this.context.memo('button.indent', func.invoke(indent, 'render'));
              this.context.memo('button.paragraph', function () {
                return _this26.ui.buttonGroup([_this26.button({
                  className: 'dropdown-toggle',
                  contents: _this26.ui.dropdownButtonContents(_this26.ui.icon(_this26.options.icons.alignLeft), _this26.options),
                  tooltip: _this26.lang.paragraph.paragraph,
                  data: {
                    toggle: 'dropdown'
                  }
                }), _this26.ui.dropdown([_this26.ui.buttonGroup({
                  className: 'note-align',
                  children: [justifyLeft, justifyCenter, justifyRight, justifyFull]
                }), _this26.ui.buttonGroup({
                  className: 'note-list',
                  children: [outdent, indent]
                })])]).render();
              });
              this.context.memo('button.height', function () {
                return _this26.ui.buttonGroup([_this26.button({
                  className: 'dropdown-toggle',
                  contents: _this26.ui.dropdownButtonContents(_this26.ui.icon(_this26.options.icons.textHeight), _this26.options),
                  tooltip: _this26.lang.font.height,
                  data: {
                    toggle: 'dropdown'
                  }
                }), _this26.ui.dropdownCheck({
                  items: _this26.options.lineHeights,
                  checkClassName: _this26.options.icons.menuCheck,
                  className: 'dropdown-line-height',
                  title: _this26.lang.font.height,
                  click: _this26.context.createInvokeHandler('editor.lineHeight')
                })]).render();
              });
              this.context.memo('button.table', function () {
                return _this26.ui.buttonGroup([_this26.button({
                  className: 'dropdown-toggle',
                  contents: _this26.ui.dropdownButtonContents(_this26.ui.icon(_this26.options.icons.table), _this26.options),
                  tooltip: _this26.lang.table.table,
                  data: {
                    toggle: 'dropdown'
                  }
                }), _this26.ui.dropdown({
                  title: _this26.lang.table.table,
                  className: 'note-table',
                  items: ['<div class="note-dimension-picker">', '<div class="note-dimension-picker-mousecatcher" data-event="insertTable" data-value="1x1"/>', '<div class="note-dimension-picker-highlighted"/>', '<div class="note-dimension-picker-unhighlighted"/>', '</div>', '<div class="note-dimension-display">1 x 1</div>'].join('')
                })], {
                  callback: function callback($node) {
                    var $catcher = $node.find('.note-dimension-picker-mousecatcher');
                    $catcher.css({
                      width: _this26.options.insertTableMaxSize.col + 'em',
                      height: _this26.options.insertTableMaxSize.row + 'em'
                    }).mousedown(_this26.context.createInvokeHandler('editor.insertTable')).on('mousemove', _this26.tableMoveHandler.bind(_this26));
                  }
                }).render();
              });
              this.context.memo('button.link', function () {
                return _this26.button({
                  contents: _this26.ui.icon(_this26.options.icons.link),
                  tooltip: _this26.lang.link.link + _this26.representShortcut('linkDialog.show'),
                  click: _this26.context.createInvokeHandler('linkDialog.show')
                }).render();
              });
              this.context.memo('button.picture', function () {
                return _this26.button({
                  contents: _this26.ui.icon(_this26.options.icons.picture),
                  tooltip: _this26.lang.image.image,
                  click: _this26.context.createInvokeHandler('imageDialog.show')
                }).render();
              });
              this.context.memo('button.video', function () {
                return _this26.button({
                  contents: _this26.ui.icon(_this26.options.icons.video),
                  tooltip: _this26.lang.video.video,
                  click: _this26.context.createInvokeHandler('videoDialog.show')
                }).render();
              });
              this.context.memo('button.hr', function () {
                return _this26.button({
                  contents: _this26.ui.icon(_this26.options.icons.minus),
                  tooltip: _this26.lang.hr.insert + _this26.representShortcut('insertHorizontalRule'),
                  click: _this26.context.createInvokeHandler('editor.insertHorizontalRule')
                }).render();
              });
              this.context.memo('button.fullscreen', function () {
                return _this26.button({
                  className: 'btn-fullscreen',
                  contents: _this26.ui.icon(_this26.options.icons.arrowsAlt),
                  tooltip: _this26.lang.options.fullscreen,
                  click: _this26.context.createInvokeHandler('fullscreen.toggle')
                }).render();
              });
              this.context.memo('button.codeview', function () {
                return _this26.button({
                  className: 'btn-codeview',
                  contents: _this26.ui.icon(_this26.options.icons.code),
                  tooltip: _this26.lang.options.codeview,
                  click: _this26.context.createInvokeHandler('codeview.toggle')
                }).render();
              });
              this.context.memo('button.redo', function () {
                return _this26.button({
                  contents: _this26.ui.icon(_this26.options.icons.redo),
                  tooltip: _this26.lang.history.redo + _this26.representShortcut('redo'),
                  click: _this26.context.createInvokeHandler('editor.redo')
                }).render();
              });
              this.context.memo('button.undo', function () {
                return _this26.button({
                  contents: _this26.ui.icon(_this26.options.icons.undo),
                  tooltip: _this26.lang.history.undo + _this26.representShortcut('undo'),
                  click: _this26.context.createInvokeHandler('editor.undo')
                }).render();
              });
              this.context.memo('button.help', function () {
                return _this26.button({
                  contents: _this26.ui.icon(_this26.options.icons.question),
                  tooltip: _this26.lang.options.help,
                  click: _this26.context.createInvokeHandler('helpDialog.show')
                }).render();
              });
            }
            /**
             * image: [
             *   ['imageResize', ['resizeFull', 'resizeHalf', 'resizeQuarter', 'resizeNone']],
             *   ['float', ['floatLeft', 'floatRight', 'floatNone']],
             *   ['remove', ['removeMedia']],
             * ],
             */

          }, {
            key: 'addImagePopoverButtons',
            value: function addImagePopoverButtons() {
              var _this27 = this;

              // Image Size Buttons
              this.context.memo('button.resizeFull', function () {
                return _this27.button({
                  contents: '<span class="note-fontsize-10">100%</span>',
                  tooltip: _this27.lang.image.resizeFull,
                  click: _this27.context.createInvokeHandler('editor.resize', '1')
                }).render();
              });
              this.context.memo('button.resizeHalf', function () {
                return _this27.button({
                  contents: '<span class="note-fontsize-10">50%</span>',
                  tooltip: _this27.lang.image.resizeHalf,
                  click: _this27.context.createInvokeHandler('editor.resize', '0.5')
                }).render();
              });
              this.context.memo('button.resizeQuarter', function () {
                return _this27.button({
                  contents: '<span class="note-fontsize-10">25%</span>',
                  tooltip: _this27.lang.image.resizeQuarter,
                  click: _this27.context.createInvokeHandler('editor.resize', '0.25')
                }).render();
              });
              this.context.memo('button.resizeNone', function () {
                return _this27.button({
                  contents: _this27.ui.icon(_this27.options.icons.rollback),
                  tooltip: _this27.lang.image.resizeNone,
                  click: _this27.context.createInvokeHandler('editor.resize', '0')
                }).render();
              }); // Float Buttons

              this.context.memo('button.floatLeft', function () {
                return _this27.button({
                  contents: _this27.ui.icon(_this27.options.icons.floatLeft),
                  tooltip: _this27.lang.image.floatLeft,
                  click: _this27.context.createInvokeHandler('editor.floatMe', 'left')
                }).render();
              });
              this.context.memo('button.floatRight', function () {
                return _this27.button({
                  contents: _this27.ui.icon(_this27.options.icons.floatRight),
                  tooltip: _this27.lang.image.floatRight,
                  click: _this27.context.createInvokeHandler('editor.floatMe', 'right')
                }).render();
              });
              this.context.memo('button.floatNone', function () {
                return _this27.button({
                  contents: _this27.ui.icon(_this27.options.icons.rollback),
                  tooltip: _this27.lang.image.floatNone,
                  click: _this27.context.createInvokeHandler('editor.floatMe', 'none')
                }).render();
              }); // Remove Buttons

              this.context.memo('button.removeMedia', function () {
                return _this27.button({
                  contents: _this27.ui.icon(_this27.options.icons.trash),
                  tooltip: _this27.lang.image.remove,
                  click: _this27.context.createInvokeHandler('editor.removeMedia')
                }).render();
              });
            }
          }, {
            key: 'addLinkPopoverButtons',
            value: function addLinkPopoverButtons() {
              var _this28 = this;

              this.context.memo('button.linkDialogShow', function () {
                return _this28.button({
                  contents: _this28.ui.icon(_this28.options.icons.link),
                  tooltip: _this28.lang.link.edit,
                  click: _this28.context.createInvokeHandler('linkDialog.show')
                }).render();
              });
              this.context.memo('button.unlink', function () {
                return _this28.button({
                  contents: _this28.ui.icon(_this28.options.icons.unlink),
                  tooltip: _this28.lang.link.unlink,
                  click: _this28.context.createInvokeHandler('editor.unlink')
                }).render();
              });
            }
            /**
             * table : [
             *  ['add', ['addRowDown', 'addRowUp', 'addColLeft', 'addColRight']],
             *  ['delete', ['deleteRow', 'deleteCol', 'deleteTable']]
             * ],
             */

          }, {
            key: 'addTablePopoverButtons',
            value: function addTablePopoverButtons() {
              var _this29 = this;

              this.context.memo('button.addRowUp', function () {
                return _this29.button({
                  className: 'btn-md',
                  contents: _this29.ui.icon(_this29.options.icons.rowAbove),
                  tooltip: _this29.lang.table.addRowAbove,
                  click: _this29.context.createInvokeHandler('editor.addRow', 'top')
                }).render();
              });
              this.context.memo('button.addRowDown', function () {
                return _this29.button({
                  className: 'btn-md',
                  contents: _this29.ui.icon(_this29.options.icons.rowBelow),
                  tooltip: _this29.lang.table.addRowBelow,
                  click: _this29.context.createInvokeHandler('editor.addRow', 'bottom')
                }).render();
              });
              this.context.memo('button.addColLeft', function () {
                return _this29.button({
                  className: 'btn-md',
                  contents: _this29.ui.icon(_this29.options.icons.colBefore),
                  tooltip: _this29.lang.table.addColLeft,
                  click: _this29.context.createInvokeHandler('editor.addCol', 'left')
                }).render();
              });
              this.context.memo('button.addColRight', function () {
                return _this29.button({
                  className: 'btn-md',
                  contents: _this29.ui.icon(_this29.options.icons.colAfter),
                  tooltip: _this29.lang.table.addColRight,
                  click: _this29.context.createInvokeHandler('editor.addCol', 'right')
                }).render();
              });
              this.context.memo('button.deleteRow', function () {
                return _this29.button({
                  className: 'btn-md',
                  contents: _this29.ui.icon(_this29.options.icons.rowRemove),
                  tooltip: _this29.lang.table.delRow,
                  click: _this29.context.createInvokeHandler('editor.deleteRow')
                }).render();
              });
              this.context.memo('button.deleteCol', function () {
                return _this29.button({
                  className: 'btn-md',
                  contents: _this29.ui.icon(_this29.options.icons.colRemove),
                  tooltip: _this29.lang.table.delCol,
                  click: _this29.context.createInvokeHandler('editor.deleteCol')
                }).render();
              });
              this.context.memo('button.deleteTable', function () {
                return _this29.button({
                  className: 'btn-md',
                  contents: _this29.ui.icon(_this29.options.icons.trash),
                  tooltip: _this29.lang.table.delTable,
                  click: _this29.context.createInvokeHandler('editor.deleteTable')
                }).render();
              });
            }
          }, {
            key: 'build',
            value: function build($container, groups) {
              for (var groupIdx = 0, groupLen = groups.length; groupIdx < groupLen; groupIdx++) {
                var group = groups[groupIdx];
                var groupName = Array.isArray(group) ? group[0] : group;
                var buttons = Array.isArray(group) ? group.length === 1 ? [group[0]] : group[1] : [group];
                var $group = this.ui.buttonGroup({
                  className: 'note-' + groupName
                }).render();

                for (var idx = 0, len = buttons.length; idx < len; idx++) {
                  var btn = this.context.memo('button.' + buttons[idx]);

                  if (btn) {
                    $group.append(typeof btn === 'function' ? btn(this.context) : btn);
                  }
                }

                $group.appendTo($container);
              }
            }
            /**
             * @param {jQuery} [$container]
             */

          }, {
            key: 'updateCurrentStyle',
            value: function updateCurrentStyle($container) {
              var _this30 = this;

              var $cont = $container || this.$toolbar;
              var styleInfo = this.context.invoke('editor.currentStyle');
              this.updateBtnStates($cont, {
                '.note-btn-bold': function noteBtnBold() {
                  return styleInfo['font-bold'] === 'bold';
                },
                '.note-btn-italic': function noteBtnItalic() {
                  return styleInfo['font-italic'] === 'italic';
                },
                '.note-btn-underline': function noteBtnUnderline() {
                  return styleInfo['font-underline'] === 'underline';
                },
                '.note-btn-subscript': function noteBtnSubscript() {
                  return styleInfo['font-subscript'] === 'subscript';
                },
                '.note-btn-superscript': function noteBtnSuperscript() {
                  return styleInfo['font-superscript'] === 'superscript';
                },
                '.note-btn-strikethrough': function noteBtnStrikethrough() {
                  return styleInfo['font-strikethrough'] === 'strikethrough';
                }
              });

              if (styleInfo['font-family']) {
                var fontNames = styleInfo['font-family'].split(',').map(function (name) {
                  return name.replace(/[\'\"]/g, '').replace(/\s+$/, '').replace(/^\s+/, '');
                });
                var fontName = lists.find(fontNames, this.isFontInstalled.bind(this));
                $cont.find('.dropdown-fontname a').each(function (idx, item) {
                  var $item = external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default()(item); // always compare string to avoid creating another func.

                  var isChecked = $item.data('value') + '' === fontName + '';
                  $item.toggleClass('checked', isChecked);
                });
                $cont.find('.note-current-fontname').text(fontName).css('font-family', fontName);
              }

              if (styleInfo['font-size']) {
                var fontSize = styleInfo['font-size'];
                $cont.find('.dropdown-fontsize a').each(function (idx, item) {
                  var $item = external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default()(item); // always compare with string to avoid creating another func.

                  var isChecked = $item.data('value') + '' === fontSize + '';
                  $item.toggleClass('checked', isChecked);
                });
                $cont.find('.note-current-fontsize').text(fontSize);
                var fontSizeUnit = styleInfo['font-size-unit'];
                $cont.find('.dropdown-fontsizeunit a').each(function (idx, item) {
                  var $item = external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default()(item);
                  var isChecked = $item.data('value') + '' === fontSizeUnit + '';
                  $item.toggleClass('checked', isChecked);
                });
                $cont.find('.note-current-fontsizeunit').text(fontSizeUnit);
              }

              if (styleInfo['line-height']) {
                var lineHeight = styleInfo['line-height'];
                $cont.find('.dropdown-line-height li a').each(function (idx, item) {
                  // always compare with string to avoid creating another func.
                  var isChecked = external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default()(item).data('value') + '' === lineHeight + '';
                  _this30.className = isChecked ? 'checked' : '';
                });
              }
            }
          }, {
            key: 'updateBtnStates',
            value: function updateBtnStates($container, infos) {
              var _this31 = this;

              external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default.a.each(infos, function (selector, pred) {
                _this31.ui.toggleBtnActive($container.find(selector), pred());
              });
            }
          }, {
            key: 'tableMoveHandler',
            value: function tableMoveHandler(event) {
              var PX_PER_EM = 18;
              var $picker = external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default()(event.target.parentNode); // target is mousecatcher

              var $dimensionDisplay = $picker.next();
              var $catcher = $picker.find('.note-dimension-picker-mousecatcher');
              var $highlighted = $picker.find('.note-dimension-picker-highlighted');
              var $unhighlighted = $picker.find('.note-dimension-picker-unhighlighted');
              var posOffset = void 0; // HTML5 with jQuery - e.offsetX is undefined in Firefox

              if (event.offsetX === undefined) {
                var posCatcher = external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default()(event.target).offset();
                posOffset = {
                  x: event.pageX - posCatcher.left,
                  y: event.pageY - posCatcher.top
                };
              } else {
                posOffset = {
                  x: event.offsetX,
                  y: event.offsetY
                };
              }

              var dim = {
                c: Math.ceil(posOffset.x / PX_PER_EM) || 1,
                r: Math.ceil(posOffset.y / PX_PER_EM) || 1
              };
              $highlighted.css({
                width: dim.c + 'em',
                height: dim.r + 'em'
              });
              $catcher.data('value', dim.c + 'x' + dim.r);

              if (dim.c > 3 && dim.c < this.options.insertTableMaxSize.col) {
                $unhighlighted.css({
                  width: dim.c + 1 + 'em'
                });
              }

              if (dim.r > 3 && dim.r < this.options.insertTableMaxSize.row) {
                $unhighlighted.css({
                  height: dim.r + 1 + 'em'
                });
              }

              $dimensionDisplay.html(dim.c + ' x ' + dim.r);
            }
          }]);

          return Buttons_Buttons;
        }();
        // CONCATENATED MODULE: ./src/js/base/module/Toolbar.js

        var Toolbar_Toolbar = function () {
          function Toolbar_Toolbar(context) {
            _classCallCheck(this, Toolbar_Toolbar);

            this.context = context;
            this.$window = external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default()(window);
            this.$document = external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default()(document);
            this.ui = external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default.a.summernote.ui;
            this.$note = context.layoutInfo.note;
            this.$editor = context.layoutInfo.editor;
            this.$toolbar = context.layoutInfo.toolbar;
            this.$editable = context.layoutInfo.editable;
            this.$statusbar = context.layoutInfo.statusbar;
            this.options = context.options;
            this.isFollowing = false;
            this.followScroll = this.followScroll.bind(this);
          }

          _createClass(Toolbar_Toolbar, [{
            key: 'shouldInitialize',
            value: function shouldInitialize() {
              return !this.options.airMode;
            }
          }, {
            key: 'initialize',
            value: function initialize() {
              var _this32 = this;

              this.options.toolbar = this.options.toolbar || [];

              if (!this.options.toolbar.length) {
                this.$toolbar.hide();
              } else {
                this.context.invoke('buttons.build', this.$toolbar, this.options.toolbar);
              }

              if (this.options.toolbarContainer) {
                this.$toolbar.appendTo(this.options.toolbarContainer);
              }

              this.changeContainer(false);
              this.$note.on('summernote.keyup summernote.mouseup summernote.change', function () {
                _this32.context.invoke('buttons.updateCurrentStyle');
              });
              this.context.invoke('buttons.updateCurrentStyle');

              if (this.options.followingToolbar) {
                this.$window.on('scroll resize', this.followScroll);
              }
            }
          }, {
            key: 'destroy',
            value: function destroy() {
              this.$toolbar.children().remove();

              if (this.options.followingToolbar) {
                this.$window.off('scroll resize', this.followScroll);
              }
            }
          }, {
            key: 'followScroll',
            value: function followScroll() {
              if (this.$editor.hasClass('fullscreen')) {
                return false;
              }

              var editorHeight = this.$editor.outerHeight();
              var editorWidth = this.$editor.width();
              var toolbarHeight = this.$toolbar.height();
              var statusbarHeight = this.$statusbar.height(); // check if the web app is currently using another static bar

              var otherBarHeight = 0;

              if (this.options.otherStaticBar) {
                otherBarHeight = external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default()(this.options.otherStaticBar).outerHeight();
              }

              var currentOffset = this.$document.scrollTop();
              var editorOffsetTop = this.$editor.offset().top;
              var editorOffsetBottom = editorOffsetTop + editorHeight;
              var activateOffset = editorOffsetTop - otherBarHeight;
              var deactivateOffsetBottom = editorOffsetBottom - otherBarHeight - toolbarHeight - statusbarHeight;

              if (!this.isFollowing && currentOffset > activateOffset && currentOffset < deactivateOffsetBottom - toolbarHeight) {
                this.isFollowing = true;
                this.$toolbar.css({
                  position: 'fixed',
                  top: otherBarHeight,
                  width: editorWidth,
                  zIndex: 1000
                });
                this.$editable.css({
                  marginTop: this.$toolbar.height() + 5
                });
              } else if (this.isFollowing && (currentOffset < activateOffset || currentOffset > deactivateOffsetBottom)) {
                this.isFollowing = false;
                this.$toolbar.css({
                  position: 'relative',
                  top: 0,
                  width: '100%',
                  zIndex: 'auto'
                });
                this.$editable.css({
                  marginTop: ''
                });
              }
            }
          }, {
            key: 'changeContainer',
            value: function changeContainer(isFullscreen) {
              if (isFullscreen) {
                this.$toolbar.prependTo(this.$editor);
              } else {
                if (this.options.toolbarContainer) {
                  this.$toolbar.appendTo(this.options.toolbarContainer);
                }
              }

              if (this.options.followingToolbar) {
                this.followScroll();
              }
            }
          }, {
            key: 'updateFullscreen',
            value: function updateFullscreen(isFullscreen) {
              this.ui.toggleBtnActive(this.$toolbar.find('.btn-fullscreen'), isFullscreen);
              this.changeContainer(isFullscreen);
            }
          }, {
            key: 'updateCodeview',
            value: function updateCodeview(isCodeview) {
              this.ui.toggleBtnActive(this.$toolbar.find('.btn-codeview'), isCodeview);

              if (isCodeview) {
                this.deactivate();
              } else {
                this.activate();
              }
            }
          }, {
            key: 'activate',
            value: function activate(isIncludeCodeview) {
              var $btn = this.$toolbar.find('button');

              if (!isIncludeCodeview) {
                $btn = $btn.not('.btn-codeview').not('.btn-fullscreen');
              }

              this.ui.toggleBtn($btn, true);
            }
          }, {
            key: 'deactivate',
            value: function deactivate(isIncludeCodeview) {
              var $btn = this.$toolbar.find('button');

              if (!isIncludeCodeview) {
                $btn = $btn.not('.btn-codeview').not('.btn-fullscreen');
              }

              this.ui.toggleBtn($btn, false);
            }
          }]);

          return Toolbar_Toolbar;
        }();
        // CONCATENATED MODULE: ./src/js/base/module/LinkDialog.js


        var LinkDialog_LinkDialog = function () {
          function LinkDialog_LinkDialog(context) {
            _classCallCheck(this, LinkDialog_LinkDialog);

            this.context = context;
            this.ui = external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default.a.summernote.ui;
            this.$body = external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default()(document.body);
            this.$editor = context.layoutInfo.editor;
            this.options = context.options;
            this.lang = this.options.langInfo;
            context.memo('help.linkDialog.show', this.options.langInfo.help['linkDialog.show']);
          }

          _createClass(LinkDialog_LinkDialog, [{
            key: 'initialize',
            value: function initialize() {
              var $container = this.options.dialogsInBody ? this.$body : this.options.container;
              var body = ['<div class="form-group note-form-group">', '<label for="note-dialog-link-txt-' + this.options.id + '" class="note-form-label">' + this.lang.link.textToDisplay + '</label>', '<input id="note-dialog-link-txt-' + this.options.id + '" class="note-link-text form-control note-form-control note-input" type="text"/>', '</div>', '<div class="form-group note-form-group">', '<label for="note-dialog-link-url-' + this.options.id + '" class="note-form-label">' + this.lang.link.url + '</label>', '<input id="note-dialog-link-url-' + this.options.id + '" class="note-link-url form-control note-form-control note-input" type="text" value="http://"/>', '</div>', !this.options.disableLinkTarget ? external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default()('<div/>').append(this.ui.checkbox({
                className: 'sn-checkbox-open-in-new-window',
                text: this.lang.link.openInNewWindow,
                checked: true
              }).render()).html() : '', external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default()('<div/>').append(this.ui.checkbox({
                className: 'sn-checkbox-use-protocol',
                text: this.lang.link.useProtocol,
                checked: true
              }).render()).html()].join('');
              var buttonClass = 'btn btn-primary note-btn note-btn-primary note-link-btn';
              var footer = '<input type="button" href="#" class="' + buttonClass + '" value="' + this.lang.link.insert + '" disabled>';
              this.$dialog = this.ui.dialog({
                className: 'link-dialog',
                title: this.lang.link.insert,
                fade: this.options.dialogsFade,
                body: body,
                footer: footer
              }).render().appendTo($container);
            }
          }, {
            key: 'destroy',
            value: function destroy() {
              this.ui.hideDialog(this.$dialog);
              this.$dialog.remove();
            }
          }, {
            key: 'bindEnterKey',
            value: function bindEnterKey($input, $btn) {
              $input.on('keypress', function (event) {
                if (event.keyCode === core_key.code.ENTER) {
                  event.preventDefault();
                  $btn.trigger('click');
                }
              });
            }
            /**
             * toggle update button
             */

          }, {
            key: 'toggleLinkBtn',
            value: function toggleLinkBtn($linkBtn, $linkText, $linkUrl) {
              this.ui.toggleBtn($linkBtn, $linkText.val() && $linkUrl.val());
            }
            /**
             * Show link dialog and set event handlers on dialog controls.
             *
             * @param {Object} linkInfo
             * @return {Promise}
             */

          }, {
            key: 'showLinkDialog',
            value: function showLinkDialog(linkInfo) {
              var _this33 = this;

              return external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default.a.Deferred(function (deferred) {
                var $linkText = _this33.$dialog.find('.note-link-text');
                var $linkUrl = _this33.$dialog.find('.note-link-url');
                var $linkBtn = _this33.$dialog.find('.note-link-btn');
                var $openInNewWindow = _this33.$dialog.find('.sn-checkbox-open-in-new-window input[type=checkbox]');
                var $useProtocol = _this33.$dialog.find('.sn-checkbox-use-protocol input[type=checkbox]');
                _this33.ui.onDialogShown(_this33.$dialog, function () {
                  _this33.context.triggerEvent('dialog.shown'); // If no url was given and given text is valid URL then copy that into URL Field

                  if (!linkInfo.url && func.isValidUrl(linkInfo.text)) {
                    linkInfo.url = linkInfo.text;
                  }

                  $linkText.on('input paste propertychange', function () {
                    // If linktext was modified by input events,
                    // cloning text from linkUrl will be stopped.
                    linkInfo.text = $linkText.val();
                    _this33.toggleLinkBtn($linkBtn, $linkText, $linkUrl);
                  }).val(linkInfo.text);
                  $linkUrl.on('input paste propertychange', function () {
                    // Display same text on `Text to display` as default
                    // when linktext has no text
                    if (!linkInfo.text) {
                      $linkText.val($linkUrl.val());
                    }

                    _this33.toggleLinkBtn($linkBtn, $linkText, $linkUrl);
                  }).val(linkInfo.url);

                  if (!env.isSupportTouch) {
                    $linkUrl.trigger('focus');
                  }

                  _this33.toggleLinkBtn($linkBtn, $linkText, $linkUrl);
                  _this33.bindEnterKey($linkUrl, $linkBtn);
                  _this33.bindEnterKey($linkText, $linkBtn);
                  var isNewWindowChecked = linkInfo.isNewWindow !== undefined ? linkInfo.isNewWindow : _this33.context.options.linkTargetBlank;
                  $openInNewWindow.prop('checked', isNewWindowChecked);
                  var useProtocolChecked = linkInfo.url ? false : _this33.context.options.useProtocol;
                  $useProtocol.prop('checked', useProtocolChecked);
                  $linkBtn.one('click', function (event) {
                    event.preventDefault();
                    deferred.resolve({
                      range: linkInfo.range,
                      url: $linkUrl.val(),
                      text: $linkText.val(),
                      isNewWindow: $openInNewWindow.is(':checked'),
                      checkProtocol: $useProtocol.is(':checked')
                    });
                    _this33.ui.hideDialog(_this33.$dialog);
                  });
                });
                _this33.ui.onDialogHidden(_this33.$dialog, function () {
                  // detach events
                  $linkText.off();
                  $linkUrl.off();
                  $linkBtn.off();

                  if (deferred.state() === 'pending') {
                    deferred.reject();
                  }
                });
                _this33.ui.showDialog(_this33.$dialog);
              }).promise();
            }
            /**
             * @param {Object} layoutInfo
             */

          }, {
            key: 'show',
            value: function show() {
              var _this34 = this;

              var linkInfo = this.context.invoke('editor.getLinkInfo');
              this.context.invoke('editor.saveRange');
              this.showLinkDialog(linkInfo).then(function (linkInfo) {
                _this34.context.invoke('editor.restoreRange');
                _this34.context.invoke('editor.createLink', linkInfo);
              }).fail(function () {
                _this34.context.invoke('editor.restoreRange');
              });
            }
          }]);

          return LinkDialog_LinkDialog;
        }();
        // CONCATENATED MODULE: ./src/js/base/module/LinkPopover.js


        var LinkPopover_LinkPopover = function () {
          function LinkPopover_LinkPopover(context) {
            var _this35 = this;

            _classCallCheck(this, LinkPopover_LinkPopover);

            this.context = context;
            this.ui = external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default.a.summernote.ui;
            this.options = context.options;
            this.events = {
              'summernote.keyup summernote.mouseup summernote.change summernote.scroll': function summernoteKeyupSummernoteMouseupSummernoteChangeSummernoteScroll() {
                _this35.update();
              },
              'summernote.disable summernote.dialog.shown summernote.blur': function summernoteDisableSummernoteDialogShownSummernoteBlur() {
                _this35.hide();
              }
            };
          }

          _createClass(LinkPopover_LinkPopover, [{
            key: 'shouldInitialize',
            value: function shouldInitialize() {
              return !lists.isEmpty(this.options.popover.link);
            }
          }, {
            key: 'initialize',
            value: function initialize() {
              this.$popover = this.ui.popover({
                className: 'note-link-popover',
                callback: function callback($node) {
                  var $content = $node.find('.popover-content,.note-popover-content');
                  $content.prepend('<span><a target="_blank"></a>&nbsp;</span>');
                }
              }).render().appendTo(this.options.container);
              var $content = this.$popover.find('.popover-content,.note-popover-content');
              this.context.invoke('buttons.build', $content, this.options.popover.link);
              this.$popover.on('mousedown', function (e) {
                e.preventDefault();
              });
            }
          }, {
            key: 'destroy',
            value: function destroy() {
              this.$popover.remove();
            }
          }, {
            key: 'update',
            value: function update() {
              // Prevent focusing on editable when invoke('code') is executed
              if (!this.context.invoke('editor.hasFocus')) {
                this.hide();
                return;
              }

              var rng = this.context.invoke('editor.getLastRange');

              if (rng.isCollapsed() && rng.isOnAnchor()) {
                var anchor = dom.ancestor(rng.sc, dom.isAnchor);
                var href = external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default()(anchor).attr('href');
                this.$popover.find('a').attr('href', href).html(href);
                var pos = dom.posFromPlaceholder(anchor);
                var containerOffset = external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default()(this.options.container).offset();
                pos.top -= containerOffset.top;
                pos.left -= containerOffset.left;
                this.$popover.css({
                  display: 'block',
                  left: pos.left,
                  top: pos.top
                });
              } else {
                this.hide();
              }
            }
          }, {
            key: 'hide',
            value: function hide() {
              this.$popover.hide();
            }
          }]);

          return LinkPopover_LinkPopover;
        }();
        // CONCATENATED MODULE: ./src/js/base/module/ImageDialog.js


        var ImageDialog_ImageDialog = function () {
          function ImageDialog_ImageDialog(context) {
            _classCallCheck(this, ImageDialog_ImageDialog);

            this.context = context;
            this.ui = external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default.a.summernote.ui;
            this.$body = external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default()(document.body);
            this.$editor = context.layoutInfo.editor;
            this.options = context.options;
            this.lang = this.options.langInfo;
          }

          _createClass(ImageDialog_ImageDialog, [{
            key: 'initialize',
            value: function initialize() {
              var imageLimitation = '';

              if (this.options.maximumImageFileSize) {
                var unit = Math.floor(Math.log(this.options.maximumImageFileSize) / Math.log(1024));
                var readableSize = (this.options.maximumImageFileSize / Math.pow(1024, unit)).toFixed(2) * 1 + ' ' + ' KMGTP'[unit] + 'B';
                imageLimitation = '<small>' + (this.lang.image.maximumFileSize + ' : ' + readableSize) + '</small>';
              }

              var $container = this.options.dialogsInBody ? this.$body : this.options.container;
              var body = ['<div class="form-group note-form-group note-group-select-from-files">', '<label for="note-dialog-image-file-' + this.options.id + '" class="note-form-label">' + this.lang.image.selectFromFiles + '</label>', '<input id="note-dialog-image-file-' + this.options.id + '" class="note-image-input form-control-file note-form-control note-input" ', ' type="file" name="files" accept="image/*" multiple="multiple"/>', imageLimitation, '</div>', '<div class="form-group note-group-image-url">', '<label for="note-dialog-image-url-' + this.options.id + '" class="note-form-label">' + this.lang.image.url + '</label>', '<input id="note-dialog-image-url-' + this.options.id + '" class="note-image-url form-control note-form-control note-input" type="text"/>', '</div>'].join('');
              var buttonClass = 'btn btn-primary note-btn note-btn-primary note-image-btn';
              var footer = '<input type="button" href="#" class="' + buttonClass + '" value="' + this.lang.image.insert + '" disabled>';
              this.$dialog = this.ui.dialog({
                title: this.lang.image.insert,
                fade: this.options.dialogsFade,
                body: body,
                footer: footer
              }).render().appendTo($container);
            }
          }, {
            key: 'destroy',
            value: function destroy() {
              this.ui.hideDialog(this.$dialog);
              this.$dialog.remove();
            }
          }, {
            key: 'bindEnterKey',
            value: function bindEnterKey($input, $btn) {
              $input.on('keypress', function (event) {
                if (event.keyCode === core_key.code.ENTER) {
                  event.preventDefault();
                  $btn.trigger('click');
                }
              });
            }
          }, {
            key: 'show',
            value: function show() {
              var _this36 = this;

              this.context.invoke('editor.saveRange');
              this.showImageDialog().then(function (data) {
                // [workaround] hide dialog before restore range for IE range focus
                _this36.ui.hideDialog(_this36.$dialog);
                _this36.context.invoke('editor.restoreRange');

                if (typeof data === 'string') {
                  // image url
                  // If onImageLinkInsert set,
                  if (_this36.options.callbacks.onImageLinkInsert) {
                    _this36.context.triggerEvent('image.link.insert', data);
                  } else {
                    _this36.context.invoke('editor.insertImage', data);
                  }
                } else {
                  // array of files
                  _this36.context.invoke('editor.insertImagesOrCallback', data);
                }
              }).fail(function () {
                _this36.context.invoke('editor.restoreRange');
              });
            }
            /**
             * show image dialog
             *
             * @param {jQuery} $dialog
             * @return {Promise}
             */

          }, {
            key: 'showImageDialog',
            value: function showImageDialog() {
              var _this37 = this;

              return external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default.a.Deferred(function (deferred) {
                var $imageInput = _this37.$dialog.find('.note-image-input');
                var $imageUrl = _this37.$dialog.find('.note-image-url');
                var $imageBtn = _this37.$dialog.find('.note-image-btn');
                _this37.ui.onDialogShown(_this37.$dialog, function () {
                  _this37.context.triggerEvent('dialog.shown'); // Cloning imageInput to clear element.

                  $imageInput.replaceWith($imageInput.clone().on('change', function (event) {
                    deferred.resolve(event.target.files || event.target.value);
                  }).val(''));
                  $imageUrl.on('input paste propertychange', function () {
                    _this37.ui.toggleBtn($imageBtn, $imageUrl.val());
                  }).val('');

                  if (!env.isSupportTouch) {
                    $imageUrl.trigger('focus');
                  }

                  $imageBtn.click(function (event) {
                    event.preventDefault();
                    deferred.resolve($imageUrl.val());
                  });
                  _this37.bindEnterKey($imageUrl, $imageBtn);
                });
                _this37.ui.onDialogHidden(_this37.$dialog, function () {
                  $imageInput.off();
                  $imageUrl.off();
                  $imageBtn.off();

                  if (deferred.state() === 'pending') {
                    deferred.reject();
                  }
                });
                _this37.ui.showDialog(_this37.$dialog);
              });
            }
          }]);

          return ImageDialog_ImageDialog;
        }();
        // CONCATENATED MODULE: ./src/js/base/module/ImagePopover.js


        /**
         * Image popover module
         *  mouse events that show/hide popover will be handled by Handle.js.
         *  Handle.js will receive the events and invoke 'imagePopover.update'.
         */

        var ImagePopover_ImagePopover = function () {
          function ImagePopover_ImagePopover(context) {
            var _this38 = this;

            _classCallCheck(this, ImagePopover_ImagePopover);

            this.context = context;
            this.ui = external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default.a.summernote.ui;
            this.editable = context.layoutInfo.editable[0];
            this.options = context.options;
            this.events = {
              'summernote.disable summernote.blur': function summernoteDisableSummernoteBlur() {
                _this38.hide();
              }
            };
          }

          _createClass(ImagePopover_ImagePopover, [{
            key: 'shouldInitialize',
            value: function shouldInitialize() {
              return !lists.isEmpty(this.options.popover.image);
            }
          }, {
            key: 'initialize',
            value: function initialize() {
              this.$popover = this.ui.popover({
                className: 'note-image-popover'
              }).render().appendTo(this.options.container);
              var $content = this.$popover.find('.popover-content,.note-popover-content');
              this.context.invoke('buttons.build', $content, this.options.popover.image);
              this.$popover.on('mousedown', function (e) {
                e.preventDefault();
              });
            }
          }, {
            key: 'destroy',
            value: function destroy() {
              this.$popover.remove();
            }
          }, {
            key: 'update',
            value: function update(target, event) {
              if (dom.isImg(target)) {
                var position = external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default()(target).offset();
                var containerOffset = external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default()(this.options.container).offset();
                var pos = {};

                if (this.options.popatmouse) {
                  pos.left = event.pageX - 20;
                  pos.top = event.pageY;
                } else {
                  pos = position;
                }

                pos.top -= containerOffset.top;
                pos.left -= containerOffset.left;
                this.$popover.css({
                  display: 'block',
                  left: pos.left,
                  top: pos.top
                });
              } else {
                this.hide();
              }
            }
          }, {
            key: 'hide',
            value: function hide() {
              this.$popover.hide();
            }
          }]);

          return ImagePopover_ImagePopover;
        }();
        // CONCATENATED MODULE: ./src/js/base/module/TablePopover.js


        var TablePopover_TablePopover = function () {
          function TablePopover_TablePopover(context) {
            var _this39 = this;

            _classCallCheck(this, TablePopover_TablePopover);

            this.context = context;
            this.ui = external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default.a.summernote.ui;
            this.options = context.options;
            this.events = {
              'summernote.mousedown': function summernoteMousedown(we, e) {
                _this39.update(e.target);
              },
              'summernote.keyup summernote.scroll summernote.change': function summernoteKeyupSummernoteScrollSummernoteChange() {
                _this39.update();
              },
              'summernote.disable summernote.blur': function summernoteDisableSummernoteBlur() {
                _this39.hide();
              }
            };
          }

          _createClass(TablePopover_TablePopover, [{
            key: 'shouldInitialize',
            value: function shouldInitialize() {
              return !lists.isEmpty(this.options.popover.table);
            }
          }, {
            key: 'initialize',
            value: function initialize() {
              this.$popover = this.ui.popover({
                className: 'note-table-popover'
              }).render().appendTo(this.options.container);
              var $content = this.$popover.find('.popover-content,.note-popover-content');
              this.context.invoke('buttons.build', $content, this.options.popover.table); // [workaround] Disable Firefox's default table editor

              if (env.isFF) {
                document.execCommand('enableInlineTableEditing', false, false);
              }

              this.$popover.on('mousedown', function (e) {
                e.preventDefault();
              });
            }
          }, {
            key: 'destroy',
            value: function destroy() {
              this.$popover.remove();
            }
          }, {
            key: 'update',
            value: function update(target) {
              if (this.context.isDisabled()) {
                return false;
              }

              var isCell = dom.isCell(target);

              if (isCell) {
                var pos = dom.posFromPlaceholder(target);
                var containerOffset = external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default()(this.options.container).offset();
                pos.top -= containerOffset.top;
                pos.left -= containerOffset.left;
                this.$popover.css({
                  display: 'block',
                  left: pos.left,
                  top: pos.top
                });
              } else {
                this.hide();
              }

              return isCell;
            }
          }, {
            key: 'hide',
            value: function hide() {
              this.$popover.hide();
            }
          }]);

          return TablePopover_TablePopover;
        }();
        // CONCATENATED MODULE: ./src/js/base/module/VideoDialog.js


        var VideoDialog_VideoDialog = function () {
          function VideoDialog_VideoDialog(context) {
            _classCallCheck(this, VideoDialog_VideoDialog);

            this.context = context;
            this.ui = external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default.a.summernote.ui;
            this.$body = external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default()(document.body);
            this.$editor = context.layoutInfo.editor;
            this.options = context.options;
            this.lang = this.options.langInfo;
          }

          _createClass(VideoDialog_VideoDialog, [{
            key: 'initialize',
            value: function initialize() {
              var $container = this.options.dialogsInBody ? this.$body : this.options.container;
              var body = ['<div class="form-group note-form-group row-fluid">', '<label for="note-dialog-video-url-' + this.options.id + '" class="note-form-label">' + this.lang.video.url + ' <small class="text-muted">' + this.lang.video.providers + '</small></label>', '<input id="note-dialog-video-url-' + this.options.id + '" class="note-video-url form-control note-form-control note-input" type="text"/>', '</div>'].join('');
              var buttonClass = 'btn btn-primary note-btn note-btn-primary note-video-btn';
              var footer = '<input type="button" href="#" class="' + buttonClass + '" value="' + this.lang.video.insert + '" disabled>';
              this.$dialog = this.ui.dialog({
                title: this.lang.video.insert,
                fade: this.options.dialogsFade,
                body: body,
                footer: footer
              }).render().appendTo($container);
            }
          }, {
            key: 'destroy',
            value: function destroy() {
              this.ui.hideDialog(this.$dialog);
              this.$dialog.remove();
            }
          }, {
            key: 'bindEnterKey',
            value: function bindEnterKey($input, $btn) {
              $input.on('keypress', function (event) {
                if (event.keyCode === core_key.code.ENTER) {
                  event.preventDefault();
                  $btn.trigger('click');
                }
              });
            }
          }, {
            key: 'createVideoNode',
            value: function createVideoNode(url) {
              // video url patterns(youtube, instagram, vimeo, dailymotion, youku, mp4, ogg, webm)
              var ytRegExp = /\/\/(?:www\.)?(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))([\w|-]{11})(?:(?:[\?&]t=)(\S+))?$/;
              var ytRegExpForStart = /^(?:(\d+)h)?(?:(\d+)m)?(?:(\d+)s)?$/;
              var ytMatch = url.match(ytRegExp);
              var igRegExp = /(?:www\.|\/\/)instagram\.com\/p\/(.[a-zA-Z0-9_-]*)/;
              var igMatch = url.match(igRegExp);
              var vRegExp = /\/\/vine\.co\/v\/([a-zA-Z0-9]+)/;
              var vMatch = url.match(vRegExp);
              var vimRegExp = /\/\/(player\.)?vimeo\.com\/([a-z]*\/)*(\d+)[?]?.*/;
              var vimMatch = url.match(vimRegExp);
              var dmRegExp = /.+dailymotion.com\/(video|hub)\/([^_]+)[^#]*(#video=([^_&]+))?/;
              var dmMatch = url.match(dmRegExp);
              var youkuRegExp = /\/\/v\.youku\.com\/v_show\/id_(\w+)=*\.html/;
              var youkuMatch = url.match(youkuRegExp);
              var qqRegExp = /\/\/v\.qq\.com.*?vid=(.+)/;
              var qqMatch = url.match(qqRegExp);
              var qqRegExp2 = /\/\/v\.qq\.com\/x?\/?(page|cover).*?\/([^\/]+)\.html\??.*/;
              var qqMatch2 = url.match(qqRegExp2);
              var mp4RegExp = /^.+.(mp4|m4v)$/;
              var mp4Match = url.match(mp4RegExp);
              var oggRegExp = /^.+.(ogg|ogv)$/;
              var oggMatch = url.match(oggRegExp);
              var webmRegExp = /^.+.(webm)$/;
              var webmMatch = url.match(webmRegExp);
              var fbRegExp = /(?:www\.|\/\/)facebook\.com\/([^\/]+)\/videos\/([0-9]+)/;
              var fbMatch = url.match(fbRegExp);
              var $video = void 0;

              if (ytMatch && ytMatch[1].length === 11) {
                var youtubeId = ytMatch[1];
                var start = 0;

                if (typeof ytMatch[2] !== 'undefined') {
                  var ytMatchForStart = ytMatch[2].match(ytRegExpForStart);

                  if (ytMatchForStart) {
                    for (var n = [3600, 60, 1], i = 0, r = n.length; i < r; i++) {
                      start += typeof ytMatchForStart[i + 1] !== 'undefined' ? n[i] * parseInt(ytMatchForStart[i + 1], 10) : 0;
                    }
                  }
                }

                $video = external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default()('<iframe>').attr('frameborder', 0).attr('src', '//www.youtube.com/embed/' + youtubeId + (start > 0 ? '?start=' + start : '')).attr('width', '640').attr('height', '360');
              } else if (igMatch && igMatch[0].length) {
                $video = external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default()('<iframe>').attr('frameborder', 0).attr('src', 'https://instagram.com/p/' + igMatch[1] + '/embed/').attr('width', '612').attr('height', '710').attr('scrolling', 'no').attr('allowtransparency', 'true');
              } else if (vMatch && vMatch[0].length) {
                $video = external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default()('<iframe>').attr('frameborder', 0).attr('src', vMatch[0] + '/embed/simple').attr('width', '600').attr('height', '600').attr('class', 'vine-embed');
              } else if (vimMatch && vimMatch[3].length) {
                $video = external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default()('<iframe webkitallowfullscreen mozallowfullscreen allowfullscreen>').attr('frameborder', 0).attr('src', '//player.vimeo.com/video/' + vimMatch[3]).attr('width', '640').attr('height', '360');
              } else if (dmMatch && dmMatch[2].length) {
                $video = external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default()('<iframe>').attr('frameborder', 0).attr('src', '//www.dailymotion.com/embed/video/' + dmMatch[2]).attr('width', '640').attr('height', '360');
              } else if (youkuMatch && youkuMatch[1].length) {
                $video = external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default()('<iframe webkitallowfullscreen mozallowfullscreen allowfullscreen>').attr('frameborder', 0).attr('height', '498').attr('width', '510').attr('src', '//player.youku.com/embed/' + youkuMatch[1]);
              } else if (qqMatch && qqMatch[1].length || qqMatch2 && qqMatch2[2].length) {
                var vid = qqMatch && qqMatch[1].length ? qqMatch[1] : qqMatch2[2];
                $video = external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default()('<iframe webkitallowfullscreen mozallowfullscreen allowfullscreen>').attr('frameborder', 0).attr('height', '310').attr('width', '500').attr('src', 'https://v.qq.com/iframe/player.html?vid=' + vid + '&amp;auto=0');
              } else if (mp4Match || oggMatch || webmMatch) {
                $video = external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default()('<video controls>').attr('src', url).attr('width', '640').attr('height', '360');
              } else if (fbMatch && fbMatch[0].length) {
                $video = external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default()('<iframe>').attr('frameborder', 0).attr('src', 'https://www.facebook.com/plugins/video.php?href=' + encodeURIComponent(fbMatch[0]) + '&show_text=0&width=560').attr('width', '560').attr('height', '301').attr('scrolling', 'no').attr('allowtransparency', 'true');
              } else {
                // this is not a known video link. Now what, Cat? Now what?
                return false;
              }

              $video.addClass('note-video-clip');
              return $video[0];
            }
          }, {
            key: 'show',
            value: function show() {
              var _this40 = this;

              var text = this.context.invoke('editor.getSelectedText');
              this.context.invoke('editor.saveRange');
              this.showVideoDialog(text).then(function (url) {
                // [workaround] hide dialog before restore range for IE range focus
                _this40.ui.hideDialog(_this40.$dialog);
                _this40.context.invoke('editor.restoreRange'); // build node

                var $node = _this40.createVideoNode(url);

                if ($node) {
                  // insert video node
                  _this40.context.invoke('editor.insertNode', $node);
                }
              }).fail(function () {
                _this40.context.invoke('editor.restoreRange');
              });
            }
            /**
             * show image dialog
             *
             * @param {jQuery} $dialog
             * @return {Promise}
             */

          }, {
            key: 'showVideoDialog',
            value: function showVideoDialog(text) {
              var _this41 = this;

              return external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default.a.Deferred(function (deferred) {
                var $videoUrl = _this41.$dialog.find('.note-video-url');
                var $videoBtn = _this41.$dialog.find('.note-video-btn');
                _this41.ui.onDialogShown(_this41.$dialog, function () {
                  _this41.context.triggerEvent('dialog.shown');
                  $videoUrl.on('input paste propertychange', function () {
                    _this41.ui.toggleBtn($videoBtn, $videoUrl.val());
                  });

                  if (!env.isSupportTouch) {
                    $videoUrl.trigger('focus');
                  }

                  $videoBtn.click(function (event) {
                    event.preventDefault();
                    deferred.resolve($videoUrl.val());
                  });
                  _this41.bindEnterKey($videoUrl, $videoBtn);
                });
                _this41.ui.onDialogHidden(_this41.$dialog, function () {
                  $videoUrl.off();
                  $videoBtn.off();

                  if (deferred.state() === 'pending') {
                    deferred.reject();
                  }
                });
                _this41.ui.showDialog(_this41.$dialog);
              });
            }
          }]);

          return VideoDialog_VideoDialog;
        }();
        // CONCATENATED MODULE: ./src/js/base/module/HelpDialog.js


        var HelpDialog_HelpDialog = function () {
          function HelpDialog_HelpDialog(context) {
            _classCallCheck(this, HelpDialog_HelpDialog);

            this.context = context;
            this.ui = external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default.a.summernote.ui;
            this.$body = external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default()(document.body);
            this.$editor = context.layoutInfo.editor;
            this.options = context.options;
            this.lang = this.options.langInfo;
          }

          _createClass(HelpDialog_HelpDialog, [{
            key: 'initialize',
            value: function initialize() {
              var $container = this.options.dialogsInBody ? this.$body : this.options.container;
              var body = ['<p class="text-center">', '<a href="http://summernote.org/" target="_blank">Summernote 0.8.15</a> · ', '<a href="https://github.com/summernote/summernote" target="_blank">Project</a> · ', '<a href="https://github.com/summernote/summernote/issues" target="_blank">Issues</a>', '</p>'].join('');
              this.$dialog = this.ui.dialog({
                title: this.lang.options.help,
                fade: this.options.dialogsFade,
                body: this.createShortcutList(),
                footer: body,
                callback: function callback($node) {
                  $node.find('.modal-body,.note-modal-body').css({
                    'max-height': 300,
                    'overflow': 'scroll'
                  });
                }
              }).render().appendTo($container);
            }
          }, {
            key: 'destroy',
            value: function destroy() {
              this.ui.hideDialog(this.$dialog);
              this.$dialog.remove();
            }
          }, {
            key: 'createShortcutList',
            value: function createShortcutList() {
              var _this42 = this;

              var keyMap = this.options.keyMap[env.isMac ? 'mac' : 'pc'];
              return Object.keys(keyMap).map(function (key) {
                var command = keyMap[key];
                var $row = external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default()('<div><div class="help-list-item"/></div>');
                $row.append(external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default()('<label><kbd>' + key + '</kdb></label>').css({
                  'width': 180,
                  'margin-right': 10
                })).append(external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default()('<span/>').html(_this42.context.memo('help.' + command) || command));
                return $row.html();
              }).join('');
            }
            /**
             * show help dialog
             *
             * @return {Promise}
             */

          }, {
            key: 'showHelpDialog',
            value: function showHelpDialog() {
              var _this43 = this;

              return external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default.a.Deferred(function (deferred) {
                _this43.ui.onDialogShown(_this43.$dialog, function () {
                  _this43.context.triggerEvent('dialog.shown');
                  deferred.resolve();
                });
                _this43.ui.showDialog(_this43.$dialog);
              }).promise();
            }
          }, {
            key: 'show',
            value: function show() {
              var _this44 = this;

              this.context.invoke('editor.saveRange');
              this.showHelpDialog().then(function () {
                _this44.context.invoke('editor.restoreRange');
              });
            }
          }]);

          return HelpDialog_HelpDialog;
        }();
        // CONCATENATED MODULE: ./src/js/base/module/AirPopover.js


        var AIR_MODE_POPOVER_X_OFFSET = 20;

        var AirPopover_AirPopover = function () {
          function AirPopover_AirPopover(context) {
            var _this45 = this;

            _classCallCheck(this, AirPopover_AirPopover);

            this.context = context;
            this.ui = external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default.a.summernote.ui;
            this.options = context.options;
            this.hidable = true;
            this.events = {
              'summernote.keyup summernote.mouseup summernote.scroll': function summernoteKeyupSummernoteMouseupSummernoteScroll() {
                if (_this45.options.editing) {
                  _this45.update();
                }
              },
              'summernote.disable summernote.change summernote.dialog.shown summernote.blur': function summernoteDisableSummernoteChangeSummernoteDialogShownSummernoteBlur() {
                _this45.hide();
              },
              'summernote.focusout': function summernoteFocusout(we, e) {
                if (!_this45.$popover.is(':active,:focus')) {
                  _this45.hide();
                }
              }
            };
          }

          _createClass(AirPopover_AirPopover, [{
            key: 'shouldInitialize',
            value: function shouldInitialize() {
              return this.options.airMode && !lists.isEmpty(this.options.popover.air);
            }
          }, {
            key: 'initialize',
            value: function initialize() {
              var _this46 = this;

              this.$popover = this.ui.popover({
                className: 'note-air-popover'
              }).render().appendTo(this.options.container);
              var $content = this.$popover.find('.popover-content');
              this.context.invoke('buttons.build', $content, this.options.popover.air); // disable hiding this popover preemptively by 'summernote.blur' event.

              this.$popover.on('mousedown', function () {
                _this46.hidable = false;
              }); // (re-)enable hiding after 'summernote.blur' has been handled (aka. ignored).

              this.$popover.on('mouseup', function () {
                _this46.hidable = true;
              });
            }
          }, {
            key: 'destroy',
            value: function destroy() {
              this.$popover.remove();
            }
          }, {
            key: 'update',
            value: function update() {
              var styleInfo = this.context.invoke('editor.currentStyle');

              if (styleInfo.range && !styleInfo.range.isCollapsed()) {
                var rect = lists.last(styleInfo.range.getClientRects());

                if (rect) {
                  var bnd = func.rect2bnd(rect);
                  this.$popover.css({
                    display: 'block',
                    left: Math.max(bnd.left + bnd.width / 2, 0) - AIR_MODE_POPOVER_X_OFFSET,
                    top: bnd.top + bnd.height
                  });
                  this.context.invoke('buttons.updateCurrentStyle', this.$popover);
                }
              } else {
                this.hide();
              }
            }
          }, {
            key: 'hide',
            value: function hide() {
              if (this.hidable) {
                this.$popover.hide();
              }
            }
          }]);

          return AirPopover_AirPopover;
        }();
        // CONCATENATED MODULE: ./src/js/base/module/HintPopover.js


        var POPOVER_DIST = 5;

        var HintPopover_HintPopover = function () {
          function HintPopover_HintPopover(context) {
            var _this47 = this;

            _classCallCheck(this, HintPopover_HintPopover);

            this.context = context;
            this.ui = external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default.a.summernote.ui;
            this.$editable = context.layoutInfo.editable;
            this.options = context.options;
            this.hint = this.options.hint || [];
            this.direction = this.options.hintDirection || 'bottom';
            this.hints = Array.isArray(this.hint) ? this.hint : [this.hint];
            this.events = {
              'summernote.keyup': function summernoteKeyup(we, e) {
                if (!e.isDefaultPrevented()) {
                  _this47.handleKeyup(e);
                }
              },
              'summernote.keydown': function summernoteKeydown(we, e) {
                _this47.handleKeydown(e);
              },
              'summernote.disable summernote.dialog.shown summernote.blur': function summernoteDisableSummernoteDialogShownSummernoteBlur() {
                _this47.hide();
              }
            };
          }

          _createClass(HintPopover_HintPopover, [{
            key: 'shouldInitialize',
            value: function shouldInitialize() {
              return this.hints.length > 0;
            }
          }, {
            key: 'initialize',
            value: function initialize() {
              var _this48 = this;

              this.lastWordRange = null;
              this.matchingWord = null;
              this.$popover = this.ui.popover({
                className: 'note-hint-popover',
                hideArrow: true,
                direction: ''
              }).render().appendTo(this.options.container);
              this.$popover.hide();
              this.$content = this.$popover.find('.popover-content,.note-popover-content');
              this.$content.on('click', '.note-hint-item', function (e) {
                _this48.$content.find('.active').removeClass('active');
                external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default()(e.currentTarget).addClass('active');
                _this48.replace();
              });
              this.$popover.on('mousedown', function (e) {
                e.preventDefault();
              });
            }
          }, {
            key: 'destroy',
            value: function destroy() {
              this.$popover.remove();
            }
          }, {
            key: 'selectItem',
            value: function selectItem($item) {
              this.$content.find('.active').removeClass('active');
              $item.addClass('active');
              this.$content[0].scrollTop = $item[0].offsetTop - this.$content.innerHeight() / 2;
            }
          }, {
            key: 'moveDown',
            value: function moveDown() {
              var $current = this.$content.find('.note-hint-item.active');
              var $next = $current.next();

              if ($next.length) {
                this.selectItem($next);
              } else {
                var $nextGroup = $current.parent().next();

                if (!$nextGroup.length) {
                  $nextGroup = this.$content.find('.note-hint-group').first();
                }

                this.selectItem($nextGroup.find('.note-hint-item').first());
              }
            }
          }, {
            key: 'moveUp',
            value: function moveUp() {
              var $current = this.$content.find('.note-hint-item.active');
              var $prev = $current.prev();

              if ($prev.length) {
                this.selectItem($prev);
              } else {
                var $prevGroup = $current.parent().prev();

                if (!$prevGroup.length) {
                  $prevGroup = this.$content.find('.note-hint-group').last();
                }

                this.selectItem($prevGroup.find('.note-hint-item').last());
              }
            }
          }, {
            key: 'replace',
            value: function replace() {
              var $item = this.$content.find('.note-hint-item.active');

              if ($item.length) {
                var node = this.nodeFromItem($item); // If matchingWord length = 0 -> capture OK / open hint / but as mention capture "" (\w*)

                if (this.matchingWord !== null && this.matchingWord.length === 0) {
                  this.lastWordRange.so = this.lastWordRange.eo; // Else si > 0 and normal case -> adjust range "before" for correct position of insertion
                } else if (this.matchingWord !== null && this.matchingWord.length > 0 && !this.lastWordRange.isCollapsed()) {
                  var rangeCompute = this.lastWordRange.eo - this.lastWordRange.so - this.matchingWord.length;

                  if (rangeCompute > 0) {
                    this.lastWordRange.so += rangeCompute;
                  }
                }

                this.lastWordRange.insertNode(node);

                if (this.options.hintSelect === 'next') {
                  var blank = document.createTextNode('');
                  external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default()(node).after(blank);
                  core_range.createFromNodeBefore(blank).select();
                } else {
                  core_range.createFromNodeAfter(node).select();
                }

                this.lastWordRange = null;
                this.hide();
                this.context.invoke('editor.focus');
              }
            }
          }, {
            key: 'nodeFromItem',
            value: function nodeFromItem($item) {
              var hint = this.hints[$item.data('index')];
              var item = $item.data('item');
              var node = hint.content ? hint.content(item) : item;

              if (typeof node === 'string') {
                node = dom.createText(node);
              }

              return node;
            }
          }, {
            key: 'createItemTemplates',
            value: function createItemTemplates(hintIdx, items) {
              var hint = this.hints[hintIdx];
              return items.map(function (item, idx) {
                var $item = external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default()('<div class="note-hint-item"/>');
                $item.append(hint.template ? hint.template(item) : item + '');
                $item.data({
                  'index': hintIdx,
                  'item': item
                });
                return $item;
              });
            }
          }, {
            key: 'handleKeydown',
            value: function handleKeydown(e) {
              if (!this.$popover.is(':visible')) {
                return;
              }

              if (e.keyCode === core_key.code.ENTER) {
                e.preventDefault();
                this.replace();
              } else if (e.keyCode === core_key.code.UP) {
                e.preventDefault();
                this.moveUp();
              } else if (e.keyCode === core_key.code.DOWN) {
                e.preventDefault();
                this.moveDown();
              }
            }
          }, {
            key: 'searchKeyword',
            value: function searchKeyword(index, keyword, callback) {
              var hint = this.hints[index];

              if (hint && hint.match.test(keyword) && hint.search) {
                var _matches = hint.match.exec(keyword);
                this.matchingWord = _matches[0];
                hint.search(_matches[1], callback);
              } else {
                callback();
              }
            }
          }, {
            key: 'createGroup',
            value: function createGroup(idx, keyword) {
              var _this49 = this;

              var $group = external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default()('<div class="note-hint-group note-hint-group-' + idx + '"/>');
              this.searchKeyword(idx, keyword, function (items) {
                items = items || [];

                if (items.length) {
                  $group.html(_this49.createItemTemplates(idx, items));
                  _this49.show();
                }
              });
              return $group;
            }
          }, {
            key: 'handleKeyup',
            value: function handleKeyup(e) {
              var _this50 = this;

              if (!lists.contains([core_key.code.ENTER, core_key.code.UP, core_key.code.DOWN], e.keyCode)) {
                var range = this.context.invoke('editor.getLastRange');
                var wordRange = void 0,
                    keyword = void 0;

                if (this.options.hintMode === 'words') {
                  wordRange = range.getWordsRange(range);
                  keyword = wordRange.toString();
                  this.hints.forEach(function (hint) {
                    if (hint.match.test(keyword)) {
                      wordRange = range.getWordsMatchRange(hint.match);
                      return false;
                    }
                  });

                  if (!wordRange) {
                    this.hide();
                    return;
                  }

                  keyword = wordRange.toString();
                } else {
                  wordRange = range.getWordRange();
                  keyword = wordRange.toString();
                }

                if (this.hints.length && keyword) {
                  this.$content.empty();
                  var bnd = func.rect2bnd(lists.last(wordRange.getClientRects()));
                  var containerOffset = external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default()(this.options.container).offset();

                  if (bnd) {
                    bnd.top -= containerOffset.top;
                    bnd.left -= containerOffset.left;
                    this.$popover.hide();
                    this.lastWordRange = wordRange;
                    this.hints.forEach(function (hint, idx) {
                      if (hint.match.test(keyword)) {
                        _this50.createGroup(idx, keyword).appendTo(_this50.$content);
                      }
                    }); // select first .note-hint-item

                    this.$content.find('.note-hint-item:first').addClass('active'); // set position for popover after group is created

                    if (this.direction === 'top') {
                      this.$popover.css({
                        left: bnd.left,
                        top: bnd.top - this.$popover.outerHeight() - POPOVER_DIST
                      });
                    } else {
                      this.$popover.css({
                        left: bnd.left,
                        top: bnd.top + bnd.height + POPOVER_DIST
                      });
                    }
                  }
                } else {
                  this.hide();
                }
              }
            }
          }, {
            key: 'show',
            value: function show() {
              this.$popover.show();
            }
          }, {
            key: 'hide',
            value: function hide() {
              this.$popover.hide();
            }
          }]);

          return HintPopover_HintPopover;
        }();
        // CONCATENATED MODULE: ./src/js/base/settings.js


        external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default.a.summernote = external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default.a.extend(external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default.a.summernote, {
          version: '0.8.15',
          plugins: {},
          dom: dom,
          range: core_range,
          lists: lists,
          options: {
            langInfo: external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default.a.summernote.lang['en-US'],
            editing: true,
            modules: {
              'editor': Editor_Editor,
              'clipboard': Clipboard_Clipboard,
              'dropzone': Dropzone_Dropzone,
              'codeview': Codeview_CodeView,
              'statusbar': Statusbar_Statusbar,
              'fullscreen': Fullscreen_Fullscreen,
              'handle': Handle_Handle,
              // FIXME: HintPopover must be front of autolink
              //  - Script error about range when Enter key is pressed on hint popover
              'hintPopover': HintPopover_HintPopover,
              'autoLink': AutoLink_AutoLink,
              'autoSync': AutoSync_AutoSync,
              'autoReplace': AutoReplace_AutoReplace,
              'placeholder': Placeholder_Placeholder,
              'buttons': Buttons_Buttons,
              'toolbar': Toolbar_Toolbar,
              'linkDialog': LinkDialog_LinkDialog,
              'linkPopover': LinkPopover_LinkPopover,
              'imageDialog': ImageDialog_ImageDialog,
              'imagePopover': ImagePopover_ImagePopover,
              'tablePopover': TablePopover_TablePopover,
              'videoDialog': VideoDialog_VideoDialog,
              'helpDialog': HelpDialog_HelpDialog,
              'airPopover': AirPopover_AirPopover
            },
            buttons: {},
            lang: 'en-US',
            followingToolbar: false,
            toolbarPosition: 'top',
            otherStaticBar: '',
            // toolbar
            toolbar: [['style', ['style']], ['font', ['bold', 'underline', 'clear']], ['fontname', ['fontname']], ['color', ['color']], ['para', ['ul', 'ol', 'paragraph']], ['table', ['table']], ['insert', ['link', 'picture', 'video']], ['view', ['fullscreen', 'codeview', 'help']]],
            // popover
            popatmouse: true,
            popover: {
              image: [['resize', ['resizeFull', 'resizeHalf', 'resizeQuarter', 'resizeNone']], ['float', ['floatLeft', 'floatRight', 'floatNone']], ['remove', ['removeMedia']]],
              link: [['link', ['linkDialogShow', 'unlink']]],
              table: [['add', ['addRowDown', 'addRowUp', 'addColLeft', 'addColRight']], ['delete', ['deleteRow', 'deleteCol', 'deleteTable']]],
              air: [['color', ['color']], ['font', ['bold', 'underline', 'clear']], ['para', ['ul', 'paragraph']], ['table', ['table']], ['insert', ['link', 'picture']], ['view', ['fullscreen', 'codeview']]]
            },
            // air mode: inline editor
            airMode: false,
            width: null,
            height: null,
            linkTargetBlank: true,
            useProtocol: true,
            defaultProtocol: 'http://',
            focus: false,
            tabDisabled: false,
            tabSize: 4,
            styleWithSpan: true,
            shortcuts: true,
            textareaAutoSync: true,
            tooltip: 'auto',
            container: null,
            maxTextLength: 0,
            blockquoteBreakingLevel: 2,
            spellCheck: true,
            disableGrammar: false,
            placeholder: null,
            inheritPlaceholder: false,
            // TODO: need to be documented
            hintMode: 'word',
            hintSelect: 'after',
            hintDirection: 'bottom',
            styleTags: ['p', 'blockquote', 'pre', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
            fontNames: ['Arial', 'Arial Black', 'Comic Sans MS', 'Courier New', 'Helvetica Neue', 'Helvetica', 'Impact', 'Lucida Grande', 'Tahoma', 'Times New Roman', 'Verdana'],
            fontNamesIgnoreCheck: [],
            addDefaultFonts: true,
            fontSizes: ['8', '9', '10', '11', '12', '14', '18', '24', '36'],
            fontSizeUnits: ['px', 'pt'],
            // pallete colors(n x n)
            colors: [['#000000', '#424242', '#636363', '#9C9C94', '#CEC6CE', '#EFEFEF', '#F7F7F7', '#FFFFFF'], ['#FF0000', '#FF9C00', '#FFFF00', '#00FF00', '#00FFFF', '#0000FF', '#9C00FF', '#FF00FF'], ['#F7C6CE', '#FFE7CE', '#FFEFC6', '#D6EFD6', '#CEDEE7', '#CEE7F7', '#D6D6E7', '#E7D6DE'], ['#E79C9C', '#FFC69C', '#FFE79C', '#B5D6A5', '#A5C6CE', '#9CC6EF', '#B5A5D6', '#D6A5BD'], ['#E76363', '#F7AD6B', '#FFD663', '#94BD7B', '#73A5AD', '#6BADDE', '#8C7BC6', '#C67BA5'], ['#CE0000', '#E79439', '#EFC631', '#6BA54A', '#4A7B8C', '#3984C6', '#634AA5', '#A54A7B'], ['#9C0000', '#B56308', '#BD9400', '#397B21', '#104A5A', '#085294', '#311873', '#731842'], ['#630000', '#7B3900', '#846300', '#295218', '#083139', '#003163', '#21104A', '#4A1031']],
            // http://chir.ag/projects/name-that-color/
            colorsName: [['Black', 'Tundora', 'Dove Gray', 'Star Dust', 'Pale Slate', 'Gallery', 'Alabaster', 'White'], ['Red', 'Orange Peel', 'Yellow', 'Green', 'Cyan', 'Blue', 'Electric Violet', 'Magenta'], ['Azalea', 'Karry', 'Egg White', 'Zanah', 'Botticelli', 'Tropical Blue', 'Mischka', 'Twilight'], ['Tonys Pink', 'Peach Orange', 'Cream Brulee', 'Sprout', 'Casper', 'Perano', 'Cold Purple', 'Careys Pink'], ['Mandy', 'Rajah', 'Dandelion', 'Olivine', 'Gulf Stream', 'Viking', 'Blue Marguerite', 'Puce'], ['Guardsman Red', 'Fire Bush', 'Golden Dream', 'Chelsea Cucumber', 'Smalt Blue', 'Boston Blue', 'Butterfly Bush', 'Cadillac'], ['Sangria', 'Mai Tai', 'Buddha Gold', 'Forest Green', 'Eden', 'Venice Blue', 'Meteorite', 'Claret'], ['Rosewood', 'Cinnamon', 'Olive', 'Parsley', 'Tiber', 'Midnight Blue', 'Valentino', 'Loulou']],
            colorButton: {
              foreColor: '#000000',
              backColor: '#FFFF00'
            },
            lineHeights: ['1.0', '1.2', '1.4', '1.5', '1.6', '1.8', '2.0', '3.0'],
            tableClassName: 'table table-bordered',
            insertTableMaxSize: {
              col: 10,
              row: 10
            },
            // By default, dialogs are attached in container.
            dialogsInBody: false,
            dialogsFade: false,
            maximumImageFileSize: null,
            callbacks: {
              onBeforeCommand: null,
              onBlur: null,
              onBlurCodeview: null,
              onChange: null,
              onChangeCodeview: null,
              onDialogShown: null,
              onEnter: null,
              onFocus: null,
              onImageLinkInsert: null,
              onImageUpload: null,
              onImageUploadError: null,
              onInit: null,
              onKeydown: null,
              onKeyup: null,
              onMousedown: null,
              onMouseup: null,
              onPaste: null,
              onScroll: null
            },
            codemirror: {
              mode: 'text/html',
              htmlMode: true,
              lineNumbers: true
            },
            codeviewFilter: false,
            codeviewFilterRegex: /<\/*(?:applet|b(?:ase|gsound|link)|embed|frame(?:set)?|ilayer|l(?:ayer|ink)|meta|object|s(?:cript|tyle)|t(?:itle|extarea)|xml)[^>]*?>/gi,
            codeviewIframeFilter: true,
            codeviewIframeWhitelistSrc: [],
            codeviewIframeWhitelistSrcBase: ['www.youtube.com', 'www.youtube-nocookie.com', 'www.facebook.com', 'vine.co', 'instagram.com', 'player.vimeo.com', 'www.dailymotion.com', 'player.youku.com', 'v.qq.com'],
            keyMap: {
              pc: {
                'ENTER': 'insertParagraph',
                'CTRL+Z': 'undo',
                'CTRL+Y': 'redo',
                'TAB': 'tab',
                'SHIFT+TAB': 'untab',
                'CTRL+B': 'bold',
                'CTRL+I': 'italic',
                'CTRL+U': 'underline',
                'CTRL+SHIFT+S': 'strikethrough',
                'CTRL+BACKSLASH': 'removeFormat',
                'CTRL+SHIFT+L': 'justifyLeft',
                'CTRL+SHIFT+E': 'justifyCenter',
                'CTRL+SHIFT+R': 'justifyRight',
                'CTRL+SHIFT+J': 'justifyFull',
                'CTRL+SHIFT+NUM7': 'insertUnorderedList',
                'CTRL+SHIFT+NUM8': 'insertOrderedList',
                'CTRL+LEFTBRACKET': 'outdent',
                'CTRL+RIGHTBRACKET': 'indent',
                'CTRL+NUM0': 'formatPara',
                'CTRL+NUM1': 'formatH1',
                'CTRL+NUM2': 'formatH2',
                'CTRL+NUM3': 'formatH3',
                'CTRL+NUM4': 'formatH4',
                'CTRL+NUM5': 'formatH5',
                'CTRL+NUM6': 'formatH6',
                'CTRL+ENTER': 'insertHorizontalRule',
                'CTRL+K': 'linkDialog.show'
              },
              mac: {
                'ENTER': 'insertParagraph',
                'CMD+Z': 'undo',
                'CMD+SHIFT+Z': 'redo',
                'TAB': 'tab',
                'SHIFT+TAB': 'untab',
                'CMD+B': 'bold',
                'CMD+I': 'italic',
                'CMD+U': 'underline',
                'CMD+SHIFT+S': 'strikethrough',
                'CMD+BACKSLASH': 'removeFormat',
                'CMD+SHIFT+L': 'justifyLeft',
                'CMD+SHIFT+E': 'justifyCenter',
                'CMD+SHIFT+R': 'justifyRight',
                'CMD+SHIFT+J': 'justifyFull',
                'CMD+SHIFT+NUM7': 'insertUnorderedList',
                'CMD+SHIFT+NUM8': 'insertOrderedList',
                'CMD+LEFTBRACKET': 'outdent',
                'CMD+RIGHTBRACKET': 'indent',
                'CMD+NUM0': 'formatPara',
                'CMD+NUM1': 'formatH1',
                'CMD+NUM2': 'formatH2',
                'CMD+NUM3': 'formatH3',
                'CMD+NUM4': 'formatH4',
                'CMD+NUM5': 'formatH5',
                'CMD+NUM6': 'formatH6',
                'CMD+ENTER': 'insertHorizontalRule',
                'CMD+K': 'linkDialog.show'
              }
            },
            icons: {
              'align': 'note-icon-align',
              'alignCenter': 'note-icon-align-center',
              'alignJustify': 'note-icon-align-justify',
              'alignLeft': 'note-icon-align-left',
              'alignRight': 'note-icon-align-right',
              'rowBelow': 'note-icon-row-below',
              'colBefore': 'note-icon-col-before',
              'colAfter': 'note-icon-col-after',
              'rowAbove': 'note-icon-row-above',
              'rowRemove': 'note-icon-row-remove',
              'colRemove': 'note-icon-col-remove',
              'indent': 'note-icon-align-indent',
              'outdent': 'note-icon-align-outdent',
              'arrowsAlt': 'note-icon-arrows-alt',
              'bold': 'note-icon-bold',
              'caret': 'note-icon-caret',
              'circle': 'note-icon-circle',
              'close': 'note-icon-close',
              'code': 'note-icon-code',
              'eraser': 'note-icon-eraser',
              'floatLeft': 'note-icon-float-left',
              'floatRight': 'note-icon-float-right',
              'font': 'note-icon-font',
              'frame': 'note-icon-frame',
              'italic': 'note-icon-italic',
              'link': 'note-icon-link',
              'unlink': 'note-icon-chain-broken',
              'magic': 'note-icon-magic',
              'menuCheck': 'note-icon-menu-check',
              'minus': 'note-icon-minus',
              'orderedlist': 'note-icon-orderedlist',
              'pencil': 'note-icon-pencil',
              'picture': 'note-icon-picture',
              'question': 'note-icon-question',
              'redo': 'note-icon-redo',
              'rollback': 'note-icon-rollback',
              'square': 'note-icon-square',
              'strikethrough': 'note-icon-strikethrough',
              'subscript': 'note-icon-subscript',
              'superscript': 'note-icon-superscript',
              'table': 'note-icon-table',
              'textHeight': 'note-icon-text-height',
              'trash': 'note-icon-trash',
              'underline': 'note-icon-underline',
              'undo': 'note-icon-undo',
              'unorderedlist': 'note-icon-unorderedlist',
              'video': 'note-icon-video'
            }
          }
        });

        /***/
      },

      /***/4:
      /***/function _(module, exports, __webpack_require__) {

        // extracted by mini-css-extract-plugin

        /***/},

      /***/51:
      /***/function _(module, __webpack_exports__, __webpack_require__) {

        "use strict";

        __webpack_require__.r(__webpack_exports__);

        // EXTERNAL MODULE: external {"root":"jQuery","commonjs2":"jquery","commonjs":"jquery","amd":"jquery"}
        var external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_ = __webpack_require__(0);
        var external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default = /*#__PURE__*/__webpack_require__.n(external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_);

        // EXTERNAL MODULE: ./src/js/base/renderer.js
        var renderer = __webpack_require__(1);

        // CONCATENATED MODULE: ./src/js/bs3/ui.js


        var editor = renderer["a" /* default */].create('<div class="note-editor note-frame panel panel-default"/>');
        var toolbar = renderer["a" /* default */].create('<div class="note-toolbar panel-heading" role="toolbar"></div></div>');
        var editingArea = renderer["a" /* default */].create('<div class="note-editing-area"/>');
        var codable = renderer["a" /* default */].create('<textarea class="note-codable" aria-multiline="true"/>');
        var editable = renderer["a" /* default */].create('<div class="note-editable" contentEditable="true" role="textbox" aria-multiline="true"/>');
        var statusbar = renderer["a" /* default */].create(['<output class="note-status-output" role="status" aria-live="polite"/>', '<div class="note-statusbar" role="status">', '<div class="note-resizebar" aria-label="Resize">', '<div class="note-icon-bar"/>', '<div class="note-icon-bar"/>', '<div class="note-icon-bar"/>', '</div>', '</div>'].join(''));
        var airEditor = renderer["a" /* default */].create('<div class="note-editor note-airframe"/>');
        var airEditable = renderer["a" /* default */].create(['<div class="note-editable" contentEditable="true" role="textbox" aria-multiline="true"/>', '<output class="note-status-output" role="status" aria-live="polite"/>'].join(''));
        var buttonGroup = renderer["a" /* default */].create('<div class="note-btn-group btn-group">');
        var dropdown = renderer["a" /* default */].create('<ul class="note-dropdown-menu dropdown-menu">', function ($node, options) {
          var markup = Array.isArray(options.items) ? options.items.map(function (item) {
            var value = typeof item === 'string' ? item : item.value || '';
            var content = options.template ? options.template(item) : item;
            var option = (typeof item === 'undefined' ? 'undefined' : _typeof(item)) === 'object' ? item.option : undefined;
            var dataValue = 'data-value="' + value + '"';
            var dataOption = option !== undefined ? ' data-option="' + option + '"' : '';
            return '<li aria-label="' + value + '"><a href="#" ' + (dataValue + dataOption) + '>' + content + '</a></li>';
          }).join('') : options.items;
          $node.html(markup).attr({
            'aria-label': options.title
          });
        });

        var dropdownButtonContents = function dropdownButtonContents(contents, options) {
          return contents + ' ' + icon(options.icons.caret, 'span');
        };

        var dropdownCheck = renderer["a" /* default */].create('<ul class="note-dropdown-menu dropdown-menu note-check">', function ($node, options) {
          var markup = Array.isArray(options.items) ? options.items.map(function (item) {
            var value = typeof item === 'string' ? item : item.value || '';
            var content = options.template ? options.template(item) : item;
            return '<li aria-label="' + item + '"><a href="#" data-value="' + value + '">' + icon(options.checkClassName) + ' ' + content + '</a></li>';
          }).join('') : options.items;
          $node.html(markup).attr({
            'aria-label': options.title
          });
        });
        var dialog = renderer["a" /* default */].create('<div class="modal note-modal" aria-hidden="false" tabindex="-1" role="dialog"/>', function ($node, options) {
          if (options.fade) {
            $node.addClass('fade');
          }

          $node.attr({
            'aria-label': options.title
          });
          $node.html(['<div class="modal-dialog">', '<div class="modal-content">', options.title ? '<div class="modal-header">' + '<button type="button" class="close" data-dismiss="modal" aria-label="Close" aria-hidden="true">&times;</button>' + '<h4 class="modal-title">' + options.title + '</h4>' + '</div>' : '', '<div class="modal-body">' + options.body + '</div>', options.footer ? '<div class="modal-footer">' + options.footer + '</div>' : '', '</div>', '</div>'].join(''));
        });
        var popover = renderer["a" /* default */].create(['<div class="note-popover popover in">', '<div class="arrow"/>', '<div class="popover-content note-children-container"/>', '</div>'].join(''), function ($node, options) {
          var direction = typeof options.direction !== 'undefined' ? options.direction : 'bottom';
          $node.addClass(direction);

          if (options.hideArrow) {
            $node.find('.arrow').hide();
          }
        });
        var ui_checkbox = renderer["a" /* default */].create('<div class="checkbox"></div>', function ($node, options) {
          $node.html(['<label' + (options.id ? ' for="note-' + options.id + '"' : '') + '>', '<input type="checkbox"' + (options.id ? ' id="note-' + options.id + '"' : ''), options.checked ? ' checked' : '', ' aria-checked="' + (options.checked ? 'true' : 'false') + '"/>', options.text ? options.text : '', '</label>'].join(''));
        });

        var icon = function icon(iconClassName, tagName) {
          tagName = tagName || 'i';
          return '<' + tagName + ' class="' + iconClassName + '"/>';
        };

        var ui = function ui(editorOptions) {
          return {
            editor: editor,
            toolbar: toolbar,
            editingArea: editingArea,
            codable: codable,
            editable: editable,
            statusbar: statusbar,
            airEditor: airEditor,
            airEditable: airEditable,
            buttonGroup: buttonGroup,
            dropdown: dropdown,
            dropdownButtonContents: dropdownButtonContents,
            dropdownCheck: dropdownCheck,
            dialog: dialog,
            popover: popover,
            checkbox: ui_checkbox,
            icon: icon,
            options: editorOptions,
            palette: function palette($node, options) {
              return renderer["a" /* default */].create('<div class="note-color-palette"/>', function ($node, options) {
                var contents = [];

                for (var row = 0, rowSize = options.colors.length; row < rowSize; row++) {
                  var eventName = options.eventName;
                  var colors = options.colors[row];
                  var colorsName = options.colorsName[row];
                  var buttons = [];

                  for (var col = 0, colSize = colors.length; col < colSize; col++) {
                    var color = colors[col];
                    var colorName = colorsName[col];
                    buttons.push(['<button type="button" class="note-color-btn"', 'style="background-color:', color, '" ', 'data-event="', eventName, '" ', 'data-value="', color, '" ', 'title="', colorName, '" ', 'aria-label="', colorName, '" ', 'data-toggle="button" tabindex="-1"></button>'].join(''));
                  }

                  contents.push('<div class="note-color-row">' + buttons.join('') + '</div>');
                }

                $node.html(contents.join(''));

                if (options.tooltip) {
                  $node.find('.note-color-btn').tooltip({
                    container: options.container || editorOptions.container,
                    trigger: 'hover',
                    placement: 'bottom'
                  });
                }
              })($node, options);
            },
            button: function button($node, options) {
              return renderer["a" /* default */].create('<button type="button" class="note-btn btn btn-default btn-sm" tabindex="-1">', function ($node, options) {
                if (options && options.tooltip) {
                  $node.attr({
                    title: options.tooltip,
                    'aria-label': options.tooltip
                  }).tooltip({
                    container: options.container || editorOptions.container,
                    trigger: 'hover',
                    placement: 'bottom'
                  }).on('click', function (e) {
                    external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default()(e.currentTarget).tooltip('hide');
                  });
                }
              })($node, options);
            },
            toggleBtn: function toggleBtn($btn, isEnable) {
              $btn.toggleClass('disabled', !isEnable);
              $btn.attr('disabled', !isEnable);
            },
            toggleBtnActive: function toggleBtnActive($btn, isActive) {
              $btn.toggleClass('active', isActive);
            },
            onDialogShown: function onDialogShown($dialog, handler) {
              $dialog.one('shown.bs.modal', handler);
            },
            onDialogHidden: function onDialogHidden($dialog, handler) {
              $dialog.one('hidden.bs.modal', handler);
            },
            showDialog: function showDialog($dialog) {
              $dialog.modal('show');
            },
            hideDialog: function hideDialog($dialog) {
              $dialog.modal('hide');
            },
            createLayout: function createLayout($note) {
              var $editor = (editorOptions.airMode ? airEditor([editingArea([codable(), airEditable()])]) : editorOptions.toolbarPosition === 'bottom' ? editor([editingArea([codable(), editable()]), toolbar(), statusbar()]) : editor([toolbar(), editingArea([codable(), editable()]), statusbar()])).render();
              $editor.insertAfter($note);
              return {
                note: $note,
                editor: $editor,
                toolbar: $editor.find('.note-toolbar'),
                editingArea: $editor.find('.note-editing-area'),
                editable: $editor.find('.note-editable'),
                codable: $editor.find('.note-codable'),
                statusbar: $editor.find('.note-statusbar')
              };
            },
            removeLayout: function removeLayout($note, layoutInfo) {
              $note.html(layoutInfo.editable.html());
              layoutInfo.editor.remove();
              $note.show();
            }
          };
        };

        /* harmony default export */var bs3_ui = ui;
        // EXTERNAL MODULE: ./src/js/base/settings.js + 37 modules
        var settings = __webpack_require__(3);

        // EXTERNAL MODULE: ./src/styles/summernote-bs3.scss
        var summernote_bs3 = __webpack_require__(4);

        // CONCATENATED MODULE: ./src/js/bs3/settings.js


        external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default.a.summernote = external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default.a.extend(external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default.a.summernote, {
          ui_template: bs3_ui,
          interface: 'bs3'
        });

        /***/
      }

      /******/ })
  );
});
//# sourceMappingURL=summernote.js.map
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1), __webpack_require__(15)(module)))

/***/ }),
/* 6 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 7 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_8__;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/


/* eslint-disable no-unused-vars */

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc'); // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(_extends({}, test3)).join('') !== 'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var printWarning = function printWarning() {};

if (process.env.NODE_ENV !== 'production') {
  var ReactPropTypesSecret = __webpack_require__(2);
  var loggedTypeFailures = {};
  var has = Function.call.bind(Object.prototype.hasOwnProperty);

  printWarning = function printWarning(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */
function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
  if (process.env.NODE_ENV !== 'production') {
    for (var typeSpecName in typeSpecs) {
      if (has(typeSpecs, typeSpecName)) {
        var error;
        // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.
        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          if (typeof typeSpecs[typeSpecName] !== 'function') {
            var err = Error((componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' + 'it must be a function, usually from the `prop-types` package, but received `' + _typeof(typeSpecs[typeSpecName]) + '`.');
            err.name = 'Invariant Violation';
            throw err;
          }
          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
        } catch (ex) {
          error = ex;
        }
        if (error && !(error instanceof Error)) {
          printWarning((componentName || 'React class') + ': type specification of ' + location + ' `' + typeSpecName + '` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a ' + (typeof error === 'undefined' ? 'undefined' : _typeof(error)) + '. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).');
        }
        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error.message] = true;

          var stack = getStack ? getStack() : '';

          printWarning('Failed ' + location + ' type: ' + error.message + (stack != null ? stack : ''));
        }
      }
    }
  }
}

/**
 * Resets warning cache when testing.
 *
 * @private
 */
checkPropTypes.resetWarningCache = function () {
  if (process.env.NODE_ENV !== 'production') {
    loggedTypeFailures = {};
  }
};

module.exports = checkPropTypes;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = __webpack_require__(2);

function emptyFunction() {}
function emptyFunctionWithReset() {}
emptyFunctionWithReset.resetWarningCache = emptyFunction;

module.exports = function () {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret) {
      // It is still safe when called from React.
      return;
    }
    var err = new Error('Calling PropTypes validators directly is not supported by the `prop-types` package. ' + 'Use PropTypes.checkPropTypes() to call them. ' + 'Read more at http://fb.me/use-check-prop-types');
    err.name = 'Invariant Violation';
    throw err;
  };
  shim.isRequired = shim;
  function getShim() {
    return shim;
  };
  // Important!
  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
  var ReactPropTypes = {
    array: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,

    any: shim,
    arrayOf: getShim,
    element: shim,
    elementType: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim,
    exact: getShim,

    checkPropTypes: emptyFunctionWithReset,
    resetWarningCache: emptyFunction
  };

  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var ReactIs = __webpack_require__(3);
var assign = __webpack_require__(9);

var ReactPropTypesSecret = __webpack_require__(2);
var checkPropTypes = __webpack_require__(10);

var has = Function.call.bind(Object.prototype.hasOwnProperty);
var printWarning = function printWarning() {};

if (process.env.NODE_ENV !== 'production') {
  printWarning = function printWarning(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

function emptyFunctionThatReturnsNull() {
  return null;
}

module.exports = function (isValidElement, throwOnDirectAccess) {
  /* global Symbol */
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

  /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */
  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }

  /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */

  var ANONYMOUS = '<<anonymous>>';

  // Important!
  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    symbol: createPrimitiveTypeChecker('symbol'),

    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    elementType: createElementTypeTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker,
    exact: createStrictShapeTypeChecker
  };

  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */
  /*eslint-disable no-self-compare*/
  function is(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }
  /*eslint-enable no-self-compare*/

  /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */
  function PropTypeError(message) {
    this.message = message;
    this.stack = '';
  }
  // Make `instanceof Error` still work for returned errors.
  PropTypeError.prototype = Error.prototype;

  function createChainableTypeChecker(validate) {
    if (process.env.NODE_ENV !== 'production') {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }
    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;

      if (secret !== ReactPropTypesSecret) {
        if (throwOnDirectAccess) {
          // New behavior only for users of `prop-types` package
          var err = new Error('Calling PropTypes validators directly is not supported by the `prop-types` package. ' + 'Use `PropTypes.checkPropTypes()` to call them. ' + 'Read more at http://fb.me/use-check-prop-types');
          err.name = 'Invariant Violation';
          throw err;
        } else if (process.env.NODE_ENV !== 'production' && typeof console !== 'undefined') {
          // Old behavior for people using React.PropTypes
          var cacheKey = componentName + ':' + propName;
          if (!manualPropTypeCallCache[cacheKey] &&
          // Avoid spamming the console because they are often not actionable except for lib authors
          manualPropTypeWarningCount < 3) {
            printWarning('You are manually calling a React.PropTypes validation ' + 'function for the `' + propFullName + '` prop on `' + componentName + '`. This is deprecated ' + 'and will throw in the standalone `prop-types` package. ' + 'You may be seeing this warning due to a third-party PropTypes ' + 'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.');
            manualPropTypeCallCache[cacheKey] = true;
            manualPropTypeWarningCount++;
          }
        }
      }
      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
          }
          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
        }
        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);

    return chainedCheckType;
  }

  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName, secret) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== expectedType) {
        // `propValue` being instance of, say, date/regexp, pass the 'object'
        // check, but we can offer a more precise error message here rather than
        // 'of type `object`'.
        var preciseType = getPreciseType(propValue);

        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunctionThatReturnsNull);
  }

  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
      }
      var propValue = props[propName];
      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }
      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
        if (error instanceof Error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!ReactIs.isValidElementType(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement type.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
      if (process.env.NODE_ENV !== 'production') {
        if (arguments.length > 1) {
          printWarning('Invalid arguments supplied to oneOf, expected an array, got ' + arguments.length + ' arguments. ' + 'A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).');
        } else {
          printWarning('Invalid argument supplied to oneOf, expected an array.');
        }
      }
      return emptyFunctionThatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }

      var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
        var type = getPreciseType(value);
        if (type === 'symbol') {
          return String(value);
        }
        return value;
      });
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + String(propValue) + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
      }
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }
      for (var key in propValue) {
        if (has(propValue, key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
          if (error instanceof Error) {
            return error;
          }
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
      process.env.NODE_ENV !== 'production' ? printWarning('Invalid argument supplied to oneOfType, expected an instance of array.') : void 0;
      return emptyFunctionThatReturnsNull;
    }

    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];
      if (typeof checker !== 'function') {
        printWarning('Invalid argument supplied to oneOfType. Expected an array of check functions, but ' + 'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.');
        return emptyFunctionThatReturnsNull;
      }
    }

    function validate(props, propName, componentName, location, propFullName) {
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret) == null) {
          return null;
        }
      }

      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      for (var key in shapeTypes) {
        var checker = shapeTypes[key];
        if (!checker) {
          continue;
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createStrictShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      // We need to check all keys in case some are required but missing from
      // props.
      var allKeys = assign({}, props[propName], shapeTypes);
      for (var key in allKeys) {
        var checker = shapeTypes[key];
        if (!checker) {
          return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' + '\nBad object: ' + JSON.stringify(props[propName], null, '  ') + '\nValid keys: ' + JSON.stringify(Object.keys(shapeTypes), null, '  '));
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function isNode(propValue) {
    switch (typeof propValue === 'undefined' ? 'undefined' : _typeof(propValue)) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;
      case 'boolean':
        return !propValue;
      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }
        if (propValue === null || isValidElement(propValue)) {
          return true;
        }

        var iteratorFn = getIteratorFn(propValue);
        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;
          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            // Iterator will provide entry [k,v] tuples rather than values.
            while (!(step = iterator.next()).done) {
              var entry = step.value;
              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }

        return true;
      default:
        return false;
    }
  }

  function isSymbol(propType, propValue) {
    // Native Symbol.
    if (propType === 'symbol') {
      return true;
    }

    // falsy value can't be a Symbol
    if (!propValue) {
      return false;
    }

    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
    if (propValue['@@toStringTag'] === 'Symbol') {
      return true;
    }

    // Fallback for non-spec compliant Symbols which are polyfilled.
    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
      return true;
    }

    return false;
  }

  // Equivalent of `typeof` but with special handling for array and regexp.
  function getPropType(propValue) {
    var propType = typeof propValue === 'undefined' ? 'undefined' : _typeof(propValue);
    if (Array.isArray(propValue)) {
      return 'array';
    }
    if (propValue instanceof RegExp) {
      // Old webkits (at least until Android 4.0) return 'function' rather than
      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
      // passes PropTypes.object.
      return 'object';
    }
    if (isSymbol(propType, propValue)) {
      return 'symbol';
    }
    return propType;
  }

  // This handles more types than `getPropType`. Only used for error messages.
  // See `createPrimitiveTypeChecker`.
  function getPreciseType(propValue) {
    if (typeof propValue === 'undefined' || propValue === null) {
      return '' + propValue;
    }
    var propType = getPropType(propValue);
    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }
    return propType;
  }

  // Returns a string that is postfixed to a warning about an invalid type.
  // For example, "undefined" or "of type array"
  function getPostfixForTypeWarning(value) {
    var type = getPreciseType(value);
    switch (type) {
      case 'array':
      case 'object':
        return 'an ' + type;
      case 'boolean':
      case 'date':
      case 'regexp':
        return 'a ' + type;
      default:
        return type;
    }
  }

  // Returns class name of the object, if any.
  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }
    return propValue.constructor.name;
  }

  ReactPropTypes.checkPropTypes = checkPropTypes;
  ReactPropTypes.resetWarningCache = checkPropTypes.resetWarningCache;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/** @license React v16.12.0
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

if (process.env.NODE_ENV !== "production") {
  (function () {
    'use strict';

    Object.defineProperty(exports, '__esModule', { value: true });

    // The Symbol used to tag the ReactElement-like types. If there is no native Symbol
    // nor polyfill, then a plain number is used for performance.
    var hasSymbol = typeof Symbol === 'function' && Symbol.for;
    var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
    var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
    var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
    var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
    var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
    var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
    var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
    // (unstable) APIs that have been removed. Can we remove the symbols?

    var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
    var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
    var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
    var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
    var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
    var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
    var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
    var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
    var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;
    var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 0xead7;

    function isValidElementType(type) {
      return typeof type === 'string' || typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || (typeof type === 'undefined' ? 'undefined' : _typeof(type)) === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE);
    }

    /**
     * Forked from fbjs/warning:
     * https://github.com/facebook/fbjs/blob/e66ba20ad5be433eb54423f2b097d829324d9de6/packages/fbjs/src/__forks__/warning.js
     *
     * Only change is we use console.warn instead of console.error,
     * and do nothing when 'console' is not supported.
     * This really simplifies the code.
     * ---
     * Similar to invariant but only logs a warning if the condition is not met.
     * This can be used to log issues in development environments in critical
     * paths. Removing the logging code for production environments will keep the
     * same logic and follow the same code paths.
     */
    var lowPriorityWarningWithoutStack = function lowPriorityWarningWithoutStack() {};

    {
      var printWarning = function printWarning(format) {
        for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
          args[_key - 1] = arguments[_key];
        }

        var argIndex = 0;
        var message = 'Warning: ' + format.replace(/%s/g, function () {
          return args[argIndex++];
        });

        if (typeof console !== 'undefined') {
          console.warn(message);
        }

        try {
          // --- Welcome to debugging React ---
          // This error was thrown as a convenience so that you can use this stack
          // to find the callsite that caused this warning to fire.
          throw new Error(message);
        } catch (x) {}
      };

      lowPriorityWarningWithoutStack = function lowPriorityWarningWithoutStack(condition, format) {
        if (format === undefined) {
          throw new Error('`lowPriorityWarningWithoutStack(condition, format, ...args)` requires a warning ' + 'message argument');
        }

        if (!condition) {
          for (var _len2 = arguments.length, args = new Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
            args[_key2 - 2] = arguments[_key2];
          }

          printWarning.apply(void 0, [format].concat(args));
        }
      };
    }

    var lowPriorityWarningWithoutStack$1 = lowPriorityWarningWithoutStack;

    function typeOf(object) {
      if ((typeof object === 'undefined' ? 'undefined' : _typeof(object)) === 'object' && object !== null) {
        var $$typeof = object.$$typeof;

        switch ($$typeof) {
          case REACT_ELEMENT_TYPE:
            var type = object.type;

            switch (type) {
              case REACT_ASYNC_MODE_TYPE:
              case REACT_CONCURRENT_MODE_TYPE:
              case REACT_FRAGMENT_TYPE:
              case REACT_PROFILER_TYPE:
              case REACT_STRICT_MODE_TYPE:
              case REACT_SUSPENSE_TYPE:
                return type;

              default:
                var $$typeofType = type && type.$$typeof;

                switch ($$typeofType) {
                  case REACT_CONTEXT_TYPE:
                  case REACT_FORWARD_REF_TYPE:
                  case REACT_LAZY_TYPE:
                  case REACT_MEMO_TYPE:
                  case REACT_PROVIDER_TYPE:
                    return $$typeofType;

                  default:
                    return $$typeof;
                }

            }

          case REACT_PORTAL_TYPE:
            return $$typeof;
        }
      }

      return undefined;
    } // AsyncMode is deprecated along with isAsyncMode

    var AsyncMode = REACT_ASYNC_MODE_TYPE;
    var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
    var ContextConsumer = REACT_CONTEXT_TYPE;
    var ContextProvider = REACT_PROVIDER_TYPE;
    var Element = REACT_ELEMENT_TYPE;
    var ForwardRef = REACT_FORWARD_REF_TYPE;
    var Fragment = REACT_FRAGMENT_TYPE;
    var Lazy = REACT_LAZY_TYPE;
    var Memo = REACT_MEMO_TYPE;
    var Portal = REACT_PORTAL_TYPE;
    var Profiler = REACT_PROFILER_TYPE;
    var StrictMode = REACT_STRICT_MODE_TYPE;
    var Suspense = REACT_SUSPENSE_TYPE;
    var hasWarnedAboutDeprecatedIsAsyncMode = false; // AsyncMode should be deprecated

    function isAsyncMode(object) {
      {
        if (!hasWarnedAboutDeprecatedIsAsyncMode) {
          hasWarnedAboutDeprecatedIsAsyncMode = true;
          lowPriorityWarningWithoutStack$1(false, 'The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
        }
      }

      return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
    }
    function isConcurrentMode(object) {
      return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
    }
    function isContextConsumer(object) {
      return typeOf(object) === REACT_CONTEXT_TYPE;
    }
    function isContextProvider(object) {
      return typeOf(object) === REACT_PROVIDER_TYPE;
    }
    function isElement(object) {
      return (typeof object === 'undefined' ? 'undefined' : _typeof(object)) === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
    }
    function isForwardRef(object) {
      return typeOf(object) === REACT_FORWARD_REF_TYPE;
    }
    function isFragment(object) {
      return typeOf(object) === REACT_FRAGMENT_TYPE;
    }
    function isLazy(object) {
      return typeOf(object) === REACT_LAZY_TYPE;
    }
    function isMemo(object) {
      return typeOf(object) === REACT_MEMO_TYPE;
    }
    function isPortal(object) {
      return typeOf(object) === REACT_PORTAL_TYPE;
    }
    function isProfiler(object) {
      return typeOf(object) === REACT_PROFILER_TYPE;
    }
    function isStrictMode(object) {
      return typeOf(object) === REACT_STRICT_MODE_TYPE;
    }
    function isSuspense(object) {
      return typeOf(object) === REACT_SUSPENSE_TYPE;
    }

    exports.typeOf = typeOf;
    exports.AsyncMode = AsyncMode;
    exports.ConcurrentMode = ConcurrentMode;
    exports.ContextConsumer = ContextConsumer;
    exports.ContextProvider = ContextProvider;
    exports.Element = Element;
    exports.ForwardRef = ForwardRef;
    exports.Fragment = Fragment;
    exports.Lazy = Lazy;
    exports.Memo = Memo;
    exports.Portal = Portal;
    exports.Profiler = Profiler;
    exports.StrictMode = StrictMode;
    exports.Suspense = Suspense;
    exports.isValidElementType = isValidElementType;
    exports.isAsyncMode = isAsyncMode;
    exports.isConcurrentMode = isConcurrentMode;
    exports.isContextConsumer = isContextConsumer;
    exports.isContextProvider = isContextProvider;
    exports.isElement = isElement;
    exports.isForwardRef = isForwardRef;
    exports.isFragment = isFragment;
    exports.isLazy = isLazy;
    exports.isMemo = isMemo;
    exports.isPortal = isPortal;
    exports.isProfiler = isProfiler;
    exports.isStrictMode = isStrictMode;
    exports.isSuspense = isSuspense;
  })();
}
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.12.0
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

Object.defineProperty(exports, "__esModule", { value: !0 });
var b = "function" === typeof Symbol && Symbol.for,
    c = b ? Symbol.for("react.element") : 60103,
    d = b ? Symbol.for("react.portal") : 60106,
    e = b ? Symbol.for("react.fragment") : 60107,
    f = b ? Symbol.for("react.strict_mode") : 60108,
    g = b ? Symbol.for("react.profiler") : 60114,
    h = b ? Symbol.for("react.provider") : 60109,
    k = b ? Symbol.for("react.context") : 60110,
    l = b ? Symbol.for("react.async_mode") : 60111,
    m = b ? Symbol.for("react.concurrent_mode") : 60111,
    n = b ? Symbol.for("react.forward_ref") : 60112,
    p = b ? Symbol.for("react.suspense") : 60113,
    q = b ? Symbol.for("react.suspense_list") : 60120,
    r = b ? Symbol.for("react.memo") : 60115,
    t = b ? Symbol.for("react.lazy") : 60116,
    v = b ? Symbol.for("react.fundamental") : 60117,
    w = b ? Symbol.for("react.responder") : 60118,
    x = b ? Symbol.for("react.scope") : 60119;function y(a) {
  if ("object" === (typeof a === "undefined" ? "undefined" : _typeof(a)) && null !== a) {
    var u = a.$$typeof;switch (u) {case c:
        switch (a = a.type, a) {case l:case m:case e:case g:case f:case p:
            return a;default:
            switch (a = a && a.$$typeof, a) {case k:case n:case t:case r:case h:
                return a;default:
                return u;}}case d:
        return u;}
  }
}function z(a) {
  return y(a) === m;
}
exports.typeOf = y;exports.AsyncMode = l;exports.ConcurrentMode = m;exports.ContextConsumer = k;exports.ContextProvider = h;exports.Element = c;exports.ForwardRef = n;exports.Fragment = e;exports.Lazy = t;exports.Memo = r;exports.Portal = d;exports.Profiler = g;exports.StrictMode = f;exports.Suspense = p;
exports.isValidElementType = function (a) {
  return "string" === typeof a || "function" === typeof a || a === e || a === m || a === g || a === f || a === p || a === q || "object" === (typeof a === "undefined" ? "undefined" : _typeof(a)) && null !== a && (a.$$typeof === t || a.$$typeof === r || a.$$typeof === h || a.$$typeof === k || a.$$typeof === n || a.$$typeof === v || a.$$typeof === w || a.$$typeof === x);
};exports.isAsyncMode = function (a) {
  return z(a) || y(a) === l;
};exports.isConcurrentMode = z;exports.isContextConsumer = function (a) {
  return y(a) === k;
};exports.isContextProvider = function (a) {
  return y(a) === h;
};
exports.isElement = function (a) {
  return "object" === (typeof a === "undefined" ? "undefined" : _typeof(a)) && null !== a && a.$$typeof === c;
};exports.isForwardRef = function (a) {
  return y(a) === n;
};exports.isFragment = function (a) {
  return y(a) === e;
};exports.isLazy = function (a) {
  return y(a) === t;
};exports.isMemo = function (a) {
  return y(a) === r;
};exports.isPortal = function (a) {
  return y(a) === d;
};exports.isProfiler = function (a) {
  return y(a) === g;
};exports.isStrictMode = function (a) {
  return y(a) === f;
};exports.isSuspense = function (a) {
  return y(a) === p;
};

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (module) {
	if (!module.webpackPolyfill) {
		module.deprecate = function () {};
		module.paths = [];
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function get() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function get() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

__webpack_require__(5);

__webpack_require__(7);

__webpack_require__(6);

var _react = __webpack_require__(8);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(4);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); } /* global $ */

var randomUid = function randomUid() {
  return Math.floor(Math.random() * 100000);
};

var ReactSummernote = function (_Component) {
  _inherits(ReactSummernote, _Component);

  function ReactSummernote(props) {
    _classCallCheck(this, ReactSummernote);

    var _this = _possibleConstructorReturn(this, (ReactSummernote.__proto__ || Object.getPrototypeOf(ReactSummernote)).call(this, props));

    _this.uid = 'react-summernote-' + randomUid();
    _this.editor = {};
    _this.noteEditable = null;
    _this.notePlaceholder = null;

    _this.onInit = _this.onInit.bind(_this);
    _this.onImageUpload = _this.onImageUpload.bind(_this);

    _this.focus = _this.focus.bind(_this);
    _this.isEmpty = _this.isEmpty.bind(_this);
    _this.reset = _this.reset.bind(_this);
    _this.replace = _this.replace.bind(_this);
    _this.disable = _this.disable.bind(_this);
    _this.enable = _this.enable.bind(_this);
    _this.toggleState = _this.toggleState.bind(_this);
    _this.insertImage = _this.insertImage.bind(_this);
    _this.insertNode = _this.insertNode.bind(_this);
    _this.insertText = _this.insertText.bind(_this);

    ReactSummernote.focus = _this.focus.bind(_this);
    ReactSummernote.isEmpty = _this.isEmpty.bind(_this);
    ReactSummernote.reset = _this.reset.bind(_this);
    ReactSummernote.replace = _this.replace.bind(_this);
    ReactSummernote.disable = _this.disable.bind(_this);
    ReactSummernote.enable = _this.enable.bind(_this);
    ReactSummernote.toggleState = _this.toggleState.bind(_this);
    ReactSummernote.insertImage = _this.insertImage.bind(_this);
    ReactSummernote.insertNode = _this.insertNode.bind(_this);
    ReactSummernote.insertText = _this.insertText.bind(_this);
    return _this;
  }

  _createClass(ReactSummernote, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var options = this.props.options || {};
      var codeview = this.props.codeview;
      // const codeviewCommand = codeview ? 'codeview.activate' : 'codeview.deactivate';
      options.callbacks = this.callbacks;

      this.editor = $('#' + this.uid);
      this.editor.summernote(options);
      if (codeview) {
        this.editor.summernote('codeview.activate');
      }
      if (this.props.value) {
        this.replace(this.props.value);
      }
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      var props = this.props;


      var codeview = nextProps.codeview;
      var codeviewCommand = codeview ? 'codeview.activate' : 'codeview.deactivate';

      if (typeof nextProps.value === 'string' && props.value !== nextProps.value) {
        this.replace(nextProps.value);
      }

      if (typeof nextProps.disabled === 'boolean' && props.disabled !== nextProps.disabled) {
        this.toggleState(nextProps.disabled);
      }
      if (codeview !== props.codeview) {
        this.editor.summernote(codeviewCommand);
      }
    }
  }, {
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate() {
      return false;
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      if (this.editor.summernote) {
        this.editor.summernote('destroy');
      }
    }
  }, {
    key: 'onInit',
    value: function onInit() {
      var _props = this.props,
          disabled = _props.disabled,
          onInit = _props.onInit;


      var $container = this.editor.parent();
      this.noteEditable = $container.find('.note-editable');
      this.notePlaceholder = $container.find('.note-placeholder');

      if (typeof disabled === 'boolean') {
        this.toggleState(disabled);
      }

      if (typeof onInit === 'function') {
        onInit({
          summernote: this.editor.summernote.bind(this.editor),
          focus: this.focus,
          isEmpty: this.isEmpty,
          reset: this.reset,
          replace: this.replace,
          disable: this.disable,
          enable: this.enable,
          insertImage: this.insertImage,
          insertNode: this.insertNode,
          insertText: this.insertText
        });
      }
    }
  }, {
    key: 'onImageUpload',
    value: function onImageUpload(images) {
      var onImageUpload = this.props.onImageUpload;


      if (typeof onImageUpload === 'function') {
        onImageUpload(images, this.insertImage);
      }
    }
  }, {
    key: 'focus',
    value: function focus() {
      this.editor.summernote('focus');
    }
  }, {
    key: 'isEmpty',
    value: function isEmpty() {
      return this.editor.summernote('isEmpty');
    }
  }, {
    key: 'reset',
    value: function reset() {
      this.editor.summernote('reset');
    }
  }, {
    key: 'replace',
    value: function replace(content) {
      var noteEditable = this.noteEditable,
          notePlaceholder = this.notePlaceholder;

      var prevContent = noteEditable.html();
      var contentLength = content.length;

      if (prevContent !== content) {
        if (this.isEmpty() && contentLength > 0) {
          notePlaceholder.hide();
        } else if (contentLength === 0) {
          notePlaceholder.show();
        }

        noteEditable.html(content);
      }
    }
  }, {
    key: 'disable',
    value: function disable() {
      this.editor.summernote('disable');
    }
  }, {
    key: 'enable',
    value: function enable() {
      this.editor.summernote('enable');
    }
  }, {
    key: 'toggleState',
    value: function toggleState(disabled) {
      if (disabled) {
        this.disable();
      } else {
        this.enable();
      }
    }
  }, {
    key: 'insertImage',
    value: function insertImage(url, filenameOrCallback) {
      this.editor.summernote('insertImage', url, filenameOrCallback);
    }
  }, {
    key: 'insertNode',
    value: function insertNode(node) {
      this.editor.summernote('insertNode', node);
    }
  }, {
    key: 'insertText',
    value: function insertText(text) {
      this.editor.summernote('insertText', text);
    }
  }, {
    key: 'render',
    value: function render() {
      var _props2 = this.props,
          Tag = _props2.tag,
          children = _props2.children,
          className = _props2.className;


      return _react2.default.createElement(
        'div',
        { className: className },
        _react2.default.createElement(
          Tag,
          { id: this.uid },
          children
        )
      );
    }
  }, {
    key: 'callbacks',
    get: function get() {
      var props = this.props;

      return {
        onInit: this.onInit,
        onEnter: props.onEnter,
        onFocus: props.onFocus,
        onBlur: props.onBlur,
        onKeyup: props.onKeyUp,
        onKeydown: props.onKeyDown,
        onPaste: props.onPaste,
        onChange: props.onChange,
        onImageUpload: this.onImageUpload
      };
    }
  }]);

  return ReactSummernote;
}(_react.Component);

ReactSummernote.propTypes = {
  tag: _propTypes2.default.string, // will determing using div or textarea field for form components like redux-form
  children: _propTypes2.default.node, // instead of value, using children makes more sense for div and textarea blocks
  codeview: _propTypes2.default.bool,
  className: _propTypes2.default.string,
  options: _propTypes2.default.object,
  disabled: _propTypes2.default.bool,
  onInit: _propTypes2.default.func,
  onEnter: _propTypes2.default.func,
  onFocus: _propTypes2.default.func,
  onBlur: _propTypes2.default.func,
  onKeyUp: _propTypes2.default.func,
  onKeyDown: _propTypes2.default.func,
  onPaste: _propTypes2.default.func,
  onChange: _propTypes2.default.func,
  onImageUpload: _propTypes2.default.func
};

ReactSummernote.defaultProps = {
  tag: 'div'
};
exports.default = ReactSummernote;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ })
/******/ ]);
});