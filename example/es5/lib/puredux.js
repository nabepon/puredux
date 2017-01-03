(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["Puredux"] = factory();
	else
		root["Puredux"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	var parentHotUpdateCallback = this["webpackHotUpdatePuredux"];
/******/ 	this["webpackHotUpdatePuredux"] = 
/******/ 	function webpackHotUpdateCallback(chunkId, moreModules) { // eslint-disable-line no-unused-vars
/******/ 		hotAddUpdateChunk(chunkId, moreModules);
/******/ 		if(parentHotUpdateCallback) parentHotUpdateCallback(chunkId, moreModules);
/******/ 	}
/******/ 	
/******/ 	function hotDownloadUpdateChunk(chunkId) { // eslint-disable-line no-unused-vars
/******/ 		var head = document.getElementsByTagName("head")[0];
/******/ 		var script = document.createElement("script");
/******/ 		script.type = "text/javascript";
/******/ 		script.charset = "utf-8";
/******/ 		script.src = __webpack_require__.p + "" + chunkId + "." + hotCurrentHash + ".hot-update.js";
/******/ 		head.appendChild(script);
/******/ 	}
/******/ 	
/******/ 	function hotDownloadManifest(callback) { // eslint-disable-line no-unused-vars
/******/ 		if(typeof XMLHttpRequest === "undefined")
/******/ 			return callback(new Error("No browser support"));
/******/ 		try {
/******/ 			var request = new XMLHttpRequest();
/******/ 			var requestPath = __webpack_require__.p + "" + hotCurrentHash + ".hot-update.json";
/******/ 			request.open("GET", requestPath, true);
/******/ 			request.timeout = 10000;
/******/ 			request.send(null);
/******/ 		} catch(err) {
/******/ 			return callback(err);
/******/ 		}
/******/ 		request.onreadystatechange = function() {
/******/ 			if(request.readyState !== 4) return;
/******/ 			if(request.status === 0) {
/******/ 				// timeout
/******/ 				callback(new Error("Manifest request to " + requestPath + " timed out."));
/******/ 			} else if(request.status === 404) {
/******/ 				// no update available
/******/ 				callback();
/******/ 			} else if(request.status !== 200 && request.status !== 304) {
/******/ 				// other failure
/******/ 				callback(new Error("Manifest request to " + requestPath + " failed."));
/******/ 			} else {
/******/ 				// success
/******/ 				try {
/******/ 					var update = JSON.parse(request.responseText);
/******/ 				} catch(e) {
/******/ 					callback(e);
/******/ 					return;
/******/ 				}
/******/ 				callback(null, update);
/******/ 			}
/******/ 		};
/******/ 	}
/******/
/******/ 	
/******/ 	
/******/ 	// Copied from https://github.com/facebook/react/blob/bef45b0/src/shared/utils/canDefineProperty.js
/******/ 	var canDefineProperty = false;
/******/ 	try {
/******/ 		Object.defineProperty({}, "x", {
/******/ 			get: function() {}
/******/ 		});
/******/ 		canDefineProperty = true;
/******/ 	} catch(x) {
/******/ 		// IE will fail on defineProperty
/******/ 	}
/******/ 	
/******/ 	var hotApplyOnUpdate = true;
/******/ 	var hotCurrentHash = "d725bb7aef48c83d59d0"; // eslint-disable-line no-unused-vars
/******/ 	var hotCurrentModuleData = {};
/******/ 	var hotCurrentParents = []; // eslint-disable-line no-unused-vars
/******/ 	
/******/ 	function hotCreateRequire(moduleId) { // eslint-disable-line no-unused-vars
/******/ 		var me = installedModules[moduleId];
/******/ 		if(!me) return __webpack_require__;
/******/ 		var fn = function(request) {
/******/ 			if(me.hot.active) {
/******/ 				if(installedModules[request]) {
/******/ 					if(installedModules[request].parents.indexOf(moduleId) < 0)
/******/ 						installedModules[request].parents.push(moduleId);
/******/ 					if(me.children.indexOf(request) < 0)
/******/ 						me.children.push(request);
/******/ 				} else hotCurrentParents = [moduleId];
/******/ 			} else {
/******/ 				console.warn("[HMR] unexpected require(" + request + ") from disposed module " + moduleId);
/******/ 				hotCurrentParents = [];
/******/ 			}
/******/ 			return __webpack_require__(request);
/******/ 		};
/******/ 		for(var name in __webpack_require__) {
/******/ 			if(Object.prototype.hasOwnProperty.call(__webpack_require__, name)) {
/******/ 				if(canDefineProperty) {
/******/ 					Object.defineProperty(fn, name, (function(name) {
/******/ 						return {
/******/ 							configurable: true,
/******/ 							enumerable: true,
/******/ 							get: function() {
/******/ 								return __webpack_require__[name];
/******/ 							},
/******/ 							set: function(value) {
/******/ 								__webpack_require__[name] = value;
/******/ 							}
/******/ 						};
/******/ 					}(name)));
/******/ 				} else {
/******/ 					fn[name] = __webpack_require__[name];
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 	
/******/ 		function ensure(chunkId, callback) {
/******/ 			if(hotStatus === "ready")
/******/ 				hotSetStatus("prepare");
/******/ 			hotChunksLoading++;
/******/ 			__webpack_require__.e(chunkId, function() {
/******/ 				try {
/******/ 					callback.call(null, fn);
/******/ 				} finally {
/******/ 					finishChunkLoading();
/******/ 				}
/******/ 	
/******/ 				function finishChunkLoading() {
/******/ 					hotChunksLoading--;
/******/ 					if(hotStatus === "prepare") {
/******/ 						if(!hotWaitingFilesMap[chunkId]) {
/******/ 							hotEnsureUpdateChunk(chunkId);
/******/ 						}
/******/ 						if(hotChunksLoading === 0 && hotWaitingFiles === 0) {
/******/ 							hotUpdateDownloaded();
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 			});
/******/ 		}
/******/ 		if(canDefineProperty) {
/******/ 			Object.defineProperty(fn, "e", {
/******/ 				enumerable: true,
/******/ 				value: ensure
/******/ 			});
/******/ 		} else {
/******/ 			fn.e = ensure;
/******/ 		}
/******/ 		return fn;
/******/ 	}
/******/ 	
/******/ 	function hotCreateModule(moduleId) { // eslint-disable-line no-unused-vars
/******/ 		var hot = {
/******/ 			// private stuff
/******/ 			_acceptedDependencies: {},
/******/ 			_declinedDependencies: {},
/******/ 			_selfAccepted: false,
/******/ 			_selfDeclined: false,
/******/ 			_disposeHandlers: [],
/******/ 	
/******/ 			// Module API
/******/ 			active: true,
/******/ 			accept: function(dep, callback) {
/******/ 				if(typeof dep === "undefined")
/******/ 					hot._selfAccepted = true;
/******/ 				else if(typeof dep === "function")
/******/ 					hot._selfAccepted = dep;
/******/ 				else if(typeof dep === "object")
/******/ 					for(var i = 0; i < dep.length; i++)
/******/ 						hot._acceptedDependencies[dep[i]] = callback;
/******/ 				else
/******/ 					hot._acceptedDependencies[dep] = callback;
/******/ 			},
/******/ 			decline: function(dep) {
/******/ 				if(typeof dep === "undefined")
/******/ 					hot._selfDeclined = true;
/******/ 				else if(typeof dep === "number")
/******/ 					hot._declinedDependencies[dep] = true;
/******/ 				else
/******/ 					for(var i = 0; i < dep.length; i++)
/******/ 						hot._declinedDependencies[dep[i]] = true;
/******/ 			},
/******/ 			dispose: function(callback) {
/******/ 				hot._disposeHandlers.push(callback);
/******/ 			},
/******/ 			addDisposeHandler: function(callback) {
/******/ 				hot._disposeHandlers.push(callback);
/******/ 			},
/******/ 			removeDisposeHandler: function(callback) {
/******/ 				var idx = hot._disposeHandlers.indexOf(callback);
/******/ 				if(idx >= 0) hot._disposeHandlers.splice(idx, 1);
/******/ 			},
/******/ 	
/******/ 			// Management API
/******/ 			check: hotCheck,
/******/ 			apply: hotApply,
/******/ 			status: function(l) {
/******/ 				if(!l) return hotStatus;
/******/ 				hotStatusHandlers.push(l);
/******/ 			},
/******/ 			addStatusHandler: function(l) {
/******/ 				hotStatusHandlers.push(l);
/******/ 			},
/******/ 			removeStatusHandler: function(l) {
/******/ 				var idx = hotStatusHandlers.indexOf(l);
/******/ 				if(idx >= 0) hotStatusHandlers.splice(idx, 1);
/******/ 			},
/******/ 	
/******/ 			//inherit from previous dispose call
/******/ 			data: hotCurrentModuleData[moduleId]
/******/ 		};
/******/ 		return hot;
/******/ 	}
/******/ 	
/******/ 	var hotStatusHandlers = [];
/******/ 	var hotStatus = "idle";
/******/ 	
/******/ 	function hotSetStatus(newStatus) {
/******/ 		hotStatus = newStatus;
/******/ 		for(var i = 0; i < hotStatusHandlers.length; i++)
/******/ 			hotStatusHandlers[i].call(null, newStatus);
/******/ 	}
/******/ 	
/******/ 	// while downloading
/******/ 	var hotWaitingFiles = 0;
/******/ 	var hotChunksLoading = 0;
/******/ 	var hotWaitingFilesMap = {};
/******/ 	var hotRequestedFilesMap = {};
/******/ 	var hotAvailibleFilesMap = {};
/******/ 	var hotCallback;
/******/ 	
/******/ 	// The update info
/******/ 	var hotUpdate, hotUpdateNewHash;
/******/ 	
/******/ 	function toModuleId(id) {
/******/ 		var isNumber = (+id) + "" === id;
/******/ 		return isNumber ? +id : id;
/******/ 	}
/******/ 	
/******/ 	function hotCheck(apply, callback) {
/******/ 		if(hotStatus !== "idle") throw new Error("check() is only allowed in idle status");
/******/ 		if(typeof apply === "function") {
/******/ 			hotApplyOnUpdate = false;
/******/ 			callback = apply;
/******/ 		} else {
/******/ 			hotApplyOnUpdate = apply;
/******/ 			callback = callback || function(err) {
/******/ 				if(err) throw err;
/******/ 			};
/******/ 		}
/******/ 		hotSetStatus("check");
/******/ 		hotDownloadManifest(function(err, update) {
/******/ 			if(err) return callback(err);
/******/ 			if(!update) {
/******/ 				hotSetStatus("idle");
/******/ 				callback(null, null);
/******/ 				return;
/******/ 			}
/******/ 	
/******/ 			hotRequestedFilesMap = {};
/******/ 			hotAvailibleFilesMap = {};
/******/ 			hotWaitingFilesMap = {};
/******/ 			for(var i = 0; i < update.c.length; i++)
/******/ 				hotAvailibleFilesMap[update.c[i]] = true;
/******/ 			hotUpdateNewHash = update.h;
/******/ 	
/******/ 			hotSetStatus("prepare");
/******/ 			hotCallback = callback;
/******/ 			hotUpdate = {};
/******/ 			var chunkId = 0;
/******/ 			{ // eslint-disable-line no-lone-blocks
/******/ 				/*globals chunkId */
/******/ 				hotEnsureUpdateChunk(chunkId);
/******/ 			}
/******/ 			if(hotStatus === "prepare" && hotChunksLoading === 0 && hotWaitingFiles === 0) {
/******/ 				hotUpdateDownloaded();
/******/ 			}
/******/ 		});
/******/ 	}
/******/ 	
/******/ 	function hotAddUpdateChunk(chunkId, moreModules) { // eslint-disable-line no-unused-vars
/******/ 		if(!hotAvailibleFilesMap[chunkId] || !hotRequestedFilesMap[chunkId])
/******/ 			return;
/******/ 		hotRequestedFilesMap[chunkId] = false;
/******/ 		for(var moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				hotUpdate[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(--hotWaitingFiles === 0 && hotChunksLoading === 0) {
/******/ 			hotUpdateDownloaded();
/******/ 		}
/******/ 	}
/******/ 	
/******/ 	function hotEnsureUpdateChunk(chunkId) {
/******/ 		if(!hotAvailibleFilesMap[chunkId]) {
/******/ 			hotWaitingFilesMap[chunkId] = true;
/******/ 		} else {
/******/ 			hotRequestedFilesMap[chunkId] = true;
/******/ 			hotWaitingFiles++;
/******/ 			hotDownloadUpdateChunk(chunkId);
/******/ 		}
/******/ 	}
/******/ 	
/******/ 	function hotUpdateDownloaded() {
/******/ 		hotSetStatus("ready");
/******/ 		var callback = hotCallback;
/******/ 		hotCallback = null;
/******/ 		if(!callback) return;
/******/ 		if(hotApplyOnUpdate) {
/******/ 			hotApply(hotApplyOnUpdate, callback);
/******/ 		} else {
/******/ 			var outdatedModules = [];
/******/ 			for(var id in hotUpdate) {
/******/ 				if(Object.prototype.hasOwnProperty.call(hotUpdate, id)) {
/******/ 					outdatedModules.push(toModuleId(id));
/******/ 				}
/******/ 			}
/******/ 			callback(null, outdatedModules);
/******/ 		}
/******/ 	}
/******/ 	
/******/ 	function hotApply(options, callback) {
/******/ 		if(hotStatus !== "ready") throw new Error("apply() is only allowed in ready status");
/******/ 		if(typeof options === "function") {
/******/ 			callback = options;
/******/ 			options = {};
/******/ 		} else if(options && typeof options === "object") {
/******/ 			callback = callback || function(err) {
/******/ 				if(err) throw err;
/******/ 			};
/******/ 		} else {
/******/ 			options = {};
/******/ 			callback = callback || function(err) {
/******/ 				if(err) throw err;
/******/ 			};
/******/ 		}
/******/ 	
/******/ 		function getAffectedStuff(module) {
/******/ 			var outdatedModules = [module];
/******/ 			var outdatedDependencies = {};
/******/ 	
/******/ 			var queue = outdatedModules.slice();
/******/ 			while(queue.length > 0) {
/******/ 				var moduleId = queue.pop();
/******/ 				var module = installedModules[moduleId];
/******/ 				if(!module || module.hot._selfAccepted)
/******/ 					continue;
/******/ 				if(module.hot._selfDeclined) {
/******/ 					return new Error("Aborted because of self decline: " + moduleId);
/******/ 				}
/******/ 				if(moduleId === 0) {
/******/ 					return;
/******/ 				}
/******/ 				for(var i = 0; i < module.parents.length; i++) {
/******/ 					var parentId = module.parents[i];
/******/ 					var parent = installedModules[parentId];
/******/ 					if(parent.hot._declinedDependencies[moduleId]) {
/******/ 						return new Error("Aborted because of declined dependency: " + moduleId + " in " + parentId);
/******/ 					}
/******/ 					if(outdatedModules.indexOf(parentId) >= 0) continue;
/******/ 					if(parent.hot._acceptedDependencies[moduleId]) {
/******/ 						if(!outdatedDependencies[parentId])
/******/ 							outdatedDependencies[parentId] = [];
/******/ 						addAllToSet(outdatedDependencies[parentId], [moduleId]);
/******/ 						continue;
/******/ 					}
/******/ 					delete outdatedDependencies[parentId];
/******/ 					outdatedModules.push(parentId);
/******/ 					queue.push(parentId);
/******/ 				}
/******/ 			}
/******/ 	
/******/ 			return [outdatedModules, outdatedDependencies];
/******/ 		}
/******/ 	
/******/ 		function addAllToSet(a, b) {
/******/ 			for(var i = 0; i < b.length; i++) {
/******/ 				var item = b[i];
/******/ 				if(a.indexOf(item) < 0)
/******/ 					a.push(item);
/******/ 			}
/******/ 		}
/******/ 	
/******/ 		// at begin all updates modules are outdated
/******/ 		// the "outdated" status can propagate to parents if they don't accept the children
/******/ 		var outdatedDependencies = {};
/******/ 		var outdatedModules = [];
/******/ 		var appliedUpdate = {};
/******/ 		for(var id in hotUpdate) {
/******/ 			if(Object.prototype.hasOwnProperty.call(hotUpdate, id)) {
/******/ 				var moduleId = toModuleId(id);
/******/ 				var result = getAffectedStuff(moduleId);
/******/ 				if(!result) {
/******/ 					if(options.ignoreUnaccepted)
/******/ 						continue;
/******/ 					hotSetStatus("abort");
/******/ 					return callback(new Error("Aborted because " + moduleId + " is not accepted"));
/******/ 				}
/******/ 				if(result instanceof Error) {
/******/ 					hotSetStatus("abort");
/******/ 					return callback(result);
/******/ 				}
/******/ 				appliedUpdate[moduleId] = hotUpdate[moduleId];
/******/ 				addAllToSet(outdatedModules, result[0]);
/******/ 				for(var moduleId in result[1]) {
/******/ 					if(Object.prototype.hasOwnProperty.call(result[1], moduleId)) {
/******/ 						if(!outdatedDependencies[moduleId])
/******/ 							outdatedDependencies[moduleId] = [];
/******/ 						addAllToSet(outdatedDependencies[moduleId], result[1][moduleId]);
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 	
/******/ 		// Store self accepted outdated modules to require them later by the module system
/******/ 		var outdatedSelfAcceptedModules = [];
/******/ 		for(var i = 0; i < outdatedModules.length; i++) {
/******/ 			var moduleId = outdatedModules[i];
/******/ 			if(installedModules[moduleId] && installedModules[moduleId].hot._selfAccepted)
/******/ 				outdatedSelfAcceptedModules.push({
/******/ 					module: moduleId,
/******/ 					errorHandler: installedModules[moduleId].hot._selfAccepted
/******/ 				});
/******/ 		}
/******/ 	
/******/ 		// Now in "dispose" phase
/******/ 		hotSetStatus("dispose");
/******/ 		var queue = outdatedModules.slice();
/******/ 		while(queue.length > 0) {
/******/ 			var moduleId = queue.pop();
/******/ 			var module = installedModules[moduleId];
/******/ 			if(!module) continue;
/******/ 	
/******/ 			var data = {};
/******/ 	
/******/ 			// Call dispose handlers
/******/ 			var disposeHandlers = module.hot._disposeHandlers;
/******/ 			for(var j = 0; j < disposeHandlers.length; j++) {
/******/ 				var cb = disposeHandlers[j];
/******/ 				cb(data);
/******/ 			}
/******/ 			hotCurrentModuleData[moduleId] = data;
/******/ 	
/******/ 			// disable module (this disables requires from this module)
/******/ 			module.hot.active = false;
/******/ 	
/******/ 			// remove module from cache
/******/ 			delete installedModules[moduleId];
/******/ 	
/******/ 			// remove "parents" references from all children
/******/ 			for(var j = 0; j < module.children.length; j++) {
/******/ 				var child = installedModules[module.children[j]];
/******/ 				if(!child) continue;
/******/ 				var idx = child.parents.indexOf(moduleId);
/******/ 				if(idx >= 0) {
/******/ 					child.parents.splice(idx, 1);
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 	
/******/ 		// remove outdated dependency from module children
/******/ 		for(var moduleId in outdatedDependencies) {
/******/ 			if(Object.prototype.hasOwnProperty.call(outdatedDependencies, moduleId)) {
/******/ 				var module = installedModules[moduleId];
/******/ 				var moduleOutdatedDependencies = outdatedDependencies[moduleId];
/******/ 				for(var j = 0; j < moduleOutdatedDependencies.length; j++) {
/******/ 					var dependency = moduleOutdatedDependencies[j];
/******/ 					var idx = module.children.indexOf(dependency);
/******/ 					if(idx >= 0) module.children.splice(idx, 1);
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 	
/******/ 		// Not in "apply" phase
/******/ 		hotSetStatus("apply");
/******/ 	
/******/ 		hotCurrentHash = hotUpdateNewHash;
/******/ 	
/******/ 		// insert new code
/******/ 		for(var moduleId in appliedUpdate) {
/******/ 			if(Object.prototype.hasOwnProperty.call(appliedUpdate, moduleId)) {
/******/ 				modules[moduleId] = appliedUpdate[moduleId];
/******/ 			}
/******/ 		}
/******/ 	
/******/ 		// call accept handlers
/******/ 		var error = null;
/******/ 		for(var moduleId in outdatedDependencies) {
/******/ 			if(Object.prototype.hasOwnProperty.call(outdatedDependencies, moduleId)) {
/******/ 				var module = installedModules[moduleId];
/******/ 				var moduleOutdatedDependencies = outdatedDependencies[moduleId];
/******/ 				var callbacks = [];
/******/ 				for(var i = 0; i < moduleOutdatedDependencies.length; i++) {
/******/ 					var dependency = moduleOutdatedDependencies[i];
/******/ 					var cb = module.hot._acceptedDependencies[dependency];
/******/ 					if(callbacks.indexOf(cb) >= 0) continue;
/******/ 					callbacks.push(cb);
/******/ 				}
/******/ 				for(var i = 0; i < callbacks.length; i++) {
/******/ 					var cb = callbacks[i];
/******/ 					try {
/******/ 						cb(outdatedDependencies);
/******/ 					} catch(err) {
/******/ 						if(!error)
/******/ 							error = err;
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 	
/******/ 		// Load self accepted modules
/******/ 		for(var i = 0; i < outdatedSelfAcceptedModules.length; i++) {
/******/ 			var item = outdatedSelfAcceptedModules[i];
/******/ 			var moduleId = item.module;
/******/ 			hotCurrentParents = [moduleId];
/******/ 			try {
/******/ 				__webpack_require__(moduleId);
/******/ 			} catch(err) {
/******/ 				if(typeof item.errorHandler === "function") {
/******/ 					try {
/******/ 						item.errorHandler(err);
/******/ 					} catch(err) {
/******/ 						if(!error)
/******/ 							error = err;
/******/ 					}
/******/ 				} else if(!error)
/******/ 					error = err;
/******/ 			}
/******/ 		}
/******/ 	
/******/ 		// handle errors in accept handlers and self accepted module load
/******/ 		if(error) {
/******/ 			hotSetStatus("fail");
/******/ 			return callback(error);
/******/ 		}
/******/ 	
/******/ 		hotSetStatus("idle");
/******/ 		callback(null, outdatedModules);
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			hot: hotCreateModule(moduleId),
/******/ 			parents: hotCurrentParents,
/******/ 			children: []
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, hotCreateRequire(moduleId));
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// __webpack_hash__
/******/ 	__webpack_require__.h = function() { return hotCurrentHash; };
/******/
/******/ 	// Load entry module and return exports
/******/ 	return hotCreateRequire(0)(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports.hasClass = exports.swapElement = exports.recurseObject = exports.recurseEqual = exports.shallowCompare = exports.setConfig = exports.Component = undefined;
	
	var _Component = __webpack_require__(1);
	
	var _Component2 = _interopRequireDefault(_Component);
	
	var _setConfig = __webpack_require__(3);
	
	var _setConfig2 = _interopRequireDefault(_setConfig);
	
	var _utils = __webpack_require__(2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	exports.Component = _Component2['default'];
	exports.setConfig = _setConfig2['default'];
	exports.shallowCompare = _utils.shallowCompare;
	exports.recurseEqual = _utils.recurseEqual;
	exports.recurseObject = _utils.recurseObject;
	exports.swapElement = _utils.swapElement;
	exports.hasClass = _utils.hasClass;

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _template = __webpack_require__(4);
	
	var _template2 = _interopRequireDefault(_template);
	
	var _utils = __webpack_require__(2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Component = function () {
	  function Component(option) {
	    _classCallCheck(this, Component);
	
	    this.tagName = 'div';
	    this.Actions = {};
	    this.state = {};
	    this.props = null;
	    this.prevProps = null;
	    this.isFirstRender = true;
	    this.actions = null;
	    this.children = null;
	    this.option = null;
	    this.isPureduxComponent = true;
	    this.templateCache = null;
	
	    var _this = this;
	
	    // 初期化処理。
	    _this.option = option;
	    _this.initialize.bind(_this).apply(_this, arguments);
	    _this.onClick = _this.onClick ? _this.onClick.bind(_this) : null;
	    _this.el = document.createElement(option && option.tagName || _this.tagName || 'div');
	
	    // render乗っ取り。rendererが実行されるようにします。
	    _this.updateRender = _this.render;
	    _this.render = _this.renderer;
	
	    // 初回実行はtemplateのコンパイルが行われ、2回目以降はキャッシュが使われるようにします。
	    _this.updateTemplate = _this.createTemplate;
	
	    return _this;
	  }
	
	  /*********************************
	   * please override
	   ********************************/
	
	  // elementのタグ。
	
	
	  // ActionCreatorsを渡します。dispatchと紐づきが行われます。
	
	
	  // unmount時にリセットされる汎用的な入れ物です。
	
	
	  _createClass(Component, [{
	    key: 'initialize',
	
	
	    // 初期化時に呼ばれます。
	    value: function initialize() {}
	
	    // 初回レンダリングのみ、render実行前に呼ばれます。
	    // 返り値がthis.childrenに追加されます。
	    // unmountが呼ばれると、this.childrenに対し再帰的にunmountを実行し掃除します。
	
	  }, {
	    key: 'attachChildren',
	    value: function attachChildren() {}
	
	    // 返り値のstringに対し、underscore.jsのtemplateでコンパイルします。
	    // functionを返すこともでき、コンパイル済の関数を返せばコンパイル処理を省略できます。
	
	  }, {
	    key: 'template',
	    value: function template() {
	      return '';
	    }
	
	    // レンダリング毎に呼ばれ、falseを返すとrenderを実行しません。
	    // 引数にprevPropsとpropsが渡ります。
	    // props比較でレンダリングされないようチューニングするときに使います。
	
	  }, {
	    key: 'shouldComponentUpdate',
	    value: function shouldComponentUpdate() {
	      return true;
	    }
	
	    // render実行時、DOMを組み立てるのに使用します。
	    // shouldComponentUpdateを使わず、render内でもレンダリング実行を制御できます。。
	    // 自身は再レンダリングせずに子コンポーネントのみ再レンダリングするなど、細かなチューニングが可能です。
	
	  }, {
	    key: 'render',
	    value: function render(props) {
	      this.renderTemplate(props);
	    }
	
	    // クリックを処理したいときに上書きしてください。
	    // onClick(e) {}
	
	    // 初回レンダリングのみ、render実行前に呼ばれます。
	
	  }, {
	    key: 'componentWillMount',
	    value: function componentWillMount() {}
	
	    // レンダリング毎に、render実行前に呼ばれます。
	    // Reactと違ってmount時にも呼ばれ、this.isFirstRenderで初回かどうか判定できます。
	
	  }, {
	    key: 'componentWillUpdate',
	    value: function componentWillUpdate() {}
	
	    // 初回レンダリングのみ、render実行後に呼ばれます。
	
	  }, {
	    key: 'componentDidMount',
	    value: function componentDidMount() {}
	
	    // レンダリング毎に、render実行後に呼ばれます。
	    // Reactと違ってmount時にも呼ばれ、this.isFirstRenderで初回かどうか判定できます。
	
	  }, {
	    key: 'componentDidUpdate',
	    value: function componentDidUpdate() {}
	
	    // unmount時に呼ばれます。
	
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {}
	
	    /*********************************
	     * this reference
	     ********************************/
	
	    // renderに渡した引数が保持されます。
	
	
	    // 1つ前のrenderに渡した引数が保持されます。
	
	
	    // 初回レンダリングかどうかのフラグ
	
	
	    // Actionsをdispatchでラップした関数が保持されます。
	
	
	    // attachChildrenの返り値が保持されます。
	
	
	    // newでインスタンス作成時の引数が保持されます。
	
	  }, {
	    key: 'renderTemplate',
	
	
	    /*********************************
	     * util
	     ********************************/
	
	    // 自身のinnerHTMLをtemplateで更新します。
	    value: function renderTemplate(props) {
	      this.el.innerHTML = this.updateTemplate(props);
	      return this;
	    }
	
	    // querySelectorのエイリアス。
	    // this.$(selector) のように使います。
	
	  }, {
	    key: '$',
	    value: function $(selector) {
	      return this.el.querySelector(selector);
	    }
	  }, {
	    key: 'createInstanceRef',
	
	
	    // 自身のインスタンスを保存します。
	    // initialize、またはconstructorで実行しておくと、
	    // templateのコンパイル結果をシェアするようになります。
	    value: function createInstanceRef(Target) {
	      var _this = this;
	      if (_typeof(Target.instance) === "object") {
	        _this.instance = Target.instance;
	      } else {
	        Target.instance = _this;
	      }
	    }
	
	    // DOMを削除するときに呼び出してください。
	    // Reactと違って自分でunmountを実行する必要があるため、
	    // unmountを明示的に呼ばないとcomponentWillUnmountも実行されません。
	
	  }, {
	    key: 'unmount',
	    value: function unmount() {
	      var _this = this;
	      _this.el.parentNode.removeChild(_this.el);
	      _this.componentWillUnmount();
	      (0, _utils.recurseObject)(_this.children, function (obj) {
	        return obj.isPureduxComponent;
	      }, function (obj) {
	        obj.unmount();
	        return obj;
	      });
	      if (_this.onClick) {
	        _this.el.removeEventListener('click', _this.onClick, false);
	      }
	      _this.actions = null;
	      _this.children = null;
	      _this.props = null;
	      _this.prevProps = null;
	      _this.state = {};
	      _this.isFirstRender = true;
	      return _this;
	    }
	
	    /*********************************
	     * private
	     ********************************/
	
	  }, {
	    key: 'createTemplate',
	    value: function createTemplate(props) {
	      var _this = this.instance || this;
	      if (!_this.templateCache) {
	        var template = _this.template(props);
	        _this.templateCache = typeof template === 'function' ? template : (0, _template2['default'])(template);
	      }
	      _this.updateTemplate = _this.templateCache;
	      return _this.templateCache(props);
	    }
	  }, {
	    key: 'renderer',
	    value: function renderer(nextProps) {
	      var _this = this;
	      var isFirstRender = _this.isFirstRender;
	      _this.prevProps = _this.props;
	      _this.props = nextProps;
	
	      if (isFirstRender) {
	        if (_this.onClick) {
	          _this.el.addEventListener('click', _this.onClick, false);
	        }
	        _this.actions = (0, _utils.bindActionCreators)(_this.dispatch, _this.dispatcher, _this.Actions);
	        _this.children = _this.attachChildren(nextProps) || {};
	        _this.componentWillMount();
	      }
	      _this.componentWillUpdate();
	
	      if (isFirstRender || _this.shouldComponentUpdate(_this.prevProps, nextProps)) {
	        _this.updateRender.apply(_this, arguments);
	      }
	
	      if (isFirstRender) {
	        _this.componentDidMount();
	      }
	      _this.componentDidUpdate();
	
	      _this.isFirstRender = false;
	
	      return _this;
	    }
	  }]);
	
	  return Component;
	}();
	
	exports['default'] = Component;
	
	
	Component.extend = function extend(config) {
	  var Class = function Class() {
	    Class.prototype.__proto__ = Component.prototype;
	    Component.apply(this, arguments);
	  };
	  Class.prototype = config;
	  return Class;
	};

/***/ },
/* 2 */
/***/ function(module, exports) {

	'use strict';
	
	exports.__esModule = true;
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	exports.bindActionCreators = bindActionCreators;
	exports.shallowCompare = shallowCompare;
	exports.recurseEqual = recurseEqual;
	exports.recurseObject = recurseObject;
	exports.swapElement = swapElement;
	exports.hasClass = hasClass;
	var ObjectKeys = Object.keys;
	
	function bindActionCreators(dispatch, dispatcher, actions) {
	  var ret = {};
	  ObjectKeys(actions).map(function (key) {
	    if (typeof actions[key] === 'function') {
	      ret[key] = dispatch ? function () {
	        return dispatch(actions[key].apply(null, arguments));
	      } : dispatcher ? dispatcher(actions[key]) : actions[key];
	    }
	  });
	  return ret;
	}
	
	function shallowCompare(objA, objB) {
	  return !recurseEqual(objA, objB, 1);
	}
	
	/**
	 * Modified from https://github.com/facebook/fbjs/blob/master/packages/fbjs/src/core/shallowEqual.js
	 */
	function recurseEqual(objA, objB, recurseCount) {
	  if (objA === objB) {
	    return true;
	  }
	
	  if ((typeof objA === 'undefined' ? 'undefined' : _typeof(objA)) !== 'object' || objA === null || (typeof objB === 'undefined' ? 'undefined' : _typeof(objB)) !== 'object' || objB === null) {
	    return objA === objB;
	  }
	
	  var keysB = ObjectKeys(objB);
	  var keysA = ObjectKeys(objA);
	
	  if (keysA.length !== keysB.length) {
	    return false;
	  }
	
	  for (var i = 0; i < keysB.length; i++) {
	    if (!objA.hasOwnProperty(keysB[i])) {
	      return false;
	    }
	
	    if (recurseCount && !recurseEqual(objA[keysB[i]], objB[keysB[i]], recurseCount - 1)) {
	      return false;
	    }
	
	    if (objA[keysB[i]] !== objB[keysB[i]]) {
	      return false;
	    }
	  }
	
	  return true;
	}
	
	function recurseObject(obj, checkObj, iteratee) {
	  if ((typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) !== 'object' || obj === null) {
	    return iteratee(obj);
	  }
	
	  ObjectKeys(obj).map(function (key) {
	    if (checkObj && checkObj(obj[key])) {
	      obj[key] = iteratee(obj[key]);
	    } else {
	      recurseObject(obj[key], checkObj, iteratee);
	    }
	  });
	
	  return obj;
	}
	
	function swapElement(container, selector, el) {
	  var target = container.querySelector(selector);
	  if (target) {
	    target.parentNode.insertBefore(el, target);
	    container.removeChild(target);
	  }
	}
	
	function hasClass(event, name) {
	  return event.target.classList.contains(name);
	}

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports['default'] = setConfig;
	
	var _Component = __webpack_require__(1);
	
	var _Component2 = _interopRequireDefault(_Component);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function setConfig() {
	  var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	
	  if (config.dispatch) {
	    _Component2['default'].prototype.dispatch = config.dispatch;
	  }
	  if (config.dispatcher) {
	    _Component2['default'].prototype.dispatcher = config.dispatcher;
	  }
	}

/***/ },
/* 4 */
/***/ function(module, exports) {

	'use strict';
	
	exports.__esModule = true;
	exports['default'] = template;
	/**
	 * Modified template method from https://github.com/jashkenas/underscore/blob/master/underscore.js
	 *
	 * Underscore.js 1.8.3
	 * http://underscorejs.org
	 * (c) 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	 * Underscore may be freely distributed under the MIT license.
	 */
	
	/**
	 * escape
	 */
	var escapes = ['&', '<', '>', '"', "'", '`'];
	var escapeMap = {
	  '&': '&amp;',
	  '<': '&lt;',
	  '>': '&gt;',
	  '"': '&quot;',
	  "'": '&#x27;',
	  '`': '&#x60;'
	};
	var source = '(?:' + escapes.join('|') + ')';
	var testRegexp = new RegExp(source);
	var replaceRegexp = new RegExp(source, 'g');
	function escaper(match) {
	  return escapeMap[match];
	}
	function _escape(string) {
	  string = string == null ? '' : '' + string;
	  return testRegexp.test(string) ? string.replace(replaceRegexp, escaper) : string;
	}
	
	/**
	 * template
	 */
	var templateEscapes = {
	  "'": "'",
	  '\\': '\\',
	  '\r': 'r',
	  '\n': 'n',
	  '\u2028': 'u2028',
	  '\u2029': 'u2029'
	};
	var templateEscaper = /\\|'|\r|\n|\u2028|\u2029/g;
	
	function templateEscapeChar(match) {
	  return '\\' + templateEscapes[match];
	}
	
	var noMatch = /(.)^/;
	
	var matcher = new RegExp([(/<%-([\s\S]+?)%>/g || noMatch).source, (/<%=([\s\S]+?)%>/g || noMatch).source, (/<%([\s\S]+?)%>/g || noMatch).source].join('|') + '|$', 'g');
	
	function template(text) {
	  var index = 0;
	  var source = "__p+='";
	  text.replace(matcher, function (match, escape, interpolate, evaluate, offset) {
	    source += text.slice(index, offset).replace(templateEscaper, templateEscapeChar);
	
	    if (escape) {
	      source += "'+\n((__t=(" + escape + "))==null?'':_escape(__t))+\n'";
	    } else if (interpolate) {
	      source += "'+\n((__t=(" + interpolate + "))==null?'':__t)+\n'";
	    } else if (evaluate) {
	      source += "';\n" + evaluate + "\n__p+='";
	    }
	    index = offset + match.length;
	    return match;
	  });
	  source = "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\nwith(obj||{}){\n" + source + "';\n}\nreturn __p;\n";
	  return new Function('obj', source);
	}

/***/ }
/******/ ])
});
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCBkNzI1YmI3YWVmNDhjODNkNTlkMCIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0NvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NldENvbmZpZy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdGVtcGxhdGUuanMiXSwibmFtZXMiOlsiQ29tcG9uZW50Iiwic2V0Q29uZmlnIiwic2hhbGxvd0NvbXBhcmUiLCJyZWN1cnNlRXF1YWwiLCJyZWN1cnNlT2JqZWN0Iiwic3dhcEVsZW1lbnQiLCJoYXNDbGFzcyIsIm9wdGlvbiIsInRhZ05hbWUiLCJBY3Rpb25zIiwic3RhdGUiLCJwcm9wcyIsInByZXZQcm9wcyIsImlzRmlyc3RSZW5kZXIiLCJhY3Rpb25zIiwiY2hpbGRyZW4iLCJpc1B1cmVkdXhDb21wb25lbnQiLCJ0ZW1wbGF0ZUNhY2hlIiwiX3RoaXMiLCJpbml0aWFsaXplIiwiYmluZCIsImFwcGx5IiwiYXJndW1lbnRzIiwib25DbGljayIsImVsIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwidXBkYXRlUmVuZGVyIiwicmVuZGVyIiwicmVuZGVyZXIiLCJ1cGRhdGVUZW1wbGF0ZSIsImNyZWF0ZVRlbXBsYXRlIiwicmVuZGVyVGVtcGxhdGUiLCJpbm5lckhUTUwiLCJzZWxlY3RvciIsInF1ZXJ5U2VsZWN0b3IiLCJUYXJnZXQiLCJpbnN0YW5jZSIsInBhcmVudE5vZGUiLCJyZW1vdmVDaGlsZCIsImNvbXBvbmVudFdpbGxVbm1vdW50Iiwib2JqIiwidW5tb3VudCIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJ0ZW1wbGF0ZSIsIm5leHRQcm9wcyIsImFkZEV2ZW50TGlzdGVuZXIiLCJkaXNwYXRjaCIsImRpc3BhdGNoZXIiLCJhdHRhY2hDaGlsZHJlbiIsImNvbXBvbmVudFdpbGxNb3VudCIsImNvbXBvbmVudFdpbGxVcGRhdGUiLCJzaG91bGRDb21wb25lbnRVcGRhdGUiLCJjb21wb25lbnREaWRNb3VudCIsImNvbXBvbmVudERpZFVwZGF0ZSIsImV4dGVuZCIsImNvbmZpZyIsIkNsYXNzIiwicHJvdG90eXBlIiwiX19wcm90b19fIiwiYmluZEFjdGlvbkNyZWF0b3JzIiwiT2JqZWN0S2V5cyIsIk9iamVjdCIsImtleXMiLCJyZXQiLCJtYXAiLCJrZXkiLCJvYmpBIiwib2JqQiIsInJlY3Vyc2VDb3VudCIsImtleXNCIiwia2V5c0EiLCJsZW5ndGgiLCJpIiwiaGFzT3duUHJvcGVydHkiLCJjaGVja09iaiIsIml0ZXJhdGVlIiwiY29udGFpbmVyIiwidGFyZ2V0IiwiaW5zZXJ0QmVmb3JlIiwiZXZlbnQiLCJuYW1lIiwiY2xhc3NMaXN0IiwiY29udGFpbnMiLCJlc2NhcGVzIiwiZXNjYXBlTWFwIiwic291cmNlIiwiam9pbiIsInRlc3RSZWdleHAiLCJSZWdFeHAiLCJyZXBsYWNlUmVnZXhwIiwiZXNjYXBlciIsIm1hdGNoIiwiX2VzY2FwZSIsInN0cmluZyIsInRlc3QiLCJyZXBsYWNlIiwidGVtcGxhdGVFc2NhcGVzIiwidGVtcGxhdGVFc2NhcGVyIiwidGVtcGxhdGVFc2NhcGVDaGFyIiwibm9NYXRjaCIsIm1hdGNoZXIiLCJ0ZXh0IiwiaW5kZXgiLCJlc2NhcGUiLCJpbnRlcnBvbGF0ZSIsImV2YWx1YXRlIiwib2Zmc2V0Iiwic2xpY2UiLCJGdW5jdGlvbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87QUNWQTtBQUNBO0FBQ0EsbUVBQTJEO0FBQzNEO0FBQ0E7QUFDQTs7QUFFQSxvREFBNEM7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsa0RBQTBDO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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QWM7QUFDbkJwQixpQkFBVSxTQUFTb0IsUUFBVCxHQUFvQixVQUE5QjtBQUNEO0FBQ0RILGFBQVFJLFNBQVNmLE1BQU1wQixNQUF2QjtBQUNBLFlBQU9vQixLQUFQO0FBQ0QsSUFaRDtBQWFBTixZQUFTLDhHQUE4R0EsTUFBOUcsR0FBdUgsc0JBQWhJO0FBQ0EsVUFBTyxJQUFJdUIsUUFBSixDQUFhLEtBQWIsRUFBb0J2QixNQUFwQixDQUFQO0FBQ0QsRSIsImZpbGUiOiJwdXJlZHV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiUHVyZWR1eFwiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJQdXJlZHV4XCJdID0gZmFjdG9yeSgpO1xufSkodGhpcywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIiBcdHZhciBwYXJlbnRIb3RVcGRhdGVDYWxsYmFjayA9IHRoaXNbXCJ3ZWJwYWNrSG90VXBkYXRlUHVyZWR1eFwiXTtcbiBcdHRoaXNbXCJ3ZWJwYWNrSG90VXBkYXRlUHVyZWR1eFwiXSA9IFxyXG4gXHRmdW5jdGlvbiB3ZWJwYWNrSG90VXBkYXRlQ2FsbGJhY2soY2h1bmtJZCwgbW9yZU1vZHVsZXMpIHsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bnVzZWQtdmFyc1xyXG4gXHRcdGhvdEFkZFVwZGF0ZUNodW5rKGNodW5rSWQsIG1vcmVNb2R1bGVzKTtcclxuIFx0XHRpZihwYXJlbnRIb3RVcGRhdGVDYWxsYmFjaykgcGFyZW50SG90VXBkYXRlQ2FsbGJhY2soY2h1bmtJZCwgbW9yZU1vZHVsZXMpO1xyXG4gXHR9XHJcbiBcdFxyXG4gXHRmdW5jdGlvbiBob3REb3dubG9hZFVwZGF0ZUNodW5rKGNodW5rSWQpIHsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bnVzZWQtdmFyc1xyXG4gXHRcdHZhciBoZWFkID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJoZWFkXCIpWzBdO1xyXG4gXHRcdHZhciBzY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIpO1xyXG4gXHRcdHNjcmlwdC50eXBlID0gXCJ0ZXh0L2phdmFzY3JpcHRcIjtcclxuIFx0XHRzY3JpcHQuY2hhcnNldCA9IFwidXRmLThcIjtcclxuIFx0XHRzY3JpcHQuc3JjID0gX193ZWJwYWNrX3JlcXVpcmVfXy5wICsgXCJcIiArIGNodW5rSWQgKyBcIi5cIiArIGhvdEN1cnJlbnRIYXNoICsgXCIuaG90LXVwZGF0ZS5qc1wiO1xyXG4gXHRcdGhlYWQuYXBwZW5kQ2hpbGQoc2NyaXB0KTtcclxuIFx0fVxyXG4gXHRcclxuIFx0ZnVuY3Rpb24gaG90RG93bmxvYWRNYW5pZmVzdChjYWxsYmFjaykgeyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVudXNlZC12YXJzXHJcbiBcdFx0aWYodHlwZW9mIFhNTEh0dHBSZXF1ZXN0ID09PSBcInVuZGVmaW5lZFwiKVxyXG4gXHRcdFx0cmV0dXJuIGNhbGxiYWNrKG5ldyBFcnJvcihcIk5vIGJyb3dzZXIgc3VwcG9ydFwiKSk7XHJcbiBcdFx0dHJ5IHtcclxuIFx0XHRcdHZhciByZXF1ZXN0ID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XHJcbiBcdFx0XHR2YXIgcmVxdWVzdFBhdGggPSBfX3dlYnBhY2tfcmVxdWlyZV9fLnAgKyBcIlwiICsgaG90Q3VycmVudEhhc2ggKyBcIi5ob3QtdXBkYXRlLmpzb25cIjtcclxuIFx0XHRcdHJlcXVlc3Qub3BlbihcIkdFVFwiLCByZXF1ZXN0UGF0aCwgdHJ1ZSk7XHJcbiBcdFx0XHRyZXF1ZXN0LnRpbWVvdXQgPSAxMDAwMDtcclxuIFx0XHRcdHJlcXVlc3Quc2VuZChudWxsKTtcclxuIFx0XHR9IGNhdGNoKGVycikge1xyXG4gXHRcdFx0cmV0dXJuIGNhbGxiYWNrKGVycik7XHJcbiBcdFx0fVxyXG4gXHRcdHJlcXVlc3Qub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24oKSB7XHJcbiBcdFx0XHRpZihyZXF1ZXN0LnJlYWR5U3RhdGUgIT09IDQpIHJldHVybjtcclxuIFx0XHRcdGlmKHJlcXVlc3Quc3RhdHVzID09PSAwKSB7XHJcbiBcdFx0XHRcdC8vIHRpbWVvdXRcclxuIFx0XHRcdFx0Y2FsbGJhY2sobmV3IEVycm9yKFwiTWFuaWZlc3QgcmVxdWVzdCB0byBcIiArIHJlcXVlc3RQYXRoICsgXCIgdGltZWQgb3V0LlwiKSk7XHJcbiBcdFx0XHR9IGVsc2UgaWYocmVxdWVzdC5zdGF0dXMgPT09IDQwNCkge1xyXG4gXHRcdFx0XHQvLyBubyB1cGRhdGUgYXZhaWxhYmxlXHJcbiBcdFx0XHRcdGNhbGxiYWNrKCk7XHJcbiBcdFx0XHR9IGVsc2UgaWYocmVxdWVzdC5zdGF0dXMgIT09IDIwMCAmJiByZXF1ZXN0LnN0YXR1cyAhPT0gMzA0KSB7XHJcbiBcdFx0XHRcdC8vIG90aGVyIGZhaWx1cmVcclxuIFx0XHRcdFx0Y2FsbGJhY2sobmV3IEVycm9yKFwiTWFuaWZlc3QgcmVxdWVzdCB0byBcIiArIHJlcXVlc3RQYXRoICsgXCIgZmFpbGVkLlwiKSk7XHJcbiBcdFx0XHR9IGVsc2Uge1xyXG4gXHRcdFx0XHQvLyBzdWNjZXNzXHJcbiBcdFx0XHRcdHRyeSB7XHJcbiBcdFx0XHRcdFx0dmFyIHVwZGF0ZSA9IEpTT04ucGFyc2UocmVxdWVzdC5yZXNwb25zZVRleHQpO1xyXG4gXHRcdFx0XHR9IGNhdGNoKGUpIHtcclxuIFx0XHRcdFx0XHRjYWxsYmFjayhlKTtcclxuIFx0XHRcdFx0XHRyZXR1cm47XHJcbiBcdFx0XHRcdH1cclxuIFx0XHRcdFx0Y2FsbGJhY2sobnVsbCwgdXBkYXRlKTtcclxuIFx0XHRcdH1cclxuIFx0XHR9O1xyXG4gXHR9XHJcblxuIFx0XHJcbiBcdFxyXG4gXHQvLyBDb3BpZWQgZnJvbSBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svcmVhY3QvYmxvYi9iZWY0NWIwL3NyYy9zaGFyZWQvdXRpbHMvY2FuRGVmaW5lUHJvcGVydHkuanNcclxuIFx0dmFyIGNhbkRlZmluZVByb3BlcnR5ID0gZmFsc2U7XHJcbiBcdHRyeSB7XHJcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KHt9LCBcInhcIiwge1xyXG4gXHRcdFx0Z2V0OiBmdW5jdGlvbigpIHt9XHJcbiBcdFx0fSk7XHJcbiBcdFx0Y2FuRGVmaW5lUHJvcGVydHkgPSB0cnVlO1xyXG4gXHR9IGNhdGNoKHgpIHtcclxuIFx0XHQvLyBJRSB3aWxsIGZhaWwgb24gZGVmaW5lUHJvcGVydHlcclxuIFx0fVxyXG4gXHRcclxuIFx0dmFyIGhvdEFwcGx5T25VcGRhdGUgPSB0cnVlO1xyXG4gXHR2YXIgaG90Q3VycmVudEhhc2ggPSBcImQ3MjViYjdhZWY0OGM4M2Q1OWQwXCI7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW51c2VkLXZhcnNcclxuIFx0dmFyIGhvdEN1cnJlbnRNb2R1bGVEYXRhID0ge307XHJcbiBcdHZhciBob3RDdXJyZW50UGFyZW50cyA9IFtdOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVudXNlZC12YXJzXHJcbiBcdFxyXG4gXHRmdW5jdGlvbiBob3RDcmVhdGVSZXF1aXJlKG1vZHVsZUlkKSB7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW51c2VkLXZhcnNcclxuIFx0XHR2YXIgbWUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcclxuIFx0XHRpZighbWUpIHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fO1xyXG4gXHRcdHZhciBmbiA9IGZ1bmN0aW9uKHJlcXVlc3QpIHtcclxuIFx0XHRcdGlmKG1lLmhvdC5hY3RpdmUpIHtcclxuIFx0XHRcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1tyZXF1ZXN0XSkge1xyXG4gXHRcdFx0XHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbcmVxdWVzdF0ucGFyZW50cy5pbmRleE9mKG1vZHVsZUlkKSA8IDApXHJcbiBcdFx0XHRcdFx0XHRpbnN0YWxsZWRNb2R1bGVzW3JlcXVlc3RdLnBhcmVudHMucHVzaChtb2R1bGVJZCk7XHJcbiBcdFx0XHRcdFx0aWYobWUuY2hpbGRyZW4uaW5kZXhPZihyZXF1ZXN0KSA8IDApXHJcbiBcdFx0XHRcdFx0XHRtZS5jaGlsZHJlbi5wdXNoKHJlcXVlc3QpO1xyXG4gXHRcdFx0XHR9IGVsc2UgaG90Q3VycmVudFBhcmVudHMgPSBbbW9kdWxlSWRdO1xyXG4gXHRcdFx0fSBlbHNlIHtcclxuIFx0XHRcdFx0Y29uc29sZS53YXJuKFwiW0hNUl0gdW5leHBlY3RlZCByZXF1aXJlKFwiICsgcmVxdWVzdCArIFwiKSBmcm9tIGRpc3Bvc2VkIG1vZHVsZSBcIiArIG1vZHVsZUlkKTtcclxuIFx0XHRcdFx0aG90Q3VycmVudFBhcmVudHMgPSBbXTtcclxuIFx0XHRcdH1cclxuIFx0XHRcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKHJlcXVlc3QpO1xyXG4gXHRcdH07XHJcbiBcdFx0Zm9yKHZhciBuYW1lIGluIF9fd2VicGFja19yZXF1aXJlX18pIHtcclxuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChfX3dlYnBhY2tfcmVxdWlyZV9fLCBuYW1lKSkge1xyXG4gXHRcdFx0XHRpZihjYW5EZWZpbmVQcm9wZXJ0eSkge1xyXG4gXHRcdFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShmbiwgbmFtZSwgKGZ1bmN0aW9uKG5hbWUpIHtcclxuIFx0XHRcdFx0XHRcdHJldHVybiB7XHJcbiBcdFx0XHRcdFx0XHRcdGNvbmZpZ3VyYWJsZTogdHJ1ZSxcclxuIFx0XHRcdFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcclxuIFx0XHRcdFx0XHRcdFx0Z2V0OiBmdW5jdGlvbigpIHtcclxuIFx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfX1tuYW1lXTtcclxuIFx0XHRcdFx0XHRcdFx0fSxcclxuIFx0XHRcdFx0XHRcdFx0c2V0OiBmdW5jdGlvbih2YWx1ZSkge1xyXG4gXHRcdFx0XHRcdFx0XHRcdF9fd2VicGFja19yZXF1aXJlX19bbmFtZV0gPSB2YWx1ZTtcclxuIFx0XHRcdFx0XHRcdFx0fVxyXG4gXHRcdFx0XHRcdFx0fTtcclxuIFx0XHRcdFx0XHR9KG5hbWUpKSk7XHJcbiBcdFx0XHRcdH0gZWxzZSB7XHJcbiBcdFx0XHRcdFx0Zm5bbmFtZV0gPSBfX3dlYnBhY2tfcmVxdWlyZV9fW25hbWVdO1xyXG4gXHRcdFx0XHR9XHJcbiBcdFx0XHR9XHJcbiBcdFx0fVxyXG4gXHRcclxuIFx0XHRmdW5jdGlvbiBlbnN1cmUoY2h1bmtJZCwgY2FsbGJhY2spIHtcclxuIFx0XHRcdGlmKGhvdFN0YXR1cyA9PT0gXCJyZWFkeVwiKVxyXG4gXHRcdFx0XHRob3RTZXRTdGF0dXMoXCJwcmVwYXJlXCIpO1xyXG4gXHRcdFx0aG90Q2h1bmtzTG9hZGluZysrO1xyXG4gXHRcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5lKGNodW5rSWQsIGZ1bmN0aW9uKCkge1xyXG4gXHRcdFx0XHR0cnkge1xyXG4gXHRcdFx0XHRcdGNhbGxiYWNrLmNhbGwobnVsbCwgZm4pO1xyXG4gXHRcdFx0XHR9IGZpbmFsbHkge1xyXG4gXHRcdFx0XHRcdGZpbmlzaENodW5rTG9hZGluZygpO1xyXG4gXHRcdFx0XHR9XHJcbiBcdFxyXG4gXHRcdFx0XHRmdW5jdGlvbiBmaW5pc2hDaHVua0xvYWRpbmcoKSB7XHJcbiBcdFx0XHRcdFx0aG90Q2h1bmtzTG9hZGluZy0tO1xyXG4gXHRcdFx0XHRcdGlmKGhvdFN0YXR1cyA9PT0gXCJwcmVwYXJlXCIpIHtcclxuIFx0XHRcdFx0XHRcdGlmKCFob3RXYWl0aW5nRmlsZXNNYXBbY2h1bmtJZF0pIHtcclxuIFx0XHRcdFx0XHRcdFx0aG90RW5zdXJlVXBkYXRlQ2h1bmsoY2h1bmtJZCk7XHJcbiBcdFx0XHRcdFx0XHR9XHJcbiBcdFx0XHRcdFx0XHRpZihob3RDaHVua3NMb2FkaW5nID09PSAwICYmIGhvdFdhaXRpbmdGaWxlcyA9PT0gMCkge1xyXG4gXHRcdFx0XHRcdFx0XHRob3RVcGRhdGVEb3dubG9hZGVkKCk7XHJcbiBcdFx0XHRcdFx0XHR9XHJcbiBcdFx0XHRcdFx0fVxyXG4gXHRcdFx0XHR9XHJcbiBcdFx0XHR9KTtcclxuIFx0XHR9XHJcbiBcdFx0aWYoY2FuRGVmaW5lUHJvcGVydHkpIHtcclxuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShmbiwgXCJlXCIsIHtcclxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcclxuIFx0XHRcdFx0dmFsdWU6IGVuc3VyZVxyXG4gXHRcdFx0fSk7XHJcbiBcdFx0fSBlbHNlIHtcclxuIFx0XHRcdGZuLmUgPSBlbnN1cmU7XHJcbiBcdFx0fVxyXG4gXHRcdHJldHVybiBmbjtcclxuIFx0fVxyXG4gXHRcclxuIFx0ZnVuY3Rpb24gaG90Q3JlYXRlTW9kdWxlKG1vZHVsZUlkKSB7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW51c2VkLXZhcnNcclxuIFx0XHR2YXIgaG90ID0ge1xyXG4gXHRcdFx0Ly8gcHJpdmF0ZSBzdHVmZlxyXG4gXHRcdFx0X2FjY2VwdGVkRGVwZW5kZW5jaWVzOiB7fSxcclxuIFx0XHRcdF9kZWNsaW5lZERlcGVuZGVuY2llczoge30sXHJcbiBcdFx0XHRfc2VsZkFjY2VwdGVkOiBmYWxzZSxcclxuIFx0XHRcdF9zZWxmRGVjbGluZWQ6IGZhbHNlLFxyXG4gXHRcdFx0X2Rpc3Bvc2VIYW5kbGVyczogW10sXHJcbiBcdFxyXG4gXHRcdFx0Ly8gTW9kdWxlIEFQSVxyXG4gXHRcdFx0YWN0aXZlOiB0cnVlLFxyXG4gXHRcdFx0YWNjZXB0OiBmdW5jdGlvbihkZXAsIGNhbGxiYWNrKSB7XHJcbiBcdFx0XHRcdGlmKHR5cGVvZiBkZXAgPT09IFwidW5kZWZpbmVkXCIpXHJcbiBcdFx0XHRcdFx0aG90Ll9zZWxmQWNjZXB0ZWQgPSB0cnVlO1xyXG4gXHRcdFx0XHRlbHNlIGlmKHR5cGVvZiBkZXAgPT09IFwiZnVuY3Rpb25cIilcclxuIFx0XHRcdFx0XHRob3QuX3NlbGZBY2NlcHRlZCA9IGRlcDtcclxuIFx0XHRcdFx0ZWxzZSBpZih0eXBlb2YgZGVwID09PSBcIm9iamVjdFwiKVxyXG4gXHRcdFx0XHRcdGZvcih2YXIgaSA9IDA7IGkgPCBkZXAubGVuZ3RoOyBpKyspXHJcbiBcdFx0XHRcdFx0XHRob3QuX2FjY2VwdGVkRGVwZW5kZW5jaWVzW2RlcFtpXV0gPSBjYWxsYmFjaztcclxuIFx0XHRcdFx0ZWxzZVxyXG4gXHRcdFx0XHRcdGhvdC5fYWNjZXB0ZWREZXBlbmRlbmNpZXNbZGVwXSA9IGNhbGxiYWNrO1xyXG4gXHRcdFx0fSxcclxuIFx0XHRcdGRlY2xpbmU6IGZ1bmN0aW9uKGRlcCkge1xyXG4gXHRcdFx0XHRpZih0eXBlb2YgZGVwID09PSBcInVuZGVmaW5lZFwiKVxyXG4gXHRcdFx0XHRcdGhvdC5fc2VsZkRlY2xpbmVkID0gdHJ1ZTtcclxuIFx0XHRcdFx0ZWxzZSBpZih0eXBlb2YgZGVwID09PSBcIm51bWJlclwiKVxyXG4gXHRcdFx0XHRcdGhvdC5fZGVjbGluZWREZXBlbmRlbmNpZXNbZGVwXSA9IHRydWU7XHJcbiBcdFx0XHRcdGVsc2VcclxuIFx0XHRcdFx0XHRmb3IodmFyIGkgPSAwOyBpIDwgZGVwLmxlbmd0aDsgaSsrKVxyXG4gXHRcdFx0XHRcdFx0aG90Ll9kZWNsaW5lZERlcGVuZGVuY2llc1tkZXBbaV1dID0gdHJ1ZTtcclxuIFx0XHRcdH0sXHJcbiBcdFx0XHRkaXNwb3NlOiBmdW5jdGlvbihjYWxsYmFjaykge1xyXG4gXHRcdFx0XHRob3QuX2Rpc3Bvc2VIYW5kbGVycy5wdXNoKGNhbGxiYWNrKTtcclxuIFx0XHRcdH0sXHJcbiBcdFx0XHRhZGREaXNwb3NlSGFuZGxlcjogZnVuY3Rpb24oY2FsbGJhY2spIHtcclxuIFx0XHRcdFx0aG90Ll9kaXNwb3NlSGFuZGxlcnMucHVzaChjYWxsYmFjayk7XHJcbiBcdFx0XHR9LFxyXG4gXHRcdFx0cmVtb3ZlRGlzcG9zZUhhbmRsZXI6IGZ1bmN0aW9uKGNhbGxiYWNrKSB7XHJcbiBcdFx0XHRcdHZhciBpZHggPSBob3QuX2Rpc3Bvc2VIYW5kbGVycy5pbmRleE9mKGNhbGxiYWNrKTtcclxuIFx0XHRcdFx0aWYoaWR4ID49IDApIGhvdC5fZGlzcG9zZUhhbmRsZXJzLnNwbGljZShpZHgsIDEpO1xyXG4gXHRcdFx0fSxcclxuIFx0XHJcbiBcdFx0XHQvLyBNYW5hZ2VtZW50IEFQSVxyXG4gXHRcdFx0Y2hlY2s6IGhvdENoZWNrLFxyXG4gXHRcdFx0YXBwbHk6IGhvdEFwcGx5LFxyXG4gXHRcdFx0c3RhdHVzOiBmdW5jdGlvbihsKSB7XHJcbiBcdFx0XHRcdGlmKCFsKSByZXR1cm4gaG90U3RhdHVzO1xyXG4gXHRcdFx0XHRob3RTdGF0dXNIYW5kbGVycy5wdXNoKGwpO1xyXG4gXHRcdFx0fSxcclxuIFx0XHRcdGFkZFN0YXR1c0hhbmRsZXI6IGZ1bmN0aW9uKGwpIHtcclxuIFx0XHRcdFx0aG90U3RhdHVzSGFuZGxlcnMucHVzaChsKTtcclxuIFx0XHRcdH0sXHJcbiBcdFx0XHRyZW1vdmVTdGF0dXNIYW5kbGVyOiBmdW5jdGlvbihsKSB7XHJcbiBcdFx0XHRcdHZhciBpZHggPSBob3RTdGF0dXNIYW5kbGVycy5pbmRleE9mKGwpO1xyXG4gXHRcdFx0XHRpZihpZHggPj0gMCkgaG90U3RhdHVzSGFuZGxlcnMuc3BsaWNlKGlkeCwgMSk7XHJcbiBcdFx0XHR9LFxyXG4gXHRcclxuIFx0XHRcdC8vaW5oZXJpdCBmcm9tIHByZXZpb3VzIGRpc3Bvc2UgY2FsbFxyXG4gXHRcdFx0ZGF0YTogaG90Q3VycmVudE1vZHVsZURhdGFbbW9kdWxlSWRdXHJcbiBcdFx0fTtcclxuIFx0XHRyZXR1cm4gaG90O1xyXG4gXHR9XHJcbiBcdFxyXG4gXHR2YXIgaG90U3RhdHVzSGFuZGxlcnMgPSBbXTtcclxuIFx0dmFyIGhvdFN0YXR1cyA9IFwiaWRsZVwiO1xyXG4gXHRcclxuIFx0ZnVuY3Rpb24gaG90U2V0U3RhdHVzKG5ld1N0YXR1cykge1xyXG4gXHRcdGhvdFN0YXR1cyA9IG5ld1N0YXR1cztcclxuIFx0XHRmb3IodmFyIGkgPSAwOyBpIDwgaG90U3RhdHVzSGFuZGxlcnMubGVuZ3RoOyBpKyspXHJcbiBcdFx0XHRob3RTdGF0dXNIYW5kbGVyc1tpXS5jYWxsKG51bGwsIG5ld1N0YXR1cyk7XHJcbiBcdH1cclxuIFx0XHJcbiBcdC8vIHdoaWxlIGRvd25sb2FkaW5nXHJcbiBcdHZhciBob3RXYWl0aW5nRmlsZXMgPSAwO1xyXG4gXHR2YXIgaG90Q2h1bmtzTG9hZGluZyA9IDA7XHJcbiBcdHZhciBob3RXYWl0aW5nRmlsZXNNYXAgPSB7fTtcclxuIFx0dmFyIGhvdFJlcXVlc3RlZEZpbGVzTWFwID0ge307XHJcbiBcdHZhciBob3RBdmFpbGlibGVGaWxlc01hcCA9IHt9O1xyXG4gXHR2YXIgaG90Q2FsbGJhY2s7XHJcbiBcdFxyXG4gXHQvLyBUaGUgdXBkYXRlIGluZm9cclxuIFx0dmFyIGhvdFVwZGF0ZSwgaG90VXBkYXRlTmV3SGFzaDtcclxuIFx0XHJcbiBcdGZ1bmN0aW9uIHRvTW9kdWxlSWQoaWQpIHtcclxuIFx0XHR2YXIgaXNOdW1iZXIgPSAoK2lkKSArIFwiXCIgPT09IGlkO1xyXG4gXHRcdHJldHVybiBpc051bWJlciA/ICtpZCA6IGlkO1xyXG4gXHR9XHJcbiBcdFxyXG4gXHRmdW5jdGlvbiBob3RDaGVjayhhcHBseSwgY2FsbGJhY2spIHtcclxuIFx0XHRpZihob3RTdGF0dXMgIT09IFwiaWRsZVwiKSB0aHJvdyBuZXcgRXJyb3IoXCJjaGVjaygpIGlzIG9ubHkgYWxsb3dlZCBpbiBpZGxlIHN0YXR1c1wiKTtcclxuIFx0XHRpZih0eXBlb2YgYXBwbHkgPT09IFwiZnVuY3Rpb25cIikge1xyXG4gXHRcdFx0aG90QXBwbHlPblVwZGF0ZSA9IGZhbHNlO1xyXG4gXHRcdFx0Y2FsbGJhY2sgPSBhcHBseTtcclxuIFx0XHR9IGVsc2Uge1xyXG4gXHRcdFx0aG90QXBwbHlPblVwZGF0ZSA9IGFwcGx5O1xyXG4gXHRcdFx0Y2FsbGJhY2sgPSBjYWxsYmFjayB8fCBmdW5jdGlvbihlcnIpIHtcclxuIFx0XHRcdFx0aWYoZXJyKSB0aHJvdyBlcnI7XHJcbiBcdFx0XHR9O1xyXG4gXHRcdH1cclxuIFx0XHRob3RTZXRTdGF0dXMoXCJjaGVja1wiKTtcclxuIFx0XHRob3REb3dubG9hZE1hbmlmZXN0KGZ1bmN0aW9uKGVyciwgdXBkYXRlKSB7XHJcbiBcdFx0XHRpZihlcnIpIHJldHVybiBjYWxsYmFjayhlcnIpO1xyXG4gXHRcdFx0aWYoIXVwZGF0ZSkge1xyXG4gXHRcdFx0XHRob3RTZXRTdGF0dXMoXCJpZGxlXCIpO1xyXG4gXHRcdFx0XHRjYWxsYmFjayhudWxsLCBudWxsKTtcclxuIFx0XHRcdFx0cmV0dXJuO1xyXG4gXHRcdFx0fVxyXG4gXHRcclxuIFx0XHRcdGhvdFJlcXVlc3RlZEZpbGVzTWFwID0ge307XHJcbiBcdFx0XHRob3RBdmFpbGlibGVGaWxlc01hcCA9IHt9O1xyXG4gXHRcdFx0aG90V2FpdGluZ0ZpbGVzTWFwID0ge307XHJcbiBcdFx0XHRmb3IodmFyIGkgPSAwOyBpIDwgdXBkYXRlLmMubGVuZ3RoOyBpKyspXHJcbiBcdFx0XHRcdGhvdEF2YWlsaWJsZUZpbGVzTWFwW3VwZGF0ZS5jW2ldXSA9IHRydWU7XHJcbiBcdFx0XHRob3RVcGRhdGVOZXdIYXNoID0gdXBkYXRlLmg7XHJcbiBcdFxyXG4gXHRcdFx0aG90U2V0U3RhdHVzKFwicHJlcGFyZVwiKTtcclxuIFx0XHRcdGhvdENhbGxiYWNrID0gY2FsbGJhY2s7XHJcbiBcdFx0XHRob3RVcGRhdGUgPSB7fTtcclxuIFx0XHRcdHZhciBjaHVua0lkID0gMDtcclxuIFx0XHRcdHsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1sb25lLWJsb2Nrc1xyXG4gXHRcdFx0XHQvKmdsb2JhbHMgY2h1bmtJZCAqL1xyXG4gXHRcdFx0XHRob3RFbnN1cmVVcGRhdGVDaHVuayhjaHVua0lkKTtcclxuIFx0XHRcdH1cclxuIFx0XHRcdGlmKGhvdFN0YXR1cyA9PT0gXCJwcmVwYXJlXCIgJiYgaG90Q2h1bmtzTG9hZGluZyA9PT0gMCAmJiBob3RXYWl0aW5nRmlsZXMgPT09IDApIHtcclxuIFx0XHRcdFx0aG90VXBkYXRlRG93bmxvYWRlZCgpO1xyXG4gXHRcdFx0fVxyXG4gXHRcdH0pO1xyXG4gXHR9XHJcbiBcdFxyXG4gXHRmdW5jdGlvbiBob3RBZGRVcGRhdGVDaHVuayhjaHVua0lkLCBtb3JlTW9kdWxlcykgeyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVudXNlZC12YXJzXHJcbiBcdFx0aWYoIWhvdEF2YWlsaWJsZUZpbGVzTWFwW2NodW5rSWRdIHx8ICFob3RSZXF1ZXN0ZWRGaWxlc01hcFtjaHVua0lkXSlcclxuIFx0XHRcdHJldHVybjtcclxuIFx0XHRob3RSZXF1ZXN0ZWRGaWxlc01hcFtjaHVua0lkXSA9IGZhbHNlO1xyXG4gXHRcdGZvcih2YXIgbW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcclxuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XHJcbiBcdFx0XHRcdGhvdFVwZGF0ZVttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XHJcbiBcdFx0XHR9XHJcbiBcdFx0fVxyXG4gXHRcdGlmKC0taG90V2FpdGluZ0ZpbGVzID09PSAwICYmIGhvdENodW5rc0xvYWRpbmcgPT09IDApIHtcclxuIFx0XHRcdGhvdFVwZGF0ZURvd25sb2FkZWQoKTtcclxuIFx0XHR9XHJcbiBcdH1cclxuIFx0XHJcbiBcdGZ1bmN0aW9uIGhvdEVuc3VyZVVwZGF0ZUNodW5rKGNodW5rSWQpIHtcclxuIFx0XHRpZighaG90QXZhaWxpYmxlRmlsZXNNYXBbY2h1bmtJZF0pIHtcclxuIFx0XHRcdGhvdFdhaXRpbmdGaWxlc01hcFtjaHVua0lkXSA9IHRydWU7XHJcbiBcdFx0fSBlbHNlIHtcclxuIFx0XHRcdGhvdFJlcXVlc3RlZEZpbGVzTWFwW2NodW5rSWRdID0gdHJ1ZTtcclxuIFx0XHRcdGhvdFdhaXRpbmdGaWxlcysrO1xyXG4gXHRcdFx0aG90RG93bmxvYWRVcGRhdGVDaHVuayhjaHVua0lkKTtcclxuIFx0XHR9XHJcbiBcdH1cclxuIFx0XHJcbiBcdGZ1bmN0aW9uIGhvdFVwZGF0ZURvd25sb2FkZWQoKSB7XHJcbiBcdFx0aG90U2V0U3RhdHVzKFwicmVhZHlcIik7XHJcbiBcdFx0dmFyIGNhbGxiYWNrID0gaG90Q2FsbGJhY2s7XHJcbiBcdFx0aG90Q2FsbGJhY2sgPSBudWxsO1xyXG4gXHRcdGlmKCFjYWxsYmFjaykgcmV0dXJuO1xyXG4gXHRcdGlmKGhvdEFwcGx5T25VcGRhdGUpIHtcclxuIFx0XHRcdGhvdEFwcGx5KGhvdEFwcGx5T25VcGRhdGUsIGNhbGxiYWNrKTtcclxuIFx0XHR9IGVsc2Uge1xyXG4gXHRcdFx0dmFyIG91dGRhdGVkTW9kdWxlcyA9IFtdO1xyXG4gXHRcdFx0Zm9yKHZhciBpZCBpbiBob3RVcGRhdGUpIHtcclxuIFx0XHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGhvdFVwZGF0ZSwgaWQpKSB7XHJcbiBcdFx0XHRcdFx0b3V0ZGF0ZWRNb2R1bGVzLnB1c2godG9Nb2R1bGVJZChpZCkpO1xyXG4gXHRcdFx0XHR9XHJcbiBcdFx0XHR9XHJcbiBcdFx0XHRjYWxsYmFjayhudWxsLCBvdXRkYXRlZE1vZHVsZXMpO1xyXG4gXHRcdH1cclxuIFx0fVxyXG4gXHRcclxuIFx0ZnVuY3Rpb24gaG90QXBwbHkob3B0aW9ucywgY2FsbGJhY2spIHtcclxuIFx0XHRpZihob3RTdGF0dXMgIT09IFwicmVhZHlcIikgdGhyb3cgbmV3IEVycm9yKFwiYXBwbHkoKSBpcyBvbmx5IGFsbG93ZWQgaW4gcmVhZHkgc3RhdHVzXCIpO1xyXG4gXHRcdGlmKHR5cGVvZiBvcHRpb25zID09PSBcImZ1bmN0aW9uXCIpIHtcclxuIFx0XHRcdGNhbGxiYWNrID0gb3B0aW9ucztcclxuIFx0XHRcdG9wdGlvbnMgPSB7fTtcclxuIFx0XHR9IGVsc2UgaWYob3B0aW9ucyAmJiB0eXBlb2Ygb3B0aW9ucyA9PT0gXCJvYmplY3RcIikge1xyXG4gXHRcdFx0Y2FsbGJhY2sgPSBjYWxsYmFjayB8fCBmdW5jdGlvbihlcnIpIHtcclxuIFx0XHRcdFx0aWYoZXJyKSB0aHJvdyBlcnI7XHJcbiBcdFx0XHR9O1xyXG4gXHRcdH0gZWxzZSB7XHJcbiBcdFx0XHRvcHRpb25zID0ge307XHJcbiBcdFx0XHRjYWxsYmFjayA9IGNhbGxiYWNrIHx8IGZ1bmN0aW9uKGVycikge1xyXG4gXHRcdFx0XHRpZihlcnIpIHRocm93IGVycjtcclxuIFx0XHRcdH07XHJcbiBcdFx0fVxyXG4gXHRcclxuIFx0XHRmdW5jdGlvbiBnZXRBZmZlY3RlZFN0dWZmKG1vZHVsZSkge1xyXG4gXHRcdFx0dmFyIG91dGRhdGVkTW9kdWxlcyA9IFttb2R1bGVdO1xyXG4gXHRcdFx0dmFyIG91dGRhdGVkRGVwZW5kZW5jaWVzID0ge307XHJcbiBcdFxyXG4gXHRcdFx0dmFyIHF1ZXVlID0gb3V0ZGF0ZWRNb2R1bGVzLnNsaWNlKCk7XHJcbiBcdFx0XHR3aGlsZShxdWV1ZS5sZW5ndGggPiAwKSB7XHJcbiBcdFx0XHRcdHZhciBtb2R1bGVJZCA9IHF1ZXVlLnBvcCgpO1xyXG4gXHRcdFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XHJcbiBcdFx0XHRcdGlmKCFtb2R1bGUgfHwgbW9kdWxlLmhvdC5fc2VsZkFjY2VwdGVkKVxyXG4gXHRcdFx0XHRcdGNvbnRpbnVlO1xyXG4gXHRcdFx0XHRpZihtb2R1bGUuaG90Ll9zZWxmRGVjbGluZWQpIHtcclxuIFx0XHRcdFx0XHRyZXR1cm4gbmV3IEVycm9yKFwiQWJvcnRlZCBiZWNhdXNlIG9mIHNlbGYgZGVjbGluZTogXCIgKyBtb2R1bGVJZCk7XHJcbiBcdFx0XHRcdH1cclxuIFx0XHRcdFx0aWYobW9kdWxlSWQgPT09IDApIHtcclxuIFx0XHRcdFx0XHRyZXR1cm47XHJcbiBcdFx0XHRcdH1cclxuIFx0XHRcdFx0Zm9yKHZhciBpID0gMDsgaSA8IG1vZHVsZS5wYXJlbnRzLmxlbmd0aDsgaSsrKSB7XHJcbiBcdFx0XHRcdFx0dmFyIHBhcmVudElkID0gbW9kdWxlLnBhcmVudHNbaV07XHJcbiBcdFx0XHRcdFx0dmFyIHBhcmVudCA9IGluc3RhbGxlZE1vZHVsZXNbcGFyZW50SWRdO1xyXG4gXHRcdFx0XHRcdGlmKHBhcmVudC5ob3QuX2RlY2xpbmVkRGVwZW5kZW5jaWVzW21vZHVsZUlkXSkge1xyXG4gXHRcdFx0XHRcdFx0cmV0dXJuIG5ldyBFcnJvcihcIkFib3J0ZWQgYmVjYXVzZSBvZiBkZWNsaW5lZCBkZXBlbmRlbmN5OiBcIiArIG1vZHVsZUlkICsgXCIgaW4gXCIgKyBwYXJlbnRJZCk7XHJcbiBcdFx0XHRcdFx0fVxyXG4gXHRcdFx0XHRcdGlmKG91dGRhdGVkTW9kdWxlcy5pbmRleE9mKHBhcmVudElkKSA+PSAwKSBjb250aW51ZTtcclxuIFx0XHRcdFx0XHRpZihwYXJlbnQuaG90Ll9hY2NlcHRlZERlcGVuZGVuY2llc1ttb2R1bGVJZF0pIHtcclxuIFx0XHRcdFx0XHRcdGlmKCFvdXRkYXRlZERlcGVuZGVuY2llc1twYXJlbnRJZF0pXHJcbiBcdFx0XHRcdFx0XHRcdG91dGRhdGVkRGVwZW5kZW5jaWVzW3BhcmVudElkXSA9IFtdO1xyXG4gXHRcdFx0XHRcdFx0YWRkQWxsVG9TZXQob3V0ZGF0ZWREZXBlbmRlbmNpZXNbcGFyZW50SWRdLCBbbW9kdWxlSWRdKTtcclxuIFx0XHRcdFx0XHRcdGNvbnRpbnVlO1xyXG4gXHRcdFx0XHRcdH1cclxuIFx0XHRcdFx0XHRkZWxldGUgb3V0ZGF0ZWREZXBlbmRlbmNpZXNbcGFyZW50SWRdO1xyXG4gXHRcdFx0XHRcdG91dGRhdGVkTW9kdWxlcy5wdXNoKHBhcmVudElkKTtcclxuIFx0XHRcdFx0XHRxdWV1ZS5wdXNoKHBhcmVudElkKTtcclxuIFx0XHRcdFx0fVxyXG4gXHRcdFx0fVxyXG4gXHRcclxuIFx0XHRcdHJldHVybiBbb3V0ZGF0ZWRNb2R1bGVzLCBvdXRkYXRlZERlcGVuZGVuY2llc107XHJcbiBcdFx0fVxyXG4gXHRcclxuIFx0XHRmdW5jdGlvbiBhZGRBbGxUb1NldChhLCBiKSB7XHJcbiBcdFx0XHRmb3IodmFyIGkgPSAwOyBpIDwgYi5sZW5ndGg7IGkrKykge1xyXG4gXHRcdFx0XHR2YXIgaXRlbSA9IGJbaV07XHJcbiBcdFx0XHRcdGlmKGEuaW5kZXhPZihpdGVtKSA8IDApXHJcbiBcdFx0XHRcdFx0YS5wdXNoKGl0ZW0pO1xyXG4gXHRcdFx0fVxyXG4gXHRcdH1cclxuIFx0XHJcbiBcdFx0Ly8gYXQgYmVnaW4gYWxsIHVwZGF0ZXMgbW9kdWxlcyBhcmUgb3V0ZGF0ZWRcclxuIFx0XHQvLyB0aGUgXCJvdXRkYXRlZFwiIHN0YXR1cyBjYW4gcHJvcGFnYXRlIHRvIHBhcmVudHMgaWYgdGhleSBkb24ndCBhY2NlcHQgdGhlIGNoaWxkcmVuXHJcbiBcdFx0dmFyIG91dGRhdGVkRGVwZW5kZW5jaWVzID0ge307XHJcbiBcdFx0dmFyIG91dGRhdGVkTW9kdWxlcyA9IFtdO1xyXG4gXHRcdHZhciBhcHBsaWVkVXBkYXRlID0ge307XHJcbiBcdFx0Zm9yKHZhciBpZCBpbiBob3RVcGRhdGUpIHtcclxuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChob3RVcGRhdGUsIGlkKSkge1xyXG4gXHRcdFx0XHR2YXIgbW9kdWxlSWQgPSB0b01vZHVsZUlkKGlkKTtcclxuIFx0XHRcdFx0dmFyIHJlc3VsdCA9IGdldEFmZmVjdGVkU3R1ZmYobW9kdWxlSWQpO1xyXG4gXHRcdFx0XHRpZighcmVzdWx0KSB7XHJcbiBcdFx0XHRcdFx0aWYob3B0aW9ucy5pZ25vcmVVbmFjY2VwdGVkKVxyXG4gXHRcdFx0XHRcdFx0Y29udGludWU7XHJcbiBcdFx0XHRcdFx0aG90U2V0U3RhdHVzKFwiYWJvcnRcIik7XHJcbiBcdFx0XHRcdFx0cmV0dXJuIGNhbGxiYWNrKG5ldyBFcnJvcihcIkFib3J0ZWQgYmVjYXVzZSBcIiArIG1vZHVsZUlkICsgXCIgaXMgbm90IGFjY2VwdGVkXCIpKTtcclxuIFx0XHRcdFx0fVxyXG4gXHRcdFx0XHRpZihyZXN1bHQgaW5zdGFuY2VvZiBFcnJvcikge1xyXG4gXHRcdFx0XHRcdGhvdFNldFN0YXR1cyhcImFib3J0XCIpO1xyXG4gXHRcdFx0XHRcdHJldHVybiBjYWxsYmFjayhyZXN1bHQpO1xyXG4gXHRcdFx0XHR9XHJcbiBcdFx0XHRcdGFwcGxpZWRVcGRhdGVbbW9kdWxlSWRdID0gaG90VXBkYXRlW21vZHVsZUlkXTtcclxuIFx0XHRcdFx0YWRkQWxsVG9TZXQob3V0ZGF0ZWRNb2R1bGVzLCByZXN1bHRbMF0pO1xyXG4gXHRcdFx0XHRmb3IodmFyIG1vZHVsZUlkIGluIHJlc3VsdFsxXSkge1xyXG4gXHRcdFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChyZXN1bHRbMV0sIG1vZHVsZUlkKSkge1xyXG4gXHRcdFx0XHRcdFx0aWYoIW91dGRhdGVkRGVwZW5kZW5jaWVzW21vZHVsZUlkXSlcclxuIFx0XHRcdFx0XHRcdFx0b3V0ZGF0ZWREZXBlbmRlbmNpZXNbbW9kdWxlSWRdID0gW107XHJcbiBcdFx0XHRcdFx0XHRhZGRBbGxUb1NldChvdXRkYXRlZERlcGVuZGVuY2llc1ttb2R1bGVJZF0sIHJlc3VsdFsxXVttb2R1bGVJZF0pO1xyXG4gXHRcdFx0XHRcdH1cclxuIFx0XHRcdFx0fVxyXG4gXHRcdFx0fVxyXG4gXHRcdH1cclxuIFx0XHJcbiBcdFx0Ly8gU3RvcmUgc2VsZiBhY2NlcHRlZCBvdXRkYXRlZCBtb2R1bGVzIHRvIHJlcXVpcmUgdGhlbSBsYXRlciBieSB0aGUgbW9kdWxlIHN5c3RlbVxyXG4gXHRcdHZhciBvdXRkYXRlZFNlbGZBY2NlcHRlZE1vZHVsZXMgPSBbXTtcclxuIFx0XHRmb3IodmFyIGkgPSAwOyBpIDwgb3V0ZGF0ZWRNb2R1bGVzLmxlbmd0aDsgaSsrKSB7XHJcbiBcdFx0XHR2YXIgbW9kdWxlSWQgPSBvdXRkYXRlZE1vZHVsZXNbaV07XHJcbiBcdFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSAmJiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5ob3QuX3NlbGZBY2NlcHRlZClcclxuIFx0XHRcdFx0b3V0ZGF0ZWRTZWxmQWNjZXB0ZWRNb2R1bGVzLnB1c2goe1xyXG4gXHRcdFx0XHRcdG1vZHVsZTogbW9kdWxlSWQsXHJcbiBcdFx0XHRcdFx0ZXJyb3JIYW5kbGVyOiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5ob3QuX3NlbGZBY2NlcHRlZFxyXG4gXHRcdFx0XHR9KTtcclxuIFx0XHR9XHJcbiBcdFxyXG4gXHRcdC8vIE5vdyBpbiBcImRpc3Bvc2VcIiBwaGFzZVxyXG4gXHRcdGhvdFNldFN0YXR1cyhcImRpc3Bvc2VcIik7XHJcbiBcdFx0dmFyIHF1ZXVlID0gb3V0ZGF0ZWRNb2R1bGVzLnNsaWNlKCk7XHJcbiBcdFx0d2hpbGUocXVldWUubGVuZ3RoID4gMCkge1xyXG4gXHRcdFx0dmFyIG1vZHVsZUlkID0gcXVldWUucG9wKCk7XHJcbiBcdFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XHJcbiBcdFx0XHRpZighbW9kdWxlKSBjb250aW51ZTtcclxuIFx0XHJcbiBcdFx0XHR2YXIgZGF0YSA9IHt9O1xyXG4gXHRcclxuIFx0XHRcdC8vIENhbGwgZGlzcG9zZSBoYW5kbGVyc1xyXG4gXHRcdFx0dmFyIGRpc3Bvc2VIYW5kbGVycyA9IG1vZHVsZS5ob3QuX2Rpc3Bvc2VIYW5kbGVycztcclxuIFx0XHRcdGZvcih2YXIgaiA9IDA7IGogPCBkaXNwb3NlSGFuZGxlcnMubGVuZ3RoOyBqKyspIHtcclxuIFx0XHRcdFx0dmFyIGNiID0gZGlzcG9zZUhhbmRsZXJzW2pdO1xyXG4gXHRcdFx0XHRjYihkYXRhKTtcclxuIFx0XHRcdH1cclxuIFx0XHRcdGhvdEN1cnJlbnRNb2R1bGVEYXRhW21vZHVsZUlkXSA9IGRhdGE7XHJcbiBcdFxyXG4gXHRcdFx0Ly8gZGlzYWJsZSBtb2R1bGUgKHRoaXMgZGlzYWJsZXMgcmVxdWlyZXMgZnJvbSB0aGlzIG1vZHVsZSlcclxuIFx0XHRcdG1vZHVsZS5ob3QuYWN0aXZlID0gZmFsc2U7XHJcbiBcdFxyXG4gXHRcdFx0Ly8gcmVtb3ZlIG1vZHVsZSBmcm9tIGNhY2hlXHJcbiBcdFx0XHRkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XHJcbiBcdFxyXG4gXHRcdFx0Ly8gcmVtb3ZlIFwicGFyZW50c1wiIHJlZmVyZW5jZXMgZnJvbSBhbGwgY2hpbGRyZW5cclxuIFx0XHRcdGZvcih2YXIgaiA9IDA7IGogPCBtb2R1bGUuY2hpbGRyZW4ubGVuZ3RoOyBqKyspIHtcclxuIFx0XHRcdFx0dmFyIGNoaWxkID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGUuY2hpbGRyZW5bal1dO1xyXG4gXHRcdFx0XHRpZighY2hpbGQpIGNvbnRpbnVlO1xyXG4gXHRcdFx0XHR2YXIgaWR4ID0gY2hpbGQucGFyZW50cy5pbmRleE9mKG1vZHVsZUlkKTtcclxuIFx0XHRcdFx0aWYoaWR4ID49IDApIHtcclxuIFx0XHRcdFx0XHRjaGlsZC5wYXJlbnRzLnNwbGljZShpZHgsIDEpO1xyXG4gXHRcdFx0XHR9XHJcbiBcdFx0XHR9XHJcbiBcdFx0fVxyXG4gXHRcclxuIFx0XHQvLyByZW1vdmUgb3V0ZGF0ZWQgZGVwZW5kZW5jeSBmcm9tIG1vZHVsZSBjaGlsZHJlblxyXG4gXHRcdGZvcih2YXIgbW9kdWxlSWQgaW4gb3V0ZGF0ZWREZXBlbmRlbmNpZXMpIHtcclxuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvdXRkYXRlZERlcGVuZGVuY2llcywgbW9kdWxlSWQpKSB7XHJcbiBcdFx0XHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcclxuIFx0XHRcdFx0dmFyIG1vZHVsZU91dGRhdGVkRGVwZW5kZW5jaWVzID0gb3V0ZGF0ZWREZXBlbmRlbmNpZXNbbW9kdWxlSWRdO1xyXG4gXHRcdFx0XHRmb3IodmFyIGogPSAwOyBqIDwgbW9kdWxlT3V0ZGF0ZWREZXBlbmRlbmNpZXMubGVuZ3RoOyBqKyspIHtcclxuIFx0XHRcdFx0XHR2YXIgZGVwZW5kZW5jeSA9IG1vZHVsZU91dGRhdGVkRGVwZW5kZW5jaWVzW2pdO1xyXG4gXHRcdFx0XHRcdHZhciBpZHggPSBtb2R1bGUuY2hpbGRyZW4uaW5kZXhPZihkZXBlbmRlbmN5KTtcclxuIFx0XHRcdFx0XHRpZihpZHggPj0gMCkgbW9kdWxlLmNoaWxkcmVuLnNwbGljZShpZHgsIDEpO1xyXG4gXHRcdFx0XHR9XHJcbiBcdFx0XHR9XHJcbiBcdFx0fVxyXG4gXHRcclxuIFx0XHQvLyBOb3QgaW4gXCJhcHBseVwiIHBoYXNlXHJcbiBcdFx0aG90U2V0U3RhdHVzKFwiYXBwbHlcIik7XHJcbiBcdFxyXG4gXHRcdGhvdEN1cnJlbnRIYXNoID0gaG90VXBkYXRlTmV3SGFzaDtcclxuIFx0XHJcbiBcdFx0Ly8gaW5zZXJ0IG5ldyBjb2RlXHJcbiBcdFx0Zm9yKHZhciBtb2R1bGVJZCBpbiBhcHBsaWVkVXBkYXRlKSB7XHJcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoYXBwbGllZFVwZGF0ZSwgbW9kdWxlSWQpKSB7XHJcbiBcdFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdID0gYXBwbGllZFVwZGF0ZVttb2R1bGVJZF07XHJcbiBcdFx0XHR9XHJcbiBcdFx0fVxyXG4gXHRcclxuIFx0XHQvLyBjYWxsIGFjY2VwdCBoYW5kbGVyc1xyXG4gXHRcdHZhciBlcnJvciA9IG51bGw7XHJcbiBcdFx0Zm9yKHZhciBtb2R1bGVJZCBpbiBvdXRkYXRlZERlcGVuZGVuY2llcykge1xyXG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG91dGRhdGVkRGVwZW5kZW5jaWVzLCBtb2R1bGVJZCkpIHtcclxuIFx0XHRcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xyXG4gXHRcdFx0XHR2YXIgbW9kdWxlT3V0ZGF0ZWREZXBlbmRlbmNpZXMgPSBvdXRkYXRlZERlcGVuZGVuY2llc1ttb2R1bGVJZF07XHJcbiBcdFx0XHRcdHZhciBjYWxsYmFja3MgPSBbXTtcclxuIFx0XHRcdFx0Zm9yKHZhciBpID0gMDsgaSA8IG1vZHVsZU91dGRhdGVkRGVwZW5kZW5jaWVzLmxlbmd0aDsgaSsrKSB7XHJcbiBcdFx0XHRcdFx0dmFyIGRlcGVuZGVuY3kgPSBtb2R1bGVPdXRkYXRlZERlcGVuZGVuY2llc1tpXTtcclxuIFx0XHRcdFx0XHR2YXIgY2IgPSBtb2R1bGUuaG90Ll9hY2NlcHRlZERlcGVuZGVuY2llc1tkZXBlbmRlbmN5XTtcclxuIFx0XHRcdFx0XHRpZihjYWxsYmFja3MuaW5kZXhPZihjYikgPj0gMCkgY29udGludWU7XHJcbiBcdFx0XHRcdFx0Y2FsbGJhY2tzLnB1c2goY2IpO1xyXG4gXHRcdFx0XHR9XHJcbiBcdFx0XHRcdGZvcih2YXIgaSA9IDA7IGkgPCBjYWxsYmFja3MubGVuZ3RoOyBpKyspIHtcclxuIFx0XHRcdFx0XHR2YXIgY2IgPSBjYWxsYmFja3NbaV07XHJcbiBcdFx0XHRcdFx0dHJ5IHtcclxuIFx0XHRcdFx0XHRcdGNiKG91dGRhdGVkRGVwZW5kZW5jaWVzKTtcclxuIFx0XHRcdFx0XHR9IGNhdGNoKGVycikge1xyXG4gXHRcdFx0XHRcdFx0aWYoIWVycm9yKVxyXG4gXHRcdFx0XHRcdFx0XHRlcnJvciA9IGVycjtcclxuIFx0XHRcdFx0XHR9XHJcbiBcdFx0XHRcdH1cclxuIFx0XHRcdH1cclxuIFx0XHR9XHJcbiBcdFxyXG4gXHRcdC8vIExvYWQgc2VsZiBhY2NlcHRlZCBtb2R1bGVzXHJcbiBcdFx0Zm9yKHZhciBpID0gMDsgaSA8IG91dGRhdGVkU2VsZkFjY2VwdGVkTW9kdWxlcy5sZW5ndGg7IGkrKykge1xyXG4gXHRcdFx0dmFyIGl0ZW0gPSBvdXRkYXRlZFNlbGZBY2NlcHRlZE1vZHVsZXNbaV07XHJcbiBcdFx0XHR2YXIgbW9kdWxlSWQgPSBpdGVtLm1vZHVsZTtcclxuIFx0XHRcdGhvdEN1cnJlbnRQYXJlbnRzID0gW21vZHVsZUlkXTtcclxuIFx0XHRcdHRyeSB7XHJcbiBcdFx0XHRcdF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpO1xyXG4gXHRcdFx0fSBjYXRjaChlcnIpIHtcclxuIFx0XHRcdFx0aWYodHlwZW9mIGl0ZW0uZXJyb3JIYW5kbGVyID09PSBcImZ1bmN0aW9uXCIpIHtcclxuIFx0XHRcdFx0XHR0cnkge1xyXG4gXHRcdFx0XHRcdFx0aXRlbS5lcnJvckhhbmRsZXIoZXJyKTtcclxuIFx0XHRcdFx0XHR9IGNhdGNoKGVycikge1xyXG4gXHRcdFx0XHRcdFx0aWYoIWVycm9yKVxyXG4gXHRcdFx0XHRcdFx0XHRlcnJvciA9IGVycjtcclxuIFx0XHRcdFx0XHR9XHJcbiBcdFx0XHRcdH0gZWxzZSBpZighZXJyb3IpXHJcbiBcdFx0XHRcdFx0ZXJyb3IgPSBlcnI7XHJcbiBcdFx0XHR9XHJcbiBcdFx0fVxyXG4gXHRcclxuIFx0XHQvLyBoYW5kbGUgZXJyb3JzIGluIGFjY2VwdCBoYW5kbGVycyBhbmQgc2VsZiBhY2NlcHRlZCBtb2R1bGUgbG9hZFxyXG4gXHRcdGlmKGVycm9yKSB7XHJcbiBcdFx0XHRob3RTZXRTdGF0dXMoXCJmYWlsXCIpO1xyXG4gXHRcdFx0cmV0dXJuIGNhbGxiYWNrKGVycm9yKTtcclxuIFx0XHR9XHJcbiBcdFxyXG4gXHRcdGhvdFNldFN0YXR1cyhcImlkbGVcIik7XHJcbiBcdFx0Y2FsbGJhY2sobnVsbCwgb3V0ZGF0ZWRNb2R1bGVzKTtcclxuIFx0fVxyXG5cbiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRleHBvcnRzOiB7fSxcbiBcdFx0XHRpZDogbW9kdWxlSWQsXG4gXHRcdFx0bG9hZGVkOiBmYWxzZSxcbiBcdFx0XHRob3Q6IGhvdENyZWF0ZU1vZHVsZShtb2R1bGVJZCksXG4gXHRcdFx0cGFyZW50czogaG90Q3VycmVudFBhcmVudHMsXG4gXHRcdFx0Y2hpbGRyZW46IFtdXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIGhvdENyZWF0ZVJlcXVpcmUobW9kdWxlSWQpKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBfX3dlYnBhY2tfaGFzaF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSBmdW5jdGlvbigpIHsgcmV0dXJuIGhvdEN1cnJlbnRIYXNoOyB9O1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBob3RDcmVhdGVSZXF1aXJlKDApKDApO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIGQ3MjViYjdhZWY0OGM4M2Q1OWQwIiwiaW1wb3J0IENvbXBvbmVudCBmcm9tICcuL0NvbXBvbmVudCc7XG5pbXBvcnQgc2V0Q29uZmlnIGZyb20gJy4vc2V0Q29uZmlnJztcbmltcG9ydCB7IHNoYWxsb3dDb21wYXJlLCByZWN1cnNlRXF1YWwsIHJlY3Vyc2VPYmplY3QsIHN3YXBFbGVtZW50LCBoYXNDbGFzcyB9IGZyb20gJy4vdXRpbHMnO1xuXG5leHBvcnQge1xuICBDb21wb25lbnQsXG4gIHNldENvbmZpZyxcbiAgc2hhbGxvd0NvbXBhcmUsXG4gIHJlY3Vyc2VFcXVhbCxcbiAgcmVjdXJzZU9iamVjdCxcbiAgc3dhcEVsZW1lbnQsXG4gIGhhc0NsYXNzXG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2luZGV4LmpzIiwiaW1wb3J0IGNvbXBpbGVUZW1wbGF0ZSBmcm9tICcuL3RlbXBsYXRlJztcbmltcG9ydCB7YmluZEFjdGlvbkNyZWF0b3JzLCByZWN1cnNlT2JqZWN0fSBmcm9tICcuL3V0aWxzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29tcG9uZW50IHtcblxuICBjb25zdHJ1Y3RvcihvcHRpb24pIHtcbiAgICBjb25zdCBfdGhpcyA9IHRoaXM7XG5cbiAgICAvLyDliJ3mnJ/ljJblh6bnkIbjgIJcbiAgICBfdGhpcy5vcHRpb24gPSBvcHRpb247XG4gICAgX3RoaXMuaW5pdGlhbGl6ZS5iaW5kKF90aGlzKS5hcHBseShfdGhpcywgYXJndW1lbnRzKTtcbiAgICBfdGhpcy5vbkNsaWNrID0gX3RoaXMub25DbGljayA/IF90aGlzLm9uQ2xpY2suYmluZChfdGhpcykgOiBudWxsO1xuICAgIF90aGlzLmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChvcHRpb24gJiYgb3B0aW9uLnRhZ05hbWUgfHwgX3RoaXMudGFnTmFtZSB8fCAnZGl2Jyk7XG5cbiAgICAvLyByZW5kZXLkuZfjgaPlj5bjgorjgIJyZW5kZXJlcuOBjOWun+ihjOOBleOCjOOCi+OCiOOBhuOBq+OBl+OBvuOBmeOAglxuICAgIF90aGlzLnVwZGF0ZVJlbmRlciA9IF90aGlzLnJlbmRlcjtcbiAgICBfdGhpcy5yZW5kZXIgPSBfdGhpcy5yZW5kZXJlcjtcblxuICAgIC8vIOWIneWbnuWun+ihjOOBr3RlbXBsYXRl44Gu44Kz44Oz44OR44Kk44Or44GM6KGM44KP44KM44CBMuWbnuebruS7pemZjeOBr+OCreODo+ODg+OCt+ODpeOBjOS9v+OCj+OCjOOCi+OCiOOBhuOBq+OBl+OBvuOBmeOAglxuICAgIF90aGlzLnVwZGF0ZVRlbXBsYXRlID0gX3RoaXMuY3JlYXRlVGVtcGxhdGU7XG5cbiAgICByZXR1cm4gX3RoaXM7XG4gIH1cblxuXG4gIC8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbiAgICogcGxlYXNlIG92ZXJyaWRlXG4gICAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cblxuICAvLyBlbGVtZW5044Gu44K/44Kw44CCXG4gIHRhZ05hbWUgPSAnZGl2JztcblxuICAvLyBBY3Rpb25DcmVhdG9yc+OCkua4oeOBl+OBvuOBmeOAgmRpc3BhdGNo44Go57SQ44Gl44GN44GM6KGM44KP44KM44G+44GZ44CCXG4gIEFjdGlvbnMgPSB7fTtcblxuICAvLyB1bm1vdW505pmC44Gr44Oq44K744OD44OI44GV44KM44KL5rGO55So55qE44Gq5YWl44KM54mp44Gn44GZ44CCXG4gIHN0YXRlID0ge307XG5cbiAgLy8g5Yid5pyf5YyW5pmC44Gr5ZG844Gw44KM44G+44GZ44CCXG4gIGluaXRpYWxpemUoKSB7fVxuXG4gIC8vIOWIneWbnuODrOODs+ODgOODquODs+OCsOOBruOBv+OAgXJlbmRlcuWun+ihjOWJjeOBq+WRvOOBsOOCjOOBvuOBmeOAglxuICAvLyDov5TjgorlgKTjgYx0aGlzLmNoaWxkcmVu44Gr6L+95Yqg44GV44KM44G+44GZ44CCXG4gIC8vIHVubW91bnTjgYzlkbzjgbDjgozjgovjgajjgIF0aGlzLmNoaWxkcmVu44Gr5a++44GX5YaN5biw55qE44GrdW5tb3VudOOCkuWun+ihjOOBl+aOg+mZpOOBl+OBvuOBmeOAglxuICBhdHRhY2hDaGlsZHJlbigpIHt9XG5cbiAgLy8g6L+U44KK5YCk44Guc3RyaW5n44Gr5a++44GX44CBdW5kZXJzY29yZS5qc+OBrnRlbXBsYXRl44Gn44Kz44Oz44OR44Kk44Or44GX44G+44GZ44CCXG4gIC8vIGZ1bmN0aW9u44KS6L+U44GZ44GT44Go44KC44Gn44GN44CB44Kz44Oz44OR44Kk44Or5riI44Gu6Zai5pWw44KS6L+U44Gb44Gw44Kz44Oz44OR44Kk44Or5Yem55CG44KS55yB55Wl44Gn44GN44G+44GZ44CCXG4gIHRlbXBsYXRlKCkge1xuICAgIHJldHVybiAnJztcbiAgfVxuXG4gIC8vIOODrOODs+ODgOODquODs+OCsOavjuOBq+WRvOOBsOOCjOOAgWZhbHNl44KS6L+U44GZ44GocmVuZGVy44KS5a6f6KGM44GX44G+44Gb44KT44CCXG4gIC8vIOW8leaVsOOBq3ByZXZQcm9wc+OBqHByb3Bz44GM5rih44KK44G+44GZ44CCXG4gIC8vIHByb3Bz5q+U6LyD44Gn44Os44Oz44OA44Oq44Oz44Kw44GV44KM44Gq44GE44KI44GG44OB44Ol44O844OL44Oz44Kw44GZ44KL44Go44GN44Gr5L2/44GE44G+44GZ44CCXG4gIHNob3VsZENvbXBvbmVudFVwZGF0ZSgpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIC8vIHJlbmRlcuWun+ihjOaZguOAgURPTeOCkue1hOOBv+eri+OBpuOCi+OBruOBq+S9v+eUqOOBl+OBvuOBmeOAglxuICAvLyBzaG91bGRDb21wb25lbnRVcGRhdGXjgpLkvb/jgo/jgZrjgIFyZW5kZXLlhoXjgafjgoLjg6zjg7Pjg4Djg6rjg7PjgrDlrp/ooYzjgpLliLblvqHjgafjgY3jgb7jgZnjgILjgIJcbiAgLy8g6Ieq6Lqr44Gv5YaN44Os44Oz44OA44Oq44Oz44Kw44Gb44Ga44Gr5a2Q44Kz44Oz44Od44O844ON44Oz44OI44Gu44G/5YaN44Os44Oz44OA44Oq44Oz44Kw44GZ44KL44Gq44Gp44CB57Sw44GL44Gq44OB44Ol44O844OL44Oz44Kw44GM5Y+v6IO944Gn44GZ44CCXG4gIHJlbmRlcihwcm9wcykge1xuICAgIHRoaXMucmVuZGVyVGVtcGxhdGUocHJvcHMpO1xuICB9XG5cbiAgLy8g44Kv44Oq44OD44Kv44KS5Yem55CG44GX44Gf44GE44Go44GN44Gr5LiK5pu444GN44GX44Gm44GP44Gg44GV44GE44CCXG4gIC8vIG9uQ2xpY2soZSkge31cblxuICAvLyDliJ3lm57jg6zjg7Pjg4Djg6rjg7PjgrDjga7jgb/jgIFyZW5kZXLlrp/ooYzliY3jgavlkbzjgbDjgozjgb7jgZnjgIJcbiAgY29tcG9uZW50V2lsbE1vdW50KCkge31cblxuICAvLyDjg6zjg7Pjg4Djg6rjg7PjgrDmr47jgavjgIFyZW5kZXLlrp/ooYzliY3jgavlkbzjgbDjgozjgb7jgZnjgIJcbiAgLy8gUmVhY3TjgajpgZXjgaPjgaZtb3VudOaZguOBq+OCguWRvOOBsOOCjOOAgXRoaXMuaXNGaXJzdFJlbmRlcuOBp+WIneWbnuOBi+OBqeOBhuOBi+WIpOWumuOBp+OBjeOBvuOBmeOAglxuICBjb21wb25lbnRXaWxsVXBkYXRlKCkge31cblxuICAvLyDliJ3lm57jg6zjg7Pjg4Djg6rjg7PjgrDjga7jgb/jgIFyZW5kZXLlrp/ooYzlvozjgavlkbzjgbDjgozjgb7jgZnjgIJcbiAgY29tcG9uZW50RGlkTW91bnQoKSB7fVxuXG4gIC8vIOODrOODs+ODgOODquODs+OCsOavjuOBq+OAgXJlbmRlcuWun+ihjOW+jOOBq+WRvOOBsOOCjOOBvuOBmeOAglxuICAvLyBSZWFjdOOBqOmBleOBo+OBpm1vdW505pmC44Gr44KC5ZG844Gw44KM44CBdGhpcy5pc0ZpcnN0UmVuZGVy44Gn5Yid5Zue44GL44Gp44GG44GL5Yik5a6a44Gn44GN44G+44GZ44CCXG4gIGNvbXBvbmVudERpZFVwZGF0ZSgpIHt9XG5cbiAgLy8gdW5tb3VudOaZguOBq+WRvOOBsOOCjOOBvuOBmeOAglxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHt9XG5cblxuXG4gIC8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbiAgICogdGhpcyByZWZlcmVuY2VcbiAgICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuXG4gIC8vIHJlbmRlcuOBq+a4oeOBl+OBn+W8leaVsOOBjOS/neaMgeOBleOCjOOBvuOBmeOAglxuICBwcm9wcyA9IG51bGw7XG5cbiAgLy8gMeOBpOWJjeOBrnJlbmRlcuOBq+a4oeOBl+OBn+W8leaVsOOBjOS/neaMgeOBleOCjOOBvuOBmeOAglxuICBwcmV2UHJvcHMgPSBudWxsO1xuXG4gIC8vIOWIneWbnuODrOODs+ODgOODquODs+OCsOOBi+OBqeOBhuOBi+OBruODleODqeOCsFxuICBpc0ZpcnN0UmVuZGVyID0gdHJ1ZTtcblxuICAvLyBBY3Rpb25z44KSZGlzcGF0Y2jjgafjg6njg4Pjg5fjgZfjgZ/plqLmlbDjgYzkv53mjIHjgZXjgozjgb7jgZnjgIJcbiAgYWN0aW9ucyA9IG51bGw7XG5cbiAgLy8gYXR0YWNoQ2hpbGRyZW7jga7ov5TjgorlgKTjgYzkv53mjIHjgZXjgozjgb7jgZnjgIJcbiAgY2hpbGRyZW4gPSBudWxsO1xuXG4gIC8vIG5ld+OBp+OCpOODs+OCueOCv+ODs+OCueS9nOaIkOaZguOBruW8leaVsOOBjOS/neaMgeOBleOCjOOBvuOBmeOAglxuICBvcHRpb24gPSBudWxsO1xuXG5cblxuICAvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4gICAqIHV0aWxcbiAgICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuXG4gIC8vIOiHqui6q+OBrmlubmVySFRNTOOCknRlbXBsYXRl44Gn5pu05paw44GX44G+44GZ44CCXG4gIHJlbmRlclRlbXBsYXRlKHByb3BzKSB7XG4gICAgdGhpcy5lbC5pbm5lckhUTUwgPSB0aGlzLnVwZGF0ZVRlbXBsYXRlKHByb3BzKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIC8vIHF1ZXJ5U2VsZWN0b3Ljga7jgqjjgqTjg6rjgqLjgrnjgIJcbiAgLy8gdGhpcy4kKHNlbGVjdG9yKSDjga7jgojjgYbjgavkvb/jgYTjgb7jgZnjgIJcbiAgJChzZWxlY3Rvcil7XG4gICAgcmV0dXJuIHRoaXMuZWwucXVlcnlTZWxlY3RvcihzZWxlY3Rvcik7XG4gIH07XG5cbiAgLy8g6Ieq6Lqr44Gu44Kk44Oz44K544K/44Oz44K544KS5L+d5a2Y44GX44G+44GZ44CCXG4gIC8vIGluaXRpYWxpemXjgIHjgb7jgZ/jga9jb25zdHJ1Y3RvcuOBp+Wun+ihjOOBl+OBpuOBiuOBj+OBqOOAgVxuICAvLyB0ZW1wbGF0ZeOBruOCs+ODs+ODkeOCpOODq+e1kOaenOOCkuOCt+OCp+OCouOBmeOCi+OCiOOBhuOBq+OBquOCiuOBvuOBmeOAglxuICBjcmVhdGVJbnN0YW5jZVJlZihUYXJnZXQpe1xuICAgIGNvbnN0IF90aGlzID0gdGhpcztcbiAgICBpZiAodHlwZW9mIFRhcmdldC5pbnN0YW5jZSA9PT0gXCJvYmplY3RcIil7XG4gICAgICBfdGhpcy5pbnN0YW5jZSA9IFRhcmdldC5pbnN0YW5jZTtcbiAgICB9ZWxzZXtcbiAgICAgIFRhcmdldC5pbnN0YW5jZSA9IF90aGlzO1xuICAgIH1cbiAgfVxuXG4gIC8vIERPTeOCkuWJiumZpOOBmeOCi+OBqOOBjeOBq+WRvOOBs+WHuuOBl+OBpuOBj+OBoOOBleOBhOOAglxuICAvLyBSZWFjdOOBqOmBleOBo+OBpuiHquWIhuOBp3VubW91bnTjgpLlrp/ooYzjgZnjgovlv4XopoHjgYzjgYLjgovjgZ/jgoHjgIFcbiAgLy8gdW5tb3VudOOCkuaYjuekuueahOOBq+WRvOOBsOOBquOBhOOBqGNvbXBvbmVudFdpbGxVbm1vdW5044KC5a6f6KGM44GV44KM44G+44Gb44KT44CCXG4gIHVubW91bnQoKSB7XG4gICAgY29uc3QgX3RoaXMgPSB0aGlzO1xuICAgIF90aGlzLmVsLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoX3RoaXMuZWwpO1xuICAgIF90aGlzLmNvbXBvbmVudFdpbGxVbm1vdW50KCk7XG4gICAgcmVjdXJzZU9iamVjdChfdGhpcy5jaGlsZHJlbiwgb2JqID0+IG9iai5pc1B1cmVkdXhDb21wb25lbnQsIG9iaiA9PiB7XG4gICAgICBvYmoudW5tb3VudCgpO1xuICAgICAgcmV0dXJuIG9iajtcbiAgICB9KTtcbiAgICBpZihfdGhpcy5vbkNsaWNrKXtcbiAgICAgIF90aGlzLmVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgX3RoaXMub25DbGljaywgZmFsc2UpO1xuICAgIH1cbiAgICBfdGhpcy5hY3Rpb25zID0gbnVsbDtcbiAgICBfdGhpcy5jaGlsZHJlbiA9IG51bGw7XG4gICAgX3RoaXMucHJvcHMgPSBudWxsO1xuICAgIF90aGlzLnByZXZQcm9wcyA9IG51bGw7XG4gICAgX3RoaXMuc3RhdGUgPSB7fTtcbiAgICBfdGhpcy5pc0ZpcnN0UmVuZGVyID0gdHJ1ZTtcbiAgICByZXR1cm4gX3RoaXM7XG4gIH1cblxuXG4gIC8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbiAgICogcHJpdmF0ZVxuICAgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG5cbiAgaXNQdXJlZHV4Q29tcG9uZW50ID0gdHJ1ZTtcbiAgdGVtcGxhdGVDYWNoZSA9IG51bGw7XG5cbiAgY3JlYXRlVGVtcGxhdGUocHJvcHMpe1xuICAgIGNvbnN0IF90aGlzID0gdGhpcy5pbnN0YW5jZSB8fCB0aGlzO1xuICAgIGlmKCFfdGhpcy50ZW1wbGF0ZUNhY2hlKXtcbiAgICAgIGNvbnN0IHRlbXBsYXRlID0gX3RoaXMudGVtcGxhdGUocHJvcHMpO1xuICAgICAgX3RoaXMudGVtcGxhdGVDYWNoZSA9ICh0eXBlb2YgdGVtcGxhdGUgPT09ICdmdW5jdGlvbicpID8gdGVtcGxhdGUgOiBjb21waWxlVGVtcGxhdGUodGVtcGxhdGUpO1xuICAgIH1cbiAgICBfdGhpcy51cGRhdGVUZW1wbGF0ZSA9IF90aGlzLnRlbXBsYXRlQ2FjaGU7XG4gICAgcmV0dXJuIF90aGlzLnRlbXBsYXRlQ2FjaGUocHJvcHMpO1xuICB9XG5cbiAgcmVuZGVyZXIobmV4dFByb3BzKSB7XG4gICAgY29uc3QgX3RoaXMgPSB0aGlzO1xuICAgIGNvbnN0IGlzRmlyc3RSZW5kZXIgPSBfdGhpcy5pc0ZpcnN0UmVuZGVyO1xuICAgIF90aGlzLnByZXZQcm9wcyA9IF90aGlzLnByb3BzO1xuICAgIF90aGlzLnByb3BzID0gbmV4dFByb3BzO1xuXG4gICAgaWYoaXNGaXJzdFJlbmRlcil7XG4gICAgICBpZihfdGhpcy5vbkNsaWNrKXtcbiAgICAgICAgX3RoaXMuZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBfdGhpcy5vbkNsaWNrLCBmYWxzZSk7XG4gICAgICB9XG4gICAgICBfdGhpcy5hY3Rpb25zID0gYmluZEFjdGlvbkNyZWF0b3JzKF90aGlzLmRpc3BhdGNoLCBfdGhpcy5kaXNwYXRjaGVyLCBfdGhpcy5BY3Rpb25zKTtcbiAgICAgIF90aGlzLmNoaWxkcmVuID0gX3RoaXMuYXR0YWNoQ2hpbGRyZW4obmV4dFByb3BzKSB8fCB7fTtcbiAgICAgIF90aGlzLmNvbXBvbmVudFdpbGxNb3VudCgpO1xuICAgIH1cbiAgICBfdGhpcy5jb21wb25lbnRXaWxsVXBkYXRlKCk7XG5cbiAgICBpZihpc0ZpcnN0UmVuZGVyIHx8IF90aGlzLnNob3VsZENvbXBvbmVudFVwZGF0ZShfdGhpcy5wcmV2UHJvcHMsIG5leHRQcm9wcykpe1xuICAgICAgX3RoaXMudXBkYXRlUmVuZGVyKC4uLmFyZ3VtZW50cyk7XG4gICAgfVxuXG4gICAgaWYoaXNGaXJzdFJlbmRlcil7XG4gICAgICBfdGhpcy5jb21wb25lbnREaWRNb3VudCgpO1xuICAgIH1cbiAgICBfdGhpcy5jb21wb25lbnREaWRVcGRhdGUoKTtcblxuICAgIF90aGlzLmlzRmlyc3RSZW5kZXIgPSBmYWxzZTtcblxuICAgIHJldHVybiBfdGhpcztcbiAgfVxuXG59XG5cbkNvbXBvbmVudC5leHRlbmQgPSBmdW5jdGlvbiBleHRlbmQoY29uZmlnKXtcbiAgY29uc3QgQ2xhc3MgPSBmdW5jdGlvbigpe1xuICAgIENsYXNzLnByb3RvdHlwZS5fX3Byb3RvX18gPSBDb21wb25lbnQucHJvdG90eXBlO1xuICAgIENvbXBvbmVudC5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICB9O1xuICBDbGFzcy5wcm90b3R5cGUgPSBjb25maWc7XG4gIHJldHVybiBDbGFzcztcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvQ29tcG9uZW50LmpzIiwiY29uc3QgT2JqZWN0S2V5cyA9IE9iamVjdC5rZXlzO1xuXG5leHBvcnQgZnVuY3Rpb24gYmluZEFjdGlvbkNyZWF0b3JzKGRpc3BhdGNoLCBkaXNwYXRjaGVyLCBhY3Rpb25zKXtcbiAgY29uc3QgcmV0ID0ge307XG4gIE9iamVjdEtleXMoYWN0aW9ucykubWFwKChrZXkpPT57XG4gICAgaWYgKHR5cGVvZiBhY3Rpb25zW2tleV0gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHJldFtrZXldID1cbiAgICAgICAgZGlzcGF0Y2ggPyBmdW5jdGlvbigpeyByZXR1cm4gZGlzcGF0Y2goYWN0aW9uc1trZXldLmFwcGx5KG51bGwsIGFyZ3VtZW50cykpOyB9XG4gICAgICAgIDogZGlzcGF0Y2hlciA/IGRpc3BhdGNoZXIoYWN0aW9uc1trZXldKVxuICAgICAgICA6IGFjdGlvbnNba2V5XTtcbiAgICB9XG4gIH0pO1xuICByZXR1cm4gcmV0O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2hhbGxvd0NvbXBhcmUob2JqQSwgb2JqQil7XG4gIHJldHVybiAhcmVjdXJzZUVxdWFsKG9iakEsIG9iakIsIDEpO1xufVxuXG4vKipcbiAqIE1vZGlmaWVkIGZyb20gaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL2ZianMvYmxvYi9tYXN0ZXIvcGFja2FnZXMvZmJqcy9zcmMvY29yZS9zaGFsbG93RXF1YWwuanNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlY3Vyc2VFcXVhbChvYmpBLCBvYmpCLCByZWN1cnNlQ291bnQpIHtcbiAgaWYob2JqQSA9PT0gb2JqQil7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBpZih0eXBlb2Ygb2JqQSAhPT0gJ29iamVjdCcgfHwgb2JqQSA9PT0gbnVsbCB8fFxuICAgIHR5cGVvZiBvYmpCICE9PSAnb2JqZWN0JyB8fCBvYmpCID09PSBudWxsKXtcbiAgICByZXR1cm4gb2JqQSA9PT0gb2JqQjtcbiAgfVxuXG4gIGNvbnN0IGtleXNCID0gT2JqZWN0S2V5cyhvYmpCKTtcbiAgY29uc3Qga2V5c0EgPSBPYmplY3RLZXlzKG9iakEpO1xuXG4gIGlmKGtleXNBLmxlbmd0aCAhPT0ga2V5c0IubGVuZ3RoKXtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBmb3IobGV0IGkgPSAwOyBpIDwga2V5c0IubGVuZ3RoOyBpKyspe1xuICAgIGlmKCFvYmpBLmhhc093blByb3BlcnR5KGtleXNCW2ldKSl7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgaWYocmVjdXJzZUNvdW50ICYmICFyZWN1cnNlRXF1YWwob2JqQVtrZXlzQltpXV0sIG9iakJba2V5c0JbaV1dLCByZWN1cnNlQ291bnQgLSAxKSl7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgaWYob2JqQVtrZXlzQltpXV0gIT09IG9iakJba2V5c0JbaV1dKXtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdHJ1ZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlY3Vyc2VPYmplY3Qob2JqLCBjaGVja09iaiwgaXRlcmF0ZWUpe1xuICBpZih0eXBlb2Ygb2JqICE9PSAnb2JqZWN0JyB8fCBvYmogPT09IG51bGwpe1xuICAgIHJldHVybiBpdGVyYXRlZShvYmopO1xuICB9XG5cbiAgT2JqZWN0S2V5cyhvYmopLm1hcChrZXkgPT4ge1xuICAgIGlmKGNoZWNrT2JqICYmIGNoZWNrT2JqKG9ialtrZXldKSl7XG4gICAgICBvYmpba2V5XSA9IGl0ZXJhdGVlKG9ialtrZXldKTtcbiAgICB9ZWxzZXtcbiAgICAgIHJlY3Vyc2VPYmplY3Qob2JqW2tleV0sIGNoZWNrT2JqLCBpdGVyYXRlZSk7XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gb2JqO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3dhcEVsZW1lbnQoY29udGFpbmVyLCBzZWxlY3RvciwgZWwpIHtcbiAgY29uc3QgdGFyZ2V0ID0gY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpO1xuICBpZih0YXJnZXQpIHtcbiAgICB0YXJnZXQucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoZWwsIHRhcmdldCk7XG4gICAgY29udGFpbmVyLnJlbW92ZUNoaWxkKHRhcmdldCk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGhhc0NsYXNzKGV2ZW50LCBuYW1lKXtcbiAgcmV0dXJuIGV2ZW50LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMobmFtZSk7XG59XG5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy91dGlscy5qcyIsImltcG9ydCBDb21wb25lbnQgZnJvbSAnLi9Db21wb25lbnQnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzZXRDb25maWcoY29uZmlnID0ge30pe1xuICBpZihjb25maWcuZGlzcGF0Y2gpe1xuICAgIENvbXBvbmVudC5wcm90b3R5cGUuZGlzcGF0Y2ggPSBjb25maWcuZGlzcGF0Y2g7XG4gIH1cbiAgaWYoY29uZmlnLmRpc3BhdGNoZXIpe1xuICAgIENvbXBvbmVudC5wcm90b3R5cGUuZGlzcGF0Y2hlciA9IGNvbmZpZy5kaXNwYXRjaGVyO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc2V0Q29uZmlnLmpzIiwiLyoqXG4gKiBNb2RpZmllZCB0ZW1wbGF0ZSBtZXRob2QgZnJvbSBodHRwczovL2dpdGh1Yi5jb20vamFzaGtlbmFzL3VuZGVyc2NvcmUvYmxvYi9tYXN0ZXIvdW5kZXJzY29yZS5qc1xuICpcbiAqIFVuZGVyc2NvcmUuanMgMS44LjNcbiAqIGh0dHA6Ly91bmRlcnNjb3JlanMub3JnXG4gKiAoYykgMjAwOS0yMDE1IEplcmVteSBBc2hrZW5hcywgRG9jdW1lbnRDbG91ZCBhbmQgSW52ZXN0aWdhdGl2ZSBSZXBvcnRlcnMgJiBFZGl0b3JzXG4gKiBVbmRlcnNjb3JlIG1heSBiZSBmcmVlbHkgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlLlxuICovXG5cbi8qKlxuICogZXNjYXBlXG4gKi9cbmNvbnN0IGVzY2FwZXMgPSBbJyYnLCc8JywnPicsJ1wiJyxcIidcIiwnYCddO1xuY29uc3QgZXNjYXBlTWFwID0ge1xuICAnJic6ICcmYW1wOycsXG4gICc8JzogJyZsdDsnLFxuICAnPic6ICcmZ3Q7JyxcbiAgJ1wiJzogJyZxdW90OycsXG4gIFwiJ1wiOiAnJiN4Mjc7JyxcbiAgJ2AnOiAnJiN4NjA7J1xufTtcbmNvbnN0IHNvdXJjZSA9ICcoPzonICsgZXNjYXBlcy5qb2luKCd8JykgKyAnKSc7XG5jb25zdCB0ZXN0UmVnZXhwID0gbmV3IFJlZ0V4cChzb3VyY2UpO1xuY29uc3QgcmVwbGFjZVJlZ2V4cCA9IG5ldyBSZWdFeHAoc291cmNlLCAnZycpO1xuZnVuY3Rpb24gZXNjYXBlcihtYXRjaCkge1xuICByZXR1cm4gZXNjYXBlTWFwW21hdGNoXTtcbn1cbmZ1bmN0aW9uIF9lc2NhcGUoc3RyaW5nKSB7XG4gIHN0cmluZyA9IHN0cmluZyA9PSBudWxsID8gJycgOiAnJyArIHN0cmluZztcbiAgcmV0dXJuIHRlc3RSZWdleHAudGVzdChzdHJpbmcpID8gc3RyaW5nLnJlcGxhY2UocmVwbGFjZVJlZ2V4cCwgZXNjYXBlcikgOiBzdHJpbmc7XG59XG5cbi8qKlxuICogdGVtcGxhdGVcbiAqL1xuY29uc3QgdGVtcGxhdGVFc2NhcGVzID0ge1xuICBcIidcIiA6IFwiJ1wiLFxuICAnXFxcXCc6ICdcXFxcJyxcbiAgJ1xccic6ICdyJyxcbiAgJ1xcbic6ICduJyxcbiAgJ1xcdTIwMjgnOiAndTIwMjgnLFxuICAnXFx1MjAyOSc6ICd1MjAyOSdcbn07XG5jb25zdCB0ZW1wbGF0ZUVzY2FwZXIgPSAvXFxcXHwnfFxccnxcXG58XFx1MjAyOHxcXHUyMDI5L2c7XG5cbmZ1bmN0aW9uIHRlbXBsYXRlRXNjYXBlQ2hhcihtYXRjaCkge1xuICByZXR1cm4gJ1xcXFwnICsgdGVtcGxhdGVFc2NhcGVzW21hdGNoXTtcbn1cblxuY29uc3Qgbm9NYXRjaCA9IC8oLileLztcblxuY29uc3QgbWF0Y2hlciA9IG5ldyBSZWdFeHAoW1xuICAgICgvPCUtKFtcXHNcXFNdKz8pJT4vZyB8fCBub01hdGNoKS5zb3VyY2UsXG4gICAgKCAvPCU9KFtcXHNcXFNdKz8pJT4vZyB8fCBub01hdGNoKS5zb3VyY2UsXG4gICAgKC88JShbXFxzXFxTXSs/KSU+L2cgfHwgbm9NYXRjaCkuc291cmNlXG4gIF0uam9pbignfCcpICsgJ3wkJywgJ2cnKTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdGVtcGxhdGUodGV4dCkge1xuICBsZXQgaW5kZXggPSAwO1xuICBsZXQgc291cmNlID0gXCJfX3ArPSdcIjtcbiAgdGV4dC5yZXBsYWNlKG1hdGNoZXIsIGZ1bmN0aW9uIChtYXRjaCwgZXNjYXBlLCBpbnRlcnBvbGF0ZSwgZXZhbHVhdGUsIG9mZnNldCkge1xuICAgIHNvdXJjZSArPSB0ZXh0LnNsaWNlKGluZGV4LCBvZmZzZXQpLnJlcGxhY2UodGVtcGxhdGVFc2NhcGVyLCB0ZW1wbGF0ZUVzY2FwZUNoYXIpO1xuXG4gICAgaWYgKGVzY2FwZSkge1xuICAgICAgc291cmNlICs9IFwiJytcXG4oKF9fdD0oXCIgKyBlc2NhcGUgKyBcIikpPT1udWxsPycnOl9lc2NhcGUoX190KSkrXFxuJ1wiO1xuICAgIH0gZWxzZSBpZiAoaW50ZXJwb2xhdGUpIHtcbiAgICAgIHNvdXJjZSArPSBcIicrXFxuKChfX3Q9KFwiICsgaW50ZXJwb2xhdGUgKyBcIikpPT1udWxsPycnOl9fdCkrXFxuJ1wiO1xuICAgIH0gZWxzZSBpZiAoZXZhbHVhdGUpIHtcbiAgICAgIHNvdXJjZSArPSBcIic7XFxuXCIgKyBldmFsdWF0ZSArIFwiXFxuX19wKz0nXCI7XG4gICAgfVxuICAgIGluZGV4ID0gb2Zmc2V0ICsgbWF0Y2gubGVuZ3RoO1xuICAgIHJldHVybiBtYXRjaDtcbiAgfSk7XG4gIHNvdXJjZSA9IFwidmFyIF9fdCxfX3A9JycsX19qPUFycmF5LnByb3RvdHlwZS5qb2luLHByaW50PWZ1bmN0aW9uKCl7X19wKz1fX2ouY2FsbChhcmd1bWVudHMsJycpO307XFxud2l0aChvYmp8fHt9KXtcXG5cIiArIHNvdXJjZSArIFwiJztcXG59XFxucmV0dXJuIF9fcDtcXG5cIjtcbiAgcmV0dXJuIG5ldyBGdW5jdGlvbignb2JqJywgc291cmNlKTtcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy90ZW1wbGF0ZS5qcyJdLCJzb3VyY2VSb290IjoiIn0=