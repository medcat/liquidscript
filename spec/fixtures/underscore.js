(function() {
  var root, breaker, previousUnderscore, ArrayProto, ObjProto, FuncProto, push, slice, concat, toString, hasOwnProperty, nativeForEach, nativeMap, nativeReduce, nativeReduceRight, nativeFilter, nativeEvery, nativeSome, nativeIndexOf, nativeLastIndexOf, nativeIsArray, nativeKeys, nativeBind, _, each;
  root = this;
  breaker = {};
  previousUnderscore = root._;
  console = root;
  ArrayProto = Array.prototype;
  ObjProto = Object.prototype;
  FuncProto = Function.prototype;
  push = ArrayProto.push;
  slice = ArrayProto.slice;
  concat = ArrayProto.concat;
  toString = ObjProto.toString;
  hasOwnProperty = ObjProto.hasOwnProperty;
  nativeForEach = ArrayProto.forEach;
  nativeMap = ArrayProto.map;
  nativeReduce = ArrayProto.reduce;
  nativeReduceRight = ArrayProto.reduceRight;
  nativeFilter = ArrayProto.filter;
  nativeEvery = ArrayProto.every;
  nativeSome = ArrayProto.some;
  nativeIndexOf = ArrayProto.indexOf;
  nativeLastIndexOf = ArrayProto.lastIndexOf;
  nativeIsArray = Array.isArray;
  nativeKeys = Object.keys;
  nativeBind = FuncProto.bind;
  _ = function(obj) {
    if(obj instanceof _) {
      return obj;
    };
    if(! (this instanceof _)) {
      return new _(obj);
    };
    return this._wrapped = obj;
  };
  if(typeof exports !== 'undefined') {
    if(typeof root.module !== 'undefined' && root.module.exports) {
      exports = root.module.exports = _;
    };
    exports._ = _;
  } else {
    root._ = _;
  };
  _.VERSION = "1.6.0";
  each = _.each = _.forEach = function(obj, iterator, context) {
    var i, length, keys;
    if(obj === null) {
      return obj;
    };
    if(nativeForEach && obj.forEach === nativeForEach) {
      obj.forEach(iterator, context);
    }else if(obj.length === (+obj.length)) {
      i = 0;
      length = obj.length;
      for(i = 0; i < length; i++) {
        if(iterator.call(context, obj[i], i, obj) === breaker) {
          return null;
        };
      };
    } else {
      keys = _.keys(obj);
      length = keys.length;
      for(i = 0; i < length; i++) {
        if(iterator.call(context, obj[keys[i]], keys[i], obj) === breaker) {
          return null;
        };
      };
    };
    return obj;
  };
  return _.map = _.collect = function(obj, iterator, context) {
    var results;
    results = [];
    if(obj == null) {
      return results;
    };
    if(nativeMap && obj.map === nativeMap) {
      return obj.map(iterator, context);
    };
    each(obj, function(value, index, list) {
      return results.push(iterator.call(context, value, index, list));
    });
    return results;
  };
}).call();
