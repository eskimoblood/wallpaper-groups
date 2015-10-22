'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _ramda = require('ramda');

var mapOverPoints = _ramda.curry(function (pr, line) {
  return _ramda.map(pr, line);
});

// Take the last line from the collection, apply the transformation and append the result to the line collection
var mapTransform = _ramda.curry(function (pr, r) {
  return _ramda.append(_ramda.map(mapOverPoints(pr), _ramda.last(r)), r);
});

exports.mapTransform = mapTransform;
var split = function split(start, end, percentage) {
  return {
    x: start.x + (end.x - start.x) * percentage,
    y: start.y + (end.y - start.y) * percentage
  };
};

exports.split = split;
var rectCoords = function rectCoords(w, h) {
  return [{ x: 0, y: 0 }, { x: w, y: 0 }, { x: w, y: h }, { x: 0, y: h }];
};

exports.rectCoords = rectCoords;
var triangleCoords = function triangleCoords(w, h) {
  return [{ x: w / 2, y: 0 }, { x: w, y: h }, { x: 0, y: h }];
};

exports.triangleCoords = triangleCoords;
var rightTriangleCoords = function rightTriangleCoords(w, h) {
  return [{ x: w, y: 0 }, { x: w, y: h }, { x: 0, y: h }];
};
exports.rightTriangleCoords = rightTriangleCoords;