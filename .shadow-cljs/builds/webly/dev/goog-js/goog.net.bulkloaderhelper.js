["^ ","~:resource-id",["~:shadow.build.classpath/resource","goog/net/bulkloaderhelper.js"],"~:js","goog.provide(\"goog.net.BulkLoaderHelper\");\ngoog.require(\"goog.Disposable\");\ngoog.requireType(\"goog.Uri\");\ngoog.net.BulkLoaderHelper = function(uris) {\n  goog.Disposable.call(this);\n  this.uris_ = uris;\n  this.responseTexts_ = [];\n};\ngoog.inherits(goog.net.BulkLoaderHelper, goog.Disposable);\ngoog.net.BulkLoaderHelper.prototype.getUri = function(id) {\n  return this.uris_[id];\n};\ngoog.net.BulkLoaderHelper.prototype.getUris = function() {\n  return this.uris_;\n};\ngoog.net.BulkLoaderHelper.prototype.getResponseTexts = function() {\n  return this.responseTexts_;\n};\ngoog.net.BulkLoaderHelper.prototype.setResponseText = function(id, responseText) {\n  this.responseTexts_[id] = responseText;\n};\ngoog.net.BulkLoaderHelper.prototype.isLoadComplete = function() {\n  const responseTexts = this.responseTexts_;\n  if (responseTexts.length == this.uris_.length) {\n    for (let i = 0; i < responseTexts.length; i++) {\n      if (responseTexts[i] == null) {\n        return false;\n      }\n    }\n    return true;\n  }\n  return false;\n};\ngoog.net.BulkLoaderHelper.prototype.disposeInternal = function() {\n  goog.net.BulkLoaderHelper.superClass_.disposeInternal.call(this);\n  this.uris_ = null;\n  this.responseTexts_ = null;\n};\n","~:source","/**\n * @license\n * Copyright The Closure Library Authors.\n * SPDX-License-Identifier: Apache-2.0\n */\n\n/**\n * @fileoverview Helper class to load a list of URIs in bulk. All URIs\n * must be a successfully loaded in order for the entire load to be considered\n * a success.\n */\n\ngoog.provide('goog.net.BulkLoaderHelper');\n\ngoog.require('goog.Disposable');\ngoog.requireType('goog.Uri');\n\n\n\n/**\n * Helper class used to load multiple URIs.\n * @param {Array<string|goog.Uri>} uris The URIs to load.\n * @constructor\n * @extends {goog.Disposable}\n * @final\n */\ngoog.net.BulkLoaderHelper = function(uris) {\n  'use strict';\n  goog.Disposable.call(this);\n\n  /**\n   * The URIs to load.\n   * @type {Array<string|goog.Uri>}\n   * @private\n   */\n  this.uris_ = uris;\n\n  /**\n   * The response from the XHR's.\n   * @type {Array<string>}\n   * @private\n   */\n  this.responseTexts_ = [];\n};\ngoog.inherits(goog.net.BulkLoaderHelper, goog.Disposable);\n\n\n\n/**\n * Gets the URI by id.\n * @param {number} id The id.\n * @return {string|goog.Uri} The URI specified by the id.\n */\ngoog.net.BulkLoaderHelper.prototype.getUri = function(id) {\n  'use strict';\n  return this.uris_[id];\n};\n\n\n/**\n * Gets the URIs.\n * @return {Array<string|goog.Uri>} The URIs.\n */\ngoog.net.BulkLoaderHelper.prototype.getUris = function() {\n  'use strict';\n  return this.uris_;\n};\n\n\n/**\n * Gets the response texts.\n * @return {Array<string>} The response texts.\n */\ngoog.net.BulkLoaderHelper.prototype.getResponseTexts = function() {\n  'use strict';\n  return this.responseTexts_;\n};\n\n\n/**\n * Sets the response text by id.\n * @param {number} id The id.\n * @param {string} responseText The response texts.\n */\ngoog.net.BulkLoaderHelper.prototype.setResponseText = function(\n    id, responseText) {\n  'use strict';\n  this.responseTexts_[id] = responseText;\n};\n\n\n/**\n * Determines if the load of the URIs is complete.\n * @return {boolean} TRUE iff the load is complete.\n */\ngoog.net.BulkLoaderHelper.prototype.isLoadComplete = function() {\n  'use strict';\n  const responseTexts = this.responseTexts_;\n  if (responseTexts.length == this.uris_.length) {\n    for (let i = 0; i < responseTexts.length; i++) {\n      if (responseTexts[i] == null) {\n        return false;\n      }\n    }\n    return true;\n  }\n  return false;\n};\n\n\n/** @override */\ngoog.net.BulkLoaderHelper.prototype.disposeInternal = function() {\n  'use strict';\n  goog.net.BulkLoaderHelper.superClass_.disposeInternal.call(this);\n\n  this.uris_ = null;\n  this.responseTexts_ = null;\n};\n","~:compiled-at",1621210407337,"~:source-map-json","{\n\"version\":3,\n\"file\":\"goog.net.bulkloaderhelper.js\",\n\"lineCount\":39,\n\"mappings\":\"AAYAA,IAAKC,CAAAA,OAAL,CAAa,2BAAb,CAAA;AAEAD,IAAKE,CAAAA,OAAL,CAAa,iBAAb,CAAA;AACAF,IAAKG,CAAAA,WAAL,CAAiB,UAAjB,CAAA;AAWAH,IAAKI,CAAAA,GAAIC,CAAAA,gBAAT,GAA4BC,QAAQ,CAACC,IAAD,CAAO;AAEzCP,MAAKQ,CAAAA,UAAWC,CAAAA,IAAhB,CAAqB,IAArB,CAAA;AAOA,MAAKC,CAAAA,KAAL,GAAaH,IAAb;AAOA,MAAKI,CAAAA,cAAL,GAAsB,EAAtB;AAhByC,CAA3C;AAkBAX,IAAKY,CAAAA,QAAL,CAAcZ,IAAKI,CAAAA,GAAIC,CAAAA,gBAAvB,EAAyCL,IAAKQ,CAAAA,UAA9C,CAAA;AASAR,IAAKI,CAAAA,GAAIC,CAAAA,gBAAiBQ,CAAAA,SAAUC,CAAAA,MAApC,GAA6CC,QAAQ,CAACC,EAAD,CAAK;AAExD,SAAO,IAAKN,CAAAA,KAAL,CAAWM,EAAX,CAAP;AAFwD,CAA1D;AAUAhB,IAAKI,CAAAA,GAAIC,CAAAA,gBAAiBQ,CAAAA,SAAUI,CAAAA,OAApC,GAA8CC,QAAQ,EAAG;AAEvD,SAAO,IAAKR,CAAAA,KAAZ;AAFuD,CAAzD;AAUAV,IAAKI,CAAAA,GAAIC,CAAAA,gBAAiBQ,CAAAA,SAAUM,CAAAA,gBAApC,GAAuDC,QAAQ,EAAG;AAEhE,SAAO,IAAKT,CAAAA,cAAZ;AAFgE,CAAlE;AAWAX,IAAKI,CAAAA,GAAIC,CAAAA,gBAAiBQ,CAAAA,SAAUQ,CAAAA,eAApC,GAAsDC,QAAQ,CAC1DN,EAD0D,EACtDO,YADsD,CACxC;AAEpB,MAAKZ,CAAAA,cAAL,CAAoBK,EAApB,CAAA,GAA0BO,YAA1B;AAFoB,CADtB;AAWAvB,IAAKI,CAAAA,GAAIC,CAAAA,gBAAiBQ,CAAAA,SAAUW,CAAAA,cAApC,GAAqDC,QAAQ,EAAG;AAE9D,QAAMC,gBAAgB,IAAKf,CAAAA,cAA3B;AACA,MAAIe,aAAcC,CAAAA,MAAlB,IAA4B,IAAKjB,CAAAA,KAAMiB,CAAAA,MAAvC,CAA+C;AAC7C,SAAK,IAAIC,IAAI,CAAb,EAAgBA,CAAhB,GAAoBF,aAAcC,CAAAA,MAAlC,EAA0CC,CAAA,EAA1C;AACE,UAAIF,aAAA,CAAcE,CAAd,CAAJ,IAAwB,IAAxB;AACE,eAAO,KAAP;AADF;AADF;AAKA,WAAO,IAAP;AAN6C;AAQ/C,SAAO,KAAP;AAX8D,CAAhE;AAgBA5B,IAAKI,CAAAA,GAAIC,CAAAA,gBAAiBQ,CAAAA,SAAUgB,CAAAA,eAApC,GAAsDC,QAAQ,EAAG;AAE/D9B,MAAKI,CAAAA,GAAIC,CAAAA,gBAAiB0B,CAAAA,WAAYF,CAAAA,eAAgBpB,CAAAA,IAAtD,CAA2D,IAA3D,CAAA;AAEA,MAAKC,CAAAA,KAAL,GAAa,IAAb;AACA,MAAKC,CAAAA,cAAL,GAAsB,IAAtB;AAL+D,CAAjE;;\",\n\"sources\":[\"goog/net/bulkloaderhelper.js\"],\n\"sourcesContent\":[\"/**\\n * @license\\n * Copyright The Closure Library Authors.\\n * SPDX-License-Identifier: Apache-2.0\\n */\\n\\n/**\\n * @fileoverview Helper class to load a list of URIs in bulk. All URIs\\n * must be a successfully loaded in order for the entire load to be considered\\n * a success.\\n */\\n\\ngoog.provide('goog.net.BulkLoaderHelper');\\n\\ngoog.require('goog.Disposable');\\ngoog.requireType('goog.Uri');\\n\\n\\n\\n/**\\n * Helper class used to load multiple URIs.\\n * @param {Array<string|goog.Uri>} uris The URIs to load.\\n * @constructor\\n * @extends {goog.Disposable}\\n * @final\\n */\\ngoog.net.BulkLoaderHelper = function(uris) {\\n  'use strict';\\n  goog.Disposable.call(this);\\n\\n  /**\\n   * The URIs to load.\\n   * @type {Array<string|goog.Uri>}\\n   * @private\\n   */\\n  this.uris_ = uris;\\n\\n  /**\\n   * The response from the XHR's.\\n   * @type {Array<string>}\\n   * @private\\n   */\\n  this.responseTexts_ = [];\\n};\\ngoog.inherits(goog.net.BulkLoaderHelper, goog.Disposable);\\n\\n\\n\\n/**\\n * Gets the URI by id.\\n * @param {number} id The id.\\n * @return {string|goog.Uri} The URI specified by the id.\\n */\\ngoog.net.BulkLoaderHelper.prototype.getUri = function(id) {\\n  'use strict';\\n  return this.uris_[id];\\n};\\n\\n\\n/**\\n * Gets the URIs.\\n * @return {Array<string|goog.Uri>} The URIs.\\n */\\ngoog.net.BulkLoaderHelper.prototype.getUris = function() {\\n  'use strict';\\n  return this.uris_;\\n};\\n\\n\\n/**\\n * Gets the response texts.\\n * @return {Array<string>} The response texts.\\n */\\ngoog.net.BulkLoaderHelper.prototype.getResponseTexts = function() {\\n  'use strict';\\n  return this.responseTexts_;\\n};\\n\\n\\n/**\\n * Sets the response text by id.\\n * @param {number} id The id.\\n * @param {string} responseText The response texts.\\n */\\ngoog.net.BulkLoaderHelper.prototype.setResponseText = function(\\n    id, responseText) {\\n  'use strict';\\n  this.responseTexts_[id] = responseText;\\n};\\n\\n\\n/**\\n * Determines if the load of the URIs is complete.\\n * @return {boolean} TRUE iff the load is complete.\\n */\\ngoog.net.BulkLoaderHelper.prototype.isLoadComplete = function() {\\n  'use strict';\\n  const responseTexts = this.responseTexts_;\\n  if (responseTexts.length == this.uris_.length) {\\n    for (let i = 0; i < responseTexts.length; i++) {\\n      if (responseTexts[i] == null) {\\n        return false;\\n      }\\n    }\\n    return true;\\n  }\\n  return false;\\n};\\n\\n\\n/** @override */\\ngoog.net.BulkLoaderHelper.prototype.disposeInternal = function() {\\n  'use strict';\\n  goog.net.BulkLoaderHelper.superClass_.disposeInternal.call(this);\\n\\n  this.uris_ = null;\\n  this.responseTexts_ = null;\\n};\\n\"],\n\"names\":[\"goog\",\"provide\",\"require\",\"requireType\",\"net\",\"BulkLoaderHelper\",\"goog.net.BulkLoaderHelper\",\"uris\",\"Disposable\",\"call\",\"uris_\",\"responseTexts_\",\"inherits\",\"prototype\",\"getUri\",\"goog.net.BulkLoaderHelper.prototype.getUri\",\"id\",\"getUris\",\"goog.net.BulkLoaderHelper.prototype.getUris\",\"getResponseTexts\",\"goog.net.BulkLoaderHelper.prototype.getResponseTexts\",\"setResponseText\",\"goog.net.BulkLoaderHelper.prototype.setResponseText\",\"responseText\",\"isLoadComplete\",\"goog.net.BulkLoaderHelper.prototype.isLoadComplete\",\"responseTexts\",\"length\",\"i\",\"disposeInternal\",\"goog.net.BulkLoaderHelper.prototype.disposeInternal\",\"superClass_\"]\n}\n"]