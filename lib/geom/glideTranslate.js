'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _ramda = require('ramda');

var _util = require('./util');

exports['default'] = function (mirrorFn, offsetX, offsetY) {
  return _util.mapTransform(_ramda.curry(function (point) {
    var mirroredPoint = mirrorFn(point);
    return {
      x: mirroredPoint.x + offsetX,
      y: mirroredPoint.y + offsetY
    };
  }));
};

module.exports = exports['default'];