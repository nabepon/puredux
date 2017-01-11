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
/******/ 	var hotCurrentHash = "5f46e99711660a67ff5b"; // eslint-disable-line no-unused-vars
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
	exports.hasClass = exports.replaceChild = exports.recurseObject = exports.recurseEqual = exports.shallowCompare = exports.setConfig = exports.Component = undefined;
	
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
	exports.replaceChild = _utils.replaceChild;
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
	
	    // this.childrenとdata-replace要素を入れ替えます。
	
	  }, {
	    key: 'replaceChildren',
	    value: function replaceChildren() {
	      var replaceList = this.el.querySelectorAll('[data-replace]');
	      for (var i = 0; i < replaceList.length; i++) {
	        var target = replaceList[i];
	        var child = new Function('return this.children.' + target.dataset.replace).bind(this)();
	        if (child) {
	          this.el.replaceChild(child.el, target);
	        }
	      }
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
	exports.replaceChild = replaceChild;
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
	
	function replaceChild(container, selector, el) {
	  var target = container.querySelector(selector);
	  if (target) {
	    container.replaceChild(el, target);
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
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
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
	
	  try {
	    var _ret = function () {
	      var _render = new Function('obj', '_escape', source);
	      return {
	        v: function v(data) {
	          return _render.call(this, data, _escape);
	        }
	      };
	    }();
	
	    if ((typeof _ret === 'undefined' ? 'undefined' : _typeof(_ret)) === "object") return _ret.v;
	  } catch (e) {
	    e.source = source;
	    throw e;
	  }
	}

/***/ }
/******/ ])
});
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCA1ZjQ2ZTk5NzExNjYwYTY3ZmY1YiIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0NvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NldENvbmZpZy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdGVtcGxhdGUuanMiXSwibmFtZXMiOlsiQ29tcG9uZW50Iiwic2V0Q29uZmlnIiwic2hhbGxvd0NvbXBhcmUiLCJyZWN1cnNlRXF1YWwiLCJyZWN1cnNlT2JqZWN0IiwicmVwbGFjZUNoaWxkIiwiaGFzQ2xhc3MiLCJvcHRpb24iLCJ0YWdOYW1lIiwiQWN0aW9ucyIsInN0YXRlIiwicHJvcHMiLCJwcmV2UHJvcHMiLCJpc0ZpcnN0UmVuZGVyIiwiYWN0aW9ucyIsImNoaWxkcmVuIiwiaXNQdXJlZHV4Q29tcG9uZW50IiwidGVtcGxhdGVDYWNoZSIsIl90aGlzIiwiaW5pdGlhbGl6ZSIsImJpbmQiLCJhcHBseSIsImFyZ3VtZW50cyIsIm9uQ2xpY2siLCJlbCIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsInVwZGF0ZVJlbmRlciIsInJlbmRlciIsInJlbmRlcmVyIiwidXBkYXRlVGVtcGxhdGUiLCJjcmVhdGVUZW1wbGF0ZSIsInJlbmRlclRlbXBsYXRlIiwiaW5uZXJIVE1MIiwicmVwbGFjZUxpc3QiLCJxdWVyeVNlbGVjdG9yQWxsIiwiaSIsImxlbmd0aCIsInRhcmdldCIsImNoaWxkIiwiRnVuY3Rpb24iLCJkYXRhc2V0IiwicmVwbGFjZSIsInNlbGVjdG9yIiwicXVlcnlTZWxlY3RvciIsIlRhcmdldCIsImluc3RhbmNlIiwicGFyZW50Tm9kZSIsInJlbW92ZUNoaWxkIiwiY29tcG9uZW50V2lsbFVubW91bnQiLCJvYmoiLCJ1bm1vdW50IiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsInRlbXBsYXRlIiwibmV4dFByb3BzIiwiYWRkRXZlbnRMaXN0ZW5lciIsImRpc3BhdGNoIiwiZGlzcGF0Y2hlciIsImF0dGFjaENoaWxkcmVuIiwiY29tcG9uZW50V2lsbE1vdW50IiwiY29tcG9uZW50V2lsbFVwZGF0ZSIsInNob3VsZENvbXBvbmVudFVwZGF0ZSIsImNvbXBvbmVudERpZE1vdW50IiwiY29tcG9uZW50RGlkVXBkYXRlIiwiZXh0ZW5kIiwiY29uZmlnIiwiQ2xhc3MiLCJwcm90b3R5cGUiLCJfX3Byb3RvX18iLCJiaW5kQWN0aW9uQ3JlYXRvcnMiLCJPYmplY3RLZXlzIiwiT2JqZWN0Iiwia2V5cyIsInJldCIsIm1hcCIsImtleSIsIm9iakEiLCJvYmpCIiwicmVjdXJzZUNvdW50Iiwia2V5c0IiLCJrZXlzQSIsImhhc093blByb3BlcnR5IiwiY2hlY2tPYmoiLCJpdGVyYXRlZSIsImNvbnRhaW5lciIsImV2ZW50IiwibmFtZSIsImNsYXNzTGlzdCIsImNvbnRhaW5zIiwiZXNjYXBlcyIsImVzY2FwZU1hcCIsInNvdXJjZSIsImpvaW4iLCJ0ZXN0UmVnZXhwIiwiUmVnRXhwIiwicmVwbGFjZVJlZ2V4cCIsImVzY2FwZXIiLCJtYXRjaCIsIl9lc2NhcGUiLCJzdHJpbmciLCJ0ZXN0IiwidGVtcGxhdGVFc2NhcGVzIiwidGVtcGxhdGVFc2NhcGVyIiwidGVtcGxhdGVFc2NhcGVDaGFyIiwibm9NYXRjaCIsIm1hdGNoZXIiLCJ0ZXh0IiwiaW5kZXgiLCJlc2NhcGUiLCJpbnRlcnBvbGF0ZSIsImV2YWx1YXRlIiwib2Zmc2V0Iiwic2xpY2UiLCJfcmVuZGVyIiwiZGF0YSIsImNhbGwiLCJlIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztBQ1ZBO0FBQ0E7QUFDQSxtRUFBMkQ7QUFDM0Q7QUFDQTtBQUNBOztBQUVBLG9EQUE0QztBQUM1QztBQUNB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ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcIlB1cmVkdXhcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wiUHVyZWR1eFwiXSA9IGZhY3RvcnkoKTtcbn0pKHRoaXMsIGZ1bmN0aW9uKCkge1xucmV0dXJuIFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCIgXHR2YXIgcGFyZW50SG90VXBkYXRlQ2FsbGJhY2sgPSB0aGlzW1wid2VicGFja0hvdFVwZGF0ZVB1cmVkdXhcIl07XG4gXHR0aGlzW1wid2VicGFja0hvdFVwZGF0ZVB1cmVkdXhcIl0gPSBcclxuIFx0ZnVuY3Rpb24gd2VicGFja0hvdFVwZGF0ZUNhbGxiYWNrKGNodW5rSWQsIG1vcmVNb2R1bGVzKSB7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW51c2VkLXZhcnNcclxuIFx0XHRob3RBZGRVcGRhdGVDaHVuayhjaHVua0lkLCBtb3JlTW9kdWxlcyk7XHJcbiBcdFx0aWYocGFyZW50SG90VXBkYXRlQ2FsbGJhY2spIHBhcmVudEhvdFVwZGF0ZUNhbGxiYWNrKGNodW5rSWQsIG1vcmVNb2R1bGVzKTtcclxuIFx0fVxyXG4gXHRcclxuIFx0ZnVuY3Rpb24gaG90RG93bmxvYWRVcGRhdGVDaHVuayhjaHVua0lkKSB7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW51c2VkLXZhcnNcclxuIFx0XHR2YXIgaGVhZCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiaGVhZFwiKVswXTtcclxuIFx0XHR2YXIgc2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNjcmlwdFwiKTtcclxuIFx0XHRzY3JpcHQudHlwZSA9IFwidGV4dC9qYXZhc2NyaXB0XCI7XHJcbiBcdFx0c2NyaXB0LmNoYXJzZXQgPSBcInV0Zi04XCI7XHJcbiBcdFx0c2NyaXB0LnNyYyA9IF9fd2VicGFja19yZXF1aXJlX18ucCArIFwiXCIgKyBjaHVua0lkICsgXCIuXCIgKyBob3RDdXJyZW50SGFzaCArIFwiLmhvdC11cGRhdGUuanNcIjtcclxuIFx0XHRoZWFkLmFwcGVuZENoaWxkKHNjcmlwdCk7XHJcbiBcdH1cclxuIFx0XHJcbiBcdGZ1bmN0aW9uIGhvdERvd25sb2FkTWFuaWZlc3QoY2FsbGJhY2spIHsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bnVzZWQtdmFyc1xyXG4gXHRcdGlmKHR5cGVvZiBYTUxIdHRwUmVxdWVzdCA9PT0gXCJ1bmRlZmluZWRcIilcclxuIFx0XHRcdHJldHVybiBjYWxsYmFjayhuZXcgRXJyb3IoXCJObyBicm93c2VyIHN1cHBvcnRcIikpO1xyXG4gXHRcdHRyeSB7XHJcbiBcdFx0XHR2YXIgcmVxdWVzdCA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xyXG4gXHRcdFx0dmFyIHJlcXVlc3RQYXRoID0gX193ZWJwYWNrX3JlcXVpcmVfXy5wICsgXCJcIiArIGhvdEN1cnJlbnRIYXNoICsgXCIuaG90LXVwZGF0ZS5qc29uXCI7XHJcbiBcdFx0XHRyZXF1ZXN0Lm9wZW4oXCJHRVRcIiwgcmVxdWVzdFBhdGgsIHRydWUpO1xyXG4gXHRcdFx0cmVxdWVzdC50aW1lb3V0ID0gMTAwMDA7XHJcbiBcdFx0XHRyZXF1ZXN0LnNlbmQobnVsbCk7XHJcbiBcdFx0fSBjYXRjaChlcnIpIHtcclxuIFx0XHRcdHJldHVybiBjYWxsYmFjayhlcnIpO1xyXG4gXHRcdH1cclxuIFx0XHRyZXF1ZXN0Lm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uKCkge1xyXG4gXHRcdFx0aWYocmVxdWVzdC5yZWFkeVN0YXRlICE9PSA0KSByZXR1cm47XHJcbiBcdFx0XHRpZihyZXF1ZXN0LnN0YXR1cyA9PT0gMCkge1xyXG4gXHRcdFx0XHQvLyB0aW1lb3V0XHJcbiBcdFx0XHRcdGNhbGxiYWNrKG5ldyBFcnJvcihcIk1hbmlmZXN0IHJlcXVlc3QgdG8gXCIgKyByZXF1ZXN0UGF0aCArIFwiIHRpbWVkIG91dC5cIikpO1xyXG4gXHRcdFx0fSBlbHNlIGlmKHJlcXVlc3Quc3RhdHVzID09PSA0MDQpIHtcclxuIFx0XHRcdFx0Ly8gbm8gdXBkYXRlIGF2YWlsYWJsZVxyXG4gXHRcdFx0XHRjYWxsYmFjaygpO1xyXG4gXHRcdFx0fSBlbHNlIGlmKHJlcXVlc3Quc3RhdHVzICE9PSAyMDAgJiYgcmVxdWVzdC5zdGF0dXMgIT09IDMwNCkge1xyXG4gXHRcdFx0XHQvLyBvdGhlciBmYWlsdXJlXHJcbiBcdFx0XHRcdGNhbGxiYWNrKG5ldyBFcnJvcihcIk1hbmlmZXN0IHJlcXVlc3QgdG8gXCIgKyByZXF1ZXN0UGF0aCArIFwiIGZhaWxlZC5cIikpO1xyXG4gXHRcdFx0fSBlbHNlIHtcclxuIFx0XHRcdFx0Ly8gc3VjY2Vzc1xyXG4gXHRcdFx0XHR0cnkge1xyXG4gXHRcdFx0XHRcdHZhciB1cGRhdGUgPSBKU09OLnBhcnNlKHJlcXVlc3QucmVzcG9uc2VUZXh0KTtcclxuIFx0XHRcdFx0fSBjYXRjaChlKSB7XHJcbiBcdFx0XHRcdFx0Y2FsbGJhY2soZSk7XHJcbiBcdFx0XHRcdFx0cmV0dXJuO1xyXG4gXHRcdFx0XHR9XHJcbiBcdFx0XHRcdGNhbGxiYWNrKG51bGwsIHVwZGF0ZSk7XHJcbiBcdFx0XHR9XHJcbiBcdFx0fTtcclxuIFx0fVxyXG5cbiBcdFxyXG4gXHRcclxuIFx0Ly8gQ29waWVkIGZyb20gaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL3JlYWN0L2Jsb2IvYmVmNDViMC9zcmMvc2hhcmVkL3V0aWxzL2NhbkRlZmluZVByb3BlcnR5LmpzXHJcbiBcdHZhciBjYW5EZWZpbmVQcm9wZXJ0eSA9IGZhbHNlO1xyXG4gXHR0cnkge1xyXG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh7fSwgXCJ4XCIsIHtcclxuIFx0XHRcdGdldDogZnVuY3Rpb24oKSB7fVxyXG4gXHRcdH0pO1xyXG4gXHRcdGNhbkRlZmluZVByb3BlcnR5ID0gdHJ1ZTtcclxuIFx0fSBjYXRjaCh4KSB7XHJcbiBcdFx0Ly8gSUUgd2lsbCBmYWlsIG9uIGRlZmluZVByb3BlcnR5XHJcbiBcdH1cclxuIFx0XHJcbiBcdHZhciBob3RBcHBseU9uVXBkYXRlID0gdHJ1ZTtcclxuIFx0dmFyIGhvdEN1cnJlbnRIYXNoID0gXCI1ZjQ2ZTk5NzExNjYwYTY3ZmY1YlwiOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVudXNlZC12YXJzXHJcbiBcdHZhciBob3RDdXJyZW50TW9kdWxlRGF0YSA9IHt9O1xyXG4gXHR2YXIgaG90Q3VycmVudFBhcmVudHMgPSBbXTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bnVzZWQtdmFyc1xyXG4gXHRcclxuIFx0ZnVuY3Rpb24gaG90Q3JlYXRlUmVxdWlyZShtb2R1bGVJZCkgeyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVudXNlZC12YXJzXHJcbiBcdFx0dmFyIG1lID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XHJcbiBcdFx0aWYoIW1lKSByZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXztcclxuIFx0XHR2YXIgZm4gPSBmdW5jdGlvbihyZXF1ZXN0KSB7XHJcbiBcdFx0XHRpZihtZS5ob3QuYWN0aXZlKSB7XHJcbiBcdFx0XHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbcmVxdWVzdF0pIHtcclxuIFx0XHRcdFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW3JlcXVlc3RdLnBhcmVudHMuaW5kZXhPZihtb2R1bGVJZCkgPCAwKVxyXG4gXHRcdFx0XHRcdFx0aW5zdGFsbGVkTW9kdWxlc1tyZXF1ZXN0XS5wYXJlbnRzLnB1c2gobW9kdWxlSWQpO1xyXG4gXHRcdFx0XHRcdGlmKG1lLmNoaWxkcmVuLmluZGV4T2YocmVxdWVzdCkgPCAwKVxyXG4gXHRcdFx0XHRcdFx0bWUuY2hpbGRyZW4ucHVzaChyZXF1ZXN0KTtcclxuIFx0XHRcdFx0fSBlbHNlIGhvdEN1cnJlbnRQYXJlbnRzID0gW21vZHVsZUlkXTtcclxuIFx0XHRcdH0gZWxzZSB7XHJcbiBcdFx0XHRcdGNvbnNvbGUud2FybihcIltITVJdIHVuZXhwZWN0ZWQgcmVxdWlyZShcIiArIHJlcXVlc3QgKyBcIikgZnJvbSBkaXNwb3NlZCBtb2R1bGUgXCIgKyBtb2R1bGVJZCk7XHJcbiBcdFx0XHRcdGhvdEN1cnJlbnRQYXJlbnRzID0gW107XHJcbiBcdFx0XHR9XHJcbiBcdFx0XHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhyZXF1ZXN0KTtcclxuIFx0XHR9O1xyXG4gXHRcdGZvcih2YXIgbmFtZSBpbiBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XHJcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoX193ZWJwYWNrX3JlcXVpcmVfXywgbmFtZSkpIHtcclxuIFx0XHRcdFx0aWYoY2FuRGVmaW5lUHJvcGVydHkpIHtcclxuIFx0XHRcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZm4sIG5hbWUsIChmdW5jdGlvbihuYW1lKSB7XHJcbiBcdFx0XHRcdFx0XHRyZXR1cm4ge1xyXG4gXHRcdFx0XHRcdFx0XHRjb25maWd1cmFibGU6IHRydWUsXHJcbiBcdFx0XHRcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXHJcbiBcdFx0XHRcdFx0XHRcdGdldDogZnVuY3Rpb24oKSB7XHJcbiBcdFx0XHRcdFx0XHRcdFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX19bbmFtZV07XHJcbiBcdFx0XHRcdFx0XHRcdH0sXHJcbiBcdFx0XHRcdFx0XHRcdHNldDogZnVuY3Rpb24odmFsdWUpIHtcclxuIFx0XHRcdFx0XHRcdFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fW25hbWVdID0gdmFsdWU7XHJcbiBcdFx0XHRcdFx0XHRcdH1cclxuIFx0XHRcdFx0XHRcdH07XHJcbiBcdFx0XHRcdFx0fShuYW1lKSkpO1xyXG4gXHRcdFx0XHR9IGVsc2Uge1xyXG4gXHRcdFx0XHRcdGZuW25hbWVdID0gX193ZWJwYWNrX3JlcXVpcmVfX1tuYW1lXTtcclxuIFx0XHRcdFx0fVxyXG4gXHRcdFx0fVxyXG4gXHRcdH1cclxuIFx0XHJcbiBcdFx0ZnVuY3Rpb24gZW5zdXJlKGNodW5rSWQsIGNhbGxiYWNrKSB7XHJcbiBcdFx0XHRpZihob3RTdGF0dXMgPT09IFwicmVhZHlcIilcclxuIFx0XHRcdFx0aG90U2V0U3RhdHVzKFwicHJlcGFyZVwiKTtcclxuIFx0XHRcdGhvdENodW5rc0xvYWRpbmcrKztcclxuIFx0XHRcdF9fd2VicGFja19yZXF1aXJlX18uZShjaHVua0lkLCBmdW5jdGlvbigpIHtcclxuIFx0XHRcdFx0dHJ5IHtcclxuIFx0XHRcdFx0XHRjYWxsYmFjay5jYWxsKG51bGwsIGZuKTtcclxuIFx0XHRcdFx0fSBmaW5hbGx5IHtcclxuIFx0XHRcdFx0XHRmaW5pc2hDaHVua0xvYWRpbmcoKTtcclxuIFx0XHRcdFx0fVxyXG4gXHRcclxuIFx0XHRcdFx0ZnVuY3Rpb24gZmluaXNoQ2h1bmtMb2FkaW5nKCkge1xyXG4gXHRcdFx0XHRcdGhvdENodW5rc0xvYWRpbmctLTtcclxuIFx0XHRcdFx0XHRpZihob3RTdGF0dXMgPT09IFwicHJlcGFyZVwiKSB7XHJcbiBcdFx0XHRcdFx0XHRpZighaG90V2FpdGluZ0ZpbGVzTWFwW2NodW5rSWRdKSB7XHJcbiBcdFx0XHRcdFx0XHRcdGhvdEVuc3VyZVVwZGF0ZUNodW5rKGNodW5rSWQpO1xyXG4gXHRcdFx0XHRcdFx0fVxyXG4gXHRcdFx0XHRcdFx0aWYoaG90Q2h1bmtzTG9hZGluZyA9PT0gMCAmJiBob3RXYWl0aW5nRmlsZXMgPT09IDApIHtcclxuIFx0XHRcdFx0XHRcdFx0aG90VXBkYXRlRG93bmxvYWRlZCgpO1xyXG4gXHRcdFx0XHRcdFx0fVxyXG4gXHRcdFx0XHRcdH1cclxuIFx0XHRcdFx0fVxyXG4gXHRcdFx0fSk7XHJcbiBcdFx0fVxyXG4gXHRcdGlmKGNhbkRlZmluZVByb3BlcnR5KSB7XHJcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZm4sIFwiZVwiLCB7XHJcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXHJcbiBcdFx0XHRcdHZhbHVlOiBlbnN1cmVcclxuIFx0XHRcdH0pO1xyXG4gXHRcdH0gZWxzZSB7XHJcbiBcdFx0XHRmbi5lID0gZW5zdXJlO1xyXG4gXHRcdH1cclxuIFx0XHRyZXR1cm4gZm47XHJcbiBcdH1cclxuIFx0XHJcbiBcdGZ1bmN0aW9uIGhvdENyZWF0ZU1vZHVsZShtb2R1bGVJZCkgeyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVudXNlZC12YXJzXHJcbiBcdFx0dmFyIGhvdCA9IHtcclxuIFx0XHRcdC8vIHByaXZhdGUgc3R1ZmZcclxuIFx0XHRcdF9hY2NlcHRlZERlcGVuZGVuY2llczoge30sXHJcbiBcdFx0XHRfZGVjbGluZWREZXBlbmRlbmNpZXM6IHt9LFxyXG4gXHRcdFx0X3NlbGZBY2NlcHRlZDogZmFsc2UsXHJcbiBcdFx0XHRfc2VsZkRlY2xpbmVkOiBmYWxzZSxcclxuIFx0XHRcdF9kaXNwb3NlSGFuZGxlcnM6IFtdLFxyXG4gXHRcclxuIFx0XHRcdC8vIE1vZHVsZSBBUElcclxuIFx0XHRcdGFjdGl2ZTogdHJ1ZSxcclxuIFx0XHRcdGFjY2VwdDogZnVuY3Rpb24oZGVwLCBjYWxsYmFjaykge1xyXG4gXHRcdFx0XHRpZih0eXBlb2YgZGVwID09PSBcInVuZGVmaW5lZFwiKVxyXG4gXHRcdFx0XHRcdGhvdC5fc2VsZkFjY2VwdGVkID0gdHJ1ZTtcclxuIFx0XHRcdFx0ZWxzZSBpZih0eXBlb2YgZGVwID09PSBcImZ1bmN0aW9uXCIpXHJcbiBcdFx0XHRcdFx0aG90Ll9zZWxmQWNjZXB0ZWQgPSBkZXA7XHJcbiBcdFx0XHRcdGVsc2UgaWYodHlwZW9mIGRlcCA9PT0gXCJvYmplY3RcIilcclxuIFx0XHRcdFx0XHRmb3IodmFyIGkgPSAwOyBpIDwgZGVwLmxlbmd0aDsgaSsrKVxyXG4gXHRcdFx0XHRcdFx0aG90Ll9hY2NlcHRlZERlcGVuZGVuY2llc1tkZXBbaV1dID0gY2FsbGJhY2s7XHJcbiBcdFx0XHRcdGVsc2VcclxuIFx0XHRcdFx0XHRob3QuX2FjY2VwdGVkRGVwZW5kZW5jaWVzW2RlcF0gPSBjYWxsYmFjaztcclxuIFx0XHRcdH0sXHJcbiBcdFx0XHRkZWNsaW5lOiBmdW5jdGlvbihkZXApIHtcclxuIFx0XHRcdFx0aWYodHlwZW9mIGRlcCA9PT0gXCJ1bmRlZmluZWRcIilcclxuIFx0XHRcdFx0XHRob3QuX3NlbGZEZWNsaW5lZCA9IHRydWU7XHJcbiBcdFx0XHRcdGVsc2UgaWYodHlwZW9mIGRlcCA9PT0gXCJudW1iZXJcIilcclxuIFx0XHRcdFx0XHRob3QuX2RlY2xpbmVkRGVwZW5kZW5jaWVzW2RlcF0gPSB0cnVlO1xyXG4gXHRcdFx0XHRlbHNlXHJcbiBcdFx0XHRcdFx0Zm9yKHZhciBpID0gMDsgaSA8IGRlcC5sZW5ndGg7IGkrKylcclxuIFx0XHRcdFx0XHRcdGhvdC5fZGVjbGluZWREZXBlbmRlbmNpZXNbZGVwW2ldXSA9IHRydWU7XHJcbiBcdFx0XHR9LFxyXG4gXHRcdFx0ZGlzcG9zZTogZnVuY3Rpb24oY2FsbGJhY2spIHtcclxuIFx0XHRcdFx0aG90Ll9kaXNwb3NlSGFuZGxlcnMucHVzaChjYWxsYmFjayk7XHJcbiBcdFx0XHR9LFxyXG4gXHRcdFx0YWRkRGlzcG9zZUhhbmRsZXI6IGZ1bmN0aW9uKGNhbGxiYWNrKSB7XHJcbiBcdFx0XHRcdGhvdC5fZGlzcG9zZUhhbmRsZXJzLnB1c2goY2FsbGJhY2spO1xyXG4gXHRcdFx0fSxcclxuIFx0XHRcdHJlbW92ZURpc3Bvc2VIYW5kbGVyOiBmdW5jdGlvbihjYWxsYmFjaykge1xyXG4gXHRcdFx0XHR2YXIgaWR4ID0gaG90Ll9kaXNwb3NlSGFuZGxlcnMuaW5kZXhPZihjYWxsYmFjayk7XHJcbiBcdFx0XHRcdGlmKGlkeCA+PSAwKSBob3QuX2Rpc3Bvc2VIYW5kbGVycy5zcGxpY2UoaWR4LCAxKTtcclxuIFx0XHRcdH0sXHJcbiBcdFxyXG4gXHRcdFx0Ly8gTWFuYWdlbWVudCBBUElcclxuIFx0XHRcdGNoZWNrOiBob3RDaGVjayxcclxuIFx0XHRcdGFwcGx5OiBob3RBcHBseSxcclxuIFx0XHRcdHN0YXR1czogZnVuY3Rpb24obCkge1xyXG4gXHRcdFx0XHRpZighbCkgcmV0dXJuIGhvdFN0YXR1cztcclxuIFx0XHRcdFx0aG90U3RhdHVzSGFuZGxlcnMucHVzaChsKTtcclxuIFx0XHRcdH0sXHJcbiBcdFx0XHRhZGRTdGF0dXNIYW5kbGVyOiBmdW5jdGlvbihsKSB7XHJcbiBcdFx0XHRcdGhvdFN0YXR1c0hhbmRsZXJzLnB1c2gobCk7XHJcbiBcdFx0XHR9LFxyXG4gXHRcdFx0cmVtb3ZlU3RhdHVzSGFuZGxlcjogZnVuY3Rpb24obCkge1xyXG4gXHRcdFx0XHR2YXIgaWR4ID0gaG90U3RhdHVzSGFuZGxlcnMuaW5kZXhPZihsKTtcclxuIFx0XHRcdFx0aWYoaWR4ID49IDApIGhvdFN0YXR1c0hhbmRsZXJzLnNwbGljZShpZHgsIDEpO1xyXG4gXHRcdFx0fSxcclxuIFx0XHJcbiBcdFx0XHQvL2luaGVyaXQgZnJvbSBwcmV2aW91cyBkaXNwb3NlIGNhbGxcclxuIFx0XHRcdGRhdGE6IGhvdEN1cnJlbnRNb2R1bGVEYXRhW21vZHVsZUlkXVxyXG4gXHRcdH07XHJcbiBcdFx0cmV0dXJuIGhvdDtcclxuIFx0fVxyXG4gXHRcclxuIFx0dmFyIGhvdFN0YXR1c0hhbmRsZXJzID0gW107XHJcbiBcdHZhciBob3RTdGF0dXMgPSBcImlkbGVcIjtcclxuIFx0XHJcbiBcdGZ1bmN0aW9uIGhvdFNldFN0YXR1cyhuZXdTdGF0dXMpIHtcclxuIFx0XHRob3RTdGF0dXMgPSBuZXdTdGF0dXM7XHJcbiBcdFx0Zm9yKHZhciBpID0gMDsgaSA8IGhvdFN0YXR1c0hhbmRsZXJzLmxlbmd0aDsgaSsrKVxyXG4gXHRcdFx0aG90U3RhdHVzSGFuZGxlcnNbaV0uY2FsbChudWxsLCBuZXdTdGF0dXMpO1xyXG4gXHR9XHJcbiBcdFxyXG4gXHQvLyB3aGlsZSBkb3dubG9hZGluZ1xyXG4gXHR2YXIgaG90V2FpdGluZ0ZpbGVzID0gMDtcclxuIFx0dmFyIGhvdENodW5rc0xvYWRpbmcgPSAwO1xyXG4gXHR2YXIgaG90V2FpdGluZ0ZpbGVzTWFwID0ge307XHJcbiBcdHZhciBob3RSZXF1ZXN0ZWRGaWxlc01hcCA9IHt9O1xyXG4gXHR2YXIgaG90QXZhaWxpYmxlRmlsZXNNYXAgPSB7fTtcclxuIFx0dmFyIGhvdENhbGxiYWNrO1xyXG4gXHRcclxuIFx0Ly8gVGhlIHVwZGF0ZSBpbmZvXHJcbiBcdHZhciBob3RVcGRhdGUsIGhvdFVwZGF0ZU5ld0hhc2g7XHJcbiBcdFxyXG4gXHRmdW5jdGlvbiB0b01vZHVsZUlkKGlkKSB7XHJcbiBcdFx0dmFyIGlzTnVtYmVyID0gKCtpZCkgKyBcIlwiID09PSBpZDtcclxuIFx0XHRyZXR1cm4gaXNOdW1iZXIgPyAraWQgOiBpZDtcclxuIFx0fVxyXG4gXHRcclxuIFx0ZnVuY3Rpb24gaG90Q2hlY2soYXBwbHksIGNhbGxiYWNrKSB7XHJcbiBcdFx0aWYoaG90U3RhdHVzICE9PSBcImlkbGVcIikgdGhyb3cgbmV3IEVycm9yKFwiY2hlY2soKSBpcyBvbmx5IGFsbG93ZWQgaW4gaWRsZSBzdGF0dXNcIik7XHJcbiBcdFx0aWYodHlwZW9mIGFwcGx5ID09PSBcImZ1bmN0aW9uXCIpIHtcclxuIFx0XHRcdGhvdEFwcGx5T25VcGRhdGUgPSBmYWxzZTtcclxuIFx0XHRcdGNhbGxiYWNrID0gYXBwbHk7XHJcbiBcdFx0fSBlbHNlIHtcclxuIFx0XHRcdGhvdEFwcGx5T25VcGRhdGUgPSBhcHBseTtcclxuIFx0XHRcdGNhbGxiYWNrID0gY2FsbGJhY2sgfHwgZnVuY3Rpb24oZXJyKSB7XHJcbiBcdFx0XHRcdGlmKGVycikgdGhyb3cgZXJyO1xyXG4gXHRcdFx0fTtcclxuIFx0XHR9XHJcbiBcdFx0aG90U2V0U3RhdHVzKFwiY2hlY2tcIik7XHJcbiBcdFx0aG90RG93bmxvYWRNYW5pZmVzdChmdW5jdGlvbihlcnIsIHVwZGF0ZSkge1xyXG4gXHRcdFx0aWYoZXJyKSByZXR1cm4gY2FsbGJhY2soZXJyKTtcclxuIFx0XHRcdGlmKCF1cGRhdGUpIHtcclxuIFx0XHRcdFx0aG90U2V0U3RhdHVzKFwiaWRsZVwiKTtcclxuIFx0XHRcdFx0Y2FsbGJhY2sobnVsbCwgbnVsbCk7XHJcbiBcdFx0XHRcdHJldHVybjtcclxuIFx0XHRcdH1cclxuIFx0XHJcbiBcdFx0XHRob3RSZXF1ZXN0ZWRGaWxlc01hcCA9IHt9O1xyXG4gXHRcdFx0aG90QXZhaWxpYmxlRmlsZXNNYXAgPSB7fTtcclxuIFx0XHRcdGhvdFdhaXRpbmdGaWxlc01hcCA9IHt9O1xyXG4gXHRcdFx0Zm9yKHZhciBpID0gMDsgaSA8IHVwZGF0ZS5jLmxlbmd0aDsgaSsrKVxyXG4gXHRcdFx0XHRob3RBdmFpbGlibGVGaWxlc01hcFt1cGRhdGUuY1tpXV0gPSB0cnVlO1xyXG4gXHRcdFx0aG90VXBkYXRlTmV3SGFzaCA9IHVwZGF0ZS5oO1xyXG4gXHRcclxuIFx0XHRcdGhvdFNldFN0YXR1cyhcInByZXBhcmVcIik7XHJcbiBcdFx0XHRob3RDYWxsYmFjayA9IGNhbGxiYWNrO1xyXG4gXHRcdFx0aG90VXBkYXRlID0ge307XHJcbiBcdFx0XHR2YXIgY2h1bmtJZCA9IDA7XHJcbiBcdFx0XHR7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tbG9uZS1ibG9ja3NcclxuIFx0XHRcdFx0LypnbG9iYWxzIGNodW5rSWQgKi9cclxuIFx0XHRcdFx0aG90RW5zdXJlVXBkYXRlQ2h1bmsoY2h1bmtJZCk7XHJcbiBcdFx0XHR9XHJcbiBcdFx0XHRpZihob3RTdGF0dXMgPT09IFwicHJlcGFyZVwiICYmIGhvdENodW5rc0xvYWRpbmcgPT09IDAgJiYgaG90V2FpdGluZ0ZpbGVzID09PSAwKSB7XHJcbiBcdFx0XHRcdGhvdFVwZGF0ZURvd25sb2FkZWQoKTtcclxuIFx0XHRcdH1cclxuIFx0XHR9KTtcclxuIFx0fVxyXG4gXHRcclxuIFx0ZnVuY3Rpb24gaG90QWRkVXBkYXRlQ2h1bmsoY2h1bmtJZCwgbW9yZU1vZHVsZXMpIHsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bnVzZWQtdmFyc1xyXG4gXHRcdGlmKCFob3RBdmFpbGlibGVGaWxlc01hcFtjaHVua0lkXSB8fCAhaG90UmVxdWVzdGVkRmlsZXNNYXBbY2h1bmtJZF0pXHJcbiBcdFx0XHRyZXR1cm47XHJcbiBcdFx0aG90UmVxdWVzdGVkRmlsZXNNYXBbY2h1bmtJZF0gPSBmYWxzZTtcclxuIFx0XHRmb3IodmFyIG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XHJcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xyXG4gXHRcdFx0XHRob3RVcGRhdGVbbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xyXG4gXHRcdFx0fVxyXG4gXHRcdH1cclxuIFx0XHRpZigtLWhvdFdhaXRpbmdGaWxlcyA9PT0gMCAmJiBob3RDaHVua3NMb2FkaW5nID09PSAwKSB7XHJcbiBcdFx0XHRob3RVcGRhdGVEb3dubG9hZGVkKCk7XHJcbiBcdFx0fVxyXG4gXHR9XHJcbiBcdFxyXG4gXHRmdW5jdGlvbiBob3RFbnN1cmVVcGRhdGVDaHVuayhjaHVua0lkKSB7XHJcbiBcdFx0aWYoIWhvdEF2YWlsaWJsZUZpbGVzTWFwW2NodW5rSWRdKSB7XHJcbiBcdFx0XHRob3RXYWl0aW5nRmlsZXNNYXBbY2h1bmtJZF0gPSB0cnVlO1xyXG4gXHRcdH0gZWxzZSB7XHJcbiBcdFx0XHRob3RSZXF1ZXN0ZWRGaWxlc01hcFtjaHVua0lkXSA9IHRydWU7XHJcbiBcdFx0XHRob3RXYWl0aW5nRmlsZXMrKztcclxuIFx0XHRcdGhvdERvd25sb2FkVXBkYXRlQ2h1bmsoY2h1bmtJZCk7XHJcbiBcdFx0fVxyXG4gXHR9XHJcbiBcdFxyXG4gXHRmdW5jdGlvbiBob3RVcGRhdGVEb3dubG9hZGVkKCkge1xyXG4gXHRcdGhvdFNldFN0YXR1cyhcInJlYWR5XCIpO1xyXG4gXHRcdHZhciBjYWxsYmFjayA9IGhvdENhbGxiYWNrO1xyXG4gXHRcdGhvdENhbGxiYWNrID0gbnVsbDtcclxuIFx0XHRpZighY2FsbGJhY2spIHJldHVybjtcclxuIFx0XHRpZihob3RBcHBseU9uVXBkYXRlKSB7XHJcbiBcdFx0XHRob3RBcHBseShob3RBcHBseU9uVXBkYXRlLCBjYWxsYmFjayk7XHJcbiBcdFx0fSBlbHNlIHtcclxuIFx0XHRcdHZhciBvdXRkYXRlZE1vZHVsZXMgPSBbXTtcclxuIFx0XHRcdGZvcih2YXIgaWQgaW4gaG90VXBkYXRlKSB7XHJcbiBcdFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChob3RVcGRhdGUsIGlkKSkge1xyXG4gXHRcdFx0XHRcdG91dGRhdGVkTW9kdWxlcy5wdXNoKHRvTW9kdWxlSWQoaWQpKTtcclxuIFx0XHRcdFx0fVxyXG4gXHRcdFx0fVxyXG4gXHRcdFx0Y2FsbGJhY2sobnVsbCwgb3V0ZGF0ZWRNb2R1bGVzKTtcclxuIFx0XHR9XHJcbiBcdH1cclxuIFx0XHJcbiBcdGZ1bmN0aW9uIGhvdEFwcGx5KG9wdGlvbnMsIGNhbGxiYWNrKSB7XHJcbiBcdFx0aWYoaG90U3RhdHVzICE9PSBcInJlYWR5XCIpIHRocm93IG5ldyBFcnJvcihcImFwcGx5KCkgaXMgb25seSBhbGxvd2VkIGluIHJlYWR5IHN0YXR1c1wiKTtcclxuIFx0XHRpZih0eXBlb2Ygb3B0aW9ucyA9PT0gXCJmdW5jdGlvblwiKSB7XHJcbiBcdFx0XHRjYWxsYmFjayA9IG9wdGlvbnM7XHJcbiBcdFx0XHRvcHRpb25zID0ge307XHJcbiBcdFx0fSBlbHNlIGlmKG9wdGlvbnMgJiYgdHlwZW9mIG9wdGlvbnMgPT09IFwib2JqZWN0XCIpIHtcclxuIFx0XHRcdGNhbGxiYWNrID0gY2FsbGJhY2sgfHwgZnVuY3Rpb24oZXJyKSB7XHJcbiBcdFx0XHRcdGlmKGVycikgdGhyb3cgZXJyO1xyXG4gXHRcdFx0fTtcclxuIFx0XHR9IGVsc2Uge1xyXG4gXHRcdFx0b3B0aW9ucyA9IHt9O1xyXG4gXHRcdFx0Y2FsbGJhY2sgPSBjYWxsYmFjayB8fCBmdW5jdGlvbihlcnIpIHtcclxuIFx0XHRcdFx0aWYoZXJyKSB0aHJvdyBlcnI7XHJcbiBcdFx0XHR9O1xyXG4gXHRcdH1cclxuIFx0XHJcbiBcdFx0ZnVuY3Rpb24gZ2V0QWZmZWN0ZWRTdHVmZihtb2R1bGUpIHtcclxuIFx0XHRcdHZhciBvdXRkYXRlZE1vZHVsZXMgPSBbbW9kdWxlXTtcclxuIFx0XHRcdHZhciBvdXRkYXRlZERlcGVuZGVuY2llcyA9IHt9O1xyXG4gXHRcclxuIFx0XHRcdHZhciBxdWV1ZSA9IG91dGRhdGVkTW9kdWxlcy5zbGljZSgpO1xyXG4gXHRcdFx0d2hpbGUocXVldWUubGVuZ3RoID4gMCkge1xyXG4gXHRcdFx0XHR2YXIgbW9kdWxlSWQgPSBxdWV1ZS5wb3AoKTtcclxuIFx0XHRcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xyXG4gXHRcdFx0XHRpZighbW9kdWxlIHx8IG1vZHVsZS5ob3QuX3NlbGZBY2NlcHRlZClcclxuIFx0XHRcdFx0XHRjb250aW51ZTtcclxuIFx0XHRcdFx0aWYobW9kdWxlLmhvdC5fc2VsZkRlY2xpbmVkKSB7XHJcbiBcdFx0XHRcdFx0cmV0dXJuIG5ldyBFcnJvcihcIkFib3J0ZWQgYmVjYXVzZSBvZiBzZWxmIGRlY2xpbmU6IFwiICsgbW9kdWxlSWQpO1xyXG4gXHRcdFx0XHR9XHJcbiBcdFx0XHRcdGlmKG1vZHVsZUlkID09PSAwKSB7XHJcbiBcdFx0XHRcdFx0cmV0dXJuO1xyXG4gXHRcdFx0XHR9XHJcbiBcdFx0XHRcdGZvcih2YXIgaSA9IDA7IGkgPCBtb2R1bGUucGFyZW50cy5sZW5ndGg7IGkrKykge1xyXG4gXHRcdFx0XHRcdHZhciBwYXJlbnRJZCA9IG1vZHVsZS5wYXJlbnRzW2ldO1xyXG4gXHRcdFx0XHRcdHZhciBwYXJlbnQgPSBpbnN0YWxsZWRNb2R1bGVzW3BhcmVudElkXTtcclxuIFx0XHRcdFx0XHRpZihwYXJlbnQuaG90Ll9kZWNsaW5lZERlcGVuZGVuY2llc1ttb2R1bGVJZF0pIHtcclxuIFx0XHRcdFx0XHRcdHJldHVybiBuZXcgRXJyb3IoXCJBYm9ydGVkIGJlY2F1c2Ugb2YgZGVjbGluZWQgZGVwZW5kZW5jeTogXCIgKyBtb2R1bGVJZCArIFwiIGluIFwiICsgcGFyZW50SWQpO1xyXG4gXHRcdFx0XHRcdH1cclxuIFx0XHRcdFx0XHRpZihvdXRkYXRlZE1vZHVsZXMuaW5kZXhPZihwYXJlbnRJZCkgPj0gMCkgY29udGludWU7XHJcbiBcdFx0XHRcdFx0aWYocGFyZW50LmhvdC5fYWNjZXB0ZWREZXBlbmRlbmNpZXNbbW9kdWxlSWRdKSB7XHJcbiBcdFx0XHRcdFx0XHRpZighb3V0ZGF0ZWREZXBlbmRlbmNpZXNbcGFyZW50SWRdKVxyXG4gXHRcdFx0XHRcdFx0XHRvdXRkYXRlZERlcGVuZGVuY2llc1twYXJlbnRJZF0gPSBbXTtcclxuIFx0XHRcdFx0XHRcdGFkZEFsbFRvU2V0KG91dGRhdGVkRGVwZW5kZW5jaWVzW3BhcmVudElkXSwgW21vZHVsZUlkXSk7XHJcbiBcdFx0XHRcdFx0XHRjb250aW51ZTtcclxuIFx0XHRcdFx0XHR9XHJcbiBcdFx0XHRcdFx0ZGVsZXRlIG91dGRhdGVkRGVwZW5kZW5jaWVzW3BhcmVudElkXTtcclxuIFx0XHRcdFx0XHRvdXRkYXRlZE1vZHVsZXMucHVzaChwYXJlbnRJZCk7XHJcbiBcdFx0XHRcdFx0cXVldWUucHVzaChwYXJlbnRJZCk7XHJcbiBcdFx0XHRcdH1cclxuIFx0XHRcdH1cclxuIFx0XHJcbiBcdFx0XHRyZXR1cm4gW291dGRhdGVkTW9kdWxlcywgb3V0ZGF0ZWREZXBlbmRlbmNpZXNdO1xyXG4gXHRcdH1cclxuIFx0XHJcbiBcdFx0ZnVuY3Rpb24gYWRkQWxsVG9TZXQoYSwgYikge1xyXG4gXHRcdFx0Zm9yKHZhciBpID0gMDsgaSA8IGIubGVuZ3RoOyBpKyspIHtcclxuIFx0XHRcdFx0dmFyIGl0ZW0gPSBiW2ldO1xyXG4gXHRcdFx0XHRpZihhLmluZGV4T2YoaXRlbSkgPCAwKVxyXG4gXHRcdFx0XHRcdGEucHVzaChpdGVtKTtcclxuIFx0XHRcdH1cclxuIFx0XHR9XHJcbiBcdFxyXG4gXHRcdC8vIGF0IGJlZ2luIGFsbCB1cGRhdGVzIG1vZHVsZXMgYXJlIG91dGRhdGVkXHJcbiBcdFx0Ly8gdGhlIFwib3V0ZGF0ZWRcIiBzdGF0dXMgY2FuIHByb3BhZ2F0ZSB0byBwYXJlbnRzIGlmIHRoZXkgZG9uJ3QgYWNjZXB0IHRoZSBjaGlsZHJlblxyXG4gXHRcdHZhciBvdXRkYXRlZERlcGVuZGVuY2llcyA9IHt9O1xyXG4gXHRcdHZhciBvdXRkYXRlZE1vZHVsZXMgPSBbXTtcclxuIFx0XHR2YXIgYXBwbGllZFVwZGF0ZSA9IHt9O1xyXG4gXHRcdGZvcih2YXIgaWQgaW4gaG90VXBkYXRlKSB7XHJcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoaG90VXBkYXRlLCBpZCkpIHtcclxuIFx0XHRcdFx0dmFyIG1vZHVsZUlkID0gdG9Nb2R1bGVJZChpZCk7XHJcbiBcdFx0XHRcdHZhciByZXN1bHQgPSBnZXRBZmZlY3RlZFN0dWZmKG1vZHVsZUlkKTtcclxuIFx0XHRcdFx0aWYoIXJlc3VsdCkge1xyXG4gXHRcdFx0XHRcdGlmKG9wdGlvbnMuaWdub3JlVW5hY2NlcHRlZClcclxuIFx0XHRcdFx0XHRcdGNvbnRpbnVlO1xyXG4gXHRcdFx0XHRcdGhvdFNldFN0YXR1cyhcImFib3J0XCIpO1xyXG4gXHRcdFx0XHRcdHJldHVybiBjYWxsYmFjayhuZXcgRXJyb3IoXCJBYm9ydGVkIGJlY2F1c2UgXCIgKyBtb2R1bGVJZCArIFwiIGlzIG5vdCBhY2NlcHRlZFwiKSk7XHJcbiBcdFx0XHRcdH1cclxuIFx0XHRcdFx0aWYocmVzdWx0IGluc3RhbmNlb2YgRXJyb3IpIHtcclxuIFx0XHRcdFx0XHRob3RTZXRTdGF0dXMoXCJhYm9ydFwiKTtcclxuIFx0XHRcdFx0XHRyZXR1cm4gY2FsbGJhY2socmVzdWx0KTtcclxuIFx0XHRcdFx0fVxyXG4gXHRcdFx0XHRhcHBsaWVkVXBkYXRlW21vZHVsZUlkXSA9IGhvdFVwZGF0ZVttb2R1bGVJZF07XHJcbiBcdFx0XHRcdGFkZEFsbFRvU2V0KG91dGRhdGVkTW9kdWxlcywgcmVzdWx0WzBdKTtcclxuIFx0XHRcdFx0Zm9yKHZhciBtb2R1bGVJZCBpbiByZXN1bHRbMV0pIHtcclxuIFx0XHRcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocmVzdWx0WzFdLCBtb2R1bGVJZCkpIHtcclxuIFx0XHRcdFx0XHRcdGlmKCFvdXRkYXRlZERlcGVuZGVuY2llc1ttb2R1bGVJZF0pXHJcbiBcdFx0XHRcdFx0XHRcdG91dGRhdGVkRGVwZW5kZW5jaWVzW21vZHVsZUlkXSA9IFtdO1xyXG4gXHRcdFx0XHRcdFx0YWRkQWxsVG9TZXQob3V0ZGF0ZWREZXBlbmRlbmNpZXNbbW9kdWxlSWRdLCByZXN1bHRbMV1bbW9kdWxlSWRdKTtcclxuIFx0XHRcdFx0XHR9XHJcbiBcdFx0XHRcdH1cclxuIFx0XHRcdH1cclxuIFx0XHR9XHJcbiBcdFxyXG4gXHRcdC8vIFN0b3JlIHNlbGYgYWNjZXB0ZWQgb3V0ZGF0ZWQgbW9kdWxlcyB0byByZXF1aXJlIHRoZW0gbGF0ZXIgYnkgdGhlIG1vZHVsZSBzeXN0ZW1cclxuIFx0XHR2YXIgb3V0ZGF0ZWRTZWxmQWNjZXB0ZWRNb2R1bGVzID0gW107XHJcbiBcdFx0Zm9yKHZhciBpID0gMDsgaSA8IG91dGRhdGVkTW9kdWxlcy5sZW5ndGg7IGkrKykge1xyXG4gXHRcdFx0dmFyIG1vZHVsZUlkID0gb3V0ZGF0ZWRNb2R1bGVzW2ldO1xyXG4gXHRcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gJiYgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uaG90Ll9zZWxmQWNjZXB0ZWQpXHJcbiBcdFx0XHRcdG91dGRhdGVkU2VsZkFjY2VwdGVkTW9kdWxlcy5wdXNoKHtcclxuIFx0XHRcdFx0XHRtb2R1bGU6IG1vZHVsZUlkLFxyXG4gXHRcdFx0XHRcdGVycm9ySGFuZGxlcjogaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uaG90Ll9zZWxmQWNjZXB0ZWRcclxuIFx0XHRcdFx0fSk7XHJcbiBcdFx0fVxyXG4gXHRcclxuIFx0XHQvLyBOb3cgaW4gXCJkaXNwb3NlXCIgcGhhc2VcclxuIFx0XHRob3RTZXRTdGF0dXMoXCJkaXNwb3NlXCIpO1xyXG4gXHRcdHZhciBxdWV1ZSA9IG91dGRhdGVkTW9kdWxlcy5zbGljZSgpO1xyXG4gXHRcdHdoaWxlKHF1ZXVlLmxlbmd0aCA+IDApIHtcclxuIFx0XHRcdHZhciBtb2R1bGVJZCA9IHF1ZXVlLnBvcCgpO1xyXG4gXHRcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xyXG4gXHRcdFx0aWYoIW1vZHVsZSkgY29udGludWU7XHJcbiBcdFxyXG4gXHRcdFx0dmFyIGRhdGEgPSB7fTtcclxuIFx0XHJcbiBcdFx0XHQvLyBDYWxsIGRpc3Bvc2UgaGFuZGxlcnNcclxuIFx0XHRcdHZhciBkaXNwb3NlSGFuZGxlcnMgPSBtb2R1bGUuaG90Ll9kaXNwb3NlSGFuZGxlcnM7XHJcbiBcdFx0XHRmb3IodmFyIGogPSAwOyBqIDwgZGlzcG9zZUhhbmRsZXJzLmxlbmd0aDsgaisrKSB7XHJcbiBcdFx0XHRcdHZhciBjYiA9IGRpc3Bvc2VIYW5kbGVyc1tqXTtcclxuIFx0XHRcdFx0Y2IoZGF0YSk7XHJcbiBcdFx0XHR9XHJcbiBcdFx0XHRob3RDdXJyZW50TW9kdWxlRGF0YVttb2R1bGVJZF0gPSBkYXRhO1xyXG4gXHRcclxuIFx0XHRcdC8vIGRpc2FibGUgbW9kdWxlICh0aGlzIGRpc2FibGVzIHJlcXVpcmVzIGZyb20gdGhpcyBtb2R1bGUpXHJcbiBcdFx0XHRtb2R1bGUuaG90LmFjdGl2ZSA9IGZhbHNlO1xyXG4gXHRcclxuIFx0XHRcdC8vIHJlbW92ZSBtb2R1bGUgZnJvbSBjYWNoZVxyXG4gXHRcdFx0ZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xyXG4gXHRcclxuIFx0XHRcdC8vIHJlbW92ZSBcInBhcmVudHNcIiByZWZlcmVuY2VzIGZyb20gYWxsIGNoaWxkcmVuXHJcbiBcdFx0XHRmb3IodmFyIGogPSAwOyBqIDwgbW9kdWxlLmNoaWxkcmVuLmxlbmd0aDsgaisrKSB7XHJcbiBcdFx0XHRcdHZhciBjaGlsZCA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlLmNoaWxkcmVuW2pdXTtcclxuIFx0XHRcdFx0aWYoIWNoaWxkKSBjb250aW51ZTtcclxuIFx0XHRcdFx0dmFyIGlkeCA9IGNoaWxkLnBhcmVudHMuaW5kZXhPZihtb2R1bGVJZCk7XHJcbiBcdFx0XHRcdGlmKGlkeCA+PSAwKSB7XHJcbiBcdFx0XHRcdFx0Y2hpbGQucGFyZW50cy5zcGxpY2UoaWR4LCAxKTtcclxuIFx0XHRcdFx0fVxyXG4gXHRcdFx0fVxyXG4gXHRcdH1cclxuIFx0XHJcbiBcdFx0Ly8gcmVtb3ZlIG91dGRhdGVkIGRlcGVuZGVuY3kgZnJvbSBtb2R1bGUgY2hpbGRyZW5cclxuIFx0XHRmb3IodmFyIG1vZHVsZUlkIGluIG91dGRhdGVkRGVwZW5kZW5jaWVzKSB7XHJcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob3V0ZGF0ZWREZXBlbmRlbmNpZXMsIG1vZHVsZUlkKSkge1xyXG4gXHRcdFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XHJcbiBcdFx0XHRcdHZhciBtb2R1bGVPdXRkYXRlZERlcGVuZGVuY2llcyA9IG91dGRhdGVkRGVwZW5kZW5jaWVzW21vZHVsZUlkXTtcclxuIFx0XHRcdFx0Zm9yKHZhciBqID0gMDsgaiA8IG1vZHVsZU91dGRhdGVkRGVwZW5kZW5jaWVzLmxlbmd0aDsgaisrKSB7XHJcbiBcdFx0XHRcdFx0dmFyIGRlcGVuZGVuY3kgPSBtb2R1bGVPdXRkYXRlZERlcGVuZGVuY2llc1tqXTtcclxuIFx0XHRcdFx0XHR2YXIgaWR4ID0gbW9kdWxlLmNoaWxkcmVuLmluZGV4T2YoZGVwZW5kZW5jeSk7XHJcbiBcdFx0XHRcdFx0aWYoaWR4ID49IDApIG1vZHVsZS5jaGlsZHJlbi5zcGxpY2UoaWR4LCAxKTtcclxuIFx0XHRcdFx0fVxyXG4gXHRcdFx0fVxyXG4gXHRcdH1cclxuIFx0XHJcbiBcdFx0Ly8gTm90IGluIFwiYXBwbHlcIiBwaGFzZVxyXG4gXHRcdGhvdFNldFN0YXR1cyhcImFwcGx5XCIpO1xyXG4gXHRcclxuIFx0XHRob3RDdXJyZW50SGFzaCA9IGhvdFVwZGF0ZU5ld0hhc2g7XHJcbiBcdFxyXG4gXHRcdC8vIGluc2VydCBuZXcgY29kZVxyXG4gXHRcdGZvcih2YXIgbW9kdWxlSWQgaW4gYXBwbGllZFVwZGF0ZSkge1xyXG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGFwcGxpZWRVcGRhdGUsIG1vZHVsZUlkKSkge1xyXG4gXHRcdFx0XHRtb2R1bGVzW21vZHVsZUlkXSA9IGFwcGxpZWRVcGRhdGVbbW9kdWxlSWRdO1xyXG4gXHRcdFx0fVxyXG4gXHRcdH1cclxuIFx0XHJcbiBcdFx0Ly8gY2FsbCBhY2NlcHQgaGFuZGxlcnNcclxuIFx0XHR2YXIgZXJyb3IgPSBudWxsO1xyXG4gXHRcdGZvcih2YXIgbW9kdWxlSWQgaW4gb3V0ZGF0ZWREZXBlbmRlbmNpZXMpIHtcclxuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvdXRkYXRlZERlcGVuZGVuY2llcywgbW9kdWxlSWQpKSB7XHJcbiBcdFx0XHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcclxuIFx0XHRcdFx0dmFyIG1vZHVsZU91dGRhdGVkRGVwZW5kZW5jaWVzID0gb3V0ZGF0ZWREZXBlbmRlbmNpZXNbbW9kdWxlSWRdO1xyXG4gXHRcdFx0XHR2YXIgY2FsbGJhY2tzID0gW107XHJcbiBcdFx0XHRcdGZvcih2YXIgaSA9IDA7IGkgPCBtb2R1bGVPdXRkYXRlZERlcGVuZGVuY2llcy5sZW5ndGg7IGkrKykge1xyXG4gXHRcdFx0XHRcdHZhciBkZXBlbmRlbmN5ID0gbW9kdWxlT3V0ZGF0ZWREZXBlbmRlbmNpZXNbaV07XHJcbiBcdFx0XHRcdFx0dmFyIGNiID0gbW9kdWxlLmhvdC5fYWNjZXB0ZWREZXBlbmRlbmNpZXNbZGVwZW5kZW5jeV07XHJcbiBcdFx0XHRcdFx0aWYoY2FsbGJhY2tzLmluZGV4T2YoY2IpID49IDApIGNvbnRpbnVlO1xyXG4gXHRcdFx0XHRcdGNhbGxiYWNrcy5wdXNoKGNiKTtcclxuIFx0XHRcdFx0fVxyXG4gXHRcdFx0XHRmb3IodmFyIGkgPSAwOyBpIDwgY2FsbGJhY2tzLmxlbmd0aDsgaSsrKSB7XHJcbiBcdFx0XHRcdFx0dmFyIGNiID0gY2FsbGJhY2tzW2ldO1xyXG4gXHRcdFx0XHRcdHRyeSB7XHJcbiBcdFx0XHRcdFx0XHRjYihvdXRkYXRlZERlcGVuZGVuY2llcyk7XHJcbiBcdFx0XHRcdFx0fSBjYXRjaChlcnIpIHtcclxuIFx0XHRcdFx0XHRcdGlmKCFlcnJvcilcclxuIFx0XHRcdFx0XHRcdFx0ZXJyb3IgPSBlcnI7XHJcbiBcdFx0XHRcdFx0fVxyXG4gXHRcdFx0XHR9XHJcbiBcdFx0XHR9XHJcbiBcdFx0fVxyXG4gXHRcclxuIFx0XHQvLyBMb2FkIHNlbGYgYWNjZXB0ZWQgbW9kdWxlc1xyXG4gXHRcdGZvcih2YXIgaSA9IDA7IGkgPCBvdXRkYXRlZFNlbGZBY2NlcHRlZE1vZHVsZXMubGVuZ3RoOyBpKyspIHtcclxuIFx0XHRcdHZhciBpdGVtID0gb3V0ZGF0ZWRTZWxmQWNjZXB0ZWRNb2R1bGVzW2ldO1xyXG4gXHRcdFx0dmFyIG1vZHVsZUlkID0gaXRlbS5tb2R1bGU7XHJcbiBcdFx0XHRob3RDdXJyZW50UGFyZW50cyA9IFttb2R1bGVJZF07XHJcbiBcdFx0XHR0cnkge1xyXG4gXHRcdFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKTtcclxuIFx0XHRcdH0gY2F0Y2goZXJyKSB7XHJcbiBcdFx0XHRcdGlmKHR5cGVvZiBpdGVtLmVycm9ySGFuZGxlciA9PT0gXCJmdW5jdGlvblwiKSB7XHJcbiBcdFx0XHRcdFx0dHJ5IHtcclxuIFx0XHRcdFx0XHRcdGl0ZW0uZXJyb3JIYW5kbGVyKGVycik7XHJcbiBcdFx0XHRcdFx0fSBjYXRjaChlcnIpIHtcclxuIFx0XHRcdFx0XHRcdGlmKCFlcnJvcilcclxuIFx0XHRcdFx0XHRcdFx0ZXJyb3IgPSBlcnI7XHJcbiBcdFx0XHRcdFx0fVxyXG4gXHRcdFx0XHR9IGVsc2UgaWYoIWVycm9yKVxyXG4gXHRcdFx0XHRcdGVycm9yID0gZXJyO1xyXG4gXHRcdFx0fVxyXG4gXHRcdH1cclxuIFx0XHJcbiBcdFx0Ly8gaGFuZGxlIGVycm9ycyBpbiBhY2NlcHQgaGFuZGxlcnMgYW5kIHNlbGYgYWNjZXB0ZWQgbW9kdWxlIGxvYWRcclxuIFx0XHRpZihlcnJvcikge1xyXG4gXHRcdFx0aG90U2V0U3RhdHVzKFwiZmFpbFwiKTtcclxuIFx0XHRcdHJldHVybiBjYWxsYmFjayhlcnJvcik7XHJcbiBcdFx0fVxyXG4gXHRcclxuIFx0XHRob3RTZXRTdGF0dXMoXCJpZGxlXCIpO1xyXG4gXHRcdGNhbGxiYWNrKG51bGwsIG91dGRhdGVkTW9kdWxlcyk7XHJcbiBcdH1cclxuXG4gXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2UsXG4gXHRcdFx0aG90OiBob3RDcmVhdGVNb2R1bGUobW9kdWxlSWQpLFxuIFx0XHRcdHBhcmVudHM6IGhvdEN1cnJlbnRQYXJlbnRzLFxuIFx0XHRcdGNoaWxkcmVuOiBbXVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBob3RDcmVhdGVSZXF1aXJlKG1vZHVsZUlkKSk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gX193ZWJwYWNrX2hhc2hfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5oID0gZnVuY3Rpb24oKSB7IHJldHVybiBob3RDdXJyZW50SGFzaDsgfTtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gaG90Q3JlYXRlUmVxdWlyZSgwKSgwKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCA1ZjQ2ZTk5NzExNjYwYTY3ZmY1YiIsImltcG9ydCBDb21wb25lbnQgZnJvbSAnLi9Db21wb25lbnQnO1xuaW1wb3J0IHNldENvbmZpZyBmcm9tICcuL3NldENvbmZpZyc7XG5pbXBvcnQgeyBzaGFsbG93Q29tcGFyZSwgcmVjdXJzZUVxdWFsLCByZWN1cnNlT2JqZWN0LCByZXBsYWNlQ2hpbGQsIGhhc0NsYXNzIH0gZnJvbSAnLi91dGlscyc7XG5cbmV4cG9ydCB7XG4gIENvbXBvbmVudCxcbiAgc2V0Q29uZmlnLFxuICBzaGFsbG93Q29tcGFyZSxcbiAgcmVjdXJzZUVxdWFsLFxuICByZWN1cnNlT2JqZWN0LFxuICByZXBsYWNlQ2hpbGQsXG4gIGhhc0NsYXNzXG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2luZGV4LmpzIiwiaW1wb3J0IGNvbXBpbGVUZW1wbGF0ZSBmcm9tICcuL3RlbXBsYXRlJztcbmltcG9ydCB7YmluZEFjdGlvbkNyZWF0b3JzLCByZWN1cnNlT2JqZWN0fSBmcm9tICcuL3V0aWxzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29tcG9uZW50IHtcblxuICBjb25zdHJ1Y3RvcihvcHRpb24pIHtcbiAgICBjb25zdCBfdGhpcyA9IHRoaXM7XG5cbiAgICAvLyDliJ3mnJ/ljJblh6bnkIbjgIJcbiAgICBfdGhpcy5vcHRpb24gPSBvcHRpb247XG4gICAgX3RoaXMuaW5pdGlhbGl6ZS5iaW5kKF90aGlzKS5hcHBseShfdGhpcywgYXJndW1lbnRzKTtcbiAgICBfdGhpcy5vbkNsaWNrID0gX3RoaXMub25DbGljayA/IF90aGlzLm9uQ2xpY2suYmluZChfdGhpcykgOiBudWxsO1xuICAgIF90aGlzLmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChvcHRpb24gJiYgb3B0aW9uLnRhZ05hbWUgfHwgX3RoaXMudGFnTmFtZSB8fCAnZGl2Jyk7XG5cbiAgICAvLyByZW5kZXLkuZfjgaPlj5bjgorjgIJyZW5kZXJlcuOBjOWun+ihjOOBleOCjOOCi+OCiOOBhuOBq+OBl+OBvuOBmeOAglxuICAgIF90aGlzLnVwZGF0ZVJlbmRlciA9IF90aGlzLnJlbmRlcjtcbiAgICBfdGhpcy5yZW5kZXIgPSBfdGhpcy5yZW5kZXJlcjtcblxuICAgIC8vIOWIneWbnuWun+ihjOOBr3RlbXBsYXRl44Gu44Kz44Oz44OR44Kk44Or44GM6KGM44KP44KM44CBMuWbnuebruS7pemZjeOBr+OCreODo+ODg+OCt+ODpeOBjOS9v+OCj+OCjOOCi+OCiOOBhuOBq+OBl+OBvuOBmeOAglxuICAgIF90aGlzLnVwZGF0ZVRlbXBsYXRlID0gX3RoaXMuY3JlYXRlVGVtcGxhdGU7XG5cbiAgICByZXR1cm4gX3RoaXM7XG4gIH1cblxuXG4gIC8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbiAgICogcGxlYXNlIG92ZXJyaWRlXG4gICAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cblxuICAvLyBlbGVtZW5044Gu44K/44Kw44CCXG4gIHRhZ05hbWUgPSAnZGl2JztcblxuICAvLyBBY3Rpb25DcmVhdG9yc+OCkua4oeOBl+OBvuOBmeOAgmRpc3BhdGNo44Go57SQ44Gl44GN44GM6KGM44KP44KM44G+44GZ44CCXG4gIEFjdGlvbnMgPSB7fTtcblxuICAvLyB1bm1vdW505pmC44Gr44Oq44K744OD44OI44GV44KM44KL5rGO55So55qE44Gq5YWl44KM54mp44Gn44GZ44CCXG4gIHN0YXRlID0ge307XG5cbiAgLy8g5Yid5pyf5YyW5pmC44Gr5ZG844Gw44KM44G+44GZ44CCXG4gIGluaXRpYWxpemUoKSB7fVxuXG4gIC8vIOWIneWbnuODrOODs+ODgOODquODs+OCsOOBruOBv+OAgXJlbmRlcuWun+ihjOWJjeOBq+WRvOOBsOOCjOOBvuOBmeOAglxuICAvLyDov5TjgorlgKTjgYx0aGlzLmNoaWxkcmVu44Gr6L+95Yqg44GV44KM44G+44GZ44CCXG4gIC8vIHVubW91bnTjgYzlkbzjgbDjgozjgovjgajjgIF0aGlzLmNoaWxkcmVu44Gr5a++44GX5YaN5biw55qE44GrdW5tb3VudOOCkuWun+ihjOOBl+aOg+mZpOOBl+OBvuOBmeOAglxuICBhdHRhY2hDaGlsZHJlbigpIHt9XG5cbiAgLy8g6L+U44KK5YCk44Guc3RyaW5n44Gr5a++44GX44CBdW5kZXJzY29yZS5qc+OBrnRlbXBsYXRl44Gn44Kz44Oz44OR44Kk44Or44GX44G+44GZ44CCXG4gIC8vIGZ1bmN0aW9u44KS6L+U44GZ44GT44Go44KC44Gn44GN44CB44Kz44Oz44OR44Kk44Or5riI44Gu6Zai5pWw44KS6L+U44Gb44Gw44Kz44Oz44OR44Kk44Or5Yem55CG44KS55yB55Wl44Gn44GN44G+44GZ44CCXG4gIHRlbXBsYXRlKCkge1xuICAgIHJldHVybiAnJztcbiAgfVxuXG4gIC8vIOODrOODs+ODgOODquODs+OCsOavjuOBq+WRvOOBsOOCjOOAgWZhbHNl44KS6L+U44GZ44GocmVuZGVy44KS5a6f6KGM44GX44G+44Gb44KT44CCXG4gIC8vIOW8leaVsOOBq3ByZXZQcm9wc+OBqHByb3Bz44GM5rih44KK44G+44GZ44CCXG4gIC8vIHByb3Bz5q+U6LyD44Gn44Os44Oz44OA44Oq44Oz44Kw44GV44KM44Gq44GE44KI44GG44OB44Ol44O844OL44Oz44Kw44GZ44KL44Go44GN44Gr5L2/44GE44G+44GZ44CCXG4gIHNob3VsZENvbXBvbmVudFVwZGF0ZSgpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIC8vIHJlbmRlcuWun+ihjOaZguOAgURPTeOCkue1hOOBv+eri+OBpuOCi+OBruOBq+S9v+eUqOOBl+OBvuOBmeOAglxuICAvLyBzaG91bGRDb21wb25lbnRVcGRhdGXjgpLkvb/jgo/jgZrjgIFyZW5kZXLlhoXjgafjgoLjg6zjg7Pjg4Djg6rjg7PjgrDlrp/ooYzjgpLliLblvqHjgafjgY3jgb7jgZnjgILjgIJcbiAgLy8g6Ieq6Lqr44Gv5YaN44Os44Oz44OA44Oq44Oz44Kw44Gb44Ga44Gr5a2Q44Kz44Oz44Od44O844ON44Oz44OI44Gu44G/5YaN44Os44Oz44OA44Oq44Oz44Kw44GZ44KL44Gq44Gp44CB57Sw44GL44Gq44OB44Ol44O844OL44Oz44Kw44GM5Y+v6IO944Gn44GZ44CCXG4gIHJlbmRlcihwcm9wcykge1xuICAgIHRoaXMucmVuZGVyVGVtcGxhdGUocHJvcHMpO1xuICB9XG5cbiAgLy8g44Kv44Oq44OD44Kv44KS5Yem55CG44GX44Gf44GE44Go44GN44Gr5LiK5pu444GN44GX44Gm44GP44Gg44GV44GE44CCXG4gIC8vIG9uQ2xpY2soZSkge31cblxuICAvLyDliJ3lm57jg6zjg7Pjg4Djg6rjg7PjgrDjga7jgb/jgIFyZW5kZXLlrp/ooYzliY3jgavlkbzjgbDjgozjgb7jgZnjgIJcbiAgY29tcG9uZW50V2lsbE1vdW50KCkge31cblxuICAvLyDjg6zjg7Pjg4Djg6rjg7PjgrDmr47jgavjgIFyZW5kZXLlrp/ooYzliY3jgavlkbzjgbDjgozjgb7jgZnjgIJcbiAgLy8gUmVhY3TjgajpgZXjgaPjgaZtb3VudOaZguOBq+OCguWRvOOBsOOCjOOAgXRoaXMuaXNGaXJzdFJlbmRlcuOBp+WIneWbnuOBi+OBqeOBhuOBi+WIpOWumuOBp+OBjeOBvuOBmeOAglxuICBjb21wb25lbnRXaWxsVXBkYXRlKCkge31cblxuICAvLyDliJ3lm57jg6zjg7Pjg4Djg6rjg7PjgrDjga7jgb/jgIFyZW5kZXLlrp/ooYzlvozjgavlkbzjgbDjgozjgb7jgZnjgIJcbiAgY29tcG9uZW50RGlkTW91bnQoKSB7fVxuXG4gIC8vIOODrOODs+ODgOODquODs+OCsOavjuOBq+OAgXJlbmRlcuWun+ihjOW+jOOBq+WRvOOBsOOCjOOBvuOBmeOAglxuICAvLyBSZWFjdOOBqOmBleOBo+OBpm1vdW505pmC44Gr44KC5ZG844Gw44KM44CBdGhpcy5pc0ZpcnN0UmVuZGVy44Gn5Yid5Zue44GL44Gp44GG44GL5Yik5a6a44Gn44GN44G+44GZ44CCXG4gIGNvbXBvbmVudERpZFVwZGF0ZSgpIHt9XG5cbiAgLy8gdW5tb3VudOaZguOBq+WRvOOBsOOCjOOBvuOBmeOAglxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHt9XG5cblxuXG4gIC8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbiAgICogdGhpcyByZWZlcmVuY2VcbiAgICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuXG4gIC8vIHJlbmRlcuOBq+a4oeOBl+OBn+W8leaVsOOBjOS/neaMgeOBleOCjOOBvuOBmeOAglxuICBwcm9wcyA9IG51bGw7XG5cbiAgLy8gMeOBpOWJjeOBrnJlbmRlcuOBq+a4oeOBl+OBn+W8leaVsOOBjOS/neaMgeOBleOCjOOBvuOBmeOAglxuICBwcmV2UHJvcHMgPSBudWxsO1xuXG4gIC8vIOWIneWbnuODrOODs+ODgOODquODs+OCsOOBi+OBqeOBhuOBi+OBruODleODqeOCsFxuICBpc0ZpcnN0UmVuZGVyID0gdHJ1ZTtcblxuICAvLyBBY3Rpb25z44KSZGlzcGF0Y2jjgafjg6njg4Pjg5fjgZfjgZ/plqLmlbDjgYzkv53mjIHjgZXjgozjgb7jgZnjgIJcbiAgYWN0aW9ucyA9IG51bGw7XG5cbiAgLy8gYXR0YWNoQ2hpbGRyZW7jga7ov5TjgorlgKTjgYzkv53mjIHjgZXjgozjgb7jgZnjgIJcbiAgY2hpbGRyZW4gPSBudWxsO1xuXG4gIC8vIG5ld+OBp+OCpOODs+OCueOCv+ODs+OCueS9nOaIkOaZguOBruW8leaVsOOBjOS/neaMgeOBleOCjOOBvuOBmeOAglxuICBvcHRpb24gPSBudWxsO1xuXG5cblxuICAvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4gICAqIHV0aWxcbiAgICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuXG4gIC8vIOiHqui6q+OBrmlubmVySFRNTOOCknRlbXBsYXRl44Gn5pu05paw44GX44G+44GZ44CCXG4gIHJlbmRlclRlbXBsYXRlKHByb3BzKSB7XG4gICAgdGhpcy5lbC5pbm5lckhUTUwgPSB0aGlzLnVwZGF0ZVRlbXBsYXRlKHByb3BzKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIC8vIHRoaXMuY2hpbGRyZW7jgahkYXRhLXJlcGxhY2XopoHntKDjgpLlhaXjgozmm7/jgYjjgb7jgZnjgIJcbiAgcmVwbGFjZUNoaWxkcmVuKCl7XG4gICAgY29uc3QgcmVwbGFjZUxpc3QgPSB0aGlzLmVsLnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLXJlcGxhY2VdJyk7XG4gICAgZm9yKGxldCBpPTA7IGk8cmVwbGFjZUxpc3QubGVuZ3RoOyBpKyspe1xuICAgICAgY29uc3QgdGFyZ2V0ID0gcmVwbGFjZUxpc3RbaV07XG4gICAgICBjb25zdCBjaGlsZCA9IG5ldyBGdW5jdGlvbihgcmV0dXJuIHRoaXMuY2hpbGRyZW4uJHt0YXJnZXQuZGF0YXNldC5yZXBsYWNlfWApLmJpbmQodGhpcykoKTtcbiAgICAgIGlmKGNoaWxkKXtcbiAgICAgICAgdGhpcy5lbC5yZXBsYWNlQ2hpbGQoY2hpbGQuZWwsIHRhcmdldCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLy8gcXVlcnlTZWxlY3RvcuOBruOCqOOCpOODquOCouOCueOAglxuICAvLyB0aGlzLiQoc2VsZWN0b3IpIOOBruOCiOOBhuOBq+S9v+OBhOOBvuOBmeOAglxuICAkKHNlbGVjdG9yKXtcbiAgICByZXR1cm4gdGhpcy5lbC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKTtcbiAgfTtcblxuICAvLyDoh6rouqvjga7jgqTjg7Pjgrnjgr/jg7PjgrnjgpLkv53lrZjjgZfjgb7jgZnjgIJcbiAgLy8gaW5pdGlhbGl6ZeOAgeOBvuOBn+OBr2NvbnN0cnVjdG9y44Gn5a6f6KGM44GX44Gm44GK44GP44Go44CBXG4gIC8vIHRlbXBsYXRl44Gu44Kz44Oz44OR44Kk44Or57WQ5p6c44KS44K344Kn44Ki44GZ44KL44KI44GG44Gr44Gq44KK44G+44GZ44CCXG4gIGNyZWF0ZUluc3RhbmNlUmVmKFRhcmdldCl7XG4gICAgY29uc3QgX3RoaXMgPSB0aGlzO1xuICAgIGlmICh0eXBlb2YgVGFyZ2V0Lmluc3RhbmNlID09PSBcIm9iamVjdFwiKXtcbiAgICAgIF90aGlzLmluc3RhbmNlID0gVGFyZ2V0Lmluc3RhbmNlO1xuICAgIH1lbHNle1xuICAgICAgVGFyZ2V0Lmluc3RhbmNlID0gX3RoaXM7XG4gICAgfVxuICB9XG5cbiAgLy8gRE9N44KS5YmK6Zmk44GZ44KL44Go44GN44Gr5ZG844Gz5Ye644GX44Gm44GP44Gg44GV44GE44CCXG4gIC8vIFJlYWN044Go6YGV44Gj44Gm6Ieq5YiG44GndW5tb3VudOOCkuWun+ihjOOBmeOCi+W/heimgeOBjOOBguOCi+OBn+OCgeOAgVxuICAvLyB1bm1vdW5044KS5piO56S655qE44Gr5ZG844Gw44Gq44GE44GoY29tcG9uZW50V2lsbFVubW91bnTjgoLlrp/ooYzjgZXjgozjgb7jgZvjgpPjgIJcbiAgdW5tb3VudCgpIHtcbiAgICBjb25zdCBfdGhpcyA9IHRoaXM7XG4gICAgX3RoaXMuZWwucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChfdGhpcy5lbCk7XG4gICAgX3RoaXMuY29tcG9uZW50V2lsbFVubW91bnQoKTtcbiAgICByZWN1cnNlT2JqZWN0KF90aGlzLmNoaWxkcmVuLCBvYmogPT4gb2JqLmlzUHVyZWR1eENvbXBvbmVudCwgb2JqID0+IHtcbiAgICAgIG9iai51bm1vdW50KCk7XG4gICAgICByZXR1cm4gb2JqO1xuICAgIH0pO1xuICAgIGlmKF90aGlzLm9uQ2xpY2spe1xuICAgICAgX3RoaXMuZWwucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBfdGhpcy5vbkNsaWNrLCBmYWxzZSk7XG4gICAgfVxuICAgIF90aGlzLmFjdGlvbnMgPSBudWxsO1xuICAgIF90aGlzLmNoaWxkcmVuID0gbnVsbDtcbiAgICBfdGhpcy5wcm9wcyA9IG51bGw7XG4gICAgX3RoaXMucHJldlByb3BzID0gbnVsbDtcbiAgICBfdGhpcy5zdGF0ZSA9IHt9O1xuICAgIF90aGlzLmlzRmlyc3RSZW5kZXIgPSB0cnVlO1xuICAgIHJldHVybiBfdGhpcztcbiAgfVxuXG5cbiAgLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuICAgKiBwcml2YXRlXG4gICAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cblxuICBpc1B1cmVkdXhDb21wb25lbnQgPSB0cnVlO1xuICB0ZW1wbGF0ZUNhY2hlID0gbnVsbDtcblxuICBjcmVhdGVUZW1wbGF0ZShwcm9wcyl7XG4gICAgY29uc3QgX3RoaXMgPSB0aGlzLmluc3RhbmNlIHx8IHRoaXM7XG4gICAgaWYoIV90aGlzLnRlbXBsYXRlQ2FjaGUpe1xuICAgICAgY29uc3QgdGVtcGxhdGUgPSBfdGhpcy50ZW1wbGF0ZShwcm9wcyk7XG4gICAgICBfdGhpcy50ZW1wbGF0ZUNhY2hlID0gKHR5cGVvZiB0ZW1wbGF0ZSA9PT0gJ2Z1bmN0aW9uJykgPyB0ZW1wbGF0ZSA6IGNvbXBpbGVUZW1wbGF0ZSh0ZW1wbGF0ZSk7XG4gICAgfVxuICAgIF90aGlzLnVwZGF0ZVRlbXBsYXRlID0gX3RoaXMudGVtcGxhdGVDYWNoZTtcbiAgICByZXR1cm4gX3RoaXMudGVtcGxhdGVDYWNoZShwcm9wcyk7XG4gIH1cblxuICByZW5kZXJlcihuZXh0UHJvcHMpIHtcbiAgICBjb25zdCBfdGhpcyA9IHRoaXM7XG4gICAgY29uc3QgaXNGaXJzdFJlbmRlciA9IF90aGlzLmlzRmlyc3RSZW5kZXI7XG4gICAgX3RoaXMucHJldlByb3BzID0gX3RoaXMucHJvcHM7XG4gICAgX3RoaXMucHJvcHMgPSBuZXh0UHJvcHM7XG5cbiAgICBpZihpc0ZpcnN0UmVuZGVyKXtcbiAgICAgIGlmKF90aGlzLm9uQ2xpY2spe1xuICAgICAgICBfdGhpcy5lbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIF90aGlzLm9uQ2xpY2ssIGZhbHNlKTtcbiAgICAgIH1cbiAgICAgIF90aGlzLmFjdGlvbnMgPSBiaW5kQWN0aW9uQ3JlYXRvcnMoX3RoaXMuZGlzcGF0Y2gsIF90aGlzLmRpc3BhdGNoZXIsIF90aGlzLkFjdGlvbnMpO1xuICAgICAgX3RoaXMuY2hpbGRyZW4gPSBfdGhpcy5hdHRhY2hDaGlsZHJlbihuZXh0UHJvcHMpIHx8IHt9O1xuICAgICAgX3RoaXMuY29tcG9uZW50V2lsbE1vdW50KCk7XG4gICAgfVxuICAgIF90aGlzLmNvbXBvbmVudFdpbGxVcGRhdGUoKTtcblxuICAgIGlmKGlzRmlyc3RSZW5kZXIgfHwgX3RoaXMuc2hvdWxkQ29tcG9uZW50VXBkYXRlKF90aGlzLnByZXZQcm9wcywgbmV4dFByb3BzKSl7XG4gICAgICBfdGhpcy51cGRhdGVSZW5kZXIoLi4uYXJndW1lbnRzKTtcbiAgICB9XG5cbiAgICBpZihpc0ZpcnN0UmVuZGVyKXtcbiAgICAgIF90aGlzLmNvbXBvbmVudERpZE1vdW50KCk7XG4gICAgfVxuICAgIF90aGlzLmNvbXBvbmVudERpZFVwZGF0ZSgpO1xuXG4gICAgX3RoaXMuaXNGaXJzdFJlbmRlciA9IGZhbHNlO1xuXG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG5cbn1cblxuQ29tcG9uZW50LmV4dGVuZCA9IGZ1bmN0aW9uIGV4dGVuZChjb25maWcpe1xuICBjb25zdCBDbGFzcyA9IGZ1bmN0aW9uKCl7XG4gICAgQ2xhc3MucHJvdG90eXBlLl9fcHJvdG9fXyA9IENvbXBvbmVudC5wcm90b3R5cGU7XG4gICAgQ29tcG9uZW50LmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gIH07XG4gIENsYXNzLnByb3RvdHlwZSA9IGNvbmZpZztcbiAgcmV0dXJuIENsYXNzO1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9Db21wb25lbnQuanMiLCJjb25zdCBPYmplY3RLZXlzID0gT2JqZWN0LmtleXM7XG5cbmV4cG9ydCBmdW5jdGlvbiBiaW5kQWN0aW9uQ3JlYXRvcnMoZGlzcGF0Y2gsIGRpc3BhdGNoZXIsIGFjdGlvbnMpe1xuICBjb25zdCByZXQgPSB7fTtcbiAgT2JqZWN0S2V5cyhhY3Rpb25zKS5tYXAoKGtleSk9PntcbiAgICBpZiAodHlwZW9mIGFjdGlvbnNba2V5XSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgcmV0W2tleV0gPVxuICAgICAgICBkaXNwYXRjaCA/IGZ1bmN0aW9uKCl7IHJldHVybiBkaXNwYXRjaChhY3Rpb25zW2tleV0uYXBwbHkobnVsbCwgYXJndW1lbnRzKSk7IH1cbiAgICAgICAgOiBkaXNwYXRjaGVyID8gZGlzcGF0Y2hlcihhY3Rpb25zW2tleV0pXG4gICAgICAgIDogYWN0aW9uc1trZXldO1xuICAgIH1cbiAgfSk7XG4gIHJldHVybiByZXQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzaGFsbG93Q29tcGFyZShvYmpBLCBvYmpCKXtcbiAgcmV0dXJuICFyZWN1cnNlRXF1YWwob2JqQSwgb2JqQiwgMSk7XG59XG5cbi8qKlxuICogTW9kaWZpZWQgZnJvbSBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svZmJqcy9ibG9iL21hc3Rlci9wYWNrYWdlcy9mYmpzL3NyYy9jb3JlL3NoYWxsb3dFcXVhbC5qc1xuICovXG5leHBvcnQgZnVuY3Rpb24gcmVjdXJzZUVxdWFsKG9iakEsIG9iakIsIHJlY3Vyc2VDb3VudCkge1xuICBpZihvYmpBID09PSBvYmpCKXtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIGlmKHR5cGVvZiBvYmpBICE9PSAnb2JqZWN0JyB8fCBvYmpBID09PSBudWxsIHx8XG4gICAgdHlwZW9mIG9iakIgIT09ICdvYmplY3QnIHx8IG9iakIgPT09IG51bGwpe1xuICAgIHJldHVybiBvYmpBID09PSBvYmpCO1xuICB9XG5cbiAgY29uc3Qga2V5c0IgPSBPYmplY3RLZXlzKG9iakIpO1xuICBjb25zdCBrZXlzQSA9IE9iamVjdEtleXMob2JqQSk7XG5cbiAgaWYoa2V5c0EubGVuZ3RoICE9PSBrZXlzQi5sZW5ndGgpe1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGZvcihsZXQgaSA9IDA7IGkgPCBrZXlzQi5sZW5ndGg7IGkrKyl7XG4gICAgaWYoIW9iakEuaGFzT3duUHJvcGVydHkoa2V5c0JbaV0pKXtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBpZihyZWN1cnNlQ291bnQgJiYgIXJlY3Vyc2VFcXVhbChvYmpBW2tleXNCW2ldXSwgb2JqQltrZXlzQltpXV0sIHJlY3Vyc2VDb3VudCAtIDEpKXtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBpZihvYmpBW2tleXNCW2ldXSAhPT0gb2JqQltrZXlzQltpXV0pe1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0cnVlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVjdXJzZU9iamVjdChvYmosIGNoZWNrT2JqLCBpdGVyYXRlZSl7XG4gIGlmKHR5cGVvZiBvYmogIT09ICdvYmplY3QnIHx8IG9iaiA9PT0gbnVsbCl7XG4gICAgcmV0dXJuIGl0ZXJhdGVlKG9iaik7XG4gIH1cblxuICBPYmplY3RLZXlzKG9iaikubWFwKGtleSA9PiB7XG4gICAgaWYoY2hlY2tPYmogJiYgY2hlY2tPYmoob2JqW2tleV0pKXtcbiAgICAgIG9ialtrZXldID0gaXRlcmF0ZWUob2JqW2tleV0pO1xuICAgIH1lbHNle1xuICAgICAgcmVjdXJzZU9iamVjdChvYmpba2V5XSwgY2hlY2tPYmosIGl0ZXJhdGVlKTtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiBvYmo7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZXBsYWNlQ2hpbGQoY29udGFpbmVyLCBzZWxlY3RvciwgZWwpIHtcbiAgY29uc3QgdGFyZ2V0ID0gY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpO1xuICBpZih0YXJnZXQpIHtcbiAgICBjb250YWluZXIucmVwbGFjZUNoaWxkKGVsLCB0YXJnZXQpO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBoYXNDbGFzcyhldmVudCwgbmFtZSl7XG4gIHJldHVybiBldmVudC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKG5hbWUpO1xufVxuXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdXRpbHMuanMiLCJpbXBvcnQgQ29tcG9uZW50IGZyb20gJy4vQ29tcG9uZW50JztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc2V0Q29uZmlnKGNvbmZpZyA9IHt9KXtcbiAgaWYoY29uZmlnLmRpc3BhdGNoKXtcbiAgICBDb21wb25lbnQucHJvdG90eXBlLmRpc3BhdGNoID0gY29uZmlnLmRpc3BhdGNoO1xuICB9XG4gIGlmKGNvbmZpZy5kaXNwYXRjaGVyKXtcbiAgICBDb21wb25lbnQucHJvdG90eXBlLmRpc3BhdGNoZXIgPSBjb25maWcuZGlzcGF0Y2hlcjtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3NldENvbmZpZy5qcyIsIi8qKlxuICogTW9kaWZpZWQgdGVtcGxhdGUgbWV0aG9kIGZyb20gaHR0cHM6Ly9naXRodWIuY29tL2phc2hrZW5hcy91bmRlcnNjb3JlL2Jsb2IvbWFzdGVyL3VuZGVyc2NvcmUuanNcbiAqXG4gKiBVbmRlcnNjb3JlLmpzIDEuOC4zXG4gKiBodHRwOi8vdW5kZXJzY29yZWpzLm9yZ1xuICogKGMpIDIwMDktMjAxNSBKZXJlbXkgQXNoa2VuYXMsIERvY3VtZW50Q2xvdWQgYW5kIEludmVzdGlnYXRpdmUgUmVwb3J0ZXJzICYgRWRpdG9yc1xuICogVW5kZXJzY29yZSBtYXkgYmUgZnJlZWx5IGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBNSVQgbGljZW5zZS5cbiAqL1xuXG4vKipcbiAqIGVzY2FwZVxuICovXG5jb25zdCBlc2NhcGVzID0gWycmJywnPCcsJz4nLCdcIicsXCInXCIsJ2AnXTtcbmNvbnN0IGVzY2FwZU1hcCA9IHtcbiAgJyYnOiAnJmFtcDsnLFxuICAnPCc6ICcmbHQ7JyxcbiAgJz4nOiAnJmd0OycsXG4gICdcIic6ICcmcXVvdDsnLFxuICBcIidcIjogJyYjeDI3OycsXG4gICdgJzogJyYjeDYwOydcbn07XG5jb25zdCBzb3VyY2UgPSAnKD86JyArIGVzY2FwZXMuam9pbignfCcpICsgJyknO1xuY29uc3QgdGVzdFJlZ2V4cCA9IG5ldyBSZWdFeHAoc291cmNlKTtcbmNvbnN0IHJlcGxhY2VSZWdleHAgPSBuZXcgUmVnRXhwKHNvdXJjZSwgJ2cnKTtcbmZ1bmN0aW9uIGVzY2FwZXIobWF0Y2gpIHtcbiAgcmV0dXJuIGVzY2FwZU1hcFttYXRjaF07XG59XG5mdW5jdGlvbiBfZXNjYXBlKHN0cmluZykge1xuICBzdHJpbmcgPSBzdHJpbmcgPT0gbnVsbCA/ICcnIDogJycgKyBzdHJpbmc7XG4gIHJldHVybiB0ZXN0UmVnZXhwLnRlc3Qoc3RyaW5nKSA/IHN0cmluZy5yZXBsYWNlKHJlcGxhY2VSZWdleHAsIGVzY2FwZXIpIDogc3RyaW5nO1xufVxuXG4vKipcbiAqIHRlbXBsYXRlXG4gKi9cbmNvbnN0IHRlbXBsYXRlRXNjYXBlcyA9IHtcbiAgXCInXCIgOiBcIidcIixcbiAgJ1xcXFwnOiAnXFxcXCcsXG4gICdcXHInOiAncicsXG4gICdcXG4nOiAnbicsXG4gICdcXHUyMDI4JzogJ3UyMDI4JyxcbiAgJ1xcdTIwMjknOiAndTIwMjknXG59O1xuY29uc3QgdGVtcGxhdGVFc2NhcGVyID0gL1xcXFx8J3xcXHJ8XFxufFxcdTIwMjh8XFx1MjAyOS9nO1xuXG5mdW5jdGlvbiB0ZW1wbGF0ZUVzY2FwZUNoYXIobWF0Y2gpIHtcbiAgcmV0dXJuICdcXFxcJyArIHRlbXBsYXRlRXNjYXBlc1ttYXRjaF07XG59XG5cbmNvbnN0IG5vTWF0Y2ggPSAvKC4pXi87XG5cbmNvbnN0IG1hdGNoZXIgPSBuZXcgUmVnRXhwKFtcbiAgICAoLzwlLShbXFxzXFxTXSs/KSU+L2cgfHwgbm9NYXRjaCkuc291cmNlLFxuICAgICggLzwlPShbXFxzXFxTXSs/KSU+L2cgfHwgbm9NYXRjaCkuc291cmNlLFxuICAgICgvPCUoW1xcc1xcU10rPyklPi9nIHx8IG5vTWF0Y2gpLnNvdXJjZVxuICBdLmpvaW4oJ3wnKSArICd8JCcsICdnJyk7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHRlbXBsYXRlKHRleHQpIHtcbiAgbGV0IGluZGV4ID0gMDtcbiAgbGV0IHNvdXJjZSA9IFwiX19wKz0nXCI7XG4gIHRleHQucmVwbGFjZShtYXRjaGVyLCBmdW5jdGlvbiAobWF0Y2gsIGVzY2FwZSwgaW50ZXJwb2xhdGUsIGV2YWx1YXRlLCBvZmZzZXQpIHtcbiAgICBzb3VyY2UgKz0gdGV4dC5zbGljZShpbmRleCwgb2Zmc2V0KS5yZXBsYWNlKHRlbXBsYXRlRXNjYXBlciwgdGVtcGxhdGVFc2NhcGVDaGFyKTtcblxuICAgIGlmIChlc2NhcGUpIHtcbiAgICAgIHNvdXJjZSArPSBcIicrXFxuKChfX3Q9KFwiICsgZXNjYXBlICsgXCIpKT09bnVsbD8nJzpfZXNjYXBlKF9fdCkpK1xcbidcIjtcbiAgICB9IGVsc2UgaWYgKGludGVycG9sYXRlKSB7XG4gICAgICBzb3VyY2UgKz0gXCInK1xcbigoX190PShcIiArIGludGVycG9sYXRlICsgXCIpKT09bnVsbD8nJzpfX3QpK1xcbidcIjtcbiAgICB9IGVsc2UgaWYgKGV2YWx1YXRlKSB7XG4gICAgICBzb3VyY2UgKz0gXCInO1xcblwiICsgZXZhbHVhdGUgKyBcIlxcbl9fcCs9J1wiO1xuICAgIH1cbiAgICBpbmRleCA9IG9mZnNldCArIG1hdGNoLmxlbmd0aDtcbiAgICByZXR1cm4gbWF0Y2g7XG4gIH0pO1xuICBzb3VyY2UgPSBcInZhciBfX3QsX19wPScnLF9faj1BcnJheS5wcm90b3R5cGUuam9pbixwcmludD1mdW5jdGlvbigpe19fcCs9X19qLmNhbGwoYXJndW1lbnRzLCcnKTt9O1xcbndpdGgob2JqfHx7fSl7XFxuXCIgKyBzb3VyY2UgKyBcIic7XFxufVxcbnJldHVybiBfX3A7XFxuXCI7XG5cbiAgdHJ5IHtcbiAgICBjb25zdCBfcmVuZGVyID0gbmV3IEZ1bmN0aW9uKCdvYmonLCAnX2VzY2FwZScsIHNvdXJjZSk7XG4gICAgcmV0dXJuIGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgIHJldHVybiBfcmVuZGVyLmNhbGwodGhpcywgZGF0YSwgX2VzY2FwZSk7XG4gICAgfTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIGUuc291cmNlID0gc291cmNlO1xuICAgIHRocm93IGU7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy90ZW1wbGF0ZS5qcyJdLCJzb3VyY2VSb290IjoiIn0=