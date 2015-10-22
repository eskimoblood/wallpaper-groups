'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _ramda = require('ramda');

var _util = require('./util');

var rotate = _ramda.curry(function _rotate(theta, center, p) {
  var angleInRadians = theta * (Math.PI / 180);
  var sinTheta = Math.sin(angleInRadians);
  var cosTheta = Math.cos(angleInRadians);
  var oX = p.x - center.x;
  var oY = p.y - center.y;
  return {
    x: cosTheta * oX - sinTheta * oY + center.x,
    y: sinTheta * oX + cosTheta * oY + center.y
  };
});

var rotate90 = function rotate90(center) {
  return _util.mapTransform(rotate(90, center));
};
exports.rotate90 = rotate90;
var rotate120 = function rotate120(center) {
  return _util.mapTransform(rotate(120, center));
};
exports.rotate120 = rotate120;
var rotate180 = function rotate180(center) {
  return _util.mapTransform(rotate(180, center));
};
exports.rotate180 = rotate180;