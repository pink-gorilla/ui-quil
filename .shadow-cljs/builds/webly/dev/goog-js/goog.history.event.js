["^ ","~:resource-id",["~:shadow.build.classpath/resource","goog/history/event.js"],"~:js","goog.provide(\"goog.history.Event\");\ngoog.require(\"goog.events.Event\");\ngoog.require(\"goog.history.EventType\");\ngoog.history.Event = function(token, isNavigation) {\n  goog.events.Event.call(this, goog.history.EventType.NAVIGATE);\n  this.token = token;\n  this.isNavigation = isNavigation;\n};\ngoog.inherits(goog.history.Event, goog.events.Event);\n","~:source","/**\n * @license\n * Copyright The Closure Library Authors.\n * SPDX-License-Identifier: Apache-2.0\n */\n\n/**\n * @fileoverview The event object dispatched when the history changes.\n */\n\n\ngoog.provide('goog.history.Event');\n\ngoog.require('goog.events.Event');\ngoog.require('goog.history.EventType');\n\n\n\n/**\n * Event object dispatched after the history state has changed.\n * @param {string} token The string identifying the new history state.\n * @param {boolean} isNavigation True if the event was triggered by a browser\n *     action, such as forward or back, clicking on a link, editing the URL, or\n *     calling {@code window.history.(go|back|forward)}.\n *     False if the token has been changed by a `setToken` or\n *     `replaceToken` call.\n * @constructor\n * @extends {goog.events.Event}\n * @final\n */\ngoog.history.Event = function(token, isNavigation) {\n  'use strict';\n  goog.events.Event.call(this, goog.history.EventType.NAVIGATE);\n\n  /**\n   * The current history state.\n   * @type {string}\n   */\n  this.token = token;\n\n  /**\n   * Whether the event was triggered by browser navigation.\n   * @type {boolean}\n   */\n  this.isNavigation = isNavigation;\n};\ngoog.inherits(goog.history.Event, goog.events.Event);\n","~:compiled-at",1621210407476,"~:source-map-json","{\n\"version\":3,\n\"file\":\"goog.history.event.js\",\n\"lineCount\":10,\n\"mappings\":\"AAWAA,IAAKC,CAAAA,OAAL,CAAa,oBAAb,CAAA;AAEAD,IAAKE,CAAAA,OAAL,CAAa,mBAAb,CAAA;AACAF,IAAKE,CAAAA,OAAL,CAAa,wBAAb,CAAA;AAgBAF,IAAKG,CAAAA,OAAQC,CAAAA,KAAb,GAAqBC,QAAQ,CAACC,KAAD,EAAQC,YAAR,CAAsB;AAEjDP,MAAKQ,CAAAA,MAAOJ,CAAAA,KAAMK,CAAAA,IAAlB,CAAuB,IAAvB,EAA6BT,IAAKG,CAAAA,OAAQO,CAAAA,SAAUC,CAAAA,QAApD,CAAA;AAMA,MAAKL,CAAAA,KAAL,GAAaA,KAAb;AAMA,MAAKC,CAAAA,YAAL,GAAoBA,YAApB;AAdiD,CAAnD;AAgBAP,IAAKY,CAAAA,QAAL,CAAcZ,IAAKG,CAAAA,OAAQC,CAAAA,KAA3B,EAAkCJ,IAAKQ,CAAAA,MAAOJ,CAAAA,KAA9C,CAAA;;\",\n\"sources\":[\"goog/history/event.js\"],\n\"sourcesContent\":[\"/**\\n * @license\\n * Copyright The Closure Library Authors.\\n * SPDX-License-Identifier: Apache-2.0\\n */\\n\\n/**\\n * @fileoverview The event object dispatched when the history changes.\\n */\\n\\n\\ngoog.provide('goog.history.Event');\\n\\ngoog.require('goog.events.Event');\\ngoog.require('goog.history.EventType');\\n\\n\\n\\n/**\\n * Event object dispatched after the history state has changed.\\n * @param {string} token The string identifying the new history state.\\n * @param {boolean} isNavigation True if the event was triggered by a browser\\n *     action, such as forward or back, clicking on a link, editing the URL, or\\n *     calling {@code window.history.(go|back|forward)}.\\n *     False if the token has been changed by a `setToken` or\\n *     `replaceToken` call.\\n * @constructor\\n * @extends {goog.events.Event}\\n * @final\\n */\\ngoog.history.Event = function(token, isNavigation) {\\n  'use strict';\\n  goog.events.Event.call(this, goog.history.EventType.NAVIGATE);\\n\\n  /**\\n   * The current history state.\\n   * @type {string}\\n   */\\n  this.token = token;\\n\\n  /**\\n   * Whether the event was triggered by browser navigation.\\n   * @type {boolean}\\n   */\\n  this.isNavigation = isNavigation;\\n};\\ngoog.inherits(goog.history.Event, goog.events.Event);\\n\"],\n\"names\":[\"goog\",\"provide\",\"require\",\"history\",\"Event\",\"goog.history.Event\",\"token\",\"isNavigation\",\"events\",\"call\",\"EventType\",\"NAVIGATE\",\"inherits\"]\n}\n"]