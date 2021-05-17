["^ ","~:resource-id",["~:shadow.build.classpath/resource","goog/memoize/memoize.js"],"~:js","goog.loadModule(function(exports) {\n  \"use strict\";\n  goog.module(\"goog.memoize\");\n  goog.module.declareLegacyNamespace();\n  const reflect = goog.require(\"goog.reflect\");\n  const MODULE_LOCAL_CACHE = new WeakMap;\n  function memoize(f, serializer = simpleSerializer) {\n    const uidF = goog.getUid(f);\n    const keyFn = ([that, ...args]) => serializer(uidF, args);\n    const valueFn = ([that, ...args]) => f.apply(that, args);\n    const memoizedFn = function(...args) {\n      if (memoize.ENABLE_MEMOIZE) {\n        const cacheKey = this || goog.global;\n        let cache = MODULE_LOCAL_CACHE.get(cacheKey);\n        if (!cache) {\n          cache = {};\n          MODULE_LOCAL_CACHE.set(cacheKey, cache);\n        }\n        return reflect.cache(cache, [this, ...args], valueFn, keyFn);\n      } else {\n        return f.apply(this, args);\n      }\n    };\n    return memoizedFn;\n  }\n  exports = memoize;\n  memoize.ENABLE_MEMOIZE = goog.define(\"goog.memoize.ENABLE_MEMOIZE\", true);\n  const clearCache = function(cacheOwner) {\n    MODULE_LOCAL_CACHE.set(cacheOwner || goog.global, {});\n  };\n  exports.clearCache = clearCache;\n  const simpleSerializer = function(functionUid, args) {\n    const context = [functionUid];\n    for (let i = args.length - 1; i >= 0; --i) {\n      context.push(typeof args[i], args[i]);\n    }\n    return context.join(\"\\x0B\");\n  };\n  exports.simpleSerializer = simpleSerializer;\n  return exports;\n});\n","~:source","/**\n * @license\n * Copyright The Closure Library Authors.\n * SPDX-License-Identifier: Apache-2.0\n */\n\n/**\n * @fileoverview Tool for caching the result of expensive deterministic\n * functions.\n *\n * @see http://en.wikipedia.org/wiki/Memoization\n */\n\ngoog.module('goog.memoize');\ngoog.module.declareLegacyNamespace();\n\nconst reflect = goog.require('goog.reflect');\n\n/**\n * Note that when using the WeakMap polyfill users may run into issues\n * where memoize is unable to store a cache properly (as the polyfill tries to\n * store the values on the key object as properties.). The workaround is to not\n * memoize onto a sealed context if the code needs to run in browsers where\n * WeakMap is not available (IE<=10 as an example).\n * @type {!WeakMap<!Object, !Object>}\n */\nconst MODULE_LOCAL_CACHE = new WeakMap();\n\n/**\n * Decorator around functions that caches the inner function's return values.\n *\n * To cache parameterless functions, see goog.functions.cacheReturnValue.\n *\n * @param {Function} f The function to wrap. Its return value may only depend\n *     on its arguments and 'this' context. There may be further restrictions\n *     on the arguments depending on the capabilities of the serializer used.\n * @param {function(number, !IArrayLike<?>): string=} serializer A function to\n *     serialize f's arguments. It must have the same signature as\n *     goog.memoize.simpleSerializer. It defaults to that function.\n * @return {!Function} The wrapped function.\n */\nfunction memoize(f, serializer = simpleSerializer) {\n  const uidF = goog.getUid(f);\n  const keyFn = ([that, ...args]) => serializer(uidF, args);\n  const valueFn = ([that, ...args]) => f.apply(that, args);\n\n  /**\n   * @this {Object} The object whose function is being wrapped.\n   * @param {...*} args\n   * @return {?} the return value of the original function.\n   */\n  const memoizedFn = function(...args) {\n    if (memoize.ENABLE_MEMOIZE) {\n      const cacheKey = this || goog.global;\n      let cache = MODULE_LOCAL_CACHE.get(cacheKey);\n      if (!cache) {\n        cache = {};\n        MODULE_LOCAL_CACHE.set(cacheKey, cache);\n      }\n      return reflect.cache(cache, [this, ...args], valueFn, keyFn);\n    } else {\n      return f.apply(this, args);\n    }\n  };\n  return memoizedFn;\n}\nexports = memoize;\n\n/**\n * @define {boolean} Flag to disable memoization in unit tests.\n */\nmemoize.ENABLE_MEMOIZE = goog.define('goog.memoize.ENABLE_MEMOIZE', true);\n\n\n/**\n * Clears the memoization cache on the given object.\n * @param {?Object} cacheOwner The owner of the cache.\n */\nconst clearCache = function(cacheOwner) {\n  MODULE_LOCAL_CACHE.set(cacheOwner || goog.global, {});\n};\nexports.clearCache = clearCache;\n\n\n/**\n * Simple and fast argument serializer function for goog.memoize.\n * Supports string, number, boolean, null and undefined arguments. Doesn't\n * support \\x0B characters in the strings.\n * @param {number} functionUid Unique identifier of the function whose result\n *     is cached.\n * @param {!IArrayLike<?>} args The arguments that the function to memoize is\n *     called with. Note: it is an array-like object, because it supports\n *     indexing and has the length property.\n * @return {string} The list of arguments with type information concatenated\n *     with the functionUid argument, serialized as \\x0B-separated string.\n */\nconst simpleSerializer = function(functionUid, args) {\n  const context = [functionUid];\n  for (let i = args.length - 1; i >= 0; --i) {\n    context.push(typeof args[i], args[i]);\n  }\n  return context.join('\\x0B');\n};\nexports.simpleSerializer = simpleSerializer;\n","~:compiled-at",1621210407478,"~:source-map-json","{\n\"version\":3,\n\"file\":\"goog.memoize.memoize.js\",\n\"lineCount\":42,\n\"mappings\":\"AAaA,IAAA,CAAA,UAAA,CAAA,QAAA,CAAA,OAAA,CAAA;AAAA,cAAA;AAAAA,MAAKC,CAAAA,MAAL,CAAY,cAAZ,CAAA;AACAD,MAAKC,CAAAA,MAAOC,CAAAA,sBAAZ,EAAA;AAEA,QAAMC,UAAUH,IAAKI,CAAAA,OAAL,CAAa,cAAb,CAAhB;AAUA,QAAMC,qBAAqB,IAAIC,OAA/B;AAeAC,UAASA,QAAO,CAACC,CAAD,EAAIC,UAAA,GAAaC,gBAAjB,CAAmC;AACjD,UAAMC,OAAOX,IAAKY,CAAAA,MAAL,CAAYJ,CAAZ,CAAb;AACA,UAAMK,QAAQ,CAAC,CAACC,IAAD,EAAO,GAAGC,IAAV,CAAD,CAAAF,IAAqBJ,UAAA,CAAWE,IAAX,EAAiBI,IAAjB,CAAnC;AACA,UAAMC,UAAU,CAAC,CAACF,IAAD,EAAO,GAAGC,IAAV,CAAD,CAAAC,IAAqBR,CAAES,CAAAA,KAAF,CAAQH,IAAR,EAAcC,IAAd,CAArC;AAOA,UAAMG,aAAaA,QAAQ,CAAC,GAAGH,IAAJ,CAAU;AACnC,UAAIR,OAAQY,CAAAA,cAAZ,CAA4B;AAC1B,cAAMC,WAAW,IAAXA,IAAmBpB,IAAKqB,CAAAA,MAA9B;AACA,YAAIC,QAAQjB,kBAAmBkB,CAAAA,GAAnB,CAAuBH,QAAvB,CAAZ;AACA,YAAI,CAACE,KAAL,CAAY;AACVA,eAAA,GAAQ,EAAR;AACAjB,4BAAmBmB,CAAAA,GAAnB,CAAuBJ,QAAvB,EAAiCE,KAAjC,CAAA;AAFU;AAIZ,eAAOnB,OAAQmB,CAAAA,KAAR,CAAcA,KAAd,EAAqB,CAAC,IAAD,EAAO,GAAGP,IAAV,CAArB,EAAsCC,OAAtC,EAA+CH,KAA/C,CAAP;AAP0B,OAA5B;AASE,eAAOL,CAAES,CAAAA,KAAF,CAAQ,IAAR,EAAcF,IAAd,CAAP;AATF;AADmC,KAArC;AAaA,WAAOG,UAAP;AAvBiD;AAyBnDO,SAAA,GAAUlB,OAAV;AAKAA,SAAQY,CAAAA,cAAR,GAAyBnB,IAAK0B,CAAAA,MAAL,CAAY,6BAAZ,EAA2C,IAA3C,CAAzB;AAOA,QAAMC,aAAaA,QAAQ,CAACC,UAAD,CAAa;AACtCvB,sBAAmBmB,CAAAA,GAAnB,CAAuBI,UAAvB,IAAqC5B,IAAKqB,CAAAA,MAA1C,EAAkD,EAAlD,CAAA;AADsC,GAAxC;AAGAI,SAAQE,CAAAA,UAAR,GAAqBA,UAArB;AAeA,QAAMjB,mBAAmBA,QAAQ,CAACmB,WAAD,EAAcd,IAAd,CAAoB;AACnD,UAAMe,UAAU,CAACD,WAAD,CAAhB;AACA,SAAK,IAAIE,IAAIhB,IAAKiB,CAAAA,MAATD,GAAkB,CAA3B,EAA8BA,CAA9B,IAAmC,CAAnC,EAAsC,EAAEA,CAAxC;AACED,aAAQG,CAAAA,IAAR,CAAa,MAAOlB,KAAA,CAAKgB,CAAL,CAApB,EAA6BhB,IAAA,CAAKgB,CAAL,CAA7B,CAAA;AADF;AAGA,WAAOD,OAAQI,CAAAA,IAAR,CAAa,MAAb,CAAP;AALmD,GAArD;AAOAT,SAAQf,CAAAA,gBAAR,GAA2BA,gBAA3B;AA1FA,SAAA,OAAA;AAAA,CAAA,CAAA;;\",\n\"sources\":[\"goog/memoize/memoize.js\"],\n\"sourcesContent\":[\"/**\\n * @license\\n * Copyright The Closure Library Authors.\\n * SPDX-License-Identifier: Apache-2.0\\n */\\n\\n/**\\n * @fileoverview Tool for caching the result of expensive deterministic\\n * functions.\\n *\\n * @see http://en.wikipedia.org/wiki/Memoization\\n */\\n\\ngoog.module('goog.memoize');\\ngoog.module.declareLegacyNamespace();\\n\\nconst reflect = goog.require('goog.reflect');\\n\\n/**\\n * Note that when using the WeakMap polyfill users may run into issues\\n * where memoize is unable to store a cache properly (as the polyfill tries to\\n * store the values on the key object as properties.). The workaround is to not\\n * memoize onto a sealed context if the code needs to run in browsers where\\n * WeakMap is not available (IE<=10 as an example).\\n * @type {!WeakMap<!Object, !Object>}\\n */\\nconst MODULE_LOCAL_CACHE = new WeakMap();\\n\\n/**\\n * Decorator around functions that caches the inner function's return values.\\n *\\n * To cache parameterless functions, see goog.functions.cacheReturnValue.\\n *\\n * @param {Function} f The function to wrap. Its return value may only depend\\n *     on its arguments and 'this' context. There may be further restrictions\\n *     on the arguments depending on the capabilities of the serializer used.\\n * @param {function(number, !IArrayLike<?>): string=} serializer A function to\\n *     serialize f's arguments. It must have the same signature as\\n *     goog.memoize.simpleSerializer. It defaults to that function.\\n * @return {!Function} The wrapped function.\\n */\\nfunction memoize(f, serializer = simpleSerializer) {\\n  const uidF = goog.getUid(f);\\n  const keyFn = ([that, ...args]) => serializer(uidF, args);\\n  const valueFn = ([that, ...args]) => f.apply(that, args);\\n\\n  /**\\n   * @this {Object} The object whose function is being wrapped.\\n   * @param {...*} args\\n   * @return {?} the return value of the original function.\\n   */\\n  const memoizedFn = function(...args) {\\n    if (memoize.ENABLE_MEMOIZE) {\\n      const cacheKey = this || goog.global;\\n      let cache = MODULE_LOCAL_CACHE.get(cacheKey);\\n      if (!cache) {\\n        cache = {};\\n        MODULE_LOCAL_CACHE.set(cacheKey, cache);\\n      }\\n      return reflect.cache(cache, [this, ...args], valueFn, keyFn);\\n    } else {\\n      return f.apply(this, args);\\n    }\\n  };\\n  return memoizedFn;\\n}\\nexports = memoize;\\n\\n/**\\n * @define {boolean} Flag to disable memoization in unit tests.\\n */\\nmemoize.ENABLE_MEMOIZE = goog.define('goog.memoize.ENABLE_MEMOIZE', true);\\n\\n\\n/**\\n * Clears the memoization cache on the given object.\\n * @param {?Object} cacheOwner The owner of the cache.\\n */\\nconst clearCache = function(cacheOwner) {\\n  MODULE_LOCAL_CACHE.set(cacheOwner || goog.global, {});\\n};\\nexports.clearCache = clearCache;\\n\\n\\n/**\\n * Simple and fast argument serializer function for goog.memoize.\\n * Supports string, number, boolean, null and undefined arguments. Doesn't\\n * support \\\\x0B characters in the strings.\\n * @param {number} functionUid Unique identifier of the function whose result\\n *     is cached.\\n * @param {!IArrayLike<?>} args The arguments that the function to memoize is\\n *     called with. Note: it is an array-like object, because it supports\\n *     indexing and has the length property.\\n * @return {string} The list of arguments with type information concatenated\\n *     with the functionUid argument, serialized as \\\\x0B-separated string.\\n */\\nconst simpleSerializer = function(functionUid, args) {\\n  const context = [functionUid];\\n  for (let i = args.length - 1; i >= 0; --i) {\\n    context.push(typeof args[i], args[i]);\\n  }\\n  return context.join('\\\\x0B');\\n};\\nexports.simpleSerializer = simpleSerializer;\\n\"],\n\"names\":[\"goog\",\"module\",\"declareLegacyNamespace\",\"reflect\",\"require\",\"MODULE_LOCAL_CACHE\",\"WeakMap\",\"memoize\",\"f\",\"serializer\",\"simpleSerializer\",\"uidF\",\"getUid\",\"keyFn\",\"that\",\"args\",\"valueFn\",\"apply\",\"memoizedFn\",\"ENABLE_MEMOIZE\",\"cacheKey\",\"global\",\"cache\",\"get\",\"set\",\"exports\",\"define\",\"clearCache\",\"cacheOwner\",\"functionUid\",\"context\",\"i\",\"length\",\"push\",\"join\"]\n}\n"]