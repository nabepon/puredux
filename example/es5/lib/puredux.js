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
/******/ 	var hotCurrentHash = "67a04768baa1ff7cbe2c"; // eslint-disable-line no-unused-vars
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
	exports.swapElement = exports.recurseObject = exports.recurseEqual = exports.shouldComponentUpdate = exports.mapDispatchToActions = exports.createTemplate = exports.setConfig = exports.Component = undefined;
	
	var _Component = __webpack_require__(1);
	
	var _Component2 = _interopRequireDefault(_Component);
	
	var _createTemplate = __webpack_require__(2);
	
	var _createTemplate2 = _interopRequireDefault(_createTemplate);
	
	var _setConfig = __webpack_require__(4);
	
	var _setConfig2 = _interopRequireDefault(_setConfig);
	
	var _utils = __webpack_require__(3);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	exports.Component = _Component2['default'];
	exports.setConfig = _setConfig2['default'];
	exports.createTemplate = _createTemplate2['default'];
	exports.mapDispatchToActions = _utils.mapDispatchToActions;
	exports.shouldComponentUpdate = _utils.shouldComponentUpdate;
	exports.recurseEqual = _utils.recurseEqual;
	exports.recurseObject = _utils.recurseObject;
	exports.swapElement = _utils.swapElement;

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _createTemplate = __webpack_require__(2);
	
	var _createTemplate2 = _interopRequireDefault(_createTemplate);
	
	var _utils = __webpack_require__(3);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Component = function () {
	  function Component(option) {
	    _classCallCheck(this, Component);
	
	    this.tagName = 'div';
	    this.Actions = {};
	    this.actions = null;
	    this.option = null;
	    this.children = null;
	    this.state = {};
	    this.props = null;
	    this.prevProps = null;
	    this.enableThisReference = false;
	    this.renderChildrenDependsOnParent = false;
	    this.shouldComponentUpdate = _utils.shouldComponentUpdate;
	    this.templateCache = null;
	
	    var _this = this;
	    _this.initialize.bind(_this).apply(_this, arguments);
	    _this.isPureduxComponent = true;
	    _this.el = document.createElement(option && option.tagName || _this.tagName || 'div');
	    _this.option = option;
	    _this.__isMountRender = true;
	    _this.onClick = _this.onClick ? _this.onClick.bind(_this) : null;
	    _this.renderSuper = _this.render;
	    return _this;
	  }
	
	  _createClass(Component, [{
	    key: 'createInstanceRef',
	    value: function createInstanceRef(Target) {
	      var _this = this;
	      if (_typeof(Target.instance) === "object") {
	        _this.instance = Target.instance;
	      } else {
	        Target.instance = _this;
	      }
	    }
	  }, {
	    key: 'initialize',
	    value: function initialize() {}
	  }, {
	    key: 'componentWillMount',
	    value: function componentWillMount() {}
	  }, {
	    key: 'componentWillUpdate',
	    value: function componentWillUpdate() {}
	  }, {
	    key: 'componentDidMount',
	    value: function componentDidMount() {}
	  }, {
	    key: 'componentDidUpdate',
	    value: function componentDidUpdate() {}
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {}
	  }, {
	    key: 'attachChildren',
	    value: function attachChildren() {}
	  }, {
	    key: 'noop',
	    value: function noop() {}
	  }, {
	    key: 'createTemplate',
	    value: function createTemplate() {}
	  }, {
	    key: 'template',
	    value: function template(props) {
	      var _this = this.instance || this;
	
	      if (!_this.templateCache) {
	        var templateCache = _this.createTemplate(props);
	        var type = typeof templateCache === 'undefined' ? 'undefined' : _typeof(templateCache);
	
	        if (type === 'function') {
	          _this.templateCache = templateCache;
	        } else if (type === 'string') {
	          _this.templateCache = (0, _createTemplate2['default'])(templateCache);
	        } else {
	          _this.templateCache = (0, _createTemplate2['default'])('');
	        }
	      }
	      return _this.templateCache(props);
	    }
	  }, {
	    key: '$',
	    value: function $(selector) {
	      return this.el.querySelector(selector);
	    }
	  }, {
	    key: 'updateRender',
	    value: function updateRender() {
	      var _this = this;
	      _this.el.innerHTML = _this.template.apply(_this, arguments);
	      return _this;
	    }
	  }, {
	    key: 'render',
	    value: function render(nextProps) {
	      var _this = this;
	      var isMountRender = _this.__isMountRender;
	      var prevProps = _this.prevProps;
	      _this.prevProps = prevProps;
	      _this.props = nextProps;
	
	      if (isMountRender) {
	        if (_this.onClick) {
	          _this.el.addEventListener('click', _this.onClick, false);
	        }
	        _this.actions = (0, _utils.mapDispatchToActions)(_this.dispatch || _this.noop, _this.Actions);
	        _this.children = _this.attachChildren(nextProps) || {};
	        _this.componentWillMount();
	      }
	      _this.componentWillUpdate(isMountRender);
	
	      if (isMountRender || _this.shouldComponentUpdate(prevProps, nextProps)) {
	        _this.__isMountRender = false;
	        _this.updateRender(nextProps);
	      }
	
	      if (isMountRender) {
	        _this.componentDidMount();
	      }
	      _this.componentDidUpdate(isMountRender);
	
	      return _this;
	    }
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
	      _this.__isMountRender = true;
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
	exports['default'] = createTemplate;
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
	
	function createTemplate(text) {
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

/***/ },
/* 3 */
/***/ function(module, exports) {

	'use strict';
	
	exports.__esModule = true;
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	exports.mapDispatchToActions = mapDispatchToActions;
	exports.shouldComponentUpdate = shouldComponentUpdate;
	exports.recurseEqual = recurseEqual;
	exports.recurseObject = recurseObject;
	exports.swapElement = swapElement;
	var ObjectKeys = Object.keys;
	
	function mapDispatchToActions(dispatch, actions) {
	  var ret = {};
	  ObjectKeys(actions).map(function (key) {
	    if (typeof actions[key] === 'function') {
	      ret[key] = function () {
	        dispatch(actions[key].apply(null, arguments));
	      };
	    }
	  });
	  return ret;
	}
	
	function shouldComponentUpdate(objA, objB) {
	  return !recurseEqual(objA, objB, 1);
	}
	
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
	
	function swapElement(selfEl, selector, el) {
	  var target = selfEl.querySelector(selector);
	  if (target) {
	    target.parentNode.insertBefore(el, target);
	    selfEl.removeChild(target);
	  }
	}

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports['default'] = setConfig;
	
	var _Component = __webpack_require__(1);
	
	var _Component2 = _interopRequireDefault(_Component);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function setConfig(config) {
	  if (config.dispatch) {
	    _Component2['default'].prototype.dispatch = config.dispatch;
	  }
	}

/***/ }
/******/ ])
});
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCA2N2EwNDc2OGJhYTFmZjdjYmUyYyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0NvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY3JlYXRlVGVtcGxhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxzLmpzIiwid2VicGFjazovLy8uL3NyYy9zZXRDb25maWcuanMiXSwibmFtZXMiOlsiQ29tcG9uZW50Iiwic2V0Q29uZmlnIiwiY3JlYXRlVGVtcGxhdGUiLCJtYXBEaXNwYXRjaFRvQWN0aW9ucyIsInNob3VsZENvbXBvbmVudFVwZGF0ZSIsInJlY3Vyc2VFcXVhbCIsInJlY3Vyc2VPYmplY3QiLCJzd2FwRWxlbWVudCIsIm9wdGlvbiIsInRhZ05hbWUiLCJBY3Rpb25zIiwiYWN0aW9ucyIsImNoaWxkcmVuIiwic3RhdGUiLCJwcm9wcyIsInByZXZQcm9wcyIsImVuYWJsZVRoaXNSZWZlcmVuY2UiLCJyZW5kZXJDaGlsZHJlbkRlcGVuZHNPblBhcmVudCIsInRlbXBsYXRlQ2FjaGUiLCJfdGhpcyIsImluaXRpYWxpemUiLCJiaW5kIiwiYXBwbHkiLCJhcmd1bWVudHMiLCJpc1B1cmVkdXhDb21wb25lbnQiLCJlbCIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsIl9faXNNb3VudFJlbmRlciIsIm9uQ2xpY2siLCJyZW5kZXJTdXBlciIsInJlbmRlciIsIlRhcmdldCIsImluc3RhbmNlIiwidHlwZSIsInNlbGVjdG9yIiwicXVlcnlTZWxlY3RvciIsImlubmVySFRNTCIsInRlbXBsYXRlIiwibmV4dFByb3BzIiwiaXNNb3VudFJlbmRlciIsImFkZEV2ZW50TGlzdGVuZXIiLCJkaXNwYXRjaCIsIm5vb3AiLCJhdHRhY2hDaGlsZHJlbiIsImNvbXBvbmVudFdpbGxNb3VudCIsImNvbXBvbmVudFdpbGxVcGRhdGUiLCJ1cGRhdGVSZW5kZXIiLCJjb21wb25lbnREaWRNb3VudCIsImNvbXBvbmVudERpZFVwZGF0ZSIsInBhcmVudE5vZGUiLCJyZW1vdmVDaGlsZCIsImNvbXBvbmVudFdpbGxVbm1vdW50Iiwib2JqIiwidW5tb3VudCIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJleHRlbmQiLCJjb25maWciLCJDbGFzcyIsInByb3RvdHlwZSIsIl9fcHJvdG9fXyIsImVzY2FwZXMiLCJlc2NhcGVNYXAiLCJzb3VyY2UiLCJqb2luIiwidGVzdFJlZ2V4cCIsIlJlZ0V4cCIsInJlcGxhY2VSZWdleHAiLCJlc2NhcGVyIiwibWF0Y2giLCJfZXNjYXBlIiwic3RyaW5nIiwidGVzdCIsInJlcGxhY2UiLCJ0ZW1wbGF0ZUVzY2FwZXMiLCJ0ZW1wbGF0ZUVzY2FwZXIiLCJ0ZW1wbGF0ZUVzY2FwZUNoYXIiLCJub01hdGNoIiwibWF0Y2hlciIsInRleHQiLCJpbmRleCIsImVzY2FwZSIsImludGVycG9sYXRlIiwiZXZhbHVhdGUiLCJvZmZzZXQiLCJzbGljZSIsImxlbmd0aCIsIkZ1bmN0aW9uIiwiT2JqZWN0S2V5cyIsIk9iamVjdCIsImtleXMiLCJyZXQiLCJtYXAiLCJrZXkiLCJvYmpBIiwib2JqQiIsInJlY3Vyc2VDb3VudCIsImtleXNCIiwia2V5c0EiLCJpIiwiaGFzT3duUHJvcGVydHkiLCJjaGVja09iaiIsIml0ZXJhdGVlIiwic2VsZkVsIiwidGFyZ2V0IiwiaW5zZXJ0QmVmb3JlIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztBQ1ZBO0FBQ0E7QUFDQSxtRUFBMkQ7QUFDM0Q7QUFDQTtBQUNBOztBQUVBLG9EQUE0QztBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxrREFBMEM7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsY0FBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCO0FBQzNCO0FBQ0EsWUFBSTtBQUNKO0FBQ0EsV0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQSxzREFBOEM7QUFDOUM7QUFDQSxxQ0FBNkI7O0FBRTdCLCtDQUF1QztBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFNO0FBQ04sYUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBTztBQUNQLGNBQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQU07QUFDTjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTCxZQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsOENBQXNDO0FBQ3RDO0FBQ0E7QUFDQSxxQ0FBNkI7QUFDN0IscUNBQTZCO0FBQzdCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQW9CLGdCQUFnQjtBQUNwQztBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQW9CLGdCQUFnQjtBQUNwQztBQUNBLGFBQUs7QUFDTDtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsYUFBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxhQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EseUJBQWlCLDhCQUE4QjtBQUMvQztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSwwQkFBa0IscUJBQXFCO0FBQ3ZDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBSTtBQUNKOztBQUVBLDREQUFvRDtBQUNwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsWUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0EsWUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUFtQiwyQkFBMkI7QUFDOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsMEJBQWtCLGNBQWM7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHlCQUFpQiw0QkFBNEI7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQU07QUFDTjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsMEJBQWtCLDRCQUE0QjtBQUM5QztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSwwQkFBa0IsNEJBQTRCO0FBQzlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUFtQix1Q0FBdUM7QUFDMUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQW1CLHVDQUF1QztBQUMxRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQW1CLHNCQUFzQjtBQUN6QztBQUNBO0FBQ0E7QUFDQSxlQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EseUJBQWlCLHdDQUF3QztBQUN6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLGVBQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxjQUFNO0FBQ047QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVCQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsOENBQXNDLHVCQUF1Qjs7QUFFN0Q7QUFDQTs7Ozs7Ozs7Ozs7O0FDamtCQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztTQUdFQSxTO1NBQ0FDLFM7U0FDQUMsYztTQUNBQyxvQjtTQUNBQyxxQjtTQUNBQyxZO1NBQ0FDLGE7U0FDQUMsVzs7Ozs7Ozs7Ozs7Ozs7QUNiRjs7OztBQUNBOzs7Ozs7S0FFcUJQLFM7QUFDbkIsc0JBQVlRLE1BQVosRUFBb0I7QUFBQTs7QUFBQSxVQXFCcEJDLE9BckJvQixHQXFCVixLQXJCVTtBQUFBLFVBc0JwQkMsT0F0Qm9CLEdBc0JWLEVBdEJVO0FBQUEsVUF1QnBCQyxPQXZCb0IsR0F1QlYsSUF2QlU7QUFBQSxVQXdCcEJILE1BeEJvQixHQXdCWCxJQXhCVztBQUFBLFVBeUJwQkksUUF6Qm9CLEdBeUJULElBekJTO0FBQUEsVUEwQnBCQyxLQTFCb0IsR0EwQlosRUExQlk7QUFBQSxVQTJCcEJDLEtBM0JvQixHQTJCWixJQTNCWTtBQUFBLFVBNEJwQkMsU0E1Qm9CLEdBNEJSLElBNUJRO0FBQUEsVUE2QnBCQyxtQkE3Qm9CLEdBNkJFLEtBN0JGO0FBQUEsVUE4QnBCQyw2QkE5Qm9CLEdBOEJZLEtBOUJaO0FBQUEsVUErQnBCYixxQkEvQm9CO0FBQUEsVUF5Q3BCYyxhQXpDb0IsR0F5Q0osSUF6Q0k7O0FBQ2xCLFNBQU1DLFFBQVEsSUFBZDtBQUNBQSxXQUFNQyxVQUFOLENBQWlCQyxJQUFqQixDQUFzQkYsS0FBdEIsRUFBNkJHLEtBQTdCLENBQW1DSCxLQUFuQyxFQUEwQ0ksU0FBMUM7QUFDQUosV0FBTUssa0JBQU4sR0FBMkIsSUFBM0I7QUFDQUwsV0FBTU0sRUFBTixHQUFXQyxTQUFTQyxhQUFULENBQXVCbkIsVUFBVUEsT0FBT0MsT0FBakIsSUFBNEJVLE1BQU1WLE9BQWxDLElBQTZDLEtBQXBFLENBQVg7QUFDQVUsV0FBTVgsTUFBTixHQUFlQSxNQUFmO0FBQ0FXLFdBQU1TLGVBQU4sR0FBd0IsSUFBeEI7QUFDQVQsV0FBTVUsT0FBTixHQUFnQlYsTUFBTVUsT0FBTixHQUFnQlYsTUFBTVUsT0FBTixDQUFjUixJQUFkLENBQW1CRixLQUFuQixDQUFoQixHQUE0QyxJQUE1RDtBQUNBQSxXQUFNVyxXQUFOLEdBQW9CWCxNQUFNWSxNQUExQjtBQUNBLFlBQU9aLEtBQVA7QUFDRDs7Ozt1Q0FFaUJhLE0sRUFBTztBQUN2QixXQUFNYixRQUFRLElBQWQ7QUFDQSxXQUFJLFFBQU9hLE9BQU9DLFFBQWQsTUFBMkIsUUFBL0IsRUFBd0M7QUFDdENkLGVBQU1jLFFBQU4sR0FBaUJELE9BQU9DLFFBQXhCO0FBQ0QsUUFGRCxNQUVLO0FBQ0hELGdCQUFPQyxRQUFQLEdBQWtCZCxLQUFsQjtBQUNEO0FBQ0Y7OztrQ0FhWSxDQUFFOzs7MENBQ00sQ0FBRTs7OzJDQUNELENBQUU7Ozt5Q0FDSixDQUFFOzs7MENBQ0QsQ0FBRTs7OzRDQUNBLENBQUU7OztzQ0FDUixDQUFFOzs7NEJBQ2IsQ0FBRTs7O3NDQUdRLENBQUU7Ozs4QkFDVEwsSyxFQUFPO0FBQ2QsV0FBTUssUUFBUSxLQUFLYyxRQUFMLElBQWlCLElBQS9COztBQUVBLFdBQUcsQ0FBQ2QsTUFBTUQsYUFBVixFQUF3QjtBQUN0QixhQUFNQSxnQkFBZ0JDLE1BQU1qQixjQUFOLENBQXFCWSxLQUFyQixDQUF0QjtBQUNBLGFBQU1vQixjQUFjaEIsYUFBZCx5Q0FBY0EsYUFBZCxDQUFOOztBQUVBLGFBQUdnQixTQUFTLFVBQVosRUFBdUI7QUFDckJmLGlCQUFNRCxhQUFOLEdBQXNCQSxhQUF0QjtBQUNELFVBRkQsTUFFTSxJQUFHZ0IsU0FBUyxRQUFaLEVBQXFCO0FBQ3pCZixpQkFBTUQsYUFBTixHQUFzQixpQ0FBZUEsYUFBZixDQUF0QjtBQUNELFVBRkssTUFFRDtBQUNIQyxpQkFBTUQsYUFBTixHQUFzQixpQ0FBZSxFQUFmLENBQXRCO0FBQ0Q7QUFDRjtBQUNELGNBQU9DLE1BQU1ELGFBQU4sQ0FBb0JKLEtBQXBCLENBQVA7QUFDRDs7O3VCQUVDcUIsUSxFQUFTO0FBQ1QsY0FBTyxLQUFLVixFQUFMLENBQVFXLGFBQVIsQ0FBc0JELFFBQXRCLENBQVA7QUFDRDs7O29DQUVjO0FBQ2IsV0FBTWhCLFFBQVEsSUFBZDtBQUNBQSxhQUFNTSxFQUFOLENBQVNZLFNBQVQsR0FBcUJsQixNQUFNbUIsUUFBTixjQUFrQmYsU0FBbEIsQ0FBckI7QUFDQSxjQUFPSixLQUFQO0FBQ0Q7Ozs0QkFFTW9CLFMsRUFBVztBQUNoQixXQUFNcEIsUUFBUSxJQUFkO0FBQ0EsV0FBTXFCLGdCQUFnQnJCLE1BQU1TLGVBQTVCO0FBQ0EsV0FBTWIsWUFBWUksTUFBTUosU0FBeEI7QUFDQUksYUFBTUosU0FBTixHQUFrQkEsU0FBbEI7QUFDQUksYUFBTUwsS0FBTixHQUFjeUIsU0FBZDs7QUFFQSxXQUFHQyxhQUFILEVBQWlCO0FBQ2YsYUFBR3JCLE1BQU1VLE9BQVQsRUFBaUI7QUFDZlYsaUJBQU1NLEVBQU4sQ0FBU2dCLGdCQUFULENBQTBCLE9BQTFCLEVBQW1DdEIsTUFBTVUsT0FBekMsRUFBa0QsS0FBbEQ7QUFDRDtBQUNEVixlQUFNUixPQUFOLEdBQWdCLGlDQUFxQlEsTUFBTXVCLFFBQU4sSUFBa0J2QixNQUFNd0IsSUFBN0MsRUFBbUR4QixNQUFNVCxPQUF6RCxDQUFoQjtBQUNBUyxlQUFNUCxRQUFOLEdBQWlCTyxNQUFNeUIsY0FBTixDQUFxQkwsU0FBckIsS0FBbUMsRUFBcEQ7QUFDQXBCLGVBQU0wQixrQkFBTjtBQUNEO0FBQ0QxQixhQUFNMkIsbUJBQU4sQ0FBMEJOLGFBQTFCOztBQUVBLFdBQUdBLGlCQUFpQnJCLE1BQU1mLHFCQUFOLENBQTRCVyxTQUE1QixFQUF1Q3dCLFNBQXZDLENBQXBCLEVBQXNFO0FBQ3BFcEIsZUFBTVMsZUFBTixHQUF3QixLQUF4QjtBQUNBVCxlQUFNNEIsWUFBTixDQUFtQlIsU0FBbkI7QUFDRDs7QUFFRCxXQUFHQyxhQUFILEVBQWlCO0FBQ2ZyQixlQUFNNkIsaUJBQU47QUFDRDtBQUNEN0IsYUFBTThCLGtCQUFOLENBQXlCVCxhQUF6Qjs7QUFFQSxjQUFPckIsS0FBUDtBQUNEOzs7K0JBRVM7QUFDUixXQUFNQSxRQUFRLElBQWQ7QUFDQUEsYUFBTU0sRUFBTixDQUFTeUIsVUFBVCxDQUFvQkMsV0FBcEIsQ0FBZ0NoQyxNQUFNTSxFQUF0QztBQUNBTixhQUFNaUMsb0JBQU47QUFDQSxpQ0FBY2pDLE1BQU1QLFFBQXBCLEVBQThCO0FBQUEsZ0JBQU95QyxJQUFJN0Isa0JBQVg7QUFBQSxRQUE5QixFQUE2RCxlQUFPO0FBQ2xFNkIsYUFBSUMsT0FBSjtBQUNBLGdCQUFPRCxHQUFQO0FBQ0QsUUFIRDtBQUlBLFdBQUdsQyxNQUFNVSxPQUFULEVBQWlCO0FBQ2ZWLGVBQU1NLEVBQU4sQ0FBUzhCLG1CQUFULENBQTZCLE9BQTdCLEVBQXNDcEMsTUFBTVUsT0FBNUMsRUFBcUQsS0FBckQ7QUFDRDtBQUNEVixhQUFNUixPQUFOLEdBQWdCLElBQWhCO0FBQ0FRLGFBQU1QLFFBQU4sR0FBaUIsSUFBakI7QUFDQU8sYUFBTUwsS0FBTixHQUFjLElBQWQ7QUFDQUssYUFBTUosU0FBTixHQUFrQixJQUFsQjtBQUNBSSxhQUFNTixLQUFOLEdBQWMsRUFBZDtBQUNBTSxhQUFNUyxlQUFOLEdBQXdCLElBQXhCO0FBQ0EsY0FBT1QsS0FBUDtBQUNEOzs7Ozs7c0JBeEhrQm5CLFM7OztBQTJIckJBLFdBQVV3RCxNQUFWLEdBQW1CLFNBQVNBLE1BQVQsQ0FBZ0JDLE1BQWhCLEVBQXVCO0FBQ3hDLE9BQUlDLFFBQVEsU0FBUkEsS0FBUSxHQUFVO0FBQ3BCQSxXQUFNQyxTQUFOLENBQWdCQyxTQUFoQixHQUE0QjVELFVBQVUyRCxTQUF0QztBQUNBM0QsZUFBVXNCLEtBQVYsQ0FBZ0IsSUFBaEIsRUFBc0JDLFNBQXRCO0FBQ0QsSUFIRDtBQUlBbUMsU0FBTUMsU0FBTixHQUFrQkYsTUFBbEI7QUFDQSxVQUFPQyxLQUFQO0FBQ0QsRUFQRCxDOzs7Ozs7Ozs7c0JDOUV3QnhELGM7QUFoRHhCOzs7QUFHQSxLQUFNMkQsVUFBVSxDQUFDLEdBQUQsRUFBSyxHQUFMLEVBQVMsR0FBVCxFQUFhLEdBQWIsRUFBaUIsR0FBakIsRUFBcUIsR0FBckIsQ0FBaEI7QUFDQSxLQUFNQyxZQUFZO0FBQ2hCLFFBQUssT0FEVztBQUVoQixRQUFLLE1BRlc7QUFHaEIsUUFBSyxNQUhXO0FBSWhCLFFBQUssUUFKVztBQUtoQixRQUFLLFFBTFc7QUFNaEIsUUFBSztBQU5XLEVBQWxCO0FBUUEsS0FBTUMsU0FBUyxRQUFRRixRQUFRRyxJQUFSLENBQWEsR0FBYixDQUFSLEdBQTRCLEdBQTNDO0FBQ0EsS0FBTUMsYUFBYSxJQUFJQyxNQUFKLENBQVdILE1BQVgsQ0FBbkI7QUFDQSxLQUFNSSxnQkFBZ0IsSUFBSUQsTUFBSixDQUFXSCxNQUFYLEVBQW1CLEdBQW5CLENBQXRCO0FBQ0EsVUFBU0ssT0FBVCxDQUFpQkMsS0FBakIsRUFBd0I7QUFDdEIsVUFBT1AsVUFBVU8sS0FBVixDQUFQO0FBQ0Q7QUFDRCxVQUFTQyxPQUFULENBQWlCQyxNQUFqQixFQUF5QjtBQUN2QkEsWUFBU0EsVUFBVSxJQUFWLEdBQWlCLEVBQWpCLEdBQXNCLEtBQUtBLE1BQXBDO0FBQ0EsVUFBT04sV0FBV08sSUFBWCxDQUFnQkQsTUFBaEIsSUFBMEJBLE9BQU9FLE9BQVAsQ0FBZU4sYUFBZixFQUE4QkMsT0FBOUIsQ0FBMUIsR0FBbUVHLE1BQTFFO0FBQ0Q7O0FBRUQ7OztBQUdBLEtBQU1HLGtCQUFrQjtBQUN0QixRQUFNLEdBRGdCO0FBRXRCLFNBQU0sSUFGZ0I7QUFHdEIsU0FBTSxHQUhnQjtBQUl0QixTQUFNLEdBSmdCO0FBS3RCLGFBQVUsT0FMWTtBQU10QixhQUFVO0FBTlksRUFBeEI7QUFRQSxLQUFNQyxrQkFBa0IsMkJBQXhCOztBQUVBLFVBQVNDLGtCQUFULENBQTRCUCxLQUE1QixFQUFtQztBQUNqQyxVQUFPLE9BQU9LLGdCQUFnQkwsS0FBaEIsQ0FBZDtBQUNEOztBQUVELEtBQU1RLFVBQVUsTUFBaEI7O0FBRUEsS0FBTUMsVUFBVSxJQUFJWixNQUFKLENBQVcsQ0FDdkIsQ0FBQyxzQkFBc0JXLE9BQXZCLEVBQWdDZCxNQURULEVBRXZCLENBQUUsc0JBQXNCYyxPQUF4QixFQUFpQ2QsTUFGVixFQUd2QixDQUFDLHFCQUFxQmMsT0FBdEIsRUFBK0JkLE1BSFIsRUFJdkJDLElBSnVCLENBSWxCLEdBSmtCLElBSVgsSUFKQSxFQUlNLEdBSk4sQ0FBaEI7O0FBTWUsVUFBUzlELGNBQVQsQ0FBd0I2RSxJQUF4QixFQUE4QjtBQUMzQyxPQUFJQyxRQUFRLENBQVo7QUFDQSxPQUFJakIsU0FBUyxRQUFiO0FBQ0FnQixRQUFLTixPQUFMLENBQWFLLE9BQWIsRUFBc0IsVUFBVVQsS0FBVixFQUFpQlksTUFBakIsRUFBeUJDLFdBQXpCLEVBQXNDQyxRQUF0QyxFQUFnREMsTUFBaEQsRUFBd0Q7QUFDNUVyQixlQUFVZ0IsS0FBS00sS0FBTCxDQUFXTCxLQUFYLEVBQWtCSSxNQUFsQixFQUEwQlgsT0FBMUIsQ0FBa0NFLGVBQWxDLEVBQW1EQyxrQkFBbkQsQ0FBVjs7QUFFQSxTQUFJSyxNQUFKLEVBQVk7QUFDVmxCLGlCQUFVLGdCQUFnQmtCLE1BQWhCLEdBQXlCLCtCQUFuQztBQUNELE1BRkQsTUFFTyxJQUFJQyxXQUFKLEVBQWlCO0FBQ3RCbkIsaUJBQVUsZ0JBQWdCbUIsV0FBaEIsR0FBOEIsc0JBQXhDO0FBQ0QsTUFGTSxNQUVBLElBQUlDLFFBQUosRUFBYztBQUNuQnBCLGlCQUFVLFNBQVNvQixRQUFULEdBQW9CLFVBQTlCO0FBQ0Q7QUFDREgsYUFBUUksU0FBU2YsTUFBTWlCLE1BQXZCO0FBQ0EsWUFBT2pCLEtBQVA7QUFDRCxJQVpEO0FBYUFOLFlBQVMsOEdBQThHQSxNQUE5RyxHQUF1SCxzQkFBaEk7QUFDQSxVQUFPLElBQUl3QixRQUFKLENBQWEsS0FBYixFQUFvQnhCLE1BQXBCLENBQVA7QUFDRCxFOzs7Ozs7Ozs7Ozs7U0NoRWU1RCxvQixHQUFBQSxvQjtTQVlBQyxxQixHQUFBQSxxQjtTQUlBQyxZLEdBQUFBLFk7U0FrQ0FDLGEsR0FBQUEsYTtTQWdCQUMsVyxHQUFBQSxXO0FBcEVoQixLQUFNaUYsYUFBYUMsT0FBT0MsSUFBMUI7O0FBRU8sVUFBU3ZGLG9CQUFULENBQThCdUMsUUFBOUIsRUFBd0MvQixPQUF4QyxFQUFnRDtBQUNyRCxPQUFNZ0YsTUFBTSxFQUFaO0FBQ0FILGNBQVc3RSxPQUFYLEVBQW9CaUYsR0FBcEIsQ0FBd0IsVUFBQ0MsR0FBRCxFQUFPO0FBQzdCLFNBQUksT0FBT2xGLFFBQVFrRixHQUFSLENBQVAsS0FBd0IsVUFBNUIsRUFBd0M7QUFDdENGLFdBQUlFLEdBQUosSUFBVyxZQUFVO0FBQ25CbkQsa0JBQVMvQixRQUFRa0YsR0FBUixFQUFhdkUsS0FBYixDQUFtQixJQUFuQixFQUF5QkMsU0FBekIsQ0FBVDtBQUNELFFBRkQ7QUFHRDtBQUNGLElBTkQ7QUFPQSxVQUFPb0UsR0FBUDtBQUNEOztBQUVNLFVBQVN2RixxQkFBVCxDQUErQjBGLElBQS9CLEVBQXFDQyxJQUFyQyxFQUEwQztBQUMvQyxVQUFPLENBQUMxRixhQUFheUYsSUFBYixFQUFtQkMsSUFBbkIsRUFBeUIsQ0FBekIsQ0FBUjtBQUNEOztBQUVNLFVBQVMxRixZQUFULENBQXNCeUYsSUFBdEIsRUFBNEJDLElBQTVCLEVBQWtDQyxZQUFsQyxFQUFnRDtBQUNyRCxPQUFHRixTQUFTQyxJQUFaLEVBQWlCO0FBQ2YsWUFBTyxJQUFQO0FBQ0Q7O0FBRUQsT0FBRyxRQUFPRCxJQUFQLHlDQUFPQSxJQUFQLE9BQWdCLFFBQWhCLElBQTRCQSxTQUFTLElBQXJDLElBQ0QsUUFBT0MsSUFBUCx5Q0FBT0EsSUFBUCxPQUFnQixRQURmLElBQzJCQSxTQUFTLElBRHZDLEVBQzRDO0FBQzFDLFlBQU9ELFNBQVNDLElBQWhCO0FBQ0Q7O0FBRUQsT0FBTUUsUUFBUVQsV0FBV08sSUFBWCxDQUFkO0FBQ0EsT0FBTUcsUUFBUVYsV0FBV00sSUFBWCxDQUFkOztBQUVBLE9BQUdJLE1BQU1aLE1BQU4sS0FBaUJXLE1BQU1YLE1BQTFCLEVBQWlDO0FBQy9CLFlBQU8sS0FBUDtBQUNEOztBQUVELFFBQUksSUFBSWEsSUFBSSxDQUFaLEVBQWVBLElBQUlGLE1BQU1YLE1BQXpCLEVBQWlDYSxHQUFqQyxFQUFxQztBQUNuQyxTQUFHLENBQUNMLEtBQUtNLGNBQUwsQ0FBb0JILE1BQU1FLENBQU4sQ0FBcEIsQ0FBSixFQUFrQztBQUNoQyxjQUFPLEtBQVA7QUFDRDs7QUFFRCxTQUFHSCxnQkFBZ0IsQ0FBQzNGLGFBQWF5RixLQUFLRyxNQUFNRSxDQUFOLENBQUwsQ0FBYixFQUE2QkosS0FBS0UsTUFBTUUsQ0FBTixDQUFMLENBQTdCLEVBQTZDSCxlQUFlLENBQTVELENBQXBCLEVBQW1GO0FBQ2pGLGNBQU8sS0FBUDtBQUNEOztBQUVELFNBQUdGLEtBQUtHLE1BQU1FLENBQU4sQ0FBTCxNQUFtQkosS0FBS0UsTUFBTUUsQ0FBTixDQUFMLENBQXRCLEVBQXFDO0FBQ25DLGNBQU8sS0FBUDtBQUNEO0FBQ0Y7O0FBRUQsVUFBTyxJQUFQO0FBQ0Q7O0FBRU0sVUFBUzdGLGFBQVQsQ0FBdUIrQyxHQUF2QixFQUE0QmdELFFBQTVCLEVBQXNDQyxRQUF0QyxFQUErQztBQUNwRCxPQUFHLFFBQU9qRCxHQUFQLHlDQUFPQSxHQUFQLE9BQWUsUUFBZixJQUEyQkEsUUFBUSxJQUF0QyxFQUEyQztBQUN6QyxZQUFPaUQsU0FBU2pELEdBQVQsQ0FBUDtBQUNEOztBQUVEbUMsY0FBV25DLEdBQVgsRUFBZ0J1QyxHQUFoQixDQUFvQixlQUFPO0FBQ3pCLFNBQUdTLFlBQVlBLFNBQVNoRCxJQUFJd0MsR0FBSixDQUFULENBQWYsRUFBa0M7QUFDaEN4QyxXQUFJd0MsR0FBSixJQUFXUyxTQUFTakQsSUFBSXdDLEdBQUosQ0FBVCxDQUFYO0FBQ0QsTUFGRCxNQUVLO0FBQ0h2RixxQkFBYytDLElBQUl3QyxHQUFKLENBQWQsRUFBd0JRLFFBQXhCLEVBQWtDQyxRQUFsQztBQUNEO0FBQ0YsSUFORDs7QUFRQSxVQUFPakQsR0FBUDtBQUNEOztBQUVNLFVBQVM5QyxXQUFULENBQXFCZ0csTUFBckIsRUFBNkJwRSxRQUE3QixFQUF1Q1YsRUFBdkMsRUFBMkM7QUFDaEQsT0FBTStFLFNBQVNELE9BQU9uRSxhQUFQLENBQXFCRCxRQUFyQixDQUFmO0FBQ0EsT0FBR3FFLE1BQUgsRUFBVztBQUNUQSxZQUFPdEQsVUFBUCxDQUFrQnVELFlBQWxCLENBQStCaEYsRUFBL0IsRUFBbUMrRSxNQUFuQztBQUNBRCxZQUFPcEQsV0FBUCxDQUFtQnFELE1BQW5CO0FBQ0Q7QUFDRixFOzs7Ozs7Ozs7c0JDeEV1QnZHLFM7O0FBRnhCOzs7Ozs7QUFFZSxVQUFTQSxTQUFULENBQW1Cd0QsTUFBbkIsRUFBMEI7QUFDdkMsT0FBR0EsT0FBT2YsUUFBVixFQUFtQjtBQUNqQiw0QkFBVWlCLFNBQVYsQ0FBb0JqQixRQUFwQixHQUErQmUsT0FBT2YsUUFBdEM7QUFDRDtBQUNGLEUiLCJmaWxlIjoicHVyZWR1eC5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcIlB1cmVkdXhcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wiUHVyZWR1eFwiXSA9IGZhY3RvcnkoKTtcbn0pKHRoaXMsIGZ1bmN0aW9uKCkge1xucmV0dXJuIFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCIgXHR2YXIgcGFyZW50SG90VXBkYXRlQ2FsbGJhY2sgPSB0aGlzW1wid2VicGFja0hvdFVwZGF0ZVB1cmVkdXhcIl07XG4gXHR0aGlzW1wid2VicGFja0hvdFVwZGF0ZVB1cmVkdXhcIl0gPSBcclxuIFx0ZnVuY3Rpb24gd2VicGFja0hvdFVwZGF0ZUNhbGxiYWNrKGNodW5rSWQsIG1vcmVNb2R1bGVzKSB7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW51c2VkLXZhcnNcclxuIFx0XHRob3RBZGRVcGRhdGVDaHVuayhjaHVua0lkLCBtb3JlTW9kdWxlcyk7XHJcbiBcdFx0aWYocGFyZW50SG90VXBkYXRlQ2FsbGJhY2spIHBhcmVudEhvdFVwZGF0ZUNhbGxiYWNrKGNodW5rSWQsIG1vcmVNb2R1bGVzKTtcclxuIFx0fVxyXG4gXHRcclxuIFx0ZnVuY3Rpb24gaG90RG93bmxvYWRVcGRhdGVDaHVuayhjaHVua0lkKSB7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW51c2VkLXZhcnNcclxuIFx0XHR2YXIgaGVhZCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiaGVhZFwiKVswXTtcclxuIFx0XHR2YXIgc2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNjcmlwdFwiKTtcclxuIFx0XHRzY3JpcHQudHlwZSA9IFwidGV4dC9qYXZhc2NyaXB0XCI7XHJcbiBcdFx0c2NyaXB0LmNoYXJzZXQgPSBcInV0Zi04XCI7XHJcbiBcdFx0c2NyaXB0LnNyYyA9IF9fd2VicGFja19yZXF1aXJlX18ucCArIFwiXCIgKyBjaHVua0lkICsgXCIuXCIgKyBob3RDdXJyZW50SGFzaCArIFwiLmhvdC11cGRhdGUuanNcIjtcclxuIFx0XHRoZWFkLmFwcGVuZENoaWxkKHNjcmlwdCk7XHJcbiBcdH1cclxuIFx0XHJcbiBcdGZ1bmN0aW9uIGhvdERvd25sb2FkTWFuaWZlc3QoY2FsbGJhY2spIHsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bnVzZWQtdmFyc1xyXG4gXHRcdGlmKHR5cGVvZiBYTUxIdHRwUmVxdWVzdCA9PT0gXCJ1bmRlZmluZWRcIilcclxuIFx0XHRcdHJldHVybiBjYWxsYmFjayhuZXcgRXJyb3IoXCJObyBicm93c2VyIHN1cHBvcnRcIikpO1xyXG4gXHRcdHRyeSB7XHJcbiBcdFx0XHR2YXIgcmVxdWVzdCA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xyXG4gXHRcdFx0dmFyIHJlcXVlc3RQYXRoID0gX193ZWJwYWNrX3JlcXVpcmVfXy5wICsgXCJcIiArIGhvdEN1cnJlbnRIYXNoICsgXCIuaG90LXVwZGF0ZS5qc29uXCI7XHJcbiBcdFx0XHRyZXF1ZXN0Lm9wZW4oXCJHRVRcIiwgcmVxdWVzdFBhdGgsIHRydWUpO1xyXG4gXHRcdFx0cmVxdWVzdC50aW1lb3V0ID0gMTAwMDA7XHJcbiBcdFx0XHRyZXF1ZXN0LnNlbmQobnVsbCk7XHJcbiBcdFx0fSBjYXRjaChlcnIpIHtcclxuIFx0XHRcdHJldHVybiBjYWxsYmFjayhlcnIpO1xyXG4gXHRcdH1cclxuIFx0XHRyZXF1ZXN0Lm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uKCkge1xyXG4gXHRcdFx0aWYocmVxdWVzdC5yZWFkeVN0YXRlICE9PSA0KSByZXR1cm47XHJcbiBcdFx0XHRpZihyZXF1ZXN0LnN0YXR1cyA9PT0gMCkge1xyXG4gXHRcdFx0XHQvLyB0aW1lb3V0XHJcbiBcdFx0XHRcdGNhbGxiYWNrKG5ldyBFcnJvcihcIk1hbmlmZXN0IHJlcXVlc3QgdG8gXCIgKyByZXF1ZXN0UGF0aCArIFwiIHRpbWVkIG91dC5cIikpO1xyXG4gXHRcdFx0fSBlbHNlIGlmKHJlcXVlc3Quc3RhdHVzID09PSA0MDQpIHtcclxuIFx0XHRcdFx0Ly8gbm8gdXBkYXRlIGF2YWlsYWJsZVxyXG4gXHRcdFx0XHRjYWxsYmFjaygpO1xyXG4gXHRcdFx0fSBlbHNlIGlmKHJlcXVlc3Quc3RhdHVzICE9PSAyMDAgJiYgcmVxdWVzdC5zdGF0dXMgIT09IDMwNCkge1xyXG4gXHRcdFx0XHQvLyBvdGhlciBmYWlsdXJlXHJcbiBcdFx0XHRcdGNhbGxiYWNrKG5ldyBFcnJvcihcIk1hbmlmZXN0IHJlcXVlc3QgdG8gXCIgKyByZXF1ZXN0UGF0aCArIFwiIGZhaWxlZC5cIikpO1xyXG4gXHRcdFx0fSBlbHNlIHtcclxuIFx0XHRcdFx0Ly8gc3VjY2Vzc1xyXG4gXHRcdFx0XHR0cnkge1xyXG4gXHRcdFx0XHRcdHZhciB1cGRhdGUgPSBKU09OLnBhcnNlKHJlcXVlc3QucmVzcG9uc2VUZXh0KTtcclxuIFx0XHRcdFx0fSBjYXRjaChlKSB7XHJcbiBcdFx0XHRcdFx0Y2FsbGJhY2soZSk7XHJcbiBcdFx0XHRcdFx0cmV0dXJuO1xyXG4gXHRcdFx0XHR9XHJcbiBcdFx0XHRcdGNhbGxiYWNrKG51bGwsIHVwZGF0ZSk7XHJcbiBcdFx0XHR9XHJcbiBcdFx0fTtcclxuIFx0fVxyXG5cbiBcdFxyXG4gXHRcclxuIFx0Ly8gQ29waWVkIGZyb20gaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL3JlYWN0L2Jsb2IvYmVmNDViMC9zcmMvc2hhcmVkL3V0aWxzL2NhbkRlZmluZVByb3BlcnR5LmpzXHJcbiBcdHZhciBjYW5EZWZpbmVQcm9wZXJ0eSA9IGZhbHNlO1xyXG4gXHR0cnkge1xyXG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh7fSwgXCJ4XCIsIHtcclxuIFx0XHRcdGdldDogZnVuY3Rpb24oKSB7fVxyXG4gXHRcdH0pO1xyXG4gXHRcdGNhbkRlZmluZVByb3BlcnR5ID0gdHJ1ZTtcclxuIFx0fSBjYXRjaCh4KSB7XHJcbiBcdFx0Ly8gSUUgd2lsbCBmYWlsIG9uIGRlZmluZVByb3BlcnR5XHJcbiBcdH1cclxuIFx0XHJcbiBcdHZhciBob3RBcHBseU9uVXBkYXRlID0gdHJ1ZTtcclxuIFx0dmFyIGhvdEN1cnJlbnRIYXNoID0gXCI2N2EwNDc2OGJhYTFmZjdjYmUyY1wiOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVudXNlZC12YXJzXHJcbiBcdHZhciBob3RDdXJyZW50TW9kdWxlRGF0YSA9IHt9O1xyXG4gXHR2YXIgaG90Q3VycmVudFBhcmVudHMgPSBbXTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bnVzZWQtdmFyc1xyXG4gXHRcclxuIFx0ZnVuY3Rpb24gaG90Q3JlYXRlUmVxdWlyZShtb2R1bGVJZCkgeyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVudXNlZC12YXJzXHJcbiBcdFx0dmFyIG1lID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XHJcbiBcdFx0aWYoIW1lKSByZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXztcclxuIFx0XHR2YXIgZm4gPSBmdW5jdGlvbihyZXF1ZXN0KSB7XHJcbiBcdFx0XHRpZihtZS5ob3QuYWN0aXZlKSB7XHJcbiBcdFx0XHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbcmVxdWVzdF0pIHtcclxuIFx0XHRcdFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW3JlcXVlc3RdLnBhcmVudHMuaW5kZXhPZihtb2R1bGVJZCkgPCAwKVxyXG4gXHRcdFx0XHRcdFx0aW5zdGFsbGVkTW9kdWxlc1tyZXF1ZXN0XS5wYXJlbnRzLnB1c2gobW9kdWxlSWQpO1xyXG4gXHRcdFx0XHRcdGlmKG1lLmNoaWxkcmVuLmluZGV4T2YocmVxdWVzdCkgPCAwKVxyXG4gXHRcdFx0XHRcdFx0bWUuY2hpbGRyZW4ucHVzaChyZXF1ZXN0KTtcclxuIFx0XHRcdFx0fSBlbHNlIGhvdEN1cnJlbnRQYXJlbnRzID0gW21vZHVsZUlkXTtcclxuIFx0XHRcdH0gZWxzZSB7XHJcbiBcdFx0XHRcdGNvbnNvbGUud2FybihcIltITVJdIHVuZXhwZWN0ZWQgcmVxdWlyZShcIiArIHJlcXVlc3QgKyBcIikgZnJvbSBkaXNwb3NlZCBtb2R1bGUgXCIgKyBtb2R1bGVJZCk7XHJcbiBcdFx0XHRcdGhvdEN1cnJlbnRQYXJlbnRzID0gW107XHJcbiBcdFx0XHR9XHJcbiBcdFx0XHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhyZXF1ZXN0KTtcclxuIFx0XHR9O1xyXG4gXHRcdGZvcih2YXIgbmFtZSBpbiBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XHJcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoX193ZWJwYWNrX3JlcXVpcmVfXywgbmFtZSkpIHtcclxuIFx0XHRcdFx0aWYoY2FuRGVmaW5lUHJvcGVydHkpIHtcclxuIFx0XHRcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZm4sIG5hbWUsIChmdW5jdGlvbihuYW1lKSB7XHJcbiBcdFx0XHRcdFx0XHRyZXR1cm4ge1xyXG4gXHRcdFx0XHRcdFx0XHRjb25maWd1cmFibGU6IHRydWUsXHJcbiBcdFx0XHRcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXHJcbiBcdFx0XHRcdFx0XHRcdGdldDogZnVuY3Rpb24oKSB7XHJcbiBcdFx0XHRcdFx0XHRcdFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX19bbmFtZV07XHJcbiBcdFx0XHRcdFx0XHRcdH0sXHJcbiBcdFx0XHRcdFx0XHRcdHNldDogZnVuY3Rpb24odmFsdWUpIHtcclxuIFx0XHRcdFx0XHRcdFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fW25hbWVdID0gdmFsdWU7XHJcbiBcdFx0XHRcdFx0XHRcdH1cclxuIFx0XHRcdFx0XHRcdH07XHJcbiBcdFx0XHRcdFx0fShuYW1lKSkpO1xyXG4gXHRcdFx0XHR9IGVsc2Uge1xyXG4gXHRcdFx0XHRcdGZuW25hbWVdID0gX193ZWJwYWNrX3JlcXVpcmVfX1tuYW1lXTtcclxuIFx0XHRcdFx0fVxyXG4gXHRcdFx0fVxyXG4gXHRcdH1cclxuIFx0XHJcbiBcdFx0ZnVuY3Rpb24gZW5zdXJlKGNodW5rSWQsIGNhbGxiYWNrKSB7XHJcbiBcdFx0XHRpZihob3RTdGF0dXMgPT09IFwicmVhZHlcIilcclxuIFx0XHRcdFx0aG90U2V0U3RhdHVzKFwicHJlcGFyZVwiKTtcclxuIFx0XHRcdGhvdENodW5rc0xvYWRpbmcrKztcclxuIFx0XHRcdF9fd2VicGFja19yZXF1aXJlX18uZShjaHVua0lkLCBmdW5jdGlvbigpIHtcclxuIFx0XHRcdFx0dHJ5IHtcclxuIFx0XHRcdFx0XHRjYWxsYmFjay5jYWxsKG51bGwsIGZuKTtcclxuIFx0XHRcdFx0fSBmaW5hbGx5IHtcclxuIFx0XHRcdFx0XHRmaW5pc2hDaHVua0xvYWRpbmcoKTtcclxuIFx0XHRcdFx0fVxyXG4gXHRcclxuIFx0XHRcdFx0ZnVuY3Rpb24gZmluaXNoQ2h1bmtMb2FkaW5nKCkge1xyXG4gXHRcdFx0XHRcdGhvdENodW5rc0xvYWRpbmctLTtcclxuIFx0XHRcdFx0XHRpZihob3RTdGF0dXMgPT09IFwicHJlcGFyZVwiKSB7XHJcbiBcdFx0XHRcdFx0XHRpZighaG90V2FpdGluZ0ZpbGVzTWFwW2NodW5rSWRdKSB7XHJcbiBcdFx0XHRcdFx0XHRcdGhvdEVuc3VyZVVwZGF0ZUNodW5rKGNodW5rSWQpO1xyXG4gXHRcdFx0XHRcdFx0fVxyXG4gXHRcdFx0XHRcdFx0aWYoaG90Q2h1bmtzTG9hZGluZyA9PT0gMCAmJiBob3RXYWl0aW5nRmlsZXMgPT09IDApIHtcclxuIFx0XHRcdFx0XHRcdFx0aG90VXBkYXRlRG93bmxvYWRlZCgpO1xyXG4gXHRcdFx0XHRcdFx0fVxyXG4gXHRcdFx0XHRcdH1cclxuIFx0XHRcdFx0fVxyXG4gXHRcdFx0fSk7XHJcbiBcdFx0fVxyXG4gXHRcdGlmKGNhbkRlZmluZVByb3BlcnR5KSB7XHJcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZm4sIFwiZVwiLCB7XHJcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXHJcbiBcdFx0XHRcdHZhbHVlOiBlbnN1cmVcclxuIFx0XHRcdH0pO1xyXG4gXHRcdH0gZWxzZSB7XHJcbiBcdFx0XHRmbi5lID0gZW5zdXJlO1xyXG4gXHRcdH1cclxuIFx0XHRyZXR1cm4gZm47XHJcbiBcdH1cclxuIFx0XHJcbiBcdGZ1bmN0aW9uIGhvdENyZWF0ZU1vZHVsZShtb2R1bGVJZCkgeyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVudXNlZC12YXJzXHJcbiBcdFx0dmFyIGhvdCA9IHtcclxuIFx0XHRcdC8vIHByaXZhdGUgc3R1ZmZcclxuIFx0XHRcdF9hY2NlcHRlZERlcGVuZGVuY2llczoge30sXHJcbiBcdFx0XHRfZGVjbGluZWREZXBlbmRlbmNpZXM6IHt9LFxyXG4gXHRcdFx0X3NlbGZBY2NlcHRlZDogZmFsc2UsXHJcbiBcdFx0XHRfc2VsZkRlY2xpbmVkOiBmYWxzZSxcclxuIFx0XHRcdF9kaXNwb3NlSGFuZGxlcnM6IFtdLFxyXG4gXHRcclxuIFx0XHRcdC8vIE1vZHVsZSBBUElcclxuIFx0XHRcdGFjdGl2ZTogdHJ1ZSxcclxuIFx0XHRcdGFjY2VwdDogZnVuY3Rpb24oZGVwLCBjYWxsYmFjaykge1xyXG4gXHRcdFx0XHRpZih0eXBlb2YgZGVwID09PSBcInVuZGVmaW5lZFwiKVxyXG4gXHRcdFx0XHRcdGhvdC5fc2VsZkFjY2VwdGVkID0gdHJ1ZTtcclxuIFx0XHRcdFx0ZWxzZSBpZih0eXBlb2YgZGVwID09PSBcImZ1bmN0aW9uXCIpXHJcbiBcdFx0XHRcdFx0aG90Ll9zZWxmQWNjZXB0ZWQgPSBkZXA7XHJcbiBcdFx0XHRcdGVsc2UgaWYodHlwZW9mIGRlcCA9PT0gXCJvYmplY3RcIilcclxuIFx0XHRcdFx0XHRmb3IodmFyIGkgPSAwOyBpIDwgZGVwLmxlbmd0aDsgaSsrKVxyXG4gXHRcdFx0XHRcdFx0aG90Ll9hY2NlcHRlZERlcGVuZGVuY2llc1tkZXBbaV1dID0gY2FsbGJhY2s7XHJcbiBcdFx0XHRcdGVsc2VcclxuIFx0XHRcdFx0XHRob3QuX2FjY2VwdGVkRGVwZW5kZW5jaWVzW2RlcF0gPSBjYWxsYmFjaztcclxuIFx0XHRcdH0sXHJcbiBcdFx0XHRkZWNsaW5lOiBmdW5jdGlvbihkZXApIHtcclxuIFx0XHRcdFx0aWYodHlwZW9mIGRlcCA9PT0gXCJ1bmRlZmluZWRcIilcclxuIFx0XHRcdFx0XHRob3QuX3NlbGZEZWNsaW5lZCA9IHRydWU7XHJcbiBcdFx0XHRcdGVsc2UgaWYodHlwZW9mIGRlcCA9PT0gXCJudW1iZXJcIilcclxuIFx0XHRcdFx0XHRob3QuX2RlY2xpbmVkRGVwZW5kZW5jaWVzW2RlcF0gPSB0cnVlO1xyXG4gXHRcdFx0XHRlbHNlXHJcbiBcdFx0XHRcdFx0Zm9yKHZhciBpID0gMDsgaSA8IGRlcC5sZW5ndGg7IGkrKylcclxuIFx0XHRcdFx0XHRcdGhvdC5fZGVjbGluZWREZXBlbmRlbmNpZXNbZGVwW2ldXSA9IHRydWU7XHJcbiBcdFx0XHR9LFxyXG4gXHRcdFx0ZGlzcG9zZTogZnVuY3Rpb24oY2FsbGJhY2spIHtcclxuIFx0XHRcdFx0aG90Ll9kaXNwb3NlSGFuZGxlcnMucHVzaChjYWxsYmFjayk7XHJcbiBcdFx0XHR9LFxyXG4gXHRcdFx0YWRkRGlzcG9zZUhhbmRsZXI6IGZ1bmN0aW9uKGNhbGxiYWNrKSB7XHJcbiBcdFx0XHRcdGhvdC5fZGlzcG9zZUhhbmRsZXJzLnB1c2goY2FsbGJhY2spO1xyXG4gXHRcdFx0fSxcclxuIFx0XHRcdHJlbW92ZURpc3Bvc2VIYW5kbGVyOiBmdW5jdGlvbihjYWxsYmFjaykge1xyXG4gXHRcdFx0XHR2YXIgaWR4ID0gaG90Ll9kaXNwb3NlSGFuZGxlcnMuaW5kZXhPZihjYWxsYmFjayk7XHJcbiBcdFx0XHRcdGlmKGlkeCA+PSAwKSBob3QuX2Rpc3Bvc2VIYW5kbGVycy5zcGxpY2UoaWR4LCAxKTtcclxuIFx0XHRcdH0sXHJcbiBcdFxyXG4gXHRcdFx0Ly8gTWFuYWdlbWVudCBBUElcclxuIFx0XHRcdGNoZWNrOiBob3RDaGVjayxcclxuIFx0XHRcdGFwcGx5OiBob3RBcHBseSxcclxuIFx0XHRcdHN0YXR1czogZnVuY3Rpb24obCkge1xyXG4gXHRcdFx0XHRpZighbCkgcmV0dXJuIGhvdFN0YXR1cztcclxuIFx0XHRcdFx0aG90U3RhdHVzSGFuZGxlcnMucHVzaChsKTtcclxuIFx0XHRcdH0sXHJcbiBcdFx0XHRhZGRTdGF0dXNIYW5kbGVyOiBmdW5jdGlvbihsKSB7XHJcbiBcdFx0XHRcdGhvdFN0YXR1c0hhbmRsZXJzLnB1c2gobCk7XHJcbiBcdFx0XHR9LFxyXG4gXHRcdFx0cmVtb3ZlU3RhdHVzSGFuZGxlcjogZnVuY3Rpb24obCkge1xyXG4gXHRcdFx0XHR2YXIgaWR4ID0gaG90U3RhdHVzSGFuZGxlcnMuaW5kZXhPZihsKTtcclxuIFx0XHRcdFx0aWYoaWR4ID49IDApIGhvdFN0YXR1c0hhbmRsZXJzLnNwbGljZShpZHgsIDEpO1xyXG4gXHRcdFx0fSxcclxuIFx0XHJcbiBcdFx0XHQvL2luaGVyaXQgZnJvbSBwcmV2aW91cyBkaXNwb3NlIGNhbGxcclxuIFx0XHRcdGRhdGE6IGhvdEN1cnJlbnRNb2R1bGVEYXRhW21vZHVsZUlkXVxyXG4gXHRcdH07XHJcbiBcdFx0cmV0dXJuIGhvdDtcclxuIFx0fVxyXG4gXHRcclxuIFx0dmFyIGhvdFN0YXR1c0hhbmRsZXJzID0gW107XHJcbiBcdHZhciBob3RTdGF0dXMgPSBcImlkbGVcIjtcclxuIFx0XHJcbiBcdGZ1bmN0aW9uIGhvdFNldFN0YXR1cyhuZXdTdGF0dXMpIHtcclxuIFx0XHRob3RTdGF0dXMgPSBuZXdTdGF0dXM7XHJcbiBcdFx0Zm9yKHZhciBpID0gMDsgaSA8IGhvdFN0YXR1c0hhbmRsZXJzLmxlbmd0aDsgaSsrKVxyXG4gXHRcdFx0aG90U3RhdHVzSGFuZGxlcnNbaV0uY2FsbChudWxsLCBuZXdTdGF0dXMpO1xyXG4gXHR9XHJcbiBcdFxyXG4gXHQvLyB3aGlsZSBkb3dubG9hZGluZ1xyXG4gXHR2YXIgaG90V2FpdGluZ0ZpbGVzID0gMDtcclxuIFx0dmFyIGhvdENodW5rc0xvYWRpbmcgPSAwO1xyXG4gXHR2YXIgaG90V2FpdGluZ0ZpbGVzTWFwID0ge307XHJcbiBcdHZhciBob3RSZXF1ZXN0ZWRGaWxlc01hcCA9IHt9O1xyXG4gXHR2YXIgaG90QXZhaWxpYmxlRmlsZXNNYXAgPSB7fTtcclxuIFx0dmFyIGhvdENhbGxiYWNrO1xyXG4gXHRcclxuIFx0Ly8gVGhlIHVwZGF0ZSBpbmZvXHJcbiBcdHZhciBob3RVcGRhdGUsIGhvdFVwZGF0ZU5ld0hhc2g7XHJcbiBcdFxyXG4gXHRmdW5jdGlvbiB0b01vZHVsZUlkKGlkKSB7XHJcbiBcdFx0dmFyIGlzTnVtYmVyID0gKCtpZCkgKyBcIlwiID09PSBpZDtcclxuIFx0XHRyZXR1cm4gaXNOdW1iZXIgPyAraWQgOiBpZDtcclxuIFx0fVxyXG4gXHRcclxuIFx0ZnVuY3Rpb24gaG90Q2hlY2soYXBwbHksIGNhbGxiYWNrKSB7XHJcbiBcdFx0aWYoaG90U3RhdHVzICE9PSBcImlkbGVcIikgdGhyb3cgbmV3IEVycm9yKFwiY2hlY2soKSBpcyBvbmx5IGFsbG93ZWQgaW4gaWRsZSBzdGF0dXNcIik7XHJcbiBcdFx0aWYodHlwZW9mIGFwcGx5ID09PSBcImZ1bmN0aW9uXCIpIHtcclxuIFx0XHRcdGhvdEFwcGx5T25VcGRhdGUgPSBmYWxzZTtcclxuIFx0XHRcdGNhbGxiYWNrID0gYXBwbHk7XHJcbiBcdFx0fSBlbHNlIHtcclxuIFx0XHRcdGhvdEFwcGx5T25VcGRhdGUgPSBhcHBseTtcclxuIFx0XHRcdGNhbGxiYWNrID0gY2FsbGJhY2sgfHwgZnVuY3Rpb24oZXJyKSB7XHJcbiBcdFx0XHRcdGlmKGVycikgdGhyb3cgZXJyO1xyXG4gXHRcdFx0fTtcclxuIFx0XHR9XHJcbiBcdFx0aG90U2V0U3RhdHVzKFwiY2hlY2tcIik7XHJcbiBcdFx0aG90RG93bmxvYWRNYW5pZmVzdChmdW5jdGlvbihlcnIsIHVwZGF0ZSkge1xyXG4gXHRcdFx0aWYoZXJyKSByZXR1cm4gY2FsbGJhY2soZXJyKTtcclxuIFx0XHRcdGlmKCF1cGRhdGUpIHtcclxuIFx0XHRcdFx0aG90U2V0U3RhdHVzKFwiaWRsZVwiKTtcclxuIFx0XHRcdFx0Y2FsbGJhY2sobnVsbCwgbnVsbCk7XHJcbiBcdFx0XHRcdHJldHVybjtcclxuIFx0XHRcdH1cclxuIFx0XHJcbiBcdFx0XHRob3RSZXF1ZXN0ZWRGaWxlc01hcCA9IHt9O1xyXG4gXHRcdFx0aG90QXZhaWxpYmxlRmlsZXNNYXAgPSB7fTtcclxuIFx0XHRcdGhvdFdhaXRpbmdGaWxlc01hcCA9IHt9O1xyXG4gXHRcdFx0Zm9yKHZhciBpID0gMDsgaSA8IHVwZGF0ZS5jLmxlbmd0aDsgaSsrKVxyXG4gXHRcdFx0XHRob3RBdmFpbGlibGVGaWxlc01hcFt1cGRhdGUuY1tpXV0gPSB0cnVlO1xyXG4gXHRcdFx0aG90VXBkYXRlTmV3SGFzaCA9IHVwZGF0ZS5oO1xyXG4gXHRcclxuIFx0XHRcdGhvdFNldFN0YXR1cyhcInByZXBhcmVcIik7XHJcbiBcdFx0XHRob3RDYWxsYmFjayA9IGNhbGxiYWNrO1xyXG4gXHRcdFx0aG90VXBkYXRlID0ge307XHJcbiBcdFx0XHR2YXIgY2h1bmtJZCA9IDA7XHJcbiBcdFx0XHR7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tbG9uZS1ibG9ja3NcclxuIFx0XHRcdFx0LypnbG9iYWxzIGNodW5rSWQgKi9cclxuIFx0XHRcdFx0aG90RW5zdXJlVXBkYXRlQ2h1bmsoY2h1bmtJZCk7XHJcbiBcdFx0XHR9XHJcbiBcdFx0XHRpZihob3RTdGF0dXMgPT09IFwicHJlcGFyZVwiICYmIGhvdENodW5rc0xvYWRpbmcgPT09IDAgJiYgaG90V2FpdGluZ0ZpbGVzID09PSAwKSB7XHJcbiBcdFx0XHRcdGhvdFVwZGF0ZURvd25sb2FkZWQoKTtcclxuIFx0XHRcdH1cclxuIFx0XHR9KTtcclxuIFx0fVxyXG4gXHRcclxuIFx0ZnVuY3Rpb24gaG90QWRkVXBkYXRlQ2h1bmsoY2h1bmtJZCwgbW9yZU1vZHVsZXMpIHsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bnVzZWQtdmFyc1xyXG4gXHRcdGlmKCFob3RBdmFpbGlibGVGaWxlc01hcFtjaHVua0lkXSB8fCAhaG90UmVxdWVzdGVkRmlsZXNNYXBbY2h1bmtJZF0pXHJcbiBcdFx0XHRyZXR1cm47XHJcbiBcdFx0aG90UmVxdWVzdGVkRmlsZXNNYXBbY2h1bmtJZF0gPSBmYWxzZTtcclxuIFx0XHRmb3IodmFyIG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XHJcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xyXG4gXHRcdFx0XHRob3RVcGRhdGVbbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xyXG4gXHRcdFx0fVxyXG4gXHRcdH1cclxuIFx0XHRpZigtLWhvdFdhaXRpbmdGaWxlcyA9PT0gMCAmJiBob3RDaHVua3NMb2FkaW5nID09PSAwKSB7XHJcbiBcdFx0XHRob3RVcGRhdGVEb3dubG9hZGVkKCk7XHJcbiBcdFx0fVxyXG4gXHR9XHJcbiBcdFxyXG4gXHRmdW5jdGlvbiBob3RFbnN1cmVVcGRhdGVDaHVuayhjaHVua0lkKSB7XHJcbiBcdFx0aWYoIWhvdEF2YWlsaWJsZUZpbGVzTWFwW2NodW5rSWRdKSB7XHJcbiBcdFx0XHRob3RXYWl0aW5nRmlsZXNNYXBbY2h1bmtJZF0gPSB0cnVlO1xyXG4gXHRcdH0gZWxzZSB7XHJcbiBcdFx0XHRob3RSZXF1ZXN0ZWRGaWxlc01hcFtjaHVua0lkXSA9IHRydWU7XHJcbiBcdFx0XHRob3RXYWl0aW5nRmlsZXMrKztcclxuIFx0XHRcdGhvdERvd25sb2FkVXBkYXRlQ2h1bmsoY2h1bmtJZCk7XHJcbiBcdFx0fVxyXG4gXHR9XHJcbiBcdFxyXG4gXHRmdW5jdGlvbiBob3RVcGRhdGVEb3dubG9hZGVkKCkge1xyXG4gXHRcdGhvdFNldFN0YXR1cyhcInJlYWR5XCIpO1xyXG4gXHRcdHZhciBjYWxsYmFjayA9IGhvdENhbGxiYWNrO1xyXG4gXHRcdGhvdENhbGxiYWNrID0gbnVsbDtcclxuIFx0XHRpZighY2FsbGJhY2spIHJldHVybjtcclxuIFx0XHRpZihob3RBcHBseU9uVXBkYXRlKSB7XHJcbiBcdFx0XHRob3RBcHBseShob3RBcHBseU9uVXBkYXRlLCBjYWxsYmFjayk7XHJcbiBcdFx0fSBlbHNlIHtcclxuIFx0XHRcdHZhciBvdXRkYXRlZE1vZHVsZXMgPSBbXTtcclxuIFx0XHRcdGZvcih2YXIgaWQgaW4gaG90VXBkYXRlKSB7XHJcbiBcdFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChob3RVcGRhdGUsIGlkKSkge1xyXG4gXHRcdFx0XHRcdG91dGRhdGVkTW9kdWxlcy5wdXNoKHRvTW9kdWxlSWQoaWQpKTtcclxuIFx0XHRcdFx0fVxyXG4gXHRcdFx0fVxyXG4gXHRcdFx0Y2FsbGJhY2sobnVsbCwgb3V0ZGF0ZWRNb2R1bGVzKTtcclxuIFx0XHR9XHJcbiBcdH1cclxuIFx0XHJcbiBcdGZ1bmN0aW9uIGhvdEFwcGx5KG9wdGlvbnMsIGNhbGxiYWNrKSB7XHJcbiBcdFx0aWYoaG90U3RhdHVzICE9PSBcInJlYWR5XCIpIHRocm93IG5ldyBFcnJvcihcImFwcGx5KCkgaXMgb25seSBhbGxvd2VkIGluIHJlYWR5IHN0YXR1c1wiKTtcclxuIFx0XHRpZih0eXBlb2Ygb3B0aW9ucyA9PT0gXCJmdW5jdGlvblwiKSB7XHJcbiBcdFx0XHRjYWxsYmFjayA9IG9wdGlvbnM7XHJcbiBcdFx0XHRvcHRpb25zID0ge307XHJcbiBcdFx0fSBlbHNlIGlmKG9wdGlvbnMgJiYgdHlwZW9mIG9wdGlvbnMgPT09IFwib2JqZWN0XCIpIHtcclxuIFx0XHRcdGNhbGxiYWNrID0gY2FsbGJhY2sgfHwgZnVuY3Rpb24oZXJyKSB7XHJcbiBcdFx0XHRcdGlmKGVycikgdGhyb3cgZXJyO1xyXG4gXHRcdFx0fTtcclxuIFx0XHR9IGVsc2Uge1xyXG4gXHRcdFx0b3B0aW9ucyA9IHt9O1xyXG4gXHRcdFx0Y2FsbGJhY2sgPSBjYWxsYmFjayB8fCBmdW5jdGlvbihlcnIpIHtcclxuIFx0XHRcdFx0aWYoZXJyKSB0aHJvdyBlcnI7XHJcbiBcdFx0XHR9O1xyXG4gXHRcdH1cclxuIFx0XHJcbiBcdFx0ZnVuY3Rpb24gZ2V0QWZmZWN0ZWRTdHVmZihtb2R1bGUpIHtcclxuIFx0XHRcdHZhciBvdXRkYXRlZE1vZHVsZXMgPSBbbW9kdWxlXTtcclxuIFx0XHRcdHZhciBvdXRkYXRlZERlcGVuZGVuY2llcyA9IHt9O1xyXG4gXHRcclxuIFx0XHRcdHZhciBxdWV1ZSA9IG91dGRhdGVkTW9kdWxlcy5zbGljZSgpO1xyXG4gXHRcdFx0d2hpbGUocXVldWUubGVuZ3RoID4gMCkge1xyXG4gXHRcdFx0XHR2YXIgbW9kdWxlSWQgPSBxdWV1ZS5wb3AoKTtcclxuIFx0XHRcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xyXG4gXHRcdFx0XHRpZighbW9kdWxlIHx8IG1vZHVsZS5ob3QuX3NlbGZBY2NlcHRlZClcclxuIFx0XHRcdFx0XHRjb250aW51ZTtcclxuIFx0XHRcdFx0aWYobW9kdWxlLmhvdC5fc2VsZkRlY2xpbmVkKSB7XHJcbiBcdFx0XHRcdFx0cmV0dXJuIG5ldyBFcnJvcihcIkFib3J0ZWQgYmVjYXVzZSBvZiBzZWxmIGRlY2xpbmU6IFwiICsgbW9kdWxlSWQpO1xyXG4gXHRcdFx0XHR9XHJcbiBcdFx0XHRcdGlmKG1vZHVsZUlkID09PSAwKSB7XHJcbiBcdFx0XHRcdFx0cmV0dXJuO1xyXG4gXHRcdFx0XHR9XHJcbiBcdFx0XHRcdGZvcih2YXIgaSA9IDA7IGkgPCBtb2R1bGUucGFyZW50cy5sZW5ndGg7IGkrKykge1xyXG4gXHRcdFx0XHRcdHZhciBwYXJlbnRJZCA9IG1vZHVsZS5wYXJlbnRzW2ldO1xyXG4gXHRcdFx0XHRcdHZhciBwYXJlbnQgPSBpbnN0YWxsZWRNb2R1bGVzW3BhcmVudElkXTtcclxuIFx0XHRcdFx0XHRpZihwYXJlbnQuaG90Ll9kZWNsaW5lZERlcGVuZGVuY2llc1ttb2R1bGVJZF0pIHtcclxuIFx0XHRcdFx0XHRcdHJldHVybiBuZXcgRXJyb3IoXCJBYm9ydGVkIGJlY2F1c2Ugb2YgZGVjbGluZWQgZGVwZW5kZW5jeTogXCIgKyBtb2R1bGVJZCArIFwiIGluIFwiICsgcGFyZW50SWQpO1xyXG4gXHRcdFx0XHRcdH1cclxuIFx0XHRcdFx0XHRpZihvdXRkYXRlZE1vZHVsZXMuaW5kZXhPZihwYXJlbnRJZCkgPj0gMCkgY29udGludWU7XHJcbiBcdFx0XHRcdFx0aWYocGFyZW50LmhvdC5fYWNjZXB0ZWREZXBlbmRlbmNpZXNbbW9kdWxlSWRdKSB7XHJcbiBcdFx0XHRcdFx0XHRpZighb3V0ZGF0ZWREZXBlbmRlbmNpZXNbcGFyZW50SWRdKVxyXG4gXHRcdFx0XHRcdFx0XHRvdXRkYXRlZERlcGVuZGVuY2llc1twYXJlbnRJZF0gPSBbXTtcclxuIFx0XHRcdFx0XHRcdGFkZEFsbFRvU2V0KG91dGRhdGVkRGVwZW5kZW5jaWVzW3BhcmVudElkXSwgW21vZHVsZUlkXSk7XHJcbiBcdFx0XHRcdFx0XHRjb250aW51ZTtcclxuIFx0XHRcdFx0XHR9XHJcbiBcdFx0XHRcdFx0ZGVsZXRlIG91dGRhdGVkRGVwZW5kZW5jaWVzW3BhcmVudElkXTtcclxuIFx0XHRcdFx0XHRvdXRkYXRlZE1vZHVsZXMucHVzaChwYXJlbnRJZCk7XHJcbiBcdFx0XHRcdFx0cXVldWUucHVzaChwYXJlbnRJZCk7XHJcbiBcdFx0XHRcdH1cclxuIFx0XHRcdH1cclxuIFx0XHJcbiBcdFx0XHRyZXR1cm4gW291dGRhdGVkTW9kdWxlcywgb3V0ZGF0ZWREZXBlbmRlbmNpZXNdO1xyXG4gXHRcdH1cclxuIFx0XHJcbiBcdFx0ZnVuY3Rpb24gYWRkQWxsVG9TZXQoYSwgYikge1xyXG4gXHRcdFx0Zm9yKHZhciBpID0gMDsgaSA8IGIubGVuZ3RoOyBpKyspIHtcclxuIFx0XHRcdFx0dmFyIGl0ZW0gPSBiW2ldO1xyXG4gXHRcdFx0XHRpZihhLmluZGV4T2YoaXRlbSkgPCAwKVxyXG4gXHRcdFx0XHRcdGEucHVzaChpdGVtKTtcclxuIFx0XHRcdH1cclxuIFx0XHR9XHJcbiBcdFxyXG4gXHRcdC8vIGF0IGJlZ2luIGFsbCB1cGRhdGVzIG1vZHVsZXMgYXJlIG91dGRhdGVkXHJcbiBcdFx0Ly8gdGhlIFwib3V0ZGF0ZWRcIiBzdGF0dXMgY2FuIHByb3BhZ2F0ZSB0byBwYXJlbnRzIGlmIHRoZXkgZG9uJ3QgYWNjZXB0IHRoZSBjaGlsZHJlblxyXG4gXHRcdHZhciBvdXRkYXRlZERlcGVuZGVuY2llcyA9IHt9O1xyXG4gXHRcdHZhciBvdXRkYXRlZE1vZHVsZXMgPSBbXTtcclxuIFx0XHR2YXIgYXBwbGllZFVwZGF0ZSA9IHt9O1xyXG4gXHRcdGZvcih2YXIgaWQgaW4gaG90VXBkYXRlKSB7XHJcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoaG90VXBkYXRlLCBpZCkpIHtcclxuIFx0XHRcdFx0dmFyIG1vZHVsZUlkID0gdG9Nb2R1bGVJZChpZCk7XHJcbiBcdFx0XHRcdHZhciByZXN1bHQgPSBnZXRBZmZlY3RlZFN0dWZmKG1vZHVsZUlkKTtcclxuIFx0XHRcdFx0aWYoIXJlc3VsdCkge1xyXG4gXHRcdFx0XHRcdGlmKG9wdGlvbnMuaWdub3JlVW5hY2NlcHRlZClcclxuIFx0XHRcdFx0XHRcdGNvbnRpbnVlO1xyXG4gXHRcdFx0XHRcdGhvdFNldFN0YXR1cyhcImFib3J0XCIpO1xyXG4gXHRcdFx0XHRcdHJldHVybiBjYWxsYmFjayhuZXcgRXJyb3IoXCJBYm9ydGVkIGJlY2F1c2UgXCIgKyBtb2R1bGVJZCArIFwiIGlzIG5vdCBhY2NlcHRlZFwiKSk7XHJcbiBcdFx0XHRcdH1cclxuIFx0XHRcdFx0aWYocmVzdWx0IGluc3RhbmNlb2YgRXJyb3IpIHtcclxuIFx0XHRcdFx0XHRob3RTZXRTdGF0dXMoXCJhYm9ydFwiKTtcclxuIFx0XHRcdFx0XHRyZXR1cm4gY2FsbGJhY2socmVzdWx0KTtcclxuIFx0XHRcdFx0fVxyXG4gXHRcdFx0XHRhcHBsaWVkVXBkYXRlW21vZHVsZUlkXSA9IGhvdFVwZGF0ZVttb2R1bGVJZF07XHJcbiBcdFx0XHRcdGFkZEFsbFRvU2V0KG91dGRhdGVkTW9kdWxlcywgcmVzdWx0WzBdKTtcclxuIFx0XHRcdFx0Zm9yKHZhciBtb2R1bGVJZCBpbiByZXN1bHRbMV0pIHtcclxuIFx0XHRcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocmVzdWx0WzFdLCBtb2R1bGVJZCkpIHtcclxuIFx0XHRcdFx0XHRcdGlmKCFvdXRkYXRlZERlcGVuZGVuY2llc1ttb2R1bGVJZF0pXHJcbiBcdFx0XHRcdFx0XHRcdG91dGRhdGVkRGVwZW5kZW5jaWVzW21vZHVsZUlkXSA9IFtdO1xyXG4gXHRcdFx0XHRcdFx0YWRkQWxsVG9TZXQob3V0ZGF0ZWREZXBlbmRlbmNpZXNbbW9kdWxlSWRdLCByZXN1bHRbMV1bbW9kdWxlSWRdKTtcclxuIFx0XHRcdFx0XHR9XHJcbiBcdFx0XHRcdH1cclxuIFx0XHRcdH1cclxuIFx0XHR9XHJcbiBcdFxyXG4gXHRcdC8vIFN0b3JlIHNlbGYgYWNjZXB0ZWQgb3V0ZGF0ZWQgbW9kdWxlcyB0byByZXF1aXJlIHRoZW0gbGF0ZXIgYnkgdGhlIG1vZHVsZSBzeXN0ZW1cclxuIFx0XHR2YXIgb3V0ZGF0ZWRTZWxmQWNjZXB0ZWRNb2R1bGVzID0gW107XHJcbiBcdFx0Zm9yKHZhciBpID0gMDsgaSA8IG91dGRhdGVkTW9kdWxlcy5sZW5ndGg7IGkrKykge1xyXG4gXHRcdFx0dmFyIG1vZHVsZUlkID0gb3V0ZGF0ZWRNb2R1bGVzW2ldO1xyXG4gXHRcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gJiYgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uaG90Ll9zZWxmQWNjZXB0ZWQpXHJcbiBcdFx0XHRcdG91dGRhdGVkU2VsZkFjY2VwdGVkTW9kdWxlcy5wdXNoKHtcclxuIFx0XHRcdFx0XHRtb2R1bGU6IG1vZHVsZUlkLFxyXG4gXHRcdFx0XHRcdGVycm9ySGFuZGxlcjogaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uaG90Ll9zZWxmQWNjZXB0ZWRcclxuIFx0XHRcdFx0fSk7XHJcbiBcdFx0fVxyXG4gXHRcclxuIFx0XHQvLyBOb3cgaW4gXCJkaXNwb3NlXCIgcGhhc2VcclxuIFx0XHRob3RTZXRTdGF0dXMoXCJkaXNwb3NlXCIpO1xyXG4gXHRcdHZhciBxdWV1ZSA9IG91dGRhdGVkTW9kdWxlcy5zbGljZSgpO1xyXG4gXHRcdHdoaWxlKHF1ZXVlLmxlbmd0aCA+IDApIHtcclxuIFx0XHRcdHZhciBtb2R1bGVJZCA9IHF1ZXVlLnBvcCgpO1xyXG4gXHRcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xyXG4gXHRcdFx0aWYoIW1vZHVsZSkgY29udGludWU7XHJcbiBcdFxyXG4gXHRcdFx0dmFyIGRhdGEgPSB7fTtcclxuIFx0XHJcbiBcdFx0XHQvLyBDYWxsIGRpc3Bvc2UgaGFuZGxlcnNcclxuIFx0XHRcdHZhciBkaXNwb3NlSGFuZGxlcnMgPSBtb2R1bGUuaG90Ll9kaXNwb3NlSGFuZGxlcnM7XHJcbiBcdFx0XHRmb3IodmFyIGogPSAwOyBqIDwgZGlzcG9zZUhhbmRsZXJzLmxlbmd0aDsgaisrKSB7XHJcbiBcdFx0XHRcdHZhciBjYiA9IGRpc3Bvc2VIYW5kbGVyc1tqXTtcclxuIFx0XHRcdFx0Y2IoZGF0YSk7XHJcbiBcdFx0XHR9XHJcbiBcdFx0XHRob3RDdXJyZW50TW9kdWxlRGF0YVttb2R1bGVJZF0gPSBkYXRhO1xyXG4gXHRcclxuIFx0XHRcdC8vIGRpc2FibGUgbW9kdWxlICh0aGlzIGRpc2FibGVzIHJlcXVpcmVzIGZyb20gdGhpcyBtb2R1bGUpXHJcbiBcdFx0XHRtb2R1bGUuaG90LmFjdGl2ZSA9IGZhbHNlO1xyXG4gXHRcclxuIFx0XHRcdC8vIHJlbW92ZSBtb2R1bGUgZnJvbSBjYWNoZVxyXG4gXHRcdFx0ZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xyXG4gXHRcclxuIFx0XHRcdC8vIHJlbW92ZSBcInBhcmVudHNcIiByZWZlcmVuY2VzIGZyb20gYWxsIGNoaWxkcmVuXHJcbiBcdFx0XHRmb3IodmFyIGogPSAwOyBqIDwgbW9kdWxlLmNoaWxkcmVuLmxlbmd0aDsgaisrKSB7XHJcbiBcdFx0XHRcdHZhciBjaGlsZCA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlLmNoaWxkcmVuW2pdXTtcclxuIFx0XHRcdFx0aWYoIWNoaWxkKSBjb250aW51ZTtcclxuIFx0XHRcdFx0dmFyIGlkeCA9IGNoaWxkLnBhcmVudHMuaW5kZXhPZihtb2R1bGVJZCk7XHJcbiBcdFx0XHRcdGlmKGlkeCA+PSAwKSB7XHJcbiBcdFx0XHRcdFx0Y2hpbGQucGFyZW50cy5zcGxpY2UoaWR4LCAxKTtcclxuIFx0XHRcdFx0fVxyXG4gXHRcdFx0fVxyXG4gXHRcdH1cclxuIFx0XHJcbiBcdFx0Ly8gcmVtb3ZlIG91dGRhdGVkIGRlcGVuZGVuY3kgZnJvbSBtb2R1bGUgY2hpbGRyZW5cclxuIFx0XHRmb3IodmFyIG1vZHVsZUlkIGluIG91dGRhdGVkRGVwZW5kZW5jaWVzKSB7XHJcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob3V0ZGF0ZWREZXBlbmRlbmNpZXMsIG1vZHVsZUlkKSkge1xyXG4gXHRcdFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XHJcbiBcdFx0XHRcdHZhciBtb2R1bGVPdXRkYXRlZERlcGVuZGVuY2llcyA9IG91dGRhdGVkRGVwZW5kZW5jaWVzW21vZHVsZUlkXTtcclxuIFx0XHRcdFx0Zm9yKHZhciBqID0gMDsgaiA8IG1vZHVsZU91dGRhdGVkRGVwZW5kZW5jaWVzLmxlbmd0aDsgaisrKSB7XHJcbiBcdFx0XHRcdFx0dmFyIGRlcGVuZGVuY3kgPSBtb2R1bGVPdXRkYXRlZERlcGVuZGVuY2llc1tqXTtcclxuIFx0XHRcdFx0XHR2YXIgaWR4ID0gbW9kdWxlLmNoaWxkcmVuLmluZGV4T2YoZGVwZW5kZW5jeSk7XHJcbiBcdFx0XHRcdFx0aWYoaWR4ID49IDApIG1vZHVsZS5jaGlsZHJlbi5zcGxpY2UoaWR4LCAxKTtcclxuIFx0XHRcdFx0fVxyXG4gXHRcdFx0fVxyXG4gXHRcdH1cclxuIFx0XHJcbiBcdFx0Ly8gTm90IGluIFwiYXBwbHlcIiBwaGFzZVxyXG4gXHRcdGhvdFNldFN0YXR1cyhcImFwcGx5XCIpO1xyXG4gXHRcclxuIFx0XHRob3RDdXJyZW50SGFzaCA9IGhvdFVwZGF0ZU5ld0hhc2g7XHJcbiBcdFxyXG4gXHRcdC8vIGluc2VydCBuZXcgY29kZVxyXG4gXHRcdGZvcih2YXIgbW9kdWxlSWQgaW4gYXBwbGllZFVwZGF0ZSkge1xyXG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGFwcGxpZWRVcGRhdGUsIG1vZHVsZUlkKSkge1xyXG4gXHRcdFx0XHRtb2R1bGVzW21vZHVsZUlkXSA9IGFwcGxpZWRVcGRhdGVbbW9kdWxlSWRdO1xyXG4gXHRcdFx0fVxyXG4gXHRcdH1cclxuIFx0XHJcbiBcdFx0Ly8gY2FsbCBhY2NlcHQgaGFuZGxlcnNcclxuIFx0XHR2YXIgZXJyb3IgPSBudWxsO1xyXG4gXHRcdGZvcih2YXIgbW9kdWxlSWQgaW4gb3V0ZGF0ZWREZXBlbmRlbmNpZXMpIHtcclxuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvdXRkYXRlZERlcGVuZGVuY2llcywgbW9kdWxlSWQpKSB7XHJcbiBcdFx0XHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcclxuIFx0XHRcdFx0dmFyIG1vZHVsZU91dGRhdGVkRGVwZW5kZW5jaWVzID0gb3V0ZGF0ZWREZXBlbmRlbmNpZXNbbW9kdWxlSWRdO1xyXG4gXHRcdFx0XHR2YXIgY2FsbGJhY2tzID0gW107XHJcbiBcdFx0XHRcdGZvcih2YXIgaSA9IDA7IGkgPCBtb2R1bGVPdXRkYXRlZERlcGVuZGVuY2llcy5sZW5ndGg7IGkrKykge1xyXG4gXHRcdFx0XHRcdHZhciBkZXBlbmRlbmN5ID0gbW9kdWxlT3V0ZGF0ZWREZXBlbmRlbmNpZXNbaV07XHJcbiBcdFx0XHRcdFx0dmFyIGNiID0gbW9kdWxlLmhvdC5fYWNjZXB0ZWREZXBlbmRlbmNpZXNbZGVwZW5kZW5jeV07XHJcbiBcdFx0XHRcdFx0aWYoY2FsbGJhY2tzLmluZGV4T2YoY2IpID49IDApIGNvbnRpbnVlO1xyXG4gXHRcdFx0XHRcdGNhbGxiYWNrcy5wdXNoKGNiKTtcclxuIFx0XHRcdFx0fVxyXG4gXHRcdFx0XHRmb3IodmFyIGkgPSAwOyBpIDwgY2FsbGJhY2tzLmxlbmd0aDsgaSsrKSB7XHJcbiBcdFx0XHRcdFx0dmFyIGNiID0gY2FsbGJhY2tzW2ldO1xyXG4gXHRcdFx0XHRcdHRyeSB7XHJcbiBcdFx0XHRcdFx0XHRjYihvdXRkYXRlZERlcGVuZGVuY2llcyk7XHJcbiBcdFx0XHRcdFx0fSBjYXRjaChlcnIpIHtcclxuIFx0XHRcdFx0XHRcdGlmKCFlcnJvcilcclxuIFx0XHRcdFx0XHRcdFx0ZXJyb3IgPSBlcnI7XHJcbiBcdFx0XHRcdFx0fVxyXG4gXHRcdFx0XHR9XHJcbiBcdFx0XHR9XHJcbiBcdFx0fVxyXG4gXHRcclxuIFx0XHQvLyBMb2FkIHNlbGYgYWNjZXB0ZWQgbW9kdWxlc1xyXG4gXHRcdGZvcih2YXIgaSA9IDA7IGkgPCBvdXRkYXRlZFNlbGZBY2NlcHRlZE1vZHVsZXMubGVuZ3RoOyBpKyspIHtcclxuIFx0XHRcdHZhciBpdGVtID0gb3V0ZGF0ZWRTZWxmQWNjZXB0ZWRNb2R1bGVzW2ldO1xyXG4gXHRcdFx0dmFyIG1vZHVsZUlkID0gaXRlbS5tb2R1bGU7XHJcbiBcdFx0XHRob3RDdXJyZW50UGFyZW50cyA9IFttb2R1bGVJZF07XHJcbiBcdFx0XHR0cnkge1xyXG4gXHRcdFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKTtcclxuIFx0XHRcdH0gY2F0Y2goZXJyKSB7XHJcbiBcdFx0XHRcdGlmKHR5cGVvZiBpdGVtLmVycm9ySGFuZGxlciA9PT0gXCJmdW5jdGlvblwiKSB7XHJcbiBcdFx0XHRcdFx0dHJ5IHtcclxuIFx0XHRcdFx0XHRcdGl0ZW0uZXJyb3JIYW5kbGVyKGVycik7XHJcbiBcdFx0XHRcdFx0fSBjYXRjaChlcnIpIHtcclxuIFx0XHRcdFx0XHRcdGlmKCFlcnJvcilcclxuIFx0XHRcdFx0XHRcdFx0ZXJyb3IgPSBlcnI7XHJcbiBcdFx0XHRcdFx0fVxyXG4gXHRcdFx0XHR9IGVsc2UgaWYoIWVycm9yKVxyXG4gXHRcdFx0XHRcdGVycm9yID0gZXJyO1xyXG4gXHRcdFx0fVxyXG4gXHRcdH1cclxuIFx0XHJcbiBcdFx0Ly8gaGFuZGxlIGVycm9ycyBpbiBhY2NlcHQgaGFuZGxlcnMgYW5kIHNlbGYgYWNjZXB0ZWQgbW9kdWxlIGxvYWRcclxuIFx0XHRpZihlcnJvcikge1xyXG4gXHRcdFx0aG90U2V0U3RhdHVzKFwiZmFpbFwiKTtcclxuIFx0XHRcdHJldHVybiBjYWxsYmFjayhlcnJvcik7XHJcbiBcdFx0fVxyXG4gXHRcclxuIFx0XHRob3RTZXRTdGF0dXMoXCJpZGxlXCIpO1xyXG4gXHRcdGNhbGxiYWNrKG51bGwsIG91dGRhdGVkTW9kdWxlcyk7XHJcbiBcdH1cclxuXG4gXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2UsXG4gXHRcdFx0aG90OiBob3RDcmVhdGVNb2R1bGUobW9kdWxlSWQpLFxuIFx0XHRcdHBhcmVudHM6IGhvdEN1cnJlbnRQYXJlbnRzLFxuIFx0XHRcdGNoaWxkcmVuOiBbXVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBob3RDcmVhdGVSZXF1aXJlKG1vZHVsZUlkKSk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gX193ZWJwYWNrX2hhc2hfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5oID0gZnVuY3Rpb24oKSB7IHJldHVybiBob3RDdXJyZW50SGFzaDsgfTtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gaG90Q3JlYXRlUmVxdWlyZSgwKSgwKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCA2N2EwNDc2OGJhYTFmZjdjYmUyYyIsImltcG9ydCBDb21wb25lbnQgZnJvbSAnLi9Db21wb25lbnQnO1xuaW1wb3J0IGNyZWF0ZVRlbXBsYXRlIGZyb20gJy4vY3JlYXRlVGVtcGxhdGUnO1xuaW1wb3J0IHNldENvbmZpZyBmcm9tICcuL3NldENvbmZpZyc7XG5pbXBvcnQgeyBtYXBEaXNwYXRjaFRvQWN0aW9ucywgc2hvdWxkQ29tcG9uZW50VXBkYXRlLCByZWN1cnNlRXF1YWwsIHJlY3Vyc2VPYmplY3QsIHN3YXBFbGVtZW50IH0gZnJvbSAnLi91dGlscyc7XG5cbmV4cG9ydCB7XG4gIENvbXBvbmVudCxcbiAgc2V0Q29uZmlnLFxuICBjcmVhdGVUZW1wbGF0ZSxcbiAgbWFwRGlzcGF0Y2hUb0FjdGlvbnMsXG4gIHNob3VsZENvbXBvbmVudFVwZGF0ZSxcbiAgcmVjdXJzZUVxdWFsLFxuICByZWN1cnNlT2JqZWN0LFxuICBzd2FwRWxlbWVudFxufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9pbmRleC5qcyIsImltcG9ydCBjcmVhdGVUZW1wbGF0ZSBmcm9tICcuL2NyZWF0ZVRlbXBsYXRlJztcbmltcG9ydCB7bWFwRGlzcGF0Y2hUb0FjdGlvbnMsIHNob3VsZENvbXBvbmVudFVwZGF0ZSwgcmVjdXJzZU9iamVjdH0gZnJvbSAnLi91dGlscyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKG9wdGlvbikge1xuICAgIGNvbnN0IF90aGlzID0gdGhpcztcbiAgICBfdGhpcy5pbml0aWFsaXplLmJpbmQoX3RoaXMpLmFwcGx5KF90aGlzLCBhcmd1bWVudHMpO1xuICAgIF90aGlzLmlzUHVyZWR1eENvbXBvbmVudCA9IHRydWU7XG4gICAgX3RoaXMuZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KG9wdGlvbiAmJiBvcHRpb24udGFnTmFtZSB8fCBfdGhpcy50YWdOYW1lIHx8ICdkaXYnKTtcbiAgICBfdGhpcy5vcHRpb24gPSBvcHRpb247XG4gICAgX3RoaXMuX19pc01vdW50UmVuZGVyID0gdHJ1ZTtcbiAgICBfdGhpcy5vbkNsaWNrID0gX3RoaXMub25DbGljayA/IF90aGlzLm9uQ2xpY2suYmluZChfdGhpcykgOiBudWxsO1xuICAgIF90aGlzLnJlbmRlclN1cGVyID0gX3RoaXMucmVuZGVyO1xuICAgIHJldHVybiBfdGhpcztcbiAgfVxuXG4gIGNyZWF0ZUluc3RhbmNlUmVmKFRhcmdldCl7XG4gICAgY29uc3QgX3RoaXMgPSB0aGlzO1xuICAgIGlmICh0eXBlb2YgVGFyZ2V0Lmluc3RhbmNlID09PSBcIm9iamVjdFwiKXtcbiAgICAgIF90aGlzLmluc3RhbmNlID0gVGFyZ2V0Lmluc3RhbmNlO1xuICAgIH1lbHNle1xuICAgICAgVGFyZ2V0Lmluc3RhbmNlID0gX3RoaXM7XG4gICAgfVxuICB9XG5cbiAgdGFnTmFtZSA9ICdkaXYnO1xuICBBY3Rpb25zID0ge307XG4gIGFjdGlvbnMgPSBudWxsO1xuICBvcHRpb24gPSBudWxsO1xuICBjaGlsZHJlbiA9IG51bGw7XG4gIHN0YXRlID0ge307XG4gIHByb3BzID0gbnVsbDtcbiAgcHJldlByb3BzID0gbnVsbDtcbiAgZW5hYmxlVGhpc1JlZmVyZW5jZSA9IGZhbHNlO1xuICByZW5kZXJDaGlsZHJlbkRlcGVuZHNPblBhcmVudCA9IGZhbHNlO1xuICBzaG91bGRDb21wb25lbnRVcGRhdGUgPSBzaG91bGRDb21wb25lbnRVcGRhdGU7XG4gIGluaXRpYWxpemUoKSB7fVxuICBjb21wb25lbnRXaWxsTW91bnQoKSB7fVxuICBjb21wb25lbnRXaWxsVXBkYXRlKCkge31cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7fVxuICBjb21wb25lbnREaWRVcGRhdGUoKSB7fVxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHt9XG4gIGF0dGFjaENoaWxkcmVuKCkge31cbiAgbm9vcCgpe31cblxuICB0ZW1wbGF0ZUNhY2hlID0gbnVsbDtcbiAgY3JlYXRlVGVtcGxhdGUoKXt9XG4gIHRlbXBsYXRlKHByb3BzKSB7XG4gICAgY29uc3QgX3RoaXMgPSB0aGlzLmluc3RhbmNlIHx8IHRoaXM7XG5cbiAgICBpZighX3RoaXMudGVtcGxhdGVDYWNoZSl7XG4gICAgICBjb25zdCB0ZW1wbGF0ZUNhY2hlID0gX3RoaXMuY3JlYXRlVGVtcGxhdGUocHJvcHMpO1xuICAgICAgY29uc3QgdHlwZSA9IHR5cGVvZiB0ZW1wbGF0ZUNhY2hlO1xuXG4gICAgICBpZih0eXBlID09PSAnZnVuY3Rpb24nKXtcbiAgICAgICAgX3RoaXMudGVtcGxhdGVDYWNoZSA9IHRlbXBsYXRlQ2FjaGU7XG4gICAgICB9ZWxzZSBpZih0eXBlID09PSAnc3RyaW5nJyl7XG4gICAgICAgIF90aGlzLnRlbXBsYXRlQ2FjaGUgPSBjcmVhdGVUZW1wbGF0ZSh0ZW1wbGF0ZUNhY2hlKTtcbiAgICAgIH1lbHNle1xuICAgICAgICBfdGhpcy50ZW1wbGF0ZUNhY2hlID0gY3JlYXRlVGVtcGxhdGUoJycpO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gX3RoaXMudGVtcGxhdGVDYWNoZShwcm9wcyk7XG4gIH1cblxuICAkKHNlbGVjdG9yKXtcbiAgICByZXR1cm4gdGhpcy5lbC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKTtcbiAgfTtcblxuICB1cGRhdGVSZW5kZXIoKSB7XG4gICAgY29uc3QgX3RoaXMgPSB0aGlzO1xuICAgIF90aGlzLmVsLmlubmVySFRNTCA9IF90aGlzLnRlbXBsYXRlKC4uLmFyZ3VtZW50cyk7XG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG5cbiAgcmVuZGVyKG5leHRQcm9wcykge1xuICAgIGNvbnN0IF90aGlzID0gdGhpcztcbiAgICBjb25zdCBpc01vdW50UmVuZGVyID0gX3RoaXMuX19pc01vdW50UmVuZGVyO1xuICAgIGNvbnN0IHByZXZQcm9wcyA9IF90aGlzLnByZXZQcm9wcztcbiAgICBfdGhpcy5wcmV2UHJvcHMgPSBwcmV2UHJvcHM7XG4gICAgX3RoaXMucHJvcHMgPSBuZXh0UHJvcHM7XG5cbiAgICBpZihpc01vdW50UmVuZGVyKXtcbiAgICAgIGlmKF90aGlzLm9uQ2xpY2spe1xuICAgICAgICBfdGhpcy5lbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIF90aGlzLm9uQ2xpY2ssIGZhbHNlKTtcbiAgICAgIH1cbiAgICAgIF90aGlzLmFjdGlvbnMgPSBtYXBEaXNwYXRjaFRvQWN0aW9ucyhfdGhpcy5kaXNwYXRjaCB8fCBfdGhpcy5ub29wLCBfdGhpcy5BY3Rpb25zKTtcbiAgICAgIF90aGlzLmNoaWxkcmVuID0gX3RoaXMuYXR0YWNoQ2hpbGRyZW4obmV4dFByb3BzKSB8fCB7fTtcbiAgICAgIF90aGlzLmNvbXBvbmVudFdpbGxNb3VudCgpO1xuICAgIH1cbiAgICBfdGhpcy5jb21wb25lbnRXaWxsVXBkYXRlKGlzTW91bnRSZW5kZXIpO1xuXG4gICAgaWYoaXNNb3VudFJlbmRlciB8fCBfdGhpcy5zaG91bGRDb21wb25lbnRVcGRhdGUocHJldlByb3BzLCBuZXh0UHJvcHMpKXtcbiAgICAgIF90aGlzLl9faXNNb3VudFJlbmRlciA9IGZhbHNlO1xuICAgICAgX3RoaXMudXBkYXRlUmVuZGVyKG5leHRQcm9wcyk7XG4gICAgfVxuXG4gICAgaWYoaXNNb3VudFJlbmRlcil7XG4gICAgICBfdGhpcy5jb21wb25lbnREaWRNb3VudCgpO1xuICAgIH1cbiAgICBfdGhpcy5jb21wb25lbnREaWRVcGRhdGUoaXNNb3VudFJlbmRlcik7XG5cbiAgICByZXR1cm4gX3RoaXM7XG4gIH1cblxuICB1bm1vdW50KCkge1xuICAgIGNvbnN0IF90aGlzID0gdGhpcztcbiAgICBfdGhpcy5lbC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKF90aGlzLmVsKTtcbiAgICBfdGhpcy5jb21wb25lbnRXaWxsVW5tb3VudCgpO1xuICAgIHJlY3Vyc2VPYmplY3QoX3RoaXMuY2hpbGRyZW4sIG9iaiA9PiBvYmouaXNQdXJlZHV4Q29tcG9uZW50LCBvYmogPT4ge1xuICAgICAgb2JqLnVubW91bnQoKTtcbiAgICAgIHJldHVybiBvYmo7XG4gICAgfSk7XG4gICAgaWYoX3RoaXMub25DbGljayl7XG4gICAgICBfdGhpcy5lbC5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIF90aGlzLm9uQ2xpY2ssIGZhbHNlKTtcbiAgICB9XG4gICAgX3RoaXMuYWN0aW9ucyA9IG51bGw7XG4gICAgX3RoaXMuY2hpbGRyZW4gPSBudWxsO1xuICAgIF90aGlzLnByb3BzID0gbnVsbDtcbiAgICBfdGhpcy5wcmV2UHJvcHMgPSBudWxsO1xuICAgIF90aGlzLnN0YXRlID0ge307XG4gICAgX3RoaXMuX19pc01vdW50UmVuZGVyID0gdHJ1ZTtcbiAgICByZXR1cm4gX3RoaXM7XG4gIH1cbn1cblxuQ29tcG9uZW50LmV4dGVuZCA9IGZ1bmN0aW9uIGV4dGVuZChjb25maWcpe1xuICB2YXIgQ2xhc3MgPSBmdW5jdGlvbigpe1xuICAgIENsYXNzLnByb3RvdHlwZS5fX3Byb3RvX18gPSBDb21wb25lbnQucHJvdG90eXBlO1xuICAgIENvbXBvbmVudC5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICB9O1xuICBDbGFzcy5wcm90b3R5cGUgPSBjb25maWc7XG4gIHJldHVybiBDbGFzcztcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvQ29tcG9uZW50LmpzIiwiLyoqXG4gKiBlc2NhcGVcbiAqL1xuY29uc3QgZXNjYXBlcyA9IFsnJicsJzwnLCc+JywnXCInLFwiJ1wiLCdgJ107XG5jb25zdCBlc2NhcGVNYXAgPSB7XG4gICcmJzogJyZhbXA7JyxcbiAgJzwnOiAnJmx0OycsXG4gICc+JzogJyZndDsnLFxuICAnXCInOiAnJnF1b3Q7JyxcbiAgXCInXCI6ICcmI3gyNzsnLFxuICAnYCc6ICcmI3g2MDsnXG59O1xuY29uc3Qgc291cmNlID0gJyg/OicgKyBlc2NhcGVzLmpvaW4oJ3wnKSArICcpJztcbmNvbnN0IHRlc3RSZWdleHAgPSBuZXcgUmVnRXhwKHNvdXJjZSk7XG5jb25zdCByZXBsYWNlUmVnZXhwID0gbmV3IFJlZ0V4cChzb3VyY2UsICdnJyk7XG5mdW5jdGlvbiBlc2NhcGVyKG1hdGNoKSB7XG4gIHJldHVybiBlc2NhcGVNYXBbbWF0Y2hdO1xufVxuZnVuY3Rpb24gX2VzY2FwZShzdHJpbmcpIHtcbiAgc3RyaW5nID0gc3RyaW5nID09IG51bGwgPyAnJyA6ICcnICsgc3RyaW5nO1xuICByZXR1cm4gdGVzdFJlZ2V4cC50ZXN0KHN0cmluZykgPyBzdHJpbmcucmVwbGFjZShyZXBsYWNlUmVnZXhwLCBlc2NhcGVyKSA6IHN0cmluZztcbn1cblxuLyoqXG4gKiB0ZW1wbGF0ZVxuICovXG5jb25zdCB0ZW1wbGF0ZUVzY2FwZXMgPSB7XG4gIFwiJ1wiIDogXCInXCIsXG4gICdcXFxcJzogJ1xcXFwnLFxuICAnXFxyJzogJ3InLFxuICAnXFxuJzogJ24nLFxuICAnXFx1MjAyOCc6ICd1MjAyOCcsXG4gICdcXHUyMDI5JzogJ3UyMDI5J1xufTtcbmNvbnN0IHRlbXBsYXRlRXNjYXBlciA9IC9cXFxcfCd8XFxyfFxcbnxcXHUyMDI4fFxcdTIwMjkvZztcblxuZnVuY3Rpb24gdGVtcGxhdGVFc2NhcGVDaGFyKG1hdGNoKSB7XG4gIHJldHVybiAnXFxcXCcgKyB0ZW1wbGF0ZUVzY2FwZXNbbWF0Y2hdO1xufVxuXG5jb25zdCBub01hdGNoID0gLyguKV4vO1xuXG5jb25zdCBtYXRjaGVyID0gbmV3IFJlZ0V4cChbXG4gICAgKC88JS0oW1xcc1xcU10rPyklPi9nIHx8IG5vTWF0Y2gpLnNvdXJjZSxcbiAgICAoIC88JT0oW1xcc1xcU10rPyklPi9nIHx8IG5vTWF0Y2gpLnNvdXJjZSxcbiAgICAoLzwlKFtcXHNcXFNdKz8pJT4vZyB8fCBub01hdGNoKS5zb3VyY2VcbiAgXS5qb2luKCd8JykgKyAnfCQnLCAnZycpO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVUZW1wbGF0ZSh0ZXh0KSB7XG4gIGxldCBpbmRleCA9IDA7XG4gIGxldCBzb3VyY2UgPSBcIl9fcCs9J1wiO1xuICB0ZXh0LnJlcGxhY2UobWF0Y2hlciwgZnVuY3Rpb24gKG1hdGNoLCBlc2NhcGUsIGludGVycG9sYXRlLCBldmFsdWF0ZSwgb2Zmc2V0KSB7XG4gICAgc291cmNlICs9IHRleHQuc2xpY2UoaW5kZXgsIG9mZnNldCkucmVwbGFjZSh0ZW1wbGF0ZUVzY2FwZXIsIHRlbXBsYXRlRXNjYXBlQ2hhcik7XG5cbiAgICBpZiAoZXNjYXBlKSB7XG4gICAgICBzb3VyY2UgKz0gXCInK1xcbigoX190PShcIiArIGVzY2FwZSArIFwiKSk9PW51bGw/Jyc6X2VzY2FwZShfX3QpKStcXG4nXCI7XG4gICAgfSBlbHNlIGlmIChpbnRlcnBvbGF0ZSkge1xuICAgICAgc291cmNlICs9IFwiJytcXG4oKF9fdD0oXCIgKyBpbnRlcnBvbGF0ZSArIFwiKSk9PW51bGw/Jyc6X190KStcXG4nXCI7XG4gICAgfSBlbHNlIGlmIChldmFsdWF0ZSkge1xuICAgICAgc291cmNlICs9IFwiJztcXG5cIiArIGV2YWx1YXRlICsgXCJcXG5fX3ArPSdcIjtcbiAgICB9XG4gICAgaW5kZXggPSBvZmZzZXQgKyBtYXRjaC5sZW5ndGg7XG4gICAgcmV0dXJuIG1hdGNoO1xuICB9KTtcbiAgc291cmNlID0gXCJ2YXIgX190LF9fcD0nJyxfX2o9QXJyYXkucHJvdG90eXBlLmpvaW4scHJpbnQ9ZnVuY3Rpb24oKXtfX3ArPV9fai5jYWxsKGFyZ3VtZW50cywnJyk7fTtcXG53aXRoKG9ianx8e30pe1xcblwiICsgc291cmNlICsgXCInO1xcbn1cXG5yZXR1cm4gX19wO1xcblwiO1xuICByZXR1cm4gbmV3IEZ1bmN0aW9uKCdvYmonLCBzb3VyY2UpO1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NyZWF0ZVRlbXBsYXRlLmpzIiwiY29uc3QgT2JqZWN0S2V5cyA9IE9iamVjdC5rZXlzO1xuXG5leHBvcnQgZnVuY3Rpb24gbWFwRGlzcGF0Y2hUb0FjdGlvbnMoZGlzcGF0Y2gsIGFjdGlvbnMpe1xuICBjb25zdCByZXQgPSB7fTtcbiAgT2JqZWN0S2V5cyhhY3Rpb25zKS5tYXAoKGtleSk9PntcbiAgICBpZiAodHlwZW9mIGFjdGlvbnNba2V5XSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgcmV0W2tleV0gPSBmdW5jdGlvbigpe1xuICAgICAgICBkaXNwYXRjaChhY3Rpb25zW2tleV0uYXBwbHkobnVsbCwgYXJndW1lbnRzKSk7XG4gICAgICB9O1xuICAgIH1cbiAgfSk7XG4gIHJldHVybiByZXQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzaG91bGRDb21wb25lbnRVcGRhdGUob2JqQSwgb2JqQil7XG4gIHJldHVybiAhcmVjdXJzZUVxdWFsKG9iakEsIG9iakIsIDEpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVjdXJzZUVxdWFsKG9iakEsIG9iakIsIHJlY3Vyc2VDb3VudCkge1xuICBpZihvYmpBID09PSBvYmpCKXtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIGlmKHR5cGVvZiBvYmpBICE9PSAnb2JqZWN0JyB8fCBvYmpBID09PSBudWxsIHx8XG4gICAgdHlwZW9mIG9iakIgIT09ICdvYmplY3QnIHx8IG9iakIgPT09IG51bGwpe1xuICAgIHJldHVybiBvYmpBID09PSBvYmpCO1xuICB9XG5cbiAgY29uc3Qga2V5c0IgPSBPYmplY3RLZXlzKG9iakIpO1xuICBjb25zdCBrZXlzQSA9IE9iamVjdEtleXMob2JqQSk7XG5cbiAgaWYoa2V5c0EubGVuZ3RoICE9PSBrZXlzQi5sZW5ndGgpe1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGZvcihsZXQgaSA9IDA7IGkgPCBrZXlzQi5sZW5ndGg7IGkrKyl7XG4gICAgaWYoIW9iakEuaGFzT3duUHJvcGVydHkoa2V5c0JbaV0pKXtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBpZihyZWN1cnNlQ291bnQgJiYgIXJlY3Vyc2VFcXVhbChvYmpBW2tleXNCW2ldXSwgb2JqQltrZXlzQltpXV0sIHJlY3Vyc2VDb3VudCAtIDEpKXtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBpZihvYmpBW2tleXNCW2ldXSAhPT0gb2JqQltrZXlzQltpXV0pe1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0cnVlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVjdXJzZU9iamVjdChvYmosIGNoZWNrT2JqLCBpdGVyYXRlZSl7XG4gIGlmKHR5cGVvZiBvYmogIT09ICdvYmplY3QnIHx8IG9iaiA9PT0gbnVsbCl7XG4gICAgcmV0dXJuIGl0ZXJhdGVlKG9iaik7XG4gIH1cblxuICBPYmplY3RLZXlzKG9iaikubWFwKGtleSA9PiB7XG4gICAgaWYoY2hlY2tPYmogJiYgY2hlY2tPYmoob2JqW2tleV0pKXtcbiAgICAgIG9ialtrZXldID0gaXRlcmF0ZWUob2JqW2tleV0pO1xuICAgIH1lbHNle1xuICAgICAgcmVjdXJzZU9iamVjdChvYmpba2V5XSwgY2hlY2tPYmosIGl0ZXJhdGVlKTtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiBvYmo7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzd2FwRWxlbWVudChzZWxmRWwsIHNlbGVjdG9yLCBlbCkge1xuICBjb25zdCB0YXJnZXQgPSBzZWxmRWwucXVlcnlTZWxlY3RvcihzZWxlY3Rvcik7XG4gIGlmKHRhcmdldCkge1xuICAgIHRhcmdldC5wYXJlbnROb2RlLmluc2VydEJlZm9yZShlbCwgdGFyZ2V0KTtcbiAgICBzZWxmRWwucmVtb3ZlQ2hpbGQodGFyZ2V0KTtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3V0aWxzLmpzIiwiaW1wb3J0IENvbXBvbmVudCBmcm9tICcuL0NvbXBvbmVudCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHNldENvbmZpZyhjb25maWcpe1xuICBpZihjb25maWcuZGlzcGF0Y2gpe1xuICAgIENvbXBvbmVudC5wcm90b3R5cGUuZGlzcGF0Y2ggPSBjb25maWcuZGlzcGF0Y2g7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9zZXRDb25maWcuanMiXSwic291cmNlUm9vdCI6IiJ9