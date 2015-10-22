'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _ramda = require('ramda');

var _util = require('./util');

var mirror = _ramda.curry(function _mirror(line, point) {
  var lineStart = line[0];
  var lineEnd = line[1];
  var dx = lineEnd.x - lineStart.x;
  var dy = lineEnd.y - lineStart.y;
  var a = (dx * dx - dy * dy) / (dx * dx + dy * dy);
  var b = 2 * dx * dy / (dx * dx + dy * dy);

  return {
    x: a * (point.x - lineStart.x) + b * (point.y - lineStart.y) + lineStart.x,
    y: b * (point.x - lineStart.x) - a * (point.y - lineStart.y) + lineStart.y
  };
});

exports.mirror = mirror;
var mirrorHorizontal = function mirrorHorizontal(width, height) {
  return _util.mapTransform(mirror([{ x: 0, y: height }, { x: 2 * width, y: height }]));
};

exports.mirrorHorizontal = mirrorHorizontal;
var mirrorVertical = function mirrorVertical(width, height) {
  return _util.mapTransform(mirror([{ x: width, y: 0 }, { x: width, y: 2 * height }]));
};

exports.mirrorVertical = mirrorVertical;
var mirrorDiagonalRL = function mirrorDiagonalRL(width, height) {
  return _util.mapTransform(mirror([{ x: 0, y: 0 }, { x: width, y: height }]));
};

exports.mirrorDiagonalRL = mirrorDiagonalRL;
var mirrorDiagonalLR = function mirrorDiagonalLR(width, height) {
  return _util.mapTransform(mirror([{ x: width, y: 0 }, { x: 0, y: height }]));
};

exports.mirrorDiagonalLR = mirrorDiagonalLR;
var mirrorHex = function mirrorHex(width, height) {
  return _util.mapTransform(mirror([{ x: width / 2, y: height / 2 }, {
    x: 0,
    y: height * 0.75
  }]));
};

exports.mirrorHex = mirrorHex;
var mirrorTriangle = function mirrorTriangle(width, height) {
  return _util.mapTransform(mirror([{ x: width / 3, y: 0 }, {
    x: width / 3 * 2,
    y: height
  }]));
};
exports.mirrorTriangle = mirrorTriangle;