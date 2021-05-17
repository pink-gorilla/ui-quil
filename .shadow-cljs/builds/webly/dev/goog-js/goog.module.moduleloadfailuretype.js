["^ ","~:resource-id",["~:shadow.build.classpath/resource","goog/module/moduleloadfailuretype.js"],"~:js","goog.loadModule(function(exports) {\n  \"use strict\";\n  goog.module(\"goog.module.ModuleLoadFailureType\");\n  goog.module.declareLegacyNamespace();\n  exports = {UNAUTHORIZED:0, CONSECUTIVE_FAILURES:1, TIMEOUT:2, OLD_CODE_GONE:3, INIT_ERROR:4};\n  exports.getReadableError = function(ft) {\n    if (ft === null) {\n      return \"No error type specified\";\n    }\n    switch(ft) {\n      case exports.UNAUTHORIZED:\n        return \"Unauthorized\";\n      case exports.CONSECUTIVE_FAILURES:\n        return \"Consecutive load failures\";\n      case exports.TIMEOUT:\n        return \"Timed out\";\n      case exports.OLD_CODE_GONE:\n        return \"Out of date module id\";\n      case exports.INIT_ERROR:\n        return \"Init error\";\n      default:\n        return `Unknown failure type ${ft}`;\n    }\n  };\n  return exports;\n});\n","~:source","/**\n * @license\n * Copyright The Closure Library Authors.\n * SPDX-License-Identifier: Apache-2.0\n */\n\n/**\n * @fileoverview The possible reasons for a module load failure callback being\n * fired. Moved to a separate file to allow it to be used across packages.\n */\n\ngoog.module('goog.module.ModuleLoadFailureType');\ngoog.module.declareLegacyNamespace();\n\n/**\n * The possible reasons for a module load failure callback being fired.\n * @enum {number}\n */\nexports = {\n  /** 401 Status. */\n  UNAUTHORIZED: 0,\n\n  /** Error status (not 401) returned multiple times. */\n  CONSECUTIVE_FAILURES: 1,\n\n  /** Request timeout. */\n  TIMEOUT: 2,\n\n  /** 410 status, old code gone. */\n  OLD_CODE_GONE: 3,\n\n  /** The onLoad callbacks failed. */\n  INIT_ERROR: 4\n};\n\n/**\n * Gets a human readable error message for a FailureType.\n * @param {?goog.module.ModuleLoadFailureType} ft A failure type.\n * @return {string} The readable error message.\n */\nexports.getReadableError = function(ft) {\n  if (ft === null) {\n    return 'No error type specified';\n  }\n  switch (ft) {\n    case exports.UNAUTHORIZED:\n      return 'Unauthorized';\n    case exports.CONSECUTIVE_FAILURES:\n      return 'Consecutive load failures';\n    case exports.TIMEOUT:\n      return 'Timed out';\n    case exports.OLD_CODE_GONE:\n      return 'Out of date module id';\n    case exports.INIT_ERROR:\n      return 'Init error';\n    default:\n      return `Unknown failure type ${ft}`;\n  }\n};\n","~:compiled-at",1621210407298,"~:source-map-json","{\n\"version\":3,\n\"file\":\"goog.module.moduleloadfailuretype.js\",\n\"lineCount\":27,\n\"mappings\":\"AAWA,IAAA,CAAA,UAAA,CAAA,QAAA,CAAA,OAAA,CAAA;AAAA,cAAA;AAAAA,MAAKC,CAAAA,MAAL,CAAY,mCAAZ,CAAA;AACAD,MAAKC,CAAAA,MAAOC,CAAAA,sBAAZ,EAAA;AAMAC,SAAA,GAAU,CAERC,aAAc,CAFN,EAKRC,qBAAsB,CALd,EAQRC,QAAS,CARD,EAWRC,cAAe,CAXP,EAcRC,WAAY,CAdJ,CAAV;AAsBAL,SAAQM,CAAAA,gBAAR,GAA2BC,QAAQ,CAACC,EAAD,CAAK;AACtC,QAAIA,EAAJ,KAAW,IAAX;AACE,aAAO,yBAAP;AADF;AAGA,WAAQA,EAAR;AACE,WAAKR,OAAQC,CAAAA,YAAb;AACE,eAAO,cAAP;AACF,WAAKD,OAAQE,CAAAA,oBAAb;AACE,eAAO,2BAAP;AACF,WAAKF,OAAQG,CAAAA,OAAb;AACE,eAAO,WAAP;AACF,WAAKH,OAAQI,CAAAA,aAAb;AACE,eAAO,uBAAP;AACF,WAAKJ,OAAQK,CAAAA,UAAb;AACE,eAAO,YAAP;AACF;AACE,eAAO,wBAAwBG,EAAxB,EAAP;AAZJ;AAJsC,GAAxC;AA7BA,SAAA,OAAA;AAAA,CAAA,CAAA;;\",\n\"sources\":[\"goog/module/moduleloadfailuretype.js\"],\n\"sourcesContent\":[\"/**\\n * @license\\n * Copyright The Closure Library Authors.\\n * SPDX-License-Identifier: Apache-2.0\\n */\\n\\n/**\\n * @fileoverview The possible reasons for a module load failure callback being\\n * fired. Moved to a separate file to allow it to be used across packages.\\n */\\n\\ngoog.module('goog.module.ModuleLoadFailureType');\\ngoog.module.declareLegacyNamespace();\\n\\n/**\\n * The possible reasons for a module load failure callback being fired.\\n * @enum {number}\\n */\\nexports = {\\n  /** 401 Status. */\\n  UNAUTHORIZED: 0,\\n\\n  /** Error status (not 401) returned multiple times. */\\n  CONSECUTIVE_FAILURES: 1,\\n\\n  /** Request timeout. */\\n  TIMEOUT: 2,\\n\\n  /** 410 status, old code gone. */\\n  OLD_CODE_GONE: 3,\\n\\n  /** The onLoad callbacks failed. */\\n  INIT_ERROR: 4\\n};\\n\\n/**\\n * Gets a human readable error message for a FailureType.\\n * @param {?goog.module.ModuleLoadFailureType} ft A failure type.\\n * @return {string} The readable error message.\\n */\\nexports.getReadableError = function(ft) {\\n  if (ft === null) {\\n    return 'No error type specified';\\n  }\\n  switch (ft) {\\n    case exports.UNAUTHORIZED:\\n      return 'Unauthorized';\\n    case exports.CONSECUTIVE_FAILURES:\\n      return 'Consecutive load failures';\\n    case exports.TIMEOUT:\\n      return 'Timed out';\\n    case exports.OLD_CODE_GONE:\\n      return 'Out of date module id';\\n    case exports.INIT_ERROR:\\n      return 'Init error';\\n    default:\\n      return `Unknown failure type ${ft}`;\\n  }\\n};\\n\"],\n\"names\":[\"goog\",\"module\",\"declareLegacyNamespace\",\"exports\",\"UNAUTHORIZED\",\"CONSECUTIVE_FAILURES\",\"TIMEOUT\",\"OLD_CODE_GONE\",\"INIT_ERROR\",\"getReadableError\",\"exports.getReadableError\",\"ft\"]\n}\n"]