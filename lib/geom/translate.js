'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _ramda = require('ramda');

var translate1W2H = _ramda.curry(function (width, height, columns, i) {
  return {
    x: width * (i % columns),
    y: 2 * height * Math.floor(i / columns)
  };
});

exports.translate1W2H = translate1W2H;
var translate2W1H = _ramda.curry(function (width, height, columns, i) {
  return {
    x: 2 * width * (i % columns),
    y: height * Math.floor(i / columns)
  };
});

exports.translate2W1H = translate2W1H;
var translate2W2H = _ramda.curry(function (width, height, columns, i) {
  return {
    x: 2 * width * (i % columns),
    y: 2 * height * Math.floor(i / columns)
  };
});

exports.translate2W2H = translate2W2H;
var translateShifted = _ramda.curry(function (width, height, columns, i) {
  var offsetX = 0;
  if (Math.floor(i / columns) % 2) {
    offsetX = width / 2;
  }
  return {
    x: offsetX + width * (i % columns),
    y: height * Math.floor(i / columns)
  };
});

exports.translateShifted = translateShifted;
var translateHex = _ramda.curry(function (width, height, columns, i) {
  var offsetX = 0;
  if (Math.floor(i / columns) % 2) {
    offsetX = width / 2;
  }
  return {
    x: offsetX + width * (i % columns),
    y: 0.75 * height * Math.floor(i / columns)
  };
});
exports.translateHex = translateHex;