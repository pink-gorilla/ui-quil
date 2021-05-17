["^ ","~:resource-id",["~:shadow.build.classpath/resource","goog/net/wrapperxmlhttpfactory.js"],"~:js","goog.provide(\"goog.net.WrapperXmlHttpFactory\");\ngoog.require(\"goog.net.XhrLike\");\ngoog.require(\"goog.net.XmlHttpFactory\");\ngoog.net.WrapperXmlHttpFactory = function(xhrFactory, optionsFactory) {\n  goog.net.XmlHttpFactory.call(this);\n  this.xhrFactory_ = xhrFactory;\n  this.optionsFactory_ = optionsFactory;\n};\ngoog.inherits(goog.net.WrapperXmlHttpFactory, goog.net.XmlHttpFactory);\ngoog.net.WrapperXmlHttpFactory.prototype.createInstance = function() {\n  return this.xhrFactory_();\n};\ngoog.net.WrapperXmlHttpFactory.prototype.getOptions = function() {\n  return this.optionsFactory_();\n};\n","~:source","/**\n * @license\n * Copyright The Closure Library Authors.\n * SPDX-License-Identifier: Apache-2.0\n */\n\n/**\n * @fileoverview Implementation of XmlHttpFactory which allows construction from\n * simple factory methods.\n */\n\ngoog.provide('goog.net.WrapperXmlHttpFactory');\n\n/** @suppress {extraRequire} Typedef. */\ngoog.require('goog.net.XhrLike');\ngoog.require('goog.net.XmlHttpFactory');\n\n\n\n/**\n * An xhr factory subclass which can be constructed using two factory methods.\n * This exists partly to allow the preservation of goog.net.XmlHttp.setFactory()\n * with an unchanged signature.\n * @param {function():!goog.net.XhrLike.OrNative} xhrFactory\n *     A function which returns a new XHR object.\n * @param {function():!Object} optionsFactory A function which returns the\n *     options associated with xhr objects from this factory.\n * @extends {goog.net.XmlHttpFactory}\n * @constructor\n * @final\n */\ngoog.net.WrapperXmlHttpFactory = function(xhrFactory, optionsFactory) {\n  'use strict';\n  goog.net.XmlHttpFactory.call(this);\n\n  /**\n   * XHR factory method.\n   * @type {function() : !goog.net.XhrLike.OrNative}\n   * @private\n   */\n  this.xhrFactory_ = xhrFactory;\n\n  /**\n   * Options factory method.\n   * @type {function() : !Object}\n   * @private\n   */\n  this.optionsFactory_ = optionsFactory;\n};\ngoog.inherits(goog.net.WrapperXmlHttpFactory, goog.net.XmlHttpFactory);\n\n\n/** @override */\ngoog.net.WrapperXmlHttpFactory.prototype.createInstance = function() {\n  'use strict';\n  return this.xhrFactory_();\n};\n\n\n/** @override */\ngoog.net.WrapperXmlHttpFactory.prototype.getOptions = function() {\n  'use strict';\n  return this.optionsFactory_();\n};\n","~:compiled-at",1621210407344,"~:source-map-json","{\n\"version\":3,\n\"file\":\"goog.net.wrapperxmlhttpfactory.js\",\n\"lineCount\":16,\n\"mappings\":\"AAWAA,IAAKC,CAAAA,OAAL,CAAa,gCAAb,CAAA;AAGAD,IAAKE,CAAAA,OAAL,CAAa,kBAAb,CAAA;AACAF,IAAKE,CAAAA,OAAL,CAAa,yBAAb,CAAA;AAgBAF,IAAKG,CAAAA,GAAIC,CAAAA,qBAAT,GAAiCC,QAAQ,CAACC,UAAD,EAAaC,cAAb,CAA6B;AAEpEP,MAAKG,CAAAA,GAAIK,CAAAA,cAAeC,CAAAA,IAAxB,CAA6B,IAA7B,CAAA;AAOA,MAAKC,CAAAA,WAAL,GAAmBJ,UAAnB;AAOA,MAAKK,CAAAA,eAAL,GAAuBJ,cAAvB;AAhBoE,CAAtE;AAkBAP,IAAKY,CAAAA,QAAL,CAAcZ,IAAKG,CAAAA,GAAIC,CAAAA,qBAAvB,EAA8CJ,IAAKG,CAAAA,GAAIK,CAAAA,cAAvD,CAAA;AAIAR,IAAKG,CAAAA,GAAIC,CAAAA,qBAAsBS,CAAAA,SAAUC,CAAAA,cAAzC,GAA0DC,QAAQ,EAAG;AAEnE,SAAO,IAAKL,CAAAA,WAAL,EAAP;AAFmE,CAArE;AAOAV,IAAKG,CAAAA,GAAIC,CAAAA,qBAAsBS,CAAAA,SAAUG,CAAAA,UAAzC,GAAsDC,QAAQ,EAAG;AAE/D,SAAO,IAAKN,CAAAA,eAAL,EAAP;AAF+D,CAAjE;;\",\n\"sources\":[\"goog/net/wrapperxmlhttpfactory.js\"],\n\"sourcesContent\":[\"/**\\n * @license\\n * Copyright The Closure Library Authors.\\n * SPDX-License-Identifier: Apache-2.0\\n */\\n\\n/**\\n * @fileoverview Implementation of XmlHttpFactory which allows construction from\\n * simple factory methods.\\n */\\n\\ngoog.provide('goog.net.WrapperXmlHttpFactory');\\n\\n/** @suppress {extraRequire} Typedef. */\\ngoog.require('goog.net.XhrLike');\\ngoog.require('goog.net.XmlHttpFactory');\\n\\n\\n\\n/**\\n * An xhr factory subclass which can be constructed using two factory methods.\\n * This exists partly to allow the preservation of goog.net.XmlHttp.setFactory()\\n * with an unchanged signature.\\n * @param {function():!goog.net.XhrLike.OrNative} xhrFactory\\n *     A function which returns a new XHR object.\\n * @param {function():!Object} optionsFactory A function which returns the\\n *     options associated with xhr objects from this factory.\\n * @extends {goog.net.XmlHttpFactory}\\n * @constructor\\n * @final\\n */\\ngoog.net.WrapperXmlHttpFactory = function(xhrFactory, optionsFactory) {\\n  'use strict';\\n  goog.net.XmlHttpFactory.call(this);\\n\\n  /**\\n   * XHR factory method.\\n   * @type {function() : !goog.net.XhrLike.OrNative}\\n   * @private\\n   */\\n  this.xhrFactory_ = xhrFactory;\\n\\n  /**\\n   * Options factory method.\\n   * @type {function() : !Object}\\n   * @private\\n   */\\n  this.optionsFactory_ = optionsFactory;\\n};\\ngoog.inherits(goog.net.WrapperXmlHttpFactory, goog.net.XmlHttpFactory);\\n\\n\\n/** @override */\\ngoog.net.WrapperXmlHttpFactory.prototype.createInstance = function() {\\n  'use strict';\\n  return this.xhrFactory_();\\n};\\n\\n\\n/** @override */\\ngoog.net.WrapperXmlHttpFactory.prototype.getOptions = function() {\\n  'use strict';\\n  return this.optionsFactory_();\\n};\\n\"],\n\"names\":[\"goog\",\"provide\",\"require\",\"net\",\"WrapperXmlHttpFactory\",\"goog.net.WrapperXmlHttpFactory\",\"xhrFactory\",\"optionsFactory\",\"XmlHttpFactory\",\"call\",\"xhrFactory_\",\"optionsFactory_\",\"inherits\",\"prototype\",\"createInstance\",\"goog.net.WrapperXmlHttpFactory.prototype.createInstance\",\"getOptions\",\"goog.net.WrapperXmlHttpFactory.prototype.getOptions\"]\n}\n"]