["^ ","~:resource-id",["~:shadow.build.classpath/resource","goog/structs/structs.js"],"~:js","goog.provide(\"goog.structs\");\ngoog.require(\"goog.array\");\ngoog.require(\"goog.object\");\ngoog.structs.getCount = function(col) {\n  if (col.getCount && typeof col.getCount == \"function\") {\n    return col.getCount();\n  }\n  if (goog.isArrayLike(col) || typeof col === \"string\") {\n    return col.length;\n  }\n  return goog.object.getCount(col);\n};\ngoog.structs.getValues = function(col) {\n  if (col.getValues && typeof col.getValues == \"function\") {\n    return col.getValues();\n  }\n  if (typeof col === \"string\") {\n    return col.split(\"\");\n  }\n  if (goog.isArrayLike(col)) {\n    var rv = [];\n    var l = col.length;\n    for (var i = 0; i < l; i++) {\n      rv.push(col[i]);\n    }\n    return rv;\n  }\n  return goog.object.getValues(col);\n};\ngoog.structs.getKeys = function(col) {\n  if (col.getKeys && typeof col.getKeys == \"function\") {\n    return col.getKeys();\n  }\n  if (col.getValues && typeof col.getValues == \"function\") {\n    return undefined;\n  }\n  if (goog.isArrayLike(col) || typeof col === \"string\") {\n    var rv = [];\n    var l = col.length;\n    for (var i = 0; i < l; i++) {\n      rv.push(i);\n    }\n    return rv;\n  }\n  return goog.object.getKeys(col);\n};\ngoog.structs.contains = function(col, val) {\n  if (col.contains && typeof col.contains == \"function\") {\n    return col.contains(val);\n  }\n  if (col.containsValue && typeof col.containsValue == \"function\") {\n    return col.containsValue(val);\n  }\n  if (goog.isArrayLike(col) || typeof col === \"string\") {\n    return goog.array.contains(col, val);\n  }\n  return goog.object.containsValue(col, val);\n};\ngoog.structs.isEmpty = function(col) {\n  if (col.isEmpty && typeof col.isEmpty == \"function\") {\n    return col.isEmpty();\n  }\n  if (goog.isArrayLike(col) || typeof col === \"string\") {\n    return goog.array.isEmpty(col);\n  }\n  return goog.object.isEmpty(col);\n};\ngoog.structs.clear = function(col) {\n  if (col.clear && typeof col.clear == \"function\") {\n    col.clear();\n  } else {\n    if (goog.isArrayLike(col)) {\n      goog.array.clear(col);\n    } else {\n      goog.object.clear(col);\n    }\n  }\n};\ngoog.structs.forEach = function(col, f, opt_obj) {\n  if (col.forEach && typeof col.forEach == \"function\") {\n    col.forEach(f, opt_obj);\n  } else {\n    if (goog.isArrayLike(col) || typeof col === \"string\") {\n      goog.array.forEach(col, f, opt_obj);\n    } else {\n      var keys = goog.structs.getKeys(col);\n      var values = goog.structs.getValues(col);\n      var l = values.length;\n      for (var i = 0; i < l; i++) {\n        f.call(opt_obj, values[i], keys && keys[i], col);\n      }\n    }\n  }\n};\ngoog.structs.filter = function(col, f, opt_obj) {\n  if (typeof col.filter == \"function\") {\n    return col.filter(f, opt_obj);\n  }\n  if (goog.isArrayLike(col) || typeof col === \"string\") {\n    return goog.array.filter(col, f, opt_obj);\n  }\n  var rv;\n  var keys = goog.structs.getKeys(col);\n  var values = goog.structs.getValues(col);\n  var l = values.length;\n  if (keys) {\n    rv = {};\n    for (var i = 0; i < l; i++) {\n      if (f.call(opt_obj, values[i], keys[i], col)) {\n        rv[keys[i]] = values[i];\n      }\n    }\n  } else {\n    rv = [];\n    for (var i = 0; i < l; i++) {\n      if (f.call(opt_obj, values[i], undefined, col)) {\n        rv.push(values[i]);\n      }\n    }\n  }\n  return rv;\n};\ngoog.structs.map = function(col, f, opt_obj) {\n  if (typeof col.map == \"function\") {\n    return col.map(f, opt_obj);\n  }\n  if (goog.isArrayLike(col) || typeof col === \"string\") {\n    return goog.array.map(col, f, opt_obj);\n  }\n  var rv;\n  var keys = goog.structs.getKeys(col);\n  var values = goog.structs.getValues(col);\n  var l = values.length;\n  if (keys) {\n    rv = {};\n    for (var i = 0; i < l; i++) {\n      rv[keys[i]] = f.call(opt_obj, values[i], keys[i], col);\n    }\n  } else {\n    rv = [];\n    for (var i = 0; i < l; i++) {\n      rv[i] = f.call(opt_obj, values[i], undefined, col);\n    }\n  }\n  return rv;\n};\ngoog.structs.some = function(col, f, opt_obj) {\n  if (typeof col.some == \"function\") {\n    return col.some(f, opt_obj);\n  }\n  if (goog.isArrayLike(col) || typeof col === \"string\") {\n    return goog.array.some(col, f, opt_obj);\n  }\n  var keys = goog.structs.getKeys(col);\n  var values = goog.structs.getValues(col);\n  var l = values.length;\n  for (var i = 0; i < l; i++) {\n    if (f.call(opt_obj, values[i], keys && keys[i], col)) {\n      return true;\n    }\n  }\n  return false;\n};\ngoog.structs.every = function(col, f, opt_obj) {\n  if (typeof col.every == \"function\") {\n    return col.every(f, opt_obj);\n  }\n  if (goog.isArrayLike(col) || typeof col === \"string\") {\n    return goog.array.every(col, f, opt_obj);\n  }\n  var keys = goog.structs.getKeys(col);\n  var values = goog.structs.getValues(col);\n  var l = values.length;\n  for (var i = 0; i < l; i++) {\n    if (!f.call(opt_obj, values[i], keys && keys[i], col)) {\n      return false;\n    }\n  }\n  return true;\n};\n","~:source","/**\n * @license\n * Copyright The Closure Library Authors.\n * SPDX-License-Identifier: Apache-2.0\n */\n\n/**\n * @fileoverview Generics method for collection-like classes and objects.\n *\n *\n * This file contains functions to work with collections. It supports using\n * Map, Set, Array and Object and other classes that implement collection-like\n * methods.\n * @suppress {strictMissingProperties}\n */\n\n\ngoog.provide('goog.structs');\n\ngoog.require('goog.array');\ngoog.require('goog.object');\n\n\n// We treat an object as a dictionary if it has getKeys or it is an object that\n// isn't arrayLike.\n\n\n/**\n * Returns the number of values in the collection-like object.\n * @param {Object} col The collection-like object.\n * @return {number} The number of values in the collection-like object.\n */\ngoog.structs.getCount = function(col) {\n  'use strict';\n  if (col.getCount && typeof col.getCount == 'function') {\n    return col.getCount();\n  }\n  if (goog.isArrayLike(col) || typeof col === 'string') {\n    return col.length;\n  }\n  return goog.object.getCount(col);\n};\n\n\n/**\n * Returns the values of the collection-like object.\n * @param {Object} col The collection-like object.\n * @return {!Array<?>} The values in the collection-like object.\n */\ngoog.structs.getValues = function(col) {\n  'use strict';\n  if (col.getValues && typeof col.getValues == 'function') {\n    return col.getValues();\n  }\n  if (typeof col === 'string') {\n    return col.split('');\n  }\n  if (goog.isArrayLike(col)) {\n    var rv = [];\n    var l = col.length;\n    for (var i = 0; i < l; i++) {\n      rv.push(col[i]);\n    }\n    return rv;\n  }\n  return goog.object.getValues(col);\n};\n\n\n/**\n * Returns the keys of the collection. Some collections have no notion of\n * keys/indexes and this function will return undefined in those cases.\n * @param {Object} col The collection-like object.\n * @return {!Array|undefined} The keys in the collection.\n */\ngoog.structs.getKeys = function(col) {\n  'use strict';\n  if (col.getKeys && typeof col.getKeys == 'function') {\n    return col.getKeys();\n  }\n  // if we have getValues but no getKeys we know this is a key-less collection\n  if (col.getValues && typeof col.getValues == 'function') {\n    return undefined;\n  }\n  if (goog.isArrayLike(col) || typeof col === 'string') {\n    var rv = [];\n    var l = col.length;\n    for (var i = 0; i < l; i++) {\n      rv.push(i);\n    }\n    return rv;\n  }\n\n  return goog.object.getKeys(col);\n};\n\n\n/**\n * Whether the collection contains the given value. This is O(n) and uses\n * equals (==) to test the existence.\n * @param {Object} col The collection-like object.\n * @param {*} val The value to check for.\n * @return {boolean} True if the map contains the value.\n */\ngoog.structs.contains = function(col, val) {\n  'use strict';\n  if (col.contains && typeof col.contains == 'function') {\n    return col.contains(val);\n  }\n  if (col.containsValue && typeof col.containsValue == 'function') {\n    return col.containsValue(val);\n  }\n  if (goog.isArrayLike(col) || typeof col === 'string') {\n    return goog.array.contains(/** @type {!Array<?>} */ (col), val);\n  }\n  return goog.object.containsValue(col, val);\n};\n\n\n/**\n * Whether the collection is empty.\n * @param {Object} col The collection-like object.\n * @return {boolean} True if empty.\n */\ngoog.structs.isEmpty = function(col) {\n  'use strict';\n  if (col.isEmpty && typeof col.isEmpty == 'function') {\n    return col.isEmpty();\n  }\n\n  // We do not use goog.string.isEmptyOrWhitespace because here we treat the\n  // string as\n  // collection and as such even whitespace matters\n\n  if (goog.isArrayLike(col) || typeof col === 'string') {\n    return goog.array.isEmpty(/** @type {!Array<?>} */ (col));\n  }\n  return goog.object.isEmpty(col);\n};\n\n\n/**\n * Removes all the elements from the collection.\n * @param {Object} col The collection-like object.\n */\ngoog.structs.clear = function(col) {\n  'use strict';\n  // NOTE(arv): This should not contain strings because strings are immutable\n  if (col.clear && typeof col.clear == 'function') {\n    col.clear();\n  } else if (goog.isArrayLike(col)) {\n    goog.array.clear(/** @type {IArrayLike<?>} */ (col));\n  } else {\n    goog.object.clear(col);\n  }\n};\n\n\n/**\n * Calls a function for each value in a collection. The function takes\n * three arguments; the value, the key and the collection.\n *\n * @param {S} col The collection-like object.\n * @param {function(this:T,?,?,S):?} f The function to call for every value.\n *     This function takes\n *     3 arguments (the value, the key or undefined if the collection has no\n *     notion of keys, and the collection) and the return value is irrelevant.\n * @param {T=} opt_obj The object to be used as the value of 'this'\n *     within `f`.\n * @template T,S\n * @deprecated Use a more specific method, e.g. goog.array.forEach,\n *     goog.object.forEach, or for-of.\n */\ngoog.structs.forEach = function(col, f, opt_obj) {\n  'use strict';\n  if (col.forEach && typeof col.forEach == 'function') {\n    col.forEach(f, opt_obj);\n  } else if (goog.isArrayLike(col) || typeof col === 'string') {\n    goog.array.forEach(/** @type {!Array<?>} */ (col), f, opt_obj);\n  } else {\n    var keys = goog.structs.getKeys(col);\n    var values = goog.structs.getValues(col);\n    var l = values.length;\n    for (var i = 0; i < l; i++) {\n      f.call(/** @type {?} */ (opt_obj), values[i], keys && keys[i], col);\n    }\n  }\n};\n\n\n/**\n * Calls a function for every value in the collection. When a call returns true,\n * adds the value to a new collection (Array is returned by default).\n *\n * @param {S} col The collection-like object.\n * @param {function(this:T,?,?,S):boolean} f The function to call for every\n *     value. This function takes\n *     3 arguments (the value, the key or undefined if the collection has no\n *     notion of keys, and the collection) and should return a Boolean. If the\n *     return value is true the value is added to the result collection. If it\n *     is false the value is not included.\n * @param {T=} opt_obj The object to be used as the value of 'this'\n *     within `f`.\n * @return {!Object|!Array<?>} A new collection where the passed values are\n *     present. If col is a key-less collection an array is returned.  If col\n *     has keys and values a plain old JS object is returned.\n * @template T,S\n */\ngoog.structs.filter = function(col, f, opt_obj) {\n  'use strict';\n  if (typeof col.filter == 'function') {\n    return col.filter(f, opt_obj);\n  }\n  if (goog.isArrayLike(col) || typeof col === 'string') {\n    return goog.array.filter(/** @type {!Array<?>} */ (col), f, opt_obj);\n  }\n\n  var rv;\n  var keys = goog.structs.getKeys(col);\n  var values = goog.structs.getValues(col);\n  var l = values.length;\n  if (keys) {\n    rv = {};\n    for (var i = 0; i < l; i++) {\n      if (f.call(/** @type {?} */ (opt_obj), values[i], keys[i], col)) {\n        rv[keys[i]] = values[i];\n      }\n    }\n  } else {\n    // We should not use goog.array.filter here since we want to make sure that\n    // the index is undefined as well as make sure that col is passed to the\n    // function.\n    rv = [];\n    for (var i = 0; i < l; i++) {\n      if (f.call(opt_obj, values[i], undefined, col)) {\n        rv.push(values[i]);\n      }\n    }\n  }\n  return rv;\n};\n\n\n/**\n * Calls a function for every value in the collection and adds the result into a\n * new collection (defaults to creating a new Array).\n *\n * @param {S} col The collection-like object.\n * @param {function(this:T,?,?,S):V} f The function to call for every value.\n *     This function takes 3 arguments (the value, the key or undefined if the\n *     collection has no notion of keys, and the collection) and should return\n *     something. The result will be used as the value in the new collection.\n * @param {T=} opt_obj  The object to be used as the value of 'this'\n *     within `f`.\n * @return {!Object<V>|!Array<V>} A new collection with the new values.  If\n *     col is a key-less collection an array is returned.  If col has keys and\n *     values a plain old JS object is returned.\n * @template T,S,V\n */\ngoog.structs.map = function(col, f, opt_obj) {\n  'use strict';\n  if (typeof col.map == 'function') {\n    return col.map(f, opt_obj);\n  }\n  if (goog.isArrayLike(col) || typeof col === 'string') {\n    return goog.array.map(/** @type {!Array<?>} */ (col), f, opt_obj);\n  }\n\n  var rv;\n  var keys = goog.structs.getKeys(col);\n  var values = goog.structs.getValues(col);\n  var l = values.length;\n  if (keys) {\n    rv = {};\n    for (var i = 0; i < l; i++) {\n      rv[keys[i]] = f.call(/** @type {?} */ (opt_obj), values[i], keys[i], col);\n    }\n  } else {\n    // We should not use goog.array.map here since we want to make sure that\n    // the index is undefined as well as make sure that col is passed to the\n    // function.\n    rv = [];\n    for (var i = 0; i < l; i++) {\n      rv[i] = f.call(/** @type {?} */ (opt_obj), values[i], undefined, col);\n    }\n  }\n  return rv;\n};\n\n\n/**\n * Calls f for each value in a collection. If any call returns true this returns\n * true (without checking the rest). If all returns false this returns false.\n *\n * @param {S} col The collection-like object.\n * @param {function(this:T,?,?,S):boolean} f The function to call for every\n *     value. This function takes 3 arguments (the value, the key or undefined\n *     if the collection has no notion of keys, and the collection) and should\n *     return a boolean.\n * @param {T=} opt_obj  The object to be used as the value of 'this'\n *     within `f`.\n * @return {boolean} True if any value passes the test.\n * @template T,S\n */\ngoog.structs.some = function(col, f, opt_obj) {\n  'use strict';\n  if (typeof col.some == 'function') {\n    return col.some(f, opt_obj);\n  }\n  if (goog.isArrayLike(col) || typeof col === 'string') {\n    return goog.array.some(/** @type {!Array<?>} */ (col), f, opt_obj);\n  }\n  var keys = goog.structs.getKeys(col);\n  var values = goog.structs.getValues(col);\n  var l = values.length;\n  for (var i = 0; i < l; i++) {\n    if (f.call(/** @type {?} */ (opt_obj), values[i], keys && keys[i], col)) {\n      return true;\n    }\n  }\n  return false;\n};\n\n\n/**\n * Calls f for each value in a collection. If all calls return true this return\n * true this returns true. If any returns false this returns false at this point\n *  and does not continue to check the remaining values.\n *\n * @param {S} col The collection-like object.\n * @param {function(this:T,?,?,S):boolean} f The function to call for every\n *     value. This function takes 3 arguments (the value, the key or\n *     undefined if the collection has no notion of keys, and the collection)\n *     and should return a boolean.\n * @param {T=} opt_obj  The object to be used as the value of 'this'\n *     within `f`.\n * @return {boolean} True if all key-value pairs pass the test.\n * @template T,S\n */\ngoog.structs.every = function(col, f, opt_obj) {\n  'use strict';\n  if (typeof col.every == 'function') {\n    return col.every(f, opt_obj);\n  }\n  if (goog.isArrayLike(col) || typeof col === 'string') {\n    return goog.array.every(/** @type {!Array<?>} */ (col), f, opt_obj);\n  }\n  var keys = goog.structs.getKeys(col);\n  var values = goog.structs.getValues(col);\n  var l = values.length;\n  for (var i = 0; i < l; i++) {\n    if (!f.call(/** @type {?} */ (opt_obj), values[i], keys && keys[i], col)) {\n      return false;\n    }\n  }\n  return true;\n};\n","~:compiled-at",1621210407026,"~:source-map-json","{\n\"version\":3,\n\"file\":\"goog.structs.structs.js\",\n\"lineCount\":181,\n\"mappings\":\"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\",\n\"sources\":[\"goog/structs/structs.js\"],\n\"sourcesContent\":[\"/**\\n * @license\\n * Copyright The Closure Library Authors.\\n * SPDX-License-Identifier: Apache-2.0\\n */\\n\\n/**\\n * @fileoverview Generics method for collection-like classes and objects.\\n *\\n *\\n * This file contains functions to work with collections. It supports using\\n * Map, Set, Array and Object and other classes that implement collection-like\\n * methods.\\n * @suppress {strictMissingProperties}\\n */\\n\\n\\ngoog.provide('goog.structs');\\n\\ngoog.require('goog.array');\\ngoog.require('goog.object');\\n\\n\\n// We treat an object as a dictionary if it has getKeys or it is an object that\\n// isn't arrayLike.\\n\\n\\n/**\\n * Returns the number of values in the collection-like object.\\n * @param {Object} col The collection-like object.\\n * @return {number} The number of values in the collection-like object.\\n */\\ngoog.structs.getCount = function(col) {\\n  'use strict';\\n  if (col.getCount && typeof col.getCount == 'function') {\\n    return col.getCount();\\n  }\\n  if (goog.isArrayLike(col) || typeof col === 'string') {\\n    return col.length;\\n  }\\n  return goog.object.getCount(col);\\n};\\n\\n\\n/**\\n * Returns the values of the collection-like object.\\n * @param {Object} col The collection-like object.\\n * @return {!Array<?>} The values in the collection-like object.\\n */\\ngoog.structs.getValues = function(col) {\\n  'use strict';\\n  if (col.getValues && typeof col.getValues == 'function') {\\n    return col.getValues();\\n  }\\n  if (typeof col === 'string') {\\n    return col.split('');\\n  }\\n  if (goog.isArrayLike(col)) {\\n    var rv = [];\\n    var l = col.length;\\n    for (var i = 0; i < l; i++) {\\n      rv.push(col[i]);\\n    }\\n    return rv;\\n  }\\n  return goog.object.getValues(col);\\n};\\n\\n\\n/**\\n * Returns the keys of the collection. Some collections have no notion of\\n * keys/indexes and this function will return undefined in those cases.\\n * @param {Object} col The collection-like object.\\n * @return {!Array|undefined} The keys in the collection.\\n */\\ngoog.structs.getKeys = function(col) {\\n  'use strict';\\n  if (col.getKeys && typeof col.getKeys == 'function') {\\n    return col.getKeys();\\n  }\\n  // if we have getValues but no getKeys we know this is a key-less collection\\n  if (col.getValues && typeof col.getValues == 'function') {\\n    return undefined;\\n  }\\n  if (goog.isArrayLike(col) || typeof col === 'string') {\\n    var rv = [];\\n    var l = col.length;\\n    for (var i = 0; i < l; i++) {\\n      rv.push(i);\\n    }\\n    return rv;\\n  }\\n\\n  return goog.object.getKeys(col);\\n};\\n\\n\\n/**\\n * Whether the collection contains the given value. This is O(n) and uses\\n * equals (==) to test the existence.\\n * @param {Object} col The collection-like object.\\n * @param {*} val The value to check for.\\n * @return {boolean} True if the map contains the value.\\n */\\ngoog.structs.contains = function(col, val) {\\n  'use strict';\\n  if (col.contains && typeof col.contains == 'function') {\\n    return col.contains(val);\\n  }\\n  if (col.containsValue && typeof col.containsValue == 'function') {\\n    return col.containsValue(val);\\n  }\\n  if (goog.isArrayLike(col) || typeof col === 'string') {\\n    return goog.array.contains(/** @type {!Array<?>} */ (col), val);\\n  }\\n  return goog.object.containsValue(col, val);\\n};\\n\\n\\n/**\\n * Whether the collection is empty.\\n * @param {Object} col The collection-like object.\\n * @return {boolean} True if empty.\\n */\\ngoog.structs.isEmpty = function(col) {\\n  'use strict';\\n  if (col.isEmpty && typeof col.isEmpty == 'function') {\\n    return col.isEmpty();\\n  }\\n\\n  // We do not use goog.string.isEmptyOrWhitespace because here we treat the\\n  // string as\\n  // collection and as such even whitespace matters\\n\\n  if (goog.isArrayLike(col) || typeof col === 'string') {\\n    return goog.array.isEmpty(/** @type {!Array<?>} */ (col));\\n  }\\n  return goog.object.isEmpty(col);\\n};\\n\\n\\n/**\\n * Removes all the elements from the collection.\\n * @param {Object} col The collection-like object.\\n */\\ngoog.structs.clear = function(col) {\\n  'use strict';\\n  // NOTE(arv): This should not contain strings because strings are immutable\\n  if (col.clear && typeof col.clear == 'function') {\\n    col.clear();\\n  } else if (goog.isArrayLike(col)) {\\n    goog.array.clear(/** @type {IArrayLike<?>} */ (col));\\n  } else {\\n    goog.object.clear(col);\\n  }\\n};\\n\\n\\n/**\\n * Calls a function for each value in a collection. The function takes\\n * three arguments; the value, the key and the collection.\\n *\\n * @param {S} col The collection-like object.\\n * @param {function(this:T,?,?,S):?} f The function to call for every value.\\n *     This function takes\\n *     3 arguments (the value, the key or undefined if the collection has no\\n *     notion of keys, and the collection) and the return value is irrelevant.\\n * @param {T=} opt_obj The object to be used as the value of 'this'\\n *     within `f`.\\n * @template T,S\\n * @deprecated Use a more specific method, e.g. goog.array.forEach,\\n *     goog.object.forEach, or for-of.\\n */\\ngoog.structs.forEach = function(col, f, opt_obj) {\\n  'use strict';\\n  if (col.forEach && typeof col.forEach == 'function') {\\n    col.forEach(f, opt_obj);\\n  } else if (goog.isArrayLike(col) || typeof col === 'string') {\\n    goog.array.forEach(/** @type {!Array<?>} */ (col), f, opt_obj);\\n  } else {\\n    var keys = goog.structs.getKeys(col);\\n    var values = goog.structs.getValues(col);\\n    var l = values.length;\\n    for (var i = 0; i < l; i++) {\\n      f.call(/** @type {?} */ (opt_obj), values[i], keys && keys[i], col);\\n    }\\n  }\\n};\\n\\n\\n/**\\n * Calls a function for every value in the collection. When a call returns true,\\n * adds the value to a new collection (Array is returned by default).\\n *\\n * @param {S} col The collection-like object.\\n * @param {function(this:T,?,?,S):boolean} f The function to call for every\\n *     value. This function takes\\n *     3 arguments (the value, the key or undefined if the collection has no\\n *     notion of keys, and the collection) and should return a Boolean. If the\\n *     return value is true the value is added to the result collection. If it\\n *     is false the value is not included.\\n * @param {T=} opt_obj The object to be used as the value of 'this'\\n *     within `f`.\\n * @return {!Object|!Array<?>} A new collection where the passed values are\\n *     present. If col is a key-less collection an array is returned.  If col\\n *     has keys and values a plain old JS object is returned.\\n * @template T,S\\n */\\ngoog.structs.filter = function(col, f, opt_obj) {\\n  'use strict';\\n  if (typeof col.filter == 'function') {\\n    return col.filter(f, opt_obj);\\n  }\\n  if (goog.isArrayLike(col) || typeof col === 'string') {\\n    return goog.array.filter(/** @type {!Array<?>} */ (col), f, opt_obj);\\n  }\\n\\n  var rv;\\n  var keys = goog.structs.getKeys(col);\\n  var values = goog.structs.getValues(col);\\n  var l = values.length;\\n  if (keys) {\\n    rv = {};\\n    for (var i = 0; i < l; i++) {\\n      if (f.call(/** @type {?} */ (opt_obj), values[i], keys[i], col)) {\\n        rv[keys[i]] = values[i];\\n      }\\n    }\\n  } else {\\n    // We should not use goog.array.filter here since we want to make sure that\\n    // the index is undefined as well as make sure that col is passed to the\\n    // function.\\n    rv = [];\\n    for (var i = 0; i < l; i++) {\\n      if (f.call(opt_obj, values[i], undefined, col)) {\\n        rv.push(values[i]);\\n      }\\n    }\\n  }\\n  return rv;\\n};\\n\\n\\n/**\\n * Calls a function for every value in the collection and adds the result into a\\n * new collection (defaults to creating a new Array).\\n *\\n * @param {S} col The collection-like object.\\n * @param {function(this:T,?,?,S):V} f The function to call for every value.\\n *     This function takes 3 arguments (the value, the key or undefined if the\\n *     collection has no notion of keys, and the collection) and should return\\n *     something. The result will be used as the value in the new collection.\\n * @param {T=} opt_obj  The object to be used as the value of 'this'\\n *     within `f`.\\n * @return {!Object<V>|!Array<V>} A new collection with the new values.  If\\n *     col is a key-less collection an array is returned.  If col has keys and\\n *     values a plain old JS object is returned.\\n * @template T,S,V\\n */\\ngoog.structs.map = function(col, f, opt_obj) {\\n  'use strict';\\n  if (typeof col.map == 'function') {\\n    return col.map(f, opt_obj);\\n  }\\n  if (goog.isArrayLike(col) || typeof col === 'string') {\\n    return goog.array.map(/** @type {!Array<?>} */ (col), f, opt_obj);\\n  }\\n\\n  var rv;\\n  var keys = goog.structs.getKeys(col);\\n  var values = goog.structs.getValues(col);\\n  var l = values.length;\\n  if (keys) {\\n    rv = {};\\n    for (var i = 0; i < l; i++) {\\n      rv[keys[i]] = f.call(/** @type {?} */ (opt_obj), values[i], keys[i], col);\\n    }\\n  } else {\\n    // We should not use goog.array.map here since we want to make sure that\\n    // the index is undefined as well as make sure that col is passed to the\\n    // function.\\n    rv = [];\\n    for (var i = 0; i < l; i++) {\\n      rv[i] = f.call(/** @type {?} */ (opt_obj), values[i], undefined, col);\\n    }\\n  }\\n  return rv;\\n};\\n\\n\\n/**\\n * Calls f for each value in a collection. If any call returns true this returns\\n * true (without checking the rest). If all returns false this returns false.\\n *\\n * @param {S} col The collection-like object.\\n * @param {function(this:T,?,?,S):boolean} f The function to call for every\\n *     value. This function takes 3 arguments (the value, the key or undefined\\n *     if the collection has no notion of keys, and the collection) and should\\n *     return a boolean.\\n * @param {T=} opt_obj  The object to be used as the value of 'this'\\n *     within `f`.\\n * @return {boolean} True if any value passes the test.\\n * @template T,S\\n */\\ngoog.structs.some = function(col, f, opt_obj) {\\n  'use strict';\\n  if (typeof col.some == 'function') {\\n    return col.some(f, opt_obj);\\n  }\\n  if (goog.isArrayLike(col) || typeof col === 'string') {\\n    return goog.array.some(/** @type {!Array<?>} */ (col), f, opt_obj);\\n  }\\n  var keys = goog.structs.getKeys(col);\\n  var values = goog.structs.getValues(col);\\n  var l = values.length;\\n  for (var i = 0; i < l; i++) {\\n    if (f.call(/** @type {?} */ (opt_obj), values[i], keys && keys[i], col)) {\\n      return true;\\n    }\\n  }\\n  return false;\\n};\\n\\n\\n/**\\n * Calls f for each value in a collection. If all calls return true this return\\n * true this returns true. If any returns false this returns false at this point\\n *  and does not continue to check the remaining values.\\n *\\n * @param {S} col The collection-like object.\\n * @param {function(this:T,?,?,S):boolean} f The function to call for every\\n *     value. This function takes 3 arguments (the value, the key or\\n *     undefined if the collection has no notion of keys, and the collection)\\n *     and should return a boolean.\\n * @param {T=} opt_obj  The object to be used as the value of 'this'\\n *     within `f`.\\n * @return {boolean} True if all key-value pairs pass the test.\\n * @template T,S\\n */\\ngoog.structs.every = function(col, f, opt_obj) {\\n  'use strict';\\n  if (typeof col.every == 'function') {\\n    return col.every(f, opt_obj);\\n  }\\n  if (goog.isArrayLike(col) || typeof col === 'string') {\\n    return goog.array.every(/** @type {!Array<?>} */ (col), f, opt_obj);\\n  }\\n  var keys = goog.structs.getKeys(col);\\n  var values = goog.structs.getValues(col);\\n  var l = values.length;\\n  for (var i = 0; i < l; i++) {\\n    if (!f.call(/** @type {?} */ (opt_obj), values[i], keys && keys[i], col)) {\\n      return false;\\n    }\\n  }\\n  return true;\\n};\\n\"],\n\"names\":[\"goog\",\"provide\",\"require\",\"structs\",\"getCount\",\"goog.structs.getCount\",\"col\",\"isArrayLike\",\"length\",\"object\",\"getValues\",\"goog.structs.getValues\",\"split\",\"rv\",\"l\",\"i\",\"push\",\"getKeys\",\"goog.structs.getKeys\",\"undefined\",\"contains\",\"goog.structs.contains\",\"val\",\"containsValue\",\"array\",\"isEmpty\",\"goog.structs.isEmpty\",\"clear\",\"goog.structs.clear\",\"forEach\",\"goog.structs.forEach\",\"f\",\"opt_obj\",\"keys\",\"values\",\"call\",\"filter\",\"goog.structs.filter\",\"map\",\"goog.structs.map\",\"some\",\"goog.structs.some\",\"every\",\"goog.structs.every\"]\n}\n"]