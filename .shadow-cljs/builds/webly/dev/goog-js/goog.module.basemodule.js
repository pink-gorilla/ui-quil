["^ ","~:resource-id",["~:shadow.build.classpath/resource","goog/module/basemodule.js"],"~:js","goog.provide(\"goog.module.BaseModule\");\ngoog.require(\"goog.Disposable\");\ngoog.require(\"goog.module\");\ngoog.module.BaseModule = function() {\n  goog.Disposable.call(this);\n};\ngoog.inherits(goog.module.BaseModule, goog.Disposable);\ngoog.module.BaseModule.prototype.initialize = function(context) {\n};\n","~:source","/**\n * @license\n * Copyright The Closure Library Authors.\n * SPDX-License-Identifier: Apache-2.0\n */\n\n/**\n * @fileoverview Defines the base class for a module. This is used to allow the\n * code to be modularized, giving the benefits of lazy loading and loading on\n * demand.\n */\n\ngoog.provide('goog.module.BaseModule');\n\ngoog.require('goog.Disposable');\n/** @suppress {extraRequire} */\ngoog.require('goog.module');\n\n\n\n/**\n * A basic module object that represents a module of JavaScript code that can\n * be dynamically loaded.\n *\n * @constructor\n * @extends {goog.Disposable}\n */\ngoog.module.BaseModule = function() {\n  'use strict';\n  goog.Disposable.call(this);\n};\ngoog.inherits(goog.module.BaseModule, goog.Disposable);\n\n\n/**\n * Performs any load-time initialization that the module requires.\n * @param {Object} context The module context.\n */\ngoog.module.BaseModule.prototype.initialize = function(context) {};\n","~:compiled-at",1621210407296,"~:source-map-json","{\n\"version\":3,\n\"file\":\"goog.module.basemodule.js\",\n\"lineCount\":10,\n\"mappings\":\"AAYAA,IAAKC,CAAAA,OAAL,CAAa,wBAAb,CAAA;AAEAD,IAAKE,CAAAA,OAAL,CAAa,iBAAb,CAAA;AAEAF,IAAKE,CAAAA,OAAL,CAAa,aAAb,CAAA;AAWAF,IAAKG,CAAAA,MAAOC,CAAAA,UAAZ,GAAyBC,QAAQ,EAAG;AAElCL,MAAKM,CAAAA,UAAWC,CAAAA,IAAhB,CAAqB,IAArB,CAAA;AAFkC,CAApC;AAIAP,IAAKQ,CAAAA,QAAL,CAAcR,IAAKG,CAAAA,MAAOC,CAAAA,UAA1B,EAAsCJ,IAAKM,CAAAA,UAA3C,CAAA;AAOAN,IAAKG,CAAAA,MAAOC,CAAAA,UAAWK,CAAAA,SAAUC,CAAAA,UAAjC,GAA8CC,QAAQ,CAACC,OAAD,CAAU;CAAhE;;\",\n\"sources\":[\"goog/module/basemodule.js\"],\n\"sourcesContent\":[\"/**\\n * @license\\n * Copyright The Closure Library Authors.\\n * SPDX-License-Identifier: Apache-2.0\\n */\\n\\n/**\\n * @fileoverview Defines the base class for a module. This is used to allow the\\n * code to be modularized, giving the benefits of lazy loading and loading on\\n * demand.\\n */\\n\\ngoog.provide('goog.module.BaseModule');\\n\\ngoog.require('goog.Disposable');\\n/** @suppress {extraRequire} */\\ngoog.require('goog.module');\\n\\n\\n\\n/**\\n * A basic module object that represents a module of JavaScript code that can\\n * be dynamically loaded.\\n *\\n * @constructor\\n * @extends {goog.Disposable}\\n */\\ngoog.module.BaseModule = function() {\\n  'use strict';\\n  goog.Disposable.call(this);\\n};\\ngoog.inherits(goog.module.BaseModule, goog.Disposable);\\n\\n\\n/**\\n * Performs any load-time initialization that the module requires.\\n * @param {Object} context The module context.\\n */\\ngoog.module.BaseModule.prototype.initialize = function(context) {};\\n\"],\n\"names\":[\"goog\",\"provide\",\"require\",\"module\",\"BaseModule\",\"goog.module.BaseModule\",\"Disposable\",\"call\",\"inherits\",\"prototype\",\"initialize\",\"goog.module.BaseModule.prototype.initialize\",\"context\"]\n}\n"]